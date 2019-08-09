/**
 * <p>A metadata entry for a folder or object.</p>
 */
export interface _Item {
  /**
   * <p>The name of the item.</p>
   */
  Name?: string;

  /**
   * <p>The item type (folder or object).</p>
   */
  Type?: "OBJECT" | "FOLDER" | string;

  /**
   * <p>The ETag that represents a unique instance of the item.</p>
   */
  ETag?: string;

  /**
   * <p>The date and time that the item was last modified.</p>
   */
  LastModified?: Date | string | number;

  /**
   * <p>The content type of the item.</p>
   */
  ContentType?: string;

  /**
   * <p>The length of the item in bytes.</p>
   */
  ContentLength?: number;
}

export interface _UnmarshalledItem extends _Item {
  /**
   * <p>The date and time that the item was last modified.</p>
   */
  LastModified?: Date;
}
