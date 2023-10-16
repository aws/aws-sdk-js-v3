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
 * @public
 * Add a network output to an existing bridge.
 */
export interface AddBridgeNetworkOutputRequest {
  /**
   * @public
   * The network output IP Address.
   */
  IpAddress: string | undefined;

  /**
   * @public
   * The network output name. This name is used to reference the output and must be unique among outputs in this bridge.
   */
  Name: string | undefined;

  /**
   * @public
   * The network output's gateway network name.
   */
  NetworkName: string | undefined;

  /**
   * @public
   * The network output port.
   */
  Port: number | undefined;

  /**
   * @public
   * The network output protocol.
   */
  Protocol: Protocol | undefined;

  /**
   * @public
   * The network output TTL.
   */
  Ttl: number | undefined;
}

/**
 * @public
 * Add an output to a bridge.
 */
export interface AddBridgeOutputRequest {
  /**
   * @public
   * Add a network output to an existing bridge.
   */
  NetworkOutput?: AddBridgeNetworkOutputRequest;
}

/**
 * @public
 * The settings for attaching a VPC interface to an resource.
 */
export interface VpcInterfaceAttachment {
  /**
   * @public
   * The name of the VPC interface to use for this resource.
   */
  VpcInterfaceName?: string;
}

/**
 * @public
 * Add a flow source to an existing bridge.
 */
export interface AddBridgeFlowSourceRequest {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the cloud flow to use as a source of this bridge.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The name of the VPC interface attachment to use for this source.
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;

  /**
   * @public
   * The name of the flow source. This name is used to reference the source and must be unique among sources in this bridge.
   */
  Name: string | undefined;
}

/**
 * @public
 * Add a network source to an existing bridge.
 */
export interface AddBridgeNetworkSourceRequest {
  /**
   * @public
   * The network source multicast IP.
   */
  MulticastIp: string | undefined;

  /**
   * @public
   * The name of the network source. This name is used to reference the source and must be unique among sources in this bridge.
   */
  Name: string | undefined;

  /**
   * @public
   * The network source's gateway network name.
   */
  NetworkName: string | undefined;

  /**
   * @public
   * The network source port.
   */
  Port: number | undefined;

  /**
   * @public
   * The network source protocol.
   */
  Protocol: Protocol | undefined;
}

/**
 * @public
 * Add a source to an existing bridge.
 */
export interface AddBridgeSourceRequest {
  /**
   * @public
   * Add a flow source to an existing bridge.
   */
  FlowSource?: AddBridgeFlowSourceRequest;

  /**
   * @public
   * Add a network source to an existing bridge.
   */
  NetworkSource?: AddBridgeNetworkSourceRequest;
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
 * @public
 * The settings that you want to use to define the media stream.
 */
export interface FmtpRequest {
  /**
   * @public
   * The format of the audio channel.
   */
  ChannelOrder?: string;

  /**
   * @public
   * The format that is used for the representation of color.
   */
  Colorimetry?: Colorimetry;

  /**
   * @public
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.
   */
  ExactFramerate?: string;

  /**
   * @public
   * The pixel aspect ratio (PAR) of the video.
   */
  Par?: string;

  /**
   * @public
   * The encoding range of the video.
   */
  Range?: Range;

  /**
   * @public
   * The type of compression that was used to smooth the video’s appearance.
   */
  ScanMode?: ScanMode;

  /**
   * @public
   * The transfer characteristic system (TCS) that is used in the video.
   */
  Tcs?: Tcs;
}

/**
 * @public
 * Attributes that are related to the media stream.
 */
export interface MediaStreamAttributesRequest {
  /**
   * @public
   * The settings that you want to use to define the media stream.
   */
  Fmtp?: FmtpRequest;

  /**
   * @public
   * The audio language, in a format that is recognized by the receiver.
   */
  Lang?: string;
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
 * @public
 * The media stream that you want to add to the flow.
 */
export interface AddMediaStreamRequest {
  /**
   * @public
   * The attributes that you want to assign to the new media stream.
   */
  Attributes?: MediaStreamAttributesRequest;

  /**
   * @public
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   */
  ClockRate?: number;

  /**
   * @public
   * A description that can help you quickly identify what your media stream is used for.
   */
  Description?: string;

  /**
   * @public
   * A unique identifier for the media stream.
   */
  MediaStreamId: number | undefined;

  /**
   * @public
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string | undefined;

  /**
   * @public
   * The type of media stream.
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * @public
   * The resolution of the video.
   */
  VideoFormat?: string;
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
 * @public
 * Information about the encryption of the flow.
 */
export interface Encryption {
  /**
   * @public
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: Algorithm;

  /**
   * @public
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;

  /**
   * @public
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;

  /**
   * @public
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: KeyType;

  /**
   * @public
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;

  /**
   * @public
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;

  /**
   * @public
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn: string | undefined;

  /**
   * @public
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;

  /**
   * @public
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;
}

/**
 * @public
 * The VPC interface that you want to designate where the media stream is coming from or going to.
 */
export interface InterfaceRequest {
  /**
   * @public
   * The name of the VPC interface.
   */
  Name: string | undefined;
}

/**
 * @public
 * The transport parameters that you want to associate with an outbound media stream.
 */
export interface DestinationConfigurationRequest {
  /**
   * @public
   * The IP address where you want MediaConnect to send contents of the media stream.
   */
  DestinationIp: string | undefined;

  /**
   * @public
   * The port that you want MediaConnect to use when it distributes the media stream to the output.
   */
  DestinationPort: number | undefined;

  /**
   * @public
   * The VPC interface that you want to use for the media stream associated with the output.
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
 * @public
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 */
export interface EncodingParametersRequest {
  /**
   * @public
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   */
  CompressionFactor: number | undefined;

  /**
   * @public
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, if at least one source on the flow uses the CDI protocol.
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * @public
 * The media stream that you want to associate with the output, and the parameters for that association.
 */
export interface MediaStreamOutputConfigurationRequest {
  /**
   * @public
   * The transport parameters that you want to associate with the media stream.
   */
  DestinationConfigurations?: DestinationConfigurationRequest[];

  /**
   * @public
   * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | undefined;

  /**
   * @public
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   */
  EncodingParameters?: EncodingParametersRequest;

  /**
   * @public
   * The name of the media stream that is associated with the output.
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 * The output that you want to add to this flow.
 */
export interface AddOutputRequest {
  /**
   * @public
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * @public
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * @public
   * The IP address from which video will be sent to output destinations.
   */
  Destination?: string;

  /**
   * @public
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.
   */
  Encryption?: Encryption;

  /**
   * @public
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * @public
   * The media streams that are associated with the output, and the parameters for those associations.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[];

  /**
   * @public
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * @public
   * The name of the output. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * @public
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * @public
   * The protocol to use for the output.
   */
  Protocol: Protocol | undefined;

  /**
   * @public
   * The remote ID for the Zixi-pull output stream.
   */
  RemoteId?: string;

  /**
   * @public
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * @public
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * @public
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   */
  StreamId?: string;

