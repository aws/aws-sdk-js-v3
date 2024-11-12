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
 * Add a network output to an existing bridge.
 * @public
 */
export interface AddBridgeNetworkOutputRequest {
  /**
   * The network output IP Address.
   * @public
   */
  IpAddress: string | undefined;

  /**
   * The network output name. This name is used to reference the output and must be unique among outputs in this bridge.
   * @public
   */
  Name: string | undefined;

  /**
   * The network output's gateway network name.
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network output port.
   * @public
   */
  Port: number | undefined;

  /**
   * The network output protocol.
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The network output TTL.
   * @public
   */
  Ttl: number | undefined;
}

/**
 * Add an output to a bridge.
 * @public
 */
export interface AddBridgeOutputRequest {
  /**
   * Add a network output to an existing bridge.
   * @public
   */
  NetworkOutput?: AddBridgeNetworkOutputRequest | undefined;
}

/**
 * The settings for attaching a VPC interface to an resource.
 * @public
 */
export interface VpcInterfaceAttachment {
  /**
   * The name of the VPC interface to use for this resource.
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * Add a flow source to an existing bridge.
 * @public
 */
export interface AddBridgeFlowSourceRequest {
  /**
   * The Amazon Resource Number (ARN) of the cloud flow to use as a source of this bridge.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this source.
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * The name of the flow source. This name is used to reference the source and must be unique among sources in this bridge.
   * @public
   */
  Name: string | undefined;
}

/**
 * Add a network source to an existing bridge.
 * @public
 */
export interface AddBridgeNetworkSourceRequest {
  /**
   * The network source multicast IP.
   * @public
   */
  MulticastIp: string | undefined;

  /**
   * The name of the network source. This name is used to reference the source and must be unique among sources in this bridge.
   * @public
   */
  Name: string | undefined;

  /**
   * The network source's gateway network name.
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network source port.
   * @public
   */
  Port: number | undefined;

  /**
   * The network source protocol.
   * @public
   */
  Protocol: Protocol | undefined;
}

/**
 * Add a source to an existing bridge.
 * @public
 */
export interface AddBridgeSourceRequest {
  /**
   * Add a flow source to an existing bridge.
   * @public
   */
  FlowSource?: AddBridgeFlowSourceRequest | undefined;

  /**
   * Add a network source to an existing bridge.
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
 * The settings that you want to use to define the media stream.
 * @public
 */
export interface FmtpRequest {
  /**
   * The format of the audio channel.
   * @public
   */
  ChannelOrder?: string | undefined;

  /**
   * The format that is used for the representation of color.
   * @public
   */
  Colorimetry?: Colorimetry | undefined;

  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.
   * @public
   */
  ExactFramerate?: string | undefined;

  /**
   * The pixel aspect ratio (PAR) of the video.
   * @public
   */
  Par?: string | undefined;

  /**
   * The encoding range of the video.
   * @public
   */
  Range?: Range | undefined;

  /**
   * The type of compression that was used to smooth the video’s appearance.
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * The transfer characteristic system (TCS) that is used in the video.
   * @public
   */
  Tcs?: Tcs | undefined;
}

/**
 * Attributes that are related to the media stream.
 * @public
 */
export interface MediaStreamAttributesRequest {
  /**
   * The settings that you want to use to define the media stream.
   * @public
   */
  Fmtp?: FmtpRequest | undefined;

  /**
   * The audio language, in a format that is recognized by the receiver.
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
 * The media stream that you want to add to the flow.
 * @public
 */
export interface AddMediaStreamRequest {
  /**
   * The attributes that you want to assign to the new media stream.
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique identifier for the media stream.
   * @public
   */
  MediaStreamId: number | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * The resolution of the video.
   * @public
   */
  VideoFormat?: string | undefined;
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
 * Information about the encryption of the flow.
 * @public
 */
export interface Encryption {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  Region?: string | undefined;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  Url?: string | undefined;
}

/**
 * The VPC interface that you want to designate where the media stream is coming from or going to.
 * @public
 */
export interface InterfaceRequest {
  /**
   * The name of the VPC interface.
   * @public
   */
  Name: string | undefined;
}

/**
 * The transport parameters that you want to associate with an outbound media stream.
 * @public
 */
export interface DestinationConfigurationRequest {
  /**
   * The IP address where you want MediaConnect to send contents of the media stream.
   * @public
   */
  DestinationIp: string | undefined;

  /**
   * The port that you want MediaConnect to use when it distributes the media stream to the output.
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The VPC interface that you want to use for the media stream associated with the output.
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
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 * @public
 */
export interface EncodingParametersRequest {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   * @public
   */
  CompressionFactor: number | undefined;

  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, if at least one source on the flow uses the CDI protocol.
   * @public
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * The media stream that you want to associate with the output, and the parameters for that association.
 * @public
 */
export interface MediaStreamOutputConfigurationRequest {
  /**
   * The transport parameters that you want to associate with the media stream.
   * @public
   */
  DestinationConfigurations?: DestinationConfigurationRequest[] | undefined;

  /**
   * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   * @public
   */
  EncodingParameters?: EncodingParametersRequest | undefined;

  /**
   * The name of the media stream that is associated with the output.
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
 * The output that you want to add to this flow.
 * @public
 */
export interface AddOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address from which video will be sent to output destinations.
   * @public
   */
  Destination?: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The media streams that are associated with the output, and the parameters for those associations.
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The name of the output. This value must be unique within the current flow.
   * @public
   */
  Name?: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol to use for the output.
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The remote ID for the Zixi-pull output stream.
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this output.
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * An indication of whether the new output should be enabled or disabled as soon as it is created. If you don't specify the outputStatus field in your request, MediaConnect sets it to ENABLED.
   * @public
   */
  OutputStatus?: OutputStatus | undefined;
}

/**
 * The output of the bridge. A flow output is delivered to the AWS cloud.
 * @public
 */
export interface BridgeFlowOutput {
  /**
   * The Amazon Resource Number (ARN) of the cloud flow.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the flow source.
   * @public
   */
  FlowSourceArn: string | undefined;

  /**
   * The name of the bridge's output.
   * @public
   */
  Name: string | undefined;
}

/**
 * The output of the bridge. A network output is delivered to your premises.
 * @public
 */
export interface BridgeNetworkOutput {
  /**
   * The network output IP Address.
   * @public
   */
  IpAddress: string | undefined;

  /**
   * The network output name.
   * @public
   */
  Name: string | undefined;

