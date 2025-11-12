// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeGuruSecurityServiceException as __BaseException } from "./CodeGuruSecurityServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier for the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The identifier for the resource you don't have access to.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of resource you don't have access to.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.errorCode = opts.errorCode;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>A numeric value corresponding to the severity of a finding, such as the number of open findings or the average time it takes to close findings of a given severity.</p>
 * @public
 */
export interface FindingMetricsValuePerSeverity {
  /**
   * <p>A numeric value corresponding to an informational finding.</p>
   * @public
   */
  info?: number | undefined;

  /**
   * <p>A numeric value corresponding to a low severity finding.</p>
   * @public
   */
  low?: number | undefined;

  /**
   * <p>A numeric value corresponding to a medium severity finding.</p>
   * @public
   */
  medium?: number | undefined;

  /**
   * <p>A numeric value corresponding to a high severity finding.</p>
   * @public
   */
  high?: number | undefined;

  /**
   * <p>A numeric value corresponding to a critical finding.</p>
   * @public
   */
  critical?: number | undefined;
}

/**
 * <p>A summary of findings metrics for an account on a specified date.</p>
 * @public
 */
export interface AccountFindingsMetric {
  /**
   * <p>The date from which the findings metrics were retrieved.</p>
   * @public
   */
  date?: Date | undefined;

