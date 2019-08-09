/**
 * <p>Describes a type.</p>
 */
export interface _Type {
  /**
   * <p>The type name.</p>
   */
  name?: string;

  /**
   * <p>The type description.</p>
   */
  description?: string;

  /**
   * <p>The type ARN.</p>
   */
  arn?: string;

  /**
   * <p>The type definition.</p>
   */
  definition?: string;

  /**
   * <p>The type format: SDL or JSON.</p>
   */
  format?: "SDL" | "JSON" | string;
}

export type _UnmarshalledType = _Type;
