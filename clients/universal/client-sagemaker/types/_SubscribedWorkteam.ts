/**
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface _SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p/>
   */
  ListingId?: string;
}

export type _UnmarshalledSubscribedWorkteam = _SubscribedWorkteam;
