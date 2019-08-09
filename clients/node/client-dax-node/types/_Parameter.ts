import {
  _NodeTypeSpecificValue,
  _UnmarshalledNodeTypeSpecificValue
} from "./_NodeTypeSpecificValue";

/**
 * <p>Describes an individual setting that controls some aspect of DAX behavior.</p>
 */
export interface _Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>Determines whether the parameter can be applied to any nodes, or only nodes of a particular type.</p>
   */
  ParameterType?: "DEFAULT" | "NODE_TYPE_SPECIFIC" | string;

  /**
   * <p>The value for the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>A list of node types, and specific parameter values for each node.</p>
   */
  NodeTypeSpecificValues?:
    | Array<_NodeTypeSpecificValue>
    | Iterable<_NodeTypeSpecificValue>;

  /**
   * <p>A description of the parameter</p>
   */
  Description?: string;

  /**
   * <p>How the parameter is defined. For example, <code>system</code> denotes a system-defined parameter.</p>
   */
  Source?: string;

  /**
   * <p>The data type of the parameter. For example, <code>integer</code>:</p>
   */
  DataType?: string;

  /**
   * <p>A range of values within which the parameter can be set.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Whether the customer is allowed to modify the parameter.</p>
   */
  IsModifiable?: "TRUE" | "FALSE" | "CONDITIONAL" | string;

  /**
   * <p>The conditions under which changes to this parameter can be applied. For example, <code>requires-reboot</code> indicates that a new value for this parameter will only take effect if a node is rebooted.</p>
   */
  ChangeType?: "IMMEDIATE" | "REQUIRES_REBOOT" | string;
}

export interface _UnmarshalledParameter extends _Parameter {
  /**
   * <p>A list of node types, and specific parameter values for each node.</p>
   */
  NodeTypeSpecificValues?: Array<_UnmarshalledNodeTypeSpecificValue>;
}
