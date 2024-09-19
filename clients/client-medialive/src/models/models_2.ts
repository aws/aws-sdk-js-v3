// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
  AudioDescription,
  CaptionDescription,
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelPipelineIdToRestart,
  ChannelPlacementGroupState,
  ChannelState,
  ChannelSummary,
  CloudWatchAlarmTemplateComparisonOperator,
  CloudWatchAlarmTemplateGroupSummary,
  CloudWatchAlarmTemplateStatistic,
  CloudWatchAlarmTemplateSummary,
  CloudWatchAlarmTemplateTargetResourceType,
  CloudWatchAlarmTemplateTreatMissingData,
  ClusterNetworkSettings,
  ClusterState,
  ClusterType,
  DescribeAnywhereSettings,
  DescribeChannelPlacementGroupSummary,
  DescribeClusterSummary,
  DescribeNetworkSummary,
  DescribeNodeSummary,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  EventBridgeRuleTemplateEventType,
  EventBridgeRuleTemplateGroupSummary,
  EventBridgeRuleTemplateSummary,
  EventBridgeRuleTemplateTarget,
  Input,
  InputAttachment,
  InputClass,
  InputDestination,
  InputDestinationRequest,
  InputDeviceCodec,
  InputDeviceConfigurableAudioChannelPairConfig,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceOutputType,
  InputDeviceRequest,
  InputDeviceSettings,
  InputDeviceSummary,
  InputDeviceType,
  InputDeviceUhdSettings,
  InputNetworkLocation,
  InputSecurityGroup,
  InputSecurityGroupState,
  InputSource,
  InputSourceRequest,
  InputSourceType,
  InputSpecification,
  InputState,
  InputType,
  InputWhitelistRule,
  InputWhitelistRuleCidr,
  InterfaceMappingCreateRequest,
  InterfaceMappingUpdateRequest,
  IpPool,
  IpPoolCreateRequest,
  IpPoolUpdateRequest,
  LogLevel,
  MaintenanceDay,
  MaintenanceStatus,
  MediaConnectFlow,
  MediaConnectFlowRequest,
  MediaResourceNeighbor,
  MulticastSettings,
  MulticastSourceCreateRequest,
  MulticastSourceUpdateRequest,
  MultiplexOutputDestination,
  MultiplexProgramPipelineDetail,
  MultiplexProgramSummary,
  MultiplexState,
  MultiplexSummary,
  NetworkState,
  NodeConnectionState,
  NodeInterfaceMapping,
  NodeInterfaceMappingCreateRequest,
  NodeRole,
  NodeState,
  Offering,
  OfferingDurationUnits,
  OfferingType,
  OutputDestination,
  ReservationResourceSpecification,
  Route,
  SrtSettings,
  VpcOutputSettingsDescription,
} from "./models_0";

import {
  AcceptHeader,
  AccountConfiguration,
  AnywhereSettings,
  AvailBlanking,
  AvailConfiguration,
  BlackoutSlate,
  ColorCorrectionSettings,
  FeatureActivations,
  GlobalConfigurationInputEndAction,
  GlobalConfigurationLowFramerateInputs,
  GlobalConfigurationOutputLockingMode,
  GlobalConfigurationOutputTimingSource,
  InputLossBehavior,
  OutputGroup,
  OutputLockingSettings,
  PipelineDetail,
  RenewalSettings,
  Reservation,
  ReservationState,
  RouteCreateRequest,
  RouteUpdateRequest,
  ScheduleAction,
  SignalMapMonitorDeploymentStatus,
  SignalMapStatus,
  SignalMapSummary,
  SrtCallerSourceRequest,
  ThumbnailDetail,
  TransferringInputDeviceSummary,
  VideoDescription,
} from "./models_1";

/**
 * Global Configuration
 * @public
 */
export interface GlobalConfiguration {
  /**
   * Value to set the initial audio gain for the Live Event.
   * @public
   */
  InitialAudioGain?: number;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   * @public
   */
  InputEndAction?: GlobalConfigurationInputEndAction;

  /**
   * Settings for system actions when input is lost.
   * @public
   */
  InputLossBehavior?: InputLossBehavior;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   * @public
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   * @public
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   * @public
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs;

  /**
   * Advanced output locking settings
   * @public
   */
  OutputLockingSettings?: OutputLockingSettings;
}

/**
 * @public
 * @enum
 */
export const MotionGraphicsInsertion = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MotionGraphicsInsertion = (typeof MotionGraphicsInsertion)[keyof typeof MotionGraphicsInsertion];

/**
 * Html Motion Graphics Settings
 * @public
 */
export interface HtmlMotionGraphicsSettings {}

/**
 * Motion Graphics Settings
 * @public
 */
export interface MotionGraphicsSettings {
  /**
   * Html Motion Graphics Settings
   * @public
   */
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
}

/**
 * Motion Graphics Configuration
 * @public
 */
export interface MotionGraphicsConfiguration {
  /**
   * Motion Graphics Insertion
   * @public
   */
  MotionGraphicsInsertion?: MotionGraphicsInsertion;

  /**
   * Motion Graphics Settings
   * @public
   */
  MotionGraphicsSettings: MotionGraphicsSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const NielsenPcmToId3TaggingState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type NielsenPcmToId3TaggingState =
  (typeof NielsenPcmToId3TaggingState)[keyof typeof NielsenPcmToId3TaggingState];

/**
 * Nielsen Configuration
 * @public
 */
export interface NielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   * @public
   */
  DistributorId?: string;

  /**
   * Enables Nielsen PCM to ID3 tagging
   * @public
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState;
}

/**
 * @public
 * @enum
 */
export const ThumbnailState = {
  AUTO: "AUTO",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type ThumbnailState = (typeof ThumbnailState)[keyof typeof ThumbnailState];

/**
 * Thumbnail Configuration
 * @public
 */
export interface ThumbnailConfiguration {
  /**
   * Enables the thumbnail feature. The feature generates thumbnails of the incoming video in each pipeline in the channel. AUTO turns the feature on, DISABLE turns the feature off.
   * @public
   */
  State: ThumbnailState | undefined;
}

/**
 * @public
 * @enum
 */
export const TimecodeConfigSource = {
  EMBEDDED: "EMBEDDED",
  SYSTEMCLOCK: "SYSTEMCLOCK",
  ZEROBASED: "ZEROBASED",
} as const;

/**
 * @public
 */
export type TimecodeConfigSource = (typeof TimecodeConfigSource)[keyof typeof TimecodeConfigSource];

/**
 * Timecode Config
 * @public
 */
export interface TimecodeConfig {
  /**
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   * @public
   */
  Source: TimecodeConfigSource | undefined;

  /**
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   * @public
   */
  SyncThreshold?: number;
}

/**
 * Encoder Settings
 * @public
 */
export interface EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   * @public
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * Settings for ad avail blanking.
   * @public
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Event-wide configuration settings for ad avail insertion.
   * @public
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * Settings for blackout slate.
   * @public
   */
  BlackoutSlate?: BlackoutSlate;

  /**
   * Settings for caption decriptions
   * @public
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Feature Activations
   * @public
   */
  FeatureActivations?: FeatureActivations;

  /**
   * Configuration settings that apply to the event as a whole.
   * @public
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * Settings for motion graphics.
   * @public
   */
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;

  /**
   * Nielsen configuration settings.
   * @public
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   * @public
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   * @public
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * Placeholder documentation for __listOfVideoDescription
   * @public
   */
  VideoDescriptions: VideoDescription[] | undefined;

  /**
   * Thumbnail configuration settings.
   * @public
   */
  ThumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * Color Correction Settings
   * @public
   */
  ColorCorrectionSettings?: ColorCorrectionSettings;
}

/**
 * Placeholder documentation for Channel
 * @public
 */
export interface Channel {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings;
}

/**
 * A request to claim an AWS Elemental device that you have purchased from a third-party vendor.
 * @public
 */
export interface ClaimDeviceRequest {
  /**
   * The id of the device you want to claim.
   * @public
   */
  Id?: string;
}

/**
 * Placeholder documentation for ClaimDeviceResponse
 * @public
 */
export interface ClaimDeviceResponse {}

/**
 * Used in a CreateClusterRequest.
 * @public
 */
export interface ClusterNetworkSettingsCreateRequest {
  /**
   * Specify one network interface as the default route for traffic to and from the Node. MediaLive Anywhere uses this default when the destination for the traffic isn't covered by the route table for any of the networks. Specify the value of the appropriate logicalInterfaceName parameter that you create in the interfaceMappings.
   * @public
   */
  DefaultRoute?: string;

