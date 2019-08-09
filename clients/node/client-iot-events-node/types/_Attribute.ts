/**
 * <p>The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors. </p>
 */
export interface _Attribute {
  /**
   * <p>An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to the AWS IoT Events system (<code>BatchPutMessage</code>). Each such message contains a JSON payload, and the attribute (and its paired value) specified here are available for use in the <code>"condition"</code> expressions used by detectors. </p> <p>Syntax: <code>&lt;field-name&gt;.&lt;field-name&gt;...</code> </p>
   */
  jsonPath: string;
}

export type _UnmarshalledAttribute = _Attribute;
