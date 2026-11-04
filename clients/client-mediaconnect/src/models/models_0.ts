// smithy-typescript generated code
import type {
  Algorithm,
  BridgePlacement,
  BridgeState,
  Colorimetry,
  ConnectionStatus,
  ContentQualityAnalysisState,
  Day,
  DesiredState,
  DestinationEndpointConnectionState,
  DestinationEndpointNetworkingType,
  DestinationEndpointProtocol,
  DestinationEndpointRegistrationState,
  DestinationEndpointType,
  DurationUnits,
  EncoderProfile,
  EncodingName,
  EncodingProfile,
  EndpointEncryptionSecretType,
  EndpointEncryptionType,
  EndpointLifecycle,
  EntitlementStatus,
  FabricLatencyMode,
  FailoverInputSourcePriorityMode,
  FailoverMode,
  FlowSize,
  FlowTransitEncryptionKeyType,
  ForwardErrorCorrectionState,
  GatewayState,
  InstanceState,
  KeyType,
  MaintenanceDay,
  MaintenanceScheduleType,
  MaintenanceType,
  MediaLiveChannelPipelineId,
  MediaLiveInputPipelineId,
  MediaLiveTransitEncryptionKeyType,
  MediaStreamType,
  NdiOutputTimecodeSource,
  NdiState,
  NetworkInterfaceType,
  OutputStatus,
  PriceUnits,
  Protocol,
  Range,
  ReservationState,
  ResourceShareOwnership,
  ResourceShareState,
  ResourceType,
  RouterContentQualityAnalysisType,
  RouterInputProtocol,
  RouterInputState,
  RouterInputTier,
  RouterInputTransitEncryptionKeyType,
  RouterInputType,
  RouterNetworkInterfaceState,
  RouterNetworkInterfaceType,
  RouterOutputProtocol,
  RouterOutputRoutedState,
  RouterOutputState,
  RouterOutputTier,
  RouterOutputType,
  RoutingScope,
  ScanMode,
  SourceEndpointConnectionState,
  SourceEndpointNetworkingType,
  SourceEndpointProtocol,
  SourceEndpointRegistrationState,
  SourceEndpointType,
  SourceType,
  State,
  Status,
  Tcs,
  ThumbnailState,
  TlsEncryptionType,
  VideoColorimetry,
  VideoMatrixCoefficients,
  VideoTransferCharacteristics,
} from "./enums";

/**
 * Add a network output to an existing bridge.
 *
 * @public
 */
export interface AddBridgeNetworkOutputRequest {
  /**
   * The network output IP Address.
   *
   * @public
   */
  IpAddress: string | undefined;

  /**
   * The network output name. This name is used to reference the output and must be unique among outputs in this bridge.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The network output's gateway network name.
   *
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network output port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The network output protocol.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The network output TTL.
   *
   * @public
   */
  Ttl: number | undefined;
}

/**
 * Add outputs to the specified bridge.
 *
 * @public
 */
export interface AddBridgeOutputRequest {
  /**
   * The network output of the bridge. A network output is delivered to your premises.
   *
   * @public
   */
  NetworkOutput?: AddBridgeNetworkOutputRequest | undefined;
}

/**
 * The settings for attaching a VPC interface to an resource.
 *
 * @public
 */
export interface VpcInterfaceAttachment {
  /**
   * The name of the VPC interface to use for this resource.
   *
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * Add a flow source to an existing bridge.
 *
 * @public
 */
export interface AddBridgeFlowSourceRequest {
  /**
   * The Amazon Resource Number (ARN) of the flow to use as a source of this bridge.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this source.
   *
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * The name of the flow source. This name is used to reference the source and must be unique among sources in this bridge.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The settings related to the multicast source.
 *
 * @public
 */
export interface MulticastSourceSettings {
  /**
   * The IP address of the source for source-specific multicast (SSM).
   *
   * @public
   */
  MulticastSourceIp?: string | undefined;
}

/**
 * Add a network source to an existing bridge.
 *
 * @public
 */
export interface AddBridgeNetworkSourceRequest {
  /**
   * The network source multicast IP.
   *
   * @public
   */
  MulticastIp: string | undefined;

  /**
   * The settings related to the multicast source.
   *
   * @public
   */
  MulticastSourceSettings?: MulticastSourceSettings | undefined;

  /**
   * The name of the network source. This name is used to reference the source and must be unique among sources in this bridge.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The network source's gateway network name.
   *
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network source port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The network source protocol.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol: Protocol | undefined;
}

/**
 * Add an output to a bridge.
 *
 * @public
 */
export interface AddBridgeSourceRequest {
  /**
   * The source of the flow.
   *
   * @public
   */
  FlowSource?: AddBridgeFlowSourceRequest | undefined;

  /**
   * The source of the network.
   *
   * @public
   */
  NetworkSource?: AddBridgeNetworkSourceRequest | undefined;
}

/**
 * The settings that you want to use to define the media stream.
 *
 * @public
 */
export interface FmtpRequest {
  /**
   * The format of the audio channel.
   *
   * @public
   */
  ChannelOrder?: string | undefined;

  /**
   * The format that is used for the representation of color.
   *
   * @public
   */
  Colorimetry?: Colorimetry | undefined;

  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the `exactFramerate`.
   *
   * @public
   */
  ExactFramerate?: string | undefined;

  /**
   * The pixel aspect ratio (PAR) of the video.
   *
   * @public
   */
  Par?: string | undefined;

  /**
   * The encoding range of the video.
   *
   * @public
   */
  Range?: Range | undefined;

  /**
   * The type of compression that was used to smooth the video’s appearance.
   *
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * The transfer characteristic system (TCS) that is used in the video.
   *
   * @public
   */
  Tcs?: Tcs | undefined;
}

/**
 * Attributes that are related to the media stream.
 *
 * @public
 */
export interface MediaStreamAttributesRequest {
  /**
   * The settings that you want to use to define the media stream.
   *
   * @public
   */
  Fmtp?: FmtpRequest | undefined;

  /**
   * The audio language, in a format that is recognized by the receiver.
   *
   * @public
   */
  Lang?: string | undefined;
}

/**
 * The media stream that you want to add to the flow.
 *
 * @public
 */
export interface AddMediaStreamRequest {
  /**
   * The attributes that you want to assign to the new media stream.
   *
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   *
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique identifier for the media stream.
   *
   * @public
   */
  MediaStreamId: number | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   *
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   *
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * The resolution of the video.
   *
   * @public
   */
  VideoFormat?: string | undefined;

  /**
   * The key-value pairs that can be used to tag and organize the media stream.
   *
   * @public
   */
  MediaStreamTags?: Record<string, string> | undefined;
}

/**
 * Encryption information.
 *
 * @public
 */
export interface Encryption {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   *
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   *
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   *
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * The Amazon Web Services Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ARN of the role that you created during setup (when you set up MediaConnect as a trusted entity).
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The ARN of the secret that you created in Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * The VPC interface that you want to designate where the media stream is coming from or going to.
 *
 * @public
 */
export interface InterfaceRequest {
  /**
   * The name of the VPC interface.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The definition of a media stream that you want to associate with the output.
 *
 * @public
 */
export interface DestinationConfigurationRequest {
  /**
   * The IP address where you want MediaConnect to send contents of the media stream.
   *
   * @public
   */
  DestinationIp: string | undefined;

  /**
   * The port that you want MediaConnect to use when it distributes the media stream to the output.
   *
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The VPC interface that you want to use for the media stream associated with the output.
   *
   * @public
   */
  Interface: InterfaceRequest | undefined;
}

/**
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 *
 * @public
 */
export interface EncodingParametersRequest {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   *
   * @public
   */
  CompressionFactor: number | undefined;

  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, if at least one source on the flow uses the CDI protocol.
   *
   * @public
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * The media stream that you want to associate with the output, and the parameters for that association.
 *
 * @public
 */
export interface MediaStreamOutputConfigurationRequest {
  /**
   * The media streams that you want to associate with the output.
   *
   * @public
   */
  DestinationConfigurations?: DestinationConfigurationRequest[] | undefined;

  /**
   * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   *
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   *
   * @public
   */
  EncodingParameters?: EncodingParametersRequest | undefined;

  /**
   * The name of the media stream that is associated with the output.
   *
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
 *
 * @public
 */
export interface AutomaticEncryptionKeyConfiguration {}

/**
 * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
 *
 * @public
 */
export interface SecretsManagerEncryptionKeyConfiguration {
  /**
   * The ARN of the Secrets Manager secret used for transit encryption.
   *
   * @public
   */
  SecretArn: string | undefined;

