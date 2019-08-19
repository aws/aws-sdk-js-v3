/**
 * <p>Describes the signature for a file.</p>
 */
export interface _CodeSigningSignature {
  /**
   * <p>A base64 encoded binary representation of the code signing signature.</p>
   */
  inlineDocument?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledCodeSigningSignature
  extends _CodeSigningSignature {
  /**
   * <p>A base64 encoded binary representation of the code signing signature.</p>
   */
  inlineDocument?: Uint8Array;
}
