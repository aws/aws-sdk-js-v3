// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultGreengrassHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateRoleToGroupCommandInput,
  AssociateRoleToGroupCommandOutput,
} from "./commands/AssociateRoleToGroupCommand";
import type {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "./commands/AssociateServiceRoleToAccountCommand";
import type {
  CreateConnectorDefinitionCommandInput,
  CreateConnectorDefinitionCommandOutput,
} from "./commands/CreateConnectorDefinitionCommand";
import type {
  CreateConnectorDefinitionVersionCommandInput,
  CreateConnectorDefinitionVersionCommandOutput,
} from "./commands/CreateConnectorDefinitionVersionCommand";
import type {
  CreateCoreDefinitionCommandInput,
  CreateCoreDefinitionCommandOutput,
} from "./commands/CreateCoreDefinitionCommand";
import type {
  CreateCoreDefinitionVersionCommandInput,
  CreateCoreDefinitionVersionCommandOutput,
} from "./commands/CreateCoreDefinitionVersionCommand";
import type { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import type {
  CreateDeviceDefinitionCommandInput,
  CreateDeviceDefinitionCommandOutput,
} from "./commands/CreateDeviceDefinitionCommand";
import type {
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
} from "./commands/CreateDeviceDefinitionVersionCommand";
import type {
  CreateFunctionDefinitionCommandInput,
  CreateFunctionDefinitionCommandOutput,
} from "./commands/CreateFunctionDefinitionCommand";
import type {
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
} from "./commands/CreateFunctionDefinitionVersionCommand";
import type {
  CreateGroupCertificateAuthorityCommandInput,
  CreateGroupCertificateAuthorityCommandOutput,
} from "./commands/CreateGroupCertificateAuthorityCommand";
import type { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import type {
  CreateGroupVersionCommandInput,
  CreateGroupVersionCommandOutput,
} from "./commands/CreateGroupVersionCommand";
import type {
  CreateLoggerDefinitionCommandInput,
  CreateLoggerDefinitionCommandOutput,
} from "./commands/CreateLoggerDefinitionCommand";
import type {
  CreateLoggerDefinitionVersionCommandInput,
  CreateLoggerDefinitionVersionCommandOutput,
} from "./commands/CreateLoggerDefinitionVersionCommand";
import type {
  CreateResourceDefinitionCommandInput,
  CreateResourceDefinitionCommandOutput,
} from "./commands/CreateResourceDefinitionCommand";
import type {
  CreateResourceDefinitionVersionCommandInput,
  CreateResourceDefinitionVersionCommandOutput,
} from "./commands/CreateResourceDefinitionVersionCommand";
import type {
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
} from "./commands/CreateSoftwareUpdateJobCommand";
import type {
  CreateSubscriptionDefinitionCommandInput,
  CreateSubscriptionDefinitionCommandOutput,
} from "./commands/CreateSubscriptionDefinitionCommand";
import type {
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
} from "./commands/CreateSubscriptionDefinitionVersionCommand";
import type {
  DeleteConnectorDefinitionCommandInput,
  DeleteConnectorDefinitionCommandOutput,
} from "./commands/DeleteConnectorDefinitionCommand";
import type {
  DeleteCoreDefinitionCommandInput,
  DeleteCoreDefinitionCommandOutput,
} from "./commands/DeleteCoreDefinitionCommand";
import type {
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
} from "./commands/DeleteDeviceDefinitionCommand";
import type {
  DeleteFunctionDefinitionCommandInput,
  DeleteFunctionDefinitionCommandOutput,
} from "./commands/DeleteFunctionDefinitionCommand";
import type { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import type {
  DeleteLoggerDefinitionCommandInput,
  DeleteLoggerDefinitionCommandOutput,
} from "./commands/DeleteLoggerDefinitionCommand";
import type {
  DeleteResourceDefinitionCommandInput,
  DeleteResourceDefinitionCommandOutput,
} from "./commands/DeleteResourceDefinitionCommand";
import type {
  DeleteSubscriptionDefinitionCommandInput,
  DeleteSubscriptionDefinitionCommandOutput,
} from "./commands/DeleteSubscriptionDefinitionCommand";
import type {
  DisassociateRoleFromGroupCommandInput,
  DisassociateRoleFromGroupCommandOutput,
} from "./commands/DisassociateRoleFromGroupCommand";
import type {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "./commands/DisassociateServiceRoleFromAccountCommand";
import type {
  GetAssociatedRoleCommandInput,
  GetAssociatedRoleCommandOutput,
} from "./commands/GetAssociatedRoleCommand";
import type {
  GetBulkDeploymentStatusCommandInput,
  GetBulkDeploymentStatusCommandOutput,
} from "./commands/GetBulkDeploymentStatusCommand";
import type {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "./commands/GetConnectivityInfoCommand";
import type {
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
} from "./commands/GetConnectorDefinitionCommand";
import type {
  GetConnectorDefinitionVersionCommandInput,
  GetConnectorDefinitionVersionCommandOutput,
} from "./commands/GetConnectorDefinitionVersionCommand";
import type {
  GetCoreDefinitionCommandInput,
  GetCoreDefinitionCommandOutput,
} from "./commands/GetCoreDefinitionCommand";
import type {
  GetCoreDefinitionVersionCommandInput,
  GetCoreDefinitionVersionCommandOutput,
} from "./commands/GetCoreDefinitionVersionCommand";
import type {
  GetDeploymentStatusCommandInput,
  GetDeploymentStatusCommandOutput,
} from "./commands/GetDeploymentStatusCommand";
import type {
  GetDeviceDefinitionCommandInput,
  GetDeviceDefinitionCommandOutput,
} from "./commands/GetDeviceDefinitionCommand";
import type {
  GetDeviceDefinitionVersionCommandInput,
  GetDeviceDefinitionVersionCommandOutput,
} from "./commands/GetDeviceDefinitionVersionCommand";
import type {
  GetFunctionDefinitionCommandInput,
  GetFunctionDefinitionCommandOutput,
} from "./commands/GetFunctionDefinitionCommand";
import type {
  GetFunctionDefinitionVersionCommandInput,
  GetFunctionDefinitionVersionCommandOutput,
} from "./commands/GetFunctionDefinitionVersionCommand";
import type {
  GetGroupCertificateAuthorityCommandInput,
  GetGroupCertificateAuthorityCommandOutput,
} from "./commands/GetGroupCertificateAuthorityCommand";
import type {
  GetGroupCertificateConfigurationCommandInput,
  GetGroupCertificateConfigurationCommandOutput,
} from "./commands/GetGroupCertificateConfigurationCommand";
import type { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import type { GetGroupVersionCommandInput, GetGroupVersionCommandOutput } from "./commands/GetGroupVersionCommand";
import type {
  GetLoggerDefinitionCommandInput,
  GetLoggerDefinitionCommandOutput,
} from "./commands/GetLoggerDefinitionCommand";
import type {
  GetLoggerDefinitionVersionCommandInput,
  GetLoggerDefinitionVersionCommandOutput,
} from "./commands/GetLoggerDefinitionVersionCommand";
import type {
  GetResourceDefinitionCommandInput,
  GetResourceDefinitionCommandOutput,
} from "./commands/GetResourceDefinitionCommand";
import type {
  GetResourceDefinitionVersionCommandInput,
  GetResourceDefinitionVersionCommandOutput,
} from "./commands/GetResourceDefinitionVersionCommand";
import type {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "./commands/GetServiceRoleForAccountCommand";
import type {
  GetSubscriptionDefinitionCommandInput,
  GetSubscriptionDefinitionCommandOutput,
} from "./commands/GetSubscriptionDefinitionCommand";
import type {
  GetSubscriptionDefinitionVersionCommandInput,
  GetSubscriptionDefinitionVersionCommandOutput,
} from "./commands/GetSubscriptionDefinitionVersionCommand";
import type {
  GetThingRuntimeConfigurationCommandInput,
  GetThingRuntimeConfigurationCommandOutput,
} from "./commands/GetThingRuntimeConfigurationCommand";
import type {
  ListBulkDeploymentDetailedReportsCommandInput,
  ListBulkDeploymentDetailedReportsCommandOutput,
} from "./commands/ListBulkDeploymentDetailedReportsCommand";
import type {
  ListBulkDeploymentsCommandInput,
  ListBulkDeploymentsCommandOutput,
} from "./commands/ListBulkDeploymentsCommand";
import type {
  ListConnectorDefinitionsCommandInput,
  ListConnectorDefinitionsCommandOutput,
} from "./commands/ListConnectorDefinitionsCommand";
import type {
  ListConnectorDefinitionVersionsCommandInput,
  ListConnectorDefinitionVersionsCommandOutput,
} from "./commands/ListConnectorDefinitionVersionsCommand";
import type {
  ListCoreDefinitionsCommandInput,
  ListCoreDefinitionsCommandOutput,
} from "./commands/ListCoreDefinitionsCommand";
import type {
  ListCoreDefinitionVersionsCommandInput,
  ListCoreDefinitionVersionsCommandOutput,
} from "./commands/ListCoreDefinitionVersionsCommand";
import type { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import type {
  ListDeviceDefinitionsCommandInput,
  ListDeviceDefinitionsCommandOutput,
} from "./commands/ListDeviceDefinitionsCommand";
import type {
  ListDeviceDefinitionVersionsCommandInput,
  ListDeviceDefinitionVersionsCommandOutput,
} from "./commands/ListDeviceDefinitionVersionsCommand";
import type {
  ListFunctionDefinitionsCommandInput,
  ListFunctionDefinitionsCommandOutput,
} from "./commands/ListFunctionDefinitionsCommand";
import type {
  ListFunctionDefinitionVersionsCommandInput,
  ListFunctionDefinitionVersionsCommandOutput,
} from "./commands/ListFunctionDefinitionVersionsCommand";
import type {
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
} from "./commands/ListGroupCertificateAuthoritiesCommand";
import type { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import type {
  ListGroupVersionsCommandInput,
  ListGroupVersionsCommandOutput,
} from "./commands/ListGroupVersionsCommand";
import type {
  ListLoggerDefinitionsCommandInput,
  ListLoggerDefinitionsCommandOutput,
} from "./commands/ListLoggerDefinitionsCommand";
import type {
  ListLoggerDefinitionVersionsCommandInput,
  ListLoggerDefinitionVersionsCommandOutput,
} from "./commands/ListLoggerDefinitionVersionsCommand";
import type {
  ListResourceDefinitionsCommandInput,
  ListResourceDefinitionsCommandOutput,
} from "./commands/ListResourceDefinitionsCommand";
import type {
  ListResourceDefinitionVersionsCommandInput,
  ListResourceDefinitionVersionsCommandOutput,
} from "./commands/ListResourceDefinitionVersionsCommand";
import type {
  ListSubscriptionDefinitionsCommandInput,
  ListSubscriptionDefinitionsCommandOutput,
} from "./commands/ListSubscriptionDefinitionsCommand";
import type {
  ListSubscriptionDefinitionVersionsCommandInput,
  ListSubscriptionDefinitionVersionsCommandOutput,
} from "./commands/ListSubscriptionDefinitionVersionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput } from "./commands/ResetDeploymentsCommand";
import type {
  StartBulkDeploymentCommandInput,
  StartBulkDeploymentCommandOutput,
} from "./commands/StartBulkDeploymentCommand";
import type {
  StopBulkDeploymentCommandInput,
  StopBulkDeploymentCommandOutput,
} from "./commands/StopBulkDeploymentCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "./commands/UpdateConnectivityInfoCommand";
import type {
  UpdateConnectorDefinitionCommandInput,
  UpdateConnectorDefinitionCommandOutput,
} from "./commands/UpdateConnectorDefinitionCommand";
import type {
  UpdateCoreDefinitionCommandInput,
  UpdateCoreDefinitionCommandOutput,
} from "./commands/UpdateCoreDefinitionCommand";
import type {
  UpdateDeviceDefinitionCommandInput,
  UpdateDeviceDefinitionCommandOutput,
} from "./commands/UpdateDeviceDefinitionCommand";
import type {
  UpdateFunctionDefinitionCommandInput,
  UpdateFunctionDefinitionCommandOutput,
} from "./commands/UpdateFunctionDefinitionCommand";
import type {
  UpdateGroupCertificateConfigurationCommandInput,
  UpdateGroupCertificateConfigurationCommandOutput,
} from "./commands/UpdateGroupCertificateConfigurationCommand";
import type { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import type {
  UpdateLoggerDefinitionCommandInput,
  UpdateLoggerDefinitionCommandOutput,
} from "./commands/UpdateLoggerDefinitionCommand";
import type {
  UpdateResourceDefinitionCommandInput,
  UpdateResourceDefinitionCommandOutput,
} from "./commands/UpdateResourceDefinitionCommand";
import type {
  UpdateSubscriptionDefinitionCommandInput,
  UpdateSubscriptionDefinitionCommandOutput,
} from "./commands/UpdateSubscriptionDefinitionCommand";
import type {
  UpdateThingRuntimeConfigurationCommandInput,
  UpdateThingRuntimeConfigurationCommandOutput,
} from "./commands/UpdateThingRuntimeConfigurationCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

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
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

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
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

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
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
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
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of GreengrassClient class. This is resolved and normalized from the {@link GreengrassClientConfig | constructor configuration interface}.
 */
export interface GreengrassClientResolvedConfig extends GreengrassClientResolvedConfigType {}

/**
 * AWS IoT Greengrass seamlessly extends AWS onto physical devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. AWS IoT Greengrass ensures your devices can respond quickly to local events and operate with intermittent connectivity. AWS IoT Greengrass minimizes the cost of transmitting data to the cloud by allowing you to author AWS Lambda functions that execute locally.
 * @public
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
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultGreengrassHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GreengrassClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
