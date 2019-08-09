/**
 * <p>An object representing the <code>certificate-authority-data</code> for your cluster.</p>
 */
export interface _Certificate {
  /**
   * <p>The Base64-encoded certificate data required to communicate with your cluster. Add this to the <code>certificate-authority-data</code> section of the <code>kubeconfig</code> file for your cluster.</p>
   */
  data?: string;
}

export type _UnmarshalledCertificate = _Certificate;
