/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 */
export interface _DomainJoinInfo {
  /**
   * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
   */
  DirectoryName?: string;

  /**
   * <p>The distinguished name of the organizational unit for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedName?: string;
}

export type _UnmarshalledDomainJoinInfo = _DomainJoinInfo;
