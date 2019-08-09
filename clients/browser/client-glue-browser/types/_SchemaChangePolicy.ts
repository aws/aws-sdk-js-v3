/**
 * <p>A policy that specifies update and deletion behaviors for the crawler.</p>
 */
export interface _SchemaChangePolicy {
  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   */
  UpdateBehavior?: "LOG" | "UPDATE_IN_DATABASE" | string;

  /**
   * <p>The deletion behavior when the crawler finds a deleted object.</p>
   */
  DeleteBehavior?:
    | "LOG"
    | "DELETE_FROM_DATABASE"
    | "DEPRECATE_IN_DATABASE"
    | string;
}

export type _UnmarshalledSchemaChangePolicy = _SchemaChangePolicy;
