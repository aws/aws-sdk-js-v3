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
 * <p>Describes the enrollment status of an organization's member accounts in Cost Optimization
 *       Hub.</p>
 * @public
 */
export interface AccountEnrollmentStatus {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The account enrollment status.</p>
   * @public
   */
  status?: EnrollmentStatus;

  /**
   * <p>The time when the account enrollment status was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date;

  /**
   * <p>The time when the account enrollment status was created.</p>
   * @public
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
 * <p>Describes the Amazon Elastic Block Store performance configuration of the current and
 *       recommended resource configuration for a recommendation.</p>
 * @public
 */
export interface BlockStoragePerformanceConfiguration {
  /**
   * <p>The number of I/O operations per second.</p>
   * @public
   */
  iops?: number;

  /**
   * <p>The throughput that the volume supports.</p>
   * @public
   */
  throughput?: number;
}

/**
 * <p>Describes the performance configuration for compute services such as Amazon EC2, Lambda,
 *       and ECS.</p>
 * @public
 */
export interface ComputeConfiguration {
  /**
   * <p>The number of vCPU cores in the resource.</p>
   * @public
   */
  vCpu?: number;

  /**
   * <p>The memory size of the resource.</p>
   * @public
   */
  memorySizeInMB?: number;

  /**
   * <p>The architecture of the resource.</p>
   * @public
   */
  architecture?: string;

  /**
   * <p>The platform of the resource. The platform is the specific combination of operating
   *       system, license model, and software on an instance.</p>
   * @public
   */
  platform?: string;
}

/**
 * <p>The Compute Savings Plans configuration used for recommendations.</p>
 * @public
 */
export interface ComputeSavingsPlansConfiguration {
  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates
   *       recommendations including the management account and member accounts if the value is set to
   *         <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for
   *       individual member accounts only.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The Savings Plans recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The hourly commitment for the Savings Plans type.</p>
   * @public
   */
  hourlyCommitment?: string;
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
  monthlySavingsPlansEligibleCost?: number;

  /**
   * <p>Estimated monthly commitment for the Savings Plan.</p>
   * @public
   */
  estimatedMonthlyCommitment?: number;

  /**
   * <p>Estimated savings as a percentage of your overall costs after buying the Savings Plan.</p>
   * @public
   */
  savingsPercentage?: number;

  /**
   * <p>Estimated On-Demand cost you will pay after buying the Savings Plan.</p>
   * @public
   */
  estimatedOnDemandCost?: number;
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
  pricing?: SavingsPlansPricing;
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
  configuration?: ComputeSavingsPlansConfiguration;

  /**
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   * @public
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
   * <p>Retrieves the status of the "savings estimation mode" preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode;

  /**
   * <p>Retrieves the status of the "member account discount visibility" preference.</p>
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
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
 * <p>The input failed to meet the constraints specified by the Amazon Web Services service in a
 *       specified field.</p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * <p>The list of fields that are invalid.</p>
   * @public
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
   * <p>The ID for the recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;
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
  type?: string;

  /**
   * <p>The storage volume.</p>
   * @public
   */
  sizeInGb?: number;
}

/**
 * <p>The Amazon Elastic Block Store volume configuration used for
 *       recommendations.</p>
 * @public
 */
export interface EbsVolumeConfiguration {
  /**
   * <p>The disk storage of the Amazon Elastic Block Store volume.</p>
   * @public
   */
  storage?: StorageConfiguration;

  /**
   * <p>The Amazon Elastic Block Store performance configuration.</p>
   * @public
   */
  performance?: BlockStoragePerformanceConfiguration;

  /**
   * <p>The Amazon Elastic Block Store attachment state.</p>
   * @public
   */
  attachmentState?: string;
}

/**
 * <p>Estimated discount details of the current and recommended resource configuration for a
 *       recommendation.</p>
 * @public
 */
export interface EstimatedDiscounts {
  /**
   * <p>Estimated Savings Plans discounts.</p>
   * @public
   */
  savingsPlansDiscount?: number;

