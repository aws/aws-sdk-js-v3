import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Details for the requested item.</p>
 */
export interface _ItemResponse {
  /**
   * <p>Map of attribute data consisting of the data type and attribute value.</p>
   */
  Item?:
    | { [key: string]: _AttributeValue }
    | Iterable<[string, _AttributeValue]>;
}

export interface _UnmarshalledItemResponse extends _ItemResponse {
  /**
   * <p>Map of attribute data consisting of the data type and attribute value.</p>
   */
  Item?: { [key: string]: _UnmarshalledAttributeValue };
}