  /**
   * An array of interfaceMapping objects for this Cluster. You must create a mapping for node interfaces that you plan to use for encoding traffic. You typically don't create a mapping for the management interface. You define this mapping in the Cluster so that the mapping can be used by all the Nodes. Each mapping logically connects one interface on the nodes with one Network. Each mapping consists of a pair of parameters. The logicalInterfaceName parameter creates a logical name for the Node interface that handles a specific type of traffic. For example, my-Inputs-Interface. The networkID parameter refers to the ID of the network. When you create the Nodes in this Cluster, you will associate the logicalInterfaceName with the appropriate physical interface.
   * @public
   */
  InterfaceMappings?: InterfaceMappingCreateRequest[];
}

/**
 * Placeholder documentation for ClusterNetworkSettingsUpdateRequest
 * @public
 */
export interface ClusterNetworkSettingsUpdateRequest {
  /**
   * Include this parameter only if you want to change the default route for the Cluster. Specify one network interface as the default route for traffic to and from the node. MediaLive Anywhere uses this default when the destination for the traffic isn't covered by the route table for any of the networks. Specify the value of the appropriate logicalInterfaceName parameter that you create in the interfaceMappings.
   * @public
   */
  DefaultRoute?: string;

  /**
   * An array of interfaceMapping objects for this Cluster. Include this parameter only if you want to change the interface mappings for the Cluster. Typically, you change the interface mappings only to fix an error you made when creating the mapping. In an update request, make sure that you enter the entire set of mappings again, not just the mappings that you want to add or change. You define this mapping so that the mapping can be used by all the Nodes. Each mapping logically connects one interface on the nodes with one Network. Each mapping consists of a pair of parameters. The logicalInterfaceName parameter creates a logical name for the Node interface that handles a specific type of traffic. For example, my-Inputs-Interface. The networkID parameter refers to the ID of the network. When you create the Nodes in this Cluster, you will associate the logicalInterfaceName with the appropriate physical interface.
   * @public
   */
  InterfaceMappings?: InterfaceMappingUpdateRequest[];
}

/**
 * @public
 * @enum
 */
export const ContentType = {
  image_jpeg: "image/jpeg",
} as const;

/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * Placeholder documentation for MaintenanceCreateSettings
 * @public
 */
export interface MaintenanceCreateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   * @public
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   * @public
   */
  MaintenanceStartTime?: string;
}

/**
 * The properties for a private VPC Output
 * When this property is specified, the output egress addresses will be created in a user specified VPC
 * @public
 */
export interface VpcOutputSettings {
  /**
   * List of public address allocation ids to associate with ENIs that will be created in Output VPC.
   * Must specify one for SINGLE_PIPELINE, two for STANDARD channels
   * @public
   */
  PublicAddressAllocationIds?: string[];

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
   * If none are specified then the VPC default security group will be used
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * A list of VPC subnet IDs from the same VPC.
   * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * A request to create a channel
 * @public
 */
export interface CreateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * Placeholder documentation for __listOfOutputDestination
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceCreateSettings;

  /**
   * Name of channel.
   * @public
   */
  Name?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   * @public
   */
  RequestId?: string;

  /**
   * @deprecated
   *
   * Deprecated field that's only usable by whitelisted customers.
   * @public
   */
  Reserved?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for the VPC outputs
   * @public
   */
  Vpc?: VpcOutputSettings;

  /**
   * The Elemental Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: AnywhereSettings;
}

/**
 * Placeholder documentation for CreateChannelResponse
 * @public
 */
export interface CreateChannelResponse {
  /**
   * Placeholder documentation for Channel
   * @public
   */
  Channel?: Channel;
}

/**
 * A request to create a channel placement group.
 * @public
 */
export interface CreateChannelPlacementGroupRequest {
  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Specify a name that is unique in the Cluster. You can't change the name. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * An array of one ID for the Node that you want to associate with the ChannelPlacementGroup. (You can't associate more than one Node with the ChannelPlacementGroup.) The Node and the ChannelPlacementGroup must be in the same Cluster.
   * @public
   */
  Nodes?: string[];

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources. the request.
   * @public
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateChannelPlacementGroupResponse
 * @public
 */
export interface CreateChannelPlacementGroupResponse {
  /**
   * The ARN of this ChannelPlacementGroup. It is automatically assigned when the ChannelPlacementGroup is created.
   * @public
   */
  Arn?: string;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[];

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateRequest
 * @public
 */
export interface CreateCloudWatchAlarmTemplateRequest {
  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods: number | undefined;

  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData: CloudWatchAlarmTemplateTreatMissingData | undefined;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateResponse
 * @public
 */
export interface CreateCloudWatchAlarmTemplateResponse {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateGroupRequest
 * @public
 */
export interface CreateCloudWatchAlarmTemplateGroupRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateCloudWatchAlarmTemplateGroupResponse
 * @public
 */
export interface CreateCloudWatchAlarmTemplateGroupResponse {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Create as many Clusters as you want, but create at least one. Each Cluster groups together Nodes that you want to treat as a collection. Within the Cluster, you will set up some Nodes as active Nodes, and some as backup Nodes, for Node failover purposes. Each Node can belong to only one Cluster.
 * @public
 */
export interface CreateClusterRequest {
  /**
   * Specify a type. All the Nodes that you later add to this Cluster must be this type of hardware. One Cluster instance can't contain different hardware types. You won't be able to change this parameter after you create the Cluster.
   * @public
   */
  ClusterType?: ClusterType;

  /**
   * The ARN of the IAM role for the Node in this Cluster. The role must include all the operations that you expect these Node to perform. If necessary, create a role in IAM, then attach it here.
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * Specify a name that is unique in the AWS account. We recommend that you assign a name that hints at the types of Nodes in the Cluster. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettingsCreateRequest;

  /**
   * The unique ID of the request.
   * @public
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateClusterResponse
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The ARN of this Cluster. It is automatically assigned when the Cluster is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  ChannelIds?: string[];

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType;

  /**
   * The ID of the  Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateRequest
 * @public
 */
export interface CreateEventBridgeRuleTemplateRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateResponse
 * @public
 */
export interface CreateEventBridgeRuleTemplateResponse {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateGroupRequest
 * @public
 */
export interface CreateEventBridgeRuleTemplateGroupRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateEventBridgeRuleTemplateGroupResponse
 * @public
 */
export interface CreateEventBridgeRuleTemplateGroupResponse {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Settings for a Multicast input. Contains a list of multicast Urls and optional source ip addresses.
 * @public
 */
export interface MulticastSettingsCreateRequest {
  /**
   * Placeholder documentation for __listOfMulticastSourceCreateRequest
   * @public
   */
  Sources?: MulticastSourceCreateRequest[];
}

/**
 * Configures the sources for this SRT input. For a single-pipeline input, include one srtCallerSource in the array. For a standard-pipeline input, include two srtCallerSource.
 * @public
 */
export interface SrtSettingsRequest {
  /**
   * Placeholder documentation for __listOfSrtCallerSourceRequest
   * @public
   */
  SrtCallerSources?: SrtCallerSourceRequest[];
}

/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 * @public
 */
export interface InputVpcRequest {
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * The name of the input
 * @public
 */
export interface CreateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   * @public
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of security groups referenced by IDs to attach to the input.
   * @public
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   * @public
   */
  Name?: string;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   * @public
   */
  RequestId?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   * @public
   */
  Sources?: InputSourceRequest[];

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType;

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   * @public
   */
  Vpc?: InputVpcRequest;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettingsRequest;

