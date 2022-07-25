// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SavingsplansServiceException as __BaseException } from "./SavingsplansServiceException";

export interface CreateSavingsPlanRequest {
  /**
   * <p>The ID of the offering.</p>
   */
  savingsPlanOfferingId: string | undefined;

  /**
   * <p>The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more
   *         than five digits after the decimal point.</p>
   */
  commitment: string | undefined;

  /**
   * <p>The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan.
   *        This parameter is supported only if the payment option is <code>Partial Upfront</code>.</p>
   */
  upfrontPaymentAmount?: string;

  /**
   * <p>The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).</p>
   */
  purchaseTime?: Date;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>One or more tags.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateSavingsPlanResponse {
  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId?: string;
}

/**
 * <p>An unexpected error occurred.</p>
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

export interface DeleteQueuedSavingsPlanRequest {
  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId: string | undefined;
}

export interface DeleteQueuedSavingsPlanResponse {}

export enum SavingsPlanRateFilterName {
  INSTANCE_TYPE = "instanceType",
  OPERATION = "operation",
  PRODUCT_DESCRIPTION = "productDescription",
  PRODUCT_TYPE = "productType",
  REGION = "region",
  SERVICE_CODE = "serviceCode",
  TENANCY = "tenancy",
  USAGE_TYPE = "usageType",
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanRateFilter {
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlanRateFilterName | string;

  /**
   * <p>The filter values.</p>
   */
  values?: string[];
}

export interface DescribeSavingsPlanRatesRequest {
  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId: string | undefined;

  /**
   * <p>The filters.</p>
   */
  filters?: SavingsPlanRateFilter[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *          call with the returned token value.</p>
   */
  maxResults?: number;
}

export type CurrencyCode = "CNY" | "USD";

export enum SavingsPlanProductType {
  EC2 = "EC2",
  FARGATE = "Fargate",
  LAMBDA = "Lambda",
  SAGEMAKER = "SageMaker",
}

export enum SavingsPlanRatePropertyKey {
  INSTANCE_FAMILY = "instanceFamily",
  INSTANCE_TYPE = "instanceType",
  PRODUCT_DESCRIPTION = "productDescription",
  REGION = "region",
  TENANCY = "tenancy",
}

/**
 * <p>Information about a property.</p>
 */
export interface SavingsPlanRateProperty {
  /**
   * <p>The property name.</p>
   */
  name?: SavingsPlanRatePropertyKey | string;

  /**
   * <p>The property value.</p>
   */
  value?: string;
}

export enum SavingsPlanRateServiceCode {
  EC2 = "AmazonEC2",
  FARGATE = "AmazonECS",
  FARGATE_EKS = "AmazonEKS",
  LAMBDA = "AWSLambda",
  SAGEMAKER = "AmazonSageMaker",
}

export enum SavingsPlanRateUnit {
  HOURS = "Hrs",
  LAMBDA_GB_SECOND = "Lambda-GB-Second",
  REQUEST = "Request",
}

/**
 * <p>Information about a Savings Plan rate.</p>
 */
export interface SavingsPlanRate {
  /**
   * <p>The rate.</p>
   */
  rate?: string;

  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The unit.</p>
   */
  unit?: SavingsPlanRateUnit | string;

  /**
   * <p>The product type.</p>
   */
  productType?: SavingsPlanProductType | string;

  /**
   * <p>The service.</p>
   */
  serviceCode?: SavingsPlanRateServiceCode | string;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageType?: string;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operation?: string;

  /**
   * <p>The properties.</p>
   */
  properties?: SavingsPlanRateProperty[];
}

export interface DescribeSavingsPlanRatesResponse {
  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId?: string;

  /**
   * <p>Information about the Savings Plans rates.</p>
   */
  searchResults?: SavingsPlanRate[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return.</p>
   */
  nextToken?: string;
}

export enum SavingsPlansFilterName {
  COMMITMENT = "commitment",
  EC2_INSTANCE_FAMILY = "ec2-instance-family",
  END = "end",
  PAYMENT_OPTION = "payment-option",
  REGION = "region",
  SAVINGS_PLAN_TYPE = "savings-plan-type",
  START = "start",
  TERM = "term",
  UPFRONT = "upfront",
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanFilter {
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlansFilterName | string;

  /**
   * <p>The filter value.</p>
   */
  values?: string[];
}

export enum SavingsPlanState {
  ACTIVE = "active",
  PAYMENT_FAILED = "payment-failed",
  PAYMENT_PENDING = "payment-pending",
  QUEUED = "queued",
  QUEUED_DELETED = "queued-deleted",
  RETIRED = "retired",
}

export interface DescribeSavingsPlansRequest {
  /**
   * <p>The Amazon Resource Names (ARN) of the Savings Plans.</p>
   */
  savingsPlanArns?: string[];

