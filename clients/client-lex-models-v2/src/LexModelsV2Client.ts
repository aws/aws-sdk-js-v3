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
  BatchCreateCustomVocabularyItemCommandInput,
  BatchCreateCustomVocabularyItemCommandOutput,
} from "./commands/BatchCreateCustomVocabularyItemCommand";
import {
  BatchDeleteCustomVocabularyItemCommandInput,
  BatchDeleteCustomVocabularyItemCommandOutput,
} from "./commands/BatchDeleteCustomVocabularyItemCommand";
import {
  BatchUpdateCustomVocabularyItemCommandInput,
  BatchUpdateCustomVocabularyItemCommandOutput,
} from "./commands/BatchUpdateCustomVocabularyItemCommand";
import { BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput } from "./commands/BuildBotLocaleCommand";
import { CreateBotAliasCommandInput, CreateBotAliasCommandOutput } from "./commands/CreateBotAliasCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import { CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput } from "./commands/CreateBotLocaleCommand";
import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "./commands/CreateBotVersionCommand";
import { CreateExportCommandInput, CreateExportCommandOutput } from "./commands/CreateExportCommand";
import { CreateIntentCommandInput, CreateIntentCommandOutput } from "./commands/CreateIntentCommand";
import {
  CreateResourcePolicyCommandInput,
  CreateResourcePolicyCommandOutput,
} from "./commands/CreateResourcePolicyCommand";
import {
  CreateResourcePolicyStatementCommandInput,
  CreateResourcePolicyStatementCommandOutput,
} from "./commands/CreateResourcePolicyStatementCommand";
import { CreateSlotCommandInput, CreateSlotCommandOutput } from "./commands/CreateSlotCommand";
import { CreateSlotTypeCommandInput, CreateSlotTypeCommandOutput } from "./commands/CreateSlotTypeCommand";
import { CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput } from "./commands/CreateUploadUrlCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import { DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput } from "./commands/DeleteBotLocaleCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "./commands/DeleteBotVersionCommand";
import {
  DeleteCustomVocabularyCommandInput,
  DeleteCustomVocabularyCommandOutput,
} from "./commands/DeleteCustomVocabularyCommand";
import { DeleteExportCommandInput, DeleteExportCommandOutput } from "./commands/DeleteExportCommand";
import { DeleteImportCommandInput, DeleteImportCommandOutput } from "./commands/DeleteImportCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "./commands/DeleteIntentCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteResourcePolicyStatementCommandInput,
  DeleteResourcePolicyStatementCommandOutput,
} from "./commands/DeleteResourcePolicyStatementCommand";
import { DeleteSlotCommandInput, DeleteSlotCommandOutput } from "./commands/DeleteSlotCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "./commands/DeleteSlotTypeCommand";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "./commands/DeleteUtterancesCommand";
import { DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput } from "./commands/DescribeBotAliasCommand";
import { DescribeBotCommandInput, DescribeBotCommandOutput } from "./commands/DescribeBotCommand";
import { DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput } from "./commands/DescribeBotLocaleCommand";
import {
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
} from "./commands/DescribeBotRecommendationCommand";
import { DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput } from "./commands/DescribeBotVersionCommand";
import {
  DescribeCustomVocabularyMetadataCommandInput,
  DescribeCustomVocabularyMetadataCommandOutput,
} from "./commands/DescribeCustomVocabularyMetadataCommand";
import { DescribeExportCommandInput, DescribeExportCommandOutput } from "./commands/DescribeExportCommand";
import { DescribeImportCommandInput, DescribeImportCommandOutput } from "./commands/DescribeImportCommand";
import { DescribeIntentCommandInput, DescribeIntentCommandOutput } from "./commands/DescribeIntentCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import { DescribeSlotCommandInput, DescribeSlotCommandOutput } from "./commands/DescribeSlotCommand";
import { DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput } from "./commands/DescribeSlotTypeCommand";
import {
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
} from "./commands/ListAggregatedUtterancesCommand";
import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "./commands/ListBotAliasesCommand";
import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "./commands/ListBotLocalesCommand";
import {
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
} from "./commands/ListBotRecommendationsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import { ListBotVersionsCommandInput, ListBotVersionsCommandOutput } from "./commands/ListBotVersionsCommand";
import { ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput } from "./commands/ListBuiltInIntentsCommand";
import {
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "./commands/ListBuiltInSlotTypesCommand";
import {
  ListCustomVocabularyItemsCommandInput,
  ListCustomVocabularyItemsCommandOutput,
} from "./commands/ListCustomVocabularyItemsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand";
import {
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "./commands/ListRecommendedIntentsCommand";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "./commands/ListSlotTypesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
} from "./commands/SearchAssociatedTranscriptsCommand";
import {
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
} from "./commands/StartBotRecommendationCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import {
  StopBotRecommendationCommandInput,
  StopBotRecommendationCommandOutput,
} from "./commands/StopBotRecommendationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput } from "./commands/UpdateBotAliasCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import { UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput } from "./commands/UpdateBotLocaleCommand";
import {
  UpdateBotRecommendationCommandInput,
  UpdateBotRecommendationCommandOutput,
} from "./commands/UpdateBotRecommendationCommand";
import { UpdateExportCommandInput, UpdateExportCommandOutput } from "./commands/UpdateExportCommand";
import { UpdateIntentCommandInput, UpdateIntentCommandOutput } from "./commands/UpdateIntentCommand";
import {
  UpdateResourcePolicyCommandInput,
  UpdateResourcePolicyCommandOutput,
} from "./commands/UpdateResourcePolicyCommand";
import { UpdateSlotCommandInput, UpdateSlotCommandOutput } from "./commands/UpdateSlotCommand";
import { UpdateSlotTypeCommandInput, UpdateSlotTypeCommandOutput } from "./commands/UpdateSlotTypeCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchCreateCustomVocabularyItemCommandInput
  | BatchDeleteCustomVocabularyItemCommandInput
  | BatchUpdateCustomVocabularyItemCommandInput
  | BuildBotLocaleCommandInput
  | CreateBotAliasCommandInput
  | CreateBotCommandInput
  | CreateBotLocaleCommandInput
  | CreateBotVersionCommandInput
  | CreateExportCommandInput
  | CreateIntentCommandInput
  | CreateResourcePolicyCommandInput
  | CreateResourcePolicyStatementCommandInput
  | CreateSlotCommandInput
  | CreateSlotTypeCommandInput
  | CreateUploadUrlCommandInput
  | DeleteBotAliasCommandInput
  | DeleteBotCommandInput
  | DeleteBotLocaleCommandInput
  | DeleteBotVersionCommandInput
  | DeleteCustomVocabularyCommandInput
  | DeleteExportCommandInput
  | DeleteImportCommandInput
  | DeleteIntentCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteResourcePolicyStatementCommandInput
  | DeleteSlotCommandInput
  | DeleteSlotTypeCommandInput
  | DeleteUtterancesCommandInput
  | DescribeBotAliasCommandInput
  | DescribeBotCommandInput
  | DescribeBotLocaleCommandInput
  | DescribeBotRecommendationCommandInput
  | DescribeBotVersionCommandInput
  | DescribeCustomVocabularyMetadataCommandInput
  | DescribeExportCommandInput
  | DescribeImportCommandInput
  | DescribeIntentCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeSlotCommandInput
  | DescribeSlotTypeCommandInput
  | ListAggregatedUtterancesCommandInput
  | ListBotAliasesCommandInput
  | ListBotLocalesCommandInput
  | ListBotRecommendationsCommandInput
  | ListBotVersionsCommandInput
  | ListBotsCommandInput
  | ListBuiltInIntentsCommandInput
  | ListBuiltInSlotTypesCommandInput
  | ListCustomVocabularyItemsCommandInput
  | ListExportsCommandInput
  | ListImportsCommandInput
  | ListIntentsCommandInput
  | ListRecommendedIntentsCommandInput
  | ListSlotTypesCommandInput
  | ListSlotsCommandInput
  | ListTagsForResourceCommandInput
  | SearchAssociatedTranscriptsCommandInput
  | StartBotRecommendationCommandInput
  | StartImportCommandInput
  | StopBotRecommendationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBotAliasCommandInput
  | UpdateBotCommandInput
  | UpdateBotLocaleCommandInput
  | UpdateBotRecommendationCommandInput
  | UpdateExportCommandInput
  | UpdateIntentCommandInput
  | UpdateResourcePolicyCommandInput
  | UpdateSlotCommandInput
  | UpdateSlotTypeCommandInput;

