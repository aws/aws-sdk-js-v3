/**
 * <p>Describes the storage for a user.</p>
 */
export interface _StorageRuleType {
  /**
   * <p>The amount of storage allocated, in bytes.</p>
   */
  StorageAllocatedInBytes?: number;

  /**
   * <p>The type of storage.</p>
   */
  StorageType?: "UNLIMITED" | "QUOTA" | string;
}

export type _UnmarshalledStorageRuleType = _StorageRuleType;
