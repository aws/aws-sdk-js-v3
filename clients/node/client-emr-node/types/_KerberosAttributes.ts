/**
 * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>EMR Management Guide</i>.</p>
 */
export interface _KerberosAttributes {
  /**
   * <p>The name of the Kerberos realm to which all nodes in a cluster belong. For example, <code>EC2.INTERNAL</code>. </p>
   */
  Realm: string;

  /**
   * <p>The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.</p>
   */
  KdcAdminPassword: string;

  /**
   * <p>Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.</p>
   */
  CrossRealmTrustPrincipalPassword?: string;

  /**
   * <p>Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.</p>
   */
  ADDomainJoinUser?: string;

  /**
   * <p>The Active Directory password for <code>ADDomainJoinUser</code>.</p>
   */
  ADDomainJoinPassword?: string;
}

export type _UnmarshalledKerberosAttributes = _KerberosAttributes;
