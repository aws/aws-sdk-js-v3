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
  defaultKendraHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateEntitiesToExperienceCommandInput,
  AssociateEntitiesToExperienceCommandOutput,
} from "./commands/AssociateEntitiesToExperienceCommand";
import type {
  AssociatePersonasToEntitiesCommandInput,
  AssociatePersonasToEntitiesCommandOutput,
} from "./commands/AssociatePersonasToEntitiesCommand";
import type {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import type {
  BatchDeleteFeaturedResultsSetCommandInput,
  BatchDeleteFeaturedResultsSetCommandOutput,
} from "./commands/BatchDeleteFeaturedResultsSetCommand";
import type {
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
} from "./commands/BatchGetDocumentStatusCommand";
import type { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import type {
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
} from "./commands/ClearQuerySuggestionsCommand";
import type {
  CreateAccessControlConfigurationCommandInput,
  CreateAccessControlConfigurationCommandOutput,
} from "./commands/CreateAccessControlConfigurationCommand";
import type { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import type { CreateExperienceCommandInput, CreateExperienceCommandOutput } from "./commands/CreateExperienceCommand";
import type { CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import type {
  CreateFeaturedResultsSetCommandInput,
  CreateFeaturedResultsSetCommandOutput,
} from "./commands/CreateFeaturedResultsSetCommand";
import type { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import type {
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "./commands/CreateQuerySuggestionsBlockListCommand";
import type { CreateThesaurusCommandInput, CreateThesaurusCommandOutput } from "./commands/CreateThesaurusCommand";
import type {
  DeleteAccessControlConfigurationCommandInput,
  DeleteAccessControlConfigurationCommandOutput,
} from "./commands/DeleteAccessControlConfigurationCommand";
import type { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import type { DeleteExperienceCommandInput, DeleteExperienceCommandOutput } from "./commands/DeleteExperienceCommand";
import type { DeleteFaqCommandInput, DeleteFaqCommandOutput } from "./commands/DeleteFaqCommand";
import type { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import type {
  DeletePrincipalMappingCommandInput,
  DeletePrincipalMappingCommandOutput,
} from "./commands/DeletePrincipalMappingCommand";
import type {
  DeleteQuerySuggestionsBlockListCommandInput,
  DeleteQuerySuggestionsBlockListCommandOutput,
} from "./commands/DeleteQuerySuggestionsBlockListCommand";
import type { DeleteThesaurusCommandInput, DeleteThesaurusCommandOutput } from "./commands/DeleteThesaurusCommand";
import type {
  DescribeAccessControlConfigurationCommandInput,
  DescribeAccessControlConfigurationCommandOutput,
} from "./commands/DescribeAccessControlConfigurationCommand";
import type {
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
} from "./commands/DescribeDataSourceCommand";
import type {
  DescribeExperienceCommandInput,
  DescribeExperienceCommandOutput,
} from "./commands/DescribeExperienceCommand";
import type { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
import type {
  DescribeFeaturedResultsSetCommandInput,
  DescribeFeaturedResultsSetCommandOutput,
} from "./commands/DescribeFeaturedResultsSetCommand";
import type { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import type {
  DescribePrincipalMappingCommandInput,
  DescribePrincipalMappingCommandOutput,
} from "./commands/DescribePrincipalMappingCommand";
import type {
  DescribeQuerySuggestionsBlockListCommandInput,
  DescribeQuerySuggestionsBlockListCommandOutput,
} from "./commands/DescribeQuerySuggestionsBlockListCommand";
import type {
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
} from "./commands/DescribeQuerySuggestionsConfigCommand";
import type {
  DescribeThesaurusCommandInput,
  DescribeThesaurusCommandOutput,
} from "./commands/DescribeThesaurusCommand";
import type {
  DisassociateEntitiesFromExperienceCommandInput,
  DisassociateEntitiesFromExperienceCommandOutput,
} from "./commands/DisassociateEntitiesFromExperienceCommand";
import type {
  DisassociatePersonasFromEntitiesCommandInput,
  DisassociatePersonasFromEntitiesCommandOutput,
} from "./commands/DisassociatePersonasFromEntitiesCommand";
import type {
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
} from "./commands/GetQuerySuggestionsCommand";
import type { GetSnapshotsCommandInput, GetSnapshotsCommandOutput } from "./commands/GetSnapshotsCommand";
import type {
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
} from "./commands/ListAccessControlConfigurationsCommand";
import type { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import type {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import type {
  ListEntityPersonasCommandInput,
  ListEntityPersonasCommandOutput,
} from "./commands/ListEntityPersonasCommand";
import type {
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
} from "./commands/ListExperienceEntitiesCommand";
import type { ListExperiencesCommandInput, ListExperiencesCommandOutput } from "./commands/ListExperiencesCommand";
import type { ListFaqsCommandInput, ListFaqsCommandOutput } from "./commands/ListFaqsCommand";
import type {
  ListFeaturedResultsSetsCommandInput,
  ListFeaturedResultsSetsCommandOutput,
} from "./commands/ListFeaturedResultsSetsCommand";
import type {
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "./commands/ListGroupsOlderThanOrderingIdCommand";
import type { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import type {
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "./commands/ListQuerySuggestionsBlockListsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListThesauriCommandInput, ListThesauriCommandOutput } from "./commands/ListThesauriCommand";
import type {
  PutPrincipalMappingCommandInput,
  PutPrincipalMappingCommandOutput,
} from "./commands/PutPrincipalMappingCommand";
import type { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import type { RetrieveCommandInput, RetrieveCommandOutput } from "./commands/RetrieveCommand";
import type {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import type {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import type { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccessControlConfigurationCommandInput,
  UpdateAccessControlConfigurationCommandOutput,
} from "./commands/UpdateAccessControlConfigurationCommand";
import type { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import type { UpdateExperienceCommandInput, UpdateExperienceCommandOutput } from "./commands/UpdateExperienceCommand";
import type {
  UpdateFeaturedResultsSetCommandInput,
  UpdateFeaturedResultsSetCommandOutput,
} from "./commands/UpdateFeaturedResultsSetCommand";
import type { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import type {
  UpdateQuerySuggestionsBlockListCommandInput,
  UpdateQuerySuggestionsBlockListCommandOutput,
} from "./commands/UpdateQuerySuggestionsBlockListCommand";
import type {
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
} from "./commands/UpdateQuerySuggestionsConfigCommand";
import type { UpdateThesaurusCommandInput, UpdateThesaurusCommandOutput } from "./commands/UpdateThesaurusCommand";
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
  | AssociateEntitiesToExperienceCommandInput
  | AssociatePersonasToEntitiesCommandInput
  | BatchDeleteDocumentCommandInput
  | BatchDeleteFeaturedResultsSetCommandInput
  | BatchGetDocumentStatusCommandInput
  | BatchPutDocumentCommandInput
  | ClearQuerySuggestionsCommandInput
  | CreateAccessControlConfigurationCommandInput
  | CreateDataSourceCommandInput
  | CreateExperienceCommandInput
  | CreateFaqCommandInput
  | CreateFeaturedResultsSetCommandInput
  | CreateIndexCommandInput
  | CreateQuerySuggestionsBlockListCommandInput
  | CreateThesaurusCommandInput
  | DeleteAccessControlConfigurationCommandInput
  | DeleteDataSourceCommandInput
  | DeleteExperienceCommandInput
  | DeleteFaqCommandInput
  | DeleteIndexCommandInput
  | DeletePrincipalMappingCommandInput
  | DeleteQuerySuggestionsBlockListCommandInput
  | DeleteThesaurusCommandInput
  | DescribeAccessControlConfigurationCommandInput
  | DescribeDataSourceCommandInput
  | DescribeExperienceCommandInput
  | DescribeFaqCommandInput
  | DescribeFeaturedResultsSetCommandInput
  | DescribeIndexCommandInput
  | DescribePrincipalMappingCommandInput
  | DescribeQuerySuggestionsBlockListCommandInput
  | DescribeQuerySuggestionsConfigCommandInput
  | DescribeThesaurusCommandInput
  | DisassociateEntitiesFromExperienceCommandInput
  | DisassociatePersonasFromEntitiesCommandInput
  | GetQuerySuggestionsCommandInput
  | GetSnapshotsCommandInput
  | ListAccessControlConfigurationsCommandInput
  | ListDataSourceSyncJobsCommandInput
  | ListDataSourcesCommandInput
  | ListEntityPersonasCommandInput
  | ListExperienceEntitiesCommandInput
  | ListExperiencesCommandInput
  | ListFaqsCommandInput
  | ListFeaturedResultsSetsCommandInput
  | ListGroupsOlderThanOrderingIdCommandInput
  | ListIndicesCommandInput
  | ListQuerySuggestionsBlockListsCommandInput
  | ListTagsForResourceCommandInput
  | ListThesauriCommandInput
  | PutPrincipalMappingCommandInput
  | QueryCommandInput
  | RetrieveCommandInput
  | StartDataSourceSyncJobCommandInput
  | StopDataSourceSyncJobCommandInput
  | SubmitFeedbackCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessControlConfigurationCommandInput
  | UpdateDataSourceCommandInput
  | UpdateExperienceCommandInput
  | UpdateFeaturedResultsSetCommandInput
  | UpdateIndexCommandInput
  | UpdateQuerySuggestionsBlockListCommandInput
  | UpdateQuerySuggestionsConfigCommandInput
  | UpdateThesaurusCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateEntitiesToExperienceCommandOutput
  | AssociatePersonasToEntitiesCommandOutput
  | BatchDeleteDocumentCommandOutput
  | BatchDeleteFeaturedResultsSetCommandOutput
  | BatchGetDocumentStatusCommandOutput
  | BatchPutDocumentCommandOutput
  | ClearQuerySuggestionsCommandOutput
  | CreateAccessControlConfigurationCommandOutput
  | CreateDataSourceCommandOutput
  | CreateExperienceCommandOutput
  | CreateFaqCommandOutput
  | CreateFeaturedResultsSetCommandOutput
  | CreateIndexCommandOutput
  | CreateQuerySuggestionsBlockListCommandOutput
  | CreateThesaurusCommandOutput
  | DeleteAccessControlConfigurationCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteExperienceCommandOutput
  | DeleteFaqCommandOutput
  | DeleteIndexCommandOutput
  | DeletePrincipalMappingCommandOutput
  | DeleteQuerySuggestionsBlockListCommandOutput
  | DeleteThesaurusCommandOutput
  | DescribeAccessControlConfigurationCommandOutput
  | DescribeDataSourceCommandOutput
  | DescribeExperienceCommandOutput
  | DescribeFaqCommandOutput
  | DescribeFeaturedResultsSetCommandOutput
  | DescribeIndexCommandOutput
  | DescribePrincipalMappingCommandOutput
  | DescribeQuerySuggestionsBlockListCommandOutput
  | DescribeQuerySuggestionsConfigCommandOutput
  | DescribeThesaurusCommandOutput
  | DisassociateEntitiesFromExperienceCommandOutput
  | DisassociatePersonasFromEntitiesCommandOutput
  | GetQuerySuggestionsCommandOutput
  | GetSnapshotsCommandOutput
  | ListAccessControlConfigurationsCommandOutput
  | ListDataSourceSyncJobsCommandOutput
  | ListDataSourcesCommandOutput
  | ListEntityPersonasCommandOutput
  | ListExperienceEntitiesCommandOutput
  | ListExperiencesCommandOutput
  | ListFaqsCommandOutput
  | ListFeaturedResultsSetsCommandOutput
  | ListGroupsOlderThanOrderingIdCommandOutput
  | ListIndicesCommandOutput
  | ListQuerySuggestionsBlockListsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListThesauriCommandOutput
  | PutPrincipalMappingCommandOutput
  | QueryCommandOutput
  | RetrieveCommandOutput
  | StartDataSourceSyncJobCommandOutput
  | StopDataSourceSyncJobCommandOutput
  | SubmitFeedbackCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessControlConfigurationCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateExperienceCommandOutput
  | UpdateFeaturedResultsSetCommandOutput
  | UpdateIndexCommandOutput
  | UpdateQuerySuggestionsBlockListCommandOutput
  | UpdateQuerySuggestionsConfigCommandOutput
  | UpdateThesaurusCommandOutput;

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
export type KendraClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of KendraClient class constructor that set the region, credentials and other options.
 */
export interface KendraClientConfig extends KendraClientConfigType {}

/**
 * @public
 */
export type KendraClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of KendraClient class. This is resolved and normalized from the {@link KendraClientConfig | constructor configuration interface}.
 */
export interface KendraClientResolvedConfig extends KendraClientResolvedConfigType {}

/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 * @public
 */
export class KendraClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KendraClientResolvedConfig
> {
  /**
   * The resolved configuration of KendraClient class. This is resolved and normalized from the {@link KendraClientConfig | constructor configuration interface}.
   */
  readonly config: KendraClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<KendraClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultKendraHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: KendraClientResolvedConfig) =>
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
