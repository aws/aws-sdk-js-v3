// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
} from "./commands/BatchGetDocumentStatusCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import {
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
} from "./commands/ClearQuerySuggestionsCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateExperienceCommandInput, CreateExperienceCommandOutput } from "./commands/CreateExperienceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "./commands/CreateQuerySuggestionsBlockListCommand";
import { CreateThesaurusCommandInput, CreateThesaurusCommandOutput } from "./commands/CreateThesaurusCommand";
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
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import { DescribeExperienceCommandInput, DescribeExperienceCommandOutput } from "./commands/DescribeExperienceCommand";
import { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
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
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateExperienceCommandInput, UpdateExperienceCommandOutput } from "./commands/UpdateExperienceCommand";
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
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateEntitiesToExperienceCommandInput
  | AssociatePersonasToEntitiesCommandInput
  | BatchDeleteDocumentCommandInput
  | BatchGetDocumentStatusCommandInput
  | BatchPutDocumentCommandInput
  | ClearQuerySuggestionsCommandInput
  | CreateDataSourceCommandInput
  | CreateExperienceCommandInput
  | CreateFaqCommandInput
  | CreateIndexCommandInput
  | CreateQuerySuggestionsBlockListCommandInput
  | CreateThesaurusCommandInput
  | DeleteDataSourceCommandInput
  | DeleteExperienceCommandInput
  | DeleteFaqCommandInput
  | DeleteIndexCommandInput
  | DeletePrincipalMappingCommandInput
  | DeleteQuerySuggestionsBlockListCommandInput
  | DeleteThesaurusCommandInput
  | DescribeDataSourceCommandInput
  | DescribeExperienceCommandInput
  | DescribeFaqCommandInput
  | DescribeIndexCommandInput
  | DescribePrincipalMappingCommandInput
  | DescribeQuerySuggestionsBlockListCommandInput
  | DescribeQuerySuggestionsConfigCommandInput
  | DescribeThesaurusCommandInput
  | DisassociateEntitiesFromExperienceCommandInput
  | DisassociatePersonasFromEntitiesCommandInput
  | GetQuerySuggestionsCommandInput
  | GetSnapshotsCommandInput
  | ListDataSourceSyncJobsCommandInput
  | ListDataSourcesCommandInput
  | ListEntityPersonasCommandInput
  | ListExperienceEntitiesCommandInput
  | ListExperiencesCommandInput
  | ListFaqsCommandInput
  | ListGroupsOlderThanOrderingIdCommandInput
  | ListIndicesCommandInput
  | ListQuerySuggestionsBlockListsCommandInput
  | ListTagsForResourceCommandInput
  | ListThesauriCommandInput
  | PutPrincipalMappingCommandInput
  | QueryCommandInput
  | StartDataSourceSyncJobCommandInput
  | StopDataSourceSyncJobCommandInput
  | SubmitFeedbackCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDataSourceCommandInput
  | UpdateExperienceCommandInput
  | UpdateIndexCommandInput
  | UpdateQuerySuggestionsBlockListCommandInput
  | UpdateQuerySuggestionsConfigCommandInput
  | UpdateThesaurusCommandInput;

export type ServiceOutputTypes =
  | AssociateEntitiesToExperienceCommandOutput
  | AssociatePersonasToEntitiesCommandOutput
  | BatchDeleteDocumentCommandOutput
  | BatchGetDocumentStatusCommandOutput
  | BatchPutDocumentCommandOutput
  | ClearQuerySuggestionsCommandOutput
  | CreateDataSourceCommandOutput
  | CreateExperienceCommandOutput
  | CreateFaqCommandOutput
  | CreateIndexCommandOutput
  | CreateQuerySuggestionsBlockListCommandOutput
  | CreateThesaurusCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteExperienceCommandOutput
  | DeleteFaqCommandOutput
  | DeleteIndexCommandOutput
  | DeletePrincipalMappingCommandOutput
  | DeleteQuerySuggestionsBlockListCommandOutput
  | DeleteThesaurusCommandOutput
  | DescribeDataSourceCommandOutput
  | DescribeExperienceCommandOutput
  | DescribeFaqCommandOutput
  | DescribeIndexCommandOutput
  | DescribePrincipalMappingCommandOutput
  | DescribeQuerySuggestionsBlockListCommandOutput
  | DescribeQuerySuggestionsConfigCommandOutput
  | DescribeThesaurusCommandOutput
  | DisassociateEntitiesFromExperienceCommandOutput
  | DisassociatePersonasFromEntitiesCommandOutput
  | GetQuerySuggestionsCommandOutput
  | GetSnapshotsCommandOutput
  | ListDataSourceSyncJobsCommandOutput
  | ListDataSourcesCommandOutput
  | ListEntityPersonasCommandOutput
  | ListExperienceEntitiesCommandOutput
  | ListExperiencesCommandOutput
  | ListFaqsCommandOutput
  | ListGroupsOlderThanOrderingIdCommandOutput
  | ListIndicesCommandOutput
  | ListQuerySuggestionsBlockListsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListThesauriCommandOutput
  | PutPrincipalMappingCommandOutput
  | QueryCommandOutput
  | StartDataSourceSyncJobCommandOutput
  | StopDataSourceSyncJobCommandOutput
  | SubmitFeedbackCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateExperienceCommandOutput
  | UpdateIndexCommandOutput
  | UpdateQuerySuggestionsBlockListCommandOutput
  | UpdateQuerySuggestionsConfigCommandOutput
  | UpdateThesaurusCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type KendraClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of KendraClient class constructor that set the region, credentials and other options.
 */
export interface KendraClientConfig extends KendraClientConfigType {}

type KendraClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of KendraClient class. This is resolved and normalized from the {@link KendraClientConfig | constructor configuration interface}.
 */
export interface KendraClientResolvedConfig extends KendraClientResolvedConfigType {}

/**
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

  constructor(configuration: KendraClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
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
