// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CostOptimizationHubServiceException as __BaseException } from "./CostOptimizationHubServiceException";

/**
 * @public
 * <p>You are not authorized to use this operation with the given parameters.</p>
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
 * @public
 * <p>Describes the enrollment status of an organization's member accounts in Cost Optimization
 *       Hub.</p>
 */
export interface AccountEnrollmentStatus {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The account enrollment status.</p>
   */
  status?: EnrollmentStatus;

  /**
   * @public
   * <p>The time when the account enrollment status was last updated.</p>
   */
  lastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The time when the account enrollment status was created.</p>
   */
  createdTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const ActionType = {
  MIGRATE_TO_GRAVITON: "MigrateToGraviton",
  PURCHASE_RESERVED_INSTANCES: "PurchaseReservedInstances",
  PURCHASE_SAVINGS_PLANS: "PurchaseSavingsPlans",
  RIGHTSIZE: "Rightsize",
  STOP: "Stop",
  UPGRADE: "Upgrade",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * <p>Describes the Amazon Elastic Block Store performance configuration of the current and
 *       recommended resource configuration for a recommendation.</p>
 */
export interface BlockStoragePerformanceConfiguration {
  /**
   * @public
   * <p>The number of I/O operations per second.</p>
   */
  iops?: number;

  /**
   * @public
   * <p>The throughput that the volume supports.</p>
   */
  throughput?: number;
}

/**
 * @public
 * <p>Describes the performance configuration for compute services such as Amazon EC2, Lambda,
 *       and ECS.</p>
 */
export interface ComputeConfiguration {
  /**
   * @public
   * <p>The number of vCPU cores in the resource.</p>
   */
  vCpu?: number;

  /**
   * @public
   * <p>The memory size of the resource.</p>
   */
  memorySizeInMB?: number;

  /**
   * @public
   * <p>The architecture of the resource.</p>
   */
  architecture?: string;

  /**
   * @public
   * <p>The platform of the resource. The platform is the specific combination of operating
   *       system, license model, and software on an instance.</p>
   */
  platform?: string;
}

/**
 * @public
 * <p>The Compute Savings Plans configuration used for recommendations.</p>
 */
export interface ComputeSavingsPlansConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates
   *       recommendations including the management account and member accounts if the value is set to
   *         <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for
   *       individual member accounts only.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The Savings Plans recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The hourly commitment for the Savings Plans type.</p>
   */
  hourlyCommitment?: string;
}

/**
 * @public
 * <p>Pricing information about a Savings Plan.</p>
 */
export interface SavingsPlansPricing {
  /**
   * @public
   * <p>The cost of paying for the recommended Savings Plan monthly.</p>
   */
  monthlySavingsPlansEligibleCost?: number;

  /**
   * @public
   * <p>Estimated monthly commitment for the Savings Plan.</p>
   */
  estimatedMonthlyCommitment?: number;

  /**
   * @public
   * <p>Estimated savings as a percentage of your overall costs after buying the Savings Plan.</p>
   */
  savingsPercentage?: number;

  /**
   * @public
   * <p>Estimated On-Demand cost you will pay after buying the Savings Plan.</p>
   */
  estimatedOnDemandCost?: number;
}

/**
 * @public
 * <p>Cost impact of the purchase recommendation.</p>
 */
export interface SavingsPlansCostCalculation {
  /**
   * @public
   * <p>Pricing details of the purchase recommendation.</p>
   */
  pricing?: SavingsPlansPricing;
}

/**
 * @public
 * <p>The Compute Savings Plans recommendation details.</p>
 */
export interface ComputeSavingsPlans {
  /**
   * @public
   * <p>Configuration details of the Compute Savings Plans to purchase.</p>
   */
  configuration?: ComputeSavingsPlansConfiguration;

  /**
   * @public
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   */
  costCalculation?: SavingsPlansCostCalculation;
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
   * @public
   * <p>Retrieves the status of the "savings estimation mode" preference.</p>
   */
  savingsEstimationMode?: SavingsEstimationMode;

