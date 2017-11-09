import {Formatter} from './Formatter';
import {
    LogFormatter,
    Logging,
    LogLevel,
    LoggerOption,
    WritableLogger
} from '@aws/types';

export class Logger implements WritableLogger {
    private logger: any;
    private logLevels: [LogLevel];
    public formatter?: LogFormatter;
    constructor(readonly option: LoggerOption) {
        let {logger, logLevels, pattern} = option;
        logLevels = logLevels || Logging.allLogLevels; 
        this.logger = logger || console;
        this.logLevels = Array.isArray(logLevels) ? logLevels : [logLevels];
        this.formatter = pattern ? new Formatter(pattern) : undefined;
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
