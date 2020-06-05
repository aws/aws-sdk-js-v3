import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The target request is invalid.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  className?: string;
  code?: number;
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

/**
 * <p>A conflict occurred.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  className?: string;
  code?: number;
  message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

export interface CreateEnvironmentEC2Request {
  __type?: "CreateEnvironmentEC2Request";
  /**
   * <p>The number of minutes until the running instance is shut down after the environment has last been used.</p>
   */
  automaticStopTimeMinutes?: number;

  /**
   * <p>A unique, case-sensitive string that helps AWS Cloud9 to ensure this operation completes no more than one time.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Client Tokens</a> in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The description of the environment to create.</p>
   */
  description?: string;

  /**
   * <p>The type of instance to connect to the environment (for example, <code>t2.micro</code>).</p>
   */
  instanceType: string | undefined;

  /**
   * <p>The name of the environment to create.</p>
   *          <p>This name is visible to other AWS IAM users in the same AWS account.</p>
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any AWS IAM principal. If this value is not specified, the ARN defaults to this environment's creator.</p>
   */
  ownerArn?: string;

  /**
   * <p>The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.</p>
   */
  subnetId?: string;
}

export namespace CreateEnvironmentEC2Request {
  export const filterSensitiveLog = (
    obj: CreateEnvironmentEC2Request
  ): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CreateEnvironmentEC2Request =>
    __isa(o, "CreateEnvironmentEC2Request");
}

export interface CreateEnvironmentEC2Result {
  __type?: "CreateEnvironmentEC2Result";
  /**
   * <p>The ID of the environment that was created.</p>
   */
  environmentId?: string;
}

export namespace CreateEnvironmentEC2Result {
  export const filterSensitiveLog = (obj: CreateEnvironmentEC2Result): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEnvironmentEC2Result =>
    __isa(o, "CreateEnvironmentEC2Result");
}

export interface CreateEnvironmentMembershipRequest {
  __type?: "CreateEnvironmentMembershipRequest";
  /**
   * <p>The ID of the environment that contains the environment member you want to add.</p>
   */
  environmentId: string | undefined;

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

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member you want to add.</p>
   */
  userArn: string | undefined;
}

export namespace CreateEnvironmentMembershipRequest {
  export const filterSensitiveLog = (
    obj: CreateEnvironmentMembershipRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEnvironmentMembershipRequest =>
    __isa(o, "CreateEnvironmentMembershipRequest");
}

export interface CreateEnvironmentMembershipResult {
  __type?: "CreateEnvironmentMembershipResult";
  /**
   * <p>Information about the environment member that was added.</p>
   */
  membership?: EnvironmentMember;
}

export namespace CreateEnvironmentMembershipResult {
  export const filterSensitiveLog = (
    obj: CreateEnvironmentMembershipResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEnvironmentMembershipResult =>
    __isa(o, "CreateEnvironmentMembershipResult");
}

export interface DeleteEnvironmentMembershipRequest {
  __type?: "DeleteEnvironmentMembershipRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteEnvironmentMembershipRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEnvironmentMembershipRequest =>
    __isa(o, "DeleteEnvironmentMembershipRequest");
}

export interface DeleteEnvironmentMembershipResult {
  __type?: "DeleteEnvironmentMembershipResult";
}

export namespace DeleteEnvironmentMembershipResult {
  export const filterSensitiveLog = (
    obj: DeleteEnvironmentMembershipResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEnvironmentMembershipResult =>
    __isa(o, "DeleteEnvironmentMembershipResult");
}

export interface DeleteEnvironmentRequest {
  __type?: "DeleteEnvironmentRequest";
  /**
   * <p>The ID of the environment to delete.</p>
   */
  environmentId: string | undefined;
}

export namespace DeleteEnvironmentRequest {
  export const filterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEnvironmentRequest =>
    __isa(o, "DeleteEnvironmentRequest");
}

export interface DeleteEnvironmentResult {
  __type?: "DeleteEnvironmentResult";
}

export namespace DeleteEnvironmentResult {
  export const filterSensitiveLog = (obj: DeleteEnvironmentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEnvironmentResult =>
    __isa(o, "DeleteEnvironmentResult");
}

export interface DescribeEnvironmentMembershipsRequest {
  __type?: "DescribeEnvironmentMembershipsRequest";
  /**
   * <p>The ID of the environment to get environment member information about.</p>
   */
  environmentId?: string;