  /**
   * @public
   * <p>Retrieves the status of the "member account discount visibility" preference.</p>
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
}

/**
 * @public
 * <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in a
 *       specified field.</p>
 */
export interface ValidationExceptionDetail {
  /**
   * @public
   * <p>The field name where the invalid entry was detected.</p>
   */
  fieldName: string | undefined;

  /**
   * @public
   * <p>A message with the reason for the validation exception error.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the validation exception.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
   * <p>The list of fields that are invalid.</p>
   */
  fields?: ValidationExceptionDetail[];

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
   * @public
   * <p>The ID for the recommendation.</p>
   */
  recommendationId: string | undefined;
}

/**
 * @public
 * <p>The storage configuration used for recommendations.</p>
 */
export interface StorageConfiguration {
  /**
   * @public
   * <p>The storage type.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The storage volume.</p>
   */
  sizeInGb?: number;
}

/**
 * @public
 * <p>The Amazon Elastic Block Store volume configuration used for
 *       recommendations.</p>
 */
export interface EbsVolumeConfiguration {
  /**
   * @public
   * <p>The disk storage of the Amazon Elastic Block Store volume.</p>
   */
  storage?: StorageConfiguration;

  /**
   * @public
   * <p>The Amazon Elastic Block Store performance configuration.</p>
   */
  performance?: BlockStoragePerformanceConfiguration;

  /**
   * @public
   * <p>The Amazon Elastic Block Store attachment state.</p>
   */
  attachmentState?: string;
}

/**
 * @public
 * <p>Estimated discount details of the current and recommended resource configuration for a
 *       recommendation.</p>
 */
export interface EstimatedDiscounts {
  /**
   * @public
   * <p>Estimated Savings Plans discounts.</p>
   */
  savingsPlansDiscount?: number;

  /**
   * @public
   * <p>Estimated reserved instance discounts.</p>
   */
  reservedInstancesDiscount?: number;

  /**
   * @public
   * <p>Estimated other discounts include all discounts that are not itemized. Itemized discounts
   *       include <code>reservedInstanceDiscount</code> and <code>savingsPlansDiscount</code>.</p>
   */
  otherDiscount?: number;
}

/**
 * @public
 * <p>Contains pricing information about the specified resource.</p>
 */
export interface ResourcePricing {
  /**
   * @public
   * <p>The savings estimate using Amazon Web Services public pricing without incorporating any
   *       discounts.</p>
   */
  estimatedCostBeforeDiscounts?: number;

  /**
   * @public
   * <p>The estimated net unused amortized commitment for the recommendation.</p>
   */
  estimatedNetUnusedAmortizedCommitments?: number;

  /**
   * @public
   * <p>The estimated discounts for a recommendation.</p>
   */
  estimatedDiscounts?: EstimatedDiscounts;

  /**
   * @public
   * <p>The savings estimate incorporating all discounts with Amazon Web Services, such as Reserved
   *       Instances and Savings Plans.</p>
   */
  estimatedCostAfterDiscounts?: number;
}

/**
 * @public
 * <p>Details about the usage.</p>
 */
export interface Usage {
  /**
   * @public
   * <p>The usage type.</p>
   */
  usageType?: string;

  /**
   * @public
   * <p>The usage amount.</p>
   */
  usageAmount?: number;

  /**
   * @public
   * <p>The operation value.</p>
   */
  operation?: string;

  /**
   * @public
   * <p>The product code.</p>
   */
  productCode?: string;

  /**
   * @public
   * <p>The usage unit.</p>
   */
  unit?: string;
}

/**
 * @public
 * <p>Cost impact of the resource recommendation.</p>
 */
export interface ResourceCostCalculation {
  /**
   * @public
   * <p>Usage details of the resource recommendation.</p>
   */
  usages?: Usage[];

