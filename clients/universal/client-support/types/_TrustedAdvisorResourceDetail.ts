/**
 * <p>Contains information about a resource identified by a Trusted Advisor check.</p>
 */
export interface _TrustedAdvisorResourceDetail {
  /**
   * <p>The status code for the resource identified in the Trusted Advisor check.</p>
   */
  status: string;

  /**
   * <p>The AWS region in which the identified resource is located.</p>
   */
  region?: string;

  /**
   * <p>The unique identifier for the identified resource.</p>
   */
  resourceId: string;

  /**
   * <p>Specifies whether the AWS resource was ignored by Trusted Advisor because it was marked as suppressed by the user.</p>
   */
  isSuppressed?: boolean;

  /**
   * <p>Additional information about the identified resource. The exact metadata and its order can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a> object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. </p>
   */
  metadata: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTrustedAdvisorResourceDetail
  extends _TrustedAdvisorResourceDetail {
  /**
   * <p>Additional information about the identified resource. The exact metadata and its order can be obtained by inspecting the <a>TrustedAdvisorCheckDescription</a> object returned by the call to <a>DescribeTrustedAdvisorChecks</a>. <b>Metadata</b> contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. </p>
   */
  metadata: Array<string>;
}
