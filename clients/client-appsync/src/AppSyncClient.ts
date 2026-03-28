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
  defaultAppSyncHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateApiCommandInput, AssociateApiCommandOutput } from "./commands/AssociateApiCommand";
import type {
  AssociateMergedGraphqlApiCommandInput,
  AssociateMergedGraphqlApiCommandOutput,
} from "./commands/AssociateMergedGraphqlApiCommand";
import type {
  AssociateSourceGraphqlApiCommandInput,
  AssociateSourceGraphqlApiCommandOutput,
} from "./commands/AssociateSourceGraphqlApiCommand";
import type { CreateApiCacheCommandInput, CreateApiCacheCommandOutput } from "./commands/CreateApiCacheCommand";
import type { CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import type { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand";
import type {
  CreateChannelNamespaceCommandInput,
  CreateChannelNamespaceCommandOutput,
} from "./commands/CreateChannelNamespaceCommand";
import type { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import type { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import type { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import type { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "./commands/CreateGraphqlApiCommand";
import type { CreateResolverCommandInput, CreateResolverCommandOutput } from "./commands/CreateResolverCommand";
import type { CreateTypeCommandInput, CreateTypeCommandOutput } from "./commands/CreateTypeCommand";
import type { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "./commands/DeleteApiCacheCommand";
import type { DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import type { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand";
import type {
  DeleteChannelNamespaceCommandInput,
  DeleteChannelNamespaceCommandOutput,
} from "./commands/DeleteChannelNamespaceCommand";
import type { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import type { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import type { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import type { DeleteGraphqlApiCommandInput, DeleteGraphqlApiCommandOutput } from "./commands/DeleteGraphqlApiCommand";
import type { DeleteResolverCommandInput, DeleteResolverCommandOutput } from "./commands/DeleteResolverCommand";
import type { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "./commands/DeleteTypeCommand";
import type { DisassociateApiCommandInput, DisassociateApiCommandOutput } from "./commands/DisassociateApiCommand";
import type {
  DisassociateMergedGraphqlApiCommandInput,
  DisassociateMergedGraphqlApiCommandOutput,
} from "./commands/DisassociateMergedGraphqlApiCommand";
import type {
  DisassociateSourceGraphqlApiCommandInput,
  DisassociateSourceGraphqlApiCommandOutput,
} from "./commands/DisassociateSourceGraphqlApiCommand";
import type { EvaluateCodeCommandInput, EvaluateCodeCommandOutput } from "./commands/EvaluateCodeCommand";
import type {
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
} from "./commands/EvaluateMappingTemplateCommand";
import type { FlushApiCacheCommandInput, FlushApiCacheCommandOutput } from "./commands/FlushApiCacheCommand";
import type {
  GetApiAssociationCommandInput,
  GetApiAssociationCommandOutput,
} from "./commands/GetApiAssociationCommand";
import type { GetApiCacheCommandInput, GetApiCacheCommandOutput } from "./commands/GetApiCacheCommand";
import type { GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import type {
  GetChannelNamespaceCommandInput,
  GetChannelNamespaceCommandOutput,
} from "./commands/GetChannelNamespaceCommand";
import type { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import type {
  GetDataSourceIntrospectionCommandInput,
  GetDataSourceIntrospectionCommandOutput,
} from "./commands/GetDataSourceIntrospectionCommand";
import type { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import type { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import type { GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput } from "./commands/GetGraphqlApiCommand";
import type {
  GetGraphqlApiEnvironmentVariablesCommandInput,
  GetGraphqlApiEnvironmentVariablesCommandOutput,
} from "./commands/GetGraphqlApiEnvironmentVariablesCommand";
import type {
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "./commands/GetIntrospectionSchemaCommand";
import type { GetResolverCommandInput, GetResolverCommandOutput } from "./commands/GetResolverCommand";
import type {
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "./commands/GetSchemaCreationStatusCommand";
import type {
  GetSourceApiAssociationCommandInput,
  GetSourceApiAssociationCommandOutput,
} from "./commands/GetSourceApiAssociationCommand";
import type { GetTypeCommandInput, GetTypeCommandOutput } from "./commands/GetTypeCommand";
import type { ListApiKeysCommandInput, ListApiKeysCommandOutput } from "./commands/ListApiKeysCommand";
import type { ListApisCommandInput, ListApisCommandOutput } from "./commands/ListApisCommand";
import type {
  ListChannelNamespacesCommandInput,
  ListChannelNamespacesCommandOutput,
} from "./commands/ListChannelNamespacesCommand";
import type { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import type { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import type { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import type { ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput } from "./commands/ListGraphqlApisCommand";
import type {
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "./commands/ListResolversByFunctionCommand";
import type { ListResolversCommandInput, ListResolversCommandOutput } from "./commands/ListResolversCommand";
import type {
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput,
} from "./commands/ListSourceApiAssociationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput,
} from "./commands/ListTypesByAssociationCommand";
import type { ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import type {
  PutGraphqlApiEnvironmentVariablesCommandInput,
  PutGraphqlApiEnvironmentVariablesCommandOutput,
} from "./commands/PutGraphqlApiEnvironmentVariablesCommand";
import type {
  StartDataSourceIntrospectionCommandInput,
  StartDataSourceIntrospectionCommandOutput,
} from "./commands/StartDataSourceIntrospectionCommand";
import type {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "./commands/StartSchemaCreationCommand";
import type { StartSchemaMergeCommandInput, StartSchemaMergeCommandOutput } from "./commands/StartSchemaMergeCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "./commands/UpdateApiCacheCommand";
import type { UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import type { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand";
import type {
  UpdateChannelNamespaceCommandInput,
  UpdateChannelNamespaceCommandOutput,
} from "./commands/UpdateChannelNamespaceCommand";
import type { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import type { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import type { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "./commands/UpdateFunctionCommand";
import type { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "./commands/UpdateGraphqlApiCommand";
import type { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "./commands/UpdateResolverCommand";
import type {
  UpdateSourceApiAssociationCommandInput,
  UpdateSourceApiAssociationCommandOutput,
} from "./commands/UpdateSourceApiAssociationCommand";
import type { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "./commands/UpdateTypeCommand";
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
  | AssociateApiCommandInput
  | AssociateMergedGraphqlApiCommandInput
  | AssociateSourceGraphqlApiCommandInput
  | CreateApiCacheCommandInput
  | CreateApiCommandInput
  | CreateApiKeyCommandInput
  | CreateChannelNamespaceCommandInput
  | CreateDataSourceCommandInput
  | CreateDomainNameCommandInput
  | CreateFunctionCommandInput
  | CreateGraphqlApiCommandInput
  | CreateResolverCommandInput
  | CreateTypeCommandInput
  | DeleteApiCacheCommandInput
  | DeleteApiCommandInput
  | DeleteApiKeyCommandInput
  | DeleteChannelNamespaceCommandInput
  | DeleteDataSourceCommandInput
  | DeleteDomainNameCommandInput
  | DeleteFunctionCommandInput
  | DeleteGraphqlApiCommandInput
  | DeleteResolverCommandInput
  | DeleteTypeCommandInput
  | DisassociateApiCommandInput
  | DisassociateMergedGraphqlApiCommandInput
  | DisassociateSourceGraphqlApiCommandInput
  | EvaluateCodeCommandInput
  | EvaluateMappingTemplateCommandInput
  | FlushApiCacheCommandInput
  | GetApiAssociationCommandInput
  | GetApiCacheCommandInput
  | GetApiCommandInput
  | GetChannelNamespaceCommandInput
  | GetDataSourceCommandInput
  | GetDataSourceIntrospectionCommandInput
  | GetDomainNameCommandInput
  | GetFunctionCommandInput
  | GetGraphqlApiCommandInput
  | GetGraphqlApiEnvironmentVariablesCommandInput
  | GetIntrospectionSchemaCommandInput
  | GetResolverCommandInput
  | GetSchemaCreationStatusCommandInput
  | GetSourceApiAssociationCommandInput
  | GetTypeCommandInput
  | ListApiKeysCommandInput
  | ListApisCommandInput
  | ListChannelNamespacesCommandInput
  | ListDataSourcesCommandInput
  | ListDomainNamesCommandInput
  | ListFunctionsCommandInput
  | ListGraphqlApisCommandInput
  | ListResolversByFunctionCommandInput
  | ListResolversCommandInput
  | ListSourceApiAssociationsCommandInput
  | ListTagsForResourceCommandInput
  | ListTypesByAssociationCommandInput
  | ListTypesCommandInput
  | PutGraphqlApiEnvironmentVariablesCommandInput
  | StartDataSourceIntrospectionCommandInput
  | StartSchemaCreationCommandInput
  | StartSchemaMergeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApiCacheCommandInput
  | UpdateApiCommandInput
  | UpdateApiKeyCommandInput
  | UpdateChannelNamespaceCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDomainNameCommandInput
  | UpdateFunctionCommandInput
  | UpdateGraphqlApiCommandInput
  | UpdateResolverCommandInput
  | UpdateSourceApiAssociationCommandInput
  | UpdateTypeCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateApiCommandOutput
  | AssociateMergedGraphqlApiCommandOutput
  | AssociateSourceGraphqlApiCommandOutput
  | CreateApiCacheCommandOutput
  | CreateApiCommandOutput
  | CreateApiKeyCommandOutput
  | CreateChannelNamespaceCommandOutput
  | CreateDataSourceCommandOutput
  | CreateDomainNameCommandOutput
  | CreateFunctionCommandOutput
  | CreateGraphqlApiCommandOutput
  | CreateResolverCommandOutput
  | CreateTypeCommandOutput
  | DeleteApiCacheCommandOutput
  | DeleteApiCommandOutput
  | DeleteApiKeyCommandOutput
  | DeleteChannelNamespaceCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteDomainNameCommandOutput
  | DeleteFunctionCommandOutput
  | DeleteGraphqlApiCommandOutput
  | DeleteResolverCommandOutput
  | DeleteTypeCommandOutput
  | DisassociateApiCommandOutput
  | DisassociateMergedGraphqlApiCommandOutput
  | DisassociateSourceGraphqlApiCommandOutput
  | EvaluateCodeCommandOutput
  | EvaluateMappingTemplateCommandOutput
  | FlushApiCacheCommandOutput
  | GetApiAssociationCommandOutput
  | GetApiCacheCommandOutput
  | GetApiCommandOutput
  | GetChannelNamespaceCommandOutput
  | GetDataSourceCommandOutput
  | GetDataSourceIntrospectionCommandOutput
  | GetDomainNameCommandOutput
  | GetFunctionCommandOutput
  | GetGraphqlApiCommandOutput
  | GetGraphqlApiEnvironmentVariablesCommandOutput
  | GetIntrospectionSchemaCommandOutput
  | GetResolverCommandOutput
  | GetSchemaCreationStatusCommandOutput
  | GetSourceApiAssociationCommandOutput
  | GetTypeCommandOutput
  | ListApiKeysCommandOutput
  | ListApisCommandOutput
  | ListChannelNamespacesCommandOutput
  | ListDataSourcesCommandOutput
  | ListDomainNamesCommandOutput
  | ListFunctionsCommandOutput
  | ListGraphqlApisCommandOutput
  | ListResolversByFunctionCommandOutput
  | ListResolversCommandOutput
  | ListSourceApiAssociationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTypesByAssociationCommandOutput
  | ListTypesCommandOutput
  | PutGraphqlApiEnvironmentVariablesCommandOutput
  | StartDataSourceIntrospectionCommandOutput
  | StartSchemaCreationCommandOutput
  | StartSchemaMergeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApiCacheCommandOutput
  | UpdateApiCommandOutput
  | UpdateApiKeyCommandOutput
  | UpdateChannelNamespaceCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDomainNameCommandOutput
  | UpdateFunctionCommandOutput
  | UpdateGraphqlApiCommandOutput
  | UpdateResolverCommandOutput
  | UpdateSourceApiAssociationCommandOutput
  | UpdateTypeCommandOutput;

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
export type AppSyncClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AppSyncClient class constructor that set the region, credentials and other options.
 */
export interface AppSyncClientConfig extends AppSyncClientConfigType {}

/**
 * @public
 */
export type AppSyncClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AppSyncClient class. This is resolved and normalized from the {@link AppSyncClientConfig | constructor configuration interface}.
 */
export interface AppSyncClientResolvedConfig extends AppSyncClientResolvedConfigType {}

/**
 * <p>AppSync provides API actions for creating and interacting with data
 *          sources using GraphQL from your application.</p>
 * @public
 */
export class AppSyncClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppSyncClientResolvedConfig
> {
  /**
   * The resolved configuration of AppSyncClient class. This is resolved and normalized from the {@link AppSyncClientConfig | constructor configuration interface}.
   */
  readonly config: AppSyncClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AppSyncClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAppSyncHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppSyncClientResolvedConfig) =>
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