export type ServiceOutputTypes =
  | BatchCreateCustomVocabularyItemCommandOutput
  | BatchDeleteCustomVocabularyItemCommandOutput
  | BatchUpdateCustomVocabularyItemCommandOutput
  | BuildBotLocaleCommandOutput
  | CreateBotAliasCommandOutput
  | CreateBotCommandOutput
  | CreateBotLocaleCommandOutput
  | CreateBotVersionCommandOutput
  | CreateExportCommandOutput
  | CreateIntentCommandOutput
  | CreateResourcePolicyCommandOutput
  | CreateResourcePolicyStatementCommandOutput
  | CreateSlotCommandOutput
  | CreateSlotTypeCommandOutput
  | CreateUploadUrlCommandOutput
  | DeleteBotAliasCommandOutput
  | DeleteBotCommandOutput
  | DeleteBotLocaleCommandOutput
  | DeleteBotVersionCommandOutput
  | DeleteCustomVocabularyCommandOutput
  | DeleteExportCommandOutput
  | DeleteImportCommandOutput
  | DeleteIntentCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteResourcePolicyStatementCommandOutput
  | DeleteSlotCommandOutput
  | DeleteSlotTypeCommandOutput
  | DeleteUtterancesCommandOutput
  | DescribeBotAliasCommandOutput
  | DescribeBotCommandOutput
  | DescribeBotLocaleCommandOutput
  | DescribeBotRecommendationCommandOutput
  | DescribeBotVersionCommandOutput
  | DescribeCustomVocabularyMetadataCommandOutput
  | DescribeExportCommandOutput
  | DescribeImportCommandOutput
  | DescribeIntentCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeSlotCommandOutput
  | DescribeSlotTypeCommandOutput
  | ListAggregatedUtterancesCommandOutput
  | ListBotAliasesCommandOutput
  | ListBotLocalesCommandOutput
  | ListBotRecommendationsCommandOutput
  | ListBotVersionsCommandOutput
  | ListBotsCommandOutput
  | ListBuiltInIntentsCommandOutput
  | ListBuiltInSlotTypesCommandOutput
  | ListCustomVocabularyItemsCommandOutput
  | ListExportsCommandOutput
  | ListImportsCommandOutput
  | ListIntentsCommandOutput
  | ListRecommendedIntentsCommandOutput
  | ListSlotTypesCommandOutput
  | ListSlotsCommandOutput
  | ListTagsForResourceCommandOutput
  | SearchAssociatedTranscriptsCommandOutput
  | StartBotRecommendationCommandOutput
  | StartImportCommandOutput
  | StopBotRecommendationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBotAliasCommandOutput
  | UpdateBotCommandOutput
  | UpdateBotLocaleCommandOutput
  | UpdateBotRecommendationCommandOutput
  | UpdateExportCommandOutput
  | UpdateIntentCommandOutput
  | UpdateResourcePolicyCommandOutput
  | UpdateSlotCommandOutput
  | UpdateSlotTypeCommandOutput;

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

type LexModelsV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LexModelsV2Client class constructor that set the region, credentials and other options.
 */
export interface LexModelsV2ClientConfig extends LexModelsV2ClientConfigType {}

type LexModelsV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LexModelsV2Client class. This is resolved and normalized from the {@link LexModelsV2ClientConfig | constructor configuration interface}.
 */
export interface LexModelsV2ClientResolvedConfig extends LexModelsV2ClientResolvedConfigType {}

/**
 * <p></p>
 */
export class LexModelsV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LexModelsV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of LexModelsV2Client class. This is resolved and normalized from the {@link LexModelsV2ClientConfig | constructor configuration interface}.
   */
  readonly config: LexModelsV2ClientResolvedConfig;

  constructor(configuration: LexModelsV2ClientConfig) {
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
