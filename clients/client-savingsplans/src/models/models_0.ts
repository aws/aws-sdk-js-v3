// smithy-typescript generated code
import type {
  CurrencyCode,
  SavingsPlanOfferingFilterAttribute,
  SavingsPlanOfferingPropertyKey,
  SavingsPlanPaymentOption,
  SavingsPlanProductType,
  SavingsPlanRateFilterAttribute,
  SavingsPlanRateFilterName,
  SavingsPlanRatePropertyKey,
  SavingsPlanRateServiceCode,
  SavingsPlanRateUnit,
  SavingsPlansFilterName,
  SavingsPlanState,
  SavingsPlanType,
} from "./enums";

/**
 * @public
 */
export interface CreateSavingsPlanRequest {
  /**
   * The ID of the offering.
   *
   * @public
   */
  savingsPlanOfferingId: string | undefined;

  /**
   * The hourly commitment, in the same currency of the `savingsPlanOfferingId`. This is a value between 0.001 and 1 million. You cannot specify more than five digits after the decimal point.
   *
   * @public
   */
  commitment: string | undefined;

  /**
   * The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is only supported if the payment option is `Partial Upfront`.
   *
   * @public
   */
  upfrontPaymentAmount?: string | undefined;

  /**
   * The purchase time of the Savings Plan in UTC format (YYYY-MM-DDTHH:MM:SSZ).
   *
   * @public
   */
  purchaseTime?: Date | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSavingsPlanResponse {
  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedSavingsPlanRequest {
  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueuedSavingsPlanResponse {}

/**
 * Information about a Savings Plan rate filter.
 *
 * @public
 */
export interface SavingsPlanRateFilter {
  /**
   * The filter name.
   *
   * @public
   */
  name?: SavingsPlanRateFilterName | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlanRatesRequest {
  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId: string | undefined;

  /**
   * The filters.
   *
   * @public
   */
  filters?: SavingsPlanRateFilter[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a Savings Plan rate property.
 *
 * @public
 */
export interface SavingsPlanRateProperty {
  /**
   * The property name.
   *
   * @public
   */
  name?: SavingsPlanRatePropertyKey | undefined;

  /**
   * The property value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Information about a Savings Plan rate.
 *
 * @public
 */
export interface SavingsPlanRate {
  /**
   * The rate.
   *
   * @public
   */
  rate?: string | undefined;

  /**
   * The currency.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * The unit.
   *
   * @public
   */
  unit?: SavingsPlanRateUnit | undefined;

  /**
   * The product type.
   *
   * @public
   */
  productType?: SavingsPlanProductType | undefined;

  /**
   * The service.
   *
   * @public
   */
  serviceCode?: SavingsPlanRateServiceCode | undefined;

  /**
   * The usage details of the line item in the billing report.
   *
   * @public
   */
  usageType?: string | undefined;

  /**
   * The specific Amazon Web Services operation for the line item in the billing report.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The properties.
   *
   * @public
   */
  properties?: SavingsPlanRateProperty[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlanRatesResponse {
  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId?: string | undefined;

  /**
   * Information about the Savings Plan rates.
   *
   * @public
   */
  searchResults?: SavingsPlanRate[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a Savings Plan filter.
 *
 * @public
 */
export interface SavingsPlanFilter {
  /**
   * The filter name.
   *
   * @public
   */
  name?: SavingsPlansFilterName | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansRequest {
  /**
   * The Amazon Resource Names (ARN) of the Savings Plans.
   *
   * @public
   */
  savingsPlanArns?: string[] | undefined;

  /**
   * The IDs of the Savings Plans.
   *
   * @public
   */
  savingsPlanIds?: string[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The current states of the Savings Plans.
   *
   * @public
   */
  states?: SavingsPlanState[] | undefined;

  /**
   * The filters.
   *
   * @public
   */
  filters?: SavingsPlanFilter[] | undefined;
}

/**
 * Information about a Savings Plan.
 *
 * @public
 */
export interface SavingsPlan {
  /**
   * The ID of the offering.
   *
   * @public
   */
  offeringId?: string | undefined;

  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Savings Plan.
   *
   * @public
   */
  savingsPlanArn?: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The start time.
   *
   * @public
   */
  start?: string | undefined;

  /**
   * The end time.
   *
   * @public
   */
  end?: string | undefined;

  /**
   * The current state.
   *
   * @public
   */
  state?: SavingsPlanState | undefined;

  /**
   * The Amazon Web Services Region.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The EC2 instance family.
   *
   * @public
   */
  ec2InstanceFamily?: string | undefined;

  /**
   * The plan type.
   *
   * @public
   */
  savingsPlanType?: SavingsPlanType | undefined;

  /**
   * The payment option.
   *
   * @public
   */
  paymentOption?: SavingsPlanPaymentOption | undefined;

  /**
   * The product types.
   *
   * @public
   */
  productTypes?: SavingsPlanProductType[] | undefined;

  /**
   * The currency.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * The hourly commitment amount in the specified currency.
   *
   * @public
   */
  commitment?: string | undefined;

  /**
   * The up-front payment amount.
   *
   * @public
   */
  upfrontPaymentAmount?: string | undefined;

  /**
   * The recurring payment amount.
   *
   * @public
   */
  recurringPaymentAmount?: string | undefined;

  /**
   * The duration of the term, in seconds.
   *
   * @public
   */
  termDurationInSeconds?: number | undefined;

  /**
   * One or more tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The time until when a return for the Savings Plan can be requested. If the Savings Plan is not returnable, the field reflects the Savings Plans start time.
   *
   * @public
   */
  returnableUntil?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansResponse {
  /**
   * Information about the Savings Plans.
   *
   * @public
   */
  savingsPlans?: SavingsPlan[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a Savings Plan offering rate filter.
 *
 * @public
 */
export interface SavingsPlanOfferingRateFilterElement {
  /**
   * The filter name.
   *
   * @public
   */
  name?: SavingsPlanRateFilterAttribute | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingRatesRequest {
  /**
   * The IDs of the offerings.
   *
   * @public
   */
  savingsPlanOfferingIds?: string[] | undefined;

  /**
   * The payment options.
   *
   * @public
   */
  savingsPlanPaymentOptions?: SavingsPlanPaymentOption[] | undefined;

  /**
   * The plan types.
   *
   * @public
   */
  savingsPlanTypes?: SavingsPlanType[] | undefined;

  /**
   * The Amazon Web Services products.
   *
   * @public
   */
  products?: SavingsPlanProductType[] | undefined;

  /**
   * The services.
   *
   * @public
   */
  serviceCodes?: SavingsPlanRateServiceCode[] | undefined;

  /**
   * The usage details of the line item in the billing report.
   *
   * @public
   */
  usageTypes?: string[] | undefined;

  /**
   * The specific Amazon Web Services operation for the line item in the billing report.
   *
   * @public
   */
  operations?: string[] | undefined;

  /**
   * The filters.
   *
   * @public
   */
  filters?: SavingsPlanOfferingRateFilterElement[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a Savings Plan offering rate property.
 *
 * @public
 */
export interface SavingsPlanOfferingRateProperty {
  /**
   * The property name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The property value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Information about a Savings Plan offering.
 *
 * @public
 */
export interface ParentSavingsPlanOffering {
  /**
   * The ID of the offering.
   *
   * @public
   */
  offeringId?: string | undefined;

  /**
   * The payment option.
   *
   * @public
   */
  paymentOption?: SavingsPlanPaymentOption | undefined;

  /**
   * The plan type.
   *
   * @public
   */
  planType?: SavingsPlanType | undefined;

  /**
   * The duration, in seconds.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * The currency.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * The description.
   *
   * @public
   */
  planDescription?: string | undefined;
}

/**
 * Information about a Savings Plan offering rate.
 *
 * @public
 */
export interface SavingsPlanOfferingRate {
  /**
   * The Savings Plan offering.
   *
   * @public
   */
  savingsPlanOffering?: ParentSavingsPlanOffering | undefined;

  /**
   * The Savings Plan rate.
   *
   * @public
   */
  rate?: string | undefined;

  /**
   * The unit.
   *
   * @public
   */
  unit?: SavingsPlanRateUnit | undefined;

  /**
   * The product type.
   *
   * @public
   */
  productType?: SavingsPlanProductType | undefined;

  /**
   * The service.
   *
   * @public
   */
  serviceCode?: SavingsPlanRateServiceCode | undefined;

  /**
   * The usage details of the line item in the billing report.
   *
   * @public
   */
  usageType?: string | undefined;

  /**
   * The specific Amazon Web Services operation for the line item in the billing report.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The properties.
   *
   * @public
   */
  properties?: SavingsPlanOfferingRateProperty[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingRatesResponse {
  /**
   * Information about the Savings Plans offering rates.
   *
   * @public
   */
  searchResults?: SavingsPlanOfferingRate[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a Savings Plan offering filter.
 *
 * @public
 */
export interface SavingsPlanOfferingFilterElement {
  /**
   * The filter name.
   *
   * @public
   */
  name?: SavingsPlanOfferingFilterAttribute | undefined;

  /**
   * The filter values.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingsRequest {
  /**
   * The IDs of the offerings.
   *
   * @public
   */
  offeringIds?: string[] | undefined;

  /**
   * The payment options.
   *
   * @public
   */
  paymentOptions?: SavingsPlanPaymentOption[] | undefined;

  /**
   * The product type.
   *
   * @public
   */
  productType?: SavingsPlanProductType | undefined;

  /**
   * The plan types.
   *
   * @public
   */
  planTypes?: SavingsPlanType[] | undefined;

  /**
   * The duration, in seconds.
   *
   * @public
   */
  durations?: number[] | undefined;

  /**
   * The currencies.
   *
   * @public
   */
  currencies?: CurrencyCode[] | undefined;

  /**
   * The descriptions.
   *
   * @public
   */
  descriptions?: string[] | undefined;

  /**
   * The services.
   *
   * @public
   */
  serviceCodes?: string[] | undefined;

  /**
   * The usage details of the line item in the billing report.
   *
   * @public
   */
  usageTypes?: string[] | undefined;

  /**
   * The specific Amazon Web Services operation for the line item in the billing report.
   *
   * @public
   */
  operations?: string[] | undefined;

  /**
   * The filters.
   *
   * @public
   */
  filters?: SavingsPlanOfferingFilterElement[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a Savings Plan offering property.
 *
 * @public
 */
export interface SavingsPlanOfferingProperty {
  /**
   * The property name.
   *
   * @public
   */
  name?: SavingsPlanOfferingPropertyKey | undefined;

  /**
   * The property value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Information about a Savings Plan offering.
 *
 * @public
 */
export interface SavingsPlanOffering {
  /**
   * The ID of the offering.
   *
   * @public
   */
  offeringId?: string | undefined;

  /**
   * The product type.
   *
   * @public
   */
  productTypes?: SavingsPlanProductType[] | undefined;

  /**
   * The plan type.
   *
   * @public
   */
  planType?: SavingsPlanType | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The payment option.
   *
   * @public
   */
  paymentOption?: SavingsPlanPaymentOption | undefined;

  /**
   * The duration, in seconds.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * The currency.
   *
   * @public
   */
  currency?: CurrencyCode | undefined;

  /**
   * The service.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * The usage details of the line item in the billing report.
   *
   * @public
   */
  usageType?: string | undefined;

  /**
   * The specific Amazon Web Services operation for the line item in the billing report.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * The properties.
   *
   * @public
   */
  properties?: SavingsPlanOfferingProperty[] | undefined;
}

/**
 * @public
 */
export interface DescribeSavingsPlansOfferingsResponse {
  /**
   * Information about the Savings Plans offerings.
   *
   * @public
   */
  searchResults?: SavingsPlanOffering[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Information about the tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ReturnSavingsPlanRequest {
  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ReturnSavingsPlanResponse {
  /**
   * The ID of the Savings Plan.
   *
   * @public
   */
  savingsPlanId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * One or more tags. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
