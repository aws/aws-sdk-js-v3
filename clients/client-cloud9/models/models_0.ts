import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The target request is invalid.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>A conflict occurred.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum ConnectionType {
  CONNECT_SSH = "CONNECT_SSH",
  CONNECT_SSM = "CONNECT_SSM",
}

/**
 * <p>Metadata that is associated with AWS resources. In particular, a name-value pair that can be associated with an AWS Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by AWS services. A system tag is prefixed with "aws:" and cannot be modified by the user.</p>
 */
export interface Tag {
  /**
   * <p>The <b>name</b> part of a tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The <b>value</b> part of a tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentEC2Request {
  /**
   * <p>The name of the environment to create.</p>
   *          <p>This name is visible to other AWS IAM users in the same AWS account.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the environment to create.</p>
   */
  description?: string;

  /**
   * <p>A unique, case-sensitive string that helps AWS Cloud9 to ensure this operation completes no more than one time.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Client Tokens</a> in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The type of instance to connect to the environment (for example, <code>t2.micro</code>).</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.</p>
   */
  subnetId?: string;

  /**
   * <p>The number of minutes until the running instance is shut down after the environment has last been used.</p>
   */
  automaticStopTimeMinutes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any AWS IAM principal. If this value is not specified, the ARN defaults to this environment's creator.</p>
   */
  ownerArn?: string;

  /**
   * <p>An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.</p>
   */
  tags?: Tag[];

  /**
   * <p>The connection type used for connecting to an Amazon EC2 environment.</p>
   */
  connectionType?: ConnectionType | string;
}

export namespace CreateEnvironmentEC2Request {
  export const filterSensitiveLog = (obj: CreateEnvironmentEC2Request): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentEC2Result {
  /**
   * <p>The ID of the environment that was created.</p>
   */
  environmentId?: string;
}

export namespace CreateEnvironmentEC2Result {
  export const filterSensitiveLog = (obj: CreateEnvironmentEC2Result): any => ({
    ...obj,
  });
}

/**
 * <p>An access permissions issue occurred.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>An internal server error occurred.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  message?: string;
  className?: string;
  code?: number;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>A service limit was exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The target resource cannot be found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Too many service requests were made over the given time period.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

export enum MemberPermissions {
  READ_ONLY = "read-only",
  READ_WRITE = "read-write",
}

export interface CreateEnvironmentMembershipRequest {
  /**
   * <p>The ID of the environment that contains the environment member you want to add.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member you want to add.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The type of environment member permissions you want to associate with this environment member. Available values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>read-only</code>: Has read-only access to the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>read-write</code>: Has read-write access to the environment.</p>
   *             </li>
   *          </ul>
   */
  permissions: MemberPermissions | string | undefined;
}

export namespace CreateEnvironmentMembershipRequest {
  export const filterSensitiveLog = (obj: CreateEnvironmentMembershipRequest): any => ({
    ...obj,
  });
}

export enum Permissions {
  OWNER = "owner",
  READ_ONLY = "read-only",
  READ_WRITE = "read-write",
}

/**
 * <p>Information about an environment member for an AWS Cloud9 development environment.</p>
 */
export interface EnvironmentMember {
  /**
   * <p>The type of environment member permissions associated with this environment member. Available values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>owner</code>: Owns the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>read-only</code>: Has read-only access to the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>read-write</code>: Has read-write access to the environment.</p>
   *             </li>
   *          </ul>
   */
  permissions?: Permissions | string;

  /**
   * <p>The user ID in AWS Identity and Access Management (AWS IAM) of the environment member.</p>
   */
  userId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member.</p>
   */
  userArn?: string;

  /**
   * <p>The ID of the environment for the environment member.</p>
   */
  environmentId?: string;

  /**
   * <p>The time, expressed in epoch time format, when the environment member last opened the environment.</p>
   */
  lastAccess?: Date;
}