  /**
   * @public
   * <p>Pricing details of the resource recommendation.</p>
   */
  pricing?: ResourcePricing;
}

/**
 * @public
 * <p>Describes the Amazon Elastic Block Store volume configuration of the current and
 *       recommended resource configuration for a recommendation.</p>
 */
export interface EbsVolume {
  /**
   * @public
   * <p>The Amazon Elastic Block Store volume configuration used for
   *       recommendations.</p>
   */
  configuration?: EbsVolumeConfiguration;

  /**
   * @public
   * <p>Cost impact of the recommendation.</p>
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * @public
 * <p>The Instance configuration used for recommendations.</p>
 */
export interface InstanceConfiguration {
  /**
   * @public
   * <p>Details about the type.</p>
   */
  type?: string;
}

/**
 * @public
 * <p>The EC2 auto scaling group configuration used for recommendations.</p>
 */
export interface Ec2AutoScalingGroupConfiguration {
  /**
   * @public
   * <p>Details about the instance.</p>
   */
  instance?: InstanceConfiguration;
}

/**
 * @public
 * <p>The EC2 Auto Scaling group recommendation details.</p>
 */
export interface Ec2AutoScalingGroup {
  /**
   * @public
   * <p>The EC2 Auto Scaling group configuration used for recommendations.</p>
   */
  configuration?: Ec2AutoScalingGroupConfiguration;

  /**
   * @public
   * <p>Cost impact of the recommendation.</p>
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * @public
 * <p>The EC2 instance configuration used for recommendations.</p>
 */
export interface Ec2InstanceConfiguration {
  /**
   * @public
   * <p>Details about the instance.</p>
   */
  instance?: InstanceConfiguration;
}

/**
 * @public
 * <p>Describes the EC2 instance configuration of the current and recommended resource
 *       configuration for a recommendation.</p>
 */
export interface Ec2Instance {
  /**
   * @public
   * <p>The EC2 instance configuration used for recommendations.</p>
   */
  configuration?: Ec2InstanceConfiguration;

  /**
   * @public
   * <p>Cost impact of the recommendation.</p>
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * @public
 * <p>The EC2 instance Savings Plans configuration used for recommendations.</p>
 */
export interface Ec2InstanceSavingsPlansConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The Savings Plans recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The hourly commitment for the Savings Plans type.</p>
   */
  hourlyCommitment?: string;

  /**
   * @public
   * <p>The instance family of the recommended Savings Plan.</p>
   */
  instanceFamily?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the commitment.</p>
   */
  savingsPlansRegion?: string;
}

/**
 * @public
 * <p>The EC2 instance Savings Plans recommendation details.</p>
 */
export interface Ec2InstanceSavingsPlans {
  /**
   * @public
   * <p>The EC2 instance Savings Plans configuration used for recommendations.</p>
   */
  configuration?: Ec2InstanceSavingsPlansConfiguration;

  /**
   * @public
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   */
  costCalculation?: SavingsPlansCostCalculation;
}

/**
 * @public
 * <p>The EC2 reserved instances configuration used for recommendations.</p>
 */
export interface Ec2ReservedInstancesConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The service that you want your recommendations for.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   */
  normalizedUnitsToPurchase?: string;

  /**
   * @public
   * <p>The reserved instances recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   */
  numberOfInstancesToPurchase?: string;

  /**
   * @public
   * <p>Indicates whether the recommendation is for standard or convertible reservations.</p>
   */
  offeringClass?: string;

  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  instanceFamily?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the commitment.</p>
   */
  reservedInstancesRegion?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   */
  currentGeneration?: string;

  /**
   * @public
   * <p>The platform of the recommended reservation. The platform is the specific combination of
   *       operating system, license model, and software on an instance.</p>
   */
  platform?: string;

  /**
   * @public
   * <p>Determines whether the recommended reservation is dedicated or shared.</p>
   */
  tenancy?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is size flexible.</p>
   */
  sizeFlexEligible?: boolean;

  /**
   * @public
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  upfrontCost?: string;

  /**
   * @public
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   */
  monthlyRecurringCost?: string;
}

/**
 * @public
 * <p>Pricing details for your recommended reserved instance.</p>
 */
export interface ReservedInstancesPricing {
  /**
   * @public
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended reserved
   *       instance, over the length of the lookback period.</p>
   */
  estimatedOnDemandCost?: number;

