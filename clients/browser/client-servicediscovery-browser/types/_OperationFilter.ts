/**
 * <p>A complex type that lets you select the operations that you want to list.</p>
 */
export interface _OperationFilter {
  /**
   * <p>Specify the operations that you want to get:</p> <ul> <li> <p> <b>NAMESPACE_ID</b>: Gets operations related to specified namespaces.</p> </li> <li> <p> <b>SERVICE_ID</b>: Gets operations related to specified services.</p> </li> <li> <p> <b>STATUS</b>: Gets operations based on the status of the operations: <code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p> </li> <li> <p> <b>TYPE</b>: Gets specified types of operation.</p> </li> <li> <p> <b>UPDATE_DATE</b>: Gets operations that changed status during a specified date/time range. </p> </li> </ul>
   */
  Name:
    | "NAMESPACE_ID"
    | "SERVICE_ID"
    | "STATUS"
    | "TYPE"
    | "UPDATE_DATE"
    | string;

  /**
   * <p>Specify values that are applicable to the value that you specify for <code>Name</code>: </p> <ul> <li> <p> <b>NAMESPACE_ID</b>: Specify one namespace ID.</p> </li> <li> <p> <b>SERVICE_ID</b>: Specify one service ID.</p> </li> <li> <p> <b>STATUS</b>: Specify one or more statuses: <code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p> </li> <li> <p> <b>TYPE</b>: Specify one or more of the following types: <code>CREATE_NAMESPACE</code>, <code>DELETE_NAMESPACE</code>, <code>UPDATE_SERVICE</code>, <code>REGISTER_INSTANCE</code>, or <code>DEREGISTER_INSTANCE</code>.</p> </li> <li> <p> <b>UPDATE_DATE</b>: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value.</p> </li> </ul>
   */
  Values: Array<string> | Iterable<string>;

  /**
   * <p>The operator that you want to use to determine whether an operation matches the specified value. Valid values for condition include:</p> <ul> <li> <p> <code>EQ</code>: When you specify <code>EQ</code> for the condition, you can specify only one value. <code>EQ</code> is supported for <code>NAMESPACE_ID</code>, <code>SERVICE_ID</code>, <code>STATUS</code>, and <code>TYPE</code>. <code>EQ</code> is the default condition and can be omitted.</p> </li> <li> <p> <code>IN</code>: When you specify <code>IN</code> for the condition, you can specify a list of one or more values. <code>IN</code> is supported for <code>STATUS</code> and <code>TYPE</code>. An operation must match one of the specified values to be returned in the response.</p> </li> <li> <p> <code>BETWEEN</code>: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value. <code>BETWEEN</code> is supported for <code>UPDATE_DATE</code>. </p> </li> </ul>
   */
  Condition?: "EQ" | "IN" | "BETWEEN" | string;
}

export interface _UnmarshalledOperationFilter extends _OperationFilter {
  /**
   * <p>Specify values that are applicable to the value that you specify for <code>Name</code>: </p> <ul> <li> <p> <b>NAMESPACE_ID</b>: Specify one namespace ID.</p> </li> <li> <p> <b>SERVICE_ID</b>: Specify one service ID.</p> </li> <li> <p> <b>STATUS</b>: Specify one or more statuses: <code>SUBMITTED</code>, <code>PENDING</code>, <code>SUCCEED</code>, or <code>FAIL</code>.</p> </li> <li> <p> <b>TYPE</b>: Specify one or more of the following types: <code>CREATE_NAMESPACE</code>, <code>DELETE_NAMESPACE</code>, <code>UPDATE_SERVICE</code>, <code>REGISTER_INSTANCE</code>, or <code>DEREGISTER_INSTANCE</code>.</p> </li> <li> <p> <b>UPDATE_DATE</b>: Specify a start date and an end date in Unix date/time format and Coordinated Universal Time (UTC). The start date must be the first value.</p> </li> </ul>
   */
  Values: Array<string>;
}