  /**
   * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
   * an input in a customer network.
   * @public
   */
  InputNetworkLocation?: InputNetworkLocation;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettingsCreateRequest;
}

/**
 * Placeholder documentation for CreateInputResponse
 * @public
 */
export interface CreateInputResponse {
  /**
   * Placeholder documentation for Input
   * @public
   */
  Input?: Input;
}

/**
 * The IPv4 CIDRs to whitelist for this Input Security Group
 * @public
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   * @public
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * Placeholder documentation for CreateInputSecurityGroupResponse
 * @public
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   * @public
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * Contains configuration for a Multiplex event
 * @public
 */
export interface MultiplexSettings {
  /**
   * Maximum video buffer delay in milliseconds.
   * @public
   */
  MaximumVideoBufferDelayMilliseconds?: number;

  /**
   * Transport stream bit rate.
   * @public
   */
  TransportStreamBitrate: number | undefined;

  /**
   * Transport stream ID.
   * @public
   */
  TransportStreamId: number | undefined;

  /**
   * Transport stream reserved bit rate.
   * @public
   */
  TransportStreamReservedBitrate?: number;
}

/**
 * A request to create a multiplex.
 * @public
 */
export interface CreateMultiplexRequest {
  /**
   * A list of availability zones for the multiplex. You must specify exactly two.
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * Name of multiplex.
   * @public
   */
  Name: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   * @public
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * The multiplex object.
 * @public
 */
export interface Multiplex {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateMultiplexResponse
 * @public
 */
export interface CreateMultiplexResponse {
  /**
   * The newly created multiplex.
   * @public
   */
  Multiplex?: Multiplex;
}

/**
 * @public
 * @enum
 */
export const PreferredChannelPipeline = {
  CURRENTLY_ACTIVE: "CURRENTLY_ACTIVE",
  PIPELINE_0: "PIPELINE_0",
  PIPELINE_1: "PIPELINE_1",
} as const;

/**
 * @public
 */
export type PreferredChannelPipeline = (typeof PreferredChannelPipeline)[keyof typeof PreferredChannelPipeline];

/**
 * Transport stream service descriptor configuration for the Multiplex program.
 * @public
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * Name of the provider.
   * @public
   */
  ProviderName: string | undefined;

  /**
   * Name of the service.
   * @public
   */
  ServiceName: string | undefined;
}

/**
 * Statmux rate control settings
 * @public
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * Maximum statmux bitrate.
   * @public
   */
  MaximumBitrate?: number;

  /**
   * Minimum statmux bitrate.
   * @public
   */
  MinimumBitrate?: number;

  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others. Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   * @public
   */
  Priority?: number;
}

/**
 * The video configuration for each program in a multiplex.
 * @public
 */
export interface MultiplexVideoSettings {
  /**
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   * @public
   */
  ConstantBitrate?: number;

  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   * @public
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;
}

/**
 * Multiplex Program settings configuration.
 * @public
 */
export interface MultiplexProgramSettings {
  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   * @public
   */
  PreferredChannelPipeline?: PreferredChannelPipeline;

  /**
   * Unique program number.
   * @public
   */
  ProgramNumber: number | undefined;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   * @public
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * Program video settings configuration.
   * @public
   */
  VideoSettings?: MultiplexVideoSettings;
}

/**
 * A request to create a program in a multiplex.
 * @public
 */
export interface CreateMultiplexProgramRequest {
  /**
   * ID of the multiplex where the program is to be created.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * Name of multiplex program.
   * @public
   */
  ProgramName: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   * @public
   */
  RequestId?: string;
}

/**
 * Packet identifiers map for a given Multiplex program.
 * @public
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  AudioPids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  DvbSubPids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  DvbTeletextPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EtvPlatformPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EtvSignalPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  KlvDataPids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PcrPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PmtPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PrivateMetadataPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  Scte27Pids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  Scte35Pid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  TimedMetadataPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  VideoPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  AribCaptionsPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  DvbTeletextPids?: number[];

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EcmPid?: number;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  Smpte2038Pid?: number;
}

/**
 * The multiplex program object.
 * @public
 */
export interface MultiplexProgram {
  /**
   * The MediaLive channel associated with the program.
   * @public
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string;
}

/**
 * Placeholder documentation for CreateMultiplexProgramResponse
 * @public
 */
export interface CreateMultiplexProgramResponse {
  /**
   * The newly created multiplex program.
   * @public
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * A request to create a Network.
 * @public
 */
export interface CreateNetworkRequest {
  /**
   * An array of IpPoolCreateRequests that identify a collection of IP addresses in your network that you want to reserve for use in MediaLive Anywhere. MediaLiveAnywhere uses these IP addresses for Push inputs (in both Bridge and NATnetworks) and for output destinations (only in Bridge networks). EachIpPoolUpdateRequest specifies one CIDR block.
   * @public
   */
  IpPools?: IpPoolCreateRequest[];

  /**
   * Specify a name that is unique in the AWS account. We recommend that you assign a name that hints at the type of traffic on the network. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: RouteCreateRequest[];

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateNetworkResponse
 * @public
 */
export interface CreateNetworkResponse {
  /**
   * The ARN of this Network. It is automatically assigned when the Network is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[];

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[];

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[];

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState;
}

/**
 * A request to create a node
 * @public
 */
export interface CreateNodeRequest {
  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The user-specified name of the Node to be created.
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMappingCreateRequest[];

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string;

  /**
   * The initial role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateNodeResponse
 * @public
 */
export interface CreateNodeResponse {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState;
}

/**
 * A request to create a new node registration script.
 * @public
 */
export interface CreateNodeRegistrationScriptRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * If you're generating a re-registration script for an already existing node, this is where you provide the id.
   * @public
   */
  Id?: string;

  /**
   * Specify a pattern for MediaLive Anywhere to use to assign a name to each Node in the Cluster. The pattern can include the variables $hn (hostname of the node hardware) and $ts for the date and time that the Node is created, in UTC (for example, 2024-08-20T23:35:12Z).
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string;

  /**
   * The initial role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;
}

/**
 * Placeholder documentation for CreateNodeRegistrationScriptResponse
 * @public
 */
export interface CreateNodeRegistrationScriptResponse {
  /**
   * A script that can be run on a Bring Your Own Device Elemental Anywhere system to create a node in a cluster.
   * @public
   */
  NodeRegistrationScript?: string;
}

/**
 * A request to create a partner input
 * @public
 */
export interface CreatePartnerInputRequest {
  /**
   * Unique ID of the input.
   * @public
   */
  InputId: string | undefined;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   * @public
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreatePartnerInputResponse
 * @public
 */
export interface CreatePartnerInputResponse {
  /**
   * Placeholder documentation for Input
   * @public
   */
  Input?: Input;
}

/**
 * Placeholder documentation for CreateSignalMapRequest
 * @public
 */
export interface CreateSignalMapRequest {
  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  CloudWatchAlarmTemplateGroupIdentifiers?: string[];

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifiers?: string[];

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * An AWS resource used in media workflows.
 * @public
 */
export interface MediaResource {
  /**
   * Placeholder documentation for __listOfMediaResourceNeighbor
   * @public
   */
  Destinations?: MediaResourceNeighbor[];

  /**
   * The logical name of an AWS media resource.
   * @public
   */
  Name?: string;

  /**
   * Placeholder documentation for __listOfMediaResourceNeighbor
   * @public
   */
  Sources?: MediaResourceNeighbor[];
}

/**
 * Represents the latest successful monitor deployment of a signal map.
 * @public
 */
export interface SuccessfulMonitorDeployment {
  /**
   * URI associated with a signal map's monitor deployment.
   * @public
   */
  DetailsUri: string | undefined;

