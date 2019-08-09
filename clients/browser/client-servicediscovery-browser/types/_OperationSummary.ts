/**
 * <p>A complex type that contains information about an operation that matches the criteria that you specified in a <a>ListOperations</a> request.</p>
 */
export interface _OperationSummary {
  /**
   * <p>The ID for an operation.</p>
   */
  Id?: string;

  /**
   * <p>The status of the operation. Values include the following:</p> <ul> <li> <p> <b>SUBMITTED</b>: This is the initial state immediately after you submit a request.</p> </li> <li> <p> <b>PENDING</b>: AWS Cloud Map is performing the operation.</p> </li> <li> <p> <b>SUCCESS</b>: The operation succeeded.</p> </li> <li> <p> <b>FAIL</b>: The operation failed. For the failure reason, see <code>ErrorMessage</code>.</p> </li> </ul>
   */
  Status?: "SUBMITTED" | "PENDING" | "SUCCESS" | "FAIL" | string;
}

export type _UnmarshalledOperationSummary = _OperationSummary;
