// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MediaConnectServiceException as __BaseException } from "./MediaConnectServiceException";

export enum Colorimetry {
  BT2020 = "BT2020",
  BT2100 = "BT2100",
  BT601 = "BT601",
  BT709 = "BT709",
  ST2065_1 = "ST2065-1",
  ST2065_3 = "ST2065-3",
  XYZ = "XYZ",
}

export enum Range {
  FULL = "FULL",
  FULLPROTECT = "FULLPROTECT",
  NARROW = "NARROW",
}

export enum ScanMode {
  interlace = "interlace",
  progressive = "progressive",
  progressive_segmented_frame = "progressive-segmented-frame",
}

export enum Tcs {
  BT2100LINHLG = "BT2100LINHLG",
  BT2100LINPQ = "BT2100LINPQ",
  DENSITY = "DENSITY",
  HLG = "HLG",
  LINEAR = "LINEAR",
  PQ = "PQ",
  SDR = "SDR",
  ST2065_1 = "ST2065-1",
  ST428_1 = "ST428-1",
}

/**
 * The settings that you want to use to define the media stream.
 */
export interface FmtpRequest {
  /**
   * The format of the audio channel.
   */
  ChannelOrder?: string;

  /**
   * The format that is used for the representation of color.
   */
  Colorimetry?: Colorimetry | string;

  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.
   */
  ExactFramerate?: string;

  /**
   * The pixel aspect ratio (PAR) of the video.
   */
  Par?: string;

  /**
   * The encoding range of the video.
   */
  Range?: Range | string;

  /**
   * The type of compression that was used to smooth the video’s appearance.
   */
  ScanMode?: ScanMode | string;

  /**
   * The transfer characteristic system (TCS) that is used in the video.
   */
  Tcs?: Tcs | string;
}

/**
 * Attributes that are related to the media stream.
 */
export interface MediaStreamAttributesRequest {
  /**
   * The settings that you want to use to define the media stream.
   */
  Fmtp?: FmtpRequest;

  /**
   * The audio language, in a format that is recognized by the receiver.
   */
  Lang?: string;
}

export enum MediaStreamType {
  ancillary_data = "ancillary-data",
  audio = "audio",
  video = "video",
}

/**
 * The media stream that you want to add to the flow.
 */
export interface AddMediaStreamRequest {
  /**
   * The attributes that you want to assign to the new media stream.
   */
  Attributes?: MediaStreamAttributesRequest;

  /**
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   */
  ClockRate?: number;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   */
  Description?: string;

  /**
   * A unique identifier for the media stream.
   */
  MediaStreamId: number | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   */
  MediaStreamType: MediaStreamType | string | undefined;

  /**
   * The resolution of the video.
   */
  VideoFormat?: string;
}

export enum Algorithm {
  aes128 = "aes128",
  aes192 = "aes192",
  aes256 = "aes256",
}

export enum KeyType {
  speke = "speke",
  srt_password = "srt-password",
  static_key = "static-key",
}

/**
 * Information about the encryption of the flow.
 */
export interface Encryption {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: Algorithm | string;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: KeyType | string;

  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;

  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn: string | undefined;

  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;
}

/**
 * The VPC interface that you want to designate where the media stream is coming from or going to.
 */
export interface InterfaceRequest {
  /**
   * The name of the VPC interface.
   */
  Name: string | undefined;
}

/**
 * The transport parameters that you want to associate with an outbound media stream.
 */
export interface DestinationConfigurationRequest {
  /**
   * The IP address where you want MediaConnect to send contents of the media stream.
   */
  DestinationIp: string | undefined;

  /**
   * The port that you want MediaConnect to use when it distributes the media stream to the output.
   */
  DestinationPort: number | undefined;

  /**
   * The VPC interface that you want to use for the media stream associated with the output.
   */
  Interface: InterfaceRequest | undefined;
}

export enum EncodingName {
  jxsv = "jxsv",
  pcm = "pcm",
  raw = "raw",
  smpte291 = "smpte291",
}

export enum EncoderProfile {
  high = "high",
  main = "main",
}

/**
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 */
export interface EncodingParametersRequest {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   */
  CompressionFactor: number | undefined;

  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, if at least one source on the flow uses the CDI protocol.
   */
  EncoderProfile: EncoderProfile | string | undefined;
}

/**
 * The media stream that you want to associate with the output, and the parameters for that association.
 */
export interface MediaStreamOutputConfigurationRequest {
  /**
   * The transport parameters that you want to associate with the media stream.
   */
  DestinationConfigurations?: DestinationConfigurationRequest[];

  /**
   * The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | string | undefined;

  /**
   * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
   */
  EncodingParameters?: EncodingParametersRequest;

  /**
   * The name of the media stream that is associated with the output.
   */
  MediaStreamName: string | undefined;
}

export enum Protocol {
  cdi = "cdi",
  fujitsu_qos = "fujitsu-qos",
  rist = "rist",
  rtp = "rtp",
  rtp_fec = "rtp-fec",
  srt_caller = "srt-caller",
  srt_listener = "srt-listener",
  st2110_jpegxs = "st2110-jpegxs",
  zixi_pull = "zixi-pull",
  zixi_push = "zixi-push",
}

/**
 * The settings for attaching a VPC interface to an output.
 */
export interface VpcInterfaceAttachment {
  /**
   * The name of the VPC interface to use for this output.
   */
  VpcInterfaceName?: string;
}

/**
 * The output that you want to add to this flow.
 */
