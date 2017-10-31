import {Logging, LogLevel, LoggerOption, Member, SerializationModel, Shape, WritableLogger} from '@aws/types';
export class Logger implements WritableLogger {
    private readonly logLevels: [LogLevel];
    constructor(
        private readonly logger: any = console,
        private readonly pattern: string = '',//TODO
        logLevels: [LogLevel] = Logging.allLogLevels
    ) {
        this.logLevels = Array.isArray(logLevels) ? logLevels : [logLevels];
    }

    get log(): Function {
        return (content: string): void => {
            this.write(content, 'log');
        }
    }

    get warn(): Function {
        return (content: string): void => {
            this.write(content, 'warn');
        }
    }

    get error(): Function {
        return (content: string): void => {
            this.write(content, 'error');
        }
    }

    get info(): Function {
        return (content: string): void => {
            this.write(content, 'info');
        }
    }

    write(content: string, logLevel: LogLevel = 'log') {
        if (logLevel in this.logLevels) {
            (this.logger as Console)[logLevel](content);
        }
    }



    private static mapToShape(obj: any, shape: SerializationModel): any {
        if (shape.sensitive) return '***SensitiveInformation***';
        if (shape.type === 'structure') {
            //https://jsperf.com/array-reduce-vs-setting-array
            let structure: {[key: string]: any} = {};
            for (const key of Object.keys(obj)) {
                if (obj[key] === null || obj[key] === undefined || !(key in shape.members)) {
                    continue;
                }
                const value = obj[key];
                const member = shape.members[key];
                if (member.sensitive) {
                    structure[key] = '***SensitiveInformation***';
                } else {
                    structure[key] = Logger.mapToShape(value, member.shape);
                }
            }
            return structure;
        } else if (shape.type === 'list') {
            let list = [];
            const isSensitive = shape.member.sensitive;
            for (const value of obj) {
                if (isSensitive) {
                    list.push('***SensitiveInformation***')
                } else {
                    list.push(Logger.mapToShape(value, shape.member.shape));
                }
            }
            return list;
        } else if (shape.type === 'map') {
            let map: {[key: string]: any} = {};;
            for (const key of Object.keys(obj)) {
                for (const key of Object.keys(obj)) {
                    if (shape.value.sensitive) {
                        map[key] = '***SensitiveInformation***'
                    } else {
                        map[key] = Logger.mapToShape(obj[key], shape.value.shape);
                    }
                }
            }
            return map;
        } else {
            if (shape.sensitive) {
                return '***SensitiveInformation***'
            } 
            return shape;
        }
    }

    public static removeSensitiveParams(obj: any, member: Member): any {
        if (member.sensitive) return '***SensitiveInformation***';
        return Logger.mapToShape(obj, member.shape);
    }
}
