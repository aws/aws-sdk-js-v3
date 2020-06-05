import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AccountScope {
  LINKED = "LINKED",
  PAYER = "PAYER"
}

/**
 * <p>The requested report expired. Update the date interval and try again.</p>
 */
export interface BillExpirationException
  extends __SmithyException,
    $MetadataBearer {
  name: "BillExpirationException";
  $fault: "client";
  Message?: string;
}

export namespace BillExpirationException {
  export const filterSensitiveLog = (obj: BillExpirationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BillExpirationException =>
    __isa(o, "BillExpirationException");
}

export enum Context {
  COST_AND_USAGE = "COST_AND_USAGE",
  RESERVATIONS = "RESERVATIONS",
  SAVINGS_PLANS = "SAVINGS_PLANS"
}

/**
 * <important>
 *             <p>
 *                 <i>
 *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
 *                </i>
 *             </p>
 *         </important>
 *         <p>The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.</p>
 */
export interface CostCategory {
  __type?: "CostCategory";
  /**
   * <p>
   *             The unique identifier for your Cost Category.
   *         </p>
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>
   *             The Cost Category's effective end date.</p>
   */
  EffectiveEnd?: string;

  /**
   * <p>
   *             The Cost Category's effective start date.</p>
   */
  EffectiveStart: string | undefined;

  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | string | undefined;

  /**
   * <p>
   *             Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
   *         </p>
   */
  Rules: CostCategoryRule[] | undefined;
}

export namespace CostCategory {
  export const filterSensitiveLog = (obj: CostCategory): any => ({
    ...obj
  });
  export const isa = (o: any): o is CostCategory => __isa(o, "CostCategory");
}

/**
 * <important>
 *             <p>
 *                 <i>
 *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
 *                </i>
 *             </p>
 *         </important>
 *         <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p>
 *         <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>
 */
export interface CostCategoryReference {
  __type?: "CostCategoryReference";
  /**
   * <p>
   *             The unique identifier for your Cost Category Reference.
   *         </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *             The Cost Category's effective end date.</p>
   */
  EffectiveEnd?: string;

  /**
   * <p>
   *             The Cost Category's effective start date.</p>
   */
  EffectiveStart?: string;

  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Name?: string;
}

export namespace CostCategoryReference {
  export const filterSensitiveLog = (obj: CostCategoryReference): any => ({
    ...obj
  });
  export const isa = (o: any): o is CostCategoryReference =>
    __isa(o, "CostCategoryReference");
}

/**
 * <important>
 *             <p>
 *                 <i>
 *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
 *                </i>
 *             </p>
 *         </important>
 *         <p>Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.</p>
 */
export interface CostCategoryRule {
  __type?: "CostCategoryRule";
  /**
   * <p>An <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object used to categorize costs. This supports dimensions, Tags, and nested expressions. Currently the only dimensions supported is <code>LINKED_ACCOUNT</code>.</p>
   *         <p>Root level <code>OR</code> is not supported. We recommend you create a separate rule instead.</p>
   */
  Rule: Expression | undefined;

  /**
   * <p>The value a line item will be categorized as, if it matches the rule.</p>
   */
  Value: string | undefined;
}

export namespace CostCategoryRule {
  export const filterSensitiveLog = (obj: CostCategoryRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is CostCategoryRule =>
    __isa(o, "CostCategoryRule");
}

export enum CostCategoryRuleVersion {
  CostCategoryExpressionV1 = "CostCategoryExpression.v1"
}

/**
 * <important>
 *             <p>
 *                 <i>
 *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
 *                </i>
 *             </p>
 *         </important>
 *         <p>The values that are available for Cost Categories.</p>
 */
export interface CostCategoryValues {
  __type?: "CostCategoryValues";
  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Key?: string;

  /**
   * <p>The specific value of the Cost Category.</p>
   */
  Values?: string[];
}

export namespace CostCategoryValues {
  export const filterSensitiveLog = (obj: CostCategoryValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is CostCategoryValues =>
    __isa(o, "CostCategoryValues");
}

/**
 * <p>The amount of instance usage that a reservation covered.</p>
 */
export interface Coverage {
  __type?: "Coverage";
  /**
   * <p>The amount of cost that the reservation covered.</p>
   */
  CoverageCost?: CoverageCost;

  /**
   * <p>The amount of instance usage that the reservation covered, in hours.</p>
   */
  CoverageHours?: CoverageHours;

  /**
   * <p>The amount of instance usage that the reservation covered, in normalized
   *             units.</p>
   */
  CoverageNormalizedUnits?: CoverageNormalizedUnits;
}

export namespace Coverage {
  export const filterSensitiveLog = (obj: Coverage): any => ({
    ...obj
  });
  export const isa = (o: any): o is Coverage => __isa(o, "Coverage");
}

/**
 * <p>Reservation
 *             coverage for a specified period, in
 *             hours.</p>
 */
export interface CoverageByTime {
  __type?: "CoverageByTime";
  /**
   * <p>The groups of instances that the reservation covered.</p>
   */
  Groups?: ReservationCoverageGroup[];

  /**
   * <p>The period that this coverage was used over.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The total reservation coverage, in hours.</p>
   */
  Total?: Coverage;
}

export namespace CoverageByTime {
  export const filterSensitiveLog = (obj: CoverageByTime): any => ({
    ...obj
  });
  export const isa = (o: any): o is CoverageByTime =>
    __isa(o, "CoverageByTime");
}

/**
 * <p>How much it cost to run an instance.</p>
 */
export interface CoverageCost {
  __type?: "CoverageCost";
  /**
   * <p>How much an On-Demand instance cost.</p>
   */
  OnDemandCost?: string;
}

export namespace CoverageCost {
  export const filterSensitiveLog = (obj: CoverageCost): any => ({
    ...obj
  });
  export const isa = (o: any): o is CoverageCost => __isa(o, "CoverageCost");
}

/**
 * <p>How long a running instance either used a reservation or was On-Demand.</p>
 */
export interface CoverageHours {
  __type?: "CoverageHours";
  /**
   * <p>The percentage of instance hours that a reservation covered.</p>
   */
  CoverageHoursPercentage?: string;

  /**
   * <p>The number of instance running hours that On-Demand Instances covered.</p>
   */
  OnDemandHours?: string;

  /**
   * <p>The number of instance running hours that reservations covered.</p>
   */
  ReservedHours?: string;

  /**
   * <p>The total instance usage, in hours.</p>
   */
  TotalRunningHours?: string;
}

export namespace CoverageHours {
  export const filterSensitiveLog = (obj: CoverageHours): any => ({
    ...obj
  });
  export const isa = (o: any): o is CoverageHours => __isa(o, "CoverageHours");
}

/**
 * <p>The amount of instance usage, in normalized units. Normalized units enable you to
 *             see your EC2 usage for multiple sizes of instances in a uniform way. For example,
 *             suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for
 *             the same amount of time, the 2xlarge instance uses twice as much of your reservation as
 *             the xlarge instance, even though both instances show only one instance-hour. Using
 *             normalized units instead of instance-hours, the xlarge instance used 8 normalized units,
 *             and the 2xlarge instance used 16 normalized units.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for
 *                 Linux Instances</i>.</p>
 */
export interface CoverageNormalizedUnits {
  __type?: "CoverageNormalizedUnits";
  /**
   * <p>The percentage of your used instance normalized units that a reservation
   *             covers.</p>
   */
  CoverageNormalizedUnitsPercentage?: string;

  /**
   * <p>The number of normalized units that are covered by On-Demand Instances instead of a
   *             reservation.</p>
   */
  OnDemandNormalizedUnits?: string;

  /**
   * <p>The number of normalized units that a reservation covers.</p>
   */
  ReservedNormalizedUnits?: string;

  /**
   * <p>The total number of normalized units that you used.</p>
   */
  TotalRunningNormalizedUnits?: string;
}

export namespace CoverageNormalizedUnits {
  export const filterSensitiveLog = (obj: CoverageNormalizedUnits): any => ({
    ...obj
  });
  export const isa = (o: any): o is CoverageNormalizedUnits =>
    __isa(o, "CoverageNormalizedUnits");
}

export interface CreateCostCategoryDefinitionRequest {
  __type?: "CreateCostCategoryDefinitionRequest";
  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | string | undefined;

  /**
   * <p>
   *             <code>CreateCostCategoryDefinition</code> supports dimensions, Tags, and nested expressions. Currently the only dimensions supported is <code>LINKED_ACCOUNT</code>.</p>
   *
   *          <p>Root level <code>OR</code> is not supported. We recommend you create a separate rule instead.</p>
   *          <p>Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
   *     </p>
   */
  Rules: CostCategoryRule[] | undefined;
}

export namespace CreateCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (
    obj: CreateCostCategoryDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCostCategoryDefinitionRequest =>
    __isa(o, "CreateCostCategoryDefinitionRequest");
}

export interface CreateCostCategoryDefinitionResponse {
  __type?: "CreateCostCategoryDefinitionResponse";
  /**
   * <p>
   *       The unique identifier for your newly created Cost Category.
   *     </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *       The Cost Category's effective start date.
   *     </p>
   */
  EffectiveStart?: string;
}

export namespace CreateCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (
    obj: CreateCostCategoryDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCostCategoryDefinitionResponse =>
    __isa(o, "CreateCostCategoryDefinitionResponse");
}

/**
 * <p>Context about the current instance.</p>
 */
export interface CurrentInstance {
  __type?: "CurrentInstance";
  /**
   * <p> The currency code that Amazon Web Services used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p> Current On Demand cost of operating this instance on a monthly basis.</p>
   */
  MonthlyCost?: string;

  /**
   * <p> Number of hours during the lookback period billed at On Demand rates.</p>
   */
  OnDemandHoursInLookbackPeriod?: string;

  /**
   * <p> Number of hours during the lookback period covered by reservations.</p>
   */
  ReservationCoveredHoursInLookbackPeriod?: string;

  /**
   * <p> Details about the resource and utilization.</p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * <p>Resource ID of the current instance.</p>
   */
  ResourceId?: string;

  /**
   * <p> Utilization information of the current instance during the lookback period.</p>
   */
  ResourceUtilization?: ResourceUtilization;

  /**
   * <p>Number of hours during the lookback period covered by Savings Plans.</p>
   */
  SavingsPlansCoveredHoursInLookbackPeriod?: string;

  /**
   * <p>Cost allocation resource tags applied to the instance.</p>
   */
  Tags?: TagValues[];

  /**
   * <p> The total number of hours the instance ran during the lookback period.</p>
   */
  TotalRunningHoursInLookbackPeriod?: string;
}

export namespace CurrentInstance {
  export const filterSensitiveLog = (obj: CurrentInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is CurrentInstance =>
    __isa(o, "CurrentInstance");
}

/**
 * <p>The requested data is unavailable.</p>
 */
export interface DataUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "DataUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace DataUnavailableException {
  export const filterSensitiveLog = (obj: DataUnavailableException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataUnavailableException =>
    __isa(o, "DataUnavailableException");
}

/**
 * <p>The time period that you want the usage and costs for.
 *         </p>
 */
export interface DateInterval {
  __type?: "DateInterval";
  /**
   * <p>The end of the time period that you want the usage and costs for. The end date is
   *             exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, AWS retrieves
   *             cost and usage data from the start date up to, but not including,
   *                 <code>2017-05-01</code>.</p>
   */
  End: string | undefined;

