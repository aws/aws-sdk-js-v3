// smithy-typescript generated code
/* eslint-disable */
/**
 * Welcome to the AWS Device Farm API documentation, which contains APIs for:
 *
 * - Testing on desktop browsers
 *
 *   Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain `TestGrid` in their names. For more information, see [Testing Web Applications on Selenium with Device Farm](https://docs.aws.amazon.com/devicefarm/latest/testgrid/).
 * - Testing on real mobile devices
 *
 *   Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the [Device Farm Developer Guide](https://docs.aws.amazon.com/devicefarm/latest/developerguide/).
 *
 * @packageDocumentation
 */
export * from "./DeviceFarmClient";
export * from "./DeviceFarm";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { DeviceFarmExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { DeviceFarmServiceException } from "./models/DeviceFarmServiceException";
