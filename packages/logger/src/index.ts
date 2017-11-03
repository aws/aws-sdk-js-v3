import {Logging, LogLevel, LoggerOption, Member, SerializationModel, Shape, WritableLogger} from '@aws/types';
export class Logger implements WritableLogger {
    constructor(
        private readonly logger: any = console,
        private readonly logLevels: [LogLevel] = Logging.allLogLevels,
        public readonly pattern?: string
    ) {}

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

   private write(content: string, logLevel: LogLevel = 'log') {//hashset?
        if (this.logLevels.indexOf(logLevel) >= 0 && !!this.logger[logLevel]) {
            this.logger[logLevel](content);
        }
    }
}

export class Formatter {
    constructor(private readonly pattern?: string){}
    
    format(stats: any): string {
        return '';
    }
}
