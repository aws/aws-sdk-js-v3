// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type { ReasonCode, ReportSubmissionStatus } from "./enums";

/**
 * <p>The abuse report data in XARF format. This is a union type, so exactly one member must be specified.</p>
 * @public
 */
export type ReportData =
  | ReportData.XarfMember
  | ReportData.$UnknownMember;

/**
 * @public
 */
export namespace ReportData {
  /**
   * <p>A JSON object that conforms to the XARF v4 specification. At a minimum, the document must include the XARF core fields, including the required <code>category</code> and <code>type</code> fields that classify the report (for example, <code>category</code> <code>content</code> with <code>type</code> <code>phishing</code>). For the XARF core fields and detailed schema definitions of each report type, see the <a href="https://xarf.org/docs/specification/">XARF v4 Technical Specification on the XARF website</a>.</p> <note> <p>Never include images, video, or copies of child sexual abuse or child sexual exploitation material in a report, in any field and for any report type. Send URLs, hash values, and reference identifiers only.</p> </note> <p>If you suspect that activity is illegal, use the XARF <code>description</code> field to explain why and name the laws concerned.</p> <p> <b>Testing your integration</b> </p> <p>To test your integration, add the tag <code>lifecycle:test</code> to the report. Amazon Web Services validates test reports and returns a report ID and status in the same way as other reports, but doesn't process them as abuse reports. Amazon Web Services deletes test reports shortly after submission.</p> <p>Use test values only, such as example.com and the IP address ranges reserved for documentation (192.0.2.0/24, 198.51.100.0/24 and 203.0.113.0/24). Don't add this tag to a real abuse report.</p> <p>Tag keys that begin with <code>aws:</code> are reserved.</p>
   * @public
   */
  export interface XarfMember {
    xarf: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    xarf?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    xarf: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The input for a <a>CreateAbuseReport</a> request. Provide the report in XARF format, and optionally your own correlation ID and idempotency token.</p>
 * @public
 */
export interface CreateAbuseReportRequest {
  /**
   * <p>The abuse report data in XARF format. Provide the report under the <code>xarf</code> key.</p>
   * @public
   */
  report: ReportData | undefined;

  /**
   * <p>An optional correlation ID for tracking the report in the reporter's system. The service echoes this value back in responses, and you can use it to filter reports with <a>ListAbuseReportStatuses</a>.</p>
   * @public
   */
  correlationId?: string | undefined;

  /**
   * <p>An optional, client-provided idempotency token that ensures the operation completes no more than once. If the token matches a previous request within 24 hours, the service returns the existing report ID instead of creating a new report. When you omit this token, the service automatically generates one that is scoped to a 5-minute window.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The response from a <a>CreateAbuseReport</a> request. Contains the identifier that Amazon Web Services assigned to your report, which you use to track it.</p>
 * @public
 */
export interface CreateAbuseReportResponse {
  /**
   * <p>The unique identifier assigned to the submitted abuse report. Use this ID with <a>GetAbuseReportStatus</a> to track processing.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>The correlation ID that you provided in the request, if any. The service echoes this value back in the response.</p>
   * @public
   */
  correlationId?: string | undefined;
}

/**
 * <p>Describes one specific submission requirement that a well-formed report did not meet. The service returns this structure in the <code>unmetRequirements</code> list of a <code>SubmissionRequirementException</code> (HTTP 422).</p>
 * @public
 */
export interface SubmissionRequirement {
  /**
   * <p>A stable, dot-namespaced identifier for the submission requirement that the report did not meet (for example, <code>rule.timestamp.too_old</code>). The set of codes is append-only, so treat an unrecognized value as opaque. This value is absent when the requirement that the report did not meet does not publish an identifier.</p> <p>The service checks the following submission requirements:</p> <ul> <li> <p> <code>rule.source_identifier.too_long</code> (<code>source_identifier</code>) – The value exceeds the maximum accepted length of 253 characters (the DNS hostname limit).</p> </li> <li> <p> <code>rule.source_identifier.forbidden_characters</code> (<code>source_identifier</code>) – The value contains characters that are never valid in an address (<code>\{</code>, <code>\}</code>, <code>*</code>, or <code>`</code>). These are common template-injection and command-injection markers.</p> </li> <li> <p> <code>rule.source_identifier.malformed</code> (<code>source_identifier</code>) – The value is not a valid IPv4 address, IPv6 address, URL, or domain name.</p> </li> <li> <p> <code>rule.timestamp.unparseable</code> (<code>timestamp</code>) – The value could not be parsed as an RFC 3339 date-time.</p> </li> <li> <p> <code>rule.timestamp.in_future</code> (<code>timestamp</code>) – The value is dated further into the future than the accepted clock-skew tolerance (a default of 1 hour).</p> </li> <li> <p> <code>rule.timestamp.too_old</code> (<code>timestamp</code>) – The value predates the submission lookback window (a default of 90 days). For content that is still accessible, set <code>timestamp</code> to the time you most recently observed it.</p> </li> <li> <p> <code>rule.evidence.content_type_mismatch</code> (<code>evidence</code>) – The decoded payload of an evidence item does not match its declared <code>content_type</code>. The <code>path</code> identifies the item, for example <code>/evidence/0</code>.</p> </li> </ul> <p>Submission requirement thresholds are configuration-driven and can change over time. The set of codes is append-only, so treat an unrecognized code as opaque.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>A JSON Pointer expression to the report member that did not meet the requirement. An empty string refers to the report as a whole.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A detailed, human-readable description of the unmet submission requirement.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Describes one specific validation failure for an input member.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>A JSON Pointer expression to the structure member whose value failed to satisfy the modeled constraints.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A detailed description of the validation failure.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The input for a <a>GetAbuseReportStatus</a> request. Identifies the abuse report whose status you want to retrieve.</p>
 * @public
 */
export interface GetAbuseReportStatusRequest {
  /**
   * <p>The unique identifier of the abuse report to retrieve status for. This is the <code>reportId</code> that is returned by <a>CreateAbuseReport</a>.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * <p>The response from a <a>GetAbuseReportStatus</a> request. Contains the report's current status, when you submitted it, and when its status last changed.</p>
 * @public
 */
export interface GetAbuseReportStatusResponse {
  /**
   * <p>The unique identifier of the abuse report.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>The reporter-provided correlation ID for cross-referencing.</p>
   * @public
   */
  correlationId?: string | undefined;

