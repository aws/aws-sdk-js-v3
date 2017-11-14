import {
    LogLevel,
    LoggerOption,
    WritableLogger
} from '@aws/types';

export class Logger implements WritableLogger {
    private logger: any;
    private logLevels: [LogLevel];
    constructor(readonly option: LoggerOption) {
        let {logger, logLevel} = option;
        this.logLevels = this.getLogLevels(logLevel || LogLevel.All); 
        this.logger = logger || console;
    }

    log(content: string): void {
        this.write(content, LogLevel.Log);
    }

    info(content: string): void {
        this.write(content, LogLevel.Info);
    }

    warn(content: string): void {
        this.write(content, LogLevel.Warn);
    }

    error(content: string): void {
        this.write(content, LogLevel.Error);
    }

    private write(content: string, logLevel: LogLevel = LogLevel.Log) {
        if (this.logLevels.indexOf(logLevel) >= 0 && !!this.logger[logLevel]) {
            this.logger[logLevel](content);
        }
    }

    private getLogLevels(logLevel: LogLevel): [LogLevel] {
        const allLogLevels: [LogLevel] = [LogLevel.Log, LogLevel.Info, LogLevel.Warn, LogLevel.Error];
        return Array.prototype.slice.call(allLogLevels, allLogLevels.indexOf(logLevel), allLogLevels.length); 
    }
}
