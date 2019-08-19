/**
 * <p>A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFormation stack-based queries. The error occurs if the CloudFormation stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that AWS Resource Groups could not complete the operation, but the resulting group might have no member resources.</p>
 */
export interface _QueryError {
  /**
   * <p>Possible values are <code>CLOUDFORMATION_STACK_INACTIVE</code> and <code>CLOUDFORMATION_STACK_NOT_EXISTING</code>.</p>
   */
  ErrorCode?:
    | "CLOUDFORMATION_STACK_INACTIVE"
    | "CLOUDFORMATION_STACK_NOT_EXISTING"
    | string;

  /**
   * <p>A message that explains the <code>ErrorCode</code> value. Messages might state that the specified CloudFormation stack does not exist (or no longer exists). For <code>CLOUDFORMATION_STACK_INACTIVE</code>, the message typically states that the CloudFormation stack has a status that is not (or no longer) active, such as <code>CREATE_FAILED</code>.</p>
   */
  Message?: string;
}

export type _UnmarshalledQueryError = _QueryError;