export interface AddOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * The IP address from which video will be sent to output destinations.
   */
  Destination?: string;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * The media streams that are associated with the output, and the parameters for those associations.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[];

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * The protocol to use for the output.
   */
  Protocol: Protocol | string | undefined;

  /**
   * The remote ID for the Zixi-pull output stream.
   */
  RemoteId?: string;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

/**
 * The VPC interface that is used for the media stream associated with the source or output.
 */
export interface Interface {
  /**
   * The name of the VPC interface.
   */
  Name: string | undefined;
}

/**
 * The transport parameters that are associated with an outbound media stream.
 */
export interface DestinationConfiguration {
  /**
   * The IP address where contents of the media stream will be sent.
   */
  DestinationIp: string | undefined;

  /**
   * The port to use when the content of the media stream is distributed to the output.
   */
  DestinationPort: number | undefined;

  /**
   * The VPC interface that is used for the media stream associated with the output.
   */
  Interface: Interface | undefined;

  /**
   * The IP address that the receiver requires in order to establish a connection with the flow. This value is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the CDI or ST 2110 JPEG XS protocol.
   */
  OutboundIp: string | undefined;
}

export enum EntitlementStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * The settings for a flow entitlement.
 */
export interface Entitlement {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * A description of the entitlement.
   */
  Description?: string;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: Encryption;

  /**
   * The ARN of the entitlement.
   */
  EntitlementArn: string | undefined;

  /**
   * An indication of whether the entitlement is enabled.
   */
  EntitlementStatus?: EntitlementStatus | string;

  /**
   * The name of the entitlement.
   */
  Name: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers: string[] | undefined;
}

/**
 * The entitlements that you want to grant on a flow.
 */
export interface GrantEntitlementRequest {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: Encryption;

  /**
   * An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
   */
  EntitlementStatus?: EntitlementStatus | string;

  /**
   * The name of the entitlement. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   */
  Subscribers: string[] | undefined;
}

/**
 * The transport parameters that are associated with an incoming media stream.
 */
export interface InputConfiguration {
  /**
   * The IP address that the flow listens on for incoming content for a media stream.
   */
  InputIp: string | undefined;

  /**
   * The port that the flow listens on for an incoming media stream.
   */
  InputPort: number | undefined;

  /**
   * The VPC interface where the media stream comes in from.
   */
  Interface: Interface | undefined;
}

/**
 * The transport parameters that you want to associate with an incoming media stream.
 */
export interface InputConfigurationRequest {
  /**
   * The port that you want the flow to listen on for an incoming media stream.
   */
  InputPort: number | undefined;

  /**
   * The VPC interface that you want to use for the incoming media stream.
   */
  Interface: InterfaceRequest | undefined;
}

/**
 * An entitlement that has been granted to you from other AWS accounts.
 */
export interface ListedEntitlement {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * The ARN of the entitlement.
   */
  EntitlementArn: string | undefined;

  /**
   * The name of the entitlement.
   */
  EntitlementName: string | undefined;
}

export enum MaintenanceDay {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}

/**
 * The maintenance setting of a flow
 */
export interface Maintenance {
  /**
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * The Maintenance has to be performed before this deadline in ISO UTC format. Example: 2021-01-30T08:30:00Z.
   */
  MaintenanceDeadline?: string;

  /**
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   */
  MaintenanceScheduledDate?: string;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour?: string;
}

export enum SourceType {
  ENTITLED = "ENTITLED",
  OWNED = "OWNED",
}

export enum Status {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
  ERROR = "ERROR",
  STANDBY = "STANDBY",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

/**
 * Provides a summary of a flow, including its ARN, Availability Zone, and source type.
 */
export interface ListedFlow {
  /**
   * The Availability Zone that the flow was created in.
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow.
   */
  Description: string | undefined;

  /**
   * The ARN of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
   */
  SourceType: SourceType | string | undefined;

  /**
   * The current status of the flow.
   */
  Status: Status | string | undefined;

  /**
   * The maintenance setting of a flow
   */
  Maintenance?: Maintenance;
}

/**
 * FMTP
 */
export interface Fmtp {
  /**
   * The format of the audio channel.
   */
  ChannelOrder?: string;

  /**
   * The format that is used for the representation of color.
   */
  Colorimetry?: Colorimetry | string;

  /**
   * The frame rate for the video stream, in frames/second. For example: 60000/1001. If you specify a whole number, MediaConnect uses a ratio of N/1. For example, if you specify 60, MediaConnect uses 60/1 as the exactFramerate.
   */
  ExactFramerate?: string;

  /**
   * The pixel aspect ratio (PAR) of the video.
   */
  Par?: string;

  /**
   * The encoding range of the video.
   */
  Range?: Range | string;

  /**
   * The type of compression that was used to smooth the video’s appearance
   */
  ScanMode?: ScanMode | string;

  /**
   * The transfer characteristic system (TCS) that is used in the video.
   */
  Tcs?: Tcs | string;
}

/**
 * Attributes that are related to the media stream.
 */
export interface MediaStreamAttributes {
  /**
   * A set of parameters that define the media stream.
   */
  Fmtp: Fmtp | undefined;

  /**
   * The audio language, in a format that is recognized by the receiver.
   */
  Lang?: string;
}

/**
 * A single track or stream of media that contains video, audio, or ancillary data. After you add a media stream to a flow, you can associate it with sources and outputs on that flow, as long as they use the CDI protocol or the ST 2110 JPEG XS protocol. Each source or output can consist of one or many media streams.
 */
export interface MediaStream {
  /**
   * Attributes that are related to the media stream.
   */
  Attributes?: MediaStreamAttributes;

