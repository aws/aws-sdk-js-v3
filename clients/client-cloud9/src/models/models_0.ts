// smithy-typescript generated code
import type {
  ConnectionType,
  EnvironmentLifecycleStatus,
  EnvironmentStatus,
  EnvironmentType,
  ManagedCredentialsAction,
  ManagedCredentialsStatus,
  MemberPermissions,
  Permissions,
} from "./enums";

/**
 * Metadata that is associated with Amazon Web Services resources. In particular, a name-value pair that can be associated with an Cloud9 development environment. There are two types of tags: *user tags* and *system tags*. A user tag is created by the user. A system tag is automatically created by Amazon Web Services services. A system tag is prefixed with `"aws:"` and cannot be modified by the user.
 *
 * @public
 */
export interface Tag {
  /**
   * The **name** part of a tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The **value** part of a tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentEC2Request {
  /**
   * The name of the environment to create.
   *
   * This name is visible to other IAM users in the same Amazon Web Services account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the environment to create.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive string that helps Cloud9 to ensure this operation completes no more than one time.
   *
   * For more information, see [Client Tokens](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The type of instance to connect to the environment (for example, `t2.micro`).
   *
   * @public
   */
  instanceType: string | undefined;

  /**
   * The ID of the subnet in Amazon VPC that Cloud9 will use to communicate with the Amazon EC2 instance.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. To choose an AMI for the instance, you must specify a valid AMI alias or a valid Amazon EC2 Systems Manager (SSM) path.
   *
   * We recommend using Amazon Linux 2023 as the AMI to create your environment as it is fully supported.
   *
   * From December 16, 2024, Ubuntu 18.04 will be removed from the list of available `imageIds` for Cloud9. This change is necessary as Ubuntu 18.04 has ended standard support on May 31, 2023. This change will only affect direct API consumers, and not Cloud9 console users.
   *
   * Since Ubuntu 18.04 has ended standard support as of May 31, 2023, we recommend you choose Ubuntu 22.04.
   *
   * **AMI aliases**
   *
   * - Amazon Linux 2023 (recommended): `amazonlinux-2023-x86_64`
   * - Ubuntu 22.04: `ubuntu-22.04-x86_64`
   *
   * **SSM paths**
   *
   * - Amazon Linux 2023 (recommended): `resolve:ssm:/aws/service/cloud9/amis/amazonlinux-2023-x86_64`
   * - Ubuntu 22.04: `resolve:ssm:/aws/service/cloud9/amis/ubuntu-22.04-x86_64`
   *
   * @public
   */
  imageId: string | undefined;

  /**
   * The number of minutes until the running instance is shut down after the environment has last been used.
   *
   * @public
   */
  automaticStopTimeMinutes?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any IAM principal. If this value is not specified, the ARN defaults to this environment's creator.
   *
   * @public
   */
  ownerArn?: string | undefined;

  /**
   * An array of key-value pairs that will be associated with the new Cloud9 development environment.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The connection type used for connecting to an Amazon EC2 environment. Valid values are `CONNECT_SSH` (default) and `CONNECT_SSM` (connected through Amazon EC2 Systems Manager).
   *
   * For more information, see [Accessing no-ingress EC2 instances with Amazon EC2 Systems Manager](https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html) in the *Cloud9 User Guide*.
   *
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is `DryRunOperation`. Otherwise, it is `UnauthorizedOperation`.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentEC2Result {
  /**
   * The ID of the environment that was created.
   *
   * @public
   */
  environmentId?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentMembershipRequest {
  /**
   * The ID of the environment that contains the environment member you want to add.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment member you want to add.
   *
   * @public
   */
  userArn: string | undefined;

  /**
   * The type of environment member permissions you want to associate with this environment member. Available values include:
   *
   * - `read-only`: Has read-only access to the environment.
   * - `read-write`: Has read-write access to the environment.
   *
   * @public
   */
  permissions: MemberPermissions | undefined;
}

/**
 * Information about an environment member for an Cloud9 development environment.
 *
 * @public
 */
export interface EnvironmentMember {
  /**
   * The type of environment member permissions associated with this environment member. Available values include:
   *
   * - `owner`: Owns the environment.
   * - `read-only`: Has read-only access to the environment.
   * - `read-write`: Has read-write access to the environment.
   *
   * @public
   */
  permissions: Permissions | undefined;

  /**
   * The user ID in Identity and Access Management (IAM) of the environment member.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment member.
   *
   * @public
   */
  userArn: string | undefined;

