// smithy-typescript generated code
import type {
  ApplicationStatus,
  ApplicationStatusReason,
  ExportFilesStatus,
  Protocol,
  ReplicationStatusType,
  RevocationMode,
  RuntimeEnvironmentType,
  ShaderCacheStatus,
  StreamClass,
  StreamGroupLocationStatus,
  StreamGroupStatus,
  StreamGroupStatusReason,
  StreamSessionStatus,
  StreamSessionStatusReason,
  StreamUrlStatus,
  StreamUrlStatusReason,
} from "./enums";

/**
 * Configuration for connecting a stream group location to resources in your Amazon VPC using AWS Transit Gateway. When you specify a VPC transit configuration, Amazon GameLift Streams creates a Transit Gateway and shares it with your account using AWS Resource Access Manager. After the stream group is active, you must complete the setup by accepting the resource share, creating a VPC attachment, and configuring routing.
 *
 * @public
 */
export interface VpcTransitConfiguration {
  /**
   * The ID of the Amazon VPC that you want to connect to the stream group. The VPC must be in the same Amazon Web Services account as the stream group. This value cannot be changed after the stream group is created.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * A list of IPv4 CIDR blocks in your VPC that you want the stream group to be able to access. You can specify up to 5 CIDR blocks. The CIDR blocks must be valid subsets of the VPC's CIDR blocks and cannot overlap with the service VPC CIDR block.
   *
   * @public
   */
  Ipv4CidrBlocks: string[] | undefined;
}

/**
 * Configuration settings that define a stream group's stream capacity for a location. When configuring a location for the first time, you must specify a numeric value for at least one of the two capacity types. To update the capacity for an existing stream group, call [UpdateStreamGroup](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateStreamGroup.html). To add a new location and specify its capacity, call [AddStreamGroupLocations](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AddStreamGroupLocations.html).
 *
 * @public
 */
export interface LocationConfiguration {
  /**
   * A location's name. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  LocationName: string | undefined;

  /**
   * This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle.
   *
   * @public
   */
  AlwaysOnCapacity?: number | undefined;

  /**
   * This field is deprecated. Use `MaximumCapacity` instead. This parameter cannot be used with `MaximumCapacity` or `TargetIdleCapacity` in the same location configuration.
   *
   * The streaming capacity that Amazon GameLift Streams can allocate in response to stream requests, and then de-allocate when the session has terminated. This offers a cost control measure at the expense of a greater startup time (typically under 5 minutes). Default is 0 when creating a stream group or adding a location.
   *
   * @deprecated (since 2025-12-17) This input field is deprecated in favor of explicit MaximumCapacity values.
   * @public
   */
  OnDemandCapacity?: number | undefined;

  /**
   * This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state.
   *
   * @public
   */
  TargetIdleCapacity?: number | undefined;

  /**
   * This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released.
   *
   * @public
   */
  MaximumCapacity?: number | undefined;

  /**
   * Configuration for connecting the stream group to resources in your Amazon VPC using AWS Transit Gateway. This setting is optional. If specified, Amazon GameLift Streams creates a Transit Gateway to enable private network connectivity between the service VPC and your VPC. The VPC ID cannot be changed after the stream group is created, but you can update the CIDR blocks by calling [UpdateStreamGroup](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UpdateStreamGroup.html).
   *
   * @public
   */
  VpcTransitConfiguration?: VpcTransitConfiguration | undefined;
}

/**
 * @public
 */
export interface AddStreamGroupLocationsInput {
  /**
   * A stream group to add the specified locations to.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A set of one or more locations and the streaming capacity for each location.
   *
   * @public
   */
  LocationConfigurations: LocationConfiguration[] | undefined;
}

/**
 * The VPC transit configuration details for a stream group location, including the Transit Gateway information needed to complete the VPC attachment setup.
 *
 * @public
 */
export interface VpcTransitConfigurationResponse {
  /**
   * The ID of the Amazon VPC that is connected to the stream group.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The IPv4 CIDR blocks in your VPC that the stream group can access.
   *
   * @public
   */
  Ipv4CidrBlocks?: string[] | undefined;

  /**
   * The ID of the Transit Gateway that Amazon GameLift Streams created for this VPC connection. Use this ID when creating your VPC attachment.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The ARN of the AWS Resource Access Manager resource share for the Transit Gateway. You must accept this resource share before you can create a VPC attachment.
   *
   * @public
   */
  TransitGatewayResourceShareArn?: string | undefined;
}

/**
 * Represents a location and its corresponding stream capacity and status.
 *
 * @public
 */
export interface LocationState {
  /**
   * A location's name. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  LocationName?: string | undefined;

  /**
   * This value is set of locations, including their name, current status, and capacities.
   *
   * A location can be in one of the following states:
   *
   * - `ACTIVATING`: Amazon GameLift Streams is preparing the location. You cannot stream from, scale the capacity of, or remove this location yet.
   * - `ACTIVE`: The location is provisioned with initial capacity. You can now stream from, scale the capacity of, or remove this location.
   * - `ERROR`: Amazon GameLift Streams failed to set up this location. The `StatusReason` field describes the error. You can remove this location and try to add it again.
   * - `REMOVING`: Amazon GameLift Streams is working to remove this location. This will release all provisioned capacity for this location in this stream group.
   *
   * @public
   */
  Status?: StreamGroupLocationStatus | undefined;

  /**
   * This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle.
   *
   * @public
   */
  AlwaysOnCapacity?: number | undefined;

  /**
   * The streaming capacity that Amazon GameLift Streams can allocate in response to stream requests, and then de-allocate when the session has terminated. This offers a cost control measure at the expense of a greater startup time (typically under 5 minutes). Default is 0 when creating a stream group or adding a location.
   *
   * @public
   */
  OnDemandCapacity?: number | undefined;

  /**
   * This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state.
   *
   * @public
   */
  TargetIdleCapacity?: number | undefined;

  /**
   * This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released.
   *
   * @public
   */
  MaximumCapacity?: number | undefined;

  /**
   * This value is the always-on capacity that you most recently requested for a stream group. You request capacity separately for each location in a stream group. In response to an increase in requested capacity, Amazon GameLift Streams attempts to provision compute resources to make the stream group's allocated capacity meet requested capacity. When always-on capacity is decreased, it can take a few minutes to deprovision allocated capacity to match the requested capacity.
   *
   * @public
   */
  RequestedCapacity?: number | undefined;

  /**
   * This value is the stream capacity that Amazon GameLift Streams has provisioned in a stream group that can respond immediately to stream requests. It includes resources that are currently streaming and resources that are idle and ready to respond to stream requests. When target-idle capacity is configured, the idle resources include the capacity buffer maintained beyond ongoing sessions. You pay for this capacity whether it's in use or not. After making changes to capacity, it can take a few minutes for the allocated capacity count to reflect the change while compute resources are allocated or deallocated. Similarly, when allocated on-demand capacity is no longer needed, it can take a few minutes for Amazon GameLift Streams to spin down the allocated capacity.
   *
   * @public
   */
  AllocatedCapacity?: number | undefined;

  /**
   * This value is the amount of allocated capacity that is not currently streaming. It represents the stream group's ability to respond immediately to new stream requests with near-instant startup time.
   *
   * @public
   */
  IdleCapacity?: number | undefined;

  /**
   * The CIDR block of the service VPC for this location. Add this CIDR block to your VPC route table to enable traffic routing through the Transit Gateway.
   *
   * @public
   */
  InternalVpcIpv4CidrBlock?: string | undefined;

  /**
   * The VPC transit configuration for this location, including the Transit Gateway details needed to complete the VPC attachment setup.
   *
   * @public
   */
  VpcTransitConfiguration?: VpcTransitConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface AddStreamGroupLocationsOutput {
  /**
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * This value is set of locations, including their name, current status, and capacities.
   *
   * A location can be in one of the following states:
   *
   * - `ACTIVATING`: Amazon GameLift Streams is preparing the location. You cannot stream from, scale the capacity of, or remove this location yet.
   * - `ACTIVE`: The location is provisioned with initial capacity. You can now stream from, scale the capacity of, or remove this location.
   * - `ERROR`: Amazon GameLift Streams failed to set up this location. The `StatusReason` field describes the error. You can remove this location and try to add it again.
   * - `REMOVING`: Amazon GameLift Streams is working to remove this location. This will release all provisioned capacity for this location in this stream group.
   *
   * @public
   */
  Locations: LocationState[] | undefined;
}

/**
 * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
 *
 * A runtime environment can be one of the following:
 *
 * - For Linux applications
 *
 *   - Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
 * - For Windows applications
 *
 *   - Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
 *   - Proton 10.0-4 (`Type=PROTON, Version=20260204`)
 *   - Proton 9.0-2 (`Type=PROTON, Version=20250516`)
 *   - Proton 8.0-5 (`Type=PROTON, Version=20241007`)
 *   - Proton 8.0-2c (`Type=PROTON, Version=20230704`)
 *
 * @public
 */
export interface RuntimeEnvironment {
  /**
   * The operating system and other drivers. For Proton, this also includes the Proton compatibility layer.
   *
   * @public
   */
  Type: RuntimeEnvironmentType | undefined;

  /**
   * Versioned container environment for the application operating system.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationInput {
  /**
   * A human-readable label for the application. You can update this value later.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
   *
   * A runtime environment can be one of the following:
   *
   * - For Linux applications
   *
   *   - Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
   * - For Windows applications
   *
   *   - Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
   *   - Proton 10.0-4 (`Type=PROTON, Version=20260204`)
   *   - Proton 9.0-2 (`Type=PROTON, Version=20250516`)
   *   - Proton 8.0-5 (`Type=PROTON, Version=20241007`)
   *   - Proton 8.0-2c (`Type=PROTON, Version=20230704`)
   *
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * The relative path and file name of the executable file that Amazon GameLift Streams will stream. Specify a path relative to the location set in `ApplicationSourceUri`. The file must be contained within the application's root folder. For Windows applications, the file must be a valid Windows executable or batch file with a filename ending in .exe, .cmd, or .bat. For Linux applications, the file must be a valid Linux binary executable or a script that contains an initial interpreter line starting with a shebang ('`#!`').
   *
   * @public
   */
  ExecutablePath: string | undefined;

