import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p>The definition of the input.</p>
 */
export interface _InputDefinition {
  /**
   * <p>The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the <code>"condition"</code> expressions used by detectors that monitor this input. </p>
   */
  attributes: Array<_Attribute> | Iterable<_Attribute>;
}

export interface _UnmarshalledInputDefinition extends _InputDefinition {
  /**
   * <p>The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the <code>"condition"</code> expressions used by detectors that monitor this input. </p>
   */
  attributes: Array<_UnmarshalledAttribute>;
}
