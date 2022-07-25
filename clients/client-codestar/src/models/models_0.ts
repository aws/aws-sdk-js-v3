// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CodeStarServiceException as __BaseException } from "./CodeStarServiceException";

export interface AssociateTeamMemberRequest {
  /**
   * <p>The ID of the project to which you will add the IAM user.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested the team
   *       member association to the project. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar
   *       project.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The AWS CodeStar project role that will apply to this user. This role determines what actions
   *       a user can take in an AWS CodeStar project.</p>
   */
  projectRole: string | undefined;

  /**
   * <p>Whether the team member is allowed to use an SSH public/private key pair to remotely
   *       access project resources, for example Amazon EC2 instances.</p>
   */
  remoteAccessAllowed?: boolean;
}

export interface AssociateTeamMemberResult {
  /**
   * <p>The user- or system-generated token from the initial request that can be used to repeat
   *       the request.</p>
   */
  clientRequestToken?: string;
}

/**
 * <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The service role is not valid.</p>
 */
export class InvalidServiceRoleException extends __BaseException {
  readonly name: "InvalidServiceRoleException" = "InvalidServiceRoleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidServiceRoleException, __BaseException>) {
    super({
      name: "InvalidServiceRoleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidServiceRoleException.prototype);
  }
}

/**
 * <p>A resource limit has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>Project configuration information is required but not specified.</p>
 */
export class ProjectConfigurationException extends __BaseException {
  readonly name: "ProjectConfigurationException" = "ProjectConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectConfigurationException, __BaseException>) {
    super({
      name: "ProjectConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectConfigurationException.prototype);
  }
}

/**
 * <p>The specified AWS CodeStar project was not found.</p>
 */
export class ProjectNotFoundException extends __BaseException {
  readonly name: "ProjectNotFoundException" = "ProjectNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectNotFoundException, __BaseException>) {
    super({
      name: "ProjectNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectNotFoundException.prototype);
  }
}

/**
 * <p>The team member is already associated with a role in this project.</p>
 */
export class TeamMemberAlreadyAssociatedException extends __BaseException {
  readonly name: "TeamMemberAlreadyAssociatedException" = "TeamMemberAlreadyAssociatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TeamMemberAlreadyAssociatedException, __BaseException>) {
    super({
      name: "TeamMemberAlreadyAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TeamMemberAlreadyAssociatedException.prototype);
  }
}

/**
 * <p>The specified input is either not valid, or it could not be validated.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
 *       with the project request will be uploaded after project creation.</p>
 */
export interface CodeCommitCodeDestination {
  /**
   * <p>The name of the AWS CodeCommit repository to be created in AWS CodeStar.</p>
   */
  name: string | undefined;
}

/**
 * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
 *       project request will be uploaded after project creation.</p>
 */
export interface GitHubCodeDestination {
  /**
   * <p>Name of the GitHub repository to be created in AWS CodeStar.</p>
   */
  name: string | undefined;

  /**
   * <p>Description for the GitHub repository to be created in AWS CodeStar. This description displays in
   *       GitHub after the repository is created.</p>
   */
  description?: string;

  /**
   * <p>The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.</p>
   */
  type: string | undefined;

  /**
   * <p>The GitHub username for the owner of the GitHub repository to be created in AWS CodeStar. If this repository should
   *       be owned by a GitHub organization, provide its name.</p>
   */
  owner: string | undefined;

  /**
   * <p>Whether the GitHub repository is to be a private repository.</p>
   */
  privateRepository: boolean | undefined;

  /**
   * <p>Whether to enable issues for the GitHub repository.</p>
   */
  issuesEnabled: boolean | undefined;

  /**
   * <p>The GitHub user's personal access token for the GitHub repository.</p>
   */
  token: string | undefined;
}

/**
 * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
 *       source code files provided with the project request are placed in the repository.</p>
 */
export interface CodeDestination {
  /**
   * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
   *       with the project request will be uploaded after project creation.</p>
   */
  codeCommit?: CodeCommitCodeDestination;

  /**
   * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
   *       project request will be uploaded after project creation.</p>
   */
  gitHub?: GitHubCodeDestination;
}

/**
 * <p>The Amazon S3 location where the source code files provided with the project
 *       request are stored.</p>
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket name where the source code files provided with the project
   *       request are stored.</p>
   */
  bucketName?: string;

