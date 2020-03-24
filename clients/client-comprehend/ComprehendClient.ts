import {
  BatchDetectDominantLanguageRequest,
  BatchDetectDominantLanguageResponse,
  BatchDetectEntitiesRequest,
  BatchDetectEntitiesResponse,
  BatchDetectKeyPhrasesRequest,
  BatchDetectKeyPhrasesResponse,
  BatchDetectSentimentRequest,
  BatchDetectSentimentResponse,
  BatchDetectSyntaxRequest,
  BatchDetectSyntaxResponse,
  ClassifyDocumentRequest,
  ClassifyDocumentResponse,
  CreateDocumentClassifierRequest,
  CreateDocumentClassifierResponse,
  CreateEndpointRequest,
  CreateEndpointResponse,
  CreateEntityRecognizerRequest,
  CreateEntityRecognizerResponse,
  DeleteDocumentClassifierRequest,
  DeleteDocumentClassifierResponse,
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEntityRecognizerRequest,
  DeleteEntityRecognizerResponse,
  DescribeDocumentClassificationJobRequest,
  DescribeDocumentClassificationJobResponse,
  DescribeDocumentClassifierRequest,
  DescribeDocumentClassifierResponse,
  DescribeDominantLanguageDetectionJobRequest,
  DescribeDominantLanguageDetectionJobResponse,
  DescribeEndpointRequest,
  DescribeEndpointResponse,
  DescribeEntitiesDetectionJobRequest,
  DescribeEntitiesDetectionJobResponse,
  DescribeEntityRecognizerRequest,
  DescribeEntityRecognizerResponse,
  DescribeKeyPhrasesDetectionJobRequest,
  DescribeKeyPhrasesDetectionJobResponse,
  DescribeSentimentDetectionJobRequest,
  DescribeSentimentDetectionJobResponse,
  DescribeTopicsDetectionJobRequest,
  DescribeTopicsDetectionJobResponse,
  DetectDominantLanguageRequest,
  DetectDominantLanguageResponse,
  DetectEntitiesRequest,
  DetectEntitiesResponse,
  DetectKeyPhrasesRequest,
  DetectKeyPhrasesResponse,
  DetectSentimentRequest,
  DetectSentimentResponse,
  DetectSyntaxRequest,
  DetectSyntaxResponse,
  ListDocumentClassificationJobsRequest,
  ListDocumentClassificationJobsResponse,
  ListDocumentClassifiersRequest,
  ListDocumentClassifiersResponse,
  ListDominantLanguageDetectionJobsRequest,
  ListDominantLanguageDetectionJobsResponse,
  ListEndpointsRequest,
  ListEndpointsResponse,
  ListEntitiesDetectionJobsRequest,
  ListEntitiesDetectionJobsResponse,
  ListEntityRecognizersRequest,
  ListEntityRecognizersResponse,
  ListKeyPhrasesDetectionJobsRequest,
  ListKeyPhrasesDetectionJobsResponse,
  ListSentimentDetectionJobsRequest,
  ListSentimentDetectionJobsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTopicsDetectionJobsRequest,
  ListTopicsDetectionJobsResponse,
  StartDocumentClassificationJobRequest,
  StartDocumentClassificationJobResponse,
  StartDominantLanguageDetectionJobRequest,
  StartDominantLanguageDetectionJobResponse,
  StartEntitiesDetectionJobRequest,
  StartEntitiesDetectionJobResponse,
  StartKeyPhrasesDetectionJobRequest,
  StartKeyPhrasesDetectionJobResponse,
  StartSentimentDetectionJobRequest,
  StartSentimentDetectionJobResponse,
  StartTopicsDetectionJobRequest,
  StartTopicsDetectionJobResponse,
  StopDominantLanguageDetectionJobRequest,
  StopDominantLanguageDetectionJobResponse,
  StopEntitiesDetectionJobRequest,
  StopEntitiesDetectionJobResponse,
  StopKeyPhrasesDetectionJobRequest,
  StopKeyPhrasesDetectionJobResponse,
  StopSentimentDetectionJobRequest,
  StopSentimentDetectionJobResponse,
  StopTrainingDocumentClassifierRequest,
  StopTrainingDocumentClassifierResponse,
  StopTrainingEntityRecognizerRequest,
  StopTrainingEntityRecognizerResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateEndpointRequest,
  UpdateEndpointResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchDetectDominantLanguageRequest
  | BatchDetectEntitiesRequest
  | BatchDetectKeyPhrasesRequest
  | BatchDetectSentimentRequest
  | BatchDetectSyntaxRequest
  | ClassifyDocumentRequest
  | CreateDocumentClassifierRequest
  | CreateEndpointRequest
  | CreateEntityRecognizerRequest
  | DeleteDocumentClassifierRequest
  | DeleteEndpointRequest
  | DeleteEntityRecognizerRequest
  | DescribeDocumentClassificationJobRequest
  | DescribeDocumentClassifierRequest
  | DescribeDominantLanguageDetectionJobRequest
  | DescribeEndpointRequest
  | DescribeEntitiesDetectionJobRequest
  | DescribeEntityRecognizerRequest
  | DescribeKeyPhrasesDetectionJobRequest
  | DescribeSentimentDetectionJobRequest
  | DescribeTopicsDetectionJobRequest
  | DetectDominantLanguageRequest
  | DetectEntitiesRequest
  | DetectKeyPhrasesRequest
  | DetectSentimentRequest
  | DetectSyntaxRequest
  | ListDocumentClassificationJobsRequest
  | ListDocumentClassifiersRequest
  | ListDominantLanguageDetectionJobsRequest
  | ListEndpointsRequest
  | ListEntitiesDetectionJobsRequest
  | ListEntityRecognizersRequest
  | ListKeyPhrasesDetectionJobsRequest
  | ListSentimentDetectionJobsRequest
  | ListTagsForResourceRequest
  | ListTopicsDetectionJobsRequest
  | StartDocumentClassificationJobRequest
  | StartDominantLanguageDetectionJobRequest
  | StartEntitiesDetectionJobRequest
  | StartKeyPhrasesDetectionJobRequest
  | StartSentimentDetectionJobRequest
  | StartTopicsDetectionJobRequest
  | StopDominantLanguageDetectionJobRequest
  | StopEntitiesDetectionJobRequest
  | StopKeyPhrasesDetectionJobRequest
  | StopSentimentDetectionJobRequest
  | StopTrainingDocumentClassifierRequest
  | StopTrainingEntityRecognizerRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateEndpointRequest;

export type ServiceOutputTypes =
  | BatchDetectDominantLanguageResponse
  | BatchDetectEntitiesResponse
  | BatchDetectKeyPhrasesResponse
  | BatchDetectSentimentResponse
  | BatchDetectSyntaxResponse
  | ClassifyDocumentResponse
  | CreateDocumentClassifierResponse
  | CreateEndpointResponse
  | CreateEntityRecognizerResponse
  | DeleteDocumentClassifierResponse
  | DeleteEndpointResponse
  | DeleteEntityRecognizerResponse
  | DescribeDocumentClassificationJobResponse
  | DescribeDocumentClassifierResponse
  | DescribeDominantLanguageDetectionJobResponse
  | DescribeEndpointResponse
  | DescribeEntitiesDetectionJobResponse
  | DescribeEntityRecognizerResponse
  | DescribeKeyPhrasesDetectionJobResponse
  | DescribeSentimentDetectionJobResponse
  | DescribeTopicsDetectionJobResponse
  | DetectDominantLanguageResponse
  | DetectEntitiesResponse
  | DetectKeyPhrasesResponse
  | DetectSentimentResponse
  | DetectSyntaxResponse
  | ListDocumentClassificationJobsResponse
  | ListDocumentClassifiersResponse
  | ListDominantLanguageDetectionJobsResponse
  | ListEndpointsResponse
  | ListEntitiesDetectionJobsResponse
  | ListEntityRecognizersResponse
  | ListKeyPhrasesDetectionJobsResponse
  | ListSentimentDetectionJobsResponse
  | ListTagsForResourceResponse
  | ListTopicsDetectionJobsResponse
  | StartDocumentClassificationJobResponse
  | StartDominantLanguageDetectionJobResponse
  | StartEntitiesDetectionJobResponse
  | StartKeyPhrasesDetectionJobResponse
  | StartSentimentDetectionJobResponse
  | StartTopicsDetectionJobResponse
  | StopDominantLanguageDetectionJobResponse
  | StopEntitiesDetectionJobResponse
  | StopKeyPhrasesDetectionJobResponse
  | StopSentimentDetectionJobResponse
  | StopTrainingDocumentClassifierResponse
  | StopTrainingEntityRecognizerResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateEndpointResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ComprehendClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ComprehendClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *          <p>Amazon Comprehend is an AWS service for gaining insight into the content of documents. Use these
 *       actions to determine the topics contained in your documents, the topics they discuss, the
 *       predominant sentiment expressed in them, the predominant language used, and more.</p>
 *
 */
export class ComprehendClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ComprehendClientResolvedConfig
> {
  readonly config: ComprehendClientResolvedConfig;

  constructor(configuration: ComprehendClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
