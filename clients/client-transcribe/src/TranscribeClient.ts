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
  CreateCallAnalyticsCategoryCommandInput,
  CreateCallAnalyticsCategoryCommandOutput,
} from "./commands/CreateCallAnalyticsCategoryCommand";
import {
  CreateLanguageModelCommandInput,
  CreateLanguageModelCommandOutput,
} from "./commands/CreateLanguageModelCommand";
import {
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
} from "./commands/CreateMedicalVocabularyCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "./commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
} from "./commands/CreateVocabularyFilterCommand";
import {
  DeleteCallAnalyticsCategoryCommandInput,
  DeleteCallAnalyticsCategoryCommandOutput,
} from "./commands/DeleteCallAnalyticsCategoryCommand";
import {
  DeleteCallAnalyticsJobCommandInput,
  DeleteCallAnalyticsJobCommandOutput,
} from "./commands/DeleteCallAnalyticsJobCommand";
import {
  DeleteLanguageModelCommandInput,
  DeleteLanguageModelCommandOutput,
} from "./commands/DeleteLanguageModelCommand";
import {
  DeleteMedicalTranscriptionJobCommandInput,
  DeleteMedicalTranscriptionJobCommandOutput,
} from "./commands/DeleteMedicalTranscriptionJobCommand";
import {
  DeleteMedicalVocabularyCommandInput,
  DeleteMedicalVocabularyCommandOutput,
} from "./commands/DeleteMedicalVocabularyCommand";
import {
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput,
} from "./commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "./commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput,
} from "./commands/DeleteVocabularyFilterCommand";
import {
  DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommandOutput,
} from "./commands/DescribeLanguageModelCommand";
import {
  GetCallAnalyticsCategoryCommandInput,
  GetCallAnalyticsCategoryCommandOutput,
} from "./commands/GetCallAnalyticsCategoryCommand";
import {
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
} from "./commands/GetCallAnalyticsJobCommand";
import {
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
} from "./commands/GetMedicalTranscriptionJobCommand";
import {
  GetMedicalVocabularyCommandInput,
  GetMedicalVocabularyCommandOutput,
} from "./commands/GetMedicalVocabularyCommand";
import {
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
} from "./commands/GetTranscriptionJobCommand";
import { GetVocabularyCommandInput, GetVocabularyCommandOutput } from "./commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput,
} from "./commands/GetVocabularyFilterCommand";
import {
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
} from "./commands/ListCallAnalyticsCategoriesCommand";
import {
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
} from "./commands/ListCallAnalyticsJobsCommand";
import { ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput } from "./commands/ListLanguageModelsCommand";
import {
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "./commands/ListMedicalTranscriptionJobsCommand";
import {
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "./commands/ListMedicalVocabulariesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "./commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "./commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "./commands/ListVocabularyFiltersCommand";
import {
  StartCallAnalyticsJobCommandInput,
  StartCallAnalyticsJobCommandOutput,
} from "./commands/StartCallAnalyticsJobCommand";
import {
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
} from "./commands/StartMedicalTranscriptionJobCommand";
import {
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
} from "./commands/StartTranscriptionJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCallAnalyticsCategoryCommandInput,
  UpdateCallAnalyticsCategoryCommandOutput,
} from "./commands/UpdateCallAnalyticsCategoryCommand";
import {
  UpdateMedicalVocabularyCommandInput,
  UpdateMedicalVocabularyCommandOutput,
} from "./commands/UpdateMedicalVocabularyCommand";
import { UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput } from "./commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
} from "./commands/UpdateVocabularyFilterCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateCallAnalyticsCategoryCommandInput
  | CreateLanguageModelCommandInput
  | CreateMedicalVocabularyCommandInput
  | CreateVocabularyCommandInput
  | CreateVocabularyFilterCommandInput
  | DeleteCallAnalyticsCategoryCommandInput
  | DeleteCallAnalyticsJobCommandInput
  | DeleteLanguageModelCommandInput
  | DeleteMedicalTranscriptionJobCommandInput
  | DeleteMedicalVocabularyCommandInput
  | DeleteTranscriptionJobCommandInput
  | DeleteVocabularyCommandInput
  | DeleteVocabularyFilterCommandInput
  | DescribeLanguageModelCommandInput
  | GetCallAnalyticsCategoryCommandInput
  | GetCallAnalyticsJobCommandInput
  | GetMedicalTranscriptionJobCommandInput
  | GetMedicalVocabularyCommandInput
  | GetTranscriptionJobCommandInput
  | GetVocabularyCommandInput
  | GetVocabularyFilterCommandInput
  | ListCallAnalyticsCategoriesCommandInput
  | ListCallAnalyticsJobsCommandInput
  | ListLanguageModelsCommandInput
  | ListMedicalTranscriptionJobsCommandInput
  | ListMedicalVocabulariesCommandInput
  | ListTagsForResourceCommandInput
  | ListTranscriptionJobsCommandInput
  | ListVocabulariesCommandInput
  | ListVocabularyFiltersCommandInput
  | StartCallAnalyticsJobCommandInput
  | StartMedicalTranscriptionJobCommandInput
  | StartTranscriptionJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCallAnalyticsCategoryCommandInput
  | UpdateMedicalVocabularyCommandInput
  | UpdateVocabularyCommandInput
  | UpdateVocabularyFilterCommandInput;

