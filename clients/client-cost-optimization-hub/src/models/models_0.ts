// smithy-typescript generated code
import type {
  ActionType,
  AllocationStrategy,
  Ec2AutoScalingGroupType,
  EnrollmentStatus,
  GranularityType,
  ImplementationEffort,
  MemberAccountDiscountVisibility,
  Order,
  PaymentOption,
  ResourceType,
  SavingsEstimationMode,
  Source,
  SummaryMetrics,
  Term,
} from "./enums";

/**
 * Describes the enrollment status of an organization's member accounts in Cost Optimization Hub.
 *
 * @public
 */
export interface AccountEnrollmentStatus {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The account enrollment status.
   *
   * @public
   */
  status?: EnrollmentStatus | undefined;

  /**
   * The time when the account enrollment status was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;

  /**
   * The time when the account enrollment status was created.
   *
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * The Aurora DB cluster storage configuration used for recommendations.
 *
 * @public
 */
export interface AuroraDbClusterStorageConfiguration {
  /**
   * The storage type to associate with the Aurora DB cluster.
   *
   * @public
   */
  storageType?: string | undefined;
}

/**
 * Estimated discount details of the current and recommended resource configuration for a recommendation.
 *
 * @public
 */
export interface EstimatedDiscounts {
  /**
   * Estimated Savings Plans discounts.
   *
   * @public
   */
  savingsPlansDiscount?: number | undefined;

  /**
   * Estimated reserved instance discounts.
   *
   * @public
   */
  reservedInstancesDiscount?: number | undefined;

  /**
   * Estimated other discounts include all discounts that are not itemized. Itemized discounts include `reservedInstanceDiscount` and `savingsPlansDiscount`.
   *
   * @public
   */
  otherDiscount?: number | undefined;
}

/**
 * Contains pricing information about the specified resource.
 *
 * @public
 */
export interface ResourcePricing {
  /**
   * The savings estimate using Amazon Web Services public pricing without incorporating any discounts.
   *
   * @public
   */
  estimatedCostBeforeDiscounts?: number | undefined;

  /**
   * The estimated net unused amortized commitment for the recommendation.
   *
   * @public
   */
  estimatedNetUnusedAmortizedCommitments?: number | undefined;

  /**
   * The estimated discounts for a recommendation.
   *
   * @public
   */
  estimatedDiscounts?: EstimatedDiscounts | undefined;

  /**
   * The savings estimate incorporating all discounts with Amazon Web Services, such as Reserved Instances and Savings Plans.
   *
   * @public
   */
  estimatedCostAfterDiscounts?: number | undefined;
}

/**
 * Details about the usage.
 *
 * @public
 */
export interface Usage {
  /**
   * The usage type.
   *
   * @public
   */
  usageType?: string | undefined;

  /**
   * The usage amount.
   *
   * @public
   */
  usageAmount?: number | undefined;

  /**
   * The operation value.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The product code.
   *
   * @public
   */
  productCode?: string | undefined;

  /**
   * The usage unit.
   *
   * @public
   */
  unit?: string | undefined;
}

/**
 * Cost impact of the resource recommendation.
 *
 * @public
 */
export interface ResourceCostCalculation {
  /**
   * Usage details of the resource recommendation.
   *
   * @public
   */
  usages?: Usage[] | undefined;

  /**
   * Pricing details of the resource recommendation.
   *
   * @public
   */
  pricing?: ResourcePricing | undefined;
}

/**
 * Contains the details of an Aurora DB cluster storage.
 *
 * @public
 */
export interface AuroraDbClusterStorage {
  /**
   * The Aurora DB cluster storage configuration used for recommendations.
   *
   * @public
   */
  configuration?: AuroraDbClusterStorageConfiguration | undefined;

  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * Describes the Amazon Elastic Block Store performance configuration of the current and recommended resource configuration for a recommendation.
 *
 * @public
 */
export interface BlockStoragePerformanceConfiguration {
  /**
   * The number of I/O operations per second.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput that the volume supports.
   *
   * @public
   */
  throughput?: number | undefined;
}

/**
 * Describes the performance configuration for compute services such as Amazon EC2, Lambda, and ECS.
 *
 * @public
 */
export interface ComputeConfiguration {
  /**
   * The number of vCPU cores in the resource.
   *
   * @public
   */
  vCpu?: number | undefined;

  /**
   * The memory size of the resource.
   *
   * @public
   */
  memorySizeInMB?: number | undefined;

  /**
   * The architecture of the resource.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The platform of the resource. The platform is the specific combination of operating system, license model, and software on an instance.
   *
   * @public
   */
  platform?: string | undefined;
}

/**
 * The Compute Savings Plans configuration used for recommendations.
 *
 * @public
 */
export interface ComputeSavingsPlansConfiguration {
  /**
   * The account scope for which you want recommendations. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to `PAYER`. If the value is `LINKED`, recommendations are calculated for individual member accounts only.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The Savings Plans recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The hourly commitment for the Savings Plans type.
   *
   * @public
   */
  hourlyCommitment?: string | undefined;
}

/**
 * Pricing information about a Savings Plans.
 *
 * @public
 */
export interface SavingsPlansPricing {
  /**
   * The cost of paying for the recommended Savings Plans monthly.
   *
   * @public
   */
  monthlySavingsPlansEligibleCost?: number | undefined;

  /**
   * Estimated monthly commitment for the Savings Plans.
   *
   * @public
   */
  estimatedMonthlyCommitment?: number | undefined;

  /**
   * Estimated savings as a percentage of your overall costs after buying the Savings Plans.
   *
   * @public
   */
  savingsPercentage?: number | undefined;

