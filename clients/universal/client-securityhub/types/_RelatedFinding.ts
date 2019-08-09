/**
 * <p>Details about a related finding.</p>
 */
export interface _RelatedFinding {
  /**
   * <p>The ARN of the product that generated a related finding.</p>
   */
  ProductArn: string;

  /**
   * <p>The product-generated identifier for a related finding.</p>
   */
  Id: string;
}

export type _UnmarshalledRelatedFinding = _RelatedFinding;
