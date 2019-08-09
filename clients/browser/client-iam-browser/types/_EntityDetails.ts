import { _EntityInfo, _UnmarshalledEntityInfo } from "./_EntityInfo";

/**
 * <p>An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified AWS service.</p> <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
 */
export interface _EntityDetails {
  /**
   * <p>The <code>EntityInfo</code> object that contains details about the entity (user or role).</p>
   */
  EntityInfo: _EntityInfo;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the authenticated entity last attempted to access AWS. AWS does not report unauthenticated requests.</p> <p>This field is null if no IAM entities attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date | string | number;
}

export interface _UnmarshalledEntityDetails extends _EntityDetails {
  /**
   * <p>The <code>EntityInfo</code> object that contains details about the entity (user or role).</p>
   */
  EntityInfo: _UnmarshalledEntityInfo;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the authenticated entity last attempted to access AWS. AWS does not report unauthenticated requests.</p> <p>This field is null if no IAM entities attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date;
}
