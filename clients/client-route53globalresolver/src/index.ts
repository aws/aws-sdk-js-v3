// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Route 53 Global Resolver is a global, internet-accessible DNS resolver that enables customers to resolve and forward traffic for both public and private domains while ensuring security and authenticity of queries over the internet. Route 53 Global Resolver supports DNS-over-port 53 (Do53), DNS-over-TLS (DoT), and DNS-over-HTTPS (DoH) protocols through global anycast IP addresses.</p> <important> <p>Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify <code>--region us-east-2</code> on Amazon Web Services CLI commands.</p> </important>
 *
 * @packageDocumentation
 */
export * from "./Route53GlobalResolverClient";
export * from "./Route53GlobalResolver";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { Route53GlobalResolverExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { Route53GlobalResolverServiceException } from "./models/Route53GlobalResolverServiceException";
