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
  defaultCostExplorerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
} from "./commands/CreateAnomalyMonitorCommand";
import {
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
} from "./commands/CreateAnomalySubscriptionCommand";
import {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
} from "./commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
} from "./commands/DeleteAnomalyMonitorCommand";
import {
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
} from "./commands/DeleteAnomalySubscriptionCommand";
import {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
} from "./commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
} from "./commands/DescribeCostCategoryDefinitionCommand";
import { GetAnomaliesCommandInput, GetAnomaliesCommandOutput } from "./commands/GetAnomaliesCommand";
import { GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput } from "./commands/GetAnomalyMonitorsCommand";
import {
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "./commands/GetAnomalySubscriptionsCommand";
import {
  GetApproximateUsageRecordsCommandInput,
  GetApproximateUsageRecordsCommandOutput,
} from "./commands/GetApproximateUsageRecordsCommand";
import {
  GetCommitmentPurchaseAnalysisCommandInput,
  GetCommitmentPurchaseAnalysisCommandOutput,
} from "./commands/GetCommitmentPurchaseAnalysisCommand";
import { GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput } from "./commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
} from "./commands/GetCostAndUsageWithResourcesCommand";
import { GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput } from "./commands/GetCostCategoriesCommand";
import { GetCostForecastCommandInput, GetCostForecastCommandOutput } from "./commands/GetCostForecastCommand";
import { GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput } from "./commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
} from "./commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "./commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
} from "./commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "./commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlanPurchaseRecommendationDetailsCommandInput,
  GetSavingsPlanPurchaseRecommendationDetailsCommandOutput,
} from "./commands/GetSavingsPlanPurchaseRecommendationDetailsCommand";
import {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "./commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
} from "./commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageForecastCommandInput, GetUsageForecastCommandOutput } from "./commands/GetUsageForecastCommand";
import {
  ListCommitmentPurchaseAnalysesCommandInput,
  ListCommitmentPurchaseAnalysesCommandOutput,
} from "./commands/ListCommitmentPurchaseAnalysesCommand";
import {
  ListCostAllocationTagBackfillHistoryCommandInput,
  ListCostAllocationTagBackfillHistoryCommandOutput,
} from "./commands/ListCostAllocationTagBackfillHistoryCommand";
import {
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
} from "./commands/ListCostAllocationTagsCommand";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "./commands/ListCostCategoryDefinitionsCommand";
import {
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "./commands/ListSavingsPlansPurchaseRecommendationGenerationCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "./commands/ProvideAnomalyFeedbackCommand";
import {
  StartCommitmentPurchaseAnalysisCommandInput,
  StartCommitmentPurchaseAnalysisCommandOutput,
} from "./commands/StartCommitmentPurchaseAnalysisCommand";
import {
  StartCostAllocationTagBackfillCommandInput,
  StartCostAllocationTagBackfillCommandOutput,
} from "./commands/StartCostAllocationTagBackfillCommand";
import {
  StartSavingsPlansPurchaseRecommendationGenerationCommandInput,
  StartSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "./commands/StartSavingsPlansPurchaseRecommendationGenerationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "./commands/UpdateAnomalyMonitorCommand";
import {
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "./commands/UpdateAnomalySubscriptionCommand";
import {
  UpdateCostAllocationTagsStatusCommandInput,
  UpdateCostAllocationTagsStatusCommandOutput,
} from "./commands/UpdateCostAllocationTagsStatusCommand";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "./commands/UpdateCostCategoryDefinitionCommand";
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
  | GetCostAndUsageWithResourcesCommandInput
  | GetCostCategoriesCommandInput
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
  | GetCostAndUsageWithResourcesCommandOutput
  | GetCostCategoriesCommandOutput
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
