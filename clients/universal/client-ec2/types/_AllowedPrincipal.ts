/**
 * <p>Describes a principal.</p>
 */
export interface _AllowedPrincipal {
  /**
   * <p>The type of principal.</p>
   */
  PrincipalType?:
    | "All"
    | "Service"
    | "OrganizationUnit"
    | "Account"
    | "User"
    | "Role"
    | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   */
  Principal?: string;
}

export type _UnmarshalledAllowedPrincipal = _AllowedPrincipal;
