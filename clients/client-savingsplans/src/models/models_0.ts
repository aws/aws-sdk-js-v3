// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SavingsplansServiceException as __BaseException } from "./SavingsplansServiceException";

/**
 * @public
 */
export interface CreateSavingsPlanRequest {
  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  savingsPlanOfferingId: string | undefined;

  /**
   * <p>The hourly commitment, in the same currency of the <code>savingsPlanOfferingId</code>.
   *          This is a value between 0.001 and 1 million. You cannot specify more than five digits after
   *          the decimal point.</p>
   * @public
   */
  commitment: string | undefined;

  /**
   * <p>The up-front payment amount. This is a whole number between 50 and 99 percent of the
   *          total value of the Savings Plan. This parameter is only supported if the
   *          payment option is <code>Partial Upfront</code>.</p>
   * @public
   */
  upfrontPaymentAmount?: string | undefined;

  /**
   * <p>The purchase time of the Savings Plan in UTC format
   *          (YYYY-MM-DDTHH:MM:SSZ).</p>
   * @public
   */
  purchaseTime?: Date | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSavingsPlanResponse {
  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId?: string | undefined;
}

/**
 * <p>An unexpected error occurred.</p>
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
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>One of the input parameters is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteQueuedSavingsPlanRequest {
  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedSavingsPlanResponse {}

/**
 * @public
 * @enum
 */
export const SavingsPlanRateFilterName = {
  INSTANCE_TYPE: "instanceType",
  OPERATION: "operation",
  PRODUCT_DESCRIPTION: "productDescription",
  PRODUCT_TYPE: "productType",
  REGION: "region",
  SERVICE_CODE: "serviceCode",
  TENANCY: "tenancy",
  USAGE_TYPE: "usageType",
} as const;

/**
 * @public
 */
export type SavingsPlanRateFilterName = (typeof SavingsPlanRateFilterName)[keyof typeof SavingsPlanRateFilterName];

/**
 * <p>Information about a Savings Plan rate filter.</p>
 * @public
 */
export interface SavingsPlanRateFilter {
  /**
   * <p>The filter name.</p>
   * @public
   */
  name?: SavingsPlanRateFilterName | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlanRatesRequest {
  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId: string | undefined;

  /**
   * <p>The filters.</p>
   * @public
   */
  filters?: SavingsPlanRateFilter[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional
   *          results, make another call with the returned token value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  CNY: "CNY",
  USD: "USD",
} as const;

/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const SavingsPlanProductType = {
  EC2: "EC2",
  FARGATE: "Fargate",
  LAMBDA: "Lambda",
  SAGEMAKER: "SageMaker",
} as const;

/**
 * @public
 */
export type SavingsPlanProductType = (typeof SavingsPlanProductType)[keyof typeof SavingsPlanProductType];

/**
 * @public
 * @enum
 */
export const SavingsPlanRatePropertyKey = {
  INSTANCE_FAMILY: "instanceFamily",
  INSTANCE_TYPE: "instanceType",
  PRODUCT_DESCRIPTION: "productDescription",
  REGION: "region",
  TENANCY: "tenancy",
} as const;

/**
 * @public
 */
export type SavingsPlanRatePropertyKey = (typeof SavingsPlanRatePropertyKey)[keyof typeof SavingsPlanRatePropertyKey];

/**
 * <p>Information about a Savings Plan rate property.</p>
 * @public
 */
export interface SavingsPlanRateProperty {
  /**
   * <p>The property name.</p>
   * @public
   */
  name?: SavingsPlanRatePropertyKey | undefined;

  /**
   * <p>The property value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlanRateServiceCode = {
  EC2: "AmazonEC2",
  FARGATE: "AmazonECS",
  FARGATE_EKS: "AmazonEKS",
  LAMBDA: "AWSLambda",
  SAGEMAKER: "AmazonSageMaker",
} as const;

/**
 * @public
 */
export type SavingsPlanRateServiceCode = (typeof SavingsPlanRateServiceCode)[keyof typeof SavingsPlanRateServiceCode];

/**
 * @public
 * @enum
 */
export const SavingsPlanRateUnit = {
  HOURS: "Hrs",
  LAMBDA_GB_SECOND: "Lambda-GB-Second",
  REQUEST: "Request",
} as const;

/**
 * @public
 */
export type SavingsPlanRateUnit = (typeof SavingsPlanRateUnit)[keyof typeof SavingsPlanRateUnit];

/**
 * <p>Information about a Savings Plan rate.</p>
 * @public
 */
export interface SavingsPlanRate {
  /**
   * <p>The rate.</p>
   * @public
   */
  rate?: string | undefined;

  /**
   * <p>The currency.</p>
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * <p>The unit.</p>
   * @public
   */
  unit?: SavingsPlanRateUnit | undefined;

  /**
   * <p>The product type.</p>
   * @public
   */
  productType?: SavingsPlanProductType | undefined;

  /**
   * <p>The service.</p>
   * @public
   */
  serviceCode?: SavingsPlanRateServiceCode | undefined;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   * @public
   */
  usageType?: string | undefined;

  /**
   * <p>The specific Amazon Web Services operation for the line item in the billing
   *          report.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>The properties.</p>
   * @public
   */
  properties?: SavingsPlanRateProperty[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlanRatesResponse {
  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId?: string | undefined;

  /**
   * <p>Information about the Savings Plan rates.</p>
   * @public
   */
  searchResults?: SavingsPlanRate[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlansFilterName = {
  COMMITMENT: "commitment",
  EC2_INSTANCE_FAMILY: "ec2-instance-family",
  END: "end",
  PAYMENT_OPTION: "payment-option",
  REGION: "region",
  SAVINGS_PLAN_TYPE: "savings-plan-type",
  START: "start",
  TERM: "term",
  UPFRONT: "upfront",
} as const;

/**
 * @public
 */
export type SavingsPlansFilterName = (typeof SavingsPlansFilterName)[keyof typeof SavingsPlansFilterName];

/**
 * <p>Information about a Savings Plan filter.</p>
 * @public
 */
export interface SavingsPlanFilter {
  /**
   * <p>The filter name.</p>
   * @public
   */
  name?: SavingsPlansFilterName | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlanState = {
  ACTIVE: "active",
  PAYMENT_FAILED: "payment-failed",
  PAYMENT_PENDING: "payment-pending",
  PENDING_RETURN: "pending-return",
  QUEUED: "queued",
  QUEUED_DELETED: "queued-deleted",
  RETIRED: "retired",
  RETURNED: "returned",
} as const;

/**
 * @public
 */
export type SavingsPlanState = (typeof SavingsPlanState)[keyof typeof SavingsPlanState];

/**
 * @public
 */
export interface DescribeSavingsPlansRequest {
  /**
   * <p>The Amazon Resource Names (ARN) of the Savings Plans.</p>
   * @public
   */
  savingsPlanArns?: string[] | undefined;

  /**
   * <p>The IDs of the Savings Plans.</p>
   * @public
   */
  savingsPlanIds?: string[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional
   *          results, make another call with the returned token value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The current states of the Savings Plans.</p>
   * @public
   */
  states?: SavingsPlanState[] | undefined;

  /**
   * <p>The filters.</p>
   * @public
   */
  filters?: SavingsPlanFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlanPaymentOption = {
  ALL_UPFRONT: "All Upfront",
  NO_UPFRONT: "No Upfront",
  PARTIAL_UPFRONT: "Partial Upfront",
} as const;

/**
 * @public
 */
export type SavingsPlanPaymentOption = (typeof SavingsPlanPaymentOption)[keyof typeof SavingsPlanPaymentOption];

/**
 * @public
 * @enum
 */
export const SavingsPlanType = {
  COMPUTE: "Compute",
  EC2_INSTANCE: "EC2Instance",
  SAGEMAKER: "SageMaker",
} as const;

/**
 * @public
 */
export type SavingsPlanType = (typeof SavingsPlanType)[keyof typeof SavingsPlanType];

/**
 * <p>Information about a Savings Plan.</p>
 * @public
 */
export interface SavingsPlan {
  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  offeringId?: string | undefined;

  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Savings Plan.</p>
   * @public
   */
  savingsPlanArn?: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The start time.</p>
   * @public
   */
  start?: string | undefined;

  /**
   * <p>The end time.</p>
   * @public
   */
  end?: string | undefined;

  /**
   * <p>The current state.</p>
   * @public
   */
  state?: SavingsPlanState | undefined;

  /**
   * <p>The Amazon Web Services Region.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The EC2 instance family.</p>
   * @public
   */
  ec2InstanceFamily?: string | undefined;

  /**
   * <p>The plan type.</p>
   * @public
   */
  savingsPlanType?: SavingsPlanType | undefined;

  /**
   * <p>The payment option.</p>
   * @public
   */
  paymentOption?: SavingsPlanPaymentOption | undefined;

  /**
   * <p>The product types.</p>
   * @public
   */
  productTypes?: SavingsPlanProductType[] | undefined;

  /**
   * <p>The currency.</p>
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * <p>The hourly commitment amount in the specified currency.</p>
   * @public
   */
  commitment?: string | undefined;

  /**
   * <p>The up-front payment amount.</p>
   * @public
   */
  upfrontPaymentAmount?: string | undefined;

  /**
   * <p>The recurring payment amount.</p>
   * @public
   */
  recurringPaymentAmount?: string | undefined;

  /**
   * <p>The duration of the term, in seconds.</p>
   * @public
   */
  termDurationInSeconds?: number | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The time until when a return for the Savings Plan can be requested. If the
   *             Savings Plan is not returnable, the field reflects the Savings Plan start time.</p>
   * @public
   */
  returnableUntil?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansResponse {
  /**
   * <p>Information about the Savings Plans.</p>
   * @public
   */
  savingsPlans?: SavingsPlan[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlanRateFilterAttribute = {
  INSTANCE_FAMILY: "instanceFamily",
  INSTANCE_TYPE: "instanceType",
  PRODUCT_DESCRIPTION: "productDescription",
  PRODUCT_ID: "productId",
  REGION: "region",
  TENANCY: "tenancy",
} as const;

/**
 * @public
 */
export type SavingsPlanRateFilterAttribute =
  (typeof SavingsPlanRateFilterAttribute)[keyof typeof SavingsPlanRateFilterAttribute];

/**
 * <p>Information about a Savings Plan offering rate filter.</p>
 * @public
 */
export interface SavingsPlanOfferingRateFilterElement {
  /**
   * <p>The filter name.</p>
   * @public
   */
  name?: SavingsPlanRateFilterAttribute | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingRatesRequest {
  /**
   * <p>The IDs of the offerings.</p>
   * @public
   */
  savingsPlanOfferingIds?: string[] | undefined;

  /**
   * <p>The payment options.</p>
   * @public
   */
  savingsPlanPaymentOptions?: SavingsPlanPaymentOption[] | undefined;

  /**
   * <p>The plan types.</p>
   * @public
   */
  savingsPlanTypes?: SavingsPlanType[] | undefined;

  /**
   * <p>The Amazon Web Services products.</p>
   * @public
   */
  products?: SavingsPlanProductType[] | undefined;

  /**
   * <p>The services.</p>
   * @public
   */
  serviceCodes?: SavingsPlanRateServiceCode[] | undefined;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   * @public
   */
  usageTypes?: string[] | undefined;

  /**
   * <p>The specific Amazon Web Services operation for the line item in the billing
   *          report.</p>
   * @public
   */
  operations?: string[] | undefined;

  /**
   * <p>The filters.</p>
   * @public
   */
  filters?: SavingsPlanOfferingRateFilterElement[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional
   *          results, make another call with the returned token value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about a Savings Plan offering rate property.</p>
 * @public
 */
export interface SavingsPlanOfferingRateProperty {
  /**
   * <p>The property name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The property value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Information about a Savings Plan offering.</p>
 * @public
 */
export interface ParentSavingsPlanOffering {
  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  offeringId?: string | undefined;

  /**
   * <p>The payment option.</p>
   * @public
   */
  paymentOption?: SavingsPlanPaymentOption | undefined;

  /**
   * <p>The plan type.</p>
   * @public
   */
  planType?: SavingsPlanType | undefined;

  /**
   * <p>The duration, in seconds.</p>
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * <p>The currency.</p>
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  planDescription?: string | undefined;
}

/**
 * <p>Information about a Savings Plan offering rate.</p>
 * @public
 */
export interface SavingsPlanOfferingRate {
  /**
   * <p>The Savings Plan offering.</p>
   * @public
   */
  savingsPlanOffering?: ParentSavingsPlanOffering | undefined;

  /**
   * <p>The Savings Plan rate.</p>
   * @public
   */
  rate?: string | undefined;

  /**
   * <p>The unit.</p>
   * @public
   */
  unit?: SavingsPlanRateUnit | undefined;

  /**
   * <p>The product type.</p>
   * @public
   */
  productType?: SavingsPlanProductType | undefined;

  /**
   * <p>The service.</p>
   * @public
   */
  serviceCode?: SavingsPlanRateServiceCode | undefined;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   * @public
   */
  usageType?: string | undefined;

  /**
   * <p>The specific Amazon Web Services operation for the line item in the billing
   *          report.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>The properties.</p>
   * @public
   */
  properties?: SavingsPlanOfferingRateProperty[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingRatesResponse {
  /**
   * <p>Information about the Savings Plans offering rates.</p>
   * @public
   */
  searchResults?: SavingsPlanOfferingRate[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlanOfferingFilterAttribute = {
  instanceFamily: "instanceFamily",
  region: "region",
} as const;

/**
 * @public
 */
export type SavingsPlanOfferingFilterAttribute =
  (typeof SavingsPlanOfferingFilterAttribute)[keyof typeof SavingsPlanOfferingFilterAttribute];

/**
 * <p>Information about a Savings Plan offering filter.</p>
 * @public
 */
export interface SavingsPlanOfferingFilterElement {
  /**
   * <p>The filter name.</p>
   * @public
   */
  name?: SavingsPlanOfferingFilterAttribute | undefined;

  /**
   * <p>The filter values.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingsRequest {
  /**
   * <p>The IDs of the offerings.</p>
   * @public
   */
  offeringIds?: string[] | undefined;

  /**
   * <p>The payment options.</p>
   * @public
   */
  paymentOptions?: SavingsPlanPaymentOption[] | undefined;

  /**
   * <p>The product type.</p>
   * @public
   */
  productType?: SavingsPlanProductType | undefined;

  /**
   * <p>The plan types.</p>
   * @public
   */
  planTypes?: SavingsPlanType[] | undefined;

  /**
   * <p>The duration, in seconds.</p>
   * @public
   */
  durations?: number[] | undefined;

  /**
   * <p>The currencies.</p>
   * @public
   */
  currencies?: CurrencyCode[] | undefined;

  /**
   * <p>The descriptions.</p>
   * @public
   */
  descriptions?: string[] | undefined;

  /**
   * <p>The services.</p>
   * @public
   */
  serviceCodes?: string[] | undefined;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   * @public
   */
  usageTypes?: string[] | undefined;

  /**
   * <p>The specific Amazon Web Services operation for the line item in the billing
   *          report.</p>
   * @public
   */
  operations?: string[] | undefined;

  /**
   * <p>The filters.</p>
   * @public
   */
  filters?: SavingsPlanOfferingFilterElement[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional
   *          results, make another call with the returned token value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlanOfferingPropertyKey = {
  INSTANCE_FAMILY: "instanceFamily",
  REGION: "region",
} as const;

/**
 * @public
 */
export type SavingsPlanOfferingPropertyKey =
  (typeof SavingsPlanOfferingPropertyKey)[keyof typeof SavingsPlanOfferingPropertyKey];

/**
 * <p>Information about a Savings Plan offering property.</p>
 * @public
 */
export interface SavingsPlanOfferingProperty {
  /**
   * <p>The property name.</p>
   * @public
   */
  name?: SavingsPlanOfferingPropertyKey | undefined;

  /**
   * <p>The property value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Information about a Savings Plan offering.</p>
 * @public
 */
export interface SavingsPlanOffering {
  /**
   * <p>The ID of the offering.</p>
   * @public
   */
  offeringId?: string | undefined;

  /**
   * <p>The product type.</p>
   * @public
   */
  productTypes?: SavingsPlanProductType[] | undefined;

  /**
   * <p>The plan type.</p>
   * @public
   */
  planType?: SavingsPlanType | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The payment option.</p>
   * @public
   */
  paymentOption?: SavingsPlanPaymentOption | undefined;

  /**
   * <p>The duration, in seconds.</p>
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * <p>The currency.</p>
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * <p>The service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   * @public
   */
  usageType?: string | undefined;

  /**
   * <p>The specific Amazon Web Services operation for the line item in the billing
   *          report.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>The properties.</p>
   * @public
   */
  properties?: SavingsPlanOfferingProperty[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingsResponse {
  /**
   * <p>Information about the Savings Plans offerings.</p>
   * @public
   */
  searchResults?: SavingsPlanOffering[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ReturnSavingsPlanRequest {
  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ReturnSavingsPlanResponse {
  /**
   * <p>The ID of the Savings Plan.</p>
   * @public
   */
  savingsPlanId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
