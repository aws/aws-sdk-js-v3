// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodeGuruSecurityServiceException as __BaseException } from "./CodeGuruSecurityServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier for the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource you don't have access to.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of resource you don't have access to.</p>
   */
  resourceType?: string;

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
 * @public
 * <p>The severity of the issue in the code that generated a finding.</p>
 */
export interface FindingMetricsValuePerSeverity {
  /**
   * @public
   * <p>The finding is related to quality or readability improvements and not considered
   *       actionable.</p>
   */
  info?: number;

  /**
   * @public
   * <p>The severity of the finding is low and does require action on its own.</p>
   */
  low?: number;

  /**
   * @public
   * <p>The severity of the finding is medium and should be addressed as a mid-term priority.</p>
   */
  medium?: number;

  /**
   * @public
   * <p>The severity of the finding is high and should be addressed as a near-term priority.</p>
   */
  high?: number;

  /**
   * @public
   * <p>The severity of the finding is critical and should be addressed immediately.</p>
   */
  critical?: number;
}

/**
 * @public
 * <p>A summary of findings metrics in an account.</p>
 */
export interface AccountFindingsMetric {
  /**
   * @public
   * <p>The date from which the finding metrics were retrieved.</p>
   */
  date?: Date;

  /**
   * @public
   * <p>The number of new findings of each severity in account on the specified date.</p>
   */
  newFindings?: FindingMetricsValuePerSeverity;

  /**
   * @public
   * <p>The number of closed findings of each severity in an account on the specified date.</p>
   */
  closedFindings?: FindingMetricsValuePerSeverity;

  /**
   * @public
   * <p>The number of open findings of each severity in an account as of the specified date.</p>
   */
  openFindings?: FindingMetricsValuePerSeverity;

  /**
   * @public
   * <p>The average time it takes to close findings of each severity in days.</p>
   */
  meanTimeToClose?: FindingMetricsValuePerSeverity;
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
 * @public
 * <p>An object that contains information about a finding and the scan that generated it. </p>
 */
export interface FindingIdentifier {
  /**
   * @public
   * <p>The name of the scan that generated the finding. </p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>The identifier for a finding.</p>
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingsRequest {
  /**
   * @public
   * <p>A list of finding identifiers. Each identifier consists of a <code>scanName</code> and a
   *         <code>findingId</code>. You retrieve the <code>findingId</code> when you call
   *         <code>GetFindings</code>.</p>
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
 * @public
 * <p>Contains information about the error that caused a finding to fail to be retrieved.</p>
 */
export interface BatchGetFindingsError {
  /**
   * @public
   * <p>The name of the scan that generated the finding.</p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>The finding ID of the finding that was not fetched.</p>
   */
  findingId: string | undefined;

  /**
   * @public
   * <p>A code associated with the type of error.</p>
   */
  errorCode: ErrorCode | undefined;

  /**
   * @public
   * <p>Describes the error.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>Information about the recommended course of action to remediate a finding.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The recommended course of action to remediate the finding.</p>
   */
  text?: string;

  /**
   * @public
   * <p>The URL address to the recommendation for remediating the finding. </p>
   */
  url?: string;
}

/**
 * @public
 * <p>Information about the suggested code fix to remediate a finding.</p>
 */
export interface SuggestedFix {
  /**
   * @public
   * <p>A description of the suggested code fix and why it is being suggested. </p>
   */
  description?: string;

  /**
   * @public
   * <p>The suggested code to add to your file. </p>
   */
  code?: string;
}

/**
 * @public
 * <p>Information about how to remediate a finding.</p>
 */
export interface Remediation {
  /**
   * @public
   * <p>An object that contains information about the recommended course of action to remediate a finding.</p>
   */
  recommendation?: Recommendation;

  /**
   * @public
   * <p>A list of <code>SuggestedFix</code> objects. Each object contains information about a suggested code
   *       fix to remediate the finding.</p>
   */
  suggestedFixes?: SuggestedFix[];
}

/**
 * @public
 * <p>Information about a resource, such as an Amazon S3 bucket or AWS Lambda function, that
 *       contains a finding.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The identifier for the resource.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The identifier for a section of the resource, such as an AWS Lambda layer.</p>
   */
  subResourceId?: string;
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
 * @public
 * <p>The line of code where a finding was detected.</p>
 */
export interface CodeLine {
  /**
   * @public
   * <p>The code line number.</p>
   */
  number?: number;

