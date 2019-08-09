/**
 * <p>An object that filters a system search.</p>
 */
export interface _SystemTemplateFilter {
  /**
   * <p>The name of the system search filter field.</p>
   */
  name: "FLOW_TEMPLATE_ID" | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSystemTemplateFilter
  extends _SystemTemplateFilter {
  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: Array<string>;
}
