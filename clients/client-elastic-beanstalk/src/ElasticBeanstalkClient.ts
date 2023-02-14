// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
} from "./commands/AbortEnvironmentUpdateCommand";
import {
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
} from "./commands/ApplyEnvironmentManagedActionCommand";
import {
  AssociateEnvironmentOperationsRoleCommandInput,
  AssociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/AssociateEnvironmentOperationsRoleCommand";
import {
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
} from "./commands/CheckDNSAvailabilityCommand";
import {
  ComposeEnvironmentsCommandInput,
  ComposeEnvironmentsCommandOutput,
} from "./commands/ComposeEnvironmentsCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "./commands/CreateApplicationVersionCommand";
import {
  CreateConfigurationTemplateCommandInput,
  CreateConfigurationTemplateCommandOutput,
} from "./commands/CreateConfigurationTemplateCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import {
  CreatePlatformVersionCommandInput,
  CreatePlatformVersionCommandOutput,
} from "./commands/CreatePlatformVersionCommand";
import {
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
} from "./commands/CreateStorageLocationCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput,
} from "./commands/DeleteApplicationVersionCommand";
import {
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
} from "./commands/DeleteConfigurationTemplateCommand";
import {
  DeleteEnvironmentConfigurationCommandInput,
  DeleteEnvironmentConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentConfigurationCommand";
import {
  DeletePlatformVersionCommandInput,
  DeletePlatformVersionCommandOutput,
} from "./commands/DeletePlatformVersionCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeApplicationVersionsCommandInput,
  DescribeApplicationVersionsCommandOutput,
} from "./commands/DescribeApplicationVersionsCommand";
import {
  DescribeConfigurationOptionsCommandInput,
  DescribeConfigurationOptionsCommandOutput,
} from "./commands/DescribeConfigurationOptionsCommand";
import {
  DescribeConfigurationSettingsCommandInput,
  DescribeConfigurationSettingsCommandOutput,
} from "./commands/DescribeConfigurationSettingsCommand";
import {
  DescribeEnvironmentHealthCommandInput,
  DescribeEnvironmentHealthCommandOutput,
} from "./commands/DescribeEnvironmentHealthCommand";
import {
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionHistoryCommand";
import {
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
} from "./commands/DescribeEnvironmentManagedActionsCommand";
import {
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
} from "./commands/DescribeEnvironmentResourcesCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeInstancesHealthCommandInput,
  DescribeInstancesHealthCommandOutput,
} from "./commands/DescribeInstancesHealthCommand";
import {
  DescribePlatformVersionCommandInput,
  DescribePlatformVersionCommandOutput,
} from "./commands/DescribePlatformVersionCommand";
import {
  DisassociateEnvironmentOperationsRoleCommandInput,
  DisassociateEnvironmentOperationsRoleCommandOutput,
} from "./commands/DisassociateEnvironmentOperationsRoleCommand";
import {
  ListAvailableSolutionStacksCommandInput,
  ListAvailableSolutionStacksCommandOutput,
} from "./commands/ListAvailableSolutionStacksCommand";
import {
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "./commands/ListPlatformBranchesCommand";
import {
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "./commands/ListPlatformVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RebuildEnvironmentCommandInput, RebuildEnvironmentCommandOutput } from "./commands/RebuildEnvironmentCommand";
import {
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
} from "./commands/RequestEnvironmentInfoCommand";
import { RestartAppServerCommandInput, RestartAppServerCommandOutput } from "./commands/RestartAppServerCommand";
import {
  RetrieveEnvironmentInfoCommandInput,
  RetrieveEnvironmentInfoCommandOutput,
} from "./commands/RetrieveEnvironmentInfoCommand";
import {
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
} from "./commands/SwapEnvironmentCNAMEsCommand";
import {
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
} from "./commands/TerminateEnvironmentCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateApplicationResourceLifecycleCommandInput,
  UpdateApplicationResourceLifecycleCommandOutput,
} from "./commands/UpdateApplicationResourceLifecycleCommand";
import {
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
} from "./commands/UpdateApplicationVersionCommand";
import {
  UpdateConfigurationTemplateCommandInput,
  UpdateConfigurationTemplateCommandOutput,
} from "./commands/UpdateConfigurationTemplateCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput,
} from "./commands/UpdateTagsForResourceCommand";
import {
  ValidateConfigurationSettingsCommandInput,
  ValidateConfigurationSettingsCommandOutput,
} from "./commands/ValidateConfigurationSettingsCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AbortEnvironmentUpdateCommandInput
  | ApplyEnvironmentManagedActionCommandInput
  | AssociateEnvironmentOperationsRoleCommandInput
  | CheckDNSAvailabilityCommandInput
  | ComposeEnvironmentsCommandInput
  | CreateApplicationCommandInput
  | CreateApplicationVersionCommandInput
  | CreateConfigurationTemplateCommandInput
  | CreateEnvironmentCommandInput
  | CreatePlatformVersionCommandInput
  | CreateStorageLocationCommandInput
  | DeleteApplicationCommandInput
  | DeleteApplicationVersionCommandInput
  | DeleteConfigurationTemplateCommandInput
  | DeleteEnvironmentConfigurationCommandInput
  | DeletePlatformVersionCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeApplicationVersionsCommandInput
  | DescribeApplicationsCommandInput
  | DescribeConfigurationOptionsCommandInput
  | DescribeConfigurationSettingsCommandInput
  | DescribeEnvironmentHealthCommandInput
  | DescribeEnvironmentManagedActionHistoryCommandInput
  | DescribeEnvironmentManagedActionsCommandInput
  | DescribeEnvironmentResourcesCommandInput
  | DescribeEnvironmentsCommandInput
  | DescribeEventsCommandInput
  | DescribeInstancesHealthCommandInput
  | DescribePlatformVersionCommandInput
  | DisassociateEnvironmentOperationsRoleCommandInput
  | ListAvailableSolutionStacksCommandInput
  | ListPlatformBranchesCommandInput
  | ListPlatformVersionsCommandInput
  | ListTagsForResourceCommandInput
  | RebuildEnvironmentCommandInput
  | RequestEnvironmentInfoCommandInput
  | RestartAppServerCommandInput
  | RetrieveEnvironmentInfoCommandInput
  | SwapEnvironmentCNAMEsCommandInput
  | TerminateEnvironmentCommandInput
  | UpdateApplicationCommandInput
  | UpdateApplicationResourceLifecycleCommandInput
  | UpdateApplicationVersionCommandInput
  | UpdateConfigurationTemplateCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateTagsForResourceCommandInput
  | ValidateConfigurationSettingsCommandInput;

