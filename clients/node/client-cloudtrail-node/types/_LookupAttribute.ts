/**
 * <p>Specifies an attribute and value that filter the events returned.</p>
 */
export interface _LookupAttribute {
  /**
   * <p>Specifies an attribute on which to filter the events returned.</p>
   */
  AttributeKey:
    | "EventId"
    | "EventName"
    | "ReadOnly"
    | "Username"
    | "ResourceType"
    | "ResourceName"
    | "EventSource"
    | "AccessKeyId"
    | string;

  /**
   * <p>Specifies a value for the specified AttributeKey.</p>
   */
  AttributeValue: string;
}

export type _UnmarshalledLookupAttribute = _LookupAttribute;
