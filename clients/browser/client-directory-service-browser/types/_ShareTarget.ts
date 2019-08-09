/**
 * <p>Identifier that contains details about the directory consumer account.</p>
 */
export interface _ShareTarget {
  /**
   * <p>Identifier of the directory consumer account.</p>
   */
  Id: string;

  /**
   * <p>Type of identifier to be used in the <code>Id</code> field.</p>
   */
  Type: "ACCOUNT" | string;
}

export type _UnmarshalledShareTarget = _ShareTarget;
