import {
  _AccountAttributeValue,
  _UnmarshalledAccountAttributeValue
} from "./_AccountAttributeValue";

/**
 * <p>Describes an account attribute.</p>
 */
export interface _AccountAttribute {
  /**
   * <p>The name of the account attribute.</p>
   */
  AttributeName?: string;

  /**
   * <p>The values for the account attribute.</p>
   */
  AttributeValues?:
    | Array<_AccountAttributeValue>
    | Iterable<_AccountAttributeValue>;
}

export interface _UnmarshalledAccountAttribute extends _AccountAttribute {
  /**
   * <p>The values for the account attribute.</p>
   */
  AttributeValues?: Array<_UnmarshalledAccountAttributeValue>;
}
