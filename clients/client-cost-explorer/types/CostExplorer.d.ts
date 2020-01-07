import { CostExplorerClient } from "./CostExplorerClient";
import { CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput } from "./commands/CreateCostCategoryDefinitionCommand";
import { DeleteCostCategoryDefinitionCommandInput, DeleteCostCategoryDefinitionCommandOutput } from "./commands/DeleteCostCategoryDefinitionCommand";
import { DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput } from "./commands/DescribeCostCategoryDefinitionCommand";
import { GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput } from "./commands/GetCostAndUsageCommand";
import { GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput } from "./commands/GetCostAndUsageWithResourcesCommand";
import { GetCostForecastCommandInput, GetCostForecastCommandOutput } from "./commands/GetCostForecastCommand";
import { GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput } from "./commands/GetDimensionValuesCommand";
import { GetReservationCoverageCommandInput, GetReservationCoverageCommandOutput } from "./commands/GetReservationCoverageCommand";
import { GetReservationPurchaseRecommendationCommandInput, GetReservationPurchaseRecommendationCommandOutput } from "./commands/GetReservationPurchaseRecommendationCommand";
import { GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput } from "./commands/GetReservationUtilizationCommand";
import { GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput } from "./commands/GetRightsizingRecommendationCommand";
import { GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput } from "./commands/GetSavingsPlansCoverageCommand";
import { GetSavingsPlansPurchaseRecommendationCommandInput, GetSavingsPlansPurchaseRecommendationCommandOutput } from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import { GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput } from "./commands/GetSavingsPlansUtilizationCommand";
import { GetSavingsPlansUtilizationDetailsCommandInput, GetSavingsPlansUtilizationDetailsCommandOutput } from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageForecastCommandInput, GetUsageForecastCommandOutput } from "./commands/GetUsageForecastCommand";
import { ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput } from "./commands/ListCostCategoryDefinitionsCommand";
import { UpdateCostCategoryDefinitionCommandInput, UpdateCostCategoryDefinitionCommandOutput } from "./commands/UpdateCostCategoryDefinitionCommand";
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
export declare class CostExplorer extends CostExplorerClient {
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
    createCostCategoryDefinition(args: CreateCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateCostCategoryDefinitionCommandOutput>;
    createCostCategoryDefinition(args: CreateCostCategoryDefinitionCommandInput, cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void): void;
    createCostCategoryDefinition(args: CreateCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void): void;
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
    deleteCostCategoryDefinition(args: DeleteCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCostCategoryDefinitionCommandOutput>;
    deleteCostCategoryDefinition(args: DeleteCostCategoryDefinitionCommandInput, cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void): void;
    deleteCostCategoryDefinition(args: DeleteCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void): void;
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
    describeCostCategoryDefinition(args: DescribeCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCostCategoryDefinitionCommandOutput>;
    describeCostCategoryDefinition(args: DescribeCostCategoryDefinitionCommandInput, cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void): void;
    describeCostCategoryDefinition(args: DescribeCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void): void;
    /**
     * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as
     * 			<code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group
     * 			your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
     * 			of valid dimensions, see the
     * 			<a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a>
     * 			operation. Master accounts in an organization in AWS Organizations have access to all member accounts.</p>
     */
    getCostAndUsage(args: GetCostAndUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetCostAndUsageCommandOutput>;
    getCostAndUsage(args: GetCostAndUsageCommandInput, cb: (err: any, data?: GetCostAndUsageCommandOutput) => void): void;
    getCostAndUsage(args: GetCostAndUsageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostAndUsageCommandOutput) => void): void;
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
    getCostAndUsageWithResources(args: GetCostAndUsageWithResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetCostAndUsageWithResourcesCommandOutput>;
    getCostAndUsageWithResources(args: GetCostAndUsageWithResourcesCommandInput, cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void): void;
    getCostAndUsageWithResources(args: GetCostAndUsageWithResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void): void;
    /**
     * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
     */
    getCostForecast(args: GetCostForecastCommandInput, options?: __HttpHandlerOptions): Promise<GetCostForecastCommandOutput>;
    getCostForecast(args: GetCostForecastCommandInput, cb: (err: any, data?: GetCostForecastCommandOutput) => void): void;
    getCostForecast(args: GetCostForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostForecastCommandOutput) => void): void;
    /**
     * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
     */
    getDimensionValues(args: GetDimensionValuesCommandInput, options?: __HttpHandlerOptions): Promise<GetDimensionValuesCommandOutput>;
    getDimensionValues(args: GetDimensionValuesCommandInput, cb: (err: any, data?: GetDimensionValuesCommandOutput) => void): void;
    getDimensionValues(args: GetDimensionValuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDimensionValuesCommandOutput) => void): void;
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
    getReservationCoverage(args: GetReservationCoverageCommandInput, options?: __HttpHandlerOptions): Promise<GetReservationCoverageCommandOutput>;
    getReservationCoverage(args: GetReservationCoverageCommandInput, cb: (err: any, data?: GetReservationCoverageCommandOutput) => void): void;
    getReservationCoverage(args: GetReservationCoverageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservationCoverageCommandOutput) => void): void;
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
    getReservationPurchaseRecommendation(args: GetReservationPurchaseRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<GetReservationPurchaseRecommendationCommandOutput>;
    getReservationPurchaseRecommendation(args: GetReservationPurchaseRecommendationCommandInput, cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void): void;
    getReservationPurchaseRecommendation(args: GetReservationPurchaseRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void): void;
    /**
     * <p>Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts.
     * 			You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible
     * 			dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
     */
    getReservationUtilization(args: GetReservationUtilizationCommandInput, options?: __HttpHandlerOptions): Promise<GetReservationUtilizationCommandOutput>;
    getReservationUtilization(args: GetReservationUtilizationCommandInput, cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void): void;
    getReservationUtilization(args: GetReservationUtilizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void): void;
    /**
     * <p>Creates recommendations that helps you save cost by identifying idle and underutilized Amazon EC2 instances.</p>
     *          <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics.
     *     	For details on calculation and function, see
     *     	<a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html">Optimizing Your Cost with Rightsizing Recommendations</a>.</p>
     */
    getRightsizingRecommendation(args: GetRightsizingRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<GetRightsizingRecommendationCommandOutput>;
    getRightsizingRecommendation(args: GetRightsizingRecommendationCommandInput, cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void): void;
    getRightsizingRecommendation(args: GetRightsizingRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void): void;
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
    getSavingsPlansCoverage(args: GetSavingsPlansCoverageCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansCoverageCommandOutput>;
    getSavingsPlansCoverage(args: GetSavingsPlansCoverageCommandInput, cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void): void;
    getSavingsPlansCoverage(args: GetSavingsPlansCoverageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void): void;
    /**
     * <p>Retrieves your request parameters, Savings Plan Recommendations Summary and Details.</p>
     */
    getSavingsPlansPurchaseRecommendation(args: GetSavingsPlansPurchaseRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput>;
    getSavingsPlansPurchaseRecommendation(args: GetSavingsPlansPurchaseRecommendationCommandInput, cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void): void;
    getSavingsPlansPurchaseRecommendation(args: GetSavingsPlansPurchaseRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void): void;
    /**
     * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
     * 	        <note>
     *             <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p>
     *          </note>
     */
    getSavingsPlansUtilization(args: GetSavingsPlansUtilizationCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansUtilizationCommandOutput>;
    getSavingsPlansUtilization(args: GetSavingsPlansUtilizationCommandInput, cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void): void;
    getSavingsPlansUtilization(args: GetSavingsPlansUtilizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void): void;
    /**
     * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
     * 	        <note>
     *             <p>
     *                <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p>
     *          </note>
     */
    getSavingsPlansUtilizationDetails(args: GetSavingsPlansUtilizationDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansUtilizationDetailsCommandOutput>;
    getSavingsPlansUtilizationDetails(args: GetSavingsPlansUtilizationDetailsCommandInput, cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void): void;
    getSavingsPlansUtilizationDetails(args: GetSavingsPlansUtilizationDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void): void;
    /**
     * <p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>
     */
    getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
    getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    getTags(args: GetTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    /**
     * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
     */
    getUsageForecast(args: GetUsageForecastCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageForecastCommandOutput>;
    getUsageForecast(args: GetUsageForecastCommandInput, cb: (err: any, data?: GetUsageForecastCommandOutput) => void): void;
    getUsageForecast(args: GetUsageForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUsageForecastCommandOutput) => void): void;
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
    listCostCategoryDefinitions(args: ListCostCategoryDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListCostCategoryDefinitionsCommandOutput>;
    listCostCategoryDefinitions(args: ListCostCategoryDefinitionsCommandInput, cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void): void;
    listCostCategoryDefinitions(args: ListCostCategoryDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void): void;
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
    updateCostCategoryDefinition(args: UpdateCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCostCategoryDefinitionCommandOutput>;
    updateCostCategoryDefinition(args: UpdateCostCategoryDefinitionCommandInput, cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void): void;
    updateCostCategoryDefinition(args: UpdateCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void): void;
}