  /**
   * A signal map's monitor deployment status.
   * @public
   */
  Status: SignalMapMonitorDeploymentStatus | undefined;
}

/**
 * Represents the latest monitor deployment of a signal map.
 * @public
 */
export interface MonitorDeployment {
  /**
   * URI associated with a signal map's monitor deployment.
   * @public
   */
  DetailsUri?: string;

  /**
   * Error message associated with a failed monitor deployment of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * A signal map's monitor deployment status.
   * @public
   */
  Status: SignalMapMonitorDeploymentStatus | undefined;
}

/**
 * Placeholder documentation for CreateSignalMapResponse
 * @public
 */
export interface CreateSignalMapResponse {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[];

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[];

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource>;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource>;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for CreateTagsRequest
 * @public
 */
export interface CreateTagsRequest {
  /**
   * Placeholder documentation for __string
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Placeholder documentation for Tags
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for DeleteChannelRequest
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * Unique ID of the channel.
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for DeleteChannelResponse
 * @public
 */
export interface DeleteChannelResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings;
}

/**
 * Placeholder documentation for DeleteChannelPlacementGroupRequest
 * @public
 */
export interface DeleteChannelPlacementGroupRequest {
  /**
   * The ID of the channel placement group.
   * @public
   */
  ChannelPlacementGroupId: string | undefined;

  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * Placeholder documentation for DeleteChannelPlacementGroupResponse
 * @public
 */
export interface DeleteChannelPlacementGroupResponse {
  /**
   * The ARN of this ChannelPlacementGroup. It is automatically assigned when the ChannelPlacementGroup is created.
   * @public
   */
  Arn?: string;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[];

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState;
}

/**
 * Placeholder documentation for DeleteCloudWatchAlarmTemplateRequest
 * @public
 */
export interface DeleteCloudWatchAlarmTemplateRequest {
  /**
   * A cloudwatch alarm template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for DeleteCloudWatchAlarmTemplateGroupRequest
 * @public
 */
export interface DeleteCloudWatchAlarmTemplateGroupRequest {
  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for DeleteClusterRequest
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * Placeholder documentation for DeleteClusterResponse
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * The ARN of this Cluster. It is automatically assigned when the Cluster is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  ChannelIds?: string[];

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType;

  /**
   * The ID of the  Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState;
}

/**
 * Placeholder documentation for DeleteEventBridgeRuleTemplateRequest
 * @public
 */
export interface DeleteEventBridgeRuleTemplateRequest {
  /**
   * An eventbridge rule template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for DeleteEventBridgeRuleTemplateGroupRequest
 * @public
 */
export interface DeleteEventBridgeRuleTemplateGroupRequest {
  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for DeleteInputRequest
 * @public
 */
export interface DeleteInputRequest {
  /**
   * Unique ID of the input
   * @public
   */
  InputId: string | undefined;
}

/**
 * Placeholder documentation for DeleteInputResponse
 * @public
 */
export interface DeleteInputResponse {}

/**
 * Placeholder documentation for DeleteInputSecurityGroupRequest
 * @public
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * The Input Security Group to delete
   * @public
   */
  InputSecurityGroupId: string | undefined;
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupResponse
 * @public
 */
export interface DeleteInputSecurityGroupResponse {}

/**
 * Placeholder documentation for DeleteMultiplexRequest
 * @public
 */
export interface DeleteMultiplexRequest {
  /**
   * The ID of the multiplex.
   * @public
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for DeleteMultiplexResponse
 * @public
 */
export interface DeleteMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for DeleteMultiplexProgramRequest
 * @public
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The multiplex program name.
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * Placeholder documentation for DeleteMultiplexProgramResponse
 * @public
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   * @public
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string;
}

/**
 * Placeholder documentation for DeleteNetworkRequest
 * @public
 */
export interface DeleteNetworkRequest {
  /**
   * The ID of the network.
   * @public
   */
  NetworkId: string | undefined;
}

/**
 * Placeholder documentation for DeleteNetworkResponse
 * @public
 */
export interface DeleteNetworkResponse {
  /**
   * The ARN of this Network. It is automatically assigned when the Network is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[];

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[];

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[];

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState;
}

/**
 * Placeholder documentation for DeleteNodeRequest
 * @public
 */
export interface DeleteNodeRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the node.
   * @public
   */
  NodeId: string | undefined;
}

/**
 * Placeholder documentation for DeleteNodeResponse
 * @public
 */
export interface DeleteNodeResponse {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState;
}

/**
 * Placeholder documentation for DeleteReservationRequest
 * @public
 */
export interface DeleteReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId: string | undefined;
}

/**
 * Placeholder documentation for DeleteReservationResponse
 * @public
 */
export interface DeleteReservationResponse {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   * @public
   */
  Arn?: string;

  /**
   * Number of reserved resources
   * @public
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   * @public
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   * @public
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   * @public
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   * @public
   */
  State?: ReservationState;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number;
}

/**
 * Placeholder documentation for DeleteScheduleRequest
 * @public
 */
export interface DeleteScheduleRequest {
  /**
   * Id of the channel whose schedule is being deleted.
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for DeleteScheduleResponse
 * @public
 */
export interface DeleteScheduleResponse {}

/**
 * Placeholder documentation for DeleteSignalMapRequest
 * @public
 */
export interface DeleteSignalMapRequest {
  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for DeleteTagsRequest
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * Placeholder documentation for __string
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Placeholder documentation for DescribeAccountConfigurationRequest
 * @public
 */
export interface DescribeAccountConfigurationRequest {}

/**
 * Placeholder documentation for DescribeAccountConfigurationResponse
 * @public
 */
export interface DescribeAccountConfigurationResponse {
  /**
   * Placeholder documentation for AccountConfiguration
   * @public
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * Placeholder documentation for DescribeChannelRequest
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * channel ID
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for DescribeChannelResponse
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings;
}

/**
 * Placeholder documentation for DescribeChannelPlacementGroupRequest
 * @public
 */
export interface DescribeChannelPlacementGroupRequest {
  /**
   * The ID of the channel placement group.
   * @public
   */
  ChannelPlacementGroupId: string | undefined;

  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * Placeholder documentation for DescribeChannelPlacementGroupResponse
 * @public
 */
export interface DescribeChannelPlacementGroupResponse {
  /**
   * The ARN of this ChannelPlacementGroup. It is automatically assigned when the ChannelPlacementGroup is created.
   * @public
   */
  Arn?: string;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[];

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState;
}

/**
 * Placeholder documentation for DescribeClusterRequest
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * Placeholder documentation for DescribeClusterResponse
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * The ARN of this Cluster. It is automatically assigned when the Cluster is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  ChannelIds?: string[];

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType;

  /**
   * The ID of the  Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState;
}

/**
 * Placeholder documentation for DescribeInputRequest
 * @public
 */
export interface DescribeInputRequest {
  /**
   * Unique ID of the input
   * @public
   */
  InputId: string | undefined;
}

/**
 * Placeholder documentation for DescribeInputResponse
 * @public
 */
export interface DescribeInputResponse {
  /**
   * The Unique ARN of the input (generated, immutable).
   * @public
   */
  Arn?: string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   * @public
   */
  AttachedChannels?: string[];