  /**
   * @public
   * <p>The cost of paying for the recommended reserved instance monthly.</p>
   */
  monthlyReservationEligibleCost?: number;

  /**
   * @public
   * <p>The savings percentage relative to the total On-Demand costs that are associated with this
   *       instance.</p>
   */
  savingsPercentage?: number;

  /**
   * @public
   * <p>The estimated cost of your recurring monthly fees for the recommended reserved instance
   *       across the month.</p>
   */
  estimatedMonthlyAmortizedReservationCost?: number;
}

/**
 * @public
 * <p>Cost impact of the purchase recommendation.</p>
 */
export interface ReservedInstancesCostCalculation {
  /**
   * @public
   * <p>Pricing details of the purchase recommendation.</p>
   */
  pricing?: ReservedInstancesPricing;
}

/**
 * @public
 * <p>The EC2 reserved instances recommendation details.</p>
 */
export interface Ec2ReservedInstances {
  /**
   * @public
   * <p>The EC2 reserved instances configuration used for recommendations.</p>
   */
  configuration?: Ec2ReservedInstancesConfiguration;

  /**
   * @public
   * <p>Cost impact of the purchase recommendation.</p>
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * @public
 * <p>The ECS service configuration used for recommendations.</p>
 */
export interface EcsServiceConfiguration {
  /**
   * @public
   * <p>Details about the compute configuration.</p>
   */
  compute?: ComputeConfiguration;
}

/**
 * @public
 * <p>The ECS service recommendation details.</p>
 */
export interface EcsService {
  /**
   * @public
   * <p>The ECS service configuration used for recommendations.</p>
   */
  configuration?: EcsServiceConfiguration;

  /**
   * @public
   * <p>Cost impact of the recommendation.</p>
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * @public
 * <p>The ElastiCache reserved instances configuration used for recommendations.</p>
 */
export interface ElastiCacheReservedInstancesConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The service that you want your recommendations for.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   */
  normalizedUnitsToPurchase?: string;

  /**
   * @public
   * <p>The reserved instances recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   */
  numberOfInstancesToPurchase?: string;

  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  instanceFamily?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the commitment.</p>
   */
  reservedInstancesRegion?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   */
  currentGeneration?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is size flexible.</p>
   */
  sizeFlexEligible?: boolean;

  /**
   * @public
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  upfrontCost?: string;

  /**
   * @public
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   */
  monthlyRecurringCost?: string;
}

/**
 * @public
 * <p>The ElastiCache reserved instances recommendation details.</p>
 */
export interface ElastiCacheReservedInstances {
  /**
   * @public
   * <p>The ElastiCache reserved instances configuration used for recommendations.</p>
   */
  configuration?: ElastiCacheReservedInstancesConfiguration;

  /**
   * @public
   * <p>Cost impact of the purchase recommendation.</p>
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * @public
 * <p>The Lambda function configuration used for recommendations.</p>
 */
export interface LambdaFunctionConfiguration {
  /**
   * @public
   * <p>Details about the compute configuration.</p>
   */
  compute?: ComputeConfiguration;
}

/**
 * @public
 * <p>The Lambda function recommendation details.</p>
 */
export interface LambdaFunction {
  /**
   * @public
   * <p>The Lambda function configuration used for recommendations.</p>
   */
  configuration?: LambdaFunctionConfiguration;

  /**
   * @public
   * <p>Cost impact of the recommendation.</p>
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * @public
 * <p>The OpenSearch reserved instances configuration used for recommendations.</p>
 */
export interface OpenSearchReservedInstancesConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The service that you want your recommendations for.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   */
  normalizedUnitsToPurchase?: string;

  /**
   * @public
   * <p>The reserved instances recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   */
  numberOfInstancesToPurchase?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the commitment.</p>
   */
  reservedInstancesRegion?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   */
  currentGeneration?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is size flexible.</p>
   */
  sizeFlexEligible?: boolean;

