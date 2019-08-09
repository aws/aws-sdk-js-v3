import {
  _PolicyGrantingServiceAccess,
  _UnmarshalledPolicyGrantingServiceAccess
} from "./_PolicyGrantingServiceAccess";

/**
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
 */
export interface _ListPoliciesGrantingServiceAccessEntry {
  /**
   * <p>The namespace of the service that was accessed.</p> <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions, Resources, and Condition Keys for AWS Services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace?: string;

  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the policy.</p>
   */
  Policies?:
    | Array<_PolicyGrantingServiceAccess>
    | Iterable<_PolicyGrantingServiceAccess>;
}

export interface _UnmarshalledListPoliciesGrantingServiceAccessEntry
  extends _ListPoliciesGrantingServiceAccessEntry {
  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the policy.</p>
   */
  Policies?: Array<_UnmarshalledPolicyGrantingServiceAccess>;
}