  /**
   * The location of the content that you want to stream. Enter an Amazon S3 URI to a bucket that contains your game or other application. The location can have a multi-level prefix structure, but it must include all the files needed to run the content. Amazon GameLift Streams copies everything under the specified location.
   *
   * This value is immutable. To designate a different content location, create a new application.
   *
   * > **Note:** The Amazon S3 bucket and the Amazon GameLift Streams application must be in the same Amazon Web Services Region.
   *
   * @public
   */
  ApplicationSourceUri: string | undefined;

  /**
   * Locations of log files that your content generates during a stream session. Enter path values that are relative to the `ApplicationSourceUri` location, or relative to the user's home directory when using a supported path variable. You can specify up to 10 log paths. Each individual log file cannot exceed 50 MB in size.
   *
   * Each path can be a directory or an exact file path. When you specify a directory, Amazon GameLift Streams collects only files with the following extensions: `.txt`, `.log`, and `.utrace`. To collect files with other extensions, specify the exact file path. The copy operation is not performed recursively in subfolders.
   *
   * The following path variables are recognized when they appear as the first component of a path: `%USERPROFILE%` (Windows and Proton), `$HOME` or `~` (Linux). Use a path variable when your application writes logs outside of the application directory.
   *
   * Amazon GameLift Streams uploads designated log files to the Amazon S3 bucket that you specify in `ApplicationLogOutputUri` at the end of a stream session. To retrieve stored log files, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html) and get the `LogFileLocationUri`.
   *
   * @public
   */
  ApplicationLogPaths?: string[] | undefined;

  /**
   * An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more `ApplicationLogPaths`.
   *
   * > **Note:** The log bucket must have permissions that give Amazon GameLift Streams access to write the log files. For more information, see [Application log bucket permission policy](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/applications.html#application-bucket-permission-template) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  ApplicationLogOutputUri?: string | undefined;

  /**
   * A list of labels to assign to the new application resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. See [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*. You can use [TagResource](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TagResource.html) to add tags, [UntagResource](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UntagResource.html) to remove tags, and [ListTagsForResource](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListTagsForResource.html) to view tags on existing resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Represents the status of the replication of an application to a location. An application cannot be streamed from a location until it has finished replicating there.
 *
 * @public
 */
export interface ReplicationStatus {
  /**
   * A location's name. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The current status of the replication process.
   *
   * @public
   */
  Status?: ReplicationStatusType | undefined;
}

/**
 * @public
 */
export interface CreateApplicationOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that's assigned to an application resource and uniquely identifies it across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:application/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A human-readable label for the application. You can edit this value.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
   *
   * A runtime environment can be one of the following:
   *
   * - For Linux applications
   *
   *   - Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
   * - For Windows applications
   *
   *   - Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
   *   - Proton 10.0-4 (`Type=PROTON, Version=20260204`)
   *   - Proton 9.0-2 (`Type=PROTON, Version=20250516`)
   *   - Proton 8.0-5 (`Type=PROTON, Version=20241007`)
   *   - Proton 8.0-2c (`Type=PROTON, Version=20230704`)
   *
   * @public
   */
  RuntimeEnvironment?: RuntimeEnvironment | undefined;

  /**
   * The relative path and file name of the executable file that launches the content for streaming.
   *
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * Locations of log files that your content generates during a stream session. Amazon GameLift Streams uploads log files to the Amazon S3 bucket that you specify in `ApplicationLogOutputUri` at the end of a stream session. To retrieve stored log files, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html) and get the `LogFileLocationUri`.
   *
   * @public
   */
  ApplicationLogPaths?: string[] | undefined;

  /**
   * An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more `ApplicationLogPaths`.
   *
   * @public
   */
  ApplicationLogOutputUri?: string | undefined;

  /**
   * The original Amazon S3 location of uploaded stream content for the application.
   *
   * @public
   */
  ApplicationSourceUri?: string | undefined;

  /**
   * A unique ID value that is assigned to the resource when it's created. Format example: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the application resource. Possible statuses include the following:
   *
   * - `INITIALIZED`: Amazon GameLift Streams has received the request and is initiating the work flow to create an application.
   * - `PROCESSING`: The create application work flow is in process. Amazon GameLift Streams is copying the content and caching for future deployment in a stream group.
   * - `READY`: The application is ready to deploy in a stream group.
   * - `ERROR`: An error occurred when setting up the application. See `StatusReason` for more information.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the application.
   *
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * A short description of the status reason when the application is in `ERROR` status.
   *
   * @public
   */
  StatusReason?: ApplicationStatusReason | undefined;

  /**
   * A set of replication statuses for each location.
   *
   * @public
   */
  ReplicationStatuses?: ReplicationStatus[] | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A newly created application is not associated to any stream groups. This value is empty.
   *
   * @public
   */
  AssociatedStreamGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that's assigned to an application resource and uniquely identifies it across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:application/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A human-readable label for the application. You can edit this value.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
   *
   * A runtime environment can be one of the following:
   *
   * - For Linux applications
   *
   *   - Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
   * - For Windows applications
   *
   *   - Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
   *   - Proton 10.0-4 (`Type=PROTON, Version=20260204`)
   *   - Proton 9.0-2 (`Type=PROTON, Version=20250516`)
   *   - Proton 8.0-5 (`Type=PROTON, Version=20241007`)
   *   - Proton 8.0-2c (`Type=PROTON, Version=20230704`)
   *
   * @public
   */
  RuntimeEnvironment?: RuntimeEnvironment | undefined;

  /**
   * The relative path and file name of the executable file that launches the content for streaming.
   *
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * Locations of log files that your content generates during a stream session. Amazon GameLift Streams uploads log files to the Amazon S3 bucket that you specify in `ApplicationLogOutputUri` at the end of a stream session. To retrieve stored log files, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html) and get the `LogFileLocationUri`.
   *
   * @public
   */
  ApplicationLogPaths?: string[] | undefined;

  /**
   * An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more `ApplicationLogPaths`.
   *
   * @public
   */
  ApplicationLogOutputUri?: string | undefined;

  /**
   * The original Amazon S3 location of uploaded stream content for the application.
   *
   * @public
   */
  ApplicationSourceUri?: string | undefined;

  /**
   * A unique ID value that is assigned to the resource when it's created. Format example: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the application resource. Possible statuses include the following:
   *
   * - `INITIALIZED`: Amazon GameLift Streams has received the request and is initiating the work flow to create an application.
   * - `PROCESSING`: The create application work flow is in process. Amazon GameLift Streams is copying the content and caching for future deployment in a stream group.
   * - `READY`: The application is ready to deploy in a stream group.
   * - `ERROR`: An error occurred when setting up the application. See `StatusReason` for more information.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the application.
   *
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * A short description of the status reason when the application is in `ERROR` status.
   *
   * @public
   */
  StatusReason?: ApplicationStatusReason | undefined;

  /**
   * A set of replication statuses for each location.
   *
   * @public
   */
  ReplicationStatuses?: ReplicationStatus[] | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A set of stream groups that this application is associated with. You can use any of these stream groups to stream your application.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify stream group resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  AssociatedStreamGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsInput {
  /**
   * The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to return. Use this parameter with `NextToken` to return results in sequential pages. Default value is `25`.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes an application resource that represents a collection of content for streaming with Amazon GameLift Streams. To retrieve additional application details, call [GetApplication](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetApplication.html).
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * An Amazon Resource Name (ARN) that's assigned to an application resource and uniquely identifies the application across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:application/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * An ID that uniquely identifies the application resource. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A human-readable label for the application. You can edit this value.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the application resource. Possible statuses include the following:
   *
   * - `INITIALIZED`: Amazon GameLift Streams has received the request and is initiating the work flow to create an application.
   * - `PROCESSING`: The create application work flow is in process. Amazon GameLift Streams is copying the content and caching for future deployment in a stream group.
   * - `READY`: The application is ready to deploy in a stream group.
   * - `ERROR`: An error occurred when setting up the application. For more information about the error, call `GetApplication` and refer to `StatusReason`.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the application.
   *
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
   *
   * A runtime environment can be one of the following:
   *
   * - For Linux applications
   *
   *   - Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
   * - For Windows applications
   *
   *   - Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
   *   - Proton 10.0-4 (`Type=PROTON, Version=20260204`)
   *   - Proton 9.0-2 (`Type=PROTON, Version=20250516`)
   *   - Proton 8.0-5 (`Type=PROTON, Version=20241007`)
   *   - Proton 8.0-2c (`Type=PROTON, Version=20230704`)
   *
   * @public
   */
  RuntimeEnvironment?: RuntimeEnvironment | undefined;
}

/**
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * A collection of Amazon GameLift Streams applications that are associated with the Amazon Web Services account in use. Each item includes application metadata and status.
   *
   * @public
   */
  Items?: ApplicationSummary[] | undefined;

  /**
   * A token that marks the start of the next sequential page of results. If an operation doesn't return a token, you've reached the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A human-readable label for the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Locations of log files that your content generates during a stream session. Enter path values that are relative to the `ApplicationSourceUri` location, or relative to the user's home directory when using a supported path variable. You can specify up to 10 log paths. Each individual log file cannot exceed 50 MB in size.
   *
   * Each path can be a directory or an exact file path. When you specify a directory, Amazon GameLift Streams collects only files with the following extensions: `.txt`, `.log`, and `.utrace`. To collect files with other extensions, specify the exact file path. The copy operation is not performed recursively in subfolders.
   *
   * The following path variables are recognized when they appear as the first component of a path: `%USERPROFILE%` (Windows and Proton), `$HOME` or `~` (Linux). Use a path variable when your application writes logs outside of the application directory.
   *
   * Amazon GameLift Streams uploads designated log files to the Amazon S3 bucket that you specify in `ApplicationLogOutputUri` at the end of a stream session. To retrieve stored log files, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html) and get the `LogFileLocationUri`.
   *
   * @public
   */
  ApplicationLogPaths?: string[] | undefined;