  /**
   * <p>Estimated reserved instance discounts.</p>
   * @public
   */
  reservedInstancesDiscount?: number;

  /**
   * <p>Estimated other discounts include all discounts that are not itemized. Itemized discounts
   *       include <code>reservedInstanceDiscount</code> and <code>savingsPlansDiscount</code>.</p>
   * @public
   */
  otherDiscount?: number;
}

/**
 * <p>Contains pricing information about the specified resource.</p>
 * @public
 */
export interface ResourcePricing {
  /**
   * <p>The savings estimate using Amazon Web Services public pricing without incorporating any
   *       discounts.</p>
   * @public
   */
  estimatedCostBeforeDiscounts?: number;

  /**
   * <p>The estimated net unused amortized commitment for the recommendation.</p>
   * @public
   */
  estimatedNetUnusedAmortizedCommitments?: number;

  /**
   * <p>The estimated discounts for a recommendation.</p>
   * @public
   */
  estimatedDiscounts?: EstimatedDiscounts;

  /**
   * <p>The savings estimate incorporating all discounts with Amazon Web Services, such as Reserved
   *       Instances and Savings Plans.</p>
   * @public
   */
  estimatedCostAfterDiscounts?: number;
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
  usageType?: string;

  /**
   * <p>The usage amount.</p>
   * @public
   */
  usageAmount?: number;

  /**
   * <p>The operation value.</p>
   * @public
   */
  operation?: string;

  /**
   * <p>The product code.</p>
   * @public
   */
  productCode?: string;

  /**
   * <p>The usage unit.</p>
   * @public
   */
  unit?: string;
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
  usages?: Usage[];

  /**
   * <p>Pricing details of the resource recommendation.</p>
   * @public
   */
  pricing?: ResourcePricing;
}

/**
 * <p>Describes the Amazon Elastic Block Store volume configuration of the current and
 *       recommended resource configuration for a recommendation.</p>
 * @public
 */
export interface EbsVolume {
  /**
   * <p>The Amazon Elastic Block Store volume configuration used for
   *       recommendations.</p>
   * @public
   */
  configuration?: EbsVolumeConfiguration;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * <p>The Instance configuration used for recommendations.</p>
 * @public
 */
export interface InstanceConfiguration {
  /**
   * <p>Details about the type.</p>
   * @public
   */
  type?: string;
}

/**
 * <p>The EC2 auto scaling group configuration used for recommendations.</p>
 * @public
 */
export interface Ec2AutoScalingGroupConfiguration {
  /**
   * <p>Details about the instance.</p>
   * @public
   */
  instance?: InstanceConfiguration;
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
  configuration?: Ec2AutoScalingGroupConfiguration;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
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
  instance?: InstanceConfiguration;
}

/**
 * <p>Describes the EC2 instance configuration of the current and recommended resource
 *       configuration for a recommendation.</p>
 * @public
 */
export interface Ec2Instance {
  /**
   * <p>The EC2 instance configuration used for recommendations.</p>
   * @public
   */
  configuration?: Ec2InstanceConfiguration;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * <p>The EC2 instance Savings Plans configuration used for recommendations.</p>
 * @public
 */
export interface Ec2InstanceSavingsPlansConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The Savings Plans recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The hourly commitment for the Savings Plans type.</p>
   * @public
   */
  hourlyCommitment?: string;

  /**
   * <p>The instance family of the recommended Savings Plan.</p>
   * @public
   */
  instanceFamily?: string;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  savingsPlansRegion?: string;
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
  configuration?: Ec2InstanceSavingsPlansConfiguration;

  /**
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation;
}

/**
 * <p>The EC2 reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface Ec2ReservedInstancesConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The service that you want your recommendations for.</p>
   * @public
   */
  service?: string;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string;

  /**
   * <p>Indicates whether the recommendation is for standard or convertible reservations.</p>
   * @public
   */
  offeringClass?: string;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string;

