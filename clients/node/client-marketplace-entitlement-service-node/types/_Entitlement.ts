import {
  _EntitlementValue,
  _UnmarshalledEntitlementValue
} from "./_EntitlementValue";

/**
 * <p>An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p>
 */
export interface _Entitlement {
  /**
   * <p>The product code for which the given entitlement applies. Product codes are provided by AWS Marketplace when the product listing is created.</p>
   */
  ProductCode?: string;

  /**
   * <p>The dimension for which the given entitlement applies. Dimensions represent categories of capacity in a product and are specified when the product is listed in AWS Marketplace.</p>
   */
  Dimension?: string;

  /**
   * <p>The customer identifier is a handle to each unique customer in an application. Customer identifiers are obtained through the ResolveCustomer operation in AWS Marketplace Metering Service.</p>
   */
  CustomerIdentifier?: string;

  /**
   * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.</p>
   */
  Value?: _EntitlementValue;

  /**
   * <p>The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.</p>
   */
  ExpirationDate?: Date | string | number;
}

export interface _UnmarshalledEntitlement extends _Entitlement {
  /**
   * <p>The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.</p>
   */
  Value?: _UnmarshalledEntitlementValue;

  /**
   * <p>The expiration date represents the minimum date through which this entitlement is expected to remain valid. For contractual products listed on AWS Marketplace, the expiration date is the date at which the customer will renew or cancel their contract. Customers who are opting to renew their contract will still have entitlements with an expiration date.</p>
   */
  ExpirationDate?: Date;
}
