/**
 * <p>An object that filters a workflow search.</p>
 */
export interface _FlowTemplateFilter {
  /**
   * <p>The name of the search filter field.</p>
   */
  name: "DEVICE_MODEL_ID" | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFlowTemplateFilter extends _FlowTemplateFilter {
  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: Array<string>;
}