  /**
   * A list of the destinations of the input (PUSH-type).
   * @public
   */
  Destinations?: InputDestination[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   * @public
   */
  Id?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   * @public
   */
  InputClass?: InputClass;

  /**
   * Settings for the input devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of IDs for all Inputs which are partners of this one.
   * @public
   */
  InputPartnerIds?: string[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   * @public
   */
  InputSourceType?: InputSourceType;

  /**
   * A list of MediaConnect Flows for this input.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * The user-assigned name (This is a mutable value).
   * @public
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   * @public
   */
  SecurityGroups?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   * @public
   */
  Sources?: InputSource[];

  /**
   * Placeholder documentation for InputState
   * @public
   */
  State?: InputState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettings;

  /**
   * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
   * an input in a customer network.
   * @public
   */
  InputNetworkLocation?: InputNetworkLocation;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettings;
}

/**
 * Placeholder documentation for DescribeInputDeviceRequest
 * @public
 */
export interface DescribeInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for DescribeInputDeviceResponse
 * @public
 */
export interface DescribeInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   * @public
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string;

  /**
   * The network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[];

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType;
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailRequest
 * @public
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;

  /**
   * The HTTP Accept header. Indicates the requested type for the thumbnail.
   * @public
   */
  Accept: AcceptHeader | undefined;
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailResponse
 * @public
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * The binary data for the thumbnail that the Link device has most recently sent to MediaLive.
   * @public
   */
  Body?: StreamingBlobTypes;

  /**
   * Specifies the media type of the thumbnail.
   * @public
   */
  ContentType?: ContentType;

  /**
   * The length of the content.
   * @public
   */
  ContentLength?: number;

  /**
   * The unique, cacheable version of this thumbnail.
   * @public
   */
  ETag?: string;

  /**
   * The date and time the thumbnail was last updated at the device.
   * @public
   */
  LastModified?: Date;
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupRequest
 * @public
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to describe
   * @public
   */
  InputSecurityGroupId: string | undefined;
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 * @public
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * Unique ARN of Input Security Group
   * @public
   */
  Arn?: string;

  /**
   * The Id of the Input Security Group
   * @public
   */
  Id?: string;

  /**
   * The list of inputs currently using this Input Security Group.
   * @public
   */
  Inputs?: string[];

  /**
   * The current state of the Input Security Group.
   * @public
   */
  State?: InputSecurityGroupState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Whitelist rules and their sync status
   * @public
   */
  WhitelistRules?: InputWhitelistRule[];
}

/**
 * Placeholder documentation for DescribeMultiplexRequest
 * @public
 */
export interface DescribeMultiplexRequest {
  /**
   * The ID of the multiplex.
   * @public
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for DescribeMultiplexResponse
 * @public
 */
export interface DescribeMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for DescribeMultiplexProgramRequest
 * @public
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The name of the program.
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * Placeholder documentation for DescribeMultiplexProgramResponse
 * @public
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   * @public
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[];

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string;
}

/**
 * Placeholder documentation for DescribeNetworkRequest
 * @public
 */
export interface DescribeNetworkRequest {
  /**
   * The ID of the network.
   * @public
   */
  NetworkId: string | undefined;
}

/**
 * Placeholder documentation for DescribeNetworkResponse
 * @public
 */
export interface DescribeNetworkResponse {
  /**
   * The ARN of this Network. It is automatically assigned when the Network is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[];

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[];

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[];

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState;
}

/**
 * Placeholder documentation for DescribeNodeRequest
 * @public
 */
export interface DescribeNodeRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the node.
   * @public
   */
  NodeId: string | undefined;
}

/**
 * Placeholder documentation for DescribeNodeResponse
 * @public
 */
export interface DescribeNodeResponse {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState;
}

/**
 * Placeholder documentation for DescribeOfferingRequest
 * @public
 */
export interface DescribeOfferingRequest {
  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId: string | undefined;
}

/**
 * Placeholder documentation for DescribeOfferingResponse
 * @public
 */
export interface DescribeOfferingResponse {
  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   * @public
   */
  Arn?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number;
}

/**
 * Placeholder documentation for DescribeReservationRequest
 * @public
 */
export interface DescribeReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId: string | undefined;
}

/**
 * Placeholder documentation for DescribeReservationResponse
 * @public
 */
export interface DescribeReservationResponse {
  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   * @public
   */
  Arn?: string;

  /**
   * Number of reserved resources
   * @public
   */
  Count?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   * @public
   */
  End?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number;

  /**
   * User specified reservation name
   * @public
   */
  Name?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId?: string;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   * @public
   */
  Start?: string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   * @public
   */
  State?: ReservationState;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number;
}

/**
 * Placeholder documentation for DescribeScheduleRequest
 * @public
 */
export interface DescribeScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for DescribeScheduleResponse
 * @public
 */
export interface DescribeScheduleResponse {
  /**
   * The next token; for use in pagination.
   * @public
   */
  NextToken?: string;

  /**
   * The list of actions in the schedule.
   * @public
   */
  ScheduleActions?: ScheduleAction[];
}

/**
 * Placeholder documentation for DescribeThumbnailsRequest
 * @public
 */
export interface DescribeThumbnailsRequest {
  /**
   * Unique ID of the channel
   * @public
   */
  ChannelId: string | undefined;

  /**
   * Pipeline ID ("0" or "1")
   * @public
   */
  PipelineId: string | undefined;

  /**
   * thumbnail type
   * @public
   */
  ThumbnailType: string | undefined;
}

/**
 * Placeholder documentation for DescribeThumbnailsResponse
 * @public
 */
export interface DescribeThumbnailsResponse {
  /**
   * Placeholder documentation for __listOfThumbnailDetail
   * @public
   */
  ThumbnailDetails?: ThumbnailDetail[];
}

/**
 * Placeholder documentation for GetCloudWatchAlarmTemplateRequest
 * @public
 */
export interface GetCloudWatchAlarmTemplateRequest {
  /**
   * A cloudwatch alarm template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for GetCloudWatchAlarmTemplateResponse
 * @public
 */
export interface GetCloudWatchAlarmTemplateResponse {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}

/**
 * Placeholder documentation for GetCloudWatchAlarmTemplateGroupRequest
 * @public
 */
export interface GetCloudWatchAlarmTemplateGroupRequest {
  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for GetCloudWatchAlarmTemplateGroupResponse
 * @public
 */
export interface GetCloudWatchAlarmTemplateGroupResponse {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for GetEventBridgeRuleTemplateRequest
 * @public
 */
export interface GetEventBridgeRuleTemplateRequest {
  /**
   * An eventbridge rule template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for GetEventBridgeRuleTemplateResponse
 * @public
 */
export interface GetEventBridgeRuleTemplateResponse {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for GetEventBridgeRuleTemplateGroupRequest
 * @public
 */
export interface GetEventBridgeRuleTemplateGroupRequest {
  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for GetEventBridgeRuleTemplateGroupResponse
 * @public
 */
export interface GetEventBridgeRuleTemplateGroupResponse {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for GetSignalMapRequest
 * @public
 */
export interface GetSignalMapRequest {
  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for GetSignalMapResponse
 * @public
 */
export interface GetSignalMapResponse {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[];

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[];

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource>;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource>;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Parameters required to attach a MediaConnect flow to the device.
 * @public
 */
export interface InputDeviceMediaConnectConfigurableSettings {
  /**
   * The ARN of the MediaConnect flow to attach this device to.
   * @public
   */
  FlowArn?: string;

  /**
   * The ARN for the role that MediaLive assumes to access the attached flow and secret. For more information about how to create this role, see the MediaLive user guide.
   * @public
   */
  RoleArn?: string;

  /**
   * The ARN for the secret that holds the encryption key to encrypt the content output by the device.
   * @public
   */
  SecretArn?: string;

  /**
   * The name of the MediaConnect Flow source to stream to.
   * @public
   */
  SourceName?: string;
}

/**
 * Configurable settings for the input device.
 * @public
 */
export interface InputDeviceConfigurableSettings {
  /**
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   * @public
   */
  ConfiguredInput?: InputDeviceConfiguredInput;

  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   * @public
   */
  MaxBitrate?: number;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms).
   * @public
   */
  LatencyMs?: number;

  /**
   * Choose the codec for the video that the device produces. Only UHD devices can specify this parameter.
   * @public
   */
  Codec?: InputDeviceCodec;

