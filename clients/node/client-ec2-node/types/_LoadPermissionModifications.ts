import {
  _LoadPermissionRequest,
  _UnmarshalledLoadPermissionRequest
} from "./_LoadPermissionRequest";

/**
 * <p>Describes modifications to the load permissions of an Amazon FPGA image (AFI).</p>
 */
export interface _LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   */
  Add?: Array<_LoadPermissionRequest> | Iterable<_LoadPermissionRequest>;

  /**
   * <p>The load permissions to remove.</p>
   */
  Remove?: Array<_LoadPermissionRequest> | Iterable<_LoadPermissionRequest>;
}

export interface _UnmarshalledLoadPermissionModifications
  extends _LoadPermissionModifications {
  /**
   * <p>The load permissions to add.</p>
   */
  Add?: Array<_UnmarshalledLoadPermissionRequest>;

  /**
   * <p>The load permissions to remove.</p>
   */
  Remove?: Array<_UnmarshalledLoadPermissionRequest>;
}
