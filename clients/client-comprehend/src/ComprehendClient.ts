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
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
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
  defaultComprehendHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchDetectDominantLanguageCommandInput,
  BatchDetectDominantLanguageCommandOutput,
} from "./commands/BatchDetectDominantLanguageCommand";
import {
  BatchDetectEntitiesCommandInput,
  BatchDetectEntitiesCommandOutput,
} from "./commands/BatchDetectEntitiesCommand";
import {
  BatchDetectKeyPhrasesCommandInput,
  BatchDetectKeyPhrasesCommandOutput,
} from "./commands/BatchDetectKeyPhrasesCommand";
import {
  BatchDetectSentimentCommandInput,
  BatchDetectSentimentCommandOutput,
} from "./commands/BatchDetectSentimentCommand";
import { BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput } from "./commands/BatchDetectSyntaxCommand";
import {
  BatchDetectTargetedSentimentCommandInput,
  BatchDetectTargetedSentimentCommandOutput,
} from "./commands/BatchDetectTargetedSentimentCommand";
import { ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput } from "./commands/ClassifyDocumentCommand";
import {
  ContainsPiiEntitiesCommandInput,
  ContainsPiiEntitiesCommandOutput,
} from "./commands/ContainsPiiEntitiesCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import {
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
} from "./commands/CreateDocumentClassifierCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import {
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
} from "./commands/CreateEntityRecognizerCommand";
import { CreateFlywheelCommandInput, CreateFlywheelCommandOutput } from "./commands/CreateFlywheelCommand";
import {
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
} from "./commands/DeleteDocumentClassifierCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import {
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
} from "./commands/DeleteEntityRecognizerCommand";
import { DeleteFlywheelCommandInput, DeleteFlywheelCommandOutput } from "./commands/DeleteFlywheelCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeDocumentClassificationJobCommandInput,
  DescribeDocumentClassificationJobCommandOutput,
} from "./commands/DescribeDocumentClassificationJobCommand";
import {
  DescribeDocumentClassifierCommandInput,
  DescribeDocumentClassifierCommandOutput,
} from "./commands/DescribeDocumentClassifierCommand";
import {
  DescribeDominantLanguageDetectionJobCommandInput,
  DescribeDominantLanguageDetectionJobCommandOutput,
} from "./commands/DescribeDominantLanguageDetectionJobCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import {
  DescribeEntitiesDetectionJobCommandInput,
  DescribeEntitiesDetectionJobCommandOutput,
} from "./commands/DescribeEntitiesDetectionJobCommand";
import {
  DescribeEntityRecognizerCommandInput,
  DescribeEntityRecognizerCommandOutput,
} from "./commands/DescribeEntityRecognizerCommand";
import {
  DescribeEventsDetectionJobCommandInput,
  DescribeEventsDetectionJobCommandOutput,
} from "./commands/DescribeEventsDetectionJobCommand";
import { DescribeFlywheelCommandInput, DescribeFlywheelCommandOutput } from "./commands/DescribeFlywheelCommand";
import {
  DescribeFlywheelIterationCommandInput,
  DescribeFlywheelIterationCommandOutput,
} from "./commands/DescribeFlywheelIterationCommand";
import {
  DescribeKeyPhrasesDetectionJobCommandInput,
  DescribeKeyPhrasesDetectionJobCommandOutput,
} from "./commands/DescribeKeyPhrasesDetectionJobCommand";
import {
  DescribePiiEntitiesDetectionJobCommandInput,
  DescribePiiEntitiesDetectionJobCommandOutput,
} from "./commands/DescribePiiEntitiesDetectionJobCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeSentimentDetectionJobCommandInput,
  DescribeSentimentDetectionJobCommandOutput,
} from "./commands/DescribeSentimentDetectionJobCommand";
import {
  DescribeTargetedSentimentDetectionJobCommandInput,
  DescribeTargetedSentimentDetectionJobCommandOutput,
} from "./commands/DescribeTargetedSentimentDetectionJobCommand";
import {
  DescribeTopicsDetectionJobCommandInput,
  DescribeTopicsDetectionJobCommandOutput,
} from "./commands/DescribeTopicsDetectionJobCommand";
import {
  DetectDominantLanguageCommandInput,
  DetectDominantLanguageCommandOutput,
} from "./commands/DetectDominantLanguageCommand";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "./commands/DetectEntitiesCommand";
import { DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput } from "./commands/DetectKeyPhrasesCommand";
import { DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput } from "./commands/DetectPiiEntitiesCommand";
import { DetectSentimentCommandInput, DetectSentimentCommandOutput } from "./commands/DetectSentimentCommand";
import { DetectSyntaxCommandInput, DetectSyntaxCommandOutput } from "./commands/DetectSyntaxCommand";
import {
  DetectTargetedSentimentCommandInput,
  DetectTargetedSentimentCommandOutput,
} from "./commands/DetectTargetedSentimentCommand";
import { DetectToxicContentCommandInput, DetectToxicContentCommandOutput } from "./commands/DetectToxicContentCommand";
import { ImportModelCommandInput, ImportModelCommandOutput } from "./commands/ImportModelCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import {
  ListDocumentClassificationJobsCommandInput,
  ListDocumentClassificationJobsCommandOutput,
} from "./commands/ListDocumentClassificationJobsCommand";
import {
  ListDocumentClassifiersCommandInput,
  ListDocumentClassifiersCommandOutput,
} from "./commands/ListDocumentClassifiersCommand";
import {
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
} from "./commands/ListDocumentClassifierSummariesCommand";
import {
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "./commands/ListDominantLanguageDetectionJobsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import {
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "./commands/ListEntitiesDetectionJobsCommand";
import {
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
} from "./commands/ListEntityRecognizersCommand";
import {
  ListEntityRecognizerSummariesCommandInput,
  ListEntityRecognizerSummariesCommandOutput,
} from "./commands/ListEntityRecognizerSummariesCommand";
import {
  ListEventsDetectionJobsCommandInput,
  ListEventsDetectionJobsCommandOutput,
} from "./commands/ListEventsDetectionJobsCommand";
import {
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "./commands/ListFlywheelIterationHistoryCommand";
import { ListFlywheelsCommandInput, ListFlywheelsCommandOutput } from "./commands/ListFlywheelsCommand";
import {
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "./commands/ListKeyPhrasesDetectionJobsCommand";
import {
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
} from "./commands/ListPiiEntitiesDetectionJobsCommand";
import {
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
} from "./commands/ListSentimentDetectionJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "./commands/ListTargetedSentimentDetectionJobsCommand";
import {
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput,
} from "./commands/ListTopicsDetectionJobsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  StartDocumentClassificationJobCommandInput,
  StartDocumentClassificationJobCommandOutput,
} from "./commands/StartDocumentClassificationJobCommand";
import {
  StartDominantLanguageDetectionJobCommandInput,
  StartDominantLanguageDetectionJobCommandOutput,
} from "./commands/StartDominantLanguageDetectionJobCommand";
import {
  StartEntitiesDetectionJobCommandInput,
  StartEntitiesDetectionJobCommandOutput,
} from "./commands/StartEntitiesDetectionJobCommand";
import {
  StartEventsDetectionJobCommandInput,
  StartEventsDetectionJobCommandOutput,
} from "./commands/StartEventsDetectionJobCommand";
import {
  StartFlywheelIterationCommandInput,
  StartFlywheelIterationCommandOutput,
} from "./commands/StartFlywheelIterationCommand";
import {
  StartKeyPhrasesDetectionJobCommandInput,
  StartKeyPhrasesDetectionJobCommandOutput,
} from "./commands/StartKeyPhrasesDetectionJobCommand";
import {
  StartPiiEntitiesDetectionJobCommandInput,
  StartPiiEntitiesDetectionJobCommandOutput,
} from "./commands/StartPiiEntitiesDetectionJobCommand";
import {
  StartSentimentDetectionJobCommandInput,
  StartSentimentDetectionJobCommandOutput,
} from "./commands/StartSentimentDetectionJobCommand";
import {
  StartTargetedSentimentDetectionJobCommandInput,
  StartTargetedSentimentDetectionJobCommandOutput,
} from "./commands/StartTargetedSentimentDetectionJobCommand";
import {
  StartTopicsDetectionJobCommandInput,
  StartTopicsDetectionJobCommandOutput,
} from "./commands/StartTopicsDetectionJobCommand";
import {
  StopDominantLanguageDetectionJobCommandInput,
  StopDominantLanguageDetectionJobCommandOutput,
} from "./commands/StopDominantLanguageDetectionJobCommand";
import {
  StopEntitiesDetectionJobCommandInput,
  StopEntitiesDetectionJobCommandOutput,
} from "./commands/StopEntitiesDetectionJobCommand";
import {
  StopEventsDetectionJobCommandInput,
  StopEventsDetectionJobCommandOutput,
} from "./commands/StopEventsDetectionJobCommand";
import {
  StopKeyPhrasesDetectionJobCommandInput,
  StopKeyPhrasesDetectionJobCommandOutput,
} from "./commands/StopKeyPhrasesDetectionJobCommand";
import {
  StopPiiEntitiesDetectionJobCommandInput,
  StopPiiEntitiesDetectionJobCommandOutput,
} from "./commands/StopPiiEntitiesDetectionJobCommand";
import {
  StopSentimentDetectionJobCommandInput,
  StopSentimentDetectionJobCommandOutput,
} from "./commands/StopSentimentDetectionJobCommand";
import {
  StopTargetedSentimentDetectionJobCommandInput,
  StopTargetedSentimentDetectionJobCommandOutput,
} from "./commands/StopTargetedSentimentDetectionJobCommand";
import {
  StopTrainingDocumentClassifierCommandInput,
  StopTrainingDocumentClassifierCommandOutput,
} from "./commands/StopTrainingDocumentClassifierCommand";
import {
  StopTrainingEntityRecognizerCommandInput,
  StopTrainingEntityRecognizerCommandOutput,
} from "./commands/StopTrainingEntityRecognizerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import { UpdateFlywheelCommandInput, UpdateFlywheelCommandOutput } from "./commands/UpdateFlywheelCommand";
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
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
