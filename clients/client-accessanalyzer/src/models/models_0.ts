// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AccessAnalyzerServiceException as __BaseException } from "./AccessAnalyzerServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>A conflict exception error.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The resource type.</p>
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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>The criteria to use in the filter that defines the archive rule. For more information on
 *          available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer
 *             filter keys</a>.</p>
 */
export interface Criterion {
  /**
   * @public
   * <p>An "equals" operator to match for the filter used to create the rule.</p>
   */
  eq?: string[];

  /**
   * @public
   * <p>A "not equals" operator to match for the filter used to create the rule.</p>
   */
  neq?: string[];

  /**
   * @public
   * <p>A "contains" operator to match for the filter used to create the rule.</p>
   */
  contains?: string[];

  /**
   * @public
   * <p>An "exists" operator to match for the filter used to create the rule. </p>
   */
  exists?: boolean;
}

/**
 * @public
 * <p>Creates an archive rule.</p>
 */
export interface CreateArchiveRuleRequest {
  /**
   * @public
   * <p>The name of the created analyzer.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>The name of the rule to create.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>The criteria for the rule.</p>
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource.</p>
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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>Service quote met error.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>Throttling limit exceeded error.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>Contains information about a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A message about the validation exception.</p>
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
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>Validation exception error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the exception.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>A list of fields that didn't validate.</p>
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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * <p>Deletes an archive rule.</p>
 */
export interface DeleteArchiveRuleRequest {
  /**
   * @public
   * <p>The name of the analyzer that associated with the archive rule to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>The name of the rule to delete.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Retrieves an archive rule.</p>
 */
export interface GetArchiveRuleRequest {
  /**
   * @public
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>The name of the rule to retrieve.</p>
   */
  ruleName: string | undefined;
}

/**
 * @public
 * <p>Contains information about an archive rule.</p>
 */
export interface ArchiveRuleSummary {
  /**
   * @public
   * <p>The name of the archive rule.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>A filter used to define the archive rule.</p>
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * @public
   * <p>The time at which the archive rule was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the archive rule was last updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface GetArchiveRuleResponse {
  /**
   * @public
   * <p>Contains information about an archive rule.</p>
   */
  archiveRule: ArchiveRuleSummary | undefined;
}

/**
 * @public
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 */
export interface ListArchiveRulesRequest {
  /**
   * @public
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface ListArchiveRulesResponse {
  /**
   * @public
   * <p>A list of archive rules created for the specified analyzer.</p>
   */
  archiveRules: ArchiveRuleSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Updates the specified archive rule.</p>
 */
export interface UpdateArchiveRuleRequest {
  /**
   * @public
   * <p>The name of the analyzer to update the archive rules for.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>The name of the rule to update.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>A filter to match for the rules to update. Only rules that match the filter are
   *          updated.</p>
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>An criterion statement in an archive rule. Each archive rule may have multiple
 *          criteria.</p>
 */
export interface InlineArchiveRule {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>The condition and values for a criterion.</p>
   */
  filter: Record<string, Criterion> | undefined;
}

/**
 * @public
 */
export type Type = "ACCOUNT" | "ORGANIZATION";

/**
 * @public
 * <p>Creates an analyzer.</p>
 */
export interface CreateAnalyzerRequest {
  /**
   * @public
   * <p>The name of the analyzer to create.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported.
   *          You can create only one analyzer per account per Region. You can create up to 5 analyzers
   *          per organization per Region.</p>
   */
  type: Type | undefined;

  /**
   * @public
   * <p>Specifies the archive rules to add for the analyzer. Archive rules automatically archive
   *          findings that meet the criteria you define for the rule.</p>
   */
  archiveRules?: InlineArchiveRule[];

  /**
   * @public
   * <p>The tags to apply to the analyzer.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>The response to the request to create an analyzer.</p>
 */
export interface CreateAnalyzerResponse {
  /**
   * @public
   * <p>The ARN of the analyzer that was created by the request.</p>
   */
  arn?: string;
}

/**
 * @public
 * <p>Deletes an analyzer.</p>
 */
export interface DeleteAnalyzerRequest {
  /**
   * @public
   * <p>The name of the analyzer to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Retrieves an analyzer.</p>
 */
export interface GetAnalyzerRequest {
  /**
   * @public
   * <p>The name of the analyzer retrieved.</p>
   */
  analyzerName: string | undefined;
}

/**
 * @public
 */
export type AnalyzerStatus = "ACTIVE" | "CREATING" | "DISABLED" | "FAILED";

/**
 * @public
 */
export type ReasonCode =
  | "AWS_SERVICE_ACCESS_DISABLED"
  | "DELEGATED_ADMINISTRATOR_DEREGISTERED"
  | "ORGANIZATION_DELETED"
  | "SERVICE_LINKED_ROLE_CREATION_FAILED";

/**
 * @public
 * <p>Provides more details about the current status of the analyzer. For example, if the
 *          creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer
 *          with organization as the type, this failure can be due to an issue with creating the
 *          service-linked roles required in the member accounts of the Amazon Web Services organization.</p>
 */
export interface StatusReason {
  /**
   * @public
   * <p>The reason code for the current status of the analyzer.</p>
   */
  code: ReasonCode | undefined;
}

/**
 * @public
 * <p>Contains information about the analyzer.</p>
 */
export interface AnalyzerSummary {
  /**
   * @public
   * <p>The ARN of the analyzer.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the analyzer.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of analyzer, which corresponds to the zone of trust chosen for the
   *          analyzer.</p>
   */
  type: Type | undefined;

  /**
   * @public
   * <p>A timestamp for the time at which the analyzer was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The resource that was most recently analyzed by the analyzer.</p>
   */
  lastResourceAnalyzed?: string;

  /**
   * @public
   * <p>The time at which the most recently analyzed resource was analyzed.</p>
   */
  lastResourceAnalyzedAt?: Date;

  /**
   * @public
   * <p>The tags added to the analyzer.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The status of the analyzer. An <code>Active</code> analyzer successfully monitors
   *          supported resources and generates new findings. The analyzer is <code>Disabled</code> when
   *          a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes
   *          the analyzer to stop generating new findings. The status is <code>Creating</code> when the
   *          analyzer creation is in progress and <code>Failed</code> when the analyzer creation has
   *          failed. </p>
   */
  status: AnalyzerStatus | undefined;

