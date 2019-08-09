/**
 * <p>An object that contains details about when a principal in the reported AWS Organizations entity last attempted to access an AWS service. A principal can be an IAM user, an IAM role, or the AWS account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
 */
export interface _AccessDetail {
  /**
   * <p>The name of the service in which access was attempted.</p>
   */
  ServiceName: string;

  /**
   * <p>The namespace of the service in which access was attempted.</p> <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions, Resources, and Condition Keys for AWS Services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string;

  /**
   * <p>The Region where the last service access attempt occurred.</p> <p>This field is null if no principals in the reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  Region?: string;

  /**
   * <p>The path of the Organizations entity (root, organizational unit, or account) from which an authenticated principal last attempted to access the service. AWS does not report unauthenticated requests.</p> <p>This field is null if no principals (IAM users, IAM roles, or root users) in the reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  EntityPath?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when an authenticated principal most recently attempted to access the service. AWS does not report unauthenticated requests.</p> <p>This field is null if no principals in the reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedTime?: Date | string | number;

  /**
   * <p>The number of accounts with authenticated principals (root users, IAM users, and IAM roles) that attempted to access the service in the reporting period.</p>
   */
  TotalAuthenticatedEntities?: number;
}

export interface _UnmarshalledAccessDetail extends _AccessDetail {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when an authenticated principal most recently attempted to access the service. AWS does not report unauthenticated requests.</p> <p>This field is null if no principals in the reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedTime?: Date;
}
