import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/AddDraftAppVersionResourceMappingsCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateRecommendationTemplateCommandInput,
  CreateRecommendationTemplateCommandOutput,
} from "./commands/CreateRecommendationTemplateCommand";
import {
  CreateResiliencyPolicyCommandInput,
  CreateResiliencyPolicyCommandOutput,
} from "./commands/CreateResiliencyPolicyCommand";
import {
  DeleteAppAssessmentCommandInput,
  DeleteAppAssessmentCommandOutput,
} from "./commands/DeleteAppAssessmentCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteRecommendationTemplateCommandInput,
  DeleteRecommendationTemplateCommandOutput,
} from "./commands/DeleteRecommendationTemplateCommand";
import {
  DeleteResiliencyPolicyCommandInput,
  DeleteResiliencyPolicyCommandOutput,
} from "./commands/DeleteResiliencyPolicyCommand";
import {
  DescribeAppAssessmentCommandInput,
  DescribeAppAssessmentCommandOutput,
} from "./commands/DescribeAppAssessmentCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import {
  DescribeAppVersionResourcesResolutionStatusCommandInput,
  DescribeAppVersionResourcesResolutionStatusCommandOutput,
} from "./commands/DescribeAppVersionResourcesResolutionStatusCommand";
import {
  DescribeAppVersionTemplateCommandInput,
  DescribeAppVersionTemplateCommandOutput,
} from "./commands/DescribeAppVersionTemplateCommand";
import {
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
} from "./commands/DescribeDraftAppVersionResourcesImportStatusCommand";
import {
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
} from "./commands/DescribeResiliencyPolicyCommand";
import {
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
} from "./commands/ImportResourcesToDraftAppVersionCommand";
import {
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "./commands/ListAlarmRecommendationsCommand";
import { ListAppAssessmentsCommandInput, ListAppAssessmentsCommandOutput } from "./commands/ListAppAssessmentsCommand";
import {
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
} from "./commands/ListAppComponentCompliancesCommand";
import {
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "./commands/ListAppComponentRecommendationsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "./commands/ListAppVersionResourceMappingsCommand";
import {
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "./commands/ListAppVersionResourcesCommand";
import { ListAppVersionsCommandInput, ListAppVersionsCommandOutput } from "./commands/ListAppVersionsCommand";
import {
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "./commands/ListRecommendationTemplatesCommand";
import {
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "./commands/ListResiliencyPoliciesCommand";
import {
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "./commands/ListSopRecommendationsCommand";
import {
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput,
} from "./commands/ListSuggestedResiliencyPoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "./commands/ListTestRecommendationsCommand";
import {
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "./commands/ListUnsupportedAppVersionResourcesCommand";
import { PublishAppVersionCommandInput, PublishAppVersionCommandOutput } from "./commands/PublishAppVersionCommand";
import {
  PutDraftAppVersionTemplateCommandInput,
  PutDraftAppVersionTemplateCommandOutput,
} from "./commands/PutDraftAppVersionTemplateCommand";
import {
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/RemoveDraftAppVersionResourceMappingsCommand";
import {
  ResolveAppVersionResourcesCommandInput,
  ResolveAppVersionResourcesCommandOutput,
} from "./commands/ResolveAppVersionResourcesCommand";
import { StartAppAssessmentCommandInput, StartAppAssessmentCommandOutput } from "./commands/StartAppAssessmentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateResiliencyPolicyCommandInput,
  UpdateResiliencyPolicyCommandOutput,
} from "./commands/UpdateResiliencyPolicyCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddDraftAppVersionResourceMappingsCommandInput
  | CreateAppCommandInput
  | CreateRecommendationTemplateCommandInput
  | CreateResiliencyPolicyCommandInput
  | DeleteAppAssessmentCommandInput
  | DeleteAppCommandInput
  | DeleteRecommendationTemplateCommandInput
  | DeleteResiliencyPolicyCommandInput
  | DescribeAppAssessmentCommandInput
  | DescribeAppCommandInput
  | DescribeAppVersionResourcesResolutionStatusCommandInput
  | DescribeAppVersionTemplateCommandInput
  | DescribeDraftAppVersionResourcesImportStatusCommandInput
  | DescribeResiliencyPolicyCommandInput
  | ImportResourcesToDraftAppVersionCommandInput
  | ListAlarmRecommendationsCommandInput
  | ListAppAssessmentsCommandInput
  | ListAppComponentCompliancesCommandInput
  | ListAppComponentRecommendationsCommandInput
  | ListAppVersionResourceMappingsCommandInput
  | ListAppVersionResourcesCommandInput
  | ListAppVersionsCommandInput
  | ListAppsCommandInput
  | ListRecommendationTemplatesCommandInput
  | ListResiliencyPoliciesCommandInput
  | ListSopRecommendationsCommandInput
  | ListSuggestedResiliencyPoliciesCommandInput
  | ListTagsForResourceCommandInput
  | ListTestRecommendationsCommandInput
  | ListUnsupportedAppVersionResourcesCommandInput
  | PublishAppVersionCommandInput
  | PutDraftAppVersionTemplateCommandInput
  | RemoveDraftAppVersionResourceMappingsCommandInput
  | ResolveAppVersionResourcesCommandInput
  | StartAppAssessmentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAppCommandInput
  | UpdateResiliencyPolicyCommandInput;

export type ServiceOutputTypes =
  | AddDraftAppVersionResourceMappingsCommandOutput
  | CreateAppCommandOutput
  | CreateRecommendationTemplateCommandOutput
  | CreateResiliencyPolicyCommandOutput
  | DeleteAppAssessmentCommandOutput
  | DeleteAppCommandOutput
  | DeleteRecommendationTemplateCommandOutput
  | DeleteResiliencyPolicyCommandOutput
  | DescribeAppAssessmentCommandOutput
  | DescribeAppCommandOutput
  | DescribeAppVersionResourcesResolutionStatusCommandOutput
  | DescribeAppVersionTemplateCommandOutput
  | DescribeDraftAppVersionResourcesImportStatusCommandOutput
  | DescribeResiliencyPolicyCommandOutput
  | ImportResourcesToDraftAppVersionCommandOutput
  | ListAlarmRecommendationsCommandOutput
  | ListAppAssessmentsCommandOutput
  | ListAppComponentCompliancesCommandOutput
  | ListAppComponentRecommendationsCommandOutput
  | ListAppVersionResourceMappingsCommandOutput
  | ListAppVersionResourcesCommandOutput
  | ListAppVersionsCommandOutput
  | ListAppsCommandOutput
  | ListRecommendationTemplatesCommandOutput
  | ListResiliencyPoliciesCommandOutput
  | ListSopRecommendationsCommandOutput
  | ListSuggestedResiliencyPoliciesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTestRecommendationsCommandOutput
  | ListUnsupportedAppVersionResourcesCommandOutput
  | PublishAppVersionCommandOutput
  | PutDraftAppVersionTemplateCommandOutput
  | RemoveDraftAppVersionResourceMappingsCommandOutput
  | ResolveAppVersionResourcesCommandOutput
  | StartAppAssessmentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAppCommandOutput
  | UpdateResiliencyPolicyCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type ResiliencehubClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ResiliencehubClient class constructor that set the region, credentials and other options.
 */
export interface ResiliencehubClientConfig extends ResiliencehubClientConfigType {}

type ResiliencehubClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ResiliencehubClient class. This is resolved and normalized from the {@link ResiliencehubClientConfig | constructor configuration interface}.
 */
export interface ResiliencehubClientResolvedConfig extends ResiliencehubClientResolvedConfigType {}

/**
 * <p>AWS Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from
 *       disruptions. Resilience Hub offers continuous resiliency assessment and validation that integrates
 *       into your software development lifecycle. This enables you to uncover resiliency weaknesses,
 *       ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your
 *       applications are met, and resolve issues before they are released into production. </p>
 */
export class ResiliencehubClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ResiliencehubClientResolvedConfig
> {
  /**
   * The resolved configuration of ResiliencehubClient class. This is resolved and normalized from the {@link ResiliencehubClientConfig | constructor configuration interface}.
   */
  readonly config: ResiliencehubClientResolvedConfig;

  constructor(configuration: ResiliencehubClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
