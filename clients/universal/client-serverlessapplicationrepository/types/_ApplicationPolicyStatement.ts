/**
 * <p>Policy statement applied to the application.</p>
 */
export interface _ApplicationPolicyStatement {
  /**
   * <p>For the list of actions supported for this operation, see <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
   *  Permissions</a>.</p>
   */
  Actions: Array<string> | Iterable<string>;

  /**
   * <p>An array of AWS account IDs, or * to make the application public.</p>
   */
  Principals: Array<string> | Iterable<string>;

  /**
   * <p>A unique ID for the statement.</p>
   */
  StatementId?: string;
}

export interface _UnmarshalledApplicationPolicyStatement
  extends _ApplicationPolicyStatement {
  /**
   * <p>For the list of actions supported for this operation, see <a href="https://docs.aws.amazon.com/serverlessrepo/latest/devguide/access-control-resource-based.html#application-permissions">Application
   *  Permissions</a>.</p>
   */
  Actions: Array<string>;

  /**
   * <p>An array of AWS account IDs, or * to make the application public.</p>
   */
  Principals: Array<string>;
}
