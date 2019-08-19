/**
 * <p>Contains information about an AWS account that is a member of an organization.</p>
 */
export interface _Account {
  /**
   * <p>The unique identifier (ID) of the account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an account ID string requires exactly 12 digits.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The email address associated with the AWS account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for this parameter is a string of characters that represents a standard Internet email address.</p>
   */
  Email?: string;

  /**
   * <p>The friendly name of the account.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>
   */
  Name?: string;

  /**
   * <p>The status of the account in the organization.</p>
   */
  Status?: "ACTIVE" | "SUSPENDED" | string;

  /**
   * <p>The method by which the account joined the organization.</p>
   */
  JoinedMethod?: "INVITED" | "CREATED" | string;

  /**
   * <p>The date the account became a part of the organization.</p>
   */
  JoinedTimestamp?: Date | string | number;
}

export interface _UnmarshalledAccount extends _Account {
  /**
   * <p>The date the account became a part of the organization.</p>
   */
  JoinedTimestamp?: Date;
}