  /**
   * @public
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  upfrontCost?: string;

  /**
   * @public
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   */
  monthlyRecurringCost?: string;
}

/**
 * @public
 * <p>The OpenSearch reserved instances recommendation details.</p>
 */
export interface OpenSearchReservedInstances {
  /**
   * @public
   * <p>The OpenSearch reserved instances configuration used for recommendations.</p>
   */
  configuration?: OpenSearchReservedInstancesConfiguration;

  /**
   * @public
   * <p>Cost impact of the purchase recommendation.</p>
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * @public
 * <p>The RDS reserved instances configuration used for recommendations.</p>
 */
export interface RdsReservedInstancesConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The service that you want your recommendations for.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   */
  normalizedUnitsToPurchase?: string;

  /**
   * @public
   * <p>The reserved instances recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   */
  numberOfInstancesToPurchase?: string;

  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  instanceFamily?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the commitment.</p>
   */
  reservedInstancesRegion?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is size flexible.</p>
   */
  sizeFlexEligible?: boolean;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   */
  currentGeneration?: string;

  /**
   * @public
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  upfrontCost?: string;

  /**
   * @public
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   */
  monthlyRecurringCost?: string;

  /**
   * @public
   * <p>The license model that the recommended reservation supports.</p>
   */
  licenseModel?: string;

  /**
   * @public
   * <p>The database edition that the recommended reservation supports.</p>
   */
  databaseEdition?: string;

  /**
   * @public
   * <p>The database engine that the recommended reservation supports.</p>
   */
  databaseEngine?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a reservation in a single Availability Zone
   *       or a reservation with a backup in a second Availability Zone.</p>
   */
  deploymentOption?: string;
}

/**
 * @public
 * <p>The RDS reserved instances recommendation details.</p>
 */
export interface RdsReservedInstances {
  /**
   * @public
   * <p>The RDS reserved instances configuration used for recommendations.</p>
   */
  configuration?: RdsReservedInstancesConfiguration;

  /**
   * @public
   * <p>Cost impact of the purchase recommendation.</p>
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * @public
 * <p>The Redshift reserved instances configuration used for recommendations.</p>
 */
export interface RedshiftReservedInstancesConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The service that you want your recommendations for.</p>
   */
  service?: string;

  /**
   * @public
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   */
  normalizedUnitsToPurchase?: string;

  /**
   * @public
   * <p>The reserved instances recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   */
  numberOfInstancesToPurchase?: string;

  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  instanceFamily?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the commitment.</p>
   */
  reservedInstancesRegion?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is size flexible.</p>
   */
  sizeFlexEligible?: boolean;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   */
  currentGeneration?: string;

  /**
   * @public
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  upfrontCost?: string;

  /**
   * @public
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   */
  monthlyRecurringCost?: string;
}

/**
 * @public
 * <p>The Redshift reserved instances recommendation details.</p>
 */
export interface RedshiftReservedInstances {
  /**
   * @public
   * <p>The Redshift reserved instances configuration used for recommendations.</p>
   */
  configuration?: RedshiftReservedInstancesConfiguration;

  /**
   * @public
   * <p>Cost impact of the purchase recommendation.</p>
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * @public
 * <p>The SageMaker Savings Plans configuration used for recommendations.</p>
 */
export interface SageMakerSavingsPlansConfiguration {
  /**
   * @public
   * <p>The account scope that you want your recommendations for.</p>
   */
  accountScope?: string;

  /**
   * @public
   * <p>The Savings Plans recommendation term in years.</p>
   */
  term?: string;

  /**
   * @public
   * <p>The payment option for the commitment.</p>
   */
  paymentOption?: string;

  /**
   * @public
   * <p>The hourly commitment for the Savings Plans type.</p>
   */
  hourlyCommitment?: string;
}

/**
 * @public
 * <p>The SageMaker Savings Plans recommendation details.</p>
 */
export interface SageMakerSavingsPlans {
  /**
   * @public
   * <p>The SageMaker Savings Plans configuration used for recommendations.</p>
   */
  configuration?: SageMakerSavingsPlansConfiguration;