  /**
   * <p>The Amazon S3 object key where the source code files provided with the project
   *       request are stored.</p>
   */
  bucketKey?: string;
}

/**
 * <p>The location where the source code files provided with the project request are
 *       stored. AWS CodeStar retrieves the files during project creation.</p>
 */
export interface CodeSource {
  /**
   * <p>Information about the Amazon S3 location where the source code files provided with the
   *       project request are stored. </p>
   */
  s3: S3Location | undefined;
}

/**
 * <p>Location and destination information about the source code files provided with the
 *       project request. The source code is uploaded to the new project source repository after
 *       project creation.</p>
 */
export interface Code {
  /**
   * <p>The location where the source code files provided with the project request are
   *       stored. AWS CodeStar retrieves the files during project creation.</p>
   */
  source: CodeSource | undefined;

  /**
   * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
   *       source code files provided with the project request are placed in the repository.</p>
   */
  destination: CodeDestination | undefined;
}

/**
 * <p>The Amazon S3 location where the toolchain template file provided with the
 *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
 */
export interface ToolchainSource {
  /**
   * <p>The Amazon S3 bucket where the toolchain template file provided with the project
   *       request is stored.</p>
   */
  s3: S3Location | undefined;
}

/**
 * <p>The toolchain template file provided with the project request. AWS CodeStar uses
 *       the template to provision the toolchain stack in AWS CloudFormation.</p>
 */
export interface Toolchain {
  /**
   * <p>The Amazon S3 location where the toolchain template file provided with the
   *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
   */
  source: ToolchainSource | undefined;

  /**
   * <p>The service role ARN for AWS CodeStar to use for the toolchain template during stack
   *       provisioning.</p>
   */
  roleArn?: string;

  /**
   * <p>The list of parameter overrides to be passed into the toolchain template during stack
   *       provisioning, if any.</p>
   */
  stackParameters?: Record<string, string>;
}

export interface CreateProjectRequest {
  /**
   * <p>The display name for the project to be created in AWS CodeStar.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the project to be created in AWS CodeStar.</p>
   */
  id: string | undefined;

  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A list of the Code objects submitted with the project request. If this
   *       parameter is specified, the request must also include the toolchain parameter.</p>
   */
  sourceCode?: Code[];

  /**
   * <p>The name of the toolchain template file submitted with the project request. If
   *       this parameter is specified, the request must also include the sourceCode parameter.</p>
   */
  toolchain?: Toolchain;

  /**
   * <p>The tags created for the project.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateProjectResult {
  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created project.</p>
   */
  arn: string | undefined;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  projectTemplateId?: string;
}

/**
 * <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account.
 *       AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
 */
export class ProjectAlreadyExistsException extends __BaseException {
  readonly name: "ProjectAlreadyExistsException" = "ProjectAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectAlreadyExistsException, __BaseException>) {
    super({
      name: "ProjectAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectAlreadyExistsException.prototype);
  }
}

/**
 * <p>The project creation request was valid, but a nonspecific exception or error occurred
 *       during project creation. The project could not be created in AWS CodeStar.</p>
 */
export class ProjectCreationFailedException extends __BaseException {
  readonly name: "ProjectCreationFailedException" = "ProjectCreationFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProjectCreationFailedException, __BaseException>) {
    super({
      name: "ProjectCreationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProjectCreationFailedException.prototype);
  }
}

export interface CreateUserProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The name that will be displayed as the friendly name for the user in AWS CodeStar. </p>
   */
  displayName: string | undefined;

  /**
   * <p>The email address that will be displayed as part of the user's profile in
   *       AWS CodeStar.</p>
   */
  emailAddress: string | undefined;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   */
  sshPublicKey?: string;
}

export interface CreateUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