  /**
   * The network output's gateway network name.
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network output port.
   * @public
   */
  Port: number | undefined;

  /**
   * The network output protocol.
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The network output TTL.
   * @public
   */
  Ttl: number | undefined;
}

/**
 * The output of the bridge.
 * @public
 */
export interface BridgeOutput {
  /**
   * The output of the bridge. A flow output is delivered to the AWS cloud.
   * @public
   */
  FlowOutput?: BridgeFlowOutput | undefined;

  /**
   * The output of the bridge. A network output is delivered to your premises.
   * @public
   */
  NetworkOutput?: BridgeNetworkOutput | undefined;
}

/**
 * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
 * @public
 */
export interface BridgeFlowSource {
  /**
   * The ARN of the cloud flow used as a source of this bridge.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this source.
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * The name of the flow source.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the output.
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * The source of the bridge. A network source originates at your premises.
 * @public
 */
export interface BridgeNetworkSource {
  /**
   * The network source multicast IP.
   * @public
   */
  MulticastIp: string | undefined;

  /**
   * The name of the network source.
   * @public
   */
  Name: string | undefined;

  /**
   * The network source's gateway network name.
   * @public
   */
  NetworkName: string | undefined;

  /**
   * The network source port.
   * @public
   */
  Port: number | undefined;

  /**
   * The network source protocol.
   * @public
   */
  Protocol: Protocol | undefined;
}

/**
 * The bridge's source.
 * @public
 */
export interface BridgeSource {
  /**
   * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
   * @public
   */
  FlowSource?: BridgeFlowSource | undefined;

  /**
   * The source of the bridge. A network source originates at your premises.
   * @public
   */
  NetworkSource?: BridgeNetworkSource | undefined;
}

/**
 * The VPC interface that is used for the media stream associated with the source or output.
 * @public
 */
export interface Interface {
  /**
   * The name of the VPC interface.
   * @public
   */
  Name: string | undefined;
}

/**
 * The transport parameters that are associated with an outbound media stream.
 * @public
 */
export interface DestinationConfiguration {
  /**
   * The IP address where contents of the media stream will be sent.
   * @public
   */
  DestinationIp: string | undefined;

  /**
   * The port to use when the content of the media stream is distributed to the output.
   * @public
   */
  DestinationPort: number | undefined;

  /**
   * The VPC interface that is used for the media stream associated with the output.
   * @public
   */
  Interface: Interface | undefined;

  /**
   * The IP address that the receiver requires in order to establish a connection with the flow. This value is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the CDI or ST 2110 JPEG XS protocol.
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
 * The settings for a flow entitlement.
 * @public
 */
export interface Entitlement {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * A description of the entitlement.
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The ARN of the entitlement.
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * An indication of whether the entitlement is enabled.
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * The name of the entitlement.
   * @public
   */
  Name: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   * @public
   */
  Subscribers: string[] | undefined;
}

/**
 * The network settings for a gateway.
 * @public
 */
export interface GatewayNetwork {
  /**
   * A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  CidrBlock: string | undefined;

  /**
   * The name of the network. This name is used to reference the network and must be unique among networks in this gateway.
   * @public
   */
  Name: string | undefined;
}

/**
 * The entitlements that you want to grant on a flow.
 * @public
 */
export interface GrantEntitlementRequest {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement. Allowable encryption types: static-key, speke.
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * The name of the entitlement. This value must be unique within the current flow.
   * @public
   */
  Name?: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   * @public
   */
  Subscribers: string[] | undefined;
}

/**
 * The transport parameters that are associated with an incoming media stream.
 * @public
 */
export interface InputConfiguration {
  /**
   * The IP address that the flow listens on for incoming content for a media stream.
   * @public
   */
  InputIp: string | undefined;

  /**
   * The port that the flow listens on for an incoming media stream.
   * @public
   */
  InputPort: number | undefined;

  /**
   * The VPC interface where the media stream comes in from.
   * @public
   */
  Interface: Interface | undefined;
}

/**
 * The transport parameters that you want to associate with an incoming media stream.
 * @public
 */
export interface InputConfigurationRequest {
  /**
   * The port that you want the flow to listen on for an incoming media stream.
   * @public
   */
  InputPort: number | undefined;

  /**
   * The VPC interface that you want to use for the incoming media stream.
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
 * Displays details of the selected bridge.
 * @public
 */
export interface ListedBridge {
  /**
   * The ARN of the bridge.
   * @public
   */
  BridgeArn: string | undefined;

  BridgeState: BridgeState | undefined;
  /**
   * The type of the bridge.
   * @public
   */
  BridgeType: string | undefined;

  /**
   * The name of the bridge.
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the gateway associated with the bridge.
   * @public
   */
  PlacementArn: string | undefined;
}

/**
 * An entitlement that has been granted to you from other AWS accounts.
 * @public
 */
export interface ListedEntitlement {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * The ARN of the entitlement.
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * The name of the entitlement.
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
 * The maintenance setting of a flow
 * @public
 */
export interface Maintenance {
  /**
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * The Maintenance has to be performed before this deadline in ISO UTC format. Example: 2021-01-30T08:30:00Z.
   * @public
   */
  MaintenanceDeadline?: string | undefined;

  /**
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
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
 * Provides a summary of a flow, including its ARN, Availability Zone, and source type.
 * @public
 */
export interface ListedFlow {
  /**
   * The Availability Zone that the flow was created in.
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow.
   * @public
   */
  Description: string | undefined;

  /**
   * The ARN of the flow.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the flow.
   * @public
   */
  Name: string | undefined;

  /**
   * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
   * @public
   */
  SourceType: SourceType | undefined;

  /**
   * The current status of the flow.
   * @public
   */
  Status: Status | undefined;

  /**
   * The maintenance setting of a flow
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
 * Provides a summary of a gateway, including its name, ARN, and status.
 * @public
 */
export interface ListedGateway {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   * @public
   */
  GatewayArn: string | undefined;

  GatewayState: GatewayState | undefined;
  /**
   * The name of the gateway.
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
 * Provides a summary of an instance.
 * @public
 */
export interface ListedGatewayInstance {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @public
   */
  GatewayInstanceArn: string | undefined;

  /**
   * The managed instance ID generated by the SSM install. This will begin with "mi-".
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The status of the instance.
   * @public
   */
  InstanceState?: InstanceState | undefined;
}

/**
 * FMTP
 * @public
 */
export interface Fmtp {
  /**
   * The format of the audio channel.
   * @public
   */
  ChannelOrder?: string | undefined;

