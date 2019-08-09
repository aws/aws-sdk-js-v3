/**
 * <p>Describes the resource that refers to the resource that you are attempting to delete. This object is returned as part of the <code>ResourceInUseException</code> exception. </p>
 */
export interface _ResourceReference {
  /**
   * <p>The name of the resource that is using the resource that you are trying to delete.</p>
   */
  name?: string;

  /**
   * <p>The version of the resource that is using the resource that you are trying to delete.</p>
   */
  version?: string;
}

export type _UnmarshalledResourceReference = _ResourceReference;
