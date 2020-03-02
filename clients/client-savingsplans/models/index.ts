import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface DescribeSavingsPlansOfferingRatesRequest {
  __type?: "DescribeSavingsPlansOfferingRatesRequest";
  /**
   * <p>The filters.</p>
   */
  filters?: Array<SavingsPlanOfferingRateFilterElement>;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *        call with the returned token value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operations?: Array<string>;

  /**
   * <p>The AWS products.</p>
   */
  products?: Array<SavingsPlanProductType | string>;

  /**
   * <p>The IDs of the offerings.</p>
   */
  savingsPlanOfferingIds?: Array<string>;

  /**
   * <p>The payment options.</p>
   */
  savingsPlanPaymentOptions?: Array<SavingsPlanPaymentOption | string>;

  /**
   * <p>The plan types.</p>
   */
  savingsPlanTypes?: Array<SavingsPlanType | string>;

  /**
   * <p>The services.</p>
   */
  serviceCodes?: Array<SavingsPlanRateServiceCode | string>;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageTypes?: Array<string>;
}

export namespace DescribeSavingsPlansOfferingRatesRequest {
  export function isa(o: any): o is DescribeSavingsPlansOfferingRatesRequest {
    return __isa(o, "DescribeSavingsPlansOfferingRatesRequest");
  }
}

export interface DescribeSavingsPlansOfferingRatesResponse {
  __type?: "DescribeSavingsPlansOfferingRatesResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *        results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the Savings Plans offering rates.</p>
   */
  searchResults?: Array<SavingsPlanOfferingRate>;
}

export namespace DescribeSavingsPlansOfferingRatesResponse {
  export function isa(o: any): o is DescribeSavingsPlansOfferingRatesResponse {
    return __isa(o, "DescribeSavingsPlansOfferingRatesResponse");
  }
}

export interface DescribeSavingsPlansOfferingsRequest {
  __type?: "DescribeSavingsPlansOfferingsRequest";
  /**
   * <p>The currencies.</p>
   */
  currencies?: Array<CurrencyCode | string>;

  /**
   * <p>The descriptions.</p>
   */
  descriptions?: Array<string>;

  /**
   * <p>The durations, in seconds.</p>
   */
  durations?: Array<number>;

  /**
   * <p>The filters.</p>
   */
  filters?: Array<SavingsPlanOfferingFilterElement>;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *        call with the returned token value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The IDs of the offerings.</p>
   */
  offeringIds?: Array<string>;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operations?: Array<string>;

  /**
   * <p>The payment options.</p>
   */
  paymentOptions?: Array<SavingsPlanPaymentOption | string>;

  /**
   * <p>The plan type.</p>
   */
  planTypes?: Array<SavingsPlanType | string>;

  /**
   * <p>The product type.</p>
   */
  productType?: SavingsPlanProductType | string;

  /**
   * <p>The services.</p>
   */
  serviceCodes?: Array<string>;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageTypes?: Array<string>;
}

export namespace DescribeSavingsPlansOfferingsRequest {
  export function isa(o: any): o is DescribeSavingsPlansOfferingsRequest {
    return __isa(o, "DescribeSavingsPlansOfferingsRequest");
  }
}

export interface DescribeSavingsPlansOfferingsResponse {
  __type?: "DescribeSavingsPlansOfferingsResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *        results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the Savings Plans offerings.</p>
   */
  searchResults?: Array<SavingsPlanOffering>;
}

export namespace DescribeSavingsPlansOfferingsResponse {
  export function isa(o: any): o is DescribeSavingsPlansOfferingsResponse {
    return __isa(o, "DescribeSavingsPlansOfferingsResponse");
  }
}

/**
 * <p>Information about a Savings Plan offering.</p>
 */
export interface ParentSavingsPlanOffering {
  __type?: "ParentSavingsPlanOffering";
  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The duration, in seconds.</p>
   */
  durationSeconds?: number;

  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The payment option.</p>
   */
  paymentOption?: SavingsPlanPaymentOption | string;

  /**
   * <p>The description.</p>
   */
  planDescription?: string;

  /**
   * <p>The plan type.</p>
   */
  planType?: SavingsPlanType | string;
}

export namespace ParentSavingsPlanOffering {
  export function isa(o: any): o is ParentSavingsPlanOffering {
    return __isa(o, "ParentSavingsPlanOffering");
  }
}

/**
 * <p>Information about a Savings Plan offering.</p>
 */
