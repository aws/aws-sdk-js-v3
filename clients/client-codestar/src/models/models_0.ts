// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodeStarServiceException as __BaseException } from "./CodeStarServiceException";

/**
 * @public
 */
export interface AssociateTeamMemberRequest {
  /**
   * @public
   * <p>The ID of the project to which you will add the IAM user.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>A user- or system-generated token that identifies the entity that requested the team
   *       member association to the project. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar
   *       project.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The AWS CodeStar project role that will apply to this user. This role determines what actions
   *       a user can take in an AWS CodeStar project.</p>
   */
  projectRole: string | undefined;

  /**
   * @public
   * <p>Whether the team member is allowed to use an SSH public/private key pair to remotely
   *       access project resources, for example Amazon EC2 instances.</p>
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface AssociateTeamMemberResult {
  /**
   * @public
   * <p>The user- or system-generated token from the initial request that can be used to repeat
   *       the request.</p>
   */
  clientRequestToken?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
 *       with the project request will be uploaded after project creation.</p>
 */
export interface CodeCommitCodeDestination {
  /**
   * @public
   * <p>The name of the AWS CodeCommit repository to be created in AWS CodeStar.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
 *       project request will be uploaded after project creation.</p>
 */
export interface GitHubCodeDestination {
  /**
   * @public
   * <p>Name of the GitHub repository to be created in AWS CodeStar.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Description for the GitHub repository to be created in AWS CodeStar. This description displays in
   *       GitHub after the repository is created.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The GitHub username for the owner of the GitHub repository to be created in AWS CodeStar. If this repository should
   *       be owned by a GitHub organization, provide its name.</p>
   */
  owner: string | undefined;

  /**
   * @public
   * <p>Whether the GitHub repository is to be a private repository.</p>
   */
  privateRepository: boolean | undefined;

  /**
   * @public
   * <p>Whether to enable issues for the GitHub repository.</p>
   */
  issuesEnabled: boolean | undefined;

  /**
   * @public
   * <p>The GitHub user's personal access token for the GitHub repository.</p>
   */
  token: string | undefined;
}

/**
 * @public
 * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
 *       source code files provided with the project request are placed in the repository.</p>
 */
export interface CodeDestination {
  /**
   * @public
   * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
   *       with the project request will be uploaded after project creation.</p>
   */
  codeCommit?: CodeCommitCodeDestination;

  /**
   * @public
   * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
   *       project request will be uploaded after project creation.</p>
   */
  gitHub?: GitHubCodeDestination;
}

/**
 * @public
 * <p>The Amazon S3 location where the source code files provided with the project
 *       request are stored.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The Amazon S3 bucket name where the source code files provided with the project
   *       request are stored.</p>
   */
  bucketName?: string;

  /**
   * @public
   * <p>The Amazon S3 object key where the source code files provided with the project
   *       request are stored.</p>
   */
  bucketKey?: string;
}

/**
 * @public
 * <p>The location where the source code files provided with the project request are
 *       stored. AWS CodeStar retrieves the files during project creation.</p>
 */
export interface CodeSource {
  /**
   * @public
   * <p>Information about the Amazon S3 location where the source code files provided with the
   *       project request are stored. </p>
   */
  s3: S3Location | undefined;
}

/**
 * @public
 * <p>Location and destination information about the source code files provided with the
 *       project request. The source code is uploaded to the new project source repository after
 *       project creation.</p>
 */
export interface Code {
  /**
   * @public
   * <p>The location where the source code files provided with the project request are
   *       stored. AWS CodeStar retrieves the files during project creation.</p>
   */
  source: CodeSource | undefined;

  /**
   * @public
   * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
   *       source code files provided with the project request are placed in the repository.</p>
   */
  destination: CodeDestination | undefined;
}

/**
 * @public
 * <p>The Amazon S3 location where the toolchain template file provided with the
 *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
 */
export interface ToolchainSource {
  /**
   * @public
   * <p>The Amazon S3 bucket where the toolchain template file provided with the project
   *       request is stored.</p>
   */
  s3: S3Location | undefined;
}

/**
 * @public
 * <p>The toolchain template file provided with the project request. AWS CodeStar uses
 *       the template to provision the toolchain stack in AWS CloudFormation.</p>
 */
export interface Toolchain {
  /**
   * @public
   * <p>The Amazon S3 location where the toolchain template file provided with the
   *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
   */
  source: ToolchainSource | undefined;