  /**
   * <p>The IDs of the Savings Plans.</p>
   */
  savingsPlanIds?: string[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *        call with the returned token value.</p>
   */
  maxResults?: number;

  /**
   * <p>The states.</p>
   */
  states?: (SavingsPlanState | string)[];

  /**
   * <p>The filters.</p>
   */
  filters?: SavingsPlanFilter[];
}

export enum SavingsPlanPaymentOption {
  ALL_UPFRONT = "All Upfront",
  NO_UPFRONT = "No Upfront",
  PARTIAL_UPFRONT = "Partial Upfront",
}

export enum SavingsPlanType {
  COMPUTE = "Compute",
  EC2_INSTANCE = "EC2Instance",
  SAGEMAKER = "SageMaker",
}

/**
 * <p>Information about a Savings Plan.</p>
 */
export interface SavingsPlan {
  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Savings Plan.</p>
   */
  savingsPlanArn?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The start time.</p>
   */
  start?: string;

  /**
   * <p>The end time.</p>
   */
  end?: string;

  /**
   * <p>The state.</p>
   */
  state?: SavingsPlanState | string;

  /**
   * <p>The AWS Region.</p>
   */
  region?: string;

  /**
   * <p>The EC2 instance family.</p>
   */
  ec2InstanceFamily?: string;

  /**
   * <p>The plan type.</p>
   */
  savingsPlanType?: SavingsPlanType | string;

  /**
   * <p>The payment option.</p>
   */
  paymentOption?: SavingsPlanPaymentOption | string;

  /**
   * <p>The product types.</p>
   */
  productTypes?: (SavingsPlanProductType | string)[];

  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The hourly commitment, in USD.</p>
   */
  commitment?: string;

  /**
   * <p>The up-front payment amount.</p>
   */
  upfrontPaymentAmount?: string;

  /**
   * <p>The recurring payment amount.</p>
   */
  recurringPaymentAmount?: string;

  /**
   * <p>The duration of the term, in seconds.</p>
   */
  termDurationInSeconds?: number;

  /**
   * <p>One or more tags.</p>
   */
  tags?: Record<string, string>;
}

export interface DescribeSavingsPlansResponse {
  /**
   * <p>Information about the Savings Plans.</p>
   */
  savingsPlans?: SavingsPlan[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *        results to return.</p>
   */
  nextToken?: string;
}

export enum SavingsPlanRateFilterAttribute {
  INSTANCE_FAMILY = "instanceFamily",
  INSTANCE_TYPE = "instanceType",
  PRODUCT_DESCRIPTION = "productDescription",
  PRODUCT_ID = "productId",
  REGION = "region",
  TENANCY = "tenancy",
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanOfferingRateFilterElement {
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlanRateFilterAttribute | string;

  /**
   * <p>The filter values.</p>
   */
  values?: string[];
}

export interface DescribeSavingsPlansOfferingRatesRequest {
  /**
   * <p>The IDs of the offerings.</p>
   */
  savingsPlanOfferingIds?: string[];

  /**
   * <p>The payment options.</p>
   */
  savingsPlanPaymentOptions?: (SavingsPlanPaymentOption | string)[];

  /**
   * <p>The plan types.</p>
   */
  savingsPlanTypes?: (SavingsPlanType | string)[];

  /**
   * <p>The AWS products.</p>
   */
  products?: (SavingsPlanProductType | string)[];

  /**
   * <p>The services.</p>
   */
  serviceCodes?: (SavingsPlanRateServiceCode | string)[];

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageTypes?: string[];

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operations?: string[];