  /**
   * <p>The beginning of the time period that you want the usage and costs for. The start
   *             date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, AWS
   *             retrieves cost and usage data starting at <code>2017-01-01</code> up to the end
   *             date.</p>
   */
  Start: string | undefined;
}

export namespace DateInterval {
  export const filterSensitiveLog = (obj: DateInterval): any => ({
    ...obj
  });
  export const isa = (o: any): o is DateInterval => __isa(o, "DateInterval");
}

export interface DeleteCostCategoryDefinitionRequest {
  __type?: "DeleteCostCategoryDefinitionRequest";
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn: string | undefined;
}

export namespace DeleteCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (
    obj: DeleteCostCategoryDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCostCategoryDefinitionRequest =>
    __isa(o, "DeleteCostCategoryDefinitionRequest");
}

export interface DeleteCostCategoryDefinitionResponse {
  __type?: "DeleteCostCategoryDefinitionResponse";
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *       The effective end date of the Cost Category as a result of deleting it. No costs after this date will be categorized by the deleted Cost Category.
   *     </p>
   */
  EffectiveEnd?: string;
}

export namespace DeleteCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (
    obj: DeleteCostCategoryDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCostCategoryDefinitionResponse =>
    __isa(o, "DeleteCostCategoryDefinitionResponse");
}

export interface DescribeCostCategoryDefinitionRequest {
  __type?: "DescribeCostCategoryDefinitionRequest";
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>
   *       The date when the Cost Category was effective.
   *     </p>
   */
  EffectiveOn?: string;
}

export namespace DescribeCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (
    obj: DescribeCostCategoryDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCostCategoryDefinitionRequest =>
    __isa(o, "DescribeCostCategoryDefinitionRequest");
}

export interface DescribeCostCategoryDefinitionResponse {
  __type?: "DescribeCostCategoryDefinitionResponse";
  /**
   * <important>
   *             <p>
   *                 <i>
   *                   <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *                </i>
   *             </p>
   *         </important>
   *         <p>The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.</p>
   */
  CostCategory?: CostCategory;
}

export namespace DescribeCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (
    obj: DescribeCostCategoryDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCostCategoryDefinitionResponse =>
    __isa(o, "DescribeCostCategoryDefinitionResponse");
}

export enum Dimension {
  AZ = "AZ",
  BILLING_ENTITY = "BILLING_ENTITY",
  CACHE_ENGINE = "CACHE_ENGINE",
  DATABASE_ENGINE = "DATABASE_ENGINE",
  DEPLOYMENT_OPTION = "DEPLOYMENT_OPTION",
  INSTANCE_TYPE = "INSTANCE_TYPE",
  INSTANCE_TYPE_FAMILY = "INSTANCE_TYPE_FAMILY",
  LEGAL_ENTITY_NAME = "LEGAL_ENTITY_NAME",
  LINKED_ACCOUNT = "LINKED_ACCOUNT",
  OPERATING_SYSTEM = "OPERATING_SYSTEM",
  OPERATION = "OPERATION",
  PAYMENT_OPTION = "PAYMENT_OPTION",
  PLATFORM = "PLATFORM",
  PURCHASE_TYPE = "PURCHASE_TYPE",
  RECORD_TYPE = "RECORD_TYPE",
  REGION = "REGION",
  RESERVATION_ID = "RESERVATION_ID",
  RESOURCE_ID = "RESOURCE_ID",
  RIGHTSIZING_TYPE = "RIGHTSIZING_TYPE",
  SAVINGS_PLANS_TYPE = "SAVINGS_PLANS_TYPE",
  SAVINGS_PLAN_ARN = "SAVINGS_PLAN_ARN",
  SCOPE = "SCOPE",
  SERVICE = "SERVICE",
  SUBSCRIPTION_ID = "SUBSCRIPTION_ID",
  TENANCY = "TENANCY",
  USAGE_TYPE = "USAGE_TYPE",
  USAGE_TYPE_GROUP = "USAGE_TYPE_GROUP"
}

/**
 * <p>The metadata that you can use to filter and group your results. You can use
 *                 <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface DimensionValues {
  __type?: "DimensionValues";
  /**
   * <p>The names of the metadata types that you can use to filter and group your results.
   *             For example, <code>AZ</code> returns a list of Availability Zones.</p>
   */
  Key?: Dimension | string;

  /**
   * <p>The metadata values that you can use to filter and group your results. You can use
   *                 <code>GetDimensionValues</code> to find specific values.</p>
   *         <p>Valid values for the <code>SERVICE</code> dimension are
   *             <code>Amazon Elastic Compute Cloud - Compute</code>,
   *             <code>Amazon Elasticsearch Service</code>,
   *             <code>Amazon ElastiCache</code>,
   *             <code>Amazon Redshift</code>, and
   *             <code>Amazon Relational Database Service</code>.</p>
   */
  Values?: string[];
}

export namespace DimensionValues {
  export const filterSensitiveLog = (obj: DimensionValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is DimensionValues =>
    __isa(o, "DimensionValues");
}

/**
 * <p>The metadata of a specific type that you can use to filter and group your results.
 *             You can use <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface DimensionValuesWithAttributes {
  __type?: "DimensionValuesWithAttributes";
  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The value of a dimension with a specific attribute.</p>
   */
  Value?: string;
}

export namespace DimensionValuesWithAttributes {
  export const filterSensitiveLog = (
    obj: DimensionValuesWithAttributes
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DimensionValuesWithAttributes =>
    __isa(o, "DimensionValuesWithAttributes");
}

/**
 * <p>Details about the Amazon EC2 instances that AWS recommends that you purchase.</p>
 */
export interface EC2InstanceDetails {
  __type?: "EC2InstanceDetails";
  /**
   * <p>The Availability Zone of the recommended reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of instance that AWS recommends.</p>
   */
  InstanceType?: string;

  /**
   * <p>The platform of the recommended reservation. The platform is the specific
   *             combination of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;

  /**
   * <p>Whether the recommended reservation is dedicated or shared.</p>
   */
  Tenancy?: string;
}

export namespace EC2InstanceDetails {
  export const filterSensitiveLog = (obj: EC2InstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2InstanceDetails =>
    __isa(o, "EC2InstanceDetails");
}

/**
 * <p> Details on the Amazon EC2 Resource.</p>
 */
export interface EC2ResourceDetails {
  __type?: "EC2ResourceDetails";
  /**
   * <p> Hourly public On Demand rate for the instance type.</p>
   */
  HourlyOnDemandRate?: string;

  /**
   * <p> The type of Amazon Web Services instance.</p>
   */
  InstanceType?: string;

  /**
   * <p> Memory capacity of Amazon Web Services instance.</p>
   */
  Memory?: string;

  /**
   * <p> Network performance capacity of the Amazon Web Services instance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p> The platform of the Amazon Web Services instance. The platform is the specific combination of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * <p> The Amazon Web Services Region of the instance.</p>
   */
  Region?: string;

  /**
   * <p> The SKU of the product.</p>
   */
  Sku?: string;

  /**
   * <p> The disk storage of the Amazon Web Services instance (Not EBS storage).</p>
   */
  Storage?: string;

  /**
   * <p> Number of VCPU cores in the Amazon Web Services instance type.</p>
   */
  Vcpu?: string;
}

export namespace EC2ResourceDetails {
  export const filterSensitiveLog = (obj: EC2ResourceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2ResourceDetails =>
    __isa(o, "EC2ResourceDetails");
}

/**
 * <p> Utilization metrics of the instance.  </p>
 */
export interface EC2ResourceUtilization {
  __type?: "EC2ResourceUtilization";
  /**
   * <p> Maximum observed or expected CPU utilization of the instance.</p>
   */
  MaxCpuUtilizationPercentage?: string;

  /**
   * <p> Maximum observed or expected memory utilization of the instance.</p>
   */
  MaxMemoryUtilizationPercentage?: string;

  /**
   * <p> Maximum observed or expected storage utilization of the instance (does not measure EBS storage).</p>
   */
  MaxStorageUtilizationPercentage?: string;
}

export namespace EC2ResourceUtilization {
  export const filterSensitiveLog = (obj: EC2ResourceUtilization): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2ResourceUtilization =>
    __isa(o, "EC2ResourceUtilization");
}

/**
 * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations
 *             for.</p>
 */
export interface EC2Specification {
  __type?: "EC2Specification";
  /**
   * <p>Whether you want a recommendation for standard or convertible
   *             reservations.</p>
   */
  OfferingClass?: OfferingClass | string;
}

export namespace EC2Specification {
  export const filterSensitiveLog = (obj: EC2Specification): any => ({
    ...obj
  });
  export const isa = (o: any): o is EC2Specification =>
    __isa(o, "EC2Specification");
}

/**
 * <p>Details about the Amazon ElastiCache instances that AWS recommends that you
 *             purchase.</p>
 */
export interface ElastiCacheInstanceDetails {
  __type?: "ElastiCacheInstanceDetails";
  /**
   * <p>Whether the recommendation is for a current generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of node that AWS recommends.</p>
   */
  NodeType?: string;

  /**
   * <p>The description of the recommended reservation.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace ElastiCacheInstanceDetails {
  export const filterSensitiveLog = (obj: ElastiCacheInstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElastiCacheInstanceDetails =>
    __isa(o, "ElastiCacheInstanceDetails");
}

/**
 * <p>Details about the Amazon ES instances that AWS recommends that you
 *             purchase.</p>
 */
export interface ESInstanceDetails {
  __type?: "ESInstanceDetails";
  /**
   * <p>Whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>The class of instance that AWS recommends.</p>
   */
  InstanceClass?: string;

