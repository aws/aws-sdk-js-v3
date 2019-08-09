import {
  _ServerSideEncryptionByDefault,
  _UnmarshalledServerSideEncryptionByDefault
} from "./_ServerSideEncryptionByDefault";

/**
 * <p>Specifies the default server-side encryption configuration.</p>
 */
export interface _ServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: _ServerSideEncryptionByDefault;
}

export interface _UnmarshalledServerSideEncryptionRule
  extends _ServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: _UnmarshalledServerSideEncryptionByDefault;
}