  /**
   * The ID of the environment for the environment member.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The time, expressed in epoch time format, when the environment member last opened the environment.
   *
   * @public
   */
  lastAccess?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentMembershipResult {
  /**
   * Information about the environment member that was added.
   *
   * @public
   */
  membership: EnvironmentMember | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * The ID of the environment to delete.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResult {}

/**
 * @public
 */
export interface DeleteEnvironmentMembershipRequest {
  /**
   * The ID of the environment to delete the environment member from.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment member to delete from the environment.
   *
   * @public
   */
  userArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentMembershipResult {}

/**
 * @public
 */
export interface DescribeEnvironmentMembershipsRequest {
  /**
   * The Amazon Resource Name (ARN) of an individual environment member to get information about. If no value is specified, information about all environment members are returned.
   *
   * @public
   */
  userArn?: string | undefined;

  /**
   * The ID of the environment to get environment member information about.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The type of environment member permissions to get information about. Available values include:
   *
   * - `owner`: Owns the environment.
   * - `read-only`: Has read-only access to the environment.
   * - `read-write`: Has read-write access to the environment.
   *
   * If no value is specified, information about all environment members are returned.
   *
   * @public
   */
  permissions?: Permissions[] | undefined;

  /**
   * During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a *next token*. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environment members to get information about.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEnvironmentMembershipsResult {
  /**
   * Information about the environment members for the environment.
   *
   * @public
   */
  memberships?: EnvironmentMember[] | undefined;

  /**
   * If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a *next token*. To get the next batch of items in the list, call this operation again, adding the next token to the call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEnvironmentsRequest {
  /**
   * The IDs of individual environments to get information about.
   *
   * @public
   */
  environmentIds: string[] | undefined;
}

/**
 * Information about the current creation or deletion lifecycle state of an Cloud9 development environment.
 *
 * @public
 */
export interface EnvironmentLifecycle {
  /**
   * The current creation or deletion lifecycle state of the environment.
   *
   * - `CREATING`: The environment is in the process of being created.
   * - `CREATED`: The environment was successfully created.
   * - `CREATE_FAILED`: The environment failed to be created.
   * - `DELETING`: The environment is in the process of being deleted.
   * - `DELETE_FAILED`: The environment failed to delete.
   *
   * @public
   */
  status?: EnvironmentLifecycleStatus | undefined;

  /**
   * Any informational message about the lifecycle state of the environment.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * If the environment failed to delete, the Amazon Resource Name (ARN) of the related Amazon Web Services resource.
   *
   * @public
   */
  failureResource?: string | undefined;
}

/**
 * Information about an Cloud9 development environment.
 *
 * @public
 */
export interface Environment {
  /**
   * The ID of the environment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description for the environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of environment. Valid values include the following:
   *
   * - `ec2`: An Amazon Elastic Compute Cloud (Amazon EC2) instance connects to the environment.
   * - `ssh`: Your own server connects to the environment.
   *
   * @public
   */
  type: EnvironmentType | undefined;

  /**
   * The connection type used for connecting to an Amazon EC2 environment. `CONNECT_SSH` is selected by default.
   *
   * @public
   */
  connectionType?: ConnectionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment owner.
   *
   * @public
   */
  ownerArn: string | undefined;

  /**
   * The state of the environment in its creation or deletion lifecycle.
   *
   * @public
   */
  lifecycle?: EnvironmentLifecycle | undefined;

  /**
   * Describes the status of Amazon Web Services managed temporary credentials for the Cloud9 environment. Available values are:
   *
   * - `ENABLED_ON_CREATE`
   * - `ENABLED_BY_OWNER`
   * - `DISABLED_BY_DEFAULT`
   * - `DISABLED_BY_OWNER`
   * - `DISABLED_BY_COLLABORATOR`
   * - `PENDING_REMOVAL_BY_COLLABORATOR`
   * - `PENDING_REMOVAL_BY_OWNER`
   * - `FAILED_REMOVAL_BY_COLLABORATOR`
   * - `ENABLED_BY_OWNER`
   * - `DISABLED_BY_DEFAULT`
   *
   * @public
   */
  managedCredentialsStatus?: ManagedCredentialsStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEnvironmentsResult {
  /**
   * Information about the environments that are returned.
   *
   * @public
   */
  environments?: Environment[] | undefined;
}

/**
 * @public
 */
export interface DescribeEnvironmentStatusRequest {
  /**
   * The ID of the environment to get status information about.
   *
   * @public
   */
  environmentId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEnvironmentStatusResult {
  /**
   * The status of the environment. Available values include:
   *
   * - `connecting`: The environment is connecting.
   * - `creating`: The environment is being created.
   * - `deleting`: The environment is being deleted.
   * - `error`: The environment is in an error state.
   * - `ready`: The environment is ready.
   * - `stopped`: The environment is stopped.
   * - `stopping`: The environment is stopping.
   *
   * @public
   */
  status: EnvironmentStatus | undefined;

  /**
   * Any informational message about the status of the environment.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * During a previous call, if there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a *next token*. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of environments to get identifiers for.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResult {
  /**
   * If there are more than 25 items in the list, only the first 25 items are returned, along with a unique string called a *next token*. To get the next batch of items in the list, call this operation again, adding the next token to the call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of environment identifiers.
   *
   * @public
   */
  environmentIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Cloud9 development environment to get the tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags associated with the Cloud9 development environment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Cloud9 development environment to add tags to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of tags to add to the given Cloud9 development environment.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Cloud9 development environment to remove tags from.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag names of the tags to remove from the given Cloud9 development environment.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * The ID of the environment to change settings.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * A replacement name for the environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Any new or replacement description for the environment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Allows the environment owner to turn on or turn off the Amazon Web Services managed temporary credentials for an Cloud9 environment by using one of the following values:
   *
   * - `ENABLE`
   * - `DISABLE`
   *
   * > **Note:** Only the environment owner can change the status of managed temporary credentials. An `AccessDeniedException` is thrown if an attempt to turn on or turn off managed temporary credentials is made by an account that's not the environment owner.
   *
   * @public
   */
  managedCredentialsAction?: ManagedCredentialsAction | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentResult {}

/**
 * @public
 */
export interface UpdateEnvironmentMembershipRequest {
  /**
   * The ID of the environment for the environment member whose settings you want to change.
   *
   * @public
   */
  environmentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment member whose settings you want to change.
   *
   * @public
   */
  userArn: string | undefined;

  /**
   * The replacement type of environment member permissions you want to associate with this environment member. Available values include:
   *
   * - `read-only`: Has read-only access to the environment.
   * - `read-write`: Has read-write access to the environment.
   *
   * @public
   */
  permissions: MemberPermissions | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentMembershipResult {
  /**
   * Information about the environment member whose settings were changed.
   *
   * @public
   */
  membership?: EnvironmentMember | undefined;
}