  /**
   * @public
   * <p>The service role ARN for AWS CodeStar to use for the toolchain template during stack
   *       provisioning.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The list of parameter overrides to be passed into the toolchain template during stack
   *       provisioning, if any.</p>
   */
  stackParameters?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>The display name for the project to be created in AWS CodeStar.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the project to be created in AWS CodeStar.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>A list of the Code objects submitted with the project request. If this
   *       parameter is specified, the request must also include the toolchain parameter.</p>
   */
  sourceCode?: Code[];

  /**
   * @public
   * <p>The name of the toolchain template file submitted with the project request. If
   *       this parameter is specified, the request must also include the sourceCode parameter.</p>
   */
  toolchain?: Toolchain;

  /**
   * @public
   * <p>The tags created for the project.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectResult {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created project.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  projectTemplateId?: string;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface CreateUserProfileRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The name that will be displayed as the friendly name for the user in AWS CodeStar. </p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>The email address that will be displayed as part of the user's profile in
   *       AWS CodeStar.</p>
   */
  emailAddress: string | undefined;

  /**
   * @public
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   */
  sshPublicKey?: string;
}

/**
 * @public
 */
export interface CreateUserProfileResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The email address that is displayed as part of the user's profile in AWS CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * @public
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;
}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * @public
   * <p>The ID of the project to be deleted in AWS CodeStar.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       deletion. This token can be used to repeat the request. </p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Whether to send a delete request for the primary stack in AWS CloudFormation originally
   *       used to generate the project and its resources. This option will delete all AWS resources for
   *       the project (except for any buckets in Amazon S3) as well as deleting the project itself.
   *       Recommended for most use cases.</p>
   */
  deleteStack?: boolean;
}

/**
 * @public
 */
export interface DeleteProjectResult {
  /**
   * @public
   * <p>The ID of the primary stack in AWS CloudFormation that will be deleted as part of
   *       deleting the project and its resources.</p>
   */
  stackId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted project.</p>
   */
  projectArn?: string;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.</p>
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserProfileResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.</p>
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>An indication of whether a project creation or deletion is failed or
 *       successful.</p>
 */
export interface ProjectStatus {
  /**
   * @public
   * <p>The phase of completion for a project creation or deletion.</p>
   */
  state: string | undefined;

  /**
   * @public
   * <p>In the case of a project creation or deletion failure, a reason for the
   *       failure.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface DescribeProjectResult {
  /**
   * @public
   * <p>The display name for the project.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ID of the project.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. </p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The date and time the project was created, in timestamp format.</p>
   */
  createdTimeStamp?: Date;

  /**
   * @public
   * <p>The ID of the primary stack in AWS CloudFormation used to generate resources for the
   *       project.</p>
   */
  stackId?: string;

  /**
   * @public
   * <p>The ID for the AWS CodeStar project template used to create the project.</p>
   */
  projectTemplateId?: string;

  /**
   * @public
   * <p>The project creation or deletion status.</p>
   */
  status?: ProjectStatus;
}

/**
 * @public
 */
export interface DescribeUserProfileRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The email address for the user. Optional.</p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p>The SSH public key associated with the user. This SSH public key is associated with the
   *       user profile, and can be used in conjunction with the associated private key for access to
   *       project resources, such as Amazon EC2 instances, if a project owner grants remote access to
   *       those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * @public
   * <p>The date and time when the user profile was created in AWS CodeStar, in timestamp
   *       format.</p>
   */
  createdTimestamp: Date | undefined;

