// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { PricingServiceException as __BaseException } from "./PricingServiceException";

/**
 * @public
 * <p>General authentication failure. The request wasn't signed correctly.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned
 *           IOPS</code> for the <code>Amazon EC2</code>
 *             <code>volumeType</code> attribute.</p>
 */
export interface AttributeValue {
  /**
   * @public
   * <p>The specific value of an <code>attributeName</code>.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * @public
   * <p>The code for the service whose information you want to retrieve, such as <code>AmazonEC2</code>.
   *           You can use
   *          the <code>ServiceCode</code> to filter the results in a <code>GetProducts</code> call.
   *       To retrieve a list of all services, leave this blank.</p>
   */
  ServiceCode?: string;

  /**
   * @public
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   */
  FormatVersion?: string;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that you want returned in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The metadata for a service, such as the service code and available attribute names.</p>
 */
export interface Service {
  /**
   * @public
   * <p>The code for the Amazon Web Services service.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>The attributes that are available for this service.</p>
   */
  AttributeNames?: string[];
}

/**
 * @public
 */
export interface DescribeServicesResponse {
  /**
   * @public
   * <p>The service metadata for the service or services in the response.</p>
   */
  Services?: Service[];

  /**
   * @public
   * <p>The format version of the response. For example, <code>aws_v1</code>.</p>
   */
  FormatVersion?: string;

  /**
   * @public
   * <p>The pagination token for the next set of retrievable results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The pagination token expired. Try again without a pagination token.</p>
 */
export class ExpiredNextTokenException extends __BaseException {
  readonly name: "ExpiredNextTokenException" = "ExpiredNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredNextTokenException, __BaseException>) {
    super({
      name: "ExpiredNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>One or more parameters had an invalid value.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The requested resource can't be found.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetAttributeValuesRequest {
  /**
   * @public
   * <p>The service code for the service whose attributes you want to retrieve. For example, if you want
   *           the retrieve an EC2 attribute, use <code>AmazonEC2</code>.</p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetAttributeValuesResponse {
  /**
   * @public
   * <p>The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and
   *       <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code>
   *             <code>volumeType</code>.</p>
   */
  AttributeValues?: AttributeValue[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetPriceListFileUrlRequest {
  /**
   * @public
   * <p>The unique identifier that maps to where your Price List files are located.
   *             <code>PriceListArn</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">
   *                <code>ListPriceLists</code>
   *             </a> response. </p>
   */
  PriceListArn: string | undefined;

  /**
   * @public
   * <p>The format that you want to retrieve your Price List files in. The
   *             <code>FileFormat</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">
   *                <code>ListPriceLists</code>
   *             </a> response. </p>
   */
  FileFormat: string | undefined;
}

/**
 * @public
 */
export interface GetPriceListFileUrlResponse {
  /**
   * @public
   * <p>The URL to download your Price List file from. </p>
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const FilterType = {
  TERM_MATCH: "TERM_MATCH",
} as const;

/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * @public
 * <p>The constraints that you want all returned products to match.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The type of filter that you want to use.</p>
   *          <p>Valid values are: <code>TERM_MATCH</code>. <code>TERM_MATCH</code> returns only
   *          products that match both the given filter field and the given value.</p>
   */
  Type: FilterType | string | undefined;

  /**
   * @public
   * <p>The product metadata field that you want to filter on. You can filter by just the
   *          service code to see all products for a specific service, filter
   *          by just the attribute name to see a specific attribute for multiple services, or use both a service code
   *          and an attribute name to retrieve only products that match both fields.</p>
   *          <p>Valid values include: <code>ServiceCode</code>, and all attribute names</p>
   *          <p>For example, you can filter by the <code>AmazonEC2</code> service code and the
   *          <code>volumeType</code> attribute name to get the prices for only Amazon EC2 volumes.</p>
   */
  Field: string | undefined;

  /**
   * @public
   * <p>The service code or attribute value that you want to filter by. If you're filtering
   *          by service code this is the actual service code, such as <code>AmazonEC2</code>. If you're
   *          filtering by attribute name, this is the attribute value that you want the returned
   *          products to match, such as a <code>Provisioned IOPS</code> volume.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetProductsRequest {
  /**
   * @public
   * <p>The code for the service whose products you want to retrieve. </p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>The list of filters that limit the returned products. only products that match all filters
   *          are returned.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   */
  FormatVersion?: string;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetProductsResponse {
  /**
   * @public
   * <p>The format version of the response. For example, aws_v1.</p>
   */
  FormatVersion?: string;

  /**
   * @public
   * <p>The list of products that match your filters. The list contains both the product metadata and
   *          the price information.</p>
   */
  PriceList?: (__LazyJsonString | string)[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPriceListsRequest {
  /**
   * @public
   * <p>The service code or the Savings Plan service code for the attributes that
   *          you want to retrieve. For example, to get the list of applicable Amazon EC2 price lists, use
   *             <code>AmazonEC2</code>. For a full list of service codes containing On-Demand and
   *          Reserved Instance (RI) pricing, use the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html#awscostmanagement-pricing_DescribeServices-request-FormatVersion">
   *                <code>DescribeServices</code>
   *             </a> API.</p>
   *          <p>To retrieve the Compute Savings Plan price lists, use <code>ComputeSavingsPlans</code>. To retrieve Machine Learning Savings Plans price lists, use <code>MachineLearningSavingsPlans</code>.
   *       </p>
   */
  ServiceCode: string | undefined;

  /**
   * @public
   * <p>The date that the Price List file prices are effective from. </p>
   */
  EffectiveDate: Date | undefined;

  /**
   * @public
   * <p>This is used to filter the Price List by Amazon Web Services Region. For example, to get
   *          the price list only for the <code>US East (N. Virginia)</code> Region, use
   *             <code>us-east-1</code>. If nothing is specified, you retrieve price lists for all
   *          applicable Regions. The available <code>RegionCode</code> list can be retrieved from <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html">
   *                <code>GetAttributeValues</code>
   *             </a> API.</p>
   */
  RegionCode?: string;

  /**
   * @public
   * <p>The three alphabetical character ISO-4217 currency code that the Price List files are
   *          denominated in. </p>
   */
  CurrencyCode: string | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results that you want to retrieve. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.
   *       </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>
 *             <i>
 *                <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p>This is the type of price list references that match your request. </p>
 */
export interface PriceList {
  /**
   * @public
   * <p>The unique identifier that maps to where your Price List files are located.
   *             <code>PriceListArn</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">
   *                <code>ListPriceList</code>
   *             </a> response. </p>
   */
  PriceListArn?: string;

  /**
   * @public
   * <p>This is used to filter the Price List by Amazon Web Services Region. For example, to get
   *          the price list only for the <code>US East (N. Virginia)</code> Region, use
   *             <code>us-east-1</code>. If nothing is specified, you retrieve price lists for all
   *          applicable Regions. The available <code>RegionCode</code> list can be retrieved from <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html">
   *                <code>GetAttributeValues</code>
   *             </a> API. </p>
   */
  RegionCode?: string;

  /**
   * @public
   * <p>The three alphabetical character ISO-4217 currency code the Price List files are
   *          denominated in. </p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>The format you want to retrieve your Price List files. The <code>FileFormat</code> can
   *          be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">
   *                <code>ListPriceList</code>
   *             </a> response. </p>
   */
  FileFormats?: string[];
}

/**
 * @public
 */
export interface ListPriceListsResponse {
  /**
   * @public
   * <p>The type of price list references that match your request. </p>
   */
  PriceLists?: PriceList[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve. </p>
   */
  NextToken?: string;
}
