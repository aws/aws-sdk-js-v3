// smithy-typescript generated code
/* eslint-disable */
/**
 * You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents.
 *
 * The endpoints for submitting `UploadDocuments`, `Search`, and `Suggest` requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service `DescribeDomains` action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint.
 *
 * For more information, see the [Amazon CloudSearch Developer Guide](http://docs.aws.amazon.com/cloudsearch/latest/developerguide).
 *
 * @packageDocumentation
 */
export * from "./CloudSearchDomainClient";
export * from "./CloudSearchDomain";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudSearchDomainExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CloudSearchDomainServiceException } from "./models/CloudSearchDomainServiceException";