  /**
   * To attach this device to a MediaConnect flow, specify these parameters. To detach an existing flow, enter \{\} for the value of mediaconnectSettings. Only UHD devices can specify this parameter.
   * @public
   */
  MediaconnectSettings?: InputDeviceMediaConnectConfigurableSettings;

  /**
   * An array of eight audio configurations, one for each audio pair in the source. Set up each audio configuration either to exclude the pair, or to format it and include it in the output from the device. This parameter applies only to UHD devices, and only when the device is configured as the source for a MediaConnect flow. For an HD device, you configure the audio by setting up audio selectors in the channel configuration.
   * @public
   */
  AudioChannelPairs?: InputDeviceConfigurableAudioChannelPairConfig[];
}

/**
 * Placeholder documentation for ListChannelPlacementGroupsRequest
 * @public
 */
export interface ListChannelPlacementGroupsRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListChannelPlacementGroupsResponse
 * @public
 */
export interface ListChannelPlacementGroupsResponse {
  /**
   * An array of ChannelPlacementGroups that exist in the Cluster.
   * @public
   */
  ChannelPlacementGroups?: DescribeChannelPlacementGroupSummary[];

  /**
   * Token for the next result.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListChannelsRequest
 * @public
 */
export interface ListChannelsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListChannelsResponse
 * @public
 */
export interface ListChannelsResponse {
  /**
   * Placeholder documentation for __listOfChannelSummary
   * @public
   */
  Channels?: ChannelSummary[];

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListCloudWatchAlarmTemplateGroupsRequest
 * @public
 */
export interface ListCloudWatchAlarmTemplateGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;

  /**
   * Represents the scope of a resource, with options for all scopes, AWS provided resources, or local resources.
   * @public
   */
  Scope?: string;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string;
}

/**
 * Placeholder documentation for ListCloudWatchAlarmTemplateGroupsResponse
 * @public
 */
export interface ListCloudWatchAlarmTemplateGroupsResponse {
  /**
   * Placeholder documentation for __listOfCloudWatchAlarmTemplateGroupSummary
   * @public
   */
  CloudWatchAlarmTemplateGroups?: CloudWatchAlarmTemplateGroupSummary[];

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListCloudWatchAlarmTemplatesRequest
 * @public
 */
export interface ListCloudWatchAlarmTemplatesRequest {
  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;

  /**
   * Represents the scope of a resource, with options for all scopes, AWS provided resources, or local resources.
   * @public
   */
  Scope?: string;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string;
}

/**
 * Placeholder documentation for ListCloudWatchAlarmTemplatesResponse
 * @public
 */
export interface ListCloudWatchAlarmTemplatesResponse {
  /**
   * Placeholder documentation for __listOfCloudWatchAlarmTemplateSummary
   * @public
   */
  CloudWatchAlarmTemplates?: CloudWatchAlarmTemplateSummary[];

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListClustersRequest
 * @public
 */
export interface ListClustersRequest {
  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListClustersResponse
 * @public
 */
export interface ListClustersResponse {
  /**
   * A list of the Clusters that exist in your AWS account.
   * @public
   */
  Clusters?: DescribeClusterSummary[];

  /**
   * Token for the next result.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListEventBridgeRuleTemplateGroupsRequest
 * @public
 */
export interface ListEventBridgeRuleTemplateGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string;
}

/**
 * Placeholder documentation for ListEventBridgeRuleTemplateGroupsResponse
 * @public
 */
export interface ListEventBridgeRuleTemplateGroupsResponse {
  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateGroupSummary
   * @public
   */
  EventBridgeRuleTemplateGroups?: EventBridgeRuleTemplateGroupSummary[];

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListEventBridgeRuleTemplatesRequest
 * @public
 */
export interface ListEventBridgeRuleTemplatesRequest {
  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string;
}

/**
 * Placeholder documentation for ListEventBridgeRuleTemplatesResponse
 * @public
 */
export interface ListEventBridgeRuleTemplatesResponse {
  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateSummary
   * @public
   */
  EventBridgeRuleTemplates?: EventBridgeRuleTemplateSummary[];

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputDevicesRequest
 * @public
 */
export interface ListInputDevicesRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputDevicesResponse
 * @public
 */
export interface ListInputDevicesResponse {
  /**
   * The list of input devices.
   * @public
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * A token to get additional list results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputDeviceTransfersRequest
 * @public
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __string
   * @public
   */
  TransferType: string | undefined;
}

/**
 * Placeholder documentation for ListInputDeviceTransfersResponse
 * @public
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * The list of devices that you are transferring or are being transferred to you.
   * @public
   */
  InputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * A token to get additional list results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputsRequest
 * @public
 */
export interface ListInputsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputsResponse
 * @public
 */
export interface ListInputsResponse {
  /**
   * Placeholder documentation for __listOfInput
   * @public
   */
  Inputs?: Input[];

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputSecurityGroupsRequest
 * @public
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 * @public
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * List of input security groups
   * @public
   */
  InputSecurityGroups?: InputSecurityGroup[];

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexesRequest
 * @public
 */
export interface ListMultiplexesRequest {
  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexesResponse
 * @public
 */
export interface ListMultiplexesResponse {
  /**
   * List of multiplexes.
   * @public
   */
  Multiplexes?: MultiplexSummary[];

  /**
   * Token for the next ListMultiplexes request.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexProgramsRequest
 * @public
 */
export interface ListMultiplexProgramsRequest {
  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The ID of the multiplex that the programs belong to.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexProgramsResponse
 * @public
 */
export interface ListMultiplexProgramsResponse {
  /**
   * List of multiplex programs.
   * @public
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * Token for the next ListMultiplexProgram request.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListNetworksRequest
 * @public
 */
export interface ListNetworksRequest {
  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListNetworksResponse
 * @public
 */
export interface ListNetworksResponse {
  /**
   * An array of networks that you have created.
   * @public
   */
  Networks?: DescribeNetworkSummary[];

  /**
   * Token for the next ListNetworks request.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListNodesRequest
 * @public
 */
export interface ListNodesRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListNodesResponse
 * @public
 */
export interface ListNodesResponse {
  /**
   * Token for the next result.
   * @public
   */
  NextToken?: string;

  /**
   * An array of Nodes that exist in the Cluster.
   * @public
   */
  Nodes?: DescribeNodeSummary[];
}

/**
 * Placeholder documentation for ListOfferingsRequest
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   * @public
   */
  ChannelClass?: string;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   * @public
   */
  ChannelConfiguration?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', 'LINK', or 'AV1'
   * @public
   */
  Codec?: string;

  /**
   * Filter by offering duration, e.g. '12'
   * @public
   */
  Duration?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   * @public
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   * @public
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   * @public
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   * @public
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   * @public
   */
  VideoQuality?: string;
}

/**
 * Placeholder documentation for ListOfferingsResponse
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * Token to retrieve the next page of results
   * @public
   */
  NextToken?: string;

  /**
   * List of offerings
   * @public
   */
  Offerings?: Offering[];
}

/**
 * Placeholder documentation for ListReservationsRequest
 * @public
 */
export interface ListReservationsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   * @public
   */
  ChannelClass?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', 'LINK', or 'AV1'
   * @public
   */
  Codec?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   * @public
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   * @public
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   * @public
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   * @public
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   * @public
   */
  VideoQuality?: string;
}

/**
 * Placeholder documentation for ListReservationsResponse
 * @public
 */
export interface ListReservationsResponse {
  /**
   * Token to retrieve the next page of results
   * @public
   */
  NextToken?: string;