  /**
   * <p>The maximum number of environment members to get information about.</p>
   */
  maxResults?: number;

  /**
   * <p>During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>
   */
  nextToken?: string;

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
   * <p>The Amazon Resource Name (ARN) of an individual environment member to get information about. If no value is specified, information about all environment members are returned.</p>
   */
  userArn?: string;
}

export namespace DescribeEnvironmentMembershipsRequest {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentMembershipsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentMembershipsRequest =>
    __isa(o, "DescribeEnvironmentMembershipsRequest");
}

export interface DescribeEnvironmentMembershipsResult {
  __type?: "DescribeEnvironmentMembershipsResult";
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
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentMembershipsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentMembershipsResult =>
    __isa(o, "DescribeEnvironmentMembershipsResult");
}

export interface DescribeEnvironmentsRequest {
  __type?: "DescribeEnvironmentsRequest";
  /**
   * <p>The IDs of individual environments to get information about.</p>
   */
  environmentIds: string[] | undefined;
}

export namespace DescribeEnvironmentsRequest {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentsRequest =>
    __isa(o, "DescribeEnvironmentsRequest");
}

export interface DescribeEnvironmentsResult {
  __type?: "DescribeEnvironmentsResult";
  /**
   * <p>Information about the environments that are returned.</p>
   */
  environments?: Environment[];
}

export namespace DescribeEnvironmentsResult {
  export const filterSensitiveLog = (obj: DescribeEnvironmentsResult): any => ({
    ...obj,
    ...(obj.environments && {
      environments: obj.environments.map(item =>
        Environment.filterSensitiveLog(item)
      )
    })
  });
  export const isa = (o: any): o is DescribeEnvironmentsResult =>
    __isa(o, "DescribeEnvironmentsResult");
}

export interface DescribeEnvironmentStatusRequest {
  __type?: "DescribeEnvironmentStatusRequest";
  /**
   * <p>The ID of the environment to get status information about.</p>
   */
  environmentId: string | undefined;
}

export namespace DescribeEnvironmentStatusRequest {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentStatusRequest =>
    __isa(o, "DescribeEnvironmentStatusRequest");
}

export interface DescribeEnvironmentStatusResult {
  __type?: "DescribeEnvironmentStatusResult";
  /**
   * <p>Any informational message about the status of the environment.</p>
   */
  message?: string;

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
}

export namespace DescribeEnvironmentStatusResult {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentStatusResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentStatusResult =>
    __isa(o, "DescribeEnvironmentStatusResult");
}

/**
 * <p>Information about an AWS Cloud9 development environment.</p>
 */
export interface Environment {
  __type?: "Environment";
  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn?: string;

  /**
   * <p>The description for the environment.</p>
   */
  description?: string;

  /**
   * <p>The ID of the environment.</p>
   */
  id?: string;

  /**
   * <p>The state of the environment in its creation or deletion lifecycle.</p>
   */
  lifecycle?: EnvironmentLifecycle;

  /**
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner.</p>
   */
  ownerArn?: string;

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
}

export namespace Environment {
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is Environment => __isa(o, "Environment");
}

/**
 * <p>Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment.</p>
 */
export interface EnvironmentLifecycle {
  __type?: "EnvironmentLifecycle";
  /**
   * <p>If the environment failed to delete, the Amazon Resource Name (ARN) of the related AWS resource.</p>
   */
  failureResource?: string;

  /**
   * <p>Any informational message about the lifecycle state of the environment.</p>
   */
  reason?: string;

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
}

export namespace EnvironmentLifecycle {
  export const filterSensitiveLog = (obj: EnvironmentLifecycle): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentLifecycle =>
    __isa(o, "EnvironmentLifecycle");
}

export enum EnvironmentLifecycleStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING"
}

/**
 * <p>Information about an environment member for an AWS Cloud9 development environment.</p>
 */
export interface EnvironmentMember {
  __type?: "EnvironmentMember";
  /**
   * <p>The ID of the environment for the environment member.</p>
   */
  environmentId?: string;

  /**
   * <p>The time, expressed in epoch time format, when the environment member last opened the environment.</p>
   */
  lastAccess?: Date;

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
   * <p>The Amazon Resource Name (ARN) of the environment member.</p>
   */
  userArn?: string;

