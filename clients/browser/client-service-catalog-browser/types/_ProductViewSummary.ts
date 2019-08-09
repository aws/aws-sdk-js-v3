/**
 * <p>Summary information about a product view.</p>
 */
export interface _ProductViewSummary {
  /**
   * <p>The product view identifier.</p>
   */
  Id?: string;

  /**
   * <p>The product identifier.</p>
   */
  ProductId?: string;

  /**
   * <p>The name of the product.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the product. Contact the product administrator for the significance of this value.</p>
   */
  Owner?: string;

  /**
   * <p>Short description of the product.</p>
   */
  ShortDescription?: string;

  /**
   * <p>The product type. Contact the product administrator for the significance of this value. If this value is <code>MARKETPLACE</code>, the product was created by AWS Marketplace.</p>
   */
  Type?: "CLOUD_FORMATION_TEMPLATE" | "MARKETPLACE" | string;

  /**
   * <p>The distributor of the product. Contact the product administrator for the significance of this value.</p>
   */
  Distributor?: string;

  /**
   * <p>Indicates whether the product has a default path. If the product does not have a default path, call <a>ListLaunchPaths</a> to disambiguate between paths. Otherwise, <a>ListLaunchPaths</a> is not required, and the output of <a>ProductViewSummary</a> can be used directly with <a>DescribeProvisioningParameters</a>.</p>
   */
  HasDefaultPath?: boolean;

  /**
   * <p>The email contact information to obtain support for this Product.</p>
   */
  SupportEmail?: string;

  /**
   * <p>The description of the support for this Product.</p>
   */
  SupportDescription?: string;

  /**
   * <p>The URL information to obtain support for this Product.</p>
   */
  SupportUrl?: string;
}

export type _UnmarshalledProductViewSummary = _ProductViewSummary;
