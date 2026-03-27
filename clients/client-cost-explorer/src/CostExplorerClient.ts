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
  defaultCostExplorerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
} from "./commands/CreateAnomalyMonitorCommand";
import type {
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
} from "./commands/CreateAnomalySubscriptionCommand";
import type {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
} from "./commands/CreateCostCategoryDefinitionCommand";
import type {
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
} from "./commands/DeleteAnomalyMonitorCommand";
import type {
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
} from "./commands/DeleteAnomalySubscriptionCommand";
import type {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
} from "./commands/DeleteCostCategoryDefinitionCommand";
import type {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
} from "./commands/DescribeCostCategoryDefinitionCommand";
import type { GetAnomaliesCommandInput, GetAnomaliesCommandOutput } from "./commands/GetAnomaliesCommand";
import type {
  GetAnomalyMonitorsCommandInput,
  GetAnomalyMonitorsCommandOutput,
} from "./commands/GetAnomalyMonitorsCommand";
import type {
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "./commands/GetAnomalySubscriptionsCommand";
import type {
  GetApproximateUsageRecordsCommandInput,
  GetApproximateUsageRecordsCommandOutput,
} from "./commands/GetApproximateUsageRecordsCommand";
import type {
  GetCommitmentPurchaseAnalysisCommandInput,
  GetCommitmentPurchaseAnalysisCommandOutput,
} from "./commands/GetCommitmentPurchaseAnalysisCommand";
import type { GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput } from "./commands/GetCostAndUsageCommand";
import type {
  GetCostAndUsageComparisonsCommandInput,
  GetCostAndUsageComparisonsCommandOutput,
} from "./commands/GetCostAndUsageComparisonsCommand";
import type {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
} from "./commands/GetCostAndUsageWithResourcesCommand";
import type {
  GetCostCategoriesCommandInput,
  GetCostCategoriesCommandOutput,
} from "./commands/GetCostCategoriesCommand";
import type {
  GetCostComparisonDriversCommandInput,
  GetCostComparisonDriversCommandOutput,
} from "./commands/GetCostComparisonDriversCommand";
import type { GetCostForecastCommandInput, GetCostForecastCommandOutput } from "./commands/GetCostForecastCommand";
import type {
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput,
} from "./commands/GetDimensionValuesCommand";
import type {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
} from "./commands/GetReservationCoverageCommand";
import type {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "./commands/GetReservationPurchaseRecommendationCommand";
import type {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
} from "./commands/GetReservationUtilizationCommand";
import type {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "./commands/GetRightsizingRecommendationCommand";
import type {
  GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
  GetSavingsPlanPurchaseRecommendationDetailsCommandOutput,
} from "./commands/GetSavingsPlanPurchaseRecommendationDetailsCommand";
import type {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "./commands/GetSavingsPlansCoverageCommand";
import type {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import type {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
} from "./commands/GetSavingsPlansUtilizationCommand";
import type {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import type { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import type { GetUsageForecastCommandInput, GetUsageForecastCommandOutput } from "./commands/GetUsageForecastCommand";
import type {
  ListCommitmentPurchaseAnalysesCommandInput,
  ListCommitmentPurchaseAnalysesCommandOutput,
} from "./commands/ListCommitmentPurchaseAnalysesCommand";
import type {
  ListCostAllocationTagBackfillHistoryCommandInput,
  ListCostAllocationTagBackfillHistoryCommandOutput,
} from "./commands/ListCostAllocationTagBackfillHistoryCommand";
import type {
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
} from "./commands/ListCostAllocationTagsCommand";
import type {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "./commands/ListCostCategoryDefinitionsCommand";
import type {
  ListCostCategoryResourceAssociationsCommandInput,
  ListCostCategoryResourceAssociationsCommandOutput,
} from "./commands/ListCostCategoryResourceAssociationsCommand";
import type {
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "./commands/ListSavingsPlansPurchaseRecommendationGenerationCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "./commands/ProvideAnomalyFeedbackCommand";
import type {
  StartCommitmentPurchaseAnalysisCommandInput,
  StartCommitmentPurchaseAnalysisCommandOutput,
} from "./commands/StartCommitmentPurchaseAnalysisCommand";
import type {
  StartCostAllocationTagBackfillCommandInput,
  StartCostAllocationTagBackfillCommandOutput,
} from "./commands/StartCostAllocationTagBackfillCommand";
import type {
  StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  StartSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "./commands/StartSavingsPlansPurchaseRecommendationGenerationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "./commands/UpdateAnomalyMonitorCommand";
import type {
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "./commands/UpdateAnomalySubscriptionCommand";
import type {
  UpdateCostAllocationTagsStatusCommandInput,
  UpdateCostAllocationTagsStatusCommandOutput,
} from "./commands/UpdateCostAllocationTagsStatusCommand";
import type {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "./commands/UpdateCostCategoryDefinitionCommand";
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
  | CreateAnomalyMonitorCommandInput
  | CreateAnomalySubscriptionCommandInput
  | CreateCostCategoryDefinitionCommandInput
  | DeleteAnomalyMonitorCommandInput
  | DeleteAnomalySubscriptionCommandInput
  | DeleteCostCategoryDefinitionCommandInput
  | DescribeCostCategoryDefinitionCommandInput
  | GetAnomaliesCommandInput
  | GetAnomalyMonitorsCommandInput
  | GetAnomalySubscriptionsCommandInput
  | GetApproximateUsageRecordsCommandInput
  | GetCommitmentPurchaseAnalysisCommandInput
  | GetCostAndUsageCommandInput
  | GetCostAndUsageComparisonsCommandInput
  | GetCostAndUsageWithResourcesCommandInput
  | GetCostCategoriesCommandInput
  | GetCostComparisonDriversCommandInput
  | GetCostForecastCommandInput
  | GetDimensionValuesCommandInput
  | GetReservationCoverageCommandInput
  | GetReservationPurchaseRecommendationCommandInput
  | GetReservationUtilizationCommandInput
  | GetRightsizingRecommendationCommandInput
  | GetSavingsPlanPurchaseRecommendationDetailsCommandInput
  | GetSavingsPlansCoverageCommandInput
  | GetSavingsPlansPurchaseRecommendationCommandInput
  | GetSavingsPlansUtilizationCommandInput
  | GetSavingsPlansUtilizationDetailsCommandInput
  | GetTagsCommandInput
  | GetUsageForecastCommandInput
  | ListCommitmentPurchaseAnalysesCommandInput
  | ListCostAllocationTagBackfillHistoryCommandInput
  | ListCostAllocationTagsCommandInput
  | ListCostCategoryDefinitionsCommandInput
  | ListCostCategoryResourceAssociationsCommandInput
  | ListSavingsPlansPurchaseRecommendationGenerationCommandInput
  | ListTagsForResourceCommandInput
  | ProvideAnomalyFeedbackCommandInput
  | StartCommitmentPurchaseAnalysisCommandInput
  | StartCostAllocationTagBackfillCommandInput
  | StartSavingsPlansPurchaseRecommendationGenerationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAnomalyMonitorCommandInput
  | UpdateAnomalySubscriptionCommandInput
  | UpdateCostAllocationTagsStatusCommandInput
  | UpdateCostCategoryDefinitionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAnomalyMonitorCommandOutput
  | CreateAnomalySubscriptionCommandOutput
  | CreateCostCategoryDefinitionCommandOutput
  | DeleteAnomalyMonitorCommandOutput
  | DeleteAnomalySubscriptionCommandOutput
  | DeleteCostCategoryDefinitionCommandOutput
  | DescribeCostCategoryDefinitionCommandOutput
  | GetAnomaliesCommandOutput
  | GetAnomalyMonitorsCommandOutput
  | GetAnomalySubscriptionsCommandOutput
  | GetApproximateUsageRecordsCommandOutput
  | GetCommitmentPurchaseAnalysisCommandOutput
  | GetCostAndUsageCommandOutput
  | GetCostAndUsageComparisonsCommandOutput
  | GetCostAndUsageWithResourcesCommandOutput
  | GetCostCategoriesCommandOutput
  | GetCostComparisonDriversCommandOutput
  | GetCostForecastCommandOutput
  | GetDimensionValuesCommandOutput
  | GetReservationCoverageCommandOutput
  | GetReservationPurchaseRecommendationCommandOutput
  | GetReservationUtilizationCommandOutput
  | GetRightsizingRecommendationCommandOutput
  | GetSavingsPlanPurchaseRecommendationDetailsCommandOutput
  | GetSavingsPlansCoverageCommandOutput
  | GetSavingsPlansPurchaseRecommendationCommandOutput
  | GetSavingsPlansUtilizationCommandOutput
  | GetSavingsPlansUtilizationDetailsCommandOutput
  | GetTagsCommandOutput
  | GetUsageForecastCommandOutput
  | ListCommitmentPurchaseAnalysesCommandOutput
  | ListCostAllocationTagBackfillHistoryCommandOutput
  | ListCostAllocationTagsCommandOutput
  | ListCostCategoryDefinitionsCommandOutput
  | ListCostCategoryResourceAssociationsCommandOutput
  | ListSavingsPlansPurchaseRecommendationGenerationCommandOutput
  | ListTagsForResourceCommandOutput
  | ProvideAnomalyFeedbackCommandOutput
  | StartCommitmentPurchaseAnalysisCommandOutput
  | StartCostAllocationTagBackfillCommandOutput
  | StartSavingsPlansPurchaseRecommendationGenerationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnomalyMonitorCommandOutput
  | UpdateAnomalySubscriptionCommandOutput
  | UpdateCostAllocationTagsStatusCommandOutput
  | UpdateCostCategoryDefinitionCommandOutput;

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
export type CostExplorerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CostExplorerClient class constructor that set the region, credentials and other options.
 */
export interface CostExplorerClientConfig extends CostExplorerClientConfigType {}

/**
 * @public
 */
export type CostExplorerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CostExplorerClient class. This is resolved and normalized from the {@link CostExplorerClientConfig | constructor configuration interface}.
 */
export interface CostExplorerClientResolvedConfig extends CostExplorerClientResolvedConfigType {}

/**
 * <p>You can use the Cost Explorer API to programmatically query your cost and usage data.
 *       You can query for aggregated data such as total monthly costs or total daily usage. You can
 *       also query for granular data. This might include the number of daily write operations for
 *       Amazon DynamoDB database tables in your production environment. </p>
 *          <p>Service Endpoint</p>
 *          <p>The Cost Explorer API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For information about the costs that are associated with the Cost Explorer API, see
 *         <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost
 *         Management Pricing</a>.</p>
 * @public
 */
export class CostExplorerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CostExplorerClientResolvedConfig
> {
  /**
   * The resolved configuration of CostExplorerClient class. This is resolved and normalized from the {@link CostExplorerClientConfig | constructor configuration interface}.
   */
  readonly config: CostExplorerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CostExplorerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCostExplorerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CostExplorerClientResolvedConfig) =>
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
