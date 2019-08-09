/**
 * <p>Information about a Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>
 */
export interface _Loa {
  /**
   * <p>The binary contents of the LOA-CFA document.</p>
   */
  loaContent?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The standard media type for the LOA-CFA document. The only supported value is application/pdf.</p>
   */
  loaContentType?: "application/pdf" | string;
}

export interface _UnmarshalledLoa extends _Loa {
  /**
   * <p>The binary contents of the LOA-CFA document.</p>
   */
  loaContent?: Uint8Array;
}
