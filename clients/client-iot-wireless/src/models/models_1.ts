// smithy-typescript generated code
import {
  EventNotificationPartnerType,
  ExpressionType,
  IdentifierType,
  LogLevel,
  PartnerType,
  PositioningConfigStatus,
  PositionResourceType,
} from "./enums";

import {
  ApplicationConfig,
  ConnectionStatusEventConfiguration,
  ConnectionStatusResourceTypeEventConfiguration,
  DeviceRegistrationStateEventConfiguration,
  DeviceRegistrationStateResourceTypeEventConfiguration,
  FuotaTaskLogOption,
  JoinEventConfiguration,
  JoinResourceTypeEventConfiguration,
  LoRaWANFuotaTask,
  LoRaWANMulticast,
  LoRaWANMulticastSession,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  Positioning,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  SidewalkPositioning,
  SummaryMetricConfiguration,
  Tag,
  TraceContent,
  WirelessDeviceLogOption,
  WirelessGatewayLogOption,
} from "./models_0";

/**
 * @public
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupResponse {}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Query string used to search for wireless devices as part of the bulk associate and
   *             disassociate process.</p>
   * @public
   */
  QueryString?: string | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}

/**
 * <p>The LoRaWAN information used to start a FUOTA task.</p>
 * @public
 */
export interface LoRaWANStartFuotaTask {
  /**
   * <p>Start time of a FUOTA task.</p>
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface StartFuotaTaskRequest {
  /**
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used to start a FUOTA task.</p>
   * @public
   */
  LoRaWAN?: LoRaWANStartFuotaTask | undefined;
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
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The LoRaWAN information used with the multicast session.</p>
   * @public
   */
  LoRaWAN: LoRaWANMulticastSession | undefined;
}

/**
 * @public
 */
export interface StartMulticastGroupSessionResponse {}

/**
 * <p>Information about an import task created for an individual Sidewalk device.</p>
 * @public
 */
export interface SidewalkSingleStartImportInfo {
  /**
   * <p>The Sidewalk manufacturing serial number (SMSN) of the device added to the import
   *             task.</p>
   * @public
   */
  SidewalkManufacturingSn?: string | undefined;