  /**
   * The sample rate for the stream. This value is measured in Hz.
   */
  ClockRate?: number;

  /**
   * A description that can help you quickly identify what your media stream is used for.
   */
  Description?: string;

  /**
   * The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
   */
  Fmt: number | undefined;

  /**
   * A unique identifier for the media stream.
   */
  MediaStreamId: number | undefined;

  /**
   * A name that helps you distinguish one media stream from another.
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   */
  MediaStreamType: MediaStreamType | string | undefined;

  /**
   * The resolution of the video.
   */
  VideoFormat?: string;
}

/**
 * A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
 */
export interface EncodingParameters {
  /**
   * A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are floating point numbers in the range of 3.0 to 10.0, inclusive.
   */
  CompressionFactor: number | undefined;

  /**
   * A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.
   */
  EncoderProfile: EncoderProfile | string | undefined;
}

/**
 * The media stream that is associated with the output, and the parameters for that association.
 */
export interface MediaStreamOutputConfiguration {
  /**
   * The transport parameters that are associated with each outbound media stream.
   */
  DestinationConfigurations?: DestinationConfiguration[];

  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | string | undefined;

  /**
   * Encoding parameters
   */
  EncodingParameters?: EncodingParameters;

  /**
   * The name of the media stream.
   */
  MediaStreamName: string | undefined;
}

/**
 * The media stream that is associated with the source, and the parameters for that association.
 */
export interface MediaStreamSourceConfiguration {
  /**
   * The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | string | undefined;

  /**
   * The transport parameters that are associated with an incoming media stream.
   */
  InputConfigurations?: InputConfiguration[];

  /**
   * The name of the media stream.
   */
  MediaStreamName: string | undefined;
}

/**
 * The definition of a media stream that you want to associate with the source.
 */
export interface MediaStreamSourceConfigurationRequest {
  /**
   * The format you want to use to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
   */
  EncodingName: EncodingName | string | undefined;

  /**
   * The transport parameters that you want to associate with the media stream.
   */
  InputConfigurations?: InputConfigurationRequest[];

  /**
   * The name of the media stream.
   */
  MediaStreamName: string | undefined;
}

export enum DurationUnits {
  MONTHS = "MONTHS",
}

export enum PriceUnits {
  HOURLY = "HOURLY",
}

export enum ResourceType {
  Mbps_Outbound_Bandwidth = "Mbps_Outbound_Bandwidth",
}

/**
 * A definition of what is being billed for, including the type and amount.
 */
export interface ResourceSpecification {
  /**
   * The amount of outbound bandwidth that is discounted in the offering.
   */
  ReservedBitrate?: number;

  /**
   * The type of resource and the unit that is being billed for.
   */
  ResourceType: ResourceType | string | undefined;
}

/**
 * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
 */
export interface Offering {
  /**
   * The type of currency that is used for billing. The currencyCode used for all reservations is US dollars.
   */
  CurrencyCode: string | undefined;

  /**
   * The length of time that your reservation would be active.
   */
  Duration: number | undefined;

  /**
   * The unit of measurement for the duration of the offering.
   */
  DurationUnits: DurationUnits | string | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   */
  OfferingArn: string | undefined;

  /**
   * A description of the offering.
   */
  OfferingDescription: string | undefined;

  /**
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate.
   */
  PricePerUnit: string | undefined;

  /**
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate.
   */
  PriceUnits: PriceUnits | string | undefined;

  /**
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering.
   */
  ResourceSpecification: ResourceSpecification | undefined;
}

/**
 * Attributes related to the transport stream that are used in a source or output.
 */
export interface Transport {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * The protocol that is used by the source or output.
   */
  Protocol: Protocol | string | undefined;

  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;

  /**
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
}

/**
 * The settings for an output.
 */
export interface Output {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * A description of the output.
   */
  Description?: string;

  /**
   * The address where you want to send the output.
   */
  Destination?: string;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;

  /**
   * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
   */
  EntitlementArn?: string;

  /**
   * The IP address that the receiver requires in order to establish a connection with the flow. For public networking, the ListenerAddress is represented by the elastic IP address of the flow. For private networking, the ListenerAddress is represented by the elastic network interface IP address of the VPC. This field applies only to outputs that use the Zixi pull or SRT listener protocol.
   */
  ListenerAddress?: string;

  /**
   * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
   */
  MediaLiveInputArn?: string;

  /**
   * The configuration for each media stream that is associated with the output.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfiguration[];

  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name: string | undefined;

  /**
   * The ARN of the output.
   */
  OutputArn: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * Attributes related to the transport stream that are used in the output.
   */
  Transport?: Transport;

  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

export enum ReservationState {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  EXPIRED = "EXPIRED",
  PROCESSING = "PROCESSING",
}

/**
 * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
 */
export interface Reservation {
  /**
   * The type of currency that is used for billing. The currencyCode used for your reservation is US dollars.
   */
  CurrencyCode: string | undefined;

  /**
   * The length of time that this reservation is active. MediaConnect defines this value in the offering.
   */
  Duration: number | undefined;

  /**
   * The unit of measurement for the duration of the reservation. MediaConnect defines this value in the offering.
   */
  DurationUnits: DurationUnits | string | undefined;

  /**
   * The day and time that this reservation expires. This value is calculated based on the start date and time that you set and the offering's duration.
   */
  End: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the offering.
   */
  OfferingArn: string | undefined;

