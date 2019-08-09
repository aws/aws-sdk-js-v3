/**
 * A policy used by the function to access a resource.
 */
export interface _ResourceAccessPolicy {
  /**
   * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
   */
  Permission?: "ro" | "rw" | string;

  /**
   * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
   */
  ResourceId: string;
}

export type _UnmarshalledResourceAccessPolicy = _ResourceAccessPolicy;
