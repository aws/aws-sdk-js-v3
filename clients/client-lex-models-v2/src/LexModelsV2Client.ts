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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultLexModelsV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import { CreateBotReplicaCommandInput, CreateBotReplicaCommandOutput } from "./commands/CreateBotReplicaCommand";
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
import {
  CreateTestSetDiscrepancyReportCommandInput,
  CreateTestSetDiscrepancyReportCommandOutput,
} from "./commands/CreateTestSetDiscrepancyReportCommand";
import { CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput } from "./commands/CreateUploadUrlCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "./commands/DeleteBotAliasCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import { DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput } from "./commands/DeleteBotLocaleCommand";
import { DeleteBotReplicaCommandInput, DeleteBotReplicaCommandOutput } from "./commands/DeleteBotReplicaCommand";
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
import { DeleteTestSetCommandInput, DeleteTestSetCommandOutput } from "./commands/DeleteTestSetCommand";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "./commands/DeleteUtterancesCommand";
import { DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput } from "./commands/DescribeBotAliasCommand";
import { DescribeBotCommandInput, DescribeBotCommandOutput } from "./commands/DescribeBotCommand";
import { DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput } from "./commands/DescribeBotLocaleCommand";
import {
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
} from "./commands/DescribeBotRecommendationCommand";
import { DescribeBotReplicaCommandInput, DescribeBotReplicaCommandOutput } from "./commands/DescribeBotReplicaCommand";
import {
  DescribeBotResourceGenerationCommandInput,
  DescribeBotResourceGenerationCommandOutput,
} from "./commands/DescribeBotResourceGenerationCommand";
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
  DescribeTestExecutionCommandInput,
  DescribeTestExecutionCommandOutput,
} from "./commands/DescribeTestExecutionCommand";
import { DescribeTestSetCommandInput, DescribeTestSetCommandOutput } from "./commands/DescribeTestSetCommand";
import {
  DescribeTestSetDiscrepancyReportCommandInput,
  DescribeTestSetDiscrepancyReportCommandOutput,
} from "./commands/DescribeTestSetDiscrepancyReportCommand";
import {
  DescribeTestSetGenerationCommandInput,
  DescribeTestSetGenerationCommandOutput,
} from "./commands/DescribeTestSetGenerationCommand";
import { GenerateBotElementCommandInput, GenerateBotElementCommandOutput } from "./commands/GenerateBotElementCommand";
import {
  GetTestExecutionArtifactsUrlCommandInput,
  GetTestExecutionArtifactsUrlCommandOutput,
} from "./commands/GetTestExecutionArtifactsUrlCommand";
import {
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
} from "./commands/ListAggregatedUtterancesCommand";
import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "./commands/ListBotAliasesCommand";
import {
  ListBotAliasReplicasCommandInput,
  ListBotAliasReplicasCommandOutput,
} from "./commands/ListBotAliasReplicasCommand";
import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "./commands/ListBotLocalesCommand";
import {
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
} from "./commands/ListBotRecommendationsCommand";
import { ListBotReplicasCommandInput, ListBotReplicasCommandOutput } from "./commands/ListBotReplicasCommand";
import {
  ListBotResourceGenerationsCommandInput,
  ListBotResourceGenerationsCommandOutput,
} from "./commands/ListBotResourceGenerationsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListBotVersionReplicasCommandInput,
  ListBotVersionReplicasCommandOutput,
} from "./commands/ListBotVersionReplicasCommand";
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
import { ListIntentMetricsCommandInput, ListIntentMetricsCommandOutput } from "./commands/ListIntentMetricsCommand";
import { ListIntentPathsCommandInput, ListIntentPathsCommandOutput } from "./commands/ListIntentPathsCommand";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand";
import {
  ListIntentStageMetricsCommandInput,
  ListIntentStageMetricsCommandOutput,
} from "./commands/ListIntentStageMetricsCommand";
import {
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "./commands/ListRecommendedIntentsCommand";
import {
  ListSessionAnalyticsDataCommandInput,
  ListSessionAnalyticsDataCommandOutput,
} from "./commands/ListSessionAnalyticsDataCommand";
import { ListSessionMetricsCommandInput, ListSessionMetricsCommandOutput } from "./commands/ListSessionMetricsCommand";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "./commands/ListSlotTypesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestExecutionResultItemsCommandInput,
  ListTestExecutionResultItemsCommandOutput,
} from "./commands/ListTestExecutionResultItemsCommand";
import { ListTestExecutionsCommandInput, ListTestExecutionsCommandOutput } from "./commands/ListTestExecutionsCommand";
import { ListTestSetRecordsCommandInput, ListTestSetRecordsCommandOutput } from "./commands/ListTestSetRecordsCommand";
import { ListTestSetsCommandInput, ListTestSetsCommandOutput } from "./commands/ListTestSetsCommand";
import {
  ListUtteranceAnalyticsDataCommandInput,
  ListUtteranceAnalyticsDataCommandOutput,
} from "./commands/ListUtteranceAnalyticsDataCommand";
import {
  ListUtteranceMetricsCommandInput,
  ListUtteranceMetricsCommandOutput,
} from "./commands/ListUtteranceMetricsCommand";
import {
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
} from "./commands/SearchAssociatedTranscriptsCommand";
import {
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
} from "./commands/StartBotRecommendationCommand";
import {
  StartBotResourceGenerationCommandInput,
  StartBotResourceGenerationCommandOutput,
} from "./commands/StartBotResourceGenerationCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { StartTestExecutionCommandInput, StartTestExecutionCommandOutput } from "./commands/StartTestExecutionCommand";
import {
  StartTestSetGenerationCommandInput,
  StartTestSetGenerationCommandOutput,
} from "./commands/StartTestSetGenerationCommand";
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
import { UpdateTestSetCommandInput, UpdateTestSetCommandOutput } from "./commands/UpdateTestSetCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchCreateCustomVocabularyItemCommandInput
  | BatchDeleteCustomVocabularyItemCommandInput
  | BatchUpdateCustomVocabularyItemCommandInput
  | BuildBotLocaleCommandInput
  | CreateBotAliasCommandInput
  | CreateBotCommandInput
  | CreateBotLocaleCommandInput
  | CreateBotReplicaCommandInput
  | CreateBotVersionCommandInput
  | CreateExportCommandInput
  | CreateIntentCommandInput
  | CreateResourcePolicyCommandInput
  | CreateResourcePolicyStatementCommandInput
  | CreateSlotCommandInput
  | CreateSlotTypeCommandInput
  | CreateTestSetDiscrepancyReportCommandInput
  | CreateUploadUrlCommandInput
  | DeleteBotAliasCommandInput
  | DeleteBotCommandInput
  | DeleteBotLocaleCommandInput
  | DeleteBotReplicaCommandInput
  | DeleteBotVersionCommandInput
  | DeleteCustomVocabularyCommandInput
  | DeleteExportCommandInput
  | DeleteImportCommandInput
  | DeleteIntentCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteResourcePolicyStatementCommandInput
  | DeleteSlotCommandInput
  | DeleteSlotTypeCommandInput
  | DeleteTestSetCommandInput
  | DeleteUtterancesCommandInput
  | DescribeBotAliasCommandInput
  | DescribeBotCommandInput
  | DescribeBotLocaleCommandInput
  | DescribeBotRecommendationCommandInput
  | DescribeBotReplicaCommandInput
  | DescribeBotResourceGenerationCommandInput
  | DescribeBotVersionCommandInput
  | DescribeCustomVocabularyMetadataCommandInput
  | DescribeExportCommandInput
  | DescribeImportCommandInput
  | DescribeIntentCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeSlotCommandInput
  | DescribeSlotTypeCommandInput
  | DescribeTestExecutionCommandInput
  | DescribeTestSetCommandInput
  | DescribeTestSetDiscrepancyReportCommandInput
  | DescribeTestSetGenerationCommandInput
  | GenerateBotElementCommandInput
  | GetTestExecutionArtifactsUrlCommandInput
  | ListAggregatedUtterancesCommandInput
  | ListBotAliasReplicasCommandInput
  | ListBotAliasesCommandInput
  | ListBotLocalesCommandInput
  | ListBotRecommendationsCommandInput
  | ListBotReplicasCommandInput
  | ListBotResourceGenerationsCommandInput
  | ListBotVersionReplicasCommandInput
  | ListBotVersionsCommandInput
  | ListBotsCommandInput
  | ListBuiltInIntentsCommandInput
  | ListBuiltInSlotTypesCommandInput
  | ListCustomVocabularyItemsCommandInput
  | ListExportsCommandInput
  | ListImportsCommandInput
  | ListIntentMetricsCommandInput
  | ListIntentPathsCommandInput
  | ListIntentStageMetricsCommandInput
  | ListIntentsCommandInput
  | ListRecommendedIntentsCommandInput
  | ListSessionAnalyticsDataCommandInput
  | ListSessionMetricsCommandInput
  | ListSlotTypesCommandInput
  | ListSlotsCommandInput
  | ListTagsForResourceCommandInput
  | ListTestExecutionResultItemsCommandInput
  | ListTestExecutionsCommandInput
  | ListTestSetRecordsCommandInput
  | ListTestSetsCommandInput
  | ListUtteranceAnalyticsDataCommandInput
  | ListUtteranceMetricsCommandInput
  | SearchAssociatedTranscriptsCommandInput
  | StartBotRecommendationCommandInput
  | StartBotResourceGenerationCommandInput
  | StartImportCommandInput
  | StartTestExecutionCommandInput
  | StartTestSetGenerationCommandInput
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
  | UpdateSlotTypeCommandInput
  | UpdateTestSetCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchCreateCustomVocabularyItemCommandOutput
  | BatchDeleteCustomVocabularyItemCommandOutput
  | BatchUpdateCustomVocabularyItemCommandOutput
  | BuildBotLocaleCommandOutput
  | CreateBotAliasCommandOutput
  | CreateBotCommandOutput
  | CreateBotLocaleCommandOutput
  | CreateBotReplicaCommandOutput
  | CreateBotVersionCommandOutput
  | CreateExportCommandOutput
  | CreateIntentCommandOutput
  | CreateResourcePolicyCommandOutput
  | CreateResourcePolicyStatementCommandOutput
  | CreateSlotCommandOutput
  | CreateSlotTypeCommandOutput
  | CreateTestSetDiscrepancyReportCommandOutput
  | CreateUploadUrlCommandOutput
  | DeleteBotAliasCommandOutput
  | DeleteBotCommandOutput
  | DeleteBotLocaleCommandOutput
  | DeleteBotReplicaCommandOutput
  | DeleteBotVersionCommandOutput
  | DeleteCustomVocabularyCommandOutput
  | DeleteExportCommandOutput
  | DeleteImportCommandOutput
  | DeleteIntentCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteResourcePolicyStatementCommandOutput
  | DeleteSlotCommandOutput
  | DeleteSlotTypeCommandOutput
  | DeleteTestSetCommandOutput
  | DeleteUtterancesCommandOutput
  | DescribeBotAliasCommandOutput
  | DescribeBotCommandOutput
  | DescribeBotLocaleCommandOutput
  | DescribeBotRecommendationCommandOutput
  | DescribeBotReplicaCommandOutput
  | DescribeBotResourceGenerationCommandOutput
  | DescribeBotVersionCommandOutput
  | DescribeCustomVocabularyMetadataCommandOutput
  | DescribeExportCommandOutput
  | DescribeImportCommandOutput
  | DescribeIntentCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeSlotCommandOutput
  | DescribeSlotTypeCommandOutput
  | DescribeTestExecutionCommandOutput
  | DescribeTestSetCommandOutput
  | DescribeTestSetDiscrepancyReportCommandOutput
  | DescribeTestSetGenerationCommandOutput
  | GenerateBotElementCommandOutput
  | GetTestExecutionArtifactsUrlCommandOutput
  | ListAggregatedUtterancesCommandOutput
  | ListBotAliasReplicasCommandOutput
  | ListBotAliasesCommandOutput
  | ListBotLocalesCommandOutput
  | ListBotRecommendationsCommandOutput
  | ListBotReplicasCommandOutput
  | ListBotResourceGenerationsCommandOutput
  | ListBotVersionReplicasCommandOutput
  | ListBotVersionsCommandOutput
  | ListBotsCommandOutput
  | ListBuiltInIntentsCommandOutput
  | ListBuiltInSlotTypesCommandOutput
  | ListCustomVocabularyItemsCommandOutput
  | ListExportsCommandOutput
  | ListImportsCommandOutput
  | ListIntentMetricsCommandOutput
  | ListIntentPathsCommandOutput
  | ListIntentStageMetricsCommandOutput
  | ListIntentsCommandOutput
  | ListRecommendedIntentsCommandOutput
  | ListSessionAnalyticsDataCommandOutput
  | ListSessionMetricsCommandOutput
  | ListSlotTypesCommandOutput
  | ListSlotsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTestExecutionResultItemsCommandOutput
  | ListTestExecutionsCommandOutput
  | ListTestSetRecordsCommandOutput
  | ListTestSetsCommandOutput
  | ListUtteranceAnalyticsDataCommandOutput
  | ListUtteranceMetricsCommandOutput
  | SearchAssociatedTranscriptsCommandOutput
  | StartBotRecommendationCommandOutput
  | StartBotResourceGenerationCommandOutput
  | StartImportCommandOutput
  | StartTestExecutionCommandOutput
  | StartTestSetGenerationCommandOutput
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
  | UpdateSlotTypeCommandOutput
  | UpdateTestSetCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
export type LexModelsV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of LexModelsV2Client class constructor that set the region, credentials and other options.
 */
export interface LexModelsV2ClientConfig extends LexModelsV2ClientConfigType {}

/**
 * @public
 */
export type LexModelsV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of LexModelsV2Client class. This is resolved and normalized from the {@link LexModelsV2ClientConfig | constructor configuration interface}.
 */
export interface LexModelsV2ClientResolvedConfig extends LexModelsV2ClientResolvedConfigType {}

/**
 * <p>Amazon Lex Model Building Service provides APIs for creating, managing, and deploying conversational bots and their components.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<LexModelsV2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultLexModelsV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: LexModelsV2ClientResolvedConfig) =>
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
