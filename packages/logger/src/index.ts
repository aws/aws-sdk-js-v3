import {
    LogLevel,
    LoggerOptions,
    Logger as LoggerInterface
} from '@aws/types';

type Operations = 'log'|'info'|'warn'|'error';

export class Logger implements LoggerInterface {
    private static readonly logLevelPriority = {
        all:    1,
        log:    1,
        info:   2,
        warn:   3,
        error:  4,
        off:    5,
    }
    private readonly logger: LoggerInterface;
    private readonly logLevel: LogLevel;
    constructor(readonly options: LoggerOptions) {
        let {logger, logLevel} = options;
        this.logLevel = logLevel || 'all';
        this.logger = logger || console;
    }

    log(content: string): void {
        this.write(content, 'log');
    }

    info(content: string): void {
        this.write(content, 'info');
    }

    warn(content: string): void {
        this.write(content, 'warn');
    }

    error(content: string): void {
        this.write(content, 'error');
    }

    private write(content: string, logLevel: Operations) {
        if (Logger.logLevelPriority[logLevel] >= Logger.logLevelPriority[this.logLevel]) {
            this.logger[logLevel](content);
        }
    }
}
