import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateTeamMemberRequest {
  __type?: "AssociateTeamMemberRequest";
  /**
   * <p>A user- or system-generated token that identifies the entity that requested the team
   *       member association to the project. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The ID of the project to which you will add the IAM user.</p>
   */
  projectId: string | undefined;

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

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar
   *       project.</p>
   */
  userArn: string | undefined;
}

export namespace AssociateTeamMemberRequest {
  export const filterSensitiveLog = (obj: AssociateTeamMemberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateTeamMemberRequest => __isa(o, "AssociateTeamMemberRequest");
}

export interface AssociateTeamMemberResult {
  __type?: "AssociateTeamMemberResult";
  /**
   * <p>The user- or system-generated token from the initial request that can be used to repeat
   *       the request.</p>
   */
  clientRequestToken?: string;
}

export namespace AssociateTeamMemberResult {
  export const filterSensitiveLog = (obj: AssociateTeamMemberResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssociateTeamMemberResult => __isa(o, "AssociateTeamMemberResult");
}

/**
 * <p>Location and destination information about the source code files provided with the
 *       project request. The source code is uploaded to the new project source repository after
 *       project creation.</p>
 */
export interface Code {
  __type?: "Code";
  /**
   * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
   *       source code files provided with the project request are placed in the repository.</p>
   */
  destination: CodeDestination | undefined;

  /**
   * <p>The location where the source code files provided with the project request are
   *       stored. AWS CodeStar retrieves the files during project creation.</p>
   */
  source: CodeSource | undefined;
}

export namespace Code {
  export const filterSensitiveLog = (obj: Code): any => ({
    ...obj,
    ...(obj.destination && { destination: CodeDestination.filterSensitiveLog(obj.destination) }),
  });
  export const isa = (o: any): o is Code => __isa(o, "Code");
}

/**
 * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
 *       with the project request will be uploaded after project creation.</p>
 */
export interface CodeCommitCodeDestination {
  __type?: "CodeCommitCodeDestination";
  /**
   * <p>The name of the AWS CodeCommit repository to be created in AWS CodeStar.</p>
   */
  name: string | undefined;
}

export namespace CodeCommitCodeDestination {
  export const filterSensitiveLog = (obj: CodeCommitCodeDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeCommitCodeDestination => __isa(o, "CodeCommitCodeDestination");
}

/**
 * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
 *       source code files provided with the project request are placed in the repository.</p>
 */
export interface CodeDestination {
  __type?: "CodeDestination";
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

export namespace CodeDestination {
  export const filterSensitiveLog = (obj: CodeDestination): any => ({
    ...obj,
    ...(obj.gitHub && { gitHub: GitHubCodeDestination.filterSensitiveLog(obj.gitHub) }),
  });
  export const isa = (o: any): o is CodeDestination => __isa(o, "CodeDestination");
}

/**
 * <p>The location where the source code files provided with the project request are
 *       stored. AWS CodeStar retrieves the files during project creation.</p>
 */
export interface CodeSource {
  __type?: "CodeSource";
  /**
   * <p>Information about the Amazon S3 location where the source code files provided with the
   *       project request are stored. </p>
   */
  s3: S3Location | undefined;
}

export namespace CodeSource {
  export const filterSensitiveLog = (obj: CodeSource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeSource => __isa(o, "CodeSource");
}

/**
 * <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "server";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConcurrentModificationException => __isa(o, "ConcurrentModificationException");
}

export interface CreateProjectRequest {
  __type?: "CreateProjectRequest";
  /**
   * <p>A user- or system-generated token that identifies the entity that requested project
   *       creation. This token can be used to repeat the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>The ID of the project to be created in AWS CodeStar.</p>
   */
  id: string | undefined;

  /**
   * <p>The display name for the project to be created in AWS CodeStar.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of the Code objects submitted with the project request. If this
   *       parameter is specified, the request must also include the toolchain parameter.</p>
   */
  sourceCode?: Code[];