  /**
   * @public
   * <p>The <code>statusReason</code> provides more details about the current status of the
   *          analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status
   *          is returned. For an analyzer with organization as the type, this failure can be due to an
   *          issue with creating the service-linked roles required in the member accounts of the Amazon Web Services
   *          organization.</p>
   */
  statusReason?: StatusReason;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface GetAnalyzerResponse {
  /**
   * @public
   * <p>An <code>AnalyzerSummary</code> object that contains information about the
   *          analyzer.</p>
   */
  analyzer: AnalyzerSummary | undefined;
}

/**
 * @public
 * <p>Retrieves a list of analyzers.</p>
 */
export interface ListAnalyzersRequest {
  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The type of analyzer.</p>
   */
  type?: Type;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface ListAnalyzersResponse {
  /**
   * @public
   * <p>The analyzers retrieved.</p>
   */
  analyzers: AnalyzerSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Retroactively applies an archive rule.</p>
 */
export interface ApplyArchiveRuleRequest {
  /**
   * @public
   * <p>The Amazon resource name (ARN) of the analyzer.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The name of the rule to apply.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CancelPolicyGenerationRequest {
  /**
   * @public
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelPolicyGenerationResponse {}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon EBS volume snapshot. You can propose
 *          a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by
 *          specifying the user IDs, groups, and optional KMS encryption key. For more information,
 *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>.</p>
 */
export interface EbsSnapshotConfiguration {
  /**
   * @public
   * <p>The IDs of the Amazon Web Services accounts that have access to the Amazon EBS volume snapshot.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not
   *                specify the <code>userIds</code>, then the access preview uses the existing shared
   *                   <code>userIds</code> for the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the
   *                   <code>userIds</code>, then the access preview considers the snapshot without any
   *                   <code>userIds</code>.</p>
   *             </li>
   *             <li>
   *                <p>To propose deletion of existing shared <code>accountIds</code>, you can specify an
   *                empty list for <code>userIds</code>.</p>
   *             </li>
   *          </ul>
   */
  userIds?: string[];

  /**
   * @public
   * <p>The groups that have access to the Amazon EBS volume snapshot. If the value <code>all</code>
   *          is specified, then the Amazon EBS volume snapshot is public.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not
   *                specify the <code>groups</code>, then the access preview uses the existing shared
   *                   <code>groups</code> for the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the
   *                   <code>groups</code>, then the access preview considers the snapshot without any
   *                   <code>groups</code>.</p>
   *             </li>
   *             <li>
   *                <p>To propose deletion of existing shared <code>groups</code>, you can specify an
   *                empty list for <code>groups</code>.</p>
   *             </li>
   *          </ul>
   */
  groups?: string[];

  /**
   * @public
   * <p>The KMS key identifier for an encrypted Amazon EBS volume snapshot. The KMS key
   *          identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon EBS volume snapshot and you do not
   *                specify the <code>kmsKeyId</code>, or you specify an empty string, then the access
   *                preview uses the existing <code>kmsKeyId</code> of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the
   *                   <code>kmsKeyId</code>, the access preview considers the snapshot as
   *                unencrypted.</p>
   *             </li>
   *          </ul>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon ECR repository. You can propose a
 *          configuration for a new Amazon ECR repository or an existing Amazon ECR repository that you own by
 *          specifying the Amazon ECR policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_Repository.html">Repository</a>.</p>
 *          <ul>
 *             <li>
 *                <p>If the configuration is for an existing Amazon ECR repository and you do not specify
 *                the Amazon ECR policy, then the access preview uses the existing Amazon ECR policy for the
 *                repository.</p>
 *             </li>
 *             <li>
 *                <p>If the access preview is for a new resource and you do not specify the policy,
 *                then the access preview assumes an Amazon ECR repository without a policy.</p>
 *             </li>
 *             <li>
 *                <p>To propose deletion of an existing Amazon ECR repository policy, you can specify an
 *                empty string for the Amazon ECR policy.</p>
 *             </li>
 *          </ul>
 */
export interface EcrRepositoryConfiguration {
  /**
   * @public
   * <p>The JSON repository policy text to apply to the Amazon ECR repository. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Private repository
   *             policy examples</a> in the <i>Amazon ECR User Guide</i>.</p>
   */
  repositoryPolicy?: string;
}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon EFS file system. You can propose a
 *          configuration for a new Amazon EFS file system or an existing Amazon EFS file system that you own by
 *          specifying the Amazon EFS policy. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-fs.html">Using file systems in Amazon EFS</a>.</p>
 *          <ul>
 *             <li>
 *                <p>If the configuration is for an existing Amazon EFS file system and you do not specify
 *                the Amazon EFS policy, then the access preview uses the existing Amazon EFS policy for the file
 *                system.</p>
 *             </li>
 *             <li>
 *                <p>If the access preview is for a new resource and you do not specify the policy,
 *                then the access preview assumes an Amazon EFS file system without a policy.</p>
 *             </li>
 *             <li>
 *                <p>To propose deletion of an existing Amazon EFS file system policy, you can specify an
 *                empty string for the Amazon EFS policy.</p>
 *             </li>
 *          </ul>
 */
export interface EfsFileSystemConfiguration {
  /**
   * @public
   * <p>The JSON policy definition to apply to the Amazon EFS file system. For more information on
   *          the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">Amazon EFS Resource-based policies</a>.</p>
   */
  fileSystemPolicy?: string;
}

/**
 * @public
 * <p>The proposed access control configuration for an IAM role. You can propose a
 *          configuration for a new IAM role or an existing IAM role that you own by specifying the
 *          trust policy. If the configuration is for a new IAM role, you must specify the trust
 *          policy. If the configuration is for an existing IAM role that you own and you do not
 *          propose the trust policy, the access preview uses the existing trust policy for the role.
 *          The proposed trust policy cannot be an empty string. For more information about role trust
 *          policy limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *          quotas</a>.</p>
 */
export interface IamRoleConfiguration {
  /**
   * @public
   * <p>The proposed trust policy for the IAM role.</p>
   */
  trustPolicy?: string;
}

/**
 * @public
 * <p>Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
 *             operations</a> in the grant only when the operation request includes the specified
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
 *          context</a>. You can specify only one type of encryption context. An empty map is
 *          treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.</p>
 */
export interface KmsGrantConstraints {
  /**
   * @public
   * <p>A list of key-value pairs that must match the encryption context in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operation</a> request. The grant allows the operation only when the encryption
   *          context in the request is the same as the encryption context specified in this
   *          constraint.</p>
   */
  encryptionContextEquals?: Record<string, string>;

  /**
   * @public
   * <p>A list of key-value pairs that must be included in the encryption context of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operation</a> request. The grant allows the cryptographic operation only when the
   *          encryption context in the request includes the key-value pairs specified in this
   *          constraint, although it can include additional key-value pairs.</p>
   */
  encryptionContextSubset?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const KmsGrantOperation = {
  CREATE_GRANT: "CreateGrant",
  DECRYPT: "Decrypt",
  DESCRIBE_KEY: "DescribeKey",
  ENCRYPT: "Encrypt",
  GENERATE_DATA_KEY: "GenerateDataKey",
  GENERATE_DATA_KEY_PAIR: "GenerateDataKeyPair",
  GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT: "GenerateDataKeyPairWithoutPlaintext",
  GENERATE_DATA_KEY_WITHOUT_PLAINTEXT: "GenerateDataKeyWithoutPlaintext",
  GET_PUBLIC_KEY: "GetPublicKey",
  REENCRYPT_FROM: "ReEncryptFrom",
  REENCRYPT_TO: "ReEncryptTo",
  RETIRE_GRANT: "RetireGrant",
  SIGN: "Sign",
  VERIFY: "Verify",
} as const;

/**
 * @public
 */
export type KmsGrantOperation = (typeof KmsGrantOperation)[keyof typeof KmsGrantOperation];

/**
 * @public
 * <p>A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.</p>
 */
export interface KmsGrantConfiguration {
  /**
   * @public
   * <p>A list of operations that the grant permits.</p>
   */
  operations: KmsGrantOperation[] | undefined;

  /**
   * @public
   * <p>The principal that is given permission to perform the operations that the grant
   *          permits.</p>
   */
  granteePrincipal: string | undefined;

  /**
   * @public
   * <p>The principal that is given permission to retire the grant by using <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html">RetireGrant</a> operation.</p>
   */
  retiringPrincipal?: string;

  /**
   * @public
   * <p>Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operations</a> in the grant only when the operation request includes the specified
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
   *          context</a>.</p>
   */
  constraints?: KmsGrantConstraints;

  /**
   * @public
   * <p> The Amazon Web Services account under which the grant was issued. The account is used to propose
   *          KMS grants issued by accounts other than the owner of the key.</p>
   */
  issuingAccount: string | undefined;
}

/**
 * @public
 * <p>Proposed access control configuration for a KMS key. You can propose a configuration
 *          for a new KMS key or an existing KMS key that you own by specifying the key policy and
 *          KMS grant configuration. If the configuration is for an existing key and you do not
 *          specify the key policy, the access preview uses the existing policy for the key. If the
 *          access preview is for a new resource and you do not specify the key policy, then the access
 *          preview uses the default key policy. The proposed key policy cannot be an empty string. For
 *          more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key
 *             policy</a>. For more information about key policy limits, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html">Resource
 *             quotas</a>.</p>
 *          <p/>
 */
export interface KmsKeyConfiguration {
  /**
   * @public
   * <p>Resource policy configuration for the KMS key. The only valid value for the name of
   *          the key policy is <code>default</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key
   *             policy</a>.</p>
   */
  keyPolicies?: Record<string, string>;

  /**
   * @public
   * <p>A list of proposed grant configurations for the KMS key. If the proposed grant
   *          configuration is for an existing key, the access preview uses the proposed list of grant
   *          configurations in place of the existing grants. Otherwise, the access preview uses the
   *          existing grants for the key.</p>
   */
  grants?: KmsGrantConfiguration[];
}

/**
 * @public
 * <p>The values for a manual Amazon RDS DB cluster snapshot attribute.</p>
 */
export type RdsDbClusterSnapshotAttributeValue =
  | RdsDbClusterSnapshotAttributeValue.AccountIdsMember
  | RdsDbClusterSnapshotAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace RdsDbClusterSnapshotAttributeValue {
  /**
   * @public
   * <p>The Amazon Web Services account IDs that have access to the manual Amazon RDS DB cluster snapshot. If the
   *          value <code>all</code> is specified, then the Amazon RDS DB cluster snapshot is public and can
   *          be copied or restored by all Amazon Web Services accounts.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not
   *                specify the <code>accountIds</code> in
   *                   <code>RdsDbClusterSnapshotAttributeValue</code>, then the access preview uses the
   *                existing shared <code>accountIds</code> for the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the specify the
   *                   <code>accountIds</code> in <code>RdsDbClusterSnapshotAttributeValue</code>, then
   *                the access preview considers the snapshot without any attributes.</p>
   *             </li>
   *             <li>
   *                <p>To propose deletion of existing shared <code>accountIds</code>, you can specify an
   *                empty list for <code>accountIds</code> in the
   *                   <code>RdsDbClusterSnapshotAttributeValue</code>.</p>
   *             </li>
   *          </ul>
   */
  export interface AccountIdsMember {
    accountIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountIds?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accountIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RdsDbClusterSnapshotAttributeValue, visitor: Visitor<T>): T => {
    if (value.accountIds !== undefined) return visitor.accountIds(value.accountIds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can
 *          propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot
 *          that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional
 *          KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>.</p>
 */
export interface RdsDbClusterSnapshotConfiguration {
  /**
   * @public
   * <p>The names and values of manual DB cluster snapshot attributes. Manual DB cluster
   *          snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB
   *          cluster snapshot. The only valid value for <code>AttributeName</code> for the attribute map
   *          is <code>restore</code>
   *          </p>
   */
  attributes?: Record<string, RdsDbClusterSnapshotAttributeValue>;

  /**
   * @public
   * <p>The KMS key identifier for an encrypted Amazon RDS DB cluster snapshot. The KMS key
   *          identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not
   *                specify the <code>kmsKeyId</code>, or you specify an empty string, then the access
   *                preview uses the existing <code>kmsKeyId</code> of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the specify the
   *                   <code>kmsKeyId</code>, then the access preview considers the snapshot as
   *                unencrypted.</p>
   *             </li>
   *          </ul>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * <p>The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot
 *          attributes are used to authorize other Amazon Web Services accounts to restore a manual DB
 *          snapshot.</p>
 */
export type RdsDbSnapshotAttributeValue =
  | RdsDbSnapshotAttributeValue.AccountIdsMember
  | RdsDbSnapshotAttributeValue.$UnknownMember;

/**
 * @public
 */
export namespace RdsDbSnapshotAttributeValue {
  /**
   * @public
   * <p>The Amazon Web Services account IDs that have access to the manual Amazon RDS DB snapshot. If the value
   *             <code>all</code> is specified, then the Amazon RDS DB snapshot is public and can be copied or
   *          restored by all Amazon Web Services accounts.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon RDS DB snapshot and you do not specify
   *                the <code>accountIds</code> in <code>RdsDbSnapshotAttributeValue</code>, then the
   *                access preview uses the existing shared <code>accountIds</code> for the
   *                snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the specify the
   *                   <code>accountIds</code> in <code>RdsDbSnapshotAttributeValue</code>, then the
   *                access preview considers the snapshot without any attributes.</p>
   *             </li>
   *             <li>
   *                <p>To propose deletion of an existing shared <code>accountIds</code>, you can specify
   *                an empty list for <code>accountIds</code> in the
   *                   <code>RdsDbSnapshotAttributeValue</code>.</p>
   *             </li>
   *          </ul>
   */
  export interface AccountIdsMember {
    accountIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountIds?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    accountIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RdsDbSnapshotAttributeValue, visitor: Visitor<T>): T => {
    if (value.accountIds !== undefined) return visitor.accountIds(value.accountIds);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a
 *          configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by
 *          specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>.</p>
 */
export interface RdsDbSnapshotConfiguration {
  /**
   * @public
   * <p>The names and values of manual DB snapshot attributes. Manual DB snapshot attributes are
   *          used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. The only valid
   *          value for <code>attributeName</code> for the attribute map is restore.</p>
   */
  attributes?: Record<string, RdsDbSnapshotAttributeValue>;

  /**
   * @public
   * <p>The KMS key identifier for an encrypted Amazon RDS DB snapshot. The KMS key identifier is
   *          the key ARN, key ID, alias ARN, or alias name for the KMS key.</p>
   *          <ul>
   *             <li>
   *                <p>If the configuration is for an existing Amazon RDS DB snapshot and you do not specify
   *                the <code>kmsKeyId</code>, or you specify an empty string, then the access preview
   *                uses the existing <code>kmsKeyId</code> of the snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the access preview is for a new resource and you do not specify the specify the
   *                   <code>kmsKeyId</code>, then the access preview considers the snapshot as
   *                unencrypted.</p>
   *             </li>
   *          </ul>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * <p>This configuration sets the network origin for the Amazon S3 access point or multi-region
 *          access point to <code>Internet</code>.</p>
 */
export interface InternetConfiguration {}

/**
 * @public
 * <p>The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC
 *          configuration does not apply to multi-region access points. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. </p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p> If this field is specified, this access point will only allow connections from the
   *          specified VPC ID. </p>
   */
  vpcId: string | undefined;
}

/**
 * @public
 * <p>The proposed <code>InternetConfiguration</code> or <code>VpcConfiguration</code> to
 *          apply to the Amazon S3 access point. <code>VpcConfiguration</code> does not apply to
 *          multi-region access points. You can make the access point accessible from the internet, or
 *          you can specify that all requests made through that access point must originate from a
 *          specific virtual private cloud (VPC). You can specify only one type of network
 *          configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access
 *          points</a>.</p>
 */
export type NetworkOriginConfiguration =
  | NetworkOriginConfiguration.InternetConfigurationMember
  | NetworkOriginConfiguration.VpcConfigurationMember
  | NetworkOriginConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace NetworkOriginConfiguration {
  /**
   * @public
   * <p>The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC
   *          configuration does not apply to multi-region access points. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. </p>
   */
  export interface VpcConfigurationMember {
    vpcConfiguration: VpcConfiguration;
    internetConfiguration?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The configuration for the Amazon S3 access point or multi-region access point with an
   *             <code>Internet</code> origin.</p>
   */
  export interface InternetConfigurationMember {
    vpcConfiguration?: never;
    internetConfiguration: InternetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    vpcConfiguration?: never;
    internetConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    vpcConfiguration: (value: VpcConfiguration) => T;
    internetConfiguration: (value: InternetConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: NetworkOriginConfiguration, visitor: Visitor<T>): T => {
    if (value.vpcConfiguration !== undefined) return visitor.vpcConfiguration(value.vpcConfiguration);
    if (value.internetConfiguration !== undefined) return visitor.internetConfiguration(value.internetConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The <code>PublicAccessBlock</code> configuration to apply to this Amazon S3 bucket. If the
 *          proposed configuration is for an existing Amazon S3 bucket and the configuration is not
 *          specified, the access preview uses the existing setting. If the proposed configuration is
 *          for a new bucket and the configuration is not specified, the access preview uses
 *             <code>false</code>. If the proposed configuration is for a new access point or
 *          multi-region access point and the access point BPA configuration is not specified, the
 *          access preview uses <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html">PublicAccessBlockConfiguration</a>. </p>
 */
export interface S3PublicAccessBlockConfiguration {
  /**
   * @public
   * <p> Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this
   *          bucket. </p>
   */
  ignorePublicAcls: boolean | undefined;

  /**
   * @public
   * <p> Specifies whether Amazon S3 should restrict public bucket policies for this bucket. </p>
   */
  restrictPublicBuckets: boolean | undefined;
}

/**
 * @public
 * <p>The configuration for an Amazon S3 access point or multi-region access point for the bucket.
 *          You can propose up to 10 access points or multi-region access points per bucket. If the
 *          proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses
 *          the proposed access point configuration in place of the existing access points. To propose
 *          an access point without a policy, you can provide an empty string as the access point
 *          policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>.
 *          For more information about access point policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points
 *             restrictions and limitations</a>.</p>
 */
export interface S3AccessPointConfiguration {
  /**
   * @public
   * <p>The access point or multi-region access point policy.</p>
   */
  accessPointPolicy?: string;

  /**
   * @public
   * <p>The proposed <code>S3PublicAccessBlock</code> configuration to apply to this Amazon S3 access
   *          point or multi-region access point.</p>
   */
  publicAccessBlock?: S3PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The proposed <code>Internet</code> and <code>VpcConfiguration</code> to apply to this
   *          Amazon S3 access point. <code>VpcConfiguration</code> does not apply to multi-region access
   *          points. If the access preview is for a new resource and neither is specified, the access
   *          preview uses <code>Internet</code> for the network origin. If the access preview is for an
   *          existing resource and neither is specified, the access preview uses the exiting network
   *          origin.</p>
   */
  networkOrigin?: NetworkOriginConfiguration;
}

/**
 * @public
 * <p>You specify each grantee as a type-value pair using one of these types. You can specify
 *          only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.</p>
 */
export type AclGrantee = AclGrantee.IdMember | AclGrantee.UriMember | AclGrantee.$UnknownMember;

/**
 * @public
 */
export namespace AclGrantee {
  /**
   * @public
   * <p>The value specified is the canonical user ID of an Amazon Web Services account.</p>
   */
  export interface IdMember {
    id: string;
    uri?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Used for granting permissions to a predefined group.</p>
   */
  export interface UriMember {
    id?: never;
    uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    id?: never;
    uri?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    id: (value: string) => T;
    uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AclGrantee, visitor: Visitor<T>): T => {
    if (value.id !== undefined) return visitor.id(value.id);
    if (value.uri !== undefined) return visitor.uri(value.uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AclPermission = {
  FULL_CONTROL: "FULL_CONTROL",
  READ: "READ",
  READ_ACP: "READ_ACP",
  WRITE: "WRITE",
  WRITE_ACP: "WRITE_ACP",
} as const;

/**
 * @public
 */
export type AclPermission = (typeof AclPermission)[keyof typeof AclPermission];

/**
 * @public
 * <p>A proposed access control list grant configuration for an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an
 *          ACL</a>.</p>
 */
export interface S3BucketAclGrantConfiguration {
  /**
   * @public
   * <p>The permissions being granted.</p>
   */
  permission: AclPermission | undefined;

  /**
   * @public
   * <p>The grantee to whom you’re assigning access rights.</p>
   */
  grantee: AclGrantee | undefined;
}

/**
 * @public
 * <p>Proposed access control configuration for an Amazon S3 bucket. You can propose a
 *          configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying
 *          the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and
 *          multi-region access points attached to the bucket. If the configuration is for an existing
 *          Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the
 *          existing policy attached to the bucket. If the access preview is for a new resource and you
 *          do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a
 *          policy. To propose deletion of an existing bucket policy, you can specify an empty string.
 *          For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy
 *          Examples</a>.</p>
 */
export interface S3BucketConfiguration {
  /**
   * @public
   * <p>The proposed bucket policy for the Amazon S3 bucket.</p>
   */
  bucketPolicy?: string;

  /**
   * @public
   * <p>The proposed list of ACL grants for the Amazon S3 bucket. You can propose up to 100 ACL
   *          grants per bucket. If the proposed grant configuration is for an existing bucket, the
   *          access preview uses the proposed list of grant configurations in place of the existing
   *          grants. Otherwise, the access preview uses the existing grants for the bucket.</p>
   */
  bucketAclGrants?: S3BucketAclGrantConfiguration[];

  /**
   * @public
   * <p>The proposed block public access configuration for the Amazon S3 bucket.</p>
   */
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;

  /**
   * @public
   * <p>The configuration of Amazon S3 access points or multi-region access points for the bucket.
   *          You can propose up to 10 new access points per bucket.</p>
   */
  accessPoints?: Record<string, S3AccessPointConfiguration>;
}

/**
 * @public
 * <p>The configuration for a Secrets Manager secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html">CreateSecret</a>.</p>
 *          <p>You can propose a configuration for a new secret or an existing secret that you own by
 *          specifying the secret policy and optional KMS encryption key. If the configuration is for
 *          an existing secret and you do not specify the secret policy, the access preview uses the
 *          existing policy for the secret. If the access preview is for a new resource and you do not
 *          specify the policy, the access preview assumes a secret without a policy. To propose
 *          deletion of an existing policy, you can specify an empty string. If the proposed
 *          configuration is for a new secret and you do not specify the KMS key ID, the access
 *          preview uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If you specify an empty
 *          string for the KMS key ID, the access preview uses the Amazon Web Services managed key of the
 *          Amazon Web Services account. For more information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas
 *             for Secrets Manager.</a>.</p>
 */
export interface SecretsManagerSecretConfiguration {
  /**
   * @public
   * <p>The proposed ARN, key ID, or alias of the KMS key.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The proposed resource policy defining who can access or manage the secret.</p>
   */
  secretPolicy?: string;
}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon SNS topic. You can propose a
 *          configuration for a new Amazon SNS topic or an existing Amazon SNS topic that you own by specifying
 *          the policy. If the configuration is for an existing Amazon SNS topic and you do not specify the
 *          Amazon SNS policy, then the access preview uses the existing Amazon SNS policy for the topic. If the
 *          access preview is for a new resource and you do not specify the policy, then the access
 *          preview assumes an Amazon SNS topic without a policy. To propose deletion of an existing Amazon SNS
 *          topic policy, you can specify an empty string for the Amazon SNS policy. For more information,
 *          see <a href="https://docs.aws.amazon.com/sns/latest/api/API_Topic.html">Topic</a>.</p>
 */
export interface SnsTopicConfiguration {
  /**
   * @public
   * <p>The JSON policy text that defines who can access an Amazon SNS topic. For more information,
   *          see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html">Example cases for Amazon SNS access control</a> in the <i>Amazon SNS Developer
   *             Guide</i>.</p>
   */
  topicPolicy?: string;
}

/**
 * @public
 * <p>The proposed access control configuration for an Amazon SQS queue. You can propose a
 *          configuration for a new Amazon SQS queue or an existing Amazon SQS queue that you own by specifying
 *          the Amazon SQS policy. If the configuration is for an existing Amazon SQS queue and you do not
 *          specify the Amazon SQS policy, the access preview uses the existing Amazon SQS policy for the queue.
 *          If the access preview is for a new resource and you do not specify the policy, the access
 *          preview assumes an Amazon SQS queue without a policy. To propose deletion of an existing Amazon SQS
 *          queue policy, you can specify an empty string for the Amazon SQS policy. For more information
 *          about Amazon SQS policy limits, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html">Quotas related
 *             to policies</a>.</p>
 */
export interface SqsQueueConfiguration {
  /**
   * @public
   * <p> The proposed resource policy for the Amazon SQS queue. </p>
   */
  queuePolicy?: string;
}

/**
 * @public
 * <p>Access control configuration structures for your resource. You specify the configuration
 *          as a type-value pair. You can specify only one type of access control configuration.</p>
 */
export type Configuration =
  | Configuration.EbsSnapshotMember
  | Configuration.EcrRepositoryMember
  | Configuration.EfsFileSystemMember
  | Configuration.IamRoleMember
  | Configuration.KmsKeyMember
  | Configuration.RdsDbClusterSnapshotMember
  | Configuration.RdsDbSnapshotMember
  | Configuration.S3BucketMember
  | Configuration.SecretsManagerSecretMember
  | Configuration.SnsTopicMember
  | Configuration.SqsQueueMember
  | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * @public
   * <p>The access control configuration is for an Amazon EBS volume snapshot.</p>
   */
  export interface EbsSnapshotMember {
    ebsSnapshot: EbsSnapshotConfiguration;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon ECR repository.</p>
   */
  export interface EcrRepositoryMember {
    ebsSnapshot?: never;
    ecrRepository: EcrRepositoryConfiguration;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an IAM role. </p>
   */
  export interface IamRoleMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole: IamRoleConfiguration;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon EFS file system.</p>
   */
  export interface EfsFileSystemMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem: EfsFileSystemConfiguration;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for a KMS key. </p>
   */
  export interface KmsKeyMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey: KmsKeyConfiguration;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon RDS DB cluster snapshot.</p>
   */
  export interface RdsDbClusterSnapshotMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot: RdsDbClusterSnapshotConfiguration;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon RDS DB snapshot.</p>
   */
  export interface RdsDbSnapshotMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot: RdsDbSnapshotConfiguration;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for a Secrets Manager secret.</p>
   */
  export interface SecretsManagerSecretMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret: SecretsManagerSecretConfiguration;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon S3 Bucket. </p>
   */
  export interface S3BucketMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket: S3BucketConfiguration;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon SNS topic</p>
   */
  export interface SnsTopicMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic: SnsTopicConfiguration;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The access control configuration is for an Amazon SQS queue. </p>
   */
  export interface SqsQueueMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue: SqsQueueConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ebsSnapshot?: never;
    ecrRepository?: never;
    iamRole?: never;
    efsFileSystem?: never;
    kmsKey?: never;
    rdsDbClusterSnapshot?: never;
    rdsDbSnapshot?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    snsTopic?: never;
    sqsQueue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ebsSnapshot: (value: EbsSnapshotConfiguration) => T;
    ecrRepository: (value: EcrRepositoryConfiguration) => T;
    iamRole: (value: IamRoleConfiguration) => T;
    efsFileSystem: (value: EfsFileSystemConfiguration) => T;
    kmsKey: (value: KmsKeyConfiguration) => T;
    rdsDbClusterSnapshot: (value: RdsDbClusterSnapshotConfiguration) => T;
    rdsDbSnapshot: (value: RdsDbSnapshotConfiguration) => T;
    secretsManagerSecret: (value: SecretsManagerSecretConfiguration) => T;
    s3Bucket: (value: S3BucketConfiguration) => T;
    snsTopic: (value: SnsTopicConfiguration) => T;
    sqsQueue: (value: SqsQueueConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.ebsSnapshot !== undefined) return visitor.ebsSnapshot(value.ebsSnapshot);
    if (value.ecrRepository !== undefined) return visitor.ecrRepository(value.ecrRepository);
    if (value.iamRole !== undefined) return visitor.iamRole(value.iamRole);
    if (value.efsFileSystem !== undefined) return visitor.efsFileSystem(value.efsFileSystem);
    if (value.kmsKey !== undefined) return visitor.kmsKey(value.kmsKey);
    if (value.rdsDbClusterSnapshot !== undefined) return visitor.rdsDbClusterSnapshot(value.rdsDbClusterSnapshot);
    if (value.rdsDbSnapshot !== undefined) return visitor.rdsDbSnapshot(value.rdsDbSnapshot);
    if (value.secretsManagerSecret !== undefined) return visitor.secretsManagerSecret(value.secretsManagerSecret);
    if (value.s3Bucket !== undefined) return visitor.s3Bucket(value.s3Bucket);
    if (value.snsTopic !== undefined) return visitor.snsTopic(value.snsTopic);
    if (value.sqsQueue !== undefined) return visitor.sqsQueue(value.sqsQueue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateAccessPreviewRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the account analyzer</a> used to generate the access preview. You can only create an
   *          access preview for analyzers with an <code>Account</code> type and <code>Active</code>
   *          status.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>Access control configuration for your resource that is used to generate the access
   *          preview. The access preview includes findings for external access allowed to the resource
   *          with the proposed access control configuration. The configuration must contain exactly one
   *          element.</p>
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAccessPreviewResponse {
  /**
   * @public
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetAccessPreviewRequest {
  /**
   * @public
   * <p>The unique ID for the access preview.</p>
   */
  accessPreviewId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AccessPreviewStatus = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type AccessPreviewStatus = (typeof AccessPreviewStatus)[keyof typeof AccessPreviewStatus];

/**
 * @public
 * @enum
 */
export const AccessPreviewStatusReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_CONFIGURATION: "INVALID_CONFIGURATION",
} as const;

/**
 * @public
 */
export type AccessPreviewStatusReasonCode =
  (typeof AccessPreviewStatusReasonCode)[keyof typeof AccessPreviewStatusReasonCode];

/**
 * @public
 * <p>Provides more details about the current status of the access preview. For example, if
 *          the creation of the access preview fails, a <code>Failed</code> status is returned. This
 *          failure can be due to an internal issue with the analysis or due to an invalid proposed
 *          resource configuration.</p>
 */
export interface AccessPreviewStatusReason {
  /**
   * @public
   * <p>The reason code for the current status of the access preview.</p>
   */
  code: AccessPreviewStatusReasonCode | undefined;
}

/**
 * @public
 * <p>Contains information about an access preview.</p>
 */
export interface AccessPreview {
  /**
   * @public
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of the analyzer used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>A map of resource ARNs for the proposed resource configuration.</p>
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * @public
   * <p>The time at which the access preview was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The status of the access preview.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code> - The access preview creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The access preview is complete. You can preview findings
   *                for external access to the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The access preview creation has failed.</p>
   *             </li>
   *          </ul>
   */
  status: AccessPreviewStatus | undefined;

  /**
   * @public
   * <p>Provides more details about the current status of the access preview.</p>
   *          <p>For example, if the creation of the access preview fails, a <code>Failed</code> status
   *          is returned. This failure can be due to an internal issue with the analysis or due to an
   *          invalid resource configuration.</p>
   */
  statusReason?: AccessPreviewStatusReason;
}

/**
 * @public
 */
export interface GetAccessPreviewResponse {
  /**
   * @public
   * <p>An object that contains information about the access preview.</p>
   */
  accessPreview: AccessPreview | undefined;
}

/**
 * @public
 * <p>Retrieves an analyzed resource.</p>
 */
export interface GetAnalyzedResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to retrieve information from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the resource to retrieve information about.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export type ResourceType =
  | "AWS::EC2::Snapshot"
  | "AWS::ECR::Repository"
  | "AWS::EFS::FileSystem"
  | "AWS::IAM::Role"
  | "AWS::KMS::Key"
  | "AWS::Lambda::Function"
  | "AWS::Lambda::LayerVersion"
  | "AWS::RDS::DBClusterSnapshot"
  | "AWS::RDS::DBSnapshot"
  | "AWS::S3::Bucket"
  | "AWS::SNS::Topic"
  | "AWS::SQS::Queue"
  | "AWS::SecretsManager::Secret";

/**
 * @public
 */
export type FindingStatus = "ACTIVE" | "ARCHIVED" | "RESOLVED";

/**
 * @public
 * <p>Contains details about the analyzed resource.</p>
 */
export interface AnalyzedResource {
  /**
   * @public
   * <p>The ARN of the resource that was analyzed.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The type of the resource that was analyzed.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>Indicates whether the policy that generated the finding grants public access to the
   *          resource.</p>
   */
  isPublic: boolean | undefined;

  /**
   * @public
   * <p>The actions that an external principal is granted permission to use by the policy that
   *          generated the finding.</p>
   */
  actions?: string[];

  /**
   * @public
   * <p>Indicates how the access that generated the finding is granted. This is populated for
   *          Amazon S3 bucket findings.</p>
   */
  sharedVia?: string[];

  /**
   * @public
   * <p>The current status of the finding generated from the analyzed resource.</p>
   */
  status?: FindingStatus;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * @public
   * <p>An error message.</p>
   */
  error?: string;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface GetAnalyzedResourceResponse {
  /**
   * @public
   * <p>An <code>AnalyzedResource</code> object that contains information that IAM Access Analyzer
   *          found when it analyzed the resource.</p>
   */
  resource?: AnalyzedResource;
}

/**
 * @public
 * <p>Retrieves a finding.</p>
 */
export interface GetFindingRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> that generated the finding.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The ID of the finding to retrieve.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Includes details about how the access that generated the finding is granted. This is
 *          populated for Amazon S3 bucket findings.</p>
 */
export interface FindingSourceDetail {
  /**
   * @public
   * <p>The ARN of the access point that generated the finding. The ARN format depends on
   *          whether the ARN represents an access point or a multi-region access point.</p>
   */
  accessPointArn?: string;

  /**
   * @public
   * <p>The account of the cross-account access point that generated the finding.</p>
   */
  accessPointAccount?: string;
}

/**
 * @public
 */
export type FindingSourceType = "BUCKET_ACL" | "POLICY" | "S3_ACCESS_POINT" | "S3_ACCESS_POINT_ACCOUNT";

/**
 * @public
 * <p>The source of the finding. This indicates how the access that generated the finding is
 *          granted. It is populated for Amazon S3 bucket findings.</p>
 */
export interface FindingSource {
  /**
   * @public
   * <p>Indicates the type of access that generated the finding.</p>
   */
  type: FindingSourceType | undefined;

  /**
   * @public
   * <p>Includes details about how the access that generated the finding is granted. This is
   *          populated for Amazon S3 bucket findings.</p>
   */
  detail?: FindingSourceDetail;
}

/**
 * @public
 * <p>Contains information about a finding.</p>
 */
export interface Finding {
  /**
   * @public
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The external principal that access to a resource within the zone of trust.</p>
   */
  principal?: Record<string, string>;

  /**
   * @public
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * @public
   * <p>The resource that an external principal has access to.</p>
   */
  resource?: string;

  /**
   * @public
   * <p>Indicates whether the policy that generated the finding allows public access to the
   *          resource.</p>
   */
  isPublic?: boolean;

  /**
   * @public
   * <p>The type of the resource identified in the finding.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: Record<string, string> | undefined;

  /**
   * @public
   * <p>The time at which the finding was generated.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The current status of the finding.</p>
   */
  status: FindingStatus | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * @public
   * <p>An error.</p>
   */
  error?: string;

  /**
   * @public
   * <p>The sources of the finding. This indicates how the access that generated the finding is
   *          granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface GetFindingResponse {
  /**
   * @public
   * <p>A <code>finding</code> object that contains finding details.</p>
   */
  finding?: Finding;
}

/**
 * @public
 */
export interface GetGeneratedPolicyRequest {
  /**
   * @public
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The level of detail that you want to generate. You can specify whether to generate
   *          policies with placeholders for resource ARNs for actions that support resource level
   *          granularity in policies.</p>
   *          <p>For example, in the resource section of a policy, you can receive a placeholder such as
   *             <code>"Resource":"arn:aws:s3:::$\{BucketName\}"</code> instead of <code>"*"</code>.</p>
   */
  includeResourcePlaceholders?: boolean;

  /**
   * @public
   * <p>The level of detail that you want to generate. You can specify whether to generate
   *          service-level policies. </p>
   *          <p>IAM Access Analyzer uses <code>iam:servicelastaccessed</code> to identify services that have
   *          been used recently to create this service-level template.</p>
   */
  includeServiceLevelTemplate?: boolean;
}

/**
 * @public
 * <p>Contains the text for the generated policy.</p>
 */
export interface GeneratedPolicy {
  /**
   * @public
   * <p>The text to use as the content for the new policy. The policy is created using the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.</p>
   */
  policy: string | undefined;
}

/**
 * @public
 * <p>Contains details about the CloudTrail trail being analyzed to generate a policy.</p>
 */
export interface TrailProperties {
  /**
   * @public
   * <p>Specifies the ARN of the trail. The format of a trail ARN is
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.</p>
   */
  cloudTrailArn: string | undefined;

  /**
   * @public
   * <p>A list of regions to get CloudTrail data from and analyze to generate a policy.</p>
   */
  regions?: string[];

  /**
   * @public
   * <p>Possible values are <code>true</code> or <code>false</code>. If set to
   *          <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and
   *          generate a policy.</p>
   */
  allRegions?: boolean;
}

/**
 * @public
 * <p>Contains information about CloudTrail access.</p>
 */
export interface CloudTrailProperties {
  /**
   * @public
   * <p>A <code>TrailProperties</code> object that contains settings for trail
   *          properties.</p>
   */
  trailProperties: TrailProperties[] | undefined;

  /**
   * @public
   * <p>The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events
   *          with a timestamp before this time are not considered to generate a policy.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with
   *          a timestamp after this time are not considered to generate a policy. If this is not
   *          included in the request, the default value is the current time.</p>
   */
  endTime: Date | undefined;
}

/**
 * @public
 * <p>Contains the generated policy details.</p>
 */
export interface GeneratedPolicyProperties {
  /**
   * @public
   * <p>This value is set to <code>true</code> if the generated policy contains all possible
   *          actions for a service that IAM Access Analyzer identified from the CloudTrail trail that you specified,
   *          and <code>false</code> otherwise.</p>
   */
  isComplete?: boolean;

  /**
   * @public
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   */
  principalArn: string | undefined;

  /**
   * @public
   * <p>Lists details about the <code>Trail</code> used to generated policy.</p>
   */
  cloudTrailProperties?: CloudTrailProperties;
}

/**
 * @public
 * <p>Contains the text for the generated policy and its details.</p>
 */
export interface GeneratedPolicyResult {
  /**
   * @public
   * <p>A <code>GeneratedPolicyProperties</code> object that contains properties of the
   *          generated policy.</p>
   */
  properties: GeneratedPolicyProperties | undefined;

  /**
   * @public
   * <p>The text to use as the content for the new policy. The policy is created using the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.</p>
   */
  generatedPolicies?: GeneratedPolicy[];
}

/**
 * @public
 * @enum
 */
export const JobErrorCode = {
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  RESOURCE_NOT_FOUND_ERROR: "RESOURCE_NOT_FOUND_ERROR",
  SERVICE_ERROR: "SERVICE_ERROR",
  SERVICE_QUOTA_EXCEEDED_ERROR: "SERVICE_QUOTA_EXCEEDED_ERROR",
} as const;

/**
 * @public
 */
export type JobErrorCode = (typeof JobErrorCode)[keyof typeof JobErrorCode];

/**
 * @public
 * <p>Contains the details about the policy generation error.</p>
 */
export interface JobError {
  /**
   * @public
   * <p>The job error code.</p>
   */
  code: JobErrorCode | undefined;

  /**
   * @public
   * <p>Specific information about the error. For example, which service quota was exceeded or
   *          which resource was not found.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>Contains details about the policy generation request.</p>
 */
export interface JobDetails {
  /**
   * @public
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The status of the job request.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>A timestamp of when the job was started.</p>
   */
  startedOn: Date | undefined;

  /**
   * @public
   * <p>A timestamp of when the job was completed.</p>
   */
  completedOn?: Date;

  /**
   * @public
   * <p>The job error for the policy generation request.</p>
   */
  jobError?: JobError;
}

/**
 * @public
 */
export interface GetGeneratedPolicyResponse {
  /**
   * @public
   * <p>A <code>GeneratedPolicyDetails</code> object that contains details about the generated
   *          policy.</p>
   */
  jobDetails: JobDetails | undefined;

  /**
   * @public
   * <p>A <code>GeneratedPolicyResult</code> object that contains the generated policies and
   *          associated details.</p>
   */
  generatedPolicyResult: GeneratedPolicyResult | undefined;
}

/**
 * @public
 */
export interface ListAccessPreviewFindingsRequest {
  /**
   * @public
   * <p>The unique ID for the access preview.</p>
   */
  accessPreviewId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> used to generate the access.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>Criteria to filter the returned findings.</p>
   */
  filter?: Record<string, Criterion>;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const FindingChangeType = {
  CHANGED: "CHANGED",
  NEW: "NEW",
  UNCHANGED: "UNCHANGED",
} as const;

/**
 * @public
 */
export type FindingChangeType = (typeof FindingChangeType)[keyof typeof FindingChangeType];

/**
 * @public
 * <p>An access preview finding generated by the access preview.</p>
 */
export interface AccessPreviewFinding {
  /**
   * @public
   * <p>The ID of the access preview finding. This ID uniquely identifies the element in the
   *          list of access preview findings and is not related to the finding ID in Access
   *          Analyzer.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The existing ID of the finding in IAM Access Analyzer, provided only for existing
   *          findings.</p>
   */
  existingFindingId?: string;

  /**
   * @public
   * <p>The existing status of the finding, provided only for existing findings.</p>
   */
  existingFindingStatus?: FindingStatus;

  /**
   * @public
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   */
  principal?: Record<string, string>;

  /**
   * @public
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          perform.</p>
   */
  action?: string[];

  /**
   * @public
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition?: Record<string, string>;

  /**
   * @public
   * <p>The resource that an external principal has access to. This is the resource associated
   *          with the access preview.</p>
   */
  resource?: string;

  /**
   * @public
   * <p>Indicates whether the policy that generated the finding allows public access to the
   *          resource.</p>
   */
  isPublic?: boolean;

  /**
   * @public
   * <p>The type of the resource that can be accessed in the finding.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The time at which the access preview finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>Provides context on how the access preview finding compares to existing access
   *          identified in IAM Access Analyzer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>New</code> - The finding is for newly-introduced access.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Unchanged</code> - The preview finding is an existing finding that would
   *                remain unchanged.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Changed</code> - The preview finding is an existing finding with a change in
   *                status.</p>
   *             </li>
   *          </ul>
   *          <p>For example, a <code>Changed</code> finding with preview status <code>Resolved</code>
   *          and existing status <code>Active</code> indicates the existing <code>Active</code> finding
   *          would become <code>Resolved</code> as a result of the proposed permissions change.</p>
   */
  changeType: FindingChangeType | undefined;

  /**
   * @public
   * <p>The preview status of the finding. This is what the status of the finding would be after
   *          permissions deployment. For example, a <code>Changed</code> finding with preview status
   *             <code>Resolved</code> and existing status <code>Active</code> indicates the existing
   *             <code>Active</code> finding would become <code>Resolved</code> as a result of the
   *          proposed permissions change.</p>
   */
  status: FindingStatus | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning
   *          account is the account in which the resource was created.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * @public
   * <p>An error.</p>
   */
  error?: string;

  /**
   * @public
   * <p>The sources of the finding. This indicates how the access that generated the finding is
   *          granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

/**
 * @public
 */
export interface ListAccessPreviewFindingsResponse {
  /**
   * @public
   * <p>A list of access preview findings that match the specified filter criteria.</p>
   */
  findings: AccessPreviewFinding[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAccessPreviewsRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a summary of information about an access preview.</p>
 */
export interface AccessPreviewSummary {
  /**
   * @public
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of the analyzer used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The time at which the access preview was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The status of the access preview.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code> - The access preview creation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The access preview is complete and previews the findings
   *                for external access to the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The access preview creation has failed.</p>
   *             </li>
   *          </ul>
   */
  status: AccessPreviewStatus | undefined;

  /**
   * @public
   * <p>Provides more details about the current status of the access preview. For example, if
   *          the creation of the access preview fails, a <code>Failed</code> status is returned. This
   *          failure can be due to an internal issue with the analysis or due to an invalid proposed
   *          resource configuration.</p>
   */
  statusReason?: AccessPreviewStatusReason;
}

/**
 * @public
 */
export interface ListAccessPreviewsResponse {
  /**
   * @public
   * <p>A list of access previews retrieved for the analyzer.</p>
   */
  accessPreviews: AccessPreviewSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Retrieves a list of resources that have been analyzed.</p>
 */
export interface ListAnalyzedResourcesRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to retrieve a list of analyzed resources from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains the ARN of the analyzed resource.</p>
 */
export interface AnalyzedResourceSummary {
  /**
   * @public
   * <p>The ARN of the analyzed resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * @public
   * <p>The type of resource that was analyzed.</p>
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface ListAnalyzedResourcesResponse {
  /**
   * @public
   * <p>A list of resources that were analyzed.</p>
   */
  analyzedResources: AnalyzedResourceSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export type OrderBy = "ASC" | "DESC";

/**
 * @public
 * <p>The criteria used to sort.</p>
 */
export interface SortCriteria {
  /**
   * @public
   * <p>The name of the attribute to sort on.</p>
   */
  attributeName?: string;

  /**
   * @public
   * <p>The sort order, ascending or descending.</p>
   */
  orderBy?: OrderBy;
}

/**
 * @public
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 */
export interface ListFindingsRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to retrieve findings from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>A filter to match for the findings to return.</p>
   */
  filter?: Record<string, Criterion>;

  /**
   * @public
   * <p>The sort order for the findings returned.</p>
   */
  sort?: SortCriteria;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains information about a finding.</p>
 */
export interface FindingSummary {
  /**
   * @public
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   */
  principal?: Record<string, string>;

  /**
   * @public
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * @public
   * <p>The resource that the external principal has access to.</p>
   */
  resource?: string;

  /**
   * @public
   * <p>Indicates whether the finding reports a resource that has a policy that allows public
   *          access.</p>
   */
  isPublic?: boolean;

  /**
   * @public
   * <p>The type of the resource that the external principal has access to.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: Record<string, string> | undefined;

  /**
   * @public
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the resource-based policy that generated the finding was
   *          analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the finding was most recently updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>The status of the finding.</p>
   */
  status: FindingStatus | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * @public
   * <p>The error that resulted in an Error finding.</p>
   */
  error?: string;

  /**
   * @public
   * <p>The sources of the finding. This indicates how the access that generated the finding is
   *          granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface ListFindingsResponse {
  /**
   * @public
   * <p>A list of findings retrieved from the analyzer that match the filter criteria specified,
   *          if any.</p>
   */
  findings: FindingSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPolicyGenerationsRequest {
  /**
   * @public
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy. Use
   *          this with <code>ListGeneratedPolicies</code> to filter the results to only include results
   *          for a specific principal.</p>
   */
  principalArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains details about the policy generation status and properties.</p>
 */
export interface PolicyGeneration {
  /**
   * @public
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   */
  principalArn: string | undefined;

  /**
   * @public
   * <p>The status of the policy generation request.</p>
   */
  status: JobStatus | undefined;

  /**
   * @public
   * <p>A timestamp of when the policy generation started.</p>
   */
  startedOn: Date | undefined;

  /**
   * @public
   * <p>A timestamp of when the policy generation was completed.</p>
   */
  completedOn?: Date;
}

/**
 * @public
 */
export interface ListPolicyGenerationsResponse {
  /**
   * @public
   * <p>A <code>PolicyGeneration</code> object that contains details about the generated
   *          policy.</p>
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Retrieves a list of tags applied to the specified resource.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to retrieve tags from.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags that are applied to the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Contains details about the CloudTrail trail being analyzed to generate a policy.</p>
 */
export interface Trail {
  /**
   * @public
   * <p>Specifies the ARN of the trail. The format of a trail ARN is
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.</p>
   */
  cloudTrailArn: string | undefined;

  /**
   * @public
   * <p>A list of regions to get CloudTrail data from and analyze to generate a policy.</p>
   */
  regions?: string[];

  /**
   * @public
   * <p>Possible values are <code>true</code> or <code>false</code>. If set to
   *          <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and
   *          generate a policy.</p>
   */
  allRegions?: boolean;
}

/**
 * @public
 * <p>Contains information about CloudTrail access.</p>
 */
export interface CloudTrailDetails {
  /**
   * @public
   * <p>A <code>Trail</code> object that contains settings for a trail.</p>
   */
  trails: Trail[] | undefined;

  /**
   * @public
   * <p>The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and
   *          service last accessed information.</p>
   */
  accessRole: string | undefined;

  /**
   * @public
   * <p>The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events
   *          with a timestamp before this time are not considered to generate a policy.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with
   *          a timestamp after this time are not considered to generate a policy. If this is not
   *          included in the request, the default value is the current time.</p>
   */
  endTime?: Date;
}

/**
 * @public
 * <p>Contains the ARN details about the IAM entity for which the policy is
 *          generated.</p>
 */
export interface PolicyGenerationDetails {
  /**
   * @public
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationRequest {
  /**
   * @public
   * <p>Contains the ARN of the IAM entity (user or role) for which you are generating a
   *          policy.</p>
   */
  policyGenerationDetails: PolicyGenerationDetails | undefined;

  /**
   * @public
   * <p>A <code>CloudTrailDetails</code> object that contains details about a <code>Trail</code>
   *          that you want to analyze to generate policies.</p>
   */
  cloudTrailDetails?: CloudTrailDetails;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          request. Idempotency ensures that an API request completes only once. With an idempotent
   *          request, if the original request completes successfully, the subsequent retries with the
   *          same client token return the result from the original successful request and they have no
   *          additional effect.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services
   *          SDK.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartPolicyGenerationResponse {
  /**
   * @public
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>Starts a scan of the policies applied to the specified resource.</p>
 */
export interface StartResourceScanRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to use to scan the policies applied to the specified
   *          resource.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the resource to scan.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning
   *          account is the account in which the resource was created.</p>
   */
  resourceOwnerAccount?: string;
}

/**
 * @public
 * <p>Adds a tag to the specified resource.</p>
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to add the tag to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>Removes a tag from the specified resource.</p>
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to remove the tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The key for the tag to add.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * <p>The response to the request.</p>
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export type FindingStatusUpdate = "ACTIVE" | "ARCHIVED";

/**
 * @public
 * <p>Updates findings with the new values provided in the request.</p>
 */
export interface UpdateFindingsRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> that generated the findings to update.</p>
   */
  analyzerArn: string | undefined;

  /**
   * @public
   * <p>The state represents the action to take to update the finding Status. Use
   *             <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use
   *             <code>ACTIVE</code> to change an Archived finding to an Active finding.</p>
   */
  status: FindingStatusUpdate | undefined;

  /**
   * @public
   * <p>The IDs of the findings to update.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>The ARN of the resource identified in the finding.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const Locale = {
  DE: "DE",
  EN: "EN",
  ES: "ES",
  FR: "FR",
  IT: "IT",
  JA: "JA",
  KO: "KO",
  PT_BR: "PT_BR",
  ZH_CN: "ZH_CN",
  ZH_TW: "ZH_TW",
} as const;

/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  IDENTITY_POLICY: "IDENTITY_POLICY",
  RESOURCE_POLICY: "RESOURCE_POLICY",
  SERVICE_CONTROL_POLICY: "SERVICE_CONTROL_POLICY",
} as const;

/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ValidatePolicyResourceType = {
  ROLE_TRUST: "AWS::IAM::AssumeRolePolicyDocument",
  S3_ACCESS_POINT: "AWS::S3::AccessPoint",
  S3_BUCKET: "AWS::S3::Bucket",
  S3_MULTI_REGION_ACCESS_POINT: "AWS::S3::MultiRegionAccessPoint",
  S3_OBJECT_LAMBDA_ACCESS_POINT: "AWS::S3ObjectLambda::AccessPoint",
} as const;

/**
 * @public
 */
export type ValidatePolicyResourceType = (typeof ValidatePolicyResourceType)[keyof typeof ValidatePolicyResourceType];

/**
 * @public
 */
export interface ValidatePolicyRequest {
  /**
   * @public
   * <p>The locale to use for localizing the findings.</p>
   */
  locale?: Locale;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The JSON policy document to use as the content for the policy.</p>
   */
  policyDocument: string | undefined;

  /**
   * @public
   * <p>The type of policy to validate. Identity policies grant permissions to IAM principals.
   *          Identity policies include managed and inline policies for IAM roles, users, and groups.
   *          They also include service-control policies (SCPs) that are attached to an Amazon Web Services
   *          organization, organizational unit (OU), or an account.</p>
   *          <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust
   *          policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic
   *          input such as identity policy or resource policy or a specific input such as managed policy
   *          or Amazon S3 bucket policy. </p>
   */
  policyType: PolicyType | undefined;

  /**
   * @public
   * <p>The type of resource to attach to your resource policy. Specify a value for the policy
   *          validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For
   *          example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose
   *             <code>AWS::S3::Bucket</code> for the policy validation resource type.</p>
   *          <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that
   *          apply to all resource policies. For example, to validate a resource policy to attach to a
   *          KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer
   *          will run policy checks that apply to all resource policies.</p>
   */
  validatePolicyResourceType?: ValidatePolicyResourceType;
}

/**
 * @public
 * @enum
 */
export const ValidatePolicyFindingType = {
  ERROR: "ERROR",
  SECURITY_WARNING: "SECURITY_WARNING",
  SUGGESTION: "SUGGESTION",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type ValidatePolicyFindingType = (typeof ValidatePolicyFindingType)[keyof typeof ValidatePolicyFindingType];

/**
 * @public
 * <p>A reference to a substring of a literal string in a JSON document.</p>
 */
export interface Substring {
  /**
   * @public
   * <p>The start index of the substring, starting from 0.</p>
   */
  start: number | undefined;

  /**
   * @public
   * <p>The length of the substring.</p>
   */
  length: number | undefined;
}

/**
 * @public
 * <p>A single element in a path through the JSON representation of a policy.</p>
 */
export type PathElement =
  | PathElement.IndexMember
  | PathElement.KeyMember
  | PathElement.SubstringMember
  | PathElement.ValueMember
  | PathElement.$UnknownMember;

/**
 * @public
 */
export namespace PathElement {
  /**
   * @public
   * <p>Refers to an index in a JSON array.</p>
   */
  export interface IndexMember {
    index: number;
    key?: never;
    substring?: never;
    value?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Refers to a key in a JSON object.</p>
   */
  export interface KeyMember {
    index?: never;
    key: string;
    substring?: never;
    value?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Refers to a substring of a literal string in a JSON object.</p>
   */
  export interface SubstringMember {
    index?: never;
    key?: never;
    substring: Substring;
    value?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Refers to the value associated with a given key in a JSON object.</p>
   */
  export interface ValueMember {
    index?: never;
    key?: never;
    substring?: never;
    value: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    index?: never;
    key?: never;
    substring?: never;
    value?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    index: (value: number) => T;
    key: (value: string) => T;
    substring: (value: Substring) => T;
    value: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PathElement, visitor: Visitor<T>): T => {
    if (value.index !== undefined) return visitor.index(value.index);
    if (value.key !== undefined) return visitor.key(value.key);
    if (value.substring !== undefined) return visitor.substring(value.substring);
    if (value.value !== undefined) return visitor.value(value.value);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>A position in a policy.</p>
 */
export interface Position {
  /**
   * @public
   * <p>The line of the position, starting from 1.</p>
   */
  line: number | undefined;

  /**
   * @public
   * <p>The column of the position, starting from 0.</p>
   */
  column: number | undefined;

  /**
   * @public
   * <p>The offset within the policy that corresponds to the position, starting from 0.</p>
   */
  offset: number | undefined;
}

/**
 * @public
 * <p>A span in a policy. The span consists of a start position (inclusive) and end position
 *          (exclusive).</p>
 */
export interface Span {
  /**
   * @public
   * <p>The start position of the span (inclusive).</p>
   */
  start: Position | undefined;

  /**
   * @public
   * <p>The end position of the span (exclusive).</p>
   */
  end: Position | undefined;
}

/**
 * @public
 * <p>A location in a policy that is represented as a path through the JSON representation and
 *          a corresponding span.</p>
 */
export interface Location {
  /**
   * @public
   * <p>A path in a policy, represented as a sequence of path elements.</p>
   */
  path: PathElement[] | undefined;

  /**
   * @public
   * <p>A span in a policy.</p>
   */
  span: Span | undefined;
}

/**
 * @public
 * <p>A finding in a policy. Each finding is an actionable recommendation that can be used to
 *          improve the policy.</p>
 */
export interface ValidatePolicyFinding {
  /**
   * @public
   * <p>A localized message that explains the finding and provides guidance on how to address
   *          it.</p>
   */
  findingDetails: string | undefined;

  /**
   * @public
   * <p>The impact of the finding.</p>
   *          <p>Security warnings report when the policy allows access that we consider overly
   *          permissive.</p>
   *          <p>Errors report when a part of the policy is not functional.</p>
   *          <p>Warnings report non-security issues when a policy does not conform to policy writing
   *          best practices.</p>
   *          <p>Suggestions recommend stylistic improvements in the policy that do not impact
   *          access.</p>
   */
  findingType: ValidatePolicyFindingType | undefined;

  /**
   * @public
   * <p>The issue code provides an identifier of the issue associated with this finding.</p>
   */
  issueCode: string | undefined;

  /**
   * @public
   * <p>A link to additional documentation about the type of finding.</p>
   */
  learnMoreLink: string | undefined;

  /**
   * @public
   * <p>The list of locations in the policy document that are related to the finding. The issue
   *          code provides a summary of an issue identified by the finding.</p>
   */
  locations: Location[] | undefined;
}

/**
 * @public
 */
export interface ValidatePolicyResponse {
  /**
   * @public
   * <p>The list of findings in a policy returned by IAM Access Analyzer based on its suite of policy
   *          checks.</p>
   */
  findings: ValidatePolicyFinding[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}
