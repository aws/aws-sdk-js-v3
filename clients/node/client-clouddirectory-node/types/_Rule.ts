/**
 * <p>Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.</p>
 */
export interface _Rule {
  /**
   * <p>The type of attribute validation rule.</p>
   */
  Type?:
    | "BINARY_LENGTH"
    | "NUMBER_COMPARISON"
    | "STRING_FROM_SET"
    | "STRING_LENGTH"
    | string;

  /**
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledRule extends _Rule {
  /**
   * <p>The minimum and maximum parameters that are associated with the rule.</p>
   */
  Parameters?: { [key: string]: string };
}