  /**
   * List of reservations
   * @public
   */
  Reservations?: Reservation[];
}

/**
 * Placeholder documentation for ListSignalMapsRequest
 * @public
 */
export interface ListSignalMapsRequest {
  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  CloudWatchAlarmTemplateGroupIdentifier?: string;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifier?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListSignalMapsResponse
 * @public
 */
export interface ListSignalMapsResponse {
  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __listOfSignalMapSummary
   * @public
   */
  SignalMaps?: SignalMapSummary[];
}

/**
 * Placeholder documentation for ListTagsForResourceRequest
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Placeholder documentation for __string
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Placeholder documentation for ListTagsForResourceResponse
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Placeholder documentation for Tags
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for MaintenanceUpdateSettings
 * @public
 */
export interface MaintenanceUpdateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   * @public
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.
   * @public
   */
  MaintenanceScheduledDate?: string;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   * @public
   */
  MaintenanceStartTime?: string;
}

/**
 * Placeholder documentation for PurchaseOfferingRequest
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * Number of resources
   * @public
   */
  Count: number | undefined;

  /**
   * Name for the new reservation
   * @public
   */
  Name?: string;

  /**
   * Offering to purchase, e.g. '87654321'
   * @public
   */
  OfferingId: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   * @public
   */
  RequestId?: string;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   * @public
   */
  Start?: string;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for PurchaseOfferingResponse
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * Reserved resources available to use
   * @public
   */
  Reservation?: Reservation;
}

/**
 * @public
 * @enum
 */
export const RebootInputDeviceForce = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type RebootInputDeviceForce = (typeof RebootInputDeviceForce)[keyof typeof RebootInputDeviceForce];

/**
 * A request to reboot an AWS Elemental device.
 * @public
 */
export interface RebootInputDeviceRequest {
  /**
   * Force a reboot of an input device. If the device is streaming, it will stop streaming and begin rebooting within a few seconds of sending the command. If the device was streaming prior to the reboot, the device will resume streaming when the reboot completes.
   * @public
   */
  Force?: RebootInputDeviceForce;

  /**
   * The unique ID of the input device to reboot. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for RebootInputDeviceResponse
 * @public
 */
export interface RebootInputDeviceResponse {}

/**
 * Placeholder documentation for RejectInputDeviceTransferRequest
 * @public
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to reject. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for RejectInputDeviceTransferResponse
 * @public
 */
export interface RejectInputDeviceTransferResponse {}

/**
 * Pipelines to restart.
 * @public
 */
export interface RestartChannelPipelinesRequest {
  /**
   * ID of channel
   * @public
   */
  ChannelId: string | undefined;

  /**
   * An array of pipelines to restart in this channel. Format PIPELINE_0 or PIPELINE_1.
   * @public
   */
  PipelineIds?: ChannelPipelineIdToRestart[];
}

/**
 * Placeholder documentation for RestartChannelPipelinesResponse
 * @public
 */
export interface RestartChannelPipelinesResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The time in milliseconds by when the PVRE restart must occur.
   * @public
   */
  MaintenanceStatus?: string;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings;
}

/**
 * Placeholder documentation for StartChannelRequest
 * @public
 */
export interface StartChannelRequest {
  /**
   * A request to start a channel
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for StartChannelResponse
 * @public
 */
export interface StartChannelResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings;
}

/**
 * Placeholder documentation for StartDeleteMonitorDeploymentRequest
 * @public
 */
export interface StartDeleteMonitorDeploymentRequest {
  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for StartDeleteMonitorDeploymentResponse
 * @public
 */
export interface StartDeleteMonitorDeploymentResponse {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[];

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[];

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource>;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource>;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for StartInputDeviceRequest
 * @public
 */
export interface StartInputDeviceRequest {
  /**
   * The unique ID of the input device to start. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for StartInputDeviceResponse
 * @public
 */
export interface StartInputDeviceResponse {}

/**
 * Placeholder documentation for StartInputDeviceMaintenanceWindowRequest
 * @public
 */
export interface StartInputDeviceMaintenanceWindowRequest {
  /**
   * The unique ID of the input device to start a maintenance window for. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for StartInputDeviceMaintenanceWindowResponse
 * @public
 */
export interface StartInputDeviceMaintenanceWindowResponse {}

/**
 * Placeholder documentation for StartMonitorDeploymentRequest
 * @public
 */
export interface StartMonitorDeploymentRequest {
  /**
   * Placeholder documentation for __boolean
   * @public
   */
  DryRun?: boolean;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for StartMonitorDeploymentResponse
 * @public
 */
export interface StartMonitorDeploymentResponse {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[];

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[];

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource>;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource>;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for StartMultiplexRequest
 * @public
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   * @public
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for StartMultiplexResponse
 * @public
 */
export interface StartMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for StartUpdateSignalMapRequest
 * @public
 */
export interface StartUpdateSignalMapRequest {
  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  CloudWatchAlarmTemplateGroupIdentifiers?: string[];

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifiers?: string[];

  /**
   * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
   * @public
   */
  ForceRediscovery?: boolean;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;
}

/**
 * Placeholder documentation for StartUpdateSignalMapResponse
 * @public
 */
export interface StartUpdateSignalMapResponse {
  /**
   * A signal map's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[];

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[];

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource>;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource>;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for StopChannelRequest
 * @public
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for StopChannelResponse
 * @public
 */
export interface StopChannelResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings;
}

/**
 * Placeholder documentation for StopInputDeviceRequest
 * @public
 */
export interface StopInputDeviceRequest {
  /**
   * The unique ID of the input device to stop. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for StopInputDeviceResponse
 * @public
 */
export interface StopInputDeviceResponse {}

/**
 * Placeholder documentation for StopMultiplexRequest
 * @public
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   * @public
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for StopMultiplexResponse
 * @public
 */
export interface StopMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * A request to transfer an input device.
 * @public
 */
export interface TransferInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;

  /**
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   * @public
   */
  TargetCustomerId?: string;

  /**
   * The target AWS region to transfer the device.
   * @public
   */
  TargetRegion?: string;

  /**
   * An optional message for the recipient. Maximum 280 characters.
   * @public
   */
  TransferMessage?: string;
}

/**
 * Placeholder documentation for TransferInputDeviceResponse
 * @public
 */
export interface TransferInputDeviceResponse {}

/**
 * List of account configuration parameters to update.
 * @public
 */
export interface UpdateAccountConfigurationRequest {
  /**
   * Placeholder documentation for AccountConfiguration
   * @public
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * Placeholder documentation for UpdateAccountConfigurationResponse
 * @public
 */
export interface UpdateAccountConfigurationResponse {
  /**
   * Placeholder documentation for AccountConfiguration
   * @public
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * A request to update a channel.
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * channel ID
   * @public
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The encoder settings for this channel.
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Placeholder documentation for __listOfInputAttachment
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceUpdateSettings;

  /**
   * The name of the channel.
   * @public
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   * @public
   */
  RoleArn?: string;
}

/**
 * Placeholder documentation for UpdateChannelResponse
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   * @public
   */
  Channel?: Channel;
}

/**
 * Channel class that the channel should be updated to.
 * @public
 */
export interface UpdateChannelClassRequest {
  /**
   * The channel class that you wish to update this channel to use.
   * @public
   */
  ChannelClass: ChannelClass | undefined;

  /**
   * Channel Id of the channel whose class should be updated.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   * @public
   */
  Destinations?: OutputDestination[];
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 * @public
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   * @public
   */
  Channel?: Channel;
}

/**
 * A request to update the channel placement group
 * @public
 */
export interface UpdateChannelPlacementGroupRequest {
  /**
   * The ID of the channel placement group.
   * @public
   */
  ChannelPlacementGroupId: string | undefined;

  /**
   * The ID of the cluster.
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Include this parameter only if you want to change the current name of the ChannelPlacementGroup. Specify a name that is unique in the Cluster. You can't change the name. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * Include this parameter only if you want to change the list of Nodes that are associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[];
}

/**
 * Placeholder documentation for UpdateChannelPlacementGroupResponse
 * @public
 */
export interface UpdateChannelPlacementGroupResponse {
  /**
   * The ARN of this ChannelPlacementGroup. It is automatically assigned when the ChannelPlacementGroup is created.
   * @public
   */
  Arn?: string;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[];

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState;
}

/**
 * Placeholder documentation for UpdateCloudWatchAlarmTemplateRequest
 * @public
 */
export interface UpdateCloudWatchAlarmTemplateRequest {
  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier?: string;

