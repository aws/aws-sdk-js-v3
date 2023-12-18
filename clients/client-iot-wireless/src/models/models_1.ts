// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTWirelessServiceException as __BaseException } from "./IoTWirelessServiceException";

import {
  ApplicationConfig,
  CertificateList,
  ConnectionStatusEventConfiguration,
  ConnectionStatusResourceTypeEventConfiguration,
  DeviceRegistrationStateEventConfiguration,
  DeviceRegistrationStateResourceTypeEventConfiguration,
  EventNotificationPartnerType,
  ExpressionType,
  FuotaDeviceStatus,
  IdentifierType,
  JoinEventConfiguration,
  JoinResourceTypeEventConfiguration,
  LogLevel,
  LoRaWANFuotaTask,
  LoRaWANGateway,
  LoRaWANGatewayVersion,
  LoRaWANListDevice,
  LoRaWANMulticast,
  LoRaWANMulticastSession,
  LoRaWANSendDataToDevice,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  PartnerType,
  PositionConfigurationFec,
  PositionConfigurationStatus,
  Positioning,
  PositioningConfigStatus,
  PositionResourceType,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  Tag,
  TraceContent,
  WirelessDeviceLogOption,
  WirelessDeviceSidewalkStatus,
  WirelessDeviceType,
  WirelessGatewayLogOption,
} from "./models_0";

/**
 * @public
 * <p>Sidewalk object used by list functions.</p>
 */
export interface SidewalkListDevice {
  /**
   * @public
   * <p>The Sidewalk Amazon ID.</p>
   */
  AmazonId?: string;

  /**
   * @public
   * <p>The sidewalk device identification.</p>
   */
  SidewalkId?: string;

  /**
   * @public
   * <p>The Sidewalk manufacturing series number.</p>
   */
  SidewalkManufacturingSn?: string;

  /**
   * @public
   * <p>The sidewalk device certificates for Ed25519 and P256r1.</p>
   */
  DeviceCertificates?: CertificateList[];

  /**
   * @public
   * <p>Sidewalk object used by list functions.</p>
   */
  DeviceProfileId?: string;

  /**
   * @public
   * <p>The status of the Sidewalk devices, such as provisioned or registered.</p>
   */
  Status?: WirelessDeviceSidewalkStatus;
}

/**
 * @public
 * <p>Information about a wireless device's operation.</p>
 */
export interface WirelessDeviceStatistics {
  /**
   * @public
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the wireless device reporting the data.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The wireless device type.</p>
   */
  Type?: WirelessDeviceType;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The name of the destination to which the device is assigned.</p>
   */
  DestinationName?: string;

  /**
   * @public
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>Theis value is only valid for 3 months.</p>
   *          </note>
   */
  LastUplinkReceivedAt?: string;

  /**
   * @public
   * <p>LoRaWAN device info.</p>
   */
  LoRaWAN?: LoRaWANListDevice;

  /**
   * @public
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkListDevice;

  /**
   * @public
   * <p>The status of a wireless device in a FUOTA task.</p>
   */
  FuotaDeviceStatus?: FuotaDeviceStatus;

  /**
   * @public
   * <p>The status of the wireless device in the multicast group.</p>
   */
  MulticastDeviceStatus?: string;

  /**
   * @public
   * <p>Id of the multicast group.</p>
   */
  McGroupId?: number;
}

/**
 * @public
 */
export interface ListWirelessDevicesResponse {
  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the wireless device.</p>
   */
  WirelessDeviceList?: WirelessDeviceStatistics[];
}

/**
 * @public
 */
export interface ListWirelessGatewaysRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about a wireless gateway's operation.</p>
 */
export interface WirelessGatewayStatistics {
  /**
   * @public
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of the wireless gateway reporting the data.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>LoRaWAN gateway info.</p>
   */
  LoRaWAN?: LoRaWANGateway;

  /**
   * @public
   * <p>The date and time when the most recent uplink was received.</p>
   *          <note>
   *             <p>This value is only valid for 3 months.</p>
   *          </note>
   */
  LastUplinkReceivedAt?: string;
}

/**
 * @public
 */
export interface ListWirelessGatewaysResponse {
  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ID of the wireless gateway.</p>
   */
  WirelessGatewayList?: WirelessGatewayStatistics[];
}

