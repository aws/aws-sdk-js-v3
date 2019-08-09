/**
 * The list of information about logs to be enabled for the specified broker.
 */
export interface _PendingLogs {
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   */
  Audit?: boolean;

  /**
   * Enables general logging.
   */
  General?: boolean;
}

export type _UnmarshalledPendingLogs = _PendingLogs;
