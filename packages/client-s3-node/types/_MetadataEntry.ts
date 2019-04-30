/**
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface _MetadataEntry {
  /**
   * _MetadataKey shape
   */
  Name?: string;

  /**
   * _MetadataValue shape
   */
  Value?: string;
}

export type _UnmarshalledMetadataEntry = _MetadataEntry;