  /**
   * @public
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   */
  costCalculation?: SavingsPlansCostCalculation;
}

/**
 * @public
 * <p>Contains detailed information about the specified resource.</p>
 */
export type ResourceDetails =
  | ResourceDetails.ComputeSavingsPlansMember
  | ResourceDetails.EbsVolumeMember
  | ResourceDetails.Ec2AutoScalingGroupMember
  | ResourceDetails.Ec2InstanceMember
  | ResourceDetails.Ec2InstanceSavingsPlansMember
  | ResourceDetails.Ec2ReservedInstancesMember
  | ResourceDetails.EcsServiceMember
  | ResourceDetails.ElastiCacheReservedInstancesMember
  | ResourceDetails.LambdaFunctionMember
  | ResourceDetails.OpenSearchReservedInstancesMember
  | ResourceDetails.RdsReservedInstancesMember
  | ResourceDetails.RedshiftReservedInstancesMember
  | ResourceDetails.SageMakerSavingsPlansMember
  | ResourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace ResourceDetails {
  /**
   * @public
   * <p>The Lambda function recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ECS service recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The EC2 instance recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Amazon Elastic Block Store volume recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The EC2 Auto Scaling group recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The EC2 reserved instances recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The RDS reserved instances recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The ElastiCache reserved instances recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The OpenSearch reserved instances recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Redshift reserved instances recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The EC2 instance Savings Plans recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The Compute Savings Plans recommendation details.</p>
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
    $unknown?: never;
  }

  /**
   * @public
   * <p>The SageMaker Savings Plans recommendation details.</p>
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
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  COMPUTE_SAVINGS_PLANS: "ComputeSavingsPlans",
  EBS_VOLUME: "EbsVolume",
  EC2_AUTO_SCALING_GROUP: "Ec2AutoScalingGroup",
  EC2_INSTANCE: "Ec2Instance",
  EC2_INSTANCE_SAVINGS_PLANS: "Ec2InstanceSavingsPlans",
  EC2_RESERVED_INSTANCES: "Ec2ReservedInstances",
  ECS_SERVICE: "EcsService",
  ELASTI_CACHE_RESERVED_INSTANCES: "ElastiCacheReservedInstances",
  LAMBDA_FUNCTION: "LambdaFunction",
  OPEN_SEARCH_RESERVED_INSTANCES: "OpenSearchReservedInstances",
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
 * @public
 * <p>The tag structure that contains a tag key and value.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key that's associated with the tag.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The value that's associated with the tag.</p>
   */
  value?: string;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * @public
   * <p>The ID for the recommendation.</p>
   */
  recommendationId?: string;

  /**
   * @public
   * <p>The unique identifier for the resource. This is the same as the Amazon Resource Name
   *       (ARN), if available.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The account that the recommendation is for.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The currency code used for the recommendation.</p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>The lookback period that's used to generate the recommendation.</p>
   */
  recommendationLookbackPeriodInDays?: number;

  /**
   * @public
   * <p>The lookback period used to calculate cost impact for a recommendation.</p>
   */
  costCalculationLookbackPeriodInDays?: number;

  /**
   * @public
   * <p>The estimated savings percentage relative to the total cost over the cost calculation
   *       lookback period.</p>
   */
  estimatedSavingsPercentage?: number;

  /**
   * @public
   * <p>The estimated savings amount over the lookback period used to calculate cost impact for a
   *       recommendation.</p>
   */
  estimatedSavingsOverCostCalculationLookbackPeriod?: number;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  currentResourceType?: ResourceType;

  /**
   * @public
   * <p>The resource type of the recommendation.</p>
   */
  recommendedResourceType?: ResourceType;

  /**
   * @public
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The source of the recommendation.</p>
   */
  source?: Source;

  /**
   * @public
   * <p>The time when the recommendation was last generated.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * @public
   * <p>The estimated monthly savings amount for the recommendation.</p>
   */
  estimatedMonthlySavings?: number;

  /**
   * @public
   * <p>The estimated monthly cost of the recommendation.</p>
   */
  estimatedMonthlyCost?: number;

  /**
   * @public
   * <p>The effort required to implement the recommendation.</p>
   */
  implementationEffort?: ImplementationEffort;

  /**
   * @public
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   */
  restartNeeded?: boolean;

  /**
   * @public
   * <p>The type of action you can take by adopting the recommendation.</p>
   */
  actionType?: ActionType;

  /**
   * @public
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   */
  rollbackPossible?: boolean;

  /**
   * @public
   * <p>The details for the resource.</p>
   */
  currentResourceDetails?: ResourceDetails;

  /**
   * @public
   * <p>The details about the recommended resource.</p>
   */
  recommendedResourceDetails?: ResourceDetails;

  /**
   * @public
   * <p>A list of tags associated with the resource for which the recommendation exists.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that was not found.</p>
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
   * @public
   * <p>Indicates whether to return the enrollment status for the organization.</p>
   */
  includeOrganizationInfo?: boolean;

  /**
   * @public
   * <p>The account ID of a member account in the organization.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that are returned for the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListEnrollmentStatusesResponse {
  /**
   * @public
   * <p>The enrollment status of a specific account ID, including creation and last updated
   *       timestamps.</p>
   */
  items?: AccountEnrollmentStatus[];

  /**
   * @public
   * <p>The enrollment status of all member accounts in the organization if the account is the
   *       management account.</p>
   */
  includeMemberAccounts?: boolean;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Describes a filter that returns a more specific list of recommendations. Filters
 *       recommendations by different dimensions.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   */
  restartNeeded?: boolean;

  /**
   * @public
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   */
  rollbackPossible?: boolean;

  /**
   * @public
   * <p>The effort required to implement the recommendation.</p>
   */
  implementationEfforts?: ImplementationEffort[];

  /**
   * @public
   * <p>The account that the recommendation is for.</p>
   */
  accountIds?: string[];

  /**
   * @public
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  regions?: string[];

  /**
   * @public
   * <p>The resource type of the recommendation.</p>
   */
  resourceTypes?: ResourceType[];

  /**
   * @public
   * <p>The type of action you can take by adopting the recommendation.</p>
   */
  actionTypes?: ActionType[];

  /**
   * @public
   * <p>A list of tags assigned to the recommendation.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The resource ID of the recommendation.</p>
   */
  resourceIds?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   */
  resourceArns?: string[];

  /**
   * @public
   * <p>The IDs for the recommendations.</p>
   */
  recommendationIds?: string[];
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
 * @public
 * <p>Defines how rows will be sorted in the response.</p>
 */
export interface OrderBy {
  /**
   * @public
   * <p>Sorts by dimension values.</p>
   */
  dimension?: string;

  /**
   * @public
   * <p>The order that's used to sort the data.</p>
   */
  order?: Order;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * @public
   * <p>The constraints that you want all returned recommendations to match.</p>
   */
  filter?: Filter;

  /**
   * @public
   * <p>The ordering of recommendations by a dimension.</p>
   */
  orderBy?: OrderBy;

  /**
   * @public
   * <p>List of all recommendations for a resource, or a single recommendation if de-duped by
   *         <code>resourceId</code>.</p>
   */
  includeAllRecommendations?: boolean;

  /**
   * @public
   * <p>The maximum number of recommendations that are returned for the request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Describes a recommendation.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The ID for the recommendation.</p>
   */
  recommendationId?: string;

  /**
   * @public
   * <p>The account that the recommendation is for.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the resource.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The resource ID for the recommendation.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the recommendation.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The current resource type.</p>
   */
  currentResourceType?: string;

  /**
   * @public
   * <p>The recommended resource type.</p>
   */
  recommendedResourceType?: string;

  /**
   * @public
   * <p>The estimated monthly savings amount for the recommendation.</p>
   */
  estimatedMonthlySavings?: number;

  /**
   * @public
   * <p>The estimated savings percentage relative to the total cost over the cost calculation
   *       lookback period.</p>
   */
  estimatedSavingsPercentage?: number;

  /**
   * @public
   * <p>The estimated monthly cost for the recommendation.</p>
   */
  estimatedMonthlyCost?: number;

  /**
   * @public
   * <p>The currency code used for the recommendation.</p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>The effort required to implement the recommendation.</p>
   */
  implementationEffort?: string;

  /**
   * @public
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   */
  restartNeeded?: boolean;

  /**
   * @public
   * <p>The type of tasks that can be carried out by this action.</p>
   */
  actionType?: string;

  /**
   * @public
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   */
  rollbackPossible?: boolean;

  /**
   * @public
   * <p>Describes the current resource.</p>
   */
  currentResourceSummary?: string;

  /**
   * @public
   * <p>Describes the recommended resource.</p>
   */
  recommendedResourceSummary?: string;

  /**
   * @public
   * <p>The time when the recommendation was last generated.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * @public
   * <p>The lookback period that's used to generate the recommendation.</p>
   */
  recommendationLookbackPeriodInDays?: number;

  /**
   * @public
   * <p>The source of the recommendation.</p>
   */
  source?: Source;

  /**
   * @public
   * <p>A list of tags assigned to the recommendation.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * @public
   * <p>List of all savings recommendations.</p>
   */
  items?: Recommendation[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRecommendationSummariesRequest {
  /**
   * @public
   * <p>Describes a filter that returns a more specific list of recommendations. Filters
   *       recommendations by different dimensions.</p>
   */
  filter?: Filter;

  /**
   * @public
   * <p>The grouping of recommendations by a dimension.</p>
   */
  groupBy: string | undefined;

  /**
   * @public
   * <p>The maximum number of recommendations that are returned for the request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The summary of rightsizing recommendations, including de-duped savings from all types of
 *       recommendations.</p>
 */
export interface RecommendationSummary {
  /**
   * @public
   * <p>The grouping of recommendations.</p>
   */
  group?: string;

  /**
   * @public
   * <p>The estimated total savings resulting from modifications, on a monthly basis.</p>
   */
  estimatedMonthlySavings?: number;

  /**
   * @public
   * <p>The total number of instance recommendations.</p>
   */
  recommendationCount?: number;
}

/**
 * @public
 */
export interface ListRecommendationSummariesResponse {
  /**
   * @public
   * <p>The total overall savings for the aggregated view.</p>
   */
  estimatedTotalDedupedSavings?: number;

  /**
   * @public
   * <p>List of all savings recommendations.</p>
   */
  items?: RecommendationSummary[];

  /**
   * @public
   * <p>The dimension used to group the recommendations by.</p>
   */
  groupBy?: string;

  /**
   * @public
   * <p>The currency code used for the recommendation.</p>
   */
  currencyCode?: string;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusRequest {
  /**
   * @public
   * <p>Sets the account status.</p>
   */
  status: EnrollmentStatus | undefined;

  /**
   * @public
   * <p>Indicates whether to enroll member accounts of the organization if the account is the
   *       management account.</p>
   */
  includeMemberAccounts?: boolean;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * @public
   * <p>The enrollment status of the account.</p>
   */
  status?: string;
}

/**
 * @public
 */
export interface UpdatePreferencesRequest {
  /**
   * @public
   * <p>Sets the "savings estimation mode" preference.</p>
   */
  savingsEstimationMode?: SavingsEstimationMode;

  /**
   * @public
   * <p>Sets the "member account discount visibility" preference.</p>
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
}

/**
 * @public
 */
export interface UpdatePreferencesResponse {
  /**
   * @public
   * <p>Shows the status of the "savings estimation mode" preference.</p>
   */
  savingsEstimationMode?: SavingsEstimationMode;

  /**
   * @public
   * <p>Shows the status of the "member account discount visibility" preference.</p>
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
}
