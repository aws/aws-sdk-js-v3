import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace FmtpRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FmtpRequest): any => ({
    ...obj,
  });
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

export namespace MediaStreamAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStreamAttributesRequest): any => ({
    ...obj,
  });
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

export namespace AddMediaStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddMediaStreamRequest): any => ({
    ...obj,
  });
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

export namespace Encryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Encryption): any => ({
    ...obj,
  });
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

export namespace InterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InterfaceRequest): any => ({
    ...obj,
  });
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

export namespace DestinationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace EncodingParametersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncodingParametersRequest): any => ({
    ...obj,
  });
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

export namespace MediaStreamOutputConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStreamOutputConfigurationRequest): any => ({
    ...obj,
  });
}

export enum Protocol {
  cdi = "cdi",
  rist = "rist",
  rtp = "rtp",
  rtp_fec = "rtp-fec",
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

export namespace VpcInterfaceAttachment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcInterfaceAttachment): any => ({
    ...obj,
  });
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
   * The maximum latency in milliseconds for Zixi-based streams.
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

export namespace AddOutputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddOutputRequest): any => ({
    ...obj,
  });
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

export namespace Interface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Interface): any => ({
    ...obj,
  });
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

export namespace DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationConfiguration): any => ({
    ...obj,
  });
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

export namespace Entitlement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Entitlement): any => ({
    ...obj,
  });
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

export namespace GrantEntitlementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantEntitlementRequest): any => ({
    ...obj,
  });
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

export namespace InputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputConfiguration): any => ({
    ...obj,
  });
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

export namespace InputConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace ListedEntitlement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListedEntitlement): any => ({
    ...obj,
  });
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
}

export namespace ListedFlow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListedFlow): any => ({
    ...obj,
  });
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

export namespace Fmtp {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Fmtp): any => ({
    ...obj,
  });
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

export namespace MediaStreamAttributes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStreamAttributes): any => ({
    ...obj,
  });
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

export namespace MediaStream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStream): any => ({
    ...obj,
  });
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

export namespace EncodingParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncodingParameters): any => ({
    ...obj,
  });
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

export namespace MediaStreamOutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStreamOutputConfiguration): any => ({
    ...obj,
  });
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

export namespace MediaStreamSourceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStreamSourceConfiguration): any => ({
    ...obj,
  });
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

export namespace MediaStreamSourceConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaStreamSourceConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace ResourceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceSpecification): any => ({
    ...obj,
  });
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

export namespace Offering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Offering): any => ({
    ...obj,
  });
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
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
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
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
}

export namespace Transport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Transport): any => ({
    ...obj,
  });
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

export namespace Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
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

export namespace Reservation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reservation): any => ({
    ...obj,
  });
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
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
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

export namespace SetSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetSourceRequest): any => ({
    ...obj,
  });
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

export namespace Source {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
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
   * Immutable and has to be a unique against other VpcInterfaces in this Flow
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

export namespace VpcInterface {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcInterface): any => ({
    ...obj,
  });
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

export namespace VpcInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcInterfaceRequest): any => ({
    ...obj,
  });
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

export namespace AddFlowMediaStreamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowMediaStreamsRequest): any => ({
    ...obj,
  });
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

export namespace AddFlowMediaStreamsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowMediaStreamsResponse): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace InternalServerErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace TooManyRequestsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface AddFlowOutputs420Exception extends __SmithyException, $MetadataBearer {
  name: "AddFlowOutputs420Exception";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace AddFlowOutputs420Exception {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowOutputs420Exception): any => ({
    ...obj,
  });
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

export namespace AddFlowOutputsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowOutputsRequest): any => ({
    ...obj,
  });
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

export namespace AddFlowOutputsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowOutputsResponse): any => ({
    ...obj,
  });
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

export namespace AddFlowSourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowSourcesRequest): any => ({
    ...obj,
  });
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

