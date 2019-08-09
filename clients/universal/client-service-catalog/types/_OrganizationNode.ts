/**
 * <p>Information about the organization node.</p>
 */
export interface _OrganizationNode {
  /**
   * <p>The organization node type.</p>
   */
  Type?: "ORGANIZATION" | "ORGANIZATIONAL_UNIT" | "ACCOUNT" | string;

  /**
   * <p>The identifier of the organization node.</p>
   */
  Value?: string;
}

export type _UnmarshalledOrganizationNode = _OrganizationNode;