export interface SavingsPlanOffering {
  __type?: "SavingsPlanOffering";
  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The duration, in seconds.</p>
   */
  durationSeconds?: number;

  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operation?: string;

  /**
   * <p>The payment option.</p>
   */
  paymentOption?: SavingsPlanPaymentOption | string;

  /**
   * <p>The plan type.</p>
   */
  planType?: SavingsPlanType | string;

  /**
   * <p>The product type.</p>
   */
  productTypes?: Array<SavingsPlanProductType | string>;

  /**
   * <p>The properties.</p>
   */
  properties?: Array<SavingsPlanOfferingProperty>;

  /**
   * <p>The service.</p>
   */
  serviceCode?: string;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageType?: string;
}

export namespace SavingsPlanOffering {
  export function isa(o: any): o is SavingsPlanOffering {
    return __isa(o, "SavingsPlanOffering");
  }
}

export enum SavingsPlanOfferingFilterAttribute {
  instanceFamily = "instanceFamily",
  region = "region"
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanOfferingFilterElement {
  __type?: "SavingsPlanOfferingFilterElement";
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlanOfferingFilterAttribute | string;

  /**
   * <p>The filter values.</p>
   */
  values?: Array<string>;
}

export namespace SavingsPlanOfferingFilterElement {
  export function isa(o: any): o is SavingsPlanOfferingFilterElement {
    return __isa(o, "SavingsPlanOfferingFilterElement");
  }
}

/**
 * <p>Information about a property.</p>
 */
export interface SavingsPlanOfferingProperty {
  __type?: "SavingsPlanOfferingProperty";
  /**
   * <p>The property name.</p>
   */
  name?: SavingsPlanOfferingPropertyKey | string;

  /**
   * <p>The property value.</p>
   */
  value?: string;
}

export namespace SavingsPlanOfferingProperty {
  export function isa(o: any): o is SavingsPlanOfferingProperty {
    return __isa(o, "SavingsPlanOfferingProperty");
  }
}

export enum SavingsPlanOfferingPropertyKey {
  INSTANCE_FAMILY = "instanceFamily",
  REGION = "region"
}

/**
 * <p>Information about a Savings Plan offering rate.</p>
 */
export interface SavingsPlanOfferingRate {
  __type?: "SavingsPlanOfferingRate";
  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operation?: string;

  /**
   * <p>The product type.</p>
   */
  productType?: SavingsPlanProductType | string;

  /**
   * <p>The properties.</p>
   */
  properties?: Array<SavingsPlanOfferingRateProperty>;

  /**
   * <p>The Savings Plan rate.</p>
   */
  rate?: string;

  /**
   * <p>The Savings Plan offering.</p>
   */
  savingsPlanOffering?: ParentSavingsPlanOffering;

  /**
   * <p>The service.</p>
   */
  serviceCode?: SavingsPlanRateServiceCode | string;

  /**
   * <p>The unit.</p>
   */
  unit?: SavingsPlanRateUnit | string;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageType?: string;
}

export namespace SavingsPlanOfferingRate {
  export function isa(o: any): o is SavingsPlanOfferingRate {
    return __isa(o, "SavingsPlanOfferingRate");
  }
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanOfferingRateFilterElement {
  __type?: "SavingsPlanOfferingRateFilterElement";
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlanRateFilterAttribute | string;

  /**
   * <p>The filter values.</p>
   */
  values?: Array<string>;
}

export namespace SavingsPlanOfferingRateFilterElement {
  export function isa(o: any): o is SavingsPlanOfferingRateFilterElement {
    return __isa(o, "SavingsPlanOfferingRateFilterElement");
  }
}

/**
 * <p>Information about a property.</p>
 */
export interface SavingsPlanOfferingRateProperty {
  __type?: "SavingsPlanOfferingRateProperty";
  /**
   * <p>The property name.</p>
   */
  name?: string;

  /**
   * <p>The property value.</p>
   */
  value?: string;
}

export namespace SavingsPlanOfferingRateProperty {
  export function isa(o: any): o is SavingsPlanOfferingRateProperty {
    return __isa(o, "SavingsPlanOfferingRateProperty");
  }
}

export enum SavingsPlanRateFilterAttribute {
  INSTANCE_FAMILY = "instanceFamily",
  INSTANCE_TYPE = "instanceType",
  PRODUCT_DESCRIPTION = "productDescription",
  PRODUCT_ID = "productId",
  REGION = "region",
  TENANCY = "tenancy"
}

export enum SavingsPlanRateUnit {
  HOURS = "Hrs"
}

export type CurrencyCode = "CNY" | "USD";

export enum SavingsPlanPaymentOption {
  ALL_UPFRONT = "All Upfront",
  NO_UPFRONT = "No Upfront",
  PARTIAL_UPFRONT = "Partial Upfront"
}

export enum SavingsPlanProductType {
  EC2 = "EC2",
  FARGATE = "Fargate"
}

/**
 * <p>Information about a property.</p>
 */
export interface SavingsPlanRateProperty {
  __type?: "SavingsPlanRateProperty";
  /**
   * <p>The property name.</p>
   */
  name?: SavingsPlanRatePropertyKey | string;

