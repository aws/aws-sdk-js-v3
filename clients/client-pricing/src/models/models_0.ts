// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

import { PricingServiceException as __BaseException } from "./PricingServiceException";

/**
 * <p>General authentication failure. The request wasn't signed correctly.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned
 *           IOPS</code> for the <code>Amazon EC2</code>
 *             <code>volumeType</code> attribute.</p>
 * @public
 */
export interface AttributeValue {
  /**
   * <p>The specific value of an <code>attributeName</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServicesRequest {
  /**
   * <p>The code for the service whose information you want to retrieve, such as <code>AmazonEC2</code>.
   *           You can use
   *          the <code>ServiceCode</code> to filter the results in a <code>GetProducts</code> call.
   *       To retrieve a list of all services, leave this blank.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results that you want returned in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The metadata for a service, such as the service code and available attribute names.</p>
 * @public
 */
export interface Service {
  /**
   * <p>The code for the Amazon Web Services service.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>The attributes that are available for this service.</p>
   * @public
   */
  AttributeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeServicesResponse {
  /**
   * <p>The service metadata for the service or services in the response.</p>
   * @public
   */
  Services?: Service[] | undefined;

  /**
   * <p>The format version of the response. For example, <code>aws_v1</code>.</p>
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * <p>The pagination token for the next set of retrievable results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The pagination token expired. Try again without a pagination token.</p>
 * @public
 */
export class ExpiredNextTokenException extends __BaseException {
  readonly name: "ExpiredNextTokenException" = "ExpiredNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string | undefined;
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
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>One or more parameters had an invalid value.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The requested resource can't be found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>You've made too many requests exceeding service quotas.
 *       </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetAttributeValuesRequest {
  /**
   * <p>The service code for the service whose attributes you want to retrieve. For example, if you want
   *           the retrieve an EC2 attribute, use <code>AmazonEC2</code>.</p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAttributeValuesResponse {
  /**
   * <p>The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and
   *       <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code>
   *             <code>volumeType</code>.</p>
   * @public
   */
  AttributeValues?: AttributeValue[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetPriceListFileUrlRequest {
  /**
   * <p>The unique identifier that maps to where your Price List files are located.
   *             <code>PriceListArn</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">ListPriceLists</a> response. </p>
   * @public
   */
  PriceListArn: string | undefined;

  /**
   * <p>The format that you want to retrieve your Price List files in. The
   *             <code>FileFormat</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">ListPriceLists</a> response. </p>
   * @public
   */
  FileFormat: string | undefined;
}

/**
 * @public
 */
export interface GetPriceListFileUrlResponse {
  /**
   * <p>The URL to download your Price List file from. </p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>The requested resource can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const FilterType = {
  ANY_OF: "ANY_OF",
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  NONE_OF: "NONE_OF",
  TERM_MATCH: "TERM_MATCH",
} as const;

/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * <p>The constraints that you want all returned products to match.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The type of filter that you want to use.</p>
   *          <p>Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERM_MATCH</code>: Returns only
   *             products that match both the given filter field and the given value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQUALS</code>: Returns products that have a field value exactly matching the provided value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTAINS</code>: Returns products where the field value contains the provided value as a substring.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANY_OF</code>: Returns products where the field value is any of the provided values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE_OF</code>: Returns products where the field value is not any of the provided values.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: FilterType | undefined;

  /**
   * <p>The product metadata field that you want to filter on. You can filter by just the
   *          service code to see all products for a specific service, filter
   *          by just the attribute name to see a specific attribute for multiple services, or use both a service code
   *          and an attribute name to retrieve only products that match both fields.</p>
   *          <p>Valid values include: <code>ServiceCode</code>, and all attribute names</p>
   *          <p>For example, you can filter by the <code>AmazonEC2</code> service code and the
   *          <code>volumeType</code> attribute name to get the prices for only Amazon EC2 volumes.</p>
   * @public
   */
  Field: string | undefined;

  /**
   * <p>The service code or attribute value that you want to filter by. If you're filtering
   *          by service code this is the actual service code, such as <code>AmazonEC2</code>. If you're
   *          filtering by attribute name, this is the attribute value that you want the returned
   *          products to match, such as a <code>Provisioned IOPS</code> volume.</p>
   *          <p>For <code>ANY_OF</code> and <code>NONE_OF</code> filter types, you can provide multiple values as a comma-separated string. For example, <code>t2.micro,t2.small,t2.medium</code> or <code>Compute optimized, GPU instance, Micro instances</code>.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetProductsRequest {
  /**
   * <p>The code for the service whose products you want to retrieve. </p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>The list of filters that limit the returned products. only products that match all filters
   *          are returned.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetProductsResponse {
  /**
   * <p>The format version of the response. For example, aws_v1.</p>
   * @public
   */
  FormatVersion?: string | undefined;

  /**
   * <p>The list of products that match your filters. The list contains both the product metadata and
   *          the price information.</p>
   * @public
   */
  PriceList?: (__AutomaticJsonStringConversion | string)[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPriceListsRequest {
  /**
   * <p>The service code or the Savings Plan service code for the attributes that
   *          you want to retrieve. For example, to get the list of applicable Amazon EC2 price
   *          lists, use <code>AmazonEC2</code>. For a full list of service codes containing On-Demand
   *          and Reserved Instance (RI) pricing, use the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html#awscostmanagement-pricing_DescribeServices-request-FormatVersion">DescribeServices</a> API.</p>
   *          <p>To retrieve the Reserved Instance and Compute Savings Plan price lists,
   *          use <code>ComputeSavingsPlans</code>. </p>
   *          <p>To retrieve Machine Learning Savings Plans price lists, use
   *             <code>MachineLearningSavingsPlans</code>. </p>
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * <p>The date that the Price List file prices are effective from. </p>
   * @public
   */
  EffectiveDate: Date | undefined;

  /**
   * <p>This is used to filter the Price List by Amazon Web Services Region. For example, to get
   *          the price list only for the <code>US East (N. Virginia)</code> Region, use
   *             <code>us-east-1</code>. If nothing is specified, you retrieve price lists for all
   *          applicable Regions. The available <code>RegionCode</code> list can be retrieved from <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html">GetAttributeValues</a> API.</p>
   * @public
   */
  RegionCode?: string | undefined;

  /**
   * <p>The three alphabetical character ISO-4217 currency code that the Price List files are
   *          denominated in. </p>
   * @public
   */
  CurrencyCode: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>
 *             <i>
 *                <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b>
 *             </i>
 *          </p>
 *          <p>This is the type of price list references that match your request. </p>
 * @public
 */
export interface PriceList {
  /**
   * <p>The unique identifier that maps to where your Price List files are located.
   *             <code>PriceListArn</code> can be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">
   *                <code>ListPriceList</code>
   *             </a> response. </p>
   * @public
   */
  PriceListArn?: string | undefined;

  /**
   * <p>This is used to filter the Price List by Amazon Web Services Region. For example, to get
   *          the price list only for the <code>US East (N. Virginia)</code> Region, use
   *             <code>us-east-1</code>. If nothing is specified, you retrieve price lists for all
   *          applicable Regions. The available <code>RegionCode</code> list can be retrieved from <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html">
   *                <code>GetAttributeValues</code>
   *             </a> API. </p>
   * @public
   */
  RegionCode?: string | undefined;

  /**
   * <p>The three alphabetical character ISO-4217 currency code the Price List files are
   *          denominated in. </p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The format you want to retrieve your Price List files. The <code>FileFormat</code> can
   *          be obtained from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html">
   *                <code>ListPriceList</code>
   *             </a> response. </p>
   * @public
   */
  FileFormats?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPriceListsResponse {
  /**
   * <p>The type of price list references that match your request. </p>
   * @public
   */
  PriceLists?: PriceList[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve. </p>
   * @public
   */
  NextToken?: string | undefined;
}
