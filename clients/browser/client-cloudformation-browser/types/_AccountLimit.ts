/**
 * <p>The AccountLimit data type. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface _AccountLimit {
  /**
   * <p>The name of the account limit.</p>
   */
  Name?: string;

  /**
   * <p>The value that is associated with the account limit name.</p>
   */
  Value?: number;
}

export type _UnmarshalledAccountLimit = _AccountLimit;
