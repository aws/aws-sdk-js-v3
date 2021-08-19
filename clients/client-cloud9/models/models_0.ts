import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum ConnectionType {
  CONNECT_SSH = "CONNECT_SSH",
  CONNECT_SSM = "CONNECT_SSM",
}

/**
 * <p>Metadata that is associated with Amazon Web Services resources. In particular, a name-value pair that
 *       can be associated with an Cloud9 development environment. There are two types of tags:
 *         <i>user tags</i> and <i>system tags</i>. A user tag is created
 *       by the user. A system tag is automatically created by Amazon Web Services services. A system tag is prefixed
 *       with <code>"aws:"</code> and cannot be modified by the user.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Key && { Key: SENSITIVE_STRING }),
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentEC2Request {
  /**
   * <p>The name of the environment to create.</p>
   *          <p>This name is visible to other IAM users in the same Amazon Web Services account.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the environment to create.</p>
   */
  description?: string;

  /**
   * <p>A unique, case-sensitive string that helps Cloud9 to ensure this operation completes no
   *       more than one time.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Client Tokens</a> in the
   *         <i>Amazon EC2 API Reference</i>.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The type of instance to connect to the environment (for example,
   *       <code>t2.micro</code>).</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The ID of the subnet in Amazon VPC that Cloud9 will use to communicate with the Amazon EC2
   *       instance.</p>
   */
  subnetId?: string;

  /**
   * <p>The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.
   *       To choose an AMI for the instance, you must specify a valid AMI alias or a valid Amazon EC2 Systems Manager (SSM)
   *       path.</p>
   *          <p>The default AMI is used if the parameter isn't explicitly assigned a value in the request.
   *       Because Amazon Linux AMI has ended standard support as of December 31, 2020, we recommend you
   *       choose Amazon Linux 2, which includes long term support through 2023.</p>
   *          <p>
   *             <b>AMI aliases </b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Linux (default):
   *             <code>amazonlinux-1-x86_64</code>
   *                   </b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Linux 2: <code>amazonlinux-2-x86_64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Ubuntu 18.04: <code>ubuntu-18.04-x86_64</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SSM paths</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Linux (default):
   *               <code>resolve:ssm:/aws/service/cloud9/amis/amazonlinux-1-x86_64</code>
   *                   </b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Linux 2:
   *           <code>resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2-x86_64</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Ubuntu 18.04:
   *           <code>resolve:ssm:/aws/service/cloud9/amis/ubuntu-18.04-x86_64</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  imageId?: string;

  /**
   * <p>The number of minutes until the running instance is shut down after the environment has
   *       last been used.</p>
   */
  automaticStopTimeMinutes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any
   *       IAM principal. If this value is not specified, the ARN defaults to this environment's
   *       creator.</p>
   */
  ownerArn?: string;

  /**
   * <p>An array of key-value pairs that will be associated with the new Cloud9 development
   *       environment.</p>
   */
  tags?: Tag[];

  /**
   * <p>The connection type used for connecting to an Amazon EC2 environment. Valid values are
   *         <code>CONNECT_SSH</code> (default) and <code>CONNECT_SSM</code> (connected through
   *       Amazon EC2 Systems Manager).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html">Accessing no-ingress EC2 instances with
   *         Amazon EC2 Systems Manager</a> in the <i>Cloud9 User Guide</i>.</p>
   */
  connectionType?: ConnectionType | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  dryRun?: boolean;
}

export namespace CreateEnvironmentEC2Request {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentEC2Request): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
    ...(obj.tags && { tags: SENSITIVE_STRING }),
  });
}

export interface CreateEnvironmentEC2Result {
  /**
   * <p>The ID of the environment that was created.</p>
   */
  environmentId?: string;
}

export namespace CreateEnvironmentEC2Result {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The type of environment member permissions you want to associate with this environment
   *       member. Available values include:</p>
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
  /**
   * @internal
   */
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
 * <p>Information about an environment member for an Cloud9 development environment.</p>
 */
export interface EnvironmentMember {
  /**
   * <p>The type of environment member permissions associated with this environment member.
   *       Available values include:</p>
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
  permissions: Permissions | string | undefined;

  /**
   * <p>The user ID in Identity and Access Management (IAM) of the environment member.</p>
   */
  userId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The ID of the environment for the environment member.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The time, expressed in epoch time format, when the environment member last opened the
   *       environment.</p>
   */
  lastAccess?: Date;
}

export namespace EnvironmentMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentMember): any => ({
    ...obj,
  });
}

export interface CreateEnvironmentMembershipResult {
  /**
   * <p>Information about the environment member that was added.</p>
   */
  membership: EnvironmentMember | undefined;
}

export namespace CreateEnvironmentMembershipResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentResult {}

export namespace DeleteEnvironmentResult {
  /**
   * @internal
   */
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
   * <p>The Amazon Resource Name (ARN) of the environment member to delete from the
   *       environment.</p>
   */
  userArn: string | undefined;
}

export namespace DeleteEnvironmentMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentMembershipResult {}

export namespace DeleteEnvironmentMembershipResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentMembershipResult): any => ({
    ...obj,
  });
}

export interface DescribeEnvironmentMembershipsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an individual environment member to get information
   *       about. If no value is specified, information about all environment members are
   *       returned.</p>
   */
  userArn?: string;

  /**
   * <p>The ID of the environment to get environment member information about.</p>
   */
  environmentId?: string;

  /**
   * <p>The type of environment member permissions to get information about. Available values
   *       include:</p>
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
   * <p>During a previous call, if there are more than 25 items in the list, only the first 25
   *       items are returned, along with a unique string called a <i>next token</i>. To
   *       get the next batch of items in the list, call this operation again, adding the next token to
   *       the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment members to get information about.</p>
   */
  maxResults?: number;
}

