// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CostOptimizationHubServiceException as __BaseException } from "./CostOptimizationHubServiceException";

/**
 * <p>You are not authorized to use this operation with the given parameters.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const EnrollmentStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];

/**
 * <p>Describes the enrollment status of an organization's member accounts in Cost Optimization Hub.</p>
 * @public
 */
export interface AccountEnrollmentStatus {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The account enrollment status.</p>
   * @public
   */
  status?: EnrollmentStatus | undefined;

  /**
   * <p>The time when the account enrollment status was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The time when the account enrollment status was created.</p>
   * @public
   */
  createdTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ActionType = {
  DELETE: "Delete",
  MIGRATE_TO_GRAVITON: "MigrateToGraviton",
  PURCHASE_RESERVED_INSTANCES: "PurchaseReservedInstances",
  PURCHASE_SAVINGS_PLANS: "PurchaseSavingsPlans",
  RIGHTSIZE: "Rightsize",
  SCALE_IN: "ScaleIn",
  STOP: "Stop",
  UPGRADE: "Upgrade",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const AllocationStrategy = {
  LOWEST_PRICE: "LowestPrice",
  PRIORITIZED: "Prioritized",
} as const;

/**
 * @public
 */
export type AllocationStrategy = (typeof AllocationStrategy)[keyof typeof AllocationStrategy];

/**
 * <p>Describes the Amazon Elastic Block Store performance configuration of the current and recommended resource configuration for a recommendation.</p>
 * @public
 */
export interface BlockStoragePerformanceConfiguration {
  /**
   * <p>The number of I/O operations per second.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The throughput that the volume supports.</p>
   * @public
   */
  throughput?: number | undefined;
}

/**
 * <p>Describes the performance configuration for compute services such as Amazon EC2, Lambda, and ECS.</p>
 * @public
 */
export interface ComputeConfiguration {
  /**
   * <p>The number of vCPU cores in the resource.</p>
   * @public
   */
  vCpu?: number | undefined;

  /**
   * <p>The memory size of the resource.</p>
   * @public
   */
  memorySizeInMB?: number | undefined;

  /**
   * <p>The architecture of the resource.</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The platform of the resource. The platform is the specific combination of operating system, license model, and software on an instance.</p>
   * @public
   */
  platform?: string | undefined;
}

/**
 * <p>The Compute Savings Plans configuration used for recommendations.</p>
 * @public
 */
export interface ComputeSavingsPlansConfiguration {
  /**
   * <p>The account scope for which you want recommendations. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The Savings Plans recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The hourly commitment for the Savings Plans type.</p>
   * @public
   */
  hourlyCommitment?: string | undefined;
}

/**
 * <p>Pricing information about a Savings Plan.</p>
 * @public
 */
export interface SavingsPlansPricing {
  /**
   * <p>The cost of paying for the recommended Savings Plan monthly.</p>
   * @public
   */
  monthlySavingsPlansEligibleCost?: number | undefined;

  /**
   * <p>Estimated monthly commitment for the Savings Plan.</p>
   * @public
   */
  estimatedMonthlyCommitment?: number | undefined;

  /**
   * <p>Estimated savings as a percentage of your overall costs after buying the Savings Plan.</p>
   * @public
   */
  savingsPercentage?: number | undefined;

  /**
   * <p>Estimated On-Demand cost you will pay after buying the Savings Plan.</p>
   * @public
   */
  estimatedOnDemandCost?: number | undefined;
}

/**
 * <p>Cost impact of the purchase recommendation.</p>
 * @public
 */
export interface SavingsPlansCostCalculation {
  /**
   * <p>Pricing details of the purchase recommendation.</p>
   * @public
   */
  pricing?: SavingsPlansPricing | undefined;
}

/**
 * <p>The Compute Savings Plans recommendation details.</p>
 * @public
 */
export interface ComputeSavingsPlans {
  /**
   * <p>Configuration details of the Compute Savings Plans to purchase.</p>
   * @public
   */
  configuration?: ComputeSavingsPlansConfiguration | undefined;

  /**
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation | undefined;
}

/**
 * @public
 */
export interface GetPreferencesRequest {}

/**
 * @public
 * @enum
 */
export const MemberAccountDiscountVisibility = {
  ALL: "All",
  NONE: "None",
} as const;

/**
 * @public
 */
export type MemberAccountDiscountVisibility =
  (typeof MemberAccountDiscountVisibility)[keyof typeof MemberAccountDiscountVisibility];

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "AllUpfront",
  NO_UPFRONT: "NoUpfront",
  PARTIAL_UPFRONT: "PartialUpfront",
} as const;

/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const Term = {
  ONE_YEAR: "OneYear",
  THREE_YEARS: "ThreeYears",
} as const;

/**
 * @public
 */
export type Term = (typeof Term)[keyof typeof Term];

/**
 * <p>The preferred configuration for Reserved Instances and Savings Plans commitment-based discounts, consisting of a payment option and a commitment duration.</p>
 * @public
 */
export interface PreferredCommitment {
  /**
   * <p>The preferred length of the commitment period. If the value is null, it will default to <code>ThreeYears</code> (highest savings) where applicable.</p>
   * @public
   */
  term?: Term | undefined;

  /**
   * <p>The preferred upfront payment structure for commitments. If the value is null, it will default to <code>AllUpfront</code> (highest savings) where applicable.</p>
   * @public
   */
  paymentOption?: PaymentOption | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsEstimationMode = {
  AFTER_DISCOUNTS: "AfterDiscounts",
  BEFORE_DISCOUNTS: "BeforeDiscounts",
} as const;

/**
 * @public
 */
export type SavingsEstimationMode = (typeof SavingsEstimationMode)[keyof typeof SavingsEstimationMode];

/**
 * @public
 */
export interface GetPreferencesResponse {
  /**
   * <p>Retrieves the status of the "savings estimation mode" preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;

  /**
   * <p>Retrieves the status of the "member account discount visibility" preference.</p>
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility | undefined;

  /**
   * <p>Retrieves the current preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.</p>
   * @public
   */
  preferredCommitment?: PreferredCommitment | undefined;
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in a specified field.</p>
 * @public
 */
export interface ValidationExceptionDetail {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>A message with the reason for the validation exception error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  OTHER: "Other",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The list of fields that are invalid.</p>
   * @public
   */
  fields?: ValidationExceptionDetail[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * <p>The ID for the recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;
}

/**
 * <p>The DynamoDB reserved capacity configuration used for recommendations.</p>
 * @public
 */
export interface DynamoDbReservedCapacityConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved capacity recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing this reserved capacity costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing this reserved capacity costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of reserved capacity units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfCapacityUnitsToPurchase?: string | undefined;

  /**
   * <p>The capacity unit of the recommended reservation.</p>
   * @public
   */
  capacityUnits?: string | undefined;
}

/**
 * <p>Pricing details for your recommended reserved instance.</p>
 * @public
 */
export interface ReservedInstancesPricing {
  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended reserved instance, over the length of the lookback period.</p>
   * @public
   */
  estimatedOnDemandCost?: number | undefined;

  /**
   * <p>The cost of paying for the recommended reserved instance monthly.</p>
   * @public
   */
  monthlyReservationEligibleCost?: number | undefined;

  /**
   * <p>The savings percentage relative to the total On-Demand costs that are associated with this instance.</p>
   * @public
   */
  savingsPercentage?: number | undefined;

  /**
   * <p>The estimated cost of your recurring monthly fees for the recommended reserved instance across the month.</p>
   * @public
   */
  estimatedMonthlyAmortizedReservationCost?: number | undefined;
}

/**
 * <p>Cost impact of the purchase recommendation.</p>
 * @public
 */
export interface ReservedInstancesCostCalculation {
  /**
   * <p>Pricing details of the purchase recommendation.</p>
   * @public
   */
  pricing?: ReservedInstancesPricing | undefined;
}

/**
 * <p>The DynamoDB reserved capacity recommendation details.</p>
 * @public
 */
export interface DynamoDbReservedCapacity {
  /**
   * <p>The DynamoDB reserved capacity configuration used for recommendations.</p>
   * @public
   */
  configuration?: DynamoDbReservedCapacityConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The storage configuration used for recommendations.</p>
 * @public
 */
export interface StorageConfiguration {
  /**
   * <p>The storage type.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The storage volume.</p>
   * @public
   */
  sizeInGb?: number | undefined;
}

/**
 * <p>The Amazon Elastic Block Store volume configuration used for recommendations.</p>
 * @public
 */
export interface EbsVolumeConfiguration {
  /**
   * <p>The disk storage of the Amazon Elastic Block Store volume.</p>
   * @public
   */
  storage?: StorageConfiguration | undefined;

  /**
   * <p>The Amazon Elastic Block Store performance configuration.</p>
   * @public
   */
  performance?: BlockStoragePerformanceConfiguration | undefined;

  /**
   * <p>The Amazon Elastic Block Store attachment state.</p>
   * @public
   */
  attachmentState?: string | undefined;
}

/**
 * <p>Estimated discount details of the current and recommended resource configuration for a recommendation.</p>
 * @public
 */
export interface EstimatedDiscounts {
  /**
   * <p>Estimated Savings Plans discounts.</p>
   * @public
   */
  savingsPlansDiscount?: number | undefined;

  /**
   * <p>Estimated reserved instance discounts.</p>
   * @public
   */
  reservedInstancesDiscount?: number | undefined;

  /**
   * <p>Estimated other discounts include all discounts that are not itemized. Itemized discounts include <code>reservedInstanceDiscount</code> and <code>savingsPlansDiscount</code>.</p>
   * @public
   */
  otherDiscount?: number | undefined;
}

/**
 * <p>Contains pricing information about the specified resource.</p>
 * @public
 */
export interface ResourcePricing {
  /**
   * <p>The savings estimate using Amazon Web Services public pricing without incorporating any discounts.</p>
   * @public
   */
  estimatedCostBeforeDiscounts?: number | undefined;

  /**
   * <p>The estimated net unused amortized commitment for the recommendation.</p>
   * @public
   */
  estimatedNetUnusedAmortizedCommitments?: number | undefined;

  /**
   * <p>The estimated discounts for a recommendation.</p>
   * @public
   */
  estimatedDiscounts?: EstimatedDiscounts | undefined;

  /**
   * <p>The savings estimate incorporating all discounts with Amazon Web Services, such as Reserved Instances and Savings Plans.</p>
   * @public
   */
  estimatedCostAfterDiscounts?: number | undefined;
}

/**
 * <p>Details about the usage.</p>
 * @public
 */
export interface Usage {
  /**
   * <p>The usage type.</p>
   * @public
   */
  usageType?: string | undefined;

  /**
   * <p>The usage amount.</p>
   * @public
   */
  usageAmount?: number | undefined;

  /**
   * <p>The operation value.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>The product code.</p>
   * @public
   */
  productCode?: string | undefined;

  /**
   * <p>The usage unit.</p>
   * @public
   */
  unit?: string | undefined;
}

/**
 * <p>Cost impact of the resource recommendation.</p>
 * @public
 */
export interface ResourceCostCalculation {
  /**
   * <p>Usage details of the resource recommendation.</p>
   * @public
   */
  usages?: Usage[] | undefined;

  /**
   * <p>Pricing details of the resource recommendation.</p>
   * @public
   */
  pricing?: ResourcePricing | undefined;
}

/**
 * <p>Describes the Amazon Elastic Block Store volume configuration of the current and recommended resource configuration for a recommendation.</p>
 * @public
 */
export interface EbsVolume {
  /**
   * <p>The Amazon Elastic Block Store volume configuration used for recommendations.</p>
   * @public
   */
  configuration?: EbsVolumeConfiguration | undefined;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The instance configuration used for recommendations.</p>
 * @public
 */
export interface InstanceConfiguration {
  /**
   * <p>The instance type of the configuration.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>The configuration for the EC2 Auto Scaling group with mixed instance types.</p>
 * @public
 */
export interface MixedInstanceConfiguration {
  /**
   * <p>The instance type of the configuration.</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Ec2AutoScalingGroupType = {
  MIXED_INSTANCE_TYPES: "MixedInstanceTypes",
  SINGLE_INSTANCE_TYPE: "SingleInstanceType",
} as const;

/**
 * @public
 */
export type Ec2AutoScalingGroupType = (typeof Ec2AutoScalingGroupType)[keyof typeof Ec2AutoScalingGroupType];

/**
 * <p>The EC2 Auto Scaling group configuration used for recommendations.</p>
 * @public
 */
export interface Ec2AutoScalingGroupConfiguration {
  /**
   * <p>Details about the instance for the EC2 Auto Scaling group with a single instance type.</p>
   * @public
   */
  instance?: InstanceConfiguration | undefined;

  /**
   * <p>A list of instance types for an EC2 Auto Scaling group with mixed instance types.</p>
   * @public
   */
  mixedInstances?: MixedInstanceConfiguration[] | undefined;

  /**
   * <p>The type of EC2 Auto Scaling group, showing whether it consists of a single instance type or mixed instance types.</p>
   * @public
   */
  type?: Ec2AutoScalingGroupType | undefined;

  /**
   * <p>The strategy used for allocating instances, based on a predefined priority order or based on the lowest available price.</p>
   * @public
   */
  allocationStrategy?: AllocationStrategy | undefined;
}

/**
 * <p>The EC2 Auto Scaling group recommendation details.</p>
 * @public
 */
export interface Ec2AutoScalingGroup {
  /**
   * <p>The EC2 Auto Scaling group configuration used for recommendations.</p>
   * @public
   */
  configuration?: Ec2AutoScalingGroupConfiguration | undefined;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The EC2 instance configuration used for recommendations.</p>
 * @public
 */
export interface Ec2InstanceConfiguration {
  /**
   * <p>Details about the instance.</p>
   * @public
   */
  instance?: InstanceConfiguration | undefined;
}

/**
 * <p>Describes the EC2 instance configuration of the current and recommended resource configuration for a recommendation.</p>
 * @public
 */
export interface Ec2Instance {
  /**
   * <p>The EC2 instance configuration used for recommendations.</p>
   * @public
   */
  configuration?: Ec2InstanceConfiguration | undefined;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The EC2 instance Savings Plans configuration used for recommendations.</p>
 * @public
 */
export interface Ec2InstanceSavingsPlansConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The Savings Plans recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The hourly commitment for the Savings Plans type.</p>
   * @public
   */
  hourlyCommitment?: string | undefined;

  /**
   * <p>The instance family of the recommended Savings Plan.</p>
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  savingsPlansRegion?: string | undefined;
}

/**
 * <p>The EC2 instance Savings Plans recommendation details.</p>
 * @public
 */
export interface Ec2InstanceSavingsPlans {
  /**
   * <p>The EC2 instance Savings Plans configuration used for recommendations.</p>
   * @public
   */
  configuration?: Ec2InstanceSavingsPlansConfiguration | undefined;

  /**
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation | undefined;
}

/**
 * <p>The EC2 reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface Ec2ReservedInstancesConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing these reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>Indicates whether the recommendation is for standard or convertible reservations.</p>
   * @public
   */
  offeringClass?: string | undefined;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * <p>The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>Determines whether the recommended reservation is dedicated or shared.</p>
   * @public
   */
  tenancy?: string | undefined;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean | undefined;
}

/**
 * <p>The EC2 reserved instances recommendation details.</p>
 * @public
 */
export interface Ec2ReservedInstances {
  /**
   * <p>The EC2 reserved instances configuration used for recommendations.</p>
   * @public
   */
  configuration?: Ec2ReservedInstancesConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The ECS service configuration used for recommendations.</p>
 * @public
 */
export interface EcsServiceConfiguration {
  /**
   * <p>Details about the compute configuration.</p>
   * @public
   */
  compute?: ComputeConfiguration | undefined;
}

/**
 * <p>The ECS service recommendation details.</p>
 * @public
 */
export interface EcsService {
  /**
   * <p>The ECS service configuration used for recommendations.</p>
   * @public
   */
  configuration?: EcsServiceConfiguration | undefined;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The ElastiCache reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface ElastiCacheReservedInstancesConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing these reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean | undefined;
}

/**
 * <p>The ElastiCache reserved instances recommendation details.</p>
 * @public
 */
export interface ElastiCacheReservedInstances {
  /**
   * <p>The ElastiCache reserved instances configuration used for recommendations.</p>
   * @public
   */
  configuration?: ElastiCacheReservedInstancesConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The Lambda function configuration used for recommendations.</p>
 * @public
 */
export interface LambdaFunctionConfiguration {
  /**
   * <p>Details about the compute configuration.</p>
   * @public
   */
  compute?: ComputeConfiguration | undefined;
}

/**
 * <p>The Lambda function recommendation details.</p>
 * @public
 */
export interface LambdaFunction {
  /**
   * <p>The Lambda function configuration used for recommendations.</p>
   * @public
   */
  configuration?: LambdaFunctionConfiguration | undefined;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The MemoryDB reserved instances configuration used for recommendations.</p> <note> <p>While the API reference uses "MemoryDB reserved instances", the user guide and other documentation refer to them as "MemoryDB reserved nodes", as the terms are used interchangeably.</p> </note>
 * @public
 */
export interface MemoryDbReservedInstancesConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing these reserved instances costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing these reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string | undefined;
}

/**
 * <p>The MemoryDB reserved instances recommendation details.</p> <note> <p>While the API reference uses "MemoryDB reserved instances", the user guide and other documentation refer to them as "MemoryDB reserved nodes", as the terms are used interchangeably.</p> </note>
 * @public
 */
export interface MemoryDbReservedInstances {
  /**
   * <p>The MemoryDB reserved instances configuration used for recommendations.</p>
   * @public
   */
  configuration?: MemoryDbReservedInstancesConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The OpenSearch reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface OpenSearchReservedInstancesConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing these reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean | undefined;
}

/**
 * <p>The OpenSearch reserved instances recommendation details.</p>
 * @public
 */
export interface OpenSearchReservedInstances {
  /**
   * <p>The OpenSearch reserved instances configuration used for recommendations.</p>
   * @public
   */
  configuration?: OpenSearchReservedInstancesConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The DB instance configuration used for recommendations.</p>
 * @public
 */
export interface DbInstanceConfiguration {
  /**
   * <p>The DB instance class of the DB instance.</p>
   * @public
   */
  dbInstanceClass?: string | undefined;
}

/**
 * <p>The Amazon RDS DB instance configuration used for recommendations.</p>
 * @public
 */
export interface RdsDbInstanceConfiguration {
  /**
   * <p>Details about the instance configuration.</p>
   * @public
   */
  instance?: DbInstanceConfiguration | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.</p>
 * @public
 */
export interface RdsDbInstance {
  /**
   * <p>The Amazon RDS DB instance configuration used for recommendations.</p>
   * @public
   */
  configuration?: RdsDbInstanceConfiguration | undefined;

  /**
   * <p>Cost impact of the resource recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The Amazon RDS DB instance storage configuration used for recommendations.</p>
 * @public
 */
export interface RdsDbInstanceStorageConfiguration {
  /**
   * <p>The storage type to associate with the DB instance.</p>
   * @public
   */
  storageType?: string | undefined;

  /**
   * <p>The new amount of storage in GB to allocate for the DB instance.</p>
   * @public
   */
  allocatedStorageInGb?: number | undefined;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The storage throughput for the DB instance.</p>
   * @public
   */
  storageThroughput?: number | undefined;
}

/**
 * <p>Contains the details of an Amazon RDS DB instance storage.</p>
 * @public
 */
export interface RdsDbInstanceStorage {
  /**
   * <p>The Amazon RDS DB instance storage configuration used for recommendations.</p>
   * @public
   */
  configuration?: RdsDbInstanceStorageConfiguration | undefined;

  /**
   * <p>Cost impact of the resource recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation | undefined;
}

/**
 * <p>The RDS reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface RdsReservedInstancesConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string | undefined;

  /**
   * <p>The license model that the recommended reservation supports.</p>
   * @public
   */
  licenseModel?: string | undefined;

  /**
   * <p>The database edition that the recommended reservation supports.</p>
   * @public
   */
  databaseEdition?: string | undefined;

  /**
   * <p>The database engine that the recommended reservation supports.</p>
   * @public
   */
  databaseEngine?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.</p>
   * @public
   */
  deploymentOption?: string | undefined;
}

/**
 * <p>The RDS reserved instances recommendation details.</p>
 * @public
 */
export interface RdsReservedInstances {
  /**
   * <p>The RDS reserved instances configuration used for recommendations.</p>
   * @public
   */
  configuration?: RdsReservedInstancesConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The Redshift reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface RedshiftReservedInstancesConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The service for which you want recommendations.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string | undefined;

  /**
   * <p>How much purchasing these reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string | undefined;
}

/**
 * <p>The Redshift reserved instances recommendation details.</p>
 * @public
 */
export interface RedshiftReservedInstances {
  /**
   * <p>The Redshift reserved instances configuration used for recommendations.</p>
   * @public
   */
  configuration?: RedshiftReservedInstancesConfiguration | undefined;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation | undefined;
}

/**
 * <p>The SageMaker Savings Plans configuration used for recommendations.</p>
 * @public
 */
export interface SageMakerSavingsPlansConfiguration {
  /**
   * <p>The account scope for which you want recommendations.</p>
   * @public
   */
  accountScope?: string | undefined;

  /**
   * <p>The Savings Plans recommendation term in years.</p>
   * @public
   */
  term?: string | undefined;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string | undefined;

  /**
   * <p>The hourly commitment for the Savings Plans type.</p>
   * @public
   */
  hourlyCommitment?: string | undefined;
}

/**
 * <p>The SageMaker Savings Plans recommendation details.</p>
 * @public
 */
export interface SageMakerSavingsPlans {
  /**
   * <p>The SageMaker Savings Plans configuration used for recommendations.</p>
   * @public
   */
  configuration?: SageMakerSavingsPlansConfiguration | undefined;

  /**
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation | undefined;
}

/**
 * <p>Contains detailed information about the specified resource.</p>
 * @public
 */
export type ResourceDetails =
  | ResourceDetails.ComputeSavingsPlansMember
  | ResourceDetails.DynamoDbReservedCapacityMember
  | ResourceDetails.EbsVolumeMember
  | ResourceDetails.Ec2AutoScalingGroupMember
  | ResourceDetails.Ec2InstanceMember
  | ResourceDetails.Ec2InstanceSavingsPlansMember
  | ResourceDetails.Ec2ReservedInstancesMember
  | ResourceDetails.EcsServiceMember
  | ResourceDetails.ElastiCacheReservedInstancesMember
  | ResourceDetails.LambdaFunctionMember
  | ResourceDetails.MemoryDbReservedInstancesMember
  | ResourceDetails.OpenSearchReservedInstancesMember
  | ResourceDetails.RdsDbInstanceMember
  | ResourceDetails.RdsDbInstanceStorageMember
  | ResourceDetails.RdsReservedInstancesMember
  | ResourceDetails.RedshiftReservedInstancesMember
  | ResourceDetails.SageMakerSavingsPlansMember
  | ResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace ResourceDetails {
  /**
   * <p>The Lambda function recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The ECS service recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The EC2 instance recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon Elastic Block Store volume recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The EC2 Auto Scaling group recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The EC2 reserved instances recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The RDS reserved instances recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The ElastiCache reserved instances recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The OpenSearch reserved instances recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The Redshift reserved instances recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The EC2 instance Savings Plans recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The Compute Savings Plans recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The SageMaker AI Savings Plans recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The DB instance recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The DB instance storage recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The DynamoDB reserved capacity recommendation details.</p>
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
    dynamoDbReservedCapacity: DynamoDbReservedCapacity;
    memoryDbReservedInstances?: never;
    $unknown?: never;
  }

  /**
   * <p>The MemoryDB reserved instances recommendation details.</p>
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances: MemoryDbReservedInstances;
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
    dynamoDbReservedCapacity?: never;
    memoryDbReservedInstances?: never;
    $unknown: [string, any];
  }

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
    dynamoDbReservedCapacity: (value: DynamoDbReservedCapacity) => T;
    memoryDbReservedInstances: (value: MemoryDbReservedInstances) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceDetails, visitor: Visitor<T>): T => {
    if (value.lambdaFunction !== undefined) return visitor.lambdaFunction(value.lambdaFunction);
    if (value.ecsService !== undefined) return visitor.ecsService(value.ecsService);
    if (value.ec2Instance !== undefined) return visitor.ec2Instance(value.ec2Instance);
    if (value.ebsVolume !== undefined) return visitor.ebsVolume(value.ebsVolume);
    if (value.ec2AutoScalingGroup !== undefined) return visitor.ec2AutoScalingGroup(value.ec2AutoScalingGroup);
    if (value.ec2ReservedInstances !== undefined) return visitor.ec2ReservedInstances(value.ec2ReservedInstances);
    if (value.rdsReservedInstances !== undefined) return visitor.rdsReservedInstances(value.rdsReservedInstances);
    if (value.elastiCacheReservedInstances !== undefined)
      return visitor.elastiCacheReservedInstances(value.elastiCacheReservedInstances);
    if (value.openSearchReservedInstances !== undefined)
      return visitor.openSearchReservedInstances(value.openSearchReservedInstances);
    if (value.redshiftReservedInstances !== undefined)
      return visitor.redshiftReservedInstances(value.redshiftReservedInstances);
    if (value.ec2InstanceSavingsPlans !== undefined)
      return visitor.ec2InstanceSavingsPlans(value.ec2InstanceSavingsPlans);
    if (value.computeSavingsPlans !== undefined) return visitor.computeSavingsPlans(value.computeSavingsPlans);
    if (value.sageMakerSavingsPlans !== undefined) return visitor.sageMakerSavingsPlans(value.sageMakerSavingsPlans);
    if (value.rdsDbInstance !== undefined) return visitor.rdsDbInstance(value.rdsDbInstance);
    if (value.rdsDbInstanceStorage !== undefined) return visitor.rdsDbInstanceStorage(value.rdsDbInstanceStorage);
    if (value.dynamoDbReservedCapacity !== undefined)
      return visitor.dynamoDbReservedCapacity(value.dynamoDbReservedCapacity);
    if (value.memoryDbReservedInstances !== undefined)
      return visitor.memoryDbReservedInstances(value.memoryDbReservedInstances);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  COMPUTE_SAVINGS_PLANS: "ComputeSavingsPlans",
  DYNAMO_DB_RESERVED_CAPACITY: "DynamoDbReservedCapacity",
  EBS_VOLUME: "EbsVolume",
  EC2_AUTO_SCALING_GROUP: "Ec2AutoScalingGroup",
  EC2_INSTANCE: "Ec2Instance",
  EC2_INSTANCE_SAVINGS_PLANS: "Ec2InstanceSavingsPlans",
  EC2_RESERVED_INSTANCES: "Ec2ReservedInstances",
  ECS_SERVICE: "EcsService",
  ELASTI_CACHE_RESERVED_INSTANCES: "ElastiCacheReservedInstances",
  LAMBDA_FUNCTION: "LambdaFunction",
  MEMORY_DB_RESERVED_INSTANCES: "MemoryDbReservedInstances",
  OPEN_SEARCH_RESERVED_INSTANCES: "OpenSearchReservedInstances",
  RDS_DB_INSTANCE: "RdsDbInstance",
  RDS_DB_INSTANCE_STORAGE: "RdsDbInstanceStorage",
  RDS_RESERVED_INSTANCES: "RdsReservedInstances",
  REDSHIFT_RESERVED_INSTANCES: "RedshiftReservedInstances",
  SAGE_MAKER_SAVINGS_PLANS: "SageMakerSavingsPlans",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ImplementationEffort = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
  VERY_HIGH: "VeryHigh",
  VERY_LOW: "VeryLow",
} as const;

/**
 * @public
 */
export type ImplementationEffort = (typeof ImplementationEffort)[keyof typeof ImplementationEffort];

/**
 * @public
 * @enum
 */
export const Source = {
  COMPUTE_OPTIMIZER: "ComputeOptimizer",
  COST_EXPLORER: "CostExplorer",
} as const;

/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * <p>The tag structure that contains a tag key and value.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key that's associated with the tag.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The value that's associated with the tag.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * <p>The ID for the recommendation.</p>
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * <p>The unique identifier for the resource. This is the same as the Amazon Resource Name (ARN), if available.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The account to which the recommendation applies.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The currency code used for the recommendation.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The lookback period that's used to generate the recommendation.</p>
   * @public
   */
  recommendationLookbackPeriodInDays?: number | undefined;

  /**
   * <p>The lookback period used to calculate cost impact for a recommendation.</p>
   * @public
   */
  costCalculationLookbackPeriodInDays?: number | undefined;

  /**
   * <p>The estimated savings percentage relative to the total cost over the cost calculation lookback period.</p>
   * @public
   */
  estimatedSavingsPercentage?: number | undefined;

  /**
   * <p>The estimated savings amount over the lookback period used to calculate cost impact for a recommendation.</p>
   * @public
   */
  estimatedSavingsOverCostCalculationLookbackPeriod?: number | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  currentResourceType?: ResourceType | undefined;

  /**
   * <p>The resource type of the recommendation.</p>
   * @public
   */
  recommendedResourceType?: ResourceType | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The source of the recommendation.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>The time when the recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>The estimated monthly savings amount for the recommendation.</p>
   * @public
   */
  estimatedMonthlySavings?: number | undefined;

  /**
   * <p>The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.</p>
   * @public
   */
  estimatedMonthlyCost?: number | undefined;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  implementationEffort?: ImplementationEffort | undefined;

  /**
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * <p>The type of action you can take by adopting the recommendation.</p>
   * @public
   */
  actionType?: ActionType | undefined;

  /**
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   * @public
   */
  rollbackPossible?: boolean | undefined;

  /**
   * <p>The details for the resource.</p>
   * @public
   */
  currentResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>The details about the recommended resource.</p>
   * @public
   */
  recommendedResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>A list of tags associated with the resource for which the recommendation exists.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that was not found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
  }
}

/**
 * @public
 */
export interface ListEnrollmentStatusesRequest {
  /**
   * <p>Indicates whether to return the enrollment status for the organization.</p>
   * @public
   */
  includeOrganizationInfo?: boolean | undefined;

  /**
   * <p>The account ID of a member account in the organization.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that are returned for the request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnrollmentStatusesResponse {
  /**
   * <p>The enrollment status of a specific account ID, including creation and last updated timestamps.</p>
   * @public
   */
  items?: AccountEnrollmentStatus[] | undefined;

  /**
   * <p>The enrollment status of all member accounts in the organization if the account is the management account or delegated administrator.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes a filter that returns a more specific list of recommendations. Filters recommendations by different dimensions.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   * @public
   */
  rollbackPossible?: boolean | undefined;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  implementationEfforts?: ImplementationEffort[] | undefined;

  /**
   * <p>The account to which the recommendation applies.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>The resource type of the recommendation.</p>
   * @public
   */
  resourceTypes?: ResourceType[] | undefined;

  /**
   * <p>The type of action you can take by adopting the recommendation.</p>
   * @public
   */
  actionTypes?: ActionType[] | undefined;

  /**
   * <p>A list of tags assigned to the recommendation.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The resource ID of the recommendation.</p>
   * @public
   */
  resourceIds?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>The IDs for the recommendations.</p>
   * @public
   */
  recommendationIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "Asc",
  DESC: "Desc",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * <p>Defines how rows will be sorted in the response.</p>
 * @public
 */
export interface OrderBy {
  /**
   * <p>Sorts by dimension values.</p>
   * @public
   */
  dimension?: string | undefined;

  /**
   * <p>The order that's used to sort the data.</p>
   * @public
   */
  order?: Order | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * <p>The constraints that you want all returned recommendations to match.</p>
   * @public
   */
  filter?: Filter | undefined;

  /**
   * <p>The ordering of recommendations by a dimension.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * <p>List of all recommendations for a resource, or a single recommendation if de-duped by <code>resourceId</code>.</p>
   * @public
   */
  includeAllRecommendations?: boolean | undefined;

  /**
   * <p>The maximum number of recommendations that are returned for the request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes a recommendation.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The ID for the recommendation.</p>
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * <p>The account to which the recommendation applies.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The resource ID for the recommendation.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recommendation.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The current resource type.</p>
   * @public
   */
  currentResourceType?: string | undefined;

  /**
   * <p>The recommended resource type.</p>
   * @public
   */
  recommendedResourceType?: string | undefined;

  /**
   * <p>The estimated monthly savings amount for the recommendation.</p>
   * @public
   */
  estimatedMonthlySavings?: number | undefined;

  /**
   * <p>The estimated savings percentage relative to the total cost over the cost calculation lookback period.</p>
   * @public
   */
  estimatedSavingsPercentage?: number | undefined;

  /**
   * <p>The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.</p>
   * @public
   */
  estimatedMonthlyCost?: number | undefined;

  /**
   * <p>The currency code used for the recommendation.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  implementationEffort?: string | undefined;

  /**
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   * @public
   */
  restartNeeded?: boolean | undefined;

  /**
   * <p>The type of tasks that can be carried out by this action.</p>
   * @public
   */
  actionType?: string | undefined;

  /**
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   * @public
   */
  rollbackPossible?: boolean | undefined;

  /**
   * <p>Describes the current resource.</p>
   * @public
   */
  currentResourceSummary?: string | undefined;

  /**
   * <p>Describes the recommended resource.</p>
   * @public
   */
  recommendedResourceSummary?: string | undefined;

  /**
   * <p>The time when the recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>The lookback period that's used to generate the recommendation.</p>
   * @public
   */
  recommendationLookbackPeriodInDays?: number | undefined;

  /**
   * <p>The source of the recommendation.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>A list of tags assigned to the recommendation.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p>List of all savings recommendations.</p>
   * @public
   */
  items?: Recommendation[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SummaryMetrics = {
  SAVINGS_PERCENTAGE: "SavingsPercentage",
} as const;

/**
 * @public
 */
export type SummaryMetrics = (typeof SummaryMetrics)[keyof typeof SummaryMetrics];

/**
 * @public
 */
export interface ListRecommendationSummariesRequest {
  /**
   * <p>Describes a filter that returns a more specific list of recommendations. Filters recommendations by different dimensions.</p>
   * @public
   */
  filter?: Filter | undefined;

  /**
   * <p>The grouping of recommendations by a dimension.</p>
   * @public
   */
  groupBy: string | undefined;

  /**
   * <p>The maximum number of recommendations to be returned for the request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Additional metrics to be returned for the request. The only valid value is <code>savingsPercentage</code>.</p>
   * @public
   */
  metrics?: SummaryMetrics[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The summary of rightsizing recommendations, including de-duped savings from all types of recommendations.</p>
 * @public
 */
export interface RecommendationSummary {
  /**
   * <p>The grouping of recommendations.</p>
   * @public
   */
  group?: string | undefined;

  /**
   * <p>The estimated total savings resulting from modifications, on a monthly basis.</p>
   * @public
   */
  estimatedMonthlySavings?: number | undefined;

  /**
   * <p>The total number of instance recommendations.</p>
   * @public
   */
  recommendationCount?: number | undefined;
}

/**
 * <p>The results or descriptions for the additional metrics, based on whether the metrics were or were not requested.</p>
 * @public
 */
export interface SummaryMetricsResult {
  /**
   * <p>The savings percentage based on your Amazon Web Services spend over the past 30 days.</p> <note> <p>Savings percentage is only supported when filtering by Region, account ID, or tags.</p> </note>
   * @public
   */
  savingsPercentage?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationSummariesResponse {
  /**
   * <p>The total overall savings for the aggregated view.</p>
   * @public
   */
  estimatedTotalDedupedSavings?: number | undefined;

  /**
   * <p>A list of all savings recommendations.</p>
   * @public
   */
  items?: RecommendationSummary[] | undefined;

  /**
   * <p>The dimension used to group the recommendations by.</p>
   * @public
   */
  groupBy?: string | undefined;

  /**
   * <p>The currency code used for the recommendation.</p>
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * <p>The results or descriptions for the additional metrics, based on whether the metrics were or were not requested.</p>
   * @public
   */
  metrics?: SummaryMetricsResult | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusRequest {
  /**
   * <p>Sets the account status.</p>
   * @public
   */
  status: EnrollmentStatus | undefined;

  /**
   * <p>Indicates whether to enroll member accounts of the organization if the account is the management account or delegated administrator.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * <p>The enrollment status of the account.</p>
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePreferencesRequest {
  /**
   * <p>Sets the "savings estimation mode" preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;

  /**
   * <p>Sets the "member account discount visibility" preference.</p>
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility | undefined;

  /**
   * <p>Sets the preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.</p>
   * @public
   */
  preferredCommitment?: PreferredCommitment | undefined;
}

/**
 * @public
 */
export interface UpdatePreferencesResponse {
  /**
   * <p>Shows the status of the "savings estimation mode" preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;

  /**
   * <p>Shows the status of the "member account discount visibility" preference.</p>
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility | undefined;

  /**
   * <p>Shows the updated preferences for how Reserved Instances and Savings Plans cost-saving opportunities are prioritized in terms of payment option and term length.</p>
   * @public
   */
  preferredCommitment?: PreferredCommitment | undefined;
}