/**
 * @public
 * @enum
 */
export const WirelessGatewayTaskDefinitionType = {
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type WirelessGatewayTaskDefinitionType =
  (typeof WirelessGatewayTaskDefinitionType)[keyof typeof WirelessGatewayTaskDefinitionType];

/**
 * @public
 */
export interface ListWirelessGatewayTaskDefinitionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in this operation.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <b>null</b> to receive the first set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A filter to list only the wireless gateway task definitions that use this task
   *             definition type.</p>
   */
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType;
}

/**
 * @public
 * <p>LoRaWANUpdateGatewayTaskEntry object.</p>
 */
export interface LoRaWANUpdateGatewayTaskEntry {
  /**
   * @public
   * <p>The version of the gateways that should receive the update.</p>
   */
  CurrentVersion?: LoRaWANGatewayVersion;

  /**
   * @public
   * <p>The firmware version to update the gateway to.</p>
   */
  UpdateVersion?: LoRaWANGatewayVersion;
}

/**
 * @public
 * <p>UpdateWirelessGatewayTaskEntry object.</p>
 */
export interface UpdateWirelessGatewayTaskEntry {
  /**
   * @public
   * <p>The ID of the new wireless gateway task entry.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The properties that relate to the LoRaWAN wireless gateway.</p>
   */
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry;

  /**
   * @public
   * <p>The Amazon Resource Name of the resource.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ListWirelessGatewayTaskDefinitionsResponse {
  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of task definitions.</p>
   */
  TaskDefinitions?: UpdateWirelessGatewayTaskEntry[];
}

/**
 * @public
 * <p>Information about the Semtech GNSS solver configuration.</p>
 */
export interface SemtechGnssConfiguration {
  /**
   * @public
   * <p>The status indicating whether the solver is enabled.</p>
   */
  Status: PositionConfigurationStatus | undefined;

  /**
   * @public
   * <p>Whether forward error correction is enabled.</p>
   */
  Fec: PositionConfigurationFec | undefined;
}

/**
 * @public
 * <p>The wrapper for position solver configurations.</p>
 */
export interface PositionSolverConfigurations {
  /**
   * @public
   * <p>The Semtech GNSS solver configuration object.</p>
   */
  SemtechGnss?: SemtechGnssConfiguration;
}

/**
 * @public
 */
export interface PutPositionConfigurationRequest {
  /**
   * @public
   * <p>Resource identifier used to update the position configuration.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>Resource type of the resource for which you want to update the position
   *             configuration.</p>
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * @public
   * <p>The positioning solvers used to update the position configuration of the
   *             resource.</p>
   */
  Solvers?: PositionSolverConfigurations;

  /**
   * @public
   * <p>The position data destination that describes the AWS IoT rule that processes the
   *             device's position data for use by AWS IoT Core for LoRaWAN.</p>
   */
  Destination?: string;
}

/**
 * @public
 */
export interface PutPositionConfigurationResponse {}

/**
 * @public
 */
export interface PutResourceLogLevelRequest {
  /**
   * @public
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID.
   *             For a wireless gateway, it is the wireless gateway ID.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or
   *                 <code>WirelessGateway</code>.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   */
  LogLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface PutResourceLogLevelResponse {}

/**
 * @public
 */
export interface ResetAllResourceLogLevelsRequest {}

/**
 * @public
 */
export interface ResetAllResourceLogLevelsResponse {}

/**
 * @public
 */
export interface ResetResourceLogLevelRequest {
  /**
   * @public
   * <p>The identifier of the resource. For a Wireless Device, it is the wireless device ID.
   *             For a wireless gateway, it is the wireless gateway ID.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of the resource, which can be <code>WirelessDevice</code> or
   *                 <code>WirelessGateway</code>.</p>
   */
  ResourceType: string | undefined;
}

/**
 * @public
 */
export interface ResetResourceLogLevelResponse {}

/**
 * @public
 * <p>The metadata information of the LoRaWAN multicast group.</p>
 */
export interface LoRaWANMulticastMetadata {
  /**
   * @public
   * <p>The Fport value.</p>
   */
  FPort?: number;
}

/**
 * @public
 * <p>Wireless metadata that is to be sent to multicast group.</p>
 */
export interface MulticastWirelessMetadata {
  /**
   * @public
   * <p>The metadata information of the LoRaWAN multicast group.</p>
   */
  LoRaWAN?: LoRaWANMulticastMetadata;
}

/**
 * @public
 */
export interface SendDataToMulticastGroupRequest {
  /**
   * @public
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   */
  PayloadData: string | undefined;

