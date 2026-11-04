// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.
 *
 * You can use Route 53 to:
 *
 * - Register domain names.
 *
 *   For more information, see [How domain registration works](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-domain-registration.html).
 * - Route internet traffic to the resources for your domain
 *
 *   For more information, see [How internet traffic is routed to your website or web application](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html).
 * - Check the health of your resources.
 *
 *   For more information, see [How Route 53 checks the health of your resources](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-health-checks.html).
 *
 * @packageDocumentation
 */
export * from "./Route53Client";
export * from "./Route53";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { Route53ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { Route53ServiceException } from "./models/Route53ServiceException";