export namespace DescribeEnvironmentMembershipsRequest {
  /**
   * @internal
   */
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
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along
   *       with a unique string called a <i>next token</i>. To get the next batch of items
   *       in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;
}

export namespace DescribeEnvironmentMembershipsResult {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
 * <p>Information about the current creation or deletion lifecycle state of an Cloud9 development
 *       environment.</p>
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
   * <p>If the environment failed to delete, the Amazon Resource Name (ARN) of the related Amazon Web Services
   *       resource.</p>
   */
  failureResource?: string;
}

export namespace EnvironmentLifecycle {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentLifecycle): any => ({
    ...obj,
  });
}

export enum ManagedCredentialsStatus {
  DISABLED_BY_COLLABORATOR = "DISABLED_BY_COLLABORATOR",
  DISABLED_BY_DEFAULT = "DISABLED_BY_DEFAULT",
  DISABLED_BY_OWNER = "DISABLED_BY_OWNER",
  ENABLED_BY_OWNER = "ENABLED_BY_OWNER",
  ENABLED_ON_CREATE = "ENABLED_ON_CREATE",
  FAILED_REMOVAL_BY_COLLABORATOR = "FAILED_REMOVAL_BY_COLLABORATOR",
  FAILED_REMOVAL_BY_OWNER = "FAILED_REMOVAL_BY_OWNER",
  PENDING_REMOVAL_BY_COLLABORATOR = "PENDING_REMOVAL_BY_COLLABORATOR",
  PENDING_REMOVAL_BY_OWNER = "PENDING_REMOVAL_BY_OWNER",
  PENDING_START_REMOVAL_BY_COLLABORATOR = "PENDING_START_REMOVAL_BY_COLLABORATOR",
  PENDING_START_REMOVAL_BY_OWNER = "PENDING_START_REMOVAL_BY_OWNER",
}

export enum EnvironmentType {
  EC2 = "ec2",
  SSH = "ssh",
}

/**
 * <p>Information about an Cloud9 development environment.</p>
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
  type: EnvironmentType | string | undefined;

  /**
   * <p>The connection type used for connecting to an Amazon EC2 environment. <code>CONNECT_SSH</code>
   *       is selected by default.</p>
   */
  connectionType?: ConnectionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner.</p>
   */
  ownerArn: string | undefined;

  /**
   * <p>The state of the environment in its creation or deletion lifecycle.</p>
   */
  lifecycle?: EnvironmentLifecycle;

  /**
   * <p>Describes the status of Amazon Web Services managed temporary credentials for the Cloud9 environment.
   *       Available values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED_ON_CREATE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED_BY_OWNER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED_BY_DEFAULT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED_BY_OWNER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED_BY_COLLABORATOR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_REMOVAL_BY_COLLABORATOR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_REMOVAL_BY_OWNER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_REMOVAL_BY_COLLABORATOR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED_BY_OWNER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED_BY_DEFAULT</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  managedCredentialsStatus?: ManagedCredentialsStatus | string;
}

export namespace Environment {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  status: EnvironmentStatus | string | undefined;

  /**
   * <p>Any informational message about the status of the environment.</p>
   */
  message: string | undefined;
}

export namespace DescribeEnvironmentStatusResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEnvironmentStatusResult): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsRequest {
  /**
   * <p>During a previous call, if there are more than 25 items in the list, only the first 25
   *       items are returned, along with a unique string called a <i>next token</i>. To
   *       get the next batch of items in the list, call this operation again, adding the next token to
   *       the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environments to get identifiers for.</p>
   */
  maxResults?: number;
}

export namespace ListEnvironmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
    ...obj,
  });
}

export interface ListEnvironmentsResult {
  /**
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along
   *       with a unique string called a <i>next token</i>. To get the next batch of items
   *       in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of environment identifiers.</p>
   */
  environmentIds?: string[];
}

export namespace ListEnvironmentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Cloud9 development environment to get the tags
   *       for.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags associated with the Cloud9 development environment.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentAccessException): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Cloud9 development environment to add tags
   *       to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tags to add to the given Cloud9 development environment.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Cloud9 development environment to remove tags
   *       from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag names of the tags to remove from the given Cloud9 development
   *       environment.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export enum ManagedCredentialsAction {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
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

  /**
   * <p>Allows the environment owner to turn on or turn off the Amazon Web Services managed temporary
   *       credentials for an Cloud9 environment by using one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLE</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only the environment owner can change the status of managed temporary credentials. An <code>AccessDeniedException</code> is thrown if an attempt to turn on or turn off managed temporary credentials is made by an account that's not the environment
   *       owner.</p>
   *          </note>
   */
  managedCredentialsAction?: ManagedCredentialsAction | string;
}

export namespace UpdateEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING }),
  });
}

export interface UpdateEnvironmentResult {}

export namespace UpdateEnvironmentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentResult): any => ({
    ...obj,
  });
}

export interface UpdateEnvironmentMembershipRequest {
  /**
   * <p>The ID of the environment for the environment member whose settings you want to
   *       change.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member whose settings you want to
   *       change.</p>
   */
  userArn: string | undefined;

  /**
   * <p>The replacement type of environment member permissions you want to associate with this
   *       environment member. Available values include:</p>
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnvironmentMembershipResult): any => ({
    ...obj,
  });
}