  /**
   * An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more `ApplicationLogPaths`.
   *
   * > **Note:** The log bucket must have permissions that give Amazon GameLift Streams access to write the log files. For more information, see [Application log bucket permission policy](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/applications.html#application-bucket-permission-template) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  ApplicationLogOutputUri?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that's assigned to an application resource and uniquely identifies it across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:application/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A human-readable label for the application. You can edit this value.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration settings that identify the operating system for an application resource. This can also include a compatibility layer and other drivers.
   *
   * A runtime environment can be one of the following:
   *
   * - For Linux applications
   *
   *   - Ubuntu 22.04 LTS (`Type=UBUNTU, Version=22_04_LTS`)
   * - For Windows applications
   *
   *   - Microsoft Windows Server 2022 Base (`Type=WINDOWS, Version=2022`)
   *   - Proton 10.0-4 (`Type=PROTON, Version=20260204`)
   *   - Proton 9.0-2 (`Type=PROTON, Version=20250516`)
   *   - Proton 8.0-5 (`Type=PROTON, Version=20241007`)
   *   - Proton 8.0-2c (`Type=PROTON, Version=20230704`)
   *
   * @public
   */
  RuntimeEnvironment?: RuntimeEnvironment | undefined;

  /**
   * The relative path and file name of the executable file that launches the content for streaming.
   *
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * Locations of log files that your content generates during a stream session. Amazon GameLift Streams uploads log files to the Amazon S3 bucket that you specify in `ApplicationLogOutputUri` at the end of a stream session. To retrieve stored log files, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html) and get the `LogFileLocationUri`.
   *
   * @public
   */
  ApplicationLogPaths?: string[] | undefined;

  /**
   * An Amazon S3 URI to a bucket where you would like Amazon GameLift Streams to save application logs. Required if you specify one or more `ApplicationLogPaths`.
   *
   * @public
   */
  ApplicationLogOutputUri?: string | undefined;

  /**
   * The original Amazon S3 location of uploaded stream content for the application.
   *
   * @public
   */
  ApplicationSourceUri?: string | undefined;

  /**
   * A unique ID value that is assigned to the resource when it's created. Format example: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the application resource. Possible statuses include the following:
   *
   * - `INITIALIZED`: Amazon GameLift Streams has received the request and is initiating the work flow to create an application.
   * - `PROCESSING`: The create application work flow is in process. Amazon GameLift Streams is copying the content and caching for future deployment in a stream group.
   * - `READY`: The application is ready to deploy in a stream group.
   * - `ERROR`: An error occurred when setting up the application. See `StatusReason` for more information.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the application.
   *
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * A short description of the status reason when the application is in `ERROR` status.
   *
   * @public
   */
  StatusReason?: ApplicationStatusReason | undefined;

