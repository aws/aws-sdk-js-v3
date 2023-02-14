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

import { BuildSuggestersCommandInput, BuildSuggestersCommandOutput } from "./commands/BuildSuggestersCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import {
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput,
} from "./commands/DefineAnalysisSchemeCommand";
import { DefineExpressionCommandInput, DefineExpressionCommandOutput } from "./commands/DefineExpressionCommand";
import { DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput } from "./commands/DefineIndexFieldCommand";
import { DefineSuggesterCommandInput, DefineSuggesterCommandOutput } from "./commands/DefineSuggesterCommand";
import {
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput,
} from "./commands/DeleteAnalysisSchemeCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteExpressionCommandInput, DeleteExpressionCommandOutput } from "./commands/DeleteExpressionCommand";
import { DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput } from "./commands/DeleteIndexFieldCommand";
import { DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput } from "./commands/DeleteSuggesterCommand";
import {
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput,
} from "./commands/DescribeAnalysisSchemesCommand";
import {
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput,
} from "./commands/DescribeAvailabilityOptionsCommand";
import {
  DescribeDomainEndpointOptionsCommandInput,
  DescribeDomainEndpointOptionsCommandOutput,
} from "./commands/DescribeDomainEndpointOptionsCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "./commands/DescribeDomainsCommand";
import {
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput,
} from "./commands/DescribeExpressionsCommand";
import {
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
} from "./commands/DescribeIndexFieldsCommand";
import {
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput,
} from "./commands/DescribeScalingParametersCommand";
import {
  DescribeServiceAccessPoliciesCommandInput,
  DescribeServiceAccessPoliciesCommandOutput,
} from "./commands/DescribeServiceAccessPoliciesCommand";
import { DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput } from "./commands/DescribeSuggestersCommand";
import { IndexDocumentsCommandInput, IndexDocumentsCommandOutput } from "./commands/IndexDocumentsCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import {
  UpdateAvailabilityOptionsCommandInput,
  UpdateAvailabilityOptionsCommandOutput,
} from "./commands/UpdateAvailabilityOptionsCommand";
import {
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput,
} from "./commands/UpdateDomainEndpointOptionsCommand";
import {
  UpdateScalingParametersCommandInput,
  UpdateScalingParametersCommandOutput,
} from "./commands/UpdateScalingParametersCommand";
import {
  UpdateServiceAccessPoliciesCommandInput,
  UpdateServiceAccessPoliciesCommandOutput,
} from "./commands/UpdateServiceAccessPoliciesCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BuildSuggestersCommandInput
  | CreateDomainCommandInput
  | DefineAnalysisSchemeCommandInput
  | DefineExpressionCommandInput
  | DefineIndexFieldCommandInput
  | DefineSuggesterCommandInput
  | DeleteAnalysisSchemeCommandInput
  | DeleteDomainCommandInput
  | DeleteExpressionCommandInput
  | DeleteIndexFieldCommandInput
  | DeleteSuggesterCommandInput
  | DescribeAnalysisSchemesCommandInput
  | DescribeAvailabilityOptionsCommandInput
  | DescribeDomainEndpointOptionsCommandInput
  | DescribeDomainsCommandInput
  | DescribeExpressionsCommandInput
  | DescribeIndexFieldsCommandInput
  | DescribeScalingParametersCommandInput
  | DescribeServiceAccessPoliciesCommandInput
  | DescribeSuggestersCommandInput
  | IndexDocumentsCommandInput
  | ListDomainNamesCommandInput
  | UpdateAvailabilityOptionsCommandInput
  | UpdateDomainEndpointOptionsCommandInput
  | UpdateScalingParametersCommandInput
  | UpdateServiceAccessPoliciesCommandInput;

export type ServiceOutputTypes =
  | BuildSuggestersCommandOutput
  | CreateDomainCommandOutput
  | DefineAnalysisSchemeCommandOutput
  | DefineExpressionCommandOutput
  | DefineIndexFieldCommandOutput
  | DefineSuggesterCommandOutput
  | DeleteAnalysisSchemeCommandOutput
  | DeleteDomainCommandOutput
  | DeleteExpressionCommandOutput
  | DeleteIndexFieldCommandOutput
  | DeleteSuggesterCommandOutput
  | DescribeAnalysisSchemesCommandOutput
  | DescribeAvailabilityOptionsCommandOutput
  | DescribeDomainEndpointOptionsCommandOutput
  | DescribeDomainsCommandOutput
  | DescribeExpressionsCommandOutput
  | DescribeIndexFieldsCommandOutput
  | DescribeScalingParametersCommandOutput
  | DescribeServiceAccessPoliciesCommandOutput
  | DescribeSuggestersCommandOutput
  | IndexDocumentsCommandOutput
  | ListDomainNamesCommandOutput
  | UpdateAvailabilityOptionsCommandOutput
  | UpdateDomainEndpointOptionsCommandOutput
  | UpdateScalingParametersCommandOutput
  | UpdateServiceAccessPoliciesCommandOutput;

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

type CloudSearchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CloudSearchClient class constructor that set the region, credentials and other options.
 */
export interface CloudSearchClientConfig extends CloudSearchClientConfigType {}

type CloudSearchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CloudSearchClient class. This is resolved and normalized from the {@link CloudSearchClientConfig | constructor configuration interface}.
 */
export interface CloudSearchClientResolvedConfig extends CloudSearchClientResolvedConfigType {}

/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
export class CloudSearchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudSearchClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudSearchClient class. This is resolved and normalized from the {@link CloudSearchClientConfig | constructor configuration interface}.
   */
  readonly config: CloudSearchClientResolvedConfig;

  constructor(configuration: CloudSearchClientConfig) {
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
