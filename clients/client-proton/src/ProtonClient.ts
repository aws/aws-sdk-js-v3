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
  defaultProtonHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
} from "./commands/AcceptEnvironmentAccountConnectionCommand";
import type {
  CancelComponentDeploymentCommandInput,
  CancelComponentDeploymentCommandOutput,
} from "./commands/CancelComponentDeploymentCommand";
import type {
  CancelEnvironmentDeploymentCommandInput,
  CancelEnvironmentDeploymentCommandOutput,
} from "./commands/CancelEnvironmentDeploymentCommand";
import type {
  CancelServiceInstanceDeploymentCommandInput,
  CancelServiceInstanceDeploymentCommandOutput,
} from "./commands/CancelServiceInstanceDeploymentCommand";
import type {
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
} from "./commands/CancelServicePipelineDeploymentCommand";
import type { CreateComponentCommandInput, CreateComponentCommandOutput } from "./commands/CreateComponentCommand";
import type {
  CreateEnvironmentAccountConnectionCommandInput,
  CreateEnvironmentAccountConnectionCommandOutput,
} from "./commands/CreateEnvironmentAccountConnectionCommand";
import type {
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import type {
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
} from "./commands/CreateEnvironmentTemplateCommand";
import type {
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
} from "./commands/CreateEnvironmentTemplateVersionCommand";
import type { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import type { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import type {
  CreateServiceInstanceCommandInput,
  CreateServiceInstanceCommandOutput,
} from "./commands/CreateServiceInstanceCommand";
import type {
  CreateServiceSyncConfigCommandInput,
  CreateServiceSyncConfigCommandOutput,
} from "./commands/CreateServiceSyncConfigCommand";
import type {
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
} from "./commands/CreateServiceTemplateCommand";
import type {
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
} from "./commands/CreateServiceTemplateVersionCommand";
import type {
  CreateTemplateSyncConfigCommandInput,
  CreateTemplateSyncConfigCommandOutput,
} from "./commands/CreateTemplateSyncConfigCommand";
import type { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import type { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import type {
  DeleteEnvironmentAccountConnectionCommandInput,
  DeleteEnvironmentAccountConnectionCommandOutput,
} from "./commands/DeleteEnvironmentAccountConnectionCommand";
import type {
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import type {
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
} from "./commands/DeleteEnvironmentTemplateCommand";
import type {
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
} from "./commands/DeleteEnvironmentTemplateVersionCommand";
import type { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import type { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import type {
  DeleteServiceSyncConfigCommandInput,
  DeleteServiceSyncConfigCommandOutput,
} from "./commands/DeleteServiceSyncConfigCommand";
import type {
  DeleteServiceTemplateCommandInput,
  DeleteServiceTemplateCommandOutput,
} from "./commands/DeleteServiceTemplateCommand";
import type {
  DeleteServiceTemplateVersionCommandInput,
  DeleteServiceTemplateVersionCommandOutput,
} from "./commands/DeleteServiceTemplateVersionCommand";
import type {
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
} from "./commands/DeleteTemplateSyncConfigCommand";
import type {
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import type { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand";
import type { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import type {
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
} from "./commands/GetEnvironmentAccountConnectionCommand";
import type { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import type {
  GetEnvironmentTemplateCommandInput,
  GetEnvironmentTemplateCommandOutput,
} from "./commands/GetEnvironmentTemplateCommand";
import type {
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
} from "./commands/GetEnvironmentTemplateVersionCommand";
import type { GetRepositoryCommandInput, GetRepositoryCommandOutput } from "./commands/GetRepositoryCommand";
import type {
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "./commands/GetRepositorySyncStatusCommand";
import type {
  GetResourcesSummaryCommandInput,
  GetResourcesSummaryCommandOutput,
} from "./commands/GetResourcesSummaryCommand";
import type { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import type {
  GetServiceInstanceCommandInput,
  GetServiceInstanceCommandOutput,
} from "./commands/GetServiceInstanceCommand";
import type {
  GetServiceInstanceSyncStatusCommandInput,
  GetServiceInstanceSyncStatusCommandOutput,
} from "./commands/GetServiceInstanceSyncStatusCommand";
import type {
  GetServiceSyncBlockerSummaryCommandInput,
  GetServiceSyncBlockerSummaryCommandOutput,
} from "./commands/GetServiceSyncBlockerSummaryCommand";
import type {
  GetServiceSyncConfigCommandInput,
  GetServiceSyncConfigCommandOutput,
} from "./commands/GetServiceSyncConfigCommand";
import type {
  GetServiceTemplateCommandInput,
  GetServiceTemplateCommandOutput,
} from "./commands/GetServiceTemplateCommand";
import type {
  GetServiceTemplateVersionCommandInput,
  GetServiceTemplateVersionCommandOutput,
} from "./commands/GetServiceTemplateVersionCommand";
import type {
  GetTemplateSyncConfigCommandInput,
  GetTemplateSyncConfigCommandOutput,
} from "./commands/GetTemplateSyncConfigCommand";
import type {
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
} from "./commands/GetTemplateSyncStatusCommand";
import type {
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "./commands/ListComponentOutputsCommand";
import type {
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "./commands/ListComponentProvisionedResourcesCommand";
import type { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import type { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import type {
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "./commands/ListEnvironmentAccountConnectionsCommand";
import type {
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "./commands/ListEnvironmentOutputsCommand";
import type {
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "./commands/ListEnvironmentProvisionedResourcesCommand";
import type { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import type {
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "./commands/ListEnvironmentTemplatesCommand";
import type {
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "./commands/ListEnvironmentTemplateVersionsCommand";
import type { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import type {
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "./commands/ListRepositorySyncDefinitionsCommand";
import type {
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "./commands/ListServiceInstanceOutputsCommand";
import type {
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "./commands/ListServiceInstanceProvisionedResourcesCommand";
import type {
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "./commands/ListServiceInstancesCommand";
import type {
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "./commands/ListServicePipelineOutputsCommand";
import type {
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "./commands/ListServicePipelineProvisionedResourcesCommand";
import type { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import type {
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "./commands/ListServiceTemplatesCommand";
import type {
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "./commands/ListServiceTemplateVersionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
} from "./commands/NotifyResourceDeploymentStatusChangeCommand";
import type {
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
} from "./commands/RejectEnvironmentAccountConnectionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import type { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "./commands/UpdateComponentCommand";
import type {
  UpdateEnvironmentAccountConnectionCommandInput,
  UpdateEnvironmentAccountConnectionCommandOutput,
} from "./commands/UpdateEnvironmentAccountConnectionCommand";
import type {
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import type {
  UpdateEnvironmentTemplateCommandInput,
  UpdateEnvironmentTemplateCommandOutput,
} from "./commands/UpdateEnvironmentTemplateCommand";
import type {
  UpdateEnvironmentTemplateVersionCommandInput,
  UpdateEnvironmentTemplateVersionCommandOutput,
} from "./commands/UpdateEnvironmentTemplateVersionCommand";
import type { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import type {
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
} from "./commands/UpdateServiceInstanceCommand";
import type {
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
} from "./commands/UpdateServicePipelineCommand";
import type {
  UpdateServiceSyncBlockerCommandInput,
  UpdateServiceSyncBlockerCommandOutput,
} from "./commands/UpdateServiceSyncBlockerCommand";
import type {
  UpdateServiceSyncConfigCommandInput,
  UpdateServiceSyncConfigCommandOutput,
} from "./commands/UpdateServiceSyncConfigCommand";
import type {
  UpdateServiceTemplateCommandInput,
  UpdateServiceTemplateCommandOutput,
} from "./commands/UpdateServiceTemplateCommand";
import type {
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
} from "./commands/UpdateServiceTemplateVersionCommand";
import type {
  UpdateTemplateSyncConfigCommandInput,
  UpdateTemplateSyncConfigCommandOutput,
} from "./commands/UpdateTemplateSyncConfigCommand";
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
  | AcceptEnvironmentAccountConnectionCommandInput
  | CancelComponentDeploymentCommandInput
  | CancelEnvironmentDeploymentCommandInput
  | CancelServiceInstanceDeploymentCommandInput
  | CancelServicePipelineDeploymentCommandInput
  | CreateComponentCommandInput
  | CreateEnvironmentAccountConnectionCommandInput
  | CreateEnvironmentCommandInput
  | CreateEnvironmentTemplateCommandInput
  | CreateEnvironmentTemplateVersionCommandInput
  | CreateRepositoryCommandInput
  | CreateServiceCommandInput
  | CreateServiceInstanceCommandInput
  | CreateServiceSyncConfigCommandInput
  | CreateServiceTemplateCommandInput
  | CreateServiceTemplateVersionCommandInput
  | CreateTemplateSyncConfigCommandInput
  | DeleteComponentCommandInput
  | DeleteDeploymentCommandInput
  | DeleteEnvironmentAccountConnectionCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentTemplateCommandInput
  | DeleteEnvironmentTemplateVersionCommandInput
  | DeleteRepositoryCommandInput
  | DeleteServiceCommandInput
  | DeleteServiceSyncConfigCommandInput
  | DeleteServiceTemplateCommandInput
  | DeleteServiceTemplateVersionCommandInput
  | DeleteTemplateSyncConfigCommandInput
  | GetAccountSettingsCommandInput
  | GetComponentCommandInput
  | GetDeploymentCommandInput
  | GetEnvironmentAccountConnectionCommandInput
  | GetEnvironmentCommandInput
  | GetEnvironmentTemplateCommandInput
  | GetEnvironmentTemplateVersionCommandInput
  | GetRepositoryCommandInput
  | GetRepositorySyncStatusCommandInput
  | GetResourcesSummaryCommandInput
  | GetServiceCommandInput
  | GetServiceInstanceCommandInput
  | GetServiceInstanceSyncStatusCommandInput
  | GetServiceSyncBlockerSummaryCommandInput
  | GetServiceSyncConfigCommandInput
  | GetServiceTemplateCommandInput
  | GetServiceTemplateVersionCommandInput
  | GetTemplateSyncConfigCommandInput
  | GetTemplateSyncStatusCommandInput
  | ListComponentOutputsCommandInput
  | ListComponentProvisionedResourcesCommandInput
  | ListComponentsCommandInput
  | ListDeploymentsCommandInput
  | ListEnvironmentAccountConnectionsCommandInput
  | ListEnvironmentOutputsCommandInput
  | ListEnvironmentProvisionedResourcesCommandInput
  | ListEnvironmentTemplateVersionsCommandInput
  | ListEnvironmentTemplatesCommandInput
  | ListEnvironmentsCommandInput
  | ListRepositoriesCommandInput
  | ListRepositorySyncDefinitionsCommandInput
  | ListServiceInstanceOutputsCommandInput
  | ListServiceInstanceProvisionedResourcesCommandInput
  | ListServiceInstancesCommandInput
  | ListServicePipelineOutputsCommandInput
  | ListServicePipelineProvisionedResourcesCommandInput
  | ListServiceTemplateVersionsCommandInput
  | ListServiceTemplatesCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | NotifyResourceDeploymentStatusChangeCommandInput
  | RejectEnvironmentAccountConnectionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateComponentCommandInput
  | UpdateEnvironmentAccountConnectionCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentTemplateCommandInput
  | UpdateEnvironmentTemplateVersionCommandInput
  | UpdateServiceCommandInput
  | UpdateServiceInstanceCommandInput
  | UpdateServicePipelineCommandInput
  | UpdateServiceSyncBlockerCommandInput
  | UpdateServiceSyncConfigCommandInput
  | UpdateServiceTemplateCommandInput
  | UpdateServiceTemplateVersionCommandInput
  | UpdateTemplateSyncConfigCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptEnvironmentAccountConnectionCommandOutput
  | CancelComponentDeploymentCommandOutput
  | CancelEnvironmentDeploymentCommandOutput
  | CancelServiceInstanceDeploymentCommandOutput
  | CancelServicePipelineDeploymentCommandOutput
  | CreateComponentCommandOutput
  | CreateEnvironmentAccountConnectionCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateEnvironmentTemplateCommandOutput
  | CreateEnvironmentTemplateVersionCommandOutput
  | CreateRepositoryCommandOutput
  | CreateServiceCommandOutput
  | CreateServiceInstanceCommandOutput
  | CreateServiceSyncConfigCommandOutput
  | CreateServiceTemplateCommandOutput
  | CreateServiceTemplateVersionCommandOutput
  | CreateTemplateSyncConfigCommandOutput
  | DeleteComponentCommandOutput
  | DeleteDeploymentCommandOutput
  | DeleteEnvironmentAccountConnectionCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentTemplateCommandOutput
  | DeleteEnvironmentTemplateVersionCommandOutput
  | DeleteRepositoryCommandOutput
  | DeleteServiceCommandOutput
  | DeleteServiceSyncConfigCommandOutput
  | DeleteServiceTemplateCommandOutput
  | DeleteServiceTemplateVersionCommandOutput
  | DeleteTemplateSyncConfigCommandOutput
  | GetAccountSettingsCommandOutput
  | GetComponentCommandOutput
  | GetDeploymentCommandOutput
  | GetEnvironmentAccountConnectionCommandOutput
  | GetEnvironmentCommandOutput
  | GetEnvironmentTemplateCommandOutput
  | GetEnvironmentTemplateVersionCommandOutput
  | GetRepositoryCommandOutput
  | GetRepositorySyncStatusCommandOutput
  | GetResourcesSummaryCommandOutput
  | GetServiceCommandOutput
  | GetServiceInstanceCommandOutput
  | GetServiceInstanceSyncStatusCommandOutput
  | GetServiceSyncBlockerSummaryCommandOutput
  | GetServiceSyncConfigCommandOutput
  | GetServiceTemplateCommandOutput
  | GetServiceTemplateVersionCommandOutput
  | GetTemplateSyncConfigCommandOutput
  | GetTemplateSyncStatusCommandOutput
  | ListComponentOutputsCommandOutput
  | ListComponentProvisionedResourcesCommandOutput
  | ListComponentsCommandOutput
  | ListDeploymentsCommandOutput
  | ListEnvironmentAccountConnectionsCommandOutput
  | ListEnvironmentOutputsCommandOutput
  | ListEnvironmentProvisionedResourcesCommandOutput
  | ListEnvironmentTemplateVersionsCommandOutput
  | ListEnvironmentTemplatesCommandOutput
  | ListEnvironmentsCommandOutput
  | ListRepositoriesCommandOutput
  | ListRepositorySyncDefinitionsCommandOutput
  | ListServiceInstanceOutputsCommandOutput
  | ListServiceInstanceProvisionedResourcesCommandOutput
  | ListServiceInstancesCommandOutput
  | ListServicePipelineOutputsCommandOutput
  | ListServicePipelineProvisionedResourcesCommandOutput
  | ListServiceTemplateVersionsCommandOutput
  | ListServiceTemplatesCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | NotifyResourceDeploymentStatusChangeCommandOutput
  | RejectEnvironmentAccountConnectionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateComponentCommandOutput
  | UpdateEnvironmentAccountConnectionCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentTemplateCommandOutput
  | UpdateEnvironmentTemplateVersionCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServiceInstanceCommandOutput
  | UpdateServicePipelineCommandOutput
  | UpdateServiceSyncBlockerCommandOutput
  | UpdateServiceSyncConfigCommandOutput
  | UpdateServiceTemplateCommandOutput
  | UpdateServiceTemplateVersionCommandOutput
  | UpdateTemplateSyncConfigCommandOutput;

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
export type ProtonClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ProtonClient class constructor that set the region, credentials and other options.
 */
export interface ProtonClientConfig extends ProtonClientConfigType {}

/**
 * @public
 */
export type ProtonClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ProtonClient class. This is resolved and normalized from the {@link ProtonClientConfig | constructor configuration interface}.
 */
export interface ProtonClientResolvedConfig extends ProtonClientResolvedConfigType {}

/**
 * <p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the
 *     <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton
 *    service.</p>
 *          <p>The documentation for each action shows the Query API request parameters and the XML response.</p>
 *          <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User
 *     Guide</a>.</p>
 *          <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide
 *    standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in
 *    turn, select from the available service templates to automate their application or service deployments.</p>
 *          <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need
 *    permissions to use all of the listed API operations.</p>
 *          <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To
 *    monitor their applications that are running on Proton, developers need permissions to the service
 *     <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i>
 *    API operations and the service instance <i>list</i> and <i>update</i> API
 *    operations.</p>
 *          <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p>
 *          <p>
 *             <b>Ensuring Idempotency</b>
 *          </p>
 *          <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows
 *    of the operation are complete. Operations might also time out or encounter other server issues before they're
 *    complete, even if the request already returned a result. This might make it difficult to determine whether the
 *    request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation
 *    completes successfully. However, if the original request and the subsequent retries are successful, the operation
 *    occurs multiple times. This means that you might create more resources than you intended.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request action completes no more than one time. With an
 *    idempotent request, if the original request action completes successfully, any subsequent retries complete
 *    successfully without performing any further actions. However, the result might contain updated information, such as
 *    the current creation status.</p>
 *          <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
 *          <p>
 *             <b>Idempotent create APIs with a client token</b>
 *          </p>
 *          <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The
 *    corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique,
 *    case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions,
 *    specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token
 *    for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically
 *    provided by SDKs.</p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request using the same client token and the same parameters, the retry succeeds without
 *    performing any further actions other than returning the original resource detail data in the response.</p>
 *          <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry
 *    throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new
 *    resource is created.</p>
 *          <p>If the original resource is deleted and you retry the request, a new resource is created.</p>
 *          <p>Idempotent create APIs with a client token:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent create APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been
 *    modified, the retry succeeds without performing any further actions other than returning the original resource detail
 *    data in the response.</p>
 *          <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p>
 *          <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an
 *     <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Idempotent create APIs:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironment</p>
 *             </li>
 *             <li>
 *                <p>CreateService</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in
 *    the response.</p>
 *          <p>If you retry and the resource doesn't exist, the response is empty.</p>
 *          <p>In both cases, the retry succeeds.</p>
 *          <p>Idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Asynchronous idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, if the original request delete operation status is
 *     <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any
 *    further actions.</p>
 *          <p>If the original request delete operation is complete, a retry returns an empty response.</p>
 *          <p>Asynchronous idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironment</p>
 *             </li>
 *             <li>
 *                <p>DeleteService</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ProtonClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ProtonClientResolvedConfig
> {
  /**
   * The resolved configuration of ProtonClient class. This is resolved and normalized from the {@link ProtonClientConfig | constructor configuration interface}.
   */
  readonly config: ProtonClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ProtonClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultProtonHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ProtonClientResolvedConfig) =>
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
