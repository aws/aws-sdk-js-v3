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
  defaultTranscribeHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
  DeleteMedicalScribeJobCommandInput,
  DeleteMedicalScribeJobCommandOutput,
} from "./commands/DeleteMedicalScribeJobCommand";
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
  GetMedicalScribeJobCommandInput,
  GetMedicalScribeJobCommandOutput,
} from "./commands/GetMedicalScribeJobCommand";
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
  ListMedicalScribeJobsCommandInput,
  ListMedicalScribeJobsCommandOutput,
} from "./commands/ListMedicalScribeJobsCommand";
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
  StartMedicalScribeJobCommandInput,
  StartMedicalScribeJobCommandOutput,
} from "./commands/StartMedicalScribeJobCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateCallAnalyticsCategoryCommandInput
  | CreateLanguageModelCommandInput
  | CreateMedicalVocabularyCommandInput
  | CreateVocabularyCommandInput
  | CreateVocabularyFilterCommandInput
  | DeleteCallAnalyticsCategoryCommandInput
  | DeleteCallAnalyticsJobCommandInput
  | DeleteLanguageModelCommandInput
  | DeleteMedicalScribeJobCommandInput
  | DeleteMedicalTranscriptionJobCommandInput
  | DeleteMedicalVocabularyCommandInput
  | DeleteTranscriptionJobCommandInput
  | DeleteVocabularyCommandInput
  | DeleteVocabularyFilterCommandInput
  | DescribeLanguageModelCommandInput
  | GetCallAnalyticsCategoryCommandInput
  | GetCallAnalyticsJobCommandInput
  | GetMedicalScribeJobCommandInput
  | GetMedicalTranscriptionJobCommandInput
  | GetMedicalVocabularyCommandInput
  | GetTranscriptionJobCommandInput
  | GetVocabularyCommandInput
  | GetVocabularyFilterCommandInput
  | ListCallAnalyticsCategoriesCommandInput
  | ListCallAnalyticsJobsCommandInput
  | ListLanguageModelsCommandInput
  | ListMedicalScribeJobsCommandInput
  | ListMedicalTranscriptionJobsCommandInput
  | ListMedicalVocabulariesCommandInput
  | ListTagsForResourceCommandInput
  | ListTranscriptionJobsCommandInput
  | ListVocabulariesCommandInput
  | ListVocabularyFiltersCommandInput
  | StartCallAnalyticsJobCommandInput
  | StartMedicalScribeJobCommandInput
  | StartMedicalTranscriptionJobCommandInput
  | StartTranscriptionJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCallAnalyticsCategoryCommandInput
  | UpdateMedicalVocabularyCommandInput
  | UpdateVocabularyCommandInput
  | UpdateVocabularyFilterCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateCallAnalyticsCategoryCommandOutput
  | CreateLanguageModelCommandOutput
  | CreateMedicalVocabularyCommandOutput
  | CreateVocabularyCommandOutput
  | CreateVocabularyFilterCommandOutput
  | DeleteCallAnalyticsCategoryCommandOutput
  | DeleteCallAnalyticsJobCommandOutput
  | DeleteLanguageModelCommandOutput
  | DeleteMedicalScribeJobCommandOutput
  | DeleteMedicalTranscriptionJobCommandOutput
  | DeleteMedicalVocabularyCommandOutput
  | DeleteTranscriptionJobCommandOutput
  | DeleteVocabularyCommandOutput
  | DeleteVocabularyFilterCommandOutput
  | DescribeLanguageModelCommandOutput
  | GetCallAnalyticsCategoryCommandOutput
  | GetCallAnalyticsJobCommandOutput
  | GetMedicalScribeJobCommandOutput
  | GetMedicalTranscriptionJobCommandOutput
  | GetMedicalVocabularyCommandOutput
  | GetTranscriptionJobCommandOutput
  | GetVocabularyCommandOutput
  | GetVocabularyFilterCommandOutput
  | ListCallAnalyticsCategoriesCommandOutput
  | ListCallAnalyticsJobsCommandOutput
  | ListLanguageModelsCommandOutput
  | ListMedicalScribeJobsCommandOutput
  | ListMedicalTranscriptionJobsCommandOutput
  | ListMedicalVocabulariesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTranscriptionJobsCommandOutput
  | ListVocabulariesCommandOutput
  | ListVocabularyFiltersCommandOutput
  | StartCallAnalyticsJobCommandOutput
  | StartMedicalScribeJobCommandOutput
  | StartMedicalTranscriptionJobCommandOutput
  | StartTranscriptionJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCallAnalyticsCategoryCommandOutput
  | UpdateMedicalVocabularyCommandOutput
  | UpdateVocabularyCommandOutput
  | UpdateVocabularyFilterCommandOutput;

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
export type TranscribeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of TranscribeClient class constructor that set the region, credentials and other options.
 */
export interface TranscribeClientConfig extends TranscribeClientConfigType {}

/**
 * @public
 */
export type TranscribeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of TranscribeClient class. This is resolved and normalized from the {@link TranscribeClientConfig | constructor configuration interface}.
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<TranscribeClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
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
        httpAuthSchemeParametersProvider: defaultTranscribeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: TranscribeClientResolvedConfig) =>
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
