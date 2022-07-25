// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { PricingServiceException as __BaseException } from "./PricingServiceException";

/**
 * <p>The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned
 *           IOPS</code> for the <code>Amazon EC2</code>
 *             <code>volumeType</code> attribute.</p>
 */
export interface AttributeValue {
  /**
   * <p>The specific value of an <code>attributeName</code>.</p>
   */
  Value?: string;
}

export interface DescribeServicesRequest {
  /**
   * <p>The code for the service whose information you want to retrieve, such as <code>AmazonEC2</code>.
   *           You can use
   *          the <code>ServiceCode</code> to filter the results in a <code>GetProducts</code> call.
   *       To retrieve a list of all services, leave this blank.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results that you want returned in the response.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The metadata for a service, such as the service code and available attribute names.</p>
 */
export interface Service {
  /**
   * <p>The code for the Amazon Web Services service.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The attributes that are available for this service.</p>
   */
  AttributeNames?: string[];
}

export interface DescribeServicesResponse {
  /**
   * <p>The service metadata for the service or services in the response.</p>
   */
  Services?: Service[];

  /**
   * <p>The format version of the response. For example, <code>aws_v1</code>.</p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token for the next set of retrievable results.</p>
   */
  NextToken?: string;
}

/**
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

export interface GetAttributeValuesRequest {
  /**
   * <p>The service code for the service whose attributes you want to retrieve. For example, if you want
   *           the retrieve an EC2 attribute, use <code>AmazonEC2</code>.</p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in response.</p>
   */
  MaxResults?: number;
}

export interface GetAttributeValuesResponse {
  /**
   * <p>The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and
   *       <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code>
   *             <code>volumeType</code>.</p>
   */
  AttributeValues?: AttributeValue[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export enum FilterType {
  TERM_MATCH = "TERM_MATCH",
}

/**
 * <p>The constraints that you want all returned products to match.</p>
 */
export interface Filter {
  /**
   * <p>The type of filter that you want to use.</p>
   *          <p>Valid values are: <code>TERM_MATCH</code>. <code>TERM_MATCH</code> returns only
   *          products that match both the given filter field and the given value.</p>
   */
  Type: FilterType | string | undefined;

  /**
   * <p>The product metadata field that you want to filter on. You can filter by just the
   *          service code to see all products for a specific service, filter
   *          by just the attribute name to see a specific attribute for multiple services, or use both a service code
   *          and an attribute name to retrieve only products that match both fields.</p>
   *          <p>Valid values include: <code>ServiceCode</code>, and all attribute names</p>
   *
   *          <p>For example, you can filter by the <code>AmazonEC2</code> service code and the
   *          <code>volumeType</code> attribute name to get the prices for only Amazon EC2 volumes.</p>
   */
  Field: string | undefined;

  /**
   * <p>The service code or attribute value that you want to filter by. If you are filtering by
   *          service code this is the actual service code, such as <code>AmazonEC2</code>. If you are
   *          filtering by attribute name, this is the attribute value that you want the returned products
   *          to match, such as a <code>Provisioned IOPS</code> volume.</p>
   */
  Value: string | undefined;
}

export interface GetProductsRequest {
  /**
   * <p>The code for the service whose products you want to retrieve. </p>
   */
  ServiceCode: string | undefined;

  /**
   * <p>The list of filters that limit the returned products. only products that match all filters
   *          are returned.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;
}

export interface GetProductsResponse {
  /**
   * <p>The format version of the response. For example, aws_v1.</p>
   */
  FormatVersion?: string;

  /**
   * <p>The list of products that match your filters. The list contains both the product metadata and
   *          the price information.</p>
   */
  PriceList?: (__LazyJsonString | string)[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const AttributeValueFilterSensitiveLog = (obj: AttributeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServicesRequestFilterSensitiveLog = (obj: DescribeServicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServicesResponseFilterSensitiveLog = (obj: DescribeServicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttributeValuesRequestFilterSensitiveLog = (obj: GetAttributeValuesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttributeValuesResponseFilterSensitiveLog = (obj: GetAttributeValuesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProductsRequestFilterSensitiveLog = (obj: GetProductsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProductsResponseFilterSensitiveLog = (obj: GetProductsResponse): any => ({
  ...obj,
});
