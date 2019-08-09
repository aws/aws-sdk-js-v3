/**
 * <p>Detailed information about the self-service action.</p>
 */
export interface _ServiceActionSummary {
  /**
   * <p>The self-service action identifier.</p>
   */
  Id?: string;

  /**
   * <p>The self-service action name.</p>
   */
  Name?: string;

  /**
   * <p>The self-service action description.</p>
   */
  Description?: string;

  /**
   * <p>The self-service action definition type. For example, <code>SSM_AUTOMATION</code>.</p>
   */
  DefinitionType?: "SSM_AUTOMATION" | string;
}

export type _UnmarshalledServiceActionSummary = _ServiceActionSummary;
