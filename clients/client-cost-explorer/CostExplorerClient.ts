import {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput
} from "./commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput
} from "./commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput
} from "./commands/DescribeCostCategoryDefinitionCommand";
import {
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput
} from "./commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput
} from "./commands/GetCostAndUsageWithResourcesCommand";
import {
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput
} from "./commands/GetCostForecastCommand";
import {
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput
} from "./commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput
} from "./commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput
} from "./commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput
} from "./commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput
} from "./commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput
} from "./commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput
} from "./commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput
} from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "./commands/GetTagsCommand";
import {
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput
} from "./commands/GetUsageForecastCommand";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput
} from "./commands/ListCostCategoryDefinitionsCommand";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput
} from "./commands/UpdateCostCategoryDefinitionCommand";
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
  | CreateCostCategoryDefinitionCommandInput
  | DeleteCostCategoryDefinitionCommandInput
  | DescribeCostCategoryDefinitionCommandInput
  | GetCostAndUsageCommandInput
  | GetCostAndUsageWithResourcesCommandInput
  | GetCostForecastCommandInput
  | GetDimensionValuesCommandInput
  | GetReservationCoverageCommandInput
  | GetReservationPurchaseRecommendationCommandInput
  | GetReservationUtilizationCommandInput
  | GetRightsizingRecommendationCommandInput
  | GetSavingsPlansCoverageCommandInput
  | GetSavingsPlansPurchaseRecommendationCommandInput
  | GetSavingsPlansUtilizationCommandInput
  | GetSavingsPlansUtilizationDetailsCommandInput
  | GetTagsCommandInput
  | GetUsageForecastCommandInput
  | ListCostCategoryDefinitionsCommandInput
  | UpdateCostCategoryDefinitionCommandInput;

export type ServiceOutputTypes =
  | CreateCostCategoryDefinitionCommandOutput
  | DeleteCostCategoryDefinitionCommandOutput
  | DescribeCostCategoryDefinitionCommandOutput
  | GetCostAndUsageCommandOutput
  | GetCostAndUsageWithResourcesCommandOutput
  | GetCostForecastCommandOutput
  | GetDimensionValuesCommandOutput
  | GetReservationCoverageCommandOutput
  | GetReservationPurchaseRecommendationCommandOutput
  | GetReservationUtilizationCommandOutput
  | GetRightsizingRecommendationCommandOutput
  | GetSavingsPlansCoverageCommandOutput
  | GetSavingsPlansPurchaseRecommendationCommandOutput
  | GetSavingsPlansUtilizationCommandOutput
  | GetSavingsPlansUtilizationDetailsCommandOutput
  | GetTagsCommandOutput
  | GetUsageForecastCommandOutput
  | ListCostCategoryDefinitionsCommandOutput
  | UpdateCostCategoryDefinitionCommandOutput;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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

export type CostExplorerClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CostExplorerClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data
 * 			such as total monthly costs or total daily usage. You can also query for granular data, such as the number of
 * 			daily write operations for Amazon DynamoDB database tables in your production environment. </p>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The Cost Explorer API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs associated with the Cost Explorer API, see
 * 			<a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
 */
export class CostExplorerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CostExplorerClientResolvedConfig
> {
  readonly config: CostExplorerClientResolvedConfig;

  constructor(configuration: CostExplorerClientConfig) {
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
