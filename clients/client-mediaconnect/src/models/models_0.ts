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
 * <p>Add a network output to an existing bridge. </p>
 * @public
 */
export interface AddBridgeNetworkOutputRequest {
  /**
   * <p> The network output IP Address. </p>
   * @public
   */
  IpAddress: string | undefined;

  /**
   * <p> The network output name. This name is used to reference the output and must be unique among outputs in this bridge. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The network output's gateway network name. </p>
   * @public
   */
  NetworkName: string | undefined;

  /**
   * <p> The network output port. </p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p> The network output protocol. </p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * <p> The network output TTL. </p>
   * @public
   */
  Ttl: number | undefined;
}

/**
 * <p> Add outputs to the specified bridge.</p>
 * @public
 */
export interface AddBridgeOutputRequest {
  /**
   * <p> The network output of the bridge. A network output is delivered to your premises. </p>
   * @public
   */
  NetworkOutput?: AddBridgeNetworkOutputRequest | undefined;
}

/**
 * <p> The settings for attaching a VPC interface to an resource. </p>
 * @public
 */
export interface VpcInterfaceAttachment {
  /**
   * <p> The name of the VPC interface to use for this resource.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * <p> Add a flow source to an existing bridge. </p>
 * @public
 */
export interface AddBridgeFlowSourceRequest {
  /**
   * <p> The Amazon Resource Number (ARN) of the flow to use as a source of this bridge. </p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p>The name of the VPC interface attachment to use for this source. </p>
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * <p> The name of the flow source. This name is used to reference the source and must be unique among sources in this bridge. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p> The settings related to the multicast source. </p>
 * @public
 */
export interface MulticastSourceSettings {
  /**
   * <p> The IP address of the source for source-specific multicast (SSM).</p>
   * @public
   */
  MulticastSourceIp?: string | undefined;
}

/**
 * <p> Add a network source to an existing bridge. </p>
 * @public
 */
export interface AddBridgeNetworkSourceRequest {
  /**
   * <p> The network source multicast IP.</p>
   * @public
   */
  MulticastIp: string | undefined;

  /**
   * <p> The settings related to the multicast source. </p>
   * @public
   */
  MulticastSourceSettings?: MulticastSourceSettings | undefined;

  /**
   * <p> The name of the network source. This name is used to reference the source and must be unique among sources in this bridge.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The network source's gateway network name.</p>
   * @public
   */
  NetworkName: string | undefined;

  /**
   * <p> The network source port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p> The network source protocol.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol: Protocol | undefined;
}

/**
 * <p> Add an output to a bridge. </p>
 * @public
 */
export interface AddBridgeSourceRequest {
  /**
   * <p> The source of the flow. </p>
   * @public
   */
  FlowSource?: AddBridgeFlowSourceRequest | undefined;

  /**
   * <p> The source of the network. </p>
   * @public
   */
  NetworkSource?: AddBridgeNetworkSourceRequest | undefined;
}

/**
 * <p> The settings that you want to use to define the media stream.</p>
 * @public
 */
export interface FmtpRequest {
  /**
   * <p> The format of the audio channel.</p>
   * @public
   */
  ChannelOrder?: string | undefined;

  /**
   * <p> The format that is used for the representation of color.</p>
   * @public
   */
  Colorimetry?: Colorimetry | undefined;

  /**
   * <p> The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the <code>exactFramerate</code>.</p>
   * @public
   */
  ExactFramerate?: string | undefined;

  /**
   * <p> The pixel aspect ratio (PAR) of the video.</p>
   * @public
   */
  Par?: string | undefined;

  /**
   * <p> The encoding range of the video.</p>
   * @public
   */
  Range?: Range | undefined;

  /**
   * <p> The type of compression that was used to smooth the video’s appearance.</p>
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * <p> The transfer characteristic system (TCS) that is used in the video.</p>
   * @public
   */
  Tcs?: Tcs | undefined;
}

/**
 * <p>Attributes that are related to the media stream. </p>
 * @public
 */
export interface MediaStreamAttributesRequest {
  /**
   * <p>The settings that you want to use to define the media stream. </p>
   * @public
   */
  Fmtp?: FmtpRequest | undefined;

  /**
   * <p>The audio language, in a format that is recognized by the receiver. </p>
   * @public
   */
  Lang?: string | undefined;
}

/**
 * <p> The media stream that you want to add to the flow. </p>
 * @public
 */
export interface AddMediaStreamRequest {
  /**
   * <p> The attributes that you want to assign to the new media stream.</p>
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * <p> The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.</p>
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * <p> A description that can help you quickly identify what your media stream is used for.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> A unique identifier for the media stream. </p>
   * @public
   */
  MediaStreamId: number | undefined;

  /**
   * <p> A name that helps you distinguish one media stream from another.</p>
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * <p> The type of media stream.</p>
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * <p> The resolution of the video.</p>
   * @public
   */
  VideoFormat?: string | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the media stream. </p>
   * @public
   */
  MediaStreamTags?: Record<string, string> | undefined;
}

/**
 * <p> Encryption information.</p>
 * @public
 */
export interface Encryption {
  /**
   * <p> The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).</p>
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * <p> A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.</p>
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * <p> The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * <p> The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).</p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p> The Amazon Web Services Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p> An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p> The ARN of the role that you created during setup (when you set up MediaConnect as a trusted entity).</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p> The ARN of the secret that you created in Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p> The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p> The VPC interface that you want to designate where the media stream is coming from or going to.</p>
 * @public
 */
export interface InterfaceRequest {
  /**
   * <p> The name of the VPC interface.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The definition of a media stream that you want to associate with the output. </p>
 * @public
 */
export interface DestinationConfigurationRequest {
  /**
   * <p>The IP address where you want MediaConnect to send contents of the media stream.</p>
   * @public
   */
  DestinationIp: string | undefined;

  /**
   * <p> The port that you want MediaConnect to use when it distributes the media stream to the output.</p>
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * <p> The VPC interface that you want to use for the media stream associated with the output.</p>
   * @public
   */
  Interface: InterfaceRequest | undefined;
}

/**
 * <p> A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.</p>
 * @public
 */
export interface EncodingParametersRequest {
  /**
   * <p> A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.</p>
   * @public
   */
  CompressionFactor: number | undefined;

  /**
   * <p> A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, if at least one source on the flow uses the CDI protocol.</p>
   * @public
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * <p> The media stream that you want to associate with the output, and the parameters for that association.</p>
 * @public
 */
export interface MediaStreamOutputConfigurationRequest {
  /**
   * <p> The media streams that you want to associate with the output. </p>
   * @public
   */
  DestinationConfigurations?: DestinationConfigurationRequest[] | undefined;

  /**
   * <p> The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.</p>
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * <p> A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source. </p>
   * @public
   */
  EncodingParameters?: EncodingParametersRequest | undefined;

  /**
   * <p> The name of the media stream that is associated with the output.</p>
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * <p>Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.</p>
 * @public
 */
export interface AutomaticEncryptionKeyConfiguration {}

/**
 * <p>The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.</p>
 * @public
 */
export interface SecretsManagerEncryptionKeyConfiguration {
  /**
   * <p>The ARN of the Secrets Manager secret used for transit encryption.</p>
   * @public
   */
  SecretArn: string | undefined;

  /**
   * <p>The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * <p>Configuration settings for flow transit encryption keys.</p>
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
   * <p>The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.</p>
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.</p>
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
 * <p>The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.</p>
 * @public
 */
export interface FlowTransitEncryption {
  /**
   * <p>The type of encryption key to use for flow transit encryption.</p>
   * @public
   */
  EncryptionKeyType?: FlowTransitEncryptionKeyType | undefined;

  /**
   * <p>The configuration details for the encryption key.</p>
   * @public
   */
  EncryptionKeyConfiguration: FlowTransitEncryptionKeyConfiguration | undefined;
}

/**
 * <p> A request to add an output to a flow.</p>
 * @public
 */
export interface AddOutputRequest {
  /**
   * <p> The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * <p> A description of the output. This description appears only on the Audit Manager console and will not be seen by the end user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The IP address from which video will be sent to output destinations.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p> The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p> The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.</p>
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * <p> The media streams that are associated with the output, and the parameters for those associations.</p>
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined;

  /**
   * <p> The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.</p>
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * <p> The name of the output. This value must be unique within the current flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The port to use when content is distributed to this output.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p> The protocol to use for the output.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p> The remote ID for the Zixi-pull output stream.</p>
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * <p> The port that the flow uses to send outbound requests to initiate connection with the sender.</p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p> The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.</p>
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * <p> The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this output.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * <p> An indication of whether the new output should be enabled or disabled as soon as it is created. If you don't specify the outputStatus field in your request, MediaConnect sets it to ENABLED.</p>
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * <p>A quality setting for the NDI Speed HQ encoder. </p>
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;

  /**
   * <p> A suffix for the name of the NDI® sender that the flow creates. If a custom name isn't specified, MediaConnect uses the output name. </p>
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the output. </p>
   * @public
   */
  OutputTags?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether to enable or disable router integration when creating a new flow output.</p>
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * <p>The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.</p>
   * @public
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption | undefined;

  /**
   * <p>Controls how MediaConnect generates timecodes for NDI output frames. If you don't specify this field, MediaConnect uses <code>EMBEDDED_TIMECODE</code>.</p> <ul> <li> <p> <code>EMBEDDED_TIMECODE</code> (default) - Preserves timecodes from the input transport stream. The timecodes must be embedded in the video stream as SEI timing messages. If no embedded timecode is detected, MediaConnect uses the UTC system time instead.</p> </li> <li> <p> <code>UTC_SYSTEM_TIME</code> - Generates timecodes based on the system clock time when each frame is sent.</p> </li> </ul>
   * @public
   */
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource | undefined;

  /**
   * <p>The audio reference level of the NDI receiver, in decibels relative to full scale (dBFS). Common values are <code>-20</code> (NDI and SMPTE) and <code>-18</code> (EBU). If you don't specify this field, MediaConnect uses <code>-20</code>.</p>
   * @public
   */
  NdiAudioReferenceLevel?: number | undefined;
}

/**
 * <p>Configures settings for the <code>SilentAudio</code> metric. </p>
 * @public
 */
export interface SilentAudio {
  /**
   * <p>Indicates whether the <code>SilentAudio</code> metric is enabled or disabled. </p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>Specifies the number of consecutive seconds of silence that triggers an event or alert. </p>
   * @public
   */
  ThresholdSeconds?: number | undefined;
}

/**
 * <p> Specifies the configuration for audio stream metrics monitoring.</p>
 * @public
 */
export interface AudioMonitoringSetting {
  /**
   * <p> Detects periods of silence. </p>
   * @public
   */
  SilentAudio?: SilentAudio | undefined;
}

/**
 * <p> The output of the bridge. A flow output is delivered to the Amazon Web Services cloud. </p>
 * @public
 */
export interface BridgeFlowOutput {
  /**
   * <p> The Amazon Resource Number (ARN) of the cloud flow.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The Amazon Resource Number (ARN) of the flow source.</p>
   * @public
   */
  FlowSourceArn: string | undefined;

  /**
   * <p> The name of the bridge's output.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p> The output of the bridge. A network output is delivered to your premises.</p>
 * @public
 */
export interface BridgeNetworkOutput {
  /**
   * <p> The network output IP address.</p>
   * @public
   */
  IpAddress: string | undefined;

  /**
   * <p> The network output name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The network output's gateway network name.</p>
   * @public
   */
  NetworkName: string | undefined;

  /**
   * <p> The network output's port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p> The network output protocol.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * <p> The network output TTL.</p>
   * @public
   */
  Ttl: number | undefined;
}

/**
 * <p> The output of the bridge.</p>
 * @public
 */
export interface BridgeOutput {
  /**
   * <p> The output of the associated flow. </p>
   * @public
   */
  FlowOutput?: BridgeFlowOutput | undefined;

  /**
   * <p> The network output for the bridge. </p>
   * @public
   */
  NetworkOutput?: BridgeNetworkOutput | undefined;
}

/**
 * <p> The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.</p>
 * @public
 */
export interface BridgeFlowSource {
  /**
   * <p> The ARN of the cloud flow used as a source of this bridge.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this source.</p>
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * <p> The name of the flow source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The Amazon Resource Number (ARN) of the output.</p>
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * <p> The source of the bridge. A network source originates at your premises.</p>
 * @public
 */
export interface BridgeNetworkSource {
  /**
   * <p> The network source multicast IP.</p>
   * @public
   */
  MulticastIp: string | undefined;

  /**
   * <p>The settings related to the multicast source. </p>
   * @public
   */
  MulticastSourceSettings?: MulticastSourceSettings | undefined;

  /**
   * <p> The name of the network source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The network source's gateway network name.</p>
   * @public
   */
  NetworkName: string | undefined;

  /**
   * <p> The network source port.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p> The network source protocol.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol: Protocol | undefined;
}

/**
 * <p> The bridge's source.</p>
 * @public
 */
export interface BridgeSource {
  /**
   * <p> The source of the associated flow. </p>
   * @public
   */
  FlowSource?: BridgeFlowSource | undefined;

  /**
   * <p> The network source for the bridge. </p>
   * @public
   */
  NetworkSource?: BridgeNetworkSource | undefined;
}

/**
 * <p> The VPC interface that is used for the media stream associated with the source or output.</p>
 * @public
 */
export interface Interface {
  /**
   * <p> The name of the VPC interface.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p> The transport parameters that you want to associate with an outbound media stream.</p>
 * @public
 */
export interface DestinationConfiguration {
  /**
   * <p>The IP address where you want MediaConnect to send contents of the media stream.</p>
   * @public
   */
  DestinationIp: string | undefined;

  /**
   * <p> The port that you want MediaConnect to use when it distributes the media stream to the output.</p>
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * <p> The VPC interface that you want to use for the media stream associated with the output.</p>
   * @public
   */
  Interface: Interface | undefined;

  /**
   * <p>The IP address that the receiver requires in order to establish a connection with the flow. This value is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the CDI or ST 2110 JPEG XS or protocol. </p>
   * @public
   */
  OutboundIp: string | undefined;
}

/**
 * <p> The settings for a flow entitlement.</p>
 * @public
 */
export interface Entitlement {
  /**
   * <p> Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</p>
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * <p> A description of the entitlement.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The type of encryption that will be used on the output that is associated with this entitlement.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p> The ARN of the entitlement. </p>
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * <p> An indication of whether the entitlement is enabled. </p>
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * <p> The name of the entitlement. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source. </p>
   * @public
   */
  Subscribers: string[] | undefined;
}

/**
 * <p>The network settings for a gateway. </p>
 * @public
 */
export interface GatewayNetwork {
  /**
   * <p>A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. </p>
   * @public
   */
  CidrBlock: string | undefined;

  /**
   * <p>The name of the network. This name is used to reference the network and must be unique among networks in this gateway. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p> The entitlements that you want to grant on a flow.</p>
 * @public
 */
export interface GrantEntitlementRequest {
  /**
   * <p> Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</p>
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * <p> A description of the entitlement. This description appears only on the MediaConnect console and will not be seen by the subscriber or end user. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The type of encryption that will be used on the output that is associated with this entitlement. Allowable encryption types: static-key, speke.</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p> An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.</p>
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * <p> The name of the entitlement. This value must be unique within the current flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.</p>
   * @public
   */
  Subscribers: string[] | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the entitlement. </p>
   * @public
   */
  EntitlementTags?: Record<string, string> | undefined;
}

/**
 * <p> The transport parameters that are associated with an incoming media stream.</p>
 * @public
 */
export interface InputConfiguration {
  /**
   * <p> The IP address that the flow listens on for incoming content for a media stream.</p>
   * @public
   */
  InputIp: string | undefined;

  /**
   * <p> The port that the flow listens on for an incoming media stream.</p>
   * @public
   */
  InputPort: number | undefined;

  /**
   * <p> The VPC interface where the media stream comes in from.</p>
   * @public
   */
  Interface: Interface | undefined;
}

/**
 * <p> The transport parameters that you want to associate with an incoming media stream.</p>
 * @public
 */
export interface InputConfigurationRequest {
  /**
   * <p> The port that you want the flow to listen on for an incoming media stream.</p>
   * @public
   */
  InputPort: number | undefined;

  /**
   * <p> The VPC interface that you want to use for the incoming media stream.</p>
   * @public
   */
  Interface: InterfaceRequest | undefined;
}

/**
 * <p> Displays details of the selected bridge.</p>
 * @public
 */
export interface ListedBridge {
  /**
   * <p> The ARN of the bridge.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p>The state of the bridge. </p>
   * @public
   */
  BridgeState: BridgeState | undefined;

  /**
   * <p> The type of the bridge.</p>
   * @public
   */
  BridgeType: string | undefined;

  /**
   * <p> The name of the bridge.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The ARN of the gateway associated with the bridge.</p>
   * @public
   */
  PlacementArn: string | undefined;
}

/**
 * <p> An entitlement that has been granted to you from other Amazon Web Services accounts.</p>
 * @public
 */
export interface ListedEntitlement {
  /**
   * <p> Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</p>
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * <p> The ARN of the entitlement.</p>
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * <p> The name of the entitlement.</p>
   * @public
   */
  EntitlementName: string | undefined;
}

/**
 * <p> The maintenance setting of a flow.</p>
 * @public
 */
export interface Maintenance {
  /**
   * <p> A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.</p>
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * <p> The Maintenance has to be performed before this deadline in ISO UTC format. Example: 2021-01-30T08:30:00Z.</p>
   * @public
   */
  MaintenanceDeadline?: string | undefined;

  /**
   * <p> A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.</p>
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * <p> UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.</p>
   * @public
   */
  MaintenanceStartHour?: string | undefined;
}

/**
 * <p> A summary of a flow, including its ARN, Availability Zone, and source type.</p>
 * @public
 */
export interface ListedFlow {
  /**
   * <p> The Availability Zone that the flow was created in.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p> A description of the flow.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p> The ARN of the flow.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The type of source. This value is either owned (originated somewhere other than an MediaConnect flow owned by another Amazon Web Services account) or entitled (originated at a MediaConnect flow owned by another Amazon Web Services account).</p>
   * @public
   */
  SourceType: SourceType | undefined;