  /**
   * <p>The platform of the recommended reservation. The platform is the specific combination of
   *       operating system, license model, and software on an instance.</p>
   * @public
   */
  platform?: string;

  /**
   * <p>Determines whether the recommended reservation is dedicated or shared.</p>
   * @public
   */
  tenancy?: string;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string;

  /**
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string;
}

/**
 * <p>Pricing details for your recommended reserved instance.</p>
 * @public
 */
export interface ReservedInstancesPricing {
  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended reserved
   *       instance, over the length of the lookback period.</p>
   * @public
   */
  estimatedOnDemandCost?: number;

  /**
   * <p>The cost of paying for the recommended reserved instance monthly.</p>
   * @public
   */
  monthlyReservationEligibleCost?: number;

  /**
   * <p>The savings percentage relative to the total On-Demand costs that are associated with this
   *       instance.</p>
   * @public
   */
  savingsPercentage?: number;

  /**
   * <p>The estimated cost of your recurring monthly fees for the recommended reserved instance
   *       across the month.</p>
   * @public
   */
  estimatedMonthlyAmortizedReservationCost?: number;
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
  pricing?: ReservedInstancesPricing;
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
  configuration?: Ec2ReservedInstancesConfiguration;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation;
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
  compute?: ComputeConfiguration;
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
  configuration?: EcsServiceConfiguration;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * <p>The ElastiCache reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface ElastiCacheReservedInstancesConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The service that you want your recommendations for.</p>
   * @public
   */
  service?: string;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string;

  /**
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string;
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
  configuration?: ElastiCacheReservedInstancesConfiguration;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation;
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
  compute?: ComputeConfiguration;
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
  configuration?: LambdaFunctionConfiguration;

  /**
   * <p>Cost impact of the recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * <p>The OpenSearch reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface OpenSearchReservedInstancesConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The service that you want your recommendations for.</p>
   * @public
   */
  service?: string;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string;

  /**
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string;
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
  configuration?: OpenSearchReservedInstancesConfiguration;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation;
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
  dbInstanceClass?: string;
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
  instance?: DbInstanceConfiguration;
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
  configuration?: RdsDbInstanceConfiguration;

  /**
   * <p>Cost impact of the resource recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
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
  storageType?: string;

  /**
   * <p>The new amount of storage in GB to allocate for the DB instance.</p>
   * @public
   */
  allocatedStorageInGb?: number;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially
   *       allocated for the DB instance.</p>
   * @public
   */
  iops?: number;

  /**
   * <p>The storage throughput for the DB instance.</p>
   * @public
   */
  storageThroughput?: number;
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
  configuration?: RdsDbInstanceStorageConfiguration;

  /**
   * <p>Cost impact of the resource recommendation.</p>
   * @public
   */
  costCalculation?: ResourceCostCalculation;
}

/**
 * <p>The RDS reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface RdsReservedInstancesConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The service that you want your recommendations for.</p>
   * @public
   */
  service?: string;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string;

  /**
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string;

  /**
   * <p>The license model that the recommended reservation supports.</p>
   * @public
   */
  licenseModel?: string;

  /**
   * <p>The database edition that the recommended reservation supports.</p>
   * @public
   */
  databaseEdition?: string;

  /**
   * <p>The database engine that the recommended reservation supports.</p>
   * @public
   */
  databaseEngine?: string;

  /**
   * <p>Determines whether the recommendation is for a reservation in a single Availability Zone
   *       or a reservation with a backup in a second Availability Zone.</p>
   * @public
   */
  deploymentOption?: string;
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
  configuration?: RdsReservedInstancesConfiguration;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * <p>The Redshift reserved instances configuration used for recommendations.</p>
 * @public
 */
export interface RedshiftReservedInstancesConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The service that you want your recommendations for.</p>
   * @public
   */
  service?: string;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *       purchase.</p>
   * @public
   */
  normalizedUnitsToPurchase?: string;