  /**
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;
}

/**
 * <p>A user profile with that name already exists in this region for the AWS account. AWS
 *       CodeStar user profile names must be unique within a region for the AWS account. </p>
 */
export class UserProfileAlreadyExistsException extends __BaseException {
  readonly name: "UserProfileAlreadyExistsException" = "UserProfileAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserProfileAlreadyExistsException, __BaseException>) {
    super({
      name: "UserProfileAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserProfileAlreadyExistsException.prototype);
  }
}

export interface DeleteProjectRequest {
  /**
   * <p>The ID of the project to be deleted in AWS CodeStar.</p>
   */
  id: string | undefined;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       deletion. This token can be used to repeat the request. </p>
   */
  clientRequestToken?: string;

  /**
   * <p>Whether to send a delete request for the primary stack in AWS CloudFormation originally
   *       used to generate the project and its resources. This option will delete all AWS resources for
   *       the project (except for any buckets in Amazon S3) as well as deleting the project itself.
   *       Recommended for most use cases.</p>
   */
  deleteStack?: boolean;
}

export interface DeleteProjectResult {
  /**
   * <p>The ID of the primary stack in AWS CloudFormation that will be deleted as part of
   *       deleting the project and its resources.</p>
   */
  stackId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted project.</p>
   */
  projectArn?: string;
}

export interface DeleteUserProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.</p>
   */
  userArn: string | undefined;
}

export interface DeleteUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.</p>
   */
  userArn: string | undefined;
}

export interface DescribeProjectRequest {
  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;
}

/**
 * <p>An indication of whether a project creation or deletion is failed or
 *       successful.</p>
 */
export interface ProjectStatus {
  /**
   * <p>The phase of completion for a project creation or deletion.</p>
   */
  state: string | undefined;

  /**
   * <p>In the case of a project creation or deletion failure, a reason for the
   *       failure.</p>
   */
  reason?: string;
}

export interface DescribeProjectResult {
  /**
   * <p>The display name for the project.</p>
   */
  name?: string;

  /**
   * <p>The ID of the project.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   */
  arn?: string;

  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. </p>
   */
  clientRequestToken?: string;

  /**
   * <p>The date and time the project was created, in timestamp format.</p>
   */
  createdTimeStamp?: Date;

  /**
   * <p>The ID of the primary stack in AWS CloudFormation used to generate resources for the
   *       project.</p>
   */
  stackId?: string;

  /**
   * <p>The ID for the AWS CodeStar project template used to create the project.</p>
   */
  projectTemplateId?: string;

  /**
   * <p>The project creation or deletion status.</p>
   */
  status?: ProjectStatus;
}

export interface DescribeUserProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string | undefined;
}

export interface DescribeUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The display name shown for the user in AWS CodeStar projects. For example, this could be set
   *       to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also
   *       used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are
   *       included in the display name, the first character that appears after the space will be used as
   *       the second character in the user initial icon. The initial icon displays a maximum of two
   *       characters, so a display name with more than one space (for example "Mary Jane Major") would
   *       generate an initial icon using the first character and the first character after the space
   *       ("MJ", not "MM").</p>
   */
  displayName?: string;

  /**
   * <p>The email address for the user. Optional.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user. This SSH public key is associated with the
   *       user profile, and can be used in conjunction with the associated private key for access to
   *       project resources, such as Amazon EC2 instances, if a project owner grants remote access to
   *       those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The date and time when the user profile was created in AWS CodeStar, in timestamp
   *       format.</p>
   */
  createdTimestamp: Date | undefined;

