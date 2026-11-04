// smithy-typescript generated code
/* eslint-disable */
/**
 * This is the *Amazon Web Services Private Certificate Authority API Reference*. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing a private certificate authority (CA) for your organization.
 *
 * The documentation for each action shows the API request parameters and the JSON response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you prefer. For more information, see [Amazon Web Services SDKs](https://aws.amazon.com/tools/#SDKs).
 *
 * Each Amazon Web Services Private CA API operation has a quota that determines the number of times the operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid request because the request exceeds the operation's quota for the number of requests per second. When a request is throttled, Amazon Web Services Private CA returns a [ThrottlingException](https://docs.aws.amazon.com/privateca/latest/APIReference/CommonErrors.html) error. Amazon Web Services Private CA does not guarantee a minimum request rate for APIs.
 *
 * To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase, log into your Amazon Web Services account and visit the [Service Quotas](https://console.aws.amazon.com/servicequotas/) console.
 *
 * @packageDocumentation
 */
export * from "./ACMPCAClient";
export * from "./ACMPCA";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ACMPCAExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ACMPCAServiceException } from "./models/ACMPCAServiceException";