  /**
   * Estimated On-Demand cost you will pay after buying the Savings Plans.
   *
   * @public
   */
  estimatedOnDemandCost?: number | undefined;
}

/**
 * Cost impact of the purchase recommendation.
 *
 * @public
 */
export interface SavingsPlansCostCalculation {
  /**
   * Pricing details of the purchase recommendation.
   *
   * @public
   */
  pricing?: SavingsPlansPricing | undefined;
}

/**
 * The Compute Savings Plans recommendation details.
 *
 * @public
 */
export interface ComputeSavingsPlans {
  /**
   * Configuration details of the Compute Savings Plans to purchase.
   *
   * @public
   */
  configuration?: ComputeSavingsPlansConfiguration | undefined;

  /**
   * Cost impact of the Savings Plans purchase recommendation.
   *
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation | undefined;
}

/**
 * @public
 */
export interface GetPreferencesRequest {}

/**
 * The preferred configuration for Reserved Instances and Savings Plans commitment-based discounts, consisting of a payment option and a commitment duration.
 *
 * @public
 */
export interface PreferredCommitment {
  /**
   * The preferred length of the commitment period. If the value is null, it will default to `ThreeYears` (highest savings) where applicable.
   *
   * @public
   */
  term?: Term | undefined;

  /**
   * The preferred upfront payment structure for commitments. If the value is null, it will default to `AllUpfront` (highest savings) where applicable.
   *
   * @public
   */
  paymentOption?: PaymentOption | undefined;
}

/**
 * @public
 */
export interface GetPreferencesResponse {
  /**
   * Retrieves the status of the "savings estimation mode" preference.
   *
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;

  /**
   * Retrieves the status of the "member account discount visibility" preference.
   *
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility | undefined;

  /**
   * Retrieves the current preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.
   *
   * @public
   */
  preferredCommitment?: PreferredCommitment | undefined;
}

/**
 * The input failed to meet the constraints specified by the Amazon Web Services service in a specified field.
 *
 * @public
 */
export interface ValidationExceptionDetail {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * A message with the reason for the validation exception error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * The ID for the recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;
}

/**
 * The Amazon DocumentDB cluster recommendation details.
 *
 * @public
 */
export interface DocumentDbCluster {
  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The DynamoDB reserved capacity configuration used for recommendations.
 *
 * @public
 */
export interface DynamoDbReservedCapacityConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved capacity recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing this reserved capacity costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing this reserved capacity costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of reserved capacity units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfCapacityUnitsToPurchase?: string | undefined;

  /**
   * The capacity unit of the recommended reservation.
   *
   * @public
   */
  capacityUnits?: string | undefined;
}

/**
 * Pricing details for your recommended reserved instance.
 *
 * @public
 */
export interface ReservedInstancesPricing {
  /**
   * The remaining On-Demand cost estimated to not be covered by the recommended reserved instance, over the length of the lookback period.
   *
   * @public
   */
  estimatedOnDemandCost?: number | undefined;

  /**
   * The cost of paying for the recommended reserved instance monthly.
   *
   * @public
   */
  monthlyReservationEligibleCost?: number | undefined;

  /**
   * The savings percentage relative to the total On-Demand costs that are associated with this instance.
   *
   * @public
   */
  savingsPercentage?: number | undefined;

  /**
   * The estimated cost of your recurring monthly fees for the recommended reserved instance across the month.
   *
   * @public
   */
  estimatedMonthlyAmortizedReservationCost?: number | undefined;
}

/**
 * Cost impact of the purchase recommendation.
 *
 * @public
 */
export interface ReservedInstancesCostCalculation {
  /**
   * Pricing details of the purchase recommendation.
   *
   * @public
   */
  pricing?: ReservedInstancesPricing | undefined;
}

/**
 * The DynamoDB reserved capacity recommendation details.
 *
 * @public
 */
export interface DynamoDbReservedCapacity {
  /**
   * The DynamoDB reserved capacity configuration used for recommendations.
   *
   * @public
   */
  configuration?: DynamoDbReservedCapacityConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The DynamoDB table recommendation details.
 *
 * @public
 */
export interface DynamoDbTable {
  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The storage configuration used for recommendations.
 *
 * @public
 */
export interface StorageConfiguration {
  /**
   * The storage type.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The storage volume.
   *
   * @public
   */
  sizeInGb?: number | undefined;
}

/**
 * The Amazon Elastic Block Store volume configuration used for recommendations.
 *
 * @public
 */
export interface EbsVolumeConfiguration {
  /**
   * The disk storage of the Amazon Elastic Block Store volume.
   *
   * @public
   */
  storage?: StorageConfiguration | undefined;

  /**
   * The Amazon Elastic Block Store performance configuration.
   *
   * @public
   */
  performance?: BlockStoragePerformanceConfiguration | undefined;

  /**
   * The Amazon Elastic Block Store attachment state.
   *
   * @public
   */
  attachmentState?: string | undefined;
}

/**
 * Describes the Amazon Elastic Block Store volume configuration of the current and recommended resource configuration for a recommendation.
 *
 * @public
 */
export interface EbsVolume {
  /**
   * The Amazon Elastic Block Store volume configuration used for recommendations.
   *
   * @public
   */
  configuration?: EbsVolumeConfiguration | undefined;

