/**
 * <p>Information about a portfolio.</p>
 */
export interface _PortfolioDetail {
  /**
   * <p>The portfolio identifier.</p>
   */
  Id?: string;

  /**
   * <p>The ARN assigned to the portfolio.</p>
   */
  ARN?: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The name of the portfolio provider.</p>
   */
  ProviderName?: string;
}

export interface _UnmarshalledPortfolioDetail extends _PortfolioDetail {
  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;
}
