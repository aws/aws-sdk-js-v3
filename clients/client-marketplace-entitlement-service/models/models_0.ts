import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum GetEntitlementFilterName {
  CUSTOMER_IDENTIFIER = "CUSTOMER_IDENTIFIER",
  DIMENSION = "DIMENSION",
}

/**
 * <p>The GetEntitlementsRequest contains parameters for the GetEntitlements
 *    operation.</p>
 */
export interface GetEntitlementsRequest {
  /**
   * <p>Product code is used to uniquely identify a product in AWS Marketplace. The product code
   *    will be provided by AWS Marketplace when the product listing is created.</p>
   */
  ProductCode: string | undefined;

  /**
   * <p>Filter is used to return entitlements for a specific customer or for a specific
   *       dimension. Filters are described as keys mapped to a lists of values. Filtered requests are
   *         <i>unioned</i> for each value in the value list, and then
   *         <i>intersected</i> for each filter key.</p>
   */
  Filter?: { [key: string]: string[] };

  /**
   * <p>For paginated calls to GetEntitlements, pass the NextToken from the previous
   *    GetEntitlementsResult.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to retrieve from the GetEntitlements operation. For
   *    pagination, use the NextToken field in subsequent calls to GetEntitlements.</p>
   */
  MaxResults?: number;
}

export namespace GetEntitlementsRequest {
  export const filterSensitiveLog = (obj: GetEntitlementsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to
 *    for the product.</p>
 */
export type EntitlementValue =
  | EntitlementValue.BooleanValueMember
  | EntitlementValue.DoubleValueMember
  | EntitlementValue.IntegerValueMember
  | EntitlementValue.StringValueMember
  | EntitlementValue.$UnknownMember;

export namespace EntitlementValue {
  /**
   * <p>The IntegerValue field will be populated with an integer value when the entitlement is an
   *    integer type. Otherwise, the field will not be set.</p>
   */
  export interface IntegerValueMember {
    IntegerValue: number;
    DoubleValue?: never;
    BooleanValue?: never;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The DoubleValue field will be populated with a double value when the entitlement is a
   *    double type. Otherwise, the field will not be set.</p>
   */
  export interface DoubleValueMember {
    IntegerValue?: never;
    DoubleValue: number;
    BooleanValue?: never;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The BooleanValue field will be populated with a boolean value when the entitlement is a
   *       boolean type. Otherwise, the field will not be set.</p>
   */
  export interface BooleanValueMember {
    IntegerValue?: never;
    DoubleValue?: never;
    BooleanValue: boolean;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The StringValue field will be populated with a string value when the entitlement is a
   *    string type. Otherwise, the field will not be set.</p>
   */
  export interface StringValueMember {
    IntegerValue?: never;
    DoubleValue?: never;
    BooleanValue?: never;
    StringValue: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    IntegerValue?: never;
    DoubleValue?: never;
    BooleanValue?: never;
    StringValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    IntegerValue: (value: number) => T;
    DoubleValue: (value: number) => T;
    BooleanValue: (value: boolean) => T;
    StringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EntitlementValue, visitor: Visitor<T>): T => {
    if (value.IntegerValue !== undefined) return visitor.IntegerValue(value.IntegerValue);
    if (value.DoubleValue !== undefined) return visitor.DoubleValue(value.DoubleValue);
    if (value.BooleanValue !== undefined) return visitor.BooleanValue(value.BooleanValue);
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: EntitlementValue): any => {
    if (obj.IntegerValue !== undefined) return { IntegerValue: obj.IntegerValue };
    if (obj.DoubleValue !== undefined) return { DoubleValue: obj.DoubleValue };
    if (obj.BooleanValue !== undefined) return { BooleanValue: obj.BooleanValue };
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>An entitlement represents capacity in a product owned by the customer. For example, a
 *       customer might own some number of users or seats in an SaaS application or  some amount of
 *       data capacity in a multi-tenant database.</p>
 */
export interface Entitlement {
  /**
   * <p>The product code for which the given entitlement applies. Product codes are provided by
   *    AWS Marketplace when the product listing is created.</p>
   */
  ProductCode?: string;

  /**
   * <p>The dimension for which the given entitlement applies. Dimensions represent categories of
   *       capacity in a product and are specified when the product is listed in AWS
   *       Marketplace.</p>
   */
  Dimension?: string;

  /**
   * <p>The customer identifier is a handle to each unique customer in an application. Customer
   *    identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering
   *    Service.</p>
   */
  CustomerIdentifier?: string;

  /**
   * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to
   *    for the product.</p>
   */
  Value?: EntitlementValue;

  /**
   * <p>The expiration date represents the minimum date through which this entitlement is
   *    expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date
   *    is the date at which the customer will renew or cancel their contract. Customers who are opting
   *    to renew their contract will still have entitlements with an expiration date.</p>
   */
  ExpirationDate?: Date;
}

export namespace Entitlement {
  export const filterSensitiveLog = (obj: Entitlement): any => ({
    ...obj,
    ...(obj.Value && { Value: EntitlementValue.filterSensitiveLog(obj.Value) }),
  });
}

/**
 * <p>The GetEntitlementsRequest contains results from the GetEntitlements operation.</p>
 */
export interface GetEntitlementsResult {
  /**
   * <p>The set of entitlements found through the GetEntitlements operation. If the result
   *       contains an empty set of entitlements, NextToken might still be present and should be
   *       used.</p>
   */
  Entitlements?: Entitlement[];

  /**
   * <p>For paginated results, use NextToken in subsequent calls to GetEntitlements. If the
   *       result contains an empty set of entitlements, NextToken might still be present and should be
   *       used.</p>
   */
  NextToken?: string;
}

export namespace GetEntitlementsResult {
  export const filterSensitiveLog = (obj: GetEntitlementsResult): any => ({
    ...obj,
    ...(obj.Entitlements && { Entitlements: obj.Entitlements.map((item) => Entitlement.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *    message with details on the AWS forums.</p>
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  message?: string;
}

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters in your request was invalid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The calls to the GetEntitlements API are throttled.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}
