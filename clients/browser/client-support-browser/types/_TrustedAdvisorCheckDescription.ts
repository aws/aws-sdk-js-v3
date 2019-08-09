/**
 * <p>The description and metadata for a Trusted Advisor check.</p>
 */
export interface _TrustedAdvisorCheckDescription {
  /**
   * <p>The unique identifier for the Trusted Advisor check.</p>
   */
  id: string;

  /**
   * <p>The display name for the Trusted Advisor check.</p>
   */
  name: string;

  /**
   * <p>The description of the Trusted Advisor check, which includes the alert criteria and recommended actions (contains HTML markup).</p>
   */
  description: string;

  /**
   * <p>The category of the Trusted Advisor check.</p>
   */
  category: string;

  /**
   * <p>The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a> for the check. <b>Metadata</b> contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. </p>
   */
  metadata: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTrustedAdvisorCheckDescription
  extends _TrustedAdvisorCheckDescription {
  /**
   * <p>The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the <b>Metadata</b> element of the <a>TrustedAdvisorResourceDetail</a> for the check. <b>Metadata</b> contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. </p>
   */
  metadata: Array<string>;
}