  /**
   * <p>The date and time when the user profile was last modified, in timestamp
   *       format.</p>
   */
  lastModifiedTimestamp: Date | undefined;
}

/**
 * <p>The user profile was not found.</p>
 */
export class UserProfileNotFoundException extends __BaseException {
  readonly name: "UserProfileNotFoundException" = "UserProfileNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserProfileNotFoundException, __BaseException>) {
    super({
      name: "UserProfileNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserProfileNotFoundException.prototype);
  }
}

export interface DisassociateTeamMemberRequest {
  /**
   * <p>The ID of the AWS CodeStar project from which you want to remove a team member.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM user or group whom you want to remove from
   *       the project.</p>
   */
  userArn: string | undefined;
}

export interface DisassociateTeamMemberResult {}

/**
 * <p>The next token is not valid.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

export interface ListProjectsRequest {
  /**
   * <p>The continuation token to be used to return the next set of results, if the results
   *       cannot be returned in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about the metadata for a project.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The ID of the project.</p>
   */
  projectId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  projectArn?: string;
}

export interface ListProjectsResult {
  /**
   * <p>A list of projects.</p>
   */
  projects: ProjectSummary[] | undefined;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

export interface ListResourcesRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a resource for a project.</p>
 */
export interface Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  id: string | undefined;
}

export interface ListResourcesResult {
  /**
   * <p>An array of resources associated with the project. </p>
   */
  resources?: Resource[];

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

export interface ListTagsForProjectRequest {
  /**
   * <p>The ID of the project to get tags for.</p>
   */
  id: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  maxResults?: number;
}

export interface ListTagsForProjectResult {
  /**
   * <p>The tags for the project.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;
}

export interface ListTeamMembersRequest {
  /**
   * <p>The ID of the project for which you want to list team members.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of team members you want returned in a response.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a team member in a project.</p>
 */
export interface TeamMember {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The role assigned to the user in the project. Project roles have different levels of
   *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
   *         Teams</a> in the <i>AWS CodeStar User Guide</i>. </p>
   */
  projectRole: string | undefined;

  /**
   * <p>Whether the user is allowed to remotely access project resources using an SSH
   *       public/private key pair.</p>
   */
  remoteAccessAllowed?: boolean;
}

export interface ListTeamMembersResult {
  /**
   * <p>A list of team member objects for the project.</p>
   */
  teamMembers: TeamMember[] | undefined;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

export interface ListUserProfilesRequest {
  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in a response.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a user's profile in AWS CodeStar.</p>
 */
export interface UserProfileSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn?: string;

  /**
   * <p>The display name of a user in AWS CodeStar. For example, this could be set to both first and
   *       last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate
   *       the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the
   *       display name, the first character that appears after the space will be used as the second
   *       character in the user initial icon. The initial icon displays a maximum of two characters, so
   *       a display name with more than one space (for example "Mary Jane Major") would generate an
   *       initial icon using the first character and the first character after the space ("MJ", not
   *       "MM").</p>
   */
  displayName?: string;

  /**
   * <p>The email address associated with the user.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   */
  sshPublicKey?: string;
}

export interface ListUserProfilesResult {
  /**
   * <p>All the user profiles configured in AWS CodeStar for an AWS account.</p>
   */
  userProfiles: UserProfileSummary[] | undefined;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

export interface TagProjectRequest {
  /**
   * <p>The ID of the project you want to add a tag to.</p>
   */
  id: string | undefined;

  /**
   * <p>The tags you want to add to the project.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagProjectResult {
  /**
   * <p>The tags for the project.</p>
   */
  tags?: Record<string, string>;
}

export interface UntagProjectRequest {
  /**
   * <p>The ID of the project to remove tags from.</p>
   */
  id: string | undefined;

  /**
   * <p>The tags to remove from the project.</p>
   */
  tags: string[] | undefined;
}

export interface UntagProjectResult {}

export interface UpdateProjectRequest {
  /**
   * <p>The ID of the project you want to update.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the project you want to update.</p>
   */
  name?: string;

  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;
}

export interface UpdateProjectResult {}

/**
 * <p>The specified team member was not found.</p>
 */
export class TeamMemberNotFoundException extends __BaseException {
  readonly name: "TeamMemberNotFoundException" = "TeamMemberNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TeamMemberNotFoundException, __BaseException>) {
    super({
      name: "TeamMemberNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TeamMemberNotFoundException.prototype);
  }
}

export interface UpdateTeamMemberRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user for whom you want to change team membership
   *       attributes.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The role assigned to the user in the project. Project roles have different levels of
   *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
   *         Teams</a> in the <i>AWS CodeStar User Guide</i>.</p>
   */
  projectRole?: string;

  /**
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile. Even if this is set to True, the user must
   *       associate a public key with their profile before the user can access resources.</p>
   */
  remoteAccessAllowed?: boolean;
}

export interface UpdateTeamMemberResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user whose team membership attributes were
   *       updated.</p>
   */
  userArn?: string;

  /**
   * <p>The project role granted to the user.</p>
   */
  projectRole?: string;

