import { CostExplorerClient } from "./CostExplorerClient";
import { BillExpirationException } from "./types/BillExpirationException";
import { DataUnavailableException } from "./types/DataUnavailableException";
import { GetCostAndUsageInput } from "./types/GetCostAndUsageInput";
import { GetCostAndUsageOutput } from "./types/GetCostAndUsageOutput";
import { GetCostForecastInput } from "./types/GetCostForecastInput";
import { GetCostForecastOutput } from "./types/GetCostForecastOutput";
import { GetDimensionValuesInput } from "./types/GetDimensionValuesInput";
import { GetDimensionValuesOutput } from "./types/GetDimensionValuesOutput";
import { GetReservationCoverageInput } from "./types/GetReservationCoverageInput";
import { GetReservationCoverageOutput } from "./types/GetReservationCoverageOutput";
import { GetReservationPurchaseRecommendationInput } from "./types/GetReservationPurchaseRecommendationInput";
import { GetReservationPurchaseRecommendationOutput } from "./types/GetReservationPurchaseRecommendationOutput";
import { GetReservationUtilizationInput } from "./types/GetReservationUtilizationInput";
import { GetReservationUtilizationOutput } from "./types/GetReservationUtilizationOutput";
import { GetRightsizingRecommendationInput } from "./types/GetRightsizingRecommendationInput";
import { GetRightsizingRecommendationOutput } from "./types/GetRightsizingRecommendationOutput";
import { GetTagsInput } from "./types/GetTagsInput";
import { GetTagsOutput } from "./types/GetTagsOutput";
import { GetUsageForecastInput } from "./types/GetUsageForecastInput";
import { GetUsageForecastOutput } from "./types/GetUsageForecastOutput";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { LimitExceededException } from "./types/LimitExceededException";
import { RequestChangedException } from "./types/RequestChangedException";
import { UnresolvableUsageUnitException } from "./types/UnresolvableUsageUnitException";
import { GetCostAndUsageCommand } from "./commands/GetCostAndUsageCommand";
import { GetCostForecastCommand } from "./commands/GetCostForecastCommand";
import { GetDimensionValuesCommand } from "./commands/GetDimensionValuesCommand";
import { GetReservationCoverageCommand } from "./commands/GetReservationCoverageCommand";
import { GetReservationPurchaseRecommendationCommand } from "./commands/GetReservationPurchaseRecommendationCommand";
import { GetReservationUtilizationCommand } from "./commands/GetReservationUtilizationCommand";
import { GetRightsizingRecommendationCommand } from "./commands/GetRightsizingRecommendationCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GetUsageForecastCommand } from "./commands/GetUsageForecastCommand";

