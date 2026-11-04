// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type { FilterType } from "./enums";

/**
 * The values of a given attribute, such as `Throughput Optimized HDD` or `Provisioned IOPS` for the `Amazon EC2` `volumeType` attribute.
 *
 * @public
 */
export interface AttributeValue {
  /**
   * The specific value of an `attributeName`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * The code for the service whose information you want to retrieve, such as `AmazonEC2`. You can use the `ServiceCode` to filter the results in a `GetProducts` call. To retrieve a list of all services, leave this blank.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * The format version that you want the response to be in.
   *
   * Valid values are: `aws_v1`
   *
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results that you want returned in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The metadata for a service, such as the service code and available attribute names.
 *
 * @public
 */
export interface Service {
  /**
   * The code for the Amazon Web Services service.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * The attributes that are available for this service.
   *
   * @public
   */
  AttributeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeServicesResponse {
  /**
   * The service metadata for the service or services in the response.
   *
   * @public
   */
  Services?: Service[] | undefined;

  /**
   * The format version of the response. For example, `aws_v1`.
   *
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * The pagination token for the next set of retrievable results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAttributeValuesRequest {
  /**
   * The service code for the service whose attributes you want to retrieve. For example, if you want the retrieve an EC2 attribute, use `AmazonEC2`.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * The name of the attribute that you want to retrieve the values for, such as `volumeType`.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAttributeValuesResponse {
  /**
   * The list of values for an attribute. For example, `Throughput Optimized HDD` and `Provisioned IOPS` are two available values for the `AmazonEC2` `volumeType`.
   *
   * @public
   */
  AttributeValues?: AttributeValue[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPriceListFileUrlRequest {
  /**
   * The unique identifier that maps to where your Price List files are located. `PriceListArn` can be obtained from the [ListPriceLists](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html) response.
   *
   * @public
   */
  PriceListArn: string | undefined;

  /**
   * The format that you want to retrieve your Price List files in. The `FileFormat` can be obtained from the [ListPriceLists](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html) response.
   *
   * @public
   */
  FileFormat: string | undefined;
}

/**
 * @public
 */
export interface GetPriceListFileUrlResponse {
  /**
   * The URL to download your Price List file from.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * The constraints that you want all returned products to match.
 *
 * @public
 */
export interface Filter {
  /**
   * The type of filter that you want to use.
   *
   * Valid values are:
   *
   * - `TERM_MATCH`: Returns only products that match both the given filter field and the given value.
   * - `EQUALS`: Returns products that have a field value exactly matching the provided value.
   * - `CONTAINS`: Returns products where the field value contains the provided value as a substring.
   * - `ANY_OF`: Returns products where the field value is any of the provided values.
   * - `NONE_OF`: Returns products where the field value is not any of the provided values.
   *
   * @public
   */
  Type: FilterType | undefined;

  /**
   * The product metadata field that you want to filter on. You can filter by just the service code to see all products for a specific service, filter by just the attribute name to see a specific attribute for multiple services, or use both a service code and an attribute name to retrieve only products that match both fields.
   *
   * Valid values include: `ServiceCode`, and all attribute names
   *
   * For example, you can filter by the `AmazonEC2` service code and the `volumeType` attribute name to get the prices for only Amazon EC2 volumes.
   *
   * @public
   */
  Field: string | undefined;

  /**
   * The service code or attribute value that you want to filter by. If you're filtering by service code this is the actual service code, such as `AmazonEC2`. If you're filtering by attribute name, this is the attribute value that you want the returned products to match, such as a `Provisioned IOPS` volume.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetProductsRequest {
  /**
   * The code for the service whose products you want to retrieve.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * The list of filters that limit the returned products. only products that match all filters are returned.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The format version that you want the response to be in.
   *
   * Valid values are: `aws_v1`
   *
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetProductsResponse {
  /**
   * The format version of the response. For example, aws_v1.
   *
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * The list of products that match your filters. The list contains both the product metadata and the price information.
   *
   * @public
   */
  PriceList?: __AutomaticJsonStringConversion | string[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPriceListsRequest {
  /**
   * The service code or the Savings Plans service code for the attributes that you want to retrieve. For example, to get the list of applicable Amazon EC2 price lists, use `AmazonEC2`. For a full list of service codes containing On-Demand and Reserved Instance (RI) pricing, use the [DescribeServices](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html#awscostmanagement-pricing_DescribeServices-request-FormatVersion) API.
   *
   * To retrieve the Reserved Instance and Compute Savings Plans price lists, use `ComputeSavingsPlans`.
   *
   * To retrieve Machine Learning Savings Plans price lists, use `MachineLearningSavingsPlans`.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * The date that the Price List file prices are effective from.
   *
   * @public
   */
  EffectiveDate: Date | undefined;

  /**
   * This is used to filter the Price List by Amazon Web Services Region. For example, to get the price list only for the `US East (N. Virginia)` Region, use `us-east-1`. If nothing is specified, you retrieve price lists for all applicable Regions. The available `RegionCode` list can be retrieved from [GetAttributeValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html) API.
   *
   * @public
   */
  RegionCode?: string | undefined;

  /**
   * The three alphabetical character ISO-4217 currency code that the Price List files are denominated in.
   *
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * ***This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the [Amazon Web Services Service Terms](https://aws.amazon.com/service-terms/) (Section 1.10).***
 *
 * This is the type of price list references that match your request.
 *
 * @public
 */
export interface PriceList {
  /**
   * The unique identifier that maps to where your Price List files are located. `PriceListArn` can be obtained from the [`ListPriceList`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html) response.
   *
   * @public
   */
  PriceListArn?: string | undefined;

  /**
   * This is used to filter the Price List by Amazon Web Services Region. For example, to get the price list only for the `US East (N. Virginia)` Region, use `us-east-1`. If nothing is specified, you retrieve price lists for all applicable Regions. The available `RegionCode` list can be retrieved from [`GetAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html) API.
   *
   * @public
   */
  RegionCode?: string | undefined;

  /**
   * The three alphabetical character ISO-4217 currency code the Price List files are denominated in.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The format you want to retrieve your Price List files. The `FileFormat` can be obtained from the [`ListPriceList`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html) response.
   *
   * @public
   */
  FileFormats?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPriceListsResponse {
  /**
   * The type of price list references that match your request.
   *
   * @public
   */
  PriceLists?: PriceList[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}
