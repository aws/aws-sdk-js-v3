/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface _DesiredWeightAndCapacity {
  /**
   * <p>The name of the variant to update.</p>
   */
  VariantName: string;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;
}

export type _UnmarshalledDesiredWeightAndCapacity = _DesiredWeightAndCapacity;
