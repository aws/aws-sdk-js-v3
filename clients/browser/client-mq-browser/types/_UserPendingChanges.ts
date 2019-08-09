/**
 * Returns information about the status of the changes pending for the ActiveMQ user.
 */
export interface _UserPendingChanges {
  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string> | Iterable<string>;

  /**
   * Required. The type of change pending for the ActiveMQ user.
   */
  PendingChange?: "CREATE" | "UPDATE" | "DELETE" | string;
}

export interface _UnmarshalledUserPendingChanges extends _UserPendingChanges {
  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;
}
