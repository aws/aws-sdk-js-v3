import {
  _StorageRuleType,
  _UnmarshalledStorageRuleType
} from "./_StorageRuleType";

/**
 * <p>Describes the storage for a user.</p>
 */
export interface _UserStorageMetadata {
  /**
   * <p>The amount of storage used, in bytes.</p>
   */
  StorageUtilizedInBytes?: number;

  /**
   * <p>The storage for a user.</p>
   */
  StorageRule?: _StorageRuleType;
}

export interface _UnmarshalledUserStorageMetadata extends _UserStorageMetadata {
  /**
   * <p>The storage for a user.</p>
   */
  StorageRule?: _UnmarshalledStorageRuleType;
}