  /**
   * <p>The property value.</p>
   */
  value?: string;
}

export namespace SavingsPlanRateProperty {
  export function isa(o: any): o is SavingsPlanRateProperty {
    return __isa(o, "SavingsPlanRateProperty");
  }
}

export enum SavingsPlanRatePropertyKey {
  INSTANCE_FAMILY = "instanceFamily",
  INSTANCE_TYPE = "instanceType",
  PRODUCT_DESCRIPTION = "productDescription",
  REGION = "region",
  TENANCY = "tenancy"
}

export enum SavingsPlanRateServiceCode {
  EC2 = "AmazonEC2",
  FARGATE = "AmazonECS"
}

export enum SavingsPlanType {
  COMPUTE = "Compute",
  EC2_INSTANCE = "EC2Instance"
}

export interface CreateSavingsPlanRequest {
  __type?: "CreateSavingsPlanRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more
   *         than three digits after the decimal point.</p>
   */
  commitment: string | undefined;

  /**
   * <p>The ID of the offering.</p>
   */
  savingsPlanOfferingId: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan.
   *        This parameter is supported only if the payment option is <code>Partial Upfront</code>.</p>
   */
  upfrontPaymentAmount?: string;
}

export namespace CreateSavingsPlanRequest {
  export function isa(o: any): o is CreateSavingsPlanRequest {
    return __isa(o, "CreateSavingsPlanRequest");
  }
}

export interface CreateSavingsPlanResponse {
  __type?: "CreateSavingsPlanResponse";
  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId?: string;
}

export namespace CreateSavingsPlanResponse {
  export function isa(o: any): o is CreateSavingsPlanResponse {
    return __isa(o, "CreateSavingsPlanResponse");
  }
}

export interface DescribeSavingsPlanRatesRequest {
  __type?: "DescribeSavingsPlanRatesRequest";
  /**
   * <p>The filters.</p>
   */
  filters?: Array<SavingsPlanRateFilter>;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *          call with the returned token value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId: string | undefined;
}

export namespace DescribeSavingsPlanRatesRequest {
  export function isa(o: any): o is DescribeSavingsPlanRatesRequest {
    return __isa(o, "DescribeSavingsPlanRatesRequest");
  }
}

export interface DescribeSavingsPlanRatesResponse {
  __type?: "DescribeSavingsPlanRatesResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId?: string;

  /**
   * <p>Information about the Savings Plans rates.</p>
   */
  searchResults?: Array<SavingsPlanRate>;
}

export namespace DescribeSavingsPlanRatesResponse {
  export function isa(o: any): o is DescribeSavingsPlanRatesResponse {
    return __isa(o, "DescribeSavingsPlanRatesResponse");
  }
}

export interface DescribeSavingsPlansRequest {
  __type?: "DescribeSavingsPlansRequest";
  /**
   * <p>The filters.</p>
   */
  filters?: Array<SavingsPlanFilter>;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve additional results, make another
   *        call with the returned token value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Names (ARN) of the Savings Plans.</p>
   */
  savingsPlanArns?: Array<string>;

  /**
   * <p>The IDs of the Savings Plans.</p>
   */
  savingsPlanIds?: Array<string>;

  /**
   * <p>The states.</p>
   */
  states?: Array<SavingsPlanState | string>;
}

export namespace DescribeSavingsPlansRequest {
  export function isa(o: any): o is DescribeSavingsPlansRequest {
    return __isa(o, "DescribeSavingsPlansRequest");
  }
}

export interface DescribeSavingsPlansResponse {
  __type?: "DescribeSavingsPlansResponse";
  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *        results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the Savings Plans.</p>
   */
  savingsPlans?: Array<SavingsPlan>;
}

export namespace DescribeSavingsPlansResponse {
  export function isa(o: any): o is DescribeSavingsPlansResponse {
    return __isa(o, "DescribeSavingsPlansResponse");
  }
}

/**
 * <p>An unexpected error occurred.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Information about the tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Information about a Savings Plan.</p>
 */
export interface SavingsPlan {
  __type?: "SavingsPlan";
  /**
   * <p>The hourly commitment, in USD.</p>
   */
  commitment?: string;

  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The EC2 instance family.</p>
   */
  ec2InstanceFamily?: string;

