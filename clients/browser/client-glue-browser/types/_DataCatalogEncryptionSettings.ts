import {
  _EncryptionAtRest,
  _UnmarshalledEncryptionAtRest
} from "./_EncryptionAtRest";
import {
  _ConnectionPasswordEncryption,
  _UnmarshalledConnectionPasswordEncryption
} from "./_ConnectionPasswordEncryption";

/**
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 */
export interface _DataCatalogEncryptionSettings {
  /**
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   */
  EncryptionAtRest?: _EncryptionAtRest;

  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p>
   */
  ConnectionPasswordEncryption?: _ConnectionPasswordEncryption;
}

export interface _UnmarshalledDataCatalogEncryptionSettings
  extends _DataCatalogEncryptionSettings {
  /**
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   */
  EncryptionAtRest?: _UnmarshalledEncryptionAtRest;

  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog encryption or only password encryption.</p>
   */
  ConnectionPasswordEncryption?: _UnmarshalledConnectionPasswordEncryption;
}