  /**
   * @public
   * <p>Wireless metadata that is to be sent to multicast group.</p>
   */
  WirelessMetadata: MulticastWirelessMetadata | undefined;
}

/**
 * @public
 */
export interface SendDataToMulticastGroupResponse {
  /**
   * @public
   * <p>ID of a multicast group message.</p>
   */
  MessageId?: string;
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  CUSTOM_COMMAND_ID_GET: "CUSTOM_COMMAND_ID_GET",
  CUSTOM_COMMAND_ID_NOTIFY: "CUSTOM_COMMAND_ID_NOTIFY",
  CUSTOM_COMMAND_ID_RESP: "CUSTOM_COMMAND_ID_RESP",
  CUSTOM_COMMAND_ID_SET: "CUSTOM_COMMAND_ID_SET",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * <p>Information about a Sidewalk router.</p>
 */
export interface SidewalkSendDataToDevice {
  /**
   * @public
   * <p>The sequence number.</p>
   */
  Seq?: number;

  /**
   * @public
   * <p>Sidewalk device message type. Default value is
   *             <code>CUSTOM_COMMAND_ID_NOTIFY</code>.</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>The duration of time in seconds to retry sending the ACK.</p>
   */
  AckModeRetryDurationSecs?: number;
}

/**
 * @public
 * <p>WirelessMetadata object.</p>
 */
export interface WirelessMetadata {
  /**
   * @public
   * <p>LoRaWAN device info.</p>
   */
  LoRaWAN?: LoRaWANSendDataToDevice;

  /**
   * @public
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkSendDataToDevice;
}

/**
 * @public
 */
export interface SendDataToWirelessDeviceRequest {
  /**
   * @public
   * <p>The ID of the wireless device to receive the data.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The transmit mode to use to send data to the wireless device. Can be: <code>0</code>
   *             for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).</p>
   */
  TransmitMode: number | undefined;

  /**
   * @public
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   */
  PayloadData: string | undefined;

  /**
   * @public
   * <p>Metadata about the message request.</p>
   */
  WirelessMetadata?: WirelessMetadata;
}

/**
 * @public
 */
export interface SendDataToWirelessDeviceResponse {
  /**
   * @public
   * <p>The ID of the message sent to the wireless device.</p>
   */
  MessageId?: string;
}

/**
 * @public
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * @public
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Query string used to search for wireless devices as part of the bulk associate and
   *             disassociate process.</p>
   */
  QueryString?: string;

  /**
   * @public
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * @public
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Query string used to search for wireless devices as part of the bulk associate and
   *             disassociate process.</p>
   */
  QueryString?: string;

