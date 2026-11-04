// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Simple Email Service
 *
 * This document contains reference information for the [Amazon Simple Email Service](https://aws.amazon.com/ses/) (Amazon SES) API, version 2010-12-01. This document is best used in conjunction with the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html).
 *
 * > **Note:** For a list of Amazon SES endpoints to use in service requests, see [Regions and Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/regions.html) in the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html).
 *
 * This documentation contains reference information related to the following:
 *
 * - [Amazon SES API Actions](https://docs.aws.amazon.com/ses/latest/APIReference/API_Operations.html)
 * - [Amazon SES API Data Types](https://docs.aws.amazon.com/ses/latest/APIReference/API_Types.html)
 * - [Common Parameters](https://docs.aws.amazon.com/ses/latest/APIReference/CommonParameters.html)
 * - [Common Errors](https://docs.aws.amazon.com/ses/latest/APIReference/CommonErrors.html)
 *
 * @packageDocumentation
 */
export * from "./SESClient";
export * from "./SES";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SESExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SESServiceException } from "./models/SESServiceException";
