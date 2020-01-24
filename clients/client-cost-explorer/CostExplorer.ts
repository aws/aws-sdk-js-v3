import { CostExplorerClient } from "./CostExplorerClient";
import {
  CreateCostCategoryDefinitionCommand,
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput
} from "./commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteCostCategoryDefinitionCommand,
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput
} from "./commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommand,
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput
} from "./commands/DescribeCostCategoryDefinitionCommand";
import {
  GetCostAndUsageCommand,
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput
} from "./commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommand,
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput
} from "./commands/GetCostAndUsageWithResourcesCommand";
import {
  GetCostForecastCommand,
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput
} from "./commands/GetCostForecastCommand";
import {
  GetDimensionValuesCommand,
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput
} from "./commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommand,
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput
} from "./commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommand,
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput
} from "./commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommand,
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput
} from "./commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommand,
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput
} from "./commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput
} from "./commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommand,
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommand,
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput
} from "./commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommand,
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput
} from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import {
  GetTagsCommand,
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "./commands/GetTagsCommand";
import {
  GetUsageForecastCommand,
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput
} from "./commands/GetUsageForecastCommand";
import {
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput
} from "./commands/ListCostCategoryDefinitionsCommand";
import {
  UpdateCostCategoryDefinitionCommand,
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput
} from "./commands/UpdateCostCategoryDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
export class CostExplorer extends CostExplorerClient {
  /**
   * <important>
   *             <p>
   *                <i>
   *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *                </i>
   *             </p>
   *          </important>
   *          <p>Creates a new Cost Category with the requested name and rules.</p>
   */
  public createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCostCategoryDefinitionCommandOutput>;
  public createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void
  ): void;
  public createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void
  ): void;
  public createCostCategoryDefinition(
    args: CreateCostCategoryDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void
  ): Promise<CreateCostCategoryDefinitionCommandOutput> | void {
    const command = new CreateCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <important>
   *             <p>
   *                <i>
   *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *                </i>
   *             </p>
   *          </important>
   *          <p>Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.</p>
   */
  public deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCostCategoryDefinitionCommandOutput>;
  public deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void
  ): void;
  public deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void
  ): void;
  public deleteCostCategoryDefinition(
    args: DeleteCostCategoryDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void
  ): Promise<DeleteCostCategoryDefinitionCommandOutput> | void {
    const command = new DeleteCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <important>
   *             <p>
   *                <i>
   *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *                </i>
   *             </p>
   *          </important>
   *          <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p>
   *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
   */
  public describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCostCategoryDefinitionCommandOutput>;
  public describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void
  ): void;
  public describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void
  ): void;
  public describeCostCategoryDefinition(
    args: DescribeCostCategoryDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeCostCategoryDefinitionCommandOutput
        ) => void),
    cb?: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void
  ): Promise<DescribeCostCategoryDefinitionCommandOutput> | void {
    const command = new DescribeCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as
   * 			<code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group
   * 			your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
   * 			of valid dimensions, see the
   * 			<a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a>
   * 			operation. Master accounts in an organization in AWS Organizations have access to all member accounts.</p>
   */
  public getCostAndUsage(
    args: GetCostAndUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostAndUsageCommandOutput>;
  public getCostAndUsage(
    args: GetCostAndUsageCommandInput,
    cb: (err: any, data?: GetCostAndUsageCommandOutput) => void
  ): void;
  public getCostAndUsage(
    args: GetCostAndUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostAndUsageCommandOutput) => void
  ): void;
  public getCostAndUsage(
    args: GetCostAndUsageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCostAndUsageCommandOutput) => void),
    cb?: (err: any, data?: GetCostAndUsageCommandOutput) => void
  ): Promise<GetCostAndUsageCommandOutput> | void {
    const command = new GetCostAndUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and
   * 	    usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that
   * 	    you want the request to return. You can also filter and group your data by various dimensions,
   * 	    such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
   * 	    of valid dimensions, see the <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Master accounts in an organization in AWS
   * 	    Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p>
   * 	        <note>
   *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
   *          </note>
   */
  public getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostAndUsageWithResourcesCommandOutput>;
  public getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void
  ): void;
  public getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void
  ): void;
  public getCostAndUsageWithResources(
    args: GetCostAndUsageWithResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void
  ): Promise<GetCostAndUsageWithResourcesCommandOutput> | void {
    const command = new GetCostAndUsageWithResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
   */
  public getCostForecast(
    args: GetCostForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostForecastCommandOutput>;
  public getCostForecast(
    args: GetCostForecastCommandInput,
    cb: (err: any, data?: GetCostForecastCommandOutput) => void
  ): void;
  public getCostForecast(
    args: GetCostForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostForecastCommandOutput) => void
  ): void;
  public getCostForecast(
    args: GetCostForecastCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCostForecastCommandOutput) => void),
    cb?: (err: any, data?: GetCostForecastCommandOutput) => void
  ): Promise<GetCostForecastCommandOutput> | void {
    const command = new GetCostForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
   */
  public getDimensionValues(
    args: GetDimensionValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDimensionValuesCommandOutput>;
  public getDimensionValues(
    args: GetDimensionValuesCommandInput,
    cb: (err: any, data?: GetDimensionValuesCommandOutput) => void
  ): void;
  public getDimensionValues(
    args: GetDimensionValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDimensionValuesCommandOutput) => void
  ): void;
  public getDimensionValues(
    args: GetDimensionValuesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDimensionValuesCommandOutput) => void),
    cb?: (err: any, data?: GetDimensionValuesCommandOutput) => void
  ): Promise<GetDimensionValuesCommandOutput> | void {
    const command = new GetDimensionValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or
   * 			Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts.
   * 			For any time period, you can filter data about reservation usage by the following dimensions:</p>
   * 		       <ul>
   *             <li>
   *                <p>AZ</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM</p>
   *             </li>
   *             <li>
   *                <p>REGION</p>
   *             </li>
   *             <li>
   *                <p>SERVICE</p>
   *             </li>
   *             <li>
   *                <p>TAG</p>
   *             </li>
   *             <li>
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   * 		       <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
   */
  public getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationCoverageCommandOutput>;
  public getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    cb: (err: any, data?: GetReservationCoverageCommandOutput) => void
  ): void;
  public getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservationCoverageCommandOutput) => void
  ): void;
  public getReservationCoverage(
    args: GetReservationCoverageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetReservationCoverageCommandOutput) => void),
    cb?: (err: any, data?: GetReservationCoverageCommandOutput) => void
  ): Promise<GetReservationCoverageCommandOutput> | void {
    const command = new GetReservationCoverageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs.
   * 			Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p>
   * 		       <p>AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage
   * 			into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations
   * 			in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p>
   * 		       <p>For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region
   * 			and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance
   * 			in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units
   * 			so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code>
   * 			because that is the smallest size instance in the c4 instance family.</p>
   */
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationPurchaseRecommendationCommandOutput>;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    cb: (
      err: any,
      data?: GetReservationPurchaseRecommendationCommandOutput
    ) => void
  ): void;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetReservationPurchaseRecommendationCommandOutput
    ) => void
  ): void;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetReservationPurchaseRecommendationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetReservationPurchaseRecommendationCommandOutput
    ) => void
  ): Promise<GetReservationPurchaseRecommendationCommandOutput> | void {
    const command = new GetReservationPurchaseRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts.
   * 			You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible
   * 			dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
   */
  public getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationUtilizationCommandOutput>;
  public getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void
  ): void;
  public getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void
  ): void;
  public getReservationUtilization(
    args: GetReservationUtilizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetReservationUtilizationCommandOutput) => void),
    cb?: (err: any, data?: GetReservationUtilizationCommandOutput) => void
  ): Promise<GetReservationUtilizationCommandOutput> | void {
    const command = new GetReservationUtilizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates recommendations that helps you save cost by identifying idle and underutilized Amazon EC2 instances.</p>
   *          <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics.
   *     	For details on calculation and function, see
   *     	<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html">Optimizing Your Cost with Rightsizing Recommendations</a>.</p>
   */
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRightsizingRecommendationCommandOutput>;
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void
  ): void;
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void
  ): void;
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRightsizingRecommendationCommandOutput) => void),
    cb?: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void
  ): Promise<GetRightsizingRecommendationCommandOutput> | void {
    const command = new GetRightsizingRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s master account can see the coverage of the associated member accounts. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_FAMILY</code>
   *                </p>
   *             </li>
   *          </ul>
   * 	        <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
   */
  public getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansCoverageCommandOutput>;
  public getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void
  ): void;
  public getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void
  ): void;
  public getSavingsPlansCoverage(
    args: GetSavingsPlansCoverageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSavingsPlansCoverageCommandOutput) => void),
    cb?: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void
  ): Promise<GetSavingsPlansCoverageCommandOutput> | void {
    const command = new GetSavingsPlansCoverageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves your request parameters, Savings Plan Recommendations Summary and Details.</p>
   */
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput>;
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    cb: (
      err: any,
      data?: GetSavingsPlansPurchaseRecommendationCommandOutput
    ) => void
  ): void;
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetSavingsPlansPurchaseRecommendationCommandOutput
    ) => void
  ): void;
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetSavingsPlansPurchaseRecommendationCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetSavingsPlansPurchaseRecommendationCommandOutput
    ) => void
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> | void {
    const command = new GetSavingsPlansPurchaseRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
   * 	        <note>
   *             <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p>
   *          </note>
   */
  public getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansUtilizationCommandOutput>;
  public getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void
  ): void;
  public getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void
  ): void;
  public getSavingsPlansUtilization(
    args: GetSavingsPlansUtilizationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void),
    cb?: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void
  ): Promise<GetSavingsPlansUtilizationCommandOutput> | void {
    const command = new GetSavingsPlansUtilizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
   * 	        <note>
   *             <p>
   *                <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p>
   *          </note>
   */
  public getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansUtilizationDetailsCommandOutput>;
  public getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    cb: (
      err: any,
      data?: GetSavingsPlansUtilizationDetailsCommandOutput
    ) => void
  ): void;
  public getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetSavingsPlansUtilizationDetailsCommandOutput
    ) => void
  ): void;
  public getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetSavingsPlansUtilizationDetailsCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetSavingsPlansUtilizationDetailsCommandOutput
    ) => void
  ): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> | void {
    const command = new GetSavingsPlansUtilizationDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>
   */
  public getTags(
    args: GetTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTagsCommandOutput>;
  public getTags(
    args: GetTagsCommandInput,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
   */
  public getUsageForecast(
    args: GetUsageForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageForecastCommandOutput>;
  public getUsageForecast(
    args: GetUsageForecastCommandInput,
    cb: (err: any, data?: GetUsageForecastCommandOutput) => void
  ): void;
  public getUsageForecast(
    args: GetUsageForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageForecastCommandOutput) => void
  ): void;
  public getUsageForecast(
    args: GetUsageForecastCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetUsageForecastCommandOutput) => void),
    cb?: (err: any, data?: GetUsageForecastCommandOutput) => void
  ): Promise<GetUsageForecastCommandOutput> | void {
    const command = new GetUsageForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <important>
   *             <p>
   *                <i>
   *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *                </i>
   *             </p>
   *          </important>
   *          <p>Returns the name, ARN and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
   */
  public listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCostCategoryDefinitionsCommandOutput>;
  public listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void
  ): void;
  public listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void
  ): void;
  public listCostCategoryDefinitions(
    args: ListCostCategoryDefinitionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void
  ): Promise<ListCostCategoryDefinitionsCommandOutput> | void {
    const command = new ListCostCategoryDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <important>
   *             <p>
   *                <i>
   *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *                </i>
   *             </p>
   *          </important>
   *          <p>Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.</p>
   */
  public updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCostCategoryDefinitionCommandOutput>;
  public updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void
  ): void;
  public updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void
  ): void;
  public updateCostCategoryDefinition(
    args: UpdateCostCategoryDefinitionCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void
  ): Promise<UpdateCostCategoryDefinitionCommandOutput> | void {
    const command = new UpdateCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
