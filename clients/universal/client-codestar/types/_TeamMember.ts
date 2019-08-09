/**
 * <p>Information about a team member in a project.</p>
 */
export interface _TeamMember {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string;

  /**
   * <p>The role assigned to the user in the project. Project roles have different levels of access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with Teams</a> in the <i>AWS CodeStar User Guide</i>. </p>
   */
  projectRole: string;

  /**
   * <p>Whether the user is allowed to remotely access project resources using an SSH public/private key pair.</p>
   */
  remoteAccessAllowed?: boolean;
}

export type _UnmarshalledTeamMember = _TeamMember;