  /**
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile.</p>
   */
  remoteAccessAllowed?: boolean;
}

export interface UpdateUserProfileRequest {
  /**
   * <p>The name that will be displayed as the friendly name for the user in AWS
   *       CodeStar.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS
   *       CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   */
  sshPublicKey?: string;
}

export interface UpdateUserProfileResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS
   *       CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

  /**
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;
}

/**
 * @internal
 */
export const AssociateTeamMemberRequestFilterSensitiveLog = (obj: AssociateTeamMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTeamMemberResultFilterSensitiveLog = (obj: AssociateTeamMemberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeCommitCodeDestinationFilterSensitiveLog = (obj: CodeCommitCodeDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GitHubCodeDestinationFilterSensitiveLog = (obj: GitHubCodeDestination): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CodeDestinationFilterSensitiveLog = (obj: CodeDestination): any => ({
  ...obj,
  ...(obj.gitHub && { gitHub: GitHubCodeDestinationFilterSensitiveLog(obj.gitHub) }),
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeSourceFilterSensitiveLog = (obj: CodeSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeFilterSensitiveLog = (obj: Code): any => ({
  ...obj,
  ...(obj.destination && { destination: CodeDestinationFilterSensitiveLog(obj.destination) }),
});

/**
 * @internal
 */
export const ToolchainSourceFilterSensitiveLog = (obj: ToolchainSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ToolchainFilterSensitiveLog = (obj: Toolchain): any => ({
  ...obj,
  ...(obj.stackParameters && { stackParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.sourceCode && { sourceCode: obj.sourceCode.map((item) => CodeFilterSensitiveLog(item)) }),
  ...(obj.toolchain && { toolchain: ToolchainFilterSensitiveLog(obj.toolchain) }),
});

/**
 * @internal
 */
export const CreateProjectResultFilterSensitiveLog = (obj: CreateProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserProfileRequestFilterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserProfileResultFilterSensitiveLog = (obj: CreateUserProfileResult): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResultFilterSensitiveLog = (obj: DeleteProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserProfileRequestFilterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserProfileResultFilterSensitiveLog = (obj: DeleteUserProfileResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectRequestFilterSensitiveLog = (obj: DescribeProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectStatusFilterSensitiveLog = (obj: ProjectStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectResultFilterSensitiveLog = (obj: DescribeProjectResult): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeUserProfileRequestFilterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserProfileResultFilterSensitiveLog = (obj: DescribeUserProfileResult): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisassociateTeamMemberRequestFilterSensitiveLog = (obj: DisassociateTeamMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTeamMemberResultFilterSensitiveLog = (obj: DisassociateTeamMemberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResultFilterSensitiveLog = (obj: ListProjectsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesRequestFilterSensitiveLog = (obj: ListResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcesResultFilterSensitiveLog = (obj: ListResourcesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForProjectRequestFilterSensitiveLog = (obj: ListTagsForProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForProjectResultFilterSensitiveLog = (obj: ListTagsForProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTeamMembersRequestFilterSensitiveLog = (obj: ListTeamMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TeamMemberFilterSensitiveLog = (obj: TeamMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTeamMembersResultFilterSensitiveLog = (obj: ListTeamMembersResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserProfilesRequestFilterSensitiveLog = (obj: ListUserProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserProfileSummaryFilterSensitiveLog = (obj: UserProfileSummary): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUserProfilesResultFilterSensitiveLog = (obj: ListUserProfilesResult): any => ({
  ...obj,
  ...(obj.userProfiles && { userProfiles: obj.userProfiles.map((item) => UserProfileSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TagProjectRequestFilterSensitiveLog = (obj: TagProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagProjectResultFilterSensitiveLog = (obj: TagProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagProjectRequestFilterSensitiveLog = (obj: UntagProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagProjectResultFilterSensitiveLog = (obj: UntagProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateProjectResultFilterSensitiveLog = (obj: UpdateProjectResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTeamMemberRequestFilterSensitiveLog = (obj: UpdateTeamMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTeamMemberResultFilterSensitiveLog = (obj: UpdateTeamMemberResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserProfileRequestFilterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserProfileResultFilterSensitiveLog = (obj: UpdateUserProfileResult): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});