  /**
   * The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * Configuration settings for flow transit encryption keys.
 *
 * @public
 */
export type FlowTransitEncryptionKeyConfiguration =
  | FlowTransitEncryptionKeyConfiguration.AutomaticMember
  | FlowTransitEncryptionKeyConfiguration.SecretsManagerMember
  | FlowTransitEncryptionKeyConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FlowTransitEncryptionKeyConfiguration {
  /**
   * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
   *
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
   *
   * @public
   */
  export interface AutomaticMember {
    SecretsManager?: never;
    Automatic: AutomaticEncryptionKeyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretsManager?: never;
    Automatic?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecretsManager: (value: SecretsManagerEncryptionKeyConfiguration) => T;
    Automatic: (value: AutomaticEncryptionKeyConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
 *
 * @public
 */
export interface FlowTransitEncryption {
  /**
   * The type of encryption key to use for flow transit encryption.
   *
   * @public
   */
  EncryptionKeyType?: FlowTransitEncryptionKeyType | undefined;

  /**
   * The configuration details for the encryption key.
   *
   * @public
   */
  EncryptionKeyConfiguration: FlowTransitEncryptionKeyConfiguration | undefined;
}

/**
 * A request to add an output to a flow.
 *
 * @public
 */
export interface AddOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * A description of the output. This description appears only on the Audit Manager console and will not be seen by the end user.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address from which video will be sent to output destinations.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   *
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The media streams that are associated with the output, and the parameters for those associations.
   *
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   *
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The name of the output. This value must be unique within the current flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol to use for the output.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The remote ID for the Zixi-pull output stream.
   *
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   *
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this output.
   *
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * An indication of whether the new output should be enabled or disabled as soon as it is created. If you don't specify the outputStatus field in your request, MediaConnect sets it to ENABLED.
   *
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * A quality setting for the NDI Speed HQ encoder.
   *
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;

  /**
   * A suffix for the name of the NDI® sender that the flow creates. If a custom name isn't specified, MediaConnect uses the output name.
   *
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * The key-value pairs that can be used to tag and organize the output.
   *
   * @public
   */
  OutputTags?: Record<string, string> | undefined;

  /**
   * Indicates whether to enable or disable router integration when creating a new flow output.
   *
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
   *
   * @public
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption | undefined;

  /**
   * Controls how MediaConnect generates timecodes for NDI output frames. If you don't specify this field, MediaConnect uses `EMBEDDED_TIMECODE`.
   *
   * - `EMBEDDED_TIMECODE` (default) - Preserves timecodes from the input transport stream. The timecodes must be embedded in the video stream as SEI timing messages. If no embedded timecode is detected, MediaConnect uses the UTC system time instead.
   * - `UTC_SYSTEM_TIME` - Generates timecodes based on the system clock time when each frame is sent.
   *
   * @public
   */
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource | undefined;

  /**
   * The audio reference level of the NDI receiver, in decibels relative to full scale (dBFS). Common values are `-20` (NDI and SMPTE) and `-18` (EBU). If you don't specify this field, MediaConnect uses `-20`.
   *
   * @public
   */
  NdiAudioReferenceLevel?: number | undefined;
}

/**
 * Configures settings for the `SilentAudio` metric.
 *
 * @public
 */
export interface SilentAudio {
  /**
   * Indicates whether the `SilentAudio` metric is enabled or disabled.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * Specifies the number of consecutive seconds of silence that triggers an event or alert.
   *
   * @public
   */
  ThresholdSeconds?: number | undefined;
}

/**
 * Specifies the configuration for audio stream metrics monitoring.
 *
 * @public
 */
export interface AudioMonitoringSetting {
  /**
   * Detects periods of silence.
   *
   * @public
   */
  SilentAudio?: SilentAudio | undefined;
}

/**
 * The output of the bridge. A flow output is delivered to the Amazon Web Services cloud.
 *
 * @public
 */
export interface BridgeFlowOutput {
  /**
   * The Amazon Resource Number (ARN) of the cloud flow.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flow source.
   *
   * @public
   */
  FlowSourceArn: string | undefined;

  /**
   * The name of the bridge's output.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The output of the bridge. A network output is delivered to your premises.
 *
 * @public
 */
export interface BridgeNetworkOutput {
  /**
   * The network output IP address.
   *
   * @public
   */
  IpAddress: string | undefined;

  /**
   * The network output name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The network output's gateway network name.
   *
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network output's port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The network output protocol.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The network output TTL.
   *
   * @public
   */
  Ttl: number | undefined;
}

/**
 * The output of the bridge.
 *
 * @public
 */
export interface BridgeOutput {
  /**
   * The output of the associated flow.
   *
   * @public
   */
  FlowOutput?: BridgeFlowOutput | undefined;

  /**
   * The network output for the bridge.
   *
   * @public
   */
  NetworkOutput?: BridgeNetworkOutput | undefined;
}

/**
 * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
 *
 * @public
 */
export interface BridgeFlowSource {
  /**
   * The ARN of the cloud flow used as a source of this bridge.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this source.
   *
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * The name of the flow source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the output.
   *
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * The source of the bridge. A network source originates at your premises.
 *
 * @public
 */
export interface BridgeNetworkSource {
  /**
   * The network source multicast IP.
   *
   * @public
   */
  MulticastIp: string | undefined;

  /**
   * The settings related to the multicast source.
   *
   * @public
   */
  MulticastSourceSettings?: MulticastSourceSettings | undefined;

  /**
   * The name of the network source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The network source's gateway network name.
   *
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network source port.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The network source protocol.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol: Protocol | undefined;
}

/**
 * The bridge's source.
 *
 * @public
 */
export interface BridgeSource {
  /**
   * The source of the associated flow.
   *
   * @public
   */
  FlowSource?: BridgeFlowSource | undefined;

  /**
   * The network source for the bridge.
   *
   * @public
   */
  NetworkSource?: BridgeNetworkSource | undefined;
}

/**
 * The VPC interface that is used for the media stream associated with the source or output.
 *
 * @public
 */
export interface Interface {
  /**
   * The name of the VPC interface.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The transport parameters that you want to associate with an outbound media stream.
 *
 * @public
 */
export interface DestinationConfiguration {
  /**
   * The IP address where you want MediaConnect to send contents of the media stream.
   *
   * @public
   */
  DestinationIp: string | undefined;

  /**
   * The port that you want MediaConnect to use when it distributes the media stream to the output.
   *
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The VPC interface that you want to use for the media stream associated with the output.
   *
   * @public
   */
  Interface: Interface | undefined;

  /**
   * The IP address that the receiver requires in order to establish a connection with the flow. This value is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the CDI or ST 2110 JPEG XS or protocol.
   *
   * @public
   */
  OutboundIp: string | undefined;
}

/**
 * The settings for a flow entitlement.
 *
 * @public
 */
export interface Entitlement {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   *
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * A description of the entitlement.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The ARN of the entitlement.
   *
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * An indication of whether the entitlement is enabled.
   *
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * The name of the entitlement.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   *
   * @public
   */
  Subscribers: string[] | undefined;
}

/**
 * The network settings for a gateway.
 *
 * @public
 */
export interface GatewayNetwork {
  /**
   * A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  CidrBlock: string | undefined;

  /**
   * The name of the network. This name is used to reference the network and must be unique among networks in this gateway.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The entitlements that you want to grant on a flow.
 *
 * @public
 */
export interface GrantEntitlementRequest {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   *
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * A description of the entitlement. This description appears only on the MediaConnect console and will not be seen by the subscriber or end user.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement. Allowable encryption types: static-key, speke.
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
   *
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * The name of the entitlement. This value must be unique within the current flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   *
   * @public
   */
  Subscribers: string[] | undefined;

  /**
   * The key-value pairs that can be used to tag and organize the entitlement.
   *
   * @public
   */
  EntitlementTags?: Record<string, string> | undefined;
}

/**
 * The transport parameters that are associated with an incoming media stream.
 *
 * @public
 */
export interface InputConfiguration {
  /**
   * The IP address that the flow listens on for incoming content for a media stream.
   *
   * @public
   */
  InputIp: string | undefined;

  /**
   * The port that the flow listens on for an incoming media stream.
   *
   * @public
   */
  InputPort: number | undefined;

  /**
   * The VPC interface where the media stream comes in from.
   *
   * @public
   */
  Interface: Interface | undefined;
}

/**
 * The transport parameters that you want to associate with an incoming media stream.
 *
 * @public
 */
export interface InputConfigurationRequest {
  /**
   * The port that you want the flow to listen on for an incoming media stream.
   *
   * @public
   */
  InputPort: number | undefined;

  /**
   * The VPC interface that you want to use for the incoming media stream.
   *
   * @public
   */
  Interface: InterfaceRequest | undefined;
}

/**
 * Displays details of the selected bridge.
 *
 * @public
 */
export interface ListedBridge {
  /**
   * The ARN of the bridge.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The state of the bridge.
   *
   * @public
   */
  BridgeState: BridgeState | undefined;

  /**
   * The type of the bridge.
   *
   * @public
   */
  BridgeType: string | undefined;

  /**
   * The name of the bridge.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the gateway associated with the bridge.
   *
   * @public
   */
  PlacementArn: string | undefined;
}

/**
 * An entitlement that has been granted to you from other Amazon Web Services accounts.
 *
 * @public
 */
export interface ListedEntitlement {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   *
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * The ARN of the entitlement.
   *
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * The name of the entitlement.
   *
   * @public
   */
  EntitlementName: string | undefined;
}

/**
 * The maintenance setting of a flow.
 *
 * @public
 */
export interface Maintenance {
  /**
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   *
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * The Maintenance has to be performed before this deadline in ISO UTC format. Example: 2021-01-30T08:30:00Z.
   *
   * @public
   */
  MaintenanceDeadline?: string | undefined;

  /**
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   *
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   *
   * @public
   */
  MaintenanceStartHour?: string | undefined;
}

/**
 * A summary of a flow, including its ARN, Availability Zone, and source type.
 *
 * @public
 */
export interface ListedFlow {
  /**
   * The Availability Zone that the flow was created in.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The ARN of the flow.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of source. This value is either owned (originated somewhere other than an MediaConnect flow owned by another Amazon Web Services account) or entitled (originated at a MediaConnect flow owned by another Amazon Web Services account).
   *
   * @public
   */
  SourceType: SourceType | undefined;

  /**
   * The current status of the flow.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * The maintenance settings for the flow.
   *
   * @public
   */
  Maintenance?: Maintenance | undefined;
}

/**
 * A summary of a gateway, including its name, ARN, and status.
 *
 * @public
 */
export interface ListedGateway {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The status of the gateway.
   *
   * @public
   */
  GatewayState: GatewayState | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * A summary of an instance.
 *
 * @public
 */
export interface ListedGatewayInstance {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  GatewayInstanceArn: string | undefined;

  /**
   * The managed instance ID generated by the SSM install. This will begin with "mi-".
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The status of the instance.
   *
   * @public
   */
  InstanceState?: InstanceState | undefined;
}

/**
 * A set of parameters that define the media stream.
 *
 * @public
 */
export interface Fmtp {
  /**
   * The format of the audio channel.
   *
   * @public
   */
  ChannelOrder?: string | undefined;

  /**
   * The format used for the representation of color.
   *
   * @public
   */
  Colorimetry?: Colorimetry | undefined;

  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001.
   *
   * @public
   */
  ExactFramerate?: string | undefined;

  /**
   * The pixel aspect ratio (PAR) of the video.
   *
   * @public
   */
  Par?: string | undefined;

  /**
   * The encoding range of the video.
   *
   * @public
   */
  Range?: Range | undefined;

  /**
   * The type of compression that was used to smooth the video’s appearance.
   *
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * The transfer characteristic system (TCS) that is used in the video.
   *
   * @public
   */
  Tcs?: Tcs | undefined;
}

/**
 * Attributes that are related to the media stream.
 *
 * @public
 */
export interface MediaStreamAttributes {
  /**
   * The settings that you want to use to define the media stream.
   *
   * @public
   */
  Fmtp: Fmtp | undefined;

  /**
   * The audio language, in a format that is recognized by the receiver.
   *
   * @public
   */
  Lang?: string | undefined;
}

/**
 * A media stream represents one component of your content, such as video, audio, or ancillary data. After you add a media stream to your flow, you can associate it with sources and outputs that use the ST 2110 JPEG XS or CDI protocol.
 *
 * @public
 */
export interface MediaStream {
  /**
   * Attributes that are related to the media stream.
   *
   * @public
   */
  Attributes?: MediaStreamAttributes | undefined;

  /**
   * The sample rate for the stream. This value is measured in Hz.
   *
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
   *
   * @public
   */
  Fmt: number | undefined;

  /**
   * A unique identifier for the media stream.
   *
   * @public
   */
  MediaStreamId: number | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   *
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   *
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * The resolution of the video.
   *
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 *
 * @public
 */
export interface EncodingParameters {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   *
   * @public
   */
  CompressionFactor: number | undefined;

  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
   *
   * @public
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * The media stream that is associated with the output, and the parameters for that association.
 *
 * @public
 */
export interface MediaStreamOutputConfiguration {
  /**
   * The transport parameters that are associated with each outbound media stream.
   *
   * @public
   */
  DestinationConfigurations?: DestinationConfiguration[] | undefined;

  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   *
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   *
   * @public
   */
  EncodingParameters?: EncodingParameters | undefined;

  /**
   * The name of the media stream.
   *
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * The media stream that is associated with the source, and the parameters for that association.
 *
 * @public
 */
export interface MediaStreamSourceConfiguration {
  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   *
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * The media streams that you want to associate with the source.
   *
   * @public
   */
  InputConfigurations?: InputConfiguration[] | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   *
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * The media stream that you want to associate with the source, and the parameters for that association.
 *
 * @public
 */
export interface MediaStreamSourceConfigurationRequest {
  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   *
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * The media streams that you want to associate with the source.
   *
   * @public
   */
  InputConfigurations?: InputConfigurationRequest[] | undefined;

  /**
   * The name of the media stream.
   *
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * The details of an error message.
 *
 * @public
 */
export interface MessageDetail {
  /**
   * The error code.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The specific error message that MediaConnect returns to help you understand the reason that the request did not succeed.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * Specifies the configuration settings for individual NDI® discovery servers. A maximum of 3 servers is allowed.
 *
 * @public
 */
export interface NdiDiscoveryServerConfig {
  /**
   * The unique network address of the NDI discovery server.
   *
   * @public
   */
  DiscoveryServerAddress: string | undefined;

  /**
   * The port for the NDI discovery server. Defaults to 5959 if a custom port isn't specified.
   *
   * @public
   */
  DiscoveryServerPort?: number | undefined;

  /**
   * The identifier for the Virtual Private Cloud (VPC) network interface used by the flow.
   *
   * @public
   */
  VpcInterfaceAdapter: string | undefined;
}

/**
 * The color signaling of the video stream.
 *
 * @public
 */
export interface ColorInformation {
  /**
   * The color primaries that the video stream uses (for example, `BT709` or `BT2020`).
   *
   * @public
   */
  Colorimetry?: VideoColorimetry | undefined;

  /**
   * The transfer characteristics that the video stream uses (for example, `BT601`, `BT709`, `BT2100_PQ`, or `BT2100_HLG`).
   *
   * @public
   */
  TransferCharacteristics?: VideoTransferCharacteristics | undefined;

  /**
   * The YCbCr matrix coefficients that the video stream uses (for example, `BT709` or `BT2020_NCL`).
   *
   * @public
   */
  MatrixCoefficients?: VideoMatrixCoefficients | undefined;
}

/**
 * The frame resolution used by the video stream.
 *
 * @public
 */
export interface FrameResolution {
  /**
   * The number of pixels in the height of the video frame.
   *
   * @public
   */
  FrameHeight: number | undefined;

  /**
   * The number of pixels in the width of the video frame.
   *
   * @public
   */
  FrameWidth: number | undefined;
}

/**
 * Detailed information about a single media stream that is part of an NDI® source. This includes details about the stream type, codec, resolution, frame rate, audio channels, and sample rate.
 *
 * @public
 */
export interface NdiMediaStreamInfo {
  /**
   * The type of media stream (for example, `Video` or `Audio`).
   *
   * @public
   */
  StreamType: string | undefined;

  /**
   * The codec used for the media stream. For NDI sources, use `speed-hq`.
   *
   * @public
   */
  Codec: string | undefined;

  /**
   * A unique identifier for the media stream.
   *
   * @public
   */
  StreamId: number | undefined;

  /**
   * The method used to display video frames. Used when the `streamType` is `Video`.
   *
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * The color signaling of the video stream. Used when the `streamType` is `Video`.
   *
   * @public
   */
  Color?: ColorInformation | undefined;

  /**
   * The width and height dimensions of the video frame in pixels. Used when the `streamType` is `Video`.
   *
   * @public
   */
  FrameResolution?: FrameResolution | undefined;

  /**
   * The number of video frames displayed per second. Used when the `streamType` is `Video`.
   *
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * The number of audio channels in the stream. Used when the `streamType` is `Audio`.
   *
   * @public
   */
  Channels?: number | undefined;

  /**
   * The number of audio samples captured per second, measured in kilohertz (kHz). Used when the `streamType` is `Audio`.
   *
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * Information about a single NDI® sender, including its name.
 *
 * @public
 */
export interface NdiSourceInfo {
  /**
   * The name of the upstream NDI sender.
   *
   * @public
   */
  SourceName: string | undefined;
}

/**
 * A definition of what is being billed for, including the type and amount.
 *
 * @public
 */
export interface ResourceSpecification {
  /**
   * The amount of outbound bandwidth that is discounted in the offering.
   *
   * @public
   */
  ReservedBitrate?: number | undefined;

  /**
   * The type of resource and the unit that is being billed for.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;
}

/**
 * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
 *
 * @public
 */
export interface Offering {
  /**
   * The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.
   *
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * The length of time that your reservation would be active.
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * The unit of measurement for the duration of the offering.
   *
   * @public
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   *
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * A description of the offering.
   *
   * @public
   */
  OfferingDescription: string | undefined;

  /**
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate.
   *
   * @public
   */
  PricePerUnit: string | undefined;

  /**
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate.
   *
   * @public
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.
   *
   * @public
   */
  ResourceSpecification: ResourceSpecification | undefined;
}

/**
 * The settings for the NDI® source. This includes the exact name of the upstream NDI sender that you want to connect to your source.
 *
 * > **Note:** When you update the NDI source, include only the members you want to change. MediaConnect leaves the members that you don't specify unchanged.
 *
 * @public
 */
export interface NdiSourceSettings {
  /**
   * The exact name of an existing NDI sender that's registered with your discovery server. If included, the format of this name must be `MACHINENAME (ProgramName)`.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The audio reference level of the NDI sender, in decibels relative to full scale (dBFS). Common values are `-20` (NDI and SMPTE) and `-18` (EBU). If you don't specify this field, MediaConnect uses `-20`.
   *
   * @public
   */
  AudioReferenceLevel?: number | undefined;
}

/**
 * Attributes related to the transport stream that are used in a source or output.
 *
 * @public
 */
export interface Transport {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16
   *
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   *
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   *
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   *
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   *
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The protocol that is used by the source or output.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The remote ID for the Zixi-pull stream.
   *
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   *
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * Source IP or domain name for SRT-caller protocol.
   *
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * Source port for SRT-caller protocol.
   *
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * A quality setting for the NDI Speed HQ encoder.
   *
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;

  /**
   * A suffix for the name of the NDI® sender that the flow creates. If a custom name isn't specified, MediaConnect uses the output name.
   *
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * The settings for the NDI source. This includes the exact name of the upstream NDI sender that you want to connect to your source.
   *
   * @public
   */
  NdiSourceSettings?: NdiSourceSettings | undefined;

  /**
   * The timecode source for NDI output frames. For NDI outputs, this field is always present and defaults to `EMBEDDED_TIMECODE`.
   *
   * - `EMBEDDED_TIMECODE` - Preserves timecodes from the input transport stream. The timecodes must be embedded in the video stream as SEI timing messages. If no embedded timecode is detected, MediaConnect uses the UTC system time instead.
   * - `UTC_SYSTEM_TIME` - Generates timecodes based on the system clock time when each frame is sent.
   *
   * @public
   */
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource | undefined;

  /**
   * The audio reference level of the NDI receiver, in decibels relative to full scale (dBFS). Common values are `-20` (NDI and SMPTE) and `-18` (EBU). For NDI outputs, this field is always present and defaults to `-20`.
   *
   * @public
   */
  NdiAudioReferenceLevel?: number | undefined;
}

/**
 * The settings for an output.
 *
 * @public
 */
export interface Output {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   *
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * A description of the output.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The address where you want to send the output.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   *
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
   *
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The IP address that the receiver requires in order to establish a connection with the flow. For public networking, the ListenerAddress is represented by the elastic IP address of the flow. For private networking, the ListenerAddress is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the Zixi pull or SRT listener protocol.
   *
   * @public
   */
  ListenerAddress?: string | undefined;

  /**
   * The input ARN of the MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
   *
   * @public
   */
  MediaLiveInputArn?: string | undefined;

  /**
   * The configuration for each media stream that is associated with the output.
   *
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[] | undefined;

  /**
   * The name of the output. This value must be unique within the current flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the output.
   *
   * @public
   */
  OutputArn: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Attributes related to the transport stream that are used in the output.
   *
   * @public
   */
  Transport?: Transport | undefined;

  /**
   * The name of the VPC interface attachment to use for this output.
   *
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * The ARN of the bridge added to this output.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The bridge output ports currently in use.
   *
   * @public
   */
  BridgePorts?: number[] | undefined;

  /**
   * An indication of whether the output is transmitting data or not.
   *
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * The IP address of the device that is currently receiving content from this output.
   *
   * > **Note:**
   * >
   * > - For outputs that use protocols where you specify the destination (such as SRT Caller or Zixi Push), this value matches the configured destination address.
   * > - For outputs that use listener protocols (such as SRT Listener), this value shows the address of the connected receiver.
   * > - Peer IP addresses aren't available for entitlements, managed MediaLive outputs, NDI® sources and outputs, and CDI/ST2110 outputs.
   * > - The peer IP address might not be visible for flows that haven't been started yet, or flows that were started before May 2025. In these cases, restart your flow to see the peer IP address.
   *
   * @public
   */
  PeerIpAddress?: string | undefined;

  /**
   * Indicates if router integration is enabled or disabled on the flow output.
   *
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * The encryption configuration for the output when router integration is enabled.
   *
   * @public
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption | undefined;

  /**
   * The ARN of the router input that's connected to this flow output.
   *
   * @public
   */
  ConnectedRouterInputArn?: string | undefined;
}

/**
 * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
 *
 * @public
 */
export interface Reservation {
  /**
   * The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.
   *
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * The length of time that this reservation is active. MediaConnect defines this value in the offering.
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering.
   *
   * @public
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.
   *
   * @public
   */
  End: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   *
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * A description of the offering. MediaConnect defines this value in the offering.
   *
   * @public
   */
  OfferingDescription: string | undefined;

  /**
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.
   *
   * @public
   */
  PricePerUnit: string | undefined;

  /**
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering.
   *
   * @public
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.
   *
   * @public
   */
  ReservationArn: string | undefined;

  /**
   * The name that you assigned to the reservation when you purchased the offering.
   *
   * @public
   */
  ReservationName: string | undefined;

  /**
   * The status of your reservation.
   *
   * @public
   */
  ReservationState: ReservationState | undefined;

  /**
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.
   *
   * @public
   */
  ResourceSpecification: ResourceSpecification | undefined;

  /**
   * The day and time that the reservation becomes active. You set this value when you purchase the offering.
   *
   * @public
   */
  Start: string | undefined;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 *
 * @public
 */
export interface SetGatewayBridgeSourceRequest {
  /**
   * The ARN of the bridge feeding this flow.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this bridge source.
   *
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * The settings for the source of the flow.
 *
 * @public
 */
export interface SetSourceRequest {
  /**
   * The type of encryption that is used on the content ingested from this source. Allowable encryption types: static-key.
   *
   * @public
   */
  Decryption?: Encryption | undefined;

  /**
   * A description for the source. This value is not used or seen outside of the current MediaConnect account.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   *
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The port that the flow will be listening on for incoming content.
   *
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   *
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   *
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   *
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   *
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   *
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The name of the source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The protocol that is used by the source.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * Source IP or domain name for SRT-caller protocol.
   *
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * Source port for SRT-caller protocol.
   *
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface to use for this source.
   *
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   *
   * @public
   */
  GatewayBridgeSource?: SetGatewayBridgeSourceRequest | undefined;

  /**
   * The settings for the NDI® source. This includes the exact name of the upstream NDI sender that you want to connect to your source.
   *
   * @public
   */
  NdiSourceSettings?: NdiSourceSettings | undefined;

  /**
   * The key-value pairs that can be used to tag and organize the source.
   *
   * @public
   */
  SourceTags?: Record<string, string> | undefined;

  /**
   * Indicates whether to enable or disable router integration when setting a flow source.
   *
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * The decryption configuration for the flow source when router integration is enabled. Specifies how the source content should be decrypted when router integration is used.
   *
   * @public
   */
  RouterIntegrationTransitDecryption?: FlowTransitEncryption | undefined;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 *
 * @public
 */
export interface GatewayBridgeSource {
  /**
   * The ARN of the bridge feeding this flow.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this bridge source.
   *
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * The settings for the source of the flow.
 *
 * @public
 */
export interface Source {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   *
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * The type of encryption that is used on the content ingested from this source.
   *
   * @public
   */
  Decryption?: Encryption | undefined;

  /**
   * A description for the source. This value is not used or seen outside of the current MediaConnect account.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another Amazon Web Services account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   *
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The IP address that the flow will be listening on for incoming content.
   *
   * @public
   */
  IngestIp?: string | undefined;

  /**
   * The port that the flow will be listening on for incoming content.
   *
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   *
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[] | undefined;

  /**
   * The name of the source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   *
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   *
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The ARN of the source.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * Attributes related to the transport stream that are used in the source.
   *
   * @public
   */
  Transport?: Transport | undefined;

  /**
   * The name of the VPC interface that is used for this source.
   *
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   *
   * @public
   */
  GatewayBridgeSource?: GatewayBridgeSource | undefined;

  /**
   * The IP address of the device that is currently sending content to this source.
   *
   * > **Note:**
   * >
   * > - For sources that use protocols where you specify the origin (such as SRT Caller), this value matches the configured origin address.
   * > - For sources that use listener protocols (such as SRT Listener or RTP), this value shows the address of the connected sender.
   * > - Peer IP addresses aren't available for entitlements and CDI/ST2110 sources.
   * > - The peer IP address might not be visible for flows that haven't been started yet, or flows that were started before May 2025. In these cases, restart your flow to see the peer IP address.
   *
   * @public
   */
  PeerIpAddress?: string | undefined;

  /**
   * Indicates if router integration is enabled or disabled on the flow source.
   *
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * The decryption configuration for the flow source when router integration is enabled.
   *
   * @public
   */
  RouterIntegrationTransitDecryption?: FlowTransitEncryption | undefined;

  /**
   * The ARN of the router output that's currently connected to this source.
   *
   * @public
   */
  ConnectedRouterOutputArn?: string | undefined;
}

/**
 * The metadata of an elementary transport stream.
 *
 * @public
 */
export interface TransportStream {
  /**
   * The number of channels in the audio stream.
   *
   * @public
   */
  Channels?: number | undefined;

  /**
   * The codec used by the stream.
   *
   * @public
   */
  Codec?: string | undefined;

  /**
   * The color signaling of the video stream.
   *
   * @public
   */
  Color?: ColorInformation | undefined;

  /**
   * The frame rate used by the video stream.
   *
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * The frame resolution used by the video stream.
   *
   * @public
   */
  FrameResolution?: FrameResolution | undefined;

  /**
   * The Packet ID (PID) as it is reported in the Program Map Table.
   *
   * @public
   */
  Pid: number | undefined;

  /**
   * The sample rate used by the audio stream.
   *
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * The sample bit size used by the audio stream.
   *
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * The Stream Type as it is reported in the Program Map Table.
   *
   * @public
   */
  StreamType: string | undefined;
}

/**
 * The metadata of a single transport stream program.
 *
 * @public
 */
export interface TransportStreamProgram {
  /**
   * The Program Clock Reference (PCR) Packet ID (PID) as it is reported in the Program Association Table.
   *
   * @public
   */
  PcrPid: number | undefined;

  /**
   * The program name as it is reported in the Program Association Table.
   *
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * The program number as it is reported in the Program Association Table.
   *
   * @public
   */
  ProgramNumber: number | undefined;

  /**
   * The program Packet ID (PID) as it is reported in the Program Association Table.
   *
   * @public
   */
  ProgramPid: number | undefined;

  /**
   * The list of elementary transport streams in the program. The list includes video, audio, and data streams.
   *
   * @public
   */
  Streams: TransportStream[] | undefined;
}

/**
 * Configures settings for the `BlackFrames` metric.
 *
 * @public
 */
export interface BlackFrames {
  /**
   * Indicates whether the `BlackFrames` metric is enabled or disabled.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * Specifies the number of consecutive seconds of black frames that triggers an event or alert.
   *
   * @public
   */
  ThresholdSeconds?: number | undefined;
}

/**
 * Configures settings for the `FrozenFrames` metric.
 *
 * @public
 */
export interface FrozenFrames {
  /**
   * Indicates whether the `FrozenFrames` metric is enabled or disabled.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * Specifies the number of consecutive seconds of a static image that triggers an event or alert.
   *
   * @public
   */
  ThresholdSeconds?: number | undefined;
}

/**
 * Specifies the configuration for video stream metrics monitoring.
 *
 * @public
 */
export interface VideoMonitoringSetting {
  /**
   * Detects video frames that are black.
   *
   * @public
   */
  BlackFrames?: BlackFrames | undefined;

  /**
   * Detects video frames that have not changed.
   *
   * @public
   */
  FrozenFrames?: FrozenFrames | undefined;
}

/**
 * The settings for a VPC source.
 *
 * @public
 */
export interface VpcInterface {
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * IDs of the network interfaces created in customer's account by MediaConnect.
   *
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * The type of network interface.
   *
   * @public
   */
  NetworkInterfaceType: NetworkInterfaceType | undefined;

  /**
   * A role Arn MediaConnect can assume to create ENIs in your account.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Security Group IDs to be used on ENI.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Subnet must be in the AZ of the Flow.
   *
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * The details of the VPC interfaces that you want to add to the flow.
 *
 * @public
 */
export interface VpcInterfaceRequest {
  /**
   * The name for the VPC interface. This name must be unique within the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of network interface.
   *
   * @public
   */
  NetworkInterfaceType?: NetworkInterfaceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that you created when you set up MediaConnect as a trusted service.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A virtual firewall to control inbound and outbound traffic.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The subnet IDs that you want to use for your VPC interface. A range of IP addresses in your VPC. When you create your VPC, you specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. This is the primary CIDR block for your VPC. When you create a subnet for your VPC, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block. The subnets that you use across all VPC interfaces on the flow must be in the same Availability Zone as the flow.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The key-value pairs that can be used to tag and organize the VPC network interface.
   *
   * @public
   */
  VpcInterfaceTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AddBridgeOutputsRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The outputs that you want to add to this bridge.
   *
   * @public
   */
  Outputs: AddBridgeOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeOutputsResponse {
  /**
   * The ARN of the bridge that you added outputs to.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The outputs that you added to this bridge.
   *
   * @public
   */
  Outputs?: BridgeOutput[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeSourcesRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The sources that you want to add to this bridge.
   *
   * @public
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeSourcesResponse {
  /**
   * The ARN of the bridge that you added sources to.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The sources that you added to this bridge.
   *
   * @public
   */
  Sources?: BridgeSource[] | undefined;
}

/**
 * Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
 *
 * @public
 */
export interface AddEgressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps) of the egress bridge.
   *
   * @public
   */
  MaxBitrate: number | undefined;
}

/**
 * @public
 */
export interface AddFlowMediaStreamsRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The media streams that you want to add to the flow.
   *
   * @public
   */
  MediaStreams: AddMediaStreamRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowMediaStreamsResponse {
  /**
   * The ARN of the flow that you added media streams to.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The media streams that you added to the flow.
   *
   * @public
   */
  MediaStreams?: MediaStream[] | undefined;
}

/**
 * @public
 */
export interface AddFlowOutputsRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to add outputs to.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * A list of outputs that you want to add to the flow.
   *
   * @public
   */
  Outputs: AddOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowOutputsResponse {
  /**
   * The ARN of the flow that these outputs were added to.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the newly added outputs.
   *
   * @public
   */
  Outputs?: Output[] | undefined;
}

/**
 * @public
 */
export interface AddFlowSourcesRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * A list of sources that you want to add to the flow.
   *
   * @public
   */
  Sources: SetSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowSourcesResponse {
  /**
   * The ARN of the flow that these sources were added to.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the newly added sources.
   *
   * @public
   */
  Sources?: Source[] | undefined;
}

/**
 * @public
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to update.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * A list of VPC interfaces that you want to add to the flow.
   *
   * @public
   */
  VpcInterfaces: VpcInterfaceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowVpcInterfacesResponse {
  /**
   * The ARN of the flow that these VPC interfaces were added to.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the newly added VPC interfaces.
   *
   * @public
   */
  VpcInterfaces?: VpcInterface[] | undefined;
}

/**
 * Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
 *
 * @public
 */
export interface AddIngressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps) of the ingress bridge.
   *
   * @public
   */
  MaxBitrate: number | undefined;

  /**
   * The maximum number of expected outputs on the ingress bridge.
   *
   * @public
   */
  MaxOutputs: number | undefined;
}

/**
 * Create a maintenance setting for a flow.
 *
 * @public
 */
export interface AddMaintenance {
  /**
   * A day of a week when the maintenance will happen.
   *
   * @public
   */
  MaintenanceDay: MaintenanceDay | undefined;

  /**
   * UTC time when the maintenance will happen.
   *
   * Use 24-hour HH:MM format.
   *
   * Minutes must be 00.
   *
   * Example: 13:00.
   *
   * The default value is 02:00.
   *
   * @public
   */
  MaintenanceStartHour: string | undefined;
}

/**
 * The configuration for automatic endpoint encryption. In this mode, MediaConnect determines the encryption key when the endpoint connects. This type does not require any additional settings.
 *
 * @public
 */
export interface AutomaticEndpointEncryptionConfiguration {}

/**
 * @public
 */
export interface BatchGetDestinationEndpointRequest {
  /**
   * The Amazon Resource Names (ARNs) of one or more destination endpoints to retrieve. You can specify from 1 to 20 ARNs.
   *
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * A message associated with a router input, including a code and a message.
 *
 * @public
 */
export interface RouterInputMessage {
  /**
   * The code associated with the router input message.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The message text associated with the router input message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * The details of the router input that is associated with a destination endpoint.
 *
 * @public
 */
export interface RouterInputDestinationEndpointAssociatedResourceDetails {
  /**
   * The name of the router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum bitrate of the router input, in bits per second.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * The state of the router input.
   *
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * The status messages for the router input.
   *
   * @public
   */
  Messages: RouterInputMessage[] | undefined;
}

/**
 * The associated resource details for a standard destination endpoint. This type does not require any additional settings.
 *
 * @public
 */
export interface StandardDestinationEndpointAssociatedResourceDetails {}

/**
 * The details of the resource that is associated with a destination endpoint. This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.
 *
 * @public
 */
export type DestinationEndpointAssociatedResourceDetails =
  | DestinationEndpointAssociatedResourceDetails.RouterInputMember
  | DestinationEndpointAssociatedResourceDetails.StandardMember
  | DestinationEndpointAssociatedResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace DestinationEndpointAssociatedResourceDetails {
  /**
   * The associated resource details for a standard destination endpoint.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardDestinationEndpointAssociatedResourceDetails;
    RouterInput?: never;
    $unknown?: never;
  }

  /**
   * The associated resource details for a destination endpoint that represents a router input.
   *
   * @public
   */
  export interface RouterInputMember {
    Standard?: never;
    RouterInput: RouterInputDestinationEndpointAssociatedResourceDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    RouterInput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardDestinationEndpointAssociatedResourceDetails) => T;
    RouterInput: (value: RouterInputDestinationEndpointAssociatedResourceDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a destination endpoint that represents a router input.
 *
 * @public
 */
export interface RouterInputDestinationEndpointConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the router input that the destination endpoint represents.
   *
   * @public
   */
  RouterInputArn: string | undefined;
}

/**
 * A rule that allows a specific CIDR block to connect to the public destination endpoint.
 *
 * @public
 */
export interface PublicDestinationEndpointNetworkingConfigurationAllowRule {
  /**
   * The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.
 *
 * @public
 */
export interface PublicDestinationEndpointNetworkingConfiguration {
  /**
   * The rules that specify which CIDR blocks can connect to the destination endpoint. You can specify up to 10 rules.
   *
   * @public
   */
  DestinationAllowRules: PublicDestinationEndpointNetworkingConfigurationAllowRule[] | undefined;
}

/**
 * The networking configuration for a destination endpoint in a virtual private cloud (VPC).
 *
 * @public
 */
export interface VpcDestinationEndpointNetworkingConfiguration {
  /**
   * The IDs of the security groups to associate with the destination endpoint. You can specify from 1 to 5 security groups.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnet to use for the destination endpoint.
   *
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * The networking configuration for a standard destination endpoint. This is a union type, so exactly one of its members is set: `public` for a publicly accessible endpoint, or `vpc` for an endpoint in a virtual private cloud (VPC).
 *
 * @public
 */
export type StandardDestinationEndpointNetworkingConfiguration =
  | StandardDestinationEndpointNetworkingConfiguration.PublicMember
  | StandardDestinationEndpointNetworkingConfiguration.VpcMember
  | StandardDestinationEndpointNetworkingConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace StandardDestinationEndpointNetworkingConfiguration {
  /**
   * The configuration for a publicly accessible destination endpoint.
   *
   * @public
   */
  export interface PublicMember {
    Public: PublicDestinationEndpointNetworkingConfiguration;
    Vpc?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a destination endpoint in a virtual private cloud (VPC).
   *
   * @public
   */
  export interface VpcMember {
    Public?: never;
    Vpc: VpcDestinationEndpointNetworkingConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Public?: never;
    Vpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Public: (value: PublicDestinationEndpointNetworkingConfiguration) => T;
    Vpc: (value: VpcDestinationEndpointNetworkingConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a destination endpoint that uses the RIST protocol.
 *
 * @public
 */
export interface RistStandardDestinationEndpointConfiguration {
  /**
   * The IP address on which the destination endpoint receives content.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The port on which the destination endpoint receives content. The valid range is 1024 to 65531.
   *
   * @public
   */
  DestinationIngestPort: number | undefined;
}

/**
 * The configuration settings for a destination endpoint that uses the RTP protocol.
 *
 * @public
 */
export interface RtpStandardDestinationEndpointConfiguration {
  /**
   * The IP address on which the destination endpoint receives content.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The port on which the destination endpoint receives content. The valid range is 1024 to 65531.
   *
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * Indicates whether forward error correction (FEC) is enabled for the destination endpoint.
   *
   * @public
   */
  ForwardErrorCorrectionState: ForwardErrorCorrectionState | undefined;
}

/**
 * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
 *
 * @public
 */
export interface EndpointEncryptionSecretConfiguration {
  /**
   * The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key `aws/secretsmanager`. The secret must be in the same Amazon Web Services account and Region as the endpoint.
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * The configuration settings for a destination endpoint that uses SRT in caller mode.
 *
 * @public
 */
export interface SrtCallerStandardDestinationEndpointConfiguration {
  /**
   * The port on which the source listens for the connection. The valid range is 3000 to 30000.
   *
   * @public
   */
  SourceListenerPort: number | undefined;

  /**
   * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
   *
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * The configuration settings for a destination endpoint that uses SRT in listener mode.
 *
 * @public
 */
export interface SrtListenerStandardDestinationEndpointConfiguration {
  /**
   * The IP address on which the destination endpoint listens for incoming connections.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531.
   *
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * The stream ID that identifies the content for the SRT connection.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
   *
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * The protocol configuration for a standard destination endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the destination endpoint uses.
 *
 * @public
 */
export type StandardDestinationEndpointProtocolConfiguration =
  | StandardDestinationEndpointProtocolConfiguration.RistMember
  | StandardDestinationEndpointProtocolConfiguration.RtpMember
  | StandardDestinationEndpointProtocolConfiguration.SrtCallerMember
  | StandardDestinationEndpointProtocolConfiguration.SrtListenerMember
  | StandardDestinationEndpointProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace StandardDestinationEndpointProtocolConfiguration {
  /**
   * The configuration settings for a destination endpoint that uses the RIST protocol.
   *
   * @public
   */
  export interface RistMember {
    Rist: RistStandardDestinationEndpointConfiguration;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a destination endpoint that uses SRT in listener mode.
   *
   * @public
   */
  export interface SrtListenerMember {
    Rist?: never;
    SrtListener: SrtListenerStandardDestinationEndpointConfiguration;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a destination endpoint that uses SRT in caller mode.
   *
   * @public
   */
  export interface SrtCallerMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller: SrtCallerStandardDestinationEndpointConfiguration;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a destination endpoint that uses the RTP protocol.
   *
   * @public
   */
  export interface RtpMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp: RtpStandardDestinationEndpointConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Rist: (value: RistStandardDestinationEndpointConfiguration) => T;
    SrtListener: (value: SrtListenerStandardDestinationEndpointConfiguration) => T;
    SrtCaller: (value: SrtCallerStandardDestinationEndpointConfiguration) => T;
    Rtp: (value: RtpStandardDestinationEndpointConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a standard destination endpoint.
 *
 * @public
 */
export interface StandardDestinationEndpointConfiguration {
  /**
   * The name of the destination endpoint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The networking configuration for the destination endpoint, which determines whether it is publicly accessible or in a virtual private cloud (VPC).
   *
   * @public
   */
  DestinationNetworkingConfiguration: StandardDestinationEndpointNetworkingConfiguration | undefined;

  /**
   * The protocol configuration for the destination endpoint.
   *
   * @public
   */
  ProtocolConfiguration: StandardDestinationEndpointProtocolConfiguration | undefined;

  /**
   * The networking type of the destination endpoint. Valid values include the following:
   *
   * - `PUBLIC` – The destination endpoint is publicly accessible.
   * - `VPC` – The destination endpoint is in a virtual private cloud (VPC).
   *
   * @public
   */
  DestinationNetworkingType?: DestinationEndpointNetworkingType | undefined;

  /**
   * The protocol used by the destination endpoint. Valid values include the following:
   *
   * - `RTP` – Real-time Transport Protocol.
   * - `RIST` – Reliable Internet Stream Transport.
   * - `SRT_CALLER` – Secure Reliable Transport (SRT) in caller mode.
   * - `SRT_LISTENER` – Secure Reliable Transport (SRT) in listener mode.
   *
   * @public
   */
  Protocol?: DestinationEndpointProtocol | undefined;
}

/**
 * The configuration settings for a destination endpoint. This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.
 *
 * @public
 */
export type DestinationEndpointConfiguration =
  | DestinationEndpointConfiguration.RouterInputMember
  | DestinationEndpointConfiguration.StandardMember
  | DestinationEndpointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DestinationEndpointConfiguration {
  /**
   * The configuration settings for a standard destination endpoint, which represents an external destination.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardDestinationEndpointConfiguration;
    RouterInput?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a destination endpoint that represents a router input.
   *
   * @public
   */
  export interface RouterInputMember {
    Standard?: never;
    RouterInput: RouterInputDestinationEndpointConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    RouterInput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardDestinationEndpointConfiguration) => T;
    RouterInput: (value: RouterInputDestinationEndpointConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The endpoint encryption configuration for connections that use a key or passphrase that you store in Secrets Manager.
 *
 * @public
 */
export interface SecretsManagerEndpointEncryptionConfiguration {
  /**
   * The type of secret used to encrypt the connection. Valid values include the following:
   *
   * - `AES_128_KEY` – A 128-bit AES encryption key.
   * - `AES_192_KEY` – A 192-bit AES encryption key.
   * - `AES_256_KEY` – A 256-bit AES encryption key.
   * - `SRT_PASSPHRASE` – An SRT passphrase.
   *
   * @public
   */
  EncryptionSecretType?: EndpointEncryptionSecretType | undefined;

  /**
   * The Secrets Manager secret that holds the key or passphrase used to encrypt the connection.
   *
   * @public
   */
  EncryptionSecret: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
 *
 * @public
 */
export type EndpointEncryptionConfiguration =
  | EndpointEncryptionConfiguration.AutomaticMember
  | EndpointEncryptionConfiguration.SecretsManagerMember
  | EndpointEncryptionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace EndpointEncryptionConfiguration {
  /**
   * The encryption configuration for a connection that uses a key or passphrase that you store in Secrets Manager.
   *
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEndpointEncryptionConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * The configuration for automatic encryption, where MediaConnect determines the encryption key when the endpoint connects.
   *
   * @public
   */
  export interface AutomaticMember {
    SecretsManager?: never;
    Automatic: AutomaticEndpointEncryptionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretsManager?: never;
    Automatic?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecretsManager: (value: SecretsManagerEndpointEncryptionConfiguration) => T;
    Automatic: (value: AutomaticEndpointEncryptionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The connection details for a destination endpoint that represents a router input.
 *
 * @public
 */
export interface RouterInputDestinationEndpointConnectionDetails {
  /**
   * The type of encryption that the source uses for the connection.
   *
   * @public
   */
  SourceEncryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  SourceEncryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * The type of the connected source endpoint.
   *
   * @public
   */
  SourceEndpointType?: SourceEndpointType | undefined;
}

/**
 * The connection details for a standard destination endpoint.
 *
 * @public
 */
export interface StandardDestinationEndpointConnectionDetails {
  /**
   * The IP address of the source that is connected to the destination endpoint.
   *
   * @public
   */
  SourceIpAddress?: string | undefined;

  /**
   * The port on which the source listens for the connection.
   *
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The type of encryption that the source uses for the connection.
   *
   * @public
   */
  SourceEncryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  SourceEncryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * The type of the connected source endpoint.
   *
   * @public
   */
  SourceEndpointType?: SourceEndpointType | undefined;
}

/**
 * The connection details for a destination endpoint. After the destination endpoint connects to a source endpoint, MediaConnect populates these details to describe the connected source. This is a union type, so exactly one of its members is set, depending on the destination endpoint type.
 *
 * @public
 */
export type DestinationEndpointConnectionDetails =
  | DestinationEndpointConnectionDetails.RouterInputMember
  | DestinationEndpointConnectionDetails.StandardMember
  | DestinationEndpointConnectionDetails.$UnknownMember;

/**
 * @public
 */
export namespace DestinationEndpointConnectionDetails {
  /**
   * The connection details for a standard destination endpoint.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardDestinationEndpointConnectionDetails;
    RouterInput?: never;
    $unknown?: never;
  }

  /**
   * The connection details for a destination endpoint that represents a router input.
   *
   * @public
   */
  export interface RouterInputMember {
    Standard?: never;
    RouterInput: RouterInputDestinationEndpointConnectionDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    RouterInput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardDestinationEndpointConnectionDetails) => T;
    RouterInput: (value: RouterInputDestinationEndpointConnectionDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A status message for a destination endpoint.
 *
 * @public
 */
export interface DestinationEndpointMessage {
  /**
   * The message code.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The message text.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * The cross-account sharing details for an endpoint that another account shares with this account.
 *
 * @public
 */
export interface ConsumedResourceShareDetails {
  /**
   * The ID of the Amazon Web Services account that owns the shared endpoint.
   *
   * @public
   */
  OwnerAccountId: string | undefined;
}

/**
 * The cross-account sharing details for an endpoint that this account owns and shares with other accounts.
 *
 * @public
 */
export interface OwnedResourceShareDetails {
  /**
   * The sharing state of the endpoint. Valid values include the following:
   *
   * - `SHARED` – The endpoint is shared with one or more accounts.
   * - `UNSHARED` – The endpoint is not shared with other accounts.
   *
   * @public
   */
  ShareState: ResourceShareState | undefined;
}

/**
 * The cross-account sharing details for an endpoint. Endpoints are shared through Resource Access Manager (RAM). This is a union type, so exactly one of its members is set: `owned` when this account owns the endpoint and shares it with other accounts, or `consumed` when this account consumes an endpoint that another account shares. To change how an endpoint is shared, use RAM.
 *
 * @public
 */
export type ResourceShareDetails =
  | ResourceShareDetails.ConsumedMember
  | ResourceShareDetails.OwnedMember
  | ResourceShareDetails.$UnknownMember;

/**
 * @public
 */
export namespace ResourceShareDetails {
  /**
   * The sharing details for an endpoint that this account owns and shares with other accounts through RAM.
   *
   * @public
   */
  export interface OwnedMember {
    Owned: OwnedResourceShareDetails;
    Consumed?: never;
    $unknown?: never;
  }

  /**
   * The sharing details for an endpoint that another account shares with this account through RAM.
   *
   * @public
   */
  export interface ConsumedMember {
    Owned?: never;
    Consumed: ConsumedResourceShareDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Owned?: never;
    Consumed?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Owned: (value: OwnedResourceShareDetails) => T;
    Consumed: (value: ConsumedResourceShareDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The details of a destination endpoint in MediaConnect, including its configuration, state, and connection details.
 *
 * @public
 */
export interface DestinationEndpoint {
  /**
   * The name of the destination endpoint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination endpoint.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the destination endpoint.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The description of the destination endpoint.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The name of the Amazon Web Services Region in which the destination endpoint is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone in which the destination endpoint is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which the destination endpoint is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The date and time when the destination endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time when the destination endpoint was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The entity that manages the lifecycle of the destination endpoint.
   *
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * The status messages for the destination endpoint.
   *
   * @public
   */
  Messages: DestinationEndpointMessage[] | undefined;

  /**
   * The type of the destination endpoint. Valid values include the following:
   *
   * - `STANDARD` – A destination endpoint that represents an external destination over a standard protocol, such as RTP, RIST, or SRT.
   * - `ROUTER_INPUT` – A destination endpoint that represents a router input.
   *
   * @public
   */
  DestinationType: DestinationEndpointType | undefined;

  /**
   * The configuration settings for the destination endpoint.
   *
   * @public
   */
  Configuration: DestinationEndpointConfiguration | undefined;

  /**
   * Indicates whether this account owns the destination endpoint or consumes it from another account through RAM.
   *
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * The cross-account sharing details for an endpoint. Endpoints are shared through Resource Access Manager (RAM). This is a union type, so exactly one of its members is set: `owned` when this account owns the endpoint and shares it with other accounts, or `consumed` when this account consumes an endpoint that another account shares. To change how an endpoint is shared, use RAM.
   *
   * @public
   */
  ResourceShareDetails: ResourceShareDetails | undefined;

  /**
   * The registration state of the destination endpoint. Valid values include the following:
   *
   * - `REGISTERED` – The destination endpoint is registered and ready to use.
   * - `REGISTERING` – MediaConnect is registering the destination endpoint.
   * - `DEREGISTERING` – MediaConnect is deregistering the destination endpoint.
   * - `REGISTRATION_FAILED` – MediaConnect couldn't register the destination endpoint.
   *
   * @public
   */
  RegistrationState: DestinationEndpointRegistrationState | undefined;

  /**
   * The connection details for the destination endpoint.
   *
   * @public
   */
  ConnectionDetails?: DestinationEndpointConnectionDetails | undefined;

  /**
   * The connection state of the destination endpoint. Valid values include the following:
   *
   * - `CONNECTED` – The destination endpoint is connected to a source endpoint.
   * - `DISCONNECTED` – The destination endpoint isn't connected to a source endpoint.
   * - `CONNECTING` – The destination endpoint is connecting to a source endpoint.
   * - `DISCONNECTING` – The destination endpoint is disconnecting from a source endpoint.
   *
   * @public
   */
  ConnectionState: DestinationEndpointConnectionState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint that is connected to the destination endpoint.
   *
   * @public
   */
  ConnectedSource?: string | undefined;

  /**
   * The type of decryption used for the destination endpoint connection.
   *
   * @public
   */
  DecryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  DecryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * The details of the resource that is associated with the destination endpoint.
   *
   * @public
   */
  AssociatedResourceDetails: DestinationEndpointAssociatedResourceDetails | undefined;

  /**
   * The tags associated with the destination endpoint. Each tag is a key-value pair.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * An error for a destination endpoint that MediaConnect couldn't retrieve in a `BatchGetDestinationEndpoint` request.
 *
 * @public
 */
export interface BatchGetDestinationEndpointError {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint that MediaConnect couldn't retrieve.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A description of the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetDestinationEndpointResponse {
  /**
   * The destination endpoints that MediaConnect successfully retrieved.
   *
   * @public
   */
  DestinationEndpoints: DestinationEndpoint[] | undefined;

  /**
   * The errors for any destination endpoints that MediaConnect couldn't retrieve.
   *
   * @public
   */
  Errors: BatchGetDestinationEndpointError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterInputRequest {
  /**
   * The Amazon Resource Names (ARNs) of the router inputs you want to retrieve information about.
   *
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * An error that occurred when retrieving multiple router inputs in the BatchGetRouterInput operation, including the ARN, error code, and error message.
 *
 * @public
 */
export interface BatchGetRouterInputError {
  /**
   * The Amazon Resource Name (ARN) of the router input for which the error occurred.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The error code associated with the error.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Configuration settings for a router input that is represented by a destination endpoint.
 *
 * @public
 */
export interface DestinationEndpointRouterInputConfiguration {
  /**
   * The entity that manages the lifecycle of the associated destination endpoint. Valid values include the following:
   *
   * - `MANAGED` – MediaConnect manages the lifecycle of the associated destination endpoint.
   * - `UNMANAGED` – You manage the lifecycle of the associated destination endpoint.
   *
   * @public
   */
  EndpointLifecycleManagement: EndpointLifecycle | undefined;

  /**
   * The type of transit decryption applied to the source content that this router input receives. Valid values include the following:
   *
   * - `SECRETS_MANAGER` – The decryption key or passphrase is stored in Secrets Manager.
   * - `AUTOMATIC` – MediaConnect determines the decryption key when the endpoint connects.
   *
   * @public
   */
  SourceTransitDecryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  SourceTransitDecryption: EndpointEncryptionConfiguration | undefined;
}

/**
 * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
 *
 * @public
 */
export interface RistRouterInputConfiguration {
  /**
   * The port number used for the RIST protocol in the router input configuration.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
   *
   * @public
   */
  RecoveryLatencyMilliseconds: number | undefined;
}

/**
 * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
 *
 * @public
 */
export interface RtpRouterInputConfiguration {
  /**
   * The port number used for the RTP protocol in the router input configuration.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The state of forward error correction for the RTP protocol in the router input configuration.
   *
   * @public
   */
  ForwardErrorCorrection?: ForwardErrorCorrectionState | undefined;
}

/**
 * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
 *
 * @public
 */
export interface SrtDecryptionConfiguration {
  /**
   * Specifies the encryption key configuration used for decrypting SRT streams, including the key source and associated credentials.
   *
   * @public
   */
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration | undefined;
}

/**
 * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
 *
 * @public
 */
export interface SrtCallerRouterInputConfiguration {
  /**
   * The source IP address for the SRT protocol in caller mode.
   *
   * @public
   */
  SourceAddress: string | undefined;

  /**
   * The source port number for the SRT protocol in caller mode.
   *
   * @public
   */
  SourcePort: number | undefined;

  /**
   * The minimum latency in milliseconds for the SRT protocol in caller mode.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * The stream ID for the SRT protocol in caller mode.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Specifies the decryption settings for an SRT caller input, including the encryption key configuration and associated parameters.
   *
   * @public
   */
  DecryptionConfiguration?: SrtDecryptionConfiguration | undefined;
}

/**
 * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
 *
 * @public
 */
export interface SrtListenerRouterInputConfiguration {
  /**
   * The port number for the SRT protocol in listener mode.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The minimum latency in milliseconds for the SRT protocol in listener mode.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * Specifies the decryption settings for an SRT listener input, including the encryption key configuration and associated parameters.
   *
   * @public
   */
  DecryptionConfiguration?: SrtDecryptionConfiguration | undefined;
}

/**
 * Protocol configuration settings for failover router inputs.
 *
 * @public
 */
export type FailoverRouterInputProtocolConfiguration =
  | FailoverRouterInputProtocolConfiguration.RistMember
  | FailoverRouterInputProtocolConfiguration.RtpMember
  | FailoverRouterInputProtocolConfiguration.SrtCallerMember
  | FailoverRouterInputProtocolConfiguration.SrtListenerMember
  | FailoverRouterInputProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FailoverRouterInputProtocolConfiguration {
  /**
   * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
   *
   * @public
   */
  export interface RistMember {
    Rist: RistRouterInputConfiguration;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
   *
   * @public
   */
  export interface SrtListenerMember {
    Rist?: never;
    SrtListener: SrtListenerRouterInputConfiguration;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
   *
   * @public
   */
  export interface SrtCallerMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller: SrtCallerRouterInputConfiguration;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
   *
   * @public
   */
  export interface RtpMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp: RtpRouterInputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Rist: (value: RistRouterInputConfiguration) => T;
    SrtListener: (value: SrtListenerRouterInputConfiguration) => T;
    SrtCaller: (value: SrtCallerRouterInputConfiguration) => T;
    Rtp: (value: RtpRouterInputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration settings for a failover router input that allows switching between two input sources.
 *
 * @public
 */
export interface FailoverRouterInputConfiguration {
  /**
   * The ARN of the network interface to use for this failover router input.
   *
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * A list of exactly two protocol configurations for the failover input sources. Both must use the same protocol type.
   *
   * @public
   */
  ProtocolConfigurations: FailoverRouterInputProtocolConfiguration[] | undefined;

  /**
   * The mode for determining source priority in failover configurations.
   *
   * @public
   */
  SourcePriorityMode: FailoverInputSourcePriorityMode | undefined;

  /**
   * The index (0 or 1) that specifies which source in the protocol configurations list is currently active. Used to control which of the two failover sources is currently selected. This field is ignored when sourcePriorityMode is set to NO_PRIORITY
   *
   * @public
   */
  PrimarySourceIndex?: number | undefined;
}

/**
 * Configuration settings for connecting a router input to a flow output.
 *
 * To connect the router input to the flow output, provide both `flowArn` and `flowOutputArn`. To disconnect it, call the update operation and omit both fields while keeping this configuration object.
 *
 * > **Note:** You can't change `sourceTransitDecryption` while the router input is connected to a flow output. To change it, first disconnect the router input, then update the decryption.
 *
 * @public
 */
export interface MediaConnectFlowRouterInputConfiguration {
  /**
   * The ARN of the flow to connect to.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN of the flow output to connect to this router input.
   *
   * @public
   */
  FlowOutputArn?: string | undefined;

  /**
   * The decryption configuration for the flow source when connected to this router input.
   *
   * @public
   */
  SourceTransitDecryption: FlowTransitEncryption | undefined;
}

/**
 * Configuration settings for the MediaLive transit encryption key.
 *
 * @public
 */
export type MediaLiveTransitEncryptionKeyConfiguration =
  | MediaLiveTransitEncryptionKeyConfiguration.AutomaticMember
  | MediaLiveTransitEncryptionKeyConfiguration.SecretsManagerMember
  | MediaLiveTransitEncryptionKeyConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MediaLiveTransitEncryptionKeyConfiguration {
  /**
   * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
   *
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
   *
   * @public
   */
  export interface AutomaticMember {
    SecretsManager?: never;
    Automatic: AutomaticEncryptionKeyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretsManager?: never;
    Automatic?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecretsManager: (value: SecretsManagerEncryptionKeyConfiguration) => T;
    Automatic: (value: AutomaticEncryptionKeyConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.
 *
 * @public
 */
export interface MediaLiveTransitEncryption {
  /**
   * The type of encryption key to use for MediaLive transit encryption.
   *
   * @public
   */
  EncryptionKeyType?: MediaLiveTransitEncryptionKeyType | undefined;

  /**
   * The configuration details for the MediaLive encryption key.
   *
   * @public
   */
  EncryptionKeyConfiguration: MediaLiveTransitEncryptionKeyConfiguration | undefined;
}

/**
 * Configuration settings for connecting a router input to a MediaLive channel output.
 *
 * To connect the router input to the MediaLive channel output, provide all three of `mediaLiveChannelArn`, `mediaLivePipelineId`, and `mediaLiveChannelOutputName`. To disconnect it, call the update operation and omit all three fields while keeping this configuration object.
 *
 * > **Note:** You can't change `sourceTransitDecryption` while the router input is connected to a MediaLive channel output. To change it, first disconnect the router input, then update the decryption.
 *
 * @public
 */
export interface MediaLiveChannelRouterInputConfiguration {
  /**
   * The ARN of the MediaLive channel to connect to this router input.
   *
   * @public
   */
  MediaLiveChannelArn?: string | undefined;

  /**
   * The index of the MediaLive pipeline to connect to this router input.
   *
   * @public
   */
  MediaLivePipelineId?: MediaLiveChannelPipelineId | undefined;

  /**
   * The name of the MediaLive channel output to connect to this router input.
   *
   * @public
   */
  MediaLiveChannelOutputName?: string | undefined;

  /**
   * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.
   *
   * @public
   */
  SourceTransitDecryption: MediaLiveTransitEncryption | undefined;
}

/**
 * Protocol configuration settings for merge router inputs.
 *
 * @public
 */
export type MergeRouterInputProtocolConfiguration =
  | MergeRouterInputProtocolConfiguration.RistMember
  | MergeRouterInputProtocolConfiguration.RtpMember
  | MergeRouterInputProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MergeRouterInputProtocolConfiguration {
  /**
   * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
   *
   * @public
   */
  export interface RtpMember {
    Rtp: RtpRouterInputConfiguration;
    Rist?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
   *
   * @public
   */
  export interface RistMember {
    Rtp?: never;
    Rist: RistRouterInputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Rtp?: never;
    Rist?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Rtp: (value: RtpRouterInputConfiguration) => T;
    Rist: (value: RistRouterInputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration settings for a merge router input that combines two input sources.
 *
 * @public
 */
export interface MergeRouterInputConfiguration {
  /**
   * The ARN of the network interface to use for this merge router input.
   *
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * A list of exactly two protocol configurations for the merge input sources. Both must use the same protocol type.
   *
   * @public
   */
  ProtocolConfigurations: MergeRouterInputProtocolConfiguration[] | undefined;

  /**
   * The time window in milliseconds for merging the two input sources.
   *
   * @public
   */
  MergeRecoveryWindowMilliseconds: number | undefined;
}

/**
 * The protocol configuration settings for a router input.
 *
 * @public
 */
export type RouterInputProtocolConfiguration =
  | RouterInputProtocolConfiguration.RistMember
  | RouterInputProtocolConfiguration.RtpMember
  | RouterInputProtocolConfiguration.SrtCallerMember
  | RouterInputProtocolConfiguration.SrtListenerMember
  | RouterInputProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterInputProtocolConfiguration {
  /**
   * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
   *
   * @public
   */
  export interface RistMember {
    Rist: RistRouterInputConfiguration;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
   *
   * @public
   */
  export interface SrtListenerMember {
    Rist?: never;
    SrtListener: SrtListenerRouterInputConfiguration;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
   *
   * @public
   */
  export interface SrtCallerMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller: SrtCallerRouterInputConfiguration;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
   *
   * @public
   */
  export interface RtpMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp: RtpRouterInputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Rist: (value: RistRouterInputConfiguration) => T;
    SrtListener: (value: SrtListenerRouterInputConfiguration) => T;
    SrtCaller: (value: SrtCallerRouterInputConfiguration) => T;
    Rtp: (value: RtpRouterInputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.
 *
 * @public
 */
export interface StandardRouterInputConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the network interface associated with the standard router input.
   *
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * The configuration settings for the protocol used by the standard router input.
   *
   * @public
   */
  ProtocolConfiguration: RouterInputProtocolConfiguration | undefined;

  /**
   * The protocol used by the standard router input.
   *
   * @public
   */
  Protocol?: RouterInputProtocol | undefined;
}

/**
 * The configuration settings for a router input.
 *
 * @public
 */
export type RouterInputConfiguration =
  | RouterInputConfiguration.DestinationEndpointMember
  | RouterInputConfiguration.FailoverMember
  | RouterInputConfiguration.MediaConnectFlowMember
  | RouterInputConfiguration.MediaLiveChannelMember
  | RouterInputConfiguration.MergeMember
  | RouterInputConfiguration.StandardMember
  | RouterInputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterInputConfiguration {
  /**
   * Configuration settings for a router input that is represented by a destination endpoint.
   *
   * @public
   */
  export interface DestinationEndpointMember {
    DestinationEndpoint: DestinationEndpointRouterInputConfiguration;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.
   *
   * @public
   */
  export interface StandardMember {
    DestinationEndpoint?: never;
    Standard: StandardRouterInputConfiguration;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for connecting a router input to a MediaLive channel output.
   *
   * To connect the router input to the MediaLive channel output, provide all three of `mediaLiveChannelArn`, `mediaLivePipelineId`, and `mediaLiveChannelOutputName`. To disconnect it, call the update operation and omit all three fields while keeping this configuration object.
   *
   * > **Note:** You can't change `sourceTransitDecryption` while the router input is connected to a MediaLive channel output. To change it, first disconnect the router input, then update the decryption.
   *
   * @public
   */
  export interface MediaLiveChannelMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel: MediaLiveChannelRouterInputConfiguration;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for a failover router input that allows switching between two input sources.
   *
   * @public
   */
  export interface FailoverMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover: FailoverRouterInputConfiguration;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for connecting a router input to a flow output.
   *
   * To connect the router input to the flow output, provide both `flowArn` and `flowOutputArn`. To disconnect it, call the update operation and omit both fields while keeping this configuration object.
   *
   * > **Note:** You can't change `sourceTransitDecryption` while the router input is connected to a flow output. To change it, first disconnect the router input, then update the decryption.
   *
   * @public
   */
  export interface MediaConnectFlowMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow: MediaConnectFlowRouterInputConfiguration;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for a merge router input that combines two input sources.
   *
   * @public
   */
  export interface MergeMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge: MergeRouterInputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DestinationEndpoint: (value: DestinationEndpointRouterInputConfiguration) => T;
    Standard: (value: StandardRouterInputConfiguration) => T;
    MediaLiveChannel: (value: MediaLiveChannelRouterInputConfiguration) => T;
    Failover: (value: FailoverRouterInputConfiguration) => T;
    MediaConnectFlow: (value: MediaConnectFlowRouterInputConfiguration) => T;
    Merge: (value: MergeRouterInputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Detects black frames in the router input's source content and reports them through a CloudWatch metric, an EventBridge event, and a router input message.
 *
 * @public
 */
export interface BlackFramesConfiguration {
  /**
   * Indicates whether black frames detection is enabled or disabled.
   *
   * @public
   */
  State: ContentQualityAnalysisState | undefined;

  /**
   * The number of consecutive seconds of black frames that MediaConnect must detect before it reports an issue.
   *
   * @public
   */
  ThresholdSeconds: number | undefined;
}

/**
 * Detects frozen video frames in the router input's source content and reports them through a CloudWatch metric, an EventBridge event, and a router input message.
 *
 * @public
 */
export interface FrozenFramesConfiguration {
  /**
   * Indicates whether frozen frames detection is enabled or disabled.
   *
   * @public
   */
  State: ContentQualityAnalysisState | undefined;

  /**
   * The number of consecutive seconds of a frozen frame that MediaConnect must detect before it reports an issue.
   *
   * @public
   */
  ThresholdSeconds: number | undefined;
}

/**
 * Detects silent audio in the router input's source content and reports it through a CloudWatch metric, an EventBridge event, and a router input message.
 *
 * @public
 */
export interface SilentAudioConfiguration {
  /**
   * Indicates whether silent audio detection is enabled or disabled.
   *
   * @public
   */
  State: ContentQualityAnalysisState | undefined;

  /**
   * The number of consecutive seconds of silence that MediaConnect must detect before it reports an issue.
   *
   * @public
   */
  ThresholdSeconds: number | undefined;
}

/**
 * Configures the content quality analysis features for the router input.
 *
 * @public
 */
export interface ContentQualityAnalysisFeatureConfiguration {
  /**
   * Settings for black frames detection.
   *
   * @public
   */
  BlackFrames?: BlackFramesConfiguration | undefined;

  /**
   * Settings for frozen frames detection.
   *
   * @public
   */
  FrozenFrames?: FrozenFramesConfiguration | undefined;

  /**
   * Settings for silent audio detection.
   *
   * @public
   */
  SilentAudio?: SilentAudioConfiguration | undefined;
}

/**
 * The content quality analysis configuration for the router input.
 *
 * > **Important:** The content quality analysis feature only monitors the first video stream and the first audio stream it encounters within the router input source.
 *
 * @public
 */
export type RouterContentQualityAnalysisConfiguration =
  | RouterContentQualityAnalysisConfiguration.ContentLevelMember
  | RouterContentQualityAnalysisConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterContentQualityAnalysisConfiguration {
  /**
   * The content quality analysis configuration.
   *
   * @public
   */
  export interface ContentLevelMember {
    ContentLevel: ContentQualityAnalysisFeatureConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ContentLevel?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ContentLevel: (value: ContentQualityAnalysisFeatureConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration settings for default maintenance scheduling.
 *
 * @public
 */
export interface DefaultMaintenanceConfiguration {}

/**
 * Configuration for preferred day and time maintenance settings.
 *
 * @public
 */
export interface PreferredDayTimeMaintenanceConfiguration {
  /**
   * The preferred day for maintenance operations.
   *
   * @public
   */
  Day: Day | undefined;

  /**
   * The preferred time for maintenance operations.
   *
   * @public
   */
  Time: string | undefined;
}

/**
 * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
 *
 * @public
 */
export type MaintenanceConfiguration =
  | MaintenanceConfiguration.DefaultMember
  | MaintenanceConfiguration.PreferredDayTimeMember
  | MaintenanceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace MaintenanceConfiguration {
  /**
   * Preferred day and time maintenance configuration settings.
   *
   * @public
   */
  export interface PreferredDayTimeMember {
    PreferredDayTime: PreferredDayTimeMaintenanceConfiguration;
    Default?: never;
    $unknown?: never;
  }

  /**
   * Default maintenance configuration settings.
   *
   * @public
   */
  export interface DefaultMember {
    PreferredDayTime?: never;
    Default: DefaultMaintenanceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PreferredDayTime?: never;
    Default?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PreferredDayTime: (value: PreferredDayTimeMaintenanceConfiguration) => T;
    Default: (value: DefaultMaintenanceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines a specific time window for maintenance operations.
 *
 * @public
 */
export interface WindowMaintenanceSchedule {
  /**
   * The start time of the maintenance window.
   *
   * @public
   */
  Start: Date | undefined;

  /**
   * The end time of the maintenance window.
   *
   * @public
   */
  End: Date | undefined;

  /**
   * The date and time when the maintenance window is scheduled to occur.
   *
   * @public
   */
  ScheduledTime: Date | undefined;
}

/**
 * The details of the maintenance schedule.
 *
 * @public
 */
export type MaintenanceSchedule =
  | MaintenanceSchedule.WindowMember
  | MaintenanceSchedule.$UnknownMember;

/**
 * @public
 */
export namespace MaintenanceSchedule {
  /**
   * Defines a specific time window for maintenance operations.
   *
   * @public
   */
  export interface WindowMember {
    Window: WindowMaintenanceSchedule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Window?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Window: (value: WindowMaintenanceSchedule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration details for a router input stream that is represented by a destination endpoint.
 *
 * @public
 */
export interface DestinationEndpointRouterInputStreamDetails {}

/**
 * Configuration details for an indexed stream in a failover router input setup.
 *
 * @public
 */
export interface FailoverRouterInputIndexedStreamDetails {
  /**
   * The index number (0 or 1) assigned to this source in the failover configuration.
   *
   * @public
   */
  SourceIndex: number | undefined;

  /**
   * The IP address of the source for this indexed stream.
   *
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * Configuration details for a failover router input that can automatically switch between two sources.
 *
 * @public
 */
export interface FailoverRouterInputStreamDetails {
  /**
   * Configuration details for the primary source (index 0) in the failover setup.
   *
   * @public
   */
  SourceIndexZeroStreamDetails: FailoverRouterInputIndexedStreamDetails | undefined;

  /**
   * Configuration details for the secondary source (index 1) in the failover setup.
   *
   * @public
   */
  SourceIndexOneStreamDetails: FailoverRouterInputIndexedStreamDetails | undefined;
}

/**
 * Configuration details for a MediaConnect flow when used as a router input source.
 *
 * @public
 */
export interface MediaConnectFlowRouterInputStreamDetails {}

/**
 * Configuration details for a MediaLive channel when used as a router input source.
 *
 * @public
 */
export interface MediaLiveChannelRouterInputStreamDetails {}

/**
 * Configuration details for an indexed stream in a merge router input setup.
 *
 * @public
 */
export interface MergeRouterInputIndexedStreamDetails {
  /**
   * The index number (0 or 1) assigned to this source in the merge configuration.
   *
   * @public
   */
  SourceIndex: number | undefined;

  /**
   * The IP address of the source for this indexed stream in the merge setup.
   *
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * Configuration details for a merge router input that combines two input sources.
 *
 * @public
 */
export interface MergeRouterInputStreamDetails {
  /**
   * Configuration details for the first source (index 0) in the merge setup.
   *
   * @public
   */
  SourceIndexZeroStreamDetails: MergeRouterInputIndexedStreamDetails | undefined;

  /**
   * Configuration details for the second source (index 1) in the merge setup.
   *
   * @public
   */
  SourceIndexOneStreamDetails: MergeRouterInputIndexedStreamDetails | undefined;
}

/**
 * Configuration details for a standard router input stream type.
 *
 * @public
 */
export interface StandardRouterInputStreamDetails {
  /**
   * The source IP address for the standard router input stream.
   *
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * Configuration details for the router input stream.
 *
 * @public
 */
export type RouterInputStreamDetails =
  | RouterInputStreamDetails.DestinationEndpointMember
  | RouterInputStreamDetails.FailoverMember
  | RouterInputStreamDetails.MediaConnectFlowMember
  | RouterInputStreamDetails.MediaLiveChannelMember
  | RouterInputStreamDetails.MergeMember
  | RouterInputStreamDetails.StandardMember
  | RouterInputStreamDetails.$UnknownMember;

/**
 * @public
 */
export namespace RouterInputStreamDetails {
  /**
   * Configuration details for a router input stream that is represented by a destination endpoint.
   *
   * @public
   */
  export interface DestinationEndpointMember {
    DestinationEndpoint: DestinationEndpointRouterInputStreamDetails;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a standard router input stream type.
   *
   * @public
   */
  export interface StandardMember {
    DestinationEndpoint?: never;
    Standard: StandardRouterInputStreamDetails;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a MediaLive channel when used as a router input source.
   *
   * @public
   */
  export interface MediaLiveChannelMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel: MediaLiveChannelRouterInputStreamDetails;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a failover router input that can automatically switch between two sources.
   *
   * @public
   */
  export interface FailoverMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover: FailoverRouterInputStreamDetails;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a MediaConnect flow when used as a router input source.
   *
   * @public
   */
  export interface MediaConnectFlowMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow: MediaConnectFlowRouterInputStreamDetails;
    Merge?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a merge router input that combines two input sources.
   *
   * @public
   */
  export interface MergeMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge: MergeRouterInputStreamDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DestinationEndpoint?: never;
    Standard?: never;
    MediaLiveChannel?: never;
    Failover?: never;
    MediaConnectFlow?: never;
    Merge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DestinationEndpoint: (value: DestinationEndpointRouterInputStreamDetails) => T;
    Standard: (value: StandardRouterInputStreamDetails) => T;
    MediaLiveChannel: (value: MediaLiveChannelRouterInputStreamDetails) => T;
    Failover: (value: FailoverRouterInputStreamDetails) => T;
    MediaConnectFlow: (value: MediaConnectFlowRouterInputStreamDetails) => T;
    Merge: (value: MergeRouterInputStreamDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the configuration settings for transit encryption keys.
 *
 * @public
 */
export type RouterInputTransitEncryptionKeyConfiguration =
  | RouterInputTransitEncryptionKeyConfiguration.AutomaticMember
  | RouterInputTransitEncryptionKeyConfiguration.SecretsManagerMember
  | RouterInputTransitEncryptionKeyConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterInputTransitEncryptionKeyConfiguration {
  /**
   * The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.
   *
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
   *
   * @public
   */
  export interface AutomaticMember {
    SecretsManager?: never;
    Automatic: AutomaticEncryptionKeyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretsManager?: never;
    Automatic?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecretsManager: (value: SecretsManagerEncryptionKeyConfiguration) => T;
    Automatic: (value: AutomaticEncryptionKeyConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The transit encryption settings for a router input.
 *
 * @public
 */
export interface RouterInputTransitEncryption {
  /**
   * Specifies the type of encryption key to use for transit encryption.
   *
   * @public
   */
  EncryptionKeyType?: RouterInputTransitEncryptionKeyType | undefined;

  /**
   * Contains the configuration details for the encryption key used in transit encryption, including the key source and associated parameters.
   *
   * @public
   */
  EncryptionKeyConfiguration: RouterInputTransitEncryptionKeyConfiguration | undefined;
}

/**
 * A router input in AWS Elemental MediaConnect. A router input is a source of media content that can be routed to one or more router outputs.
 *
 * @public
 */
export interface RouterInput {
  /**
   * The name of the router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router input.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the router input.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current state of the router input.
   *
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * The type of the router input.
   *
   * @public
   */
  InputType: RouterInputType | undefined;

  /**
   * The configuration settings for a router input.
   *
   * @public
   */
  Configuration: RouterInputConfiguration | undefined;

  /**
   * The number of router outputs associated with the router input.
   *
   * @public
   */
  RoutedOutputs: number | undefined;

  /**
   * The maximum number of outputs that can be simultaneously routed to this input.
   *
   * @public
   */
  MaximumRoutedOutputs?: number | undefined;

  /**
   * The Amazon Web Services Region where the router input is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone of the router input.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The maximum bitrate for the router input.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * The tier level for the router input. The tier sets the maximum bitrate, in Mbps, for the router input. Valid values include the following:
   *
   * - `INPUT_20` – 20 Mbps
   * - `INPUT_50` – 50 Mbps
   * - `INPUT_100` – 100 Mbps
   * - `INPUT_250` – 250 Mbps
   * - `INPUT_500` – 500 Mbps
   *
   * The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.
   *
   * @public
   */
  Tier: RouterInputTier | undefined;

  /**
   * Indicates whether the router input is configured for Regional or global routing.
   *
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * The timestamp when the router input was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the router input was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The messages associated with the router input.
   *
   * @public
   */
  Messages: RouterInputMessage[] | undefined;

  /**
   * The transit encryption settings for a router input.
   *
   * @public
   */
  TransitEncryption: RouterInputTransitEncryption | undefined;

  /**
   * Key-value pairs that can be used to tag and organize this router input.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * Configuration details for the router input stream.
   *
   * @public
   */
  StreamDetails: RouterInputStreamDetails | undefined;

  /**
   * The IP address of the router input.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The type of maintenance configuration applied to this router input.
   *
   * @public
   */
  MaintenanceType: MaintenanceType | undefined;

  /**
   * The maintenance configuration settings applied to this router input.
   *
   * @public
   */
  MaintenanceConfiguration: MaintenanceConfiguration | undefined;

  /**
   * The type of maintenance schedule currently in effect for this router input.
   *
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * The current maintenance schedule details for this router input.
   *
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The type of content quality analysis applied to the router input.
   *
   * @public
   */
  ContentQualityAnalysisType: RouterContentQualityAnalysisType | undefined;

  /**
   * The content quality analysis configuration for the router input.
   *
   * @public
   */
  ContentQualityAnalysisConfiguration: RouterContentQualityAnalysisConfiguration | undefined;

  /**
   * The Amazon Resource Names (ARNs) of one or more destination endpoints that are associated with this router input.
   *
   * @public
   */
  AssociatedDestinationEndpointArns?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterInputResponse {
  /**
   * An array of router inputs that were successfully retrieved.
   *
   * @public
   */
  RouterInputs: RouterInput[] | undefined;

  /**
   * An array of errors that occurred when retrieving the requested router inputs.
   *
   * @public
   */
  Errors: BatchGetRouterInputError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterNetworkInterfaceRequest {
  /**
   * The Amazon Resource Names (ARNs) of the router network interfaces you want to retrieve information about.
   *
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * An error that occurred when retrieving multiple router network interfaces in the BatchGetRouterNetworkInterface operation, including the ARN, error code, and error message.
 *
 * @public
 */
export interface BatchGetRouterNetworkInterfaceError {
  /**
   * The Amazon Resource Name (ARN) of the router network interface for which the error occurred.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The error code associated with the error.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * A rule that allows a specific CIDR block to access the public router network interface.
 *
 * @public
 */
export interface PublicRouterNetworkInterfaceRule {
  /**
   * The CIDR block that is allowed to access the public router network interface.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * The configuration settings for a public router network interface, including the list of allowed CIDR blocks.
 *
 * @public
 */
export interface PublicRouterNetworkInterfaceConfiguration {
  /**
   * The list of allowed CIDR blocks for the public router network interface.
   *
   * @public
   */
  AllowRules: PublicRouterNetworkInterfaceRule[] | undefined;
}

/**
 * The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.
 *
 * @public
 */
export interface VpcRouterNetworkInterfaceConfiguration {
  /**
   * The IDs of the security groups to associate with the router network interface within the VPC.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnet within the VPC to associate the router network interface with.
   *
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * The configuration settings for a router network interface.
 *
 * @public
 */
export type RouterNetworkInterfaceConfiguration =
  | RouterNetworkInterfaceConfiguration.PublicMember
  | RouterNetworkInterfaceConfiguration.VpcMember
  | RouterNetworkInterfaceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterNetworkInterfaceConfiguration {
  /**
   * The configuration settings for a public router network interface, including the list of allowed CIDR blocks.
   *
   * @public
   */
  export interface PublicMember {
    Public: PublicRouterNetworkInterfaceConfiguration;
    Vpc?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.
   *
   * @public
   */
  export interface VpcMember {
    Public?: never;
    Vpc: VpcRouterNetworkInterfaceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Public?: never;
    Vpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Public: (value: PublicRouterNetworkInterfaceConfiguration) => T;
    Vpc: (value: VpcRouterNetworkInterfaceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A router network interface in AWS Elemental MediaConnect. A router network interface is a network interface that can be associated with one or more router inputs and outputs.
 *
 * @public
 */
export interface RouterNetworkInterface {
  /**
   * The name of the router network interface.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router network interface.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the router network interface.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current state of the router network interface.
   *
   * @public
   */
  State: RouterNetworkInterfaceState | undefined;

  /**
   * The type of the router network interface.
   *
   * @public
   */
  NetworkInterfaceType: RouterNetworkInterfaceType | undefined;

  /**
   * The configuration settings for a router network interface.
   *
   * @public
   */
  Configuration: RouterNetworkInterfaceConfiguration | undefined;

  /**
   * The number of router outputs associated with the network interface.
   *
   * @public
   */
  AssociatedOutputCount: number | undefined;

  /**
   * The number of router inputs associated with the network interface.
   *
   * @public
   */
  AssociatedInputCount: number | undefined;

  /**
   * The Amazon Web Services Region where the router network interface is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The timestamp when the router network interface was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the router network interface was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * Key-value pairs that can be used to tag and organize this router network interface.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterNetworkInterfaceResponse {
  /**
   * An array of router network interfaces that were successfully retrieved.
   *
   * @public
   */
  RouterNetworkInterfaces: RouterNetworkInterface[] | undefined;

  /**
   * An array of errors that occurred when retrieving the requested router network interfaces.
   *
   * @public
   */
  Errors: BatchGetRouterNetworkInterfaceError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterOutputRequest {
  /**
   * The Amazon Resource Names (ARNs) of the router outputs you want to retrieve information about.
   *
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * An error that occurred when retrieving multiple router outputs in the BatchGetRouterOutput operation, including the ARN, error code, and error message.
 *
 * @public
 */
export interface BatchGetRouterOutputError {
  /**
   * The Amazon Resource Name (ARN) of the router output for which the error occurred.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The error code associated with the error.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Configuration settings for connecting a router output to a MediaConnect flow source.
 *
 * To connect the router output to the flow source, provide both `flowArn` and `flowSourceArn`. To disconnect it, call the update operation and omit both fields while keeping this configuration object.
 *
 * > **Note:** You can't change `destinationTransitEncryption` while the router output is connected to a flow source. To change it, first disconnect the router output, then update the encryption.
 *
 * @public
 */
export interface MediaConnectFlowRouterOutputConfiguration {
  /**
   * The ARN of the flow to connect to this router output.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN of the flow source to connect to this router output.
   *
   * @public
   */
  FlowSourceArn?: string | undefined;

  /**
   * The encryption configuration for the flow destination when connected to this router output.
   *
   * @public
   */
  DestinationTransitEncryption: FlowTransitEncryption | undefined;
}

/**
 * Configuration settings for connecting a router output to a MediaLive input.
 *
 * To connect the router output to the MediaLive input, provide both `mediaLiveInputArn` and `mediaLivePipelineId`. To disconnect it, call the update operation and omit both fields while keeping this configuration object.
 *
 * > **Note:** You can't change `destinationTransitEncryption` while the router output is connected to a MediaLive input. To change it, first disconnect the router output, then update the encryption.
 *
 * @public
 */
export interface MediaLiveInputRouterOutputConfiguration {
  /**
   * The ARN of the MediaLive input to connect to this router output.
   *
   * @public
   */
  MediaLiveInputArn?: string | undefined;

  /**
   * The index of the MediaLive pipeline to connect to this router output.
   *
   * @public
   */
  MediaLivePipelineId?: MediaLiveInputPipelineId | undefined;

  /**
   * The encryption configuration for the MediaLive input when connected to this router output.
   *
   * @public
   */
  DestinationTransitEncryption: MediaLiveTransitEncryption | undefined;
}

/**
 * Configuration settings for a router output that is represented by a source endpoint.
 *
 * @public
 */
export interface SourceEndpointRouterOutputConfiguration {
  /**
   * The entity that manages the lifecycle of the associated source endpoint. Valid values include the following:
   *
   * - `MANAGED` – MediaConnect manages the lifecycle of the associated source endpoint.
   * - `UNMANAGED` – You manage the lifecycle of the associated source endpoint.
   *
   * @public
   */
  EndpointLifecycleManagement: EndpointLifecycle | undefined;

  /**
   * The type of transit encryption applied to the destination content that this router output sends. Valid values include the following:
   *
   * - `SECRETS_MANAGER` – The encryption key or passphrase is stored in Secrets Manager.
   * - `AUTOMATIC` – MediaConnect determines the encryption key when the endpoint connects.
   *
   * @public
   */
  DestinationTransitEncryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  DestinationTransitEncryption: EndpointEncryptionConfiguration | undefined;
}

/**
 * The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.
 *
 * @public
 */
export interface RistRouterOutputConfiguration {
  /**
   * The destination IP address for the RIST protocol in the router output configuration.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The destination port number for the RIST protocol in the router output configuration.
   *
   * @public
   */
  DestinationPort: number | undefined;
}

/**
 * The TLS encryption configuration for destinations that present a certificate from a publicly trusted certificate authority. This type does not require any additional settings.
 *
 * @public
 */
export interface PublicTlsEncryptionConfiguration {}

/**
 * The configuration settings for TLS encryption.
 *
 * @public
 */
export type TlsEncryptionConfiguration =
  | TlsEncryptionConfiguration.PublicMember
  | TlsEncryptionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TlsEncryptionConfiguration {
  /**
   * The TLS encryption configuration that validates the destination by using a publicly trusted certificate authority.
   *
   * @public
   */
  export interface PublicMember {
    Public: PublicTlsEncryptionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Public?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Public: (value: PublicTlsEncryptionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Transport Layer Security (TLS) encryption settings used to establish a secure connection to a destination.
 *
 * @public
 */
export interface TlsEncryption {
  /**
   * The type of TLS encryption to use for the connection.
   *
   * @public
   */
  EncryptionType?: TlsEncryptionType | undefined;

  /**
   * The configuration settings for the specified TLS encryption type.
   *
   * @public
   */
  EncryptionConfiguration: TlsEncryptionConfiguration | undefined;
}

/**
 * The configuration settings for a router output that pushes a stream to a destination using the RTMP (Real-Time Messaging Protocol) protocol, or RTMPS (RTMP over TLS) when TLS encryption is specified. These settings include the destination address and port, the application and stream names, and optional TLS encryption configuration.
 *
 * @public
 */
export interface RtmpPushRouterOutputConfiguration {
  /**
   * The IP address or hostname of the destination RTMP server that the router output pushes the stream to. Provide only the server address; specify the application and stream names separately.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The TCP port on the destination RTMP server. For RTMP, valid values range from `1024` to `65535`. For RTMPS (RTMP over TLS), valid values are `443` or `1024` to `65535`. RTMP typically uses port `1935`, and RTMPS typically uses port `443`.
   *
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The name of the RTMP application on the destination server. Together with the stream name, the application name forms the RTMP URL path, in the pattern `rtmp://destinationAddress/applicationName/streamName`.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the RTMP stream that the output publishes to the destination application. The stream name forms the final segment of the RTMP URL path.
   *
   * @public
   */
  StreamName: string | undefined;

  /**
   * The TLS encryption settings for the output. When you specify these settings, the output uses RTMPS (RTMP over TLS) to establish a secure, encrypted connection to the destination server.
   *
   * @public
   */
  TlsEncryption?: TlsEncryption | undefined;
}

/**
 * The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.
 *
 * @public
 */
export interface RtpRouterOutputConfiguration {
  /**
   * The destination IP address for the RTP protocol in the router output configuration.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The destination port number for the RTP protocol in the router output configuration.
   *
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The state of forward error correction for the RTP protocol in the router output configuration.
   *
   * @public
   */
  ForwardErrorCorrection?: ForwardErrorCorrectionState | undefined;
}

/**
 * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
 *
 * @public
 */
export interface SrtEncryptionConfiguration {
  /**
   * Specifies the encryption key configuration used for encrypting SRT streams, including the key source and associated credentials.
   *
   * @public
   */
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration | undefined;
}

/**
 * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.
 *
 * @public
 */
export interface SrtCallerRouterOutputConfiguration {
  /**
   * The destination IP address for the SRT protocol in caller mode.
   *
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * The destination port number for the SRT protocol in caller mode.
   *
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The minimum latency in milliseconds for the SRT protocol in caller mode.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * The stream ID for the SRT protocol in caller mode.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * Defines the encryption settings for an SRT caller output, including the encryption key configuration and associated parameters.
   *
   * @public
   */
  EncryptionConfiguration?: SrtEncryptionConfiguration | undefined;
}

/**
 * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.
 *
 * @public
 */
export interface SrtListenerRouterOutputConfiguration {
  /**
   * The port number for the SRT protocol in listener mode.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The minimum latency in milliseconds for the SRT protocol in listener mode.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * Defines the encryption settings for an SRT listener output, including the encryption key configuration and associated parameters.
   *
   * @public
   */
  EncryptionConfiguration?: SrtEncryptionConfiguration | undefined;
}

/**
 * The protocol configuration settings for a router output.
 *
 * @public
 */
export type RouterOutputProtocolConfiguration =
  | RouterOutputProtocolConfiguration.RistMember
  | RouterOutputProtocolConfiguration.RtmpPushMember
  | RouterOutputProtocolConfiguration.RtpMember
  | RouterOutputProtocolConfiguration.SrtCallerMember
  | RouterOutputProtocolConfiguration.SrtListenerMember
  | RouterOutputProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterOutputProtocolConfiguration {
  /**
   * The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.
   *
   * @public
   */
  export interface RistMember {
    Rist: RistRouterOutputConfiguration;
    SrtListener?: never;
    RtmpPush?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.
   *
   * @public
   */
  export interface SrtListenerMember {
    Rist?: never;
    SrtListener: SrtListenerRouterOutputConfiguration;
    RtmpPush?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router output that pushes a stream to a destination using the RTMP (Real-Time Messaging Protocol) protocol, or RTMPS (RTMP over TLS) when TLS encryption is specified. These settings include the destination address and port, the application and stream names, and optional TLS encryption configuration.
   *
   * @public
   */
  export interface RtmpPushMember {
    Rist?: never;
    SrtListener?: never;
    RtmpPush: RtmpPushRouterOutputConfiguration;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.
   *
   * @public
   */
  export interface SrtCallerMember {
    Rist?: never;
    SrtListener?: never;
    RtmpPush?: never;
    SrtCaller: SrtCallerRouterOutputConfiguration;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.
   *
   * @public
   */
  export interface RtpMember {
    Rist?: never;
    SrtListener?: never;
    RtmpPush?: never;
    SrtCaller?: never;
    Rtp: RtpRouterOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Rist?: never;
    SrtListener?: never;
    RtmpPush?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Rist: (value: RistRouterOutputConfiguration) => T;
    SrtListener: (value: SrtListenerRouterOutputConfiguration) => T;
    RtmpPush: (value: RtmpPushRouterOutputConfiguration) => T;
    SrtCaller: (value: SrtCallerRouterOutputConfiguration) => T;
    Rtp: (value: RtpRouterOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.
 *
 * @public
 */
export interface StandardRouterOutputConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the network interface associated with the standard router output.
   *
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * The configuration settings for the protocol used by the standard router output.
   *
   * @public
   */
  ProtocolConfiguration: RouterOutputProtocolConfiguration | undefined;

  /**
   * The protocol used by the standard router output.
   *
   * @public
   */
  Protocol?: RouterOutputProtocol | undefined;
}

/**
 * The configuration settings for a router output.
 *
 * @public
 */
export type RouterOutputConfiguration =
  | RouterOutputConfiguration.MediaConnectFlowMember
  | RouterOutputConfiguration.MediaLiveInputMember
  | RouterOutputConfiguration.SourceEndpointMember
  | RouterOutputConfiguration.StandardMember
  | RouterOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RouterOutputConfiguration {
  /**
   * The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardRouterOutputConfiguration;
    MediaConnectFlow?: never;
    MediaLiveInput?: never;
    SourceEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for connecting a router output to a MediaConnect flow source.
   *
   * To connect the router output to the flow source, provide both `flowArn` and `flowSourceArn`. To disconnect it, call the update operation and omit both fields while keeping this configuration object.
   *
   * > **Note:** You can't change `destinationTransitEncryption` while the router output is connected to a flow source. To change it, first disconnect the router output, then update the encryption.
   *
   * @public
   */
  export interface MediaConnectFlowMember {
    Standard?: never;
    MediaConnectFlow: MediaConnectFlowRouterOutputConfiguration;
    MediaLiveInput?: never;
    SourceEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for connecting a router output to a MediaLive input.
   *
   * To connect the router output to the MediaLive input, provide both `mediaLiveInputArn` and `mediaLivePipelineId`. To disconnect it, call the update operation and omit both fields while keeping this configuration object.
   *
   * > **Note:** You can't change `destinationTransitEncryption` while the router output is connected to a MediaLive input. To change it, first disconnect the router output, then update the encryption.
   *
   * @public
   */
  export interface MediaLiveInputMember {
    Standard?: never;
    MediaConnectFlow?: never;
    MediaLiveInput: MediaLiveInputRouterOutputConfiguration;
    SourceEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for a router output that is represented by a source endpoint.
   *
   * @public
   */
  export interface SourceEndpointMember {
    Standard?: never;
    MediaConnectFlow?: never;
    MediaLiveInput?: never;
    SourceEndpoint: SourceEndpointRouterOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    MediaConnectFlow?: never;
    MediaLiveInput?: never;
    SourceEndpoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardRouterOutputConfiguration) => T;
    MediaConnectFlow: (value: MediaConnectFlowRouterOutputConfiguration) => T;
    MediaLiveInput: (value: MediaLiveInputRouterOutputConfiguration) => T;
    SourceEndpoint: (value: SourceEndpointRouterOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The fabric configuration settings for the router output.
 *
 * @public
 */
export interface FabricConfiguration {
  /**
   * The recovery latency mode for the router fabric connection. Valid values include the following:
   *
   * - `BALANCED` (default) – Optimizes for stream quality.
   * - `LOW_LATENCY` – Reduces latency at the potential cost of stream quality under adverse network conditions.
   *
   * @public
   */
  RecoveryLatencyMode: FabricLatencyMode | undefined;
}

/**
 * A message associated with a router output.
 *
 * @public
 */
export interface RouterOutputMessage {
  /**
   * The code associated with the router output message.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The message text associated with the router output message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Configuration details for a MediaConnect flow when used as a router output destination.
 *
 * @public
 */
export interface MediaConnectFlowRouterOutputStreamDetails {}

/**
 * Configuration details for a MediaLive input when used as a router output destination.
 *
 * @public
 */
export interface MediaLiveInputRouterOutputStreamDetails {}

/**
 * Configuration details for a router output stream that is represented by a source endpoint.
 *
 * @public
 */
export interface SourceEndpointRouterOutputStreamDetails {}

/**
 * Configuration details for a standard router output stream type. Contains information about the destination IP address and connection state for basic output routing.
 *
 * @public
 */
export interface StandardRouterOutputStreamDetails {
  /**
   * The IP address where the output stream will be sent. This is the destination address that will receive the routed media content.
   *
   * @public
   */
  DestinationIpAddress?: string | undefined;
}

/**
 * Information about the router output's stream, including connection state and destination details. The specific details provided vary based on the router output type.
 *
 * @public
 */
export type RouterOutputStreamDetails =
  | RouterOutputStreamDetails.MediaConnectFlowMember
  | RouterOutputStreamDetails.MediaLiveInputMember
  | RouterOutputStreamDetails.SourceEndpointMember
  | RouterOutputStreamDetails.StandardMember
  | RouterOutputStreamDetails.$UnknownMember;

/**
 * @public
 */
export namespace RouterOutputStreamDetails {
  /**
   * Configuration details for a standard router output stream type. Contains information about the destination IP address and connection state for basic output routing.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardRouterOutputStreamDetails;
    MediaConnectFlow?: never;
    MediaLiveInput?: never;
    SourceEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a MediaConnect flow when used as a router output destination.
   *
   * @public
   */
  export interface MediaConnectFlowMember {
    Standard?: never;
    MediaConnectFlow: MediaConnectFlowRouterOutputStreamDetails;
    MediaLiveInput?: never;
    SourceEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a MediaLive input when used as a router output destination.
   *
   * @public
   */
  export interface MediaLiveInputMember {
    Standard?: never;
    MediaConnectFlow?: never;
    MediaLiveInput: MediaLiveInputRouterOutputStreamDetails;
    SourceEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Configuration details for a router output stream that is represented by a source endpoint.
   *
   * @public
   */
  export interface SourceEndpointMember {
    Standard?: never;
    MediaConnectFlow?: never;
    MediaLiveInput?: never;
    SourceEndpoint: SourceEndpointRouterOutputStreamDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    MediaConnectFlow?: never;
    MediaLiveInput?: never;
    SourceEndpoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardRouterOutputStreamDetails) => T;
    MediaConnectFlow: (value: MediaConnectFlowRouterOutputStreamDetails) => T;
    MediaLiveInput: (value: MediaLiveInputRouterOutputStreamDetails) => T;
    SourceEndpoint: (value: SourceEndpointRouterOutputStreamDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A router output in AWS Elemental MediaConnect. A router output is a destination for media content that can receive input from one or more router inputs.
 *
 * @public
 */
export interface RouterOutput {
  /**
   * The name of the router output.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router output.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the router output.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The overall state of the router output.
   *
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * The type of the router output.
   *
   * @public
   */
  OutputType: RouterOutputType | undefined;

  /**
   * The configuration settings for a router output.
   *
   * @public
   */
  Configuration: RouterOutputConfiguration | undefined;

  /**
   * The current state of the association between the router output and its input.
   *
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * The Amazon Web Services Region where the router output is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone of the router output.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The maximum bitrate for the router output.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * Indicates whether the router output is configured for Regional or global routing.
   *
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * The tier level for the router output. The tier sets the maximum bitrate, in Mbps, for the router output. Valid values include the following:
   *
   * - `OUTPUT_20` – 20 Mbps
   * - `OUTPUT_50` – 50 Mbps
   * - `OUTPUT_100` – 100 Mbps
   * - `OUTPUT_250` – 250 Mbps
   * - `OUTPUT_500` – 500 Mbps
   *
   * The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.
   *
   * @public
   */
  Tier: RouterOutputTier | undefined;

  /**
   * The timestamp when the router output was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the router output was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The messages associated with the router output.
   *
   * @public
   */
  Messages: RouterOutputMessage[] | undefined;

  /**
   * Key-value pairs that can be used to tag and organize this router output.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * Information about the router output's stream, including connection state and destination details. The specific details provided vary based on the router output type.
   *
   * @public
   */
  StreamDetails: RouterOutputStreamDetails | undefined;

  /**
   * The IP address of the router output.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the router input associated with the output.
   *
   * @public
   */
  RoutedInputArn?: string | undefined;

  /**
   * The type of maintenance configuration applied to this router output.
   *
   * @public
   */
  MaintenanceType: MaintenanceType | undefined;

  /**
   * The maintenance configuration settings applied to this router output.
   *
   * @public
   */
  MaintenanceConfiguration: MaintenanceConfiguration | undefined;

  /**
   * The type of maintenance schedule currently in effect for this router output.
   *
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * The current maintenance schedule details for this router output.
   *
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The fabric configuration settings for the router output.
   *
   * @public
   */
  FabricConfiguration: FabricConfiguration | undefined;

  /**
   * The Amazon Resource Names (ARNs) of one or more source endpoints that are associated with this router output.
   *
   * @public
   */
  AssociatedSourceEndpointArns?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterOutputResponse {
  /**
   * An array of router outputs that were successfully retrieved.
   *
   * @public
   */
  RouterOutputs: RouterOutput[] | undefined;

  /**
   * An array of errors that occurred when retrieving the requested router outputs.
   *
   * @public
   */
  Errors: BatchGetRouterOutputError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSourceEndpointRequest {
  /**
   * The Amazon Resource Names (ARNs) of one or more source endpoints to retrieve. You can specify from 1 to 20 ARNs.
   *
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * An error for a source endpoint that MediaConnect couldn't retrieve in a `BatchGetSourceEndpoint` request.
 *
 * @public
 */
export interface BatchGetSourceEndpointError {
  /**
   * The Amazon Resource Name (ARN) of the source endpoint that MediaConnect couldn't retrieve.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A description of the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * The details of the router output that is associated with a source endpoint.
 *
 * @public
 */
export interface RouterOutputSourceEndpointAssociatedResourceDetails {
  /**
   * The name of the router output.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum bitrate of the router output, in bits per second.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * The state of the router output.
   *
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * The status messages for the router output.
   *
   * @public
   */
  Messages: RouterOutputMessage[] | undefined;
}

/**
 * The associated resource details for a standard source endpoint. This type does not require any additional settings.
 *
 * @public
 */
export interface StandardSourceEndpointAssociatedResourceDetails {}

/**
 * The details of the resource that is associated with a source endpoint. This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.
 *
 * @public
 */
export type SourceEndpointAssociatedResourceDetails =
  | SourceEndpointAssociatedResourceDetails.RouterOutputMember
  | SourceEndpointAssociatedResourceDetails.StandardMember
  | SourceEndpointAssociatedResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace SourceEndpointAssociatedResourceDetails {
  /**
   * The associated resource details for a standard source endpoint.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardSourceEndpointAssociatedResourceDetails;
    RouterOutput?: never;
    $unknown?: never;
  }

  /**
   * The associated resource details for a source endpoint that represents a router output.
   *
   * @public
   */
  export interface RouterOutputMember {
    Standard?: never;
    RouterOutput: RouterOutputSourceEndpointAssociatedResourceDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    RouterOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardSourceEndpointAssociatedResourceDetails) => T;
    RouterOutput: (value: RouterOutputSourceEndpointAssociatedResourceDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a source endpoint that represents a router output.
 *
 * @public
 */
export interface RouterOutputSourceEndpointConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the router output that the source endpoint represents.
   *
   * @public
   */
  RouterOutputArn: string | undefined;
}

/**
 * The configuration settings for a source endpoint that uses the RIST protocol.
 *
 * @public
 */
export interface RistStandardSourceEndpointConfiguration {
  /**
   * The port on the destination that receives the content. The valid range is 3000 to 30000.
   *
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * The amount of time, in milliseconds, that the source endpoint allows for recovering lost packets. The valid range is 10 to 10000.
   *
   * @public
   */
  RecoveryLatencyMilliseconds: number | undefined;
}

/**
 * The configuration settings for a source endpoint that uses the RTP protocol.
 *
 * @public
 */
export interface RtpStandardSourceEndpointConfiguration {
  /**
   * The port on the destination that receives the content. The valid range is 3000 to 30000.
   *
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * Indicates whether forward error correction (FEC) is enabled for the source endpoint.
   *
   * @public
   */
  ForwardErrorCorrectionState: ForwardErrorCorrectionState | undefined;
}

/**
 * The configuration settings for a source endpoint that uses SRT in caller mode.
 *
 * @public
 */
export interface SrtCallerStandardSourceEndpointConfiguration {
  /**
   * The port on which the destination listens for the connection. The valid range is 3000 to 30000.
   *
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
   *
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * The configuration settings for a source endpoint that uses SRT in listener mode.
 *
 * @public
 */
export interface SrtListenerStandardSourceEndpointConfiguration {
  /**
   * The port that the source endpoint listens on for incoming connections. The valid range is 1024 to 65535.
   *
   * @public
   */
  SourceListenerPort: number | undefined;

  /**
   * The IP address that the source endpoint listens on for incoming connections.
   *
   * @public
   */
  SourceAddress: string | undefined;

  /**
   * The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.
   *
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * The stream ID that identifies the content for the SRT connection.
   *
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.
   *
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * The protocol configuration for a standard source endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the source endpoint uses.
 *
 * @public
 */
export type StandardSourceEndpointProtocolConfiguration =
  | StandardSourceEndpointProtocolConfiguration.RistMember
  | StandardSourceEndpointProtocolConfiguration.RtpMember
  | StandardSourceEndpointProtocolConfiguration.SrtCallerMember
  | StandardSourceEndpointProtocolConfiguration.SrtListenerMember
  | StandardSourceEndpointProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace StandardSourceEndpointProtocolConfiguration {
  /**
   * The configuration settings for a source endpoint that uses the RIST protocol.
   *
   * @public
   */
  export interface RistMember {
    Rist: RistStandardSourceEndpointConfiguration;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a source endpoint that uses SRT in listener mode.
   *
   * @public
   */
  export interface SrtListenerMember {
    Rist?: never;
    SrtListener: SrtListenerStandardSourceEndpointConfiguration;
    SrtCaller?: never;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a source endpoint that uses SRT in caller mode.
   *
   * @public
   */
  export interface SrtCallerMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller: SrtCallerStandardSourceEndpointConfiguration;
    Rtp?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a source endpoint that uses the RTP protocol.
   *
   * @public
   */
  export interface RtpMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp: RtpStandardSourceEndpointConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Rist?: never;
    SrtListener?: never;
    SrtCaller?: never;
    Rtp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Rist: (value: RistStandardSourceEndpointConfiguration) => T;
    SrtListener: (value: SrtListenerStandardSourceEndpointConfiguration) => T;
    SrtCaller: (value: SrtCallerStandardSourceEndpointConfiguration) => T;
    Rtp: (value: RtpStandardSourceEndpointConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A rule that allows a specific CIDR block to connect to the public source endpoint.
 *
 * @public
 */
export interface PublicSourceEndpointNetworkingConfigurationAllowRule {
  /**
   * The CIDR block that is allowed to connect to the source endpoint, in CIDR notation.
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect.
 *
 * @public
 */
export interface PublicSourceEndpointNetworkingConfiguration {
  /**
   * The rules that specify which CIDR blocks can connect to the source endpoint. You can specify up to 10 rules.
   *
   * @public
   */
  SourceAllowRules: PublicSourceEndpointNetworkingConfigurationAllowRule[] | undefined;
}

/**
 * The networking configuration for a source endpoint in a virtual private cloud (VPC).
 *
 * @public
 */
export interface VpcSourceEndpointNetworkingConfiguration {
  /**
   * The IDs of the security groups to associate with the source endpoint. You can specify from 1 to 5 security groups.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnet to use for the source endpoint.
   *
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * The networking configuration for a standard source endpoint. This is a union type, so exactly one of its members is set: `public` for a publicly accessible endpoint, or `vpc` for an endpoint in a virtual private cloud (VPC).
 *
 * @public
 */
export type StandardSourceEndpointNetworkingConfiguration =
  | StandardSourceEndpointNetworkingConfiguration.PublicMember
  | StandardSourceEndpointNetworkingConfiguration.VpcMember
  | StandardSourceEndpointNetworkingConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace StandardSourceEndpointNetworkingConfiguration {
  /**
   * The configuration for a publicly accessible source endpoint.
   *
   * @public
   */
  export interface PublicMember {
    Public: PublicSourceEndpointNetworkingConfiguration;
    Vpc?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a source endpoint in a virtual private cloud (VPC).
   *
   * @public
   */
  export interface VpcMember {
    Public?: never;
    Vpc: VpcSourceEndpointNetworkingConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Public?: never;
    Vpc?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Public: (value: PublicSourceEndpointNetworkingConfiguration) => T;
    Vpc: (value: VpcSourceEndpointNetworkingConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration settings for a standard source endpoint.
 *
 * @public
 */
export interface StandardSourceEndpointConfiguration {
  /**
   * The name of the source endpoint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The networking configuration for the source endpoint, which determines whether it is publicly accessible or in a virtual private cloud (VPC).
   *
   * @public
   */
  SourceNetworkingConfiguration: StandardSourceEndpointNetworkingConfiguration | undefined;

  /**
   * The protocol configuration for the source endpoint.
   *
   * @public
   */
  ProtocolConfiguration: StandardSourceEndpointProtocolConfiguration | undefined;

  /**
   * The networking type of the source endpoint. Valid values include the following:
   *
   * - `PUBLIC` – The source endpoint is publicly accessible.
   * - `VPC` – The source endpoint is in a virtual private cloud (VPC).
   *
   * @public
   */
  SourceNetworkingType?: SourceEndpointNetworkingType | undefined;

  /**
   * The protocol used by the source endpoint. Valid values include the following:
   *
   * - `RTP` – Real-time Transport Protocol.
   * - `RIST` – Reliable Internet Stream Transport.
   * - `SRT_CALLER` – Secure Reliable Transport (SRT) in caller mode.
   * - `SRT_LISTENER` – Secure Reliable Transport (SRT) in listener mode.
   *
   * @public
   */
  Protocol?: SourceEndpointProtocol | undefined;
}

/**
 * The configuration settings for a source endpoint. This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.
 *
 * @public
 */
export type SourceEndpointConfiguration =
  | SourceEndpointConfiguration.RouterOutputMember
  | SourceEndpointConfiguration.StandardMember
  | SourceEndpointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SourceEndpointConfiguration {
  /**
   * The configuration settings for a standard source endpoint, which represents an external source.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardSourceEndpointConfiguration;
    RouterOutput?: never;
    $unknown?: never;
  }

  /**
   * The configuration settings for a source endpoint that represents a router output.
   *
   * @public
   */
  export interface RouterOutputMember {
    Standard?: never;
    RouterOutput: RouterOutputSourceEndpointConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    RouterOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardSourceEndpointConfiguration) => T;
    RouterOutput: (value: RouterOutputSourceEndpointConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The connection details for a source endpoint that represents a router output.
 *
 * @public
 */
export interface RouterOutputSourceEndpointConnectionDetails {
  /**
   * The type of decryption that the destination uses for the connection.
   *
   * @public
   */
  DestinationDecryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  DestinationDecryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * The type of the connected destination endpoint.
   *
   * @public
   */
  DestinationEndpointType?: DestinationEndpointType | undefined;
}

/**
 * The connection details for a standard source endpoint.
 *
 * @public
 */
export interface StandardSourceEndpointConnectionDetails {
  /**
   * The IP address of the destination that receives the content.
   *
   * @public
   */
  DestinationIpAddress?: string | undefined;

  /**
   * The port on the destination that receives the content.
   *
   * @public
   */
  DestinationIngestPort?: number | undefined;

  /**
   * The type of decryption that the destination uses for the connection.
   *
   * @public
   */
  DestinationDecryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  DestinationDecryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * The type of the connected destination endpoint.
   *
   * @public
   */
  DestinationEndpointType?: DestinationEndpointType | undefined;
}

/**
 * The connection details for a source endpoint. After the source endpoint connects to a destination endpoint, MediaConnect populates these details to describe the connected destination and how the source delivers content to it. This is a union type, so exactly one of its members is set, depending on the source endpoint type.
 *
 * @public
 */
export type SourceEndpointConnectionDetails =
  | SourceEndpointConnectionDetails.RouterOutputMember
  | SourceEndpointConnectionDetails.StandardMember
  | SourceEndpointConnectionDetails.$UnknownMember;

/**
 * @public
 */
export namespace SourceEndpointConnectionDetails {
  /**
   * The connection details for a standard source endpoint.
   *
   * @public
   */
  export interface StandardMember {
    Standard: StandardSourceEndpointConnectionDetails;
    RouterOutput?: never;
    $unknown?: never;
  }

  /**
   * The connection details for a source endpoint that represents a router output.
   *
   * @public
   */
  export interface RouterOutputMember {
    Standard?: never;
    RouterOutput: RouterOutputSourceEndpointConnectionDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Standard?: never;
    RouterOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Standard: (value: StandardSourceEndpointConnectionDetails) => T;
    RouterOutput: (value: RouterOutputSourceEndpointConnectionDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A status message for a source endpoint.
 *
 * @public
 */
export interface SourceEndpointMessage {
  /**
   * The message code.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * The message text.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * The details of a source endpoint in MediaConnect, including its configuration, state, and connection details.
 *
 * @public
 */
export interface SourceEndpoint {
  /**
   * The name of the source endpoint.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier of the source endpoint.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The description of the source endpoint.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The name of the Amazon Web Services Region in which the source endpoint is located.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * The Availability Zone in which the source endpoint is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The ID of the Availability Zone in which the source endpoint is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The date and time when the source endpoint was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time when the source endpoint was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The entity that manages the lifecycle of the source endpoint.
   *
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * The status messages for the source endpoint.
   *
   * @public
   */
  Messages: SourceEndpointMessage[] | undefined;

  /**
   * The type of the source endpoint. Valid values include the following:
   *
   * - `STANDARD` – A source endpoint that represents an external source over a standard protocol, such as RTP, RIST, or SRT.
   * - `ROUTER_OUTPUT` – A source endpoint that represents a router output.
   *
   * @public
   */
  SourceType: SourceEndpointType | undefined;

  /**
   * The configuration settings for the source endpoint.
   *
   * @public
   */
  Configuration: SourceEndpointConfiguration | undefined;

  /**
   * Indicates whether this account owns the source endpoint or consumes it from another account through RAM.
   *
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * The cross-account sharing details for an endpoint. Endpoints are shared through Resource Access Manager (RAM). This is a union type, so exactly one of its members is set: `owned` when this account owns the endpoint and shares it with other accounts, or `consumed` when this account consumes an endpoint that another account shares. To change how an endpoint is shared, use RAM.
   *
   * @public
   */
  ResourceShareDetails: ResourceShareDetails | undefined;

  /**
   * The registration state of the source endpoint. Valid values include the following:
   *
   * - `REGISTERED` – The source endpoint is registered and ready to use.
   * - `REGISTERING` – MediaConnect is registering the source endpoint.
   * - `DEREGISTERING` – MediaConnect is deregistering the source endpoint.
   * - `REGISTRATION_FAILED` – MediaConnect couldn't register the source endpoint.
   *
   * @public
   */
  RegistrationState: SourceEndpointRegistrationState | undefined;

  /**
   * The connection state of the source endpoint. Valid values include the following:
   *
   * - `CONNECTED` – The source endpoint is connected to a destination endpoint.
   * - `DISCONNECTED` – The source endpoint isn't connected to a destination endpoint.
   * - `CONNECTING` – The source endpoint is connecting to a destination endpoint.
   * - `DISCONNECTING` – The source endpoint is disconnecting from a destination endpoint.
   *
   * @public
   */
  ConnectionState: SourceEndpointConnectionState | undefined;

  /**
   * The connection details for the source endpoint.
   *
   * @public
   */
  ConnectionDetails?: SourceEndpointConnectionDetails | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the destination endpoints that are connected to the source endpoint.
   *
   * @public
   */
  ConnectedDestinations: string[] | undefined;

  /**
   * The type of encryption used for the source endpoint connection.
   *
   * @public
   */
  EncryptionType?: EndpointEncryptionType | undefined;

  /**
   * The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: `secretsManager` when you store the encryption key or passphrase in Secrets Manager, or `automatic` when you let MediaConnect determine the encryption key when the endpoint connects.
   *
   * @public
   */
  EncryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * The details of the resource that is associated with the source endpoint.
   *
   * @public
   */
  AssociatedResourceDetails: SourceEndpointAssociatedResourceDetails | undefined;

  /**
   * The tags associated with the source endpoint. Each tag is a key-value pair.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetSourceEndpointResponse {
  /**
   * The source endpoints that MediaConnect successfully retrieved.
   *
   * @public
   */
  SourceEndpoints: SourceEndpoint[] | undefined;

  /**
   * The errors for any source endpoints that MediaConnect couldn't retrieve.
   *
   * @public
   */
  Errors: BatchGetSourceEndpointError[] | undefined;
}

/**
 * Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
 *
 * @public
 */
export interface EgressGatewayBridge {
  /**
   * The ID of the instance running this bridge.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The maximum expected bitrate (in bps) of the egress bridge.
   *
   * @public
   */
  MaxBitrate: number | undefined;
}

/**
 * Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
 *
 * @public
 */
export interface IngressGatewayBridge {
  /**
   * The ID of the instance running this bridge.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The maximum expected bitrate (in bps) of the ingress bridge.
   *
   * @public
   */
  MaxBitrate: number | undefined;

  /**
   * The maximum number of outputs on the ingress bridge.
   *
   * @public
   */
  MaxOutputs: number | undefined;
}

/**
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
 *
 * @public
 */
export interface SourcePriority {
  /**
   * The name of the source you choose as the primary source for this flow.
   *
   * @public
   */
  PrimarySource?: string | undefined;
}

/**
 * The settings for source failover.
 *
 * @public
 */
export interface FailoverConfig {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   *
   * @public
   */
  FailoverMode?: FailoverMode | undefined;

  /**
   * Search window time to look for dash-7 packets.
   *
   * @public
   */
  RecoveryWindow?: number | undefined;

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   *
   * @public
   */
  SourcePriority?: SourcePriority | undefined;

  /**
   * The state of source failover on the flow. If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources.
   *
   * @public
   */
  State?: State | undefined;
}

/**
 * A Bridge is the connection between your data center's Instances and the Amazon Web Services cloud. A bridge can be used to send video from the Amazon Web Services cloud to your data center or from your data center to the Amazon Web Services cloud.
 *
 * @public
 */
export interface Bridge {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * Messages with details about the bridge.
   *
   * @public
   */
  BridgeMessages?: MessageDetail[] | undefined;

  /**
   * The state of the bridge.
   *
   * @public
   */
  BridgeState: BridgeState | undefined;

  /**
   * An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
   *
   * @public
   */
  EgressGatewayBridge?: EgressGatewayBridge | undefined;

  /**
   * An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
   *
   * @public
   */
  IngressGatewayBridge?: IngressGatewayBridge | undefined;

  /**
   * The name of the bridge.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs on this bridge.
   *
   * @public
   */
  Outputs?: BridgeOutput[] | undefined;

  /**
   * The placement Amazon Resource Number (ARN) of the bridge.
   *
   * @public
   */
  PlacementArn: string | undefined;

  /**
   * The settings for source failover.
   *
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * The sources on this bridge.
   *
   * @public
   */
  Sources?: BridgeSource[] | undefined;
}

/**
 * @public
 */
export interface CreateBridgeRequest {
  /**
   * An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
   *
   * @public
   */
  EgressGatewayBridge?: AddEgressGatewayBridgeRequest | undefined;

  /**
   * An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
   *
   * @public
   */
  IngressGatewayBridge?: AddIngressGatewayBridgeRequest | undefined;

  /**
   * The name of the bridge. This name can not be modified after the bridge is created.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs that you want to add to this bridge.
   *
   * @public
   */
  Outputs?: AddBridgeOutputRequest[] | undefined;

  /**
   * The bridge placement Amazon Resource Number (ARN).
   *
   * @public
   */
  PlacementArn: string | undefined;

  /**
   * The settings for source failover.
   *
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * The sources that you want to add to this bridge.
   *
   * @public
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateBridgeResponse {
  /**
   * The name of the bridge that was created.
   *
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to delete.
   *
   * @public
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeResponse {
  /**
   * The ARN of the deleted bridge.
   *
   * @public
   */
  BridgeArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to describe.
   *
   * @public
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeResponse {
  /**
   * The bridge that you requested a description of.
   *
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * @public
 */
export interface ListBridgesRequest {
  /**
   * Filter the list results to display only the bridges associated with the selected ARN.
   *
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a `ListBridges` request with `MaxResults` set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a `NextToken` value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the `MaxResults` value. If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListBridges` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListBridges` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBridgesResponse {
  /**
   * A list of bridge summaries.
   *
   * @public
   */
  Bridges?: ListedBridge[] | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a `ListBridges` request with `MaxResults` set at 5. The service returns the first batch of results (up to 5) and a `NextToken` value. To see the next batch of results, you can submit the `ListBridges` request a second time and specify the `NextToken` value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the bridge output that you want to remove.
   *
   * @public
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputResponse {
  /**
   * The ARN of the bridge from which the output was removed.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The name of the bridge output that was removed.
   *
   * @public
   */
  OutputName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the bridge source that you want to remove.
   *
   * @public
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceResponse {
  /**
   * The ARN of the bridge from which the source was removed.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The name of the bridge source that was removed.
   *
   * @public
   */
  SourceName?: string | undefined;
}

/**
 * Update an existing egress-type bridge.
 *
 * @public
 */
export interface UpdateEgressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps).
   *
   * @public
   */
  MaxBitrate?: number | undefined;
}

/**
 * Update an existing ingress-type bridge.
 *
 * @public
 */
export interface UpdateIngressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps).
   *
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum number of expected outputs.
   *
   * @public
   */
  MaxOutputs?: number | undefined;
}

/**
 * The settings for source failover.
 *
 * @public
 */
export interface UpdateFailoverConfig {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   *
   * @public
   */
  FailoverMode?: FailoverMode | undefined;

  /**
   * Recovery window time to look for dash-7 packets.
   *
   * @public
   */
  RecoveryWindow?: number | undefined;

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   *
   * @public
   */
  SourcePriority?: SourcePriority | undefined;

  /**
   * The state of source failover on the flow. If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources.
   *
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeRequest {
  /**
   * TheAmazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * A cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
   *
   * @public
   */
  EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest | undefined;

  /**
   * A ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
   *
   * @public
   */
  IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest | undefined;

  /**
   * The settings for source failover.
   *
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeResponse {
  /**
   * The bridge that was updated.
   *
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * Update an existing network output.
 *
 * @public
 */
export interface UpdateBridgeNetworkOutputRequest {
  /**
   * The network output IP Address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The network output's gateway network name.
   *
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * The network output port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The network output protocol.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The network output TTL.
   *
   * @public
   */
  Ttl?: number | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The network of the bridge output.
   *
   * @public
   */
  NetworkOutput?: UpdateBridgeNetworkOutputRequest | undefined;

  /**
   * Tname of the output that you want to update.
   *
   * @public
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeOutputResponse {
  /**
   * The ARN of the bridge that was updated.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The bridge output that was updated.
   *
   * @public
   */
  Output?: BridgeOutput | undefined;
}

/**
 * Update the flow source of the bridge.
 *
 * @public
 */
export interface UpdateBridgeFlowSourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the MediaConnect resource from which to delete tags.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this source.
   *
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * Update the network source of the bridge.
 *
 * @public
 */
export interface UpdateBridgeNetworkSourceRequest {
  /**
   * The network source multicast IP.
   *
   * @public
   */
  MulticastIp?: string | undefined;

  /**
   * The settings related to the multicast source.
   *
   * @public
   */
  MulticastSourceSettings?: MulticastSourceSettings | undefined;

  /**
   * The network source's gateway network name.
   *
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * The network source port.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The network source protocol.
   *
   * > **Note:** Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.
   *
   * @public
   */
  Protocol?: Protocol | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeSourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the flow that you want to update.
   *
   * @public
   */
  FlowSource?: UpdateBridgeFlowSourceRequest | undefined;

  /**
   * The network for the bridge source.
   *
   * @public
   */
  NetworkSource?: UpdateBridgeNetworkSourceRequest | undefined;

  /**
   * The name of the source that you want to update.
   *
   * @public
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeSourceResponse {
  /**
   * The ARN of the updated bridge source.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The updated bridge source.
   *
   * @public
   */
  Source?: BridgeSource | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeStateRequest {
  /**
   * The Amazon Resource Name (ARN) of the bridge that you want to update the state of.
   *
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The desired state for the bridge.
   *
   * @public
   */
  DesiredState: DesiredState | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeStateResponse {
  /**
   * The ARN of the updated bridge.
   *
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The new state of the bridge.
   *
   * @public
   */
  DesiredState?: DesiredState | undefined;
}

/**
 * @public
 */
export interface ConnectEndpointsRequest {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint to connect.
   *
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source endpoint to connect.
   *
   * @public
   */
  SourceEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ConnectEndpointsResponse {
  /**
   * The Amazon Resource Name (ARN) of the connected destination endpoint.
   *
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * The name of the connected destination endpoint.
   *
   * @public
   */
  DestinationEndpointName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connected source endpoint.
   *
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * The name of the connected source endpoint.
   *
   * @public
   */
  SourceEndpointName: string | undefined;
}

/**
 * The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases.
 *
 * @public
 */
export interface EncodingConfig {
  /**
   * The encoding profile to use when transcoding the NDI source content to a transport stream. You can change this value while the flow is running.
   *
   * @public
   */
  EncodingProfile?: EncodingProfile | undefined;

  /**
   * The maximum video bitrate to use when transcoding the NDI source to a transport stream. This parameter enables you to override the default video bitrate within the encoding profile's supported range.
   *
   * The supported range is 10,000,000 - 50,000,000 bits per second (bps). If you don't specify a value, MediaConnect uses the default value of 20,000,000 bps.
   *
   * @public
   */
  VideoMaxBitrate?: number | undefined;
}

/**
 * Specifies the configuration settings for NDI sources and outputs.
 *
 * @public
 */
export interface NdiConfig {
  /**
   * A setting that controls whether NDI® sources or outputs can be used in the flow.
   *
   * The default value is `DISABLED`. This value must be set as `ENABLED` for your flow to support NDI sources or outputs.
   *
   * @public
   */
  NdiState?: NdiState | undefined;

  /**
   * A prefix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect generates a unique 12-character ID as the prefix.
   *
   * @public
   */
  MachineName?: string | undefined;

  /**
   * A list of up to three NDI discovery server configurations. While not required by the API, this configuration is necessary for NDI functionality to work properly.
   *
   * @public
   */
  NdiDiscoveryServers?: NdiDiscoveryServerConfig[] | undefined;
}

/**
 * The settings for source monitoring.
 *
 * @public
 */
export interface MonitoringConfig {
  /**
   * Indicates whether thumbnails are enabled or disabled.
   *
   * @public
   */
  ThumbnailState?: ThumbnailState | undefined;

  /**
   * Contains the settings for audio stream metrics monitoring.
   *
   * @public
   */
  AudioMonitoringSettings?: AudioMonitoringSetting[] | undefined;

  /**
   * Indicates whether content quality analysis is enabled or disabled.
   *
   * @public
   */
  ContentQualityAnalysisState?: ContentQualityAnalysisState | undefined;

  /**
   * Contains the settings for video stream metrics monitoring.
   *
   * @public
   */
  VideoMonitoringSettings?: VideoMonitoringSetting[] | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current Amazon Web Services Region.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The entitlements that you want to grant on a flow.
   *
   * @public
   */
  Entitlements?: GrantEntitlementRequest[] | undefined;

  /**
   * The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.
   *
   * @public
   */
  MediaStreams?: AddMediaStreamRequest[] | undefined;

  /**
   * The name of the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs that you want to add to this flow.
   *
   * @public
   */
  Outputs?: AddOutputRequest[] | undefined;

  /**
   * The settings for the source that you want to use for the new flow.
   *
   * @public
   */
  Source?: SetSourceRequest | undefined;

  /**
   * The settings for source failover.
   *
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * The sources that are assigned to the flow.
   *
   * @public
   */
  Sources?: SetSourceRequest[] | undefined;

  /**
   * The VPC interfaces you want on the flow.
   *
   * @public
   */
  VpcInterfaces?: VpcInterfaceRequest[] | undefined;

  /**
   * The maintenance settings you want to use for the flow.
   *
   * @public
   */
  Maintenance?: AddMaintenance | undefined;

  /**
   * The settings for source monitoring.
   *
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * Determines the processing capacity and feature set of the flow. Set this optional parameter to `LARGE` if you want to enable NDI sources or outputs on the flow.
   *
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * Specifies the configuration settings for a flow's NDI source or output. Required when the flow includes an NDI source or output.
   *
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases.
   *
   * @public
   */
  EncodingConfig?: EncodingConfig | undefined;

  /**
   * The key-value pairs that can be used to tag and organize the flow.
   *
   * @public
   */
  FlowTags?: Record<string, string> | undefined;
}

/**
 * The settings for a flow, including its source, outputs, and entitlements.
 *
 * @public
 */
export interface Flow {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current Amazon Web Services Region.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow. This value is not used or seen outside of the current MediaConnect account.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address from which video will be sent to output destinations.
   *
   * @public
   */
  EgressIp?: string | undefined;

  /**
   * The entitlements in this flow.
   *
   * @public
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.
   *
   * @public
   */
  MediaStreams?: MediaStream[] | undefined;

  /**
   * The name of the flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs in this flow.
   *
   * @public
   */
  Outputs: Output[] | undefined;

  /**
   * The source for the flow.
   *
   * @public
   */
  Source: Source | undefined;

  /**
   * The settings for the source failover.
   *
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * The settings for the sources that are assigned to the flow.
   *
   * @public
   */
  Sources?: Source[] | undefined;

  /**
   * The current status of the flow.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * The VPC Interfaces for this flow.
   *
   * @public
   */
  VpcInterfaces?: VpcInterface[] | undefined;

  /**
   * The maintenance settings for the flow.
   *
   * @public
   */
  Maintenance?: Maintenance | undefined;

  /**
   * The settings for source monitoring.
   *
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * Determines the processing capacity and feature set of the flow.
   *
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * Specifies the configuration settings for a flow's NDI source or output. Required when the flow includes an NDI source or output.
   *
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution.
   *
   * @public
   */
  EncodingConfig?: EncodingConfig | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * The flow that you created.
   *
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * The name of the gateway. This name can not be modified after the gateway is created.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of networks that you want to add to the gateway.
   *
   * @public
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * The settings for a gateway, including its networks.
 *
 * @public
 */
export interface Gateway {
  /**
   * The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   *
   * @public
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * Messages with information about the gateway.
   *
   * @public
   */
  GatewayMessages?: MessageDetail[] | undefined;

  /**
   * The current status of the gateway.
   *
   * @public
   */
  GatewayState?: GatewayState | undefined;

  /**
   * The name of the gateway. This name can not be modified after the gateway is created.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of networks in the gateway.
   *
   * @public
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * The gateway that you created.
   *
   * @public
   */
  Gateway?: Gateway | undefined;
}

/**
 * @public
 */
export interface CreateRouterInputRequest {
  /**
   * The name of the router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration settings for the router input, which can include the protocol, network interface, and other details.
   *
   * @public
   */
  Configuration: RouterInputConfiguration | undefined;

  /**
   * The maximum bitrate for the router input.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * Specifies whether the router input can be assigned to outputs in different Regions. REGIONAL (default) - connects only to outputs in same Region. GLOBAL - connects to outputs in any Region.
   *
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * The tier level for the router input. The tier sets the maximum bitrate, in Mbps, for the router input. Valid values include the following:
   *
   * - `INPUT_20` – 20 Mbps
   * - `INPUT_50` – 50 Mbps
   * - `INPUT_100` – 100 Mbps
   * - `INPUT_250` – 250 Mbps
   * - `INPUT_500` – 500 Mbps
   *
   * The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.
   *
   * @public
   */
  Tier: RouterInputTier | undefined;

  /**
   * The Amazon Web Services Region for the router input. Defaults to the current region if not specified.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The Availability Zone where you want to create the router input. This must be a valid Availability Zone for the region specified by `regionName`, or the current region if no `regionName` is provided.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The transit encryption settings for the router input.
   *
   * @public
   */
  TransitEncryption?: RouterInputTransitEncryption | undefined;

  /**
   * The maintenance configuration settings for the router input, including preferred maintenance windows and schedules.
   *
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * Key-value pairs that can be used to tag and organize this router input.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The content quality analysis configuration for the router input.
   *
   * @public
   */
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRouterInputResponse {
  /**
   * The newly-created router input.
   *
   * @public
   */
  RouterInput: RouterInput | undefined;
}

/**
 * @public
 */
export interface CreateRouterNetworkInterfaceRequest {
  /**
   * The name of the router network interface.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration settings for the router network interface.
   *
   * @public
   */
  Configuration: RouterNetworkInterfaceConfiguration | undefined;

  /**
   * The Amazon Web Services Region for the router network interface. Defaults to the current region if not specified.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * Key-value pairs that can be used to tag and organize this router network interface.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique identifier for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouterNetworkInterfaceResponse {
  /**
   * The newly-created router network interface.
   *
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface CreateRouterOutputRequest {
  /**
   * The name of the router output.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The configuration settings for the router output.
   *
   * @public
   */
  Configuration: RouterOutputConfiguration | undefined;

  /**
   * The maximum bitrate for the router output.
   *
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * Specifies whether the router output can take inputs that are in different Regions. REGIONAL (default) - can only take inputs from same Region. GLOBAL - can take inputs from any Region.
   *
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * The tier level for the router output. The tier sets the maximum bitrate, in Mbps, for the router output. Valid values include the following:
   *
   * - `OUTPUT_20` – 20 Mbps
   * - `OUTPUT_50` – 50 Mbps
   * - `OUTPUT_100` – 100 Mbps
   * - `OUTPUT_250` – 250 Mbps
   * - `OUTPUT_500` – 500 Mbps
   *
   * The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.
   *
   * @public
   */
  Tier: RouterOutputTier | undefined;

  /**
   * The Amazon Web Services Region for the router output. Defaults to the current region if not specified.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The Availability Zone where you want to create the router output. This must be a valid Availability Zone for the region specified by `regionName`, or the current region if no `regionName` is provided.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The maintenance configuration settings for the router output, including preferred maintenance windows and schedules.
   *
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * Key-value pairs that can be used to tag this router output.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The fabric configuration settings for the router output.
   *
   * @public
   */
  FabricConfiguration?: FabricConfiguration | undefined;

  /**
   * A unique identifier for the request to ensure idempotency.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouterOutputResponse {
  /**
   * The newly-created router output.
   *
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow that you want to delete.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {
  /**
   * The ARN of the flow that was deleted.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The status of the flow when the `DeleteFlow` process begins.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * The Amazon Resource Name (ARN) of the gateway that you want to delete.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * The ARN of the gateway that was deleted.
   *
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterInputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router input that you want to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterInputResponse {
  /**
   * The ARN of the deleted router input.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the deleted router input.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the deleted router input, indicating where it is in the deletion process.
   *
   * @public
   */
  State: RouterInputState | undefined;
}

/**
 * @public
 */
export interface DeleteRouterNetworkInterfaceRequest {
  /**
   * The Amazon Resource Name (ARN) of the router network interface that you want to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterNetworkInterfaceResponse {
  /**
   * The ARN of the deleted router network interface.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the deleted router network interface.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the deleted router network interface, indicating where it is in the deletion process.
   *
   * @public
   */
  State: RouterNetworkInterfaceState | undefined;
}

/**
 * @public
 */
export interface DeleteRouterOutputRequest {
  /**
   * The Amazon Resource Name (ARN) of the router output that you want to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterOutputResponse {
  /**
   * The ARN of the deleted router output.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the deleted router output.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current state of the deleted router output, indicating where it is in the deletion process.
   *
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface DeregisterDestinationEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint to deregister.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterDestinationEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the destination endpoint that was deregistered.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the destination endpoint that was deregistered.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceRequest {
  /**
   * Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.
   *
   * @public
   */
  Force?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.
   *
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceResponse {
  /**
   * The ARN of the instance.
   *
   * @public
   */
  GatewayInstanceArn?: string | undefined;

  /**
   * The status of the instance.
   *
   * @public
   */
  InstanceState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface DeregisterSourceEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the source endpoint to deregister.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterSourceEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the source endpoint that was deregistered.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the source endpoint that was deregistered.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * The ARN of the flow that you want to describe.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * Messages that provide the state of the flow.
 *
 * @public
 */
export interface Messages {
  /**
   * A list of errors that might have been generated from processes on this flow.
   *
   * @public
   */
  Errors: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * The flow that you requested a description of.
   *
   * @public
   */
  Flow?: Flow | undefined;

  /**
   * Any errors that apply currently to the flow. If there are no errors, MediaConnect will not include this field in the response.
   *
   * @public
   */
  Messages?: Messages | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceMetadataRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * Metadata about the audio and video media that is part of the NDI® source content. This includes details about the individual media streams.
 *
 * @public
 */
export interface NdiMediaInfo {
  /**
   * A list of the individual media streams that make up the NDI source. This includes details about each stream's codec, resolution, frame rate, audio channels, and other parameters.
   *
   * @public
   */
  Streams: NdiMediaStreamInfo[] | undefined;
}

/**
 * Comprehensive information about the NDI® source that's associated with a flow. This includes the currently active NDI source, a list of all discovered NDI senders, metadata about the media streams, and any relevant status messages.
 *
 * @public
 */
export interface NdiSourceMetadataInfo {
  /**
   * The connected NDI sender that's currently sending source content to the flow's NDI source.
   *
   * @public
   */
  ActiveSource?: NdiSourceInfo | undefined;

  /**
   * A list of the available upstream NDI senders aggregated from all of your configured discovery servers.
   *
   * @public
   */
  DiscoveredSources: NdiSourceInfo[] | undefined;

  /**
   * Detailed information about the media streams (video, audio, and so on) that are part of the active NDI source.
   *
   * @public
   */
  MediaInfo: NdiMediaInfo | undefined;

  /**
   * Any status messages or error codes related to the NDI source and its metadata.
   *
   * @public
   */
  Messages: MessageDetail[] | undefined;
}

/**
 * The metadata of the transport stream in the current flow's source.
 *
 * @public
 */
export interface TransportMediaInfo {
  /**
   * The list of transport stream programs in the current flow's source.
   *
   * @public
   */
  Programs: TransportStreamProgram[] | undefined;

  /**
   * The transport stream ID (TSID) of the source, from the Program Association Table (PAT).
   *
   * @public
   */
  TsId?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceMetadataResponse {
  /**
   * The ARN of the flow that DescribeFlowSourceMetadata was performed on.
   *
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * Provides a status code and message regarding issues found with the flow source metadata.
   *
   * @public
   */
  Messages?: MessageDetail[] | undefined;

  /**
   * The timestamp of the most recent change in metadata for this flow’s source.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * Information about the flow's transport media.
   *
   * @public
   */
  TransportMediaInfo?: TransportMediaInfo | undefined;

  /**
   * The NDI® specific information about the flow's source. This includes the current active NDI sender, a list of all discovered NDI senders, the associated media streams for the active NDI sender, and any relevant status messages.
   *
   * @public
   */
  NdiInfo?: NdiSourceMetadataInfo | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceThumbnailRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * The details of the thumbnail, including thumbnail base64 string, timecode and the time when thumbnail was generated.
 *
 * @public
 */
export interface ThumbnailDetails {
  /**
   * The ARN of the flow that DescribeFlowSourceThumbnail was performed on.
   *
   * @public
   */
  FlowArn: string | undefined;

  /**
   * Thumbnail Base64 string.
   *
   * @public
   */
  Thumbnail?: string | undefined;

  /**
   * Status code and messages about the flow source thumbnail.
   *
   * @public
   */
  ThumbnailMessages: MessageDetail[] | undefined;

  /**
   * Timecode of thumbnail.
   *
   * @public
   */
  Timecode?: string | undefined;

  /**
   * The timestamp of when thumbnail was generated.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceThumbnailResponse {
  /**
   * The details of the thumbnail, including thumbnail base64 string, timecode and the time when thumbnail was generated.
   *
   * @public
   */
  ThumbnailDetails?: ThumbnailDetails | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * The ARN of the gateway that you want to describe.
   *
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * The gateway that you wanted to describe.
   *
   * @public
   */
  Gateway?: Gateway | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceRequest {
  /**
   * The Amazon Resource Name (ARN) of the gateway instance that you want to describe.
   *
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * The settings for an instance in a gateway.
 *
 * @public
 */
export interface GatewayInstance {
  /**
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be deployed to this instance.
   *
   * @public
   */
  BridgePlacement: BridgePlacement | undefined;

  /**
   * The connection state of the instance.
   *
   * @public
   */
  ConnectionStatus: ConnectionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The ARN of the gateway.
   *
   * @public
   */
  GatewayInstanceArn: string | undefined;

  /**
   * The instance ID generated by the SSM install. This will begin with "mi-".
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * Messages with information about the gateway.
   *
   * @public
   */
  InstanceMessages?: MessageDetail[] | undefined;

  /**
   * The status of the instance.
   *
   * @public
   */
  InstanceState: InstanceState | undefined;

  /**
   * The running bridge count.
   *
   * @public
   */
  RunningBridgeCount: number | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceResponse {
  /**
   * The gateway instance that you requested a description of.
   *
   * @public
   */
  GatewayInstance?: GatewayInstance | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingRequest {
  /**
   * The ARN of the offering.
   *
   * @public
   */
  OfferingArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingResponse {
  /**
   * The offering that you requested a description of.
   *
   * @public
   */
  Offering?: Offering | undefined;
}

/**
 * @public
 */
export interface DescribeReservationRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   *
   * @public
   */
  ReservationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservationResponse {
  /**
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   *
   * @public
   */
  Reservation?: Reservation | undefined;
}
