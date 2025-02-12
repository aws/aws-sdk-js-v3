// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
  AudioDescription,
  CaptionDescription,
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelEngineVersionResponse,
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
  InputLossBehavior,
  OutputGroup,
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
 * @public
 * @enum
 */
export const GlobalConfigurationOutputLockingMode = {
  EPOCH_LOCKING: "EPOCH_LOCKING",
  PIPELINE_LOCKING: "PIPELINE_LOCKING",
} as const;

/**
 * @public
 */
export type GlobalConfigurationOutputLockingMode =
  (typeof GlobalConfigurationOutputLockingMode)[keyof typeof GlobalConfigurationOutputLockingMode];

/**
 * Epoch Locking Settings
 * @public
 */
export interface EpochLockingSettings {
  /**
   * Optional. Enter a value here to use a custom epoch, instead of the standard epoch (which started at 1970-01-01T00:00:00 UTC). Specify the start time of the custom epoch, in YYYY-MM-DDTHH:MM:SS in UTC. The time must be 2000-01-01T00:00:00 or later. Always set the MM:SS portion to 00:00.
   * @public
   */
  CustomEpoch?: string | undefined;

  /**
   * Optional. Enter a time for the jam sync. The default is midnight UTC. When epoch locking is enabled, MediaLive performs a daily jam sync on every output encode to ensure timecodes don’t diverge from the wall clock. The jam sync applies only to encodes with frame rate of 29.97 or 59.94 FPS. To override, enter a time in HH:MM:SS in UTC. Always set the MM:SS portion to 00:00.
   * @public
   */
  JamSyncTime?: string | undefined;
}

/**
 * Pipeline Locking Settings
 * @public
 */
export interface PipelineLockingSettings {}

/**
 * Output Locking Settings
 * @public
 */
export interface OutputLockingSettings {
  /**
   * Epoch Locking Settings
   * @public
   */
  EpochLockingSettings?: EpochLockingSettings | undefined;

  /**
   * Pipeline Locking Settings
   * @public
   */
  PipelineLockingSettings?: PipelineLockingSettings | undefined;
}

/**
 * @public
 * @enum
 */
export const GlobalConfigurationOutputTimingSource = {
  INPUT_CLOCK: "INPUT_CLOCK",
  SYSTEM_CLOCK: "SYSTEM_CLOCK",
} as const;

/**
 * @public
 */
export type GlobalConfigurationOutputTimingSource =
  (typeof GlobalConfigurationOutputTimingSource)[keyof typeof GlobalConfigurationOutputTimingSource];

/**
 * @public
 * @enum
 */
export const GlobalConfigurationLowFramerateInputs = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GlobalConfigurationLowFramerateInputs =
  (typeof GlobalConfigurationLowFramerateInputs)[keyof typeof GlobalConfigurationLowFramerateInputs];

/**
 * Global Configuration
 * @public
 */
export interface GlobalConfiguration {
  /**
   * Value to set the initial audio gain for the Live Event.
   * @public
   */
  InitialAudioGain?: number | undefined;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   * @public
   */
  InputEndAction?: GlobalConfigurationInputEndAction | undefined;

  /**
   * Settings for system actions when input is lost.
   * @public
   */
  InputLossBehavior?: InputLossBehavior | undefined;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   * @public
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode | undefined;

  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   * @public
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource | undefined;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   * @public
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs | undefined;

  /**
   * Advanced output locking settings
   * @public
   */
  OutputLockingSettings?: OutputLockingSettings | undefined;
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
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings | undefined;
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
  MotionGraphicsInsertion?: MotionGraphicsInsertion | undefined;

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
  DistributorId?: string | undefined;

  /**
   * Enables Nielsen PCM to ID3 tagging
   * @public
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState | undefined;
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
  SyncThreshold?: number | undefined;
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
  AvailBlanking?: AvailBlanking | undefined;

  /**
   * Event-wide configuration settings for ad avail insertion.
   * @public
   */
  AvailConfiguration?: AvailConfiguration | undefined;

  /**
   * Settings for blackout slate.
   * @public
   */
  BlackoutSlate?: BlackoutSlate | undefined;

  /**
   * Settings for caption decriptions
   * @public
   */
  CaptionDescriptions?: CaptionDescription[] | undefined;

  /**
   * Feature Activations
   * @public
   */
  FeatureActivations?: FeatureActivations | undefined;

  /**
   * Configuration settings that apply to the event as a whole.
   * @public
   */
  GlobalConfiguration?: GlobalConfiguration | undefined;

  /**
   * Settings for motion graphics.
   * @public
   */
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration | undefined;

  /**
   * Nielsen configuration settings.
   * @public
   */
  NielsenConfiguration?: NielsenConfiguration | undefined;

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
  ThumbnailConfiguration?: ThumbnailConfiguration | undefined;

