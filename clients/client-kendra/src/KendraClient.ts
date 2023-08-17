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

import {
  AssociateEntitiesToExperienceCommandInput,
  AssociateEntitiesToExperienceCommandOutput,
} from "./commands/AssociateEntitiesToExperienceCommand";
import {
  AssociatePersonasToEntitiesCommandInput,
  AssociatePersonasToEntitiesCommandOutput,
} from "./commands/AssociatePersonasToEntitiesCommand";
import {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import {
  BatchDeleteFeaturedResultsSetCommandInput,
  BatchDeleteFeaturedResultsSetCommandOutput,
} from "./commands/BatchDeleteFeaturedResultsSetCommand";
import {
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
} from "./commands/BatchGetDocumentStatusCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import {
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
} from "./commands/ClearQuerySuggestionsCommand";
import {
  CreateAccessControlConfigurationCommandInput,
  CreateAccessControlConfigurationCommandOutput,
} from "./commands/CreateAccessControlConfigurationCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateExperienceCommandInput, CreateExperienceCommandOutput } from "./commands/CreateExperienceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import {
  CreateFeaturedResultsSetCommandInput,
  CreateFeaturedResultsSetCommandOutput,
} from "./commands/CreateFeaturedResultsSetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "./commands/CreateQuerySuggestionsBlockListCommand";
import { CreateThesaurusCommandInput, CreateThesaurusCommandOutput } from "./commands/CreateThesaurusCommand";
import {
  DeleteAccessControlConfigurationCommandInput,
  DeleteAccessControlConfigurationCommandOutput,
} from "./commands/DeleteAccessControlConfigurationCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteExperienceCommandInput, DeleteExperienceCommandOutput } from "./commands/DeleteExperienceCommand";
import { DeleteFaqCommandInput, DeleteFaqCommandOutput } from "./commands/DeleteFaqCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeletePrincipalMappingCommandInput,
  DeletePrincipalMappingCommandOutput,
} from "./commands/DeletePrincipalMappingCommand";
import {
  DeleteQuerySuggestionsBlockListCommandInput,
  DeleteQuerySuggestionsBlockListCommandOutput,
} from "./commands/DeleteQuerySuggestionsBlockListCommand";
import { DeleteThesaurusCommandInput, DeleteThesaurusCommandOutput } from "./commands/DeleteThesaurusCommand";
import {
  DescribeAccessControlConfigurationCommandInput,
  DescribeAccessControlConfigurationCommandOutput,
} from "./commands/DescribeAccessControlConfigurationCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import { DescribeExperienceCommandInput, DescribeExperienceCommandOutput } from "./commands/DescribeExperienceCommand";
import { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
import {
  DescribeFeaturedResultsSetCommandInput,
  DescribeFeaturedResultsSetCommandOutput,
} from "./commands/DescribeFeaturedResultsSetCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import {
  DescribePrincipalMappingCommandInput,
  DescribePrincipalMappingCommandOutput,
} from "./commands/DescribePrincipalMappingCommand";
import {
  DescribeQuerySuggestionsBlockListCommandInput,
  DescribeQuerySuggestionsBlockListCommandOutput,
} from "./commands/DescribeQuerySuggestionsBlockListCommand";
import {
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
} from "./commands/DescribeQuerySuggestionsConfigCommand";
import { DescribeThesaurusCommandInput, DescribeThesaurusCommandOutput } from "./commands/DescribeThesaurusCommand";
import {
  DisassociateEntitiesFromExperienceCommandInput,
  DisassociateEntitiesFromExperienceCommandOutput,
} from "./commands/DisassociateEntitiesFromExperienceCommand";
import {
  DisassociatePersonasFromEntitiesCommandInput,
  DisassociatePersonasFromEntitiesCommandOutput,
} from "./commands/DisassociatePersonasFromEntitiesCommand";
import {
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
} from "./commands/GetQuerySuggestionsCommand";
import { GetSnapshotsCommandInput, GetSnapshotsCommandOutput } from "./commands/GetSnapshotsCommand";
import {
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
} from "./commands/ListAccessControlConfigurationsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import { ListEntityPersonasCommandInput, ListEntityPersonasCommandOutput } from "./commands/ListEntityPersonasCommand";
import {
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
} from "./commands/ListExperienceEntitiesCommand";
import { ListExperiencesCommandInput, ListExperiencesCommandOutput } from "./commands/ListExperiencesCommand";
import { ListFaqsCommandInput, ListFaqsCommandOutput } from "./commands/ListFaqsCommand";
import {
  ListFeaturedResultsSetsCommandInput,
  ListFeaturedResultsSetsCommandOutput,
} from "./commands/ListFeaturedResultsSetsCommand";
import {
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "./commands/ListGroupsOlderThanOrderingIdCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import {
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "./commands/ListQuerySuggestionsBlockListsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListThesauriCommandInput, ListThesauriCommandOutput } from "./commands/ListThesauriCommand";
import {
  PutPrincipalMappingCommandInput,
  PutPrincipalMappingCommandOutput,
} from "./commands/PutPrincipalMappingCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { RetrieveCommandInput, RetrieveCommandOutput } from "./commands/RetrieveCommand";
import {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccessControlConfigurationCommandInput,
  UpdateAccessControlConfigurationCommandOutput,
} from "./commands/UpdateAccessControlConfigurationCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateExperienceCommandInput, UpdateExperienceCommandOutput } from "./commands/UpdateExperienceCommand";
import {
  UpdateFeaturedResultsSetCommandInput,
  UpdateFeaturedResultsSetCommandOutput,
} from "./commands/UpdateFeaturedResultsSetCommand";
import { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import {
  UpdateQuerySuggestionsBlockListCommandInput,
  UpdateQuerySuggestionsBlockListCommandOutput,
} from "./commands/UpdateQuerySuggestionsBlockListCommand";
import {
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
} from "./commands/UpdateQuerySuggestionsConfigCommand";
import { UpdateThesaurusCommandInput, UpdateThesaurusCommandOutput } from "./commands/UpdateThesaurusCommand";
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
 *  The configuration interface of KendraClient class constructor that set the region, credentials and other options.
 */
export interface KendraClientConfig extends KendraClientConfigType {}

/**
 * @public
 */
export type KendraClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of KendraClient class. This is resolved and normalized from the {@link KendraClientConfig | constructor configuration interface}.
 */
export interface KendraClientResolvedConfig extends KendraClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
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
