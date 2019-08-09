/**
 * <p>An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.</p>
 */
export interface _SystemInstanceFilter {
  /**
   * <p>The name of the search filter field.</p>
   */
  name?: "SYSTEM_TEMPLATE_ID" | "STATUS" | "GREENGRASS_GROUP_NAME" | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search. </p>
   */
  value?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSystemInstanceFilter
  extends _SystemInstanceFilter {
  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search. </p>
   */
  value?: Array<string>;
}