  /**
   * <p>The reserved instances recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  numberOfInstancesToPurchase?: string;

  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  instanceFamily?: string;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  instanceType?: string;

  /**
   * <p>The Amazon Web Services Region of the commitment.</p>
   * @public
   */
  reservedInstancesRegion?: string;

  /**
   * <p>Determines whether the recommendation is size flexible.</p>
   * @public
   */
  sizeFlexEligible?: boolean;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  currentGeneration?: string;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  upfrontCost?: string;

  /**
   * <p>How much purchasing reserved instances costs you on a monthly basis.</p>
   * @public
   */
  monthlyRecurringCost?: string;
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
  configuration?: RedshiftReservedInstancesConfiguration;

  /**
   * <p>Cost impact of the purchase recommendation.</p>
   * @public
   */
  costCalculation?: ReservedInstancesCostCalculation;
}

/**
 * <p>The SageMaker Savings Plans configuration used for recommendations.</p>
 * @public
 */
export interface SageMakerSavingsPlansConfiguration {
  /**
   * <p>The account scope that you want your recommendations for.</p>
   * @public
   */
  accountScope?: string;

  /**
   * <p>The Savings Plans recommendation term in years.</p>
   * @public
   */
  term?: string;

  /**
   * <p>The payment option for the commitment.</p>
   * @public
   */
  paymentOption?: string;

  /**
   * <p>The hourly commitment for the Savings Plans type.</p>
   * @public
   */
  hourlyCommitment?: string;
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
  configuration?: SageMakerSavingsPlansConfiguration;

  /**
   * <p>Cost impact of the Savings Plans purchase recommendation.</p>
   * @public
   */
  costCalculation?: SavingsPlansCostCalculation;
}

/**
 * <p>Contains detailed information about the specified resource.</p>
 * @public
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
    $unknown?: never;
  }

  /**
   * <p>The SageMaker Savings Plans recommendation details.</p>
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
  key?: string;

  /**
   * <p>The value that's associated with the tag.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * <p>The ID for the recommendation.</p>
   * @public
   */
  recommendationId?: string;

  /**
   * <p>The unique identifier for the resource. This is the same as the Amazon Resource Name
   *       (ARN), if available.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The account that the recommendation is for.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The currency code used for the recommendation.</p>
   * @public
   */
  currencyCode?: string;

  /**
   * <p>The lookback period that's used to generate the recommendation.</p>
   * @public
   */
  recommendationLookbackPeriodInDays?: number;

  /**
   * <p>The lookback period used to calculate cost impact for a recommendation.</p>
   * @public
   */
  costCalculationLookbackPeriodInDays?: number;

  /**
   * <p>The estimated savings percentage relative to the total cost over the cost calculation
   *       lookback period.</p>
   * @public
   */
  estimatedSavingsPercentage?: number;

  /**
   * <p>The estimated savings amount over the lookback period used to calculate cost impact for a
   *       recommendation.</p>
   * @public
   */
  estimatedSavingsOverCostCalculationLookbackPeriod?: number;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  currentResourceType?: ResourceType;

  /**
   * <p>The resource type of the recommendation.</p>
   * @public
   */
  recommendedResourceType?: ResourceType;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  region?: string;

  /**
   * <p>The source of the recommendation.</p>
   * @public
   */
  source?: Source;

  /**
   * <p>The time when the recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The estimated monthly savings amount for the recommendation.</p>
   * @public
   */
  estimatedMonthlySavings?: number;

  /**
   * <p>The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.</p>
   * @public
   */
  estimatedMonthlyCost?: number;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  implementationEffort?: ImplementationEffort;

  /**
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   * @public
   */
  restartNeeded?: boolean;

  /**
   * <p>The type of action you can take by adopting the recommendation.</p>
   * @public
   */
  actionType?: ActionType;

  /**
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   * @public
   */
  rollbackPossible?: boolean;

