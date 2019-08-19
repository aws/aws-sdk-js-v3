import {
  _ProductViewSummary,
  _UnmarshalledProductViewSummary
} from "./_ProductViewSummary";

/**
 * <p>Information about a product view.</p>
 */
export interface _ProductViewDetail {
  /**
   * <p>Summary information about the product view.</p>
   */
  ProductViewSummary?: _ProductViewSummary;

  /**
   * <p>The status of the product.</p> <ul> <li> <p> <code>AVAILABLE</code> - The product is ready for use.</p> </li> <li> <p> <code>CREATING</code> - Product creation has started; the product is not ready for use.</p> </li> <li> <p> <code>FAILED</code> - An action failed.</p> </li> </ul>
   */
  Status?: "AVAILABLE" | "CREATING" | "FAILED" | string;

  /**
   * <p>The ARN of the product.</p>
   */
  ProductARN?: string;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date | string | number;
}

export interface _UnmarshalledProductViewDetail extends _ProductViewDetail {
  /**
   * <p>Summary information about the product view.</p>
   */
  ProductViewSummary?: _UnmarshalledProductViewSummary;

  /**
   * <p>The UTC time stamp of the creation time.</p>
   */
  CreatedTime?: Date;
}
