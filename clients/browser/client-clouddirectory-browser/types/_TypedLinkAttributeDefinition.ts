import {
  _TypedAttributeValue,
  _UnmarshalledTypedAttributeValue
} from "./_TypedAttributeValue";
import { _Rule, _UnmarshalledRule } from "./_Rule";

/**
 * <p>A typed link attribute definition.</p>
 */
export interface _TypedLinkAttributeDefinition {
  /**
   * <p>The unique name of the typed link attribute.</p>
   */
  Name: string;

  /**
   * <p>The type of the attribute.</p>
   */
  Type:
    | "STRING"
    | "BINARY"
    | "BOOLEAN"
    | "NUMBER"
    | "DATETIME"
    | "VARIANT"
    | string;

  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: _TypedAttributeValue;

  /**
   * <p>Whether the attribute is mutable or not.</p>
   */
  IsImmutable?: boolean;

  /**
   * <p>Validation rules that are attached to the attribute definition.</p>
   */
  Rules?: { [key: string]: _Rule } | Iterable<[string, _Rule]>;

  /**
   * <p>The required behavior of the <code>TypedLinkAttributeDefinition</code>.</p>
   */
  RequiredBehavior: "REQUIRED_ALWAYS" | "NOT_REQUIRED" | string;
}

export interface _UnmarshalledTypedLinkAttributeDefinition
  extends _TypedLinkAttributeDefinition {
  /**
   * <p>The default value of the attribute (if configured).</p>
   */
  DefaultValue?: _UnmarshalledTypedAttributeValue;

  /**
   * <p>Validation rules that are attached to the attribute definition.</p>
   */
  Rules?: { [key: string]: _UnmarshalledRule };
}
