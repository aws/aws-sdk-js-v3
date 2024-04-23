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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
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

import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "./commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "./commands/CancelPolicyGenerationCommand";
import {
  CheckAccessNotGrantedCommandInput,
  CheckAccessNotGrantedCommandOutput,
} from "./commands/CheckAccessNotGrantedCommand";
import { CheckNoNewAccessCommandInput, CheckNoNewAccessCommandOutput } from "./commands/CheckNoNewAccessCommand";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "./commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "./commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "./commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "./commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "./commands/DeleteArchiveRuleCommand";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "./commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "./commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "./commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "./commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "./commands/GetFindingCommand";
import { GetFindingV2CommandInput, GetFindingV2CommandOutput } from "./commands/GetFindingV2Command";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "./commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "./commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "./commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "./commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "./commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "./commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListFindingsV2CommandInput, ListFindingsV2CommandOutput } from "./commands/ListFindingsV2Command";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "./commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "./commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "./commands/ValidatePolicyCommand";
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
  | ApplyArchiveRuleCommandInput
  | CancelPolicyGenerationCommandInput
  | CheckAccessNotGrantedCommandInput
  | CheckNoNewAccessCommandInput
  | CreateAccessPreviewCommandInput
  | CreateAnalyzerCommandInput
  | CreateArchiveRuleCommandInput
  | DeleteAnalyzerCommandInput
  | DeleteArchiveRuleCommandInput
  | GetAccessPreviewCommandInput
  | GetAnalyzedResourceCommandInput
  | GetAnalyzerCommandInput
  | GetArchiveRuleCommandInput
  | GetFindingCommandInput
  | GetFindingV2CommandInput
  | GetGeneratedPolicyCommandInput
  | ListAccessPreviewFindingsCommandInput
  | ListAccessPreviewsCommandInput
  | ListAnalyzedResourcesCommandInput
  | ListAnalyzersCommandInput
  | ListArchiveRulesCommandInput
  | ListFindingsCommandInput
  | ListFindingsV2CommandInput
  | ListPolicyGenerationsCommandInput
  | ListTagsForResourceCommandInput
  | StartPolicyGenerationCommandInput
  | StartResourceScanCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateArchiveRuleCommandInput
  | UpdateFindingsCommandInput
  | ValidatePolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ApplyArchiveRuleCommandOutput
  | CancelPolicyGenerationCommandOutput
  | CheckAccessNotGrantedCommandOutput
  | CheckNoNewAccessCommandOutput
  | CreateAccessPreviewCommandOutput
  | CreateAnalyzerCommandOutput
  | CreateArchiveRuleCommandOutput
  | DeleteAnalyzerCommandOutput
  | DeleteArchiveRuleCommandOutput
  | GetAccessPreviewCommandOutput
  | GetAnalyzedResourceCommandOutput
  | GetAnalyzerCommandOutput
  | GetArchiveRuleCommandOutput
  | GetFindingCommandOutput
  | GetFindingV2CommandOutput
  | GetGeneratedPolicyCommandOutput
  | ListAccessPreviewFindingsCommandOutput
  | ListAccessPreviewsCommandOutput
  | ListAnalyzedResourcesCommandOutput
  | ListAnalyzersCommandOutput
  | ListArchiveRulesCommandOutput
  | ListFindingsCommandOutput
  | ListFindingsV2CommandOutput
  | ListPolicyGenerationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartPolicyGenerationCommandOutput
  | StartResourceScanCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateArchiveRuleCommandOutput
  | UpdateFindingsCommandOutput
  | ValidatePolicyCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
export type AccessAnalyzerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of AccessAnalyzerClient class constructor that set the region, credentials and other options.
 */
export interface AccessAnalyzerClientConfig extends AccessAnalyzerClientConfigType {}

/**
 * @public
 */
export type AccessAnalyzerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of AccessAnalyzerClient class. This is resolved and normalized from the {@link AccessAnalyzerClientConfig | constructor configuration interface}.
 */
export interface AccessAnalyzerClientResolvedConfig extends AccessAnalyzerClientResolvedConfigType {}

/**
 * @public
 * <p>Identity and Access Management Access Analyzer helps you to set, verify, and refine your IAM policies by providing
 *          a suite of capabilities. Its features include findings for external and unused access,
 *          basic and custom policy checks for validating policies, and policy generation to generate
 *          fine-grained policies. To start using IAM Access Analyzer to identify external or unused access,
 *          you first need to create an analyzer.</p>
 *          <p>
 *             <b>External access analyzers</b> help identify potential risks
 *          of accessing resources by enabling you to identify any resource policies that grant access
 *          to an external principal. It does this by using logic-based reasoning to analyze
 *          resource-based policies in your Amazon Web Services environment. An external principal can be another
 *          Amazon Web Services account, a root user, an IAM user or role, a federated user, an Amazon Web Services service, or an
 *          anonymous user. You can also use IAM Access Analyzer to preview public and cross-account access
 *          to your resources before deploying permissions changes.</p>
 *          <p>
 *             <b>Unused access analyzers</b> help identify potential
 *          identity access risks by enabling you to identify unused IAM roles, unused access keys,
 *          unused console passwords, and IAM principals with unused service and action-level
 *          permissions.</p>
 *          <p>Beyond findings, IAM Access Analyzer provides basic and custom policy checks to validate IAM
 *          policies before deploying permissions changes. You can use policy generation to refine
 *          permissions by attaching a policy generated using access activity logged in CloudTrail logs. </p>
 *          <p>This guide describes the IAM Access Analyzer operations that you can call programmatically.
 *          For general information about IAM Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">Identity and Access Management Access Analyzer</a> in the
 *             <b>IAM User Guide</b>.</p>
 */
export class AccessAnalyzerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AccessAnalyzerClientResolvedConfig
> {
  /**
   * The resolved configuration of AccessAnalyzerClient class. This is resolved and normalized from the {@link AccessAnalyzerClientConfig | constructor configuration interface}.
   */
  readonly config: AccessAnalyzerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AccessAnalyzerClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