  /**
   * @public
   * <p>The code that contains a vulnerability.</p>
   */
  content?: string;
}

/**
 * @public
 * <p>Information about the location of security vulnerabilities that Amazon CodeGuru Security
 *       detected in your code.</p>
 */
export interface FilePath {
  /**
   * @public
   * <p>The name of the file.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The path to the resource with the security vulnerability.</p>
   */
  path?: string;

  /**
   * @public
   * <p>The first line number of the code snippet where the security vulnerability appears in your code.</p>
   */
  startLine?: number;

  /**
   * @public
   * <p>The last line number of the code snippet where the security vulnerability appears in your
   *       code.</p>
   */
  endLine?: number;

  /**
   * @public
   * <p>A list of <code>CodeLine</code> objects that describe where the security vulnerability
   *       appears in your code.</p>
   */
  codeSnippet?: CodeLine[];
}

/**
 * @public
 * <p>Information about a security vulnerability that Amazon CodeGuru Security detected.</p>
 */
export interface Vulnerability {
  /**
   * @public
   * <p>One or more URL addresses that contain details about a vulnerability.</p>
   */
  referenceUrls?: string[];

  /**
   * @public
   * <p>One or more vulnerabilities that are related to the vulnerability being described.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * @public
   * <p>The identifier for the vulnerability.</p>
   */
  id?: string;

  /**
   * @public
   * <p> An object that describes the location of the detected security vulnerability in your
   *       code.</p>
   */
  filePath?: FilePath;

  /**
   * @public
   * <p> The number of times the vulnerability appears in your code.</p>
   */
  itemCount?: number;
}

/**
 * @public
 * <p>Information about a finding that was detected in your code.</p>
 */
export interface Finding {
  /**
   * @public
   * <p>The time when the finding was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A description of the finding.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The identifier for the component that generated a finding such as AWSCodeGuruSecurity or
   *       AWSInspector.</p>
   */
  generatorId?: string;

  /**
   * @public
   * <p>The identifier for a finding.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The time when the finding was last updated. Findings are updated when you remediate them
   *       or when the finding code location changes. </p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The type of finding. </p>
   */
  type?: string;

  /**
   * @public
   * <p>The status of the finding. A finding status can be open or closed. </p>
   */
  status?: Status;

  /**
   * @public
   * <p>The resource where Amazon CodeGuru Security detected a finding.</p>
   */
  resource?: Resource;

  /**
   * @public
   * <p>An object that describes the detected security vulnerability.</p>
   */
  vulnerability?: Vulnerability;

  /**
   * @public
   * <p>The severity of the finding.</p>
   */
  severity?: Severity;

  /**
   * @public
   * <p>An object that contains the details about how to remediate a finding.</p>
   */
  remediation?: Remediation;

  /**
   * @public
   * <p>The title of the finding.</p>
   */
  title?: string;

  /**
   * @public
   * <p>One or more tags or categorizations that are associated with a detector. These tags are
   *       defined by type, programming language, or other classification such as maintainability or
   *       consistency.</p>
   */
  detectorTags?: string[];

  /**
   * @public
   * <p>The identifier for the detector that detected the finding in your code. A detector is a
   *       defined rule based on industry standards and AWS best practices. </p>
   */
  detectorId?: string;

  /**
   * @public
   * <p>The name of the detector that identified the security vulnerability in your code. </p>
   */
  detectorName?: string;

  /**
   * @public
   * <p>The identifier for the rule that generated the finding.</p>
   */
  ruleId?: string;
}

/**
 * @public
 */
export interface BatchGetFindingsResponse {
  /**
   * @public
   * <p> A list of all requested findings.</p>
   */
  findings: Finding[] | undefined;

