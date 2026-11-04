// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Elasticsearch Configuration Service
 *
 * Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.
 *
 * For sample code that uses the Configuration API, see the [Amazon Elasticsearch Service Developer Guide](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html). The guide also contains [sample code for sending signed HTTP requests to the Elasticsearch APIs](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html).
 *
 * The endpoint for configuration service requests is region-specific: es.*region*.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see [Regions and Endpoints](http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions).
 *
 * @packageDocumentation
 */
export * from "./ElasticsearchServiceClient";
export * from "./ElasticsearchService";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ElasticsearchServiceExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ElasticsearchServiceServiceException } from "./models/ElasticsearchServiceServiceException";
