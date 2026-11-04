// smithy-typescript generated code
import type { AnalysisType, ErrorCode, ScanState, ScanType, Severity, Status } from "./enums";

/**
 * A numeric value corresponding to the severity of a finding, such as the number of open findings or the average time it takes to close findings of a given severity.
 *
 * @public
 */
export interface FindingMetricsValuePerSeverity {
  /**
   * A numeric value corresponding to an informational finding.
   *
   * @public
   */
  info?: number | undefined;

  /**
   * A numeric value corresponding to a low severity finding.
   *
   * @public
   */
  low?: number | undefined;

  /**
   * A numeric value corresponding to a medium severity finding.
   *
   * @public
   */
  medium?: number | undefined;

  /**
   * A numeric value corresponding to a high severity finding.
   *
   * @public
   */
  high?: number | undefined;

  /**
   * A numeric value corresponding to a critical finding.
   *
   * @public
   */
  critical?: number | undefined;
}

/**
 * A summary of findings metrics for an account on a specified date.
 *
 * @public
 */
export interface AccountFindingsMetric {
  /**
   * The date from which the findings metrics were retrieved.
   *
   * @public
   */
  date?: Date | undefined;

  /**
   * The number of new findings of each severity on the specified date.
   *
   * @public
   */
  newFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * The number of closed findings of each severity on the specified date.
   *
   * @public
   */
  closedFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * The number of open findings of each severity as of the specified date.
   *
   * @public
   */
  openFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * The average time in days it takes to close findings of each severity as of a specified date.
   *
   * @public
   */
  meanTimeToClose?: FindingMetricsValuePerSeverity | undefined;
}

/**
 * An object that contains information about a finding and the scan that generated it.
 *
 * @public
 */
export interface FindingIdentifier {
  /**
   * The name of the scan that generated the finding.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * The identifier for a finding.
   *
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingsRequest {
  /**
   * A list of finding identifiers. Each identifier consists of a `scanName` and a `findingId`. You retrieve the `findingId` when you call `GetFindings`.
   *
   * @public
   */
  findingIdentifiers: FindingIdentifier[] | undefined;
}

/**
 * Contains information about the error that caused a finding to fail to be retrieved.
 *
 * @public
 */
export interface BatchGetFindingsError {
  /**
   * The name of the scan that generated the finding.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * The finding ID of the finding that was not fetched.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * A code associated with the type of error.
   *
   * @public
   */
  errorCode: ErrorCode | undefined;

  /**
   * Describes the error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Information about the recommended course of action to remediate a finding.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The recommended course of action to remediate the finding.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The URL address to the recommendation for remediating the finding.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Information about the suggested code fix to remediate a finding.
 *
 * @public
 */
export interface SuggestedFix {
  /**
   * A description of the suggested code fix and why it is being suggested.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The suggested code fix. If applicable, includes code patch to replace your source code.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * Information about how to remediate a finding.
 *
 * @public
 */
export interface Remediation {
  /**
   * An object that contains information about the recommended course of action to remediate a finding.
   *
   * @public
   */
  recommendation?: Recommendation | undefined;

  /**
   * A list of `SuggestedFix` objects. Each object contains information about a suggested code fix to remediate the finding.
   *
   * @public
   */
  suggestedFixes?: SuggestedFix[] | undefined;
}

/**
 * Information about a resource that contains a finding.
 *
 * @public
 */
export interface Resource {
  /**
   * The `scanName` of the scan that was run on the resource.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The identifier for a section of the resource.
   *
   * @public
   */
  subResourceId?: string | undefined;
}

/**
 * The line of code where a finding was detected.
 *
 * @public
 */
export interface CodeLine {
  /**
   * The code line number.
   *
   * @public
   */
  number?: number | undefined;

  /**
   * The code that contains a vulnerability.
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * Information about the location of security vulnerabilities that Amazon CodeGuru Security detected in your code.
 *
 * @public
 */
export interface FilePath {
  /**
   * The name of the file.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The path to the resource with the security vulnerability.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The first line number of the code snippet where the security vulnerability appears in your code.
   *
   * @public
   */
  startLine?: number | undefined;

  /**
   * The last line number of the code snippet where the security vulnerability appears in your code.
   *
   * @public
   */
  endLine?: number | undefined;

  /**
   * A list of `CodeLine` objects that describe where the security vulnerability appears in your code.
   *
   * @public
   */
  codeSnippet?: CodeLine[] | undefined;
}

/**
 * Information about a security vulnerability that Amazon CodeGuru Security detected.
 *
 * @public
 */
export interface Vulnerability {
  /**
   * One or more URL addresses that contain details about a vulnerability.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * One or more vulnerabilities that are related to the vulnerability being described.
   *
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * The identifier for the vulnerability.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An object that describes the location of the detected security vulnerability in your code.
   *
   * @public
   */
  filePath?: FilePath | undefined;