  /**
   * The format that is used for the representation of color.
   * @public
   */
  Colorimetry?: Colorimetry | undefined;

  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.
   * @public
   */
  ExactFramerate?: string | undefined;

  /**
   * The pixel aspect ratio (PAR) of the video.
   * @public
   */
  Par?: string | undefined;

  /**
   * The encoding range of the video.
   * @public
   */
  Range?: Range | undefined;

  /**
   * The type of compression that was used to smooth the video’s appearance
   * @public
   */
  ScanMode?: ScanMode | undefined;

  /**
   * The transfer characteristic system (TCS) that is used in the video.
   * @public
   */
  Tcs?: Tcs | undefined;
}

/**
 * Attributes that are related to the media stream.
 * @public
 */
export interface MediaStreamAttributes {
  /**
   * A set of parameters that define the media stream.
   * @public
   */
  Fmtp: Fmtp | undefined;

  /**
   * The audio language, in a format that is recognized by the receiver.
   * @public
   */
  Lang?: string | undefined;
}

/**
 * A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.
 * @public
 */
export interface MediaStream {
  /**
   * Attributes that are related to the media stream.
   * @public
   */
  Attributes?: MediaStreamAttributes | undefined;

  /**
   * The sample rate for the stream. This value is measured in Hz.
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   * @public
   */
  Description?: string | undefined;

  /**
   * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
   * @public
   */
  Fmt: number | undefined;

  /**
   * A unique identifier for the media stream.
   * @public
   */
  MediaStreamId: number | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   * @public
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * The resolution of the video.
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 * @public
 */
export interface EncodingParameters {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   * @public
   */
  CompressionFactor: number | undefined;

  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
   * @public
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * The media stream that is associated with the output, and the parameters for that association.
 * @public
 */
export interface MediaStreamOutputConfiguration {
  /**
   * The transport parameters that are associated with each outbound media stream.
   * @public
   */
  DestinationConfigurations?: DestinationConfiguration[] | undefined;

  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * Encoding parameters
   * @public
   */
  EncodingParameters?: EncodingParameters | undefined;

  /**
   * The name of the media stream.
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * The media stream that is associated with the source, and the parameters for that association.
 * @public
 */
export interface MediaStreamSourceConfiguration {
  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * The transport parameters that are associated with an incoming media stream.
   * @public
   */
  InputConfigurations?: InputConfiguration[] | undefined;

  /**
   * The name of the media stream.
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * The definition of a media stream that you want to associate with the source.
 * @public
 */
export interface MediaStreamSourceConfigurationRequest {
  /**
   * The format you want to use to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   * @public
   */
  EncodingName: EncodingName | undefined;

  /**
   * The transport parameters that you want to associate with the media stream.
   * @public
   */
  InputConfigurations?: InputConfigurationRequest[] | undefined;

  /**
   * The name of the media stream.
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface MessageDetail {
  /**
   * The error code.
   * @public
   */
  Code: string | undefined;

  /**
   * The specific error message that MediaConnect returns to help you understand the reason that the request did not succeed.
   * @public
   */
  Message: string | undefined;

  /**
   * The name of the resource.
   * @public
   */
  ResourceName?: string | undefined;
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
 * A definition of what is being billed for, including the type and amount.
 * @public
 */
export interface ResourceSpecification {
  /**
   * The amount of outbound bandwidth that is discounted in the offering.
   * @public
   */
  ReservedBitrate?: number | undefined;

  /**
   * The type of resource and the unit that is being billed for.
   * @public
   */
  ResourceType: ResourceType | undefined;
}

/**
 * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
 * @public
 */
export interface Offering {
  /**
   * The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * The length of time that your reservation would be active.
   * @public
   */
  Duration: number | undefined;

  /**
   * The unit of measurement for the duration of the offering.
   * @public
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * A description of the offering.
   * @public
   */
  OfferingDescription: string | undefined;

  /**
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate.
   * @public
   */
  PricePerUnit: string | undefined;

  /**
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate.
   * @public
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.
   * @public
   */
  ResourceSpecification: ResourceSpecification | undefined;
}

/**
 * Attributes related to the transport stream that are used in a source or output.
 * @public
 */
export interface Transport {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The protocol that is used by the source or output.
   * @public
   */
  Protocol: Protocol | undefined;

  /**
   * The remote ID for the Zixi-pull stream.
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * Source IP or domain name for SRT-caller protocol.
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * Source port for SRT-caller protocol.
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   * @public
   */
  StreamId?: string | undefined;
}

/**
 * The settings for an output.
 * @public
 */
export interface Output {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * A description of the output.
   * @public
   */
  Description?: string | undefined;

  /**
   * The address where you want to send the output.
   * @public
   */
  Destination?: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   * @public
   */
  Encryption?: Encryption | undefined;

  /**
   * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The IP address that the receiver requires in order to establish a connection with the flow. For public networking, the ListenerAddress is represented by the elastic IP address of the flow. For private networking, the ListenerAddress is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the Zixi pull or SRT listener protocol.
   * @public
   */
  ListenerAddress?: string | undefined;

  /**
   * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
   * @public
   */
  MediaLiveInputArn?: string | undefined;

  /**
   * The configuration for each media stream that is associated with the output.
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[] | undefined;

  /**
   * The name of the output. This value must be unique within the current flow.
   * @public
   */
  Name: string | undefined;

  /**
   * The ARN of the output.
   * @public
   */
  OutputArn: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   * @public
   */
  Port?: number | undefined;

  /**
   * Attributes related to the transport stream that are used in the output.
   * @public
   */
  Transport?: Transport | undefined;

  /**
   * The name of the VPC interface attachment to use for this output.
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * The ARN of the bridge that added this output.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The bridge output ports currently in use.
   * @public
   */
  BridgePorts?: number[] | undefined;

  /**
   * An indication of whether the output is transmitting data or not.
   * @public
   */
  OutputStatus?: OutputStatus | undefined;
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
 * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
 * @public
 */
export interface Reservation {
  /**
   * The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * The length of time that this reservation is active. MediaConnect defines this value in the offering.
   * @public
   */
  Duration: number | undefined;

  /**
   * The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering.
   * @public
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.
   * @public
   */
  End: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * A description of the offering. MediaConnect defines this value in the offering.
   * @public
   */
  OfferingDescription: string | undefined;

  /**
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.
   * @public
   */
  PricePerUnit: string | undefined;

  /**
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering.
   * @public
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.
   * @public
   */
  ReservationArn: string | undefined;

