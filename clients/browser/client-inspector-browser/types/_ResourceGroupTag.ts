/**
 * <p>This data type is used as one of the elements of the <a>ResourceGroup</a> data type.</p>
 */
export interface _ResourceGroupTag {
  /**
   * <p>A tag key.</p>
   */
  key: string;

  /**
   * <p>The value assigned to a tag key.</p>
   */
  value?: string;
}

export type _UnmarshalledResourceGroupTag = _ResourceGroupTag;