  /**
   * @public
   * <p>The date and time when the user profile was last modified, in timestamp
   *       format.</p>
   */
  lastModifiedTimestamp: Date | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface DisassociateTeamMemberRequest {
  /**
   * @public
   * <p>The ID of the AWS CodeStar project from which you want to remove a team member.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM user or group whom you want to remove from
   *       the project.</p>
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTeamMemberResult {}

/**
 * @public
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

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>The continuation token to be used to return the next set of results, if the results
   *       cannot be returned in one response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about the metadata for a project.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  projectArn?: string;
}

/**
 * @public
 */
export interface ListProjectsResult {
  /**
   * @public
   * <p>A list of projects.</p>
   */
  projects: ProjectSummary[] | undefined;

  /**
   * @public
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a resource for a project.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesResult {
  /**
   * @public
   * <p>An array of resources associated with the project. </p>
   */
  resources?: Resource[];

  /**
   * @public
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForProjectRequest {
  /**
   * @public
   * <p>The ID of the project to get tags for.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTagsForProjectResult {
  /**
   * @public
   * <p>The tags for the project.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTeamMembersRequest {
  /**
   * @public
   * <p>The ID of the project for which you want to list team members.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of team members you want returned in a response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a team member in a project.</p>
 */
export interface TeamMember {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The role assigned to the user in the project. Project roles have different levels of
   *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
   *         Teams</a> in the <i>AWS CodeStar User Guide</i>. </p>
   */
  projectRole: string | undefined;

  /**
   * @public
   * <p>Whether the user is allowed to remotely access project resources using an SSH
   *       public/private key pair.</p>
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface ListTeamMembersResult {
  /**
   * @public
   * <p>A list of team member objects for the project.</p>
   */
  teamMembers: TeamMember[] | undefined;

  /**
   * @public
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListUserProfilesRequest {
  /**
   * @public
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in a response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a user's profile in AWS CodeStar.</p>
 */
export interface UserProfileSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn?: string;

  /**
   * @public
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
   * @public
   * <p>The email address associated with the user.</p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   */
  sshPublicKey?: string;
}

/**
 * @public
 */
export interface ListUserProfilesResult {
  /**
   * @public
   * <p>All the user profiles configured in AWS CodeStar for an AWS account.</p>
   */
  userProfiles: UserProfileSummary[] | undefined;

  /**
   * @public
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagProjectRequest {
  /**
   * @public
   * <p>The ID of the project you want to add a tag to.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The tags you want to add to the project.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagProjectResult {
  /**
   * @public
   * <p>The tags for the project.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UntagProjectRequest {
  /**
   * @public
   * <p>The ID of the project to remove tags from.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The tags to remove from the project.</p>
   */
  tags: string[] | undefined;
}

/**
 * @public
 */
export interface UntagProjectResult {}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * @public
   * <p>The ID of the project you want to update.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the project you want to update.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the project, if any.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateProjectResult {}

/**
 * @public
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

/**
 * @public
 */
export interface UpdateTeamMemberRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user for whom you want to change team membership
   *       attributes.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The role assigned to the user in the project. Project roles have different levels of
   *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
   *         Teams</a> in the <i>AWS CodeStar User Guide</i>.</p>
   */
  projectRole?: string;

  /**
   * @public
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile. Even if this is set to True, the user must
   *       associate a public key with their profile before the user can access resources.</p>
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface UpdateTeamMemberResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user whose team membership attributes were
   *       updated.</p>
   */
  userArn?: string;

  /**
   * @public
   * <p>The project role granted to the user.</p>
   */
  projectRole?: string;

  /**
   * @public
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile.</p>
   */
  remoteAccessAllowed?: boolean;
}

/**
 * @public
 */
export interface UpdateUserProfileRequest {
  /**
   * @public
   * <p>The name that will be displayed as the friendly name for the user in AWS
   *       CodeStar.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The email address that is displayed as part of the user's profile in AWS
   *       CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
   *       user remote access to project resources, this public key will be used along with the user's
   *       private key for SSH access.</p>
   */
  sshPublicKey?: string;
}

/**
 * @public
 */
export interface UpdateUserProfileResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;

  /**
   * @public
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The email address that is displayed as part of the user's profile in AWS
   *       CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * @public
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

  /**
   * @public
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;
}

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
export const CodeFilterSensitiveLog = (obj: Code): any => ({
  ...obj,
  ...(obj.destination && { destination: CodeDestinationFilterSensitiveLog(obj.destination) }),
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
export const DescribeProjectResultFilterSensitiveLog = (obj: DescribeProjectResult): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
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
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
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
