// smithy-typescript generated code
/* eslint-disable */
/**
 * IoT data
 *
 * IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the Amazon Web Services cloud.
 *
 * Find the endpoint address for actions in IoT data by running this CLI command:
 *
 * `aws iot describe-endpoint --endpoint-type iot:Data-ATS`
 *
 * The service name used by [Amazon Web ServicesSignature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) to sign requests is: *iotdevicegateway*.
 *
 * @packageDocumentation
 */
export * from "./IoTDataPlaneClient";
export * from "./IoTDataPlane";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IoTDataPlaneExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { IoTDataPlaneServiceException } from "./models/IoTDataPlaneServiceException";
