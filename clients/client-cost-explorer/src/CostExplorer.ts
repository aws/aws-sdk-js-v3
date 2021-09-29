import { CostExplorerClient } from "./CostExplorerClient";
import {
  CreateAnomalyMonitorCommand,
  CreateAnomalyMonitorCommandInput,
  CreateAnomalyMonitorCommandOutput,
} from "./commands/CreateAnomalyMonitorCommand";
import {
  CreateAnomalySubscriptionCommand,
  CreateAnomalySubscriptionCommandInput,
  CreateAnomalySubscriptionCommandOutput,
} from "./commands/CreateAnomalySubscriptionCommand";
import {
  CreateCostCategoryDefinitionCommand,
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput,
} from "./commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteAnomalyMonitorCommand,
  DeleteAnomalyMonitorCommandInput,
  DeleteAnomalyMonitorCommandOutput,
} from "./commands/DeleteAnomalyMonitorCommand";
import {
  DeleteAnomalySubscriptionCommand,
  DeleteAnomalySubscriptionCommandInput,
  DeleteAnomalySubscriptionCommandOutput,
} from "./commands/DeleteAnomalySubscriptionCommand";
import {
  DeleteCostCategoryDefinitionCommand,
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
} from "./commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommand,
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
} from "./commands/DescribeCostCategoryDefinitionCommand";
import {
  GetAnomaliesCommand,
  GetAnomaliesCommandInput,
  GetAnomaliesCommandOutput,
} from "./commands/GetAnomaliesCommand";
import {
  GetAnomalyMonitorsCommand,
  GetAnomalyMonitorsCommandInput,
  GetAnomalyMonitorsCommandOutput,
} from "./commands/GetAnomalyMonitorsCommand";
import {
  GetAnomalySubscriptionsCommand,
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "./commands/GetAnomalySubscriptionsCommand";
import {
  GetCostAndUsageCommand,
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput,
} from "./commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommand,
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
} from "./commands/GetCostAndUsageWithResourcesCommand";
import {
  GetCostCategoriesCommand,
  GetCostCategoriesCommandInput,
  GetCostCategoriesCommandOutput,
} from "./commands/GetCostCategoriesCommand";
import {
  GetCostForecastCommand,
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput,
} from "./commands/GetCostForecastCommand";
import {
  GetDimensionValuesCommand,
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput,
} from "./commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommand,
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput,
} from "./commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommand,
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "./commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommand,
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput,
} from "./commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommand,
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "./commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "./commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommand,
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
} from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommand,
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
} from "./commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommand,
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import {
  GetUsageForecastCommand,
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput,
} from "./commands/GetUsageForecastCommand";
import {
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "./commands/ListCostCategoryDefinitionsCommand";
import {
  ProvideAnomalyFeedbackCommand,
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
} from "./commands/ProvideAnomalyFeedbackCommand";
import {
  UpdateAnomalyMonitorCommand,
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
} from "./commands/UpdateAnomalyMonitorCommand";
import {
  UpdateAnomalySubscriptionCommand,
  UpdateAnomalySubscriptionCommandInput,
  UpdateAnomalySubscriptionCommandOutput,
} from "./commands/UpdateAnomalySubscriptionCommand";
import {
  UpdateCostCategoryDefinitionCommand,
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput,
} from "./commands/UpdateCostCategoryDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>You can use the Cost Explorer API to programmatically query your cost and usage data. You
 *       can query for aggregated data such as total monthly costs or total daily usage. You can also
 *       query for granular data. This might include the number of daily write operations for Amazon
 *       DynamoDB database tables in your production environment. </p>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The Cost Explorer API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about the costs that are associated with the Cost Explorer API, see
 *         <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost
 *         Management Pricing</a>.</p>
 */
export class CostExplorer extends CostExplorerClient {
  /**
   * <p>Creates a new cost anomaly detection monitor with the requested type and monitor
   *       specification. </p>
   */
  public createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnomalyMonitorCommandOutput>;
  public createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    cb: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void
  ): void;
  public createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void
  ): void;
  public createAnomalyMonitor(
    args: CreateAnomalyMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAnomalyMonitorCommandOutput) => void),
    cb?: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void
  ): Promise<CreateAnomalyMonitorCommandOutput> | void {
    const command = new CreateAnomalyMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a subscription to a cost anomaly detection monitor. You can use each subscription to
   *       define subscribers with email or SNS notifications. Email subscribers can set a dollar
   *       threshold and a time frequency for receiving notifications. </p>
   */
  public createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnomalySubscriptionCommandOutput>;
  public createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    cb: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void
  ): void;
  public createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void
  ): void;
  public createAnomalySubscription(
    args: CreateAnomalySubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAnomalySubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void
  ): Promise<CreateAnomalySubscriptionCommandOutput> | void {
    const command = new CreateAnomalySubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Cost Category with the requested name and rules.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void
  ): Promise<CreateCostCategoryDefinitionCommandOutput> | void {
    const command = new CreateCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a cost anomaly monitor. </p>
   */
  public deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalyMonitorCommandOutput>;
  public deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    cb: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void
  ): void;
  public deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void
  ): void;
  public deleteAnomalyMonitor(
    args: DeleteAnomalyMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnomalyMonitorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void
  ): Promise<DeleteAnomalyMonitorCommandOutput> | void {
    const command = new DeleteAnomalyMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a cost anomaly subscription. </p>
   */
  public deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnomalySubscriptionCommandOutput>;
  public deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    cb: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void
  ): void;
  public deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void
  ): void;
  public deleteAnomalySubscription(
    args: DeleteAnomalySubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void
  ): Promise<DeleteAnomalySubscriptionCommandOutput> | void {
    const command = new DeleteAnomalySubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void
  ): Promise<DeleteCostCategoryDefinitionCommandOutput> | void {
    const command = new DeleteCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void
  ): Promise<DescribeCostCategoryDefinitionCommandOutput> | void {
    const command = new DescribeCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all of the cost anomalies detected on your account during the time period that's
   *       specified by the <code>DateInterval</code> object. </p>
   */
  public getAnomalies(
    args: GetAnomaliesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomaliesCommandOutput>;
  public getAnomalies(args: GetAnomaliesCommandInput, cb: (err: any, data?: GetAnomaliesCommandOutput) => void): void;
  public getAnomalies(
    args: GetAnomaliesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomaliesCommandOutput) => void
  ): void;
  public getAnomalies(
    args: GetAnomaliesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnomaliesCommandOutput) => void),
    cb?: (err: any, data?: GetAnomaliesCommandOutput) => void
  ): Promise<GetAnomaliesCommandOutput> | void {
    const command = new GetAnomaliesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the cost anomaly monitor definitions for your account. You can filter using a
   *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
   */
  public getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomalyMonitorsCommandOutput>;
  public getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    cb: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void
  ): void;
  public getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void
  ): void;
  public getAnomalyMonitors(
    args: GetAnomalyMonitorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnomalyMonitorsCommandOutput) => void),
    cb?: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void
  ): Promise<GetAnomalyMonitorsCommandOutput> | void {
    const command = new GetAnomalyMonitorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
   *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
   */
  public getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnomalySubscriptionsCommandOutput>;
  public getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    cb: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void
  ): void;
  public getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void
  ): void;
  public getAnomalySubscriptions(
    args: GetAnomalySubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnomalySubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void
  ): Promise<GetAnomalySubscriptionsCommandOutput> | void {
    const command = new GetAnomalySubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves cost and usage metrics for your account. You can specify which cost and
   *       usage-related metric that you want the request to return. For example, you can specify
   *         <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your
   *       data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific
   *       time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p>
   * 	        <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCostAndUsageCommandOutput) => void),
    cb?: (err: any, data?: GetCostAndUsageCommandOutput) => void
  ): Promise<GetCostAndUsageCommandOutput> | void {
    const command = new GetCostAndUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   * 	    of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p>
   * 	        <note>
   *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void
  ): Promise<GetCostAndUsageWithResourcesCommandOutput> | void {
    const command = new GetCostAndUsageWithResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves an array of Cost Category names and values incurred cost.</p>
   *          <note>
   *             <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p>
   *          </note>
   */
  public getCostCategories(
    args: GetCostCategoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCostCategoriesCommandOutput>;
  public getCostCategories(
    args: GetCostCategoriesCommandInput,
    cb: (err: any, data?: GetCostCategoriesCommandOutput) => void
  ): void;
  public getCostCategories(
    args: GetCostCategoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCostCategoriesCommandOutput) => void
  ): void;
  public getCostCategories(
    args: GetCostCategoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCostCategoriesCommandOutput) => void),
    cb?: (err: any, data?: GetCostCategoriesCommandOutput) => void
  ): Promise<GetCostCategoriesCommandOutput> | void {
    const command = new GetCostCategoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCostForecastCommandOutput) => void),
    cb?: (err: any, data?: GetCostForecastCommandOutput) => void
  ): Promise<GetCostForecastCommandOutput> | void {
    const command = new GetCostForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDimensionValuesCommandOutput) => void),
    cb?: (err: any, data?: GetDimensionValuesCommandOutput) => void
  ): Promise<GetDimensionValuesCommandOutput> | void {
    const command = new GetDimensionValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or
   * 		  Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions.
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReservationCoverageCommandOutput) => void),
    cb?: (err: any, data?: GetReservationCoverageCommandOutput) => void
  ): Promise<GetReservationCoverageCommandOutput> | void {
    const command = new GetReservationCoverageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs.
   * 			Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p>
   * 		       <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage
   * 			into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations
   * 			in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p>
   * 		       <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region
   * 			and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance
   * 			in an instance family. This makes it easier to purchase a size-flexible RI. Amazon Web Services also shows the equal number of normalized units
   * 			so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code>
   * 			because that is the smallest size instance in the c4 instance family.</p>
   */
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReservationPurchaseRecommendationCommandOutput>;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void
  ): void;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void
  ): void;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void),
    cb?: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void
  ): Promise<GetReservationPurchaseRecommendationCommandOutput> | void {
    const command = new GetReservationPurchaseRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts.
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReservationUtilizationCommandOutput) => void),
    cb?: (err: any, data?: GetReservationUtilizationCommandOutput) => void
  ): Promise<GetReservationUtilizationCommandOutput> | void {
    const command = new GetReservationUtilizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates recommendations that
   *       help you save cost
   *       by identifying idle and underutilized Amazon EC2 instances.</p>
   *          <p>Recommendations are generated to either downsize or terminate instances, along with
   *       providing savings detail and metrics. For details on calculation and function, see
   *         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing
   *         Your Cost with Rightsizing
   *       Recommendations</a>
   *       in the <i>Billing and Cost Management User
   *       Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRightsizingRecommendationCommandOutput) => void),
    cb?: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void
  ): Promise<GetRightsizingRecommendationCommandOutput> | void {
    const command = new GetRightsizingRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSavingsPlansCoverageCommandOutput) => void),
    cb?: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void
  ): Promise<GetSavingsPlansCoverageCommandOutput> | void {
    const command = new GetSavingsPlansCoverageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves your request parameters, Savings Plan Recommendations Summary and Details. </p>
   */
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput>;
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void
  ): void;
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void
  ): void;
  public getSavingsPlansPurchaseRecommendation(
    args: GetSavingsPlansPurchaseRecommendationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void),
    cb?: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> | void {
    const command = new GetSavingsPlansPurchaseRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void),
    cb?: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void
  ): Promise<GetSavingsPlansUtilizationCommandOutput> | void {
    const command = new GetSavingsPlansUtilizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void
  ): void;
  public getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void
  ): void;
  public getSavingsPlansUtilizationDetails(
    args: GetSavingsPlansUtilizationDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void
  ): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> | void {
    const command = new GetSavingsPlansUtilizationDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>
   */
  public getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  public getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsageForecastCommandOutput) => void),
    cb?: (err: any, data?: GetUsageForecastCommandOutput) => void
  ): Promise<GetUsageForecastCommandOutput> | void {
    const command = new GetUsageForecastCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the name, ARN, <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void
  ): Promise<ListCostCategoryDefinitionsCommandOutput> | void {
    const command = new ListCostCategoryDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the feedback property of a given cost anomaly. </p>
   */
  public provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvideAnomalyFeedbackCommandOutput>;
  public provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    cb: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void
  ): void;
  public provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void
  ): void;
  public provideAnomalyFeedback(
    args: ProvideAnomalyFeedbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void),
    cb?: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void
  ): Promise<ProvideAnomalyFeedbackCommandOutput> | void {
    const command = new ProvideAnomalyFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
   *       doesn'tt change anomalies detected in the past. </p>
   */
  public updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalyMonitorCommandOutput>;
  public updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    cb: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void
  ): void;
  public updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void
  ): void;
  public updateAnomalyMonitor(
    args: UpdateAnomalyMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnomalyMonitorCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void
  ): Promise<UpdateAnomalyMonitorCommandOutput> | void {
    const command = new UpdateAnomalyMonitorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing cost anomaly monitor subscription. </p>
   */
  public updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnomalySubscriptionCommandOutput>;
  public updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    cb: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void
  ): void;
  public updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void
  ): void;
  public updateAnomalySubscription(
    args: UpdateAnomalySubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void
  ): Promise<UpdateAnomalySubscriptionCommandOutput> | void {
    const command = new UpdateAnomalySubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void),
    cb?: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void
  ): Promise<UpdateCostCategoryDefinitionCommandOutput> | void {
    const command = new UpdateCostCategoryDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
