/**
 * <p>Contains additional data that is needed to process a handshake.</p>
 */
export interface _HandshakeResource {
  /**
   * <p>The information that is passed to the other party in the handshake. The format of the value string must match the requirements of the specified type.</p>
   */
  Value?: string;

  /**
   * <p>The type of information being passed, specifying how the value is to be interpreted by the other party:</p> <ul> <li> <p> <code>ACCOUNT</code> - Specifies an AWS account ID number.</p> </li> <li> <p> <code>ORGANIZATION</code> - Specifies an organization ID number.</p> </li> <li> <p> <code>EMAIL</code> - Specifies the email address that is associated with the account that receives the handshake. </p> </li> <li> <p> <code>OWNER_EMAIL</code> - Specifies the email address associated with the master account. Included as information about an organization. </p> </li> <li> <p> <code>OWNER_NAME</code> - Specifies the name associated with the master account. Included as information about an organization. </p> </li> <li> <p> <code>NOTES</code> - Additional text provided by the handshake initiator and intended for the recipient to read.</p> </li> </ul>
   */
  Type?:
    | "ACCOUNT"
    | "ORGANIZATION"
    | "ORGANIZATION_FEATURE_SET"
    | "EMAIL"
    | "MASTER_EMAIL"
    | "MASTER_NAME"
    | "NOTES"
    | "PARENT_HANDSHAKE"
    | string;

  /**
   * <p>When needed, contains an additional array of <code>HandshakeResource</code> objects.</p>
   */
  Resources?: Array<_HandshakeResource> | Iterable<_HandshakeResource>;
}

export interface _UnmarshalledHandshakeResource extends _HandshakeResource {
  /**
   * <p>When needed, contains an additional array of <code>HandshakeResource</code> objects.</p>
   */
  Resources?: Array<_UnmarshalledHandshakeResource>;
}