  /**
   * <p>The current processing status of the abuse report. Valid values are <code>QUEUED</code> (the report has been received and queued for processing), <code>PROCESSING</code> (the report has been received and is being processed), and <code>COMPLETED</code> (downstream resolution is finished).</p>
   * @public
   */
  status: ReportSubmissionStatus | undefined;

  /**
   * <p>A human-readable description of the current status.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>A code that explains the resolution outcome. This value is returned only after the report reaches the terminal <code>COMPLETED</code> status; it is absent while the report is <code>QUEUED</code> or <code>PROCESSING</code>. Treat an unrecognized value as opaque, because the set of reason codes is append-only.</p>
   * @public
   */
  reasonCode?: ReasonCode | undefined;

  /**
   * <p>The date and time when the abuse report was submitted.</p>
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * <p>The date and time when the status was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * <p>The input for a <a>ListAbuseReportStatuses</a> request. Use it to filter results by correlation ID and to page through them.</p>
 * @public
 */
export interface ListAbuseReportStatusesRequest {
  /**
   * <p>Filters results by the reporter-provided correlation ID.</p>
   * @public
   */
  correlationId?: string | undefined;

  /**
   * <p>The pagination token for retrieving the next page of results. Omit this parameter to return the first page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single page. Valid range: 1–50. The default is 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Status information for an individual abuse report. The ListAbuseReportStatuses operation returns this structure in its reports list.</p>
 * @public
 */
export interface ReportStatusListItem {
  /**
   * <p>The unique identifier of the abuse report.</p>
   * @public
   */
  reportId: string | undefined;

  /**
   * <p>The reporter-provided correlation ID for cross-referencing.</p>
   * @public
   */
  correlationId?: string | undefined;

  /**
   * <p>The current processing status of the abuse report. Valid values are <code>QUEUED</code> (the report has been received and queued for processing), <code>PROCESSING</code> (the report has been received and is being processed), and <code>COMPLETED</code> (downstream resolution is finished).</p>
   * @public
   */
  status: ReportSubmissionStatus | undefined;

  /**
   * <p>A human-readable description of the status.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>A code that explains the resolution outcome. This value is present only after the report reaches the terminal <code>COMPLETED</code> status; it is absent while the report is <code>QUEUED</code> or <code>PROCESSING</code>.</p>
   * @public
   */
  reasonCode?: ReasonCode | undefined;
}

/**
 * <p>The response from a <a>ListAbuseReportStatuses</a> request. Contains one page of abuse report statuses and, when more results remain, a token for retrieving the next page.</p>
 * @public
 */
export interface ListAbuseReportStatusesResponse {
  /**
   * <p>A list of abuse report status items. This list is empty when no reports are found for the calling account, or when no reports match the specified <code>correlationId</code> filter.</p>
   * @public
   */
  reports: ReportStatusListItem[] | undefined;

  /**
   * <p>The pagination token for the next page of results. This value is <code>null</code> when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}
