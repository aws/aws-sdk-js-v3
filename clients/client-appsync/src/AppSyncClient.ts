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
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
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
} from "@smithy/types";

import { AssociateApiCommandInput, AssociateApiCommandOutput } from "./commands/AssociateApiCommand";
import {
  AssociateMergedGraphqlApiCommandInput,
  AssociateMergedGraphqlApiCommandOutput,
} from "./commands/AssociateMergedGraphqlApiCommand";
import {
  AssociateSourceGraphqlApiCommandInput,
  AssociateSourceGraphqlApiCommandOutput,
} from "./commands/AssociateSourceGraphqlApiCommand";
import { CreateApiCacheCommandInput, CreateApiCacheCommandOutput } from "./commands/CreateApiCacheCommand";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "./commands/CreateGraphqlApiCommand";
import { CreateResolverCommandInput, CreateResolverCommandOutput } from "./commands/CreateResolverCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "./commands/CreateTypeCommand";
import { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "./commands/DeleteApiCacheCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import { DeleteGraphqlApiCommandInput, DeleteGraphqlApiCommandOutput } from "./commands/DeleteGraphqlApiCommand";
import { DeleteResolverCommandInput, DeleteResolverCommandOutput } from "./commands/DeleteResolverCommand";
import { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "./commands/DeleteTypeCommand";
import { DisassociateApiCommandInput, DisassociateApiCommandOutput } from "./commands/DisassociateApiCommand";
import {
  DisassociateMergedGraphqlApiCommandInput,
  DisassociateMergedGraphqlApiCommandOutput,
} from "./commands/DisassociateMergedGraphqlApiCommand";
import {
  DisassociateSourceGraphqlApiCommandInput,
  DisassociateSourceGraphqlApiCommandOutput,
} from "./commands/DisassociateSourceGraphqlApiCommand";
import { EvaluateCodeCommandInput, EvaluateCodeCommandOutput } from "./commands/EvaluateCodeCommand";
import {
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
} from "./commands/EvaluateMappingTemplateCommand";
import { FlushApiCacheCommandInput, FlushApiCacheCommandOutput } from "./commands/FlushApiCacheCommand";
import { GetApiAssociationCommandInput, GetApiAssociationCommandOutput } from "./commands/GetApiAssociationCommand";
import { GetApiCacheCommandInput, GetApiCacheCommandOutput } from "./commands/GetApiCacheCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import { GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput } from "./commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "./commands/GetIntrospectionSchemaCommand";
import { GetResolverCommandInput, GetResolverCommandOutput } from "./commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "./commands/GetSchemaCreationStatusCommand";
import {
  GetSourceApiAssociationCommandInput,
  GetSourceApiAssociationCommandOutput,
} from "./commands/GetSourceApiAssociationCommand";
import { GetTypeCommandInput, GetTypeCommandOutput } from "./commands/GetTypeCommand";
import { ListApiKeysCommandInput, ListApiKeysCommandOutput } from "./commands/ListApiKeysCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import { ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput } from "./commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "./commands/ListResolversByFunctionCommand";
import { ListResolversCommandInput, ListResolversCommandOutput } from "./commands/ListResolversCommand";
import {
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput,
} from "./commands/ListSourceApiAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput,
} from "./commands/ListTypesByAssociationCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "./commands/StartSchemaCreationCommand";
import { StartSchemaMergeCommandInput, StartSchemaMergeCommandOutput } from "./commands/StartSchemaMergeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "./commands/UpdateApiCacheCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "./commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "./commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "./commands/UpdateResolverCommand";
import {
  UpdateSourceApiAssociationCommandInput,
  UpdateSourceApiAssociationCommandOutput,
} from "./commands/UpdateSourceApiAssociationCommand";
import { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "./commands/UpdateTypeCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateApiCommandInput
  | AssociateMergedGraphqlApiCommandInput
  | AssociateSourceGraphqlApiCommandInput
  | CreateApiCacheCommandInput
  | CreateApiKeyCommandInput
  | CreateDataSourceCommandInput
  | CreateDomainNameCommandInput
  | CreateFunctionCommandInput
  | CreateGraphqlApiCommandInput
  | CreateResolverCommandInput
  | CreateTypeCommandInput
  | DeleteApiCacheCommandInput
  | DeleteApiKeyCommandInput
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
  | GetDataSourceCommandInput
  | GetDomainNameCommandInput
  | GetFunctionCommandInput
  | GetGraphqlApiCommandInput
  | GetIntrospectionSchemaCommandInput
  | GetResolverCommandInput
  | GetSchemaCreationStatusCommandInput
  | GetSourceApiAssociationCommandInput
  | GetTypeCommandInput
  | ListApiKeysCommandInput
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
  | StartSchemaCreationCommandInput
  | StartSchemaMergeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApiCacheCommandInput
  | UpdateApiKeyCommandInput
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
  | CreateApiKeyCommandOutput
  | CreateDataSourceCommandOutput
  | CreateDomainNameCommandOutput
  | CreateFunctionCommandOutput
  | CreateGraphqlApiCommandOutput
  | CreateResolverCommandOutput
  | CreateTypeCommandOutput
  | DeleteApiCacheCommandOutput
  | DeleteApiKeyCommandOutput
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
  | GetDataSourceCommandOutput
  | GetDomainNameCommandOutput
  | GetFunctionCommandOutput
  | GetGraphqlApiCommandOutput
  | GetIntrospectionSchemaCommandOutput
  | GetResolverCommandOutput
  | GetSchemaCreationStatusCommandOutput
  | GetSourceApiAssociationCommandOutput
  | GetTypeCommandOutput
  | ListApiKeysCommandOutput
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
  | StartSchemaCreationCommandOutput
  | StartSchemaMergeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApiCacheCommandOutput
  | UpdateApiKeyCommandOutput
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
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

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
 *  The configuration interface of AppSyncClient class constructor that set the region, credentials and other options.
 */
export interface AppSyncClientConfig extends AppSyncClientConfigType {}

/**
 * @public
 */
export type AppSyncClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
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
 *  The resolved configuration interface of AppSyncClient class. This is resolved and normalized from the {@link AppSyncClientConfig | constructor configuration interface}.
 */
export interface AppSyncClientResolvedConfig extends AppSyncClientResolvedConfigType {}

/**
 * @public
 * <p>AppSync provides API actions for creating and interacting with data
 *          sources using GraphQL from your application.</p>
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

  constructor(configuration: AppSyncClientConfig) {
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