  /**
   * <p>The filters.</p>
   */
  filters?: SavingsPlanOfferingRateFilterElement[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *        call with the returned token value.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about a property.</p>
 */
export interface SavingsPlanOfferingRateProperty {
  /**
   * <p>The property name.</p>
   */
  name?: string;

  /**
   * <p>The property value.</p>
   */
  value?: string;
}

/**
 * <p>Information about a Savings Plan offering.</p>
 */
export interface ParentSavingsPlanOffering {
  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The payment option.</p>
   */
  paymentOption?: SavingsPlanPaymentOption | string;

  /**
   * <p>The plan type.</p>
   */
  planType?: SavingsPlanType | string;

  /**
   * <p>The duration, in seconds.</p>
   */
  durationSeconds?: number;

  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The description.</p>
   */
  planDescription?: string;
}

/**
 * <p>Information about a Savings Plan offering rate.</p>
 */
export interface SavingsPlanOfferingRate {
  /**
   * <p>The Savings Plan offering.</p>
   */
  savingsPlanOffering?: ParentSavingsPlanOffering;

  /**
   * <p>The Savings Plan rate.</p>
   */
  rate?: string;

  /**
   * <p>The unit.</p>
   */
  unit?: SavingsPlanRateUnit | string;

  /**
   * <p>The product type.</p>
   */
  productType?: SavingsPlanProductType | string;

  /**
   * <p>The service.</p>
   */
  serviceCode?: SavingsPlanRateServiceCode | string;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageType?: string;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operation?: string;

  /**
   * <p>The properties.</p>
   */
  properties?: SavingsPlanOfferingRateProperty[];
}

export interface DescribeSavingsPlansOfferingRatesResponse {
  /**
   * <p>Information about the Savings Plans offering rates.</p>
   */
  searchResults?: SavingsPlanOfferingRate[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *        results to return.</p>
   */
  nextToken?: string;
}

export enum SavingsPlanOfferingFilterAttribute {
  instanceFamily = "instanceFamily",
  region = "region",
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanOfferingFilterElement {
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlanOfferingFilterAttribute | string;

  /**
   * <p>The filter values.</p>
   */
  values?: string[];
}

export interface DescribeSavingsPlansOfferingsRequest {
  /**
   * <p>The IDs of the offerings.</p>
   */
  offeringIds?: string[];

  /**
   * <p>The payment options.</p>
   */
  paymentOptions?: (SavingsPlanPaymentOption | string)[];

  /**
   * <p>The product type.</p>
   */
  productType?: SavingsPlanProductType | string;

  /**
   * <p>The plan type.</p>
   */
  planTypes?: (SavingsPlanType | string)[];

  /**
   * <p>The durations, in seconds.</p>
   */
  durations?: number[];

  /**
   * <p>The currencies.</p>
   */
  currencies?: (CurrencyCode | string)[];

  /**
   * <p>The descriptions.</p>
   */
  descriptions?: string[];

  /**
   * <p>The services.</p>
   */
  serviceCodes?: string[];

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageTypes?: string[];

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operations?: string[];

  /**
   * <p>The filters.</p>
   */
  filters?: SavingsPlanOfferingFilterElement[];

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *        call with the returned token value.</p>
   */
  maxResults?: number;
}

export enum SavingsPlanOfferingPropertyKey {
  INSTANCE_FAMILY = "instanceFamily",
  REGION = "region",
}

/**
 * <p>Information about a property.</p>
 */
export interface SavingsPlanOfferingProperty {
  /**
   * <p>The property name.</p>
   */
  name?: SavingsPlanOfferingPropertyKey | string;

  /**
   * <p>The property value.</p>
   */
  value?: string;
}

/**
 * <p>Information about a Savings Plan offering.</p>
 */
export interface SavingsPlanOffering {
  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The product type.</p>
   */
  productTypes?: (SavingsPlanProductType | string)[];

  /**
   * <p>The plan type.</p>
   */
  planType?: SavingsPlanType | string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The payment option.</p>
   */
  paymentOption?: SavingsPlanPaymentOption | string;

  /**
   * <p>The duration, in seconds.</p>
   */
  durationSeconds?: number;

  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The service.</p>
   */
  serviceCode?: string;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageType?: string;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operation?: string;

  /**
   * <p>The properties.</p>
   */
  properties?: SavingsPlanOfferingProperty[];
}

export interface DescribeSavingsPlansOfferingsResponse {
  /**
   * <p>Information about the Savings Plans offerings.</p>
   */
  searchResults?: SavingsPlanOffering[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *        results to return.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const CreateSavingsPlanRequestFilterSensitiveLog = (obj: CreateSavingsPlanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSavingsPlanResponseFilterSensitiveLog = (obj: CreateSavingsPlanResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedSavingsPlanRequestFilterSensitiveLog = (obj: DeleteQueuedSavingsPlanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQueuedSavingsPlanResponseFilterSensitiveLog = (obj: DeleteQueuedSavingsPlanResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanRateFilterFilterSensitiveLog = (obj: SavingsPlanRateFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlanRatesRequestFilterSensitiveLog = (obj: DescribeSavingsPlanRatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanRatePropertyFilterSensitiveLog = (obj: SavingsPlanRateProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanRateFilterSensitiveLog = (obj: SavingsPlanRate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlanRatesResponseFilterSensitiveLog = (obj: DescribeSavingsPlanRatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanFilterFilterSensitiveLog = (obj: SavingsPlanFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlansRequestFilterSensitiveLog = (obj: DescribeSavingsPlansRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanFilterSensitiveLog = (obj: SavingsPlan): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlansResponseFilterSensitiveLog = (obj: DescribeSavingsPlansResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanOfferingRateFilterElementFilterSensitiveLog = (
  obj: SavingsPlanOfferingRateFilterElement
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlansOfferingRatesRequestFilterSensitiveLog = (
  obj: DescribeSavingsPlansOfferingRatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanOfferingRatePropertyFilterSensitiveLog = (obj: SavingsPlanOfferingRateProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParentSavingsPlanOfferingFilterSensitiveLog = (obj: ParentSavingsPlanOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanOfferingRateFilterSensitiveLog = (obj: SavingsPlanOfferingRate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlansOfferingRatesResponseFilterSensitiveLog = (
  obj: DescribeSavingsPlansOfferingRatesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanOfferingFilterElementFilterSensitiveLog = (obj: SavingsPlanOfferingFilterElement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlansOfferingsRequestFilterSensitiveLog = (
  obj: DescribeSavingsPlansOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanOfferingPropertyFilterSensitiveLog = (obj: SavingsPlanOfferingProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SavingsPlanOfferingFilterSensitiveLog = (obj: SavingsPlanOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSavingsPlansOfferingsResponseFilterSensitiveLog = (
  obj: DescribeSavingsPlansOfferingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