  /**
   * The name that you assigned to the reservation when you purchased the offering.
   * @public
   */
  ReservationName: string | undefined;

  /**
   * The status of your reservation.
   * @public
   */
  ReservationState: ReservationState | undefined;

  /**
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.
   * @public
   */
  ResourceSpecification: ResourceSpecification | undefined;

  /**
   * The day and time that the reservation becomes active. You set this value when you purchase the offering.
   * @public
   */
  Start: string | undefined;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 * @public
 */
export interface SetGatewayBridgeSourceRequest {
  /**
   * The ARN of the bridge feeding this flow.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this bridge source.
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * The settings for the source of the flow.
 * @public
 */
export interface SetSourceRequest {
  /**
   * The type of encryption that is used on the content ingested from this source. Allowable encryption types: static-key.
   * @public
   */
  Decryption?: Encryption | undefined;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The port that the flow will be listening on for incoming content.
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The name of the source.
   * @public
   */
  Name?: string | undefined;

  /**
   * The protocol that is used by the source.
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * Source IP or domain name for SRT-caller protocol.
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * Source port for SRT-caller protocol.
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface to use for this source.
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   * @public
   */
  GatewayBridgeSource?: SetGatewayBridgeSourceRequest | undefined;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 * @public
 */
export interface GatewayBridgeSource {
  /**
   * The ARN of the bridge feeding this flow.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this bridge source.
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * The settings for the source of the flow.
 * @public
 */
export interface Source {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   * @public
   */
  DataTransferSubscriberFeePercent?: number | undefined;

  /**
   * The type of encryption that is used on the content ingested from this source.
   * @public
   */
  Decryption?: Encryption | undefined;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The IP address that the flow will be listening on for incoming content.
   * @public
   */
  IngestIp?: string | undefined;

  /**
   * The port that the flow will be listening on for incoming content.
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[] | undefined;

  /**
   * The name of the source.
   * @public
   */
  Name: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The ARN of the source.
   * @public
   */
  SourceArn: string | undefined;

  /**
   * Attributes related to the transport stream that are used in the source.
   * @public
   */
  Transport?: Transport | undefined;

  /**
   * The name of the VPC interface that is used for this source.
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   * @public
   */
  GatewayBridgeSource?: GatewayBridgeSource | undefined;
}

/**
 * The frame resolution used by the video stream.
 * @public
 */
export interface FrameResolution {
  /**
   * The number of pixels in the height of the video frame.
   * @public
   */
  FrameHeight: number | undefined;

  /**
   * The number of pixels in the width of the video frame.
   * @public
   */
  FrameWidth: number | undefined;
}

/**
 * The metadata of an elementary transport stream.
 * @public
 */
export interface TransportStream {
  /**
   * The number of channels in the audio stream.
   * @public
   */
  Channels?: number | undefined;

  /**
   * The codec used by the stream.
   * @public
   */
  Codec?: string | undefined;

  /**
   * The frame rate used by the video stream.
   * @public
   */
  FrameRate?: string | undefined;

  /**
   * The frame resolution used by the video stream.
   * @public
   */
  FrameResolution?: FrameResolution | undefined;

  /**
   * The Packet ID (PID) as it is reported in the Program Map Table.
   * @public
   */
  Pid: number | undefined;

  /**
   * The sample rate used by the audio stream.
   * @public
   */
  SampleRate?: number | undefined;

  /**
   * The sample bit size used by the audio stream.
   * @public
   */
  SampleSize?: number | undefined;

  /**
   * The Stream Type as it is reported in the Program Map Table.
   * @public
   */
  StreamType: string | undefined;
}

/**
 * The metadata of a single transport stream program.
 * @public
 */
export interface TransportStreamProgram {
  /**
   * The Program Clock Reference (PCR) Packet ID (PID) as it is reported in the Program Association Table.
   * @public
   */
  PcrPid: number | undefined;

  /**
   * The program name as it is reported in the Program Association Table.
   * @public
   */
  ProgramName?: string | undefined;

  /**
   * The program number as it is reported in the Program Association Table.
   * @public
   */
  ProgramNumber: number | undefined;

  /**
   * The program Packet ID (PID) as it is reported in the Program Association Table.
   * @public
   */
  ProgramPid: number | undefined;

  /**
   * The list of elementary transport streams in the program. The list includes video, audio, and data streams.
   * @public
   */
  Streams: TransportStream[] | undefined;
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
 * The settings for a VPC Source.
 * @public
 */
export interface VpcInterface {
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   * @public
   */
  Name: string | undefined;

  /**
   * IDs of the network interfaces created in customer's account by MediaConnect.
   * @public
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * The type of network interface.
   * @public
   */
  NetworkInterfaceType: NetworkInterfaceType | undefined;

  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Security Group IDs to be used on ENI.
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Subnet must be in the AZ of the Flow
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * Desired VPC Interface for a Flow
 * @public
 */
export interface VpcInterfaceRequest {
  /**
   * The name of the VPC Interface. This value must be unique within the current flow.
   * @public
   */
  Name: string | undefined;

  /**
   * The type of network interface. If this value is not included in the request, MediaConnect uses ENA as the networkInterfaceType.
   * @public
   */
  NetworkInterfaceType?: NetworkInterfaceType | undefined;

  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Security Group IDs to be used on ENI.
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Subnet must be in the AZ of the Flow
   * @public
   */
  SubnetId: string | undefined;
}

/**
 * A request to add outputs to the specified bridge.
 * @public
 */
export interface AddBridgeOutputsRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The outputs that you want to add to this bridge.
   * @public
   */
  Outputs: AddBridgeOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeOutputsResponse {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The outputs that you added to this bridge.
   * @public
   */
  Outputs?: BridgeOutput[] | undefined;
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * A request to add sources to the specified bridge.
 * @public
 */
export interface AddBridgeSourcesRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The sources that you want to add to this bridge.
   * @public
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeSourcesResponse {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The sources that you added to this bridge.
   * @public
   */
  Sources?: BridgeSource[] | undefined;
}

/**
 * @public
 */
export interface AddEgressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps).
   * @public
   */
  MaxBitrate: number | undefined;
}

/**
 * A request to add media streams to the flow.
 * @public
 */
export interface AddFlowMediaStreamsRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The media streams that you want to add to the flow.
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
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The media streams that you added to the flow.
   * @public
   */
  MediaStreams?: MediaStream[] | undefined;
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class AddFlowOutputs420Exception extends __BaseException {
  readonly name: "AddFlowOutputs420Exception" = "AddFlowOutputs420Exception";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * A request to add outputs to the specified flow.
 * @public
 */
export interface AddFlowOutputsRequest {
  /**
   * The flow that you want to add outputs to.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * A list of outputs that you want to add.
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
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the newly added outputs.
   * @public
   */
  Outputs?: Output[] | undefined;
}

/**
 * A request to add sources to the flow.
 * @public
 */
export interface AddFlowSourcesRequest {
  /**
   * The flow that you want to mutate.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * A list of sources that you want to add.
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
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the newly added sources.
   * @public
   */
  Sources?: Source[] | undefined;
}

/**
 * A request to add VPC interfaces to the flow.
 * @public
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * The flow that you want to mutate.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * A list of VPC interfaces that you want to add.
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
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The details of the newly added VPC interfaces.
   * @public
   */
  VpcInterfaces?: VpcInterface[] | undefined;
}

/**
 * @public
 */
export interface AddIngressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps).
   * @public
   */
  MaxBitrate: number | undefined;