  /**
   * Color Correction Settings
   * @public
   */
  ColorCorrectionSettings?: ColorCorrectionSettings | undefined;
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
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[] | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * Requested engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
}

/**
 * Placeholder documentation for ChannelEngineVersionRequest
 * @public
 */
export interface ChannelEngineVersionRequest {
  /**
   * The build identifier of the engine version to use for this channel. Specify 'DEFAULT' to reset to the default version.
   * @public
   */
  Version?: string | undefined;
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
  Id?: string | undefined;
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
  DefaultRoute?: string | undefined;

  /**
   * An array of interfaceMapping objects for this Cluster. You must create a mapping for node interfaces that you plan to use for encoding traffic. You typically don't create a mapping for the management interface. You define this mapping in the Cluster so that the mapping can be used by all the Nodes. Each mapping logically connects one interface on the nodes with one Network. Each mapping consists of a pair of parameters. The logicalInterfaceName parameter creates a logical name for the Node interface that handles a specific type of traffic. For example, my-Inputs-Interface. The networkID parameter refers to the ID of the network. When you create the Nodes in this Cluster, you will associate the logicalInterfaceName with the appropriate physical interface.
   * @public
   */
  InterfaceMappings?: InterfaceMappingCreateRequest[] | undefined;
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
  DefaultRoute?: string | undefined;

  /**
   * An array of interfaceMapping objects for this Cluster. Include this parameter only if you want to change the interface mappings for the Cluster. Typically, you change the interface mappings only to fix an error you made when creating the mapping. In an update request, make sure that you enter the entire set of mappings again, not just the mappings that you want to add or change. You define this mapping so that the mapping can be used by all the Nodes. Each mapping logically connects one interface on the nodes with one Network. Each mapping consists of a pair of parameters. The logicalInterfaceName parameter creates a logical name for the Node interface that handles a specific type of traffic. For example, my-Inputs-Interface. The networkID parameter refers to the ID of the network. When you create the Nodes in this Cluster, you will associate the logicalInterfaceName with the appropriate physical interface.
   * @public
   */
  InterfaceMappings?: InterfaceMappingUpdateRequest[] | undefined;
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
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   * @public
   */
  MaintenanceStartTime?: string | undefined;
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
  PublicAddressAllocationIds?: string[] | undefined;

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
   * If none are specified then the VPC default security group will be used
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

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
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * Placeholder documentation for __listOfOutputDestination
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level to write to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceCreateSettings | undefined;

  /**
   * Name of channel.
   * @public
   */
  Name?: string | undefined;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Deprecated field that's only usable by whitelisted customers.
   *
   * @deprecated
   * @public
   */
  Reserved?: string | undefined;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for the VPC outputs
   * @public
   */
  Vpc?: VpcOutputSettings | undefined;

  /**
   * The Elemental Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: AnywhereSettings | undefined;

  /**
   * The desired engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionRequest | undefined;

  /**
   * Placeholder documentation for __boolean
   * @public
   */
  DryRun?: boolean | undefined;
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
  Channel?: Channel | undefined;
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
  Name?: string | undefined;

  /**
   * An array of one ID for the Node that you want to associate with the ChannelPlacementGroup. (You can't associate more than one Node with the ChannelPlacementGroup.) The Node and the ChannelPlacementGroup must be in the same Cluster.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources. the request.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState | undefined;
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
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

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
  Tags?: Record<string, string> | undefined;

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

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string | undefined;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData | undefined;
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
  Description?: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  ClusterType?: ClusterType | undefined;

  /**
   * The ARN of the IAM role for the Node in this Cluster. The role must include all the operations that you expect these Node to perform. If necessary, create a role in IAM, then attach it here.
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * Specify a name that is unique in the AWS account. We recommend that you assign a name that hints at the types of Nodes in the Cluster. Names are case-sensitive.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettingsCreateRequest | undefined;

  /**
   * The unique ID of the request.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The ID of the  Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings | undefined;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState | undefined;
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
  Description?: string | undefined;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[] | undefined;

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
  Tags?: Record<string, string> | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[] | undefined;

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string | undefined;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Description?: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Sources?: MulticastSourceCreateRequest[] | undefined;
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
  SrtCallerSources?: SrtCallerSourceRequest[] | undefined;
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
  SecurityGroupIds?: string[] | undefined;

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
  Destinations?: InputDestinationRequest[] | undefined;

  /**
   * Settings for the devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[] | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   * @public
   */
  InputSecurityGroups?: string[] | undefined;

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlowRequest[] | undefined;

  /**
   * Name of the input.
   * @public
   */
  Name?: string | undefined;

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   * @public
   */
  Sources?: InputSourceRequest[] | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType | undefined;

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   * @public
   */
  Vpc?: InputVpcRequest | undefined;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettingsRequest | undefined;

