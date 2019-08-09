/**
 * <p>The reference to a data set entry.</p>
 */
export interface _DatasetEntry {
  /**
   * <p>The name of the data set item.</p>
   */
  entryName?: string;

  /**
   * <p>The pre-signed URI of the data set item.</p>
   */
  dataURI?: string;
}

export type _UnmarshalledDatasetEntry = _DatasetEntry;
