/**
 * <p>Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.</p>
 */
export interface _InputTransformer {
  /**
   * <p>Map of JSON paths to be extracted from the event. You can then insert these in the template in <code>InputTemplate</code> to produce the output to be sent to the target.</p> <p> <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation, not bracket notation.</p> <p>The keys can't start with <code>"AWS"</code>.</p>
   */
  InputPathsMap?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Input template where you specify placeholders that will be filled with the values of the keys from <code>InputPathsMap</code> to customize the data sent to the target. Enclose each <code>InputPathsMaps</code> value in brackets: &lt;<i>value</i>&gt;. The InputTemplate must be valid JSON.</p> <p>If <code>InputTemplate</code> is a JSON object (surrounded by curly braces), the following restrictions apply:</p> <ul> <li> <p>The placeholder can't be used as an object key</p> </li> <li> <p>Object values can't include quote marks</p> </li> </ul> <p>The following example shows the syntax for using <code>InputPathsMap</code> and <code>InputTemplate</code>.</p> <p> <code> "InputTransformer":</code> </p> <p> <code>{</code> </p> <p> <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code> </p> <p> <code>"InputTemplate": "&lt;instance&gt; is in state &lt;status&gt;"</code> </p> <p> <code>}</code> </p> <p>To have the <code>InputTemplate</code> include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:</p> <p> <code> "InputTransformer":</code> </p> <p> <code>{</code> </p> <p> <code>"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},</code> </p> <p> <code>"InputTemplate": "&lt;instance&gt; is in state \"&lt;status&gt;\""</code> </p> <p> <code>}</code> </p>
   */
  InputTemplate: string;
}

export interface _UnmarshalledInputTransformer extends _InputTransformer {
  /**
   * <p>Map of JSON paths to be extracted from the event. You can then insert these in the template in <code>InputTemplate</code> to produce the output to be sent to the target.</p> <p> <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation, not bracket notation.</p> <p>The keys can't start with <code>"AWS"</code>.</p>
   */
  InputPathsMap?: { [key: string]: string };
}
