/**
 * Information about a logger
 */
export interface _Logger {
  /**
   * The component that will be subject to logging.
   */
  Component: "GreengrassSystem" | "Lambda" | string;

  /**
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string;

  /**
   * The level of the logs.
   */
  Level: "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | string;

  /**
   * The amount of file space, in KB, to use if the local file system is used for logging purposes.
   */
  Space?: number;

  /**
   * The type of log output which will be used.
   */
  Type: "FileSystem" | "AWSCloudWatch" | string;
}

export type _UnmarshalledLogger = _Logger;
