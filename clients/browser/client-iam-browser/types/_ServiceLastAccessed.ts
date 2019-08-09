/**
 * <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
 */
export interface _ServiceLastAccessed {
  /**
   * <p>The name of the service in which access was attempted.</p>
   */
  ServiceName: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when an authenticated entity most recently attempted to access the service. AWS does not report unauthenticated requests.</p> <p>This field is null if no IAM entities attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date | string | number;

  /**
   * <p>The namespace of the service in which access was attempted.</p> <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions, Resources, and Condition Keys for AWS Services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string;

  /**
   * <p>The ARN of the authenticated entity (user or role) that last attempted to access the service. AWS does not report unauthenticated requests.</p> <p>This field is null if no IAM entities attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedEntity?: string;

  /**
   * <p>The total number of authenticated principals (root user, IAM users, or IAM roles) that have attempted to access the service.</p> <p>This field is null if no principals attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  TotalAuthenticatedEntities?: number;
}

export interface _UnmarshalledServiceLastAccessed extends _ServiceLastAccessed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when an authenticated entity most recently attempted to access the service. AWS does not report unauthenticated requests.</p> <p>This field is null if no IAM entities attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date;
}
