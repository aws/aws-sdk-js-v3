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
  defaultResiliencehubHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptResourceGroupingRecommendationsCommandInput,
  AcceptResourceGroupingRecommendationsCommandOutput,
} from "./commands/AcceptResourceGroupingRecommendationsCommand";
import type {
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/AddDraftAppVersionResourceMappingsCommand";
import type {
  BatchUpdateRecommendationStatusCommandInput,
  BatchUpdateRecommendationStatusCommandOutput,
} from "./commands/BatchUpdateRecommendationStatusCommand";
import type { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import type {
  CreateAppVersionAppComponentCommandInput,
  CreateAppVersionAppComponentCommandOutput,
} from "./commands/CreateAppVersionAppComponentCommand";
import type {
  CreateAppVersionResourceCommandInput,
  CreateAppVersionResourceCommandOutput,
} from "./commands/CreateAppVersionResourceCommand";
import type {
  CreateRecommendationTemplateCommandInput,
  CreateRecommendationTemplateCommandOutput,
} from "./commands/CreateRecommendationTemplateCommand";
import type {
  CreateResiliencyPolicyCommandInput,
  CreateResiliencyPolicyCommandOutput,
} from "./commands/CreateResiliencyPolicyCommand";
import type {
  DeleteAppAssessmentCommandInput,
  DeleteAppAssessmentCommandOutput,
} from "./commands/DeleteAppAssessmentCommand";
import type { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import type {
  DeleteAppInputSourceCommandInput,
  DeleteAppInputSourceCommandOutput,
} from "./commands/DeleteAppInputSourceCommand";
import type {
  DeleteAppVersionAppComponentCommandInput,
  DeleteAppVersionAppComponentCommandOutput,
} from "./commands/DeleteAppVersionAppComponentCommand";
import type {
  DeleteAppVersionResourceCommandInput,
  DeleteAppVersionResourceCommandOutput,
} from "./commands/DeleteAppVersionResourceCommand";
import type {
  DeleteRecommendationTemplateCommandInput,
  DeleteRecommendationTemplateCommandOutput,
} from "./commands/DeleteRecommendationTemplateCommand";
import type {
  DeleteResiliencyPolicyCommandInput,
  DeleteResiliencyPolicyCommandOutput,
} from "./commands/DeleteResiliencyPolicyCommand";
import type {
  DescribeAppAssessmentCommandInput,
  DescribeAppAssessmentCommandOutput,
} from "./commands/DescribeAppAssessmentCommand";
import type { DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import type {
  DescribeAppVersionAppComponentCommandInput,
  DescribeAppVersionAppComponentCommandOutput,
} from "./commands/DescribeAppVersionAppComponentCommand";
import type {
  DescribeAppVersionCommandInput,
  DescribeAppVersionCommandOutput,
} from "./commands/DescribeAppVersionCommand";
import type {
  DescribeAppVersionResourceCommandInput,
  DescribeAppVersionResourceCommandOutput,
} from "./commands/DescribeAppVersionResourceCommand";
import type {
  DescribeAppVersionResourcesResolutionStatusCommandInput,
  DescribeAppVersionResourcesResolutionStatusCommandOutput,
} from "./commands/DescribeAppVersionResourcesResolutionStatusCommand";
import type {
  DescribeAppVersionTemplateCommandInput,
  DescribeAppVersionTemplateCommandOutput,
} from "./commands/DescribeAppVersionTemplateCommand";
import type {
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
} from "./commands/DescribeDraftAppVersionResourcesImportStatusCommand";
import type {
  DescribeMetricsExportCommandInput,
  DescribeMetricsExportCommandOutput,
} from "./commands/DescribeMetricsExportCommand";
import type {
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
} from "./commands/DescribeResiliencyPolicyCommand";
import type {
  DescribeResourceGroupingRecommendationTaskCommandInput,
  DescribeResourceGroupingRecommendationTaskCommandOutput,
} from "./commands/DescribeResourceGroupingRecommendationTaskCommand";
import type {
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
} from "./commands/ImportResourcesToDraftAppVersionCommand";
import type {
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "./commands/ListAlarmRecommendationsCommand";
import type {
  ListAppAssessmentComplianceDriftsCommandInput,
  ListAppAssessmentComplianceDriftsCommandOutput,
} from "./commands/ListAppAssessmentComplianceDriftsCommand";
import type {
  ListAppAssessmentResourceDriftsCommandInput,
  ListAppAssessmentResourceDriftsCommandOutput,
} from "./commands/ListAppAssessmentResourceDriftsCommand";
import type {
  ListAppAssessmentsCommandInput,
  ListAppAssessmentsCommandOutput,
} from "./commands/ListAppAssessmentsCommand";
import type {
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
} from "./commands/ListAppComponentCompliancesCommand";
import type {
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "./commands/ListAppComponentRecommendationsCommand";
import type {
  ListAppInputSourcesCommandInput,
  ListAppInputSourcesCommandOutput,
} from "./commands/ListAppInputSourcesCommand";
import type { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import type {
  ListAppVersionAppComponentsCommandInput,
  ListAppVersionAppComponentsCommandOutput,
} from "./commands/ListAppVersionAppComponentsCommand";
import type {
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "./commands/ListAppVersionResourceMappingsCommand";
import type {
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "./commands/ListAppVersionResourcesCommand";
import type { ListAppVersionsCommandInput, ListAppVersionsCommandOutput } from "./commands/ListAppVersionsCommand";
import type { ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import type {
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "./commands/ListRecommendationTemplatesCommand";
import type {
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "./commands/ListResiliencyPoliciesCommand";
import type {
  ListResourceGroupingRecommendationsCommandInput,
  ListResourceGroupingRecommendationsCommandOutput,
} from "./commands/ListResourceGroupingRecommendationsCommand";
import type {
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "./commands/ListSopRecommendationsCommand";
import type {
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput,
} from "./commands/ListSuggestedResiliencyPoliciesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "./commands/ListTestRecommendationsCommand";
import type {
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "./commands/ListUnsupportedAppVersionResourcesCommand";
import type {
  PublishAppVersionCommandInput,
  PublishAppVersionCommandOutput,
} from "./commands/PublishAppVersionCommand";
import type {
  PutDraftAppVersionTemplateCommandInput,
  PutDraftAppVersionTemplateCommandOutput,
} from "./commands/PutDraftAppVersionTemplateCommand";
import type {
  RejectResourceGroupingRecommendationsCommandInput,
  RejectResourceGroupingRecommendationsCommandOutput,
} from "./commands/RejectResourceGroupingRecommendationsCommand";
import type {
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
} from "./commands/RemoveDraftAppVersionResourceMappingsCommand";
import type {
  ResolveAppVersionResourcesCommandInput,
  ResolveAppVersionResourcesCommandOutput,
} from "./commands/ResolveAppVersionResourcesCommand";
import type {
  StartAppAssessmentCommandInput,
  StartAppAssessmentCommandOutput,
} from "./commands/StartAppAssessmentCommand";
import type {
  StartMetricsExportCommandInput,
  StartMetricsExportCommandOutput,
} from "./commands/StartMetricsExportCommand";
import type {
  StartResourceGroupingRecommendationTaskCommandInput,
  StartResourceGroupingRecommendationTaskCommandOutput,
} from "./commands/StartResourceGroupingRecommendationTaskCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import type {
  UpdateAppVersionAppComponentCommandInput,
  UpdateAppVersionAppComponentCommandOutput,
} from "./commands/UpdateAppVersionAppComponentCommand";
import type { UpdateAppVersionCommandInput, UpdateAppVersionCommandOutput } from "./commands/UpdateAppVersionCommand";
import type {
  UpdateAppVersionResourceCommandInput,
  UpdateAppVersionResourceCommandOutput,
} from "./commands/UpdateAppVersionResourceCommand";
import type {
  UpdateResiliencyPolicyCommandInput,
  UpdateResiliencyPolicyCommandOutput,
} from "./commands/UpdateResiliencyPolicyCommand";
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
  | AcceptResourceGroupingRecommendationsCommandInput
  | AddDraftAppVersionResourceMappingsCommandInput
  | BatchUpdateRecommendationStatusCommandInput
  | CreateAppCommandInput
  | CreateAppVersionAppComponentCommandInput
  | CreateAppVersionResourceCommandInput
  | CreateRecommendationTemplateCommandInput
  | CreateResiliencyPolicyCommandInput
  | DeleteAppAssessmentCommandInput
  | DeleteAppCommandInput
  | DeleteAppInputSourceCommandInput
  | DeleteAppVersionAppComponentCommandInput
  | DeleteAppVersionResourceCommandInput
  | DeleteRecommendationTemplateCommandInput
  | DeleteResiliencyPolicyCommandInput
  | DescribeAppAssessmentCommandInput
  | DescribeAppCommandInput
  | DescribeAppVersionAppComponentCommandInput
  | DescribeAppVersionCommandInput
  | DescribeAppVersionResourceCommandInput
  | DescribeAppVersionResourcesResolutionStatusCommandInput
  | DescribeAppVersionTemplateCommandInput
  | DescribeDraftAppVersionResourcesImportStatusCommandInput
  | DescribeMetricsExportCommandInput
  | DescribeResiliencyPolicyCommandInput
  | DescribeResourceGroupingRecommendationTaskCommandInput
  | ImportResourcesToDraftAppVersionCommandInput
  | ListAlarmRecommendationsCommandInput
  | ListAppAssessmentComplianceDriftsCommandInput
  | ListAppAssessmentResourceDriftsCommandInput
  | ListAppAssessmentsCommandInput
  | ListAppComponentCompliancesCommandInput
  | ListAppComponentRecommendationsCommandInput
  | ListAppInputSourcesCommandInput
  | ListAppVersionAppComponentsCommandInput
  | ListAppVersionResourceMappingsCommandInput
  | ListAppVersionResourcesCommandInput
  | ListAppVersionsCommandInput
  | ListAppsCommandInput
  | ListMetricsCommandInput
  | ListRecommendationTemplatesCommandInput
  | ListResiliencyPoliciesCommandInput
  | ListResourceGroupingRecommendationsCommandInput
  | ListSopRecommendationsCommandInput
  | ListSuggestedResiliencyPoliciesCommandInput
  | ListTagsForResourceCommandInput
  | ListTestRecommendationsCommandInput
  | ListUnsupportedAppVersionResourcesCommandInput
  | PublishAppVersionCommandInput
  | PutDraftAppVersionTemplateCommandInput
  | RejectResourceGroupingRecommendationsCommandInput
  | RemoveDraftAppVersionResourceMappingsCommandInput
  | ResolveAppVersionResourcesCommandInput
  | StartAppAssessmentCommandInput
  | StartMetricsExportCommandInput
  | StartResourceGroupingRecommendationTaskCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAppCommandInput
  | UpdateAppVersionAppComponentCommandInput
  | UpdateAppVersionCommandInput
  | UpdateAppVersionResourceCommandInput
  | UpdateResiliencyPolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptResourceGroupingRecommendationsCommandOutput
  | AddDraftAppVersionResourceMappingsCommandOutput
  | BatchUpdateRecommendationStatusCommandOutput
  | CreateAppCommandOutput
  | CreateAppVersionAppComponentCommandOutput
  | CreateAppVersionResourceCommandOutput
  | CreateRecommendationTemplateCommandOutput
  | CreateResiliencyPolicyCommandOutput
  | DeleteAppAssessmentCommandOutput
  | DeleteAppCommandOutput
  | DeleteAppInputSourceCommandOutput
  | DeleteAppVersionAppComponentCommandOutput
  | DeleteAppVersionResourceCommandOutput
  | DeleteRecommendationTemplateCommandOutput
  | DeleteResiliencyPolicyCommandOutput
  | DescribeAppAssessmentCommandOutput
  | DescribeAppCommandOutput
  | DescribeAppVersionAppComponentCommandOutput
  | DescribeAppVersionCommandOutput
  | DescribeAppVersionResourceCommandOutput
  | DescribeAppVersionResourcesResolutionStatusCommandOutput
  | DescribeAppVersionTemplateCommandOutput
  | DescribeDraftAppVersionResourcesImportStatusCommandOutput
  | DescribeMetricsExportCommandOutput
  | DescribeResiliencyPolicyCommandOutput
  | DescribeResourceGroupingRecommendationTaskCommandOutput
  | ImportResourcesToDraftAppVersionCommandOutput
  | ListAlarmRecommendationsCommandOutput
  | ListAppAssessmentComplianceDriftsCommandOutput
  | ListAppAssessmentResourceDriftsCommandOutput
  | ListAppAssessmentsCommandOutput
  | ListAppComponentCompliancesCommandOutput
  | ListAppComponentRecommendationsCommandOutput
  | ListAppInputSourcesCommandOutput
  | ListAppVersionAppComponentsCommandOutput
  | ListAppVersionResourceMappingsCommandOutput
  | ListAppVersionResourcesCommandOutput
  | ListAppVersionsCommandOutput
  | ListAppsCommandOutput
  | ListMetricsCommandOutput
  | ListRecommendationTemplatesCommandOutput
  | ListResiliencyPoliciesCommandOutput
  | ListResourceGroupingRecommendationsCommandOutput
  | ListSopRecommendationsCommandOutput
  | ListSuggestedResiliencyPoliciesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTestRecommendationsCommandOutput
  | ListUnsupportedAppVersionResourcesCommandOutput
  | PublishAppVersionCommandOutput
  | PutDraftAppVersionTemplateCommandOutput
  | RejectResourceGroupingRecommendationsCommandOutput
  | RemoveDraftAppVersionResourceMappingsCommandOutput
  | ResolveAppVersionResourcesCommandOutput
  | StartAppAssessmentCommandOutput
  | StartMetricsExportCommandOutput
  | StartResourceGroupingRecommendationTaskCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAppCommandOutput
  | UpdateAppVersionAppComponentCommandOutput
  | UpdateAppVersionCommandOutput
  | UpdateAppVersionResourceCommandOutput
  | UpdateResiliencyPolicyCommandOutput;

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
export type ResiliencehubClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ResiliencehubClient class constructor that set the region, credentials and other options.
 */
export interface ResiliencehubClientConfig extends ResiliencehubClientConfigType {}

/**
 * @public
 */
export type ResiliencehubClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ResiliencehubClient class. This is resolved and normalized from the {@link ResiliencehubClientConfig | constructor configuration interface}.
 */
export interface ResiliencehubClientResolvedConfig extends ResiliencehubClientResolvedConfigType {}

/**
 * <p>Resilience Hub helps you proactively prepare and protect your Amazon Web Services applications from
 *       disruptions. It offers continual resiliency assessment and validation that integrates
 *       into your software development lifecycle. This enables you to uncover resiliency weaknesses,
 *       ensure recovery time objective (RTO) and recovery point objective (RPO) targets for your
 *       applications are met, and resolve issues before they are released into production. </p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<ResiliencehubClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultResiliencehubHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ResiliencehubClientResolvedConfig) =>
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
