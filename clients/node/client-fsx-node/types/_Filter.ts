/**
 * <p>A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.</p>
 */
export interface _Filter {
  /**
   * <p>The name for this filter.</p>
   */
  Name?: "file-system-id" | "backup-type" | string;

  /**
   * <p>The values of the filter. These are all the values for any of the applied filters.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFilter extends _Filter {
  /**
   * <p>The values of the filter. These are all the values for any of the applied filters.</p>
   */
  Values?: Array<string>;
}
