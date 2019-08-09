/**
 * <p>Contains details about a product.</p>
 */
export interface _Product {
  /**
   * <p>The ARN assigned to the product.</p>
   */
  ProductArn: string;

  /**
   * <p>The name of the product.</p>
   */
  ProductName?: string;

  /**
   * <p>The name of the company that provides the product.</p>
   */
  CompanyName?: string;

  /**
   * <p>A description of the product.</p>
   */
  Description?: string;

  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: Array<string> | Iterable<string>;

  /**
   * <p>The URL for the page that contains more information about the product.</p>
   */
  MarketplaceUrl?: string;

  /**
   * <p>The URL used to activate the product.</p>
   */
  ActivationUrl?: string;

  /**
   * <p>The resource policy associated with the product.</p>
   */
  ProductSubscriptionResourcePolicy?: string;
}

export interface _UnmarshalledProduct extends _Product {
  /**
   * <p>The categories assigned to the product.</p>
   */
  Categories?: Array<string>;
}