  /**
   * <p> The current status of the flow.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p> The maintenance settings for the flow. </p>
   * @public
   */
  Maintenance?: Maintenance | undefined;
}

/**
 * <p> A summary of a gateway, including its name, ARN, and status.</p>
 * @public
 */
export interface ListedGateway {
  /**
   * <p> The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p> The status of the gateway.</p>
   * @public
   */
  GatewayState: GatewayState | undefined;

  /**
   * <p> The name of the gateway.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p> A summary of an instance. </p>
 * @public
 */
export interface ListedGatewayInstance {
  /**
   * <p> The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  GatewayInstanceArn: string | undefined;

  /**
   * <p> The managed instance ID generated by the SSM install. This will begin with "mi-".</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The status of the instance.</p>
   * @public
   */
  InstanceState?: InstanceState | undefined;
}

/**
 * <p> A set of parameters that define the media stream. </p>
 * @public
 */
export interface Fmtp {
  /**
   * <p> The format of the audio channel. </p>
   * @public
   */
  ChannelOrder?: string | undefined;

  /**
   * <p>The format used for the representation of color. </p>
   * @public
   */
  Colorimetry?: Colorimetry | undefined;

  /**
   * <p>The frame rate for the video stream, in frames/second. For example: 60000/1001. </p>
   * @public
   */
  ExactFramerate?: string | undefined;

  /**
   * <p>The pixel aspect ratio (PAR) of the video. </p>
   * @public
   */
  Par?: string | undefined;

  /**
   * <p>The encoding range of the video. </p>
   * @public
   */
  Range?: Range | undefined;

  /**
   * <p>The type of compression that was used to smooth the video’s appearance. </p>
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * <p>The transfer characteristic system (TCS) that is used in the video. </p>
   * @public
   */
  Tcs?: Tcs | undefined;
}

/**
 * <p>Attributes that are related to the media stream. </p>
 * @public
 */
export interface MediaStreamAttributes {
  /**
   * <p>The settings that you want to use to define the media stream. </p>
   * @public
   */
  Fmtp: Fmtp | undefined;

  /**
   * <p>The audio language, in a format that is recognized by the receiver. </p>
   * @public
   */
  Lang?: string | undefined;
}

/**
 * <p> A media stream represents one component of your content, such as video, audio, or ancillary data. After you add a media stream to your flow, you can associate it with sources and outputs that use the ST 2110 JPEG XS or CDI protocol. </p>
 * @public
 */
export interface MediaStream {
  /**
   * <p> Attributes that are related to the media stream.</p>
   * @public
   */
  Attributes?: MediaStreamAttributes | undefined;

  /**
   * <p> The sample rate for the stream. This value is measured in Hz.</p>
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * <p> A description that can help you quickly identify what your media stream is used for.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.</p>
   * @public
   */
  Fmt: number | undefined;

  /**
   * <p> A unique identifier for the media stream. </p>
   * @public
   */
  MediaStreamId: number | undefined;

  /**
   * <p> A name that helps you distinguish one media stream from another. </p>
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * <p> The type of media stream. </p>
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * <p> The resolution of the video. </p>
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * <p> A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.</p>
 * @public
 */
export interface EncodingParameters {
  /**
   * <p> A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.</p>
   * @public
   */
  CompressionFactor: number | undefined;

  /**
   * <p> A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.</p>
   * @public
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * <p> The media stream that is associated with the output, and the parameters for that association.</p>
 * @public
 */
export interface MediaStreamOutputConfiguration {
  /**
   * <p> The transport parameters that are associated with each outbound media stream.</p>
   * @public
   */
  DestinationConfigurations?: DestinationConfiguration[] | undefined;

  /**
   * <p> The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.</p>
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * <p>A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source. </p>
   * @public
   */
  EncodingParameters?: EncodingParameters | undefined;

  /**
   * <p> The name of the media stream.</p>
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * <p>The media stream that is associated with the source, and the parameters for that association. </p>
 * @public
 */
export interface MediaStreamSourceConfiguration {
  /**
   * <p> The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv. </p>
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * <p>The media streams that you want to associate with the source. </p>
   * @public
   */
  InputConfigurations?: InputConfiguration[] | undefined;

  /**
   * <p>A name that helps you distinguish one media stream from another. </p>
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * <p>The media stream that you want to associate with the source, and the parameters for that association. </p>
 * @public
 */
export interface MediaStreamSourceConfigurationRequest {
  /**
   * <p>The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv. </p>
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * <p>The media streams that you want to associate with the source. </p>
   * @public
   */
  InputConfigurations?: InputConfigurationRequest[] | undefined;

  /**
   * <p>The name of the media stream. </p>
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * <p>The details of an error message. </p>
 * @public
 */
export interface MessageDetail {
  /**
   * <p> The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p> The specific error message that MediaConnect returns to help you understand the reason that the request did not succeed.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p> The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * <p>Specifies the configuration settings for individual NDI® discovery servers. A maximum of 3 servers is allowed. </p>
 * @public
 */
export interface NdiDiscoveryServerConfig {
  /**
   * <p>The unique network address of the NDI discovery server. </p>
   * @public
   */
  DiscoveryServerAddress: string | undefined;

  /**
   * <p>The port for the NDI discovery server. Defaults to 5959 if a custom port isn't specified. </p>
   * @public
   */
  DiscoveryServerPort?: number | undefined;

  /**
   * <p>The identifier for the Virtual Private Cloud (VPC) network interface used by the flow. </p>
   * @public
   */
  VpcInterfaceAdapter: string | undefined;
}

/**
 * <p>The color signaling of the video stream.</p>
 * @public
 */
export interface ColorInformation {
  /**
   * <p>The color primaries that the video stream uses (for example, <code>BT709</code> or <code>BT2020</code>).</p>
   * @public
   */
  Colorimetry?: VideoColorimetry | undefined;

  /**
   * <p>The transfer characteristics that the video stream uses (for example, <code>BT601</code>, <code>BT709</code>, <code>BT2100_PQ</code>, or <code>BT2100_HLG</code>).</p>
   * @public
   */
  TransferCharacteristics?: VideoTransferCharacteristics | undefined;

  /**
   * <p>The YCbCr matrix coefficients that the video stream uses (for example, <code>BT709</code> or <code>BT2020_NCL</code>).</p>
   * @public
   */
  MatrixCoefficients?: VideoMatrixCoefficients | undefined;
}

/**
 * <p> The frame resolution used by the video stream.</p>
 * @public
 */
export interface FrameResolution {
  /**
   * <p> The number of pixels in the height of the video frame.</p>
   * @public
   */
  FrameHeight: number | undefined;

  /**
   * <p> The number of pixels in the width of the video frame.</p>
   * @public
   */
  FrameWidth: number | undefined;
}

/**
 * <p> Detailed information about a single media stream that is part of an NDI® source. This includes details about the stream type, codec, resolution, frame rate, audio channels, and sample rate. </p>
 * @public
 */
export interface NdiMediaStreamInfo {
  /**
   * <p> The type of media stream (for example, <code>Video</code> or <code>Audio</code>). </p>
   * @public
   */
  StreamType: string | undefined;

  /**
   * <p> The codec used for the media stream. For NDI sources, use <code>speed-hq</code>. </p>
   * @public
   */
  Codec: string | undefined;

  /**
   * <p> A unique identifier for the media stream. </p>
   * @public
   */
  StreamId: number | undefined;

  /**
   * <p> The method used to display video frames. Used when the <code>streamType</code> is <code>Video</code>.</p>
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * <p> The color signaling of the video stream. Used when the <code>streamType</code> is <code>Video</code>. </p>
   * @public
   */
  Color?: ColorInformation | undefined;

  /**
   * <p> The width and height dimensions of the video frame in pixels. Used when the <code>streamType</code> is <code>Video</code>. </p>
   * @public
   */
  FrameResolution?: FrameResolution | undefined;

  /**
   * <p> The number of video frames displayed per second. Used when the <code>streamType</code> is <code>Video</code>. </p>
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * <p> The number of audio channels in the stream. Used when the <code>streamType</code> is <code>Audio</code>.</p>
   * @public
   */
  Channels?: number | undefined;

  /**
   * <p> The number of audio samples captured per second, measured in kilohertz (kHz). Used when the <code>streamType</code> is <code>Audio</code>.</p>
   * @public
   */
  SampleRate?: number | undefined;
}

/**
 * <p> Information about a single NDI® sender, including its name. </p>
 * @public
 */
export interface NdiSourceInfo {
  /**
   * <p> The name of the upstream NDI sender. </p>
   * @public
   */
  SourceName: string | undefined;
}

/**
 * <p> A definition of what is being billed for, including the type and amount.</p>
 * @public
 */
export interface ResourceSpecification {
  /**
   * <p> The amount of outbound bandwidth that is discounted in the offering.</p>
   * @public
   */
  ReservedBitrate?: number | undefined;

  /**
   * <p> The type of resource and the unit that is being billed for.</p>
   * @public
   */
  ResourceType: ResourceType | undefined;
}

/**
 * <p> A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time. </p>
 * @public
 */
export interface Offering {
  /**
   * <p> The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.</p>
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * <p> The length of time that your reservation would be active.</p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p> The unit of measurement for the duration of the offering.</p>
   * @public
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.</p>
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * <p> A description of the offering.</p>
   * @public
   */
  OfferingDescription: string | undefined;

  /**
   * <p> The cost of a single unit. This value, in combination with priceUnits, makes up the rate.</p>
   * @public
   */
  PricePerUnit: string | undefined;

  /**
   * <p> The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate.</p>
   * @public
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * <p> A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.</p>
   * @public
   */
  ResourceSpecification: ResourceSpecification | undefined;
}

/**
 * <p> The settings for the NDI® source. This includes the exact name of the upstream NDI sender that you want to connect to your source. </p> <note> <p>When you update the NDI source, include only the members you want to change. MediaConnect leaves the members that you don't specify unchanged.</p> </note>
 * @public
 */
export interface NdiSourceSettings {
  /**
   * <p> The exact name of an existing NDI sender that's registered with your discovery server. If included, the format of this name must be <code>MACHINENAME (ProgramName)</code>. </p>
   * @public
   */
  SourceName?: string | undefined;

  /**
   * <p>The audio reference level of the NDI sender, in decibels relative to full scale (dBFS). Common values are <code>-20</code> (NDI and SMPTE) and <code>-18</code> (EBU). If you don't specify this field, MediaConnect uses <code>-20</code>.</p>
   * @public
   */
  AudioReferenceLevel?: number | undefined;
}

/**
 * <p> Attributes related to the transport stream that are used in a source or output.</p>
 * @public
 */
export interface Transport {
  /**
   * <p> The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16</p>
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * <p> The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.</p>
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * <p> The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.</p>
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * <p> The size of the buffer (in milliseconds) to use to sync incoming source data.</p>
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * <p> The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.</p>
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * <p> The protocol that is used by the source or output.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * <p> The remote ID for the Zixi-pull stream.</p>
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * <p> The port that the flow uses to send outbound requests to initiate connection with the sender.</p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p> The IP address that the flow communicates with to initiate connection with the sender.</p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p> The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.</p>
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * <p> Source IP or domain name for SRT-caller protocol.</p>
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * <p> Source port for SRT-caller protocol.</p>
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * <p> The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>A quality setting for the NDI Speed HQ encoder. </p>
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;

  /**
   * <p>A suffix for the name of the NDI® sender that the flow creates. If a custom name isn't specified, MediaConnect uses the output name. </p>
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * <p> The settings for the NDI source. This includes the exact name of the upstream NDI sender that you want to connect to your source. </p>
   * @public
   */
  NdiSourceSettings?: NdiSourceSettings | undefined;

  /**
   * <p>The timecode source for NDI output frames. For NDI outputs, this field is always present and defaults to <code>EMBEDDED_TIMECODE</code>.</p> <ul> <li> <p> <code>EMBEDDED_TIMECODE</code> - Preserves timecodes from the input transport stream. The timecodes must be embedded in the video stream as SEI timing messages. If no embedded timecode is detected, MediaConnect uses the UTC system time instead.</p> </li> <li> <p> <code>UTC_SYSTEM_TIME</code> - Generates timecodes based on the system clock time when each frame is sent.</p> </li> </ul>
   * @public
   */
  NdiOutputTimecodeSource?: NdiOutputTimecodeSource | undefined;

  /**
   * <p>The audio reference level of the NDI receiver, in decibels relative to full scale (dBFS). Common values are <code>-20</code> (NDI and SMPTE) and <code>-18</code> (EBU). For NDI outputs, this field is always present and defaults to <code>-20</code>.</p>
   * @public
   */
  NdiAudioReferenceLevel?: number | undefined;
}

/**
 * <p>The settings for an output. </p>
 * @public
 */
export interface Output {
  /**
   * <p> Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</p>
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * <p> A description of the output.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The address where you want to send the output.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p> The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).</p>
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * <p> The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.</p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The IP address that the receiver requires in order to establish a connection with the flow. For public networking, the ListenerAddress is represented by the elastic IP address of the flow. For private networking, the ListenerAddress is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the Zixi pull or SRT listener protocol.</p>
   * @public
   */
  ListenerAddress?: string | undefined;

  /**
   * <p> The input ARN of the MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.</p>
   * @public
   */
  MediaLiveInputArn?: string | undefined;

  /**
   * <p> The configuration for each media stream that is associated with the output.</p>
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[] | undefined;

  /**
   * <p> The name of the output. This value must be unique within the current flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The ARN of the output.</p>
   * @public
   */
  OutputArn: string | undefined;

  /**
   * <p> The port to use when content is distributed to this output.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p> Attributes related to the transport stream that are used in the output.</p>
   * @public
   */
  Transport?: Transport | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this output.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * <p> The ARN of the bridge added to this output.</p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The bridge output ports currently in use.</p>
   * @public
   */
  BridgePorts?: number[] | undefined;

  /**
   * <p> An indication of whether the output is transmitting data or not.</p>
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * <p>The IP address of the device that is currently receiving content from this output.</p> <note> <ul> <li> <p>For outputs that use protocols where you specify the destination (such as SRT Caller or Zixi Push), this value matches the configured destination address.</p> </li> <li> <p>For outputs that use listener protocols (such as SRT Listener), this value shows the address of the connected receiver. </p> </li> <li> <p>Peer IP addresses aren't available for entitlements, managed MediaLive outputs, NDI® sources and outputs, and CDI/ST2110 outputs. </p> </li> <li> <p>The peer IP address might not be visible for flows that haven't been started yet, or flows that were started before May 2025. In these cases, restart your flow to see the peer IP address.</p> </li> </ul> </note>
   * @public
   */
  PeerIpAddress?: string | undefined;

  /**
   * <p>Indicates if router integration is enabled or disabled on the flow output.</p>
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * <p>The encryption configuration for the output when router integration is enabled.</p>
   * @public
   */
  RouterIntegrationTransitEncryption?: FlowTransitEncryption | undefined;

  /**
   * <p>The ARN of the router input that's connected to this flow output.</p>
   * @public
   */
  ConnectedRouterInputArn?: string | undefined;
}

/**
 * <p> A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.</p>
 * @public
 */
export interface Reservation {
  /**
   * <p> The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.</p>
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * <p> The length of time that this reservation is active. MediaConnect defines this value in the offering.</p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p> The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering.</p>
   * @public
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * <p> The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.</p>
   * @public
   */
  End: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.</p>
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * <p> A description of the offering. MediaConnect defines this value in the offering.</p>
   * @public
   */
  OfferingDescription: string | undefined;

  /**
   * <p> The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.</p>
   * @public
   */
  PricePerUnit: string | undefined;

  /**
   * <p> The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering.</p>
   * @public
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.</p>
   * @public
   */
  ReservationArn: string | undefined;

  /**
   * <p> The name that you assigned to the reservation when you purchased the offering.</p>
   * @public
   */
  ReservationName: string | undefined;

  /**
   * <p> The status of your reservation.</p>
   * @public
   */
  ReservationState: ReservationState | undefined;

  /**
   * <p> A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.</p>
   * @public
   */
  ResourceSpecification: ResourceSpecification | undefined;

  /**
   * <p> The day and time that the reservation becomes active. You set this value when you purchase the offering.</p>
   * @public
   */
  Start: string | undefined;
}

/**
 * <p> The source configuration for cloud flows receiving a stream from a bridge.</p>
 * @public
 */
export interface SetGatewayBridgeSourceRequest {
  /**
   * <p> The ARN of the bridge feeding this flow.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this bridge source.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * <p> The settings for the source of the flow.</p>
 * @public
 */
export interface SetSourceRequest {
  /**
   * <p> The type of encryption that is used on the content ingested from this source. Allowable encryption types: static-key.</p>
   * @public
   */
  Decryption?: Encryption | undefined;

  /**
   * <p> A description for the source. This value is not used or seen outside of the current MediaConnect account.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.</p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The port that the flow will be listening on for incoming content.</p>
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * <p> The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.</p>
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * <p> The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.</p>
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * <p> The size of the buffer (in milliseconds) to use to sync incoming source data.</p>
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * <p> The media streams that are associated with the source, and the parameters for those associations.</p>
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * <p> The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.</p>
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * <p> The name of the source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> The protocol that is used by the source.</p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p> The port that the flow uses to send outbound requests to initiate connection with the sender.</p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p> The IP address that the flow communicates with to initiate connection with the sender.</p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p> Source IP or domain name for SRT-caller protocol.</p>
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * <p> Source port for SRT-caller protocol.</p>
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * <p> The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p> The name of the VPC interface to use for this source.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * <p> The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * <p> The source configuration for cloud flows receiving a stream from a bridge.</p>
   * @public
   */
  GatewayBridgeSource?: SetGatewayBridgeSourceRequest | undefined;

