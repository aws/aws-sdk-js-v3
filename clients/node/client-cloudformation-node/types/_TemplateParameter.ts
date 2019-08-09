/**
 * <p>The TemplateParameter data type.</p>
 */
export interface _TemplateParameter {
  /**
   * <p>The name associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The default value associated with the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * <p>Flag indicating whether the parameter should be displayed as plain text in logs and UIs.</p>
   */
  NoEcho?: boolean;

  /**
   * <p>User defined description associated with the parameter.</p>
   */
  Description?: string;
}

export type _UnmarshalledTemplateParameter = _TemplateParameter;