  /**
   * <p>The number of new findings of each severity on the specified date.</p>
   * @public
   */
  newFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * <p>The number of closed findings of each severity on the specified date.</p>
   * @public
   */
  closedFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * <p>The number of open findings of each severity as of the specified date.</p>
   * @public
   */
  openFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * <p>The average time in days it takes to close findings of each severity as of a specified date.</p>
   * @public
   */
  meanTimeToClose?: FindingMetricsValuePerSeverity | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalysisType = {
  ALL: "All",
  SECURITY: "Security",
} as const;

/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * <p>An object that contains information about a finding and the scan that generated it. </p>
 * @public
 */
export interface FindingIdentifier {
  /**
   * <p>The name of the scan that generated the finding. </p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>The identifier for a finding.</p>
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingsRequest {
  /**
   * <p>A list of finding identifiers. Each identifier consists of a <code>scanName</code> and a <code>findingId</code>. You retrieve the <code>findingId</code> when you call <code>GetFindings</code>.</p>
   * @public
   */
  findingIdentifiers: FindingIdentifier[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  DUPLICATE_IDENTIFIER: "DUPLICATE_IDENTIFIER",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_FINDING_ID: "INVALID_FINDING_ID",
  INVALID_SCAN_NAME: "INVALID_SCAN_NAME",
  ITEM_DOES_NOT_EXIST: "ITEM_DOES_NOT_EXIST",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>Contains information about the error that caused a finding to fail to be retrieved.</p>
 * @public
 */
export interface BatchGetFindingsError {
  /**
   * <p>The name of the scan that generated the finding.</p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>The finding ID of the finding that was not fetched.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>A code associated with the type of error.</p>
   * @public
   */
  errorCode: ErrorCode | undefined;

  /**
   * <p>Describes the error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Information about the recommended course of action to remediate a finding.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The recommended course of action to remediate the finding.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The URL address to the recommendation for remediating the finding. </p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Information about the suggested code fix to remediate a finding.</p>
 * @public
 */
export interface SuggestedFix {
  /**
   * <p>A description of the suggested code fix and why it is being suggested. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The suggested code fix. If applicable, includes code patch to replace your source code. </p>
   * @public
   */
  code?: string | undefined;
}

/**
 * <p>Information about how to remediate a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to remediate a finding.</p>
   * @public
   */
  recommendation?: Recommendation | undefined;

  /**
   * <p>A list of <code>SuggestedFix</code> objects. Each object contains information about a suggested code fix to remediate the finding.</p>
   * @public
   */
  suggestedFixes?: SuggestedFix[] | undefined;
}

/**
 * <p>Information about a resource that contains a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The <code>scanName</code> of the scan that was run on the resource.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The identifier for a section of the resource.</p>
   * @public
   */
  subResourceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "Critical",
  HIGH: "High",
  INFO: "Info",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const Status = {
  ALL: "All",
  CLOSED: "Closed",
  OPEN: "Open",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>The line of code where a finding was detected.</p>
 * @public
 */
export interface CodeLine {
  /**
   * <p>The code line number.</p>
   * @public
   */
  number?: number | undefined;

  /**
   * <p>The code that contains a vulnerability.</p>
   * @public
   */
  content?: string | undefined;
}

/**
 * <p>Information about the location of security vulnerabilities that Amazon CodeGuru Security detected in your code.</p>
 * @public
 */
export interface FilePath {
  /**
   * <p>The name of the file.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The path to the resource with the security vulnerability.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The first line number of the code snippet where the security vulnerability appears in your code.</p>
   * @public
   */
  startLine?: number | undefined;

  /**
   * <p>The last line number of the code snippet where the security vulnerability appears in your code.</p>
   * @public
   */
  endLine?: number | undefined;

  /**
   * <p>A list of <code>CodeLine</code> objects that describe where the security vulnerability appears in your code.</p>
   * @public
   */
  codeSnippet?: CodeLine[] | undefined;
}

/**
 * <p>Information about a security vulnerability that Amazon CodeGuru Security detected.</p>
 * @public
 */
export interface Vulnerability {
  /**
   * <p>One or more URL addresses that contain details about a vulnerability.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * <p>One or more vulnerabilities that are related to the vulnerability being described.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>The identifier for the vulnerability.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p> An object that describes the location of the detected security vulnerability in your code.</p>
   * @public
   */
  filePath?: FilePath | undefined;

  /**
   * <p>The number of times the vulnerability appears in your code.</p>
   *
   * @deprecated This shape is not used.
   * @public
   */
  itemCount?: number | undefined;
}

/**
 * <p>Information about a finding that was detected in your code.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The time when the finding was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>A description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The identifier for the component that generated a finding such as AmazonCodeGuruSecurity.</p>
   * @public
   */
  generatorId?: string | undefined;

  /**
   * <p>The identifier for a finding.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The time when the finding was last updated. Findings are updated when you remediate them or when the finding code location changes. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The type of finding. </p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The status of the finding. A finding status can be open or closed. </p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The resource where Amazon CodeGuru Security detected a finding.</p>
   * @public
   */
  resource?: Resource | undefined;

  /**
   * <p>An object that describes the detected security vulnerability.</p>
   * @public
   */
  vulnerability?: Vulnerability | undefined;

  /**
   * <p>The severity of the finding. Severity can be critical, high, medium, low, or informational. For information on severity levels, see <a href="https://docs.aws.amazon.com/codeguru/latest/security-ug/findings-overview.html#severity-distribution">Finding severity</a> in the <i>Amazon CodeGuru Security User Guide</i>.</p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p>An object that contains the details about how to remediate a finding.</p>
   * @public
   */
  remediation?: Remediation | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>One or more tags or categorizations that are associated with a detector. These tags are defined by type, programming language, or other classification such as maintainability or consistency.</p>
   * @public
   */
  detectorTags?: string[] | undefined;

  /**
   * <p>The identifier for the detector that detected the finding in your code. A detector is a defined rule based on industry standards and AWS best practices. </p>
   * @public
   */
  detectorId?: string | undefined;

  /**
   * <p>The name of the detector that identified the security vulnerability in your code. </p>
   * @public
   */
  detectorName?: string | undefined;

  /**
   * <p>The identifier for the rule that generated the finding.</p>
   * @public
   */
  ruleId?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingsResponse {
  /**
   * <p> A list of all findings which were successfully fetched.</p>
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * <p>A list of errors for individual findings which were not fetched. Each BatchGetFindingsError contains the <code>scanName</code>, <code>findingId</code>, <code>errorCode</code> and error <code>message</code>.</p>
   * @public
   */
  failedFindings: BatchGetFindingsError[] | undefined;
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The internal error encountered by the server.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.error = opts.error;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The identifier for the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The identifier for the originating service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The identifier for the originating quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.errorCode = opts.errorCode;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>Information about a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Describes the exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  LAMBDA_CODE_SHA_MISMATCH: "lambdaCodeShaMisMatch",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the specified constraints.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier for the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The reason the request failed validation.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The field that caused the error, if applicable.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.errorCode = opts.errorCode;
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier for the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The identifier for the service resource associated with the request.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource associated with the request.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.errorCode = opts.errorCode;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The identifier for a resource object that contains resources to scan. Specifying a codeArtifactId is required to create a scan.</p>
 * @public
 */
export type ResourceId = ResourceId.CodeArtifactIdMember | ResourceId.$UnknownMember;

/**
 * @public
 */
export namespace ResourceId {
  /**
   * <p>The identifier for the code file uploaded to the resource object. Returned by <code>CreateUploadUrl</code> when you upload resources to be scanned.</p>
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
 * @enum
 */
export const ScanType = {
  EXPRESS: "Express",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 */
export interface CreateScanRequest {
  /**
   * <p>The idempotency token for the request. Amazon CodeGuru Security uses this value to prevent the accidental creation of duplicate scans if there are failures and retries.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier for the resource object to be scanned.</p>
   * @public
   */
  resourceId: ResourceId | undefined;

  /**
   * <p>The unique name that CodeGuru Security uses to track revisions across multiple scans of the same resource. Only allowed for a <code>STANDARD</code> scan type. </p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>The type of scan, either <code>Standard</code> or <code>Express</code>. Defaults to <code>Standard</code> type if missing.</p> <p> <code>Express</code> scans run on limited resources and use a limited set of detectors to analyze your code in near-real time. <code>Standard</code> scans have standard resource limits and use the full set of detectors to analyze your code.</p>
   * @public
   */
  scanType?: ScanType | undefined;

  /**
   * <p>The type of analysis you want CodeGuru Security to perform in the scan, either <code>Security</code> or <code>All</code>. The <code>Security</code> type only generates findings related to security. The <code>All</code> type generates both security findings and quality findings. Defaults to <code>Security</code> type if missing.</p>
   * @public
   */
  analysisType?: AnalysisType | undefined;

  /**
   * <p>An array of key-value pairs used to tag a scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanState = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type ScanState = (typeof ScanState)[keyof typeof ScanState];

/**
 * @public
 */
export interface CreateScanResponse {
  /**
   * <p>The name of the scan.</p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>UUID that identifies the individual scan run.</p>
   * @public
   */
  runId: string | undefined;

  /**
   * <p>The identifier for the resource object that contains resources that were scanned.</p>
   * @public
   */
  resourceId: ResourceId | undefined;

  /**
   * <p>The current state of the scan. Returns either <code>InProgress</code>, <code>Successful</code>, or <code>Failed</code>.</p>
   * @public
   */
  scanState: ScanState | undefined;

  /**
   * <p>The ARN for the scan name.</p>
   * @public
   */
  scanNameArn?: string | undefined;
}

/**
 * <p>The resource specified in the request was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier for the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The identifier for the resource that was not found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that was not found.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.errorCode = opts.errorCode;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 */
export interface CreateUploadUrlRequest {
  /**
   * <p>The name of the scan that will use the uploaded resource. CodeGuru Security uses the unique scan name to track revisions across multiple scans of the same resource. Use this <code>scanName</code> when you call <code>CreateScan</code> on the code resource you upload to this URL.</p>
   * @public
   */
  scanName: string | undefined;
}

/**
 * @public
 */
export interface CreateUploadUrlResponse {
  /**
   * <p>A pre-signed S3 URL. You can upload the code file you want to scan with the required <code>requestHeaders</code> using any HTTP client.</p>
   * @public
   */
  s3Url: string | undefined;

  /**
   * <p>A set of key-value pairs that contain the required headers when uploading your resource.</p>
   * @public
   */
  requestHeaders: Record<string, string> | undefined;

  /**
   * <p>The identifier for the uploaded code resource. Pass this to <code>CreateScan</code> to use the uploaded resources.</p>
   * @public
   */
  codeArtifactId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationRequest {}

/**
 * <p>Information about the encryption configuration for an account. Required to call <code>UpdateAccountConfiguration</code>.</p>
 * @public
 */
export interface EncryptionConfig {
  /**
   * <p>The KMS key ARN that is used for encryption. If an AWS-managed key is used for encryption, returns empty.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationResponse {
  /**
   * <p>An <code>EncryptionConfig</code> object that contains the KMS key ARN that is used for encryption. By default, CodeGuru Security uses an AWS-managed key for encryption. To specify your own key, call <code>UpdateAccountConfiguration</code>. If you do not specify a customer-managed key, returns empty.</p>
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>The name of the scan you want to retrieve findings from.</p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code> element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve additional results. If not specified, returns 1000 results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The status of the findings you want to get. Pass either <code>Open</code>, <code>Closed</code>, or <code>All</code>.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>A list of findings generated by the specified scan.</p>
   * @public
   */
  findings?: Finding[] | undefined;

  /**
   * <p>A pagination token. You can use this in future calls to <code>GetFindings</code> to continue listing results after the current page. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMetricsSummaryRequest {
  /**
   * <p>The date you want to retrieve summary metrics from, rounded to the nearest day. The date must be within the past two years.</p>
   * @public
   */
  date: Date | undefined;
}

/**
 * <p>Information about a finding category with open findings.</p>
 * @public
 */
export interface CategoryWithFindingNum {
  /**
   * <p>The name of the finding category. A finding category is determined by the detector that detected the finding.</p>
   * @public
   */
  categoryName?: string | undefined;

  /**
   * <p>The number of open findings in the category.</p>
   * @public
   */
  findingNumber?: number | undefined;
}

/**
 * <p>Information about the number of findings generated by a scan.</p>
 * @public
 */
export interface ScanNameWithFindingNum {
  /**
   * <p>The name of the scan.</p>
   * @public
   */
  scanName?: string | undefined;

  /**
   * <p>The number of findings generated by a scan.</p>
   * @public
   */
  findingNumber?: number | undefined;
}

/**
 * <p>A summary of metrics for an account as of a specified date.</p>
 * @public
 */
export interface MetricsSummary {
  /**
   * <p>The date from which the metrics summary information was retrieved.</p>
   * @public
   */
  date?: Date | undefined;

  /**
   * <p>The number of open findings of each severity.</p>
   * @public
   */
  openFindings?: FindingMetricsValuePerSeverity | undefined;

  /**
   * <p>A list of <code>CategoryWithFindingNum</code> objects for the top 5 finding categories with the most findings.</p>
   * @public
   */
  categoriesWithMostFindings?: CategoryWithFindingNum[] | undefined;

  /**
   * <p>A list of <code>ScanNameWithFindingNum</code> objects for the top 3 scans with the most number of open findings.</p>
   * @public
   */
  scansWithMostOpenFindings?: ScanNameWithFindingNum[] | undefined;

  /**
   * <p>A list of <code>ScanNameWithFindingNum</code> objects for the top 3 scans with the most number of open critical findings.</p>
   * @public
   */
  scansWithMostOpenCriticalFindings?: ScanNameWithFindingNum[] | undefined;
}

/**
 * @public
 */
export interface GetMetricsSummaryResponse {
  /**
   * <p>The summary metrics from the specified date.</p>
   * @public
   */
  metricsSummary?: MetricsSummary | undefined;
}

/**
 * @public
 */
export interface GetScanRequest {
  /**
   * <p>The name of the scan you want to view details about.</p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>UUID that identifies the individual scan run you want to view details about. You retrieve this when you call the <code>CreateScan</code> operation. Defaults to the latest scan run if missing.</p>
   * @public
   */
  runId?: string | undefined;
}

/**
 * @public
 */
export interface GetScanResponse {
  /**
   * <p>The name of the scan.</p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>UUID that identifies the individual scan run.</p>
   * @public
   */
  runId: string | undefined;

  /**
   * <p>The current state of the scan. Returns either <code>InProgress</code>, <code>Successful</code>, or <code>Failed</code>.</p>
   * @public
   */
  scanState: ScanState | undefined;

  /**
   * <p>The time the scan was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The type of analysis CodeGuru Security performed in the scan, either <code>Security</code> or <code>All</code>. The <code>Security</code> type only generates findings related to security. The <code>All</code> type generates both security findings and quality findings.</p>
   * @public
   */
  analysisType: AnalysisType | undefined;

  /**
   * <p>The time when the scan was last updated. Only available for <code>STANDARD</code> scan types.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The number of times a scan has been re-run on a revised resource.</p>
   * @public
   */
  numberOfRevisions?: number | undefined;

  /**
   * <p>The ARN for the scan name.</p>
   * @public
   */
  scanNameArn?: string | undefined;

  /**
   * <p>Details about the error that causes a scan to fail to be retrieved.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsMetricsRequest {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code> element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve additional results. If not specified, returns 1000 results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start date of the interval which you want to retrieve metrics from. Rounds to the nearest day.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The end date of the interval which you want to retrieve metrics from. Round to the nearest day.</p>
   * @public
   */
  endDate: Date | undefined;
}

/**
 * @public
 */
export interface ListFindingsMetricsResponse {
  /**
   * <p>A list of <code>AccountFindingsMetric</code> objects retrieved from the specified time interval.</p>
   * @public
   */
  findingsMetrics?: AccountFindingsMetric[] | undefined;

  /**
   * <p>A pagination token. You can use this in future calls to <code>ListFindingMetrics</code> to continue listing results after the current page. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScansRequest {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code> element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve additional results. If not specified, returns 100 results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about a scan. </p>
 * @public
 */
export interface ScanSummary {
  /**
   * <p>The state of the scan. A scan can be <code>In Progress</code>, <code>Complete</code>, or <code>Failed</code>. </p>
   * @public
   */
  scanState: ScanState | undefined;

  /**
   * <p> The time when the scan was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the scan was last updated. A scan is updated when it is re-run.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The name of the scan. </p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p>The identifier for the scan run. </p>
   * @public
   */
  runId: string | undefined;

  /**
   * <p>The ARN for the scan name.</p>
   * @public
   */
  scanNameArn?: string | undefined;
}

/**
 * @public
 */
export interface ListScansResponse {
  /**
   * <p>A list of <code>ScanSummary</code> objects with information about all scans in an account.</p>
   * @public
   */
  summaries?: ScanSummary[] | undefined;

  /**
   * <p>A pagination token. You can use this in future calls to <code>ListScans</code> to continue listing results after the current page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling <code>CreateScan</code>, <code>ListScans</code>, or <code>GetScan</code>.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of key-value pairs used to tag an existing scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling <code>CreateScan</code>, <code>ListScans</code>, or <code>GetScan</code>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of key-value pairs used to tag an existing scan. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or <code>Secret</code>. Tag keys are case sensitive.</p> </li> <li> <p>An optional tag value field. For example, <code>111122223333</code>, <code>Production</code>, or a team name. Omitting the tag value is the same as using an empty string. Tag values are case sensitive.</p> </li> </ul>
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
   * <p>The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling <code>CreateScan</code>, <code>ListScans</code>, or <code>GetScan</code>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys for each tag you want to remove from a scan.</p>
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
   * <p>The customer-managed KMS key ARN you want to use for encryption. If not specified, CodeGuru Security will use an AWS-managed key for encryption. If you previously specified a customer-managed KMS key and want CodeGuru Security to use an AWS-managed key for encryption instead, pass nothing.</p>
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAccountConfigurationResponse {
  /**
   * <p>An <code>EncryptionConfig</code> object that contains the KMS key ARN that is used for encryption. If you did not specify a customer-managed KMS key in the request, returns empty. </p>
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}