  /**
   * @public
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * @public
 * The output of the bridge. A flow output is delivered to the AWS cloud.
 */
export interface BridgeFlowOutput {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the cloud flow.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The Amazon Resource Number (ARN) of the flow source.
   */
  FlowSourceArn: string | undefined;

  /**
   * @public
   * The name of the bridge's output.
   */
  Name: string | undefined;
}

/**
 * @public
 * The output of the bridge. A network output is delivered to your premises.
 */
export interface BridgeNetworkOutput {
  /**
   * @public
   * The network output IP Address.
   */
  IpAddress: string | undefined;

  /**
   * @public
   * The network output name.
   */
  Name: string | undefined;

  /**
   * @public
   * The network output's gateway network name.
   */
  NetworkName: string | undefined;

  /**
   * @public
   * The network output port.
   */
  Port: number | undefined;

  /**
   * @public
   * The network output protocol.
   */
  Protocol: Protocol | undefined;

  /**
   * @public
   * The network output TTL.
   */
  Ttl: number | undefined;
}

/**
 * @public
 * The output of the bridge.
 */
export interface BridgeOutput {
  /**
   * @public
   * The output of the bridge. A flow output is delivered to the AWS cloud.
   */
  FlowOutput?: BridgeFlowOutput;

  /**
   * @public
   * The output of the bridge. A network output is delivered to your premises.
   */
  NetworkOutput?: BridgeNetworkOutput;
}

/**
 * @public
 * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
 */
export interface BridgeFlowSource {
  /**
   * @public
   * The ARN of the cloud flow used as a source of this bridge.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The name of the VPC interface attachment to use for this source.
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;

  /**
   * @public
   * The name of the flow source.
   */
  Name: string | undefined;

  /**
   * @public
   * The Amazon Resource Number (ARN) of the output.
   */
  OutputArn?: string;
}

/**
 * @public
 * The source of the bridge. A network source originates at your premises.
 */
export interface BridgeNetworkSource {
  /**
   * @public
   * The network source multicast IP.
   */
  MulticastIp: string | undefined;

  /**
   * @public
   * The name of the network source.
   */
  Name: string | undefined;

  /**
   * @public
   * The network source's gateway network name.
   */
  NetworkName: string | undefined;

  /**
   * @public
   * The network source port.
   */
  Port: number | undefined;

  /**
   * @public
   * The network source protocol.
   */
  Protocol: Protocol | undefined;
}

/**
 * @public
 * The bridge's source.
 */
export interface BridgeSource {
  /**
   * @public
   * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
   */
  FlowSource?: BridgeFlowSource;

  /**
   * @public
   * The source of the bridge. A network source originates at your premises.
   */
  NetworkSource?: BridgeNetworkSource;
}

/**
 * @public
 * The VPC interface that is used for the media stream associated with the source or output.
 */
export interface Interface {
  /**
   * @public
   * The name of the VPC interface.
   */
  Name: string | undefined;
}

/**
 * @public
 * The transport parameters that are associated with an outbound media stream.
 */
export interface DestinationConfiguration {
  /**
   * @public
   * The IP address where contents of the media stream will be sent.
   */
  DestinationIp: string | undefined;

  /**
   * @public
   * The port to use when the content of the media stream is distributed to the output.
   */
  DestinationPort: number | undefined;

  /**
   * @public
   * The VPC interface that is used for the media stream associated with the output.
   */
  Interface: Interface | undefined;

  /**
   * @public
   * The IP address that the receiver requires in order to establish a connection with the flow. This value is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the CDI or ST 2110 JPEG XS protocol.
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
 * @public
 * The settings for a flow entitlement.
 */
export interface Entitlement {
  /**
   * @public
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * @public
   * A description of the entitlement.
   */
  Description?: string;

  /**
   * @public
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: Encryption;

  /**
   * @public
   * The ARN of the entitlement.
   */
  EntitlementArn: string | undefined;

  /**
   * @public
   * An indication of whether the entitlement is enabled.
   */
  EntitlementStatus?: EntitlementStatus;

  /**
   * @public
   * The name of the entitlement.
   */
  Name: string | undefined;

  /**
   * @public
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers: string[] | undefined;
}

/**
 * @public
 * The network settings for a gateway.
 */
export interface GatewayNetwork {
  /**
   * @public
   * A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrBlock: string | undefined;

  /**
   * @public
   * The name of the network. This name is used to reference the network and must be unique among networks in this gateway.
   */
  Name: string | undefined;
}

/**
 * @public
 * The entitlements that you want to grant on a flow.
 */
export interface GrantEntitlementRequest {
  /**
   * @public
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * @public
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * @public
   * The type of encryption that will be used on the output that is associated with this entitlement. Allowable encryption types: static-key, speke.
   */
  Encryption?: Encryption;

  /**
   * @public
   * An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
   */
  EntitlementStatus?: EntitlementStatus;

  /**
   * @public
   * The name of the entitlement. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * @public
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   */
  Subscribers: string[] | undefined;
}

/**
 * @public
 * The transport parameters that are associated with an incoming media stream.
 */
export interface InputConfiguration {
  /**
   * @public
   * The IP address that the flow listens on for incoming content for a media stream.
   */
  InputIp: string | undefined;

  /**
   * @public
   * The port that the flow listens on for an incoming media stream.
   */
  InputPort: number | undefined;

  /**
   * @public
   * The VPC interface where the media stream comes in from.
   */
  Interface: Interface | undefined;
}

/**
 * @public
 * The transport parameters that you want to associate with an incoming media stream.
 */
export interface InputConfigurationRequest {
  /**
   * @public
   * The port that you want the flow to listen on for an incoming media stream.
   */
  InputPort: number | undefined;

  /**
   * @public
   * The VPC interface that you want to use for the incoming media stream.
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
 * @public
 * Displays details of the selected bridge.
 */
export interface ListedBridge {
  /**
   * @public
   * The ARN of the bridge.
   */
  BridgeArn: string | undefined;

  BridgeState: BridgeState | undefined;
  /**
   * @public
   * The type of the bridge.
   */
  BridgeType: string | undefined;

  /**
   * @public
   * The name of the bridge.
   */
  Name: string | undefined;

  /**
   * @public
   * The ARN of the gateway associated with the bridge.
   */
  PlacementArn: string | undefined;
}

/**
 * @public
 * An entitlement that has been granted to you from other AWS accounts.
 */
export interface ListedEntitlement {
  /**
   * @public
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * @public
   * The ARN of the entitlement.
   */
  EntitlementArn: string | undefined;

  /**
   * @public
   * The name of the entitlement.
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
 * @public
 * The maintenance setting of a flow
 */
export interface Maintenance {
  /**
   * @public
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * @public
   * The Maintenance has to be performed before this deadline in ISO UTC format. Example: 2021-01-30T08:30:00Z.
   */
  MaintenanceDeadline?: string;

  /**
   * @public
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   */
  MaintenanceScheduledDate?: string;

  /**
   * @public
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour?: string;
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
 * @public
 * Provides a summary of a flow, including its ARN, Availability Zone, and source type.
 */
export interface ListedFlow {
  /**
   * @public
   * The Availability Zone that the flow was created in.
   */
  AvailabilityZone: string | undefined;