  /**
   * A set of replication statuses for each location.
   *
   * @public
   */
  ReplicationStatuses?: ReplicationStatus[] | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A set of stream groups that this application is associated with. You can use any of these stream groups to stream your application.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify stream group resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  AssociatedStreamGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsInput {
  /**
   * A stream group to associate to the applications.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A set of applications to associate with the stream group.
   *
   * This value is a set of either [Amazon Resource Names (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or IDs that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsOutput {
  /**
   * A stream group that is associated to the applications.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A set of applications that are associated to the stream group.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateStreamGroupInput {
  /**
   * A descriptive label for the stream group.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The target stream quality for sessions that are hosted in this stream group. Set a stream class that is appropriate to the type of content that you're streaming. Stream class determines the type of computing resources Amazon GameLift Streams uses and impacts the cost of streaming. The following options are available:
   *
   * A stream class can be one of the following:
   *
   * - **`gen6n_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra_win2022` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen6n_medium` (NVIDIA, medium)** Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports up to 4 concurrent stream sessions
   * - **`gen6n_small` (NVIDIA, small)** Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM
   *   - Tenancy: Supports up to 12 concurrent stream sessions
   * - **`gen6n_medium_win2022` (NVIDIA, medium)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_small_win2022` (NVIDIA, small)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen5n_ultra` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen4n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   *
   * @public
   */
  StreamClass: StreamClass | undefined;

  /**
   * The unique identifier of the Amazon GameLift Streams application that you want to set as the default application in a stream group. The application that you specify must be in `READY` status. The default application is pre-cached on always-on compute resources, reducing stream startup times. Other applications are automatically cached as needed.
   *
   * If you do not link an application when you create a stream group, you will need to link one later, before you can start streaming, using [AssociateApplications](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AssociateApplications.html).
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  DefaultApplicationIdentifier?: string | undefined;

  /**
   * A set of one or more locations and the streaming capacity for each location.
   *
   * @public
   */
  LocationConfigurations?: LocationConfiguration[] | undefined;

  /**
   * A list of labels to assign to the new stream group resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources is useful for resource management, access management and cost allocation. See [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*. You can use [TagResource](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TagResource.html) to add tags, [UntagResource](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_UntagResource.html) to remove tags, and [ListTagsForResource](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ListTagsForResource.html) to view tags on existing resources.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Represents the default Amazon GameLift Streams application that a stream group hosts.
 *
 * @public
 */
export interface DefaultApplication {
  /**
   * An ID that uniquely identifies the application resource. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamGroupOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that is assigned to the stream group resource and that uniquely identifies the group across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamgroup/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A descriptive label for the stream group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The default Amazon GameLift Streams application that is associated with this stream group.
   *
   * @public
   */
  DefaultApplication?: DefaultApplication | undefined;

  /**
   * This value is the set of locations, including their name, current status, and capacities.
   *
   * A location can be in one of the following states:
   *
   * - `ACTIVATING`: Amazon GameLift Streams is preparing the location. You cannot stream from, scale the capacity of, or remove this location yet.
   * - `ACTIVE`: The location is provisioned with initial capacity. You can now stream from, scale the capacity of, or remove this location.
   * - `ERROR`: Amazon GameLift Streams failed to set up this location. The `StatusReason` field describes the error. You can remove this location and try to add it again.
   * - `REMOVING`: Amazon GameLift Streams is working to remove this location. This will release all provisioned capacity for this location in this stream group.
   *
   * @public
   */
  LocationStates?: LocationState[] | undefined;

  /**
   * The target stream quality for the stream group.
   *
   * A stream class can be one of the following:
   *
   * - **`gen6n_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra_win2022` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen6n_medium` (NVIDIA, medium)** Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports up to 4 concurrent stream sessions
   * - **`gen6n_small` (NVIDIA, small)** Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM
   *   - Tenancy: Supports up to 12 concurrent stream sessions
   * - **`gen6n_medium_win2022` (NVIDIA, medium)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_small_win2022` (NVIDIA, small)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen5n_ultra` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen4n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   *
   * @public
   */
  StreamClass?: StreamClass | undefined;

  /**
   * A unique ID value that is assigned to the resource when it's created. Format example: `sg-1AB2C3De4`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the stream group resource. Possible statuses include the following:
   *
   * - `ACTIVATING`: The stream group is deploying and isn't ready to host streams.
   * - `ACTIVE`: The stream group is ready to host streams.
   * - `ACTIVE_WITH_ERRORS`: One or more locations in the stream group are in an error state. Verify the details of individual locations and remove any locations which are in error.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the stream group.
   * - `ERROR`: An error occurred when the stream group deployed. See `StatusReason` (returned by `CreateStreamGroup`, `GetStreamGroup`, and `UpdateStreamGroup`) for more information.
   * - `EXPIRED`: The stream group is expired and can no longer host streams. This typically occurs when a stream group is 365 days old, as indicated by the value of `ExpiresAt`. Create a new stream group to resume streaming capabilities.
   * - `UPDATING_LOCATIONS`: One or more locations in the stream group are in the process of updating (either activating or deleting).
   *
   * @public
   */
  Status?: StreamGroupStatus | undefined;

  /**
   * A short description of the reason that the stream group is in `ERROR` status. The possible reasons can be one of the following:
   *
   * - `internalError`: The request can't process right now because of an issue with the server. Try again later.
   * - `noAvailableInstances`: Amazon GameLift Streams does not currently have enough available capacity to fulfill your request. Wait a few minutes and retry the request as capacity can shift frequently. You can also try to make the request using a different stream class or in another region.
   *
   * @public
   */
  StatusReason?: StreamGroupStatusReason | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which this stream group expires. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC). After this time, you will no longer be able to update this stream group or use it to start stream sessions. Only Get and Delete operations will work on an expired stream group.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A set of applications that this stream group is associated to. You can stream any of these applications by using this stream group.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  AssociatedApplications?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateStreamSessionAdminShellInput {
  /**
   * The stream group that runs this stream session.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream session resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567`. Example ID: `ABC123def4567`.
   *
   * @public
   */
  StreamSessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamSessionAdminShellOutput {
  /**
   * An Amazon Web Services Systems Manager session identifier that uniquely identifies the requested terminal session. Use this value with the Amazon Web Services Systems Manager Session Manager plugin.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * An Amazon Web Services Systems Manager WebSocket connection endpoint for the requested terminal session.
   *
   * @public
   */
  StreamUrl?: string | undefined;

  /**
   * An Amazon Web Services Systems Manager authentication token that authenticates your access to the session ID and WebSocket URL. This token must be treated with the same level of security as other user credentials. The token value is only valid for establishing a new connection within 60 seconds of generation.
   *
   * @public
   */
  TokenValue?: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamSessionConnectionInput {
  /**
   * A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * The stream group that you want to run this stream session with. The stream group must be in `ACTIVE` status.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream session resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567`. Example ID: `ABC123def4567`.
   *
   * The stream session must be in `PENDING_CLIENT_RECONNECTION` or `ACTIVE` status.
   *
   * @public
   */
  StreamSessionIdentifier: string | undefined;

  /**
   * A WebRTC ICE offer string to use when initializing a WebRTC connection. The offer is a very long JSON string. Provide the string as a text value in quotes. The offer must be newly generated, not the same offer provided to `StartStreamSession`.
   *
   * @public
   */
  SignalRequest: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamSessionConnectionOutput {
  /**
   * The WebRTC answer string that the stream server generates in response to the `SignalRequest`.
   *
   * @public
   */
  SignalResponse?: string | undefined;
}

/**
 * Contains the width and height dimensions, in pixels, that define the resolution of the stream session's virtual monitor. The total number of pixels (width × height) must not exceed 2,073,600 (equivalent to 1920 × 1080).
 *
 * @public
 */
export interface Resolution {
  /**
   * The width of the stream session's virtual monitor, in pixels. The value must be an even number.
   *
   * @public
   */
  Width: number | undefined;

  /**
   * The height of the stream session's virtual monitor, in pixels. The value must be an even number.
   *
   * @public
   */
  Height: number | undefined;
}

/**
 * The virtual monitor settings for a stream session, including the resolution. If not specified, the stream session uses the default resolution of 1920 × 1080.
 *
 * @public
 */
export interface DisplayConfiguration {
  /**
   * The resolution to apply to the stream session's virtual monitor. When specified, this value overrides the default resolution of 1920 × 1080.
   *
   * @public
   */
  Resolution?: Resolution | undefined;
}

/**
 * @public
 */
export interface CreateStreamUrlInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * The stream session runs in this stream group.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * This application must be associated with the stream group.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The data transport protocol for the stream session. Amazon GameLift Streams supports `WebRTC`.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The number of minutes after creation that the stream URL remains valid. After this period, the status of the stream URL changes to `EXPIRED` and it can no longer start stream sessions. The minimum is 1 minute. For the maximum, see [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  UrlExpiresAfterMinutes: number | undefined;

  /**
   * The maximum number of times the stream URL can start a stream session. Each successful use reduces the remaining uses by one. The minimum is 1, and the default is 1. For the maximum, see [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  UsageLimit?: number | undefined;

  /**
   * A descriptive label for the stream URL.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of locations, in order of preference, where Amazon GameLift Streams can place the stream session. Specify each location by its Amazon Web Services Region code, for example `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Locations: string[] | undefined;

  /**
   * The maximum length of time, in seconds, that a stream session started from this stream URL can run. Valid values are 1-86400 seconds (1 second to 24 hours). The default is 43200 seconds (12 hours).
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalLaunchArgs?: string[] | undefined;

  /**
   * A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client.
   *
   * > **Note:** If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon GameLift Streams assumes during stream sessions started from this stream URL. For more information, see [Provide AWS credentials to your streaming application](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/session-credentials.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The display settings, such as resolution, for stream sessions started from this stream URL.
   *
   * @public
   */
  DisplayConfiguration?: DisplayConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure this request is idempotent. If you retry a request with the same `ClientToken`, Amazon GameLift Streams returns the original response without performing the operation again.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateStreamUrlOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream URL across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamurl/[stream group resource ID]/[stream URL resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the stream URL resource, for example `su-1AB2C3De4`.
   *
   * @public
   */
  StreamUrlId?: string | undefined;

  /**
   * The shareable stream URL. Distribute this URL to end users so that they can start and play a stream session in a hosted web player. Treat the stream URL as a secret. Anyone who has it can start a stream session until the stream URL expires, is revoked, or reaches its usage limit.
   *
   * @public
   */
  StreamUrl?: string | undefined;

  /**
   * The current status of the stream URL. Possible statuses include the following:
   *
   * - `ACTIVE`: The stream URL is valid and can start stream sessions.
   * - `EXPIRED`: The stream URL has passed its expiration time and can no longer start stream sessions.
   * - `REVOKED`: The stream URL was revoked and can no longer start stream sessions.
   * - `LIMIT_REACHED`: The stream URL has been used the maximum number of times and can no longer start stream sessions.
   *
   * @public
   */
  Status?: StreamUrlStatus | undefined;

  /**
   * Additional information about why the stream URL is in its current status. Amazon GameLift Streams populates this value when the status is `REVOKED`. Possible values include the following:
   *
   * - `userRevoked`: You revoked the stream URL.
   * - `revokedAndTerminatingSessions`: You revoked the stream URL and Amazon GameLift Streams is ending its running stream sessions.
   * - `revokedAndSessionsTerminated`: You revoked the stream URL and its running stream sessions have ended.
   * - `streamGroupDeleted`: The stream group was deleted, which revoked the stream URL.
   * - `applicationDeleted`: The application was deleted, which revoked the stream URL.
   *
   * @public
   */
  StatusReason?: StreamUrlStatusReason | undefined;

  /**
   * The date and time when the stream URL expires and stops accepting new stream sessions. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The maximum number of times the stream URL can start a stream session.
   *
   * @public
   */
  UsageLimit?: number | undefined;

  /**
   * The number of times the stream URL can still be used to start a stream session.
   *
   * @public
   */
  RemainingUses?: number | undefined;

  /**
   * The stream group that runs the stream sessions.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  StreamGroupArn?: string | undefined;

  /**
   * The application that runs in the stream sessions.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The data transport protocol used for stream sessions started from this stream URL.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The list of locations, in order of preference, where Amazon GameLift Streams places the stream session. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Locations?: string[] | undefined;

  /**
   * The maximum length of time, in seconds, that a stream session started from this stream URL can run.
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * The descriptive label for the stream URL.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The command-line arguments passed to the application when a stream session starts.
   *
   * @public
   */
  AdditionalLaunchArgs?: string[] | undefined;

  /**
   * The environment variables made available to the application when a stream session starts.
   *
   * @public
   */
  AdditionalEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon GameLift Streams assumes during stream sessions started from this stream URL. For more information, see [Provide AWS credentials to your streaming application](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/session-credentials.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The display settings, such as resolution, for stream sessions started from this stream URL.
   *
   * @public
   */
  DisplayConfiguration?: DisplayConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteStreamGroupInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationsInput {
  /**
   * A stream group to disassociate these applications from.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A set of applications that you want to disassociate from the stream group.
   *
   * This value is a set of either [Amazon Resource Names (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or IDs that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationsOutput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A set of applications that are disassociated from this stream group.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArns?: string[] | undefined;
}

/**
 * Provides details about the stream session's exported files.
 *
 * @public
 */
export interface ExportFilesMetadata {
  /**
   * The result of the [ExportStreamSessionFiles](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_ExportStreamSessionFiles.html) operation.
   *
   * @public
   */
  Status?: ExportFilesStatus | undefined;

  /**
   * A short description of the reason the export is in `FAILED` status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The S3 bucket URI where Amazon GameLift Streams uploaded the set of compressed exported files for a stream session. Amazon GameLift Streams generates a ZIP file name based on the stream session metadata. Alternatively, you can provide a custom file name with a `.zip` file extension.
   *
   * Example 1: If you provide an S3 URI called `s3://amzn-s3-demo-destination-bucket/MyGame_Session1.zip`, then Amazon GameLift Streams will save the files at that location.
   *
   * Example 2: If you provide an S3 URI called `s3://amzn-s3-demo-destination-bucket/MyGameSessions_ExportedFiles/`, then Amazon GameLift Streams will save the files at `s3://amzn-s3-demo-destination-bucket/MyGameSessions_ExportedFiles/YYYYMMDD-HHMMSS-appId-sg-Id-sessionId.zip` or another similar name.
   *
   * @public
   */
  OutputUri?: string | undefined;
}

/**
 * @public
 */
export interface ExportStreamSessionFilesInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream session resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567`. Example ID: `ABC123def4567`.
   *
   * @public
   */
  StreamSessionIdentifier: string | undefined;

  /**
   * The S3 bucket URI where Amazon GameLift Streams uploads the set of compressed exported files for this stream session. Amazon GameLift Streams generates a ZIP file name based on the stream session metadata. Alternatively, you can provide a custom file name with a `.zip` file extension.
   *
   * Example 1: If you provide an S3 URI called `s3://amzn-s3-demo-destination-bucket/MyGame_Session1.zip`, then Amazon GameLift Streams will save the files at that location.
   *
   * Example 2: If you provide an S3 URI called `s3://amzn-s3-demo-destination-bucket/MyGameSessions_ExportedFiles/`, then Amazon GameLift Streams will save the files at `s3://amzn-s3-demo-destination-bucket/MyGameSessions_ExportedFiles/YYYYMMDD-HHMMSS-appId-sg-Id-sessionId.zip` or another similar name.
   *
   * @public
   */
  OutputUri: string | undefined;
}

/**
 * @public
 */
export interface ExportStreamSessionFilesOutput {}

/**
 * @public
 */
export interface GetStreamSessionInput {
  /**
   * The stream group that runs this stream session.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream session resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567`. Example ID: `ABC123def4567`.
   *
   * @public
   */
  StreamSessionIdentifier: string | undefined;
}

/**
 * Configuration settings for sharing the stream session's performance stats with the client
 *
 * @public
 */
export interface PerformanceStatsConfiguration {
  /**
   * Performance stats for the session are streamed to the client when set to `true`. Defaults to `false`.
   *
   * @public
   */
  SharedWithClient?: boolean | undefined;
}

/**
 * @public
 */
export interface GetStreamSessionOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that's assigned to a stream session resource. When combined with the stream group resource ID, this value uniquely identifies the stream session across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamsession/[stream group resource ID]/[stream session resource ID]`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A human-readable label for the stream session. You can update this value at any time.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the Amazon GameLift Streams stream group that is hosting the stream session. Format example: `sg-1AB2C3De4`.
   *
   * @public
   */
  StreamGroupId?: string | undefined;

  /**
   * An opaque, unique identifier for an end-user, defined by the developer.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The current status of the stream session. A stream session is ready for a client to connect when in `ACTIVE` status.
   *
   * - `ACTIVATING`: The stream session is starting and preparing to stream.
   * - `ACTIVE`: The stream session is ready and waiting for a client connection. A client has `ConnectionTimeoutSeconds` (specified in `StartStreamSession`) from when the session reaches `ACTIVE` state to establish a connection. If no client connects within this timeframe, the session automatically terminates.
   * - `CONNECTED`: The stream session has a connected client. A session will automatically terminate if there is no user input for 60 minutes, or if the maximum length of a session specified by `SessionLengthSeconds` in `StartStreamSession` is exceeded.
   * - `ERROR`: The stream session failed to activate. See `StatusReason` (returned by `GetStreamSession` and `StartStreamSession`) for more information.
   * - `PENDING_CLIENT_RECONNECTION`: A client has recently disconnected and the stream session is waiting for the client to reconnect. A client has `ConnectionTimeoutSeconds` (specified in `StartStreamSession`) from when the session reaches `PENDING_CLIENT_RECONNECTION` state to re-establish a connection. If no client connects within this timeframe, the session automatically terminates.
   * - `RECONNECTING`: A client has initiated a reconnect to a session that was in `PENDING_CLIENT_RECONNECTION` state.
   * - `TERMINATING`: The stream session is ending.
   * - `TERMINATED`: The stream session has ended.
   *
   * @public
   */
  Status?: StreamSessionStatus | undefined;

  /**
   * A short description of the reason the stream session is in `ERROR` status or `TERMINATED` status.
   *
   * `ERROR` status reasons:
   *
   * - `applicationLogS3DestinationError`: Could not write the application log to the Amazon S3 bucket that is configured for the streaming application. Make sure the bucket still exists.
   * - `internalError`: An internal service error occurred. Start a new stream session to continue streaming.
   * - `invalidSignalRequest`: The WebRTC signal request that was sent is not valid. When starting or reconnecting to a stream session, use `generateSignalRequest` in the Amazon GameLift Streams Web SDK to generate a new signal request.
   * - `placementTimeout`: Amazon GameLift Streams could not find available stream capacity to start a stream session. Increase the stream capacity in the stream group or wait until capacity becomes available.
   *
   * `TERMINATED` status reasons:
   *
   * - `apiTerminated`: The stream session was terminated by an API call to [TerminateStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TerminateStreamSession.html).
   * - `applicationExit`: The streaming application exited or crashed. The stream session was terminated because the application is no longer running.
   * - `connectionTimeout`: The stream session was terminated because the client failed to connect within the connection timeout period specified by `ConnectionTimeoutSeconds`.
   * - `maxSessionLengthTimeout`: The stream session was terminated because it exceeded the maximum session length timeout period specified by `SessionLengthSeconds`.
   * - `reconnectionTimeout`: The stream session was terminated because the client failed to reconnect within the reconnection timeout period specified by `ConnectionTimeoutSeconds` after losing connection.
   *
   * @public
   */
  StatusReason?: StreamSessionStatusReason | undefined;

  /**
   * The data transfer protocol in use with the stream session.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The location where Amazon GameLift Streams hosts and streams your application. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The WebRTC ICE offer string that a client generates to initiate a connection to the stream session.
   *
   * @public
   */
  SignalRequest?: string | undefined;

  /**
   * The WebRTC answer string that the stream server generates in response to the `SignalRequest`.
   *
   * @public
   */
  SignalResponse?: string | undefined;

  /**
   * The length of time that Amazon GameLift Streams should wait for a client to connect or reconnect to the stream session. This time span starts when the stream session reaches `ACTIVE` or `PENDING_CLIENT_RECONNECTION` state. If no client connects (or reconnects) before the timeout, Amazon GameLift Streams terminates the stream session.
   *
   * @public
   */
  ConnectionTimeoutSeconds?: number | undefined;

  /**
   * The maximum duration of a session. Amazon GameLift Streams will automatically terminate a session after this amount of time has elapsed, regardless of any existing client connections.
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalLaunchArgs?: string[] | undefined;

  /**
   * A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client.
   *
   * > **Note:** If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The performance stats configuration for the stream session
   *
   * @public
   */
  PerformanceStatsConfiguration?: PerformanceStatsConfiguration | undefined;

  /**
   * Access location for log files that your content generates during a stream session. These log files are uploaded to cloud storage location at the end of a stream session. The Amazon GameLift Streams application resource defines which log files to upload.
   *
   * @public
   */
  LogFileLocationUri?: string | undefined;

  /**
   * The URL of an S3 bucket that stores Amazon GameLift Streams WebSDK files. The URL is used to establish connection with the client.
   *
   * @public
   */
  WebSdkProtocolUrl?: string | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The application streaming in this session.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * Provides details about the stream session's exported files.
   *
   * @public
   */
  ExportFilesMetadata?: ExportFilesMetadata | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that Amazon GameLift Streams assumes on behalf of your application during the stream session.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration for the stream session's virtual monitor.
   *
   * @public
   */
  DisplayConfiguration?: DisplayConfiguration | undefined;
}

/**
 * @public
 */
export interface GetStreamUrlInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * This is the stream group that owns the stream URL.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The unique identifier of the stream URL. Specify a stream URL ID or Amazon Resource Name (ARN). Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamurl/sg-1AB2C3De4/su-1AB2C3De4`. Example ID: `su-1AB2C3De4`.
   *
   * @public
   */
  StreamUrlIdentifier: string | undefined;
}

/**
 * Describes an Amazon GameLift Streams stream session. To retrieve additional details for the stream session, call [GetStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamSession.html).
 *
 * @public
 */
export interface StreamSessionSummary {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream session resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * An opaque, unique identifier for an end-user, defined by the developer.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The current status of the stream session resource.
   *
   * - `ACTIVATING`: The stream session is starting and preparing to stream.
   * - `ACTIVE`: The stream session is ready and waiting for a client connection. A client has `ConnectionTimeoutSeconds` (specified in `StartStreamSession`) from when the session reaches `ACTIVE` state to establish a connection. If no client connects within this timeframe, the session automatically terminates.
   * - `CONNECTED`: The stream session has a connected client. A session will automatically terminate if there is no user input for 60 minutes, or if the maximum length of a session specified by `SessionLengthSeconds` in `StartStreamSession` is exceeded.
   * - `ERROR`: The stream session failed to activate. See `StatusReason` (returned by `GetStreamSession` and `StartStreamSession`) for more information.
   * - `PENDING_CLIENT_RECONNECTION`: A client has recently disconnected and the stream session is waiting for the client to reconnect. A client has `ConnectionTimeoutSeconds` (specified in `StartStreamSession`) from when the session reaches `PENDING_CLIENT_RECONNECTION` state to re-establish a connection. If no client connects within this timeframe, the session automatically terminates.
   * - `RECONNECTING`: A client has initiated a reconnect to a session that was in `PENDING_CLIENT_RECONNECTION` state.
   * - `TERMINATING`: The stream session is ending.
   * - `TERMINATED`: The stream session has ended.
   *
   * @public
   */
  Status?: StreamSessionStatus | undefined;

  /**
   * A short description of the reason the stream session is in `ERROR` status or `TERMINATED` status.
   *
   * `ERROR` status reasons:
   *
   * - `applicationLogS3DestinationError`: Could not write the application log to the Amazon S3 bucket that is configured for the streaming application. Make sure the bucket still exists.
   * - `internalError`: An internal service error occurred. Start a new stream session to continue streaming.
   * - `invalidSignalRequest`: The WebRTC signal request that was sent is not valid. When starting or reconnecting to a stream session, use `generateSignalRequest` in the Amazon GameLift Streams Web SDK to generate a new signal request.
   * - `placementTimeout`: Amazon GameLift Streams could not find available stream capacity to start a stream session. Increase the stream capacity in the stream group or wait until capacity becomes available.
   *
   * `TERMINATED` status reasons:
   *
   * - `apiTerminated`: The stream session was terminated by an API call to [TerminateStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TerminateStreamSession.html).
   * - `applicationExit`: The streaming application exited or crashed. The stream session was terminated because the application is no longer running.
   * - `connectionTimeout`: The stream session was terminated because the client failed to connect within the connection timeout period specified by `ConnectionTimeoutSeconds`.
   * - `maxSessionLengthTimeout`: The stream session was terminated because it exceeded the maximum session length timeout period specified by `SessionLengthSeconds`.
   * - `reconnectionTimeout`: The stream session was terminated because the client failed to reconnect within the reconnection timeout period specified by `ConnectionTimeoutSeconds` after losing connection.
   *
   * @public
   */
  StatusReason?: StreamSessionStatusReason | undefined;

  /**
   * The data transfer protocol in use with the stream session.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * Provides details about the stream session's exported files.
   *
   * @public
   */
  ExportFilesMetadata?: ExportFilesMetadata | undefined;

  /**
   * The location where Amazon GameLift Streams hosts and streams your application. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that Amazon GameLift Streams assumes on behalf of your application during the stream session.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetStreamUrlOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream URL across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamurl/[stream group resource ID]/[stream URL resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the stream URL resource, for example `su-1AB2C3De4`.
   *
   * @public
   */
  StreamUrlId?: string | undefined;

  /**
   * The shareable stream URL. Distribute this URL to end users so that they can start and play a stream session in a hosted web player. Treat the stream URL as a secret. Anyone who has it can start a stream session until the stream URL expires, is revoked, or reaches its usage limit.
   *
   * @public
   */
  StreamUrl?: string | undefined;

  /**
   * The current status of the stream URL. Possible statuses include the following:
   *
   * - `ACTIVE`: The stream URL is valid and can start stream sessions.
   * - `EXPIRED`: The stream URL has passed its expiration time and can no longer start stream sessions.
   * - `REVOKED`: The stream URL was revoked and can no longer start stream sessions.
   * - `LIMIT_REACHED`: The stream URL has been used the maximum number of times and can no longer start stream sessions.
   *
   * @public
   */
  Status?: StreamUrlStatus | undefined;

  /**
   * Additional information about why the stream URL is in its current status. Amazon GameLift Streams populates this value when the status is `REVOKED`. Possible values include the following:
   *
   * - `userRevoked`: You revoked the stream URL.
   * - `revokedAndTerminatingSessions`: You revoked the stream URL and Amazon GameLift Streams is ending its running stream sessions.
   * - `revokedAndSessionsTerminated`: You revoked the stream URL and its running stream sessions have ended.
   * - `streamGroupDeleted`: The stream group was deleted, which revoked the stream URL.
   * - `applicationDeleted`: The application was deleted, which revoked the stream URL.
   *
   * @public
   */
  StatusReason?: StreamUrlStatusReason | undefined;

  /**
   * The date and time when the stream URL expires and stops accepting new stream sessions. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The maximum number of times the stream URL can start a stream session.
   *
   * @public
   */
  UsageLimit?: number | undefined;

  /**
   * The number of times the stream URL can still be used to start a stream session.
   *
   * @public
   */
  RemainingUses?: number | undefined;

  /**
   * The stream group that runs the stream sessions.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  StreamGroupArn?: string | undefined;

  /**
   * The application that runs in the stream sessions.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The data transport protocol used for stream sessions started from this stream URL.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The list of locations, in order of preference, where Amazon GameLift Streams places the stream session. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Locations?: string[] | undefined;

  /**
   * The maximum length of time, in seconds, that a stream session started from this stream URL can run.
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * The descriptive label for the stream URL.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The command-line arguments passed to the application when a stream session starts.
   *
   * @public
   */
  AdditionalLaunchArgs?: string[] | undefined;

  /**
   * The environment variables made available to the application when a stream session starts.
   *
   * @public
   */
  AdditionalEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon GameLift Streams assumes during stream sessions started from this stream URL. For more information, see [Provide AWS credentials to your streaming application](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/session-credentials.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The display settings, such as resolution, for stream sessions started from this stream URL.
   *
   * @public
   */
  DisplayConfiguration?: DisplayConfiguration | undefined;

  /**
   * A list of the stream sessions that have been started through this stream URL.
   *
   * @public
   */
  StreamSessions?: StreamSessionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationShaderCachesInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Describes a shader cache associated with an Amazon GameLift Streams application.
 *
 * @public
 */
export interface ShaderCacheSummary {
  /**
   * A unique identifier for the shader cache, formatted as a 32-character hexadecimal string. Format is `1271e693c50b940e228582f1ccdd4e27`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn: string | undefined;

  /**
   * The current status of the shader cache. Possible statuses include the following:
   *
   * - `INITIALIZED`: Amazon GameLift Streams received the request and is preparing the shader cache.
   * - `PROCESSING`: Amazon GameLift Streams is replicating the shader cache to the streaming locations in the associated stream groups.
   * - `READY`: The shader cache is replicated and available for use in stream sessions.
   * - `DELETING`: Amazon GameLift Streams is deleting the shader cache.
   * - `ERROR`: An error occurred during shader cache processing. Create a new shader cache to try again.
   *
   * @public
   */
  Status?: ShaderCacheStatus | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The total storage used by all compiled shader files in this shader cache, in bytes.
   *
   * @public
   */
  StorageBytes?: number | undefined;

  /**
   * The stream groups compatible with this shader cache. Compatibility is based on GPU type and GPU driver version. For more information on shader cache compatibility, see [Shader caches](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/shader-caches.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify stream group resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  AssociatedStreamGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationShaderCachesOutput {
  /**
   * A collection of shader cache metadata for the specified Amazon GameLift Streams application. Each item includes the shader cache status, associated stream groups, and storage size.
   *
   * @public
   */
  Items?: ShaderCacheSummary[] | undefined;
}

/**
 * @public
 */
export interface ListStreamSessionsInput {
  /**
   * Filter by the stream session status. You can specify one status in each request to retrieve only sessions that are currently in that status.
   *
   * @public
   */
  Status?: StreamSessionStatus | undefined;

  /**
   * Filter by the exported files status. You can specify one status in each request to retrieve only sessions that currently have that exported files status.
   *
   * Exported files can be in one of the following states:
   *
   * - `SUCCEEDED`: The exported files are successfully stored in an S3 bucket.
   * - `FAILED`: The session ended but Amazon GameLift Streams couldn't collect and upload the files to S3.
   * - `PENDING`: Either the stream session is still in progress, or uploading the exported files to the S3 bucket is in progress.
   *
   * @public
   */
  ExportFilesStatus?: ExportFilesStatus | undefined;

  /**
   * The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to return. Use this parameter with `NextToken` to return results in sequential pages. Default value is `25`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique identifier of a Amazon GameLift Streams stream group to retrieve the stream session for. You can use either the stream group ID or the [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html).
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface ListStreamSessionsOutput {
  /**
   * A collection of Amazon GameLift Streams stream sessions that are associated with a stream group and returned in response to a list request. Each item includes stream session metadata and status.
   *
   * @public
   */
  Items?: StreamSessionSummary[] | undefined;

  /**
   * A token that marks the start of the next sequential page of results. If an operation doesn't return a token, you've reached the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamSessionsByAccountInput {
  /**
   * Filter by the stream session status. You can specify one status in each request to retrieve only sessions that are currently in that status.
   *
   * @public
   */
  Status?: StreamSessionStatus | undefined;

  /**
   * Filter by the exported files status. You can specify one status in each request to retrieve only sessions that currently have that exported files status.
   *
   * @public
   */
  ExportFilesStatus?: ExportFilesStatus | undefined;

  /**
   * The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to return. Use this parameter with `NextToken` to return results in sequential pages. Default value is `25`.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListStreamSessionsByAccountOutput {
  /**
   * A collection of Amazon GameLift Streams stream sessions that are associated with a stream group and returned in response to a list request. Each item includes stream session metadata and status.
   *
   * @public
   */
  Items?: StreamSessionSummary[] | undefined;

  /**
   * A token that marks the start of the next sequential page of results. If an operation doesn't return a token, you've reached the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamUrlsInput {
  /**
   * Filters the list to stream URLs with the specified status.
   *
   * - `ACTIVE`: The stream URL is valid and can start stream sessions.
   * - `EXPIRED`: The stream URL has passed its expiration time and can no longer start stream sessions.
   * - `REVOKED`: The stream URL was revoked and can no longer start stream sessions.
   * - `LIMIT_REACHED`: The stream URL has been used the maximum number of times and can no longer start stream sessions.
   *
   * @public
   */
  Status?: StreamUrlStatus | undefined;

  /**
   * Filters the list to stream URLs that belong to the specified stream group.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  StreamGroupIdentifier?: string | undefined;

  /**
   * The token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page. Valid values are 1-100. The default is 25.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a stream URL. This is a summary view that omits the full configuration, such as launch arguments and display settings. To retrieve the complete configuration, call [GetStreamUrl](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamUrl.html).
 *
 * @public
 */
export interface StreamUrlSummary {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream URL across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamurl/[stream group resource ID]/[stream URL resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the stream URL resource, for example `su-1AB2C3De4`.
   *
   * @public
   */
  StreamUrlId?: string | undefined;

  /**
   * The shareable stream URL. Distribute this URL to end users so that they can start and play a stream session in a hosted web player. Treat the stream URL as a secret. Anyone who has it can start a stream session until the stream URL expires, is revoked, or reaches its usage limit.
   *
   * @public
   */
  StreamUrl?: string | undefined;

  /**
   * The current status of the stream URL. Possible statuses include the following:
   *
   * - `ACTIVE`: The stream URL is valid and can start stream sessions.
   * - `EXPIRED`: The stream URL has passed its expiration time and can no longer start stream sessions.
   * - `REVOKED`: The stream URL was revoked and can no longer start stream sessions.
   * - `LIMIT_REACHED`: The stream URL has been used the maximum number of times and can no longer start stream sessions.
   *
   * @public
   */
  Status?: StreamUrlStatus | undefined;

  /**
   * Additional information about why the stream URL is in its current status. Amazon GameLift Streams populates this value when the status is `REVOKED`. Possible values include the following:
   *
   * - `userRevoked`: You revoked the stream URL.
   * - `revokedAndTerminatingSessions`: You revoked the stream URL and Amazon GameLift Streams is ending its running stream sessions.
   * - `revokedAndSessionsTerminated`: You revoked the stream URL and its running stream sessions have ended.
   * - `streamGroupDeleted`: The stream group was deleted, which revoked the stream URL.
   * - `applicationDeleted`: The application was deleted, which revoked the stream URL.
   *
   * @public
   */
  StatusReason?: StreamUrlStatusReason | undefined;

  /**
   * The date and time when the stream URL expires and stops accepting new stream sessions. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The maximum number of times the stream URL can start a stream session.
   *
   * @public
   */
  UsageLimit?: number | undefined;

  /**
   * The number of times the stream URL can still be used to start a stream session.
   *
   * @public
   */
  RemainingUses?: number | undefined;

  /**
   * The stream group that runs the stream sessions.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  StreamGroupArn?: string | undefined;

  /**
   * The application that runs in the stream sessions.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The maximum length of time, in seconds, that a stream session started from this stream URL can run.
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * The descriptive label for the stream URL.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamUrlsOutput {
  /**
   * A collection of stream URL summaries. Each summary includes the identity, status, and usage of the stream URL, but not its full configuration.
   *
   * @public
   */
  Items?: StreamUrlSummary[] | undefined;

  /**
   * A token that marks the start of the next sequential page of results. If an operation doesn't return a token, you've reached the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that you want to retrieve tags for. To get an Amazon GameLift Streams resource ARN, call a List or Get operation for the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A collection of tags that have been assigned to the specified resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RemoveStreamGroupLocationsInput {
  /**
   * A stream group to remove the specified locations from.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A set of locations to remove this stream group. For example, `us-east-1`.
   *
   * For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Locations: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeStreamUrlInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * This is the stream group that owns the stream URL.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The unique identifier of the stream URL to revoke. Specify a stream URL ID or Amazon Resource Name (ARN). Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamurl/sg-1AB2C3De4/su-1AB2C3De4`. Example ID: `su-1AB2C3De4`.
   *
   * @public
   */
  StreamUrlIdentifier: string | undefined;

  /**
   * Controls what happens to running stream sessions when you revoke the stream URL. If you do not specify a value, the default is `REVOKE_URL`. Possible values include the following:
   *
   * - `REVOKE_URL`: Stops the stream URL from starting new stream sessions. Running sessions continue until they end.
   * - `REVOKE_AND_TERMINATE_SESSIONS`: Stops new stream sessions and ends any running stream sessions.
   *
   * @public
   */
  RevocationMode?: RevocationMode | undefined;
}

/**
 * @public
 */
export interface StartStreamSessionInput {
  /**
   * A unique identifier that represents a client request. The request is idempotent, which ensures that an API request completes only once. When users send a request, Amazon GameLift Streams automatically populates this field.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A human-readable label for the stream session. You can update this value later.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The stream group to run this stream session with.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The data transport protocol to use for the stream session.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * A WebRTC ICE offer string to use when initializing a WebRTC connection. Typically, the offer is a very long JSON string. Provide the string as a text value in quotes.
   *
   * Amazon GameLift Streams also supports setting the field to "NO_CLIENT_CONNECTION". This will create a session without needing any browser request or Web SDK integration. The session starts up as usual and waits for a reconnection from a browser, which is accomplished using [CreateStreamSessionConnection](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_CreateStreamSessionConnection.html).
   *
   * @public
   */
  SignalRequest: string | undefined;

  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * An opaque, unique identifier for an end-user, defined by the developer.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * A list of locations, in order of priority, where you want Amazon GameLift Streams to start a stream from. For example, `us-east-1`. Amazon GameLift Streams selects the location with the next available capacity to start a single stream session in. If this value is empty, Amazon GameLift Streams attempts to start a stream session in the primary location.
   *
   * For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Locations?: string[] | undefined;

  /**
   * Length of time (in seconds) that Amazon GameLift Streams should wait for a client to connect or reconnect to the stream session. Applies to both connection and reconnection scenarios. This time span starts when the stream session reaches `ACTIVE` state. If no client connects before the timeout, Amazon GameLift Streams terminates the stream session. Default value is 120.
   *
   * @public
   */
  ConnectionTimeoutSeconds?: number | undefined;

  /**
   * The maximum duration of a session. Amazon GameLift Streams will automatically terminate a session after this amount of time has elapsed, regardless of any existing client connections. Default value is 43200 (12 hours).
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalLaunchArgs?: string[] | undefined;

  /**
   * A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client.
   *
   * > **Note:** If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * Configuration settings for sharing the stream session's performance stats with the client
   *
   * @public
   */
  PerformanceStatsConfiguration?: PerformanceStatsConfiguration | undefined;

  /**
   * The ARN of an AWS Identity and Access Management (IAM) role that Amazon GameLift Streams assumes on your behalf during the stream session. The role grants Amazon GameLift Streams permission to obtain temporary credentials for your application. The role's trust policy must allow the `gameliftstreams.amazonaws.com` service principal to assume it. The role name must start with `GameLiftStreams-`.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration for the stream session's virtual monitor, including the resolution settings.
   *
   * If not specified, Amazon GameLift Streams uses the default resolution of 1920 × 1080.
   *
   * @public
   */
  DisplayConfiguration?: DisplayConfiguration | undefined;
}

/**
 * @public
 */
export interface StartStreamSessionOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that's assigned to a stream session resource. When combined with the stream group resource ID, this value uniquely identifies the stream session across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamsession/[stream group resource ID]/[stream session resource ID]`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A human-readable label for the stream session. You can update this value at any time.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier for the Amazon GameLift Streams stream group that is hosting the stream session. Format example: `sg-1AB2C3De4`.
   *
   * @public
   */
  StreamGroupId?: string | undefined;

  /**
   * An opaque, unique identifier for an end-user, defined by the developer.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The current status of the stream session. A stream session is ready for a client to connect when in `ACTIVE` status.
   *
   * - `ACTIVATING`: The stream session is starting and preparing to stream.
   * - `ACTIVE`: The stream session is ready and waiting for a client connection. A client has `ConnectionTimeoutSeconds` (specified in `StartStreamSession`) from when the session reaches `ACTIVE` state to establish a connection. If no client connects within this timeframe, the session automatically terminates.
   * - `CONNECTED`: The stream session has a connected client. A session will automatically terminate if there is no user input for 60 minutes, or if the maximum length of a session specified by `SessionLengthSeconds` in `StartStreamSession` is exceeded.
   * - `ERROR`: The stream session failed to activate. See `StatusReason` (returned by `GetStreamSession` and `StartStreamSession`) for more information.
   * - `PENDING_CLIENT_RECONNECTION`: A client has recently disconnected and the stream session is waiting for the client to reconnect. A client has `ConnectionTimeoutSeconds` (specified in `StartStreamSession`) from when the session reaches `PENDING_CLIENT_RECONNECTION` state to re-establish a connection. If no client connects within this timeframe, the session automatically terminates.
   * - `RECONNECTING`: A client has initiated a reconnect to a session that was in `PENDING_CLIENT_RECONNECTION` state.
   * - `TERMINATING`: The stream session is ending.
   * - `TERMINATED`: The stream session has ended.
   *
   * @public
   */
  Status?: StreamSessionStatus | undefined;

  /**
   * A short description of the reason the stream session is in `ERROR` status or `TERMINATED` status.
   *
   * `ERROR` status reasons:
   *
   * - `applicationLogS3DestinationError`: Could not write the application log to the Amazon S3 bucket that is configured for the streaming application. Make sure the bucket still exists.
   * - `internalError`: An internal service error occurred. Start a new stream session to continue streaming.
   * - `invalidSignalRequest`: The WebRTC signal request that was sent is not valid. When starting or reconnecting to a stream session, use `generateSignalRequest` in the Amazon GameLift Streams Web SDK to generate a new signal request.
   * - `placementTimeout`: Amazon GameLift Streams could not find available stream capacity to start a stream session. Increase the stream capacity in the stream group or wait until capacity becomes available.
   *
   * `TERMINATED` status reasons:
   *
   * - `apiTerminated`: The stream session was terminated by an API call to [TerminateStreamSession](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_TerminateStreamSession.html).
   * - `applicationExit`: The streaming application exited or crashed. The stream session was terminated because the application is no longer running.
   * - `connectionTimeout`: The stream session was terminated because the client failed to connect within the connection timeout period specified by `ConnectionTimeoutSeconds`.
   * - `maxSessionLengthTimeout`: The stream session was terminated because it exceeded the maximum session length timeout period specified by `SessionLengthSeconds`.
   * - `reconnectionTimeout`: The stream session was terminated because the client failed to reconnect within the reconnection timeout period specified by `ConnectionTimeoutSeconds` after losing connection.
   *
   * @public
   */
  StatusReason?: StreamSessionStatusReason | undefined;

  /**
   * The data transfer protocol in use with the stream session.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The location where Amazon GameLift Streams hosts and streams your application. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the *Amazon GameLift Streams Developer Guide*.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The WebRTC ICE offer string that a client generates to initiate a connection to the stream session.
   *
   * @public
   */
  SignalRequest?: string | undefined;

  /**
   * The WebRTC answer string that the stream server generates in response to the `SignalRequest`.
   *
   * @public
   */
  SignalResponse?: string | undefined;

  /**
   * The length of time that Amazon GameLift Streams should wait for a client to connect or reconnect to the stream session. This time span starts when the stream session reaches `ACTIVE` or `PENDING_CLIENT_RECONNECTION` state. If no client connects (or reconnects) before the timeout, Amazon GameLift Streams terminates the stream session.
   *
   * @public
   */
  ConnectionTimeoutSeconds?: number | undefined;

  /**
   * The maximum duration of a session. Amazon GameLift Streams will automatically terminate a session after this amount of time has elapsed, regardless of any existing client connections.
   *
   * @public
   */
  SessionLengthSeconds?: number | undefined;

  /**
   * A list of CLI arguments that are sent to the streaming server when a stream session launches. You can use this to configure the application or stream session details. You can also provide custom arguments that Amazon GameLift Streams passes to your game client.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalLaunchArgs?: string[] | undefined;

  /**
   * A set of options that you can use to control the stream session runtime environment, expressed as a set of key-value pairs. You can use this to configure the application or stream session details. You can also provide custom environment variables that Amazon GameLift Streams passes to your game client.
   *
   * > **Note:** If you want to debug your application with environment variables, we recommend that you do so in a local environment outside of Amazon GameLift Streams. For more information, refer to the Compatibility Guidance in the troubleshooting section of the Developer Guide.
   *
   * `AdditionalEnvironmentVariables` and `AdditionalLaunchArgs` have similar purposes. `AdditionalEnvironmentVariables` passes data using environment variables; while `AdditionalLaunchArgs` passes data using command-line arguments.
   *
   * @public
   */
  AdditionalEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The performance stats configuration for the stream session
   *
   * @public
   */
  PerformanceStatsConfiguration?: PerformanceStatsConfiguration | undefined;

  /**
   * Access location for log files that your content generates during a stream session. These log files are uploaded to cloud storage location at the end of a stream session. The Amazon GameLift Streams application resource defines which log files to upload.
   *
   * @public
   */
  LogFileLocationUri?: string | undefined;

  /**
   * The URL of an S3 bucket that stores Amazon GameLift Streams WebSDK files. The URL is used to establish connection with the client.
   *
   * @public
   */
  WebSdkProtocolUrl?: string | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The application streaming in this session.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * Provides details about the stream session's exported files.
   *
   * @public
   */
  ExportFilesMetadata?: ExportFilesMetadata | undefined;

  /**
   * The ARN of the AWS Identity and Access Management (IAM) role that Amazon GameLift Streams assumes on behalf of your application during the stream session.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration for the stream session's virtual monitor.
   *
   * @public
   */
  DisplayConfiguration?: DisplayConfiguration | undefined;
}

/**
 * @public
 */
export interface GetStreamGroupInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetStreamGroupOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that is assigned to the stream group resource and that uniquely identifies the group across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamgroup/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A descriptive label for the stream group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The default Amazon GameLift Streams application that is associated with this stream group.
   *
   * @public
   */
  DefaultApplication?: DefaultApplication | undefined;

  /**
   * This value is the set of locations, including their name, current status, and capacities.
   *
   * A location can be in one of the following states:
   *
   * - `ACTIVATING`: Amazon GameLift Streams is preparing the location. You cannot stream from, scale the capacity of, or remove this location yet.
   * - `ACTIVE`: The location is provisioned with initial capacity. You can now stream from, scale the capacity of, or remove this location.
   * - `ERROR`: Amazon GameLift Streams failed to set up this location. The `StatusReason` field describes the error. You can remove this location and try to add it again.
   * - `REMOVING`: Amazon GameLift Streams is working to remove this location. This will release all provisioned capacity for this location in this stream group.
   *
   * @public
   */
  LocationStates?: LocationState[] | undefined;

  /**
   * The target stream quality for the stream group.
   *
   * A stream class can be one of the following:
   *
   * - **`gen6n_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra_win2022` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen6n_medium` (NVIDIA, medium)** Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports up to 4 concurrent stream sessions
   * - **`gen6n_small` (NVIDIA, small)** Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM
   *   - Tenancy: Supports up to 12 concurrent stream sessions
   * - **`gen6n_medium_win2022` (NVIDIA, medium)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_small_win2022` (NVIDIA, small)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen5n_ultra` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen4n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   *
   * @public
   */
  StreamClass?: StreamClass | undefined;

  /**
   * A unique ID value that is assigned to the resource when it's created. Format example: `sg-1AB2C3De4`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the stream group resource. Possible statuses include the following:
   *
   * - `ACTIVATING`: The stream group is deploying and isn't ready to host streams.
   * - `ACTIVE`: The stream group is ready to host streams.
   * - `ACTIVE_WITH_ERRORS`: One or more locations in the stream group are in an error state. Verify the details of individual locations and remove any locations which are in error.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the stream group.
   * - `ERROR`: An error occurred when the stream group deployed. See `StatusReason` (returned by `CreateStreamGroup`, `GetStreamGroup`, and `UpdateStreamGroup`) for more information.
   * - `EXPIRED`: The stream group is expired and can no longer host streams. This typically occurs when a stream group is 365 days old, as indicated by the value of `ExpiresAt`. Create a new stream group to resume streaming capabilities.
   * - `UPDATING_LOCATIONS`: One or more locations in the stream group are in the process of updating (either activating or deleting).
   *
   * @public
   */
  Status?: StreamGroupStatus | undefined;

  /**
   * A short description of the reason that the stream group is in `ERROR` status. The possible reasons can be one of the following:
   *
   * - `internalError`: The request can't process right now because of an issue with the server. Try again later.
   * - `noAvailableInstances`: Amazon GameLift Streams does not currently have enough available capacity to fulfill your request. Wait a few minutes and retry the request as capacity can shift frequently. You can also try to make the request using a different stream class or in another region.
   *
   * @public
   */
  StatusReason?: StreamGroupStatusReason | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which this stream group expires. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC). After this time, you will no longer be able to update this stream group or use it to start stream sessions. Only Get and Delete operations will work on an expired stream group.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A set of applications that this stream group is associated to. You can stream any of these applications by using this stream group.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  AssociatedApplications?: string[] | undefined;
}

/**
 * @public
 */
export interface ListStreamGroupsInput {
  /**
   * A token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to return. Use this parameter with `NextToken` to return results in sequential pages. Default value is `25`.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes a Amazon GameLift Streams stream group resource for hosting content streams. To retrieve additional stream group details, call [GetStreamGroup](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_GetStreamGroup.html).
 *
 * @public
 */
export interface StreamGroupSummary {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * An ID that uniquely identifies the stream group resource. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A descriptive label for the stream group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Object that identifies the Amazon GameLift Streams application to stream with this stream group.
   *
   * @public
   */
  DefaultApplication?: DefaultApplication | undefined;

  /**
   * The target stream quality for the stream group.
   *
   * A stream class can be one of the following:
   *
   * - **`gen6n_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra_win2022` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen6n_medium` (NVIDIA, medium)** Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports up to 4 concurrent stream sessions
   * - **`gen6n_small` (NVIDIA, small)** Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM
   *   - Tenancy: Supports up to 12 concurrent stream sessions
   * - **`gen6n_medium_win2022` (NVIDIA, medium)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_small_win2022` (NVIDIA, small)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen5n_ultra` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen4n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   *
   * @public
   */
  StreamClass?: StreamClass | undefined;

  /**
   * The current status of the stream group resource. Possible statuses include the following:
   *
   * - `ACTIVATING`: The stream group is deploying and isn't ready to host streams.
   * - `ACTIVE`: The stream group is ready to host streams.
   * - `ACTIVE_WITH_ERRORS`: One or more locations in the stream group are in an error state. Verify the details of individual locations and remove any locations which are in error.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the stream group.
   * - `ERROR`: An error occurred when the stream group deployed. See `StatusReason` (returned by `CreateStreamGroup`, `GetStreamGroup`, and `UpdateStreamGroup`) for more information.
   * - `EXPIRED`: The stream group is expired and can no longer host streams. This typically occurs when a stream group is 365 days old, as indicated by the value of `ExpiresAt`. Create a new stream group to resume streaming capabilities.
   * - `UPDATING_LOCATIONS`: One or more locations in the stream group are in the process of updating (either activating or deleting).
   *
   * @public
   */
  Status?: StreamGroupStatus | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The time at which this stream group expires. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC). After this time, you will no longer be able to update this stream group or use it to start stream sessions. Only Get and Delete operations will work on an expired stream group.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListStreamGroupsOutput {
  /**
   * A collection of Amazon GameLift Streams stream groups that are associated with the Amazon Web Services account in use. Each item includes stream group metadata and status, but doesn't include capacity information.
   *
   * @public
   */
  Items?: StreamGroupSummary[] | undefined;

  /**
   * A token that marks the start of the next sequential page of results. If an operation doesn't return a token, you've reached the end of the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamGroupInput {
  /**
   * An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A set of one or more locations and the streaming capacity for each location.
   *
   * @public
   */
  LocationConfigurations?: LocationConfiguration[] | undefined;

  /**
   * A descriptive label for the stream group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the Amazon GameLift Streams application that you want to set as the default application in a stream group. The application that you specify must be in `READY` status. The default application is pre-cached on always-on compute resources, reducing stream startup times. Other applications are automatically cached as needed.
   *
   * Note that this parameter only sets the default application in a stream group. To associate a new application to an existing stream group, you must use [AssociateApplications](https://docs.aws.amazon.com/gameliftstreams/latest/apireference/API_AssociateApplications.html).
   *
   * When you switch default applications in a stream group, it can take up to a few hours for the new default application to be pre-cached.
   *
   * This value is an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`. Example ID: `a-9ZY8X7Wv6`.
   *
   * @public
   */
  DefaultApplicationIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamGroupOutput {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that is assigned to the stream group resource and that uniquely identifies the group across all Amazon Web Services Regions. Format is `arn:aws:gameliftstreams:[AWS Region]:[AWS account]:streamgroup/[resource ID]`.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A descriptive label for the stream group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The default Amazon GameLift Streams application that is associated with this stream group.
   *
   * @public
   */
  DefaultApplication?: DefaultApplication | undefined;

  /**
   * This value is set of locations, including their name, current status, and capacities.
   *
   * A location can be in one of the following states:
   *
   * - `ACTIVATING`: Amazon GameLift Streams is preparing the location. You cannot stream from, scale the capacity of, or remove this location yet.
   * - `ACTIVE`: The location is provisioned with initial capacity. You can now stream from, scale the capacity of, or remove this location.
   * - `ERROR`: Amazon GameLift Streams failed to set up this location. The `StatusReason` field describes the error. You can remove this location and try to add it again.
   * - `REMOVING`: Amazon GameLift Streams is working to remove this location. This will release all provisioned capacity for this location in this stream group.
   *
   * @public
   */
  LocationStates?: LocationState[] | undefined;

  /**
   * The target stream quality for the stream group.
   *
   * A stream class can be one of the following:
   *
   * - **`gen6n_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra_win2022` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen6n_medium` (NVIDIA, medium)** Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports up to 4 concurrent stream sessions
   * - **`gen6n_small` (NVIDIA, small)** Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM
   *   - Tenancy: Supports up to 12 concurrent stream sessions
   * - **`gen6n_medium_win2022` (NVIDIA, medium)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6n_small_win2022` (NVIDIA, small)** Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro_win2022` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen6e_pro` (NVIDIA, pro)** Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen5n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen5n_ultra` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_win2022` (NVIDIA, ultra)** Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   * - **`gen4n_high` (NVIDIA, high)** Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM
   *   - Tenancy: Supports up to 2 concurrent stream sessions
   * - **`gen4n_ultra` (NVIDIA, ultra)** Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs.
   *
   *   - Reference resolution: 1080p
   *   - Reference frame rate: 60 fps
   *   - Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM
   *   - Tenancy: Supports 1 concurrent stream session
   *
   * @public
   */
  StreamClass?: StreamClass | undefined;

  /**
   * A unique ID value that is assigned to the resource when it's created. Format example: `sg-1AB2C3De4`.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The current status of the stream group resource. Possible statuses include the following:
   *
   * - `ACTIVATING`: The stream group is deploying and isn't ready to host streams.
   * - `ACTIVE`: The stream group is ready to host streams.
   * - `ACTIVE_WITH_ERRORS`: One or more locations in the stream group are in an error state. Verify the details of individual locations and remove any locations which are in error.
   * - `DELETING`: Amazon GameLift Streams is in the process of deleting the stream group.
   * - `ERROR`: An error occurred when the stream group deployed. See `StatusReason` (returned by `CreateStreamGroup`, `GetStreamGroup`, and `UpdateStreamGroup`) for more information.
   * - `EXPIRED`: The stream group is expired and can no longer host streams. This typically occurs when a stream group is 365 days old, as indicated by the value of `ExpiresAt`. Create a new stream group to resume streaming capabilities.
   * - `UPDATING_LOCATIONS`: One or more locations in the stream group are in the process of updating (either activating or deleting).
   *
   * @public
   */
  Status?: StreamGroupStatus | undefined;

  /**
   * A short description of the reason that the stream group is in `ERROR` status. The possible reasons can be one of the following:
   *
   * - `internalError`: The request can't process right now because of an issue with the server. Try again later.
   * - `noAvailableInstances`: Amazon GameLift Streams does not currently have enough available capacity to fulfill your request. Wait a few minutes and retry the request as capacity can shift frequently. You can also try to make the request using a different stream class or in another region.
   *
   * @public
   */
  StatusReason?: StreamGroupStatusReason | undefined;

  /**
   * A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC).
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which this stream group expires. Timestamps are expressed using in ISO8601 format, such as: `2022-12-27T22:29:40+00:00` (UTC). After this time, you will no longer be able to update this stream group or use it to start stream sessions. Only Get and Delete operations will work on an expired stream group.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;

  /**
   * A set of applications that this stream group is associated with. You can stream any of these applications with the stream group.
   *
   * This value is a set of [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identify application resources. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
   *
   * @public
   */
  AssociatedApplications?: string[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the Amazon GameLift Streams resource that you want to apply tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tags, in the form of key-value pairs, to assign to the specified Amazon GameLift Streams resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TerminateStreamSessionInput {
  /**
   * [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream group resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4`. Example ID: `sg-1AB2C3De4`.
   *
   * The stream group that runs this stream session.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) or ID that uniquely identifies the stream session resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:streamsession/sg-1AB2C3De4/ABC123def4567`. Example ID: `ABC123def4567`.
   *
   * @public
   */
  StreamSessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the Amazon GameLift Streams resource that you want to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the specified Amazon GameLift Streams resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
