/**
 * <p>A complex type that contains information about a specified operation.</p>
 */
export interface _Operation {
  /**
   * <p>The ID of the operation that you want to get information about.</p>
   */
  Id?: string;

  /**
   * <p>The name of the operation that is associated with the specified ID.</p>
   */
  Type?:
    | "CREATE_NAMESPACE"
    | "DELETE_NAMESPACE"
    | "UPDATE_SERVICE"
    | "REGISTER_INSTANCE"
    | "DEREGISTER_INSTANCE"
    | string;

  /**
   * <p>The status of the operation. Values include the following:</p> <ul> <li> <p> <b>SUBMITTED</b>: This is the initial state immediately after you submit a request.</p> </li> <li> <p> <b>PENDING</b>: AWS Cloud Map is performing the operation.</p> </li> <li> <p> <b>SUCCESS</b>: The operation succeeded.</p> </li> <li> <p> <b>FAIL</b>: The operation failed. For the failure reason, see <code>ErrorMessage</code>.</p> </li> </ul>
   */
  Status?: "SUBMITTED" | "PENDING" | "SUCCESS" | "FAIL" | string;

  /**
   * <p>If the value of <code>Status</code> is <code>FAIL</code>, the reason that the operation failed.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The code associated with <code>ErrorMessage</code>. Values for <code>ErrorCode</code> include the following:</p> <ul> <li> <p> <code>ACCESS_DENIED</code> </p> </li> <li> <p> <code>CANNOT_CREATE_HOSTED_ZONE</code> </p> </li> <li> <p> <code>EXPIRED_TOKEN</code> </p> </li> <li> <p> <code>HOSTED_ZONE_NOT_FOUND</code> </p> </li> <li> <p> <code>INTERNAL_FAILURE</code> </p> </li> <li> <p> <code>INVALID_CHANGE_BATCH</code> </p> </li> <li> <p> <code>THROTTLED_REQUEST</code> </p> </li> </ul>
   */
  ErrorCode?: string;

  /**
   * <p>The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>The date and time that the value of <code>Status</code> changed to the current value, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>UpdateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  UpdateDate?: Date | string | number;

  /**
   * <p>The name of the target entity that is associated with the operation:</p> <ul> <li> <p> <b>NAMESPACE</b>: The namespace ID is returned in the <code>ResourceId</code> property.</p> </li> <li> <p> <b>SERVICE</b>: The service ID is returned in the <code>ResourceId</code> property.</p> </li> <li> <p> <b>INSTANCE</b>: The instance ID is returned in the <code>ResourceId</code> property.</p> </li> </ul>
   */
  Targets?:
    | { [key in "NAMESPACE" | "SERVICE" | "INSTANCE" | string]: string }
    | Iterable<["NAMESPACE" | "SERVICE" | "INSTANCE" | string, string]>;
}

export interface _UnmarshalledOperation extends _Operation {
  /**
   * <p>The date and time that the request was submitted, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the value of <code>Status</code> changed to the current value, in Unix date/time format and Coordinated Universal Time (UTC). The value of <code>UpdateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  UpdateDate?: Date;

  /**
   * <p>The name of the target entity that is associated with the operation:</p> <ul> <li> <p> <b>NAMESPACE</b>: The namespace ID is returned in the <code>ResourceId</code> property.</p> </li> <li> <p> <b>SERVICE</b>: The service ID is returned in the <code>ResourceId</code> property.</p> </li> <li> <p> <b>INSTANCE</b>: The instance ID is returned in the <code>ResourceId</code> property.</p> </li> </ul>
   */
  Targets?: { [key in "NAMESPACE" | "SERVICE" | "INSTANCE" | string]: string };
}
