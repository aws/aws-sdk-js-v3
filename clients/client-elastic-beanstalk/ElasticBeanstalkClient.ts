import {
  AbortEnvironmentUpdateMessage,
  ApplicationDescriptionMessage,
  ApplicationDescriptionsMessage,
  ApplicationResourceLifecycleDescriptionMessage,
  ApplicationVersionDescriptionMessage,
  ApplicationVersionDescriptionsMessage,
  ApplyEnvironmentManagedActionRequest,
  ApplyEnvironmentManagedActionResult,
  CheckDNSAvailabilityMessage,
  CheckDNSAvailabilityResultMessage,
  ComposeEnvironmentsMessage,
  ConfigurationOptionsDescription,
  ConfigurationSettingsDescription,
  ConfigurationSettingsDescriptions,
  ConfigurationSettingsValidationMessages,
  CreateApplicationMessage,
  CreateApplicationVersionMessage,
  CreateConfigurationTemplateMessage,
  CreateEnvironmentMessage,
  CreatePlatformVersionRequest,
  CreatePlatformVersionResult,
  CreateStorageLocationResultMessage,
  DeleteApplicationMessage,
  DeleteApplicationVersionMessage,
  DeleteConfigurationTemplateMessage,
  DeleteEnvironmentConfigurationMessage,
  DeletePlatformVersionRequest,
  DeletePlatformVersionResult,
  DescribeAccountAttributesResult,
  DescribeApplicationVersionsMessage,
  DescribeApplicationsMessage,
  DescribeConfigurationOptionsMessage,
  DescribeConfigurationSettingsMessage,
  DescribeEnvironmentHealthRequest,
  DescribeEnvironmentHealthResult,
  DescribeEnvironmentManagedActionHistoryRequest,
  DescribeEnvironmentManagedActionHistoryResult,
  DescribeEnvironmentManagedActionsRequest,
  DescribeEnvironmentManagedActionsResult,
  DescribeEnvironmentResourcesMessage,
  DescribeEnvironmentsMessage,
  DescribeEventsMessage,
  DescribeInstancesHealthRequest,
  DescribeInstancesHealthResult,
  DescribePlatformVersionRequest,
  DescribePlatformVersionResult,
  EnvironmentDescription,
  EnvironmentDescriptionsMessage,
  EnvironmentResourceDescriptionsMessage,
  EventDescriptionsMessage,
  ListAvailableSolutionStacksResultMessage,
  ListPlatformVersionsRequest,
  ListPlatformVersionsResult,
  ListTagsForResourceMessage,
  RebuildEnvironmentMessage,
  RequestEnvironmentInfoMessage,
  ResourceTagsDescriptionMessage,
  RestartAppServerMessage,
  RetrieveEnvironmentInfoMessage,
  RetrieveEnvironmentInfoResultMessage,
  SwapEnvironmentCNAMEsMessage,
  TerminateEnvironmentMessage,
  UpdateApplicationMessage,
  UpdateApplicationResourceLifecycleMessage,
  UpdateApplicationVersionMessage,
  UpdateConfigurationTemplateMessage,
  UpdateEnvironmentMessage,
  UpdateTagsForResourceMessage,
  ValidateConfigurationSettingsMessage
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | AbortEnvironmentUpdateMessage
  | ApplyEnvironmentManagedActionRequest
  | CheckDNSAvailabilityMessage
  | ComposeEnvironmentsMessage
  | CreateApplicationMessage
  | CreateApplicationVersionMessage
  | CreateConfigurationTemplateMessage
  | CreateEnvironmentMessage
  | CreatePlatformVersionRequest
  | DeleteApplicationMessage
  | DeleteApplicationVersionMessage
  | DeleteConfigurationTemplateMessage
  | DeleteEnvironmentConfigurationMessage
  | DeletePlatformVersionRequest
  | DescribeApplicationVersionsMessage
  | DescribeApplicationsMessage
  | DescribeConfigurationOptionsMessage
  | DescribeConfigurationSettingsMessage
  | DescribeEnvironmentHealthRequest
  | DescribeEnvironmentManagedActionHistoryRequest
  | DescribeEnvironmentManagedActionsRequest
  | DescribeEnvironmentResourcesMessage
  | DescribeEnvironmentsMessage
  | DescribeEventsMessage
  | DescribeInstancesHealthRequest
  | DescribePlatformVersionRequest
  | ListPlatformVersionsRequest
  | ListTagsForResourceMessage
  | RebuildEnvironmentMessage
  | RequestEnvironmentInfoMessage
  | RestartAppServerMessage
  | RetrieveEnvironmentInfoMessage
  | SwapEnvironmentCNAMEsMessage
  | TerminateEnvironmentMessage
  | UpdateApplicationMessage
  | UpdateApplicationResourceLifecycleMessage
  | UpdateApplicationVersionMessage
  | UpdateConfigurationTemplateMessage
  | UpdateEnvironmentMessage
  | UpdateTagsForResourceMessage
  | ValidateConfigurationSettingsMessage;

export type ServiceOutputTypes =
  | __MetadataBearer
  | ApplicationDescriptionMessage
  | ApplicationDescriptionMessage
  | ApplicationDescriptionsMessage
  | ApplicationResourceLifecycleDescriptionMessage
  | ApplicationVersionDescriptionMessage
  | ApplicationVersionDescriptionMessage
  | ApplicationVersionDescriptionsMessage
  | ApplyEnvironmentManagedActionResult
  | CheckDNSAvailabilityResultMessage
  | ConfigurationOptionsDescription
  | ConfigurationSettingsDescription
  | ConfigurationSettingsDescription
  | ConfigurationSettingsDescriptions
  | ConfigurationSettingsValidationMessages
  | CreatePlatformVersionResult
  | CreateStorageLocationResultMessage
  | DeletePlatformVersionResult
  | DescribeAccountAttributesResult
  | DescribeEnvironmentHealthResult
  | DescribeEnvironmentManagedActionHistoryResult
  | DescribeEnvironmentManagedActionsResult
  | DescribeInstancesHealthResult
  | DescribePlatformVersionResult
  | EnvironmentDescription
  | EnvironmentDescription
  | EnvironmentDescription
  | EnvironmentDescriptionsMessage
  | EnvironmentDescriptionsMessage
  | EnvironmentResourceDescriptionsMessage
  | EventDescriptionsMessage
  | ListAvailableSolutionStacksResultMessage
  | ListPlatformVersionsResult
  | ResourceTagsDescriptionMessage
  | RetrieveEnvironmentInfoResultMessage;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ElasticBeanstalkClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ElasticBeanstalkClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *
 *
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">http://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
 *       To install the Software Development Kits (SDKs), Integrated Development Environment (IDE)
 *       Toolkits, and command line tools that enable you to access the API, go to <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of region-specific endpoints that AWS Elastic Beanstalk supports, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region">Regions and Endpoints</a> in the <i>Amazon Web Services
 *       Glossary</i>.</p>
 */
export class ElasticBeanstalkClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticBeanstalkClientResolvedConfig
> {
  readonly config: ElasticBeanstalkClientResolvedConfig;

  constructor(configuration: ElasticBeanstalkClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
