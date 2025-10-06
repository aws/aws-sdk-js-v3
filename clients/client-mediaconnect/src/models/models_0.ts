// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaConnectServiceException as __BaseException } from "./MediaConnectServiceException";

/**
 * @public
 * @enum
 */
export const Protocol = {
  cdi: "cdi",
  fujitsu_qos: "fujitsu-qos",
  ndi_speed_hq: "ndi-speed-hq",
  rist: "rist",
  rtp: "rtp",
  rtp_fec: "rtp-fec",
  srt_caller: "srt-caller",
  srt_listener: "srt-listener",
  st2110_jpegxs: "st2110-jpegxs",
  udp: "udp",
  zixi_pull: "zixi-pull",
  zixi_push: "zixi-push",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

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
 * @public
 * @enum
 */
export const Colorimetry = {
  BT2020: "BT2020",
  BT2100: "BT2100",
  BT601: "BT601",
  BT709: "BT709",
  ST2065_1: "ST2065-1",
  ST2065_3: "ST2065-3",
  XYZ: "XYZ",
} as const;

/**
 * @public
 */
export type Colorimetry = (typeof Colorimetry)[keyof typeof Colorimetry];

/**
 * @public
 * @enum
 */
export const Range = {
  FULL: "FULL",
  FULLPROTECT: "FULLPROTECT",
  NARROW: "NARROW",
} as const;

/**
 * @public
 */
export type Range = (typeof Range)[keyof typeof Range];

/**
 * @public
 * @enum
 */
export const ScanMode = {
  interlace: "interlace",
  progressive: "progressive",
  progressive_segmented_frame: "progressive-segmented-frame",
} as const;

/**
 * @public
 */
export type ScanMode = (typeof ScanMode)[keyof typeof ScanMode];

/**
 * @public
 * @enum
 */
export const Tcs = {
  BT2100LINHLG: "BT2100LINHLG",
  BT2100LINPQ: "BT2100LINPQ",
  DENSITY: "DENSITY",
  HLG: "HLG",
  LINEAR: "LINEAR",
  PQ: "PQ",
  SDR: "SDR",
  ST2065_1: "ST2065-1",
  ST428_1: "ST428-1",
} as const;

/**
 * @public
 */
export type Tcs = (typeof Tcs)[keyof typeof Tcs];

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
 * @public
 * @enum
 */
export const MediaStreamType = {
  ancillary_data: "ancillary-data",
  audio: "audio",
  video: "video",
} as const;

/**
 * @public
 */
export type MediaStreamType = (typeof MediaStreamType)[keyof typeof MediaStreamType];

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
 * @public
 * @enum
 */
export const Algorithm = {
  aes128: "aes128",
  aes192: "aes192",
  aes256: "aes256",
} as const;

/**
 * @public
 */
export type Algorithm = (typeof Algorithm)[keyof typeof Algorithm];

/**
 * @public
 * @enum
 */
export const KeyType = {
  speke: "speke",
  srt_password: "srt-password",
  static_key: "static-key",
} as const;

/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * <p> Information about the encryption of the flow.</p>
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
 * @public
 * @enum
 */
export const EncodingName = {
  jxsv: "jxsv",
  pcm: "pcm",
  raw: "raw",
  smpte291: "smpte291",
} as const;

/**
 * @public
 */
export type EncodingName = (typeof EncodingName)[keyof typeof EncodingName];

/**
 * @public
 * @enum
 */
export const EncoderProfile = {
  high: "high",
  main: "main",
} as const;

/**
 * @public
 */
export type EncoderProfile = (typeof EncoderProfile)[keyof typeof EncoderProfile];

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
 * @public
 * @enum
 */
export const OutputStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type OutputStatus = (typeof OutputStatus)[keyof typeof OutputStatus];

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
   * <p> A suffix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect uses the output name. </p>
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * <p> The key-value pairs that can be used to tag and organize the output. </p>
   * @public
   */
  OutputTags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const State = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

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
 * @public
 * @enum
 */
export const EntitlementStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EntitlementStatus = (typeof EntitlementStatus)[keyof typeof EntitlementStatus];

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
 * @public
 * @enum
 */
export const BridgeState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DEPLOYING: "DEPLOYING",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  START_PENDING: "START_PENDING",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type BridgeState = (typeof BridgeState)[keyof typeof BridgeState];

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
 * @public
 * @enum
 */
export const MaintenanceDay = {
  Friday: "Friday",
  Monday: "Monday",
  Saturday: "Saturday",
  Sunday: "Sunday",
  Thursday: "Thursday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
} as const;

/**
 * @public
 */
export type MaintenanceDay = (typeof MaintenanceDay)[keyof typeof MaintenanceDay];

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
 * @public
 * @enum
 */
export const SourceType = {
  ENTITLED: "ENTITLED",
  OWNED: "OWNED",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
  STANDBY: "STANDBY",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

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
 * @public
 * @enum
 */
export const GatewayState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type GatewayState = (typeof GatewayState)[keyof typeof GatewayState];

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
 * @public
 * @enum
 */
export const InstanceState = {
  ACTIVE: "ACTIVE",
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  DEREGISTRATION_ERROR: "DEREGISTRATION_ERROR",
  REGISTERING: "REGISTERING",
  REGISTRATION_ERROR: "REGISTRATION_ERROR",
} as const;

/**
 * @public
 */
export type InstanceState = (typeof InstanceState)[keyof typeof InstanceState];

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
 * <p>Specifies the configuration settings for individual NDI discovery servers. A maximum of 3 servers is allowed. </p>
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
 * @public
 * @enum
 */
export const DurationUnits = {
  MONTHS: "MONTHS",
} as const;

/**
 * @public
 */
export type DurationUnits = (typeof DurationUnits)[keyof typeof DurationUnits];

/**
 * @public
 * @enum
 */
export const PriceUnits = {
  HOURLY: "HOURLY",
} as const;

/**
 * @public
 */
export type PriceUnits = (typeof PriceUnits)[keyof typeof PriceUnits];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  Mbps_Outbound_Bandwidth: "Mbps_Outbound_Bandwidth",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

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
   * <p>A suffix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect uses the output name. </p>
   * @public
   */
  NdiProgramName?: string | undefined;
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
   * <p>The IP address of the device that is currently receiving content from this output.</p> <note> <ul> <li> <p>For outputs that use protocols where you specify the destination (such as SRT Caller or Zixi Push), this value matches the configured destination address.</p> </li> <li> <p>For outputs that use listener protocols (such as SRT Listener), this value shows the address of the connected receiver. </p> </li> <li> <p>Peer IP addresses aren't available for entitlements, managed MediaLive outputs, NDI outputs, and CDI/ST2110 outputs. </p> </li> <li> <p>The peer IP address might not be visible for flows that haven't been started yet, or flows that were started before May 2025. In these cases, restart your flow to see the peer IP address.</p> </li> </ul> </note>
   * @public
   */
  PeerIpAddress?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReservationState = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type ReservationState = (typeof ReservationState)[keyof typeof ReservationState];

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
   * <p> The key-value pairs that can be used to tag and organize the source. </p>
   * @public
   */
  SourceTags?: Record<string, string> | undefined;
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
   * <p> The IP address that the flow communicates with to initiate connection with the sender.</p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p> The port that the flow uses to send outbound requests to initiate connection with the sender.</p>
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
   * <p> Indicates whether the <code>BlackFrames</code> metric is enabled or disabled..</p>
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
 * @public
 * @enum
 */
export const NetworkInterfaceType = {
  efa: "efa",
  ena: "ena",
} as const;

/**
 * @public
 */
export type NetworkInterfaceType = (typeof NetworkInterfaceType)[keyof typeof NetworkInterfaceType];

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
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You do not have sufficient access to perform this action. </p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The server encountered an internal error and is unable to complete the request. </p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the resources in the request does not exist in the system. </p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is currently unavailable or busy. </p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling. </p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>Exception raised by Elemental MediaConnect when adding the flow output. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class AddFlowOutputs420Exception extends __BaseException {
  readonly name: "AddFlowOutputs420Exception" = "AddFlowOutputs420Exception";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AddFlowOutputs420Exception, __BaseException>) {
    super({
      name: "AddFlowOutputs420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AddFlowOutputs420Exception.prototype);
    this.Message = opts.Message;
  }
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
 * @public
 * @enum
 */
export const FailoverMode = {
  FAILOVER: "FAILOVER",
  MERGE: "MERGE",
} as const;

/**
 * @public
 */
export type FailoverMode = (typeof FailoverMode)[keyof typeof FailoverMode];

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
 * @enum
 */
export const BridgePlacement = {
  AVAILABLE: "AVAILABLE",
  LOCKED: "LOCKED",
} as const;

/**
 * @public
 */
export type BridgePlacement = (typeof BridgePlacement)[keyof typeof BridgePlacement];

/**
 * <p>Exception raised by Elemental MediaConnect when creating the bridge. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class CreateBridge420Exception extends __BaseException {
  readonly name: "CreateBridge420Exception" = "CreateBridge420Exception";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateBridge420Exception, __BaseException>) {
    super({
      name: "CreateBridge420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateBridge420Exception.prototype);
    this.Message = opts.Message;
  }
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
 * @enum
 */
export const DesiredState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  STANDBY: "STANDBY",
} as const;

/**
 * @public
 */
export type DesiredState = (typeof DesiredState)[keyof typeof DesiredState];

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
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;

/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const ContentQualityAnalysisState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ContentQualityAnalysisState =
  (typeof ContentQualityAnalysisState)[keyof typeof ContentQualityAnalysisState];

/**
 * <p>Exception raised by Elemental MediaConnect when creating the flow. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class CreateFlow420Exception extends __BaseException {
  readonly name: "CreateFlow420Exception" = "CreateFlow420Exception";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateFlow420Exception, __BaseException>) {
    super({
      name: "CreateFlow420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateFlow420Exception.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const FlowSize = {
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type FlowSize = (typeof FlowSize)[keyof typeof FlowSize];

/**
 * @public
 * @enum
 */
export const NdiState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type NdiState = (typeof NdiState)[keyof typeof NdiState];

/**
 * <p>Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs. </p>
 * @public
 */
export interface NdiConfig {
  /**
   * <p>A setting that controls whether NDI outputs can be used in the flow. Must be ENABLED to add NDI outputs. Default is DISABLED. </p>
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
 * @public
 * @enum
 */
export const ThumbnailState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ThumbnailState = (typeof ThumbnailState)[keyof typeof ThumbnailState];

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
   * <p> Determines the processing capacity and feature set of the flow. Set this optional parameter to <code>LARGE</code> if you want to enable NDI outputs on the flow. </p>
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * <p> Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs. </p>
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

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
   * <p> Determines the processing capacity and feature set of the flow. Set this optional parameter to LARGE if you want to enable NDI outputs on the flow. </p>
   * @public
   */
  FlowSize?: FlowSize | undefined;

  /**
   * <p>Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs. </p>
   * @public
   */
  NdiConfig?: NdiConfig | undefined;
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
 * <p>Exception raised by Elemental MediaConnect when creating the gateway. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class CreateGateway420Exception extends __BaseException {
  readonly name: "CreateGateway420Exception" = "CreateGateway420Exception";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateGateway420Exception, __BaseException>) {
    super({
      name: "CreateGateway420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateGateway420Exception.prototype);
    this.Message = opts.Message;
  }
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
 * <p> The metadata of the transport stream in the current flow's source.</p>
 * @public
 */
export interface TransportMediaInfo {
  /**
   * <p> The list of transport stream programs in the current flow's source.</p>
   * @public
   */
  Programs: TransportStreamProgram[] | undefined;
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

/**
 * <p>Exception raised by Elemental MediaConnect when granting the entitlement. See the error message for the operation for more information on the cause of this exception. </p>
 * @public
 */
export class GrantFlowEntitlements420Exception extends __BaseException {
  readonly name: "GrantFlowEntitlements420Exception" = "GrantFlowEntitlements420Exception";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GrantFlowEntitlements420Exception, __BaseException>) {
    super({
      name: "GrantFlowEntitlements420Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GrantFlowEntitlements420Exception.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * <p> The list of entitlements that you want to grant.</p>
   * @public
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to grant entitlements on.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsResponse {
  /**
   * <p> The entitlements that were just granted.</p>
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * <p> The ARN of the flow that these entitlements were granted to.</p>
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListFlows</code> request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListFlows</code> request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListFlows</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * <p> A list of flow summaries.</p>
   * @public
   */
  Flows?: ListedFlow[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListFlows</code> request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListFlows</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The name of the media stream that you want to remove.</p>
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamResponse {
  /**
   * <p> The ARN of the flow that was updated.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The name of the media stream that was removed.</p>
   * @public
   */
  MediaStreamName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to remove an output from.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The ARN of the output that you want to remove. </p>
   * @public
   */
  OutputArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputResponse {
  /**
   * <p> The ARN of the flow that the output was removed from. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The ARN of the output that was removed. </p>
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to remove a source from.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The ARN of the source that you want to remove.</p>
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceResponse {
  /**
   * <p> The ARN of the flow that the source was removed from. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The ARN of the source that was removed. </p>
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to remove a VPC interface from.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The name of the VPC interface that you want to remove.</p>
   * @public
   */
  VpcInterfaceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceResponse {
  /**
   * <p> The ARN of the flow that is associated with the VPC interface you removed.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> IDs of network interfaces associated with the removed VPC interface that MediaConnect was unable to remove.</p>
   * @public
   */
  NonDeletedNetworkInterfaceIds?: string[] | undefined;

  /**
   * <p> The name of the VPC interface that was removed.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the entitlement that you want to revoke.</p>
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * <p> The flow that you want to revoke an entitlement from.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementResponse {
  /**
   * <p> The ARN of the entitlement that was revoked.</p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The ARN of the flow that the entitlement was revoked from.</p>
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface StartFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to start.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * <p> The ARN of the flow that you started.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The status of the flow when the <code>StartFlow</code> process begins.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to stop.</p>
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * <p> The ARN of the flow that you stopped.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The status of the flow when the <code>StopFlow</code> process begins.</p>
   * @public
   */
  Status?: Status | undefined;
}

/**
 * <p> Update maintenance setting for a flow.</p>
 * @public
 */
export interface UpdateMaintenance {
  /**
   * <p> A day of a week when the maintenance will happen.</p>
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

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
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the flow that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The settings for source failover. </p>
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;

  /**
   * <p> The maintenance setting of the flow. </p>
   * @public
   */
  Maintenance?: UpdateMaintenance | undefined;

  /**
   * <p> The settings for source monitoring. </p>
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;

  /**
   * <p> Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs. </p>
   * @public
   */
  NdiConfig?: NdiConfig | undefined;

  /**
   * <p> Determines the processing capacity and feature set of the flow. </p>
   * @public
   */
  FlowSize?: FlowSize | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * <p> The updated flow. </p>
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * <p> Information about the encryption of the flow.</p>
 * @public
 */
export interface UpdateEncryption {
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
   * <p> An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p> The ARN of the role that you created during setup (when you set up MediaConnect as a trusted entity).</p>
   * @public
   */
  RoleArn?: string | undefined;

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
 * @public
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * <p> A description of the entitlement. This description appears only on the MediaConnect console and will not be seen by the subscriber or end user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The type of encryption that will be used on the output associated with this entitlement. Allowable encryption types: static-key, speke.</p>
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the entitlement that you want to update.</p>
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * <p> An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the <code>entitlementStatus</code> field in your request, MediaConnect leaves the value unchanged.</p>
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * <p> The ARN of the flow that is associated with the entitlement that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The Amazon Web Services account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.</p>
   * @public
   */
  Subscribers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFlowEntitlementResponse {
  /**
   * <p> The new configuration of the entitlement that you updated.</p>
   * @public
   */
  Entitlement?: Entitlement | undefined;

  /**
   * <p> The ARN of the flow that this entitlement was granted on.</p>
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamRequest {
  /**
   * <p> The attributes that you want to assign to the media stream.</p>
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * <p>The sample rate for the stream. This value in measured in kHz. </p>
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * <p>A description that can help you quickly identify what your media stream is used for. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow that is associated with the media stream that you updated.</p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p> The media stream that you updated.</p>
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * <p>The type of media stream. </p>
   * @public
   */
  MediaStreamType?: MediaStreamType | undefined;

  /**
   * <p>The resolution of the video. </p>
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamResponse {
  /**
   * <p>The ARN of the flow that is associated with the media stream that you updated. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The media stream that you updated. </p>
   * @public
   */
  MediaStream?: MediaStream | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputRequest {
  /**
   * <p> The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</p>
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * <p> A description of the output. This description appears only on the MediaConnect console and will not be seen by the end user.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The IP address where you want to send the output.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p> The type of key used for the encryption. If no <code>keyType</code> is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.</p>
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the flow that is associated with the output that you want to update.</p>
   * @public
   */
  FlowArn: string | undefined;

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
   * <p> The ARN of the output that you want to update.</p>
   * @public
   */
  OutputArn: string | undefined;

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
   * <p> An indication of whether the output should transmit data or not. If you don't specify the <code>outputStatus</code> field in your request, MediaConnect leaves the value unchanged.</p>
   * @public
   */
  OutputStatus?: OutputStatus | undefined;

  /**
   * <p> A suffix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect uses the output name. </p>
   * @public
   */
  NdiProgramName?: string | undefined;

  /**
   * <p>A quality setting for the NDI Speed HQ encoder. </p>
   * @public
   */
  NdiSpeedHqQuality?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputResponse {
  /**
   * <p> The ARN of the flow that is associated with the updated output.</p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p> The new settings of the output that you updated.</p>
   * @public
   */
  Output?: Output | undefined;
}

/**
 * <p> The source configuration for cloud flows receiving a stream from a bridge.</p>
 * @public
 */
export interface UpdateGatewayBridgeSourceRequest {
  /**
   * <p> The ARN of the bridge feeding this flow.</p>
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * <p> The name of the VPC interface attachment to use for this bridge source.</p>
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceRequest {
  /**
   * <p>The type of encryption that is used on the content ingested from the source. </p>
   * @public
   */
  Decryption?: UpdateEncryption | undefined;

  /**
   * <p>A description of the source. This description is not visible outside of the current Amazon Web Services account. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entitlement that allows you to subscribe to the flow. The entitlement is set by the content originator, and the ARN is generated as part of the originator's flow. </p>
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * <p> The ARN of the flow that you want to update. </p>
   * @public
   */
  FlowArn: string | undefined;

  /**
   * <p>The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088. </p>
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * <p>The maximum bitrate for RIST, RTP, and RTP-FEC streams. </p>
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * <p>The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. </p>
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * <p>The size of the buffer (in milliseconds) to use to sync incoming source data. </p>
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * <p>The media stream that is associated with the source, and the parameters for that association. </p>
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * <p>The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency. </p>
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * <p>The protocol that the source uses to deliver the content to MediaConnect. </p> <note> <p>Elemental MediaConnect no longer supports the Fujitsu QoS protocol. This reference is maintained for legacy purposes only.</p> </note>
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * <p>The port that the flow uses to send outbound requests to initiate connection with the sender. </p>
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * <p>The IP address that the flow communicates with to initiate connection with the sender. </p>
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * <p>The ARN of the source that you want to update. </p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source IP or domain name for SRT-caller protocol. </p>
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * <p>Source port for SRT-caller protocol. </p>
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * <p>The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams. </p>
   * @public
   */
  StreamId?: string | undefined;

  /**
   * <p>The name of the VPC interface that you want to send your output to.</p>
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * <p>The range of IP addresses that are allowed to contribute content to your source. Format the IP addresses as a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. </p>
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * <p>The source configuration for cloud flows receiving a stream from a bridge. </p>
   * @public
   */
  GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceResponse {
  /**
   * <p>The ARN of the flow that you was updated. </p>
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * <p>The details of the sources that are assigned to the flow. </p>
   * @public
   */
  Source?: Source | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesRequest {
  /**
   * <p> Filter the list results to display only the instances associated with the selected Gateway ARN.</p>
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a ListInstances request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListInstances</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListInstances</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesResponse {
  /**
   * <p> A list of instance summaries.</p>
   * @public
   */
  Instances?: ListedGatewayInstance[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListInstances</code> request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListInstances</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceRequest {
  /**
   * <p>The state of the instance. <code>ACTIVE</code> or <code>INACTIVE</code>. </p>
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway instance that you want to update. </p>
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceResponse {
  /**
   * <p>The state of the instance. <code>ACTIVE</code> or <code>INACTIVE</code>. </p>
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * <p>The ARN of the instance that was updated. </p>
   * @public
   */
  GatewayInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListGateways</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListGateways</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListGateways</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * <p> A list of gateway summaries.</p>
   * @public
   */
  Gateways?: ListedGateway[] | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListGateways</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListGateways</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListEntitlements</code> request with set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 20 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListEntitlements</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListEntitlements</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * <p>A list of entitlements that have been granted to you from other Amazon Web Services accounts. </p>
   * @public
   */
  Entitlements?: ListedEntitlement[] | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a ListEntitlements request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the <code>ListEntitlements</code> request a second time and specify the <code>NextToken</code> value. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListOfferings</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a <code>NextToken</code> value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListOfferings</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListOfferings</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListOfferings</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListOfferings</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A list of offerings that are available to this account in the current Amazon Web Services Region.</p>
   * @public
   */
  Offerings?: Offering[] | undefined;
}

/**
 * @public
 */
export interface ListReservationsRequest {
  /**
   * <p> The maximum number of results to return per API request. </p> <p>For example, you submit a <code>ListReservations</code> request with <code>MaxResults</code> set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the <code>MaxResults</code> value. If <code>MaxResults</code> is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListReservations</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListOfferings</code> request a second time and specify the <code>NextToken</code> value. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReservationsResponse {
  /**
   * <p> The token that identifies the batch of results that you want to see. </p> <p>For example, you submit a <code>ListReservations</code> request with <code>MaxResults</code> set at 5. The service returns the first batch of results (up to 5) and a <code>NextToken</code> value. To see the next batch of results, you can submit the <code>ListReservations</code> request a second time and specify the <code>NextToken</code> value.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A list of all reservations that have been purchased by this account in the current Amazon Web Services Region. </p>
   * @public
   */
  Reservations?: Reservation[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the MediaConnect resource for which to list the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the offering.</p>
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * <p> The name that you want to use for the reservation.</p>
   * @public
   */
  ReservationName: string | undefined;

  /**
   * <p> The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). </p> <p>You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: <code>YYYY-MM-DDTHH:mm:SSZ</code>, where <code>T</code> and <code>Z</code> are literal characters. For example, to specify 11:30pm on March 5, 2020, enter <code>2020-03-05T23:30:00Z</code>.</p>
   * @public
   */
  Start: string | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * <p>The details of the reservation that you just created when you purchased the offering. </p>
   * @public
   */
  Reservation?: Reservation | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that identifies the MediaConnect resource to which to add tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource that you want to untag. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}