  /**
   * <p>The details for the resource.</p>
   * @public
   */
  currentResourceDetails?: ResourceDetails;

  /**
   * <p>The details about the recommended resource.</p>
   * @public
   */
  recommendedResourceDetails?: ResourceDetails;

  /**
   * <p>A list of tags associated with the resource for which the recommendation exists.</p>
   * @public
   */
  tags?: Tag[];
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
  includeOrganizationInfo?: boolean;

  /**
   * <p>The account ID of a member account in the organization.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of objects that are returned for the request.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListEnrollmentStatusesResponse {
  /**
   * <p>The enrollment status of a specific account ID, including creation and last updated
   *       timestamps.</p>
   * @public
   */
  items?: AccountEnrollmentStatus[];

  /**
   * <p>The enrollment status of all member accounts in the organization if the account is the
   *       management account or delegated administrator.</p>
   * @public
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Describes a filter that returns a more specific list of recommendations. Filters
 *       recommendations by different dimensions.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   * @public
   */
  restartNeeded?: boolean;

  /**
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   * @public
   */
  rollbackPossible?: boolean;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  implementationEfforts?: ImplementationEffort[];

  /**
   * <p>The account that the recommendation is for.</p>
   * @public
   */
  accountIds?: string[];

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  regions?: string[];

  /**
   * <p>The resource type of the recommendation.</p>
   * @public
   */
  resourceTypes?: ResourceType[];

  /**
   * <p>The type of action you can take by adopting the recommendation.</p>
   * @public
   */
  actionTypes?: ActionType[];

  /**
   * <p>A list of tags assigned to the recommendation.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>The resource ID of the recommendation.</p>
   * @public
   */
  resourceIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   * @public
   */
  resourceArns?: string[];

  /**
   * <p>The IDs for the recommendations.</p>
   * @public
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
 * <p>Defines how rows will be sorted in the response.</p>
 * @public
 */
export interface OrderBy {
  /**
   * <p>Sorts by dimension values.</p>
   * @public
   */
  dimension?: string;

  /**
   * <p>The order that's used to sort the data.</p>
   * @public
   */
  order?: Order;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * <p>The constraints that you want all returned recommendations to match.</p>
   * @public
   */
  filter?: Filter;

  /**
   * <p>The ordering of recommendations by a dimension.</p>
   * @public
   */
  orderBy?: OrderBy;

  /**
   * <p>List of all recommendations for a resource, or a single recommendation if de-duped by
   *         <code>resourceId</code>.</p>
   * @public
   */
  includeAllRecommendations?: boolean;

  /**
   * <p>The maximum number of recommendations that are returned for the request.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
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
  recommendationId?: string;

  /**
   * <p>The account that the recommendation is for.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The Amazon Web Services Region of the resource.</p>
   * @public
   */
  region?: string;

  /**
   * <p>The resource ID for the recommendation.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the recommendation.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The current resource type.</p>
   * @public
   */
  currentResourceType?: string;

  /**
   * <p>The recommended resource type.</p>
   * @public
   */
  recommendedResourceType?: string;

  /**
   * <p>The estimated monthly savings amount for the recommendation.</p>
   * @public
   */
  estimatedMonthlySavings?: number;

  /**
   * <p>The estimated savings percentage relative to the total cost over the cost calculation
   *       lookback period.</p>
   * @public
   */
  estimatedSavingsPercentage?: number;

  /**
   * <p>The estimated monthly cost of the current resource. For Reserved Instances and Savings Plans, it refers to the cost for eligible usage.</p>
   * @public
   */
  estimatedMonthlyCost?: number;

  /**
   * <p>The currency code used for the recommendation.</p>
   * @public
   */
  currencyCode?: string;

  /**
   * <p>The effort required to implement the recommendation.</p>
   * @public
   */
  implementationEffort?: string;

  /**
   * <p>Whether or not implementing the recommendation requires a restart.</p>
   * @public
   */
  restartNeeded?: boolean;