  /**
   * The number of times the vulnerability appears in your code.
   *
   * @deprecated This shape is not used.
   * @public
   */
  itemCount?: number | undefined;
}

/**
 * Information about a finding that was detected in your code.
 *
 * @public
 */
export interface Finding {
  /**
   * The time when the finding was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * A description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The identifier for the component that generated a finding such as AmazonCodeGuruSecurity.
   *
   * @public
   */
  generatorId?: string | undefined;

  /**
   * The identifier for a finding.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The time when the finding was last updated. Findings are updated when you remediate them or when the finding code location changes.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The type of finding.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The status of the finding. A finding status can be open or closed.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The resource where Amazon CodeGuru Security detected a finding.
   *
   * @public
   */
  resource?: Resource | undefined;

  /**
   * An object that describes the detected security vulnerability.
   *
   * @public
   */
  vulnerability?: Vulnerability | undefined;

  /**
   * The severity of the finding. Severity can be critical, high, medium, low, or informational. For information on severity levels, see [Finding severity](https://docs.aws.amazon.com/codeguru/latest/security-ug/findings-overview.html#severity-distribution) in the *Amazon CodeGuru Security User Guide*.
   *
   * @public
   */
  severity?: Severity | undefined;

  /**
   * An object that contains the details about how to remediate a finding.
   *
   * @public
   */
  remediation?: Remediation | undefined;

  /**
   * The title of the finding.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * One or more tags or categorizations that are associated with a detector. These tags are defined by type, programming language, or other classification such as maintainability or consistency.
   *
   * @public
   */
  detectorTags?: string[] | undefined;

  /**
   * The identifier for the detector that detected the finding in your code. A detector is a defined rule based on industry standards and AWS best practices.
   *
   * @public
   */
  detectorId?: string | undefined;

  /**
   * The name of the detector that identified the security vulnerability in your code.
   *
   * @public
   */
  detectorName?: string | undefined;

