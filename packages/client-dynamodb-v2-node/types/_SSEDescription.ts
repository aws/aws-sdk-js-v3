/**
 * <p>The description of the server-side encryption status on the specified table.</p>
 */
export interface _SSEDescription {
    /**
     * <p>The current state of server-side encryption:</p> <ul> <li> <p> <code>ENABLING</code> - Server-side encryption is being enabled.</p> </li> <li> <p> <code>ENABLED</code> - Server-side encryption is enabled.</p> </li> <li> <p> <code>DISABLING</code> - Server-side encryption is being disabled.</p> </li> <li> <p> <code>DISABLED</code> - Server-side encryption is disabled.</p> </li> <li> <p> <code>UPDATING</code> - Server-side encryption is being updated.</p> </li> </ul>
     */
    Status?: 'ENABLING'|'ENABLED'|'DISABLING'|'DISABLED'|'UPDATING'|string;

    /**
     * <p>Server-side encryption type:</p> <ul> <li> <p> <code>AES256</code> - Server-side encryption which uses the AES256 algorithm.</p> </li> <li> <p> <code>KMS</code> - Server-side encryption which uses AWS Key Management Service.</p> </li> </ul>
     */
    SSEType?: 'AES256'|'KMS'|string;

    /**
     * <p>The KMS master key ARN used for the KMS encryption.</p>
     */
    KMSMasterKeyArn?: string;
}

export type _UnmarshalledSSEDescription = _SSEDescription;