  /**
   * <p>The end time.</p>
   */
  end?: string;

  /**
   * <p>The ID of the offering.</p>
   */
  offeringId?: string;

  /**
   * <p>The payment option.</p>
   */
  paymentOption?: SavingsPlanPaymentOption | string;

  /**
   * <p>The product types.</p>
   */
  productTypes?: Array<SavingsPlanProductType | string>;

  /**
   * <p>The recurring payment amount.</p>
   */
  recurringPaymentAmount?: string;

  /**
   * <p>The AWS Region.</p>
   */
  region?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Savings Plan.</p>
   */
  savingsPlanArn?: string;

  /**
   * <p>The ID of the Savings Plan.</p>
   */
  savingsPlanId?: string;

  /**
   * <p>The plan type.</p>
   */
  savingsPlanType?: SavingsPlanType | string;

  /**
   * <p>The start time.</p>
   */
  start?: string;

  /**
   * <p>The state.</p>
   */
  state?: SavingsPlanState | string;

  /**
   * <p>One or more tags.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The duration of the term, in seconds.</p>
   */
  termDurationInSeconds?: number;

  /**
   * <p>The up-front payment amount.</p>
   */
  upfrontPaymentAmount?: string;
}

export namespace SavingsPlan {
  export function isa(o: any): o is SavingsPlan {
    return __isa(o, "SavingsPlan");
  }
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanFilter {
  __type?: "SavingsPlanFilter";
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlansFilterName | string;

  /**
   * <p>The filter value.</p>
   */
  values?: Array<string>;
}

export namespace SavingsPlanFilter {
  export function isa(o: any): o is SavingsPlanFilter {
    return __isa(o, "SavingsPlanFilter");
  }
}

/**
 * <p>Information about a Savings Plan rate.</p>
 */
export interface SavingsPlanRate {
  __type?: "SavingsPlanRate";
  /**
   * <p>The currency.</p>
   */
  currency?: CurrencyCode | string;

  /**
   * <p>The specific AWS operation for the line item in the billing report.</p>
   */
  operation?: string;

  /**
   * <p>The product type.</p>
   */
  productType?: SavingsPlanProductType | string;

  /**
   * <p>The properties.</p>
   */
  properties?: Array<SavingsPlanRateProperty>;

  /**
   * <p>The rate.</p>
   */
  rate?: string;

  /**
   * <p>The service.</p>
   */
  serviceCode?: SavingsPlanRateServiceCode | string;

  /**
   * <p>The unit.</p>
   */
  unit?: SavingsPlanRateUnit | string;

  /**
   * <p>The usage details of the line item in the billing report.</p>
   */
  usageType?: string;
}

export namespace SavingsPlanRate {
  export function isa(o: any): o is SavingsPlanRate {
    return __isa(o, "SavingsPlanRate");
  }
}

/**
 * <p>Information about a filter.</p>
 */
export interface SavingsPlanRateFilter {
  __type?: "SavingsPlanRateFilter";
  /**
   * <p>The filter name.</p>
   */
  name?: SavingsPlanRateFilterName | string;

  /**
   * <p>The filter values.</p>
   */
  values?: Array<string>;
}

export namespace SavingsPlanRateFilter {
  export function isa(o: any): o is SavingsPlanRateFilter {
    return __isa(o, "SavingsPlanRateFilter");
  }
}

export enum SavingsPlanRateFilterName {
  INSTANCE_TYPE = "instanceType",
  OPERATION = "operation",
  PRODUCT_DESCRIPTION = "productDescription",
  PRODUCT_TYPE = "productType",
  REGION = "region",
  SERVICE_CODE = "serviceCode",
  TENANCY = "tenancy",
  USAGE_TYPE = "usageType"
}

export enum SavingsPlanState {
  ACTIVE = "active",
  PAYMENT_FAILED = "payment-failed",
  PAYMENT_PENDING = "payment-pending",
  RETIRED = "retired"
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
  UPFRONT = "upfront"
}

/**
 * <p>A service quota has been exceeded.</p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export function isa(o: any): o is ServiceQuotaExceededException {
    return __isa(o, "ServiceQuotaExceededException");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>One of the input parameters is not valid.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
