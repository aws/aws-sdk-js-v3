/**
 * <p>Describes a WorkSpace modification.</p>
 */
export interface _ModificationState {
  /**
   * <p>The resource.</p>
   */
  Resource?: "ROOT_VOLUME" | "USER_VOLUME" | "COMPUTE_TYPE" | string;

  /**
   * <p>The modification state.</p>
   */
  State?: "UPDATE_INITIATED" | "UPDATE_IN_PROGRESS" | string;
}

export type _UnmarshalledModificationState = _ModificationState;
