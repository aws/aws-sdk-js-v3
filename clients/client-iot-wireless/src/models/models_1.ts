// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  ConnectionStatusEventConfiguration,
  DeviceRegistrationStateEventConfiguration,
  EventNotificationPartnerType,
  IdentifierType,
  JoinEventConfiguration,
  PartnerType,
  Positioning,
  PositionResourceType,
  ProximityEventConfiguration,
  TraceContent,
} from "./models_0";

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
}

export interface UpdateResourceEventConfigurationResponse {}

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