  /**
   * A description of the offering. MediaConnect defines this value in the offering.
   */
  OfferingDescription: string | undefined;

  /**
   * The cost of a single unit. This value, in combination with priceUnits, makes up the rate. MediaConnect defines this value in the offering.
   */
  PricePerUnit: string | undefined;

  /**
   * The unit of measurement that is used for billing. This value, in combination with pricePerUnit, makes up the rate. MediaConnect defines this value in the offering.
   */
  PriceUnits: PriceUnits | string | undefined;

  /**
   * The Amazon Resource Name (ARN) that MediaConnect assigns to the reservation when you purchase an offering.
   */
  ReservationArn: string | undefined;

  /**
   * The name that you assigned to the reservation when you purchased the offering.
   */
  ReservationName: string | undefined;

  /**
   * The status of your reservation.
   */
  ReservationState: ReservationState | string | undefined;

  /**
   * A definition of the amount of outbound bandwidth that you would be reserving if you purchase the offering. MediaConnect defines the values that make up the resourceSpecification in the offering.
   */
  ResourceSpecification: ResourceSpecification | undefined;

  /**
   * The day and time that the reservation becomes active. You set this value when you purchase the offering.
   */
  Start: string | undefined;
}

/**
 * The settings for the source of the flow.
 */
export interface SetSourceRequest {
  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[];

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * The name of the source.
   */
  Name?: string;

  /**
   * The protocol that is used by the source.
   */
  Protocol?: Protocol | string;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;

  /**
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The name of the VPC interface to use for this source.
   */
  VpcInterfaceName?: string;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;
}

/**
 * The settings for the source of the flow.
 */
export interface Source {
  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The IP address that the flow will be listening on for incoming content.
   */
  IngestIp?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfiguration[];

  /**
   * The name of the source.
   */
  Name: string | undefined;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * The ARN of the source.
   */
  SourceArn: string | undefined;

  /**
   * Attributes related to the transport stream that are used in the source.
   */
  Transport?: Transport;

  /**
   * The name of the VPC interface that is used for this source.
   */
  VpcInterfaceName?: string;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;
}

export enum NetworkInterfaceType {
  efa = "efa",
  ena = "ena",
}

/**
 * The settings for a VPC Source.
 */
export interface VpcInterface {
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow.
   */
  Name: string | undefined;

  /**
   * IDs of the network interfaces created in customer's account by MediaConnect.
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * The type of network interface.
   */
  NetworkInterfaceType: NetworkInterfaceType | string | undefined;

  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   */
  RoleArn: string | undefined;

  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string | undefined;
}

/**
 * Desired VPC Interface for a Flow
 */
export interface VpcInterfaceRequest {
  /**
   * The name of the VPC Interface. This value must be unique within the current flow.
   */
  Name: string | undefined;

  /**
   * The type of network interface. If this value is not included in the request, MediaConnect uses ENA as the networkInterfaceType.
   */
  NetworkInterfaceType?: NetworkInterfaceType | string;

  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   */
  RoleArn: string | undefined;

  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string | undefined;
}

/**
 * A request to add media streams to the flow.
 */
export interface AddFlowMediaStreamsRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The media streams that you want to add to the flow.
   */
  MediaStreams: AddMediaStreamRequest[] | undefined;
}

export interface AddFlowMediaStreamsResponse {
  /**
   * The ARN of the flow that you added media streams to.
   */
  FlowArn?: string;

  /**
   * The media streams that you added to the flow.
   */
  MediaStreams?: MediaStream[];
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
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
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class AddFlowOutputs420Exception extends __BaseException {
  readonly name: "AddFlowOutputs420Exception" = "AddFlowOutputs420Exception";
  readonly $fault: "client" = "client";
  /**
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
 * A request to add outputs to the specified flow.
 */
export interface AddFlowOutputsRequest {
  /**
   * The flow that you want to add outputs to.
   */
  FlowArn: string | undefined;

  /**
   * A list of outputs that you want to add.
   */
  Outputs: AddOutputRequest[] | undefined;
}

export interface AddFlowOutputsResponse {
  /**
   * The ARN of the flow that these outputs were added to.
   */
  FlowArn?: string;

  /**
   * The details of the newly added outputs.
   */
  Outputs?: Output[];
}

/**
 * A request to add sources to the flow.
 */
export interface AddFlowSourcesRequest {
  /**
   * The flow that you want to mutate.
   */
  FlowArn: string | undefined;

  /**
   * A list of sources that you want to add.
   */
  Sources: SetSourceRequest[] | undefined;
}

export interface AddFlowSourcesResponse {
  /**
   * The ARN of the flow that these sources were added to.
   */
  FlowArn?: string;

  /**
   * The details of the newly added sources.
   */
  Sources?: Source[];
}

/**
 * A request to add VPC interfaces to the flow.
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * The flow that you want to mutate.
   */
  FlowArn: string | undefined;

  /**
   * A list of VPC interfaces that you want to add.
   */
  VpcInterfaces: VpcInterfaceRequest[] | undefined;
}

export interface AddFlowVpcInterfacesResponse {
  /**
   * The ARN of the flow that these VPC interfaces were added to.
   */
  FlowArn?: string;