  /**
   * <p>The tags created for the project.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The name of the toolchain template file submitted with the project request. If
   *       this parameter is specified, the request must also include the sourceCode parameter.</p>
   */
  toolchain?: Toolchain;
}

export namespace CreateProjectRequest {
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.name && { name: SENSITIVE_STRING }),
    ...(obj.sourceCode && { sourceCode: obj.sourceCode.map((item) => Code.filterSensitiveLog(item)) }),
    ...(obj.toolchain && { toolchain: Toolchain.filterSensitiveLog(obj.toolchain) }),
  });
  export const isa = (o: any): o is CreateProjectRequest => __isa(o, "CreateProjectRequest");
}

export interface CreateProjectResult {
  __type?: "CreateProjectResult";
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
   * <p>The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  projectTemplateId?: string;
}

export namespace CreateProjectResult {
  export const filterSensitiveLog = (obj: CreateProjectResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateProjectResult => __isa(o, "CreateProjectResult");
}

export interface CreateUserProfileRequest {
  __type?: "CreateUserProfileRequest";
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

  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;
}

export namespace CreateUserProfileRequest {
  export const filterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateUserProfileRequest => __isa(o, "CreateUserProfileRequest");
}

export interface CreateUserProfileResult {
  __type?: "CreateUserProfileResult";
  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

  /**
   * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
   */
  displayName?: string;

  /**
   * <p>The email address that is displayed as part of the user's profile in AWS CodeStar.</p>
   */
  emailAddress?: string;

  /**
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;
}

export namespace CreateUserProfileResult {
  export const filterSensitiveLog = (obj: CreateUserProfileResult): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateUserProfileResult => __isa(o, "CreateUserProfileResult");
}

export interface DeleteProjectRequest {
  __type?: "DeleteProjectRequest";
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

  /**
   * <p>The ID of the project to be deleted in AWS CodeStar.</p>
   */
  id: string | undefined;
}

export namespace DeleteProjectRequest {
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteProjectRequest => __isa(o, "DeleteProjectRequest");
}

export interface DeleteProjectResult {
  __type?: "DeleteProjectResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted project.</p>
   */
  projectArn?: string;

  /**
   * <p>The ID of the primary stack in AWS CloudFormation that will be deleted as part of
   *       deleting the project and its resources.</p>
   */
  stackId?: string;
}

export namespace DeleteProjectResult {
  export const filterSensitiveLog = (obj: DeleteProjectResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteProjectResult => __isa(o, "DeleteProjectResult");
}

export interface DeleteUserProfileRequest {
  __type?: "DeleteUserProfileRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.</p>
   */
  userArn: string | undefined;
}

export namespace DeleteUserProfileRequest {
  export const filterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteUserProfileRequest => __isa(o, "DeleteUserProfileRequest");
}

export interface DeleteUserProfileResult {
  __type?: "DeleteUserProfileResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.</p>
   */
  userArn: string | undefined;
}

export namespace DeleteUserProfileResult {
  export const filterSensitiveLog = (obj: DeleteUserProfileResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteUserProfileResult => __isa(o, "DeleteUserProfileResult");
}

export interface DescribeProjectRequest {
  __type?: "DescribeProjectRequest";
  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;
}

export namespace DescribeProjectRequest {
  export const filterSensitiveLog = (obj: DescribeProjectRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeProjectRequest => __isa(o, "DescribeProjectRequest");
}

export interface DescribeProjectResult {
  __type?: "DescribeProjectResult";
  /**
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   */
  arn?: string;

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
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>The ID of the project.</p>
   */
  id?: string;

  /**
   * <p>The display name for the project.</p>
   */
  name?: string;

  /**
   * <p>The ID for the AWS CodeStar project template used to create the project.</p>
   */
  projectTemplateId?: string;

  /**
   * <p>The ID of the primary stack in AWS CloudFormation used to generate resources for the
   *       project.</p>
   */
  stackId?: string;

  /**
   * <p>The project creation or deletion status.</p>
   */
  status?: ProjectStatus;
}

export namespace DescribeProjectResult {
  export const filterSensitiveLog = (obj: DescribeProjectResult): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.name && { name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DescribeProjectResult => __isa(o, "DescribeProjectResult");
}

export interface DescribeUserProfileRequest {
  __type?: "DescribeUserProfileRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string | undefined;
}

export namespace DescribeUserProfileRequest {
  export const filterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeUserProfileRequest => __isa(o, "DescribeUserProfileRequest");
}

export interface DescribeUserProfileResult {
  __type?: "DescribeUserProfileResult";
  /**
   * <p>The date and time when the user profile was created in AWS CodeStar, in timestamp
   *       format.</p>
   */
  createdTimestamp: Date | undefined;

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
   * <p>The date and time when the user profile was last modified, in timestamp
   *       format.</p>
   */
  lastModifiedTimestamp: Date | undefined;