  /**
   * <p>The type of tasks that can be carried out by this action.</p>
   * @public
   */
  actionType?: string;

  /**
   * <p>Whether or not implementing the recommendation can be rolled back.</p>
   * @public
   */
  rollbackPossible?: boolean;

  /**
   * <p>Describes the current resource.</p>
   * @public
   */
  currentResourceSummary?: string;

  /**
   * <p>Describes the recommended resource.</p>
   * @public
   */
  recommendedResourceSummary?: string;

  /**
   * <p>The time when the recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The lookback period that's used to generate the recommendation.</p>
   * @public
   */
  recommendationLookbackPeriodInDays?: number;

  /**
   * <p>The source of the recommendation.</p>
   * @public
   */
  source?: Source;

  /**
   * <p>A list of tags assigned to the recommendation.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p>List of all savings recommendations.</p>
   * @public
   */
  items?: Recommendation[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
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
   * <p>Describes a filter that returns a more specific list of recommendations. Filters
   *       recommendations by different dimensions.</p>
   * @public
   */
  filter?: Filter;

  /**
   * <p>The grouping of recommendations by a dimension.</p>
   * @public
   */
  groupBy: string | undefined;

  /**
   * <p>The maximum number of recommendations to be returned for the request.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Additional metrics to be returned for the request. The only valid value is
   *         <code>savingsPercentage</code>.</p>
   * @public
   */
  metrics?: SummaryMetrics[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The summary of rightsizing recommendations, including de-duped savings from all types of
 *       recommendations.</p>
 * @public
 */
export interface RecommendationSummary {
  /**
   * <p>The grouping of recommendations.</p>
   * @public
   */
  group?: string;

  /**
   * <p>The estimated total savings resulting from modifications, on a monthly basis.</p>
   * @public
   */
  estimatedMonthlySavings?: number;

  /**
   * <p>The total number of instance recommendations.</p>
   * @public
   */
  recommendationCount?: number;
}

/**
 * <p>The results or descriptions for the additional metrics, based on whether the metrics were
 *       or were not requested.</p>
 * @public
 */
export interface SummaryMetricsResult {
  /**
   * <p>The savings percentage based on your Amazon Web Services spend over the past 30
   *       days.</p>
   *          <note>
   *             <p>Savings percentage is only supported when filtering by Region, account ID, or
   *         tags.</p>
   *          </note>
   * @public
   */
  savingsPercentage?: string;
}

/**
 * @public
 */
export interface ListRecommendationSummariesResponse {
  /**
   * <p>The total overall savings for the aggregated view.</p>
   * @public
   */
  estimatedTotalDedupedSavings?: number;

  /**
   * <p>A list of all savings recommendations.</p>
   * @public
   */
  items?: RecommendationSummary[];

  /**
   * <p>The dimension used to group the recommendations by.</p>
   * @public
   */
  groupBy?: string;

  /**
   * <p>The currency code used for the recommendation.</p>
   * @public
   */
  currencyCode?: string;

  /**
   * <p>The results or descriptions for the additional metrics, based on whether the metrics were
   *       or were not requested.</p>
   * @public
   */
  metrics?: SummaryMetricsResult;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string;
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
   * <p>Indicates whether to enroll member accounts of the organization if the account is the
   *       management account or delegated administrator.</p>
   * @public
   */
  includeMemberAccounts?: boolean;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * <p>The enrollment status of the account.</p>
   * @public
   */
  status?: string;
}

/**
 * @public
 */
export interface UpdatePreferencesRequest {
  /**
   * <p>Sets the "savings estimation mode" preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode;

  /**
   * <p>Sets the "member account discount visibility" preference.</p>
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
}

/**
 * @public
 */
export interface UpdatePreferencesResponse {
  /**
   * <p>Shows the status of the "savings estimation mode" preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode;

  /**
   * <p>Shows the status of the "member account discount visibility" preference.</p>
   * @public
   */
  memberAccountDiscountVisibility?: MemberAccountDiscountVisibility;
}
