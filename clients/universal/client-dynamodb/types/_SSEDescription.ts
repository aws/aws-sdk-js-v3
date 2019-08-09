/**
 * <p>The description of the server-side encryption status on the specified table.</p>
 */
export interface _SSEDescription {
  /**
   * <p>Represents the current state of server-side encryption. The only supported values are:</p> <ul> <li> <p> <code>ENABLED</code> - Server-side encryption is enabled.</p> </li> <li> <p> <code>UPDATING</code> - Server-side encryption is being updated.</p> </li> </ul>
   */
  Status?:
    | "ENABLING"
    | "ENABLED"
    | "DISABLING"
    | "DISABLED"
    | "UPDATING"
    | string;

  /**
   * <p>Server-side encryption type. The only supported value is:</p> <ul> <li> <p> <code>KMS</code> - Server-side encryption which uses AWS Key Management Service. Key is stored in your account and is managed by AWS KMS (KMS charges apply).</p> </li> </ul>
   */
  SSEType?: "AES256" | "KMS" | string;

  /**
   * <p>The KMS customer master key (CMK) ARN used for the KMS encryption.</p>
   */
  KMSMasterKeyArn?: string;
}

export type _UnmarshalledSSEDescription = _SSEDescription;
