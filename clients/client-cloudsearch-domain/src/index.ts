// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p>
 *
 *          <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p>
 *          <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./CloudSearchDomainClient";
export * from "./CloudSearchDomain";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudSearchDomainExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { CloudSearchDomainServiceException } from "./models/CloudSearchDomainServiceException";