  /**
   * @public
   * A description of the flow.
   */
  Description: string | undefined;

  /**
   * @public
   * The ARN of the flow.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * @public
   * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
   */
  SourceType: SourceType | undefined;

  /**
   * @public
   * The current status of the flow.
   */
  Status: Status | undefined;

  /**
   * @public
   * The maintenance setting of a flow
   */
  Maintenance?: Maintenance;
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
 * @public
 * Provides a summary of a gateway, including its name, ARN, and status.
 */
export interface ListedGateway {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway.
   */
  GatewayArn: string | undefined;

  GatewayState: GatewayState | undefined;
  /**
   * @public
   * The name of the gateway.
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
 * @public
 * Provides a summary of an instance.
 */
export interface ListedGatewayInstance {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway.
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the instance.
   */
  GatewayInstanceArn: string | undefined;

  /**
   * @public
   * The managed instance ID generated by the SSM install. This will begin with "mi-".
   */
  InstanceId: string | undefined;

  /**
   * @public
   * The status of the instance.
   */
  InstanceState?: InstanceState;
}

/**
 * @public
 * FMTP
 */
export interface Fmtp {
  /**
   * @public
   * The format of the audio channel.
   */
  ChannelOrder?: string;

  /**
   * @public
   * The format that is used for the representation of color.
   */
  Colorimetry?: Colorimetry;

  /**
   * @public
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.
   */
  ExactFramerate?: string;

  /**
   * @public
   * The pixel aspect ratio (PAR) of the video.
   */
  Par?: string;

  /**
   * @public
   * The encoding range of the video.
   */
  Range?: Range;

  /**
   * @public
   * The type of compression that was used to smooth the video’s appearance
   */
  ScanMode?: ScanMode;

  /**
   * @public
   * The transfer characteristic system (TCS) that is used in the video.
   */
  Tcs?: Tcs;
}

/**
 * @public
 * Attributes that are related to the media stream.
 */
export interface MediaStreamAttributes {
  /**
   * @public
   * A set of parameters that define the media stream.
   */
  Fmtp: Fmtp | undefined;

  /**
   * @public
   * The audio language, in a format that is recognized by the receiver.
   */
  Lang?: string;
}

/**
 * @public
 * A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.
 */
export interface MediaStream {
  /**
   * @public
   * Attributes that are related to the media stream.
   */
  Attributes?: MediaStreamAttributes;

  /**
   * @public
   * The sample rate for the stream. This value is measured in Hz.
   */
  ClockRate?: number;

  /**
   * @public
   * A description that can help you quickly identify what your media stream is used for.
   */
  Description?: string;

  /**
   * @public
   * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
   */
  Fmt: number | undefined;

  /**
   * @public
   * A unique identifier for the media stream.
   */
  MediaStreamId: number | undefined;

  /**
   * @public
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string | undefined;

  /**
   * @public
   * The type of media stream.
   */
  MediaStreamType: MediaStreamType | undefined;

  /**
   * @public
   * The resolution of the video.
   */
  VideoFormat?: string;
}

/**
 * @public
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 */
export interface EncodingParameters {
  /**
   * @public
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   */
  CompressionFactor: number | undefined;

  /**
   * @public
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
   */
  EncoderProfile: EncoderProfile | undefined;
}

/**
 * @public
 * The media stream that is associated with the output, and the parameters for that association.
 */
export interface MediaStreamOutputConfiguration {
  /**
   * @public
   * The transport parameters that are associated with each outbound media stream.
   */
  DestinationConfigurations?: DestinationConfiguration[];

  /**
   * @public
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | undefined;

  /**
   * @public
   * Encoding parameters
   */
  EncodingParameters?: EncodingParameters;

  /**
   * @public
   * The name of the media stream.
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 * The media stream that is associated with the source, and the parameters for that association.
 */
export interface MediaStreamSourceConfiguration {
  /**
   * @public
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | undefined;

  /**
   * @public
   * The transport parameters that are associated with an incoming media stream.
   */
  InputConfigurations?: InputConfiguration[];

  /**
   * @public
   * The name of the media stream.
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 * The definition of a media stream that you want to associate with the source.
 */
export interface MediaStreamSourceConfigurationRequest {
  /**
   * @public
   * The format you want to use to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | undefined;

  /**
   * @public
   * The transport parameters that you want to associate with the media stream.
   */
  InputConfigurations?: InputConfigurationRequest[];

  /**
   * @public
   * The name of the media stream.
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface MessageDetail {
  /**
   * @public
   * The error code.
   */
  Code: string | undefined;

  /**
   * @public
   * The specific error message that MediaConnect returns to help you understand the reason that the request did not succeed.
   */
  Message: string | undefined;

  /**
   * @public
   * The name of the resource.
   */
  ResourceName?: string;
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
 * @public
 * A definition of what is being billed for, including the type and amount.
 */
export interface ResourceSpecification {
  /**
   * @public
   * The amount of outbound bandwidth that is discounted in the offering.
   */
  ReservedBitrate?: number;

  /**
   * @public
   * The type of resource and the unit that is being billed for.
   */
  ResourceType: ResourceType | undefined;
}

/**
 * @public
 * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
 */
export interface Offering {
  /**
   * @public
   * The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.
   */
  CurrencyCode: string | undefined;

  /**
   * @public
   * The length of time that your reservation would be active.
   */
  Duration: number | undefined;

  /**
   * @public
   * The unit of measurement for the duration of the offering.
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   */
  OfferingArn: string | undefined;

  /**
   * @public
   * A description of the offering.
   */
  OfferingDescription: string | undefined;

  /**
   * @public
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate.
   */
  PricePerUnit: string | undefined;

  /**
   * @public
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate.
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * @public
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.
   */
  ResourceSpecification: ResourceSpecification | undefined;
}

/**
 * @public
 * Attributes related to the transport stream that are used in a source or output.
 */
export interface Transport {
  /**
   * @public
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * @public
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * @public
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * @public
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;

  /**
   * @public
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * @public
   * The protocol that is used by the source or output.
   */
  Protocol: Protocol | undefined;

  /**
   * @public
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * @public
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * @public
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * @public
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * @public
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;

  /**
   * @public
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;

  /**
   * @public
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   */
  StreamId?: string;
}

/**
 * @public
 * The settings for an output.
 */
export interface Output {
  /**
   * @public
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * @public
   * A description of the output.
   */
  Description?: string;

  /**
   * @public
   * The address where you want to send the output.
   */
  Destination?: string;

  /**
   * @public
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;

  /**
   * @public
   * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
   */
  EntitlementArn?: string;

  /**
   * @public
   * The IP address that the receiver requires in order to establish a connection with the flow. For public networking, the ListenerAddress is represented by the elastic IP address of the flow. For private networking, the ListenerAddress is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the Zixi pull or SRT listener protocol.
   */
  ListenerAddress?: string;

  /**
   * @public
   * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
   */
  MediaLiveInputArn?: string;

  /**
   * @public
   * The configuration for each media stream that is associated with the output.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[];

  /**
   * @public
   * The name of the output. This value must be unique within the current flow.
   */
  Name: string | undefined;