export namespace AddFlowSourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowSourcesResponse): any => ({
    ...obj,
  });
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

export namespace AddFlowVpcInterfacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowVpcInterfacesRequest): any => ({
    ...obj,
  });
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

export namespace AddFlowVpcInterfacesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddFlowVpcInterfacesResponse): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface CreateFlow420Exception extends __SmithyException, $MetadataBearer {
  name: "CreateFlow420Exception";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace CreateFlow420Exception {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlow420Exception): any => ({
    ...obj,
  });
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

export namespace SourcePriority {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourcePriority): any => ({
    ...obj,
  });
}

export enum State {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * The settings for source failover
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

export namespace FailoverConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverConfig): any => ({
    ...obj,
  });
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
   * The settings for source failover
   */
  SourceFailoverConfig?: FailoverConfig;

  Sources?: SetSourceRequest[];
  /**
   * The VPC interfaces you want on the flow.
   */
  VpcInterfaces?: VpcInterfaceRequest[];
}

export namespace CreateFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowRequest): any => ({
    ...obj,
  });
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
   * The settings for source failover
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
}

export namespace Flow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Flow): any => ({
    ...obj,
  });
}

export interface CreateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

export namespace CreateFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFlowResponse): any => ({
    ...obj,
  });
}

export interface DeleteFlowRequest {
  /**
   * The ARN of the flow that you want to delete.
   */
  FlowArn: string | undefined;
}

export namespace DeleteFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowRequest): any => ({
    ...obj,
  });
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

export namespace DeleteFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFlowResponse): any => ({
    ...obj,
  });
}

export interface DescribeFlowRequest {
  /**
   * The ARN of the flow that you want to describe.
   */
  FlowArn: string | undefined;
}

export namespace DescribeFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowRequest): any => ({
    ...obj,
  });
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

export namespace Messages {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Messages): any => ({
    ...obj,
  });
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

export namespace DescribeFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFlowResponse): any => ({
    ...obj,
  });
}

export interface DescribeOfferingRequest {
  /**
   * The Amazon Resource Name (ARN) of the offering.
   */
  OfferingArn: string | undefined;
}

export namespace DescribeOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOfferingRequest): any => ({
    ...obj,
  });
}

export interface DescribeOfferingResponse {
  /**
   * A savings plan that reserves a certain amount of outbound bandwidth usage at a discounted rate each month over a period of time.
   */
  Offering?: Offering;
}

export namespace DescribeOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOfferingResponse): any => ({
    ...obj,
  });
}

export interface DescribeReservationRequest {
  /**
   * The Amazon Resource Name (ARN) of the reservation.
   */
  ReservationArn: string | undefined;
}

export namespace DescribeReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservationRequest): any => ({
    ...obj,
  });
}

export interface DescribeReservationResponse {
  /**
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   */
  Reservation?: Reservation;
}

export namespace DescribeReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface GrantFlowEntitlements420Exception extends __SmithyException, $MetadataBearer {
  name: "GrantFlowEntitlements420Exception";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace GrantFlowEntitlements420Exception {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantFlowEntitlements420Exception): any => ({
    ...obj,
  });
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

export namespace GrantFlowEntitlementsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantFlowEntitlementsRequest): any => ({
    ...obj,
  });
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

export namespace GrantFlowEntitlementsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrantFlowEntitlementsResponse): any => ({
    ...obj,
  });
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

export namespace ListEntitlementsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitlementsRequest): any => ({
    ...obj,
  });
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

export namespace ListEntitlementsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEntitlementsResponse): any => ({
    ...obj,
  });
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

export namespace ListFlowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFlowsRequest): any => ({
    ...obj,
  });
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

export namespace ListFlowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFlowsResponse): any => ({
    ...obj,
  });
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

export namespace ListOfferingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOfferingsRequest): any => ({
    ...obj,
  });
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

export namespace ListOfferingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOfferingsResponse): any => ({
    ...obj,
  });
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

