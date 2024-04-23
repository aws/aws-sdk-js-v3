// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  AssociateRoleToGroupCommandInput,
  AssociateRoleToGroupCommandOutput,
} from "./commands/AssociateRoleToGroupCommand";
import {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "./commands/AssociateServiceRoleToAccountCommand";
import {
  CreateConnectorDefinitionCommandInput,
  CreateConnectorDefinitionCommandOutput,
} from "./commands/CreateConnectorDefinitionCommand";
import {
  CreateConnectorDefinitionVersionCommandInput,
  CreateConnectorDefinitionVersionCommandOutput,
} from "./commands/CreateConnectorDefinitionVersionCommand";
import {
  CreateCoreDefinitionCommandInput,
  CreateCoreDefinitionCommandOutput,
} from "./commands/CreateCoreDefinitionCommand";
import {
  CreateCoreDefinitionVersionCommandInput,
  CreateCoreDefinitionVersionCommandOutput,
} from "./commands/CreateCoreDefinitionVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import {
  CreateDeviceDefinitionCommandInput,
  CreateDeviceDefinitionCommandOutput,
} from "./commands/CreateDeviceDefinitionCommand";
import {
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
} from "./commands/CreateDeviceDefinitionVersionCommand";
import {
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
} from "./commands/CreateFunctionDefinitionCommand";
import {
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
} from "./commands/CreateFunctionDefinitionVersionCommand";
import {
  CreateGroupCertificateAuthorityCommandInput,
  CreateGroupCertificateAuthorityCommandOutput,
} from "./commands/CreateGroupCertificateAuthorityCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput } from "./commands/CreateGroupVersionCommand";
import {
  CreateLoggerDefinitionCommandInput,
  CreateLoggerDefinitionCommandOutput,
} from "./commands/CreateLoggerDefinitionCommand";
import {
  CreateLoggerDefinitionVersionCommandInput,
  CreateLoggerDefinitionVersionCommandOutput,
} from "./commands/CreateLoggerDefinitionVersionCommand";
import {
  CreateResourceDefinitionCommandInput,
  CreateResourceDefinitionCommandOutput,
} from "./commands/CreateResourceDefinitionCommand";
import {
  CreateResourceDefinitionVersionCommandInput,
  CreateResourceDefinitionVersionCommandOutput,
} from "./commands/CreateResourceDefinitionVersionCommand";
import {
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
} from "./commands/CreateSoftwareUpdateJobCommand";
import {
  CreateSubscriptionDefinitionCommandInput,
  CreateSubscriptionDefinitionCommandOutput,
} from "./commands/CreateSubscriptionDefinitionCommand";
import {
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
} from "./commands/CreateSubscriptionDefinitionVersionCommand";
import {
  DeleteConnectorDefinitionCommandInput,
  DeleteConnectorDefinitionCommandOutput,
} from "./commands/DeleteConnectorDefinitionCommand";
import {
  DeleteCoreDefinitionCommandInput,
  DeleteCoreDefinitionCommandOutput,
} from "./commands/DeleteCoreDefinitionCommand";
import {
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
} from "./commands/DeleteDeviceDefinitionCommand";
import {
  DeleteFunctionDefinitionCommandInput,
  DeleteFunctionDefinitionCommandOutput,
} from "./commands/DeleteFunctionDefinitionCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
} from "./commands/DeleteLoggerDefinitionCommand";
import {
  DeleteResourceDefinitionCommandInput,
  DeleteResourceDefinitionCommandOutput,
} from "./commands/DeleteResourceDefinitionCommand";
import {
  DeleteSubscriptionDefinitionCommandInput,
  DeleteSubscriptionDefinitionCommandOutput,
} from "./commands/DeleteSubscriptionDefinitionCommand";
import {
  DisassociateRoleFromGroupCommandInput,
  DisassociateRoleFromGroupCommandOutput,
} from "./commands/DisassociateRoleFromGroupCommand";
import {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import { GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput } from "./commands/GetAssociatedRoleCommand";
import {
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
} from "./commands/GetBulkDeploymentStatusCommand";
import {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "./commands/GetConnectivityInfoCommand";
import {
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
} from "./commands/GetConnectorDefinitionCommand";
import {
  GetConnectorDefinitionVersionCommandInput,
  GetConnectorDefinitionVersionCommandOutput,
} from "./commands/GetConnectorDefinitionVersionCommand";
import { GetCoreDefinitionCommandInput, GetCoreDefinitionCommandOutput } from "./commands/GetCoreDefinitionCommand";
import {
  GetCoreDefinitionVersionCommandInput,
  GetCoreDefinitionVersionCommandOutput,
} from "./commands/GetCoreDefinitionVersionCommand";
import {
  GetDeploymentStatusCommandInput,
  GetDeploymentStatusCommandOutput,
} from "./commands/GetDeploymentStatusCommand";
import {
  GetDeviceDefinitionCommandInput,
  GetDeviceDefinitionCommandOutput,
} from "./commands/GetDeviceDefinitionCommand";
import {
  GetDeviceDefinitionVersionCommandInput,
  GetDeviceDefinitionVersionCommandOutput,
} from "./commands/GetDeviceDefinitionVersionCommand";
import {
  GetFunctionDefinitionCommandInput,
  GetFunctionDefinitionCommandOutput,
} from "./commands/GetFunctionDefinitionCommand";
import {
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
} from "./commands/GetFunctionDefinitionVersionCommand";
import {
  GetGroupCertificateAuthorityCommandInput,
  GetGroupCertificateAuthorityCommandOutput,
} from "./commands/GetGroupCertificateAuthorityCommand";
import {
  GetGroupCertificateConfigurationCommandInput,
  GetGroupCertificateConfigurationCommandOutput,
} from "./commands/GetGroupCertificateConfigurationCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupVersionCommandInput, GetGroupVersionCommandOutput } from "./commands/GetGroupVersionCommand";
import {
  GetLoggerDefinitionCommandInput,
  GetLoggerDefinitionCommandOutput,
} from "./commands/GetLoggerDefinitionCommand";
import {
  GetLoggerDefinitionVersionCommandInput,
  GetLoggerDefinitionVersionCommandOutput,
} from "./commands/GetLoggerDefinitionVersionCommand";
import {
  GetResourceDefinitionCommandInput,
  GetResourceDefinitionCommandOutput,
} from "./commands/GetResourceDefinitionCommand";
import {
  GetResourceDefinitionVersionCommandInput,
  GetResourceDefinitionVersionCommandOutput,
} from "./commands/GetResourceDefinitionVersionCommand";
import {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "./commands/GetServiceRoleForAccountCommand";
import {
  GetSubscriptionDefinitionCommandInput,
  GetSubscriptionDefinitionCommandOutput,
} from "./commands/GetSubscriptionDefinitionCommand";
import {
  GetSubscriptionDefinitionVersionCommandInput,
  GetSubscriptionDefinitionVersionCommandOutput,
} from "./commands/GetSubscriptionDefinitionVersionCommand";
import {
  GetThingRuntimeConfigurationCommandInput,
  GetThingRuntimeConfigurationCommandOutput,
} from "./commands/GetThingRuntimeConfigurationCommand";
import {
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
} from "./commands/ListBulkDeploymentDetailedReportsCommand";
import {
  ListBulkDeploymentsCommandInput,
  ListBulkDeploymentsCommandOutput,
} from "./commands/ListBulkDeploymentsCommand";
import {
  ListConnectorDefinitionsCommandInput,
  ListConnectorDefinitionsCommandOutput,
} from "./commands/ListConnectorDefinitionsCommand";
import {
  ListConnectorDefinitionVersionsCommandInput,
  ListConnectorDefinitionVersionsCommandOutput,
} from "./commands/ListConnectorDefinitionVersionsCommand";
import {
  ListCoreDefinitionsCommandInput,
  ListCoreDefinitionsCommandOutput,
} from "./commands/ListCoreDefinitionsCommand";
import {
  ListCoreDefinitionVersionsCommandInput,
  ListCoreDefinitionVersionsCommandOutput,
} from "./commands/ListCoreDefinitionVersionsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import {
  ListDeviceDefinitionsCommandInput,
  ListDeviceDefinitionsCommandOutput,
} from "./commands/ListDeviceDefinitionsCommand";
import {
  ListDeviceDefinitionVersionsCommandInput,
  ListDeviceDefinitionVersionsCommandOutput,
} from "./commands/ListDeviceDefinitionVersionsCommand";
import {
  ListFunctionDefinitionsCommandInput,
  ListFunctionDefinitionsCommandOutput,
} from "./commands/ListFunctionDefinitionsCommand";
import {
  ListFunctionDefinitionVersionsCommandInput,
  ListFunctionDefinitionVersionsCommandOutput,
} from "./commands/ListFunctionDefinitionVersionsCommand";
import {
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
} from "./commands/ListGroupCertificateAuthoritiesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListGroupVersionsCommandInput, ListGroupVersionsCommandOutput } from "./commands/ListGroupVersionsCommand";
import {
  ListLoggerDefinitionsCommandInput,
  ListLoggerDefinitionsCommandOutput,
} from "./commands/ListLoggerDefinitionsCommand";
import {
  ListLoggerDefinitionVersionsCommandInput,
  ListLoggerDefinitionVersionsCommandOutput,
} from "./commands/ListLoggerDefinitionVersionsCommand";
import {
  ListResourceDefinitionsCommandInput,
  ListResourceDefinitionsCommandOutput,
} from "./commands/ListResourceDefinitionsCommand";
import {
  ListResourceDefinitionVersionsCommandInput,
  ListResourceDefinitionVersionsCommandOutput,
} from "./commands/ListResourceDefinitionVersionsCommand";
import {
  ListSubscriptionDefinitionsCommandInput,
  ListSubscriptionDefinitionsCommandOutput,
} from "./commands/ListSubscriptionDefinitionsCommand";
import {
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
} from "./commands/ListSubscriptionDefinitionVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput } from "./commands/ResetDeploymentsCommand";
import {
  StartBulkDeploymentCommandInput,
  StartBulkDeploymentCommandOutput,
} from "./commands/StartBulkDeploymentCommand";
import { StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput } from "./commands/StopBulkDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "./commands/UpdateConnectivityInfoCommand";
import {
  UpdateConnectorDefinitionCommandInput,
  UpdateConnectorDefinitionCommandOutput,
} from "./commands/UpdateConnectorDefinitionCommand";
import {
  UpdateCoreDefinitionCommandInput,
  UpdateCoreDefinitionCommandOutput,
} from "./commands/UpdateCoreDefinitionCommand";
import {
  UpdateDeviceDefinitionCommandInput,
  UpdateDeviceDefinitionCommandOutput,
} from "./commands/UpdateDeviceDefinitionCommand";
import {
  UpdateFunctionDefinitionCommandInput,
  UpdateFunctionDefinitionCommandOutput,
} from "./commands/UpdateFunctionDefinitionCommand";
import {
  UpdateGroupCertificateConfigurationCommandInput,
  UpdateGroupCertificateConfigurationCommandOutput,
} from "./commands/UpdateGroupCertificateConfigurationCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateLoggerDefinitionCommandInput,
  UpdateLoggerDefinitionCommandOutput,
} from "./commands/UpdateLoggerDefinitionCommand";
import {
  UpdateResourceDefinitionCommandInput,
  UpdateResourceDefinitionCommandOutput,
} from "./commands/UpdateResourceDefinitionCommand";
import {
  UpdateSubscriptionDefinitionCommandInput,
  UpdateSubscriptionDefinitionCommandOutput,
} from "./commands/UpdateSubscriptionDefinitionCommand";
import {
  UpdateThingRuntimeConfigurationCommandInput,
  UpdateThingRuntimeConfigurationCommandOutput,
} from "./commands/UpdateThingRuntimeConfigurationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateRoleToGroupCommandInput
  | AssociateServiceRoleToAccountCommandInput
  | CreateConnectorDefinitionCommandInput
  | CreateConnectorDefinitionVersionCommandInput
  | CreateCoreDefinitionCommandInput
  | CreateCoreDefinitionVersionCommandInput
  | CreateDeploymentCommandInput
  | CreateDeviceDefinitionCommandInput
  | CreateDeviceDefinitionVersionCommandInput
  | CreateFunctionDefinitionCommandInput
  | CreateFunctionDefinitionVersionCommandInput
  | CreateGroupCertificateAuthorityCommandInput
  | CreateGroupCommandInput
  | CreateGroupVersionCommandInput
  | CreateLoggerDefinitionCommandInput
  | CreateLoggerDefinitionVersionCommandInput
  | CreateResourceDefinitionCommandInput
  | CreateResourceDefinitionVersionCommandInput
  | CreateSoftwareUpdateJobCommandInput
  | CreateSubscriptionDefinitionCommandInput
  | CreateSubscriptionDefinitionVersionCommandInput
  | DeleteConnectorDefinitionCommandInput
  | DeleteCoreDefinitionCommandInput
  | DeleteDeviceDefinitionCommandInput
  | DeleteFunctionDefinitionCommandInput
  | DeleteGroupCommandInput
  | DeleteLoggerDefinitionCommandInput
  | DeleteResourceDefinitionCommandInput
  | DeleteSubscriptionDefinitionCommandInput
  | DisassociateRoleFromGroupCommandInput
  | DisassociateServiceRoleFromAccountCommandInput
  | GetAssociatedRoleCommandInput
  | GetBulkDeploymentStatusCommandInput
  | GetConnectivityInfoCommandInput
  | GetConnectorDefinitionCommandInput
  | GetConnectorDefinitionVersionCommandInput
  | GetCoreDefinitionCommandInput
  | GetCoreDefinitionVersionCommandInput
  | GetDeploymentStatusCommandInput
  | GetDeviceDefinitionCommandInput
  | GetDeviceDefinitionVersionCommandInput
  | GetFunctionDefinitionCommandInput
  | GetFunctionDefinitionVersionCommandInput
  | GetGroupCertificateAuthorityCommandInput
  | GetGroupCertificateConfigurationCommandInput
  | GetGroupCommandInput
  | GetGroupVersionCommandInput
  | GetLoggerDefinitionCommandInput
  | GetLoggerDefinitionVersionCommandInput
  | GetResourceDefinitionCommandInput
  | GetResourceDefinitionVersionCommandInput
  | GetServiceRoleForAccountCommandInput
  | GetSubscriptionDefinitionCommandInput
  | GetSubscriptionDefinitionVersionCommandInput
  | GetThingRuntimeConfigurationCommandInput
  | ListBulkDeploymentDetailedReportsCommandInput
  | ListBulkDeploymentsCommandInput
  | ListConnectorDefinitionVersionsCommandInput
  | ListConnectorDefinitionsCommandInput
  | ListCoreDefinitionVersionsCommandInput
  | ListCoreDefinitionsCommandInput
  | ListDeploymentsCommandInput
  | ListDeviceDefinitionVersionsCommandInput
  | ListDeviceDefinitionsCommandInput
  | ListFunctionDefinitionVersionsCommandInput
  | ListFunctionDefinitionsCommandInput
  | ListGroupCertificateAuthoritiesCommandInput
  | ListGroupVersionsCommandInput
  | ListGroupsCommandInput
  | ListLoggerDefinitionVersionsCommandInput
  | ListLoggerDefinitionsCommandInput
  | ListResourceDefinitionVersionsCommandInput
  | ListResourceDefinitionsCommandInput
  | ListSubscriptionDefinitionVersionsCommandInput
  | ListSubscriptionDefinitionsCommandInput
  | ListTagsForResourceCommandInput
  | ResetDeploymentsCommandInput
  | StartBulkDeploymentCommandInput
  | StopBulkDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConnectivityInfoCommandInput
  | UpdateConnectorDefinitionCommandInput
  | UpdateCoreDefinitionCommandInput
  | UpdateDeviceDefinitionCommandInput
  | UpdateFunctionDefinitionCommandInput
  | UpdateGroupCertificateConfigurationCommandInput
  | UpdateGroupCommandInput
  | UpdateLoggerDefinitionCommandInput
  | UpdateResourceDefinitionCommandInput
  | UpdateSubscriptionDefinitionCommandInput
  | UpdateThingRuntimeConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateRoleToGroupCommandOutput
  | AssociateServiceRoleToAccountCommandOutput
  | CreateConnectorDefinitionCommandOutput
  | CreateConnectorDefinitionVersionCommandOutput
  | CreateCoreDefinitionCommandOutput
  | CreateCoreDefinitionVersionCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDeviceDefinitionCommandOutput
  | CreateDeviceDefinitionVersionCommandOutput
  | CreateFunctionDefinitionCommandOutput
  | CreateFunctionDefinitionVersionCommandOutput
  | CreateGroupCertificateAuthorityCommandOutput
  | CreateGroupCommandOutput
  | CreateGroupVersionCommandOutput
  | CreateLoggerDefinitionCommandOutput
  | CreateLoggerDefinitionVersionCommandOutput
  | CreateResourceDefinitionCommandOutput
  | CreateResourceDefinitionVersionCommandOutput
  | CreateSoftwareUpdateJobCommandOutput
  | CreateSubscriptionDefinitionCommandOutput
  | CreateSubscriptionDefinitionVersionCommandOutput
  | DeleteConnectorDefinitionCommandOutput
  | DeleteCoreDefinitionCommandOutput
  | DeleteDeviceDefinitionCommandOutput
  | DeleteFunctionDefinitionCommandOutput
  | DeleteGroupCommandOutput
  | DeleteLoggerDefinitionCommandOutput
  | DeleteResourceDefinitionCommandOutput
  | DeleteSubscriptionDefinitionCommandOutput
  | DisassociateRoleFromGroupCommandOutput
  | DisassociateServiceRoleFromAccountCommandOutput
  | GetAssociatedRoleCommandOutput
  | GetBulkDeploymentStatusCommandOutput
  | GetConnectivityInfoCommandOutput
  | GetConnectorDefinitionCommandOutput
  | GetConnectorDefinitionVersionCommandOutput
  | GetCoreDefinitionCommandOutput
  | GetCoreDefinitionVersionCommandOutput
  | GetDeploymentStatusCommandOutput
  | GetDeviceDefinitionCommandOutput
  | GetDeviceDefinitionVersionCommandOutput
  | GetFunctionDefinitionCommandOutput
  | GetFunctionDefinitionVersionCommandOutput
  | GetGroupCertificateAuthorityCommandOutput
  | GetGroupCertificateConfigurationCommandOutput
  | GetGroupCommandOutput
  | GetGroupVersionCommandOutput
  | GetLoggerDefinitionCommandOutput
  | GetLoggerDefinitionVersionCommandOutput
  | GetResourceDefinitionCommandOutput
  | GetResourceDefinitionVersionCommandOutput
  | GetServiceRoleForAccountCommandOutput
  | GetSubscriptionDefinitionCommandOutput
  | GetSubscriptionDefinitionVersionCommandOutput
  | GetThingRuntimeConfigurationCommandOutput
  | ListBulkDeploymentDetailedReportsCommandOutput
  | ListBulkDeploymentsCommandOutput
  | ListConnectorDefinitionVersionsCommandOutput
  | ListConnectorDefinitionsCommandOutput
  | ListCoreDefinitionVersionsCommandOutput
  | ListCoreDefinitionsCommandOutput
  | ListDeploymentsCommandOutput
  | ListDeviceDefinitionVersionsCommandOutput
  | ListDeviceDefinitionsCommandOutput
  | ListFunctionDefinitionVersionsCommandOutput
  | ListFunctionDefinitionsCommandOutput
  | ListGroupCertificateAuthoritiesCommandOutput
  | ListGroupVersionsCommandOutput
  | ListGroupsCommandOutput
  | ListLoggerDefinitionVersionsCommandOutput
  | ListLoggerDefinitionsCommandOutput
  | ListResourceDefinitionVersionsCommandOutput
  | ListResourceDefinitionsCommandOutput
  | ListSubscriptionDefinitionVersionsCommandOutput
  | ListSubscriptionDefinitionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ResetDeploymentsCommandOutput
  | StartBulkDeploymentCommandOutput
  | StopBulkDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectivityInfoCommandOutput
  | UpdateConnectorDefinitionCommandOutput
  | UpdateCoreDefinitionCommandOutput
  | UpdateDeviceDefinitionCommandOutput
  | UpdateFunctionDefinitionCommandOutput
  | UpdateGroupCertificateConfigurationCommandOutput
  | UpdateGroupCommandOutput
  | UpdateLoggerDefinitionCommandOutput
  | UpdateResourceDefinitionCommandOutput
  | UpdateSubscriptionDefinitionCommandOutput
  | UpdateThingRuntimeConfigurationCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type GreengrassClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of GreengrassClient class constructor that set the region, credentials and other options.
 */
export interface GreengrassClientConfig extends GreengrassClientConfigType {}

/**
 * @public
 */
export type GreengrassClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of GreengrassClient class. This is resolved and normalized from the {@link GreengrassClientConfig | constructor configuration interface}.
 */
export interface GreengrassClientResolvedConfig extends GreengrassClientResolvedConfigType {}

/**
 * @public
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 */
export class GreengrassClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GreengrassClientResolvedConfig
> {
  /**
   * The resolved configuration of GreengrassClient class. This is resolved and normalized from the {@link GreengrassClientConfig | constructor configuration interface}.
   */
  readonly config: GreengrassClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GreengrassClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