  /**
   * <p>The SSH public key associated with the user. This SSH public key is associated with the
   *       user profile, and can be used in conjunction with the associated private key for access to
   *       project resources, such as Amazon EC2 instances, if a project owner grants remote access to
   *       those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn: string | undefined;
}

export namespace DescribeUserProfileResult {
  export const filterSensitiveLog = (obj: DescribeUserProfileResult): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DescribeUserProfileResult => __isa(o, "DescribeUserProfileResult");
}

export interface DisassociateTeamMemberRequest {
  __type?: "DisassociateTeamMemberRequest";
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

export namespace DisassociateTeamMemberRequest {
  export const filterSensitiveLog = (obj: DisassociateTeamMemberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateTeamMemberRequest => __isa(o, "DisassociateTeamMemberRequest");
}

export interface DisassociateTeamMemberResult {
  __type?: "DisassociateTeamMemberResult";
}

export namespace DisassociateTeamMemberResult {
  export const filterSensitiveLog = (obj: DisassociateTeamMemberResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DisassociateTeamMemberResult => __isa(o, "DisassociateTeamMemberResult");
}

/**
 * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
 *       project request will be uploaded after project creation.</p>
 */
export interface GitHubCodeDestination {
  __type?: "GitHubCodeDestination";
  /**
   * <p>Description for the GitHub repository to be created in AWS CodeStar. This description displays in
   *       GitHub after the repository is created.</p>
   */
  description?: string;

  /**
   * <p>Whether to enable issues for the GitHub repository.</p>
   */
  issuesEnabled: boolean | undefined;

  /**
   * <p>Name of the GitHub repository to be created in AWS CodeStar.</p>
   */
  name: string | undefined;

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
   * <p>The GitHub user's personal access token for the GitHub repository.</p>
   */
  token: string | undefined;

