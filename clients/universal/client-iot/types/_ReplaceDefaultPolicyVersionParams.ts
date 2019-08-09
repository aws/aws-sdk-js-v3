/**
 * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
 */
export interface _ReplaceDefaultPolicyVersionParams {
  /**
   * <p>The name of the template to be applied. The only supported value is <code>BLANK_POLICY</code>.</p>
   */
  templateName: "BLANK_POLICY" | string;
}

export type _UnmarshalledReplaceDefaultPolicyVersionParams = _ReplaceDefaultPolicyVersionParams;
