import { LazyJsonString as __LazyJsonString, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace AttributeValue {
  export const filterSensitiveLog = (obj: AttributeValue): any => ({
    ...obj,
  });
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

export namespace DescribeServicesRequest {
  export const filterSensitiveLog = (obj: DescribeServicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata for a service, such as the service code and available attribute names.</p>
 */
export interface Service {
  /**
   * <p>The code for the AWS service.</p>
   */
  ServiceCode?: string;

  /**
   * <p>The attributes that are available for this service.</p>
   */
  AttributeNames?: string[];
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
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
   * <p>The pagination token for the next set of retreivable results.</p>
   */
  NextToken?: string;
}

export namespace DescribeServicesResponse {
  export const filterSensitiveLog = (obj: DescribeServicesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The pagination token expired. Try again without a pagination token.</p>
 */
export interface ExpiredNextTokenException extends __SmithyException, $MetadataBearer {
  name: "ExpiredNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace ExpiredNextTokenException {
  export const filterSensitiveLog = (obj: ExpiredNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters had an invalid value.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
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

export namespace GetAttributeValuesRequest {
  export const filterSensitiveLog = (obj: GetAttributeValuesRequest): any => ({
    ...obj,
  });
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

export namespace GetAttributeValuesResponse {
  export const filterSensitiveLog = (obj: GetAttributeValuesResponse): any => ({
    ...obj,
  });
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

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface GetProductsRequest {
  /**
   * <p>The code for the service whose products you want to retrieve. </p>
   */
  ServiceCode?: string;

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

export namespace GetProductsRequest {
  export const filterSensitiveLog = (obj: GetProductsRequest): any => ({
    ...obj,
  });
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

export namespace GetProductsResponse {
  export const filterSensitiveLog = (obj: GetProductsResponse): any => ({
    ...obj,
  });
}