  /**
   * @public
   * <p>A list of errors for individual findings which were not fetched. Each
   *       BatchGetFindingsError contains the <code>scanName</code>, <code>findingId</code>,
   *       <code>errorCode</code> and error <code>message</code>.</p>
   */
  failedFindings: BatchGetFindingsError[] | undefined;
}

/**
 * @public
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The internal error encountered by the server.</p>
   */
  error?: string;

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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The identifier for the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The identifier for the originating service.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The identifier for the originating quota.</p>
   */
  quotaCode?: string;

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
 * @public
 * <p>Information about a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Describes the exception.</p>
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
 * @public
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier for the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The reason the request failed validation.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The field that caused the error, if applicable.</p>
   */
  fieldList?: ValidationExceptionField[];

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
 * @public
 * <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this
 *       request.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier for the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The identifier for the service resource associated with the request.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of resource associated with the request.</p>
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
 * @public
 * <p>The identifier for a resource object that contains resources where a finding was detected.</p>
 */
export type ResourceId = ResourceId.CodeArtifactIdMember | ResourceId.$UnknownMember;

/**
 * @public
 */
export namespace ResourceId {
  /**
   * @public
   * <p>The identifier for the code file uploaded to the resource where a finding was detected.</p>
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

  export interface Visitor<T> {
    codeArtifactId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResourceId, visitor: Visitor<T>): T => {
    if (value.codeArtifactId !== undefined) return visitor.codeArtifactId(value.codeArtifactId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * @public
   * <p>The idempotency token for the request. Amazon CodeGuru Security uses this value to prevent
   *       the accidental creation of duplicate scans if there are failures and retries.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The identifier for an input resource used to create a scan.</p>
   */
  resourceId: ResourceId | undefined;

  /**
   * @public
   * <p>The unique name that CodeGuru Security uses to track revisions across multiple
   *       scans of the same resource. Only allowed for a <code>STANDARD</code> scan type. If not
   *       specified, it will be auto generated. </p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>The type of scan, either <code>Standard</code> or <code>Express</code>. Defaults to
   *       <code>Standard</code> type if missing.</p>
   *          <p>
   *             <code>Express</code> scans run on limited resources and use a limited set of detectors to
   *       analyze your code in near-real time. <code>Standard</code> scans have standard resource limits
   *       and use the full set of detectors to analyze your code.</p>
   */
  scanType?: ScanType;

  /**
   * @public
   * <p>The type of analysis you want CodeGuru Security to perform in the scan, either
   *         <code>Security</code> or <code>All</code>. The <code>Security</code> type only generates
   *       findings related to security. The <code>All</code> type generates both security findings and
   *       quality findings. Defaults to <code>Security</code> type if missing.</p>
   */
  analysisType?: AnalysisType;

  /**
   * @public
   * <p>An array of key-value pairs used to tag a scan. A tag is a custom attribute
   *       label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or
   *             <code>Secret</code>. Tag keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional tag value field. For example, <code>111122223333</code>,
   *             <code>Production</code>, or a team name. Omitting the tag value is the same as using an
   *             empty string. Tag values are case sensitive.</p>
   *             </li>
   *          </ul>
   */
  tags?: Record<string, string>;
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
   * @public
   * <p>The name of the scan.</p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>UUID that identifies the individual scan run.</p>
   */
  runId: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource object that contains resources that were scanned.</p>
   */
  resourceId: ResourceId | undefined;

  /**
   * @public
   * <p>The current state of the scan. Returns either <code>InProgress</code>,
   *       <code>Successful</code>, or <code>Failed</code>.</p>
   */
  scanState: ScanState | undefined;

  /**
   * @public
   * <p>The ARN for the scan name.</p>
   */
  scanNameArn?: string;
}

/**
 * @public
 * <p>The resource specified in the request was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier for the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The identifier for the resource that was not found.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of resource that was not found.</p>
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
   * @public
   * <p>The name of the scan that will use the uploaded resource. CodeGuru Security uses the
   *       unique scan name to track revisions across multiple scans of the same resource. Use this
   *       <code>scanName</code> when you call <code>CreateScan</code> on the code resource you upload to this URL.</p>
   */
  scanName: string | undefined;
}

/**
 * @public
 */
export interface CreateUploadUrlResponse {
  /**
   * @public
   * <p>A pre-signed S3 URL. You can upload the code file you want to scan and add the required
   *       <code>requestHeaders</code> using any HTTP client.</p>
   */
  s3Url: string | undefined;

  /**
   * @public
   * <p>A set of key-value pairs that contain the required headers when uploading your
   *       resource.</p>
   */
  requestHeaders: Record<string, string> | undefined;

