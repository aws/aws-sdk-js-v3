import { Logger } from "@smithy/types";

/**
 * Can be provided to the SDK to log all messages at or above
 * the given level.
 *
 * @public
 */
export class LogLevel implements Logger {
  private static LEVELS = ["trace", "debug", "info", "warn", "error"];

  private readonly level: number = 5;

  /**
   * @param minimum - minimum log level filter.
   * @param logger - to which messages are forwarded. Default console.
   */
  public constructor(private minimum: keyof Logger, private logger: Logger = console) {
    const index = LogLevel.LEVELS.indexOf(minimum);
    if (index === -1) {
      throw new Error(`Log level must be one of ${LogLevel.LEVELS.join(", ")}`);
    }
    this.level = index;
  }

  public trace(...args: any[]) {
    this.level <= 0 && this.logger.trace?.(...args);
  }

  public debug(...args: any[]) {
    this.level <= 1 && this.logger.debug?.(...args);
  }

  public info(...args: any[]) {
    this.level <= 2 && this.logger.info?.(...args);
  }

  public warn(...args: any[]) {
    this.level <= 3 && this.logger.warn?.(...args);
  }

  public error(...args: any[]) {
    this.level <= 4 && this.logger.error?.(...args);
  }
}