  /**
   * The identifier for the rule that generated the finding.
   *
   * @public
   */
  ruleId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingsResponse {
  /**
   * A list of all findings which were successfully fetched.
   *
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * A list of errors for individual findings which were not fetched. Each BatchGetFindingsError contains the `scanName`, `findingId`, `errorCode` and error `message`.
   *
   * @public
   */
  failedFindings: BatchGetFindingsError[] | undefined;
}

/**
 * Information about a validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Describes the exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The identifier for a resource object that contains resources to scan. Specifying a codeArtifactId is required to create a scan.
 *
 * @public
 */
export type ResourceId =
  | ResourceId.CodeArtifactIdMember
  | ResourceId.$UnknownMember;

/**
 * @public
 */
export namespace ResourceId {
  /**
   * The identifier for the code file uploaded to the resource object. Returned by `CreateUploadUrl` when you upload resources to be scanned.
   *
   * @public
   */
  export interface CodeArtifactIdMember {
    codeArtifactId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    codeArtifactId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    codeArtifactId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateScanRequest {
  /**
   * The idempotency token for the request. Amazon CodeGuru Security uses this value to prevent the accidental creation of duplicate scans if there are failures and retries.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier for the resource object to be scanned.
   *
   * @public
   */
  resourceId: ResourceId | undefined;

  /**
   * The unique name that CodeGuru Security uses to track revisions across multiple scans of the same resource. Only allowed for a `STANDARD` scan type.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * The type of scan, either `Standard` or `Express`. Defaults to `Standard` type if missing.
   *
   * `Express` scans run on limited resources and use a limited set of detectors to analyze your code in near-real time. `Standard` scans have standard resource limits and use the full set of detectors to analyze your code.
   *
   * @public
   */
  scanType?: ScanType | undefined;

  /**
   * The type of analysis you want CodeGuru Security to perform in the scan, either `Security` or `All`. The `Security` type only generates findings related to security. The `All` type generates both security findings and quality findings. Defaults to `Security` type if missing.
   *
   * @public
   */
  analysisType?: AnalysisType | undefined;

  /**
   * An array of key-value pairs used to tag a scan. A tag is a custom attribute label with two parts:
   *
   * - A tag key. For example, `CostCenter`, `Environment`, or `Secret`. Tag keys are case sensitive.
   * - An optional tag value field. For example, `111122223333`, `Production`, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateScanResponse {
  /**
   * The name of the scan.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * UUID that identifies the individual scan run.
   *
   * @public
   */
  runId: string | undefined;

  /**
   * The identifier for the resource object that contains resources that were scanned.
   *
   * @public
   */
  resourceId: ResourceId | undefined;

  /**
   * The current state of the scan. Returns either `InProgress`, `Successful`, or `Failed`.
   *
   * @public
   */
  scanState: ScanState | undefined;

  /**
   * The ARN for the scan name.
   *
   * @public
   */
  scanNameArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUploadUrlRequest {
  /**
   * The name of the scan that will use the uploaded resource. CodeGuru Security uses the unique scan name to track revisions across multiple scans of the same resource. Use this `scanName` when you call `CreateScan` on the code resource you upload to this URL.
   *
   * @public
   */
  scanName: string | undefined;
}

/**
 * @public
 */
export interface CreateUploadUrlResponse {
  /**
   * A pre-signed S3 URL. You can upload the code file you want to scan with the required `requestHeaders` using any HTTP client.
   *
   * @public
   */
  s3Url: string | undefined;

  /**
   * A set of key-value pairs that contain the required headers when uploading your resource.
   *
   * @public
   */
  requestHeaders: Record<string, string> | undefined;

  /**
   * The identifier for the uploaded code resource. Pass this to `CreateScan` to use the uploaded resources.
   *
   * @public
   */
  codeArtifactId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationRequest {}

/**
 * Information about the encryption configuration for an account. Required to call `UpdateAccountConfiguration`.
 *
 * @public
 */
export interface EncryptionConfig {
  /**
   * The KMS key ARN that is used for encryption. If an AWS-managed key is used for encryption, returns empty.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationResponse {
  /**
   * An `EncryptionConfig` object that contains the KMS key ARN that is used for encryption. By default, CodeGuru Security uses an AWS-managed key for encryption. To specify your own key, call `UpdateAccountConfiguration`. If you do not specify a customer-managed key, returns empty.
   *
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * The name of the scan you want to retrieve findings from.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the `nextToken` element is returned in the response. Use `nextToken` in a subsequent request to retrieve additional results. If not specified, returns 1000 results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status of the findings you want to get. Pass either `Open`, `Closed`, or `All`.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * A list of findings generated by the specified scan.
   *
   * @public
   */
  findings?: Finding[] | undefined;

  /**
   * A pagination token. You can use this in future calls to `GetFindings` to continue listing results after the current page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMetricsSummaryRequest {
  /**
   * The date you want to retrieve summary metrics from, rounded to the nearest day. The date must be within the past two years.
   *
   * @public
   */
  date: Date | undefined;
}

/**
 * Information about a finding category with open findings.
 *
 * @public
 */
export interface CategoryWithFindingNum {
  /**
   * The name of the finding category. A finding category is determined by the detector that detected the finding.
   *
   * @public
   */
  categoryName?: string | undefined;

  /**
   * The number of open findings in the category.
   *
   * @public
   */
  findingNumber?: number | undefined;
}

/**
 * Information about the number of findings generated by a scan.
 *
 * @public
 */
export interface ScanNameWithFindingNum {
  /**
   * The name of the scan.
   *
   * @public
   */
  scanName?: string | undefined;

  /**
   * The number of findings generated by a scan.
   *
   * @public
   */
  findingNumber?: number | undefined;
}

/**
 * A summary of metrics for an account as of a specified date.
 *
 * @public
 */
export interface MetricsSummary {
  /**
   * The date from which the metrics summary information was retrieved.
   *
   * @public
   */
  date?: Date | undefined;

  /**
   * The number of open findings of each severity.
   *
   * @public
   */
  openFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * A list of `CategoryWithFindingNum` objects for the top 5 finding categories with the most findings.
   *
   * @public
   */
  categoriesWithMostFindings?: CategoryWithFindingNum[] | undefined;

  /**
   * A list of `ScanNameWithFindingNum` objects for the top 3 scans with the most number of open findings.
   *
   * @public
   */
  scansWithMostOpenFindings?: ScanNameWithFindingNum[] | undefined;

  /**
   * A list of `ScanNameWithFindingNum` objects for the top 3 scans with the most number of open critical findings.
   *
   * @public
   */
  scansWithMostOpenCriticalFindings?: ScanNameWithFindingNum[] | undefined;
}

/**
 * @public
 */
export interface GetMetricsSummaryResponse {
  /**
   * The summary metrics from the specified date.
   *
   * @public
   */
  metricsSummary?: MetricsSummary | undefined;
}

/**
 * @public
 */
export interface GetScanRequest {
  /**
   * The name of the scan you want to view details about.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * UUID that identifies the individual scan run you want to view details about. You retrieve this when you call the `CreateScan` operation. Defaults to the latest scan run if missing.
   *
   * @public
   */
  runId?: string | undefined;
}

/**
 * @public
 */
export interface GetScanResponse {
  /**
   * The name of the scan.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * UUID that identifies the individual scan run.
   *
   * @public
   */
  runId: string | undefined;

  /**
   * The current state of the scan. Returns either `InProgress`, `Successful`, or `Failed`.
   *
   * @public
   */
  scanState: ScanState | undefined;

  /**
   * The time the scan was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The type of analysis CodeGuru Security performed in the scan, either `Security` or `All`. The `Security` type only generates findings related to security. The `All` type generates both security findings and quality findings.
   *
   * @public
   */
  analysisType: AnalysisType | undefined;

  /**
   * The time when the scan was last updated. Only available for `STANDARD` scan types.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The number of times a scan has been re-run on a revised resource.
   *
   * @public
   */
  numberOfRevisions?: number | undefined;

  /**
   * The ARN for the scan name.
   *
   * @public
   */
  scanNameArn?: string | undefined;

  /**
   * Details about the error that causes a scan to fail to be retrieved.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsMetricsRequest {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the `nextToken` element is returned in the response. Use `nextToken` in a subsequent request to retrieve additional results. If not specified, returns 1000 results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start date of the interval which you want to retrieve metrics from. Rounds to the nearest day.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The end date of the interval which you want to retrieve metrics from. Round to the nearest day.
   *
   * @public
   */
  endDate: Date | undefined;
}

/**
 * @public
 */
export interface ListFindingsMetricsResponse {
  /**
   * A list of `AccountFindingsMetric` objects retrieved from the specified time interval.
   *
   * @public
   */
  findingsMetrics?: AccountFindingsMetric[] | undefined;

  /**
   * A pagination token. You can use this in future calls to `ListFindingMetrics` to continue listing results after the current page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScansRequest {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the `nextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the `nextToken` element is returned in the response. Use `nextToken` in a subsequent request to retrieve additional results. If not specified, returns 100 results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a scan.
 *
 * @public
 */
export interface ScanSummary {
  /**
   * The state of the scan. A scan can be `In Progress`, `Complete`, or `Failed`.
   *
   * @public
   */
  scanState: ScanState | undefined;

  /**
   * The time when the scan was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time the scan was last updated. A scan is updated when it is re-run.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The name of the scan.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * The identifier for the scan run.
   *
   * @public
   */
  runId: string | undefined;

  /**
   * The ARN for the scan name.
   *
   * @public
   */
  scanNameArn?: string | undefined;
}

/**
 * @public
 */
export interface ListScansResponse {
  /**
   * A list of `ScanSummary` objects with information about all scans in an account.
   *
   * @public
   */
  summaries?: ScanSummary[] | undefined;

  /**
   * A pagination token. You can use this in future calls to `ListScans` to continue listing results after the current page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the `ScanName` object. You can retrieve this ARN by calling `CreateScan`, `ListScans`, or `GetScan`.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array of key-value pairs used to tag an existing scan. A tag is a custom attribute label with two parts:
   *
   * - A tag key. For example, `CostCenter`, `Environment`, or `Secret`. Tag keys are case sensitive.
   * - An optional tag value field. For example, `111122223333`, `Production`, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the `ScanName` object. You can retrieve this ARN by calling `CreateScan`, `ListScans`, or `GetScan`.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An array of key-value pairs used to tag an existing scan. A tag is a custom attribute label with two parts:
   *
   * - A tag key. For example, `CostCenter`, `Environment`, or `Secret`. Tag keys are case sensitive.
   * - An optional tag value field. For example, `111122223333`, `Production`, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the `ScanName` object. You can retrieve this ARN by calling `CreateScan`, `ListScans`, or `GetScan`.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of keys for each tag you want to remove from a scan.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccountConfigurationRequest {
  /**
   * The customer-managed KMS key ARN you want to use for encryption. If not specified, CodeGuru Security will use an AWS-managed key for encryption. If you previously specified a customer-managed KMS key and want CodeGuru Security to use an AWS-managed key for encryption instead, pass nothing.
   *
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAccountConfigurationResponse {
  /**
   * An `EncryptionConfig` object that contains the KMS key ARN that is used for encryption. If you did not specify a customer-managed KMS key in the request, returns empty.
   *
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}
