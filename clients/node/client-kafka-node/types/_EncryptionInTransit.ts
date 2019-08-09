/**
 *
 *             <p>The settings for encrypting data in transit.</p>
 *
 */
export interface _EncryptionInTransit {
  /**
   *
   *             <p>Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.</p>
   *             <p>
   *                TLS means that client-broker communication is enabled with TLS only.</p>
   *             <p>
   *                TLS_PLAINTEXT means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.</p>
   *             <p>
   *                PLAINTEXT means that client-broker communication is enabled in plaintext only.</p>
   *             <p>The default value is TLS_PLAINTEXT.</p>
   *
   */
  ClientBroker?: "TLS" | "TLS_PLAINTEXT" | "PLAINTEXT" | string;

  /**
   *
   *             <p>When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.</p>
   *             <p>The default value is true.</p>
   *
   */
  InCluster?: boolean;
}

export type _UnmarshalledEncryptionInTransit = _EncryptionInTransit;