  /**
   * The maximum number of expected outputs.
   * @public
   */
  MaxOutputs: number | undefined;
}

/**
 * Create maintenance setting for a flow
 * @public
 */
export interface AddMaintenance {
  /**
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   * @public
   */
  MaintenanceDay: MaintenanceDay | undefined;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   * @public
   */
  MaintenanceStartHour: string | undefined;
}

/**
 * @public
 */
export interface EgressGatewayBridge {
  /**
   * The ID of the instance running this bridge.
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The maximum expected bitrate (in bps) of the egress bridge.
   * @public
   */
  MaxBitrate: number | undefined;
}

/**
 * @public
 */
export interface IngressGatewayBridge {
  /**
   * The ID of the instance running this bridge.
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The maximum expected bitrate (in bps) of the ingress bridge.
   * @public
   */
  MaxBitrate: number | undefined;

  /**
   * The maximum number of outputs on the ingress bridge.
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
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
 * @public
 */
export interface SourcePriority {
  /**
   * The name of the source you choose as the primary source for this flow.
   * @public
   */
  PrimarySource?: string | undefined;
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
 * The settings for source failover.
 * @public
 */
export interface FailoverConfig {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   * @public
   */
  FailoverMode?: FailoverMode | undefined;

  /**
   * Search window time to look for dash-7 packets
   * @public
   */
  RecoveryWindow?: number | undefined;

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   * @public
   */
  SourcePriority?: SourcePriority | undefined;

  State?: State | undefined;
}

/**
 * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
 * @public
 */
export interface Bridge {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  BridgeArn: string | undefined;

  BridgeMessages?: MessageDetail[] | undefined;
  BridgeState: BridgeState | undefined;
  EgressGatewayBridge?: EgressGatewayBridge | undefined;
  IngressGatewayBridge?: IngressGatewayBridge | undefined;
  /**
   * The name of the bridge.
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs on this bridge.
   * @public
   */
  Outputs?: BridgeOutput[] | undefined;

  /**
   * The placement Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  PlacementArn: string | undefined;

  /**
   * The settings for source failover.
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * The sources on this bridge.
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class CreateBridge420Exception extends __BaseException {
  readonly name: "CreateBridge420Exception" = "CreateBridge420Exception";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Creates a new bridge. The request must include one source.
 * @public
 */
export interface CreateBridgeRequest {
  /**
   * Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
   * @public
   */
  EgressGatewayBridge?: AddEgressGatewayBridgeRequest | undefined;

  /**
   * Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
   * @public
   */
  IngressGatewayBridge?: AddIngressGatewayBridgeRequest | undefined;

  /**
   * The name of the bridge. This name can not be modified after the bridge is created.
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs that you want to add to this bridge.
   * @public
   */
  Outputs?: AddBridgeOutputRequest[] | undefined;

  /**
   * The bridge placement Amazon Resource Number (ARN).
   * @public
   */
  PlacementArn: string | undefined;

  /**
   * The settings for source failover.
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  /**
   * The sources that you want to add to this bridge.
   * @public
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateBridgeResponse {
  /**
   * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class CreateFlow420Exception extends __BaseException {
  readonly name: "CreateFlow420Exception" = "CreateFlow420Exception";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
export const ThumbnailState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ThumbnailState = (typeof ThumbnailState)[keyof typeof ThumbnailState];

/**
 * The settings for source monitoring.
 * @public
 */
export interface MonitoringConfig {
  /**
   * The state of thumbnail monitoring.
   * @public
   */
  ThumbnailState?: ThumbnailState | undefined;
}

/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 * @public
 */
export interface CreateFlowRequest {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The entitlements that you want to grant on a flow.
   * @public
   */
  Entitlements?: GrantEntitlementRequest[] | undefined;

  /**
   * The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.
   * @public
   */
  MediaStreams?: AddMediaStreamRequest[] | undefined;

  /**
   * The name of the flow.
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs that you want to add to this flow.
   * @public
   */
  Outputs?: AddOutputRequest[] | undefined;

  /**
   * The settings for the source of the flow.
   * @public
   */
  Source?: SetSourceRequest | undefined;

  /**
   * The settings for source failover.
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  Sources?: SetSourceRequest[] | undefined;
  /**
   * The VPC interfaces you want on the flow.
   * @public
   */
  VpcInterfaces?: VpcInterfaceRequest[] | undefined;

  /**
   * Create maintenance setting for a flow
   * @public
   */
  Maintenance?: AddMaintenance | undefined;

  /**
   * The settings for source monitoring.
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;
}

/**
 * The settings for a flow, including its source, outputs, and entitlements.
 * @public
 */
export interface Flow {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address from which video will be sent to output destinations.
   * @public
   */
  EgressIp?: string | undefined;

  /**
   * The entitlements in this flow.
   * @public
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.
   * @public
   */
  MediaStreams?: MediaStream[] | undefined;

  /**
   * The name of the flow.
   * @public
   */
  Name: string | undefined;

  /**
   * The outputs in this flow.
   * @public
   */
  Outputs: Output[] | undefined;

  /**
   * The settings for the source of the flow.
   * @public
   */
  Source: Source | undefined;

  /**
   * The settings for source failover.
   * @public
   */
  SourceFailoverConfig?: FailoverConfig | undefined;

  Sources?: Source[] | undefined;
  /**
   * The current status of the flow.
   * @public
   */
  Status: Status | undefined;

  /**
   * The VPC Interfaces for this flow.
   * @public
   */
  VpcInterfaces?: VpcInterface[] | undefined;