  /**
   * <p> The settings for the NDI® source. This includes the exact name of the upstream NDI sender that you want to connect to your source. </p>
   * @public
   */
  NdiSourceSettings?: NdiSourceSettings | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the source. </p>
   * @public
   */
  SourceTags?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether to enable or disable router integration when setting a flow source.</p>
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * <p>The decryption configuration for the flow source when router integration is enabled. Specifies how the source content should be decrypted when router integration is used.</p>
   * @public
   */
  RouterIntegrationTransitDecryption?: FlowTransitEncryption | undefined;
}

/**
 * <p> The source configuration for cloud flows receiving a stream from a bridge.</p>
 * @public
 */
export interface GatewayBridgeSource {
  /**
   * <p> The ARN of the bridge feeding this flow.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this bridge source.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * <p> The settings for the source of the flow.</p>
 * @public
 */
export interface Source {
  /**
   * <p> Percentage from 0-100 of the data transfer cost to be billed to the subscriber.</p>
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * <p> The type of encryption that is used on the content ingested from this source.</p>
   * @public
   */
  Decryption?: Encryption | undefined;

  /**
   * <p> A description for the source. This value is not used or seen outside of the current MediaConnect account.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The ARN of the entitlement that allows you to subscribe to content that comes from another Amazon Web Services account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.</p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The IP address that the flow will be listening on for incoming content.</p>
   * @public
   */
  IngestIp?: string | undefined;

  /**
   * <p> The port that the flow will be listening on for incoming content.</p>
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * <p> The media streams that are associated with the source, and the parameters for those associations.</p>
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[] | undefined;

  /**
   * <p> The name of the source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The port that the flow uses to send outbound requests to initiate connection with the sender.</p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p> The IP address that the flow communicates with to initiate connection with the sender.</p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p> The ARN of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p> Attributes related to the transport stream that are used in the source.</p>
   * @public
   */
  Transport?: Transport | undefined;

  /**
   * <p> The name of the VPC interface that is used for this source.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * <p> The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * <p> The source configuration for cloud flows receiving a stream from a bridge.</p>
   * @public
   */
  GatewayBridgeSource?: GatewayBridgeSource | undefined;

  /**
   * <p>The IP address of the device that is currently sending content to this source. </p> <note> <ul> <li> <p>For sources that use protocols where you specify the origin (such as SRT Caller), this value matches the configured origin address. </p> </li> <li> <p>For sources that use listener protocols (such as SRT Listener or RTP), this value shows the address of the connected sender. </p> </li> <li> <p>Peer IP addresses aren't available for entitlements and CDI/ST2110 sources.</p> </li> <li> <p>The peer IP address might not be visible for flows that haven't been started yet, or flows that were started before May 2025. In these cases, restart your flow to see the peer IP address.</p> </li> </ul> </note>
   * @public
   */
  PeerIpAddress?: string | undefined;

  /**
   * <p>Indicates if router integration is enabled or disabled on the flow source.</p>
   * @public
   */
  RouterIntegrationState?: State | undefined;

  /**
   * <p>The decryption configuration for the flow source when router integration is enabled.</p>
   * @public
   */
  RouterIntegrationTransitDecryption?: FlowTransitEncryption | undefined;

  /**
   * <p>The ARN of the router output that's currently connected to this source.</p>
   * @public
   */
  ConnectedRouterOutputArn?: string | undefined;
}

/**
 * <p> The metadata of an elementary transport stream.</p>
 * @public
 */
export interface TransportStream {
  /**
   * <p> The number of channels in the audio stream.</p>
   * @public
   */
  Channels?: number | undefined;

  /**
   * <p> The codec used by the stream.</p>
   * @public
   */
  Codec?: string | undefined;

  /**
   * <p>The color signaling of the video stream.</p>
   * @public
   */
  Color?: ColorInformation | undefined;

  /**
   * <p> The frame rate used by the video stream.</p>
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * <p>The frame resolution used by the video stream. </p>
   * @public
   */
  FrameResolution?: FrameResolution | undefined;

  /**
   * <p> The Packet ID (PID) as it is reported in the Program Map Table.</p>
   * @public
   */
  Pid: number | undefined;

  /**
   * <p> The sample rate used by the audio stream.</p>
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * <p> The sample bit size used by the audio stream.</p>
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * <p> The Stream Type as it is reported in the Program Map Table.</p>
   * @public
   */
  StreamType: string | undefined;
}

/**
 * <p> The metadata of a single transport stream program.</p>
 * @public
 */
export interface TransportStreamProgram {
  /**
   * <p> The Program Clock Reference (PCR) Packet ID (PID) as it is reported in the Program Association Table.</p>
   * @public
   */
  PcrPid: number | undefined;

  /**
   * <p> The program name as it is reported in the Program Association Table.</p>
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * <p> The program number as it is reported in the Program Association Table.</p>
   * @public
   */
  ProgramNumber: number | undefined;

  /**
   * <p> The program Packet ID (PID) as it is reported in the Program Association Table.</p>
   * @public
   */
  ProgramPid: number | undefined;

  /**
   * <p> The list of elementary transport streams in the program. The list includes video, audio, and data streams.</p>
   * @public
   */
  Streams: TransportStream[] | undefined;
}

/**
 * <p> Configures settings for the <code>BlackFrames</code> metric.</p>
 * @public
 */
export interface BlackFrames {
  /**
   * <p> Indicates whether the <code>BlackFrames</code> metric is enabled or disabled.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p> Specifies the number of consecutive seconds of black frames that triggers an event or alert.</p>
   * @public
   */
  ThresholdSeconds?: number | undefined;
}

/**
 * <p> Configures settings for the <code>FrozenFrames</code> metric.</p>
 * @public
 */
export interface FrozenFrames {
  /**
   * <p>Indicates whether the <code>FrozenFrames</code> metric is enabled or disabled.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p> Specifies the number of consecutive seconds of a static image that triggers an event or alert.</p>
   * @public
   */
  ThresholdSeconds?: number | undefined;
}

/**
 * <p>Specifies the configuration for video stream metrics monitoring.</p>
 * @public
 */
export interface VideoMonitoringSetting {
  /**
   * <p>Detects video frames that are black. </p>
   * @public
   */
  BlackFrames?: BlackFrames | undefined;

  /**
   * <p>Detects video frames that have not changed. </p>
   * @public
   */
  FrozenFrames?: FrozenFrames | undefined;
}

/**
 * <p> The settings for a VPC source.</p>
 * @public
 */
export interface VpcInterface {
  /**
   * <p> Immutable and has to be a unique against other VpcInterfaces in this Flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> IDs of the network interfaces created in customer's account by MediaConnect.</p>
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * <p> The type of network interface.</p>
   * @public
   */
  NetworkInterfaceType: NetworkInterfaceType | undefined;

