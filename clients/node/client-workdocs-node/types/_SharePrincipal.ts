/**
 * <p>Describes the recipient type and ID, if available.</p>
 */
export interface _SharePrincipal {
  /**
   * <p>The ID of the recipient.</p>
   */
  Id: string;

  /**
   * <p>The type of the recipient.</p>
   */
  Type: "USER" | "GROUP" | "INVITE" | "ANONYMOUS" | "ORGANIZATION" | string;

  /**
   * <p>The role of the recipient.</p>
   */
  Role: "VIEWER" | "CONTRIBUTOR" | "OWNER" | "COOWNER" | string;
}

export type _UnmarshalledSharePrincipal = _SharePrincipal;
