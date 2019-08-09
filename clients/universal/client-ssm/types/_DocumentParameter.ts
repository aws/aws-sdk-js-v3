/**
 * <p>Parameters specified in a System Manager document that run on the server when the command is run. </p>
 */
export interface _DocumentParameter {
  /**
   * <p>The name of the parameter.</p>
   */
  Name?: string;

  /**
   * <p>The type of parameter. The type can be either String or StringList.</p>
   */
  Type?: "String" | "StringList" | string;

  /**
   * <p>A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.</p>
   */
  Description?: string;

  /**
   * <p>If specified, the default values for the parameters. Parameters without a default value are required. Parameters with a default value are optional.</p>
   */
  DefaultValue?: string;
}

export type _UnmarshalledDocumentParameter = _DocumentParameter;
