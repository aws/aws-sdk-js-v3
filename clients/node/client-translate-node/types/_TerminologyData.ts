/**
 * <p>The data associated with the custom terminology.</p>
 */
export interface _TerminologyData {
  /**
   * <p>The file containing the custom terminology data.</p>
   */
  File: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The data format of the custom terminology. Either CSV or TMX.</p>
   */
  Format: "CSV" | "TMX" | string;
}

export interface _UnmarshalledTerminologyData extends _TerminologyData {
  /**
   * <p>The file containing the custom terminology data.</p>
   */
  File: Uint8Array;
}
