/**
 * <p>The Output data type.</p>
 */
export interface _Output {
  /**
   * <p>The key associated with the output.</p>
   */
  OutputKey?: string;

  /**
   * <p>The value associated with the output.</p>
   */
  OutputValue?: string;

  /**
   * <p>User defined description associated with the output.</p>
   */
  Description?: string;

  /**
   * <p>The name of the export associated with the output.</p>
   */
  ExportName?: string;
}

export type _UnmarshalledOutput = _Output;
