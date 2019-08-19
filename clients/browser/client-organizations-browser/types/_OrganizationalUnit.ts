/**
 * <p>Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.</p>
 */
export interface _OrganizationalUnit {
  /**
   * <p>The unique identifier (ID) associated with this OU.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> for an organizational unit ID string requires "ou-" followed by from 4 to 32 lower-case letters or digits (the ID of the root that contains the OU) followed by a second "-" dash and from 8 to 32 additional lower-case letters or digits.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this OU.</p> <p>For more information about ARNs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions.html#orgs-permissions-arns">ARN Formats Supported by Organizations</a> in the <i>AWS Organizations User Guide</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The friendly name of this OU.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of any of the characters in the ASCII character range.</p>
   */
  Name?: string;
}

export type _UnmarshalledOrganizationalUnit = _OrganizationalUnit;