export namespace EnvironmentMember {
  export const filterSensitiveLog = (obj: EnvironmentMember): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentMembershipResult {
  /**
   * <p>Information about the environment member that was added.</p>
   */
  membership?: EnvironmentMember;
}

export namespace CreateEnvironmentMembershipResult {
  export const filterSensitiveLog = (obj: CreateEnvironmentMembershipResult): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentRequest {
  /**
   * <p>The ID of the environment to delete.</p>
   */
  environmentId: string | undefined;
}

export namespace DeleteEnvironmentRequest {
  export const filterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentResult {}

export namespace DeleteEnvironmentResult {
  export const filterSensitiveLog = (obj: DeleteEnvironmentResult): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentMembershipRequest {
  /**
   * <p>The ID of the environment to delete the environment member from.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member to delete from the environment.</p>
   */
  userArn: string | undefined;
}

export namespace DeleteEnvironmentMembershipRequest {
  export const filterSensitiveLog = (obj: DeleteEnvironmentMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentMembershipResult {}

export namespace DeleteEnvironmentMembershipResult {
  export const filterSensitiveLog = (obj: DeleteEnvironmentMembershipResult): any => ({
    ...obj,
  });
}

export interface DescribeEnvironmentMembershipsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an individual environment member to get information about. If no value is specified, information about all environment members are returned.</p>
   */
  userArn?: string;

  /**
   * <p>The ID of the environment to get environment member information about.</p>
   */
  environmentId?: string;

  /**
   * <p>The type of environment member permissions to get information about. Available values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>owner</code>: Owns the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>read-only</code>: Has read-only access to the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>read-write</code>: Has read-write access to the environment.</p>
   *             </li>
   *          </ul>
   *          <p>If no value is specified, information about all environment members are returned.</p>
   */
  permissions?: (Permissions | string)[];

  /**
   * <p>During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment members to get information about.</p>
   */
  maxResults?: number;
}

export namespace DescribeEnvironmentMembershipsRequest {
  export const filterSensitiveLog = (obj: DescribeEnvironmentMembershipsRequest): any => ({
    ...obj,
  });
}

export interface DescribeEnvironmentMembershipsResult {
  /**
   * <p>Information about the environment members for the environment.</p>
   */
  memberships?: EnvironmentMember[];

  /**
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;
}

export namespace DescribeEnvironmentMembershipsResult {
  export const filterSensitiveLog = (obj: DescribeEnvironmentMembershipsResult): any => ({
    ...obj,
  });
}

export interface DescribeEnvironmentsRequest {
  /**
   * <p>The IDs of individual environments to get information about.</p>
   */
  environmentIds: string[] | undefined;
}

export namespace DescribeEnvironmentsRequest {
  export const filterSensitiveLog = (obj: DescribeEnvironmentsRequest): any => ({
    ...obj,
  });
}

export enum EnvironmentLifecycleStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

/**
 * <p>Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment.</p>
 */
export interface EnvironmentLifecycle {
  /**
   * <p>The current creation or deletion lifecycle state of the environment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: The environment is in the process of being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATED</code>: The environment was successfully created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>: The environment failed to be created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: The environment is in the process of being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_FAILED</code>: The environment failed to delete.</p>
   *             </li>
   *          </ul>
   */
  status?: EnvironmentLifecycleStatus | string;

  /**
   * <p>Any informational message about the lifecycle state of the environment.</p>
   */
  reason?: string;

  /**
   * <p>If the environment failed to delete, the Amazon Resource Name (ARN) of the related AWS resource.</p>
   */
  failureResource?: string;
}

export namespace EnvironmentLifecycle {
  export const filterSensitiveLog = (obj: EnvironmentLifecycle): any => ({
    ...obj,
  });
}

export enum EnvironmentType {
  EC2 = "ec2",
  SSH = "ssh",
}

/**
 * <p>Information about an AWS Cloud9 development environment.</p>
 */
export interface Environment {
  /**
   * <p>The ID of the environment.</p>
   */
  id?: string;

  /**
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * <p>The description for the environment.</p>
   */
  description?: string;

  /**
   * <p>The type of environment. Valid values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2</code>: An Amazon Elastic Compute Cloud (Amazon EC2) instance connects to the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ssh</code>: Your own server connects to the environment.</p>
   *             </li>
   *          </ul>
   */
  type?: EnvironmentType | string;

  /**
   * <p>The connection type used for connecting to an Amazon EC2 environment.</p>
   */
  connectionType?: ConnectionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner.</p>
   */
  ownerArn?: string;