  /**
   * @public
   * <p>The identifier for the uploaded code resource. </p>
   */
  codeArtifactId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationRequest {}

/**
 * @public
 * <p>Information about account-level configuration.</p>
 */
export interface EncryptionConfig {
  /**
   * @public
   * <p>The KMS key ARN to use for encryption. This must be provided as a header when uploading
   *       your code resource.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 */
export interface GetAccountConfigurationResponse {
  /**
   * @public
   * <p>An <code>EncryptionConfig</code> object that contains the KMS key ARN to use for
   *       encryption. By default, CodeGuru Security uses an AWS-managed key for encryption. To specify
   *       your own key, call <code>UpdateAccountConfiguration</code>.</p>
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * @public
   * <p>The name of the scan you want to retrieve findings from.</p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value
   *       returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response. Use this parameter when
   *       paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code>
   *       element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve
   *       additional results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The status of the findings you want to get. Pass either <code>Open</code>,
   *       <code>Closed</code>, or <code>All</code>.</p>
   */
  status?: Status;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * @public
   * <p>A list of findings generated by the specified scan.</p>
   */
  findings?: Finding[];

  /**
   * @public
   * <p>A pagination token. You can use this in future calls to <code>GetFindings</code> to continue listing
   *       results after the current page. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetMetricsSummaryRequest {
  /**
   * @public
   * <p>The date you want to retrieve summary metrics from, rounded to the nearest day. The date
   *       must be within the past two years since metrics data is only stored for two years. If a date
   *       outside of this range is passed, the response will be empty.</p>
   */
  date: Date | undefined;
}

/**
 * @public
 * <p>Information about a finding category with open findings.</p>
 */
export interface CategoryWithFindingNum {
  /**
   * @public
   * <p>The name of the finding category. A finding category is determined by the detector that
   *       detected the finding.</p>
   */
  categoryName?: string;

  /**
   * @public
   * <p>The number of open findings in the category.</p>
   */
  findingNumber?: number;
}

/**
 * @public
 * <p>Information about a scan with open findings.</p>
 */
export interface ScanNameWithFindingNum {
  /**
   * @public
   * <p>The name of the scan.</p>
   */
  scanName?: string;

  /**
   * @public
   * <p>The number of open findings generated by a scan.</p>
   */
  findingNumber?: number;
}

/**
 * @public
 * <p>Information about summary metrics in an account.</p>
 */
export interface MetricsSummary {
  /**
   * @public
   * <p>The date from which the metrics summary information was retrieved.</p>
   */
  date?: Date;

  /**
   * @public
   * <p>The number of open findings of each severity in an account.</p>
   */
  openFindings?: FindingMetricsValuePerSeverity;

  /**
   * @public
   * <p>A list of <code>CategoryWithFindingNum</code> objects for the top 5 finding categories
   *       with the most open findings in an account.</p>
   */
  categoriesWithMostFindings?: CategoryWithFindingNum[];

  /**
   * @public
   * <p>A list of <code>ScanNameWithFindingNum</code> objects for the top 3 scans with the most
   *       number of open critical findings in an account.</p>
   */
  scansWithMostOpenFindings?: ScanNameWithFindingNum[];

  /**
   * @public
   * <p>A list of <code>ScanNameWithFindingNum</code> objects for the top 3 scans with the most
   *       number of open findings in an account.</p>
   */
  scansWithMostOpenCriticalFindings?: ScanNameWithFindingNum[];
}

/**
 * @public
 */
export interface GetMetricsSummaryResponse {
  /**
   * @public
   * <p>The summary metrics from the specified date.</p>
   */
  metricsSummary?: MetricsSummary;
}

/**
 * @public
 */
export interface GetScanRequest {
  /**
   * @public
   * <p>The name of the scan you want to view details about.</p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>UUID that identifies the individual scan run you want to view details about. You retrieve
   *       this when you call the <code>CreateScan</code> operation. Defaults to the latest scan run if missing.</p>
   */
  runId?: string;
}

/**
 * @public
 */
export interface GetScanResponse {
  /**
   * @public
   * <p>The name of the scan.</p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>UUID that identifies the individual scan run.</p>
   */
  runId: string | undefined;

  /**
   * @public
   * <p>The current state of the scan. Pass either <code>InProgress</code>,
   *       <code>Successful</code>, or <code>Failed</code>.</p>
   */
  scanState: ScanState | undefined;

  /**
   * @public
   * <p>The time the scan was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The type of analysis CodeGuru Security performed in the scan, either
   *       <code>Security</code> or <code>All</code>. The <code>Security</code> type only generates
   *       findings related to security. The <code>All</code> type generates both security findings and
   *       quality findings.</p>
   */
  analysisType: AnalysisType | undefined;

