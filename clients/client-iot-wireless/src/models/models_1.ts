// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { IoTWirelessServiceException as __BaseException } from "./IoTWirelessServiceException";
import {
  ApplicationConfig,
  ConnectionStatusEventConfiguration,
  ConnectionStatusResourceTypeEventConfiguration,
  DeviceRegistrationStateEventConfiguration,
  DeviceRegistrationStateResourceTypeEventConfiguration,
  EventNotificationPartnerType,
  ExpressionType,
  IdentifierType,
  JoinEventConfiguration,
  JoinResourceTypeEventConfiguration,
  LogLevel,
  LoRaWANFuotaTask,
  LoRaWANMulticast,
  LoRaWANMulticastSession,
  LoRaWANSendDataToDevice,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  MulticastWirelessMetadata,
  PartnerType,
  Positioning,
  PositioningConfigStatus,
  PositionResourceType,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  Tag,
  TraceContent,
  WirelessDeviceLogOption,
  WirelessGatewayLogOption,
} from "./models_0";

export interface SendDataToMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   */
  PayloadData: string | undefined;

  /**
   * <p>Wireless metadata that is to be sent to multicast group.</p>
   */
  WirelessMetadata: MulticastWirelessMetadata | undefined;
}

export interface SendDataToMulticastGroupResponse {
  /**
   * <p>ID of a multicast group message.</p>
   */
  MessageId?: string;
}

export enum MessageType {
  CUSTOM_COMMAND_ID_GET = "CUSTOM_COMMAND_ID_GET",
  CUSTOM_COMMAND_ID_NOTIFY = "CUSTOM_COMMAND_ID_NOTIFY",
  CUSTOM_COMMAND_ID_RESP = "CUSTOM_COMMAND_ID_RESP",
  CUSTOM_COMMAND_ID_SET = "CUSTOM_COMMAND_ID_SET",
}

/**
 * <p>Information about a Sidewalk router.</p>
 */
export interface SidewalkSendDataToDevice {
  /**
   * <p>The sequence number.</p>
   */
  Seq?: number;

  /**
   * <p>Sidewalk device message type. Default value is <code>CUSTOM_COMMAND_ID_NOTIFY</code>.</p>
   */
  MessageType?: MessageType | string;

  /**
   * <p>The duration of time in seconds to retry sending the ACK.</p>
   */
  AckModeRetryDurationSecs?: number;
}

/**
 * <p>WirelessMetadata object.</p>
 */
export interface WirelessMetadata {
  /**
   * <p>LoRaWAN device info.</p>
   */
  LoRaWAN?: LoRaWANSendDataToDevice;

  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk?: SidewalkSendDataToDevice;
}

export interface SendDataToWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to receive the data.</p>
   */
  Id: string | undefined;

  /**
   * <p>The transmit mode to use to send data to the wireless device. Can be: <code>0</code> for UM (unacknowledge mode) or <code>1</code> for AM (acknowledge mode).</p>
   */
  TransmitMode: number | undefined;

  /**
   * <p>The binary to be sent to the end device, encoded in base64.</p>
   */
  PayloadData: string | undefined;

  /**
   * <p>Metadata about the message request.</p>
   */
  WirelessMetadata?: WirelessMetadata;
}

export interface SendDataToWirelessDeviceResponse {
  /**
   * <p>The ID of the message sent to the wireless device.</p>
   */
  MessageId?: string;
}

export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and disassociate process.</p>
   */
  QueryString?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {}

export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and disassociate process.</p>
   */
  QueryString?: string;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags?: Tag[];
}

export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}

/**
 * <p>The LoRaWAN information used to start a FUOTA task.</p>
 */
export interface LoRaWANStartFuotaTask {
  /**
   * <p>Start time of a FUOTA task.</p>
   */
  StartTime?: Date;
}

export interface StartFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used to start a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANStartFuotaTask;
}

export interface StartFuotaTaskResponse {}

export interface StartMulticastGroupSessionRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   */
  LoRaWAN: LoRaWANMulticastSession | undefined;
}

export interface StartMulticastGroupSessionResponse {}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>The request was denied because the resource can't have any more tags.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
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

