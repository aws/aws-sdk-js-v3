import {
  _EncryptionAtRestOptions,
  _UnmarshalledEncryptionAtRestOptions
} from "./_EncryptionAtRestOptions";
import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
 */
export interface _EncryptionAtRestOptionsStatus {
  /**
   * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Options: _EncryptionAtRestOptions;

  /**
   * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledEncryptionAtRestOptionsStatus
  extends _EncryptionAtRestOptionsStatus {
  /**
   * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Options: _UnmarshalledEncryptionAtRestOptions;

  /**
   * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
