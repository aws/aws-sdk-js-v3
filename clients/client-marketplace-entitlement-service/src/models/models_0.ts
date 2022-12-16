// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MarketplaceEntitlementServiceServiceException as __BaseException } from "./MarketplaceEntitlementServiceServiceException";

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
  Filter?: Record<string, string[]>;

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

/**
 * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to
 *    for the product.</p>
 */
export interface EntitlementValue {
  /**
   * <p>The IntegerValue field will be populated with an integer value when the entitlement is an
   *    integer type. Otherwise, the field will not be set.</p>
   */
  IntegerValue?: number;

  /**
   * <p>The DoubleValue field will be populated with a double value when the entitlement is a
   *    double type. Otherwise, the field will not be set.</p>
   */
  DoubleValue?: number;

  /**
   * <p>The BooleanValue field will be populated with a boolean value when the entitlement is a
   *       boolean type. Otherwise, the field will not be set.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>The StringValue field will be populated with a string value when the entitlement is a
   *    string type. Otherwise, the field will not be set.</p>
   */
  StringValue?: string;
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

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *    message with details on the AWS forums.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
  }
}

/**
 * <p>One or more parameters in your request was invalid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The calls to the GetEntitlements API are throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @internal
 */
export const GetEntitlementsRequestFilterSensitiveLog = (obj: GetEntitlementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntitlementValueFilterSensitiveLog = (obj: EntitlementValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntitlementFilterSensitiveLog = (obj: Entitlement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEntitlementsResultFilterSensitiveLog = (obj: GetEntitlementsResult): any => ({
  ...obj,
});
