/**
 * <p>Contains information about a policy, but does not include the content. To see the content of a policy, see <a>DescribePolicy</a>.</p>
 */
export interface _PolicySummary {
  /**
   * <p>The unique identifier (ID) of the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for a policy ID string requires "p-" followed by from 8 to 128 lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The friendly name of the policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>
   */
  Name?: string;

  /**
   * <p>The description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>The type of policy.</p>
   */
  Type?: "SERVICE_CONTROL_POLICY" | string;

  /**
   * <p>A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.</p>
   */
  AwsManaged?: boolean;
}

export type _UnmarshalledPolicySummary = _PolicySummary;
