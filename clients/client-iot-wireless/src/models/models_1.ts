// smithy-typescript generated code
import type {
  EventNotificationPartnerType,
  ExpressionType,
  IdentifierType,
  LogLevel,
  MessageType,
  PartnerType,
  PositioningConfigStatus,
  PositionResourceType,
} from "./enums";
import type {
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
  LoRaWANSendDataToDevice,
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
 * Information about a Sidewalk router.
 *
 * @public
 */
export interface SidewalkSendDataToDevice {
  /**
   * The sequence number.
   *
   * @public
   */
  Seq?: number | undefined;

  /**
   * Sidewalk device message type. Default value is `CUSTOM_COMMAND_ID_NOTIFY`.
   *
   * @public
   */
  MessageType?: MessageType | undefined;

  /**
   * The duration of time in seconds to retry sending the ACK.
   *
   * @public
   */
  AckModeRetryDurationSecs?: number | undefined;
}

/**
 * WirelessMetadata object.
 *
 * @public
 */
export interface WirelessMetadata {
  /**
   * LoRaWAN device info.
   *
   * @public
   */
  LoRaWAN?: LoRaWANSendDataToDevice | undefined;

  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk?: SidewalkSendDataToDevice | undefined;
}

/**
 * @public
 */
export interface SendDataToWirelessDeviceRequest {
  /**
   * The ID of the wireless device to receive the data.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The transmit mode to use to send data to the wireless device. Can be: `0` for UM (unacknowledge mode) or `1` for AM (acknowledge mode).
   *
   * @public
   */
  TransmitMode: number | undefined;

  /**
   * The binary to be sent to the end device, encoded in base64.
   *
   * @public
   */
  PayloadData: string | undefined;

  /**
   * Metadata about the message request.
   *
   * @public
   */
  WirelessMetadata?: WirelessMetadata | undefined;
}

/**
 * @public
 */
export interface SendDataToWirelessDeviceResponse {
  /**
   * The ID of the message sent to the wireless device.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface StartBulkAssociateWirelessDeviceWithMulticastGroupRequest {
  /**
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
   *
   * @public
   */
  QueryString?: string | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
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
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Query string used to search for wireless devices as part of the bulk associate and disassociate process.
   *
   * @public
   */
  QueryString?: string | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse {}

/**
 * The LoRaWAN information used to start a FUOTA task.
 *
 * @public
 */
export interface LoRaWANStartFuotaTask {
  /**
   * Start time of a FUOTA task.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * @public
 */
export interface StartFuotaTaskRequest {
  /**
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The LoRaWAN information used to start a FUOTA task.
   *
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
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The LoRaWAN information used with the multicast session.
   *
   * @public
   */
  LoRaWAN: LoRaWANMulticastSession | undefined;
}

/**
 * @public
 */
export interface StartMulticastGroupSessionResponse {}

/**
 * Information about an import task created for an individual Sidewalk device.
 *
 * @public
 */
export interface SidewalkSingleStartImportInfo {
  /**
   * The Sidewalk manufacturing serial number (SMSN) of the device added to the import task.
   *
   * @public
   */
  SidewalkManufacturingSn?: string | undefined;

  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskRequest {
  /**
   * The name of the Sidewalk destination that describes the IoT rule to route messages from the device in the import task that will be onboarded to AWS IoT Wireless.
   *
   * @public
   */
  DestinationName: string | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the wireless device for which an import task is being started.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The integration status of the Device Location feature for Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The Sidewalk-related parameters for importing a single wireless device.
   *
   * @public
   */
  Sidewalk: SidewalkSingleStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartSingleWirelessDeviceImportTaskResponse {
  /**
   * The import task ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the import task.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Information about an import task created for bulk provisioning.
 *
 * @public
 */
export interface SidewalkStartImportInfo {
  /**
   * The CSV file contained in an S3 bucket that's used for adding devices to an import task.
   *
   * @public
   */
  DeviceCreationFile?: string | undefined;

  /**
   * The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskRequest {
  /**
   * The name of the Sidewalk destination that describes the IoT rule to route messages from the devices in the import task that are onboarded to AWS IoT Wireless.
   *
   * @public
   */
  DestinationName: string | undefined;

  /**
   * Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see [Ensuring idempotency in Amazon EC2 API requests](https://docs.aws.amazon.com/ec2/latest/devguide/ec2-api-idempotency.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The integration status of the Device Location feature for Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The Sidewalk-related parameters for importing wireless devices that need to be provisioned in bulk.
   *
   * @public
   */
  Sidewalk: SidewalkStartImportInfo | undefined;
}

/**
 * @public
 */
export interface StartWirelessDeviceImportTaskResponse {
  /**
   * The import task ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the import task.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to add tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.
   *
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
   * The ID of the wireless device to test.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface TestWirelessDeviceResponse {
  /**
   * The result returned by the test.
   *
   * @public
   */
  Result?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of the keys of the tags to remove from the resource.
   *
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
   * The new name of the resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of value in `Expression`.
   *
   * @public
   */
  ExpressionType?: ExpressionType | undefined;

  /**
   * The new rule name or topic rule to send messages to.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * A new description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM Role that authorizes the destination.
   *
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
   * Device registration state resource type event configuration object for enabling and disabling wireless gateway topic.
   *
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateResourceTypeEventConfiguration | undefined;

  /**
   * Proximity resource type event configuration object for enabling and disabling wireless gateway topic.
   *
   * @public
   */
  Proximity?: ProximityResourceTypeEventConfiguration | undefined;

  /**
   * Join resource type event configuration object for enabling and disabling wireless device topic.
   *
   * @public
   */
  Join?: JoinResourceTypeEventConfiguration | undefined;

  /**
   * Connection status resource type event configuration object for enabling and disabling wireless gateway topic.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatusResourceTypeEventConfiguration | undefined;

  /**
   * Message delivery status resource type event configuration object for enabling and disabling wireless device topic.
   *
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
   * The ID of a FUOTA task.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of a FUOTA task.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The LoRaWAN information used with a FUOTA task.
   *
   * @public
   */
  LoRaWAN?: LoRaWANFuotaTask | undefined;

  /**
   * The S3 URI points to a firmware update image that is to be used with a FUOTA task.
   *
   * @public
   */
  FirmwareUpdateImage?: string | undefined;

  /**
   * The firmware update role that is to be used with a FUOTA task.
   *
   * @public
   */
  FirmwareUpdateRole?: string | undefined;

  /**
   * The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with `RedundancyPercent` set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
   *
   * @public
   */
  RedundancyPercent?: number | undefined;

  /**
   * The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
   *
   * @public
   */
  FragmentSizeBytes?: number | undefined;

  /**
   * The interval for sending fragments in milliseconds, rounded to the nearest second.
   *
   * > **Note:** This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.
   *
   * @public
   */
  FragmentIntervalMS?: number | undefined;

  /**
   * The descriptor is the metadata about the file that is transferred to the device using FUOTA, such as the software version. It is a binary field encoded in base64.
   *
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
   * The log level for a log message. The log levels can be disabled, or set to `ERROR` to display less verbose logs containing only error information, or to `INFO` for more detailed logs.
   *
   * @public
   */
  DefaultLogLevel?: LogLevel | undefined;

  /**
   * The list of FUOTA task log options.
   *
   * @public
   */
  FuotaTaskLogOptions?: FuotaTaskLogOption[] | undefined;

  /**
   * The list of wireless device log options.
   *
   * @public
   */
  WirelessDeviceLogOptions?: WirelessDeviceLogOption[] | undefined;

  /**
   * The list of wireless gateway log options.
   *
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
   * The value to be used to set summary metric configuration.
   *
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
   * The ID of the multicast group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the multicast group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The LoRaWAN information that is to be used with the multicast group.
   *
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
   * Name of the network analyzer configuration.
   *
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Trace content for your wireless devices, gateways, and multicast groups.
   *
   * @public
   */
  TraceContent?: TraceContent | undefined;

  /**
   * Wireless device resources to add to the network analyzer configuration. Provide the `WirelessDeviceId` of the resource to add in the input array.
   *
   * @public
   */
  WirelessDevicesToAdd?: string[] | undefined;

  /**
   * Wireless device resources to remove from the network analyzer configuration. Provide the `WirelessDeviceId` of the resources to remove in the input array.
   *
   * @public
   */
  WirelessDevicesToRemove?: string[] | undefined;

  /**
   * Wireless gateway resources to add to the network analyzer configuration. Provide the `WirelessGatewayId` of the resource to add in the input array.
   *
   * @public
   */
  WirelessGatewaysToAdd?: string[] | undefined;

  /**
   * Wireless gateway resources to remove from the network analyzer configuration. Provide the `WirelessGatewayId` of the resources to remove in the input array.
   *
   * @public
   */
  WirelessGatewaysToRemove?: string[] | undefined;

  /**
   * The description of the new resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Multicast group resources to add to the network analyzer configuration. Provide the `MulticastGroupId` of the resource to add in the input array.
   *
   * @public
   */
  MulticastGroupsToAdd?: string[] | undefined;

  /**
   * Multicast group resources to remove from the network analyzer configuration. Provide the `MulticastGroupId` of the resources to remove in the input array.
   *
   * @public
   */
  MulticastGroupsToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkAnalyzerConfigurationResponse {}

/**
 * Sidewalk update.
 *
 * @public
 */
export interface SidewalkUpdateAccount {
  /**
   * The new Sidewalk application server private key.
   *
   * @public
   */
  AppServerPrivateKey?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAccountRequest {
  /**
   * The Sidewalk account credentials.
   *
   * @public
   */
  Sidewalk: SidewalkUpdateAccount | undefined;

  /**
   * The ID of the partner account to update.
   *
   * @public
   */
  PartnerAccountId: string | undefined;

  /**
   * The partner type.
   *
   * @public
   */
  PartnerType: PartnerType | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerAccountResponse {}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface UpdatePositionRequest {
  /**
   * Resource identifier of the resource for which position is updated.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * Resource type of the resource for which position is updated.
   *
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * The position information of the resource.
   *
   * @public
   */
  Position: number[] | undefined;
}

/**
 * @deprecated This operation is no longer supported.
 * @public
 */
export interface UpdatePositionResponse {}

/**
 * @public
 */
export interface UpdateResourceEventConfigurationRequest {
  /**
   * Resource identifier to opt in for event messaging.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Identifier type of the particular resource identifier for event configuration.
   *
   * @public
   */
  IdentifierType: IdentifierType | undefined;

  /**
   * Partner type of the resource if the identifier type is `PartnerAccountId`
   *
   * @public
   */
  PartnerType?: EventNotificationPartnerType | undefined;

  /**
   * Event configuration for the device registration state event.
   *
   * @public
   */
  DeviceRegistrationState?: DeviceRegistrationStateEventConfiguration | undefined;

  /**
   * Event configuration for the proximity event.
   *
   * @public
   */
  Proximity?: ProximityEventConfiguration | undefined;

  /**
   * Event configuration for the join event.
   *
   * @public
   */
  Join?: JoinEventConfiguration | undefined;

  /**
   * Event configuration for the connection status event.
   *
   * @public
   */
  ConnectionStatus?: ConnectionStatusEventConfiguration | undefined;

  /**
   * Event configuration for the message delivery status event.
   *
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
   * The identifier of the resource for which position information is updated. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;

  /**
   * The type of resource for which position information is updated, which can be a wireless device or a wireless gateway.
   *
   * @public
   */
  ResourceType: PositionResourceType | undefined;

  /**
   * The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see [GeoJSON](https://geojson.org/).
   *
   * @public
   */
  GeoJsonPayload?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateResourcePositionResponse {}

/**
 * ABP device object for LoRaWAN specification v1.0.x
 *
 * @public
 */
export interface UpdateAbpV1_0_x {
  /**
   * The FCnt init value.
   *
   * @public
   */
  FCntStart?: number | undefined;
}

/**
 * ABP device object for LoRaWAN specification v1.1
 *
 * @public
 */
export interface UpdateAbpV1_1 {
  /**
   * The FCnt init value.
   *
   * @public
   */
  FCntStart?: number | undefined;
}

/**
 * Object for updating the FPorts information.
 *
 * @public
 */
export interface UpdateFPorts {
  /**
   * Positioning FPorts for the ClockSync, Stream, and GNSS functions.
   *
   * @public
   */
  Positioning?: Positioning | undefined;

  /**
   * LoRaWAN application, which can be used for geolocation by activating positioning.
   *
   * @public
   */
  Applications?: ApplicationConfig[] | undefined;
}

/**
 * LoRaWAN object for update functions.
 *
 * @public
 */
export interface LoRaWANUpdateDevice {
  /**
   * The ID of the device profile for the wireless device.
   *
   * @public
   */
  DeviceProfileId?: string | undefined;

  /**
   * The ID of the service profile.
   *
   * @public
   */
  ServiceProfileId?: string | undefined;

  /**
   * ABP device object for update APIs for v1.1
   *
   * @public
   */
  AbpV1_1?: UpdateAbpV1_1 | undefined;

  /**
   * ABP device object for update APIs for v1.0.x
   *
   * @public
   */
  AbpV1_0_x?: UpdateAbpV1_0_x | undefined;

  /**
   * FPorts object for the positioning information of the device.
   *
   * @public
   */
  FPorts?: UpdateFPorts | undefined;
}

/**
 * Sidewalk object for updating a wireless device.
 *
 * @public
 */
export interface SidewalkUpdateWirelessDevice {
  /**
   * The Positioning object of the Sidewalk device.
   *
   * @public
   */
  Positioning?: SidewalkPositioning | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceRequest {
  /**
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the new destination for the device.
   *
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * The new name of the resource.
   *
   * > **Note:** The following special characters aren't accepted: `<>^#~$`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A new description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The updated wireless device's configuration.
   *
   * @public
   */
  LoRaWAN?: LoRaWANUpdateDevice | undefined;

  /**
   * The integration status of the Device Location feature for LoRaWAN and Sidewalk devices.
   *
   * @public
   */
  Positioning?: PositioningConfigStatus | undefined;

  /**
   * The updated sidewalk properties.
   *
   * @public
   */
  Sidewalk?: SidewalkUpdateWirelessDevice | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceResponse {}

/**
 * Sidewalk object information for updating an import task.
 *
 * @public
 */
export interface SidewalkUpdateImportInfo {
  /**
   * The CSV file contained in an S3 bucket that's used for appending devices to an existing import task.
   *
   * @public
   */
  DeviceCreationFile?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessDeviceImportTaskRequest {
  /**
   * The identifier of the import task to be updated.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Sidewalk-related parameters of the import task to be updated.
   *
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
   * The ID of the resource to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The new name of the resource.
   *
   * > **Note:** The following special characters aren't accepted: `<>^#~$`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A new description of the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of JoinEuiRange used by LoRa gateways to filter LoRa frames.
   *
   * @public
   */
  JoinEuiFilters?: string[][] | undefined;

  /**
   * A list of NetId values that are used by LoRa gateways to filter the uplink frames.
   *
   * @public
   */
  NetIdFilters?: string[] | undefined;

  /**
   * The MaxEIRP value.
   *
   * @public
   */
  MaxEirp?: number | undefined;
}

/**
 * @public
 */
export interface UpdateWirelessGatewayResponse {}