  /**
   * @public
   * <p>The time when the scan was last updated. Only available for <code>STANDARD</code> scan types.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The number of times a scan has been re-run on a revised resource.</p>
   */
  numberOfRevisions?: number;

  /**
   * @public
   * <p>The ARN for the scan name.</p>
   */
  scanNameArn?: string;
}

/**
 * @public
 */
export interface ListFindingsMetricsRequest {
  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the
   *       value of this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code>
   *       value returned from the previous request to continue listing results after the first
   *       page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response. Use this parameter when
   *       paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code>
   *       element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve
   *       additional results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The start date of the interval which you want to retrieve metrics from.</p>
   */
  startDate: Date | undefined;

  /**
   * @public
   * <p>The end date of the interval which you want to retrieve metrics from.</p>
   */
  endDate: Date | undefined;
}

/**
 * @public
 */
export interface ListFindingsMetricsResponse {
  /**
   * @public
   * <p>A list of <code>AccountFindingsMetric</code> objects retrieved from the specified time interval.</p>
   */
  findingsMetrics?: AccountFindingsMetric[];

  /**
   * @public
   * <p>A pagination token. You can use this in future calls to <code>ListFindingMetrics</code> to continue
   *       listing results after the current page. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListScansRequest {
  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request. For subsequent calls, use the <code>nextToken</code> value
   *       returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response. Use this parameter when
   *       paginating results. If additional results exist beyond the number you specify, the <code>nextToken</code>
   *       element is returned in the response. Use <code>nextToken</code> in a subsequent request to retrieve
   *       additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a scan. </p>
 */
export interface ScanSummary {
  /**
   * @public
   * <p>The state of the scan. A scan can be <code>In Progress</code>,
   *       <code>Complete</code>, or <code>Failed</code>. </p>
   */
  scanState: ScanState | undefined;

  /**
   * @public
   * <p> The time when the scan was created. </p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time the scan was last updated. A scan is updated when it is re-run.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The name of the scan. </p>
   */
  scanName: string | undefined;

  /**
   * @public
   * <p>The identifier for the scan run. </p>
   */
  runId: string | undefined;

  /**
   * @public
   * <p>The ARN for the scan name.</p>
   */
  scanNameArn?: string;
}

/**
 * @public
 */
export interface ListScansResponse {
  /**
   * @public
   * <p>A list of <code>ScanSummary</code> objects with information about all scans in an account.</p>
   */
  summaries?: ScanSummary[];

  /**
   * @public
   * <p>A pagination token. You can use this in future calls to <code>ListScans</code> to continue listing
   *       results after the current page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling
   *         <code>ListScans</code> or <code>GetScan</code>.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An array of key-value pairs used to tag an existing scan. A tag is a custom attribute
   *       label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or
   *             <code>Secret</code>. Tag keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional tag value field. For example, <code>111122223333</code>,
   *             <code>Production</code>, or a team name. Omitting the tag value is the same as using an
   *           empty string. Tag values are case sensitive.</p>
   *             </li>
   *          </ul>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling
   *       <code>ListScans</code> or <code>GetScan</code>.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>An array of key-value pairs used to tag an existing scan. A tag is a custom attribute
   *     label with two parts:</p>
   *          <ul>
   *             <li>
   *                <p>A tag key. For example, <code>CostCenter</code>, <code>Environment</code>, or
   *           <code>Secret</code>. Tag keys are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>An optional tag value field. For example, <code>111122223333</code>,
   *           <code>Production</code>, or a team name. Omitting the tag value is the same as using an
   *           empty string. Tag values are case sensitive.</p>
   *             </li>
   *          </ul>
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
   * @public
   * <p>The ARN of the <code>ScanName</code> object. You can retrieve this ARN by calling
   *       <code>ListScans</code> or <code>GetScan</code>.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of keys for each tag you want to remove from a scan.</p>
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
   * @public
   * <p>The KMS key ARN you want to use for encryption. Defaults to service-side encryption if missing.</p>
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAccountConfigurationResponse {
  /**
   * @public
   * <p>An <code>EncryptionConfig</code> object that contains the KMS key ARN to use for
   *       encryption.</p>
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * @internal
 */
export const CreateUploadUrlResponseFilterSensitiveLog = (obj: CreateUploadUrlResponse): any => ({
  ...obj,
  ...(obj.s3Url && { s3Url: SENSITIVE_STRING }),
  ...(obj.requestHeaders && { requestHeaders: SENSITIVE_STRING }),
});