  /**
   * @public
   * The ARN of the output.
   */
  OutputArn: string | undefined;

  /**
   * @public
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * @public
   * Attributes related to the transport stream that are used in the output.
   */
  Transport?: Transport;

  /**
   * @public
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;

  /**
   * @public
   * The ARN of the bridge that added this output.
   */
  BridgeArn?: string;

  /**
   * @public
   * The bridge output ports currently in use.
   */
  BridgePorts?: number[];
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
 * @public
 * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
 */
export interface Reservation {
  /**
   * @public
   * The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.
   */
  CurrencyCode: string | undefined;

  /**
   * @public
   * The length of time that this reservation is active. MediaConnect defines this value in the offering.
   */
  Duration: number | undefined;

  /**
   * @public
   * The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering.
   */
  DurationUnits: DurationUnits | undefined;

  /**
   * @public
   * The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.
   */
  End: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   */
  OfferingArn: string | undefined;

  /**
   * @public
   * A description of the offering. MediaConnect defines this value in the offering.
   */
  OfferingDescription: string | undefined;

  /**
   * @public
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.
   */
  PricePerUnit: string | undefined;

  /**
   * @public
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering.
   */
  PriceUnits: PriceUnits | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.
   */
  ReservationArn: string | undefined;

  /**
   * @public
   * The name that you assigned to the reservation when you purchased the offering.
   */
  ReservationName: string | undefined;

  /**
   * @public
   * The status of your reservation.
   */
  ReservationState: ReservationState | undefined;

  /**
   * @public
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.
   */
  ResourceSpecification: ResourceSpecification | undefined;

  /**
   * @public
   * The day and time that the reservation becomes active. You set this value when you purchase the offering.
   */
  Start: string | undefined;
}

/**
 * @public
 * The source configuration for cloud flows receiving a stream from a bridge.
 */
export interface SetGatewayBridgeSourceRequest {
  /**
   * @public
   * The ARN of the bridge feeding this flow.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * The name of the VPC interface attachment to use for this bridge source.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * @public
 * The settings for the source of the flow.
 */
export interface SetSourceRequest {
  /**
   * @public
   * The type of encryption that is used on the content ingested from this source. Allowable encryption types: static-key.
   */
  Decryption?: Encryption;

  /**
   * @public
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * @public
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * @public
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * @public
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * @public
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * @public
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;

  /**
   * @public
   * The media streams that are associated with the source, and the parameters for those associations.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[];

  /**
   * @public
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * @public
   * The name of the source.
   */
  Name?: string;

  /**
   * @public
   * The protocol that is used by the source.
   */
  Protocol?: Protocol;

  /**
   * @public
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * @public
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * @public
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;

  /**
   * @public
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;

  /**
   * @public
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   */
  StreamId?: string;

  /**
   * @public
   * The name of the VPC interface to use for this source.
   */
  VpcInterfaceName?: string;

  /**
   * @public
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * @public
   * The source configuration for cloud flows receiving a stream from a bridge.
   */
  GatewayBridgeSource?: SetGatewayBridgeSourceRequest;
}

/**
 * @public
 * The source configuration for cloud flows receiving a stream from a bridge.
 */
export interface GatewayBridgeSource {
  /**
   * @public
   * The ARN of the bridge feeding this flow.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * The name of the VPC interface attachment to use for this bridge source.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * @public
 * The settings for the source of the flow.
 */
export interface Source {
  /**
   * @public
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * @public
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;

  /**
   * @public
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * @public
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * @public
   * The IP address that the flow will be listening on for incoming content.
   */
  IngestIp?: string;

  /**
   * @public
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * @public
   * The media streams that are associated with the source, and the parameters for those associations.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[];

  /**
   * @public
   * The name of the source.
   */
  Name: string | undefined;

  /**
   * @public
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * @public
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * @public
   * The ARN of the source.
   */
  SourceArn: string | undefined;

  /**
   * @public
   * Attributes related to the transport stream that are used in the source.
   */
  Transport?: Transport;

  /**
   * @public
   * The name of the VPC interface that is used for this source.
   */
  VpcInterfaceName?: string;

  /**
   * @public
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * @public
   * The source configuration for cloud flows receiving a stream from a bridge.
   */
  GatewayBridgeSource?: GatewayBridgeSource;
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
 * @public
 * The settings for a VPC Source.
 */
export interface VpcInterface {
  /**
   * @public
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   */
  Name: string | undefined;

  /**
   * @public
   * IDs of the network interfaces created in customer's account by MediaConnect.
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * @public
   * The type of network interface.
   */
  NetworkInterfaceType: NetworkInterfaceType | undefined;

  /**
   * @public
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   */
  RoleArn: string | undefined;

  /**
   * @public
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string | undefined;
}

/**
 * @public
 * Desired VPC Interface for a Flow
 */
export interface VpcInterfaceRequest {
  /**
   * @public
   * The name of the VPC Interface. This value must be unique within the current flow.
   */
  Name: string | undefined;

  /**
   * @public
   * The type of network interface. If this value is not included in the request, MediaConnect uses ENA as the networkInterfaceType.
   */
  NetworkInterfaceType?: NetworkInterfaceType;

  /**
   * @public
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   */
  RoleArn: string | undefined;

  /**
   * @public
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string | undefined;
}

/**
 * @public
 * A request to add outputs to the specified bridge.
 */
export interface AddBridgeOutputsRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * The outputs that you want to add to this bridge.
   */
  Outputs: AddBridgeOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeOutputsResponse {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn?: string;

  /**
   * @public
   * The outputs that you added to this bridge.
   */
  Outputs?: BridgeOutput[];
}

/**
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * A request to add sources to the specified bridge.
 */
export interface AddBridgeSourcesRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * The sources that you want to add to this bridge.
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddBridgeSourcesResponse {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn?: string;

  /**
   * @public
   * The sources that you added to this bridge.
   */
  Sources?: BridgeSource[];
}

/**
 * @public
 */
export interface AddEgressGatewayBridgeRequest {
  /**
   * @public
   * The maximum expected bitrate (in bps).
   */
  MaxBitrate: number | undefined;
}

/**
 * @public
 * A request to add media streams to the flow.
 */
export interface AddFlowMediaStreamsRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The media streams that you want to add to the flow.
   */
  MediaStreams: AddMediaStreamRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowMediaStreamsResponse {
  /**
   * @public
   * The ARN of the flow that you added media streams to.
   */
  FlowArn?: string;

  /**
   * @public
   * The media streams that you added to the flow.
   */
  MediaStreams?: MediaStream[];
}

/**
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class AddFlowOutputs420Exception extends __BaseException {
  readonly name: "AddFlowOutputs420Exception" = "AddFlowOutputs420Exception";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * A request to add outputs to the specified flow.
 */
export interface AddFlowOutputsRequest {
  /**
   * @public
   * The flow that you want to add outputs to.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * A list of outputs that you want to add.
   */
  Outputs: AddOutputRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowOutputsResponse {
  /**
   * @public
   * The ARN of the flow that these outputs were added to.
   */
  FlowArn?: string;

  /**
   * @public
   * The details of the newly added outputs.
   */
  Outputs?: Output[];
}

/**
 * @public
 * A request to add sources to the flow.
 */
export interface AddFlowSourcesRequest {
  /**
   * @public
   * The flow that you want to mutate.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * A list of sources that you want to add.
   */
  Sources: SetSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowSourcesResponse {
  /**
   * @public
   * The ARN of the flow that these sources were added to.
   */
  FlowArn?: string;

  /**
   * @public
   * The details of the newly added sources.
   */
  Sources?: Source[];
}

/**
 * @public
 * A request to add VPC interfaces to the flow.
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * @public
   * The flow that you want to mutate.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * A list of VPC interfaces that you want to add.
   */
  VpcInterfaces: VpcInterfaceRequest[] | undefined;
}

/**
 * @public
 */
export interface AddFlowVpcInterfacesResponse {
  /**
   * @public
   * The ARN of the flow that these VPC interfaces were added to.
   */
  FlowArn?: string;