  /**
   * The details of the newly added VPC interfaces.
   */
  VpcInterfaces?: VpcInterface[];
}

/**
 * Create maintenance setting for a flow
 */
export interface AddMaintenance {
  /**
   * A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay: MaintenanceDay | string | undefined;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour: string | undefined;
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class CreateFlow420Exception extends __BaseException {
  readonly name: "CreateFlow420Exception" = "CreateFlow420Exception";
  readonly $fault: "client" = "client";
  /**
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

export enum FailoverMode {
  FAILOVER = "FAILOVER",
  MERGE = "MERGE",
}

/**
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
 */
export interface SourcePriority {
  /**
   * The name of the source you choose as the primary source for this flow.
   */
  PrimarySource?: string;
}

export enum State {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * The settings for source failover.
 */
export interface FailoverConfig {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   */
  FailoverMode?: FailoverMode | string;

  /**
   * Search window time to look for dash-7 packets
   */
  RecoveryWindow?: number;

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  SourcePriority?: SourcePriority;

  State?: State | string;
}

/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 */
export interface CreateFlowRequest {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
   */
  AvailabilityZone?: string;

  /**
   * The entitlements that you want to grant on a flow.
   */
  Entitlements?: GrantEntitlementRequest[];

  /**
   * The media streams that you want to add to the flow. You can associate these media streams with sources and outputs on the flow.
   */
  MediaStreams?: AddMediaStreamRequest[];

  /**
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * The outputs that you want to add to this flow.
   */
  Outputs?: AddOutputRequest[];

  /**
   * The settings for the source of the flow.
   */
  Source?: SetSourceRequest;

  /**
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;

  Sources?: SetSourceRequest[];
  /**
   * The VPC interfaces you want on the flow.
   */
  VpcInterfaces?: VpcInterfaceRequest[];

  /**
   * Create maintenance setting for a flow
   */
  Maintenance?: AddMaintenance;
}

/**
 * The settings for a flow, including its source, outputs, and entitlements.
 */
export interface Flow {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The IP address from which video will be sent to output destinations.
   */
  EgressIp?: string;

  /**
   * The entitlements in this flow.
   */
  Entitlements: Entitlement[] | undefined;

  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.
   */
  MediaStreams?: MediaStream[];

  /**
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * The outputs in this flow.
   */
  Outputs: Output[] | undefined;

  /**
   * The settings for the source of the flow.
   */
  Source: Source | undefined;

  /**
   * The settings for source failover.
   */
  SourceFailoverConfig?: FailoverConfig;

  Sources?: Source[];
  /**
   * The current status of the flow.
   */
  Status: Status | string | undefined;

  /**
   * The VPC Interfaces for this flow.
   */
  VpcInterfaces?: VpcInterface[];

  /**
   * The maintenance setting of a flow
   */
  Maintenance?: Maintenance;
}

export interface CreateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

export interface DeleteFlowRequest {
  /**
   * The ARN of the flow that you want to delete.
   */
  FlowArn: string | undefined;
}

export interface DeleteFlowResponse {
  /**
   * The ARN of the flow that was deleted.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the DeleteFlow process begins.
   */
  Status?: Status | string;
}

export interface DescribeFlowRequest {
  /**
   * The ARN of the flow that you want to describe.
   */
  FlowArn: string | undefined;
}

/**
 * Messages that provide the state of the flow.
 */
export interface Messages {
  /**
   * A list of errors that might have been generated from processes on this flow.
   */
  Errors: string[] | undefined;
}

export interface DescribeFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;

  /**
   * Messages that provide the state of the flow.
   */
  Messages?: Messages;
}

export interface DescribeOfferingRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   */
  OfferingArn: string | undefined;
}

export interface DescribeOfferingResponse {
  /**
   * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
   */
  Offering?: Offering;
}

export interface DescribeReservationRequest {
  /**
   * The Amazon Resource Name (ARN) of the reservation.
   */
  ReservationArn: string | undefined;
}

export interface DescribeReservationResponse {
  /**
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   */
  Reservation?: Reservation;
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export class GrantFlowEntitlements420Exception extends __BaseException {
  readonly name: "GrantFlowEntitlements420Exception" = "GrantFlowEntitlements420Exception";
  readonly $fault: "client" = "client";
  /**
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
 * A request to grant entitlements on a flow.
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * The list of entitlements that you want to grant.
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * The flow that you want to grant entitlements on.
   */
  FlowArn: string | undefined;
}

export interface GrantFlowEntitlementsResponse {
  /**
   * The entitlements that were just granted.
   */
  Entitlements?: Entitlement[];