export interface TestWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to test.</p>
   */
  Id: string | undefined;
}

export interface TestWirelessDeviceResponse {
  /**
   * <p>The result returned by the test.</p>
   */
  Result?: string;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDestinationRequest {
  /**
   * <p>The new name of the resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   */
  ExpressionType?: ExpressionType | string;

  /**
   * <p>The new rule name or topic rule to send messages to.</p>
   */
  Expression?: string;

  /**
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   */
  RoleArn?: string;
}

export interface UpdateDestinationResponse {}

export interface UpdateEventConfigurationByResourceTypesRequest {
  /**
   * <p>Device registration state resource type event configuration object for enabling and disabling wireless
   *             gateway topic.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration;

  /**
   * <p>Proximity resource type event configuration object for enabling and disabling wireless gateway topic.</p>
   */
  Proximity?: ProximityResourceTypeEventConfiguration;

  /**
   * <p>Join resource type event configuration object for enabling and disabling wireless device topic.</p>
   */
  Join?: JoinResourceTypeEventConfiguration;

  /**
   * <p>Connection status resource type event configuration object for enabling and disabling wireless gateway topic.</p>
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration;

  /**
   * <p>Message delivery status resource type event configuration object for enabling and disabling wireless device topic.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration;
}

export interface UpdateEventConfigurationByResourceTypesResponse {}

export interface UpdateFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of a FUOTA task.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   */
  LoRaWAN?: LoRaWANFuotaTask;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateImage?: string;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   */
  FirmwareUpdateRole?: string;
}

export interface UpdateFuotaTaskResponse {}

export interface UpdateLogLevelsByResourceTypesRequest {
  /**
   * <p>The log level for a log message. The log levels can be disabled, or set to <code>ERROR</code> to display
   *             less verbose logs containing only error information, or to <code>INFO</code> for more detailed logs.</p>
   */
  DefaultLogLevel?: LogLevel | string;

  /**
   * <p>The list of wireless device log options.</p>
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[];

  /**
   * <p>The list of wireless gateway log options.</p>
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[];
}

export interface UpdateLogLevelsByResourceTypesResponse {}

export interface UpdateMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the multicast group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;

  /**
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   */
  LoRaWAN?: LoRaWANMulticast;
}

export interface UpdateMulticastGroupResponse {}

export interface UpdateNetworkAnalyzerConfigurationRequest {
  /**
   * <p>Name of the network analyzer configuration.</p>
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Trace content for your wireless gateway and wireless device resources.</p>
   */
  TraceContent?: TraceContent;

  /**
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the
   *             <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   */
  WirelessDevicesToAdd?: string[];

  /**
   * <p>Wireless device resources to remove from the network analyzer configuration. Provide the
   *             <code>WirelessDeviceId</code> of the resources to remove in the input array.</p>
   */
  WirelessDevicesToRemove?: string[];

  /**
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the
   *             <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   */
  WirelessGatewaysToAdd?: string[];

  /**
   * <p>Wireless gateway resources to remove from the network analyzer configuration. Provide the
   *             <code>WirelessGatewayId</code> of the resources to remove in the input array.</p>
   */
  WirelessGatewaysToRemove?: string[];

  /**
   * <p>The description of the new resource.</p>
   */
  Description?: string;
}

export interface UpdateNetworkAnalyzerConfigurationResponse {}

/**
 * <p>Sidewalk update.</p>
 */
export interface SidewalkUpdateAccount {
  /**
   * <p>The new Sidewalk application server private key.</p>
   */
  AppServerPrivateKey?: string;
}

export interface UpdatePartnerAccountRequest {
  /**
   * <p>The Sidewalk account credentials.</p>
   */
  Sidewalk: SidewalkUpdateAccount | undefined;

  /**
   * <p>The ID of the partner account to update.</p>
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   */
  PartnerType: PartnerType | string | undefined;
}

export interface UpdatePartnerAccountResponse {}

export interface UpdatePositionRequest {
  /**
   * <p>Resource identifier of the resource for which position is updated.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position is updated.</p>
   */
  ResourceType: PositionResourceType | string | undefined;

