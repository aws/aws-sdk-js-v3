/**
 * <p>Represents the settings used to enable server-side encryption.</p>
 */
export interface _SSESpecification {
  /**
   * <p>Indicates whether server-side encryption is enabled (true) or disabled (false) on the table.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Server-side encryption type:</p> <ul> <li> <p> <code>AES256</code> - Server-side encryption which uses the AES256 algorithm.</p> </li> <li> <p> <code>KMS</code> - Server-side encryption which uses AWS Key Management Service. (default)</p> </li> </ul>
   */
  SSEType?: "AES256" | "KMS" | string;

  /**
   * <p>The KMS Master Key (CMK) which should be used for the KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB KMS Master Key alias/aws/dynamodb.</p>
   */
  KMSMasterKeyId?: string;
}

export type _UnmarshalledSSESpecification = _SSESpecification;