export type ServiceOutputTypes =
  | AbortEnvironmentUpdateCommandOutput
  | ApplyEnvironmentManagedActionCommandOutput
  | AssociateEnvironmentOperationsRoleCommandOutput
  | CheckDNSAvailabilityCommandOutput
  | ComposeEnvironmentsCommandOutput
  | CreateApplicationCommandOutput
  | CreateApplicationVersionCommandOutput
  | CreateConfigurationTemplateCommandOutput
  | CreateEnvironmentCommandOutput
  | CreatePlatformVersionCommandOutput
  | CreateStorageLocationCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteApplicationVersionCommandOutput
  | DeleteConfigurationTemplateCommandOutput
  | DeleteEnvironmentConfigurationCommandOutput
  | DeletePlatformVersionCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeApplicationVersionsCommandOutput
  | DescribeApplicationsCommandOutput
  | DescribeConfigurationOptionsCommandOutput
  | DescribeConfigurationSettingsCommandOutput
  | DescribeEnvironmentHealthCommandOutput
  | DescribeEnvironmentManagedActionHistoryCommandOutput
  | DescribeEnvironmentManagedActionsCommandOutput
  | DescribeEnvironmentResourcesCommandOutput
  | DescribeEnvironmentsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeInstancesHealthCommandOutput
  | DescribePlatformVersionCommandOutput
  | DisassociateEnvironmentOperationsRoleCommandOutput
  | ListAvailableSolutionStacksCommandOutput
  | ListPlatformBranchesCommandOutput
  | ListPlatformVersionsCommandOutput
  | ListTagsForResourceCommandOutput
  | RebuildEnvironmentCommandOutput
  | RequestEnvironmentInfoCommandOutput
  | RestartAppServerCommandOutput
  | RetrieveEnvironmentInfoCommandOutput
  | SwapEnvironmentCNAMEsCommandOutput
  | TerminateEnvironmentCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateApplicationResourceLifecycleCommandOutput
  | UpdateApplicationVersionCommandOutput
  | UpdateConfigurationTemplateCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateTagsForResourceCommandOutput
  | ValidateConfigurationSettingsCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type ElasticBeanstalkClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ElasticBeanstalkClient class constructor that set the region, credentials and other options.
 */
export interface ElasticBeanstalkClientConfig extends ElasticBeanstalkClientConfigType {}

type ElasticBeanstalkClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ElasticBeanstalkClient class. This is resolved and normalized from the {@link ElasticBeanstalkClientConfig | constructor configuration interface}.
 */
export interface ElasticBeanstalkClientResolvedConfig extends ElasticBeanstalkClientResolvedConfigType {}

/**
 * <fullname>AWS Elastic Beanstalk</fullname>
 *          <p>AWS Elastic Beanstalk makes it easy for you to create, deploy, and manage scalable,
 *       fault-tolerant applications running on the Amazon Web Services cloud.</p>
 *          <p>For more information about this product, go to the <a href="http://aws.amazon.com/elasticbeanstalk/">AWS Elastic Beanstalk</a> details page. The location of the
 *       latest AWS Elastic Beanstalk WSDL is <a href="https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl">https://elasticbeanstalk.s3.amazonaws.com/doc/2010-12-01/AWSElasticBeanstalk.wsdl</a>.
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
  /**
   * The resolved configuration of ElasticBeanstalkClient class. This is resolved and normalized from the {@link ElasticBeanstalkClientConfig | constructor configuration interface}.
   */
  readonly config: ElasticBeanstalkClientResolvedConfig;

  constructor(configuration: ElasticBeanstalkClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
