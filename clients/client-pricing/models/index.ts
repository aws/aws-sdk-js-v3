import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned
 *           IOPS</code> for the <code>Amazon EC2</code>
 *             <code>volumeType</code> attribute.</p>
 */
export interface AttributeValue {
  __type?: "AttributeValue";
  /**
   * <p>The specific value of an <code>attributeName</code>.</p>
   */
  Value?: string;
}

export namespace AttributeValue {
  export function isa(o: any): o is AttributeValue {
    return __isa(o, "AttributeValue");
  }
}

export interface DescribeServicesRequest {
  __type?: "DescribeServicesRequest";
  /**
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   */
  FormatVersion?: string;

  /**
   * <p>The maximum number of results that you want returned in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The code for the service whose information you want to retrieve, such as <code>AmazonEC2</code>.
   *           You can use
   *          the <code>ServiceCode</code> to filter the results in a <code>GetProducts</code> call.
   *       To retrieve a list of all services, leave this blank.</p>
   */
  ServiceCode?: string;
}

export namespace DescribeServicesRequest {
  export function isa(o: any): o is DescribeServicesRequest {
    return __isa(o, "DescribeServicesRequest");
  }
}

export interface DescribeServicesResponse {
  __type?: "DescribeServicesResponse";
  /**
   * <p>The format version of the response. For example, <code>aws_v1</code>.</p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token for the next set of retreivable results.</p>
   */
  NextToken?: string;

  /**
   * <p>The service metadata for the service or services in the response.</p>
   */
  Services?: Array<Service>;
}

export namespace DescribeServicesResponse {
  export function isa(o: any): o is DescribeServicesResponse {
    return __isa(o, "DescribeServicesResponse");
  }
}

/**
 * <p>The pagination token expired. Try again without a pagination token.</p>
 */
export interface ExpiredNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "ExpiredNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace ExpiredNextTokenException {
  export function isa(o: any): o is ExpiredNextTokenException {
    return __isa(o, "ExpiredNextTokenException");
  }
}

/**
 * <p>The constraints that you want all returned products to match.</p>
 */
export interface Filter {
  __type?: "Filter";
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
   * <p>The type of filter that you want to use.</p>
   *          <p>Valid values are: <code>TERM_MATCH</code>. <code>TERM_MATCH</code> returns only
   *          products that match both the given filter field and the given value.</p>
   */
  Type: FilterType | string | undefined;

  /**
   * <p>The service code or attribute value that you want to filter by. If you are filtering by
   *          service code this is the actual service code, such as <code>AmazonEC2</code>. If you are
   *          filtering by attribute name, this is the attribute value that you want the returned products
   *          to match, such as a <code>Provisioned IOPS</code> volume.</p>
   */
  Value: string | undefined;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return __isa(o, "Filter");
  }
}

export enum FilterType {
  TERM_MATCH = "TERM_MATCH"
}

export interface GetAttributeValuesRequest {
  __type?: "GetAttributeValuesRequest";
  /**
   * <p>The name of the attribute that you want to retrieve the values for, such as <code>volumeType</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The maximum number of results to return in response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The service code for the service whose attributes you want to retrieve. For example, if you want
   *           the retrieve an EC2 attribute, use <code>AmazonEC2</code>.</p>
   */
  ServiceCode: string | undefined;
}

export namespace GetAttributeValuesRequest {
  export function isa(o: any): o is GetAttributeValuesRequest {
    return __isa(o, "GetAttributeValuesRequest");
  }
}

export interface GetAttributeValuesResponse {
  __type?: "GetAttributeValuesResponse";
  /**
   * <p>The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and
   *       <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code>
   *             <code>volumeType</code>.</p>
   */
  AttributeValues?: Array<AttributeValue>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;
}

export namespace GetAttributeValuesResponse {
  export function isa(o: any): o is GetAttributeValuesResponse {
    return __isa(o, "GetAttributeValuesResponse");
  }
}

export interface GetProductsRequest {
  __type?: "GetProductsRequest";
  /**
   * <p>The list of filters that limit the returned products. only products that match all filters
   *          are returned.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The format version that you want the response to be in.</p>
   *          <p>Valid values are: <code>aws_v1</code>
   *          </p>
   */
  FormatVersion?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The code for the service whose products you want to retrieve. </p>
   */
  ServiceCode?: string;
}

export namespace GetProductsRequest {
  export function isa(o: any): o is GetProductsRequest {
    return __isa(o, "GetProductsRequest");
  }
}

export interface GetProductsResponse {
  __type?: "GetProductsResponse";
  /**
   * <p>The format version of the response. For example, aws_v1.</p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of products that match your filters. The list contains both the product metadata and
   *          the price information.</p>
   */
  PriceList?: Array<__LazyJsonString | string>;
}

export namespace GetProductsResponse {
  export function isa(o: any): o is GetProductsResponse {
    return __isa(o, "GetProductsResponse");
  }
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export interface InternalErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalErrorException {
  export function isa(o: any): o is InternalErrorException {
    return __isa(o, "InternalErrorException");
  }
}

/**
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export interface InvalidNextTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return __isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>One or more parameters had an invalid value.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The requested resource can't be found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>The metadata for a service, such as the service code and available attribute names.</p>
 */
export interface Service {
  __type?: "Service";
  /**
   * <p>The attributes that are available for this service.</p>
   */
  AttributeNames?: Array<string>;

  /**
   * <p>The code for the AWS service.</p>
   */
  ServiceCode?: string;
}

export namespace Service {
  export function isa(o: any): o is Service {
    return __isa(o, "Service");
  }
}