  /**
   * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
   * an input in a customer network.
   * @public
   */
  InputNetworkLocation?: InputNetworkLocation | undefined;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettingsCreateRequest | undefined;
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
  Input?: Input | undefined;
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
  Tags?: Record<string, string> | undefined;

  /**
   * List of IPv4 CIDR addresses to whitelist
   * @public
   */
  WhitelistRules?: InputWhitelistRuleCidr[] | undefined;
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
  SecurityGroup?: InputSecurityGroup | undefined;
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
  MaximumVideoBufferDelayMilliseconds?: number | undefined;

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
  TransportStreamReservedBitrate?: number | undefined;
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
  RequestId?: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Multiplex?: Multiplex | undefined;
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
  MaximumBitrate?: number | undefined;

  /**
   * Minimum statmux bitrate.
   * @public
   */
  MinimumBitrate?: number | undefined;

  /**
   * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others. Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
   * @public
   */
  Priority?: number | undefined;
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
  ConstantBitrate?: number | undefined;

  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   * @public
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings | undefined;
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
  PreferredChannelPipeline?: PreferredChannelPipeline | undefined;

  /**
   * Unique program number.
   * @public
   */
  ProgramNumber: number | undefined;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   * @public
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor | undefined;

  /**
   * Program video settings configuration.
   * @public
   */
  VideoSettings?: MultiplexVideoSettings | undefined;
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
  RequestId?: string | undefined;
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
  AudioPids?: number[] | undefined;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  DvbSubPids?: number[] | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  DvbTeletextPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EtvPlatformPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EtvSignalPid?: number | undefined;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  KlvDataPids?: number[] | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PcrPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PmtPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  PrivateMetadataPid?: number | undefined;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  Scte27Pids?: number[] | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  Scte35Pid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  TimedMetadataPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  VideoPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  AribCaptionsPid?: number | undefined;

  /**
   * Placeholder documentation for __listOf__integer
   * @public
   */
  DvbTeletextPids?: number[] | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  EcmPid?: number | undefined;

  /**
   * Placeholder documentation for __integer
   * @public
   */
  Smpte2038Pid?: number | undefined;
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
  ChannelId?: string | undefined;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings | undefined;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap | undefined;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[] | undefined;

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string | undefined;
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
  MultiplexProgram?: MultiplexProgram | undefined;
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
  IpPools?: IpPoolCreateRequest[] | undefined;

  /**
   * Specify a name that is unique in the AWS account. We recommend that you assign a name that hints at the type of traffic on the network. Names are case-sensitive.
   * @public
   */
  Name?: string | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: RouteCreateRequest[] | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[] | undefined;

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[] | undefined;

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState | undefined;
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
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMappingCreateRequest[] | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The initial role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;
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
  Id?: string | undefined;

  /**
   * Specify a pattern for MediaLive Anywhere to use to assign a name to each Node in the Cluster. The pattern can include the variables $hn (hostname of the node hardware) and $ts for the date and time that the Node is created, in UTC (for example, 2024-08-20T23:35:12Z).
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The initial role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;
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
  NodeRegistrationScript?: string | undefined;
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
  RequestId?: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Input?: Input | undefined;
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
  CloudWatchAlarmTemplateGroupIdentifiers?: string[] | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifiers?: string[] | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;
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
  Destinations?: MediaResourceNeighbor[] | undefined;

  /**
   * The logical name of an AWS media resource.
   * @public
   */
  Name?: string | undefined;

  /**
   * Placeholder documentation for __listOfMediaResourceNeighbor
   * @public
   */
  Sources?: MediaResourceNeighbor[] | undefined;
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
  DetailsUri?: string | undefined;

  /**
   * Error message associated with a failed monitor deployment of a signal map.
   * @public
   */
  ErrorMessage?: string | undefined;

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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[] | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string | undefined;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[] | undefined;

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date | undefined;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment | undefined;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean | undefined;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[] | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * Requested engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
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
  Arn?: string | undefined;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The ID of the  Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings | undefined;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState | undefined;
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
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  ChannelId?: string | undefined;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings | undefined;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap | undefined;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[] | undefined;

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[] | undefined;

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[] | undefined;

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState | undefined;
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
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;
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
  Arn?: string | undefined;

  /**
   * Number of reserved resources
   * @public
   */
  Count?: number | undefined;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number | undefined;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits | undefined;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   * @public
   */
  End?: string | undefined;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * User specified reservation name
   * @public
   */
  Name?: string | undefined;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string | undefined;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType | undefined;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings | undefined;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification | undefined;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   * @public
   */
  Start?: string | undefined;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   * @public
   */
  State?: ReservationState | undefined;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number | undefined;
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
  AccountConfiguration?: AccountConfiguration | undefined;
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
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[] | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * Requested engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
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
  Arn?: string | undefined;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The ID of the  Cluster. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the IAM role for the Node in this Cluster. Any Nodes that are associated with this Cluster assume this role. The role gives permissions to the operations that you expect these Node to perform.
   * @public
   */
  InstanceRoleArn?: string | undefined;

