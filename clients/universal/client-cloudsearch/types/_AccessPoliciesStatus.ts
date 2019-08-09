import { _OptionStatus, _UnmarshalledOptionStatus } from "./_OptionStatus";

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface _AccessPoliciesStatus {
  /**
   * <p>Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.</p>
   */
  Options: string;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _OptionStatus;
}

export interface _UnmarshalledAccessPoliciesStatus
  extends _AccessPoliciesStatus {
  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: _UnmarshalledOptionStatus;
}
