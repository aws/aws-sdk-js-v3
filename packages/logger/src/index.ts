import {Logging, LogLevel, LoggerOption, Member, SerializationModel, Shape, WritableLogger} from '@aws/types';
export class Logger implements WritableLogger {
    private logLevels: [LogLevel];
    constructor(
        private readonly logger: any = console,
        logLevels: [LogLevel]|LogLevel = Logging.allLogLevels,
        public readonly pattern?: string
    ) {
        this.logLevels = Array.isArray(logLevels) ? logLevels : [logLevels];
    }

    get log(): (content: string) => void {
        return (content: string): void => {
            this.write(content, 'log');
        }
    }

    get warn(): (content: string) => void {
        return (content: string): void => {
            this.write(content, 'warn');
        }
    }

    get error(): (content: string) => void {
        return (content: string): void => {
            this.write(content, 'error');
        }
    }

    get info(): (content: string) => void {
        return (content: string): void => {
            this.write(content, 'info');
        }
    }

    private write(content: string, logLevel: LogLevel = 'log') {
        if (this.logLevels.indexOf(logLevel) >= 0 && !!this.logger[logLevel]) {
            this.logger[logLevel](content);
        }
    }
}