  /**
   * The name that you specified for the Cluster.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings | undefined;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState | undefined;
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
  Arn?: string | undefined;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   * @public
   */
  AttachedChannels?: string[] | undefined;

  /**
   * A list of the destinations of the input (PUSH-type).
   * @public
   */
  Destinations?: InputDestination[] | undefined;

  /**
   * The generated ID of the input (unique for user account, immutable).
   * @public
   */
  Id?: string | undefined;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   * @public
   */
  InputClass?: InputClass | undefined;

  /**
   * Settings for the input devices.
   * @public
   */
  InputDevices?: InputDeviceSettings[] | undefined;

  /**
   * A list of IDs for all Inputs which are partners of this one.
   * @public
   */
  InputPartnerIds?: string[] | undefined;

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
   * @public
   */
  InputSourceType?: InputSourceType | undefined;

  /**
   * A list of MediaConnect Flows for this input.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlow[] | undefined;

  /**
   * The user-assigned name (This is a mutable value).
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * A list of the sources of the input (PULL-type).
   * @public
   */
  Sources?: InputSource[] | undefined;

  /**
   * Placeholder documentation for InputState
   * @public
   */
  State?: InputState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The different types of inputs that AWS Elemental MediaLive supports.
   * @public
   */
  Type?: InputType | undefined;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettings | undefined;

  /**
   * The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
   * an input in a customer network.
   * @public
   */
  InputNetworkLocation?: InputNetworkLocation | undefined;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettings | undefined;
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
  Arn?: string | undefined;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState | undefined;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | undefined;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | undefined;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings | undefined;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string | undefined;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string | undefined;

  /**
   * The network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings | undefined;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType | undefined;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[] | undefined;

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType | undefined;
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
  Body?: StreamingBlobTypes | undefined;

  /**
   * Specifies the media type of the thumbnail.
   * @public
   */
  ContentType?: ContentType | undefined;

  /**
   * The length of the content.
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * The unique, cacheable version of this thumbnail.
   * @public
   */
  ETag?: string | undefined;

  /**
   * The date and time the thumbnail was last updated at the device.
   * @public
   */
  LastModified?: Date | undefined;
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
  Arn?: string | undefined;

  /**
   * The Id of the Input Security Group
   * @public
   */
  Id?: string | undefined;

  /**
   * The list of inputs currently using this Input Security Group.
   * @public
   */
  Inputs?: string[] | undefined;

  /**
   * The current state of the Input Security Group.
   * @public
   */
  State?: InputSecurityGroupState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Whitelist rules and their sync status
   * @public
   */
  WhitelistRules?: InputWhitelistRule[] | undefined;
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
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  ChannelId?: string | undefined;

  /**
   * The settings for this multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings | undefined;

  /**
   * The packet identifier map for this multiplex program.
   * @public
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap | undefined;

  /**
   * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
   * @public
   */
  PipelineDetails?: MultiplexProgramPipelineDetail[] | undefined;

  /**
   * The name of the multiplex program.
   * @public
   */
  ProgramName?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[] | undefined;

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[] | undefined;

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState | undefined;
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
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;
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
  Arn?: string | undefined;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number | undefined;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits | undefined;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string | undefined;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType | undefined;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string | undefined;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification | undefined;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number | undefined;
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
  Arn?: string | undefined;

  /**
   * Number of reserved resources
   * @public
   */
  Count?: number | undefined;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Lease duration, e.g. '12'
   * @public
   */
  Duration?: number | undefined;

  /**
   * Units for duration, e.g. 'MONTHS'
   * @public
   */
  DurationUnits?: OfferingDurationUnits | undefined;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   * @public
   */
  End?: string | undefined;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * User specified reservation name
   * @public
   */
  Name?: string | undefined;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   * @public
   */
  OfferingDescription?: string | undefined;

  /**
   * Unique offering ID, e.g. '87654321'
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   * @public
   */
  OfferingType?: OfferingType | undefined;

  /**
   * AWS region, e.g. 'us-west-2'
   * @public
   */
  Region?: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings | undefined;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId?: string | undefined;

