import {
  _RecentCaseCommunications,
  _UnmarshalledRecentCaseCommunications
} from "./_RecentCaseCommunications";

/**
 * <p>A JSON-formatted object that contains the metadata for a support case. It is contained the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId.</b> The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode.</b> The category of problem for the AWS Support case. Corresponds to the CategoryCode values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId.</b> The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language.</b> The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>recentCommunications.</b> One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>nextToken.</b> A resumption point for pagination.</p> </li> <li> <p> <b>serviceCode.</b> The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode. </b>The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>.</p> </li> <li> <p> <b>status.</b> The status of the case in the AWS Support Center.</p> </li> <li> <p> <b>subject.</b> The subject line of the case.</p> </li> <li> <p> <b>submittedBy.</b> The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated.</b> The time the case was created, in ISO-8601 format.</p> </li> </ul>
 */
export interface _CaseDetails {
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> </p>
   */
  caseId?: string;

  /**
   * <p>The ID displayed for the case in the AWS Support Center. This is a numeric string.</p>
   */
  displayId?: string;

  /**
   * <p>The subject line for the case in the AWS Support Center.</p>
   */
  subject?: string;

  /**
   * <p>The status of the case.</p>
   */
  status?: string;

  /**
   * <p>The code for the AWS service returned by the call to <a>DescribeServices</a>.</p>
   */
  serviceCode?: string;

  /**
   * <p>The category of problem for the AWS Support case.</p>
   */
  categoryCode?: string;

  /**
   * <p>The code for the severity level returned by the call to <a>DescribeSeverityLevels</a>.</p>
   */
  severityCode?: string;

  /**
   * <p>The email address of the account that submitted the case.</p>
   */
  submittedBy?: string;

  /**
   * <p>The time that the case was case created in the AWS Support Center.</p>
   */
  timeCreated?: string;

  /**
   * <p>The five most recent communications between you and AWS Support Center, including the IDs of any attachments to the communications. Also includes a <code>nextToken</code> that you can use to retrieve earlier communications.</p>
   */
  recentCommunications?: _RecentCaseCommunications;

  /**
   * <p>The email addresses that receive copies of communication about the case.</p>
   */
  ccEmailAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p>
   */
  language?: string;
}

export interface _UnmarshalledCaseDetails extends _CaseDetails {
  /**
   * <p>The five most recent communications between you and AWS Support Center, including the IDs of any attachments to the communications. Also includes a <code>nextToken</code> that you can use to retrieve earlier communications.</p>
   */
  recentCommunications?: _UnmarshalledRecentCaseCommunications;

  /**
   * <p>The email addresses that receive copies of communication about the case.</p>
   */
  ccEmailAddresses?: Array<string>;
}