export class CostExplorer extends CostExplorerClient {
  /**
   * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Master accounts in an organization in AWS Organizations have access to all member accounts.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {BillExpirationException} <p>The requested report expired. Update the date interval and try again.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {RequestChangedException} <p>Your request parameters changed between pages. Try again with the old parameters or without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCostAndUsage(
    args: GetCostAndUsageInput
  ): Promise<GetCostAndUsageOutput>;
  public getCostAndUsage(
    args: GetCostAndUsageInput,
    cb: (err: any, data?: GetCostAndUsageOutput) => void
  ): void;
  public getCostAndUsage(
    args: GetCostAndUsageInput,
    cb?: (err: any, data?: GetCostAndUsageOutput) => void
  ): Promise<GetCostAndUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCostAndUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCostForecast(
    args: GetCostForecastInput
  ): Promise<GetCostForecastOutput>;
  public getCostForecast(
    args: GetCostForecastInput,
    cb: (err: any, data?: GetCostForecastOutput) => void
  ): void;
  public getCostForecast(
    args: GetCostForecastInput,
    cb?: (err: any, data?: GetCostForecastOutput) => void
  ): Promise<GetCostForecastOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCostForecastCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {BillExpirationException} <p>The requested report expired. Update the date interval and try again.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {RequestChangedException} <p>Your request parameters changed between pages. Try again with the old parameters or without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDimensionValues(
    args: GetDimensionValuesInput
  ): Promise<GetDimensionValuesOutput>;
  public getDimensionValues(
    args: GetDimensionValuesInput,
    cb: (err: any, data?: GetDimensionValuesOutput) => void
  ): void;
  public getDimensionValues(
    args: GetDimensionValuesInput,
    cb?: (err: any, data?: GetDimensionValuesOutput) => void
  ): Promise<GetDimensionValuesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDimensionValuesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReservationCoverage(
    args: GetReservationCoverageInput
  ): Promise<GetReservationCoverageOutput>;
  public getReservationCoverage(
    args: GetReservationCoverageInput,
    cb: (err: any, data?: GetReservationCoverageOutput) => void
  ): void;
  public getReservationCoverage(
    args: GetReservationCoverageInput,
    cb?: (err: any, data?: GetReservationCoverageOutput) => void
  ): Promise<GetReservationCoverageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReservationCoverageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p> <p>For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationInput
  ): Promise<GetReservationPurchaseRecommendationOutput>;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationInput,
    cb: (err: any, data?: GetReservationPurchaseRecommendationOutput) => void
  ): void;
  public getReservationPurchaseRecommendation(
    args: GetReservationPurchaseRecommendationInput,
    cb?: (err: any, data?: GetReservationPurchaseRecommendationOutput) => void
  ): Promise<GetReservationPurchaseRecommendationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReservationPurchaseRecommendationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getReservationUtilization(
    args: GetReservationUtilizationInput
  ): Promise<GetReservationUtilizationOutput>;
  public getReservationUtilization(
    args: GetReservationUtilizationInput,
    cb: (err: any, data?: GetReservationUtilizationOutput) => void
  ): void;
  public getReservationUtilization(
    args: GetReservationUtilizationInput,
    cb?: (err: any, data?: GetReservationUtilizationOutput) => void
  ): Promise<GetReservationUtilizationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetReservationUtilizationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates recommendations that helps you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For details on calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html">Optimizing Your Cost with Rightsizing Recommendations</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationInput
  ): Promise<GetRightsizingRecommendationOutput>;
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationInput,
    cb: (err: any, data?: GetRightsizingRecommendationOutput) => void
  ): void;
  public getRightsizingRecommendation(
    args: GetRightsizingRecommendationInput,
    cb?: (err: any, data?: GetRightsizingRecommendationOutput) => void
  ): Promise<GetRightsizingRecommendationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRightsizingRecommendationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {BillExpirationException} <p>The requested report expired. Update the date interval and try again.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {RequestChangedException} <p>Your request parameters changed between pages. Try again with the old parameters or without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTags(args: GetTagsInput): Promise<GetTagsOutput>;
  public getTags(
    args: GetTagsInput,
    cb: (err: any, data?: GetTagsOutput) => void
  ): void;
  public getTags(
    args: GetTagsInput,
    cb?: (err: any, data?: GetTagsOutput) => void
  ): Promise<GetTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>You made too many calls in a short period of time. Try again later.</p>
   *   - {DataUnavailableException} <p>The requested data is unavailable.</p>
   *   - {UnresolvableUsageUnitException} <p>Cost Explorer was unable to identify the usage unit. Provide <code>UsageType/UsageTypeGroup</code> filter selections that contain matching units, for example: <code>hours</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUsageForecast(
    args: GetUsageForecastInput
  ): Promise<GetUsageForecastOutput>;
  public getUsageForecast(
    args: GetUsageForecastInput,
    cb: (err: any, data?: GetUsageForecastOutput) => void
  ): void;
  public getUsageForecast(
    args: GetUsageForecastInput,
    cb?: (err: any, data?: GetUsageForecastOutput) => void
  ): Promise<GetUsageForecastOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUsageForecastCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