  /**
   * <p>The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.</p>
   */
  type: string | undefined;
}

export namespace GitHubCodeDestination {
  export const filterSensitiveLog = (obj: GitHubCodeDestination): any => ({
    ...obj,
    ...(obj.token && { token: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is GitHubCodeDestination => __isa(o, "GitHubCodeDestination");
}

/**
 * <p>The next token is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidNextTokenException => __isa(o, "InvalidNextTokenException");
}

/**
 * <p>The service role is not valid.</p>
 */
export interface InvalidServiceRoleException extends __SmithyException, $MetadataBearer {
  name: "InvalidServiceRoleException";
  $fault: "client";
  message?: string;
}

export namespace InvalidServiceRoleException {
  export const filterSensitiveLog = (obj: InvalidServiceRoleException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidServiceRoleException => __isa(o, "InvalidServiceRoleException");
}

/**
 * <p>A resource limit has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListProjectsRequest {
  __type?: "ListProjectsRequest";
  /**
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The continuation token to be used to return the next set of results, if the results
   *       cannot be returned in one response.</p>
   */
  nextToken?: string;
}

export namespace ListProjectsRequest {
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListProjectsRequest => __isa(o, "ListProjectsRequest");
}

export interface ListProjectsResult {
  __type?: "ListProjectsResult";
  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of projects.</p>
   */
  projects: ProjectSummary[] | undefined;
}

export namespace ListProjectsResult {
  export const filterSensitiveLog = (obj: ListProjectsResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListProjectsResult => __isa(o, "ListProjectsResult");
}

export interface ListResourcesRequest {
  __type?: "ListResourcesRequest";
  /**
   * <p>The maximum amount of data that can be contained in a single set of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;
}

export namespace ListResourcesRequest {
  export const filterSensitiveLog = (obj: ListResourcesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourcesRequest => __isa(o, "ListResourcesRequest");
}

export interface ListResourcesResult {
  __type?: "ListResourcesResult";
  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of resources associated with the project. </p>
   */
  resources?: Resource[];
}

export namespace ListResourcesResult {
  export const filterSensitiveLog = (obj: ListResourcesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListResourcesResult => __isa(o, "ListResourcesResult");
}

export interface ListTagsForProjectRequest {
  __type?: "ListTagsForProjectRequest";
  /**
   * <p>The ID of the project to get tags for.</p>
   */
  id: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  maxResults?: number;

  /**
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForProjectRequest {
  export const filterSensitiveLog = (obj: ListTagsForProjectRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForProjectRequest => __isa(o, "ListTagsForProjectRequest");
}

export interface ListTagsForProjectResult {
  __type?: "ListTagsForProjectResult";
  /**
   * <p>Reserved for future use.</p>
   */
  nextToken?: string;

  /**
   * <p>The tags for the project.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForProjectResult {
  export const filterSensitiveLog = (obj: ListTagsForProjectResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForProjectResult => __isa(o, "ListTagsForProjectResult");
}

export interface ListTeamMembersRequest {
  __type?: "ListTeamMembersRequest";
  /**
   * <p>The maximum number of team members you want returned in a response.</p>
   */
  maxResults?: number;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the project for which you want to list team members.</p>
   */
  projectId: string | undefined;
}

export namespace ListTeamMembersRequest {
  export const filterSensitiveLog = (obj: ListTeamMembersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTeamMembersRequest => __isa(o, "ListTeamMembersRequest");
}

export interface ListTeamMembersResult {
  __type?: "ListTeamMembersResult";
  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of team member objects for the project.</p>
   */
  teamMembers: TeamMember[] | undefined;
}

export namespace ListTeamMembersResult {
  export const filterSensitiveLog = (obj: ListTeamMembersResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTeamMembersResult => __isa(o, "ListTeamMembersResult");
}

export interface ListUserProfilesRequest {
  __type?: "ListUserProfilesRequest";
  /**
   * <p>The maximum number of results to return in a response.</p>
   */
  maxResults?: number;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned
   *       in one response.</p>
   */
  nextToken?: string;
}

export namespace ListUserProfilesRequest {
  export const filterSensitiveLog = (obj: ListUserProfilesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListUserProfilesRequest => __isa(o, "ListUserProfilesRequest");
}

export interface ListUserProfilesResult {
  __type?: "ListUserProfilesResult";
  /**
   * <p>The continuation token to use when requesting the next set of results, if there are
   *       more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * <p>All the user profiles configured in AWS CodeStar for an AWS account.</p>
   */
  userProfiles: UserProfileSummary[] | undefined;
}

export namespace ListUserProfilesResult {
  export const filterSensitiveLog = (obj: ListUserProfilesResult): any => ({
    ...obj,
    ...(obj.userProfiles && {
      userProfiles: obj.userProfiles.map((item) => UserProfileSummary.filterSensitiveLog(item)),
    }),
  });
  export const isa = (o: any): o is ListUserProfilesResult => __isa(o, "ListUserProfilesResult");
}

/**
 * <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account.
 *       AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
 */
export interface ProjectAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ProjectAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ProjectAlreadyExistsException {
  export const filterSensitiveLog = (obj: ProjectAlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectAlreadyExistsException => __isa(o, "ProjectAlreadyExistsException");
}

/**
 * <p>Project configuration information is required but not specified.</p>
 */
export interface ProjectConfigurationException extends __SmithyException, $MetadataBearer {
  name: "ProjectConfigurationException";
  $fault: "client";
  message?: string;
}

export namespace ProjectConfigurationException {
  export const filterSensitiveLog = (obj: ProjectConfigurationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectConfigurationException => __isa(o, "ProjectConfigurationException");
}

/**
 * <p>The project creation request was valid, but a nonspecific exception or error occurred
 *       during project creation. The project could not be created in AWS CodeStar.</p>
 */
export interface ProjectCreationFailedException extends __SmithyException, $MetadataBearer {
  name: "ProjectCreationFailedException";
  $fault: "client";
  message?: string;
}

export namespace ProjectCreationFailedException {
  export const filterSensitiveLog = (obj: ProjectCreationFailedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectCreationFailedException => __isa(o, "ProjectCreationFailedException");
}

/**
 * <p>The specified AWS CodeStar project was not found.</p>
 */
export interface ProjectNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ProjectNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ProjectNotFoundException {
  export const filterSensitiveLog = (obj: ProjectNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectNotFoundException => __isa(o, "ProjectNotFoundException");
}

/**
 * <p>An indication of whether a project creation or deletion is failed or
 *       successful.</p>
 */
export interface ProjectStatus {
  __type?: "ProjectStatus";
  /**
   * <p>In the case of a project creation or deletion failure, a reason for the
   *       failure.</p>
   */
  reason?: string;

  /**
   * <p>The phase of completion for a project creation or deletion.</p>
   */
  state: string | undefined;
}

export namespace ProjectStatus {
  export const filterSensitiveLog = (obj: ProjectStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectStatus => __isa(o, "ProjectStatus");
}

/**
 * <p>Information about the metadata for a project.</p>
 */
export interface ProjectSummary {
  __type?: "ProjectSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  projectArn?: string;

  /**
   * <p>The ID of the project.</p>
   */
  projectId?: string;
}

export namespace ProjectSummary {
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectSummary => __isa(o, "ProjectSummary");
}

/**
 * <p>Information about a resource for a project.</p>
 */
export interface Resource {
  __type?: "Resource";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  id: string | undefined;
}

export namespace Resource {
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Resource => __isa(o, "Resource");
}

/**
 * <p>The Amazon S3 location where the source code files provided with the project
 *       request are stored.</p>
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   * <p>The Amazon S3 object key where the source code files provided with the project
   *       request are stored.</p>
   */
  bucketKey?: string;

  /**
   * <p>The Amazon S3 bucket name where the source code files provided with the project
   *       request are stored.</p>
   */
  bucketName?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3Location => __isa(o, "S3Location");
}

export interface TagProjectRequest {
  __type?: "TagProjectRequest";
  /**
   * <p>The ID of the project you want to add a tag to.</p>
   */
  id: string | undefined;

  /**
   * <p>The tags you want to add to the project.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagProjectRequest {
  export const filterSensitiveLog = (obj: TagProjectRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagProjectRequest => __isa(o, "TagProjectRequest");
}

export interface TagProjectResult {
  __type?: "TagProjectResult";
  /**
   * <p>The tags for the project.</p>
   */
  tags?: { [key: string]: string };
}

export namespace TagProjectResult {
  export const filterSensitiveLog = (obj: TagProjectResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagProjectResult => __isa(o, "TagProjectResult");
}

/**
 * <p>Information about a team member in a project.</p>
 */
export interface TeamMember {
  __type?: "TeamMember";
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

  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;
}

export namespace TeamMember {
  export const filterSensitiveLog = (obj: TeamMember): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TeamMember => __isa(o, "TeamMember");
}

/**
 * <p>The team member is already associated with a role in this project.</p>
 */
export interface TeamMemberAlreadyAssociatedException extends __SmithyException, $MetadataBearer {
  name: "TeamMemberAlreadyAssociatedException";
  $fault: "client";
  message?: string;
}

export namespace TeamMemberAlreadyAssociatedException {
  export const filterSensitiveLog = (obj: TeamMemberAlreadyAssociatedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TeamMemberAlreadyAssociatedException =>
    __isa(o, "TeamMemberAlreadyAssociatedException");
}

/**
 * <p>The specified team member was not found.</p>
 */
export interface TeamMemberNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TeamMemberNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace TeamMemberNotFoundException {
  export const filterSensitiveLog = (obj: TeamMemberNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TeamMemberNotFoundException => __isa(o, "TeamMemberNotFoundException");
}

/**
 * <p>The toolchain template file provided with the project request. AWS CodeStar uses
 *       the template to provision the toolchain stack in AWS CloudFormation.</p>
 */
export interface Toolchain {
  __type?: "Toolchain";
  /**
   * <p>The service role ARN for AWS CodeStar to use for the toolchain template during stack
   *       provisioning.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon S3 location where the toolchain template file provided with the
   *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
   */
  source: ToolchainSource | undefined;

  /**
   * <p>The list of parameter overrides to be passed into the toolchain template during stack
   *       provisioning, if any.</p>
   */
  stackParameters?: { [key: string]: string };
}

export namespace Toolchain {
  export const filterSensitiveLog = (obj: Toolchain): any => ({
    ...obj,
    ...(obj.stackParameters && { stackParameters: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Toolchain => __isa(o, "Toolchain");
}

/**
 * <p>The Amazon S3 location where the toolchain template file provided with the
 *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
 */
export interface ToolchainSource {
  __type?: "ToolchainSource";
  /**
   * <p>The Amazon S3 bucket where the toolchain template file provided with the project
   *       request is stored.</p>
   */
  s3: S3Location | undefined;
}

export namespace ToolchainSource {
  export const filterSensitiveLog = (obj: ToolchainSource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ToolchainSource => __isa(o, "ToolchainSource");
}

export interface UntagProjectRequest {
  __type?: "UntagProjectRequest";
  /**
   * <p>The ID of the project to remove tags from.</p>
   */
  id: string | undefined;

  /**
   * <p>The tags to remove from the project.</p>
   */
  tags: string[] | undefined;
}

export namespace UntagProjectRequest {
  export const filterSensitiveLog = (obj: UntagProjectRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagProjectRequest => __isa(o, "UntagProjectRequest");
}

export interface UntagProjectResult {
  __type?: "UntagProjectResult";
}

export namespace UntagProjectResult {
  export const filterSensitiveLog = (obj: UntagProjectResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagProjectResult => __isa(o, "UntagProjectResult");
}

export interface UpdateProjectRequest {
  __type?: "UpdateProjectRequest";
  /**
   * <p>The description of the project, if any.</p>
   */
  description?: string;

  /**
   * <p>The ID of the project you want to update.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the project you want to update.</p>
   */
  name?: string;
}

export namespace UpdateProjectRequest {
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.name && { name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateProjectRequest => __isa(o, "UpdateProjectRequest");
}

export interface UpdateProjectResult {
  __type?: "UpdateProjectResult";
}

export namespace UpdateProjectResult {
  export const filterSensitiveLog = (obj: UpdateProjectResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateProjectResult => __isa(o, "UpdateProjectResult");
}

export interface UpdateTeamMemberRequest {
  __type?: "UpdateTeamMemberRequest";
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

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

  /**
   * <p>The Amazon Resource Name (ARN) of the user for whom you want to change team membership
   *       attributes.</p>
   */
  userArn: string | undefined;
}

export namespace UpdateTeamMemberRequest {
  export const filterSensitiveLog = (obj: UpdateTeamMemberRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateTeamMemberRequest => __isa(o, "UpdateTeamMemberRequest");
}

export interface UpdateTeamMemberResult {
  __type?: "UpdateTeamMemberResult";
  /**
   * <p>The project role granted to the user.</p>
   */
  projectRole?: string;

  /**
   * <p>Whether a team member is allowed to remotely access project resources using the SSH
   *       public key associated with the user's profile.</p>
   */
  remoteAccessAllowed?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose team membership attributes were
   *       updated.</p>
   */
  userArn?: string;
}

export namespace UpdateTeamMemberResult {
  export const filterSensitiveLog = (obj: UpdateTeamMemberResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateTeamMemberResult => __isa(o, "UpdateTeamMemberResult");
}

export interface UpdateUserProfileRequest {
  __type?: "UpdateUserProfileRequest";
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

  /**
   * <p>The name that will be displayed as the friendly name for the user in AWS
   *       CodeStar.</p>
   */
  userArn: string | undefined;
}

export namespace UpdateUserProfileRequest {
  export const filterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateUserProfileRequest => __isa(o, "UpdateUserProfileRequest");
}

export interface UpdateUserProfileResult {
  __type?: "UpdateUserProfileResult";
  /**
   * <p>The date the user profile was created, in timestamp format.</p>
   */
  createdTimestamp?: Date;

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
   * <p>The date the user profile was last modified, in timestamp format.</p>
   */
  lastModifiedTimestamp?: Date;

  /**
   * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
   *       public/private keypair the user can use to access project resources if a project owner allows
   *       the user remote access to those resources.</p>
   */
  sshPublicKey?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn: string | undefined;
}

export namespace UpdateUserProfileResult {
  export const filterSensitiveLog = (obj: UpdateUserProfileResult): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateUserProfileResult => __isa(o, "UpdateUserProfileResult");
}

/**
 * <p>A user profile with that name already exists in this region for the AWS account. AWS
 *       CodeStar user profile names must be unique within a region for the AWS account. </p>
 */
export interface UserProfileAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "UserProfileAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace UserProfileAlreadyExistsException {
  export const filterSensitiveLog = (obj: UserProfileAlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UserProfileAlreadyExistsException => __isa(o, "UserProfileAlreadyExistsException");
}

/**
 * <p>The user profile was not found.</p>
 */
export interface UserProfileNotFoundException extends __SmithyException, $MetadataBearer {
  name: "UserProfileNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace UserProfileNotFoundException {
  export const filterSensitiveLog = (obj: UserProfileNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UserProfileNotFoundException => __isa(o, "UserProfileNotFoundException");
}

/**
 * <p>Information about a user's profile in AWS CodeStar.</p>
 */
export interface UserProfileSummary {
  __type?: "UserProfileSummary";
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

  /**
   * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
   */
  userArn?: string;
}

export namespace UserProfileSummary {
  export const filterSensitiveLog = (obj: UserProfileSummary): any => ({
    ...obj,
    ...(obj.displayName && { displayName: SENSITIVE_STRING }),
    ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UserProfileSummary => __isa(o, "UserProfileSummary");
}

/**
 * <p>The specified input is either not valid, or it could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
