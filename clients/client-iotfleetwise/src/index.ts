// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Web Services IoT FleetWise is a fully managed service that you can use to collect, model, and transfer vehicle data to the Amazon Web Services cloud at scale. With Amazon Web Services IoT FleetWise, you can standardize all of your vehicle data models, independent of the in-vehicle communication architecture, and define data collection rules to transfer only high-value data to the cloud.
 *
 * For more information, see [What is Amazon Web Services IoT FleetWise?](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @packageDocumentation
 */
export * from "./IoTFleetWiseClient";
export * from "./IoTFleetWise";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IoTFleetWiseExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { IoTFleetWiseServiceException } from "./models/IoTFleetWiseServiceException";
