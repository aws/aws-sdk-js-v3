import {
  _ServerSideEncryptionRule,
  _UnmarshalledServerSideEncryptionRule
} from "./_ServerSideEncryptionRule";

/**
 * <p>Specifies the default server-side-encryption configuration.</p>
 */
export interface _ServerSideEncryptionConfiguration {
  /**
   * <p>Container for information about a particular server-side encryption configuration rule.</p>
   */
  Rules: Array<_ServerSideEncryptionRule> | Iterable<_ServerSideEncryptionRule>;
}

export interface _UnmarshalledServerSideEncryptionConfiguration
  extends _ServerSideEncryptionConfiguration {
  /**
   * <p>Container for information about a particular server-side encryption configuration rule.</p>
   */
  Rules: Array<_UnmarshalledServerSideEncryptionRule>;
}
