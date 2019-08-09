import { _Logger, _UnmarshalledLogger } from "./_Logger";

/**
 * Information about a logger definition version.
 */
export interface _LoggerDefinitionVersion {
  /**
   * A list of loggers.
   */
  Loggers?: Array<_Logger> | Iterable<_Logger>;
}

export interface _UnmarshalledLoggerDefinitionVersion
  extends _LoggerDefinitionVersion {
  /**
   * A list of loggers.
   */
  Loggers?: Array<_UnmarshalledLogger>;
}