  /**
   * The maintenance setting of a flow
   * @public
   */
  Maintenance?: Maintenance | undefined;

  /**
   * The settings for source monitoring.
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class CreateGateway420Exception extends __BaseException {
  readonly name: "CreateGateway420Exception" = "CreateGateway420Exception";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * Creates a new gateway. The request must include at least one network (up to 4).
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * The name of the gateway. This name can not be modified after the gateway is created.
   * @public
   */
  Name: string | undefined;

  /**
   * The list of networks that you want to add.
   * @public
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * The settings for a gateway, including its networks.
 * @public
 */
export interface Gateway {
  /**
   * The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway.
   * @public
   */
  GatewayArn: string | undefined;

  GatewayMessages?: MessageDetail[] | undefined;
  /**
   * The current status of the gateway.
   * @public
   */
  GatewayState?: GatewayState | undefined;

  /**
   * The name of the gateway. This name can not be modified after the gateway is created.
   * @public
   */
  Name: string | undefined;

  /**
   * The list of networks in the gateway.
   * @public
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * The settings for a gateway, including its networks.
   * @public
   */
  Gateway?: Gateway | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeRequest {
  /**
   * The ARN of the bridge that you want to delete.
   * @public
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeResponse {
  /**
   * The Amazon Resource Number (ARN) of the deleted bridge.
   * @public
   */
  BridgeArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * The ARN of the flow that you want to delete.
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
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The status of the flow when the DeleteFlow process begins.
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * The ARN of the gateway that you want to delete.
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway that was deleted.
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceRequest {
  /**
   * Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.
   * @public
   */
  Force?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceResponse {
  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @public
   */
  GatewayInstanceArn?: string | undefined;

  /**
   * The status of the instance.
   * @public
   */
  InstanceState?: InstanceState | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeRequest {
  /**
   * The ARN of the bridge that you want to describe.
   * @public
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeResponse {
  /**
   * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * The ARN of the flow that you want to describe.
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * Messages that provide the state of the flow.
 * @public
 */
export interface Messages {
  /**
   * A list of errors that might have been generated from processes on this flow.
   * @public
   */
  Errors: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   * @public
   */
  Flow?: Flow | undefined;

  /**
   * Messages that provide the state of the flow.
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
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * The metadata of the transport stream in the current flow's source.
 * @public
 */
export interface TransportMediaInfo {
  /**
   * The list of transport stream programs in the current flow's source.
   * @public
   */
  Programs: TransportStreamProgram[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceMetadataResponse {
  /**
   * The ARN of the flow that DescribeFlowSourceMetadata was performed on.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * Provides a status code and message regarding issues found with the flow source metadata.
   * @public
   */
  Messages?: MessageDetail[] | undefined;

  /**
   * The timestamp of the most recent change in metadata for this flow’s source.
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The metadata of the transport stream in the current flow's source.
   * @public
   */
  TransportMediaInfo?: TransportMediaInfo | undefined;
}

/**
 * @public
 */
export interface DescribeFlowSourceThumbnailRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * The details of the thumbnail, including thumbnail base64 string, timecode and the time when thumbnail was generated.
 * @public
 */
export interface ThumbnailDetails {
  /**
   * The ARN of the flow that DescribeFlowSourceThumbnail was performed on.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * Thumbnail Base64 string.
   * @public
   */
  Thumbnail?: string | undefined;

  /**
   * Status code and messages about the flow source thumbnail.
   * @public
   */
  ThumbnailMessages: MessageDetail[] | undefined;

  /**
   * Timecode of thumbnail.
   * @public
   */
  Timecode?: string | undefined;

  /**
   * The timestamp of when thumbnail was generated.
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
   * @public
   */
  ThumbnailDetails?: ThumbnailDetails | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * The Amazon Resource Name (ARN) of the gateway that you want to describe.
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * The settings for a gateway, including its networks.
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
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * The settings for an instance in a gateway.
 * @public
 */
export interface GatewayInstance {
  /**
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.
   * @public
   */
  BridgePlacement: BridgePlacement | undefined;

  /**
   * The connection state of the instance.
   * @public
   */
  ConnectionStatus: ConnectionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway.
   * @public
   */
  GatewayInstanceArn: string | undefined;

  /**
   * The managed instance ID generated by the SSM install. This will begin with "mi-".
   * @public
   */
  InstanceId: string | undefined;

  InstanceMessages?: MessageDetail[] | undefined;
  /**
   * The status of the instance.
   * @public
   */
  InstanceState: InstanceState | undefined;

  /**
   * The running bridge count.
   * @public
   */
  RunningBridgeCount: number | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceResponse {
  /**
   * The settings for an instance in a gateway.
   * @public
   */
  GatewayInstance?: GatewayInstance | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   * @public
   */
  OfferingArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingResponse {
  /**
   * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
   * @public
   */
  Offering?: Offering | undefined;
}

/**
 * @public
 */
export interface DescribeReservationRequest {
  /**
   * The Amazon Resource Name (ARN) of the reservation.
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
   * @public
   */
  Reservation?: Reservation | undefined;
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 * @public
 */
export class GrantFlowEntitlements420Exception extends __BaseException {
  readonly name: "GrantFlowEntitlements420Exception" = "GrantFlowEntitlements420Exception";
  readonly $fault: "client" = "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   * @public
   */
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
 * A request to grant entitlements on a flow.
 * @public
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * The list of entitlements that you want to grant.
   * @public
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * The flow that you want to grant entitlements on.
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsResponse {
  /**
   * The entitlements that were just granted.
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * The ARN of the flow that these entitlements were granted to.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface ListBridgesRequest {
  /**
   * Filter the list results to display only the bridges associated with the selected Amazon Resource Name (ARN).
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * The maximum number of results to return per API request. For example, you submit a ListBridges request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.
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
   * @public
   */
  Bridges?: ListedBridge[] | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * A list of entitlements that have been granted to you from other AWS accounts.
   * @public
   */
  Entitlements?: ListedEntitlement[] | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * A list of flow summaries.
   * @public
   */
  Flows?: ListedFlow[] | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesRequest {
  /**
   * Filter the list results to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
   * @public
   */
  FilterArn?: string | undefined;

  /**
   * The maximum number of results to return per API request. For example, you submit a ListInstances request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayInstancesResponse {
  /**
   * A list of instance summaries.
   * @public
   */
  Instances?: ListedGatewayInstance[] | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListGateways request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * A list of gateway summaries.
   * @public
   */
  Gateways?: ListedGateway[] | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of offerings that are available to this account in the current AWS Region.
   * @public
   */
  Offerings?: Offering[] | undefined;
}

/**
 * @public
 */
export interface ListReservationsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReservationsResponse {
  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListReservations request a second time and specify the NextToken value.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of all reservations that have been purchased by this account in the current AWS Region.
   * @public
   */
  Reservations?: Reservation[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A request to purchase a offering.
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   * @public
   */
  OfferingArn: string | undefined;

  /**
   * The name that you want to use for the reservation.
   * @public
   */
  ReservationName: string | undefined;

  /**
   * The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.
   * @public
   */
  Start: string | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   * @public
   */
  Reservation?: Reservation | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the bridge output that you want to remove.
   * @public
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputResponse {
  BridgeArn?: string | undefined;
  OutputName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * The name of the bridge source that you want to remove.
   * @public
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceResponse {
  BridgeArn?: string | undefined;
  SourceName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the media stream that you want to remove.
   * @public
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The name of the media stream that was removed.
   * @public
   */
  MediaStreamName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputRequest {
  /**
   * The flow that you want to remove an output from.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the output that you want to remove.
   * @public
   */
  OutputArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputResponse {
  /**
   * The ARN of the flow that is associated with the output you removed.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN of the output that was removed.
   * @public
   */
  OutputArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceRequest {
  /**
   * The flow that you want to remove a source from.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the source that you want to remove.
   * @public
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceResponse {
  /**
   * The ARN of the flow that is associated with the source you removed.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The ARN of the source that was removed.
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceRequest {
  /**
   * The flow that you want to remove a VPC interface from.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface that you want to remove.
   * @public
   */
  VpcInterfaceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceResponse {
  /**
   * The ARN of the flow that is associated with the VPC interface you removed.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * IDs of network interfaces associated with the removed VPC interface that Media Connect was unable to remove.
   * @public
   */
  NonDeletedNetworkInterfaceIds?: string[] | undefined;

  /**
   * The name of the VPC interface that was removed.
   * @public
   */
  VpcInterfaceName?: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementRequest {
  /**
   * The ARN of the entitlement that you want to revoke.
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * The flow that you want to revoke an entitlement from.
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementResponse {
  /**
   * The ARN of the entitlement that was revoked.
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The ARN of the flow that the entitlement was revoked from.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * @public
 */
export interface StartFlowRequest {
  /**
   * The ARN of the flow that you want to start.
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * The ARN of the flow that you started.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The status of the flow when the StartFlow process begins.
   * @public
   */
  Status?: Status | undefined;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * The ARN of the flow that you want to stop.
   * @public
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * The ARN of the flow that you stopped.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The status of the flow when the StopFlow process begins.
   * @public
   */
  Status?: Status | undefined;
}

/**
 * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEgressGatewayBridgeRequest {
  /**
   * Update an existing egress-type bridge.
   * @public
   */
  MaxBitrate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateIngressGatewayBridgeRequest {
  /**
   * The maximum expected bitrate (in bps).
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum number of expected outputs.
   * @public
   */
  MaxOutputs?: number | undefined;
}

/**
 * The settings for source failover.
 * @public
 */
export interface UpdateFailoverConfig {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   * @public
   */
  FailoverMode?: FailoverMode | undefined;

  /**
   * Recovery window time to look for dash-7 packets
   * @public
   */
  RecoveryWindow?: number | undefined;

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   * @public
   */
  SourcePriority?: SourcePriority | undefined;

  State?: State | undefined;
}

/**
 * A request to update the bridge.
 * @public
 */
export interface UpdateBridgeRequest {
  /**
   * The Amazon Resource Number (ARN) of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest | undefined;
  IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest | undefined;
  /**
   * The settings for source failover.
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeResponse {
  /**
   * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
   * @public
   */
  Bridge?: Bridge | undefined;
}

/**
 * Update an existing network output.
 * @public
 */
export interface UpdateBridgeNetworkOutputRequest {
  /**
   * The network output IP Address.
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The network output's gateway network name.
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * The network output port.
   * @public
   */
  Port?: number | undefined;

  /**
   * The network output protocol.
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The network output TTL.
   * @public
   */
  Ttl?: number | undefined;
}

/**
 * The fields that you want to update in the bridge output.
 * @public
 */
export interface UpdateBridgeOutputRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * Update an existing network output.
   * @public
   */
  NetworkOutput?: UpdateBridgeNetworkOutputRequest | undefined;

  /**
   * The name of the bridge output that you want to update.
   * @public
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeOutputResponse {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The output that you updated.
   * @public
   */
  Output?: BridgeOutput | undefined;
}

/**
 * Update the flow source of the bridge.
 * @public
 */
export interface UpdateBridgeFlowSourceRequest {
  /**
   * The ARN of the cloud flow to use as a source of this bridge.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this source.
   * @public
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * Update the network source of the bridge.
 * @public
 */
export interface UpdateBridgeNetworkSourceRequest {
  /**
   * The network source multicast IP.
   * @public
   */
  MulticastIp?: string | undefined;

  /**
   * The network source's gateway network name.
   * @public
   */
  NetworkName?: string | undefined;

  /**
   * The network source port.
   * @public
   */
  Port?: number | undefined;

  /**
   * The network source protocol.
   * @public
   */
  Protocol?: Protocol | undefined;
}

/**
 * The fields that you want to update in the bridge source.
 * @public
 */
export interface UpdateBridgeSourceRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  /**
   * Update the flow source of the bridge.
   * @public
   */
  FlowSource?: UpdateBridgeFlowSourceRequest | undefined;

  /**
   * Update the network source of the bridge.
   * @public
   */
  NetworkSource?: UpdateBridgeNetworkSourceRequest | undefined;

  /**
   * The name of the source that you want to update.
   * @public
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeSourceResponse {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The bridge's source.
   * @public
   */
  Source?: BridgeSource | undefined;
}

/**
 * A request to update the bridge state.
 * @public
 */
export interface UpdateBridgeStateRequest {
  /**
   * The ARN of the bridge that you want to update.
   * @public
   */
  BridgeArn: string | undefined;

  DesiredState: DesiredState | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeStateResponse {
  /**
   * The Amazon Resource Number (ARN) of the bridge.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The state of the bridge. ACTIVE or STANDBY.
   * @public
   */
  DesiredState?: DesiredState | undefined;
}

/**
 * Update maintenance setting for a flow
 * @public
 */
export interface UpdateMaintenance {
  /**
   * A day of a week when the maintenance will happen. use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   * @public
   */
  MaintenanceDay?: MaintenanceDay | undefined;

  /**
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   * @public
   */
  MaintenanceScheduledDate?: string | undefined;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   * @public
   */
  MaintenanceStartHour?: string | undefined;
}

/**
 * A request to update flow.
 * @public
 */
export interface UpdateFlowRequest {
  /**
   * The flow that you want to update.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The settings for source failover.
   * @public
   */
  SourceFailoverConfig?: UpdateFailoverConfig | undefined;

  /**
   * Update maintenance setting for a flow
   * @public
   */
  Maintenance?: UpdateMaintenance | undefined;

  /**
   * The settings for source monitoring.
   * @public
   */
  SourceMonitoringConfig?: MonitoringConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   * @public
   */
  Flow?: Flow | undefined;
}

/**
 * Information about the encryption of the flow.
 * @public
 */
export interface UpdateEncryption {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  DeviceId?: string | undefined;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  Region?: string | undefined;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   * @public
   */
  Url?: string | undefined;
}

/**
 * The entitlement fields that you want to update.
 * @public
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of encryption that will be used on the output associated with this entitlement. Allowable encryption types: static-key, speke.
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * The ARN of the entitlement that you want to update.
   * @public
   */
  EntitlementArn: string | undefined;

  /**
   * An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.
   * @public
   */
  EntitlementStatus?: EntitlementStatus | undefined;

  /**
   * The flow that is associated with the entitlement that you want to update.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   * @public
   */
  Subscribers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFlowEntitlementResponse {
  /**
   * The new configuration of the entitlement that you updated.
   * @public
   */
  Entitlement?: Entitlement | undefined;

  /**
   * The ARN of the flow that this entitlement was granted on.
   * @public
   */
  FlowArn?: string | undefined;
}

/**
 * The fields that you want to update in the media stream.
 * @public
 */
export interface UpdateFlowMediaStreamRequest {
  /**
   * The attributes that you want to assign to the media stream.
   * @public
   */
  Attributes?: MediaStreamAttributesRequest | undefined;

  /**
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   * @public
   */
  ClockRate?: number | undefined;

  /**
   * Description
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The name of the media stream that you want to update.
   * @public
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   * @public
   */
  MediaStreamType?: MediaStreamType | undefined;

  /**
   * The resolution of the video.
   * @public
   */
  VideoFormat?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamResponse {
  /**
   * The ARN of the flow that is associated with the media stream that you updated.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The media stream that you updated.
   * @public
   */
  MediaStream?: MediaStream | undefined;
}

/**
 * The fields that you want to update in the output.
 * @public
 */
export interface UpdateFlowOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  CidrAllowList?: string[] | undefined;

  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP address where you want to send the output.
   * @public
   */
  Destination?: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.
   * @public
   */
  Encryption?: UpdateEncryption | undefined;

  /**
   * The flow that is associated with the output that you want to update.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The media streams that are associated with the output, and the parameters for those associations.
   * @public
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The ARN of the output that you want to update.
   * @public
   */
  OutputArn: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   * @public
   */
  Port?: number | undefined;

  /**
   * The protocol to use for the output.
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The remote ID for the Zixi-pull stream.
   * @public
   */
  RemoteId?: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   * @public
   */
  SmoothingLatency?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this output.
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;

  /**
   * An indication of whether the output should transmit data or not. If you don't specify the outputStatus field in your request, MediaConnect leaves the value unchanged.
   * @public
   */
  OutputStatus?: OutputStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFlowOutputResponse {
  /**
   * The ARN of the flow that is associated with the updated output.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The new settings of the output that you updated.
   * @public
   */
  Output?: Output | undefined;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 * @public
 */
export interface UpdateGatewayBridgeSourceRequest {
  /**
   * The ARN of the bridge feeding this flow.
   * @public
   */
  BridgeArn?: string | undefined;

  /**
   * The name of the VPC interface attachment to use for this bridge source.
   * @public
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
}

/**
 * A request to update the source of a flow.
 * @public
 */
export interface UpdateFlowSourceRequest {
  /**
   * The type of encryption used on the content ingested from this source. Allowable encryption types: static-key.
   * @public
   */
  Decryption?: UpdateEncryption | undefined;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   * @public
   */
  EntitlementArn?: string | undefined;

  /**
   * The flow that is associated with the source that you want to update.
   * @public
   */
  FlowArn: string | undefined;

  /**
   * The port that the flow will be listening on for incoming content.
   * @public
   */
  IngestPort?: number | undefined;

  /**
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   * @public
   */
  MaxBitrate?: number | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   * @public
   */
  MaxLatency?: number | undefined;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   * @public
   */
  MaxSyncBuffer?: number | undefined;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   * @public
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[] | undefined;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   * @public
   */
  MinLatency?: number | undefined;

  /**
   * The protocol that is used by the source.
   * @public
   */
  Protocol?: Protocol | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   * @public
   */
  SenderControlPort?: number | undefined;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   * @public
   */
  SenderIpAddress?: string | undefined;

  /**
   * The ARN of the source that you want to update.
   * @public
   */
  SourceArn: string | undefined;

  /**
   * Source IP or domain name for SRT-caller protocol.
   * @public
   */
  SourceListenerAddress?: string | undefined;

  /**
   * Source port for SRT-caller protocol.
   * @public
   */
  SourceListenerPort?: number | undefined;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   * @public
   */
  StreamId?: string | undefined;

  /**
   * The name of the VPC interface to use for this source.
   * @public
   */
  VpcInterfaceName?: string | undefined;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   * @public
   */
  WhitelistCidr?: string | undefined;

  /**
   * The source configuration for cloud flows receiving a stream from a bridge.
   * @public
   */
  GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest | undefined;
}

/**
 * @public
 */
export interface UpdateFlowSourceResponse {
  /**
   * The ARN of the flow that you want to update.
   * @public
   */
  FlowArn?: string | undefined;

  /**
   * The settings for the source of the flow.
   * @public
   */
  Source?: Source | undefined;
}

/**
 * A request to update gateway instance state.
 * @public
 */
export interface UpdateGatewayInstanceRequest {
  /**
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance that you want to update.
   * @public
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceResponse {
  /**
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.
   * @public
   */
  BridgePlacement?: BridgePlacement | undefined;

  /**
   * The Amazon Resource Name (ARN) of the instance.
   * @public
   */
  GatewayInstanceArn?: string | undefined;
}