  /**
   * <p>The position information of the resource.</p>
   */
  Position: number[] | undefined;
}

export interface UpdatePositionResponse {}

export interface UpdateResourceEventConfigurationRequest {
  /**
   * <p>Resource identifier to opt in for event messaging.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   */
  IdentifierType: IdentifierType | string | undefined;

  /**
   * <p>Partner type of the resource if the identifier type is <code>PartnerAccountId</code>
   *          </p>
   */
  PartnerType?: EventNotificationPartnerType | string;

  /**
   * <p>Event configuration for the device registration state event.</p>
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration;

  /**
   * <p>Event configuration for the proximity event.</p>
   */
  Proximity?: ProximityEventConfiguration;

  /**
   * <p>Event configuration for the join event.</p>
   */
  Join?: JoinEventConfiguration;

  /**
   * <p>Event configuration for the connection status event.</p>
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration;

  /**
   * <p>Event configuration for the message delivery status event.</p>
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration;
}

export interface UpdateResourceEventConfigurationResponse {}

export interface UpdateResourcePositionRequest {
  /**
   * <p>The identifier of the resource for which position information is updated. It can be the wireless
   *            device ID or the wireless gateway ID depending on the resource type.</p>
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of resource for which position information is updated, which can be a wireless device or a
   *            wireless gateway.</p>
   */
  ResourceType: PositionResourceType | string | undefined;

  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format,
   *            which a format that's used to encode geographic data structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   */
  GeoJsonPayload?: Uint8Array;
}

export interface UpdateResourcePositionResponse {}

/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 */
export interface UpdateAbpV1_0_x {
  /**
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 */
export interface UpdateAbpV1_1 {
  /**
   * <p>The FCnt init value.</p>
   */
  FCntStart?: number;
}

/**
 * <p>Object for updating the FPorts information.</p>
 */
export interface UpdateFPorts {
  /**
   * <p>Positioning FPorts for the ClockSync, Stream, and GNSS functions.</p>
   */
  Positioning?: Positioning;

  /**
   * <p>LoRaWAN application, which can be used for geolocation by activating positioning.</p>
   */
  Applications?: ApplicationConfig[];
}

/**
 * <p>LoRaWAN object for update functions.</p>
 */
export interface LoRaWANUpdateDevice {
  /**
   * <p>The ID of the device profile for the wireless device.</p>
   */
  DeviceProfileId?: string;

  /**
   * <p>The ID of the service profile.</p>
   */
  ServiceProfileId?: string;

  /**
   * <p>ABP device object for update APIs for v1.1</p>
   */
  AbpV1_1?: UpdateAbpV1_1;

  /**
   * <p>ABP device object for update APIs for v1.0.x</p>
   */
  AbpV1_0_x?: UpdateAbpV1_0_x;

  /**
   * <p>FPorts object for the positioning information of the device.</p>
   */
  FPorts?: UpdateFPorts;
}

export interface UpdateWirelessDeviceRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the new destination for the device.</p>
   */
  DestinationName?: string;

  /**
   * <p>The new name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>The updated wireless device's configuration.</p>
   */
  LoRaWAN?: LoRaWANUpdateDevice;

  /**
   * <p>FPort values for the GNSS, stream, and ClockSync functions of the positioning information.</p>
   */
  Positioning?: PositioningConfigStatus | string;
}

export interface UpdateWirelessDeviceResponse {}

export interface UpdateWirelessGatewayRequest {
  /**
   * <p>The ID of the resource to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The new name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>A new description of the resource.</p>
   */
  Description?: string;

  /**
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   */
  JoinEuiFilters?: string[][];

