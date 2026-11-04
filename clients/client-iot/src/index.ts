// smithy-typescript generated code
/* eslint-disable */
/**
 * IoT
 *
 * IoT provides secure, bi-directional communication between Internet-connected devices (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. You can discover your custom IoT-Data endpoint to communicate with, configure rules for data processing and integration with other services, organize resources associated with each device (Registry), configure logging, and create and manage policies and credentials to authenticate devices.
 *
 * The service endpoints that expose this API are listed in [Amazon Web Services IoT Core Endpoints and Quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html). You must use the endpoint for the region that has the resources you want to access.
 *
 * The service name used by [Amazon Web Services Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) to sign the request is: *execute-api*.
 *
 * For more information about how IoT works, see the [Developer Guide](https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html).
 *
 * For information about how to use the credentials provider for IoT, see [Authorizing Direct Calls to Amazon Web Services Services](https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html).
 *
 * @packageDocumentation
 */
export * from "./IoTClient";
export * from "./IoT";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IoTExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";
export * from "./models/models_2";

export { IoTServiceException } from "./models/IoTServiceException";
