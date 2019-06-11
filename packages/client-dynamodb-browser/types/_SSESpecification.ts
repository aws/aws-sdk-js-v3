/**
 * <p>Represents the settings used to enable server-side encryption.</p>
 */
export interface _SSESpecification {
  /**
   * <p>Indicates whether server-side encryption is done using an AWS managed CMK or an AWS owned CMK. If enabled (true), server-side encryption type is set to <code>KMS</code> and an AWS managed CMK is used (AWS KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned CMK.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Server-side encryption type. The only supported value is:</p> <ul> <li> <p> <code>KMS</code> - Server-side encryption which uses AWS Key Management Service. Key is stored in your account and is managed by AWS KMS (KMS charges apply).</p> </li> </ul>
   */
  SSEType?: "AES256" | "KMS" | string;

  /**
   * <p>The KMS Customer Master Key (CMK) which should be used for the KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB Customer Master Key alias/aws/dynamodb.</p>
   */
  KMSMasterKeyId?: string;
}

export type _UnmarshalledSSESpecification = _SSESpecification;
