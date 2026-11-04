// smithy-typescript generated code
/* eslint-disable */
/**
 * Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.
 *
 * OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.
 *
 * To learn more about OpenSearch Serverless, see [What is Amazon OpenSearch Serverless?](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html)
 *
 * @packageDocumentation
 */
export * from "./OpenSearchServerlessClient";
export * from "./OpenSearchServerless";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { OpenSearchServerlessExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { OpenSearchServerlessServiceException } from "./models/OpenSearchServerlessServiceException";
