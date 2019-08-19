/**
 * <p>Identifier that contains details about the directory consumer account with whom the directory is being unshared.</p>
 */
export interface _UnshareTarget {
  /**
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string;

  /**
   * <p>Type of identifier to be used in the <i>Id</i> field.</p>
   */
  Type: "ACCOUNT" | string;
}

export type _UnmarshalledUnshareTarget = _UnshareTarget;
