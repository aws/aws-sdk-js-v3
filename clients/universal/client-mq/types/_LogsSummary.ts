import { _PendingLogs, _UnmarshalledPendingLogs } from "./_PendingLogs";

/**
 * The list of information about logs currently enabled and pending to be deployed for the specified broker.
 */
export interface _LogsSummary {
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   */
  Audit?: boolean;

  /**
   * The location of the CloudWatch Logs log group where audit logs are sent.
   */
  AuditLogGroup?: string;

  /**
   * Enables general logging.
   */
  General?: boolean;

  /**
   * The location of the CloudWatch Logs log group where general logs are sent.
   */
  GeneralLogGroup?: string;

  /**
   * The list of information about logs pending to be deployed for the specified broker.
   */
  Pending?: _PendingLogs;
}

export interface _UnmarshalledLogsSummary extends _LogsSummary {
  /**
   * The list of information about logs pending to be deployed for the specified broker.
   */
  Pending?: _UnmarshalledPendingLogs;
}
