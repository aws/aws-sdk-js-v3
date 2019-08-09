/**
 * <p>Provides information about a slot type..</p>
 */
export interface _SlotTypeMetadata {
  /**
   * <p>The name of the slot type.</p>
   */
  name?: string;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>The date that the slot type was updated. When you create a resource, the creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date | string | number;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date | string | number;

  /**
   * <p>The version of the slot type.</p>
   */
  version?: string;
}

export interface _UnmarshalledSlotTypeMetadata extends _SlotTypeMetadata {
  /**
   * <p>The date that the slot type was updated. When you create a resource, the creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date;
}
