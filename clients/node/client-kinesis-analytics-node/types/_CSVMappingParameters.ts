/**
 * <p>Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>
 */
export interface _CSVMappingParameters {
  /**
   * <p>Row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical row delimiter.</p>
   */
  RecordRowDelimiter: string;

  /**
   * <p>Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.</p>
   */
  RecordColumnDelimiter: string;
}

export type _UnmarshalledCSVMappingParameters = _CSVMappingParameters;