  /**
   * The ARN of the flow that these entitlements were granted to.
   */
  FlowArn?: string;
}

export interface ListEntitlementsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
   */
  MaxResults?: number;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export interface ListEntitlementsResponse {
  /**
   * A list of entitlements that have been granted to you from other AWS accounts.
   */
  Entitlements?: ListedEntitlement[];

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export interface ListFlowsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export interface ListFlowsResponse {
  /**
   * A list of flow summaries.
   */
  Flows?: ListedFlow[];

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export interface ListOfferingsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListOfferings request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export interface ListOfferingsResponse {
  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListOfferings request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   */
  NextToken?: string;

  /**
   * A list of offerings that are available to this account in the current AWS Region.
   */
  Offerings?: Offering[];
}

export interface ListReservationsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListReservations request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListOfferings request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export interface ListReservationsResponse {
  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListReservations request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListReservations request a second time and specify the NextToken value.
   */
  NextToken?: string;

  /**
   * A list of all reservations that have been purchased by this account in the current AWS Region.
   */
  Reservations?: Reservation[];
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags?: Record<string, string>;
}

/**
 * A request to purchase a offering.
 */
export interface PurchaseOfferingRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   */
  OfferingArn: string | undefined;

  /**
   * The name that you want to use for the reservation.
   */
  ReservationName: string | undefined;

  /**
   * The date and time that you want the reservation to begin, in Coordinated Universal Time (UTC). You can specify any date and time between 12:00am on the first day of the current month to the current time on today's date, inclusive. Specify the start in a 24-hour notation. Use the following format: YYYY-MM-DDTHH:mm:SSZ, where T and Z are literal characters. For example, to specify 11:30pm on March 5, 2020, enter 2020-03-05T23:30:00Z.
   */
  Start: string | undefined;
}

export interface PurchaseOfferingResponse {
  /**
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   */
  Reservation?: Reservation;
}

export interface RemoveFlowMediaStreamRequest {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The name of the media stream that you want to remove.
   */
  MediaStreamName: string | undefined;
}

export interface RemoveFlowMediaStreamResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn?: string;

  /**
   * The name of the media stream that was removed.
   */
  MediaStreamName?: string;
}

export interface RemoveFlowOutputRequest {
  /**
   * The flow that you want to remove an output from.
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the output that you want to remove.
   */
  OutputArn: string | undefined;
}

export interface RemoveFlowOutputResponse {
  /**
   * The ARN of the flow that is associated with the output you removed.
   */
  FlowArn?: string;

  /**
   * The ARN of the output that was removed.
   */
  OutputArn?: string;
}

export interface RemoveFlowSourceRequest {
  /**
   * The flow that you want to remove a source from.
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the source that you want to remove.
   */
  SourceArn: string | undefined;
}

export interface RemoveFlowSourceResponse {
  /**
   * The ARN of the flow that is associated with the source you removed.
   */
  FlowArn?: string;

  /**
   * The ARN of the source that was removed.
   */
  SourceArn?: string;
}

export interface RemoveFlowVpcInterfaceRequest {
  /**
   * The flow that you want to remove a VPC interface from.
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface that you want to remove.
   */
  VpcInterfaceName: string | undefined;
}

export interface RemoveFlowVpcInterfaceResponse {
  /**
   * The ARN of the flow that is associated with the VPC interface you removed.
   */
  FlowArn?: string;

  /**
   * IDs of network interfaces associated with the removed VPC interface that Media Connect was unable to remove.
   */
  NonDeletedNetworkInterfaceIds?: string[];

  /**
   * The name of the VPC interface that was removed.
   */
  VpcInterfaceName?: string;
}

export interface RevokeFlowEntitlementRequest {
  /**
   * The ARN of the entitlement that you want to revoke.
   */
  EntitlementArn: string | undefined;

  /**
   * The flow that you want to revoke an entitlement from.
   */
  FlowArn: string | undefined;
}

export interface RevokeFlowEntitlementResponse {
  /**
   * The ARN of the entitlement that was revoked.
   */
  EntitlementArn?: string;

  /**
   * The ARN of the flow that the entitlement was revoked from.
   */
  FlowArn?: string;
}

export interface StartFlowRequest {
  /**
   * The ARN of the flow that you want to start.
   */
  FlowArn: string | undefined;
}

export interface StartFlowResponse {
  /**
   * The ARN of the flow that you started.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the StartFlow process begins.
   */
  Status?: Status | string;
}

export interface StopFlowRequest {
  /**
   * The ARN of the flow that you want to stop.
   */
  FlowArn: string | undefined;
}

export interface StopFlowResponse {
  /**
   * The ARN of the flow that you stopped.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the StopFlow process begins.
   */
  Status?: Status | string;
}

/**
 * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
   */
  ResourceArn: string | undefined;

  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   */
  TagKeys: string[] | undefined;
}

/**
 * Update maintenance setting for a flow
 */
export interface UpdateMaintenance {
  /**
   * A day of a week when the maintenance will happen. use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
   */
  MaintenanceDay?: MaintenanceDay | string;

  /**
   * A scheduled date in ISO UTC format when the maintenance will happen. Use YYYY-MM-DD format. Example: 2021-01-30.
   */
  MaintenanceScheduledDate?: string;

  /**
   * UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
   */
  MaintenanceStartHour?: string;
}

/**
 * The settings for source failover.
 */
export interface UpdateFailoverConfig {
  /**
   * The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
   */
  FailoverMode?: FailoverMode | string;

  /**
   * Recovery window time to look for dash-7 packets
   */
  RecoveryWindow?: number;

  /**
   * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
   */
  SourcePriority?: SourcePriority;

  State?: State | string;
}

/**
 * A request to update flow.
 */
export interface UpdateFlowRequest {
  /**
   * The flow that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * The settings for source failover.
   */
  SourceFailoverConfig?: UpdateFailoverConfig;

  /**
   * Update maintenance setting for a flow
   */
  Maintenance?: UpdateMaintenance;
}

export interface UpdateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

/**
 * Information about the encryption of the flow.
 */
export interface UpdateEncryption {
  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: Algorithm | string;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: KeyType | string;

  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;

  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn?: string;

  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;
}

/**
 * The entitlement fields that you want to update.
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * The type of encryption that will be used on the output associated with this entitlement.
   */
  Encryption?: UpdateEncryption;

  /**
   * The ARN of the entitlement that you want to update.
   */
  EntitlementArn: string | undefined;

  /**
   * An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.
   */
  EntitlementStatus?: EntitlementStatus | string;

  /**
   * The flow that is associated with the entitlement that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers?: string[];
}

export interface UpdateFlowEntitlementResponse {
  /**
   * The new configuration of the entitlement that you updated.
   */
  Entitlement?: Entitlement;