  /**
   * A cloudwatch alarm template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}

/**
 * Placeholder documentation for UpdateCloudWatchAlarmTemplateResponse
 * @public
 */
export interface UpdateCloudWatchAlarmTemplateResponse {
  /**
   * A cloudwatch alarm template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}

/**
 * Placeholder documentation for UpdateCloudWatchAlarmTemplateGroupRequest
 * @public
 */
export interface UpdateCloudWatchAlarmTemplateGroupRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for UpdateCloudWatchAlarmTemplateGroupResponse
 * @public
 */
export interface UpdateCloudWatchAlarmTemplateGroupResponse {
  /**
   * A cloudwatch alarm template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * A request to update the cluster.
 * @public
 */
export interface UpdateClusterRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Include this parameter only if you want to change the current name of the Cluster. Specify a name that is unique in the AWS account. You can't change the name. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * Include this property only if you want to change the current connections between the Nodes in the Cluster and the Networks the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettingsUpdateRequest;
}

/**
 * Placeholder documentation for UpdateClusterResponse
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * The ARN of the Cluster.
   * @public
   */
  Arn?: string;

  /**
   * An array of the IDs of the Channels that are associated with this Cluster. One Channel is associated with the Cluster as follows: A Channel belongs to a ChannelPlacementGroup. A ChannelPlacementGroup is attached to a Node. A Node belongs to a Cluster.
   * @public
   */
  ChannelIds?: string[];

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType;

  /**
   * The unique ID of the Cluster.
   * @public
   */
  Id?: string;

  /**
   * The user-specified name of the Cluster.
   * @public
   */
  Name?: string;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState;
}

/**
 * Placeholder documentation for UpdateEventBridgeRuleTemplateRequest
 * @public
 */
export interface UpdateEventBridgeRuleTemplateRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier?: string;

  /**
   * An eventbridge rule template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;
}

/**
 * Placeholder documentation for UpdateEventBridgeRuleTemplateResponse
 * @public
 */
export interface UpdateEventBridgeRuleTemplateResponse {
  /**
   * An eventbridge rule template's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[];

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for UpdateEventBridgeRuleTemplateGroupRequest
 * @public
 */
export interface UpdateEventBridgeRuleTemplateGroupRequest {
  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Placeholder documentation for UpdateEventBridgeRuleTemplateGroupResponse
 * @public
 */
export interface UpdateEventBridgeRuleTemplateGroupResponse {
  /**
   * An eventbridge rule template group's ARN (Amazon Resource Name)
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Settings for a Multicast input. Contains a list of multicast Urls and optional source ip addresses.
 * @public
 */
export interface MulticastSettingsUpdateRequest {
  /**
   * Placeholder documentation for __listOfMulticastSourceUpdateRequest
   * @public
   */
  Sources?: MulticastSourceUpdateRequest[];
}

/**
 * A request to update an input.
 * @public
 */
export interface UpdateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   * @public
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   * @public
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * Unique ID of the input.
   * @public
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   * @public
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   * @public
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   * @public
   */
  Sources?: InputSourceRequest[];

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettingsRequest;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettingsUpdateRequest;
}

/**
 * Placeholder documentation for UpdateInputResponse
 * @public
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   * @public
   */
  Input?: Input;
}

/**
 * A request to update an input device.
 * @public
 */
export interface UpdateInputDeviceRequest {
  /**
   * The settings that you want to apply to the HD input device.
   * @public
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   * @public
   */
  Name?: string;

  /**
   * The settings that you want to apply to the UHD input device.
   * @public
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The Availability Zone you want associated with this input device.
   * @public
   */
  AvailabilityZone?: string;
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 * @public
 */
export interface UpdateInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   * @public
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string;

  /**
   * The network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[];

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType;
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 * @public
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to update.
   * @public
   */
  InputSecurityGroupId: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   * @public
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 * @public
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   * @public
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * A request to update a multiplex.
 * @public
 */
export interface UpdateMultiplexRequest {
  /**
   * ID of the multiplex to update.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * Name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * Placeholder documentation for MultiplexPacketIdentifiersMapping
   * @public
   */
  PacketIdentifiersMapping?: Record<string, MultiplexProgramPacketIdentifiersMap>;
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 * @public
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   * @public
   */
  Multiplex?: Multiplex;
}

/**
 * A request to update a program in a multiplex.
 * @public
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The ID of the multiplex of the program to update.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The name of the program to update.
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 * @public
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   * @public
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * A request to update the network.
 * @public
 */
export interface UpdateNetworkRequest {
  /**
   * Include this parameter only if you want to change the pool of IP addresses in the network. An array of IpPoolCreateRequests that identify a collection of IP addresses in this network that you want to reserve for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPoolUpdateRequest specifies one CIDR block.
   * @public
   */
  IpPools?: IpPoolUpdateRequest[];

  /**
   * Include this parameter only if you want to change the name of the Network. Specify a name that is unique in the AWS account. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * The ID of the network
   * @public
   */
  NetworkId: string | undefined;

  /**
   * Include this parameter only if you want to change or add routes in the Network. An array of Routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: RouteUpdateRequest[];
}

/**
 * Placeholder documentation for UpdateNetworkResponse
 * @public
 */
export interface UpdateNetworkResponse {
  /**
   * The ARN of this Network. It is automatically assigned when the Network is created.
   * @public
   */
  Arn?: string;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[];

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[];

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string;

  /**
   * An array of Routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[];

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState;
}

/**
 * A request to update the node.
 * @public
 */
export interface UpdateNodeRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Include this parameter only if you want to change the current name of the Node. Specify a name that is unique in the Cluster. You can't change the name. Names are case-sensitive.
   * @public
   */
  Name?: string;

  /**
   * The ID of the node.
   * @public
   */
  NodeId: string | undefined;

  /**
   * The initial role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;
}

/**
 * Placeholder documentation for UpdateNodeResponse
 * @public
 */
export interface UpdateNodeResponse {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState;
}

/**
 * @public
 * @enum
 */
export const UpdateNodeStateShape = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
} as const;

/**
 * @public
 */
export type UpdateNodeStateShape = (typeof UpdateNodeStateShape)[keyof typeof UpdateNodeStateShape];

/**
 * A request to update the state of a node.
 * @public
 */
export interface UpdateNodeStateRequest {
  /**
   * The ID of the cluster
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the node.
   * @public
   */
  NodeId: string | undefined;

  /**
   * The state to apply to the Node. Set to ACTIVE (COMMISSIONED) to indicate that the Node is deployable. MediaLive Anywhere will consider this node it needs a Node to run a Channel on, or when it needs a Node to promote from a backup node to an active node. Set to DRAINING to isolate the Node so that MediaLive Anywhere won't use it.
   * @public
   */
  State?: UpdateNodeStateShape;
}

/**
 * Placeholder documentation for UpdateNodeStateResponse
 * @public
 */
export interface UpdateNodeStateResponse {
  /**
   * The ARN of the Node. It is automatically assigned when the Node is created.
   * @public
   */
  Arn?: string;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[];

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[];

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState;
}

/**
 * Request to update a reservation
 * @public
 */
export interface UpdateReservationRequest {
  /**
   * Name of the reservation
   * @public
   */
  Name?: string;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId: string | undefined;
}

/**
 * Placeholder documentation for UpdateReservationResponse
 * @public
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   * @public
   */
  Reservation?: Reservation;
}

/**
 * @internal
 */
export const DescribeInputDeviceThumbnailResponseFilterSensitiveLog = (
  obj: DescribeInputDeviceThumbnailResponse
): any => ({
  ...obj,
});
