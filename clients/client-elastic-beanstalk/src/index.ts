// smithy-typescript generated code
/* eslint-disable */
/**
 * Elastic Beanstalk
 *
 * Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable, fault-tolerant applications running on the Amazon Web Services Cloud.
 *
 * For more information about this product, go to the [Elastic Beanstalk](http://aws.amazon.com/elasticbeanstalk/) details page. The location of the latest Elastic Beanstalk WSDL is [https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl](https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl). To install the Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools that enable you to access the API, go to [Tools for Amazon Web Services](http://aws.amazon.com/tools/).
 *
 * **Endpoints**
 *
 * For a list of region-specific endpoints that Elastic Beanstalk supports, go to [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region) in the *Amazon Web Services Glossary*.
 *
 * @packageDocumentation
 */
export * from "./ElasticBeanstalkClient";
export * from "./ElasticBeanstalk";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ElasticBeanstalkExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { ElasticBeanstalkSyntheticServiceException } from "./models/ElasticBeanstalkSyntheticServiceException";