  /**
   * Resource configuration details
   * @public
   */
  ResourceSpecification?: ReservationResourceSpecification | undefined;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   * @public
   */
  Start?: string | undefined;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   * @public
   */
  State?: ReservationState | undefined;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   * @public
   */
  UsagePrice?: number | undefined;
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
  MaxResults?: number | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * The list of actions in the schedule.
   * @public
   */
  ScheduleActions?: ScheduleAction[] | undefined;
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
  ThumbnailDetails?: ThumbnailDetail[] | undefined;
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
  Arn?: string | undefined;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string | undefined;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[] | undefined;

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string | undefined;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[] | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string | undefined;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[] | undefined;

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date | undefined;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment | undefined;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean | undefined;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  FlowArn?: string | undefined;

  /**
   * The ARN for the role that MediaLive assumes to access the attached flow and secret. For more information about how to create this role, see the MediaLive user guide.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN for the secret that holds the encryption key to encrypt the content output by the device.
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The name of the MediaConnect Flow source to stream to.
   * @public
   */
  SourceName?: string | undefined;
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
  ConfiguredInput?: InputDeviceConfiguredInput | undefined;

  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms).
   * @public
   */
  LatencyMs?: number | undefined;

  /**
   * Choose the codec for the video that the device produces. Only UHD devices can specify this parameter.
   * @public
   */
  Codec?: InputDeviceCodec | undefined;

  /**
   * To attach this device to a MediaConnect flow, specify these parameters. To detach an existing flow, enter \{\} for the value of mediaconnectSettings. Only UHD devices can specify this parameter.
   * @public
   */
  MediaconnectSettings?: InputDeviceMediaConnectConfigurableSettings | undefined;

  /**
   * An array of eight audio configurations, one for each audio pair in the source. Set up each audio configuration either to exclude the pair, or to format it and include it in the output from the device. This parameter applies only to UHD devices, and only when the device is configured as the source for a MediaConnect flow. For an HD device, you configure the audio by setting up audio selectors in the channel configuration.
   * @public
   */
  AudioChannelPairs?: InputDeviceConfigurableAudioChannelPairConfig[] | undefined;
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
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
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
  ChannelPlacementGroups?: DescribeChannelPlacementGroupSummary[] | undefined;

  /**
   * Token for the next result.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  Channels?: ChannelSummary[] | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Represents the scope of a resource, with options for all scopes, AWS provided resources, or local resources.
   * @public
   */
  Scope?: string | undefined;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string | undefined;
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
  CloudWatchAlarmTemplateGroups?: CloudWatchAlarmTemplateGroupSummary[] | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;
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
  GroupIdentifier?: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Represents the scope of a resource, with options for all scopes, AWS provided resources, or local resources.
   * @public
   */
  Scope?: string | undefined;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string | undefined;
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
  CloudWatchAlarmTemplates?: CloudWatchAlarmTemplateSummary[] | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
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
  Clusters?: DescribeClusterSummary[] | undefined;

  /**
   * Token for the next result.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string | undefined;
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
  EventBridgeRuleTemplateGroups?: EventBridgeRuleTemplateGroupSummary[] | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;
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
  GroupIdentifier?: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  SignalMapIdentifier?: string | undefined;
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
  EventBridgeRuleTemplates?: EventBridgeRuleTemplateSummary[] | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  InputDevices?: InputDeviceSummary[] | undefined;

  /**
   * A token to get additional list results.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;

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
  InputDeviceTransfers?: TransferringInputDeviceSummary[] | undefined;

  /**
   * A token to get additional list results.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  Inputs?: Input[] | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  InputSecurityGroups?: InputSecurityGroup[] | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
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
  Multiplexes?: MultiplexSummary[] | undefined;

  /**
   * Token for the next ListMultiplexes request.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * The ID of the multiplex that the programs belong to.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
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
  MultiplexPrograms?: MultiplexProgramSummary[] | undefined;

  /**
   * Token for the next ListMultiplexProgram request.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
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
  Networks?: DescribeNetworkSummary[] | undefined;

  /**
   * Token for the next ListNetworks request.
   * @public
   */
  NextToken?: string | undefined;
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
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * An array of Nodes that exist in the Cluster.
   * @public
   */
  Nodes?: DescribeNodeSummary[] | undefined;
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
  ChannelClass?: string | undefined;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   * @public
   */
  ChannelConfiguration?: string | undefined;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', 'LINK', or 'AV1'
   * @public
   */
  Codec?: string | undefined;

  /**
   * Filter by offering duration, e.g. '12'
   * @public
   */
  Duration?: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   * @public
   */
  MaximumBitrate?: string | undefined;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   * @public
   */
  MaximumFramerate?: string | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   * @public
   */
  Resolution?: string | undefined;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   * @public
   */
  SpecialFeature?: string | undefined;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   * @public
   */
  VideoQuality?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * List of offerings
   * @public
   */
  Offerings?: Offering[] | undefined;
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
  ChannelClass?: string | undefined;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', 'LINK', or 'AV1'
   * @public
   */
  Codec?: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   * @public
   */
  MaximumBitrate?: string | undefined;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   * @public
   */
  MaximumFramerate?: string | undefined;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   * @public
   */
  Resolution?: string | undefined;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   * @public
   */
  SpecialFeature?: string | undefined;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   * @public
   */
  VideoQuality?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * List of reservations
   * @public
   */
  Reservations?: Reservation[] | undefined;
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
  CloudWatchAlarmTemplateGroupIdentifier?: string | undefined;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifier?: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token used to retrieve the next set of results in paginated list responses.
   * @public
   */
  NextToken?: string | undefined;
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
  NextToken?: string | undefined;

  /**
   * Placeholder documentation for __listOfSignalMapSummary
   * @public
   */
  SignalMaps?: SignalMapSummary[] | undefined;
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
  Tags?: Record<string, string> | undefined;
}

