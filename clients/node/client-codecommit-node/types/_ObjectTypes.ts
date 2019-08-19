/**
 * <p>Information about the type of an object in a merge operation.</p>
 */
export interface _ObjectTypes {
  /**
   * <p>The type of the object in the source branch.</p>
   */
  source?: "FILE" | "DIRECTORY" | "GIT_LINK" | "SYMBOLIC_LINK" | string;

  /**
   * <p>The type of the object in the destination branch.</p>
   */
  destination?: "FILE" | "DIRECTORY" | "GIT_LINK" | "SYMBOLIC_LINK" | string;

  /**
   * <p>The type of the object in the base commit of the merge.</p>
   */
  base?: "FILE" | "DIRECTORY" | "GIT_LINK" | "SYMBOLIC_LINK" | string;
}

export type _UnmarshalledObjectTypes = _ObjectTypes;
