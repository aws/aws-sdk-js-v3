import {
  _EncryptionAtRest,
  _UnmarshalledEncryptionAtRest
} from "./_EncryptionAtRest";
import {
  _EncryptionInTransit,
  _UnmarshalledEncryptionInTransit
} from "./_EncryptionInTransit";

/**
 *
 *             <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
 *
 */
export interface _EncryptionInfo {
  /**
   *
   *             <p>The data-volume encryption details.</p>
   *
   */
  EncryptionAtRest?: _EncryptionAtRest;

  /**
   *
   *             <p>The details for encryption in transit.</p>
   *
   */
  EncryptionInTransit?: _EncryptionInTransit;
}

export interface _UnmarshalledEncryptionInfo extends _EncryptionInfo {
  /**
   *
   *             <p>The data-volume encryption details.</p>
   *
   */
  EncryptionAtRest?: _UnmarshalledEncryptionAtRest;

  /**
   *
   *             <p>The details for encryption in transit.</p>
   *
   */
  EncryptionInTransit?: _UnmarshalledEncryptionInTransit;
}