  /**
   * <p>The state of the environment in its creation or deletion lifecycle.</p>
   */
  lifecycle?: EnvironmentLifecycle;
}

export namespace Environment {
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface DescribeEnvironmentsResult {
  /**
   * <p>Information about the environments that are returned.</p>
   */
  environments?: Environment[];
}

export namespace DescribeEnvironmentsResult {
  export const filterSensitiveLog = (obj: DescribeEnvironmentsResult): any => ({
    ...obj,
    ...(obj.environments && { environments: obj.environments.map((item) => Environment.filterSensitiveLog(item)) }),
  });
}

export interface DescribeEnvironmentStatusRequest {
  /**
   * <p>The ID of the environment to get status information about.</p>
   */
  environmentId: string | undefined;
}

export namespace DescribeEnvironmentStatusRequest {
  export const filterSensitiveLog = (obj: DescribeEnvironmentStatusRequest): any => ({
    ...obj,
  });
}

export enum EnvironmentStatus {
  CONNECTING = "connecting",
  CREATING = "creating",
  DELETING = "deleting",
  ERROR = "error",
  READY = "ready",
  STOPPED = "stopped",
  STOPPING = "stopping",
}

export interface DescribeEnvironmentStatusResult {
  /**
   * <p>The status of the environment. Available values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>connecting</code>: The environment is connecting.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code>: The environment is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deleting</code>: The environment is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>error</code>: The environment is in an error state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ready</code>: The environment is ready.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopped</code>: The environment is stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>stopping</code>: The environment is stopping.</p>
   *             </li>
   *          </ul>
   */
  status?: EnvironmentStatus | string;

  /**
   * <p>Any informational message about the status of the environment.</p>
   */
  message?: string;
}

export namespace DescribeEnvironmentStatusResult {
  export const filterSensitiveLog = (obj: DescribeEnvironmentStatusResult): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsRequest {
  /**
   * <p>During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environments to get identifiers for.</p>
   */
  maxResults?: number;
}

export namespace ListEnvironmentsRequest {
  export const filterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsResult {
  /**
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of environment identifiers.</p>
   */
  environmentIds?: string[];
}

export namespace ListEnvironmentsResult {
  export const filterSensitiveLog = (obj: ListEnvironmentsResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Cloud9 development environment to get the tags for.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags associated with the AWS Cloud9 development environment.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A concurrent access issue occurred.</p>
 */
export interface ConcurrentAccessException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentAccessException";
  $fault: "client";
  message?: string;
  className?: string;
  code?: number;
}

export namespace ConcurrentAccessException {
  export const filterSensitiveLog = (obj: ConcurrentAccessException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Cloud9 development environment to add tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tags to add to the given AWS Cloud9 development environment.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Cloud9 development environment to remove tags from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag names of the tags to remove from the given AWS Cloud9 development environment.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentRequest {
  /**
   * <p>The ID of the environment to change settings.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>A replacement name for the environment.</p>
   */
  name?: string;

  /**
   * <p>Any new or replacement description for the environment.</p>
   */
  description?: string;
}

export namespace UpdateEnvironmentRequest {
  export const filterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentResult {}

export namespace UpdateEnvironmentResult {
  export const filterSensitiveLog = (obj: UpdateEnvironmentResult): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentMembershipRequest {
  /**
   * <p>The ID of the environment for the environment member whose settings you want to change.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member whose settings you want to change.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The replacement type of environment member permissions you want to associate with this environment member. Available values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>read-only</code>: Has read-only access to the environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>read-write</code>: Has read-write access to the environment.</p>
   *             </li>
   *          </ul>
   */
  permissions: MemberPermissions | string | undefined;
}

export namespace UpdateEnvironmentMembershipRequest {
  export const filterSensitiveLog = (obj: UpdateEnvironmentMembershipRequest): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentMembershipResult {
  /**
   * <p>Information about the environment member whose settings were changed.</p>
   */
  membership?: EnvironmentMember;
}

export namespace UpdateEnvironmentMembershipResult {
  export const filterSensitiveLog = (obj: UpdateEnvironmentMembershipResult): any => ({
    ...obj,
  });
}
