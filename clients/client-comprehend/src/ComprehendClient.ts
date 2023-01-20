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
import {
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
} from "./commands/CreateDocumentClassifierCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import {
  CreateEntityRecognizerCommandInput,
  CreateEntityRecognizerCommandOutput,
} from "./commands/CreateEntityRecognizerCommand";
import {
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
} from "./commands/DeleteDocumentClassifierCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import {
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
} from "./commands/DeleteEntityRecognizerCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
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
import { ImportModelCommandInput, ImportModelCommandOutput } from "./commands/ImportModelCommand";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchDetectDominantLanguageCommandInput
  | BatchDetectEntitiesCommandInput
  | BatchDetectKeyPhrasesCommandInput
  | BatchDetectSentimentCommandInput
  | BatchDetectSyntaxCommandInput
  | BatchDetectTargetedSentimentCommandInput
  | ClassifyDocumentCommandInput
  | ContainsPiiEntitiesCommandInput
  | CreateDocumentClassifierCommandInput
  | CreateEndpointCommandInput
  | CreateEntityRecognizerCommandInput
  | DeleteDocumentClassifierCommandInput
  | DeleteEndpointCommandInput
  | DeleteEntityRecognizerCommandInput
  | DeleteResourcePolicyCommandInput
  | DescribeDocumentClassificationJobCommandInput
  | DescribeDocumentClassifierCommandInput
  | DescribeDominantLanguageDetectionJobCommandInput
  | DescribeEndpointCommandInput
  | DescribeEntitiesDetectionJobCommandInput
  | DescribeEntityRecognizerCommandInput
  | DescribeEventsDetectionJobCommandInput
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
  | ImportModelCommandInput
  | ListDocumentClassificationJobsCommandInput
  | ListDocumentClassifierSummariesCommandInput
  | ListDocumentClassifiersCommandInput
  | ListDominantLanguageDetectionJobsCommandInput
  | ListEndpointsCommandInput
  | ListEntitiesDetectionJobsCommandInput
  | ListEntityRecognizerSummariesCommandInput
  | ListEntityRecognizersCommandInput
  | ListEventsDetectionJobsCommandInput
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
  | UpdateEndpointCommandInput;

export type ServiceOutputTypes =
  | BatchDetectDominantLanguageCommandOutput
  | BatchDetectEntitiesCommandOutput
  | BatchDetectKeyPhrasesCommandOutput
  | BatchDetectSentimentCommandOutput
  | BatchDetectSyntaxCommandOutput
  | BatchDetectTargetedSentimentCommandOutput
  | ClassifyDocumentCommandOutput
  | ContainsPiiEntitiesCommandOutput
  | CreateDocumentClassifierCommandOutput
  | CreateEndpointCommandOutput
  | CreateEntityRecognizerCommandOutput
  | DeleteDocumentClassifierCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEntityRecognizerCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DescribeDocumentClassificationJobCommandOutput
  | DescribeDocumentClassifierCommandOutput
  | DescribeDominantLanguageDetectionJobCommandOutput
  | DescribeEndpointCommandOutput
  | DescribeEntitiesDetectionJobCommandOutput
  | DescribeEntityRecognizerCommandOutput
  | DescribeEventsDetectionJobCommandOutput
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
  | ImportModelCommandOutput
  | ListDocumentClassificationJobsCommandOutput
  | ListDocumentClassifierSummariesCommandOutput
  | ListDocumentClassifiersCommandOutput
  | ListDominantLanguageDetectionJobsCommandOutput
  | ListEndpointsCommandOutput
  | ListEntitiesDetectionJobsCommandOutput
  | ListEntityRecognizerSummariesCommandOutput
  | ListEntityRecognizersCommandOutput
  | ListEventsDetectionJobsCommandOutput
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
  | UpdateEndpointCommandOutput;

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

type ComprehendClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ComprehendClient class constructor that set the region, credentials and other options.
 */
export interface ComprehendClientConfig extends ComprehendClientConfigType {}

type ComprehendClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ComprehendClient class. This is resolved and normalized from the {@link ComprehendClientConfig | constructor configuration interface}.
 */
export interface ComprehendClientResolvedConfig extends ComprehendClientResolvedConfigType {}

/**
 * <p>Amazon Comprehend is an AWS service for gaining insight into the content of documents.
 *       Use these actions to determine the topics contained in your documents, the topics they
 *       discuss, the predominant sentiment expressed in them, the predominant language used, and
 *       more.</p>
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

  constructor(configuration: ComprehendClientConfig) {
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