/**
 * Placeholder documentation for ListVersionsRequest
 * @public
 */
export interface ListVersionsRequest {}

/**
 * Placeholder documentation for ListVersionsResponse
 * @public
 */
export interface ListVersionsResponse {
  /**
   * List of engine versions that are available for this AWS account.
   * @public
   */
  Versions?: ChannelEngineVersionResponse[] | undefined;
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
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   * @public
   */
  MaintenanceStartTime?: string | undefined;
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
  Name?: string | undefined;

  /**
   * Offering to purchase, e.g. '87654321'
   * @public
   */
  OfferingId: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings | undefined;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   * @public
   */
  Start?: string | undefined;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Reservation?: Reservation | undefined;
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
  Force?: RebootInputDeviceForce | undefined;

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
  PipelineIds?: ChannelPipelineIdToRestart[] | undefined;
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
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The time in milliseconds by when the PVRE restart must occur.
   * @public
   */
  MaintenanceStatus?: string | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[] | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * Requested engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
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
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[] | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * Requested engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[] | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string | undefined;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[] | undefined;

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date | undefined;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment | undefined;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean | undefined;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  DryRun?: boolean | undefined;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * An ID that you assign to a create request. This ID ensures idempotency when creating resources.
   * @public
   */
  RequestId?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[] | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string | undefined;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[] | undefined;

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date | undefined;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment | undefined;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean | undefined;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  CloudWatchAlarmTemplateGroupIdentifiers?: string[] | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringPatternS
   * @public
   */
  EventBridgeRuleTemplateGroupIdentifiers?: string[] | undefined;

  /**
   * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
   * @public
   */
  ForceRediscovery?: boolean | undefined;

  /**
   * A signal map's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  CloudWatchAlarmTemplateGroupIds?: string[] | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A top-level supported AWS resource ARN to discovery a signal map from.
   * @public
   */
  DiscoveryEntryPointArn?: string | undefined;

  /**
   * Error message associated with a failed creation or failed update attempt of a signal map.
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Placeholder documentation for __listOf__stringMin7Max11PatternAws097
   * @public
   */
  EventBridgeRuleTemplateGroupIds?: string[] | undefined;

  /**
   * A map representing an incomplete AWS media workflow as a graph.
   * @public
   */
  FailedMediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * A signal map's id.
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  LastDiscoveredAt?: Date | undefined;

  /**
   * Represents the latest successful monitor deployment of a signal map.
   * @public
   */
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment | undefined;

  /**
   * A map representing an AWS media workflow as a graph.
   * @public
   */
  MediaResourceMap?: Record<string, MediaResource> | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * If true, there are pending monitor changes for this signal map that can be deployed.
   * @public
   */
  MonitorChangesPendingDeployment?: boolean | undefined;

  /**
   * Represents the latest monitor deployment of a signal map.
   * @public
   */
  MonitorDeployment?: MonitorDeployment | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   * @public
   */
  Status?: SignalMapStatus | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Arn?: string | undefined;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass | undefined;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[] | undefined;

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string | undefined;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus | undefined;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string | undefined;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[] | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription | undefined;

  /**
   * Anywhere settings for this channel.
   * @public
   */
  AnywhereSettings?: DescribeAnywhereSettings | undefined;

  /**
   * Requested engine version for this channel.
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionResponse | undefined;
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
  Arn?: string | undefined;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[] | undefined;

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string | undefined;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings | undefined;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number | undefined;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number | undefined;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  TargetCustomerId?: string | undefined;

  /**
   * The target AWS region to transfer the device.
   * @public
   */
  TargetRegion?: string | undefined;

  /**
   * An optional message for the recipient. Maximum 280 characters.
   * @public
   */
  TransferMessage?: string | undefined;
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
  AccountConfiguration?: AccountConfiguration | undefined;
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
  AccountConfiguration?: AccountConfiguration | undefined;
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
  CdiInputSpecification?: CdiInputSpecification | undefined;

