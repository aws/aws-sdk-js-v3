/**
 * <p>Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the <code>Condition</code> elements of the input policies.</p> <p>This data type is used as an input parameter to <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulateCustomPolicy</a> </code>.</p>
 */
export interface _ContextEntry {
  /**
   * <p>The full name of a condition context key, including the service prefix. For example, <code>aws:SourceIp</code> or <code>s3:VersionId</code>.</p>
   */
  ContextKeyName?: string;

  /**
   * <p>The value (or values, if the condition context key supports multiple values) to provide to the simulation when the key is referenced by a <code>Condition</code> element in an input policy.</p>
   */
  ContextKeyValues?: Array<string> | Iterable<string>;

  /**
   * <p>The data type of the value (or values) specified in the <code>ContextKeyValues</code> parameter.</p>
   */
  ContextKeyType?:
    | "string"
    | "stringList"
    | "numeric"
    | "numericList"
    | "boolean"
    | "booleanList"
    | "ip"
    | "ipList"
    | "binary"
    | "binaryList"
    | "date"
    | "dateList"
    | string;
}

export interface _UnmarshalledContextEntry extends _ContextEntry {
  /**
   * <p>The value (or values, if the condition context key supports multiple values) to provide to the simulation when the key is referenced by a <code>Condition</code> element in an input policy.</p>
   */
  ContextKeyValues?: Array<string>;
}