  /**
   * @public
   * The details of the newly added VPC interfaces.
   */
  VpcInterfaces?: VpcInterface[];
}

/**
 * @public
 */
export interface AddIngressGatewayBridgeRequest {
  /**
   * @public
   * The maximum expected bitrate (in bps).
   */
  MaxBitrate: number | undefined;

  /**
   * @public
   * The maximum number of expected outputs.
   */
  MaxOutputs: number | undefined;
}

/**
 * @public
 * Create maintenance setting for a flow
 */
export interface AddMaintenance {
  /**
   * @public
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay: MaintenanceDay | undefined;

  /**
   * @public
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour: string | undefined;
}

/**
 * @public
 */
export interface EgressGatewayBridge {
  /**
   * @public
   * The ID of the instance running this bridge.
   */
  InstanceId?: string;

  /**
   * @public
   * The maximum expected bitrate (in bps) of the egress bridge.
   */
  MaxBitrate: number | undefined;
}

/**
 * @public
 */
export interface IngressGatewayBridge {
  /**
   * @public
   * The ID of the instance running this bridge.
   */
  InstanceId?: string;

  /**
   * @public
   * The maximum expected bitrate (in bps) of the ingress bridge.
   */
  MaxBitrate: number | undefined;

  /**
   * @public
   * The maximum number of outputs on the ingress bridge.
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
 * @public
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
 */
export interface SourcePriority {
  /**
   * @public
   * The name of the source you choose as the primary source for this flow.
   */
  PrimarySource?: string;
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
 * @public
 * The settings for source failover.
 */
export interface FailoverConfig {
  /**
   * @public
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   */
  FailoverMode?: FailoverMode;

  /**
   * @public
   * Search window time to look for dash-7 packets
   */
  RecoveryWindow?: number;

  /**
   * @public
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  SourcePriority?: SourcePriority;

  State?: State;
}

/**
 * @public
 * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
 */
export interface Bridge {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn: string | undefined;

  BridgeMessages?: MessageDetail[];
  BridgeState: BridgeState | undefined;
  EgressGatewayBridge?: EgressGatewayBridge;
  IngressGatewayBridge?: IngressGatewayBridge;
  /**
   * @public
   * The name of the bridge.
   */
  Name: string | undefined;

  /**
   * @public
   * The outputs on this bridge.
   */
  Outputs?: BridgeOutput[];

  /**
   * @public
   * The placement Amazon Resource Number (ARN) of the bridge.
   */
  PlacementArn: string | undefined;