  /**
   * <p> A role Arn MediaConnect can assume to create ENIs in your account.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p> Security Group IDs to be used on ENI.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p> Subnet must be in the AZ of the Flow. </p>
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * <p>The details of the VPC interfaces that you want to add to the flow. </p>
 * @public
 */
export interface VpcInterfaceRequest {
  /**
   * <p>The name for the VPC interface. This name must be unique within the flow. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of network interface. </p>
   * @public
   */
  NetworkInterfaceType?: NetworkInterfaceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that you created when you set up MediaConnect as a trusted service. </p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A virtual firewall to control inbound and outbound traffic. </p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p> The subnet IDs that you want to use for your VPC interface. A range of IP addresses in your VPC. When you create your VPC, you specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. This is the primary CIDR block for your VPC. When you create a subnet for your VPC, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block. The subnets that you use across all VPC interfaces on the flow must be in the same Availability Zone as the flow. </p>
   * @public
   */
  SubnetId: string | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the VPC network interface. </p>
   * @public
   */
  VpcInterfaceTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AddBridgeOutputsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The outputs that you want to add to this bridge.</p>
   * @public
   */
  Outputs: AddBridgeOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeOutputsResponse {
  /**
   * <p> The ARN of the bridge that you added outputs to.</p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The outputs that you added to this bridge.</p>
   * @public
   */
  Outputs?: BridgeOutput[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeSourcesRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The sources that you want to add to this bridge.</p>
   * @public
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeSourcesResponse {
  /**
   * <p> The ARN of the bridge that you added sources to.</p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The sources that you added to this bridge.</p>
   * @public
   */
  Sources?: BridgeSource[] | undefined;
}

/**
 * <p> Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises. </p>
 * @public
 */
export interface AddEgressGatewayBridgeRequest {
  /**
   * <p> The maximum expected bitrate (in bps) of the egress bridge.</p>
   * @public
   */
  MaxBitrate: number | undefined;
}

/**
 * @public
 */
export interface AddFlowMediaStreamsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The media streams that you want to add to the flow.</p>
   * @public
   */
  MediaStreams: AddMediaStreamRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowMediaStreamsResponse {
  /**
   * <p> The ARN of the flow that you added media streams to.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The media streams that you added to the flow.</p>
   * @public
   */
  MediaStreams?: MediaStream[] | undefined;
}

/**
 * @public
 */
export interface AddFlowOutputsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to add outputs to.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> A list of outputs that you want to add to the flow.</p>
   * @public
   */
  Outputs: AddOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowOutputsResponse {
  /**
   * <p> The ARN of the flow that these outputs were added to.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The details of the newly added outputs.</p>
   * @public
   */
  Outputs?: Output[] | undefined;
}

/**
 * @public
 */
export interface AddFlowSourcesRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> A list of sources that you want to add to the flow.</p>
   * @public
   */
  Sources: SetSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowSourcesResponse {
  /**
   * <p> The ARN of the flow that these sources were added to.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The details of the newly added sources.</p>
   * @public
   */
  Sources?: Source[] | undefined;
}

/**
 * @public
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> A list of VPC interfaces that you want to add to the flow.</p>
   * @public
   */
  VpcInterfaces: VpcInterfaceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowVpcInterfacesResponse {
  /**
   * <p> The ARN of the flow that these VPC interfaces were added to.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The details of the newly added VPC interfaces.</p>
   * @public
   */
  VpcInterfaces?: VpcInterface[] | undefined;
}

/**
 * <p>Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud. </p>
 * @public
 */
export interface AddIngressGatewayBridgeRequest {
  /**
   * <p> The maximum expected bitrate (in bps) of the ingress bridge. </p>
   * @public
   */
  MaxBitrate: number | undefined;

  /**
   * <p> The maximum number of expected outputs on the ingress bridge. </p>
   * @public
   */
  MaxOutputs: number | undefined;
}

/**
 * <p> Create a maintenance setting for a flow.</p>
 * @public
 */
export interface AddMaintenance {
  /**
   * <p> A day of a week when the maintenance will happen. </p>
   * @public
   */
  MaintenanceDay: MaintenanceDay | undefined;

  /**
   * <p> UTC time when the maintenance will happen. </p> <p>Use 24-hour HH:MM format. </p> <p>Minutes must be 00. </p> <p>Example: 13:00. </p> <p>The default value is 02:00.</p>
   * @public
   */
  MaintenanceStartHour: string | undefined;
}

/**
 * <p>The configuration for automatic endpoint encryption. In this mode, MediaConnect determines the encryption key when the endpoint connects. This type does not require any additional settings.</p>
 * @public
 */
export interface AutomaticEndpointEncryptionConfiguration {}

/**
 * @public
 */
export interface BatchGetDestinationEndpointRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of one or more destination endpoints to retrieve. You can specify from 1 to 20 ARNs.</p>
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * <p>A message associated with a router input, including a code and a message.</p>
 * @public
 */
export interface RouterInputMessage {
  /**
   * <p>The code associated with the router input message.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message text associated with the router input message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>The details of the router input that is associated with a destination endpoint.</p>
 * @public
 */
export interface RouterInputDestinationEndpointAssociatedResourceDetails {
  /**
   * <p>The name of the router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum bitrate of the router input, in bits per second.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>The state of the router input.</p>
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * <p>The status messages for the router input.</p>
   * @public
   */
  Messages: RouterInputMessage[] | undefined;
}

/**
 * <p>The associated resource details for a standard destination endpoint. This type does not require any additional settings.</p>
 * @public
 */
export interface StandardDestinationEndpointAssociatedResourceDetails {}

/**
 * <p>The details of the resource that is associated with a destination endpoint. This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.</p>
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
   * <p>The associated resource details for a standard destination endpoint.</p>
   * @public
   */
  export interface StandardMember {
    Standard: StandardDestinationEndpointAssociatedResourceDetails;
    RouterInput?: never;
    $unknown?: never;
  }

  /**
   * <p>The associated resource details for a destination endpoint that represents a router input.</p>
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
 * <p>The configuration settings for a destination endpoint that represents a router input.</p>
 * @public
 */
export interface RouterInputDestinationEndpointConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that the destination endpoint represents.</p>
   * @public
   */
  RouterInputArn: string | undefined;
}

/**
 * <p>A rule that allows a specific CIDR block to connect to the public destination endpoint.</p>
 * @public
 */
export interface PublicDestinationEndpointNetworkingConfigurationAllowRule {
  /**
   * <p>The CIDR block that is allowed to connect to the destination endpoint, in CIDR notation.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * <p>The networking configuration for a publicly accessible destination endpoint, including the CIDR blocks that are allowed to connect.</p>
 * @public
 */
export interface PublicDestinationEndpointNetworkingConfiguration {
  /**
   * <p>The rules that specify which CIDR blocks can connect to the destination endpoint. You can specify up to 10 rules.</p>
   * @public
   */
  DestinationAllowRules: PublicDestinationEndpointNetworkingConfigurationAllowRule[] | undefined;
}

/**
 * <p>The networking configuration for a destination endpoint in a virtual private cloud (VPC).</p>
 * @public
 */
export interface VpcDestinationEndpointNetworkingConfiguration {
  /**
   * <p>The IDs of the security groups to associate with the destination endpoint. You can specify from 1 to 5 security groups.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnet to use for the destination endpoint.</p>
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * <p>The networking configuration for a standard destination endpoint. This is a union type, so exactly one of its members is set: <code>public</code> for a publicly accessible endpoint, or <code>vpc</code> for an endpoint in a virtual private cloud (VPC).</p>
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
   * <p>The configuration for a publicly accessible destination endpoint.</p>
   * @public
   */
  export interface PublicMember {
    Public: PublicDestinationEndpointNetworkingConfiguration;
    Vpc?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a destination endpoint in a virtual private cloud (VPC).</p>
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
 * <p>The configuration settings for a destination endpoint that uses the RIST protocol.</p>
 * @public
 */
export interface RistStandardDestinationEndpointConfiguration {
  /**
   * <p>The IP address on which the destination endpoint receives content.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The port on which the destination endpoint receives content. The valid range is 1024 to 65531.</p>
   * @public
   */
  DestinationIngestPort: number | undefined;
}

/**
 * <p>The configuration settings for a destination endpoint that uses the RTP protocol.</p>
 * @public
 */
export interface RtpStandardDestinationEndpointConfiguration {
  /**
   * <p>The IP address on which the destination endpoint receives content.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The port on which the destination endpoint receives content. The valid range is 1024 to 65531.</p>
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * <p>Indicates whether forward error correction (FEC) is enabled for the destination endpoint.</p>
   * @public
   */
  ForwardErrorCorrectionState: ForwardErrorCorrectionState | undefined;
}

/**
 * <p>The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.</p>
 * @public
 */
export interface EndpointEncryptionSecretConfiguration {
  /**
   * <p>The ARN of the Secrets Manager secret that holds the key or passphrase. The secret must be encrypted with a customer managed Amazon Web Services KMS key that is enabled and symmetric; it cannot use the Amazon Web Services managed key <code>aws/secretsmanager</code>. The secret must be in the same Amazon Web Services account and Region as the endpoint.</p>
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * <p>The configuration settings for a destination endpoint that uses SRT in caller mode.</p>
 * @public
 */
export interface SrtCallerStandardDestinationEndpointConfiguration {
  /**
   * <p>The port on which the source listens for the connection. The valid range is 3000 to 30000.</p>
   * @public
   */
  SourceListenerPort: number | undefined;

  /**
   * <p>The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.</p>
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * <p>The configuration settings for a destination endpoint that uses SRT in listener mode.</p>
 * @public
 */
export interface SrtListenerStandardDestinationEndpointConfiguration {
  /**
   * <p>The IP address on which the destination endpoint listens for incoming connections.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The port on which the destination endpoint listens for incoming connections. The valid range is 0 to 65531.</p>
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * <p>The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>The stream ID that identifies the content for the SRT connection.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.</p>
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * <p>The protocol configuration for a standard destination endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the destination endpoint uses.</p>
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
   * <p>The configuration settings for a destination endpoint that uses the RIST protocol.</p>
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
   * <p>The configuration settings for a destination endpoint that uses SRT in listener mode.</p>
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
   * <p>The configuration settings for a destination endpoint that uses SRT in caller mode.</p>
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
   * <p>The configuration settings for a destination endpoint that uses the RTP protocol.</p>
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
 * <p>The configuration settings for a standard destination endpoint.</p>
 * @public
 */
export interface StandardDestinationEndpointConfiguration {
  /**
   * <p>The name of the destination endpoint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The networking configuration for the destination endpoint, which determines whether it is publicly accessible or in a virtual private cloud (VPC).</p>
   * @public
   */
  DestinationNetworkingConfiguration: StandardDestinationEndpointNetworkingConfiguration | undefined;

  /**
   * <p>The protocol configuration for the destination endpoint.</p>
   * @public
   */
  ProtocolConfiguration: StandardDestinationEndpointProtocolConfiguration | undefined;

  /**
   * <p>The networking type of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>PUBLIC</code> – The destination endpoint is publicly accessible.</p> </li> <li> <p> <code>VPC</code> – The destination endpoint is in a virtual private cloud (VPC).</p> </li> </ul>
   * @public
   */
  DestinationNetworkingType?: DestinationEndpointNetworkingType | undefined;

  /**
   * <p>The protocol used by the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>RTP</code> – Real-time Transport Protocol.</p> </li> <li> <p> <code>RIST</code> – Reliable Internet Stream Transport.</p> </li> <li> <p> <code>SRT_CALLER</code> – Secure Reliable Transport (SRT) in caller mode.</p> </li> <li> <p> <code>SRT_LISTENER</code> – Secure Reliable Transport (SRT) in listener mode.</p> </li> </ul>
   * @public
   */
  Protocol?: DestinationEndpointProtocol | undefined;
}

/**
 * <p>The configuration settings for a destination endpoint. This is a union type, so exactly one of its members is set, depending on the type of the destination endpoint.</p>
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
   * <p>The configuration settings for a standard destination endpoint, which represents an external destination.</p>
   * @public
   */
  export interface StandardMember {
    Standard: StandardDestinationEndpointConfiguration;
    RouterInput?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration settings for a destination endpoint that represents a router input.</p>
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
 * <p>The endpoint encryption configuration for connections that use a key or passphrase that you store in Secrets Manager.</p>
 * @public
 */
export interface SecretsManagerEndpointEncryptionConfiguration {
  /**
   * <p>The type of secret used to encrypt the connection. Valid values include the following:</p> <ul> <li> <p> <code>AES_128_KEY</code> – A 128-bit AES encryption key.</p> </li> <li> <p> <code>AES_192_KEY</code> – A 192-bit AES encryption key.</p> </li> <li> <p> <code>AES_256_KEY</code> – A 256-bit AES encryption key.</p> </li> <li> <p> <code>SRT_PASSPHRASE</code> – An SRT passphrase.</p> </li> </ul>
   * @public
   */
  EncryptionSecretType?: EndpointEncryptionSecretType | undefined;

  /**
   * <p>The Secrets Manager secret that holds the key or passphrase used to encrypt the connection.</p>
   * @public
   */
  EncryptionSecret: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
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
   * <p>The encryption configuration for a connection that uses a key or passphrase that you store in Secrets Manager.</p>
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEndpointEncryptionConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for automatic encryption, where MediaConnect determines the encryption key when the endpoint connects.</p>
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
 * <p>The connection details for a destination endpoint that represents a router input.</p>
 * @public
 */
export interface RouterInputDestinationEndpointConnectionDetails {
  /**
   * <p>The type of encryption that the source uses for the connection.</p>
   * @public
   */
  SourceEncryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  SourceEncryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * <p>The type of the connected source endpoint.</p>
   * @public
   */
  SourceEndpointType?: SourceEndpointType | undefined;
}

/**
 * <p>The connection details for a standard destination endpoint.</p>
 * @public
 */
export interface StandardDestinationEndpointConnectionDetails {
  /**
   * <p>The IP address of the source that is connected to the destination endpoint.</p>
   * @public
   */
  SourceIpAddress?: string | undefined;

  /**
   * <p>The port on which the source listens for the connection.</p>
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * <p>The type of encryption that the source uses for the connection.</p>
   * @public
   */
  SourceEncryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  SourceEncryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * <p>The type of the connected source endpoint.</p>
   * @public
   */
  SourceEndpointType?: SourceEndpointType | undefined;
}

/**
 * <p>The connection details for a destination endpoint. After the destination endpoint connects to a source endpoint, MediaConnect populates these details to describe the connected source. This is a union type, so exactly one of its members is set, depending on the destination endpoint type.</p>
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
   * <p>The connection details for a standard destination endpoint.</p>
   * @public
   */
  export interface StandardMember {
    Standard: StandardDestinationEndpointConnectionDetails;
    RouterInput?: never;
    $unknown?: never;
  }

  /**
   * <p>The connection details for a destination endpoint that represents a router input.</p>
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
 * <p>A status message for a destination endpoint.</p>
 * @public
 */
export interface DestinationEndpointMessage {
  /**
   * <p>The message code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message text.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>The cross-account sharing details for an endpoint that another account shares with this account.</p>
 * @public
 */
export interface ConsumedResourceShareDetails {
  /**
   * <p>The ID of the Amazon Web Services account that owns the shared endpoint.</p>
   * @public
   */
  OwnerAccountId: string | undefined;
}

/**
 * <p>The cross-account sharing details for an endpoint that this account owns and shares with other accounts.</p>
 * @public
 */
export interface OwnedResourceShareDetails {
  /**
   * <p>The sharing state of the endpoint. Valid values include the following:</p> <ul> <li> <p> <code>SHARED</code> – The endpoint is shared with one or more accounts.</p> </li> <li> <p> <code>UNSHARED</code> – The endpoint is not shared with other accounts.</p> </li> </ul>
   * @public
   */
  ShareState: ResourceShareState | undefined;
}

/**
 * <p>The cross-account sharing details for an endpoint. Endpoints are shared through Resource Access Manager (RAM). This is a union type, so exactly one of its members is set: <code>owned</code> when this account owns the endpoint and shares it with other accounts, or <code>consumed</code> when this account consumes an endpoint that another account shares. To change how an endpoint is shared, use RAM.</p>
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
   * <p>The sharing details for an endpoint that this account owns and shares with other accounts through RAM.</p>
   * @public
   */
  export interface OwnedMember {
    Owned: OwnedResourceShareDetails;
    Consumed?: never;
    $unknown?: never;
  }

  /**
   * <p>The sharing details for an endpoint that another account shares with this account through RAM.</p>
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
 * <p>The details of a destination endpoint in MediaConnect, including its configuration, state, and connection details.</p>
 * @public
 */
export interface DestinationEndpoint {
  /**
   * <p>The name of the destination endpoint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the destination endpoint.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The description of the destination endpoint.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Region in which the destination endpoint is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone in which the destination endpoint is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the destination endpoint is located.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The date and time when the destination endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time when the destination endpoint was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The entity that manages the lifecycle of the destination endpoint.</p>
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * <p>The status messages for the destination endpoint.</p>
   * @public
   */
  Messages: DestinationEndpointMessage[] | undefined;

  /**
   * <p>The type of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>STANDARD</code> – A destination endpoint that represents an external destination over a standard protocol, such as RTP, RIST, or SRT.</p> </li> <li> <p> <code>ROUTER_INPUT</code> – A destination endpoint that represents a router input.</p> </li> </ul>
   * @public
   */
  DestinationType: DestinationEndpointType | undefined;

  /**
   * <p>The configuration settings for the destination endpoint.</p>
   * @public
   */
  Configuration: DestinationEndpointConfiguration | undefined;

  /**
   * <p>Indicates whether this account owns the destination endpoint or consumes it from another account through RAM.</p>
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * <p>The cross-account sharing details for an endpoint. Endpoints are shared through Resource Access Manager (RAM). This is a union type, so exactly one of its members is set: <code>owned</code> when this account owns the endpoint and shares it with other accounts, or <code>consumed</code> when this account consumes an endpoint that another account shares. To change how an endpoint is shared, use RAM.</p>
   * @public
   */
  ResourceShareDetails: ResourceShareDetails | undefined;

  /**
   * <p>The registration state of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>REGISTERED</code> – The destination endpoint is registered and ready to use.</p> </li> <li> <p> <code>REGISTERING</code> – MediaConnect is registering the destination endpoint.</p> </li> <li> <p> <code>DEREGISTERING</code> – MediaConnect is deregistering the destination endpoint.</p> </li> <li> <p> <code>REGISTRATION_FAILED</code> – MediaConnect couldn't register the destination endpoint.</p> </li> </ul>
   * @public
   */
  RegistrationState: DestinationEndpointRegistrationState | undefined;

  /**
   * <p>The connection details for the destination endpoint.</p>
   * @public
   */
  ConnectionDetails?: DestinationEndpointConnectionDetails | undefined;

  /**
   * <p>The connection state of the destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>CONNECTED</code> – The destination endpoint is connected to a source endpoint.</p> </li> <li> <p> <code>DISCONNECTED</code> – The destination endpoint isn't connected to a source endpoint.</p> </li> <li> <p> <code>CONNECTING</code> – The destination endpoint is connecting to a source endpoint.</p> </li> <li> <p> <code>DISCONNECTING</code> – The destination endpoint is disconnecting from a source endpoint.</p> </li> </ul>
   * @public
   */
  ConnectionState: DestinationEndpointConnectionState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint that is connected to the destination endpoint.</p>
   * @public
   */
  ConnectedSource?: string | undefined;

  /**
   * <p>The type of decryption used for the destination endpoint connection.</p>
   * @public
   */
  DecryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  DecryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * <p>The details of the resource that is associated with the destination endpoint.</p>
   * @public
   */
  AssociatedResourceDetails: DestinationEndpointAssociatedResourceDetails | undefined;

  /**
   * <p>The tags associated with the destination endpoint. Each tag is a key-value pair.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * <p>An error for a destination endpoint that MediaConnect couldn't retrieve in a <code>BatchGetDestinationEndpoint</code> request.</p>
 * @public
 */
export interface BatchGetDestinationEndpointError {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint that MediaConnect couldn't retrieve.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetDestinationEndpointResponse {
  /**
   * <p>The destination endpoints that MediaConnect successfully retrieved.</p>
   * @public
   */
  DestinationEndpoints: DestinationEndpoint[] | undefined;

  /**
   * <p>The errors for any destination endpoints that MediaConnect couldn't retrieve.</p>
   * @public
   */
  Errors: BatchGetDestinationEndpointError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterInputRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of the router inputs you want to retrieve information about.</p>
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * <p>An error that occurred when retrieving multiple router inputs in the BatchGetRouterInput operation, including the ARN, error code, and error message.</p>
 * @public
 */
export interface BatchGetRouterInputError {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input for which the error occurred.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The error code associated with the error.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>Configuration settings for a router input that is represented by a destination endpoint.</p>
 * @public
 */
export interface DestinationEndpointRouterInputConfiguration {
  /**
   * <p>The entity that manages the lifecycle of the associated destination endpoint. Valid values include the following:</p> <ul> <li> <p> <code>MANAGED</code> – MediaConnect manages the lifecycle of the associated destination endpoint.</p> </li> <li> <p> <code>UNMANAGED</code> – You manage the lifecycle of the associated destination endpoint.</p> </li> </ul>
   * @public
   */
  EndpointLifecycleManagement: EndpointLifecycle | undefined;

  /**
   * <p>The type of transit decryption applied to the source content that this router input receives. Valid values include the following:</p> <ul> <li> <p> <code>SECRETS_MANAGER</code> – The decryption key or passphrase is stored in Secrets Manager.</p> </li> <li> <p> <code>AUTOMATIC</code> – MediaConnect determines the decryption key when the endpoint connects.</p> </li> </ul>
   * @public
   */
  SourceTransitDecryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  SourceTransitDecryption: EndpointEncryptionConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.</p>
 * @public
 */
export interface RistRouterInputConfiguration {
  /**
   * <p>The port number used for the RIST protocol in the router input configuration.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The recovery latency in milliseconds for the RIST protocol in the router input configuration.</p>
   * @public
   */
  RecoveryLatencyMilliseconds: number | undefined;
}

/**
 * <p>The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.</p>
 * @public
 */
export interface RtpRouterInputConfiguration {
  /**
   * <p>The port number used for the RTP protocol in the router input configuration.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The state of forward error correction for the RTP protocol in the router input configuration.</p>
   * @public
   */
  ForwardErrorCorrection?: ForwardErrorCorrectionState | undefined;
}

/**
 * <p>Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.</p>
 * @public
 */
export interface SrtDecryptionConfiguration {
  /**
   * <p>Specifies the encryption key configuration used for decrypting SRT streams, including the key source and associated credentials.</p>
   * @public
   */
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.</p>
 * @public
 */
export interface SrtCallerRouterInputConfiguration {
  /**
   * <p>The source IP address for the SRT protocol in caller mode.</p>
   * @public
   */
  SourceAddress: string | undefined;

  /**
   * <p>The source port number for the SRT protocol in caller mode.</p>
   * @public
   */
  SourcePort: number | undefined;

  /**
   * <p>The minimum latency in milliseconds for the SRT protocol in caller mode.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>The stream ID for the SRT protocol in caller mode.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>Specifies the decryption settings for an SRT caller input, including the encryption key configuration and associated parameters.</p>
   * @public
   */
  DecryptionConfiguration?: SrtDecryptionConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.</p>
 * @public
 */
export interface SrtListenerRouterInputConfiguration {
  /**
   * <p>The port number for the SRT protocol in listener mode.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The minimum latency in milliseconds for the SRT protocol in listener mode.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>Specifies the decryption settings for an SRT listener input, including the encryption key configuration and associated parameters.</p>
   * @public
   */
  DecryptionConfiguration?: SrtDecryptionConfiguration | undefined;
}

/**
 * <p>Protocol configuration settings for failover router inputs.</p>
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
   * <p>The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.</p>
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
   * <p>The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.</p>
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
   * <p>The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.</p>
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
   * <p>The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.</p>
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
 * <p>Configuration settings for a failover router input that allows switching between two input sources.</p>
 * @public
 */
export interface FailoverRouterInputConfiguration {
  /**
   * <p>The ARN of the network interface to use for this failover router input.</p>
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * <p>A list of exactly two protocol configurations for the failover input sources. Both must use the same protocol type.</p>
   * @public
   */
  ProtocolConfigurations: FailoverRouterInputProtocolConfiguration[] | undefined;

  /**
   * <p>The mode for determining source priority in failover configurations.</p>
   * @public
   */
  SourcePriorityMode: FailoverInputSourcePriorityMode | undefined;

  /**
   * <p>The index (0 or 1) that specifies which source in the protocol configurations list is currently active. Used to control which of the two failover sources is currently selected. This field is ignored when sourcePriorityMode is set to NO_PRIORITY</p>
   * @public
   */
  PrimarySourceIndex?: number | undefined;
}

/**
 * <p>Configuration settings for connecting a router input to a flow output.</p> <p>To connect the router input to the flow output, provide both <code>flowArn</code> and <code>flowOutputArn</code>. To disconnect it, call the update operation and omit both fields while keeping this configuration object.</p> <note> <p>You can't change <code>sourceTransitDecryption</code> while the router input is connected to a flow output. To change it, first disconnect the router input, then update the decryption.</p> </note>
 * @public
 */
export interface MediaConnectFlowRouterInputConfiguration {
  /**
   * <p>The ARN of the flow to connect to.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The ARN of the flow output to connect to this router input.</p>
   * @public
   */
  FlowOutputArn?: string | undefined;

  /**
   * <p>The decryption configuration for the flow source when connected to this router input.</p>
   * @public
   */
  SourceTransitDecryption: FlowTransitEncryption | undefined;
}

/**
 * <p>Configuration settings for the MediaLive transit encryption key.</p>
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
   * <p>The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.</p>
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.</p>
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
 * <p>The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.</p>
 * @public
 */
export interface MediaLiveTransitEncryption {
  /**
   * <p>The type of encryption key to use for MediaLive transit encryption.</p>
   * @public
   */
  EncryptionKeyType?: MediaLiveTransitEncryptionKeyType | undefined;

  /**
   * <p>The configuration details for the MediaLive encryption key.</p>
   * @public
   */
  EncryptionKeyConfiguration: MediaLiveTransitEncryptionKeyConfiguration | undefined;
}

/**
 * <p>Configuration settings for connecting a router input to a MediaLive channel output.</p> <p>To connect the router input to the MediaLive channel output, provide all three of <code>mediaLiveChannelArn</code>, <code>mediaLivePipelineId</code>, and <code>mediaLiveChannelOutputName</code>. To disconnect it, call the update operation and omit all three fields while keeping this configuration object.</p> <note> <p>You can't change <code>sourceTransitDecryption</code> while the router input is connected to a MediaLive channel output. To change it, first disconnect the router input, then update the decryption.</p> </note>
 * @public
 */
export interface MediaLiveChannelRouterInputConfiguration {
  /**
   * <p>The ARN of the MediaLive channel to connect to this router input.</p>
   * @public
   */
  MediaLiveChannelArn?: string | undefined;

  /**
   * <p>The index of the MediaLive pipeline to connect to this router input.</p>
   * @public
   */
  MediaLivePipelineId?: MediaLiveChannelPipelineId | undefined;

  /**
   * <p>The name of the MediaLive channel output to connect to this router input.</p>
   * @public
   */
  MediaLiveChannelOutputName?: string | undefined;

  /**
   * <p>The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.</p>
   * @public
   */
  SourceTransitDecryption: MediaLiveTransitEncryption | undefined;
}

/**
 * <p>Protocol configuration settings for merge router inputs.</p>
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
   * <p>The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.</p>
   * @public
   */
  export interface RtpMember {
    Rtp: RtpRouterInputConfiguration;
    Rist?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.</p>
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
 * <p>Configuration settings for a merge router input that combines two input sources.</p>
 * @public
 */
export interface MergeRouterInputConfiguration {
  /**
   * <p>The ARN of the network interface to use for this merge router input.</p>
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * <p>A list of exactly two protocol configurations for the merge input sources. Both must use the same protocol type.</p>
   * @public
   */
  ProtocolConfigurations: MergeRouterInputProtocolConfiguration[] | undefined;

  /**
   * <p>The time window in milliseconds for merging the two input sources.</p>
   * @public
   */
  MergeRecoveryWindowMilliseconds: number | undefined;
}

/**
 * <p>The protocol configuration settings for a router input.</p>
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
   * <p>The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.</p>
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
   * <p>The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.</p>
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
   * <p>The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.</p>
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
   * <p>The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.</p>
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
 * <p>The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.</p>
 * @public
 */
export interface StandardRouterInputConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the network interface associated with the standard router input.</p>
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * <p>The configuration settings for the protocol used by the standard router input.</p>
   * @public
   */
  ProtocolConfiguration: RouterInputProtocolConfiguration | undefined;

  /**
   * <p>The protocol used by the standard router input.</p>
   * @public
   */
  Protocol?: RouterInputProtocol | undefined;
}

/**
 * <p>The configuration settings for a router input.</p>
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
   * <p>Configuration settings for a router input that is represented by a destination endpoint.</p>
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
   * <p>The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.</p>
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
   * <p>Configuration settings for connecting a router input to a MediaLive channel output.</p> <p>To connect the router input to the MediaLive channel output, provide all three of <code>mediaLiveChannelArn</code>, <code>mediaLivePipelineId</code>, and <code>mediaLiveChannelOutputName</code>. To disconnect it, call the update operation and omit all three fields while keeping this configuration object.</p> <note> <p>You can't change <code>sourceTransitDecryption</code> while the router input is connected to a MediaLive channel output. To change it, first disconnect the router input, then update the decryption.</p> </note>
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
   * <p>Configuration settings for a failover router input that allows switching between two input sources.</p>
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
   * <p>Configuration settings for connecting a router input to a flow output.</p> <p>To connect the router input to the flow output, provide both <code>flowArn</code> and <code>flowOutputArn</code>. To disconnect it, call the update operation and omit both fields while keeping this configuration object.</p> <note> <p>You can't change <code>sourceTransitDecryption</code> while the router input is connected to a flow output. To change it, first disconnect the router input, then update the decryption.</p> </note>
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
   * <p>Configuration settings for a merge router input that combines two input sources.</p>
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
 * <p>Detects black frames in the router input's source content and reports them through a CloudWatch metric, an EventBridge event, and a router input message.</p>
 * @public
 */
export interface BlackFramesConfiguration {
  /**
   * <p>Indicates whether black frames detection is enabled or disabled.</p>
   * @public
   */
  State: ContentQualityAnalysisState | undefined;

  /**
   * <p>The number of consecutive seconds of black frames that MediaConnect must detect before it reports an issue.</p>
   * @public
   */
  ThresholdSeconds: number | undefined;
}

/**
 * <p>Detects frozen video frames in the router input's source content and reports them through a CloudWatch metric, an EventBridge event, and a router input message.</p>
 * @public
 */
export interface FrozenFramesConfiguration {
  /**
   * <p>Indicates whether frozen frames detection is enabled or disabled.</p>
   * @public
   */
  State: ContentQualityAnalysisState | undefined;

  /**
   * <p>The number of consecutive seconds of a frozen frame that MediaConnect must detect before it reports an issue.</p>
   * @public
   */
  ThresholdSeconds: number | undefined;
}

/**
 * <p>Detects silent audio in the router input's source content and reports it through a CloudWatch metric, an EventBridge event, and a router input message.</p>
 * @public
 */
export interface SilentAudioConfiguration {
  /**
   * <p>Indicates whether silent audio detection is enabled or disabled.</p>
   * @public
   */
  State: ContentQualityAnalysisState | undefined;

  /**
   * <p>The number of consecutive seconds of silence that MediaConnect must detect before it reports an issue.</p>
   * @public
   */
  ThresholdSeconds: number | undefined;
}

/**
 * <p>Configures the content quality analysis features for the router input.</p>
 * @public
 */
export interface ContentQualityAnalysisFeatureConfiguration {
  /**
   * <p>Settings for black frames detection.</p>
   * @public
   */
  BlackFrames?: BlackFramesConfiguration | undefined;

  /**
   * <p>Settings for frozen frames detection.</p>
   * @public
   */
  FrozenFrames?: FrozenFramesConfiguration | undefined;

  /**
   * <p>Settings for silent audio detection.</p>
   * @public
   */
  SilentAudio?: SilentAudioConfiguration | undefined;
}

/**
 * <p>The content quality analysis configuration for the router input.</p> <important> <p>The content quality analysis feature only monitors the first video stream and the first audio stream it encounters within the router input source.</p> </important>
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
   * <p>The content quality analysis configuration.</p>
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
 * <p>Configuration settings for default maintenance scheduling.</p>
 * @public
 */
export interface DefaultMaintenanceConfiguration {}

/**
 * <p>Configuration for preferred day and time maintenance settings.</p>
 * @public
 */
export interface PreferredDayTimeMaintenanceConfiguration {
  /**
   * <p>The preferred day for maintenance operations.</p>
   * @public
   */
  Day: Day | undefined;

  /**
   * <p>The preferred time for maintenance operations.</p>
   * @public
   */
  Time: string | undefined;
}

/**
 * <p>The configuration settings for maintenance operations, including preferred maintenance windows and schedules.</p>
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
   * <p>Preferred day and time maintenance configuration settings.</p>
   * @public
   */
  export interface PreferredDayTimeMember {
    PreferredDayTime: PreferredDayTimeMaintenanceConfiguration;
    Default?: never;
    $unknown?: never;
  }

  /**
   * <p>Default maintenance configuration settings.</p>
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
 * <p>Defines a specific time window for maintenance operations.</p>
 * @public
 */
export interface WindowMaintenanceSchedule {
  /**
   * <p>The start time of the maintenance window.</p>
   * @public
   */
  Start: Date | undefined;

  /**
   * <p>The end time of the maintenance window.</p>
   * @public
   */
  End: Date | undefined;

  /**
   * <p>The date and time when the maintenance window is scheduled to occur.</p>
   * @public
   */
  ScheduledTime: Date | undefined;
}

/**
 * <p>The details of the maintenance schedule.</p>
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
   * <p>Defines a specific time window for maintenance operations.</p>
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
 * <p>Configuration details for a router input stream that is represented by a destination endpoint.</p>
 * @public
 */
export interface DestinationEndpointRouterInputStreamDetails {}

/**
 * <p>Configuration details for an indexed stream in a failover router input setup.</p>
 * @public
 */
export interface FailoverRouterInputIndexedStreamDetails {
  /**
   * <p>The index number (0 or 1) assigned to this source in the failover configuration.</p>
   * @public
   */
  SourceIndex: number | undefined;

  /**
   * <p>The IP address of the source for this indexed stream.</p>
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * <p>Configuration details for a failover router input that can automatically switch between two sources.</p>
 * @public
 */
export interface FailoverRouterInputStreamDetails {
  /**
   * <p>Configuration details for the primary source (index 0) in the failover setup.</p>
   * @public
   */
  SourceIndexZeroStreamDetails: FailoverRouterInputIndexedStreamDetails | undefined;

  /**
   * <p>Configuration details for the secondary source (index 1) in the failover setup.</p>
   * @public
   */
  SourceIndexOneStreamDetails: FailoverRouterInputIndexedStreamDetails | undefined;
}

/**
 * <p>Configuration details for a MediaConnect flow when used as a router input source.</p>
 * @public
 */
export interface MediaConnectFlowRouterInputStreamDetails {}

/**
 * <p>Configuration details for a MediaLive channel when used as a router input source.</p>
 * @public
 */
export interface MediaLiveChannelRouterInputStreamDetails {}

/**
 * <p>Configuration details for an indexed stream in a merge router input setup.</p>
 * @public
 */
export interface MergeRouterInputIndexedStreamDetails {
  /**
   * <p>The index number (0 or 1) assigned to this source in the merge configuration.</p>
   * @public
   */
  SourceIndex: number | undefined;

  /**
   * <p>The IP address of the source for this indexed stream in the merge setup.</p>
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * <p>Configuration details for a merge router input that combines two input sources.</p>
 * @public
 */
export interface MergeRouterInputStreamDetails {
  /**
   * <p>Configuration details for the first source (index 0) in the merge setup.</p>
   * @public
   */
  SourceIndexZeroStreamDetails: MergeRouterInputIndexedStreamDetails | undefined;

  /**
   * <p>Configuration details for the second source (index 1) in the merge setup.</p>
   * @public
   */
  SourceIndexOneStreamDetails: MergeRouterInputIndexedStreamDetails | undefined;
}

/**
 * <p>Configuration details for a standard router input stream type.</p>
 * @public
 */
export interface StandardRouterInputStreamDetails {
  /**
   * <p>The source IP address for the standard router input stream.</p>
   * @public
   */
  SourceIpAddress?: string | undefined;
}

/**
 * <p>Configuration details for the router input stream.</p>
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
   * <p>Configuration details for a router input stream that is represented by a destination endpoint.</p>
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
   * <p>Configuration details for a standard router input stream type.</p>
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
   * <p>Configuration details for a MediaLive channel when used as a router input source.</p>
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
   * <p>Configuration details for a failover router input that can automatically switch between two sources.</p>
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
   * <p>Configuration details for a MediaConnect flow when used as a router input source.</p>
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
   * <p>Configuration details for a merge router input that combines two input sources.</p>
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
 * <p>Defines the configuration settings for transit encryption keys.</p>
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
   * <p>The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.</p>
   * @public
   */
  export interface SecretsManagerMember {
    SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    Automatic?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.</p>
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
 * <p>The transit encryption settings for a router input.</p>
 * @public
 */
export interface RouterInputTransitEncryption {
  /**
   * <p>Specifies the type of encryption key to use for transit encryption.</p>
   * @public
   */
  EncryptionKeyType?: RouterInputTransitEncryptionKeyType | undefined;

  /**
   * <p>Contains the configuration details for the encryption key used in transit encryption, including the key source and associated parameters.</p>
   * @public
   */
  EncryptionKeyConfiguration: RouterInputTransitEncryptionKeyConfiguration | undefined;
}

/**
 * <p>A router input in AWS Elemental MediaConnect. A router input is a source of media content that can be routed to one or more router outputs.</p>
 * @public
 */
export interface RouterInput {
  /**
   * <p>The name of the router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router input.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the router input.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current state of the router input.</p>
   * @public
   */
  State: RouterInputState | undefined;

  /**
   * <p>The type of the router input.</p>
   * @public
   */
  InputType: RouterInputType | undefined;

  /**
   * <p>The configuration settings for a router input.</p>
   * @public
   */
  Configuration: RouterInputConfiguration | undefined;

  /**
   * <p>The number of router outputs associated with the router input.</p>
   * @public
   */
  RoutedOutputs: number | undefined;

  /**
   * <p>The maximum number of outputs that can be simultaneously routed to this input.</p>
   * @public
   */
  MaximumRoutedOutputs?: number | undefined;

  /**
   * <p>The Amazon Web Services Region where the router input is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone of the router input.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The maximum bitrate for the router input.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>The tier level for the router input. The tier sets the maximum bitrate, in Mbps, for the router input. Valid values include the following:</p> <ul> <li> <p> <code>INPUT_20</code> – 20 Mbps</p> </li> <li> <p> <code>INPUT_50</code> – 50 Mbps</p> </li> <li> <p> <code>INPUT_100</code> – 100 Mbps</p> </li> <li> <p> <code>INPUT_250</code> – 250 Mbps</p> </li> <li> <p> <code>INPUT_500</code> – 500 Mbps</p> </li> </ul> <p>The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.</p>
   * @public
   */
  Tier: RouterInputTier | undefined;

  /**
   * <p>Indicates whether the router input is configured for Regional or global routing.</p>
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * <p>The timestamp when the router input was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the router input was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The messages associated with the router input.</p>
   * @public
   */
  Messages: RouterInputMessage[] | undefined;

  /**
   * <p>The transit encryption settings for a router input.</p>
   * @public
   */
  TransitEncryption: RouterInputTransitEncryption | undefined;

  /**
   * <p>Key-value pairs that can be used to tag and organize this router input.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * <p>Configuration details for the router input stream.</p>
   * @public
   */
  StreamDetails: RouterInputStreamDetails | undefined;

  /**
   * <p>The IP address of the router input.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The type of maintenance configuration applied to this router input.</p>
   * @public
   */
  MaintenanceType: MaintenanceType | undefined;

  /**
   * <p>The maintenance configuration settings applied to this router input.</p>
   * @public
   */
  MaintenanceConfiguration: MaintenanceConfiguration | undefined;

  /**
   * <p>The type of maintenance schedule currently in effect for this router input.</p>
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * <p>The current maintenance schedule details for this router input.</p>
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * <p>The type of content quality analysis applied to the router input.</p>
   * @public
   */
  ContentQualityAnalysisType: RouterContentQualityAnalysisType | undefined;

  /**
   * <p>The content quality analysis configuration for the router input.</p>
   * @public
   */
  ContentQualityAnalysisConfiguration: RouterContentQualityAnalysisConfiguration | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more destination endpoints that are associated with this router input.</p>
   * @public
   */
  AssociatedDestinationEndpointArns?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterInputResponse {
  /**
   * <p>An array of router inputs that were successfully retrieved.</p>
   * @public
   */
  RouterInputs: RouterInput[] | undefined;

  /**
   * <p>An array of errors that occurred when retrieving the requested router inputs.</p>
   * @public
   */
  Errors: BatchGetRouterInputError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterNetworkInterfaceRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of the router network interfaces you want to retrieve information about.</p>
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * <p>An error that occurred when retrieving multiple router network interfaces in the BatchGetRouterNetworkInterface operation, including the ARN, error code, and error message.</p>
 * @public
 */
export interface BatchGetRouterNetworkInterfaceError {
  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface for which the error occurred.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The error code associated with the error.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>A rule that allows a specific CIDR block to access the public router network interface.</p>
 * @public
 */
export interface PublicRouterNetworkInterfaceRule {
  /**
   * <p>The CIDR block that is allowed to access the public router network interface.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * <p>The configuration settings for a public router network interface, including the list of allowed CIDR blocks.</p>
 * @public
 */
export interface PublicRouterNetworkInterfaceConfiguration {
  /**
   * <p>The list of allowed CIDR blocks for the public router network interface.</p>
   * @public
   */
  AllowRules: PublicRouterNetworkInterfaceRule[] | undefined;
}

/**
 * <p>The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.</p>
 * @public
 */
export interface VpcRouterNetworkInterfaceConfiguration {
  /**
   * <p>The IDs of the security groups to associate with the router network interface within the VPC.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnet within the VPC to associate the router network interface with.</p>
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * <p>The configuration settings for a router network interface.</p>
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
   * <p>The configuration settings for a public router network interface, including the list of allowed CIDR blocks.</p>
   * @public
   */
  export interface PublicMember {
    Public: PublicRouterNetworkInterfaceConfiguration;
    Vpc?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.</p>
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
 * <p>A router network interface in AWS Elemental MediaConnect. A router network interface is a network interface that can be associated with one or more router inputs and outputs.</p>
 * @public
 */
export interface RouterNetworkInterface {
  /**
   * <p>The name of the router network interface.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the router network interface.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current state of the router network interface.</p>
   * @public
   */
  State: RouterNetworkInterfaceState | undefined;

  /**
   * <p>The type of the router network interface.</p>
   * @public
   */
  NetworkInterfaceType: RouterNetworkInterfaceType | undefined;

  /**
   * <p>The configuration settings for a router network interface.</p>
   * @public
   */
  Configuration: RouterNetworkInterfaceConfiguration | undefined;

  /**
   * <p>The number of router outputs associated with the network interface.</p>
   * @public
   */
  AssociatedOutputCount: number | undefined;

  /**
   * <p>The number of router inputs associated with the network interface.</p>
   * @public
   */
  AssociatedInputCount: number | undefined;

  /**
   * <p>The Amazon Web Services Region where the router network interface is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The timestamp when the router network interface was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the router network interface was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>Key-value pairs that can be used to tag and organize this router network interface.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterNetworkInterfaceResponse {
  /**
   * <p>An array of router network interfaces that were successfully retrieved.</p>
   * @public
   */
  RouterNetworkInterfaces: RouterNetworkInterface[] | undefined;

  /**
   * <p>An array of errors that occurred when retrieving the requested router network interfaces.</p>
   * @public
   */
  Errors: BatchGetRouterNetworkInterfaceError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterOutputRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of the router outputs you want to retrieve information about.</p>
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * <p>An error that occurred when retrieving multiple router outputs in the BatchGetRouterOutput operation, including the ARN, error code, and error message.</p>
 * @public
 */
export interface BatchGetRouterOutputError {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output for which the error occurred.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The error code associated with the error.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>Configuration settings for connecting a router output to a MediaConnect flow source.</p> <p>To connect the router output to the flow source, provide both <code>flowArn</code> and <code>flowSourceArn</code>. To disconnect it, call the update operation and omit both fields while keeping this configuration object.</p> <note> <p>You can't change <code>destinationTransitEncryption</code> while the router output is connected to a flow source. To change it, first disconnect the router output, then update the encryption.</p> </note>
 * @public
 */
export interface MediaConnectFlowRouterOutputConfiguration {
  /**
   * <p>The ARN of the flow to connect to this router output.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The ARN of the flow source to connect to this router output.</p>
   * @public
   */
  FlowSourceArn?: string | undefined;

  /**
   * <p>The encryption configuration for the flow destination when connected to this router output.</p>
   * @public
   */
  DestinationTransitEncryption: FlowTransitEncryption | undefined;
}

/**
 * <p>Configuration settings for connecting a router output to a MediaLive input.</p> <p>To connect the router output to the MediaLive input, provide both <code>mediaLiveInputArn</code> and <code>mediaLivePipelineId</code>. To disconnect it, call the update operation and omit both fields while keeping this configuration object.</p> <note> <p>You can't change <code>destinationTransitEncryption</code> while the router output is connected to a MediaLive input. To change it, first disconnect the router output, then update the encryption.</p> </note>
 * @public
 */
export interface MediaLiveInputRouterOutputConfiguration {
  /**
   * <p>The ARN of the MediaLive input to connect to this router output.</p>
   * @public
   */
  MediaLiveInputArn?: string | undefined;

  /**
   * <p>The index of the MediaLive pipeline to connect to this router output.</p>
   * @public
   */
  MediaLivePipelineId?: MediaLiveInputPipelineId | undefined;

  /**
   * <p>The encryption configuration for the MediaLive input when connected to this router output.</p>
   * @public
   */
  DestinationTransitEncryption: MediaLiveTransitEncryption | undefined;
}

/**
 * <p>Configuration settings for a router output that is represented by a source endpoint.</p>
 * @public
 */
export interface SourceEndpointRouterOutputConfiguration {
  /**
   * <p>The entity that manages the lifecycle of the associated source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>MANAGED</code> – MediaConnect manages the lifecycle of the associated source endpoint.</p> </li> <li> <p> <code>UNMANAGED</code> – You manage the lifecycle of the associated source endpoint.</p> </li> </ul>
   * @public
   */
  EndpointLifecycleManagement: EndpointLifecycle | undefined;

  /**
   * <p>The type of transit encryption applied to the destination content that this router output sends. Valid values include the following:</p> <ul> <li> <p> <code>SECRETS_MANAGER</code> – The encryption key or passphrase is stored in Secrets Manager.</p> </li> <li> <p> <code>AUTOMATIC</code> – MediaConnect determines the encryption key when the endpoint connects.</p> </li> </ul>
   * @public
   */
  DestinationTransitEncryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  DestinationTransitEncryption: EndpointEncryptionConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.</p>
 * @public
 */
export interface RistRouterOutputConfiguration {
  /**
   * <p>The destination IP address for the RIST protocol in the router output configuration.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The destination port number for the RIST protocol in the router output configuration.</p>
   * @public
   */
  DestinationPort: number | undefined;
}

/**
 * <p>The TLS encryption configuration for destinations that present a certificate from a publicly trusted certificate authority. This type does not require any additional settings.</p>
 * @public
 */
export interface PublicTlsEncryptionConfiguration {}

/**
 * <p>The configuration settings for TLS encryption.</p>
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
   * <p>The TLS encryption configuration that validates the destination by using a publicly trusted certificate authority.</p>
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
 * <p>The Transport Layer Security (TLS) encryption settings used to establish a secure connection to a destination.</p>
 * @public
 */
export interface TlsEncryption {
  /**
   * <p>The type of TLS encryption to use for the connection.</p>
   * @public
   */
  EncryptionType?: TlsEncryptionType | undefined;

  /**
   * <p>The configuration settings for the specified TLS encryption type.</p>
   * @public
   */
  EncryptionConfiguration: TlsEncryptionConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router output that pushes a stream to a destination using the RTMP (Real-Time Messaging Protocol) protocol, or RTMPS (RTMP over TLS) when TLS encryption is specified. These settings include the destination address and port, the application and stream names, and optional TLS encryption configuration.</p>
 * @public
 */
export interface RtmpPushRouterOutputConfiguration {
  /**
   * <p>The IP address or hostname of the destination RTMP server that the router output pushes the stream to. Provide only the server address; specify the application and stream names separately.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The TCP port on the destination RTMP server. For RTMP, valid values range from <code>1024</code> to <code>65535</code>. For RTMPS (RTMP over TLS), valid values are <code>443</code> or <code>1024</code> to <code>65535</code>. RTMP typically uses port <code>1935</code>, and RTMPS typically uses port <code>443</code>.</p>
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * <p>The name of the RTMP application on the destination server. Together with the stream name, the application name forms the RTMP URL path, in the pattern <code>rtmp://destinationAddress/applicationName/streamName</code>.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the RTMP stream that the output publishes to the destination application. The stream name forms the final segment of the RTMP URL path.</p>
   * @public
   */
  StreamName: string | undefined;

  /**
   * <p>The TLS encryption settings for the output. When you specify these settings, the output uses RTMPS (RTMP over TLS) to establish a secure, encrypted connection to the destination server.</p>
   * @public
   */
  TlsEncryption?: TlsEncryption | undefined;
}

/**
 * <p>The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.</p>
 * @public
 */
export interface RtpRouterOutputConfiguration {
  /**
   * <p>The destination IP address for the RTP protocol in the router output configuration.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The destination port number for the RTP protocol in the router output configuration.</p>
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * <p>The state of forward error correction for the RTP protocol in the router output configuration.</p>
   * @public
   */
  ForwardErrorCorrection?: ForwardErrorCorrectionState | undefined;
}

/**
 * <p>Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.</p>
 * @public
 */
export interface SrtEncryptionConfiguration {
  /**
   * <p>Specifies the encryption key configuration used for encrypting SRT streams, including the key source and associated credentials.</p>
   * @public
   */
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.</p>
 * @public
 */
export interface SrtCallerRouterOutputConfiguration {
  /**
   * <p>The destination IP address for the SRT protocol in caller mode.</p>
   * @public
   */
  DestinationAddress: string | undefined;

  /**
   * <p>The destination port number for the SRT protocol in caller mode.</p>
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * <p>The minimum latency in milliseconds for the SRT protocol in caller mode.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>The stream ID for the SRT protocol in caller mode.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>Defines the encryption settings for an SRT caller output, including the encryption key configuration and associated parameters.</p>
   * @public
   */
  EncryptionConfiguration?: SrtEncryptionConfiguration | undefined;
}

/**
 * <p>The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.</p>
 * @public
 */
export interface SrtListenerRouterOutputConfiguration {
  /**
   * <p>The port number for the SRT protocol in listener mode.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>The minimum latency in milliseconds for the SRT protocol in listener mode.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>Defines the encryption settings for an SRT listener output, including the encryption key configuration and associated parameters.</p>
   * @public
   */
  EncryptionConfiguration?: SrtEncryptionConfiguration | undefined;
}

/**
 * <p>The protocol configuration settings for a router output.</p>
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
   * <p>The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.</p>
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
   * <p>The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.</p>
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
   * <p>The configuration settings for a router output that pushes a stream to a destination using the RTMP (Real-Time Messaging Protocol) protocol, or RTMPS (RTMP over TLS) when TLS encryption is specified. These settings include the destination address and port, the application and stream names, and optional TLS encryption configuration.</p>
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
   * <p>The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.</p>
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
   * <p>The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.</p>
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
 * <p>The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.</p>
 * @public
 */
export interface StandardRouterOutputConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the network interface associated with the standard router output.</p>
   * @public
   */
  NetworkInterfaceArn: string | undefined;

  /**
   * <p>The configuration settings for the protocol used by the standard router output.</p>
   * @public
   */
  ProtocolConfiguration: RouterOutputProtocolConfiguration | undefined;

  /**
   * <p>The protocol used by the standard router output.</p>
   * @public
   */
  Protocol?: RouterOutputProtocol | undefined;
}

/**
 * <p>The configuration settings for a router output.</p>
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
   * <p>The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.</p>
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
   * <p>Configuration settings for connecting a router output to a MediaConnect flow source.</p> <p>To connect the router output to the flow source, provide both <code>flowArn</code> and <code>flowSourceArn</code>. To disconnect it, call the update operation and omit both fields while keeping this configuration object.</p> <note> <p>You can't change <code>destinationTransitEncryption</code> while the router output is connected to a flow source. To change it, first disconnect the router output, then update the encryption.</p> </note>
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
   * <p>Configuration settings for connecting a router output to a MediaLive input.</p> <p>To connect the router output to the MediaLive input, provide both <code>mediaLiveInputArn</code> and <code>mediaLivePipelineId</code>. To disconnect it, call the update operation and omit both fields while keeping this configuration object.</p> <note> <p>You can't change <code>destinationTransitEncryption</code> while the router output is connected to a MediaLive input. To change it, first disconnect the router output, then update the encryption.</p> </note>
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
   * <p>Configuration settings for a router output that is represented by a source endpoint.</p>
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
 * <p>The fabric configuration settings for the router output.</p>
 * @public
 */
export interface FabricConfiguration {
  /**
   * <p>The recovery latency mode for the router fabric connection. Valid values include the following:</p> <ul> <li> <p> <code>BALANCED</code> (default) – Optimizes for stream quality.</p> </li> <li> <p> <code>LOW_LATENCY</code> – Reduces latency at the potential cost of stream quality under adverse network conditions.</p> </li> </ul>
   * @public
   */
  RecoveryLatencyMode: FabricLatencyMode | undefined;
}

/**
 * <p>A message associated with a router output.</p>
 * @public
 */
export interface RouterOutputMessage {
  /**
   * <p>The code associated with the router output message.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message text associated with the router output message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>Configuration details for a MediaConnect flow when used as a router output destination.</p>
 * @public
 */
export interface MediaConnectFlowRouterOutputStreamDetails {}

/**
 * <p>Configuration details for a MediaLive input when used as a router output destination.</p>
 * @public
 */
export interface MediaLiveInputRouterOutputStreamDetails {}

/**
 * <p>Configuration details for a router output stream that is represented by a source endpoint.</p>
 * @public
 */
export interface SourceEndpointRouterOutputStreamDetails {}

/**
 * <p>Configuration details for a standard router output stream type. Contains information about the destination IP address and connection state for basic output routing.</p>
 * @public
 */
export interface StandardRouterOutputStreamDetails {
  /**
   * <p>The IP address where the output stream will be sent. This is the destination address that will receive the routed media content.</p>
   * @public
   */
  DestinationIpAddress?: string | undefined;
}

/**
 * <p>Information about the router output's stream, including connection state and destination details. The specific details provided vary based on the router output type.</p>
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
   * <p>Configuration details for a standard router output stream type. Contains information about the destination IP address and connection state for basic output routing.</p>
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
   * <p>Configuration details for a MediaConnect flow when used as a router output destination.</p>
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
   * <p>Configuration details for a MediaLive input when used as a router output destination.</p>
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
   * <p>Configuration details for a router output stream that is represented by a source endpoint.</p>
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
 * <p>A router output in AWS Elemental MediaConnect. A router output is a destination for media content that can receive input from one or more router inputs.</p>
 * @public
 */
export interface RouterOutput {
  /**
   * <p>The name of the router output.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router output.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the router output.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The overall state of the router output.</p>
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * <p>The type of the router output.</p>
   * @public
   */
  OutputType: RouterOutputType | undefined;

  /**
   * <p>The configuration settings for a router output.</p>
   * @public
   */
  Configuration: RouterOutputConfiguration | undefined;

  /**
   * <p>The current state of the association between the router output and its input.</p>
   * @public
   */
  RoutedState: RouterOutputRoutedState | undefined;

  /**
   * <p>The Amazon Web Services Region where the router output is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone of the router output.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The maximum bitrate for the router output.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>Indicates whether the router output is configured for Regional or global routing.</p>
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * <p>The tier level for the router output. The tier sets the maximum bitrate, in Mbps, for the router output. Valid values include the following:</p> <ul> <li> <p> <code>OUTPUT_20</code> – 20 Mbps</p> </li> <li> <p> <code>OUTPUT_50</code> – 50 Mbps</p> </li> <li> <p> <code>OUTPUT_100</code> – 100 Mbps</p> </li> <li> <p> <code>OUTPUT_250</code> – 250 Mbps</p> </li> <li> <p> <code>OUTPUT_500</code> – 500 Mbps</p> </li> </ul> <p>The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.</p>
   * @public
   */
  Tier: RouterOutputTier | undefined;

  /**
   * <p>The timestamp when the router output was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the router output was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The messages associated with the router output.</p>
   * @public
   */
  Messages: RouterOutputMessage[] | undefined;

  /**
   * <p>Key-value pairs that can be used to tag and organize this router output.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;

  /**
   * <p>Information about the router output's stream, including connection state and destination details. The specific details provided vary based on the router output type.</p>
   * @public
   */
  StreamDetails: RouterOutputStreamDetails | undefined;

  /**
   * <p>The IP address of the router output.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the router input associated with the output.</p>
   * @public
   */
  RoutedInputArn?: string | undefined;

  /**
   * <p>The type of maintenance configuration applied to this router output.</p>
   * @public
   */
  MaintenanceType: MaintenanceType | undefined;

  /**
   * <p>The maintenance configuration settings applied to this router output.</p>
   * @public
   */
  MaintenanceConfiguration: MaintenanceConfiguration | undefined;

  /**
   * <p>The type of maintenance schedule currently in effect for this router output.</p>
   * @public
   */
  MaintenanceScheduleType?: MaintenanceScheduleType | undefined;

  /**
   * <p>The current maintenance schedule details for this router output.</p>
   * @public
   */
  MaintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * <p>The fabric configuration settings for the router output.</p>
   * @public
   */
  FabricConfiguration: FabricConfiguration | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of one or more source endpoints that are associated with this router output.</p>
   * @public
   */
  AssociatedSourceEndpointArns?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRouterOutputResponse {
  /**
   * <p>An array of router outputs that were successfully retrieved.</p>
   * @public
   */
  RouterOutputs: RouterOutput[] | undefined;

  /**
   * <p>An array of errors that occurred when retrieving the requested router outputs.</p>
   * @public
   */
  Errors: BatchGetRouterOutputError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSourceEndpointRequest {
  /**
   * <p>The Amazon Resource Names (ARNs) of one or more source endpoints to retrieve. You can specify from 1 to 20 ARNs.</p>
   * @public
   */
  Arns: string[] | undefined;
}

/**
 * <p>An error for a source endpoint that MediaConnect couldn't retrieve in a <code>BatchGetSourceEndpoint</code> request.</p>
 * @public
 */
export interface BatchGetSourceEndpointError {
  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint that MediaConnect couldn't retrieve.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>A description of the error.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>The details of the router output that is associated with a source endpoint.</p>
 * @public
 */
export interface RouterOutputSourceEndpointAssociatedResourceDetails {
  /**
   * <p>The name of the router output.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum bitrate of the router output, in bits per second.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>The state of the router output.</p>
   * @public
   */
  State: RouterOutputState | undefined;

  /**
   * <p>The status messages for the router output.</p>
   * @public
   */
  Messages: RouterOutputMessage[] | undefined;
}

/**
 * <p>The associated resource details for a standard source endpoint. This type does not require any additional settings.</p>
 * @public
 */
export interface StandardSourceEndpointAssociatedResourceDetails {}

/**
 * <p>The details of the resource that is associated with a source endpoint. This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.</p>
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
   * <p>The associated resource details for a standard source endpoint.</p>
   * @public
   */
  export interface StandardMember {
    Standard: StandardSourceEndpointAssociatedResourceDetails;
    RouterOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The associated resource details for a source endpoint that represents a router output.</p>
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
 * <p>The configuration settings for a source endpoint that represents a router output.</p>
 * @public
 */
export interface RouterOutputSourceEndpointConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that the source endpoint represents.</p>
   * @public
   */
  RouterOutputArn: string | undefined;
}

/**
 * <p>The configuration settings for a source endpoint that uses the RIST protocol.</p>
 * @public
 */
export interface RistStandardSourceEndpointConfiguration {
  /**
   * <p>The port on the destination that receives the content. The valid range is 3000 to 30000.</p>
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * <p>The amount of time, in milliseconds, that the source endpoint allows for recovering lost packets. The valid range is 10 to 10000.</p>
   * @public
   */
  RecoveryLatencyMilliseconds: number | undefined;
}

/**
 * <p>The configuration settings for a source endpoint that uses the RTP protocol.</p>
 * @public
 */
export interface RtpStandardSourceEndpointConfiguration {
  /**
   * <p>The port on the destination that receives the content. The valid range is 3000 to 30000.</p>
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * <p>Indicates whether forward error correction (FEC) is enabled for the source endpoint.</p>
   * @public
   */
  ForwardErrorCorrectionState: ForwardErrorCorrectionState | undefined;
}

/**
 * <p>The configuration settings for a source endpoint that uses SRT in caller mode.</p>
 * @public
 */
export interface SrtCallerStandardSourceEndpointConfiguration {
  /**
   * <p>The port on which the destination listens for the connection. The valid range is 3000 to 30000.</p>
   * @public
   */
  DestinationIngestPort: number | undefined;

  /**
   * <p>The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.</p>
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * <p>The configuration settings for a source endpoint that uses SRT in listener mode.</p>
 * @public
 */
export interface SrtListenerStandardSourceEndpointConfiguration {
  /**
   * <p>The port that the source endpoint listens on for incoming connections. The valid range is 1024 to 65535.</p>
   * @public
   */
  SourceListenerPort: number | undefined;

  /**
   * <p>The IP address that the source endpoint listens on for incoming connections.</p>
   * @public
   */
  SourceAddress: string | undefined;

  /**
   * <p>The minimum latency, in milliseconds, for the SRT connection. The valid range is 10 to 10000.</p>
   * @public
   */
  MinimumLatencyMilliseconds: number | undefined;

  /**
   * <p>The stream ID that identifies the content for the SRT connection.</p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>The configuration for the Secrets Manager secret that holds the key or passphrase used to encrypt an endpoint connection.</p>
   * @public
   */
  EncryptionPassphrase?: EndpointEncryptionSecretConfiguration | undefined;
}

/**
 * <p>The protocol configuration for a standard source endpoint. This is a union type, so exactly one of its members is set, depending on the protocol that the source endpoint uses.</p>
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
   * <p>The configuration settings for a source endpoint that uses the RIST protocol.</p>
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
   * <p>The configuration settings for a source endpoint that uses SRT in listener mode.</p>
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
   * <p>The configuration settings for a source endpoint that uses SRT in caller mode.</p>
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
   * <p>The configuration settings for a source endpoint that uses the RTP protocol.</p>
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
 * <p>A rule that allows a specific CIDR block to connect to the public source endpoint.</p>
 * @public
 */
export interface PublicSourceEndpointNetworkingConfigurationAllowRule {
  /**
   * <p>The CIDR block that is allowed to connect to the source endpoint, in CIDR notation.</p>
   * @public
   */
  Cidr: string | undefined;
}

/**
 * <p>The networking configuration for a publicly accessible source endpoint, including the CIDR blocks that are allowed to connect.</p>
 * @public
 */
export interface PublicSourceEndpointNetworkingConfiguration {
  /**
   * <p>The rules that specify which CIDR blocks can connect to the source endpoint. You can specify up to 10 rules.</p>
   * @public
   */
  SourceAllowRules: PublicSourceEndpointNetworkingConfigurationAllowRule[] | undefined;
}

/**
 * <p>The networking configuration for a source endpoint in a virtual private cloud (VPC).</p>
 * @public
 */
export interface VpcSourceEndpointNetworkingConfiguration {
  /**
   * <p>The IDs of the security groups to associate with the source endpoint. You can specify from 1 to 5 security groups.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnet to use for the source endpoint.</p>
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * <p>The networking configuration for a standard source endpoint. This is a union type, so exactly one of its members is set: <code>public</code> for a publicly accessible endpoint, or <code>vpc</code> for an endpoint in a virtual private cloud (VPC).</p>
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
   * <p>The configuration for a publicly accessible source endpoint.</p>
   * @public
   */
  export interface PublicMember {
    Public: PublicSourceEndpointNetworkingConfiguration;
    Vpc?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a source endpoint in a virtual private cloud (VPC).</p>
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
 * <p>The configuration settings for a standard source endpoint.</p>
 * @public
 */
export interface StandardSourceEndpointConfiguration {
  /**
   * <p>The name of the source endpoint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The networking configuration for the source endpoint, which determines whether it is publicly accessible or in a virtual private cloud (VPC).</p>
   * @public
   */
  SourceNetworkingConfiguration: StandardSourceEndpointNetworkingConfiguration | undefined;

  /**
   * <p>The protocol configuration for the source endpoint.</p>
   * @public
   */
  ProtocolConfiguration: StandardSourceEndpointProtocolConfiguration | undefined;

  /**
   * <p>The networking type of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>PUBLIC</code> – The source endpoint is publicly accessible.</p> </li> <li> <p> <code>VPC</code> – The source endpoint is in a virtual private cloud (VPC).</p> </li> </ul>
   * @public
   */
  SourceNetworkingType?: SourceEndpointNetworkingType | undefined;

  /**
   * <p>The protocol used by the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>RTP</code> – Real-time Transport Protocol.</p> </li> <li> <p> <code>RIST</code> – Reliable Internet Stream Transport.</p> </li> <li> <p> <code>SRT_CALLER</code> – Secure Reliable Transport (SRT) in caller mode.</p> </li> <li> <p> <code>SRT_LISTENER</code> – Secure Reliable Transport (SRT) in listener mode.</p> </li> </ul>
   * @public
   */
  Protocol?: SourceEndpointProtocol | undefined;
}

/**
 * <p>The configuration settings for a source endpoint. This is a union type, so exactly one of its members is set, depending on the type of the source endpoint.</p>
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
   * <p>The configuration settings for a standard source endpoint, which represents an external source.</p>
   * @public
   */
  export interface StandardMember {
    Standard: StandardSourceEndpointConfiguration;
    RouterOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration settings for a source endpoint that represents a router output.</p>
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
 * <p>The connection details for a source endpoint that represents a router output.</p>
 * @public
 */
export interface RouterOutputSourceEndpointConnectionDetails {
  /**
   * <p>The type of decryption that the destination uses for the connection.</p>
   * @public
   */
  DestinationDecryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  DestinationDecryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * <p>The type of the connected destination endpoint.</p>
   * @public
   */
  DestinationEndpointType?: DestinationEndpointType | undefined;
}

/**
 * <p>The connection details for a standard source endpoint.</p>
 * @public
 */
export interface StandardSourceEndpointConnectionDetails {
  /**
   * <p>The IP address of the destination that receives the content.</p>
   * @public
   */
  DestinationIpAddress?: string | undefined;

  /**
   * <p>The port on the destination that receives the content.</p>
   * @public
   */
  DestinationIngestPort?: number | undefined;

  /**
   * <p>The type of decryption that the destination uses for the connection.</p>
   * @public
   */
  DestinationDecryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  DestinationDecryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * <p>The type of the connected destination endpoint.</p>
   * @public
   */
  DestinationEndpointType?: DestinationEndpointType | undefined;
}

/**
 * <p>The connection details for a source endpoint. After the source endpoint connects to a destination endpoint, MediaConnect populates these details to describe the connected destination and how the source delivers content to it. This is a union type, so exactly one of its members is set, depending on the source endpoint type.</p>
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
   * <p>The connection details for a standard source endpoint.</p>
   * @public
   */
  export interface StandardMember {
    Standard: StandardSourceEndpointConnectionDetails;
    RouterOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The connection details for a source endpoint that represents a router output.</p>
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
 * <p>A status message for a source endpoint.</p>
 * @public
 */
export interface SourceEndpointMessage {
  /**
   * <p>The message code.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The message text.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>The details of a source endpoint in MediaConnect, including its configuration, state, and connection details.</p>
 * @public
 */
export interface SourceEndpoint {
  /**
   * <p>The name of the source endpoint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier of the source endpoint.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The description of the source endpoint.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Region in which the source endpoint is located.</p>
   * @public
   */
  RegionName: string | undefined;

  /**
   * <p>The Availability Zone in which the source endpoint is located.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The ID of the Availability Zone in which the source endpoint is located.</p>
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * <p>The date and time when the source endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time when the source endpoint was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * <p>The entity that manages the lifecycle of the source endpoint.</p>
   * @public
   */
  LifecycleManagement: EndpointLifecycle | undefined;

  /**
   * <p>The status messages for the source endpoint.</p>
   * @public
   */
  Messages: SourceEndpointMessage[] | undefined;

  /**
   * <p>The type of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>STANDARD</code> – A source endpoint that represents an external source over a standard protocol, such as RTP, RIST, or SRT.</p> </li> <li> <p> <code>ROUTER_OUTPUT</code> – A source endpoint that represents a router output.</p> </li> </ul>
   * @public
   */
  SourceType: SourceEndpointType | undefined;

  /**
   * <p>The configuration settings for the source endpoint.</p>
   * @public
   */
  Configuration: SourceEndpointConfiguration | undefined;

  /**
   * <p>Indicates whether this account owns the source endpoint or consumes it from another account through RAM.</p>
   * @public
   */
  ResourceShareOwnership: ResourceShareOwnership | undefined;

  /**
   * <p>The cross-account sharing details for an endpoint. Endpoints are shared through Resource Access Manager (RAM). This is a union type, so exactly one of its members is set: <code>owned</code> when this account owns the endpoint and shares it with other accounts, or <code>consumed</code> when this account consumes an endpoint that another account shares. To change how an endpoint is shared, use RAM.</p>
   * @public
   */
  ResourceShareDetails: ResourceShareDetails | undefined;

  /**
   * <p>The registration state of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>REGISTERED</code> – The source endpoint is registered and ready to use.</p> </li> <li> <p> <code>REGISTERING</code> – MediaConnect is registering the source endpoint.</p> </li> <li> <p> <code>DEREGISTERING</code> – MediaConnect is deregistering the source endpoint.</p> </li> <li> <p> <code>REGISTRATION_FAILED</code> – MediaConnect couldn't register the source endpoint.</p> </li> </ul>
   * @public
   */
  RegistrationState: SourceEndpointRegistrationState | undefined;

  /**
   * <p>The connection state of the source endpoint. Valid values include the following:</p> <ul> <li> <p> <code>CONNECTED</code> – The source endpoint is connected to a destination endpoint.</p> </li> <li> <p> <code>DISCONNECTED</code> – The source endpoint isn't connected to a destination endpoint.</p> </li> <li> <p> <code>CONNECTING</code> – The source endpoint is connecting to a destination endpoint.</p> </li> <li> <p> <code>DISCONNECTING</code> – The source endpoint is disconnecting from a destination endpoint.</p> </li> </ul>
   * @public
   */
  ConnectionState: SourceEndpointConnectionState | undefined;

  /**
   * <p>The connection details for the source endpoint.</p>
   * @public
   */
  ConnectionDetails?: SourceEndpointConnectionDetails | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the destination endpoints that are connected to the source endpoint.</p>
   * @public
   */
  ConnectedDestinations: string[] | undefined;

  /**
   * <p>The type of encryption used for the source endpoint connection.</p>
   * @public
   */
  EncryptionType?: EndpointEncryptionType | undefined;

  /**
   * <p>The encryption settings for an endpoint connection. This is a union type, so exactly one of its members is set: <code>secretsManager</code> when you store the encryption key or passphrase in Secrets Manager, or <code>automatic</code> when you let MediaConnect determine the encryption key when the endpoint connects.</p>
   * @public
   */
  EncryptionConfiguration?: EndpointEncryptionConfiguration | undefined;

  /**
   * <p>The details of the resource that is associated with the source endpoint.</p>
   * @public
   */
  AssociatedResourceDetails: SourceEndpointAssociatedResourceDetails | undefined;

  /**
   * <p>The tags associated with the source endpoint. Each tag is a key-value pair.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchGetSourceEndpointResponse {
  /**
   * <p>The source endpoints that MediaConnect successfully retrieved.</p>
   * @public
   */
  SourceEndpoints: SourceEndpoint[] | undefined;

  /**
   * <p>The errors for any source endpoints that MediaConnect couldn't retrieve.</p>
   * @public
   */
  Errors: BatchGetSourceEndpointError[] | undefined;
}

/**
 * <p> Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises. </p>
 * @public
 */
export interface EgressGatewayBridge {
  /**
   * <p> The ID of the instance running this bridge.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p> The maximum expected bitrate (in bps) of the egress bridge.</p>
   * @public
   */
  MaxBitrate: number | undefined;
}

/**
 * <p>Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud. </p>
 * @public
 */
export interface IngressGatewayBridge {
  /**
   * <p>The ID of the instance running this bridge. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The maximum expected bitrate (in bps) of the ingress bridge. </p>
   * @public
   */
  MaxBitrate: number | undefined;

  /**
   * <p>The maximum number of outputs on the ingress bridge. </p>
   * @public
   */
  MaxOutputs: number | undefined;
}

/**
 * <p> The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams. </p>
 * @public
 */
export interface SourcePriority {
  /**
   * <p> The name of the source you choose as the primary source for this flow.</p>
   * @public
   */
  PrimarySource?: string | undefined;
}

/**
 * <p> The settings for source failover.</p>
 * @public
 */
export interface FailoverConfig {
  /**
   * <p> The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.</p>
   * @public
   */
  FailoverMode?: FailoverMode | undefined;

  /**
   * <p> Search window time to look for dash-7 packets.</p>
   * @public
   */
  RecoveryWindow?: number | undefined;

  /**
   * <p> The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.</p>
   * @public
   */
  SourcePriority?: SourcePriority | undefined;

  /**
   * <p>The state of source failover on the flow. If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources. </p>
   * @public
   */
  State?: State | undefined;
}

/**
 * <p> A Bridge is the connection between your data center's Instances and the Amazon Web Services cloud. A bridge can be used to send video from the Amazon Web Services cloud to your data center or from your data center to the Amazon Web Services cloud.</p>
 * @public
 */
export interface Bridge {
  /**
   * <p> The Amazon Resource Number (ARN) of the bridge.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> Messages with details about the bridge. </p>
   * @public
   */
  BridgeMessages?: MessageDetail[] | undefined;

  /**
   * <p>The state of the bridge. </p>
   * @public
   */
  BridgeState: BridgeState | undefined;

  /**
   * <p> An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises. </p>
   * @public
   */
  EgressGatewayBridge?: EgressGatewayBridge | undefined;

  /**
   * <p> An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud. </p>
   * @public
   */
  IngressGatewayBridge?: IngressGatewayBridge | undefined;

  /**
   * <p> The name of the bridge.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The outputs on this bridge.</p>
   * @public
   */
  Outputs?: BridgeOutput[] | undefined;

  /**
   * <p> The placement Amazon Resource Number (ARN) of the bridge.</p>
   * @public
   */
  PlacementArn: string | undefined;

  /**
   * <p> The settings for source failover. </p>
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * <p> The sources on this bridge.</p>
   * @public
   */
  Sources?: BridgeSource[] | undefined;
}

/**
 * @public
 */
export interface CreateBridgeRequest {
  /**
   * <p>An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises. </p>
   * @public
   */
  EgressGatewayBridge?: AddEgressGatewayBridgeRequest | undefined;

  /**
   * <p>An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud. </p>
   * @public
   */
  IngressGatewayBridge?: AddIngressGatewayBridgeRequest | undefined;

  /**
   * <p> The name of the bridge. This name can not be modified after the bridge is created.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The outputs that you want to add to this bridge.</p>
   * @public
   */
  Outputs?: AddBridgeOutputRequest[] | undefined;

  /**
   * <p> The bridge placement Amazon Resource Number (ARN).</p>
   * @public
   */
  PlacementArn: string | undefined;

  /**
   * <p> The settings for source failover.</p>
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * <p> The sources that you want to add to this bridge.</p>
   * @public
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateBridgeResponse {
  /**
   * <p> The name of the bridge that was created.</p>
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to delete.</p>
   * @public
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeResponse {
  /**
   * <p> The ARN of the deleted bridge.</p>
   * @public
   */
  BridgeArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to describe.</p>
   * @public
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeResponse {
  /**
   * <p>The bridge that you requested a description of. </p>
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * @public
 */
export interface ListBridgesRequest {
  /**
   * <p> Filter the list results to display only the bridges associated with the selected ARN.</p>
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListBridges</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListBridges</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListBridges</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBridgesResponse {
  /**
   * <p> A list of bridge summaries.</p>
   * @public
   */
  Bridges?: ListedBridge[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListBridges</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListBridges</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The name of the bridge output that you want to remove.</p>
   * @public
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputResponse {
  /**
   * <p> The ARN of the bridge from which the output was removed. </p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The name of the bridge output that was removed. </p>
   * @public
   */
  OutputName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The name of the bridge source that you want to remove.</p>
   * @public
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceResponse {
  /**
   * <p> The ARN of the bridge from which the source was removed. </p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The name of the bridge source that was removed. </p>
   * @public
   */
  SourceName?: string | undefined;
}

/**
 * <p> Update an existing egress-type bridge.</p>
 * @public
 */
export interface UpdateEgressGatewayBridgeRequest {
  /**
   * <p>The maximum expected bitrate (in bps). </p>
   * @public
   */
  MaxBitrate?: number | undefined;
}

/**
 * <p> Update an existing ingress-type bridge. </p>
 * @public
 */
export interface UpdateIngressGatewayBridgeRequest {
  /**
   * <p> The maximum expected bitrate (in bps).</p>
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * <p> The maximum number of expected outputs.</p>
   * @public
   */
  MaxOutputs?: number | undefined;
}

/**
 * <p> The settings for source failover.</p>
 * @public
 */
export interface UpdateFailoverConfig {
  /**
   * <p> The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.</p>
   * @public
   */
  FailoverMode?: FailoverMode | undefined;

  /**
   * <p> Recovery window time to look for dash-7 packets.</p>
   * @public
   */
  RecoveryWindow?: number | undefined;

  /**
   * <p> The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.</p>
   * @public
   */
  SourcePriority?: SourcePriority | undefined;

  /**
   * <p>The state of source failover on the flow. If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources. </p>
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeRequest {
  /**
   * <p> TheAmazon Resource Name (ARN) of the bridge that you want to update. </p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> A cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises. </p>
   * @public
   */
  EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest | undefined;

  /**
   * <p> A ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud. </p>
   * @public
   */
  IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest | undefined;

  /**
   * <p> The settings for source failover. </p>
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeResponse {
  /**
   * <p> The bridge that was updated. </p>
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * <p>Update an existing network output. </p>
 * @public
 */
export interface UpdateBridgeNetworkOutputRequest {
  /**
   * <p>The network output IP Address. </p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The network output's gateway network name. </p>
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * <p>The network output port. </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The network output protocol. </p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>The network output TTL. </p>
   * @public
   */
  Ttl?: number | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeOutputRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The network of the bridge output. </p>
   * @public
   */
  NetworkOutput?: UpdateBridgeNetworkOutputRequest | undefined;

  /**
   * <p> Tname of the output that you want to update. </p>
   * @public
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeOutputResponse {
  /**
   * <p> The ARN of the bridge that was updated. </p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The bridge output that was updated. </p>
   * @public
   */
  Output?: BridgeOutput | undefined;
}

/**
 * <p> Update the flow source of the bridge. </p>
 * @public
 */
export interface UpdateBridgeFlowSourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the MediaConnect resource from which to delete tags.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The name of the VPC interface attachment to use for this source. </p>
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * <p> Update the network source of the bridge.</p>
 * @public
 */
export interface UpdateBridgeNetworkSourceRequest {
  /**
   * <p> The network source multicast IP.</p>
   * @public
   */
  MulticastIp?: string | undefined;

  /**
   * <p>The settings related to the multicast source. </p>
   * @public
   */
  MulticastSourceSettings?: MulticastSourceSettings | undefined;

  /**
   * <p>The network source's gateway network name. </p>
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * <p>The network source port. </p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The network source protocol. </p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeSourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update.</p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The name of the flow that you want to update.</p>
   * @public
   */
  FlowSource?: UpdateBridgeFlowSourceRequest | undefined;

  /**
   * <p> The network for the bridge source. </p>
   * @public
   */
  NetworkSource?: UpdateBridgeNetworkSourceRequest | undefined;

  /**
   * <p> The name of the source that you want to update. </p>
   * @public
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeSourceResponse {
  /**
   * <p> The ARN of the updated bridge source. </p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The updated bridge source. </p>
   * @public
   */
  Source?: BridgeSource | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeStateRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the bridge that you want to update the state of. </p>
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * <p> The desired state for the bridge. </p>
   * @public
   */
  DesiredState: DesiredState | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeStateResponse {
  /**
   * <p>The ARN of the updated bridge. </p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The new state of the bridge. </p>
   * @public
   */
  DesiredState?: DesiredState | undefined;
}

/**
 * @public
 */
export interface ConnectEndpointsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint to connect.</p>
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint to connect.</p>
   * @public
   */
  SourceEndpointArn: string | undefined;
}

/**
 * @public
 */
export interface ConnectEndpointsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connected destination endpoint.</p>
   * @public
   */
  DestinationEndpointArn: string | undefined;

  /**
   * <p>The name of the connected destination endpoint.</p>
   * @public
   */
  DestinationEndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connected source endpoint.</p>
   * @public
   */
  SourceEndpointArn: string | undefined;

  /**
   * <p>The name of the connected source endpoint.</p>
   * @public
   */
  SourceEndpointName: string | undefined;
}

/**
 * <p> The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases. </p>
 * @public
 */
export interface EncodingConfig {
  /**
   * <p> The encoding profile to use when transcoding the NDI source content to a transport stream. You can change this value while the flow is running. </p>
   * @public
   */
  EncodingProfile?: EncodingProfile | undefined;

  /**
   * <p> The maximum video bitrate to use when transcoding the NDI source to a transport stream. This parameter enables you to override the default video bitrate within the encoding profile's supported range. </p> <p> The supported range is 10,000,000 - 50,000,000 bits per second (bps). If you don't specify a value, MediaConnect uses the default value of 20,000,000 bps. </p>
   * @public
   */
  VideoMaxBitrate?: number | undefined;
}

/**
 * <p>Specifies the configuration settings for NDI sources and outputs. </p>
 * @public
 */
export interface NdiConfig {
  /**
   * <p>A setting that controls whether NDI® sources or outputs can be used in the flow. </p> <p> The default value is <code>DISABLED</code>. This value must be set as <code>ENABLED</code> for your flow to support NDI sources or outputs. </p>
   * @public
   */
  NdiState?: NdiState | undefined;

  /**
   * <p>A prefix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect generates a unique 12-character ID as the prefix. </p>
   * @public
   */
  MachineName?: string | undefined;

  /**
   * <p>A list of up to three NDI discovery server configurations. While not required by the API, this configuration is necessary for NDI functionality to work properly. </p>
   * @public
   */
  NdiDiscoveryServers?: NdiDiscoveryServerConfig[] | undefined;
}

/**
 * <p> The settings for source monitoring. </p>
 * @public
 */
export interface MonitoringConfig {
  /**
   * <p> Indicates whether thumbnails are enabled or disabled.</p>
   * @public
   */
  ThumbnailState?: ThumbnailState | undefined;

  /**
   * <p> Contains the settings for audio stream metrics monitoring.</p>
   * @public
   */
  AudioMonitoringSettings?: AudioMonitoringSetting[] | undefined;

  /**
   * <p> Indicates whether content quality analysis is enabled or disabled.</p>
   * @public
   */
  ContentQualityAnalysisState?: ContentQualityAnalysisState | undefined;

  /**
   * <p> Contains the settings for video stream metrics monitoring.</p>
   * @public
   */
  VideoMonitoringSettings?: VideoMonitoringSetting[] | undefined;
}

/**
 * @public
 */
export interface CreateFlowRequest {
  /**
   * <p> The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current Amazon Web Services Region.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p> The entitlements that you want to grant on a flow.</p>
   * @public
   */
  Entitlements?: GrantEntitlementRequest[] | undefined;

  /**
   * <p> The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.</p>
   * @public
   */
  MediaStreams?: AddMediaStreamRequest[] | undefined;

  /**
   * <p> The name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The outputs that you want to add to this flow.</p>
   * @public
   */
  Outputs?: AddOutputRequest[] | undefined;

  /**
   * <p> The settings for the source that you want to use for the new flow. </p>
   * @public
   */
  Source?: SetSourceRequest | undefined;

  /**
   * <p> The settings for source failover. </p>
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * <p>The sources that are assigned to the flow. </p>
   * @public
   */
  Sources?: SetSourceRequest[] | undefined;

  /**
   * <p> The VPC interfaces you want on the flow.</p>
   * @public
   */
  VpcInterfaces?: VpcInterfaceRequest[] | undefined;

  /**
   * <p> The maintenance settings you want to use for the flow. </p>
   * @public
   */
  Maintenance?: AddMaintenance | undefined;

  /**
   * <p> The settings for source monitoring. </p>
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * <p> Determines the processing capacity and feature set of the flow. Set this optional parameter to <code>LARGE</code> if you want to enable NDI sources or outputs on the flow. </p>
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * <p> Specifies the configuration settings for a flow's NDI source or output. Required when the flow includes an NDI source or output. </p>
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * <p> The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases. </p>
   * @public
   */
  EncodingConfig?: EncodingConfig | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the flow. </p>
   * @public
   */
  FlowTags?: Record<string, string> | undefined;
}

/**
 * <p> The settings for a flow, including its source, outputs, and entitlements.</p>
 * @public
 */
export interface Flow {
  /**
   * <p> The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current Amazon Web Services Region.</p>
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * <p> A description of the flow. This value is not used or seen outside of the current MediaConnect account.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The IP address from which video will be sent to output destinations.</p>
   * @public
   */
  EgressIp?: string | undefined;

  /**
   * <p> The entitlements in this flow.</p>
   * @public
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.</p>
   * @public
   */
  MediaStreams?: MediaStream[] | undefined;

  /**
   * <p> The name of the flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The outputs in this flow.</p>
   * @public
   */
  Outputs: Output[] | undefined;

  /**
   * <p> The source for the flow. </p>
   * @public
   */
  Source: Source | undefined;

  /**
   * <p> The settings for the source failover. </p>
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * <p>The settings for the sources that are assigned to the flow. </p>
   * @public
   */
  Sources?: Source[] | undefined;

  /**
   * <p> The current status of the flow.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p> The VPC Interfaces for this flow.</p>
   * @public
   */
  VpcInterfaces?: VpcInterface[] | undefined;

  /**
   * <p> The maintenance settings for the flow. </p>
   * @public
   */
  Maintenance?: Maintenance | undefined;

  /**
   * <p> The settings for source monitoring. </p>
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * <p> Determines the processing capacity and feature set of the flow. </p>
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * <p>Specifies the configuration settings for a flow's NDI source or output. Required when the flow includes an NDI source or output.</p>
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * <p> The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. </p>
   * @public
   */
  EncodingConfig?: EncodingConfig | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * <p> The flow that you created. </p>
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * <p> The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * <p> The name of the gateway. This name can not be modified after the gateway is created.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The list of networks that you want to add to the gateway.</p>
   * @public
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * <p>The settings for a gateway, including its networks. </p>
 * @public
 */
export interface Gateway {
  /**
   * <p> The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>Messages with information about the gateway. </p>
   * @public
   */
  GatewayMessages?: MessageDetail[] | undefined;

  /**
   * <p> The current status of the gateway.</p>
   * @public
   */
  GatewayState?: GatewayState | undefined;

  /**
   * <p> The name of the gateway. This name can not be modified after the gateway is created.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p> The list of networks in the gateway.</p>
   * @public
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * <p> The gateway that you created. </p>
   * @public
   */
  Gateway?: Gateway | undefined;
}

/**
 * @public
 */
export interface CreateRouterInputRequest {
  /**
   * <p>The name of the router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration settings for the router input, which can include the protocol, network interface, and other details.</p>
   * @public
   */
  Configuration: RouterInputConfiguration | undefined;

  /**
   * <p>The maximum bitrate for the router input.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>Specifies whether the router input can be assigned to outputs in different Regions. REGIONAL (default) - connects only to outputs in same Region. GLOBAL - connects to outputs in any Region.</p>
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * <p>The tier level for the router input. The tier sets the maximum bitrate, in Mbps, for the router input. Valid values include the following:</p> <ul> <li> <p> <code>INPUT_20</code> – 20 Mbps</p> </li> <li> <p> <code>INPUT_50</code> – 50 Mbps</p> </li> <li> <p> <code>INPUT_100</code> – 100 Mbps</p> </li> <li> <p> <code>INPUT_250</code> – 250 Mbps</p> </li> <li> <p> <code>INPUT_500</code> – 500 Mbps</p> </li> </ul> <p>The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.</p>
   * @public
   */
  Tier: RouterInputTier | undefined;

  /**
   * <p>The Amazon Web Services Region for the router input. Defaults to the current region if not specified.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The Availability Zone where you want to create the router input. This must be a valid Availability Zone for the region specified by <code>regionName</code>, or the current region if no <code>regionName</code> is provided. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The transit encryption settings for the router input.</p>
   * @public
   */
  TransitEncryption?: RouterInputTransitEncryption | undefined;

  /**
   * <p>The maintenance configuration settings for the router input, including preferred maintenance windows and schedules.</p>
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * <p>Key-value pairs that can be used to tag and organize this router input.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The content quality analysis configuration for the router input.</p>
   * @public
   */
  ContentQualityAnalysisConfiguration?: RouterContentQualityAnalysisConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRouterInputResponse {
  /**
   * <p>The newly-created router input.</p>
   * @public
   */
  RouterInput: RouterInput | undefined;
}

/**
 * @public
 */
export interface CreateRouterNetworkInterfaceRequest {
  /**
   * <p>The name of the router network interface.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration settings for the router network interface.</p>
   * @public
   */
  Configuration: RouterNetworkInterfaceConfiguration | undefined;

  /**
   * <p>The Amazon Web Services Region for the router network interface. Defaults to the current region if not specified.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>Key-value pairs that can be used to tag and organize this router network interface.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouterNetworkInterfaceResponse {
  /**
   * <p>The newly-created router network interface.</p>
   * @public
   */
  RouterNetworkInterface: RouterNetworkInterface | undefined;
}

/**
 * @public
 */
export interface CreateRouterOutputRequest {
  /**
   * <p>The name of the router output.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The configuration settings for the router output.</p>
   * @public
   */
  Configuration: RouterOutputConfiguration | undefined;

  /**
   * <p>The maximum bitrate for the router output.</p>
   * @public
   */
  MaximumBitrate: number | undefined;

  /**
   * <p>Specifies whether the router output can take inputs that are in different Regions. REGIONAL (default) - can only take inputs from same Region. GLOBAL - can take inputs from any Region.</p>
   * @public
   */
  RoutingScope: RoutingScope | undefined;

  /**
   * <p>The tier level for the router output. The tier sets the maximum bitrate, in Mbps, for the router output. Valid values include the following:</p> <ul> <li> <p> <code>OUTPUT_20</code> – 20 Mbps</p> </li> <li> <p> <code>OUTPUT_50</code> – 50 Mbps</p> </li> <li> <p> <code>OUTPUT_100</code> – 100 Mbps</p> </li> <li> <p> <code>OUTPUT_250</code> – 250 Mbps</p> </li> <li> <p> <code>OUTPUT_500</code> – 500 Mbps</p> </li> </ul> <p>The 250 Mbps and 500 Mbps tiers are high-bitrate tiers that support TR-07 (JPEG XS) workflows.</p>
   * @public
   */
  Tier: RouterOutputTier | undefined;

  /**
   * <p>The Amazon Web Services Region for the router output. Defaults to the current region if not specified.</p>
   * @public
   */
  RegionName?: string | undefined;

  /**
   * <p>The Availability Zone where you want to create the router output. This must be a valid Availability Zone for the region specified by <code>regionName</code>, or the current region if no <code>regionName</code> is provided. </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The maintenance configuration settings for the router output, including preferred maintenance windows and schedules.</p>
   * @public
   */
  MaintenanceConfiguration?: MaintenanceConfiguration | undefined;

  /**
   * <p>Key-value pairs that can be used to tag this router output.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The fabric configuration settings for the router output.</p>
   * @public
   */
  FabricConfiguration?: FabricConfiguration | undefined;

  /**
   * <p>A unique identifier for the request to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouterOutputResponse {
  /**
   * <p>The newly-created router output.</p>
   * @public
   */
  RouterOutput: RouterOutput | undefined;
}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to delete.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {
  /**
   * <p> The ARN of the flow that was deleted.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The status of the flow when the <code>DeleteFlow</code> process begins.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the gateway that you want to delete.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * <p> The ARN of the gateway that was deleted.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterInputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router input that you want to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterInputResponse {
  /**
   * <p>The ARN of the deleted router input.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the deleted router input.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the deleted router input, indicating where it is in the deletion process.</p>
   * @public
   */
  State: RouterInputState | undefined;
}

/**
 * @public
 */
export interface DeleteRouterNetworkInterfaceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router network interface that you want to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterNetworkInterfaceResponse {
  /**
   * <p>The ARN of the deleted router network interface.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the deleted router network interface.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the deleted router network interface, indicating where it is in the deletion process.</p>
   * @public
   */
  State: RouterNetworkInterfaceState | undefined;
}

/**
 * @public
 */
export interface DeleteRouterOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the router output that you want to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouterOutputResponse {
  /**
   * <p>The ARN of the deleted router output.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the deleted router output.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current state of the deleted router output, indicating where it is in the deletion process.</p>
   * @public
   */
  State: RouterOutputState | undefined;
}

/**
 * @public
 */
export interface DeregisterDestinationEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint to deregister.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterDestinationEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination endpoint that was deregistered.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the destination endpoint that was deregistered.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceRequest {
  /**
   * <p> Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.</p>
   * @public
   */
  Force?: boolean | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.</p>
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceResponse {
  /**
   * <p> The ARN of the instance.</p>
   * @public
   */
  GatewayInstanceArn?: string | undefined;

  /**
   * <p> The status of the instance.</p>
   * @public
   */
  InstanceState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface DeregisterSourceEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint to deregister.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterSourceEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint that was deregistered.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the source endpoint that was deregistered.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * <p> The ARN of the flow that you want to describe.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * <p> Messages that provide the state of the flow.</p>
 * @public
 */
export interface Messages {
  /**
   * <p> A list of errors that might have been generated from processes on this flow.</p>
   * @public
   */
  Errors: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * <p>The flow that you requested a description of. </p>
   * @public
   */
  Flow?: Flow | undefined;

  /**
   * <p> Any errors that apply currently to the flow. If there are no errors, MediaConnect will not include this field in the response. </p>
   * @public
   */
  Messages?: Messages | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceMetadataRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * <p> Metadata about the audio and video media that is part of the NDI® source content. This includes details about the individual media streams. </p>
 * @public
 */
export interface NdiMediaInfo {
  /**
   * <p> A list of the individual media streams that make up the NDI source. This includes details about each stream's codec, resolution, frame rate, audio channels, and other parameters. </p>
   * @public
   */
  Streams: NdiMediaStreamInfo[] | undefined;
}

/**
 * <p> Comprehensive information about the NDI® source that's associated with a flow. This includes the currently active NDI source, a list of all discovered NDI senders, metadata about the media streams, and any relevant status messages. </p>
 * @public
 */
export interface NdiSourceMetadataInfo {
  /**
   * <p> The connected NDI sender that's currently sending source content to the flow's NDI source. </p>
   * @public
   */
  ActiveSource?: NdiSourceInfo | undefined;

  /**
   * <p> A list of the available upstream NDI senders aggregated from all of your configured discovery servers. </p>
   * @public
   */
  DiscoveredSources: NdiSourceInfo[] | undefined;

  /**
   * <p> Detailed information about the media streams (video, audio, and so on) that are part of the active NDI source. </p>
   * @public
   */
  MediaInfo: NdiMediaInfo | undefined;

  /**
   * <p> Any status messages or error codes related to the NDI source and its metadata. </p>
   * @public
   */
  Messages: MessageDetail[] | undefined;
}

/**
 * <p> The metadata of the transport stream in the current flow's source.</p>
 * @public
 */
export interface TransportMediaInfo {
  /**
   * <p> The list of transport stream programs in the current flow's source.</p>
   * @public
   */
  Programs: TransportStreamProgram[] | undefined;

  /**
   * <p>The transport stream ID (TSID) of the source, from the Program Association Table (PAT).</p>
   * @public
   */
  TsId?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceMetadataResponse {
  /**
   * <p> The ARN of the flow that DescribeFlowSourceMetadata was performed on.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> Provides a status code and message regarding issues found with the flow source metadata.</p>
   * @public
   */
  Messages?: MessageDetail[] | undefined;

  /**
   * <p> The timestamp of the most recent change in metadata for this flow’s source.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p> Information about the flow's transport media. </p>
   * @public
   */
  TransportMediaInfo?: TransportMediaInfo | undefined;

  /**
   * <p> The NDI® specific information about the flow's source. This includes the current active NDI sender, a list of all discovered NDI senders, the associated media streams for the active NDI sender, and any relevant status messages. </p>
   * @public
   */
  NdiInfo?: NdiSourceMetadataInfo | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceThumbnailRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * <p> The details of the thumbnail, including thumbnail base64 string, timecode and the time when thumbnail was generated.</p>
 * @public
 */
export interface ThumbnailDetails {
  /**
   * <p> The ARN of the flow that DescribeFlowSourceThumbnail was performed on.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p>Thumbnail Base64 string. </p>
   * @public
   */
  Thumbnail?: string | undefined;

  /**
   * <p> Status code and messages about the flow source thumbnail.</p>
   * @public
   */
  ThumbnailMessages: MessageDetail[] | undefined;

  /**
   * <p> Timecode of thumbnail.</p>
   * @public
   */
  Timecode?: string | undefined;

  /**
   * <p> The timestamp of when thumbnail was generated.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceThumbnailResponse {
  /**
   * <p>The details of the thumbnail, including thumbnail base64 string, timecode and the time when thumbnail was generated. </p>
   * @public
   */
  ThumbnailDetails?: ThumbnailDetails | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * <p> The ARN of the gateway that you want to describe.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * <p>The gateway that you wanted to describe. </p>
   * @public
   */
  Gateway?: Gateway | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the gateway instance that you want to describe.</p>
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * <p> The settings for an instance in a gateway.</p>
 * @public
 */
export interface GatewayInstance {
  /**
   * <p>The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be deployed to this instance. </p>
   * @public
   */
  BridgePlacement: BridgePlacement | undefined;

  /**
   * <p>The connection state of the instance. </p>
   * @public
   */
  ConnectionStatus: ConnectionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance. </p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>The ARN of the gateway. </p>
   * @public
   */
  GatewayInstanceArn: string | undefined;

  /**
   * <p>The instance ID generated by the SSM install. This will begin with "mi-". </p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> Messages with information about the gateway. </p>
   * @public
   */
  InstanceMessages?: MessageDetail[] | undefined;

  /**
   * <p>The status of the instance. </p>
   * @public
   */
  InstanceState: InstanceState | undefined;

  /**
   * <p> The running bridge count. </p>
   * @public
   */
  RunningBridgeCount: number | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceResponse {
  /**
   * <p>The gateway instance that you requested a description of. </p>
   * @public
   */
  GatewayInstance?: GatewayInstance | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingRequest {
  /**
   * <p> The ARN of the offering.</p>
   * @public
   */
  OfferingArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingResponse {
  /**
   * <p>The offering that you requested a description of. </p>
   * @public
   */
  Offering?: Offering | undefined;
}

/**
 * @public
 */
export interface DescribeReservationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the offering. </p>
   * @public
   */
  ReservationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservationResponse {
  /**
   * <p> A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate. </p>
   * @public
   */
  Reservation?: Reservation | undefined;
}