  /**
   * <p>The size of instance that AWS recommends.</p>
   */
  InstanceSize?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace ESInstanceDetails {
  export const filterSensitiveLog = (obj: ESInstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ESInstanceDetails =>
    __isa(o, "ESInstanceDetails");
}

/**
 * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p>
 *         <ul>
 *             <li>
 *                 <p>Simple dimension values - You can set the dimension name and values for the
 *                     filters that you plan to use. For example, you can filter for
 *                         <code>REGION==us-east-1 OR REGION==us-west-1</code>. The
 *                         <code>Expression</code> for that looks like this:</p>
 *                 <p>
 *                   <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1",
 *                         “us-west-1” ] } }</code>
 *                 </p>
 *                 <p>The list of dimension values are OR'd together to retrieve cost or usage
 *                     data. You can create <code>Expression</code> and <code>DimensionValues</code>
 *                     objects using either <code>with*</code> methods or <code>set*</code> methods in
 *                     multiple lines. </p>
 *             </li>
 *             <li>
 *                 <p>Compound dimension values with logical operations - You can use multiple
 *                         <code>Expression</code> types and the logical operators
 *                         <code>AND/OR/NOT</code> to create a list of one or more
 *                         <code>Expression</code> objects. This allows you to filter on more advanced
 *                     options. For example, you can filter on <code>((REGION == us-east-1 OR
 *                         REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
 *                         DataTransfer)</code>. The <code>Expression</code> for that looks like
 *                     this:</p>
 *                 <p>
 *                   <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION",
 *                         "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName",
 *                         "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE",
 *                         "Values": ["DataTransfer"] }}} ] } </code>
 *                </p>
 *                 <note>
 *                     <p>Because each <code>Expression</code> can have only one operator, the
 *                         service returns an error if more than one is specified. The following
 *                         example shows an <code>Expression</code> object that creates an
 *                         error.</p>
 *                 </note>
 *                 <p>
 *                     <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE",
 *                         "Values": [ "DataTransfer" ] } } </code>
 *                </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not
 *                 supported. OR is not supported between different dimensions, or dimensions and tags.
 *                 NOT operators aren't supported.
 *                 Dimensions
 *                 are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
 *                     <code>RIGHTSIZING_TYPE</code>.</p>
 *          </note>
 */
export interface Expression {
  __type?: "Expression";
  /**
   * <p>Return results that match both <code>Dimension</code> objects.</p>
   */
  And?: Expression[];

  /**
   * <p>
   *             <i>
   *                <b>Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> (Section 1.10).</b>
   *             </i>
   *         </p>
   *         <p>The specific <code>CostCategory</code> used for <code>Expression</code>.</p>
   */
  CostCategories?: CostCategoryValues;

  /**
   * <p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>
   */
  Dimensions?: DimensionValues;

  /**
   * <p>Return results that don't match a <code>Dimension</code> object.</p>
   */
  Not?: Expression;

  /**
   * <p>Return results that match either <code>Dimension</code> object.</p>
   */
  Or?: Expression[];

  /**
   * <p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>
   */
  Tags?: TagValues;
}

export namespace Expression {
  export const filterSensitiveLog = (obj: Expression): any => ({
    ...obj
  });
  export const isa = (o: any): o is Expression => __isa(o, "Expression");
}

/**
 * <p>The forecast created for your query.</p>
 */
export interface ForecastResult {
  __type?: "ForecastResult";
  /**
   * <p>The mean value of the forecast.</p>
   */
  MeanValue?: string;

  /**
   * <p>The lower limit for the prediction interval. </p>
   */
  PredictionIntervalLowerBound?: string;

  /**
   * <p>The upper limit for the prediction interval. </p>
   */
  PredictionIntervalUpperBound?: string;

  /**
   * <p>The period of time that the forecast covers.</p>
   */
  TimePeriod?: DateInterval;
}

export namespace ForecastResult {
  export const filterSensitiveLog = (obj: ForecastResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ForecastResult =>
    __isa(o, "ForecastResult");
}

export interface GetCostAndUsageRequest {
  __type?: "GetCostAndUsageRequest";
  /**
   * <p>Filters AWS costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code>
   * 			and get the costs that are associated with that account's usage of that service. You can nest <code>Expression</code> objects
   * 			to define any combination of dimension filters. For more information, see
   * 			<a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   */
  Filter?: Expression;

  /**
   * <p>Sets the AWS cost granularity to <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set,
   * 	    the response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. </p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>You can group AWS costs using up to two different groups, either dimensions, tag keys, or both.</p>
   * 		       <p>When you group by tag key, you get all tag values, including empty strings.</p>
   * 		       <p>Valid values are <code>AZ</code>, <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>LINKED_ACCOUNT</code>,
   * 			<code>OPERATION</code>, <code>PLATFORM</code>, <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TAGS</code>,
   * 		  <code>TENANCY</code>, <code>RECORD_TYPE</code>, and <code>USAGE_TYPE</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>Which metrics are returned in the query. For more information about blended and unblended rates, see
   * 			<a href="https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   * 				appear on some line items in my bill?</a>. </p>
   * 		       <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>,
   * 			<code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p>
   * 		       <note>
   * 			         <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without
   * 				taking into account the units. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2,
   * 				the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units
   * 				(for example, hours vs. GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or
   * 				<code>UsageTypeGroups</code>. </p>
   * 		       </note>
   * 		       <p>
   *             <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>
   */
  Metrics?: string[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Sets the start and end dates for retrieving AWS costs. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetCostAndUsageRequest {
  export const filterSensitiveLog = (obj: GetCostAndUsageRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCostAndUsageRequest =>
    __isa(o, "GetCostAndUsageRequest");
}

export interface GetCostAndUsageResponse {
  __type?: "GetCostAndUsageResponse";
  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code> parameters in the request.</p>
   */
  GroupDefinitions?: GroupDefinition[];

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The time period that is covered by the results in the response.</p>
   */
  ResultsByTime?: ResultByTime[];
}

export namespace GetCostAndUsageResponse {
  export const filterSensitiveLog = (obj: GetCostAndUsageResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCostAndUsageResponse =>
    __isa(o, "GetCostAndUsageResponse");
}

export interface GetCostAndUsageWithResourcesRequest {
  __type?: "GetCostAndUsageWithResourcesRequest";
  /**
   * <p>Filters Amazon Web Services costs by different dimensions. For example, you can specify
   *       <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated
   *       with that account's usage of that service. You can nest <code>Expression</code> objects to
   *       define any combination of dimension filters. For more information, see <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   *          <p>The <code>GetCostAndUsageWithResources</code> operation requires that you either group by or filter by a
   *       <code>ResourceId</code>.</p>
   */
  Filter?: Expression;

  /**
   * <p>Sets the AWS cost granularity to <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. If
   * 	    <code>Granularity</code> isn't set, the response object doesn't include the
   * 	    <code>Granularity</code>, <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. </p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>You can group Amazon Web Services costs using up to two different groups: either dimensions, tag keys,
   *       or both.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>Which metrics are returned in the query. For more information about blended and
   *       unblended rates, see <a href="https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does
   *         the "blended" annotation appear on some line items in my bill?</a>. </p>
   *          <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>,
   *       <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>,
   *       <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and
   *       <code>UsageQuantity</code>. </p>
   *          <note>
   *             <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage
   *         numbers without taking the units into account. For example, if you aggregate
   *         <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because
   *         Amazon EC2 compute hours and data transfer are measured in different units (for example, hours
   *         vs. GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by
   *         <code>UsageType</code> or <code>UsageTypeGroups</code>. </p>
   *          </note>
   *          <p>
   *             <code>Metrics</code> is required for <code>GetCostAndUsageWithResources</code> requests.</p>
   */
  Metrics?: string[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetCostAndUsageWithResourcesRequest {
  export const filterSensitiveLog = (
    obj: GetCostAndUsageWithResourcesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCostAndUsageWithResourcesRequest =>
    __isa(o, "GetCostAndUsageWithResourcesRequest");
}

export interface GetCostAndUsageWithResourcesResponse {
  __type?: "GetCostAndUsageWithResourcesResponse";
  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code>
   *       parameters in the request.</p>
   */
  GroupDefinitions?: GroupDefinition[];

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The time period that is covered by the results in the response.</p>
   */
  ResultsByTime?: ResultByTime[];
}

export namespace GetCostAndUsageWithResourcesResponse {
  export const filterSensitiveLog = (
    obj: GetCostAndUsageWithResourcesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCostAndUsageWithResourcesResponse =>
    __isa(o, "GetCostAndUsageWithResourcesResponse");
}

export interface GetCostForecastRequest {
  __type?: "GetCostForecastRequest";
  /**
   * <p>The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.</p>
   */
  Filter?: Expression;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   * 		       <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity: Granularity | string | undefined;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see
   * 			<a href="https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   * 				appear on some line items in my bill?</a>. </p>
   * 		       <p>Valid values for a <code>GetCostForecast</code> call are the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>AMORTIZED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>BLENDED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>NET_AMORTIZED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>NET_UNBLENDED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>UNBLENDED_COST</p>
   * 			         </li>
   *          </ul>
   */
  Metric: Metric | string | undefined;

  /**
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean
   * 			by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value
   * 			falling in the prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   */
  PredictionIntervalLevel?: number;

  /**
   * <p>The period of time that you want the forecast to cover.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetCostForecastRequest {
  export const filterSensitiveLog = (obj: GetCostForecastRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCostForecastRequest =>
    __isa(o, "GetCostForecastRequest");
}

export interface GetCostForecastResponse {
  __type?: "GetCostForecastResponse";
  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts,
   * 			this is a list of months.</p>
   */
  ForecastResultsByTime?: ForecastResult[];

  /**
   * <p>How much you are forecasted to spend over the forecast period, in <code>USD</code>.</p>
   */
  Total?: MetricValue;
}

export namespace GetCostForecastResponse {
  export const filterSensitiveLog = (obj: GetCostForecastResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCostForecastResponse =>
    __isa(o, "GetCostForecastResponse");
}

export interface GetDimensionValuesRequest {
  __type?: "GetDimensionValuesRequest";
  /**
   * <p>The context for the call to <code>GetDimensionValues</code>. This can be <code>RESERVATIONS</code> or <code>COST_AND_USAGE</code>.
   * 			The default value is <code>COST_AND_USAGE</code>. If the context is set to <code>RESERVATIONS</code>, the resulting dimension values
   * 			can be used in the <code>GetReservationUtilization</code> operation. If the context is set to <code>COST_AND_USAGE</code>,
   * 			the resulting dimension values can be used in the <code>GetCostAndUsage</code> operation.</p>
   * 		       <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following
   *            dimensions for searching:</p>
   *            <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand
   *                Instances and Standard Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>SERVICE - The AWS service such as Amazon DynamoDB.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation
   *            includes a unit attribute. Examples include GB and Hrs.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this
   *                operation includes a unit attribute.</p>
   *             </li>
   *             <li>
   *                <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p>
   *             </li>
   *             <li>
   *                <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>RESERVATIONS</code>, you can use the following
   *            dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p>
   *             </li>
   *             <li>
   *                <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p>
   *             </li>
   *             <li>
   *                <p>PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</p>
   *             </li>
   *          </ul>
   */
  Context?: Context | string;

  /**
   * <p>The name of the dimension. Each <code>Dimension</code> is available for a different <code>Context</code>.
   * 			For more information, see <code>Context</code>.
   *
   * 		</p>
   */
  Dimension: Dimension | string | undefined;

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The value that you want to search the filter values for.</p>
   */
  SearchString?: string;

  /**
   * <p>The start and end dates for retrieving the dimension values. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetDimensionValuesRequest {
  export const filterSensitiveLog = (obj: GetDimensionValuesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDimensionValuesRequest =>
    __isa(o, "GetDimensionValuesRequest");
}

export interface GetDimensionValuesResponse {
  __type?: "GetDimensionValuesResponse";
  /**
   * <p>The filters that you used to filter your request. Some dimensions are available only for a specific context.</p>
   * 		       <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following
   *            dimensions for searching:</p>
   *            <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand
   *                Instances and Standard Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>SERVICE - The AWS service such as Amazon DynamoDB.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation
   *            includes a unit attribute. Examples include GB and Hrs.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this
   *                operation includes a unit attribute.</p>
   *             </li>
   *             <li>
   *                <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p>
   *             </li>
   *             <li>
   *                <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>RESERVATIONS</code>, you can use the following
   *            dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p>
   *             </li>
   *             <li>
   *                <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p>
   *             </li>
   *             <li>
   *                <p>PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</p>
   *             </li>
   *          </ul>
   */
  DimensionValues: DimensionValuesWithAttributes[] | undefined;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The number of results that AWS returned at one time.</p>
   */
  ReturnSize: number | undefined;

  /**
   * <p>The total number of search results.</p>
   */
  TotalSize: number | undefined;
}

export namespace GetDimensionValuesResponse {
  export const filterSensitiveLog = (obj: GetDimensionValuesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDimensionValuesResponse =>
    __isa(o, "GetDimensionValuesResponse");
}

/**
 * <p>You can use the following request parameters to query for how much of your instance usage a reservation covered.</p>
 */
export interface GetReservationCoverageRequest {
  __type?: "GetReservationCoverageRequest";
  /**
   * <p>Filters utilization data by dimensions. You can filter by the following dimensions:</p>
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
   * 		       <p>
   *             <code>GetReservationCoverage</code> uses the same
   * 			<a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   * 			as the other operations, but only <code>AND</code> is supported among each dimension. You can nest only one level deep.
   * 			If there are multiple values for a dimension, they are OR'd together.</p>
   * 		       <p>If you don't provide a <code>SERVICE</code> filter, Cost Explorer defaults to EC2.</p>
   */
  Filter?: Expression;

  /**
   * <p>The granularity of the AWS cost data for the reservation. Valid values are <code>MONTHLY</code> and <code>DAILY</code>.</p>
   * 		       <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set,
   * 			the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p>
   * 		       <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>You can group the data by the following attributes:</p>
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
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The measurement that you want your reservation coverage reported in.</p>
   * 		       <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use multiple values in a request.</p>
   */
  Metrics?: string[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data
   * 			for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetReservationCoverageRequest {
  export const filterSensitiveLog = (
    obj: GetReservationCoverageRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReservationCoverageRequest =>
    __isa(o, "GetReservationCoverageRequest");
}

export interface GetReservationCoverageResponse {
  __type?: "GetReservationCoverageResponse";
  /**
   * <p>The amount of time that your reservations covered.</p>
   */
  CoveragesByTime: CoverageByTime[] | undefined;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The total amount of instance usage that a reservation covered.</p>
   */
  Total?: Coverage;
}

export namespace GetReservationCoverageResponse {
  export const filterSensitiveLog = (
    obj: GetReservationCoverageResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReservationCoverageResponse =>
    __isa(o, "GetReservationCoverageResponse");
}

export interface GetReservationPurchaseRecommendationRequest {
  __type?: "GetReservationPurchaseRecommendationRequest";
  /**
   * <p>The account ID that is associated with the recommendation. </p>
   */
  AccountId?: string;

  /**
   * <p>The account scope that you want recommendations for. <code>PAYER</code> means that AWS includes the master account and
   * 			any member accounts when it calculates its recommendations. <code>LINKED</code> means that AWS includes only member accounts
   * 			when it calculates its recommendations.</p>
   * 		       <p>Valid values are <code>PAYER</code> and <code>LINKED</code>.</p>
   */
  AccountScope?: AccountScope | string;

  /**
   * <p>The number of previous days that you want AWS to consider when it calculates your recommendations.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The reservation purchase option that you want recommendations for.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The specific service that you want recommendations for.</p>
   */
  Service: string | undefined;

  /**
   * <p>The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.</p>
   */
  ServiceSpecification?: ServiceSpecification;

  /**
   * <p>The reservation term that you want recommendations for.</p>
   */
  TermInYears?: TermInYears | string;
}

export namespace GetReservationPurchaseRecommendationRequest {
  export const filterSensitiveLog = (
    obj: GetReservationPurchaseRecommendationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetReservationPurchaseRecommendationRequest =>
    __isa(o, "GetReservationPurchaseRecommendationRequest");
}

export interface GetReservationPurchaseRecommendationResponse {
  __type?: "GetReservationPurchaseRecommendationResponse";
  /**
   * <p>Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.</p>
   */
  Metadata?: ReservationPurchaseRecommendationMetadata;

  /**
   * <p>The pagination token for the next set of retrievable results.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Recommendations for reservations to purchase.</p>
   */
  Recommendations?: ReservationPurchaseRecommendation[];
}

export namespace GetReservationPurchaseRecommendationResponse {
  export const filterSensitiveLog = (
    obj: GetReservationPurchaseRecommendationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetReservationPurchaseRecommendationResponse =>
    __isa(o, "GetReservationPurchaseRecommendationResponse");
}

export interface GetReservationUtilizationRequest {
  __type?: "GetReservationUtilizationRequest";
  /**
   * <p>Filters utilization data by dimensions. You can filter by the following dimensions:</p>
   * 		       <ul>
   *             <li>
   *                <p>AZ</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE</p>
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
   *                <p>SCOPE</p>
   *             </li>
   *             <li>
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   * 		       <p>
   *             <code>GetReservationUtilization</code> uses the same
   * 			<a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   * 			as the other operations, but only <code>AND</code> is supported among each dimension, and nesting is supported up to
   * 			only one level deep. If there are multiple values for a dimension, they are OR'd together.</p>
   */
  Filter?: Expression;

  /**
   * <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set,
   * 			the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.
   * 			If both <code>GroupBy</code> and <code>Granularity</code> aren't set, <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p>
   * 		       <p>The <code>GetReservationUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Sets the start and end dates for retrieving RI utilization. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetReservationUtilizationRequest {
  export const filterSensitiveLog = (
    obj: GetReservationUtilizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReservationUtilizationRequest =>
    __isa(o, "GetReservationUtilizationRequest");
}

export interface GetReservationUtilizationResponse {
  __type?: "GetReservationUtilizationResponse";
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The total amount of time that you used your RIs.</p>
   */
  Total?: ReservationAggregates;

  /**
   * <p>The amount of time that you used your RIs.</p>
   */
  UtilizationsByTime: UtilizationByTime[] | undefined;
}

export namespace GetReservationUtilizationResponse {
  export const filterSensitiveLog = (
    obj: GetReservationUtilizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetReservationUtilizationResponse =>
    __isa(o, "GetReservationUtilizationResponse");
}

export interface GetRightsizingRecommendationRequest {
  __type?: "GetRightsizingRecommendationRequest";
  /**
   * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p>
   *         <ul>
   *             <li>
   *                 <p>Simple dimension values - You can set the dimension name and values for the
   *                     filters that you plan to use. For example, you can filter for
   *                         <code>REGION==us-east-1 OR REGION==us-west-1</code>. The
   *                         <code>Expression</code> for that looks like this:</p>
   *                 <p>
   *                   <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1",
   *                         “us-west-1” ] } }</code>
   *                 </p>
   *                 <p>The list of dimension values are OR'd together to retrieve cost or usage
   *                     data. You can create <code>Expression</code> and <code>DimensionValues</code>
   *                     objects using either <code>with*</code> methods or <code>set*</code> methods in
   *                     multiple lines. </p>
   *             </li>
   *             <li>
   *                 <p>Compound dimension values with logical operations - You can use multiple
   *                         <code>Expression</code> types and the logical operators
   *                         <code>AND/OR/NOT</code> to create a list of one or more
   *                         <code>Expression</code> objects. This allows you to filter on more advanced
   *                     options. For example, you can filter on <code>((REGION == us-east-1 OR
   *                         REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                         DataTransfer)</code>. The <code>Expression</code> for that looks like
   *                     this:</p>
   *                 <p>
   *                   <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION",
   *                         "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName",
   *                         "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE",
   *                         "Values": ["DataTransfer"] }}} ] } </code>
   *                </p>
   *                 <note>
   *                     <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an
   *                         error.</p>
   *                 </note>
   *                 <p>
   *                     <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE",
   *                         "Values": [ "DataTransfer" ] } } </code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not
   *                 supported. OR is not supported between different dimensions, or dimensions and tags.
   *                 NOT operators aren't supported.
   *                 Dimensions
   *                 are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *          </note>
   */
  Filter?: Expression;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The specific service that you want recommendations for. The only valid value for <code>GetRightsizingRecommendation</code> is
   *     	"<code>AmazonEC2</code>".</p>
   */
  Service: string | undefined;
}

export namespace GetRightsizingRecommendationRequest {
  export const filterSensitiveLog = (
    obj: GetRightsizingRecommendationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRightsizingRecommendationRequest =>
    __isa(o, "GetRightsizingRecommendationRequest");
}

export interface GetRightsizingRecommendationResponse {
  __type?: "GetRightsizingRecommendationResponse";
  /**
   * <p>Information regarding this specific recommendation set.</p>
   */
  Metadata?: RightsizingRecommendationMetadata;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Recommendations to rightsize resources.</p>
   */
  RightsizingRecommendations?: RightsizingRecommendation[];

  /**
   * <p>Summary of this recommendation set.</p>
   */
  Summary?: RightsizingRecommendationSummary;
}

export namespace GetRightsizingRecommendationResponse {
  export const filterSensitiveLog = (
    obj: GetRightsizingRecommendationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRightsizingRecommendationResponse =>
    __isa(o, "GetRightsizingRecommendationResponse");
}

export interface GetSavingsPlansCoverageRequest {
  __type?: "GetSavingsPlansCoverageRequest";
  /**
   * <p>Filters Savings Plans coverage data by dimensions.  You can filter data for Savings Plans usage with the following dimensions:</p>
   *          <ul>
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
   *          <p>
   *             <code>GetSavingsPlansCoverage</code> uses the same
   *       <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension. If there are multiple values for a dimension, they are OR'd together.</p>
   */
  Filter?: Expression;

  /**
   * <p>The granularity of the Amazon Web Services cost data for your Savings Plans. <code>Granularity</code> can't be set if <code>GroupBy</code> is set.</p>
   * 	        <p>The <code>GetSavingsPlansCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>You can group the data using the attributes <code>INSTANCE_FAMILY</code>, <code>REGION</code>, or <code>SERVICE</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The measurement that you want your Savings Plans coverage reported in. The only valid value is <code>SpendCoveredBySavingsPlans</code>.</p>
   */
  Metrics?: string[];

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetSavingsPlansCoverageRequest {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansCoverageRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSavingsPlansCoverageRequest =>
    __isa(o, "GetSavingsPlansCoverageRequest");
}

export interface GetSavingsPlansCoverageResponse {
  __type?: "GetSavingsPlansCoverageResponse";
  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * <p>The amount of spend that your Savings Plans covered.</p>
   */
  SavingsPlansCoverages: SavingsPlansCoverage[] | undefined;
}

export namespace GetSavingsPlansCoverageResponse {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansCoverageResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSavingsPlansCoverageResponse =>
    __isa(o, "GetSavingsPlansCoverageResponse");
}

export interface GetSavingsPlansPurchaseRecommendationRequest {
  __type?: "GetSavingsPlansPurchaseRecommendationRequest";
  /**
   * <p>The lookback period used to generate the recommendation.</p>
   */
  LookbackPeriodInDays: LookbackPeriodInDays | string | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The payment option used to generate these recommendations.</p>
   */
  PaymentOption: PaymentOption | string | undefined;

  /**
   * <p>The Savings Plans recommendation type requested.</p>
   */
  SavingsPlansType: SupportedSavingsPlansType | string | undefined;

  /**
   * <p>The savings plan recommendation term used to generated these recommendations.</p>
   */
  TermInYears: TermInYears | string | undefined;
}

export namespace GetSavingsPlansPurchaseRecommendationRequest {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansPurchaseRecommendationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetSavingsPlansPurchaseRecommendationRequest =>
    __isa(o, "GetSavingsPlansPurchaseRecommendationRequest");
}

export interface GetSavingsPlansPurchaseRecommendationResponse {
  __type?: "GetSavingsPlansPurchaseRecommendationResponse";
  /**
   * <p>Information regarding this specific recommendation set.</p>
   */
  Metadata?: SavingsPlansPurchaseRecommendationMetadata;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>Contains your request parameters, Savings Plan Recommendations Summary, and Details.</p>
   */
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
}

export namespace GetSavingsPlansPurchaseRecommendationResponse {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansPurchaseRecommendationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is GetSavingsPlansPurchaseRecommendationResponse =>
    __isa(o, "GetSavingsPlansPurchaseRecommendationResponse");
}

export interface GetSavingsPlansUtilizationDetailsRequest {
  __type?: "GetSavingsPlansUtilizationDetailsRequest";
  /**
   * <p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions.  You can filter data with the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLAN_ARN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAYMENT_OPTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE_FAMILY</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetSavingsPlansUtilizationDetails</code> uses the same
   *       <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension.</p>
   */
  Filter?: Expression;

  /**
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetSavingsPlansUtilizationDetailsRequest {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansUtilizationDetailsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSavingsPlansUtilizationDetailsRequest =>
    __isa(o, "GetSavingsPlansUtilizationDetailsRequest");
}

export interface GetSavingsPlansUtilizationDetailsResponse {
  __type?: "GetSavingsPlansUtilizationDetailsResponse";
  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * <p>Retrieves a single daily or monthly Savings Plans utilization rate and details for your account.</p>
   */
  SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[] | undefined;

  /**
   * <p>The time period that you want the usage and costs for.
   *         </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The total Savings Plans utilization, regardless of time period.</p>
   */
  Total?: SavingsPlansUtilizationAggregates;
}

export namespace GetSavingsPlansUtilizationDetailsResponse {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansUtilizationDetailsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSavingsPlansUtilizationDetailsResponse =>
    __isa(o, "GetSavingsPlansUtilizationDetailsResponse");
}

export interface GetSavingsPlansUtilizationRequest {
  __type?: "GetSavingsPlansUtilizationRequest";
  /**
   * <p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions.  You can filter data with the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLAN_ARN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLANS_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAYMENT_OPTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE_FAMILY</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetSavingsPlansUtilization</code> uses the same
   *       <a href="http://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension.</p>
   */
  Filter?: Expression;

  /**
   * <p>The granularity of the Amazon Web Services utillization data for your Savings Plans.</p>
   * 	        <p>The <code>GetSavingsPlansUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetSavingsPlansUtilizationRequest {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansUtilizationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSavingsPlansUtilizationRequest =>
    __isa(o, "GetSavingsPlansUtilizationRequest");
}

export interface GetSavingsPlansUtilizationResponse {
  __type?: "GetSavingsPlansUtilizationResponse";
  /**
   * <p>The amount of cost/commitment you used your Savings Plans. This allows you to specify date ranges.</p>
   */
  SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[];

  /**
   * <p>The total amount of cost/commitment that you used your Savings Plans, regardless of date ranges.</p>
   */
  Total: SavingsPlansUtilizationAggregates | undefined;
}

export namespace GetSavingsPlansUtilizationResponse {
  export const filterSensitiveLog = (
    obj: GetSavingsPlansUtilizationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSavingsPlansUtilizationResponse =>
    __isa(o, "GetSavingsPlansUtilizationResponse");
}

export interface GetTagsRequest {
  __type?: "GetTagsRequest";
  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The value that you want to search for.</p>
   */
  SearchString?: string;

  /**
   * <p>The key of the tag that you want to return values for.</p>
   */
  TagKey?: string;

  /**
   * <p>The start and end dates for retrieving the dimension values. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetTagsRequest {
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTagsRequest =>
    __isa(o, "GetTagsRequest");
}

export interface GetTagsResponse {
  __type?: "GetTagsResponse";
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The number of query results that AWS returns at a time.</p>
   */
  ReturnSize: number | undefined;

  /**
   * <p>The tags that match your request.</p>
   */
  Tags: string[] | undefined;

  /**
   * <p>The total number of query results.</p>
   */
  TotalSize: number | undefined;
}

export namespace GetTagsResponse {
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTagsResponse =>
    __isa(o, "GetTagsResponse");
}

export interface GetUsageForecastRequest {
  __type?: "GetUsageForecastRequest";
  /**
   * <p>The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.</p>
   */
  Filter?: Expression;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   * 		       <p>The <code>GetUsageForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity: Granularity | string | undefined;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast.</p>
   * 		       <p>Valid values for a <code>GetUsageForecast</code> call are the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>USAGE_QUANTITY</p>
   * 			         </li>
   *             <li>
   * 				           <p>NORMALIZED_USAGE_AMOUNT</p>
   * 			         </li>
   *          </ul>
   */
  Metric: Metric | string | undefined;

  /**
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean
   * 			by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value
   * 			falling in the prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   */
  PredictionIntervalLevel?: number;

  /**
   * <p>The start and end dates of the period that you want to retrieve usage forecast for. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;
}

export namespace GetUsageForecastRequest {
  export const filterSensitiveLog = (obj: GetUsageForecastRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsageForecastRequest =>
    __isa(o, "GetUsageForecastRequest");
}

export interface GetUsageForecastResponse {
  __type?: "GetUsageForecastResponse";
  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts,
   * 			this is a list of months.</p>
   */
  ForecastResultsByTime?: ForecastResult[];

  /**
   * <p>How much you're forecasted to use over the forecast period.</p>
   */
  Total?: MetricValue;
}

export namespace GetUsageForecastResponse {
  export const filterSensitiveLog = (obj: GetUsageForecastResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUsageForecastResponse =>
    __isa(o, "GetUsageForecastResponse");
}

export enum Granularity {
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY"
}

/**
 * <p>One level of grouped data in the results.</p>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p>The keys that are included in this group.</p>
   */
  Keys?: string[];

  /**
   * <p>The metrics that are included in this group.</p>
   */
  Metrics?: { [key: string]: MetricValue };
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj
  });
  export const isa = (o: any): o is Group => __isa(o, "Group");
}

/**
 * <p>Represents a group when you specify a group by criteria or in the response to a
 *             query with a specific grouping.</p>
 */
export interface GroupDefinition {
  __type?: "GroupDefinition";
  /**
   * <p>The string that represents a key for a specified group.</p>
   */
  Key?: string;

  /**
   * <p>The string that represents the type of group.</p>
   */
  Type?: GroupDefinitionType | string;
}

export namespace GroupDefinition {
  export const filterSensitiveLog = (obj: GroupDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is GroupDefinition =>
    __isa(o, "GroupDefinition");
}

export enum GroupDefinitionType {
  COST_CATEGORY = "COST_CATEGORY",
  DIMENSION = "DIMENSION",
  TAG = "TAG"
}

/**
 * <p>Details about the instances that AWS recommends that you purchase.</p>
 */
export interface InstanceDetails {
  __type?: "InstanceDetails";
  /**
   * <p>The Amazon EC2 instances that AWS recommends that you purchase.</p>
   */
  EC2InstanceDetails?: EC2InstanceDetails;

  /**
   * <p>The Amazon ES instances that AWS recommends that you purchase.</p>
   */
  ESInstanceDetails?: ESInstanceDetails;

  /**
   * <p>The ElastiCache instances that AWS recommends that you purchase.</p>
   */
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;

  /**
   * <p>The Amazon RDS instances that AWS recommends that you purchase.</p>
   */
  RDSInstanceDetails?: RDSInstanceDetails;

  /**
   * <p>The Amazon Redshift instances that AWS recommends that you purchase.</p>
   */
  RedshiftInstanceDetails?: RedshiftInstanceDetails;
}

export namespace InstanceDetails {
  export const filterSensitiveLog = (obj: InstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceDetails =>
    __isa(o, "InstanceDetails");
}

/**
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextTokenException =>
    __isa(o, "InvalidNextTokenException");
}

/**
 * <p>You made too many calls in a short period of time. Try again later.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListCostCategoryDefinitionsRequest {
  __type?: "ListCostCategoryDefinitionsRequest";
  /**
   * <p>
   *       The date when the Cost Category was effective.
   *     </p>
   */
  EffectiveOn?: string;

  /**
   * <p>
   *       The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   *          <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>
   */
  NextToken?: string;
}

export namespace ListCostCategoryDefinitionsRequest {
  export const filterSensitiveLog = (
    obj: ListCostCategoryDefinitionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCostCategoryDefinitionsRequest =>
    __isa(o, "ListCostCategoryDefinitionsRequest");
}

export interface ListCostCategoryDefinitionsResponse {
  __type?: "ListCostCategoryDefinitionsResponse";
  /**
   * <p>
   *       A reference to a Cost Category containing enough information to identify the Cost Category.
   *     </p>
   */
  CostCategoryReferences?: CostCategoryReference[];

  /**
   * <p>
   *       The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListCostCategoryDefinitionsResponse {
  export const filterSensitiveLog = (
    obj: ListCostCategoryDefinitionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCostCategoryDefinitionsResponse =>
    __isa(o, "ListCostCategoryDefinitionsResponse");
}

export enum LookbackPeriodInDays {
  SEVEN_DAYS = "SEVEN_DAYS",
  SIXTY_DAYS = "SIXTY_DAYS",
  THIRTY_DAYS = "THIRTY_DAYS"
}

export enum Metric {
  AMORTIZED_COST = "AMORTIZED_COST",
  BLENDED_COST = "BLENDED_COST",
  NET_AMORTIZED_COST = "NET_AMORTIZED_COST",
  NET_UNBLENDED_COST = "NET_UNBLENDED_COST",
  NORMALIZED_USAGE_AMOUNT = "NORMALIZED_USAGE_AMOUNT",
  UNBLENDED_COST = "UNBLENDED_COST",
  USAGE_QUANTITY = "USAGE_QUANTITY"
}

/**
 * <p>The aggregated value for a metric.</p>
 */
export interface MetricValue {
  __type?: "MetricValue";
  /**
   * <p>The actual number that represents the metric.</p>
   */
  Amount?: string;

  /**
   * <p>The unit that the metric is given in.</p>
   */
  Unit?: string;
}

export namespace MetricValue {
  export const filterSensitiveLog = (obj: MetricValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricValue => __isa(o, "MetricValue");
}

/**
 * <p> Details on the modification recommendation.</p>
 */
export interface ModifyRecommendationDetail {
  __type?: "ModifyRecommendationDetail";
  /**
   * <p>Identifies whether this instance type is the Amazon Web Services default recommendation.</p>
   */
  TargetInstances?: TargetInstance[];
}

export namespace ModifyRecommendationDetail {
  export const filterSensitiveLog = (obj: ModifyRecommendationDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyRecommendationDetail =>
    __isa(o, "ModifyRecommendationDetail");
}

export enum OfferingClass {
  CONVERTIBLE = "CONVERTIBLE",
  STANDARD = "STANDARD"
}

export enum PaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  HEAVY_UTILIZATION = "HEAVY_UTILIZATION",
  LIGHT_UTILIZATION = "LIGHT_UTILIZATION",
  MEDIUM_UTILIZATION = "MEDIUM_UTILIZATION",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT"
}

/**
 * <p>Details about the Amazon RDS instances that AWS recommends that you
 *             purchase.</p>
 */
export interface RDSInstanceDetails {
  __type?: "RDSInstanceDetails";
  /**
   * <p>Whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>The database edition that the recommended reservation supports.</p>
   */
  DatabaseEdition?: string;

  /**
   * <p>The database engine that the recommended reservation supports.</p>
   */
  DatabaseEngine?: string;

  /**
   * <p>Whether the recommendation is for a reservation in a single Availability Zone or a
   *             reservation with a backup in a second Availability Zone.</p>
   */
  DeploymentOption?: string;

  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of instance that AWS recommends.</p>
   */
  InstanceType?: string;

  /**
   * <p>The license model that the recommended reservation supports.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace RDSInstanceDetails {
  export const filterSensitiveLog = (obj: RDSInstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is RDSInstanceDetails =>
    __isa(o, "RDSInstanceDetails");
}

/**
 * <p>Details about the Amazon Redshift instances that AWS recommends that you
 *             purchase.</p>
 */
export interface RedshiftInstanceDetails {
  __type?: "RedshiftInstanceDetails";
  /**
   * <p>Whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of node that AWS recommends.</p>
   */
  NodeType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace RedshiftInstanceDetails {
  export const filterSensitiveLog = (obj: RedshiftInstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedshiftInstanceDetails =>
    __isa(o, "RedshiftInstanceDetails");
}

/**
 * <p>Your request parameters changed between pages. Try again with the old parameters or
 *             without a pagination token.</p>
 */
export interface RequestChangedException
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestChangedException";
  $fault: "client";
  Message?: string;
}

export namespace RequestChangedException {
  export const filterSensitiveLog = (obj: RequestChangedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestChangedException =>
    __isa(o, "RequestChangedException");
}

/**
 * <p>The aggregated numbers for your reservation usage.</p>
 */
export interface ReservationAggregates {
  __type?: "ReservationAggregates";
  /**
   * <p>The monthly cost of your reservation, amortized over the reservation
   *             period.</p>
   */
  AmortizedRecurringFee?: string;

  /**
   * <p>The upfront cost of your reservation, amortized over the reservation
   *             period.</p>
   */
  AmortizedUpfrontFee?: string;

  /**
   * <p>How much you saved due to purchasing and utilizing reservation. AWS calculates this
   *             by subtracting <code>TotalAmortizedFee</code> from
   *                 <code>OnDemandCostOfRIHoursUsed</code>.</p>
   */
  NetRISavings?: string;

  /**
   * <p>How much your reservation would cost if charged On-Demand rates.</p>
   */
  OnDemandCostOfRIHoursUsed?: string;

  /**
   * <p>How many reservation hours that you purchased.</p>
   */
  PurchasedHours?: string;

  /**
   * <p>How many Amazon EC2 reservation hours that you purchased, converted to normalized units.
   *             Normalized units are available only for Amazon EC2 usage after November 11, 2017.</p>
   */
  PurchasedUnits?: string;

  /**
   * <p>The total number of reservation hours that you used.</p>
   */
  TotalActualHours?: string;

  /**
   * <p>The total number of Amazon EC2 reservation hours that you used, converted to normalized
   *             units. Normalized units are available only for Amazon EC2 usage after November 11,
   *             2017.</p>
   */
  TotalActualUnits?: string;

  /**
   * <p>The total cost of your reservation, amortized over the reservation
   *             period.</p>
   */
  TotalAmortizedFee?: string;

  /**
   * <p>How much you could save if you use your entire reservation.</p>
   */
  TotalPotentialRISavings?: string;

  /**
   * <p>The number of reservation hours that you didn't use.</p>
   */
  UnusedHours?: string;

  /**
   * <p>The number of Amazon EC2 reservation hours that you didn't use, converted to normalized
   *             units. Normalized units are available only for Amazon EC2 usage after November 11,
   *             2017.</p>
   */
  UnusedUnits?: string;

  /**
   * <p>The percentage of reservation time that you used.</p>
   */
  UtilizationPercentage?: string;

  /**
   * <p>The percentage of Amazon EC2 reservation time that you used, converted to normalized
   *             units. Normalized units are available only for Amazon EC2 usage after November 11,
   *             2017.</p>
   */
  UtilizationPercentageInUnits?: string;
}

export namespace ReservationAggregates {
  export const filterSensitiveLog = (obj: ReservationAggregates): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationAggregates =>
    __isa(o, "ReservationAggregates");
}

/**
 * <p>A
 *             group of reservations that share a set of attributes.</p>
 */
export interface ReservationCoverageGroup {
  __type?: "ReservationCoverageGroup";
  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>How much instance usage this group of reservations covered.</p>
   */
  Coverage?: Coverage;
}

export namespace ReservationCoverageGroup {
  export const filterSensitiveLog = (obj: ReservationCoverageGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationCoverageGroup =>
    __isa(o, "ReservationCoverageGroup");
}

/**
 * <p>A specific reservation that AWS recommends for purchase.</p>
 */
export interface ReservationPurchaseRecommendation {
  __type?: "ReservationPurchaseRecommendation";
  /**
   * <p>The account scope that AWS recommends that you purchase this instance for. For
   *             example, you can purchase this reservation for an entire organization in AWS
   *             Organizations.</p>
   */
  AccountScope?: AccountScope | string;

  /**
   * <p>How many days of previous usage that AWS considers when making this
   *             recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p>The payment option for the reservation. For example, <code>AllUpfront</code> or
   *                 <code>NoUpfront</code>.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>Details about the recommended purchases.</p>
   */
  RecommendationDetails?: ReservationPurchaseRecommendationDetail[];

  /**
   * <p>A summary about the recommended purchase.</p>
   */
  RecommendationSummary?: ReservationPurchaseRecommendationSummary;

  /**
   * <p>Hardware specifications for the service that you want recommendations
   *             for.</p>
   */
  ServiceSpecification?: ServiceSpecification;

  /**
   * <p>The term of the reservation that you want recommendations for, in years.</p>
   */
  TermInYears?: TermInYears | string;
}

export namespace ReservationPurchaseRecommendation {
  export const filterSensitiveLog = (
    obj: ReservationPurchaseRecommendation
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationPurchaseRecommendation =>
    __isa(o, "ReservationPurchaseRecommendation");
}

/**
 * <p>Details about your recommended reservation purchase.</p>
 */
export interface ReservationPurchaseRecommendationDetail {
  __type?: "ReservationPurchaseRecommendationDetail";
  /**
   * <p>The account that this RI recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * <p>The average number of normalized units that you used in an hour during the
   *             historical period. AWS uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  AverageNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The average number of instances that you used in an hour during the historical
   *             period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  AverageNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The average utilization of your instances. AWS uses this to calculate your
   *             recommended reservation purchases.</p>
   */
  AverageUtilization?: string;

  /**
   * <p>The currency code that AWS used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>How long AWS estimates that it takes for this instance to start saving you money,
   *             in months.</p>
   */
  EstimatedBreakEvenInMonths?: string;

  /**
   * <p>How much AWS estimates that you spend on On-Demand Instances in a month.</p>
   */
  EstimatedMonthlyOnDemandCost?: string;

  /**
   * <p>How much AWS estimates that this specific recommendation could save you in a
   *             month.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>How much AWS estimates that this specific recommendation could save you in a month,
   *             as a percentage of your overall costs.</p>
   */
  EstimatedMonthlySavingsPercentage?: string;

  /**
   * <p>How much AWS estimates that you would have spent for all usage during the specified
   *             historical period if you had
   *             a
   *             reservation.</p>
   */
  EstimatedReservationCostForLookbackPeriod?: string;

  /**
   * <p>Details about the instances that AWS recommends that you purchase.</p>
   */
  InstanceDetails?: InstanceDetails;

  /**
   * <p>The maximum number of normalized units that you used in an hour during the
   *             historical period. AWS uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MaximumNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The maximum number of instances that you used in an hour during the historical
   *             period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MaximumNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The minimum number of normalized units that you used in an hour during the
   *             historical period. AWS uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MinimumNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The minimum number of instances that you used in an hour during the historical
   *             period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MinimumNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The number of normalized units that AWS recommends that you purchase.</p>
   */
  RecommendedNormalizedUnitsToPurchase?: string;

  /**
   * <p>The number of instances that AWS recommends that you purchase.</p>
   */
  RecommendedNumberOfInstancesToPurchase?: string;

  /**
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   */
  RecurringStandardMonthlyCost?: string;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  UpfrontCost?: string;
}

export namespace ReservationPurchaseRecommendationDetail {
  export const filterSensitiveLog = (
    obj: ReservationPurchaseRecommendationDetail
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationPurchaseRecommendationDetail =>
    __isa(o, "ReservationPurchaseRecommendationDetail");
}

/**
 * <p>Information about this specific recommendation, such as the time stamp for when AWS
 *             made a specific recommendation.</p>
 */
export interface ReservationPurchaseRecommendationMetadata {
  __type?: "ReservationPurchaseRecommendationMetadata";
  /**
   * <p>The time stamp for when AWS made this recommendation.</p>
   */
  GenerationTimestamp?: string;

  /**
   * <p>The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;
}

export namespace ReservationPurchaseRecommendationMetadata {
  export const filterSensitiveLog = (
    obj: ReservationPurchaseRecommendationMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationPurchaseRecommendationMetadata =>
    __isa(o, "ReservationPurchaseRecommendationMetadata");
}

/**
 * <p>A summary about this recommendation, such as the currency code, the amount that AWS
 *             estimates that you could save, and the total amount of reservation to
 *             purchase.</p>
 */
export interface ReservationPurchaseRecommendationSummary {
  __type?: "ReservationPurchaseRecommendationSummary";
  /**
   * <p>The currency code used for this recommendation.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The total amount that AWS estimates that this recommendation could save you in a
   *             month.</p>
   */
  TotalEstimatedMonthlySavingsAmount?: string;

  /**
   * <p>The total amount that AWS estimates that this recommendation could save you in a
   *             month, as a percentage of your costs.</p>
   */
  TotalEstimatedMonthlySavingsPercentage?: string;
}

export namespace ReservationPurchaseRecommendationSummary {
  export const filterSensitiveLog = (
    obj: ReservationPurchaseRecommendationSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationPurchaseRecommendationSummary =>
    __isa(o, "ReservationPurchaseRecommendationSummary");
}

/**
 * <p>A group of reservations that share a set of attributes.</p>
 */
export interface ReservationUtilizationGroup {
  __type?: "ReservationUtilizationGroup";
  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The key for a specific reservation attribute.</p>
   */
  Key?: string;

  /**
   * <p>How much you used this group of reservations.</p>
   */
  Utilization?: ReservationAggregates;

  /**
   * <p>The value of a specific reservation attribute.</p>
   */
  Value?: string;
}

export namespace ReservationUtilizationGroup {
  export const filterSensitiveLog = (
    obj: ReservationUtilizationGroup
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReservationUtilizationGroup =>
    __isa(o, "ReservationUtilizationGroup");
}

/**
 * <p>Details on the resource.</p>
 */
export interface ResourceDetails {
  __type?: "ResourceDetails";
  /**
   * <p>Details on the Amazon EC2 resource.</p>
   */
  EC2ResourceDetails?: EC2ResourceDetails;
}

export namespace ResourceDetails {
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceDetails =>
    __isa(o, "ResourceDetails");
}

/**
 * <p>
 *             The specified ARN in the request doesn't exist.
 *         </p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Resource utilization of current resource.  </p>
 */
export interface ResourceUtilization {
  __type?: "ResourceUtilization";
  /**
   * <p>Utilization of current Amazon EC2 Instance  </p>
   */
  EC2ResourceUtilization?: EC2ResourceUtilization;
}

export namespace ResourceUtilization {
  export const filterSensitiveLog = (obj: ResourceUtilization): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceUtilization =>
    __isa(o, "ResourceUtilization");
}

/**
 * <p>The result that is associated with a time period.</p>
 */
export interface ResultByTime {
  __type?: "ResultByTime";
  /**
   * <p>Whether
   *             the result is estimated.</p>
   */
  Estimated?: boolean;

  /**
   * <p>The groups that this time period includes.</p>
   */
  Groups?: Group[];

  /**
   * <p>The time period that the result covers.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The total amount of cost or usage accrued during the time period.</p>
   */
  Total?: { [key: string]: MetricValue };
}

export namespace ResultByTime {
  export const filterSensitiveLog = (obj: ResultByTime): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResultByTime => __isa(o, "ResultByTime");
}

/**
 * <p>Recommendations to rightsize resources.</p>
 */
export interface RightsizingRecommendation {
  __type?: "RightsizingRecommendation";
  /**
   * <p>The account that this recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * <p> Context regarding the current instance.</p>
   */
  CurrentInstance?: CurrentInstance;

  /**
   * <p> Details for modification recommendations.  </p>
   */
  ModifyRecommendationDetail?: ModifyRecommendationDetail;

  /**
   * <p>Recommendation to either terminate or modify the resource.</p>
   */
  RightsizingType?: RightsizingType | string;

  /**
   * <p>Details for termination recommendations.</p>
   */
  TerminateRecommendationDetail?: TerminateRecommendationDetail;
}

export namespace RightsizingRecommendation {
  export const filterSensitiveLog = (obj: RightsizingRecommendation): any => ({
    ...obj
  });
  export const isa = (o: any): o is RightsizingRecommendation =>
    __isa(o, "RightsizingRecommendation");
}

/**
 * <p>Metadata for this recommendation set.</p>
 */
export interface RightsizingRecommendationMetadata {
  __type?: "RightsizingRecommendationMetadata";
  /**
   * <p> The time stamp for when Amazon Web Services made this recommendation.</p>
   */
  GenerationTimestamp?: string;

  /**
   * <p> How many days of previous usage that Amazon Web Services considers when making this recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p> The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;
}

export namespace RightsizingRecommendationMetadata {
  export const filterSensitiveLog = (
    obj: RightsizingRecommendationMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RightsizingRecommendationMetadata =>
    __isa(o, "RightsizingRecommendationMetadata");
}

/**
 * <p> Summary of rightsizing recommendations  </p>
 */
export interface RightsizingRecommendationSummary {
  __type?: "RightsizingRecommendationSummary";
  /**
   * <p> Estimated total savings resulting from modifications, on a monthly basis.</p>
   */
  EstimatedTotalMonthlySavingsAmount?: string;

  /**
   * <p> The currency code that Amazon Web Services used to calculate the savings.</p>
   */
  SavingsCurrencyCode?: string;

  /**
   * <p> Savings percentage based on the recommended modifications, relative to the total On Demand costs associated with these instances.</p>
   */
  SavingsPercentage?: string;

  /**
   * <p> Total number of instance recommendations.</p>
   */
  TotalRecommendationCount?: string;
}

export namespace RightsizingRecommendationSummary {
  export const filterSensitiveLog = (
    obj: RightsizingRecommendationSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RightsizingRecommendationSummary =>
    __isa(o, "RightsizingRecommendationSummary");
}

export enum RightsizingType {
  MODIFY = "MODIFY",
  TERMINATE = "TERMINATE"
}

/**
 * <p>The amortized amount of Savings Plans purchased in a specific account during a specific time interval.</p>
 */
export interface SavingsPlansAmortizedCommitment {
  __type?: "SavingsPlansAmortizedCommitment";
  /**
   * <p>The amortized amount of your Savings Plans commitment that was purchased with either a <code>Partial</code> or a <code>NoUpfront</code>.</p>
   */
  AmortizedRecurringCommitment?: string;

  /**
   * <p>The amortized amount of your Savings Plans commitment that was purchased with an <code>Upfront</code> or <code>PartialUpfront</code> Savings Plans.</p>
   */
  AmortizedUpfrontCommitment?: string;

  /**
   * <p>The total amortized amount of your Savings Plans commitment, regardless of your Savings Plans purchase method. </p>
   */
  TotalAmortizedCommitment?: string;
}

export namespace SavingsPlansAmortizedCommitment {
  export const filterSensitiveLog = (
    obj: SavingsPlansAmortizedCommitment
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansAmortizedCommitment =>
    __isa(o, "SavingsPlansAmortizedCommitment");
}

/**
 * <p>The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.</p>
 */
export interface SavingsPlansCoverage {
  __type?: "SavingsPlansCoverage";
  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The amount of Savings Plans eligible usage that the Savings Plans covered.</p>
   */
  Coverage?: SavingsPlansCoverageData;

  /**
   * <p>The time period that you want the usage and costs for.
   *         </p>
   */
  TimePeriod?: DateInterval;
}

export namespace SavingsPlansCoverage {
  export const filterSensitiveLog = (obj: SavingsPlansCoverage): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansCoverage =>
    __isa(o, "SavingsPlansCoverage");
}

/**
 * <p>Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.</p>
 */
export interface SavingsPlansCoverageData {
  __type?: "SavingsPlansCoverageData";
  /**
   * <p>The percentage of your existing Savings Planscovered usage, divided by all of your eligible Savings Plans usage in an account(or set of accounts).</p>
   */
  CoveragePercentage?: string;

  /**
   * <p>The cost of your Amazon Web Services usage at the public On-Demand rate.</p>
   */
  OnDemandCost?: string;

  /**
   * <p>The amount of your Amazon Web Services usage that is covered by a Savings Plans.</p>
   */
  SpendCoveredBySavingsPlans?: string;

  /**
   * <p>The total cost of your Amazon Web Services usage, regardless of your purchase option.</p>
   */
  TotalCost?: string;
}

export namespace SavingsPlansCoverageData {
  export const filterSensitiveLog = (obj: SavingsPlansCoverageData): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansCoverageData =>
    __isa(o, "SavingsPlansCoverageData");
}

/**
 * <p>Attribute details on a specific Savings Plan.</p>
 */
export interface SavingsPlansDetails {
  __type?: "SavingsPlansDetails";
  /**
   * <p>A group of instance types that Savings Plans applies to.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The unique ID used to distinguish Savings Plans from one another.</p>
   */
  OfferingId?: string;

  /**
   * <p>A collection of AWS resources in a geographic area. Each AWS Region is isolated and independent of the other Regions.</p>
   */
  Region?: string;
}

export namespace SavingsPlansDetails {
  export const filterSensitiveLog = (obj: SavingsPlansDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansDetails =>
    __isa(o, "SavingsPlansDetails");
}

/**
 * <p>Contains your request parameters, Savings Plan Recommendations Summary, and Details.</p>
 */
export interface SavingsPlansPurchaseRecommendation {
  __type?: "SavingsPlansPurchaseRecommendation";
  /**
   * <p>The lookback period in days, used to generate the recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p>The payment option used to generate the recommendation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>Details for the Savings Plans we recommend you to purchase to cover existing, Savings Plans eligible workloads.</p>
   */
  SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[];

  /**
   * <p>Summary metrics for your Savings Plans Recommendations. </p>
   */
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;

  /**
   * <p>The requested Savings Plans recommendation type.</p>
   */
  SavingsPlansType?: SupportedSavingsPlansType | string;

  /**
   * <p>The Savings Plans recommendation term in years, used to generate the recommendation.</p>
   */
  TermInYears?: TermInYears | string;
}

export namespace SavingsPlansPurchaseRecommendation {
  export const filterSensitiveLog = (
    obj: SavingsPlansPurchaseRecommendation
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansPurchaseRecommendation =>
    __isa(o, "SavingsPlansPurchaseRecommendation");
}

/**
 * <p>Details for your recommended Savings Plans.</p>
 */
export interface SavingsPlansPurchaseRecommendationDetail {
  __type?: "SavingsPlansPurchaseRecommendationDetail";
  /**
   * <p>The <code>AccountID</code> the recommendation is generated for.</p>
   */
  AccountId?: string;

  /**
   * <p>The currency code Amazon Web Services used to generate the recommendations and present potential savings.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The average value of hourly On-Demand spend over the lookback period of the applicable usage type.</p>
   */
  CurrentAverageHourlyOnDemandSpend?: string;

  /**
   * <p>The highest value of hourly On-Demand spend over the lookback period of the applicable usage type.</p>
   */
  CurrentMaximumHourlyOnDemandSpend?: string;

  /**
   * <p>The lowest value of hourly On-Demand spend over the lookback period of the applicable usage type.</p>
   */
  CurrentMinimumHourlyOnDemandSpend?: string;

  /**
   * <p>The estimated utilization of the recommended Savings Plans.</p>
   */
  EstimatedAverageUtilization?: string;

  /**
   * <p>The estimated monthly savings amount, based on the recommended Savings Plans.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings Plans, over the length of the lookback period.</p>
   */
  EstimatedOnDemandCost?: string;

  /**
   * <p>
   *             The estimated On-Demand costs you would expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own.
   *         </p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;

  /**
   * <p>The estimated return on investment based on the recommended Savings Plans purchased. This is calculated as <code>estimatedSavingsAmount</code>/ <code>estimatedSPCost</code>*100.</p>
   */
  EstimatedROI?: string;

  /**
   * <p>The cost of the recommended Savings Plans over the length of the lookback period.</p>
   */
  EstimatedSPCost?: string;

  /**
   * <p>The estimated savings amount based on the recommended Savings Plans over the length of the lookback period.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * <p>The estimated savings percentage relative to the total cost of applicable On-Demand usage over the lookback period.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * <p>The recommended hourly commitment level for the Savings Plans type, and configuration based on the usage during the lookback period.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * <p>Details for your recommended Savings Plans.</p>
   */
  SavingsPlansDetails?: SavingsPlansDetails;

  /**
   * <p>The upfront cost of the recommended Savings Plans, based on the selected payment option.</p>
   */
  UpfrontCost?: string;
}

export namespace SavingsPlansPurchaseRecommendationDetail {
  export const filterSensitiveLog = (
    obj: SavingsPlansPurchaseRecommendationDetail
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansPurchaseRecommendationDetail =>
    __isa(o, "SavingsPlansPurchaseRecommendationDetail");
}

/**
 * <p>Metadata about your Savings Plans Purchase Recommendations.</p>
 */
export interface SavingsPlansPurchaseRecommendationMetadata {
  __type?: "SavingsPlansPurchaseRecommendationMetadata";
  /**
   * <p>The timestamp showing when the recommendations were generated.</p>
   */
  GenerationTimestamp?: string;

  /**
   * <p>The unique identifier for the recommendation set.</p>
   */
  RecommendationId?: string;
}

export namespace SavingsPlansPurchaseRecommendationMetadata {
  export const filterSensitiveLog = (
    obj: SavingsPlansPurchaseRecommendationMetadata
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is SavingsPlansPurchaseRecommendationMetadata =>
    __isa(o, "SavingsPlansPurchaseRecommendationMetadata");
}

/**
 * <p>Summary metrics for your Savings Plans Purchase Recommendations.</p>
 */
export interface SavingsPlansPurchaseRecommendationSummary {
  __type?: "SavingsPlansPurchaseRecommendationSummary";
  /**
   * <p>The currency code Amazon Web Services used to generate the recommendations and present potential savings.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The current total on demand spend of the applicable usage types over the lookback period.</p>
   */
  CurrentOnDemandSpend?: string;

  /**
   * <p>The recommended Savings Plans cost on a daily (24 hourly) basis.</p>
   */
  DailyCommitmentToPurchase?: string;

  /**
   * <p>The estimated monthly savings amount, based on the recommended Savings Plans purchase.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>
   *             The estimated On-Demand costs you would expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own.
   *         </p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;

  /**
   * <p>The estimated return on investment based on the recommended Savings Plans and estimated savings.</p>
   */
  EstimatedROI?: string;

  /**
   * <p>The estimated total savings over the lookback period, based on the purchase of the recommended Savings Plans.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * <p>The estimated savings relative to the total cost of On-Demand usage, over the lookback period. This is calculated as <code>estimatedSavingsAmount</code>/ <code>CurrentOnDemandSpend</code>*100.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * <p>The estimated total cost of the usage after purchasing the recommended Savings Plans. This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand usage.</p>
   */
  EstimatedTotalCost?: string;

  /**
   * <p>The recommended hourly commitment based on the recommendation parameters.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * <p>The aggregate number of Savings Plans recommendations that exist for your account.</p>
   */
  TotalRecommendationCount?: string;
}

export namespace SavingsPlansPurchaseRecommendationSummary {
  export const filterSensitiveLog = (
    obj: SavingsPlansPurchaseRecommendationSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansPurchaseRecommendationSummary =>
    __isa(o, "SavingsPlansPurchaseRecommendationSummary");
}

/**
 * <p>The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account.</p>
 */
export interface SavingsPlansSavings {
  __type?: "SavingsPlansSavings";
  /**
   * <p>The savings amount that you are accumulating for the usage that is covered by a Savings Plans, when compared to the On-Demand equivalent of the same usage.</p>
   */
  NetSavings?: string;

  /**
   * <p>How much the amount that the usage would have cost if it was
   *             accrued
   *             at the On-Demand rate.</p>
   */
  OnDemandCostEquivalent?: string;
}

export namespace SavingsPlansSavings {
  export const filterSensitiveLog = (obj: SavingsPlansSavings): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansSavings =>
    __isa(o, "SavingsPlansSavings");
}

/**
 * <p>The measurement of how well you are using your existing Savings Plans.</p>
 */
export interface SavingsPlansUtilization {
  __type?: "SavingsPlansUtilization";
  /**
   * <p>The total amount of Savings Plans commitment that's been purchased in an account (or set of accounts).</p>
   */
  TotalCommitment?: string;

  /**
   * <p>The amount of your Savings Plans commitment that was not consumed from Savings Plans eligible usage in a specific period.</p>
   */
  UnusedCommitment?: string;

  /**
   * <p>The amount of your Savings Plans commitment that was consumed from Savings Plans eligible usage in a specific period.</p>
   */
  UsedCommitment?: string;

  /**
   * <p>The amount of <code>UsedCommitment</code> divided by the <code>TotalCommitment</code> for your Savings Plans.</p>
   */
  UtilizationPercentage?: string;
}

export namespace SavingsPlansUtilization {
  export const filterSensitiveLog = (obj: SavingsPlansUtilization): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansUtilization =>
    __isa(o, "SavingsPlansUtilization");
}

/**
 * <p>The aggregated utilization metrics for your Savings Plans usage.</p>
 */
export interface SavingsPlansUtilizationAggregates {
  __type?: "SavingsPlansUtilizationAggregates";
  /**
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings from Savings Plans, as well as the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.</p>
   */
  Utilization: SavingsPlansUtilization | undefined;
}

export namespace SavingsPlansUtilizationAggregates {
  export const filterSensitiveLog = (
    obj: SavingsPlansUtilizationAggregates
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansUtilizationAggregates =>
    __isa(o, "SavingsPlansUtilizationAggregates");
}

/**
 * <p>The amount of Savings Plans utilization, in hours.</p>
 */
export interface SavingsPlansUtilizationByTime {
  __type?: "SavingsPlansUtilizationByTime";
  /**
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings from Savings Plans as well as the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * <p>The time period that you want the usage and costs for.
   *         </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.</p>
   */
  Utilization: SavingsPlansUtilization | undefined;
}

export namespace SavingsPlansUtilizationByTime {
  export const filterSensitiveLog = (
    obj: SavingsPlansUtilizationByTime
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansUtilizationByTime =>
    __isa(o, "SavingsPlansUtilizationByTime");
}

/**
 * <p>A single daily or monthly Savings Plans utilization rate, and details for your account. Master accounts in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values. </p>
 */
export interface SavingsPlansUtilizationDetail {
  __type?: "SavingsPlansUtilizationDetail";
  /**
   * <p>The total amortized commitment for a Savings Plans. Includes the sum of the upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;

  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings from savings plans as well as the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * <p>The unique Amazon Resource Name (ARN) for a particular Savings Plan.</p>
   */
  SavingsPlanArn?: string;

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.</p>
   */
  Utilization?: SavingsPlansUtilization;
}

export namespace SavingsPlansUtilizationDetail {
  export const filterSensitiveLog = (
    obj: SavingsPlansUtilizationDetail
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SavingsPlansUtilizationDetail =>
    __isa(o, "SavingsPlansUtilizationDetail");
}

/**
 * <p>
 *             You've reached the limit on the number of resources you can create, or exceeded the size of an individual resources.
 *         </p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (
    obj: ServiceQuotaExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceQuotaExceededException =>
    __isa(o, "ServiceQuotaExceededException");
}

/**
 * <p>Hardware specifications for the service that you want recommendations
 *             for.</p>
 */
export interface ServiceSpecification {
  __type?: "ServiceSpecification";
  /**
   * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations
   *             for.</p>
   */
  EC2Specification?: EC2Specification;
}

export namespace ServiceSpecification {
  export const filterSensitiveLog = (obj: ServiceSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceSpecification =>
    __isa(o, "ServiceSpecification");
}

export enum SupportedSavingsPlansType {
  COMPUTE_SP = "COMPUTE_SP",
  EC2_INSTANCE_SP = "EC2_INSTANCE_SP"
}

/**
 * <p>The values that are available for a tag.</p>
 */
export interface TagValues {
  __type?: "TagValues";
  /**
   * <p>The key for the tag.</p>
   */
  Key?: string;

  /**
   * <p>The specific value of the tag.</p>
   */
  Values?: string[];
}

export namespace TagValues {
  export const filterSensitiveLog = (obj: TagValues): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagValues => __isa(o, "TagValues");
}

/**
 * <p> Details on recommended instance.</p>
 */
export interface TargetInstance {
  __type?: "TargetInstance";
  /**
   * <p> The currency code that Amazon Web Services used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p> Indicates whether or not this recommendation is the defaulted Amazon Web Services recommendation.</p>
   */
  DefaultTargetInstance?: boolean;

  /**
   * <p> Expected cost to operate this instance type on a monthly basis.</p>
   */
  EstimatedMonthlyCost?: string;

  /**
   * <p> Estimated savings resulting from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * <p> Expected utilization metrics for target instance type.</p>
   */
  ExpectedResourceUtilization?: ResourceUtilization;

  /**
   * <p> Details on the target instance type.  </p>
   */
  ResourceDetails?: ResourceDetails;
}

export namespace TargetInstance {
  export const filterSensitiveLog = (obj: TargetInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetInstance =>
    __isa(o, "TargetInstance");
}

/**
 * <p> Details on termination recommendation.  </p>
 */
export interface TerminateRecommendationDetail {
  __type?: "TerminateRecommendationDetail";
  /**
   * <p> The currency code that Amazon Web Services used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p> Estimated savings resulting from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;
}

export namespace TerminateRecommendationDetail {
  export const filterSensitiveLog = (
    obj: TerminateRecommendationDetail
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateRecommendationDetail =>
    __isa(o, "TerminateRecommendationDetail");
}

export enum TermInYears {
  ONE_YEAR = "ONE_YEAR",
  THREE_YEARS = "THREE_YEARS"
}

/**
 * <p>Cost Explorer was unable to identify the usage unit. Provide <code>UsageType/UsageTypeGroup</code> filter selections that contain matching units, for example: <code>hours</code>.</p>
 */
export interface UnresolvableUsageUnitException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnresolvableUsageUnitException";
  $fault: "client";
  Message?: string;
}

export namespace UnresolvableUsageUnitException {
  export const filterSensitiveLog = (
    obj: UnresolvableUsageUnitException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnresolvableUsageUnitException =>
    __isa(o, "UnresolvableUsageUnitException");
}

export interface UpdateCostCategoryDefinitionRequest {
  __type?: "UpdateCostCategoryDefinitionRequest";
  /**
   * <p>The unique identifier for your Cost Category.</p>
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | string | undefined;

  /**
   * <p>
   *             <code>UpdateCostCategoryDefinition</code> supports dimensions, Tags, and nested expressions. Currently the only dimensions supported is <code>LINKED_ACCOUNT</code>.</p>
   *          <p>Root level <code>OR</code> is not supported. We recommend you create a separate rule instead.</p>
   *          <p>Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
   *     </p>
   */
  Rules: CostCategoryRule[] | undefined;
}

export namespace UpdateCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (
    obj: UpdateCostCategoryDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCostCategoryDefinitionRequest =>
    __isa(o, "UpdateCostCategoryDefinitionRequest");
}

export interface UpdateCostCategoryDefinitionResponse {
  __type?: "UpdateCostCategoryDefinitionResponse";
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *       The Cost Category's effective start date.
   *     </p>
   */
  EffectiveStart?: string;
}

export namespace UpdateCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (
    obj: UpdateCostCategoryDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCostCategoryDefinitionResponse =>
    __isa(o, "UpdateCostCategoryDefinitionResponse");
}

/**
 * <p>The amount of utilization, in hours.</p>
 */
export interface UtilizationByTime {
  __type?: "UtilizationByTime";
  /**
   * <p>The groups that this utilization result uses.</p>
   */
  Groups?: ReservationUtilizationGroup[];

  /**
   * <p>The period of time that this utilization was used for.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The total number of reservation hours that were used.</p>
   */
  Total?: ReservationAggregates;
}

export namespace UtilizationByTime {
  export const filterSensitiveLog = (obj: UtilizationByTime): any => ({
    ...obj
  });
  export const isa = (o: any): o is UtilizationByTime =>
    __isa(o, "UtilizationByTime");
}