  /**
   * Cost impact of the recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The instance configuration used for recommendations.
 *
 * @public
 */
export interface InstanceConfiguration {
  /**
   * The instance type of the configuration.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The configuration for the EC2 Auto Scaling group with mixed instance types.
 *
 * @public
 */
export interface MixedInstanceConfiguration {
  /**
   * The instance type of the configuration.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * The EC2 Auto Scaling group configuration used for recommendations.
 *
 * @public
 */
export interface Ec2AutoScalingGroupConfiguration {
  /**
   * Details about the instance for the EC2 Auto Scaling group with a single instance type.
   *
   * @public
   */
  instance?: InstanceConfiguration | undefined;

  /**
   * A list of instance types for an EC2 Auto Scaling group with mixed instance types.
   *
   * @public
   */
  mixedInstances?: MixedInstanceConfiguration[] | undefined;

  /**
   * The type of EC2 Auto Scaling group, showing whether it consists of a single instance type or mixed instance types.
   *
   * @public
   */
  type?: Ec2AutoScalingGroupType | undefined;

  /**
   * The strategy used for allocating instances, based on a predefined priority order or based on the lowest available price.
   *
   * @public
   */
  allocationStrategy?: AllocationStrategy | undefined;
}

/**
 * The EC2 Auto Scaling group recommendation details.
 *
 * @public
 */
export interface Ec2AutoScalingGroup {
  /**
   * The EC2 Auto Scaling group configuration used for recommendations.
   *
   * @public
   */
  configuration?: Ec2AutoScalingGroupConfiguration | undefined;

  /**
   * Cost impact of the recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The EC2 instance configuration used for recommendations.
 *
 * @public
 */
export interface Ec2InstanceConfiguration {
  /**
   * Details about the instance.
   *
   * @public
   */
  instance?: InstanceConfiguration | undefined;
}

/**
 * Describes the EC2 instance configuration of the current and recommended resource configuration for a recommendation.
 *
 * @public
 */
export interface Ec2Instance {
  /**
   * The EC2 instance configuration used for recommendations.
   *
   * @public
   */
  configuration?: Ec2InstanceConfiguration | undefined;

  /**
   * Cost impact of the recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The EC2 instance Savings Plans configuration used for recommendations.
 *
 * @public
 */
export interface Ec2InstanceSavingsPlansConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The Savings Plans recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The hourly commitment for the Savings Plans type.
   *
   * @public
   */
  hourlyCommitment?: string | undefined;

  /**
   * The instance family of the recommended Savings Plans.
   *
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  savingsPlansRegion?: string | undefined;
}

/**
 * The EC2 instance Savings Plans recommendation details.
 *
 * @public
 */
export interface Ec2InstanceSavingsPlans {
  /**
   * The EC2 instance Savings Plans configuration used for recommendations.
   *
   * @public
   */
  configuration?: Ec2InstanceSavingsPlansConfiguration | undefined;

  /**
   * Cost impact of the Savings Plans purchase recommendation.
   *
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation | undefined;
}

/**
 * The EC2 reserved instances configuration used for recommendations.
 *
 * @public
 */
export interface Ec2ReservedInstancesConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved instances recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing this instance costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing these reserved instances costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * Indicates whether the recommendation is for standard or convertible reservations.
   *
   * @public
   */
  offeringClass?: string | undefined;

  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * Determines whether the recommended reservation is dedicated or shared.
   *
   * @public
   */
  tenancy?: string | undefined;

  /**
   * Determines whether the recommendation is size flexible.
   *
   * @public
   */
  sizeFlexEligible?: boolean | undefined;
}

/**
 * The EC2 reserved instances recommendation details.
 *
 * @public
 */
export interface Ec2ReservedInstances {
  /**
   * The EC2 reserved instances configuration used for recommendations.
   *
   * @public
   */
  configuration?: Ec2ReservedInstancesConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The ECS service configuration used for recommendations.
 *
 * @public
 */
export interface EcsServiceConfiguration {
  /**
   * Details about the compute configuration.
   *
   * @public
   */
  compute?: ComputeConfiguration | undefined;
}

/**
 * The ECS service recommendation details.
 *
 * @public
 */
export interface EcsService {
  /**
   * The ECS service configuration used for recommendations.
   *
   * @public
   */
  configuration?: EcsServiceConfiguration | undefined;

  /**
   * Cost impact of the recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The ElastiCache cluster recommendation details.
 *
 * @public
 */
export interface ElastiCacheCluster {
  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The ElastiCache reserved instances configuration used for recommendations.
 *
 * @public
 */
export interface ElastiCacheReservedInstancesConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved instances recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing this instance costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing these reserved instances costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * Determines whether the recommendation is size flexible.
   *
   * @public
   */
  sizeFlexEligible?: boolean | undefined;
}

/**
 * The ElastiCache reserved instances recommendation details.
 *
 * @public
 */
export interface ElastiCacheReservedInstances {
  /**
   * The ElastiCache reserved instances configuration used for recommendations.
   *
   * @public
   */
  configuration?: ElastiCacheReservedInstancesConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The Lambda function configuration used for recommendations.
 *
 * @public
 */
export interface LambdaFunctionConfiguration {
  /**
   * Details about the compute configuration.
   *
   * @public
   */
  compute?: ComputeConfiguration | undefined;
}

/**
 * The Lambda function recommendation details.
 *
 * @public
 */
export interface LambdaFunction {
  /**
   * The Lambda function configuration used for recommendations.
   *
   * @public
   */
  configuration?: LambdaFunctionConfiguration | undefined;

