/**
 * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
 */
export interface _UpdateDeviceCertificateParams {
  /**
   * <p>The action that you want to apply to the device cerrtificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: "DEACTIVATE" | string;
}

export type _UnmarshalledUpdateDeviceCertificateParams = _UpdateDeviceCertificateParams;
