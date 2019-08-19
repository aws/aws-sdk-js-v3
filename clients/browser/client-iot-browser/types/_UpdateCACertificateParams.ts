/**
 * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
 */
export interface _UpdateCACertificateParams {
  /**
   * <p>The action that you want to apply to the CA cerrtificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: "DEACTIVATE" | string;
}

export type _UnmarshalledUpdateCACertificateParams = _UpdateCACertificateParams;
