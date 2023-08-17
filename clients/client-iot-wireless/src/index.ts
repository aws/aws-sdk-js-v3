// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS IoT Wireless provides bi-directional communication between internet-connected
 *             wireless devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS
 *             IoT, use the IoT Wireless API. These wireless devices use the Low Power Wide Area
 *             Networking (LPWAN) communication protocol to communicate with AWS IoT.</p>
 *          <p>Using the API, you can perform create, read, update, and delete operations for your
 *             wireless devices, gateways, destinations, and profiles. After onboarding your devices,
 *             you can use the API operations to set log levels and monitor your devices with
 *             CloudWatch.</p>
 *          <p>You can also use the API operations to create multicast groups and schedule a
 *             multicast session for sending a downlink message to devices in the group. By using
 *             Firmware Updates Over-The-Air (FUOTA) API operations, you can create a FUOTA task and
 *             schedule a session to update the firmware of individual devices or an entire group of
 *             devices in a multicast group.</p>
 *
 * @packageDocumentation
 */
export * from "./IoTWirelessClient";
export * from "./IoTWireless";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { IoTWirelessServiceException } from "./models/IoTWirelessServiceException";
