/**
 * <p>Contains information about each custom key store in the custom key store list.</p>
 */
export interface _CustomKeyStoresListEntry {
  /**
   * <p>A unique identifier for the custom key store.</p>
   */
  CustomKeyStoreId?: string;

  /**
   * <p>The user-specified friendly name for the custom key store.</p>
   */
  CustomKeyStoreName?: string;

  /**
   * <p>A unique identifier for the AWS CloudHSM cluster that is associated with the custom key store.</p>
   */
  CloudHsmClusterId?: string;

  /**
   * <p>The trust anchor certificate of the associated AWS CloudHSM cluster. When you <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/initialize-cluster.html#sign-csr">initialize the cluster</a>, you create this certificate and save it in the <code>customerCA.crt</code> file.</p>
   */
  TrustAnchorCertificate?: string;

  /**
   * <p>Indicates whether the custom key store is connected to its AWS CloudHSM cluster.</p> <p>You can create and use CMKs in your custom key stores only when its connection state is <code>CONNECTED</code>.</p> <p>The value is <code>DISCONNECTED</code> if the key store has never been connected or you use the <a>DisconnectCustomKeyStore</a> operation to disconnect it. If the value is <code>CONNECTED</code> but you are having trouble using the custom key store, make sure that its associated AWS CloudHSM cluster is active and contains at least one active HSM.</p> <p>A value of <code>FAILED</code> indicates that an attempt to connect was unsuccessful. For help resolving a connection failure, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a Custom Key Store</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  ConnectionState?:
    | "CONNECTED"
    | "CONNECTING"
    | "FAILED"
    | "DISCONNECTED"
    | "DISCONNECTING"
    | string;

  /**
   * <p>Describes the connection error. Valid values are:</p> <ul> <li> <p> <code>CLUSTER_NOT_FOUND</code> - AWS KMS cannot find the AWS CloudHSM cluster with the specified cluster ID.</p> </li> <li> <p> <code>INSUFFICIENT_CLOUDHSM_HSMS</code> - The associated AWS CloudHSM cluster does not contain any active HSMs. To connect a custom key store to its AWS CloudHSM cluster, the cluster must contain at least one active HSM.</p> </li> <li> <p> <code>INTERNAL_ERROR</code> - AWS KMS could not complete the request due to an internal error. Retry the request. For <code>ConnectCustomKeyStore</code> requests, disconnect the custom key store before trying to connect again.</p> </li> <li> <p> <code>INVALID_CREDENTIALS</code> - AWS KMS does not have the correct password for the <code>kmsuser</code> crypto user in the AWS CloudHSM cluster.</p> </li> <li> <p> <code>NETWORK_ERRORS</code> - Network errors are preventing AWS KMS from connecting to the custom key store.</p> </li> <li> <p> <code>USER_LOCKED_OUT</code> - The <code>kmsuser</code> CU account is locked out of the associated AWS CloudHSM cluster due to too many failed password attempts. Before you can connect your custom key store to its AWS CloudHSM cluster, you must change the <code>kmsuser</code> account password and update the password value for the custom key store.</p> </li> </ul> <p>For help with connection failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting Custom Key Stores</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  ConnectionErrorCode?:
    | "INVALID_CREDENTIALS"
    | "CLUSTER_NOT_FOUND"
    | "NETWORK_ERRORS"
    | "INTERNAL_ERROR"
    | "INSUFFICIENT_CLOUDHSM_HSMS"
    | "USER_LOCKED_OUT"
    | string;

  /**
   * <p>The date and time when the custom key store was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledCustomKeyStoresListEntry
  extends _CustomKeyStoresListEntry {
  /**
   * <p>The date and time when the custom key store was created.</p>
   */
  CreationDate?: Date;
}
