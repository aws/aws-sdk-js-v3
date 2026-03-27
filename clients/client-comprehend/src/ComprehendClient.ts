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
  defaultComprehendHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchDetectDominantLanguageCommandInput,
  BatchDetectDominantLanguageCommandOutput,
} from "./commands/BatchDetectDominantLanguageCommand";
import type {
  BatchDetectEntitiesCommandInput,
  BatchDetectEntitiesCommandOutput,
} from "./commands/BatchDetectEntitiesCommand";
import type {
  BatchDetectKeyPhrasesCommandInput,
  BatchDetectKeyPhrasesCommandOutput,
} from "./commands/BatchDetectKeyPhrasesCommand";
import type {
  BatchDetectSentimentCommandInput,
  BatchDetectSentimentCommandOutput,
} from "./commands/BatchDetectSentimentCommand";
import type {
  BatchDetectSyntaxCommandInput,
  BatchDetectSyntaxCommandOutput,
} from "./commands/BatchDetectSyntaxCommand";
import type {
  BatchDetectTargetedSentimentCommandInput,
  BatchDetectTargetedSentimentCommandOutput,
} from "./commands/BatchDetectTargetedSentimentCommand";
import type { ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput } from "./commands/ClassifyDocumentCommand";
import type {
  ContainsPiiEntitiesCommandInput,
  ContainsPiiEntitiesCommandOutput,
} from "./commands/ContainsPiiEntitiesCommand";
import type { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import type {
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
} from "./commands/CreateDocumentClassifierCommand";
import type { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import type {
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
} from "./commands/CreateEntityRecognizerCommand";
import type { CreateFlywheelCommandInput, CreateFlywheelCommandOutput } from "./commands/CreateFlywheelCommand";
import type {
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
} from "./commands/DeleteDocumentClassifierCommand";
import type { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import type {
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
} from "./commands/DeleteEntityRecognizerCommand";
import type { DeleteFlywheelCommandInput, DeleteFlywheelCommandOutput } from "./commands/DeleteFlywheelCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import type {
  DescribeDocumentClassificationJobCommandInput,
  DescribeDocumentClassificationJobCommandOutput,
} from "./commands/DescribeDocumentClassificationJobCommand";
import type {
  DescribeDocumentClassifierCommandInput,
  DescribeDocumentClassifierCommandOutput,
} from "./commands/DescribeDocumentClassifierCommand";
import type {
  DescribeDominantLanguageDetectionJobCommandInput,
  DescribeDominantLanguageDetectionJobCommandOutput,
} from "./commands/DescribeDominantLanguageDetectionJobCommand";
import type { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import type {
  DescribeEntitiesDetectionJobCommandInput,
  DescribeEntitiesDetectionJobCommandOutput,
} from "./commands/DescribeEntitiesDetectionJobCommand";
import type {
  DescribeEntityRecognizerCommandInput,
  DescribeEntityRecognizerCommandOutput,
} from "./commands/DescribeEntityRecognizerCommand";
import type {
  DescribeEventsDetectionJobCommandInput,
  DescribeEventsDetectionJobCommandOutput,
} from "./commands/DescribeEventsDetectionJobCommand";
import type { DescribeFlywheelCommandInput, DescribeFlywheelCommandOutput } from "./commands/DescribeFlywheelCommand";
import type {
  DescribeFlywheelIterationCommandInput,
  DescribeFlywheelIterationCommandOutput,
} from "./commands/DescribeFlywheelIterationCommand";
import type {
  DescribeKeyPhrasesDetectionJobCommandInput,
  DescribeKeyPhrasesDetectionJobCommandOutput,
} from "./commands/DescribeKeyPhrasesDetectionJobCommand";
import type {
  DescribePiiEntitiesDetectionJobCommandInput,
  DescribePiiEntitiesDetectionJobCommandOutput,
} from "./commands/DescribePiiEntitiesDetectionJobCommand";
import type {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import type {
  DescribeSentimentDetectionJobCommandInput,
  DescribeSentimentDetectionJobCommandOutput,
} from "./commands/DescribeSentimentDetectionJobCommand";
import type {
  DescribeTargetedSentimentDetectionJobCommandInput,
  DescribeTargetedSentimentDetectionJobCommandOutput,
} from "./commands/DescribeTargetedSentimentDetectionJobCommand";
import type {
  DescribeTopicsDetectionJobCommandInput,
  DescribeTopicsDetectionJobCommandOutput,
} from "./commands/DescribeTopicsDetectionJobCommand";
import type {
  DetectDominantLanguageCommandInput,
  DetectDominantLanguageCommandOutput,
} from "./commands/DetectDominantLanguageCommand";
import type { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "./commands/DetectEntitiesCommand";
import type { DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput } from "./commands/DetectKeyPhrasesCommand";
import type {
  DetectPiiEntitiesCommandInput,
  DetectPiiEntitiesCommandOutput,
} from "./commands/DetectPiiEntitiesCommand";
import type { DetectSentimentCommandInput, DetectSentimentCommandOutput } from "./commands/DetectSentimentCommand";
import type { DetectSyntaxCommandInput, DetectSyntaxCommandOutput } from "./commands/DetectSyntaxCommand";
import type {
  DetectTargetedSentimentCommandInput,
  DetectTargetedSentimentCommandOutput,
} from "./commands/DetectTargetedSentimentCommand";
import type {
  DetectToxicContentCommandInput,
  DetectToxicContentCommandOutput,
} from "./commands/DetectToxicContentCommand";
import type { ImportModelCommandInput, ImportModelCommandOutput } from "./commands/ImportModelCommand";
import type { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import type {
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
} from "./commands/ListDocumentClassificationJobsCommand";
import type {
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "./commands/ListDocumentClassifiersCommand";
import type {
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
} from "./commands/ListDocumentClassifierSummariesCommand";
import type {
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "./commands/ListDominantLanguageDetectionJobsCommand";
import type { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import type {
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "./commands/ListEntitiesDetectionJobsCommand";
import type {
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "./commands/ListEntityRecognizersCommand";
import type {
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
} from "./commands/ListEntityRecognizerSummariesCommand";
import type {
  ListEventsDetectionJobsCommandInput,
  ListEventsDetectionJobsCommandOutput,
} from "./commands/ListEventsDetectionJobsCommand";
import type {
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "./commands/ListFlywheelIterationHistoryCommand";
import type { ListFlywheelsCommandInput, ListFlywheelsCommandOutput } from "./commands/ListFlywheelsCommand";
import type {
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "./commands/ListKeyPhrasesDetectionJobsCommand";
import type {
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
} from "./commands/ListPiiEntitiesDetectionJobsCommand";
import type {
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "./commands/ListSentimentDetectionJobsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "./commands/ListTargetedSentimentDetectionJobsCommand";
import type {
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput,
} from "./commands/ListTopicsDetectionJobsCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  StartDocumentClassificationJobCommandInput,
  StartDocumentClassificationJobCommandOutput,
} from "./commands/StartDocumentClassificationJobCommand";
import type {
  StartDominantLanguageDetectionJobCommandInput,
  StartDominantLanguageDetectionJobCommandOutput,
} from "./commands/StartDominantLanguageDetectionJobCommand";
import type {
  StartEntitiesDetectionJobCommandInput,
  StartEntitiesDetectionJobCommandOutput,
} from "./commands/StartEntitiesDetectionJobCommand";
import type {
  StartEventsDetectionJobCommandInput,
  StartEventsDetectionJobCommandOutput,
} from "./commands/StartEventsDetectionJobCommand";
import type {
  StartFlywheelIterationCommandInput,
  StartFlywheelIterationCommandOutput,
} from "./commands/StartFlywheelIterationCommand";
import type {
  StartKeyPhrasesDetectionJobCommandInput,
  StartKeyPhrasesDetectionJobCommandOutput,
} from "./commands/StartKeyPhrasesDetectionJobCommand";
import type {
  StartPiiEntitiesDetectionJobCommandInput,
  StartPiiEntitiesDetectionJobCommandOutput,
} from "./commands/StartPiiEntitiesDetectionJobCommand";
import type {
  StartSentimentDetectionJobCommandInput,
  StartSentimentDetectionJobCommandOutput,
} from "./commands/StartSentimentDetectionJobCommand";
import type {
  StartTargetedSentimentDetectionJobCommandInput,
  StartTargetedSentimentDetectionJobCommandOutput,
} from "./commands/StartTargetedSentimentDetectionJobCommand";
import type {
  StartTopicsDetectionJobCommandInput,
  StartTopicsDetectionJobCommandOutput,
} from "./commands/StartTopicsDetectionJobCommand";
import type {
  StopDominantLanguageDetectionJobCommandInput,
  StopDominantLanguageDetectionJobCommandOutput,
} from "./commands/StopDominantLanguageDetectionJobCommand";
import type {
  StopEntitiesDetectionJobCommandInput,
  StopEntitiesDetectionJobCommandOutput,
} from "./commands/StopEntitiesDetectionJobCommand";
import type {
  StopEventsDetectionJobCommandInput,
  StopEventsDetectionJobCommandOutput,
} from "./commands/StopEventsDetectionJobCommand";
import type {
  StopKeyPhrasesDetectionJobCommandInput,
  StopKeyPhrasesDetectionJobCommandOutput,
} from "./commands/StopKeyPhrasesDetectionJobCommand";
import type {
  StopPiiEntitiesDetectionJobCommandInput,
  StopPiiEntitiesDetectionJobCommandOutput,
} from "./commands/StopPiiEntitiesDetectionJobCommand";
import type {
  StopSentimentDetectionJobCommandInput,
  StopSentimentDetectionJobCommandOutput,
} from "./commands/StopSentimentDetectionJobCommand";
import type {
  StopTargetedSentimentDetectionJobCommandInput,
  StopTargetedSentimentDetectionJobCommandOutput,
} from "./commands/StopTargetedSentimentDetectionJobCommand";
import type {
  StopTrainingDocumentClassifierCommandInput,
  StopTrainingDocumentClassifierCommandOutput,
} from "./commands/StopTrainingDocumentClassifierCommand";
import type {
  StopTrainingEntityRecognizerCommandInput,
  StopTrainingEntityRecognizerCommandOutput,
} from "./commands/StopTrainingEntityRecognizerCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import type { UpdateFlywheelCommandInput, UpdateFlywheelCommandOutput } from "./commands/UpdateFlywheelCommand";
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
  | BatchDetectDominantLanguageCommandInput
  | BatchDetectEntitiesCommandInput
  | BatchDetectKeyPhrasesCommandInput
  | BatchDetectSentimentCommandInput
  | BatchDetectSyntaxCommandInput
  | BatchDetectTargetedSentimentCommandInput
  | ClassifyDocumentCommandInput
  | ContainsPiiEntitiesCommandInput
  | CreateDatasetCommandInput
  | CreateDocumentClassifierCommandInput
  | CreateEndpointCommandInput
  | CreateEntityRecognizerCommandInput
  | CreateFlywheelCommandInput
  | DeleteDocumentClassifierCommandInput
  | DeleteEndpointCommandInput
  | DeleteEntityRecognizerCommandInput
  | DeleteFlywheelCommandInput
  | DeleteResourcePolicyCommandInput
  | DescribeDatasetCommandInput
  | DescribeDocumentClassificationJobCommandInput
  | DescribeDocumentClassifierCommandInput
  | DescribeDominantLanguageDetectionJobCommandInput
  | DescribeEndpointCommandInput
  | DescribeEntitiesDetectionJobCommandInput
  | DescribeEntityRecognizerCommandInput
  | DescribeEventsDetectionJobCommandInput
  | DescribeFlywheelCommandInput
  | DescribeFlywheelIterationCommandInput
  | DescribeKeyPhrasesDetectionJobCommandInput
  | DescribePiiEntitiesDetectionJobCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeSentimentDetectionJobCommandInput
  | DescribeTargetedSentimentDetectionJobCommandInput
  | DescribeTopicsDetectionJobCommandInput
  | DetectDominantLanguageCommandInput
  | DetectEntitiesCommandInput
  | DetectKeyPhrasesCommandInput
  | DetectPiiEntitiesCommandInput
  | DetectSentimentCommandInput
  | DetectSyntaxCommandInput
  | DetectTargetedSentimentCommandInput
  | DetectToxicContentCommandInput
  | ImportModelCommandInput
  | ListDatasetsCommandInput
  | ListDocumentClassificationJobsCommandInput
  | ListDocumentClassifierSummariesCommandInput
  | ListDocumentClassifiersCommandInput
  | ListDominantLanguageDetectionJobsCommandInput
  | ListEndpointsCommandInput
  | ListEntitiesDetectionJobsCommandInput
  | ListEntityRecognizerSummariesCommandInput
  | ListEntityRecognizersCommandInput
  | ListEventsDetectionJobsCommandInput
  | ListFlywheelIterationHistoryCommandInput
  | ListFlywheelsCommandInput
  | ListKeyPhrasesDetectionJobsCommandInput
  | ListPiiEntitiesDetectionJobsCommandInput
  | ListSentimentDetectionJobsCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetedSentimentDetectionJobsCommandInput
  | ListTopicsDetectionJobsCommandInput
  | PutResourcePolicyCommandInput
  | StartDocumentClassificationJobCommandInput
  | StartDominantLanguageDetectionJobCommandInput
  | StartEntitiesDetectionJobCommandInput
  | StartEventsDetectionJobCommandInput
  | StartFlywheelIterationCommandInput
  | StartKeyPhrasesDetectionJobCommandInput
  | StartPiiEntitiesDetectionJobCommandInput
  | StartSentimentDetectionJobCommandInput
  | StartTargetedSentimentDetectionJobCommandInput
  | StartTopicsDetectionJobCommandInput
  | StopDominantLanguageDetectionJobCommandInput
  | StopEntitiesDetectionJobCommandInput
  | StopEventsDetectionJobCommandInput
  | StopKeyPhrasesDetectionJobCommandInput
  | StopPiiEntitiesDetectionJobCommandInput
  | StopSentimentDetectionJobCommandInput
  | StopTargetedSentimentDetectionJobCommandInput
  | StopTrainingDocumentClassifierCommandInput
  | StopTrainingEntityRecognizerCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEndpointCommandInput
  | UpdateFlywheelCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchDetectDominantLanguageCommandOutput
  | BatchDetectEntitiesCommandOutput
  | BatchDetectKeyPhrasesCommandOutput
  | BatchDetectSentimentCommandOutput
  | BatchDetectSyntaxCommandOutput
  | BatchDetectTargetedSentimentCommandOutput
  | ClassifyDocumentCommandOutput
  | ContainsPiiEntitiesCommandOutput
  | CreateDatasetCommandOutput
  | CreateDocumentClassifierCommandOutput
  | CreateEndpointCommandOutput
  | CreateEntityRecognizerCommandOutput
  | CreateFlywheelCommandOutput
  | DeleteDocumentClassifierCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEntityRecognizerCommandOutput
  | DeleteFlywheelCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDocumentClassificationJobCommandOutput
  | DescribeDocumentClassifierCommandOutput
  | DescribeDominantLanguageDetectionJobCommandOutput
  | DescribeEndpointCommandOutput
  | DescribeEntitiesDetectionJobCommandOutput
  | DescribeEntityRecognizerCommandOutput
  | DescribeEventsDetectionJobCommandOutput
  | DescribeFlywheelCommandOutput
  | DescribeFlywheelIterationCommandOutput
  | DescribeKeyPhrasesDetectionJobCommandOutput
  | DescribePiiEntitiesDetectionJobCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeSentimentDetectionJobCommandOutput
  | DescribeTargetedSentimentDetectionJobCommandOutput
  | DescribeTopicsDetectionJobCommandOutput
  | DetectDominantLanguageCommandOutput
  | DetectEntitiesCommandOutput
  | DetectKeyPhrasesCommandOutput
  | DetectPiiEntitiesCommandOutput
  | DetectSentimentCommandOutput
  | DetectSyntaxCommandOutput
  | DetectTargetedSentimentCommandOutput
  | DetectToxicContentCommandOutput
  | ImportModelCommandOutput
  | ListDatasetsCommandOutput
  | ListDocumentClassificationJobsCommandOutput
  | ListDocumentClassifierSummariesCommandOutput
  | ListDocumentClassifiersCommandOutput
  | ListDominantLanguageDetectionJobsCommandOutput
  | ListEndpointsCommandOutput
  | ListEntitiesDetectionJobsCommandOutput
  | ListEntityRecognizerSummariesCommandOutput
  | ListEntityRecognizersCommandOutput
  | ListEventsDetectionJobsCommandOutput
  | ListFlywheelIterationHistoryCommandOutput
  | ListFlywheelsCommandOutput
  | ListKeyPhrasesDetectionJobsCommandOutput
  | ListPiiEntitiesDetectionJobsCommandOutput
  | ListSentimentDetectionJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetedSentimentDetectionJobsCommandOutput
  | ListTopicsDetectionJobsCommandOutput
  | PutResourcePolicyCommandOutput
  | StartDocumentClassificationJobCommandOutput
  | StartDominantLanguageDetectionJobCommandOutput
  | StartEntitiesDetectionJobCommandOutput
  | StartEventsDetectionJobCommandOutput
  | StartFlywheelIterationCommandOutput
  | StartKeyPhrasesDetectionJobCommandOutput
  | StartPiiEntitiesDetectionJobCommandOutput
  | StartSentimentDetectionJobCommandOutput
  | StartTargetedSentimentDetectionJobCommandOutput
  | StartTopicsDetectionJobCommandOutput
  | StopDominantLanguageDetectionJobCommandOutput
  | StopEntitiesDetectionJobCommandOutput
  | StopEventsDetectionJobCommandOutput
  | StopKeyPhrasesDetectionJobCommandOutput
  | StopPiiEntitiesDetectionJobCommandOutput
  | StopSentimentDetectionJobCommandOutput
  | StopTargetedSentimentDetectionJobCommandOutput
  | StopTrainingDocumentClassifierCommandOutput
  | StopTrainingEntityRecognizerCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEndpointCommandOutput
  | UpdateFlywheelCommandOutput;

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
export type ComprehendClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ComprehendClient class constructor that set the region, credentials and other options.
 */
export interface ComprehendClientConfig extends ComprehendClientConfigType {}

/**
 * @public
 */
export type ComprehendClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ComprehendClient class. This is resolved and normalized from the {@link ComprehendClientConfig | constructor configuration interface}.
 */
export interface ComprehendClientResolvedConfig extends ComprehendClientResolvedConfigType {}

/**
 * <p>Amazon Comprehend is an Amazon Web Services service for gaining insight into the content of documents.
 *       Use these actions to determine the topics contained in your documents, the topics they
 *       discuss, the predominant sentiment expressed in them, the predominant language used, and
 *       more.</p>
 * @public
 */
export class ComprehendClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ComprehendClientResolvedConfig
> {
  /**
   * The resolved configuration of ComprehendClient class. This is resolved and normalized from the {@link ComprehendClientConfig | constructor configuration interface}.
   */
  readonly config: ComprehendClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ComprehendClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultComprehendHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ComprehendClientResolvedConfig) =>
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
