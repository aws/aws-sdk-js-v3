/**
 * Returns a list of all ActiveMQ users.
 */
export interface _UserSummary {
  /**
   * The type of change pending for the ActiveMQ user.
   */
  PendingChange?: "CREATE" | "UPDATE" | "DELETE" | string;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;
}

export type _UnmarshalledUserSummary = _UserSummary;
