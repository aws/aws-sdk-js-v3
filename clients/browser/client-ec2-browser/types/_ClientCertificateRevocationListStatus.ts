/**
 * <p>Describes the state of a client certificate revocation list.</p>
 */
export interface _ClientCertificateRevocationListStatus {
  /**
   * <p>The state of the client certificate revocation list.</p>
   */
  Code?: "pending" | "active" | string;

  /**
   * <p>A message about the status of the client certificate revocation list, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledClientCertificateRevocationListStatus = _ClientCertificateRevocationListStatus;