  /**
   * Cost impact of the recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The MemoryDB cluster recommendation details.
 *
 * @public
 */
export interface MemoryDbCluster {
  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The MemoryDB reserved instances configuration used for recommendations.
 *
 * > **Note:** While the API reference uses "MemoryDB reserved instances", the user guide and other documentation refer to them as "MemoryDB reserved nodes", as the terms are used interchangeably.
 *
 * @public
 */
export interface MemoryDbReservedInstancesConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved instances recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing these reserved instances costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing these reserved instances costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * Determines whether the recommendation is size flexible.
   *
   * @public
   */
  sizeFlexEligible?: boolean | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  currentGeneration?: string | undefined;
}

/**
 * The MemoryDB reserved instances recommendation details.
 *
 * > **Note:** While the API reference uses "MemoryDB reserved instances", the user guide and other documentation refer to them as "MemoryDB reserved nodes", as the terms are used interchangeably.
 *
 * @public
 */
export interface MemoryDbReservedInstances {
  /**
   * The MemoryDB reserved instances configuration used for recommendations.
   *
   * @public
   */
  configuration?: MemoryDbReservedInstancesConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The NAT Gateway configuration used for recommendations.
 *
 * @public
 */
export interface NatGatewayConfiguration {
  /**
   * The number of active connections through the NAT Gateway.
   *
   * @public
   */
  activeConnectionCount?: number | undefined;

  /**
   * The number of packets received from the source through the NAT Gateway.
   *
   * @public
   */
  packetsInFromSource?: number | undefined;

  /**
   * The number of packets received from the destination through the NAT Gateway.
   *
   * @public
   */
  packetsInFromDestination?: number | undefined;
}

/**
 * The NAT Gateway recommendation details.
 *
 * @public
 */
export interface NatGateway {
  /**
   * The NAT Gateway configuration used for recommendations.
   *
   * @public
   */
  configuration?: NatGatewayConfiguration | undefined;

  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The OpenSearch reserved instances configuration used for recommendations.
 *
 * @public
 */
export interface OpenSearchReservedInstancesConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved instances recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing this instance costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing these reserved instances costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * Determines whether the recommendation is size flexible.
   *
   * @public
   */
  sizeFlexEligible?: boolean | undefined;
}

/**
 * The OpenSearch reserved instances recommendation details.
 *
 * @public
 */
export interface OpenSearchReservedInstances {
  /**
   * The OpenSearch reserved instances configuration used for recommendations.
   *
   * @public
   */
  configuration?: OpenSearchReservedInstancesConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The DB instance configuration used for recommendations.
 *
 * @public
 */
export interface DbInstanceConfiguration {
  /**
   * The DB instance class of the DB instance.
   *
   * @public
   */
  dbInstanceClass?: string | undefined;
}

/**
 * The Amazon RDS DB instance configuration used for recommendations.
 *
 * @public
 */
export interface RdsDbInstanceConfiguration {
  /**
   * Details about the instance configuration.
   *
   * @public
   */
  instance?: DbInstanceConfiguration | undefined;
}

/**
 * Contains the details of an Amazon RDS DB instance.
 *
 * @public
 */
export interface RdsDbInstance {
  /**
   * The Amazon RDS DB instance configuration used for recommendations.
   *
   * @public
   */
  configuration?: RdsDbInstanceConfiguration | undefined;

  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The Amazon RDS DB instance storage configuration used for recommendations.
 *
 * @public
 */
export interface RdsDbInstanceStorageConfiguration {
  /**
   * The storage type to associate with the DB instance.
   *
   * @public
   */
  storageType?: string | undefined;

  /**
   * The new amount of storage in GB to allocate for the DB instance.
   *
   * @public
   */
  allocatedStorageInGb?: number | undefined;

  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The storage throughput for the DB instance.
   *
   * @public
   */
  storageThroughput?: number | undefined;
}

/**
 * Contains the details of an Amazon RDS DB instance storage.
 *
 * @public
 */
export interface RdsDbInstanceStorage {
  /**
   * The Amazon RDS DB instance storage configuration used for recommendations.
   *
   * @public
   */
  configuration?: RdsDbInstanceStorageConfiguration | undefined;

  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The RDS reserved instances configuration used for recommendations.
 *
 * @public
 */
export interface RdsReservedInstancesConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved instances recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing this instance costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing this instance costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Determines whether the recommendation is size flexible.
   *
   * @public
   */
  sizeFlexEligible?: boolean | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * The license model that the recommended reservation supports.
   *
   * @public
   */
  licenseModel?: string | undefined;

  /**
   * The database edition that the recommended reservation supports.
   *
   * @public
   */
  databaseEdition?: string | undefined;

  /**
   * The database engine that the recommended reservation supports.
   *
   * @public
   */
  databaseEngine?: string | undefined;

  /**
   * Determines whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.
   *
   * @public
   */
  deploymentOption?: string | undefined;
}

/**
 * The RDS reserved instances recommendation details.
 *
 * @public
 */
export interface RdsReservedInstances {
  /**
   * The RDS reserved instances configuration used for recommendations.
   *
   * @public
   */
  configuration?: RdsReservedInstancesConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The Redshift reserved instances configuration used for recommendations.
 *
 * @public
 */
export interface RedshiftReservedInstancesConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The service for which you want recommendations.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The reserved instances recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The Amazon Web Services Region of the commitment.
   *
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * How much purchasing this instance costs you upfront.
   *
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * How much purchasing these reserved instances costs you on a monthly basis.
   *
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Determines whether the recommendation is size flexible.
   *
   * @public
   */
  sizeFlexEligible?: boolean | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  currentGeneration?: string | undefined;
}

/**
 * The Redshift reserved instances recommendation details.
 *
 * @public
 */
export interface RedshiftReservedInstances {
  /**
   * The Redshift reserved instances configuration used for recommendations.
   *
   * @public
   */
  configuration?: RedshiftReservedInstancesConfiguration | undefined;