  /**
   * @public
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}

/**
 * @public
 * <p>The LoRaWAN information used to start a FUOTA task.</p>
 */
export interface LoRaWANStartFuotaTask {
  /**
   * @public
   * <p>Start time of a FUOTA task.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 */
export interface StartFuotaTaskRequest {
  /**
   * @public
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The LoRaWAN information used to start a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANStartFuotaTask;
}

/**
 * @public
 */
export interface StartFuotaTaskResponse {}

/**
 * @public
 */
export interface StartMulticastGroupSessionRequest {
  /**
   * @public
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The LoRaWAN information used with the multicast session.</p>
   */
  LoRaWAN: LoRaWANMulticastSession | undefined;
}

/**
 * @public
 */
export interface StartMulticastGroupSessionResponse {}

/**
 * @public
 * <p>Information about an import task created for an individual Sidewalk device.</p>
 */
export interface SidewalkSingleStartImportInfo {
  /**
   * @public
   * <p>The Sidewalk manufacturing serial number (SMSN) of the device added to the import
   *             task.</p>
   */
  SidewalkManufacturingSn?: string;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskRequest {
  /**
   * @public
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             from the device in the import task that will be onboarded to AWS IoT Wireless.</p>
   */
  DestinationName: string | undefined;

  /**
   * @public
   * <p>Each resource must have a unique client request token. If you try to create a new
   *             resource with the same token as a resource that already exists, an exception occurs. If
   *             you omit this value, AWS SDKs will automatically generate a unique client
   *             request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name of the wireless device for which an import task is being started.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Sidewalk-related parameters for importing a single wireless device.</p>
   */
  Sidewalk: SidewalkSingleStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskResponse {
  /**
   * @public
   * <p>The import task ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Information about an import task created for bulk provisioning.</p>
 */
export interface SidewalkStartImportInfo {
  /**
   * @public
   * <p>The CSV file contained in an S3 bucket that's used for adding devices to an import
   *             task.</p>
   */
  DeviceCreationFile?: string;

  /**
   * @public
   * <p>The IAM role that allows AWS IoT Wireless to access the CSV file in the S3
   *             bucket.</p>
   */
  Role?: string;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskRequest {
  /**
   * @public
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             from the devices in the import task that are onboarded to AWS IoT Wireless.</p>
   */
  DestinationName: string | undefined;

  /**
   * @public
   * <p>Each resource must have a unique client request token. If you try to create a new
   *             resource with the same token as a resource that already exists, an exception occurs. If
   *             you omit this value, AWS SDKs will automatically generate a unique client
   *             request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Sidewalk-related parameters for importing wireless devices that need to be
   *             provisioned in bulk.</p>
   */
  Sidewalk: SidewalkStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskResponse {
  /**
   * @public
   * <p>The import task ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to add tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that you can use
   *             to manage a resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>The request was denied because the resource can't have any more tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>Name of the resource that exceeds maximum number of tags allowed.</p>
   */
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface TestWirelessDeviceRequest {
  /**
   * @public
   * <p>The ID of the wireless device to test.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface TestWirelessDeviceResponse {
  /**
   * @public
   * <p>The result returned by the test.</p>
   */
  Result?: string;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the keys of the tags to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * @public
   * <p>The new name of the resource.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of value in <code>Expression</code>.</p>
   */
  ExpressionType?: ExpressionType;

  /**
   * @public
   * <p>The new rule name or topic rule to send messages to.</p>
   */
  Expression?: string;

  /**
   * @public
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateDestinationResponse {}

/**
 * @public
 */
export interface UpdateEventConfigurationByResourceTypesRequest {
  /**
   * @public
   * <p>Device registration state resource type event configuration object for enabling and
   *             disabling wireless gateway topic.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * @public
   * <p>Proximity resource type event configuration object for enabling and disabling wireless
   *             gateway topic.</p>
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * @public
   * <p>Join resource type event configuration object for enabling and disabling wireless
   *             device topic.</p>
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * @public
   * <p>Connection status resource type event configuration object for enabling and disabling
   *             wireless gateway topic.</p>
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;

  /**
   * @public
   * <p>Message delivery status resource type event configuration object for enabling and
   *             disabling wireless device topic.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}

/**
 * @public
 */
export interface UpdateEventConfigurationByResourceTypesResponse {}

/**
 * @public
 */
export interface UpdateFuotaTaskRequest {
  /**
   * @public
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of a FUOTA task.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANFuotaTask;

  /**
   * @public
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA
   *             task.</p>
   */
  FirmwareUpdateImage?: string;

  /**
   * @public
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateRole?: string;

  /**
   * @public
   * <p>The percentage of the added fragments that are redundant. For example, if the size of
   *             the firmware image file is 100 bytes and the fragment size is 10 bytes, with
   *                 <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments
   *             is (100 / 10) + (100 / 10 * 50%) = 15.</p>
   */
  RedundancyPercent?: number;

  /**
   * @public
   * <p>The size of each fragment in bytes. This parameter is supported only for FUOTA tasks
   *             with multicast groups.</p>
   */
  FragmentSizeBytes?: number;

  /**
   * @public
   * <p>The interval for sending fragments in milliseconds, rounded to the nearest
   *             second.</p>
   *          <note>
   *             <p>This interval only determines the timing for when the Cloud sends down the
   *                 fragments to yor device. There can be a delay for when your device will receive
   *                 these fragments. This delay depends on the device's class and the communication
   *                 delay with the cloud.</p>
   *          </note>
   */
  FragmentIntervalMS?: number;
}

/**
 * @public
 */
export interface UpdateFuotaTaskResponse {}

/**
 * @public
 */
export interface UpdateLogLevelsByResourceTypesRequest {
  /**
   * @public
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   */
  DefaultLogLevel?: LogLevel;

  /**
   * @public
   * <p>The list of wireless device log options.</p>
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];

  /**
   * @public
   * <p>The list of wireless gateway log options.</p>
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
}

/**
 * @public
 */
export interface UpdateLogLevelsByResourceTypesResponse {}

/**
 * @public
 */
export interface UpdateMulticastGroupRequest {
  /**
   * @public
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the multicast group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   */
  LoRaWAN?: LoRaWANMulticast;
}

/**
 * @public
 */
export interface UpdateMulticastGroupResponse {}

/**
 * @public
 */
export interface UpdateNetworkAnalyzerConfigurationRequest {
  /**
   * @public
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;

  /**
   * @public
   * <p>Trace content for your wireless devices, gateways, and multicast groups.</p>
   */
  TraceContent?: TraceContent;

  /**
   * @public
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   */
  WirelessDevicesToAdd?: string[];

  /**
   * @public
   * <p>Wireless device resources to remove from the network analyzer configuration. Provide
   *             the <code>WirelessDeviceId</code> of the resources to remove in the input array.</p>
   */
  WirelessDevicesToRemove?: string[];

  /**
   * @public
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   */
  WirelessGatewaysToAdd?: string[];

  /**
   * @public
   * <p>Wireless gateway resources to remove from the network analyzer configuration. Provide
   *             the <code>WirelessGatewayId</code> of the resources to remove in the input array.</p>
   */
  WirelessGatewaysToRemove?: string[];

  /**
   * @public
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Multicast group resources to add to the network analyzer configuration. Provide the
   *             <code>MulticastGroupId</code> of the resource to add in the input array.</p>
   */
  MulticastGroupsToAdd?: string[];

  /**
   * @public
   * <p>Multicast group resources to remove from the network analyzer configuration. Provide the
   *             <code>MulticastGroupId</code> of the resources to remove in the input array.</p>
   */
  MulticastGroupsToRemove?: string[];
}

/**
 * @public
 */
export interface UpdateNetworkAnalyzerConfigurationResponse {}

/**
 * @public
 * <p>Sidewalk update.</p>
 */
export interface SidewalkUpdateAccount {
  /**
   * @public
   * <p>The new Sidewalk application server private key.</p>
   */
  AppServerPrivateKey?: string;
}

/**
 * @public
 */
export interface UpdatePartnerAccountRequest {
  /**
   * @public
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk: SidewalkUpdateAccount | undefined;

  /**
   * @public
   * <p>The ID of the partner account to update.</p>
   */
  PartnerAccountId: string | undefined;

  /**
   * @public
   * <p>The partner type.</p>
   */
  PartnerType: PartnerType | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAccountResponse {}

/**
 * @public
 */
export interface UpdatePositionRequest {
  /**
   * @public
   * <p>Resource identifier of the resource for which position is updated.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>Resource type of the resource for which position is updated.</p>
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * @public
   * <p>The position information of the resource.</p>
   */
  Position: number[] | undefined;
}

/**
 * @public
 */
export interface UpdatePositionResponse {}

/**
 * @public
 */
export interface UpdateResourceEventConfigurationRequest {
  /**
   * @public
   * <p>Resource identifier to opt in for event messaging.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   */
  IdentifierType: IdentifierType | undefined;

  /**
   * @public
   * <p>Partner type of the resource if the identifier type is
   *             <code>PartnerAccountId</code>
   *          </p>
   */
  PartnerType?: EventNotificationPartnerType;

  /**
   * @public
   * <p>Event configuration for the device registration state event.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * @public
   * <p>Event configuration for the proximity event.</p>
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * @public
   * <p>Event configuration for the join event.</p>
   */
  Join?: JoinEventConfiguration;

  /**
   * @public
   * <p>Event configuration for the connection status event.</p>
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * @public
   * <p>Event configuration for the message delivery status event.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

/**
 * @public
 */
export interface UpdateResourceEventConfigurationResponse {}

/**
 * @public
 */
export interface UpdateResourcePositionRequest {
  /**
   * @public
   * <p>The identifier of the resource for which position information is updated. It can be
   *             the wireless device ID or the wireless gateway ID, depending on the resource
   *             type.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The type of resource for which position information is updated, which can be a
   *             wireless device or a wireless gateway.</p>
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * @public
   * <p>The position information of the resource, displayed as a JSON payload. The payload
   *             uses the GeoJSON format, which a format that's used to encode geographic data
   *             structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   */
  GeoJsonPayload?: Uint8Array;
}

/**
 * @public
 */
export interface UpdateResourcePositionResponse {}

/**
 * @public
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 */
export interface UpdateAbpV1_0_x {
  /**
   * @public
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

/**
 * @public
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 */
export interface UpdateAbpV1_1 {
  /**
   * @public
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

/**
 * @public
 * <p>Object for updating the FPorts information.</p>
 */
export interface UpdateFPorts {
  /**
   * @public
   * <p>Positioning FPorts for the ClockSync, Stream, and GNSS functions.</p>
   */
  Positioning?: Positioning;

  /**
   * @public
   * <p>LoRaWAN application, which can be used for geolocation by activating
   *             positioning.</p>
   */
  Applications?: ApplicationConfig[];
}

/**
 * @public
 * <p>LoRaWAN object for update functions.</p>
 */
export interface LoRaWANUpdateDevice {
  /**
   * @public
   * <p>The ID of the device profile for the wireless device.</p>
   */
  DeviceProfileId?: string;

  /**
   * @public
   * <p>The ID of the service profile.</p>
   */
  ServiceProfileId?: string;

  /**
   * @public
   * <p>ABP device object for update APIs for v1.1</p>
   */
  AbpV1_1?: UpdateAbpV1_1;

  /**
   * @public
   * <p>ABP device object for update APIs for v1.0.x</p>
   */
  AbpV1_0_x?: UpdateAbpV1_0_x;

  /**
   * @public
   * <p>FPorts object for the positioning information of the device.</p>
   */
  FPorts?: UpdateFPorts;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceRequest {
  /**
   * @public
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the new destination for the device.</p>
   */
  DestinationName?: string;

  /**
   * @public
   * <p>The new name of the resource.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The updated wireless device's configuration.</p>
   */
  LoRaWAN?: LoRaWANUpdateDevice;

  /**
   * @public
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning
   *             information.</p>
   */
  Positioning?: PositioningConfigStatus;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceResponse {}

/**
 * @public
 * <p>Sidewalk object information for updating an import task.</p>
 */
export interface SidewalkUpdateImportInfo {
  /**
   * @public
   * <p>The CSV file contained in an S3 bucket that's used for appending devices to an
   *             existing import task.</p>
   */
  DeviceCreationFile?: string;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceImportTaskRequest {
  /**
   * @public
   * <p>The identifier of the import task to be updated.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Sidewalk-related parameters of the import task to be updated.</p>
   */
  Sidewalk: SidewalkUpdateImportInfo | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceImportTaskResponse {}

/**
 * @public
 */
export interface UpdateWirelessGatewayRequest {
  /**
   * @public
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The new name of the resource.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   */
  JoinEuiFilters?: string[][];

  /**
   * @public
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink
   *             frames.</p>
   */
  NetIdFilters?: string[];

  /**
   * @public
   * <p>The MaxEIRP value.</p>
   */
  MaxEirp?: number;
}

/**
 * @public
 */
export interface UpdateWirelessGatewayResponse {}

/**
 * @internal
 */
export const SidewalkUpdateAccountFilterSensitiveLog = (obj: SidewalkUpdateAccount): any => ({
  ...obj,
  ...(obj.AppServerPrivateKey && { AppServerPrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePartnerAccountRequestFilterSensitiveLog = (obj: UpdatePartnerAccountRequest): any => ({
  ...obj,
  ...(obj.Sidewalk && { Sidewalk: SidewalkUpdateAccountFilterSensitiveLog(obj.Sidewalk) }),
});