export namespace ListReservationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReservationsRequest): any => ({
    ...obj,
  });
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

export namespace ListReservationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListReservationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PurchaseOfferingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
    ...obj,
  });
}

export interface PurchaseOfferingResponse {
  /**
   * A pricing agreement for a discounted rate for a specific outbound bandwidth that your MediaConnect account will use each month over a specific time period. The discounted rate in the reservation applies to outbound bandwidth for all flows from your account until your account reaches the amount of bandwidth in your reservation. If you use more outbound bandwidth than the agreed upon amount in a single month, the overage is charged at the on-demand rate.
   */
  Reservation?: Reservation;
}

export namespace PurchaseOfferingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseOfferingResponse): any => ({
    ...obj,
  });
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

export namespace RemoveFlowMediaStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowMediaStreamRequest): any => ({
    ...obj,
  });
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

export namespace RemoveFlowMediaStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowMediaStreamResponse): any => ({
    ...obj,
  });
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

export namespace RemoveFlowOutputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowOutputRequest): any => ({
    ...obj,
  });
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

export namespace RemoveFlowOutputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowOutputResponse): any => ({
    ...obj,
  });
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

export namespace RemoveFlowSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowSourceRequest): any => ({
    ...obj,
  });
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

export namespace RemoveFlowSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowSourceResponse): any => ({
    ...obj,
  });
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

export namespace RemoveFlowVpcInterfaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowVpcInterfaceRequest): any => ({
    ...obj,
  });
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

export namespace RemoveFlowVpcInterfaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFlowVpcInterfaceResponse): any => ({
    ...obj,
  });
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

export namespace RevokeFlowEntitlementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeFlowEntitlementRequest): any => ({
    ...obj,
  });
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

export namespace RevokeFlowEntitlementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeFlowEntitlementResponse): any => ({
    ...obj,
  });
}

export interface StartFlowRequest {
  /**
   * The ARN of the flow that you want to start.
   */
  FlowArn: string | undefined;
}

export namespace StartFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFlowRequest): any => ({
    ...obj,
  });
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

export namespace StartFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartFlowResponse): any => ({
    ...obj,
  });
}

export interface StopFlowRequest {
  /**
   * The ARN of the flow that you want to stop.
   */
  FlowArn: string | undefined;
}

export namespace StopFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopFlowRequest): any => ({
    ...obj,
  });
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

export namespace StopFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopFlowResponse): any => ({
    ...obj,
  });
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
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * The settings for source failover
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

export namespace UpdateFailoverConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFailoverConfig): any => ({
    ...obj,
  });
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
   * The settings for source failover
   */
  SourceFailoverConfig?: UpdateFailoverConfig;
}

export namespace UpdateFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

export namespace UpdateFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowResponse): any => ({
    ...obj,
  });
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

export namespace UpdateEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEncryption): any => ({
    ...obj,
  });
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

export namespace UpdateFlowEntitlementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowEntitlementRequest): any => ({
    ...obj,
  });
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

export namespace UpdateFlowEntitlementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowEntitlementResponse): any => ({
    ...obj,
  });
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

export namespace UpdateFlowMediaStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowMediaStreamRequest): any => ({
    ...obj,
  });
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

export namespace UpdateFlowMediaStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowMediaStreamResponse): any => ({
    ...obj,
  });
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
   * The maximum latency in milliseconds for Zixi-based streams.
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

export namespace UpdateFlowOutputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowOutputRequest): any => ({
    ...obj,
  });
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

export namespace UpdateFlowOutputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowOutputResponse): any => ({
    ...obj,
  });
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
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
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
   * The ARN of the source that you want to update.
   */
  SourceArn: string | undefined;

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

export namespace UpdateFlowSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowSourceRequest): any => ({
    ...obj,
  });
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

export namespace UpdateFlowSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFlowSourceResponse): any => ({
    ...obj,
  });
}
