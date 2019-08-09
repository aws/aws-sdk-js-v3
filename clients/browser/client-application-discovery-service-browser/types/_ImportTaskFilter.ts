/**
 * <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
 */
export interface _ImportTaskFilter {
  /**
   * <p>The name, status, or import task ID for a specific import task.</p>
   */
  name?: "IMPORT_TASK_ID" | "STATUS" | "NAME" | string;

  /**
   * <p>An array of strings that you can provide to match against a specific name, status, or import task ID to filter the results for your import task queries.</p>
   */
  values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledImportTaskFilter extends _ImportTaskFilter {
  /**
   * <p>An array of strings that you can provide to match against a specific name, status, or import task ID to filter the results for your import task queries.</p>
   */
  values?: Array<string>;
}