  /**
   * The ARN of the flow that this entitlement was granted on.
   */
  FlowArn?: string;
}

/**
 * The fields that you want to update in the media stream.
 */
export interface UpdateFlowMediaStreamRequest {
  /**
   * The attributes that you want to assign to the media stream.
   */
  Attributes?: MediaStreamAttributesRequest;

  /**
   * The sample rate (in Hz) for the stream. If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.
   */
  ClockRate?: number;

  /**
   * Description
   */
  Description?: string;

  /**
   * The Amazon Resource Name (ARN) of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The name of the media stream that you want to update.
   */
  MediaStreamName: string | undefined;

  /**
   * The type of media stream.
   */
  MediaStreamType?: MediaStreamType | string;

  /**
   * The resolution of the video.
   */
  VideoFormat?: string;
}

export interface UpdateFlowMediaStreamResponse {
  /**
   * The ARN of the flow that is associated with the media stream that you updated.
   */
  FlowArn?: string;

  /**
   * The media stream that you updated.
   */
  MediaStream?: MediaStream;
}

/**
 * The fields that you want to update in the output.
 */
export interface UpdateFlowOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * The IP address where you want to send the output.
   */
  Destination?: string;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: UpdateEncryption;

  /**
   * The flow that is associated with the output that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * The media streams that are associated with the output, and the parameters for those associations.
   */
  MediaStreamOutputConfigurations?: MediaStreamOutputConfigurationRequest[];

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * The ARN of the output that you want to update.
   */
  OutputArn: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * The protocol to use for the output.
   */
  Protocol?: Protocol | string;

  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;
}

export interface UpdateFlowOutputResponse {
  /**
   * The ARN of the flow that is associated with the updated output.
   */
  FlowArn?: string;

  /**
   * The new settings of the output that you updated.
   */
  Output?: Output;
}

/**
 * A request to update the source of a flow.
 */
export interface UpdateFlowSourceRequest {
  /**
   * The type of encryption used on the content ingested from this source.
   */
  Decryption?: UpdateEncryption;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The flow that is associated with the source that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based, Zixi-based, and Fujitsu-based streams.
   */
  MaxLatency?: number;

  /**
   * The size of the buffer (in milliseconds) to use to sync incoming source data.
   */
  MaxSyncBuffer?: number;

  /**
   * The media streams that are associated with the source, and the parameters for those associations.
   */
  MediaStreamSourceConfigurations?: MediaStreamSourceConfigurationRequest[];

  /**
   * The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
   */
  MinLatency?: number;

  /**
   * The protocol that is used by the source.
   */
  Protocol?: Protocol | string;

  /**
   * The port that the flow uses to send outbound requests to initiate connection with the sender.
   */
  SenderControlPort?: number;

  /**
   * The IP address that the flow communicates with to initiate connection with the sender.
   */
  SenderIpAddress?: string;

  /**
   * The ARN of the source that you want to update.
   */
  SourceArn: string | undefined;

  /**
   * Source IP or domain name for SRT-caller protocol.
   */
  SourceListenerAddress?: string;

  /**
   * Source port for SRT-caller protocol.
   */
  SourceListenerPort?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The name of the VPC interface to use for this source.
   */
  VpcInterfaceName?: string;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;
}

export interface UpdateFlowSourceResponse {
  /**
   * The ARN of the flow that you want to update.
   */
  FlowArn?: string;

