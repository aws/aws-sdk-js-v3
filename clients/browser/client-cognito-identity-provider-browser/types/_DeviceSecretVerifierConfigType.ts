/**
 * <p>The device verifier against which it will be authenticated.</p>
 */
export interface _DeviceSecretVerifierConfigType {
  /**
   * <p>The password verifier.</p>
   */
  PasswordVerifier?: string;

  /**
   * <p>The salt.</p>
   */
  Salt?: string;
}

export type _UnmarshalledDeviceSecretVerifierConfigType = _DeviceSecretVerifierConfigType;
