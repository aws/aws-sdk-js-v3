// smithy-typescript generated code
import type { GetEntitlementFilterName } from "./enums";

/**
 * The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
 *
 * @public
 */
export interface GetEntitlementsRequest {
  /**
   * Product code is used to uniquely identify a product in AWS Marketplace. The product code will be provided by AWS Marketplace when the product listing is created.
   *
   * @public
   */
  ProductCode: string | undefined;

  /**
   * Filter is used to return entitlements for a specific customer or for a specific dimension. Filters are described as keys mapped to a lists of values. Filtered requests are *unioned* for each value in the value list, and then *intersected* for each filter key.
   *
   * `CustomerIdentifier` and `CustomerAWSAccountId` are mutually exclusive parameters. You must use one or the other, but not both in the same request.
   *
   * > **Note:** If you're migrating an existing integration, use [Account Feeds](https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed-account.html) to map `CustomerIdentifier` to `CustomerAWSAccountId`, and [Agreements Feeds](https://docs.aws.amazon.com/marketplace/latest/userguide/data-feed-agreements.html) to map `CustomerAWSAccountId` and `LicenseArn`.
   *
   * @public
   */
  Filter?: Partial<Record<GetEntitlementFilterName, string[]>> | undefined;

  /**
   * For paginated calls to GetEntitlements, pass the NextToken from the previous GetEntitlementsResult.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to retrieve from the GetEntitlements operation. For pagination, use the NextToken field in subsequent calls to GetEntitlements.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
 *
 * @public
 */
export interface EntitlementValue {
  /**
   * The IntegerValue field will be populated with an integer value when the entitlement is an integer type. Otherwise, the field will not be set.
   *
   * @public
   */
  IntegerValue?: number | undefined;

  /**
   * The DoubleValue field will be populated with a double value when the entitlement is a double type. Otherwise, the field will not be set.
   *
   * @public
   */
  DoubleValue?: number | undefined;

  /**
   * The BooleanValue field will be populated with a boolean value when the entitlement is a boolean type. Otherwise, the field will not be set.
   *
   * @public
   */
  BooleanValue?: boolean | undefined;

  /**
   * The StringValue field will be populated with a string value when the entitlement is a string type. Otherwise, the field will not be set.
   *
   * @public
   */
  StringValue?: string | undefined;
}

/**
 * An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
 *
 * @public
 */
export interface Entitlement {
  /**
   * The product code for which the given entitlement applies. Product codes are provided by AWS Marketplace when the product listing is created.
   *
   * @public
   */
  ProductCode?: string | undefined;

  /**
   * The dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.
   *
   * @public
   */
  Dimension?: string | undefined;

  /**
   * The customer identifier is a handle to each unique customer in an application. Customer identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering Service.
   *
   * @public
   */
  CustomerIdentifier?: string | undefined;

  /**
   * The `CustomerAWSAccountId` parameter specifies the AWS account ID of the buyer.
   *
   * @public
   */
  CustomerAWSAccountId?: string | undefined;

  /**
   * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
   *
   * @public
   */
  Value?: EntitlementValue | undefined;

  /**
   * The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * The `LicenseArn` is a unique identifier for a specific granted license. These are used for software purchased through AWS Marketplace.
   *
   * @public
   */
  LicenseArn?: string | undefined;
}

/**
 * The GetEntitlementsRequest contains results from the GetEntitlements operation.
 *
 * @public
 */
export interface GetEntitlementsResult {
  /**
   * The set of entitlements found through the GetEntitlements operation. If the result contains an empty set of entitlements, NextToken might still be present and should be used.
   *
   * @public
   */
  Entitlements?: Entitlement[] | undefined;

  /**
   * For paginated results, use NextToken in subsequent calls to GetEntitlements. If the result contains an empty set of entitlements, NextToken might still be present and should be used.
   *
   * @public
   */
  NextToken?: string | undefined;
}