  /**
   * Cost impact of the purchase recommendation.
   *
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * The SageMaker endpoint recommendation details.
 *
 * @public
 */
export interface SageMakerEndpoint {
  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * The SageMaker Savings Plans configuration used for recommendations.
 *
 * @public
 */
export interface SageMakerSavingsPlansConfiguration {
  /**
   * The account scope for which you want recommendations.
   *
   * @public
   */
  accountScope?: string | undefined;

  /**
   * The Savings Plans recommendation term in years.
   *
   * @public
   */
  term?: string | undefined;

  /**
   * The payment option for the commitment.
   *
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * The hourly commitment for the Savings Plans type.
   *
   * @public
   */
  hourlyCommitment?: string | undefined;
}

/**
 * The SageMaker Savings Plans recommendation details.
 *
 * @public
 */
export interface SageMakerSavingsPlans {
  /**
   * The SageMaker Savings Plans configuration used for recommendations.
   *
   * @public
   */
  configuration?: SageMakerSavingsPlansConfiguration | undefined;

  /**
   * Cost impact of the Savings Plans purchase recommendation.
   *
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation | undefined;
}

/**
 * The WorkSpaces recommendation details.
 *
 * @public
 */
export interface WorkSpaces {
  /**
   * Cost impact of the resource recommendation.
   *
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * Contains detailed information about the specified resource.
 *
 * @public
 */
export type ResourceDetails =
  | ResourceDetails.AuroraDbClusterStorageMember
  | ResourceDetails.ComputeSavingsPlansMember
  | ResourceDetails.DocumentDbClusterMember
  | ResourceDetails.DynamoDbReservedCapacityMember
  | ResourceDetails.DynamoDbTableMember
  | ResourceDetails.EbsVolumeMember
  | ResourceDetails.Ec2AutoScalingGroupMember
  | ResourceDetails.Ec2InstanceMember
  | ResourceDetails.Ec2InstanceSavingsPlansMember
  | ResourceDetails.Ec2ReservedInstancesMember
  | ResourceDetails.EcsServiceMember
  | ResourceDetails.ElastiCacheClusterMember
  | ResourceDetails.ElastiCacheReservedInstancesMember
  | ResourceDetails.LambdaFunctionMember
  | ResourceDetails.MemoryDbClusterMember
  | ResourceDetails.MemoryDbReservedInstancesMember
  | ResourceDetails.NatGatewayMember
  | ResourceDetails.OpenSearchReservedInstancesMember
  | ResourceDetails.RdsDbInstanceMember
  | ResourceDetails.RdsDbInstanceStorageMember
  | ResourceDetails.RdsReservedInstancesMember
  | ResourceDetails.RedshiftReservedInstancesMember
  | ResourceDetails.SageMakerEndpointMember
  | ResourceDetails.SageMakerSavingsPlansMember
  | ResourceDetails.WorkSpacesMember
  | ResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace ResourceDetails {
  /**
   * The Lambda function recommendation details.
   *
   * @public
   */
  export interface LambdaFunctionMember {
    lambdaFunction: LambdaFunction;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The ECS service recommendation details.
   *
   * @public
   */
  export interface EcsServiceMember {
    lambdaFunction?: never;
    ecsService: EcsService;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The EC2 instance recommendation details.
   *
   * @public
   */
  export interface Ec2InstanceMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance: Ec2Instance;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Elastic Block Store volume recommendation details.
   *
   * @public
   */
  export interface EbsVolumeMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume: EbsVolume;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The EC2 Auto Scaling group recommendation details.
   *
   * @public
   */
  export interface Ec2AutoScalingGroupMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup: Ec2AutoScalingGroup;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The EC2 reserved instances recommendation details.
   *
   * @public
   */
  export interface Ec2ReservedInstancesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances: Ec2ReservedInstances;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The RDS reserved instances recommendation details.
   *
   * @public
   */
  export interface RdsReservedInstancesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances: RdsReservedInstances;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The ElastiCache reserved instances recommendation details.
   *
   * @public
   */
  export interface ElastiCacheReservedInstancesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances: ElastiCacheReservedInstances;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The OpenSearch reserved instances recommendation details.
   *
   * @public
   */
  export interface OpenSearchReservedInstancesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances: OpenSearchReservedInstances;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The Redshift reserved instances recommendation details.
   *
   * @public
   */
  export interface RedshiftReservedInstancesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances: RedshiftReservedInstances;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The EC2 instance Savings Plans recommendation details.
   *
   * @public
   */
  export interface Ec2InstanceSavingsPlansMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans: Ec2InstanceSavingsPlans;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The Compute Savings Plans recommendation details.
   *
   * @public
   */
  export interface ComputeSavingsPlansMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans: ComputeSavingsPlans;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The SageMaker AI Savings Plans recommendation details.
   *
   * @public
   */
  export interface SageMakerSavingsPlansMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans: SageMakerSavingsPlans;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The DB instance recommendation details.
   *
   * @public
   */
  export interface RdsDbInstanceMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance: RdsDbInstance;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The DB instance storage recommendation details.
   *
   * @public
   */
  export interface RdsDbInstanceStorageMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage: RdsDbInstanceStorage;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The Aurora DB cluster storage recommendation details.
   *
   * @public
   */
  export interface AuroraDbClusterStorageMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage: AuroraDbClusterStorage;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The DynamoDB reserved capacity recommendation details.
   *
   * @public
   */
  export interface DynamoDbReservedCapacityMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity: DynamoDbReservedCapacity;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The MemoryDB reserved instances recommendation details.
   *
   * @public
   */
  export interface MemoryDbReservedInstancesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances: MemoryDbReservedInstances;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The NAT Gateway recommendation details.
   *
   * @public
   */
  export interface NatGatewayMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway: NatGateway;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The DynamoDB table recommendation details.
   *
   * @public
   */
  export interface DynamoDbTableMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable: DynamoDbTable;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The ElastiCache cluster recommendation details.
   *
   * @public
   */
  export interface ElastiCacheClusterMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster: ElastiCacheCluster;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The MemoryDB cluster recommendation details.
   *
   * @public
   */
  export interface MemoryDbClusterMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster: MemoryDbCluster;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The Amazon DocumentDB cluster recommendation details.
   *
   * @public
   */
  export interface DocumentDbClusterMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster: DocumentDbCluster;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The WorkSpaces recommendation details.
   *
   * @public
   */
  export interface WorkSpacesMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces: WorkSpaces;
    sageMakerEndpoint?: never;
    $unknown?: never;
  }

  /**
   * The SageMaker endpoint recommendation details.
   *
   * @public
   */
  export interface SageMakerEndpointMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint: SageMakerEndpoint;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambdaFunction?: never;
    ecsService?: never;
    ec2Instance?: never;
    ebsVolume?: never;
    ec2AutoScalingGroup?: never;
    ec2ReservedInstances?: never;
    rdsReservedInstances?: never;
    elastiCacheReservedInstances?: never;
    openSearchReservedInstances?: never;
    redshiftReservedInstances?: never;
    ec2InstanceSavingsPlans?: never;
    computeSavingsPlans?: never;
    sageMakerSavingsPlans?: never;
    rdsDbInstance?: never;
    rdsDbInstanceStorage?: never;
    auroraDbClusterStorage?: never;
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    natGateway?: never;
    dynamoDbTable?: never;
    elastiCacheCluster?: never;
    memoryDbCluster?: never;
    documentDbCluster?: never;
    workSpaces?: never;
    sageMakerEndpoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambdaFunction: (value: LambdaFunction) => T;
    ecsService: (value: EcsService) => T;
    ec2Instance: (value: Ec2Instance) => T;
    ebsVolume: (value: EbsVolume) => T;
    ec2AutoScalingGroup: (value: Ec2AutoScalingGroup) => T;
    ec2ReservedInstances: (value: Ec2ReservedInstances) => T;
    rdsReservedInstances: (value: RdsReservedInstances) => T;
    elastiCacheReservedInstances: (value: ElastiCacheReservedInstances) => T;
    openSearchReservedInstances: (value: OpenSearchReservedInstances) => T;
    redshiftReservedInstances: (value: RedshiftReservedInstances) => T;
    ec2InstanceSavingsPlans: (value: Ec2InstanceSavingsPlans) => T;
    computeSavingsPlans: (value: ComputeSavingsPlans) => T;
    sageMakerSavingsPlans: (value: SageMakerSavingsPlans) => T;
    rdsDbInstance: (value: RdsDbInstance) => T;
    rdsDbInstanceStorage: (value: RdsDbInstanceStorage) => T;
    auroraDbClusterStorage: (value: AuroraDbClusterStorage) => T;
    dynamoDbReservedCapacity: (value: DynamoDbReservedCapacity) => T;
    memoryDbReservedInstances: (value: MemoryDbReservedInstances) => T;
    natGateway: (value: NatGateway) => T;
    dynamoDbTable: (value: DynamoDbTable) => T;
    elastiCacheCluster: (value: ElastiCacheCluster) => T;
    memoryDbCluster: (value: MemoryDbCluster) => T;
    documentDbCluster: (value: DocumentDbCluster) => T;
    workSpaces: (value: WorkSpaces) => T;
    sageMakerEndpoint: (value: SageMakerEndpoint) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The tag structure that contains a tag key and value.
 *
 * @public
 */
export interface Tag {
  /**
   * The key that's associated with the tag.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value that's associated with the tag.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * The ID for the recommendation.
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * The unique identifier for the resource. This is the same as the Amazon Resource Name (ARN), if available.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The account to which the recommendation applies.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The currency code used for the recommendation.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The lookback period that's used to generate the recommendation.
   *
   * @public
   */
  recommendationLookbackPeriodInDays?: number | undefined;

  /**
   * The lookback period used to calculate cost impact for a recommendation.
   *
   * @public
   */
  costCalculationLookbackPeriodInDays?: number | undefined;

  /**
   * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
   *
   * @public
   */
  estimatedSavingsPercentage?: number | undefined;

  /**
   * The estimated savings amount over the lookback period used to calculate cost impact for a recommendation.
   *
   * @public
   */
  estimatedSavingsOverCostCalculationLookbackPeriod?: number | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  currentResourceType?: ResourceType | undefined;

  /**
   * The resource type of the recommendation.
   *
   * @public
   */
  recommendedResourceType?: ResourceType | undefined;

  /**
   * The Amazon Web Services Region of the resource.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The source of the recommendation.
   *
   * @public
   */
  source?: Source | undefined;

  /**
   * The time when the recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The estimated monthly savings amount for the recommendation.
   *
   * @public
   */
  estimatedMonthlySavings?: number | undefined;

  /**
   * The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.
   *
   * @public
   */
  estimatedMonthlyCost?: number | undefined;

  /**
   * The effort required to implement the recommendation.
   *
   * @public
   */
  implementationEffort?: ImplementationEffort | undefined;

  /**
   * Whether or not implementing the recommendation requires a restart.
   *
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * The type of action you can take by adopting the recommendation.
   *
   * @public
   */
  actionType?: ActionType | undefined;

  /**
   * Whether or not implementing the recommendation can be rolled back.
   *
   * @public
   */
  rollbackPossible?: boolean | undefined;

  /**
   * The details for the resource.
   *
   * @public
   */
  currentResourceDetails?: ResourceDetails | undefined;

  /**
   * The details about the recommended resource.
   *
   * @public
   */
  recommendedResourceDetails?: ResourceDetails | undefined;

  /**
   * A list of tags associated with the resource for which the recommendation exists.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Defines how rows will be sorted in the response.
 *
 * @public
 */
export interface OrderBy {
  /**
   * Sorts by dimension values.
   *
   * @public
   */
  dimension?: string | undefined;

  /**
   * The order that's used to sort the data.
   *
   * @public
   */
  order?: Order | undefined;
}

/**
 * Specifies a date range for retrieving efficiency metrics. The start date is inclusive and the end date is exclusive.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * The beginning of the time period (inclusive). Specify the date in ISO 8601 format, such as 2024-01-01.
   *
   * @public
   */
  start: string | undefined;

  /**
   * The end of the time period (exclusive). Specify the date in ISO 8601 format, such as 2024-12-31.
   *
   * @public
   */
  end: string | undefined;
}

/**
 * @public
 */
export interface ListEfficiencyMetricsRequest {
  /**
   * The dimension by which to group the cost efficiency metrics. Valid values include account ID, Amazon Web Services Region. When no grouping is specified, metrics are aggregated across all resources in the specified time period.
   *
   * @public
   */
  groupBy?: string | undefined;

  /**
   * The time granularity for the cost efficiency metrics. Specify `Daily` for metrics aggregated by day, or `Monthly` for metrics aggregated by month.
   *
   * @public
   */
  granularity: GranularityType | undefined;

  /**
   * The time period for which to retrieve the cost efficiency metrics. The start date is inclusive and the end date is exclusive. Dates can be specified in either YYYY-MM-DD format or YYYY-MM format depending on the desired granularity.
   *
   * @public
   */
  timePeriod: TimePeriod | undefined;

  /**
   * The maximum number of groups to return in the response. Valid values range from 0 to 1000. Use in conjunction with `nextToken` to paginate through results when the total number of groups exceeds this limit.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The ordering specification for the results. Defines which dimension to sort by and whether to sort in ascending or descending order.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned in the response when the number of groups exceeds the specified `maxResults` value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains efficiency metrics for a specific point in time, including an efficiency score, potential savings, optimizable spend, and timestamp.
 *
 * @public
 */
export interface MetricsByTime {
  /**
   * The efficiency score for this time period. The score represents a measure of how effectively the cloud resources are being optimized, with higher scores indicating better optimization performance.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * The estimated savings amount for this time period, representing the potential cost reduction achieved through optimization recommendations.
   *
   * @public
   */
  savings?: number | undefined;

  /**
   * The total spending amount for this time period.
   *
   * @public
   */
  spend?: number | undefined;

  /**
   * The timestamp for this data point. The format depends on the granularity: YYYY-MM-DD for daily metrics, or YYYY-MM for monthly metrics.
   *
   * @public
   */
  timestamp?: string | undefined;
}

/**
 * Contains cost efficiency metrics for a specific group over time. The group is defined by the grouping dimension specified in the request, such as account ID, Amazon Web Services Region.
 *
 * @public
 */
export interface EfficiencyMetricsByGroup {
  /**
   * A list of time-series data points containing efficiency metrics for this group. Each data point includes an efficiency score, estimated savings, spending, and a timestamp corresponding to the specified granularity. This field is null when efficiency metrics cannot be calculated for the group, in which case the message field provides an explanation.
   *
   * @public
   */
  metricsByTime?: MetricsByTime[] | undefined;

  /**
   * The value of the grouping dimension for this set of metrics. For example, if grouped by account ID, this field contains the account ID. If no grouping is specified, this field is empty.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * An explanation of why efficiency metrics could not be calculated for this group when the metricsByTime field is null. Common reasons include insufficient or inconclusive cost and usage data during the specified time period. This field is null or empty when metrics are successfully calculated.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListEfficiencyMetricsResponse {
  /**
   * A list of cost efficiency metrics grouped by the specified dimension. Each group contains time-series data points with cost efficiency, potential savings, and optimzable spend for the specified time period.
   *
   * @public
   */
  efficiencyMetricsByGroup?: EfficiencyMetricsByGroup[] | undefined;

  /**
   * The token to retrieve the next page of results. When this value is present in the response, additional groups are available. Pass this token in the `nextToken` parameter of a subsequent request to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnrollmentStatusesRequest {
  /**
   * Indicates whether to return the enrollment status for the organization.
   *
   * @public
   */
  includeOrganizationInfo?: boolean | undefined;

  /**
   * The account ID of a member account in the organization.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects that are returned for the request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnrollmentStatusesResponse {
  /**
   * The enrollment status of a specific account ID, including creation and last updated timestamps.
   *
   * @public
   */
  items?: AccountEnrollmentStatus[] | undefined;

  /**
   * The enrollment status of all member accounts in the organization if the account is the management account or delegated administrator.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes a filter that returns a more specific list of recommendations. Filters recommendations by different dimensions.
 *
 * @public
 */
export interface Filter {
  /**
   * Whether or not implementing the recommendation requires a restart.
   *
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * Whether or not implementing the recommendation can be rolled back.
   *
   * @public
   */
  rollbackPossible?: boolean | undefined;

  /**
   * The effort required to implement the recommendation.
   *
   * @public
   */
  implementationEfforts?: ImplementationEffort[] | undefined;

  /**
   * The account to which the recommendation applies.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The Amazon Web Services Region of the resource.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The resource type of the recommendation.
   *
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;

  /**
   * The type of action you can take by adopting the recommendation.
   *
   * @public
   */
  actionTypes?: ActionType[] | undefined;

  /**
   * A list of tags assigned to the recommendation.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The resource ID of the recommendation.
   *
   * @public
   */
  resourceIds?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommendation.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The IDs for the recommendations.
   *
   * @public
   */
  recommendationIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * The constraints that you want all returned recommendations to match.
   *
   * @public
   */
  filter?: Filter | undefined;

  /**
   * The ordering of recommendations by a dimension.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * List of all recommendations for a resource, or a single recommendation if de-duped by `resourceId`.
   *
   * @public
   */
  includeAllRecommendations?: boolean | undefined;

  /**
   * The maximum number of recommendations that are returned for the request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes a recommendation.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The ID for the recommendation.
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * The account to which the recommendation applies.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Web Services Region of the resource.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The resource ID for the recommendation.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the recommendation.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The current resource type.
   *
   * @public
   */
  currentResourceType?: string | undefined;

  /**
   * The recommended resource type.
   *
   * @public
   */
  recommendedResourceType?: string | undefined;

  /**
   * The estimated monthly savings amount for the recommendation.
   *
   * @public
   */
  estimatedMonthlySavings?: number | undefined;

  /**
   * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
   *
   * @public
   */
  estimatedSavingsPercentage?: number | undefined;

  /**
   * The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.
   *
   * @public
   */
  estimatedMonthlyCost?: number | undefined;

  /**
   * The currency code used for the recommendation.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The effort required to implement the recommendation.
   *
   * @public
   */
  implementationEffort?: string | undefined;

  /**
   * Whether or not implementing the recommendation requires a restart.
   *
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * The type of tasks that can be carried out by this action.
   *
   * @public
   */
  actionType?: string | undefined;

  /**
   * Whether or not implementing the recommendation can be rolled back.
   *
   * @public
   */
  rollbackPossible?: boolean | undefined;

  /**
   * Describes the current resource.
   *
   * @public
   */
  currentResourceSummary?: string | undefined;

  /**
   * Describes the recommended resource.
   *
   * @public
   */
  recommendedResourceSummary?: string | undefined;

  /**
   * The time when the recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The lookback period that's used to generate the recommendation.
   *
   * @public
   */
  recommendationLookbackPeriodInDays?: number | undefined;

  /**
   * The source of the recommendation.
   *
   * @public
   */
  source?: Source | undefined;

  /**
   * A list of tags assigned to the recommendation.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * List of all savings recommendations.
   *
   * @public
   */
  items?: Recommendation[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationSummariesRequest {
  /**
   * Describes a filter that returns a more specific list of recommendations. Filters recommendations by different dimensions.
   *
   * @public
   */
  filter?: Filter | undefined;

  /**
   * The grouping of recommendations by a dimension.
   *
   * @public
   */
  groupBy: string | undefined;

  /**
   * The maximum number of recommendations to be returned for the request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Additional metrics to be returned for the request. The only valid value is `savingsPercentage`.
   *
   * @public
   */
  metrics?: SummaryMetrics[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of rightsizing recommendations, including de-duped savings from all types of recommendations.
 *
 * @public
 */
export interface RecommendationSummary {
  /**
   * The grouping of recommendations.
   *
   * @public
   */
  group?: string | undefined;

  /**
   * The estimated total savings resulting from modifications, on a monthly basis.
   *
   * @public
   */
  estimatedMonthlySavings?: number | undefined;

  /**
   * The total number of instance recommendations.
   *
   * @public
   */
  recommendationCount?: number | undefined;
}

/**
 * The results or descriptions for the additional metrics, based on whether the metrics were or were not requested.
 *
 * @public
 */
export interface SummaryMetricsResult {
  /**
   * The savings percentage based on your Amazon Web Services spend over the past 30 days.
   *
   * > **Note:** Savings percentage is only supported when filtering by Region, account ID, or tags.
   *
   * @public
   */
  savingsPercentage?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationSummariesResponse {
  /**
   * The total overall savings for the aggregated view.
   *
   * @public
   */
  estimatedTotalDedupedSavings?: number | undefined;

  /**
   * A list of all savings recommendations.
   *
   * @public
   */
  items?: RecommendationSummary[] | undefined;

  /**
   * The dimension used to group the recommendations by.
   *
   * @public
   */
  groupBy?: string | undefined;

  /**
   * The currency code used for the recommendation.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * The results or descriptions for the additional metrics, based on whether the metrics were or were not requested.
   *
   * @public
   */
  metrics?: SummaryMetricsResult | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusRequest {
  /**
   * Sets the account status.
   *
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * Indicates whether to enroll member accounts of the organization if the account is the management account or delegated administrator.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * The enrollment status of the account.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePreferencesRequest {
  /**
   * Sets the "savings estimation mode" preference.
   *
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;

  /**
   * Sets the "member account discount visibility" preference.
   *
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility | undefined;

  /**
   * Sets the preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.
   *
   * @public
   */
  preferredCommitment?: PreferredCommitment | undefined;
}

/**
 * @public
 */
export interface UpdatePreferencesResponse {
  /**
   * Shows the status of the "savings estimation mode" preference.
   *
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;

  /**
   * Shows the status of the "member account discount visibility" preference.
   *
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility | undefined;

  /**
   * Shows the updated preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.
   *
   * @public
   */
  preferredCommitment?: PreferredCommitment | undefined;
}