  /**
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink frames.</p>
   */
  NetIdFilters?: string[];
}

export interface UpdateWirelessGatewayResponse {}

/**
 * @internal
 */
export const SendDataToMulticastGroupRequestFilterSensitiveLog = (obj: SendDataToMulticastGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendDataToMulticastGroupResponseFilterSensitiveLog = (obj: SendDataToMulticastGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SidewalkSendDataToDeviceFilterSensitiveLog = (obj: SidewalkSendDataToDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WirelessMetadataFilterSensitiveLog = (obj: WirelessMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendDataToWirelessDeviceRequestFilterSensitiveLog = (obj: SendDataToWirelessDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendDataToWirelessDeviceResponseFilterSensitiveLog = (obj: SendDataToWirelessDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBulkAssociateWirelessDeviceWithMulticastGroupRequestFilterSensitiveLog = (
  obj: StartBulkAssociateWirelessDeviceWithMulticastGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBulkAssociateWirelessDeviceWithMulticastGroupResponseFilterSensitiveLog = (
  obj: StartBulkAssociateWirelessDeviceWithMulticastGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBulkDisassociateWirelessDeviceFromMulticastGroupRequestFilterSensitiveLog = (
  obj: StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBulkDisassociateWirelessDeviceFromMulticastGroupResponseFilterSensitiveLog = (
  obj: StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANStartFuotaTaskFilterSensitiveLog = (obj: LoRaWANStartFuotaTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFuotaTaskRequestFilterSensitiveLog = (obj: StartFuotaTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartFuotaTaskResponseFilterSensitiveLog = (obj: StartFuotaTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMulticastGroupSessionRequestFilterSensitiveLog = (obj: StartMulticastGroupSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMulticastGroupSessionResponseFilterSensitiveLog = (obj: StartMulticastGroupSessionResponse): any => ({
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
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestWirelessDeviceRequestFilterSensitiveLog = (obj: TestWirelessDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestWirelessDeviceResponseFilterSensitiveLog = (obj: TestWirelessDeviceResponse): any => ({
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
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDestinationRequestFilterSensitiveLog = (obj: UpdateDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDestinationResponseFilterSensitiveLog = (obj: UpdateDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventConfigurationByResourceTypesRequestFilterSensitiveLog = (
  obj: UpdateEventConfigurationByResourceTypesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventConfigurationByResourceTypesResponseFilterSensitiveLog = (
  obj: UpdateEventConfigurationByResourceTypesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFuotaTaskRequestFilterSensitiveLog = (obj: UpdateFuotaTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFuotaTaskResponseFilterSensitiveLog = (obj: UpdateFuotaTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLogLevelsByResourceTypesRequestFilterSensitiveLog = (
  obj: UpdateLogLevelsByResourceTypesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLogLevelsByResourceTypesResponseFilterSensitiveLog = (
  obj: UpdateLogLevelsByResourceTypesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMulticastGroupRequestFilterSensitiveLog = (obj: UpdateMulticastGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMulticastGroupResponseFilterSensitiveLog = (obj: UpdateMulticastGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkAnalyzerConfigurationRequestFilterSensitiveLog = (
  obj: UpdateNetworkAnalyzerConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNetworkAnalyzerConfigurationResponseFilterSensitiveLog = (
  obj: UpdateNetworkAnalyzerConfigurationResponse
): any => ({
  ...obj,
});

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

/**
 * @internal
 */
export const UpdatePartnerAccountResponseFilterSensitiveLog = (obj: UpdatePartnerAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePositionRequestFilterSensitiveLog = (obj: UpdatePositionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePositionResponseFilterSensitiveLog = (obj: UpdatePositionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceEventConfigurationRequestFilterSensitiveLog = (
  obj: UpdateResourceEventConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceEventConfigurationResponseFilterSensitiveLog = (
  obj: UpdateResourceEventConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourcePositionRequestFilterSensitiveLog = (obj: UpdateResourcePositionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourcePositionResponseFilterSensitiveLog = (obj: UpdateResourcePositionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAbpV1_0_xFilterSensitiveLog = (obj: UpdateAbpV1_0_x): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAbpV1_1FilterSensitiveLog = (obj: UpdateAbpV1_1): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFPortsFilterSensitiveLog = (obj: UpdateFPorts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoRaWANUpdateDeviceFilterSensitiveLog = (obj: LoRaWANUpdateDevice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWirelessDeviceRequestFilterSensitiveLog = (obj: UpdateWirelessDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWirelessDeviceResponseFilterSensitiveLog = (obj: UpdateWirelessDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWirelessGatewayRequestFilterSensitiveLog = (obj: UpdateWirelessGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWirelessGatewayResponseFilterSensitiveLog = (obj: UpdateWirelessGatewayResponse): any => ({
  ...obj,
});
