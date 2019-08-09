/**
 * <p>Represents an API mapping.</p>
 */
export interface _ApiMapping {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId?: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The API stage.</p>
   */
  Stage: string;
}

export type _UnmarshalledApiMapping = _ApiMapping;
