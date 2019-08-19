/**
 * <p>The representation of an organization.</p>
 */
export interface _OrganizationSummary {
  /**
   * <p>The identifier associated with the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The alias associated with the organization.</p>
   */
  Alias?: string;

  /**
   * <p>The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The state associated with the organization.</p>
   */
  State?: string;
}

export type _UnmarshalledOrganizationSummary = _OrganizationSummary;