  /**
   * <p>The Positioning object of the Sidewalk device.</p>
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskRequest {
  /**
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             from the device in the import task that will be onboarded to AWS IoT Wireless.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to
   *             implement idempotency. It ensures that the request completes no more than one time. If
   *             you retry a request with the same token and the same parameters, the request will
   *             complete successfully. However, if you try to create a new resource using the same token
   *             but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs
   *             will automatically generate a unique client request. For more information about
   *             idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon
   *                 EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The name of the wireless device for which an import task is being started.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The integration status of the Device Location feature for Sidewalk devices.</p>
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * <p>The Sidewalk-related parameters for importing a single wireless device.</p>
   * @public
   */
  Sidewalk: SidewalkSingleStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskResponse {
  /**
   * <p>The import task ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about an import task created for bulk provisioning.</p>
 * @public
 */
export interface SidewalkStartImportInfo {
  /**
   * <p>The CSV file contained in an S3 bucket that's used for adding devices to an import
   *             task.</p>
   * @public
   */
  DeviceCreationFile?: string | undefined;

  /**
   * <p>The IAM role that allows AWS IoT Wireless to access the CSV file in the S3
   *             bucket.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The Positioning object of the Sidewalk device.</p>
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskRequest {
  /**
   * <p>The name of the Sidewalk destination that describes the IoT rule to route messages
   *             from the devices in the import task that are onboarded to AWS IoT Wireless.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>Each resource must have a unique client request token. The client token is used to
   *             implement idempotency. It ensures that the request completes no more than one time. If
   *             you retry a request with the same token and the same parameters, the request will
   *             complete successfully. However, if you try to create a new resource using the same token
   *             but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs
   *             will automatically generate a unique client request. For more information about
   *             idempotency, see <a href="https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html">Ensuring idempotency in Amazon
   *                 EC2 API requests</a>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tag to attach to the specified resource. Tags are metadata that you can use to
   *             manage a resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The integration status of the Device Location feature for Sidewalk devices.</p>
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * <p>The Sidewalk-related parameters for importing wireless devices that need to be
   *             provisioned in bulk.</p>
   * @public
   */
  Sidewalk: SidewalkStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskResponse {
  /**
   * <p>The import task ID.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the import task.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that you can use
   *             to manage a resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestWirelessDeviceRequest {
  /**
   * <p>The ID of the wireless device to test.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface TestWirelessDeviceResponse {
  /**
   * <p>The result returned by the test.</p>
   * @public
   */
  Result?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to remove from the resource.</p>
   * @public
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
   * <p>The new name of the resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of value in <code>Expression</code>.</p>
   * @public
   */
  ExpressionType?: ExpressionType | undefined;

  /**
   * <p>The new rule name or topic rule to send messages to.</p>
   * @public
   */
  Expression?: string | undefined;

  /**
   * <p>A new description of the resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the IAM Role that authorizes the destination.</p>
   * @public
   */
  RoleArn?: string | undefined;
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
   * <p>Device registration state resource type event configuration object for enabling and
   *             disabling wireless gateway topic.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration | undefined;

  /**
   * <p>Proximity resource type event configuration object for enabling and disabling wireless
   *             gateway topic.</p>
   * @public
   */
  Proximity?: ProximityResourceTypeEventConfiguration | undefined;

  /**
   * <p>Join resource type event configuration object for enabling and disabling wireless
   *             device topic.</p>
   * @public
   */
  Join?: JoinResourceTypeEventConfiguration | undefined;

  /**
   * <p>Connection status resource type event configuration object for enabling and disabling
   *             wireless gateway topic.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration | undefined;

  /**
   * <p>Message delivery status resource type event configuration object for enabling and
   *             disabling wireless device topic.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusResourceTypeEventConfiguration | undefined;
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
   * <p>The ID of a FUOTA task.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of a FUOTA task.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The LoRaWAN information used with a FUOTA task.</p>
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTask | undefined;

  /**
   * <p>The S3 URI points to a firmware update image that is to be used with a FUOTA
   *             task.</p>
   * @public
   */
  FirmwareUpdateImage?: string | undefined;

  /**
   * <p>The firmware update role that is to be used with a FUOTA task.</p>
   * @public
   */
  FirmwareUpdateRole?: string | undefined;

  /**
   * <p>The percentage of the added fragments that are redundant. For example, if the size of
   *             the firmware image file is 100 bytes and the fragment size is 10 bytes, with
   *                 <code>RedundancyPercent</code> set to 50(%), the final number of encoded fragments
   *             is (100 / 10) + (100 / 10 * 50%) = 15.</p>
   * @public
   */
  RedundancyPercent?: number | undefined;

  /**
   * <p>The size of each fragment in bytes. This parameter is supported only for FUOTA tasks
   *             with multicast groups.</p>
   * @public
   */
  FragmentSizeBytes?: number | undefined;

  /**
   * <p>The interval for sending fragments in milliseconds, rounded to the nearest
   *             second.</p>
   *          <note>
   *             <p>This interval only determines the timing for when the Cloud sends down the
   *                 fragments to yor device. There can be a delay for when your device will receive
   *                 these fragments. This delay depends on the device's class and the communication
   *                 delay with the cloud.</p>
   *          </note>
   * @public
   */
  FragmentIntervalMS?: number | undefined;

  /**
   * <p>The descriptor is the metadata about the file that is transferred to the device using
   *             FUOTA, such as the software version. It is a binary field encoded in base64.</p>
   * @public
   */
  Descriptor?: string | undefined;
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
   * <p>The log level for a log message. The log levels can be disabled, or set to
   *                 <code>ERROR</code> to display less verbose logs containing only error information,
   *             or to <code>INFO</code> for more detailed logs.</p>
   * @public
   */
  DefaultLogLevel?: LogLevel | undefined;

  /**
   * <p>The list of FUOTA task log options.</p>
   * @public
   */
  FuotaTaskLogOptions?: FuotaTaskLogOption[] | undefined;

  /**
   * <p>The list of wireless device log options.</p>
   * @public
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined;

  /**
   * <p>The list of wireless gateway log options.</p>
   * @public
   */
  WirelessGatewayLogOptions?: WirelessGatewayLogOption[] | undefined;
}

/**
 * @public
 */
export interface UpdateLogLevelsByResourceTypesResponse {}

/**
 * @public
 */
export interface UpdateMetricConfigurationRequest {
  /**
   * <p>The value to be used to set summary metric configuration.</p>
   * @public
   */
  SummaryMetric?: SummaryMetricConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMetricConfigurationResponse {}

/**
 * @public
 */
export interface UpdateMulticastGroupRequest {
  /**
   * <p>The ID of the multicast group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the multicast group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The LoRaWAN information that is to be used with the multicast group.</p>
   * @public
   */
  LoRaWAN?: LoRaWANMulticast | undefined;
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
   * <p>Name of the network analyzer configuration.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Trace content for your wireless devices, gateways, and multicast groups.</p>
   * @public
   */
  TraceContent?: TraceContent | undefined;

  /**
   * <p>Wireless device resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessDeviceId</code> of the resource to add in the input array.</p>
   * @public
   */
  WirelessDevicesToAdd?: string[] | undefined;

  /**
   * <p>Wireless device resources to remove from the network analyzer configuration. Provide
   *             the <code>WirelessDeviceId</code> of the resources to remove in the input array.</p>
   * @public
   */
  WirelessDevicesToRemove?: string[] | undefined;

  /**
   * <p>Wireless gateway resources to add to the network analyzer configuration. Provide the
   *                 <code>WirelessGatewayId</code> of the resource to add in the input array.</p>
   * @public
   */
  WirelessGatewaysToAdd?: string[] | undefined;

  /**
   * <p>Wireless gateway resources to remove from the network analyzer configuration. Provide
   *             the <code>WirelessGatewayId</code> of the resources to remove in the input array.</p>
   * @public
   */
  WirelessGatewaysToRemove?: string[] | undefined;

  /**
   * <p>The description of the new resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Multicast group resources to add to the network analyzer configuration. Provide the
   *                 <code>MulticastGroupId</code> of the resource to add in the input array.</p>
   * @public
   */
  MulticastGroupsToAdd?: string[] | undefined;

  /**
   * <p>Multicast group resources to remove from the network analyzer configuration. Provide
   *             the <code>MulticastGroupId</code> of the resources to remove in the input array.</p>
   * @public
   */
  MulticastGroupsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkAnalyzerConfigurationResponse {}

/**
 * <p>Sidewalk update.</p>
 * @public
 */
export interface SidewalkUpdateAccount {
  /**
   * <p>The new Sidewalk application server private key.</p>
   * @public
   */
  AppServerPrivateKey?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAccountRequest {
  /**
   * <p>The Sidewalk account credentials.</p>
   * @public
   */
  Sidewalk: SidewalkUpdateAccount | undefined;

  /**
   * <p>The ID of the partner account to update.</p>
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * <p>The partner type.</p>
   * @public
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
   * <p>Resource identifier of the resource for which position is updated.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>Resource type of the resource for which position is updated.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * <p>The position information of the resource.</p>
   * @public
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
   * <p>Resource identifier to opt in for event messaging.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Identifier type of the particular resource identifier for event configuration.</p>
   * @public
   */
  IdentifierType: IdentifierType | undefined;

  /**
   * <p>Partner type of the resource if the identifier type is
   *             <code>PartnerAccountId</code>
   *          </p>
   * @public
   */
  PartnerType?: EventNotificationPartnerType | undefined;

  /**
   * <p>Event configuration for the device registration state event.</p>
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration | undefined;

  /**
   * <p>Event configuration for the proximity event.</p>
   * @public
   */
  Proximity?: ProximityEventConfiguration | undefined;

  /**
   * <p>Event configuration for the join event.</p>
   * @public
   */
  Join?: JoinEventConfiguration | undefined;

  /**
   * <p>Event configuration for the connection status event.</p>
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration | undefined;

  /**
   * <p>Event configuration for the message delivery status event.</p>
   * @public
   */
  MessageDeliveryStatus?: MessageDeliveryStatusEventConfiguration | undefined;
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
   * <p>The identifier of the resource for which position information is updated. It can be
   *             the wireless device ID or the wireless gateway ID, depending on the resource
   *             type.</p>
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * <p>The type of resource for which position information is updated, which can be a
   *             wireless device or a wireless gateway.</p>
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * <p>The position information of the resource, displayed as a JSON payload. The payload
   *             uses the GeoJSON format, which a format that's used to encode geographic data
   *             structures. For more information, see <a href="https://geojson.org/">GeoJSON</a>.</p>
   * @public
   */
  GeoJsonPayload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateResourcePositionResponse {}

/**
 * <p>ABP device object for LoRaWAN specification v1.0.x</p>
 * @public
 */
export interface UpdateAbpV1_0_x {
  /**
   * <p>The FCnt init value.</p>
   * @public
   */
  FCntStart?: number | undefined;
}

/**
 * <p>ABP device object for LoRaWAN specification v1.1</p>
 * @public
 */
export interface UpdateAbpV1_1 {
  /**
   * <p>The FCnt init value.</p>
   * @public
   */
  FCntStart?: number | undefined;
}

/**
 * <p>Object for updating the FPorts information.</p>
 * @public
 */
export interface UpdateFPorts {
  /**
   * <p>Positioning FPorts for the ClockSync, Stream, and GNSS functions.</p>
   * @public
   */
  Positioning?: Positioning | undefined;

  /**
   * <p>LoRaWAN application, which can be used for geolocation by activating
   *             positioning.</p>
   * @public
   */
  Applications?: ApplicationConfig[] | undefined;
}

/**
 * <p>LoRaWAN object for update functions.</p>
 * @public
 */
export interface LoRaWANUpdateDevice {
  /**
   * <p>The ID of the device profile for the wireless device.</p>
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * <p>The ID of the service profile.</p>
   * @public
   */
  ServiceProfileId?: string | undefined;

  /**
   * <p>ABP device object for update APIs for v1.1</p>
   * @public
   */
  AbpV1_1?: UpdateAbpV1_1 | undefined;

  /**
   * <p>ABP device object for update APIs for v1.0.x</p>
   * @public
   */
  AbpV1_0_x?: UpdateAbpV1_0_x | undefined;

  /**
   * <p>FPorts object for the positioning information of the device.</p>
   * @public
   */
  FPorts?: UpdateFPorts | undefined;
}

/**
 * <p>Sidewalk object for updating a wireless device.</p>
 * @public
 */
export interface SidewalkUpdateWirelessDevice {
  /**
   * <p>The Positioning object of the Sidewalk device.</p>
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceRequest {
  /**
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the new destination for the device.</p>
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * <p>The new name of the resource.</p>
   *          <note>
   *             <p>The following special characters aren't accepted: <code><>^#~$</code>
   *             </p>
   *          </note>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A new description of the resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The updated wireless device's configuration.</p>
   * @public
   */
  LoRaWAN?: LoRaWANUpdateDevice | undefined;

  /**
   * <p>The integration status of the Device Location feature for LoRaWAN and Sidewalk devices.</p>
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * <p>The updated sidewalk properties.</p>
   * @public
   */
  Sidewalk?: SidewalkUpdateWirelessDevice | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceResponse {}

/**
 * <p>Sidewalk object information for updating an import task.</p>
 * @public
 */
export interface SidewalkUpdateImportInfo {
  /**
   * <p>The CSV file contained in an S3 bucket that's used for appending devices to an
   *             existing import task.</p>
   * @public
   */
  DeviceCreationFile?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceImportTaskRequest {
  /**
   * <p>The identifier of the import task to be updated.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Sidewalk-related parameters of the import task to be updated.</p>
   * @public
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
   * <p>The ID of the resource to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The new name of the resource.</p>
   *          <note>
   *             <p>The following special characters aren't accepted: <code><>^#~$</code>
   *             </p>
   *          </note>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A new description of the resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.</p>
   * @public
   */
  JoinEuiFilters?: string[][] | undefined;

  /**
   * <p>A list of NetId values that are used by LoRa gateways to filter the uplink
   *             frames.</p>
   * @public
   */
  NetIdFilters?: string[] | undefined;

  /**
   * <p>The MaxEIRP value.</p>
   * @public
   */
  MaxEirp?: number | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessGatewayResponse {}