  /**
   * The settings for the source of the flow.
   */
  Source?: Source;
}

/**
 * @internal
 */
export const FmtpRequestFilterSensitiveLog = (obj: FmtpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamAttributesRequestFilterSensitiveLog = (obj: MediaStreamAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddMediaStreamRequestFilterSensitiveLog = (obj: AddMediaStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionFilterSensitiveLog = (obj: Encryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InterfaceRequestFilterSensitiveLog = (obj: InterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationConfigurationRequestFilterSensitiveLog = (obj: DestinationConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncodingParametersRequestFilterSensitiveLog = (obj: EncodingParametersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamOutputConfigurationRequestFilterSensitiveLog = (
  obj: MediaStreamOutputConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcInterfaceAttachmentFilterSensitiveLog = (obj: VpcInterfaceAttachment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddOutputRequestFilterSensitiveLog = (obj: AddOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InterfaceFilterSensitiveLog = (obj: Interface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationConfigurationFilterSensitiveLog = (obj: DestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntitlementFilterSensitiveLog = (obj: Entitlement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantEntitlementRequestFilterSensitiveLog = (obj: GrantEntitlementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputConfigurationFilterSensitiveLog = (obj: InputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputConfigurationRequestFilterSensitiveLog = (obj: InputConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedEntitlementFilterSensitiveLog = (obj: ListedEntitlement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaintenanceFilterSensitiveLog = (obj: Maintenance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListedFlowFilterSensitiveLog = (obj: ListedFlow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FmtpFilterSensitiveLog = (obj: Fmtp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamAttributesFilterSensitiveLog = (obj: MediaStreamAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamFilterSensitiveLog = (obj: MediaStream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncodingParametersFilterSensitiveLog = (obj: EncodingParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamOutputConfigurationFilterSensitiveLog = (obj: MediaStreamOutputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamSourceConfigurationFilterSensitiveLog = (obj: MediaStreamSourceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaStreamSourceConfigurationRequestFilterSensitiveLog = (
  obj: MediaStreamSourceConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceSpecificationFilterSensitiveLog = (obj: ResourceSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OfferingFilterSensitiveLog = (obj: Offering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransportFilterSensitiveLog = (obj: Transport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputFilterSensitiveLog = (obj: Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservationFilterSensitiveLog = (obj: Reservation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetSourceRequestFilterSensitiveLog = (obj: SetSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFilterSensitiveLog = (obj: Source): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcInterfaceFilterSensitiveLog = (obj: VpcInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcInterfaceRequestFilterSensitiveLog = (obj: VpcInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowMediaStreamsRequestFilterSensitiveLog = (obj: AddFlowMediaStreamsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowMediaStreamsResponseFilterSensitiveLog = (obj: AddFlowMediaStreamsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowOutputsRequestFilterSensitiveLog = (obj: AddFlowOutputsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowOutputsResponseFilterSensitiveLog = (obj: AddFlowOutputsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowSourcesRequestFilterSensitiveLog = (obj: AddFlowSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowSourcesResponseFilterSensitiveLog = (obj: AddFlowSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowVpcInterfacesRequestFilterSensitiveLog = (obj: AddFlowVpcInterfacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddFlowVpcInterfacesResponseFilterSensitiveLog = (obj: AddFlowVpcInterfacesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddMaintenanceFilterSensitiveLog = (obj: AddMaintenance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourcePriorityFilterSensitiveLog = (obj: SourcePriority): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailoverConfigFilterSensitiveLog = (obj: FailoverConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFlowRequestFilterSensitiveLog = (obj: CreateFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowFilterSensitiveLog = (obj: Flow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFlowResponseFilterSensitiveLog = (obj: CreateFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowRequestFilterSensitiveLog = (obj: DeleteFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFlowResponseFilterSensitiveLog = (obj: DeleteFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowRequestFilterSensitiveLog = (obj: DescribeFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessagesFilterSensitiveLog = (obj: Messages): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowResponseFilterSensitiveLog = (obj: DescribeFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOfferingRequestFilterSensitiveLog = (obj: DescribeOfferingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOfferingResponseFilterSensitiveLog = (obj: DescribeOfferingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservationRequestFilterSensitiveLog = (obj: DescribeReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservationResponseFilterSensitiveLog = (obj: DescribeReservationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantFlowEntitlementsRequestFilterSensitiveLog = (obj: GrantFlowEntitlementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrantFlowEntitlementsResponseFilterSensitiveLog = (obj: GrantFlowEntitlementsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEntitlementsRequestFilterSensitiveLog = (obj: ListEntitlementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEntitlementsResponseFilterSensitiveLog = (obj: ListEntitlementsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFlowsRequestFilterSensitiveLog = (obj: ListFlowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFlowsResponseFilterSensitiveLog = (obj: ListFlowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOfferingsRequestFilterSensitiveLog = (obj: ListOfferingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOfferingsResponseFilterSensitiveLog = (obj: ListOfferingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReservationsRequestFilterSensitiveLog = (obj: ListReservationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReservationsResponseFilterSensitiveLog = (obj: ListReservationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseOfferingRequestFilterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseOfferingResponseFilterSensitiveLog = (obj: PurchaseOfferingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowMediaStreamRequestFilterSensitiveLog = (obj: RemoveFlowMediaStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowMediaStreamResponseFilterSensitiveLog = (obj: RemoveFlowMediaStreamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowOutputRequestFilterSensitiveLog = (obj: RemoveFlowOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowOutputResponseFilterSensitiveLog = (obj: RemoveFlowOutputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowSourceRequestFilterSensitiveLog = (obj: RemoveFlowSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowSourceResponseFilterSensitiveLog = (obj: RemoveFlowSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowVpcInterfaceRequestFilterSensitiveLog = (obj: RemoveFlowVpcInterfaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveFlowVpcInterfaceResponseFilterSensitiveLog = (obj: RemoveFlowVpcInterfaceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeFlowEntitlementRequestFilterSensitiveLog = (obj: RevokeFlowEntitlementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeFlowEntitlementResponseFilterSensitiveLog = (obj: RevokeFlowEntitlementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFlowRequestFilterSensitiveLog = (obj: StartFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFlowResponseFilterSensitiveLog = (obj: StartFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopFlowRequestFilterSensitiveLog = (obj: StopFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopFlowResponseFilterSensitiveLog = (obj: StopFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMaintenanceFilterSensitiveLog = (obj: UpdateMaintenance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFailoverConfigFilterSensitiveLog = (obj: UpdateFailoverConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowRequestFilterSensitiveLog = (obj: UpdateFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowResponseFilterSensitiveLog = (obj: UpdateFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEncryptionFilterSensitiveLog = (obj: UpdateEncryption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowEntitlementRequestFilterSensitiveLog = (obj: UpdateFlowEntitlementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowEntitlementResponseFilterSensitiveLog = (obj: UpdateFlowEntitlementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowMediaStreamRequestFilterSensitiveLog = (obj: UpdateFlowMediaStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowMediaStreamResponseFilterSensitiveLog = (obj: UpdateFlowMediaStreamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowOutputRequestFilterSensitiveLog = (obj: UpdateFlowOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowOutputResponseFilterSensitiveLog = (obj: UpdateFlowOutputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowSourceRequestFilterSensitiveLog = (obj: UpdateFlowSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlowSourceResponseFilterSensitiveLog = (obj: UpdateFlowSourceResponse): any => ({
  ...obj,
});