export type ServiceOutputTypes =
  | CreateCallAnalyticsCategoryCommandOutput
  | CreateLanguageModelCommandOutput
  | CreateMedicalVocabularyCommandOutput
  | CreateVocabularyCommandOutput
  | CreateVocabularyFilterCommandOutput
  | DeleteCallAnalyticsCategoryCommandOutput
  | DeleteCallAnalyticsJobCommandOutput
  | DeleteLanguageModelCommandOutput
  | DeleteMedicalTranscriptionJobCommandOutput
  | DeleteMedicalVocabularyCommandOutput
  | DeleteTranscriptionJobCommandOutput
  | DeleteVocabularyCommandOutput
  | DeleteVocabularyFilterCommandOutput
  | DescribeLanguageModelCommandOutput
  | GetCallAnalyticsCategoryCommandOutput
  | GetCallAnalyticsJobCommandOutput
  | GetMedicalTranscriptionJobCommandOutput
  | GetMedicalVocabularyCommandOutput
  | GetTranscriptionJobCommandOutput
  | GetVocabularyCommandOutput
  | GetVocabularyFilterCommandOutput
  | ListCallAnalyticsCategoriesCommandOutput
  | ListCallAnalyticsJobsCommandOutput
  | ListLanguageModelsCommandOutput
  | ListMedicalTranscriptionJobsCommandOutput
  | ListMedicalVocabulariesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTranscriptionJobsCommandOutput
  | ListVocabulariesCommandOutput
  | ListVocabularyFiltersCommandOutput
  | StartCallAnalyticsJobCommandOutput
  | StartMedicalTranscriptionJobCommandOutput
  | StartTranscriptionJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCallAnalyticsCategoryCommandOutput
  | UpdateMedicalVocabularyCommandOutput
  | UpdateVocabularyCommandOutput
  | UpdateVocabularyFilterCommandOutput;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type TranscribeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of TranscribeClient class constructor that set the region, credentials and other options.
 */
export interface TranscribeClientConfig extends TranscribeClientConfigType {}

type TranscribeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of TranscribeClient class. This is resolved and normalized from the {@link TranscribeClientConfig | constructor configuration interface}.
 */
export interface TranscribeClientResolvedConfig extends TranscribeClientResolvedConfigType {}

/**
 * <p>Amazon Transcribe offers three main types of batch transcription: <b>Standard</b>, <b>Medical</b>, and
 *                 <b>Call Analytics</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common
 *                     option. Refer to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to
 *                     medical professionals and incorporate medical terms. A common use case for this
 *                     service is transcribing doctor-patient dialogue into after-visit notes. Refer to
 *                          for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed
 *                     for use with call center audio on two different channels; if you're looking for
 *                     insight into customer service calls, use this option. Refer to  for details.</p>
 *             </li>
 *          </ul>
 */
export class TranscribeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeClientResolvedConfig
> {
  /**
   * The resolved configuration of TranscribeClient class. This is resolved and normalized from the {@link TranscribeClientConfig | constructor configuration interface}.
   */
  readonly config: TranscribeClientResolvedConfig;

  constructor(configuration: TranscribeClientConfig) {
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