  /**
   * @public
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;

  /**
   * @public
   * The sources on this bridge.
   */
  Sources?: BridgeSource[];
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
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class CreateBridge420Exception extends __BaseException {
  readonly name: "CreateBridge420Exception" = "CreateBridge420Exception";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Creates a new bridge. The request must include one source.
 */
export interface CreateBridgeRequest {
  /**
   * @public
   * Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
   */
  EgressGatewayBridge?: AddEgressGatewayBridgeRequest;

  /**
   * @public
   * Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
   */
  IngressGatewayBridge?: AddIngressGatewayBridgeRequest;

  /**
   * @public
   * The name of the bridge. This name can not be modified after the bridge is created.
   */
  Name: string | undefined;

  /**
   * @public
   * The outputs that you want to add to this bridge.
   */
  Outputs?: AddBridgeOutputRequest[];

  /**
   * @public
   * The bridge placement Amazon Resource Number (ARN).
   */
  PlacementArn: string | undefined;

  /**
   * @public
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;

  /**
   * @public
   * The sources that you want to add to this bridge.
   */
  Sources: AddBridgeSourceRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateBridgeResponse {
  /**
   * @public
   * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
   */
  Bridge?: Bridge;
}

/**
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class CreateFlow420Exception extends __BaseException {
  readonly name: "CreateFlow420Exception" = "CreateFlow420Exception";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 */
export interface CreateFlowRequest {
  /**
   * @public
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
   */
  AvailabilityZone?: string;

  /**
   * @public
   * The entitlements that you want to grant on a flow.
   */
  Entitlements?: GrantEntitlementRequest[];

  /**
   * @public
   * The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.
   */
  MediaStreams?: AddMediaStreamRequest[];

  /**
   * @public
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * @public
   * The outputs that you want to add to this flow.
   */
  Outputs?: AddOutputRequest[];

  /**
   * @public
   * The settings for the source of the flow.
   */
  Source?: SetSourceRequest;

  /**
   * @public
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;

  Sources?: SetSourceRequest[];
  /**
   * @public
   * The VPC interfaces you want on the flow.
   */
  VpcInterfaces?: VpcInterfaceRequest[];

  /**
   * @public
   * Create maintenance setting for a flow
   */
  Maintenance?: AddMaintenance;
}

/**
 * @public
 * The settings for a flow, including its source, outputs, and entitlements.
 */
export interface Flow {
  /**
   * @public
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
   */
  AvailabilityZone: string | undefined;

  /**
   * @public
   * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * @public
   * The IP address from which video will be sent to output destinations.
   */
  EgressIp?: string;

  /**
   * @public
   * The entitlements in this flow.
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.
   */
  MediaStreams?: MediaStream[];

  /**
   * @public
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * @public
   * The outputs in this flow.
   */
  Outputs: Output[] | undefined;

  /**
   * @public
   * The settings for the source of the flow.
   */
  Source: Source | undefined;

  /**
   * @public
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;

  Sources?: Source[];
  /**
   * @public
   * The current status of the flow.
   */
  Status: Status | undefined;

  /**
   * @public
   * The VPC Interfaces for this flow.
   */
  VpcInterfaces?: VpcInterface[];

  /**
   * @public
   * The maintenance setting of a flow
   */
  Maintenance?: Maintenance;
}

/**
 * @public
 */
export interface CreateFlowResponse {
  /**
   * @public
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

/**
 * @public
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class CreateGateway420Exception extends __BaseException {
  readonly name: "CreateGateway420Exception" = "CreateGateway420Exception";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * Creates a new gateway. The request must include at least one network (up to 4).
 */
export interface CreateGatewayRequest {
  /**
   * @public
   * The range of IP addresses that are allowed to contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * @public
   * The name of the gateway. This name can not be modified after the gateway is created.
   */
  Name: string | undefined;

  /**
   * @public
   * The list of networks that you want to add.
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * @public
 * The settings for a gateway, including its networks.
 */
export interface Gateway {
  /**
   * @public
   * The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  EgressCidrBlocks: string[] | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway.
   */
  GatewayArn: string | undefined;

  GatewayMessages?: MessageDetail[];
  /**
   * @public
   * The current status of the gateway.
   */
  GatewayState?: GatewayState;

  /**
   * @public
   * The name of the gateway. This name can not be modified after the gateway is created.
   */
  Name: string | undefined;

  /**
   * @public
   * The list of networks in the gateway.
   */
  Networks: GatewayNetwork[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * @public
   * The settings for a gateway, including its networks.
   */
  Gateway?: Gateway;
}

/**
 * @public
 */
export interface DeleteBridgeRequest {
  /**
   * @public
   * The ARN of the bridge that you want to delete.
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBridgeResponse {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the deleted bridge.
   */
  BridgeArn?: string;
}

/**
 * @public
 */
export interface DeleteFlowRequest {
  /**
   * @public
   * The ARN of the flow that you want to delete.
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowResponse {
  /**
   * @public
   * The ARN of the flow that was deleted.
   */
  FlowArn?: string;

  /**
   * @public
   * The status of the flow when the DeleteFlow process begins.
   */
  Status?: Status;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * @public
   * The ARN of the gateway that you want to delete.
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway that was deleted.
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceRequest {
  /**
   * @public
   * Force the deregistration of an instance. Force will deregister an instance, even if there are bridges running on it.
   */
  Force?: boolean;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway that contains the instance that you want to deregister.
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterGatewayInstanceResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the instance.
   */
  GatewayInstanceArn?: string;

  /**
   * @public
   * The status of the instance.
   */
  InstanceState?: InstanceState;
}

/**
 * @public
 */
export interface DescribeBridgeRequest {
  /**
   * @public
   * The ARN of the bridge that you want to describe.
   */
  BridgeArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeBridgeResponse {
  /**
   * @public
   * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
   */
  Bridge?: Bridge;
}

/**
 * @public
 */
export interface DescribeFlowRequest {
  /**
   * @public
   * The ARN of the flow that you want to describe.
   */
  FlowArn: string | undefined;
}

/**
 * @public
 * Messages that provide the state of the flow.
 */
export interface Messages {
  /**
   * @public
   * A list of errors that might have been generated from processes on this flow.
   */
  Errors: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowResponse {
  /**
   * @public
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;

  /**
   * @public
   * Messages that provide the state of the flow.
   */
  Messages?: Messages;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway that you want to describe.
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * @public
   * The settings for a gateway, including its networks.
   */
  Gateway?: Gateway;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway instance that you want to describe.
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 * The settings for an instance in a gateway.
 */
export interface GatewayInstance {
  /**
   * @public
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.
   */
  BridgePlacement: BridgePlacement | undefined;

  /**
   * @public
   * The connection state of the instance.
   */
  ConnectionStatus: ConnectionStatus | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the instance.
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the gateway.
   */
  GatewayInstanceArn: string | undefined;

  /**
   * @public
   * The managed instance ID generated by the SSM install. This will begin with "mi-".
   */
  InstanceId: string | undefined;

  InstanceMessages?: MessageDetail[];
  /**
   * @public
   * The status of the instance.
   */
  InstanceState: InstanceState | undefined;

  /**
   * @public
   * The running bridge count.
   */
  RunningBridgeCount: number | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayInstanceResponse {
  /**
   * @public
   * The settings for an instance in a gateway.
   */
  GatewayInstance?: GatewayInstance;
}

/**
 * @public
 */
export interface DescribeOfferingRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the offering.
   */
  OfferingArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOfferingResponse {
  /**
   * @public
   * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
   */
  Offering?: Offering;
}

/**
 * @public
 */
export interface DescribeReservationRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the reservation.
   */
  ReservationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservationResponse {
  /**
   * @public
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   */
  Reservation?: Reservation;
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class GrantFlowEntitlements420Exception extends __BaseException {
  readonly name: "GrantFlowEntitlements420Exception" = "GrantFlowEntitlements420Exception";
  readonly $fault: "client" = "client";
  /**
   * @public
   * The error message returned by AWS Elemental MediaConnect.
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
 * @public
 * A request to grant entitlements on a flow.
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * @public
   * The list of entitlements that you want to grant.
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * @public
   * The flow that you want to grant entitlements on.
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface GrantFlowEntitlementsResponse {
  /**
   * @public
   * The entitlements that were just granted.
   */
  Entitlements?: Entitlement[];

  /**
   * @public
   * The ARN of the flow that these entitlements were granted to.
   */
  FlowArn?: string;
}

/**
 * @public
 */
export interface ListBridgesRequest {
  /**
   * @public
   * Filter the list results to display only the bridges associated with the selected Amazon Resource Name (ARN).
   */
  FilterArn?: string;

  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListBridges request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBridgesResponse {
  /**
   * @public
   * A list of bridge summaries.
   */
  Bridges?: ListedBridge[];

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEntitlementsRequest {
  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEntitlementsResponse {
  /**
   * @public
   * A list of entitlements that have been granted to you from other AWS accounts.
   */
  Entitlements?: ListedEntitlement[];

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFlowsRequest {
  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFlowsResponse {
  /**
   * @public
   * A list of flow summaries.
   */
  Flows?: ListedFlow[];

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGatewayInstancesRequest {
  /**
   * @public
   * Filter the list results to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
   */
  FilterArn?: string;

  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListInstances request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGatewayInstancesResponse {
  /**
   * @public
   * A list of instance summaries.
   */
  Instances?: ListedGatewayInstance[];

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListInstances request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListInstances request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListGateways request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * @public
   * A list of gateway summaries.
   */
  Gateways?: ListedGateway[];

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   */
  NextToken?: string;

  /**
   * @public
   * A list of offerings that are available to this account in the current AWS Region.
   */
  Offerings?: Offering[];
}

/**
 * @public
 */
export interface ListReservationsRequest {
  /**
   * @public
   * The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReservationsResponse {
  /**
   * @public
   * The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListReservations request a second time and specify the NextToken value.
   */
  NextToken?: string;

  /**
   * @public
   * A list of all reservations that have been purchased by this account in the current AWS Region.
   */
  Reservations?: Reservation[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * A request to purchase a offering.
 */
export interface PurchaseOfferingRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the offering.
   */
  OfferingArn: string | undefined;

  /**
   * @public
   * The name that you want to use for the reservation.
   */
  ReservationName: string | undefined;

  /**
   * @public
   * The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.
   */
  Start: string | undefined;
}

/**
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * @public
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   */
  Reservation?: Reservation;
}

/**
 * @public
 */
export interface RemoveBridgeOutputRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * The name of the bridge output that you want to remove.
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeOutputResponse {
  BridgeArn?: string;
  OutputName?: string;
}

/**
 * @public
 */
export interface RemoveBridgeSourceRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * The name of the bridge source that you want to remove.
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveBridgeSourceResponse {
  BridgeArn?: string;
  SourceName?: string;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The name of the media stream that you want to remove.
   */
  MediaStreamName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowMediaStreamResponse {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn?: string;

  /**
   * @public
   * The name of the media stream that was removed.
   */
  MediaStreamName?: string;
}

/**
 * @public
 */
export interface RemoveFlowOutputRequest {
  /**
   * @public
   * The flow that you want to remove an output from.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The ARN of the output that you want to remove.
   */
  OutputArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowOutputResponse {
  /**
   * @public
   * The ARN of the flow that is associated with the output you removed.
   */
  FlowArn?: string;

  /**
   * @public
   * The ARN of the output that was removed.
   */
  OutputArn?: string;
}

/**
 * @public
 */
export interface RemoveFlowSourceRequest {
  /**
   * @public
   * The flow that you want to remove a source from.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The ARN of the source that you want to remove.
   */
  SourceArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowSourceResponse {
  /**
   * @public
   * The ARN of the flow that is associated with the source you removed.
   */
  FlowArn?: string;

  /**
   * @public
   * The ARN of the source that was removed.
   */
  SourceArn?: string;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceRequest {
  /**
   * @public
   * The flow that you want to remove a VPC interface from.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The name of the VPC interface that you want to remove.
   */
  VpcInterfaceName: string | undefined;
}

/**
 * @public
 */
export interface RemoveFlowVpcInterfaceResponse {
  /**
   * @public
   * The ARN of the flow that is associated with the VPC interface you removed.
   */
  FlowArn?: string;

  /**
   * @public
   * IDs of network interfaces associated with the removed VPC interface that Media Connect was unable to remove.
   */
  NonDeletedNetworkInterfaceIds?: string[];

  /**
   * @public
   * The name of the VPC interface that was removed.
   */
  VpcInterfaceName?: string;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementRequest {
  /**
   * @public
   * The ARN of the entitlement that you want to revoke.
   */
  EntitlementArn: string | undefined;

  /**
   * @public
   * The flow that you want to revoke an entitlement from.
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeFlowEntitlementResponse {
  /**
   * @public
   * The ARN of the entitlement that was revoked.
   */
  EntitlementArn?: string;

  /**
   * @public
   * The ARN of the flow that the entitlement was revoked from.
   */
  FlowArn?: string;
}

/**
 * @public
 */
export interface StartFlowRequest {
  /**
   * @public
   * The ARN of the flow that you want to start.
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StartFlowResponse {
  /**
   * @public
   * The ARN of the flow that you started.
   */
  FlowArn?: string;

  /**
   * @public
   * The status of the flow when the StartFlow process begins.
   */
  Status?: Status;
}

/**
 * @public
 */
export interface StopFlowRequest {
  /**
   * @public
   * The ARN of the flow that you want to stop.
   */
  FlowArn: string | undefined;
}

/**
 * @public
 */
export interface StopFlowResponse {
  /**
   * @public
   * The ARN of the flow that you stopped.
   */
  FlowArn?: string;

  /**
   * @public
   * The status of the flow when the StopFlow process begins.
   */
  Status?: Status;
}

/**
 * @public
 * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 */
export interface TagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * The keys of the tags to be removed.
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEgressGatewayBridgeRequest {
  /**
   * @public
   * Update an existing egress-type bridge.
   */
  MaxBitrate?: number;
}

/**
 * @public
 */
export interface UpdateIngressGatewayBridgeRequest {
  /**
   * @public
   * The maximum expected bitrate (in bps).
   */
  MaxBitrate?: number;

  /**
   * @public
   * The maximum number of expected outputs.
   */
  MaxOutputs?: number;
}

/**
 * @public
 * The settings for source failover.
 */
export interface UpdateFailoverConfig {
  /**
   * @public
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   */
  FailoverMode?: FailoverMode;

  /**
   * @public
   * Recovery window time to look for dash-7 packets
   */
  RecoveryWindow?: number;

  /**
   * @public
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  SourcePriority?: SourcePriority;

  State?: State;
}

/**
 * @public
 * A request to update the bridge.
 */
export interface UpdateBridgeRequest {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  EgressGatewayBridge?: UpdateEgressGatewayBridgeRequest;
  IngressGatewayBridge?: UpdateIngressGatewayBridgeRequest;
  /**
   * @public
   * The settings for source failover.
   */
  SourceFailoverConfig?: UpdateFailoverConfig;
}

/**
 * @public
 */
export interface UpdateBridgeResponse {
  /**
   * @public
   * A Bridge is the connection between your datacenter's Instances and the AWS cloud. A bridge can be used to send video from the AWS cloud to your datacenter or from your datacenter to the AWS cloud.
   */
  Bridge?: Bridge;
}

/**
 * @public
 * Update an existing network output.
 */
export interface UpdateBridgeNetworkOutputRequest {
  /**
   * @public
   * The network output IP Address.
   */
  IpAddress?: string;

  /**
   * @public
   * The network output's gateway network name.
   */
  NetworkName?: string;

  /**
   * @public
   * The network output port.
   */
  Port?: number;

  /**
   * @public
   * The network output protocol.
   */
  Protocol?: Protocol;

  /**
   * @public
   * The network output TTL.
   */
  Ttl?: number;
}

/**
 * @public
 * The fields that you want to update in the bridge output.
 */
export interface UpdateBridgeOutputRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * Update an existing network output.
   */
  NetworkOutput?: UpdateBridgeNetworkOutputRequest;

  /**
   * @public
   * The name of the bridge output that you want to update.
   */
  OutputName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeOutputResponse {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn?: string;

  /**
   * @public
   * The output that you updated.
   */
  Output?: BridgeOutput;
}

/**
 * @public
 * Update the flow source of the bridge.
 */
export interface UpdateBridgeFlowSourceRequest {
  /**
   * @public
   * The ARN of the cloud flow to use as a source of this bridge.
   */
  FlowArn?: string;

  /**
   * @public
   * The name of the VPC interface attachment to use for this source.
   */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * @public
 * Update the network source of the bridge.
 */
export interface UpdateBridgeNetworkSourceRequest {
  /**
   * @public
   * The network source multicast IP.
   */
  MulticastIp?: string;

  /**
   * @public
   * The network source's gateway network name.
   */
  NetworkName?: string;

  /**
   * @public
   * The network source port.
   */
  Port?: number;

  /**
   * @public
   * The network source protocol.
   */
  Protocol?: Protocol;
}

/**
 * @public
 * The fields that you want to update in the bridge source.
 */
export interface UpdateBridgeSourceRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  /**
   * @public
   * Update the flow source of the bridge.
   */
  FlowSource?: UpdateBridgeFlowSourceRequest;

  /**
   * @public
   * Update the network source of the bridge.
   */
  NetworkSource?: UpdateBridgeNetworkSourceRequest;

  /**
   * @public
   * The name of the source that you want to update.
   */
  SourceName: string | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeSourceResponse {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn?: string;

  /**
   * @public
   * The bridge's source.
   */
  Source?: BridgeSource;
}

/**
 * @public
 * A request to update the bridge state.
 */
export interface UpdateBridgeStateRequest {
  /**
   * @public
   * The ARN of the bridge that you want to update.
   */
  BridgeArn: string | undefined;

  DesiredState: DesiredState | undefined;
}

/**
 * @public
 */
export interface UpdateBridgeStateResponse {
  /**
   * @public
   * The Amazon Resource Number (ARN) of the bridge.
   */
  BridgeArn?: string;

  /**
   * @public
   * The state of the bridge. ACTIVE or STANDBY.
   */
  DesiredState?: DesiredState;
}

/**
 * @public
 * Update maintenance setting for a flow
 */
export interface UpdateMaintenance {
  /**
   * @public
   * A day of a week when the maintenance will happen. use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * @public
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   */
  MaintenanceScheduledDate?: string;

  /**
   * @public
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour?: string;
}

/**
 * @public
 * A request to update flow.
 */
export interface UpdateFlowRequest {
  /**
   * @public
   * The flow that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The settings for source failover.
   */
  SourceFailoverConfig?: UpdateFailoverConfig;

  /**
   * @public
   * Update maintenance setting for a flow
   */
  Maintenance?: UpdateMaintenance;
}

/**
 * @public
 */
export interface UpdateFlowResponse {
  /**
   * @public
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

/**
 * @public
 * Information about the encryption of the flow.
 */
export interface UpdateEncryption {
  /**
   * @public
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: Algorithm;

  /**
   * @public
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;

  /**
   * @public
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;

  /**
   * @public
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: KeyType;

  /**
   * @public
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;

  /**
   * @public
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;

  /**
   * @public
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn?: string;

  /**
   * @public
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;

  /**
   * @public
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;
}

/**
 * @public
 * The entitlement fields that you want to update.
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * @public
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * @public
   * The type of encryption that will be used on the output associated with this entitlement. Allowable encryption types: static-key, speke.
   */
  Encryption?: UpdateEncryption;

  /**
   * @public
   * The ARN of the entitlement that you want to update.
   */
  EntitlementArn: string | undefined;

  /**
   * @public
   * An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.
   */
  EntitlementStatus?: EntitlementStatus;

  /**
   * @public
   * The flow that is associated with the entitlement that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers?: string[];
}

/**
 * @public
 */
export interface UpdateFlowEntitlementResponse {
  /**
   * @public
   * The new configuration of the entitlement that you updated.
   */
  Entitlement?: Entitlement;

  /**
   * @public
   * The ARN of the flow that this entitlement was granted on.
   */
  FlowArn?: string;
}

/**
 * @public
 * The fields that you want to update in the media stream.
 */
export interface UpdateFlowMediaStreamRequest {
  /**
   * @public
   * The attributes that you want to assign to the media stream.
   */
  Attributes?: MediaStreamAttributesRequest;

  /**
   * @public
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   */
  ClockRate?: number;

  /**
   * @public
   * Description
   */
  Description?: string;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The name of the media stream that you want to update.
   */
  MediaStreamName: string | undefined;

  /**
   * @public
   * The type of media stream.
   */
  MediaStreamType?: MediaStreamType;

  /**
   * @public
   * The resolution of the video.
   */
  VideoFormat?: string;
}

/**
 * @public
 */
export interface UpdateFlowMediaStreamResponse {
  /**
   * @public
   * The ARN of the flow that is associated with the media stream that you updated.
   */
  FlowArn?: string;

  /**
   * @public
   * The media stream that you updated.
   */
  MediaStream?: MediaStream;
}

/**
 * @public
 * The fields that you want to update in the output.
 */
export interface UpdateFlowOutputRequest {
  /**
   * @public
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * @public
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * @public
   * The IP address where you want to send the output.
   */
  Destination?: string;

  /**
   * @public
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key). Allowable encryption types: static-key.
   */
  Encryption?: UpdateEncryption;

  /**
   * @public
   * The flow that is associated with the output that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * @public
   * The media streams that are associated with the output, and the parameters for those associations.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[];

  /**
   * @public
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * @public
   * The ARN of the output that you want to update.
   */
  OutputArn: string | undefined;

  /**
   * @public
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * @public
   * The protocol to use for the output.
   */
  Protocol?: Protocol;

  /**
   * @public
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * @public
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * @public
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * @public
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * @public
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   */
  StreamId?: string;

  /**
   * @public
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * @public
 */
export interface UpdateFlowOutputResponse {
  /**
   * @public
   * The ARN of the flow that is associated with the updated output.
   */
  FlowArn?: string;

  /**
   * @public
   * The new settings of the output that you updated.
   */
  Output?: Output;
}

/**
 * @public
 * The source configuration for cloud flows receiving a stream from a bridge.
 */
export interface UpdateGatewayBridgeSourceRequest {
  /**
   * @public
   * The ARN of the bridge feeding this flow.
   */
  BridgeArn?: string;

  /**
   * @public
   * The name of the VPC interface attachment to use for this bridge source.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * @public
 * A request to update the source of a flow.
 */
export interface UpdateFlowSourceRequest {
  /**
   * @public
   * The type of encryption used on the content ingested from this source. Allowable encryption types: static-key.
   */
  Decryption?: UpdateEncryption;

  /**
   * @public
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * @public
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * @public
   * The flow that is associated with the source that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * @public
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * @public
   * The smoothing max bitrate (in bps) for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * @public
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * @public
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;

  /**
   * @public
   * The media streams that are associated with the source, and the parameters for those associations.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[];

  /**
   * @public
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * @public
   * The protocol that is used by the source.
   */
  Protocol?: Protocol;

  /**
   * @public
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * @public
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * @public
   * The ARN of the source that you want to update.
   */
  SourceArn: string | undefined;

  /**
   * @public
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;

  /**
   * @public
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;

  /**
   * @public
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi and SRT caller-based streams.
   */
  StreamId?: string;

  /**
   * @public
   * The name of the VPC interface to use for this source.
   */
  VpcInterfaceName?: string;

  /**
   * @public
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * @public
   * The source configuration for cloud flows receiving a stream from a bridge.
   */
  GatewayBridgeSource?: UpdateGatewayBridgeSourceRequest;
}

/**
 * @public
 */
export interface UpdateFlowSourceResponse {
  /**
   * @public
   * The ARN of the flow that you want to update.
   */
  FlowArn?: string;

  /**
   * @public
   * The settings for the source of the flow.
   */
  Source?: Source;
}

/**
 * @public
 * A request to update gateway instance state.
 */
export interface UpdateGatewayInstanceRequest {
  /**
   * @public
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.
   */
  BridgePlacement?: BridgePlacement;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the instance that you want to update.
   */
  GatewayInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInstanceResponse {
  /**
   * @public
   * The availability of the instance to host new bridges. The bridgePlacement property can be LOCKED or AVAILABLE. If it is LOCKED, no new bridges can be deployed to this instance. If it is AVAILABLE, new bridges can be added to this instance.
   */
  BridgePlacement?: BridgePlacement;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the instance.
   */
  GatewayInstanceArn?: string;
}