  /**
   * channel ID
   * @public
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   * @public
   */
  Destinations?: OutputDestination[] | undefined;

  /**
   * The encoder settings for this channel.
   * @public
   */
  EncoderSettings?: EncoderSettings | undefined;

  /**
   * Placeholder documentation for __listOfInputAttachment
   * @public
   */
  InputAttachments?: InputAttachment[] | undefined;

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification | undefined;

  /**
   * The log level to write to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceUpdateSettings | undefined;

  /**
   * The name of the channel.
   * @public
   */
  Name?: string | undefined;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Channel engine version for this channel
   * @public
   */
  ChannelEngineVersion?: ChannelEngineVersionRequest | undefined;

  /**
   * Placeholder documentation for __boolean
   * @public
   */
  DryRun?: boolean | undefined;
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
  Channel?: Channel | undefined;
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
  Destinations?: OutputDestination[] | undefined;
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
  Channel?: Channel | undefined;
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
  Name?: string | undefined;

  /**
   * Include this parameter only if you want to change the list of Nodes that are associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;
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
  Arn?: string | undefined;

  /**
   * Used in ListChannelPlacementGroupsResult
   * @public
   */
  Channels?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The ID of the ChannelPlacementGroup. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The name that you specified for the ChannelPlacementGroup.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array with one item, which is the signle Node that is associated with the ChannelPlacementGroup.
   * @public
   */
  Nodes?: string[] | undefined;

  /**
   * The current state of the ChannelPlacementGroup.
   * @public
   */
  State?: ChannelPlacementGroupState | undefined;
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
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier?: string | undefined;

  /**
   * A cloudwatch alarm template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData | undefined;
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
  Arn?: string | undefined;

  /**
   * The comparison operator used to compare the specified statistic and the threshold.
   * @public
   */
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
   * @public
   */
  DatapointsToAlarm?: number | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * The number of periods over which data is compared to the specified threshold.
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string | undefined;

  /**
   * A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
   * @public
   */
  MetricName?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * The period, in seconds, over which the specified statistic is applied.
   * @public
   */
  Period?: number | undefined;

  /**
   * The statistic to apply to the alarm's metric data.
   * @public
   */
  Statistic?: CloudWatchAlarmTemplateStatistic | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The resource type this template should dynamically generate cloudwatch metric alarms for.
   * @public
   */
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType | undefined;

  /**
   * The threshold value to compare with the specified statistic.
   * @public
   */
  Threshold?: number | undefined;

  /**
   * Specifies how missing data points are treated when evaluating the alarm's condition.
   * @public
   */
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData | undefined;
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
  Description?: string | undefined;

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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Name?: string | undefined;

  /**
   * Include this property only if you want to change the current connections between the Nodes in the Cluster and the Networks the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettingsUpdateRequest | undefined;
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
  Arn?: string | undefined;

  /**
   * An array of the IDs of the Channels that are associated with this Cluster. One Channel is associated with the Cluster as follows: A Channel belongs to a ChannelPlacementGroup. A ChannelPlacementGroup is attached to a Node. A Node belongs to a Cluster.
   * @public
   */
  ChannelIds?: string[] | undefined;

  /**
   * The hardware type for the Cluster
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The unique ID of the Cluster.
   * @public
   */
  Id?: string | undefined;

  /**
   * The user-specified name of the Cluster.
   * @public
   */
  Name?: string | undefined;

  /**
   * Network settings that connect the Nodes in the Cluster to one or more of the Networks that the Cluster is associated with.
   * @public
   */
  NetworkSettings?: ClusterNetworkSettings | undefined;

  /**
   * The current state of the Cluster.
   * @public
   */
  State?: ClusterState | undefined;
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
  Description?: string | undefined;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[] | undefined;

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's identifier. Can be either be its id or current name.
   * @public
   */
  GroupIdentifier?: string | undefined;

  /**
   * An eventbridge rule template's identifier. Can be either be its id or current name.
   * @public
   */
  Identifier: string | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
   * @public
   */
  EventTargets?: EventBridgeRuleTemplateTarget[] | undefined;

  /**
   * The type of event to match with the rule.
   * @public
   */
  EventType?: EventBridgeRuleTemplateEventType | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  GroupId?: string | undefined;

  /**
   * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Description?: string | undefined;

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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A resource's optional description.
   * @public
   */
  Description?: string | undefined;

  /**
   * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
   * @public
   */
  Id?: string | undefined;

  /**
   * Placeholder documentation for __timestampIso8601
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * A resource's name. Names must be unique within the scope of a resource type in a specific region.
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents the tags associated with a resource.
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
  Sources?: MulticastSourceUpdateRequest[] | undefined;
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
  Destinations?: InputDestinationRequest[] | undefined;

  /**
   * Settings for the devices.
   * @public
   */
  InputDevices?: InputDeviceRequest[] | undefined;