  /**
   * <p>The user ID in AWS Identity and Access Management (AWS IAM) of the environment member.</p>
   */
  userId?: string;
}

export namespace EnvironmentMember {
  export const filterSensitiveLog = (obj: EnvironmentMember): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentMember =>
    __isa(o, "EnvironmentMember");
}

export enum EnvironmentStatus {
  CONNECTING = "connecting",
  CREATING = "creating",
  DELETING = "deleting",
  ERROR = "error",
  READY = "ready",
  STOPPED = "stopped",
  STOPPING = "stopping"
}

export enum EnvironmentType {
  EC2 = "ec2",
  SSH = "ssh"
}

/**
 * <p>An access permissions issue occurred.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  className?: string;
  code?: number;
  message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForbiddenException =>
    __isa(o, "ForbiddenException");
}

/**
 * <p>An internal server error occurred.</p>
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  className?: string;
  code?: number;
  message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (
    obj: InternalServerErrorException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerErrorException =>
    __isa(o, "InternalServerErrorException");
}

/**
 * <p>A service limit was exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  className?: string;
  code?: number;
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListEnvironmentsRequest {
  __type?: "ListEnvironmentsRequest";
  /**
   * <p>The maximum number of environments to get identifiers for.</p>
   */
  maxResults?: number;

  /**
   * <p>During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.</p>
   */
  nextToken?: string;
}

export namespace ListEnvironmentsRequest {
  export const filterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEnvironmentsRequest =>
    __isa(o, "ListEnvironmentsRequest");
}

export interface ListEnvironmentsResult {
  __type?: "ListEnvironmentsResult";
  /**
   * <p>The list of environment identifiers.</p>
   */
  environmentIds?: string[];

  /**
   * <p>If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a <i>next token</i>. To get the next batch of items in the list, call this operation again, adding the next token to the call.</p>
   */
  nextToken?: string;
}

export namespace ListEnvironmentsResult {
  export const filterSensitiveLog = (obj: ListEnvironmentsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEnvironmentsResult =>
    __isa(o, "ListEnvironmentsResult");
}

export enum MemberPermissions {
  READ_ONLY = "read-only",
  READ_WRITE = "read-write"
}

/**
 * <p>The target resource cannot be found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  className?: string;
  code?: number;
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotFoundException =>
    __isa(o, "NotFoundException");
}

export enum Permissions {
  OWNER = "owner",
  READ_ONLY = "read-only",
  READ_WRITE = "read-write"
}

/**
 * <p>Too many service requests were made over the given time period.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  className?: string;
  code?: number;
  message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyRequestsException =>
    __isa(o, "TooManyRequestsException");
}

export interface UpdateEnvironmentMembershipRequest {
  __type?: "UpdateEnvironmentMembershipRequest";
  /**
   * <p>The ID of the environment for the environment member whose settings you want to change.</p>
   */
  environmentId: string | undefined;

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

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member whose settings you want to change.</p>
   */
  userArn: string | undefined;
}

export namespace UpdateEnvironmentMembershipRequest {
  export const filterSensitiveLog = (
    obj: UpdateEnvironmentMembershipRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEnvironmentMembershipRequest =>
    __isa(o, "UpdateEnvironmentMembershipRequest");
}

export interface UpdateEnvironmentMembershipResult {
  __type?: "UpdateEnvironmentMembershipResult";
  /**
   * <p>Information about the environment member whose settings were changed.</p>
   */
  membership?: EnvironmentMember;
}

export namespace UpdateEnvironmentMembershipResult {
  export const filterSensitiveLog = (
    obj: UpdateEnvironmentMembershipResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEnvironmentMembershipResult =>
    __isa(o, "UpdateEnvironmentMembershipResult");
}

export interface UpdateEnvironmentRequest {
  __type?: "UpdateEnvironmentRequest";
  /**
   * <p>Any new or replacement description for the environment.</p>
   */
  description?: string;

  /**
   * <p>The ID of the environment to change settings.</p>
   */
  environmentId: string | undefined;

  /**
   * <p>A replacement name for the environment.</p>
   */
  name?: string;
}

export namespace UpdateEnvironmentRequest {
  export const filterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
    ...obj,
    ...(obj.description && { description: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateEnvironmentRequest =>
    __isa(o, "UpdateEnvironmentRequest");
}

export interface UpdateEnvironmentResult {
  __type?: "UpdateEnvironmentResult";
}

export namespace UpdateEnvironmentResult {
  export const filterSensitiveLog = (obj: UpdateEnvironmentResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEnvironmentResult =>
    __isa(o, "UpdateEnvironmentResult");
}
