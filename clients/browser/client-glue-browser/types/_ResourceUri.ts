/**
 * <p>URIs for function resources.</p>
 */
export interface _ResourceUri {
  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: "JAR" | "FILE" | "ARCHIVE" | string;

  /**
   * <p>The URI for accessing the resource.</p>
   */
  Uri?: string;
}

export type _UnmarshalledResourceUri = _ResourceUri;