  /**
   * Unique ID of the input.
   * @public
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   * @public
   */
  InputSecurityGroups?: string[] | undefined;

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlowRequest[] | undefined;

  /**
   * Name of the input.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   * @public
   */
  Sources?: InputSourceRequest[] | undefined;

  /**
   * The settings associated with an SRT input.
   * @public
   */
  SrtSettings?: SrtSettingsRequest | undefined;

  /**
   * Multicast Input settings.
   * @public
   */
  MulticastSettings?: MulticastSettingsUpdateRequest | undefined;
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
  Input?: Input | undefined;
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
  HdDeviceSettings?: InputDeviceConfigurableSettings | undefined;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   * @public
   */
  Name?: string | undefined;

  /**
   * The settings that you want to apply to the UHD input device.
   * @public
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings | undefined;

  /**
   * The Availability Zone you want associated with this input device.
   * @public
   */
  AvailabilityZone?: string | undefined;
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
  Arn?: string | undefined;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState | undefined;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | undefined;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | undefined;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings | undefined;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string | undefined;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string | undefined;

  /**
   * The network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings | undefined;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType | undefined;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[] | undefined;

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType | undefined;
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
   *
   * @deprecated
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * List of IPv4 CIDR addresses to whitelist
   * @public
   */
  WhitelistRules?: InputWhitelistRuleCidr[] | undefined;
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
  SecurityGroup?: InputSecurityGroup | undefined;
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
  MultiplexSettings?: MultiplexSettings | undefined;

  /**
   * Name of the multiplex.
   * @public
   */
  Name?: string | undefined;

  /**
   * Placeholder documentation for MultiplexPacketIdentifiersMapping
   * @public
   */
  PacketIdentifiersMapping?: Record<string, MultiplexProgramPacketIdentifiersMap> | undefined;
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
  Multiplex?: Multiplex | undefined;
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
  MultiplexProgramSettings?: MultiplexProgramSettings | undefined;

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
  MultiplexProgram?: MultiplexProgram | undefined;
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
  IpPools?: IpPoolUpdateRequest[] | undefined;

  /**
   * Include this parameter only if you want to change the name of the Network. Specify a name that is unique in the AWS account. Names are case-sensitive.
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the network
   * @public
   */
  NetworkId: string | undefined;

  /**
   * Include this parameter only if you want to change or add routes in the Network. An array of Routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: RouteUpdateRequest[] | undefined;
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
  Arn?: string | undefined;

  /**
   * Placeholder documentation for __listOf__string
   * @public
   */
  AssociatedClusterIds?: string[] | undefined;

  /**
   * The ID of the Network. Unique in the AWS account. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * An array of IpPools in your organization's network that identify a collection of IP addresses in this network that are reserved for use in MediaLive Anywhere. MediaLive Anywhere uses these IP addresses for Push inputs (in both Bridge and NAT networks) and for output destinations (only in Bridge networks). Each IpPool specifies one CIDR block.
   * @public
   */
  IpPools?: IpPool[] | undefined;

  /**
   * The name that you specified for the Network.
   * @public
   */
  Name?: string | undefined;

  /**
   * An array of Routes that MediaLive Anywhere needs to know about in order to route encoding traffic.
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The current state of the Network. Only MediaLive Anywhere can change the state.
   * @public
   */
  State?: NetworkState | undefined;
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
  Name?: string | undefined;

  /**
   * The ID of the node.
   * @public
   */
  NodeId: string | undefined;

  /**
   * The initial role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;
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
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;
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
  State?: UpdateNodeStateShape | undefined;
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
  Arn?: string | undefined;

  /**
   * An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node. Empty if the Node is not yet associated with any groups.
   * @public
   */
  ChannelPlacementGroups?: string[] | undefined;

  /**
   * The ID of the Cluster that the Node belongs to.
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The current connection state of the Node.
   * @public
   */
  ConnectionState?: NodeConnectionState | undefined;

  /**
   * The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN of the EC2 instance hosting the Node.
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The name that you specified for the Node.
   * @public
   */
  Name?: string | undefined;

  /**
   * Documentation update needed
   * @public
   */
  NodeInterfaceMappings?: NodeInterfaceMapping[] | undefined;

  /**
   * The initial role current role of the Node in the Cluster. ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.
   * @public
   */
  Role?: NodeRole | undefined;

  /**
   * The current state of the Node.
   * @public
   */
  State?: NodeState | undefined;
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
  Name?: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings | undefined;

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
  Reservation?: Reservation | undefined;
}

/**
 * @internal
 */
export const DescribeInputDeviceThumbnailResponseFilterSensitiveLog = (
  obj: DescribeInputDeviceThumbnailResponse
): any => ({
  ...obj,
});
