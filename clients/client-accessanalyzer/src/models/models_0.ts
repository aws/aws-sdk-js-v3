// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AccessAnalyzerServiceException as __BaseException } from "./AccessAnalyzerServiceException";

/**
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
 * <p>A conflict exception error.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
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
 * <p>The criteria to use in the filter that defines the archive rule. For more information on
 *          available filter keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer
 *             filter keys</a>.</p>
 */
export interface Criterion {
  /**
   * <p>An "equals" operator to match for the filter used to create the rule.</p>
   */
  eq?: string[];

  /**
   * <p>A "not equals" operator to match for the filter used to create the rule.</p>
   */
  neq?: string[];

  /**
   * <p>A "contains" operator to match for the filter used to create the rule.</p>
   */
  contains?: string[];

  /**
   * <p>An "exists" operator to match for the filter used to create the rule. </p>
   */
  exists?: boolean;
}

/**
 * <p>Creates an archive rule.</p>
 */
export interface CreateArchiveRuleRequest {
  /**
   * <p>The name of the created analyzer.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to create.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The criteria for the rule.</p>
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * <p>Internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
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
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
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
 * <p>Service quote met error.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
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
 * <p>Throttling limit exceeded error.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
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
 * <p>Contains information about a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;

  /**
   * <p>A message about the validation exception.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "cannotParse",
  FIELD_VALIDATION_FAILED = "fieldValidationFailed",
  OTHER = "other",
  UNKNOWN_OPERATION = "unknownOperation",
}

/**
 * <p>Validation exception error.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the exception.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
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
 * <p>Deletes an archive rule.</p>
 */
export interface DeleteArchiveRuleRequest {
  /**
   * <p>The name of the analyzer that associated with the archive rule to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to delete.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * <p>Retrieves an archive rule.</p>
 */
export interface GetArchiveRuleRequest {
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to retrieve.</p>
   */
  ruleName: string | undefined;
}

/**
 * <p>Contains information about an archive rule.</p>
 */
export interface ArchiveRuleSummary {
  /**
   * <p>The name of the archive rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A filter used to define the archive rule.</p>
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * <p>The time at which the archive rule was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the archive rule was last updated.</p>
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The response to the request.</p>
 */
export interface GetArchiveRuleResponse {
  /**
   * <p>Contains information about an archive rule.</p>
   */
  archiveRule: ArchiveRuleSummary | undefined;
}

/**
 * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
 */
export interface ListArchiveRulesRequest {
  /**
   * <p>The name of the analyzer to retrieve rules from.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the request.</p>
   */
  maxResults?: number;
}

/**
 * <p>The response to the request.</p>
 */
export interface ListArchiveRulesResponse {
  /**
   * <p>A list of archive rules created for the specified analyzer.</p>
   */
  archiveRules: ArchiveRuleSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * <p>Updates the specified archive rule.</p>
 */
export interface UpdateArchiveRuleRequest {
  /**
   * <p>The name of the analyzer to update the archive rules for.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The name of the rule to update.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A filter to match for the rules to update. Only rules that match the filter are
   *          updated.</p>
   */
  filter: Record<string, Criterion> | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * <p>An criterion statement in an archive rule. Each archive rule may have multiple
 *          criteria.</p>
 */
export interface InlineArchiveRule {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The condition and values for a criterion.</p>
   */
  filter: Record<string, Criterion> | undefined;
}

export type Type = "ACCOUNT" | "ORGANIZATION";

/**
 * <p>Creates an analyzer.</p>
 */
export interface CreateAnalyzerRequest {
  /**
   * <p>The name of the analyzer to create.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>The type of analyzer to create. Only ACCOUNT and ORGANIZATION analyzers are supported.
   *          You can create only one analyzer per account per Region. You can create up to 5 analyzers
   *          per organization per Region.</p>
   */
  type: Type | string | undefined;

  /**
   * <p>Specifies the archive rules to add for the analyzer. Archive rules automatically archive
   *          findings that meet the criteria you define for the rule.</p>
   */
  archiveRules?: InlineArchiveRule[];

  /**
   * <p>The tags to apply to the analyzer.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * <p>The response to the request to create an analyzer.</p>
 */
export interface CreateAnalyzerResponse {
  /**
   * <p>The ARN of the analyzer that was created by the request.</p>
   */
  arn?: string;
}

/**
 * <p>Deletes an analyzer.</p>
 */
export interface DeleteAnalyzerRequest {
  /**
   * <p>The name of the analyzer to delete.</p>
   */
  analyzerName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

/**
 * <p>Retrieves an analyzer.</p>
 */
export interface GetAnalyzerRequest {
  /**
   * <p>The name of the analyzer retrieved.</p>
   */
  analyzerName: string | undefined;
}

export type AnalyzerStatus = "ACTIVE" | "CREATING" | "DISABLED" | "FAILED";

export type ReasonCode =
  | "AWS_SERVICE_ACCESS_DISABLED"
  | "DELEGATED_ADMINISTRATOR_DEREGISTERED"
  | "ORGANIZATION_DELETED"
  | "SERVICE_LINKED_ROLE_CREATION_FAILED";

/**
 * <p>Provides more details about the current status of the analyzer. For example, if the
 *          creation for the analyzer fails, a <code>Failed</code> status is returned. For an analyzer
 *          with organization as the type, this failure can be due to an issue with creating the
 *          service-linked roles required in the member accounts of the Amazon Web Services organization.</p>
 */
export interface StatusReason {
  /**
   * <p>The reason code for the current status of the analyzer.</p>
   */
  code: ReasonCode | string | undefined;
}

/**
 * <p>Contains information about the analyzer.</p>
 */
export interface AnalyzerSummary {
  /**
   * <p>The ARN of the analyzer.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the analyzer.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of analyzer, which corresponds to the zone of trust chosen for the
   *          analyzer.</p>
   */
  type: Type | string | undefined;

  /**
   * <p>A timestamp for the time at which the analyzer was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The resource that was most recently analyzed by the analyzer.</p>
   */
  lastResourceAnalyzed?: string;

  /**
   * <p>The time at which the most recently analyzed resource was analyzed.</p>
   */
  lastResourceAnalyzedAt?: Date;

  /**
   * <p>The tags added to the analyzer.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The status of the analyzer. An <code>Active</code> analyzer successfully monitors
   *          supported resources and generates new findings. The analyzer is <code>Disabled</code> when
   *          a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes
   *          the analyzer to stop generating new findings. The status is <code>Creating</code> when the
   *          analyzer creation is in progress and <code>Failed</code> when the analyzer creation has
   *          failed. </p>
   */
  status: AnalyzerStatus | string | undefined;

  /**
   * <p>The <code>statusReason</code> provides more details about the current status of the
   *          analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status
   *          is returned. For an analyzer with organization as the type, this failure can be due to an
   *          issue with creating the service-linked roles required in the member accounts of the Amazon Web Services
   *          organization.</p>
   */
  statusReason?: StatusReason;
}

/**
 * <p>The response to the request.</p>
 */
export interface GetAnalyzerResponse {
  /**
   * <p>An <code>AnalyzerSummary</code> object that contains information about the
   *          analyzer.</p>
   */
  analyzer: AnalyzerSummary | undefined;
}

/**
 * <p>Retrieves a list of analyzers.</p>
 */
export interface ListAnalyzersRequest {
  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The type of analyzer.</p>
   */
  type?: Type | string;
}

/**
 * <p>The response to the request.</p>
 */
export interface ListAnalyzersResponse {
  /**
   * <p>The analyzers retrieved.</p>
   */
  analyzers: AnalyzerSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * <p>Retroactively applies an archive rule.</p>
 */
export interface ApplyArchiveRuleRequest {
  /**
   * <p>The Amazon resource name (ARN) of the analyzer.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The name of the rule to apply.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export interface CancelPolicyGenerationRequest {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;
}

export interface CancelPolicyGenerationResponse {}

/**
 * <p>The proposed access control configuration for an Amazon EBS volume snapshot. You can propose
 *          a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by
 *          specifying the user IDs, groups, and optional KMS encryption key. For more information,
 *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>.</p>
 */
export interface EbsSnapshotConfiguration {
  /**
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
   * <p>The JSON repository policy text to apply to the Amazon ECR repository. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html">Private repository
   *             policy examples</a> in the <i>Amazon ECR User Guide</i>.</p>
   */
  repositoryPolicy?: string;
}

/**
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
   * <p>The JSON policy definition to apply to the Amazon EFS file system. For more information on
   *          the elements that make up a file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-manage-access-intro-resource-policies">Amazon EFS Resource-based policies</a>.</p>
   */
  fileSystemPolicy?: string;
}

/**
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
   * <p>The proposed trust policy for the IAM role.</p>
   */
  trustPolicy?: string;
}

/**
 * <p>Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
 *             operations</a> in the grant only when the operation request includes the specified
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
 *          context</a>. You can specify only one type of encryption context. An empty map is
 *          treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.</p>
 */
export interface KmsGrantConstraints {
  /**
   * <p>A list of key-value pairs that must match the encryption context in the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operation</a> request. The grant allows the operation only when the encryption
   *          context in the request is the same as the encryption context specified in this
   *          constraint.</p>
   */
  encryptionContextEquals?: Record<string, string>;

  /**
   * <p>A list of key-value pairs that must be included in the encryption context of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operation</a> request. The grant allows the cryptographic operation only when the
   *          encryption context in the request includes the key-value pairs specified in this
   *          constraint, although it can include additional key-value pairs.</p>
   */
  encryptionContextSubset?: Record<string, string>;
}

export enum KmsGrantOperation {
  CREATE_GRANT = "CreateGrant",
  DECRYPT = "Decrypt",
  DESCRIBE_KEY = "DescribeKey",
  ENCRYPT = "Encrypt",
  GENERATE_DATA_KEY = "GenerateDataKey",
  GENERATE_DATA_KEY_PAIR = "GenerateDataKeyPair",
  GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT = "GenerateDataKeyPairWithoutPlaintext",
  GENERATE_DATA_KEY_WITHOUT_PLAINTEXT = "GenerateDataKeyWithoutPlaintext",
  GET_PUBLIC_KEY = "GetPublicKey",
  REENCRYPT_FROM = "ReEncryptFrom",
  REENCRYPT_TO = "ReEncryptTo",
  RETIRE_GRANT = "RetireGrant",
  SIGN = "Sign",
  VERIFY = "Verify",
}

/**
 * <p>A proposed grant configuration for a KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a>.</p>
 */
export interface KmsGrantConfiguration {
  /**
   * <p>A list of operations that the grant permits.</p>
   */
  operations: (KmsGrantOperation | string)[] | undefined;

  /**
   * <p>The principal that is given permission to perform the operations that the grant
   *          permits.</p>
   */
  granteePrincipal: string | undefined;

  /**
   * <p>The principal that is given permission to retire the grant by using <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html">RetireGrant</a> operation.</p>
   */
  retiringPrincipal?: string;

  /**
   * <p>Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operations</a> in the grant only when the operation request includes the specified
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
   *          context</a>.</p>
   */
  constraints?: KmsGrantConstraints;

  /**
   * <p> The Amazon Web Services account under which the grant was issued. The account is used to propose
   *          KMS grants issued by accounts other than the owner of the key.</p>
   */
  issuingAccount: string | undefined;
}

/**
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
   * <p>Resource policy configuration for the KMS key. The only valid value for the name of
   *          the key policy is <code>default</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default key
   *             policy</a>.</p>
   */
  keyPolicies?: Record<string, string>;

  /**
   * <p>A list of proposed grant configurations for the KMS key. If the proposed grant
   *          configuration is for an existing key, the access preview uses the proposed list of grant
   *          configurations in place of the existing grants. Otherwise, the access preview uses the
   *          existing grants for the key.</p>
   */
  grants?: KmsGrantConfiguration[];
}

/**
 * <p>The values for a manual Amazon RDS DB cluster snapshot attribute.</p>
 */
export type RdsDbClusterSnapshotAttributeValue =
  | RdsDbClusterSnapshotAttributeValue.AccountIdsMember
  | RdsDbClusterSnapshotAttributeValue.$UnknownMember;

export namespace RdsDbClusterSnapshotAttributeValue {
  /**
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
 * <p>The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can
 *          propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot
 *          that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional
 *          KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>.</p>
 */
export interface RdsDbClusterSnapshotConfiguration {
  /**
   * <p>The names and values of manual DB cluster snapshot attributes. Manual DB cluster
   *          snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB
   *          cluster snapshot. The only valid value for <code>AttributeName</code> for the attribute map
   *          is <code>restore</code>
   *          </p>
   */
  attributes?: Record<string, RdsDbClusterSnapshotAttributeValue>;

  /**
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
 * <p>The name and values of a manual Amazon RDS DB snapshot attribute. Manual DB snapshot
 *          attributes are used to authorize other Amazon Web Services accounts to restore a manual DB
 *          snapshot.</p>
 */
export type RdsDbSnapshotAttributeValue =
  | RdsDbSnapshotAttributeValue.AccountIdsMember
  | RdsDbSnapshotAttributeValue.$UnknownMember;

export namespace RdsDbSnapshotAttributeValue {
  /**
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
 * <p>The proposed access control configuration for an Amazon RDS DB snapshot. You can propose a
 *          configuration for a new Amazon RDS DB snapshot or an Amazon RDS DB snapshot that you own by
 *          specifying the <code>RdsDbSnapshotAttributeValue</code> and optional KMS encryption key.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html">ModifyDBSnapshotAttribute</a>.</p>
 */
export interface RdsDbSnapshotConfiguration {
  /**
   * <p>The names and values of manual DB snapshot attributes. Manual DB snapshot attributes are
   *          used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. The only valid
   *          value for <code>attributeName</code> for the attribute map is restore.</p>
   */
  attributes?: Record<string, RdsDbSnapshotAttributeValue>;

  /**
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
 * <p>This configuration sets the network origin for the Amazon S3 access point or multi-region
 *          access point to <code>Internet</code>.</p>
 */
export interface InternetConfiguration {}

/**
 * <p>The proposed virtual private cloud (VPC) configuration for the Amazon S3 access point. VPC
 *          configuration does not apply to multi-region access points. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_VpcConfiguration.html">VpcConfiguration</a>. </p>
 */
export interface VpcConfiguration {
  /**
   * <p> If this field is specified, this access point will only allow connections from the
   *          specified VPC ID. </p>
   */
  vpcId: string | undefined;
}

/**
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

export namespace NetworkOriginConfiguration {
  /**
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
   * <p>The configuration for the Amazon S3 access point or multi-region access point with an
   *             <code>Internet</code> origin.</p>
   */
  export interface InternetConfigurationMember {
    vpcConfiguration?: never;
    internetConfiguration: InternetConfiguration;
    $unknown?: never;
  }

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
   * <p> Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this
   *          bucket. </p>
   */
  ignorePublicAcls: boolean | undefined;

  /**
   * <p> Specifies whether Amazon S3 should restrict public bucket policies for this bucket. </p>
   */
  restrictPublicBuckets: boolean | undefined;
}

/**
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
   * <p>The access point or multi-region access point policy.</p>
   */
  accessPointPolicy?: string;

  /**
   * <p>The proposed <code>S3PublicAccessBlock</code> configuration to apply to this Amazon S3 access
   *          point or multi-region access point.</p>
   */
  publicAccessBlock?: S3PublicAccessBlockConfiguration;

  /**
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
 * <p>You specify each grantee as a type-value pair using one of these types. You can specify
 *          only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.</p>
 */
export type AclGrantee = AclGrantee.IdMember | AclGrantee.UriMember | AclGrantee.$UnknownMember;

export namespace AclGrantee {
  /**
   * <p>The value specified is the canonical user ID of an Amazon Web Services account.</p>
   */
  export interface IdMember {
    id: string;
    uri?: never;
    $unknown?: never;
  }

  /**
   * <p>Used for granting permissions to a predefined group.</p>
   */
  export interface UriMember {
    id?: never;
    uri: string;
    $unknown?: never;
  }

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

export enum AclPermission {
  FULL_CONTROL = "FULL_CONTROL",
  READ = "READ",
  READ_ACP = "READ_ACP",
  WRITE = "WRITE",
  WRITE_ACP = "WRITE_ACP",
}

/**
 * <p>A proposed access control list grant configuration for an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an
 *          ACL</a>.</p>
 */
export interface S3BucketAclGrantConfiguration {
  /**
   * <p>The permissions being granted.</p>
   */
  permission: AclPermission | string | undefined;

  /**
   * <p>The grantee to whom you’re assigning access rights.</p>
   */
  grantee: AclGrantee | undefined;
}

/**
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
   * <p>The proposed bucket policy for the Amazon S3 bucket.</p>
   */
  bucketPolicy?: string;

  /**
   * <p>The proposed list of ACL grants for the Amazon S3 bucket. You can propose up to 100 ACL
   *          grants per bucket. If the proposed grant configuration is for an existing bucket, the
   *          access preview uses the proposed list of grant configurations in place of the existing
   *          grants. Otherwise, the access preview uses the existing grants for the bucket.</p>
   */
  bucketAclGrants?: S3BucketAclGrantConfiguration[];

  /**
   * <p>The proposed block public access configuration for the Amazon S3 bucket.</p>
   */
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;

  /**
   * <p>The configuration of Amazon S3 access points or multi-region access points for the bucket.
   *          You can propose up to 10 new access points per bucket.</p>
   */
  accessPoints?: Record<string, S3AccessPointConfiguration>;
}

/**
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
   * <p>The proposed ARN, key ID, or alias of the KMS key.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The proposed resource policy defining who can access or manage the secret.</p>
   */
  secretPolicy?: string;
}

/**
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
   * <p>The JSON policy text that defines who can access an Amazon SNS topic. For more information,
   *          see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html">Example cases for Amazon SNS access control</a> in the <i>Amazon SNS Developer
   *             Guide</i>.</p>
   */
  topicPolicy?: string;
}

/**
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
   * <p> The proposed resource policy for the Amazon SQS queue. </p>
   */
  queuePolicy?: string;
}

/**
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

export namespace Configuration {
  /**
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

export interface CreateAccessPreviewRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the account analyzer</a> used to generate the access preview. You can only create an
   *          access preview for analyzers with an <code>Account</code> type and <code>Active</code>
   *          status.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>Access control configuration for your resource that is used to generate the access
   *          preview. The access preview includes findings for external access allowed to the resource
   *          with the proposed access control configuration. The configuration must contain exactly one
   *          element.</p>
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export interface CreateAccessPreviewResponse {
  /**
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;
}

export interface GetAccessPreviewRequest {
  /**
   * <p>The unique ID for the access preview.</p>
   */
  accessPreviewId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;
}

export enum AccessPreviewStatus {
  COMPLETED = "COMPLETED",
  CREATING = "CREATING",
  FAILED = "FAILED",
}

export enum AccessPreviewStatusReasonCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_CONFIGURATION = "INVALID_CONFIGURATION",
}

/**
 * <p>Provides more details about the current status of the access preview. For example, if
 *          the creation of the access preview fails, a <code>Failed</code> status is returned. This
 *          failure can be due to an internal issue with the analysis or due to an invalid proposed
 *          resource configuration.</p>
 */
export interface AccessPreviewStatusReason {
  /**
   * <p>The reason code for the current status of the access preview.</p>
   */
  code: AccessPreviewStatusReasonCode | string | undefined;
}

/**
 * <p>Contains information about an access preview.</p>
 */
export interface AccessPreview {
  /**
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;

  /**
   * <p>The ARN of the analyzer used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>A map of resource ARNs for the proposed resource configuration.</p>
   */
  configurations: Record<string, Configuration> | undefined;

  /**
   * <p>The time at which the access preview was created.</p>
   */
  createdAt: Date | undefined;

  /**
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
  status: AccessPreviewStatus | string | undefined;

  /**
   * <p>Provides more details about the current status of the access preview.</p>
   *          <p>For example, if the creation of the access preview fails, a <code>Failed</code> status
   *          is returned. This failure can be due to an internal issue with the analysis or due to an
   *          invalid resource configuration.</p>
   */
  statusReason?: AccessPreviewStatusReason;
}

export interface GetAccessPreviewResponse {
  /**
   * <p>An object that contains information about the access preview.</p>
   */
  accessPreview: AccessPreview | undefined;
}

/**
 * <p>Retrieves an analyzed resource.</p>
 */
export interface GetAnalyzedResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to retrieve information from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ARN of the resource to retrieve information about.</p>
   */
  resourceArn: string | undefined;
}

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

export type FindingStatus = "ACTIVE" | "ARCHIVED" | "RESOLVED";

/**
 * <p>Contains details about the analyzed resource.</p>
 */
export interface AnalyzedResource {
  /**
   * <p>The ARN of the resource that was analyzed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of the resource that was analyzed.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>Indicates whether the policy that generated the finding grants public access to the
   *          resource.</p>
   */
  isPublic: boolean | undefined;

  /**
   * <p>The actions that an external principal is granted permission to use by the policy that
   *          generated the finding.</p>
   */
  actions?: string[];

  /**
   * <p>Indicates how the access that generated the finding is granted. This is populated for
   *          Amazon S3 bucket findings.</p>
   */
  sharedVia?: string[];

  /**
   * <p>The current status of the finding generated from the analyzed resource.</p>
   */
  status?: FindingStatus | string;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error message.</p>
   */
  error?: string;
}

/**
 * <p>The response to the request.</p>
 */
export interface GetAnalyzedResourceResponse {
  /**
   * <p>An <code>AnalyzedResource</code> object that contains information that IAM Access Analyzer
   *          found when it analyzed the resource.</p>
   */
  resource?: AnalyzedResource;
}

/**
 * <p>Retrieves a finding.</p>
 */
export interface GetFindingRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> that generated the finding.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ID of the finding to retrieve.</p>
   */
  id: string | undefined;
}

/**
 * <p>Includes details about how the access that generated the finding is granted. This is
 *          populated for Amazon S3 bucket findings.</p>
 */
export interface FindingSourceDetail {
  /**
   * <p>The ARN of the access point that generated the finding. The ARN format depends on
   *          whether the ARN represents an access point or a multi-region access point.</p>
   */
  accessPointArn?: string;

  /**
   * <p>The account of the cross-account access point that generated the finding.</p>
   */
  accessPointAccount?: string;
}

export type FindingSourceType = "BUCKET_ACL" | "POLICY" | "S3_ACCESS_POINT" | "S3_ACCESS_POINT_ACCOUNT";

/**
 * <p>The source of the finding. This indicates how the access that generated the finding is
 *          granted. It is populated for Amazon S3 bucket findings.</p>
 */
export interface FindingSource {
  /**
   * <p>Indicates the type of access that generated the finding.</p>
   */
  type: FindingSourceType | string | undefined;

  /**
   * <p>Includes details about how the access that generated the finding is granted. This is
   *          populated for Amazon S3 bucket findings.</p>
   */
  detail?: FindingSourceDetail;
}

/**
 * <p>Contains information about a finding.</p>
 */
export interface Finding {
  /**
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * <p>The external principal that access to a resource within the zone of trust.</p>
   */
  principal?: Record<string, string>;

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * <p>The resource that an external principal has access to.</p>
   */
  resource?: string;

  /**
   * <p>Indicates whether the policy that generated the finding allows public access to the
   *          resource.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The type of the resource identified in the finding.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: Record<string, string> | undefined;

  /**
   * <p>The time at which the finding was generated.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource was analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error.</p>
   */
  error?: string;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is
   *          granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

/**
 * <p>The response to the request.</p>
 */
export interface GetFindingResponse {
  /**
   * <p>A <code>finding</code> object that contains finding details.</p>
   */
  finding?: Finding;
}

export interface GetGeneratedPolicyRequest {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The level of detail that you want to generate. You can specify whether to generate
   *          policies with placeholders for resource ARNs for actions that support resource level
   *          granularity in policies.</p>
   *          <p>For example, in the resource section of a policy, you can receive a placeholder such as
   *             <code>"Resource":"arn:aws:s3:::${BucketName}"</code> instead of <code>"*"</code>.</p>
   */
  includeResourcePlaceholders?: boolean;

  /**
   * <p>The level of detail that you want to generate. You can specify whether to generate
   *          service-level policies. </p>
   *          <p>IAM Access Analyzer uses <code>iam:servicelastaccessed</code> to identify services that have
   *          been used recently to create this service-level template.</p>
   */
  includeServiceLevelTemplate?: boolean;
}

/**
 * <p>Contains the text for the generated policy.</p>
 */
export interface GeneratedPolicy {
  /**
   * <p>The text to use as the content for the new policy. The policy is created using the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.</p>
   */
  policy: string | undefined;
}

/**
 * <p>Contains details about the CloudTrail trail being analyzed to generate a policy.</p>
 */
export interface TrailProperties {
  /**
   * <p>Specifies the ARN of the trail. The format of a trail ARN is
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.</p>
   */
  cloudTrailArn: string | undefined;

  /**
   * <p>A list of regions to get CloudTrail data from and analyze to generate a policy.</p>
   */
  regions?: string[];

  /**
   * <p>Possible values are <code>true</code> or <code>false</code>. If set to
   *          <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and
   *          generate a policy.</p>
   */
  allRegions?: boolean;
}

/**
 * <p>Contains information about CloudTrail access.</p>
 */
export interface CloudTrailProperties {
  /**
   * <p>A <code>TrailProperties</code> object that contains settings for trail
   *          properties.</p>
   */
  trailProperties: TrailProperties[] | undefined;

  /**
   * <p>The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events
   *          with a timestamp before this time are not considered to generate a policy.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with
   *          a timestamp after this time are not considered to generate a policy. If this is not
   *          included in the request, the default value is the current time.</p>
   */
  endTime: Date | undefined;
}

/**
 * <p>Contains the generated policy details.</p>
 */
export interface GeneratedPolicyProperties {
  /**
   * <p>This value is set to <code>true</code> if the generated policy contains all possible
   *          actions for a service that IAM Access Analyzer identified from the CloudTrail trail that you specified,
   *          and <code>false</code> otherwise.</p>
   */
  isComplete?: boolean;

  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   */
  principalArn: string | undefined;

  /**
   * <p>Lists details about the <code>Trail</code> used to generated policy.</p>
   */
  cloudTrailProperties?: CloudTrailProperties;
}

/**
 * <p>Contains the text for the generated policy and its details.</p>
 */
export interface GeneratedPolicyResult {
  /**
   * <p>A <code>GeneratedPolicyProperties</code> object that contains properties of the
   *          generated policy.</p>
   */
  properties: GeneratedPolicyProperties | undefined;

  /**
   * <p>The text to use as the content for the new policy. The policy is created using the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html">CreatePolicy</a> action.</p>
   */
  generatedPolicies?: GeneratedPolicy[];
}

export enum JobErrorCode {
  AUTHORIZATION_ERROR = "AUTHORIZATION_ERROR",
  RESOURCE_NOT_FOUND_ERROR = "RESOURCE_NOT_FOUND_ERROR",
  SERVICE_ERROR = "SERVICE_ERROR",
  SERVICE_QUOTA_EXCEEDED_ERROR = "SERVICE_QUOTA_EXCEEDED_ERROR",
}

/**
 * <p>Contains the details about the policy generation error.</p>
 */
export interface JobError {
  /**
   * <p>The job error code.</p>
   */
  code: JobErrorCode | string | undefined;

  /**
   * <p>Specific information about the error. For example, which service quota was exceeded or
   *          which resource was not found.</p>
   */
  message: string | undefined;
}

export enum JobStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Contains details about the policy generation request.</p>
 */
export interface JobDetails {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The status of the job request.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>A timestamp of when the job was started.</p>
   */
  startedOn: Date | undefined;

  /**
   * <p>A timestamp of when the job was completed.</p>
   */
  completedOn?: Date;

  /**
   * <p>The job error for the policy generation request.</p>
   */
  jobError?: JobError;
}

export interface GetGeneratedPolicyResponse {
  /**
   * <p>A <code>GeneratedPolicyDetails</code> object that contains details about the generated
   *          policy.</p>
   */
  jobDetails: JobDetails | undefined;

  /**
   * <p>A <code>GeneratedPolicyResult</code> object that contains the generated policies and
   *          associated details.</p>
   */
  generatedPolicyResult: GeneratedPolicyResult | undefined;
}

export interface ListAccessPreviewFindingsRequest {
  /**
   * <p>The unique ID for the access preview.</p>
   */
  accessPreviewId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> used to generate the access.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>Criteria to filter the returned findings.</p>
   */
  filter?: Record<string, Criterion>;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export enum FindingChangeType {
  CHANGED = "CHANGED",
  NEW = "NEW",
  UNCHANGED = "UNCHANGED",
}

/**
 * <p>An access preview finding generated by the access preview.</p>
 */
export interface AccessPreviewFinding {
  /**
   * <p>The ID of the access preview finding. This ID uniquely identifies the element in the
   *          list of access preview findings and is not related to the finding ID in Access
   *          Analyzer.</p>
   */
  id: string | undefined;

  /**
   * <p>The existing ID of the finding in IAM Access Analyzer, provided only for existing
   *          findings.</p>
   */
  existingFindingId?: string;

  /**
   * <p>The existing status of the finding, provided only for existing findings.</p>
   */
  existingFindingStatus?: FindingStatus | string;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   */
  principal?: Record<string, string>;

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          perform.</p>
   */
  action?: string[];

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition?: Record<string, string>;

  /**
   * <p>The resource that an external principal has access to. This is the resource associated
   *          with the access preview.</p>
   */
  resource?: string;

  /**
   * <p>Indicates whether the policy that generated the finding allows public access to the
   *          resource.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The type of the resource that can be accessed in the finding.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The time at which the access preview finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
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
  changeType: FindingChangeType | string | undefined;

  /**
   * <p>The preview status of the finding. This is what the status of the finding would be after
   *          permissions deployment. For example, a <code>Changed</code> finding with preview status
   *             <code>Resolved</code> and existing status <code>Active</code> indicates the existing
   *             <code>Active</code> finding would become <code>Resolved</code> as a result of the
   *          proposed permissions change.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning
   *          account is the account in which the resource was created.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>An error.</p>
   */
  error?: string;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is
   *          granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

export interface ListAccessPreviewFindingsResponse {
  /**
   * <p>A list of access preview findings that match the specified filter criteria.</p>
   */
  findings: AccessPreviewFinding[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export interface ListAccessPreviewsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains a summary of information about an access preview.</p>
 */
export interface AccessPreviewSummary {
  /**
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;

  /**
   * <p>The ARN of the analyzer used to generate the access preview.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The time at which the access preview was created.</p>
   */
  createdAt: Date | undefined;

  /**
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
  status: AccessPreviewStatus | string | undefined;

  /**
   * <p>Provides more details about the current status of the access preview. For example, if
   *          the creation of the access preview fails, a <code>Failed</code> status is returned. This
   *          failure can be due to an internal issue with the analysis or due to an invalid proposed
   *          resource configuration.</p>
   */
  statusReason?: AccessPreviewStatusReason;
}

export interface ListAccessPreviewsResponse {
  /**
   * <p>A list of access previews retrieved for the analyzer.</p>
   */
  accessPreviews: AccessPreviewSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * <p>Retrieves a list of resources that have been analyzed.</p>
 */
export interface ListAnalyzedResourcesRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to retrieve a list of analyzed resources from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains the ARN of the analyzed resource.</p>
 */
export interface AnalyzedResourceSummary {
  /**
   * <p>The ARN of the analyzed resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The type of resource that was analyzed.</p>
   */
  resourceType: ResourceType | string | undefined;
}

/**
 * <p>The response to the request.</p>
 */
export interface ListAnalyzedResourcesResponse {
  /**
   * <p>A list of resources that were analyzed.</p>
   */
  analyzedResources: AnalyzedResourceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export type OrderBy = "ASC" | "DESC";

/**
 * <p>The criteria used to sort.</p>
 */
export interface SortCriteria {
  /**
   * <p>The name of the attribute to sort on.</p>
   */
  attributeName?: string;

  /**
   * <p>The sort order, ascending or descending.</p>
   */
  orderBy?: OrderBy | string;
}

/**
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 */
export interface ListFindingsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to retrieve findings from.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>A filter to match for the findings to return.</p>
   */
  filter?: Record<string, Criterion>;

  /**
   * <p>The sort order for the findings returned.</p>
   */
  sort?: SortCriteria;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains information about a finding.</p>
 */
export interface FindingSummary {
  /**
   * <p>The ID of the finding.</p>
   */
  id: string | undefined;

  /**
   * <p>The external principal that has access to a resource within the zone of trust.</p>
   */
  principal?: Record<string, string>;

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          use.</p>
   */
  action?: string[];

  /**
   * <p>The resource that the external principal has access to.</p>
   */
  resource?: string;

  /**
   * <p>Indicates whether the finding reports a resource that has a policy that allows public
   *          access.</p>
   */
  isPublic?: boolean;

  /**
   * <p>The type of the resource that the external principal has access to.</p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition: Record<string, string> | undefined;

  /**
   * <p>The time at which the finding was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the resource-based policy that generated the finding was
   *          analyzed.</p>
   */
  analyzedAt: Date | undefined;

  /**
   * <p>The time at which the finding was most recently updated.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource.</p>
   */
  resourceOwnerAccount: string | undefined;

  /**
   * <p>The error that resulted in an Error finding.</p>
   */
  error?: string;

  /**
   * <p>The sources of the finding. This indicates how the access that generated the finding is
   *          granted. It is populated for Amazon S3 bucket findings.</p>
   */
  sources?: FindingSource[];
}

/**
 * <p>The response to the request.</p>
 */
export interface ListFindingsResponse {
  /**
   * <p>A list of findings retrieved from the analyzer that match the filter criteria specified,
   *          if any.</p>
   */
  findings: FindingSummary[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

export interface ListPolicyGenerationsRequest {
  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy. Use
   *          this with <code>ListGeneratedPolicies</code> to filter the results to only include results
   *          for a specific principal.</p>
   */
  principalArn?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains details about the policy generation status and properties.</p>
 */
export interface PolicyGeneration {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   */
  principalArn: string | undefined;

  /**
   * <p>The status of the policy generation request.</p>
   */
  status: JobStatus | string | undefined;

  /**
   * <p>A timestamp of when the policy generation started.</p>
   */
  startedOn: Date | undefined;

  /**
   * <p>A timestamp of when the policy generation was completed.</p>
   */
  completedOn?: Date;
}

export interface ListPolicyGenerationsResponse {
  /**
   * <p>A <code>PolicyGeneration</code> object that contains details about the generated
   *          policy.</p>
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * <p>Retrieves a list of tags applied to the specified resource.</p>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to retrieve tags from.</p>
   */
  resourceArn: string | undefined;
}

/**
 * <p>The response to the request.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are applied to the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Contains details about the CloudTrail trail being analyzed to generate a policy.</p>
 */
export interface Trail {
  /**
   * <p>Specifies the ARN of the trail. The format of a trail ARN is
   *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>.</p>
   */
  cloudTrailArn: string | undefined;

  /**
   * <p>A list of regions to get CloudTrail data from and analyze to generate a policy.</p>
   */
  regions?: string[];

  /**
   * <p>Possible values are <code>true</code> or <code>false</code>. If set to
   *          <code>true</code>, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and
   *          generate a policy.</p>
   */
  allRegions?: boolean;
}

/**
 * <p>Contains information about CloudTrail access.</p>
 */
export interface CloudTrailDetails {
  /**
   * <p>A <code>Trail</code> object that contains settings for a trail.</p>
   */
  trails: Trail[] | undefined;

  /**
   * <p>The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and
   *          service last accessed information.</p>
   */
  accessRole: string | undefined;

  /**
   * <p>The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events
   *          with a timestamp before this time are not considered to generate a policy.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with
   *          a timestamp after this time are not considered to generate a policy. If this is not
   *          included in the request, the default value is the current time.</p>
   */
  endTime?: Date;
}

/**
 * <p>Contains the ARN details about the IAM entity for which the policy is
 *          generated.</p>
 */
export interface PolicyGenerationDetails {
  /**
   * <p>The ARN of the IAM entity (user or role) for which you are generating a policy.</p>
   */
  principalArn: string | undefined;
}

export interface StartPolicyGenerationRequest {
  /**
   * <p>Contains the ARN of the IAM entity (user or role) for which you are generating a
   *          policy.</p>
   */
  policyGenerationDetails: PolicyGenerationDetails | undefined;

  /**
   * <p>A <code>CloudTrailDetails</code> object that contains details about a <code>Trail</code>
   *          that you want to analyze to generate policies.</p>
   */
  cloudTrailDetails?: CloudTrailDetails;

  /**
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

export interface StartPolicyGenerationResponse {
  /**
   * <p>The <code>JobId</code> that is returned by the <code>StartPolicyGeneration</code>
   *          operation. The <code>JobId</code> can be used with <code>GetGeneratedPolicy</code> to
   *          retrieve the generated policies or used with <code>CancelPolicyGeneration</code> to cancel
   *          the policy generation request.</p>
   */
  jobId: string | undefined;
}

/**
 * <p>Starts a scan of the policies applied to the specified resource.</p>
 */
export interface StartResourceScanRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> to use to scan the policies applied to the specified
   *          resource.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The ARN of the resource to scan.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning
   *          account is the account in which the resource was created.</p>
   */
  resourceOwnerAccount?: string;
}

/**
 * <p>Adds a tag to the specified resource.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to add the tag to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The response to the request.</p>
 */
export interface TagResourceResponse {}

/**
 * <p>Removes a tag from the specified resource.</p>
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to remove the tag from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The key for the tag to add.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>The response to the request.</p>
 */
export interface UntagResourceResponse {}

export type FindingStatusUpdate = "ACTIVE" | "ARCHIVED";

/**
 * <p>Updates findings with the new values provided in the request.</p>
 */
export interface UpdateFindingsRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of
   *             the analyzer</a> that generated the findings to update.</p>
   */
  analyzerArn: string | undefined;

  /**
   * <p>The state represents the action to take to update the finding Status. Use
   *             <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use
   *             <code>ACTIVE</code> to change an Archived finding to an Active finding.</p>
   */
  status: FindingStatusUpdate | string | undefined;

  /**
   * <p>The IDs of the findings to update.</p>
   */
  ids?: string[];

  /**
   * <p>The ARN of the resource identified in the finding.</p>
   */
  resourceArn?: string;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export enum Locale {
  DE = "DE",
  EN = "EN",
  ES = "ES",
  FR = "FR",
  IT = "IT",
  JA = "JA",
  KO = "KO",
  PT_BR = "PT_BR",
  ZH_CN = "ZH_CN",
  ZH_TW = "ZH_TW",
}

export enum PolicyType {
  IDENTITY_POLICY = "IDENTITY_POLICY",
  RESOURCE_POLICY = "RESOURCE_POLICY",
  SERVICE_CONTROL_POLICY = "SERVICE_CONTROL_POLICY",
}

export enum ValidatePolicyResourceType {
  ROLE_TRUST = "AWS::IAM::AssumeRolePolicyDocument",
  S3_ACCESS_POINT = "AWS::S3::AccessPoint",
  S3_BUCKET = "AWS::S3::Bucket",
  S3_MULTI_REGION_ACCESS_POINT = "AWS::S3::MultiRegionAccessPoint",
  S3_OBJECT_LAMBDA_ACCESS_POINT = "AWS::S3ObjectLambda::AccessPoint",
}

export interface ValidatePolicyRequest {
  /**
   * <p>The locale to use for localizing the findings.</p>
   */
  locale?: Locale | string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The JSON policy document to use as the content for the policy.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>The type of policy to validate. Identity policies grant permissions to IAM principals.
   *          Identity policies include managed and inline policies for IAM roles, users, and groups.
   *          They also include service-control policies (SCPs) that are attached to an Amazon Web Services
   *          organization, organizational unit (OU), or an account.</p>
   *          <p>Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust
   *          policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic
   *          input such as identity policy or resource policy or a specific input such as managed policy
   *          or Amazon S3 bucket policy. </p>
   */
  policyType: PolicyType | string | undefined;

  /**
   * <p>The type of resource to attach to your resource policy. Specify a value for the policy
   *          validation resource type only if the policy type is <code>RESOURCE_POLICY</code>. For
   *          example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose
   *             <code>AWS::S3::Bucket</code> for the policy validation resource type.</p>
   *          <p>For resource types not supported as valid values, IAM Access Analyzer runs policy checks that
   *          apply to all resource policies. For example, to validate a resource policy to attach to a
   *          KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer
   *          will run policy checks that apply to all resource policies.</p>
   */
  validatePolicyResourceType?: ValidatePolicyResourceType | string;
}

export enum ValidatePolicyFindingType {
  ERROR = "ERROR",
  SECURITY_WARNING = "SECURITY_WARNING",
  SUGGESTION = "SUGGESTION",
  WARNING = "WARNING",
}

/**
 * <p>A reference to a substring of a literal string in a JSON document.</p>
 */
export interface Substring {
  /**
   * <p>The start index of the substring, starting from 0.</p>
   */
  start: number | undefined;

  /**
   * <p>The length of the substring.</p>
   */
  length: number | undefined;
}

/**
 * <p>A single element in a path through the JSON representation of a policy.</p>
 */
export type PathElement =
  | PathElement.IndexMember
  | PathElement.KeyMember
  | PathElement.SubstringMember
  | PathElement.ValueMember
  | PathElement.$UnknownMember;

export namespace PathElement {
  /**
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
   * <p>Refers to the value associated with a given key in a JSON object.</p>
   */
  export interface ValueMember {
    index?: never;
    key?: never;
    substring?: never;
    value: string;
    $unknown?: never;
  }

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
 * <p>A position in a policy.</p>
 */
export interface Position {
  /**
   * <p>The line of the position, starting from 1.</p>
   */
  line: number | undefined;

  /**
   * <p>The column of the position, starting from 0.</p>
   */
  column: number | undefined;

  /**
   * <p>The offset within the policy that corresponds to the position, starting from 0.</p>
   */
  offset: number | undefined;
}

/**
 * <p>A span in a policy. The span consists of a start position (inclusive) and end position
 *          (exclusive).</p>
 */
export interface Span {
  /**
   * <p>The start position of the span (inclusive).</p>
   */
  start: Position | undefined;

  /**
   * <p>The end position of the span (exclusive).</p>
   */
  end: Position | undefined;
}

/**
 * <p>A location in a policy that is represented as a path through the JSON representation and
 *          a corresponding span.</p>
 */
export interface Location {
  /**
   * <p>A path in a policy, represented as a sequence of path elements.</p>
   */
  path: PathElement[] | undefined;

  /**
   * <p>A span in a policy.</p>
   */
  span: Span | undefined;
}

/**
 * <p>A finding in a policy. Each finding is an actionable recommendation that can be used to
 *          improve the policy.</p>
 */
export interface ValidatePolicyFinding {
  /**
   * <p>A localized message that explains the finding and provides guidance on how to address
   *          it.</p>
   */
  findingDetails: string | undefined;

  /**
   * <p>The impact of the finding.</p>
   *          <p>Security warnings report when the policy allows access that we consider overly
   *          permissive.</p>
   *          <p>Errors report when a part of the policy is not functional.</p>
   *          <p>Warnings report non-security issues when a policy does not conform to policy writing
   *          best practices.</p>
   *          <p>Suggestions recommend stylistic improvements in the policy that do not impact
   *          access.</p>
   */
  findingType: ValidatePolicyFindingType | string | undefined;

  /**
   * <p>The issue code provides an identifier of the issue associated with this finding.</p>
   */
  issueCode: string | undefined;

  /**
   * <p>A link to additional documentation about the type of finding.</p>
   */
  learnMoreLink: string | undefined;

  /**
   * <p>The list of locations in the policy document that are related to the finding. The issue
   *          code provides a summary of an issue identified by the finding.</p>
   */
  locations: Location[] | undefined;
}

export interface ValidatePolicyResponse {
  /**
   * <p>The list of findings in a policy returned by IAM Access Analyzer based on its suite of policy
   *          checks.</p>
   */
  findings: ValidatePolicyFinding[] | undefined;

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const CriterionFilterSensitiveLog = (obj: Criterion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateArchiveRuleRequestFilterSensitiveLog = (obj: CreateArchiveRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteArchiveRuleRequestFilterSensitiveLog = (obj: DeleteArchiveRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetArchiveRuleRequestFilterSensitiveLog = (obj: GetArchiveRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveRuleSummaryFilterSensitiveLog = (obj: ArchiveRuleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetArchiveRuleResponseFilterSensitiveLog = (obj: GetArchiveRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListArchiveRulesRequestFilterSensitiveLog = (obj: ListArchiveRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListArchiveRulesResponseFilterSensitiveLog = (obj: ListArchiveRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateArchiveRuleRequestFilterSensitiveLog = (obj: UpdateArchiveRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InlineArchiveRuleFilterSensitiveLog = (obj: InlineArchiveRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAnalyzerRequestFilterSensitiveLog = (obj: CreateAnalyzerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAnalyzerResponseFilterSensitiveLog = (obj: CreateAnalyzerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnalyzerRequestFilterSensitiveLog = (obj: DeleteAnalyzerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnalyzerRequestFilterSensitiveLog = (obj: GetAnalyzerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatusReasonFilterSensitiveLog = (obj: StatusReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalyzerSummaryFilterSensitiveLog = (obj: AnalyzerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnalyzerResponseFilterSensitiveLog = (obj: GetAnalyzerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnalyzersRequestFilterSensitiveLog = (obj: ListAnalyzersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnalyzersResponseFilterSensitiveLog = (obj: ListAnalyzersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplyArchiveRuleRequestFilterSensitiveLog = (obj: ApplyArchiveRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelPolicyGenerationRequestFilterSensitiveLog = (obj: CancelPolicyGenerationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelPolicyGenerationResponseFilterSensitiveLog = (obj: CancelPolicyGenerationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsSnapshotConfigurationFilterSensitiveLog = (obj: EbsSnapshotConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcrRepositoryConfigurationFilterSensitiveLog = (obj: EcrRepositoryConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EfsFileSystemConfigurationFilterSensitiveLog = (obj: EfsFileSystemConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamRoleConfigurationFilterSensitiveLog = (obj: IamRoleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KmsGrantConstraintsFilterSensitiveLog = (obj: KmsGrantConstraints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KmsGrantConfigurationFilterSensitiveLog = (obj: KmsGrantConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KmsKeyConfigurationFilterSensitiveLog = (obj: KmsKeyConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RdsDbClusterSnapshotAttributeValueFilterSensitiveLog = (obj: RdsDbClusterSnapshotAttributeValue): any => {
  if (obj.accountIds !== undefined) return { accountIds: obj.accountIds };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RdsDbClusterSnapshotConfigurationFilterSensitiveLog = (obj: RdsDbClusterSnapshotConfiguration): any => ({
  ...obj,
  ...(obj.attributes && {
    attributes: Object.entries(obj.attributes).reduce(
      (acc: any, [key, value]: [string, RdsDbClusterSnapshotAttributeValue]) => (
        (acc[key] = RdsDbClusterSnapshotAttributeValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const RdsDbSnapshotAttributeValueFilterSensitiveLog = (obj: RdsDbSnapshotAttributeValue): any => {
  if (obj.accountIds !== undefined) return { accountIds: obj.accountIds };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RdsDbSnapshotConfigurationFilterSensitiveLog = (obj: RdsDbSnapshotConfiguration): any => ({
  ...obj,
  ...(obj.attributes && {
    attributes: Object.entries(obj.attributes).reduce(
      (acc: any, [key, value]: [string, RdsDbSnapshotAttributeValue]) => (
        (acc[key] = RdsDbSnapshotAttributeValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const InternetConfigurationFilterSensitiveLog = (obj: InternetConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigurationFilterSensitiveLog = (obj: VpcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkOriginConfigurationFilterSensitiveLog = (obj: NetworkOriginConfiguration): any => {
  if (obj.vpcConfiguration !== undefined)
    return { vpcConfiguration: VpcConfigurationFilterSensitiveLog(obj.vpcConfiguration) };
  if (obj.internetConfiguration !== undefined)
    return { internetConfiguration: InternetConfigurationFilterSensitiveLog(obj.internetConfiguration) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const S3PublicAccessBlockConfigurationFilterSensitiveLog = (obj: S3PublicAccessBlockConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3AccessPointConfigurationFilterSensitiveLog = (obj: S3AccessPointConfiguration): any => ({
  ...obj,
  ...(obj.networkOrigin && { networkOrigin: NetworkOriginConfigurationFilterSensitiveLog(obj.networkOrigin) }),
});

/**
 * @internal
 */
export const AclGranteeFilterSensitiveLog = (obj: AclGrantee): any => {
  if (obj.id !== undefined) return { id: obj.id };
  if (obj.uri !== undefined) return { uri: obj.uri };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const S3BucketAclGrantConfigurationFilterSensitiveLog = (obj: S3BucketAclGrantConfiguration): any => ({
  ...obj,
  ...(obj.grantee && { grantee: AclGranteeFilterSensitiveLog(obj.grantee) }),
});

/**
 * @internal
 */
export const S3BucketConfigurationFilterSensitiveLog = (obj: S3BucketConfiguration): any => ({
  ...obj,
  ...(obj.bucketAclGrants && {
    bucketAclGrants: obj.bucketAclGrants.map((item) => S3BucketAclGrantConfigurationFilterSensitiveLog(item)),
  }),
  ...(obj.accessPoints && {
    accessPoints: Object.entries(obj.accessPoints).reduce(
      (acc: any, [key, value]: [string, S3AccessPointConfiguration]) => (
        (acc[key] = S3AccessPointConfigurationFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const SecretsManagerSecretConfigurationFilterSensitiveLog = (obj: SecretsManagerSecretConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnsTopicConfigurationFilterSensitiveLog = (obj: SnsTopicConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqsQueueConfigurationFilterSensitiveLog = (obj: SqsQueueConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => {
  if (obj.ebsSnapshot !== undefined)
    return { ebsSnapshot: EbsSnapshotConfigurationFilterSensitiveLog(obj.ebsSnapshot) };
  if (obj.ecrRepository !== undefined)
    return { ecrRepository: EcrRepositoryConfigurationFilterSensitiveLog(obj.ecrRepository) };
  if (obj.iamRole !== undefined) return { iamRole: IamRoleConfigurationFilterSensitiveLog(obj.iamRole) };
  if (obj.efsFileSystem !== undefined)
    return { efsFileSystem: EfsFileSystemConfigurationFilterSensitiveLog(obj.efsFileSystem) };
  if (obj.kmsKey !== undefined) return { kmsKey: KmsKeyConfigurationFilterSensitiveLog(obj.kmsKey) };
  if (obj.rdsDbClusterSnapshot !== undefined)
    return { rdsDbClusterSnapshot: RdsDbClusterSnapshotConfigurationFilterSensitiveLog(obj.rdsDbClusterSnapshot) };
  if (obj.rdsDbSnapshot !== undefined)
    return { rdsDbSnapshot: RdsDbSnapshotConfigurationFilterSensitiveLog(obj.rdsDbSnapshot) };
  if (obj.secretsManagerSecret !== undefined)
    return { secretsManagerSecret: SecretsManagerSecretConfigurationFilterSensitiveLog(obj.secretsManagerSecret) };
  if (obj.s3Bucket !== undefined) return { s3Bucket: S3BucketConfigurationFilterSensitiveLog(obj.s3Bucket) };
  if (obj.snsTopic !== undefined) return { snsTopic: SnsTopicConfigurationFilterSensitiveLog(obj.snsTopic) };
  if (obj.sqsQueue !== undefined) return { sqsQueue: SqsQueueConfigurationFilterSensitiveLog(obj.sqsQueue) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateAccessPreviewRequestFilterSensitiveLog = (obj: CreateAccessPreviewRequest): any => ({
  ...obj,
  ...(obj.configurations && {
    configurations: Object.entries(obj.configurations).reduce(
      (acc: any, [key, value]: [string, Configuration]) => ((acc[key] = ConfigurationFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const CreateAccessPreviewResponseFilterSensitiveLog = (obj: CreateAccessPreviewResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccessPreviewRequestFilterSensitiveLog = (obj: GetAccessPreviewRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPreviewStatusReasonFilterSensitiveLog = (obj: AccessPreviewStatusReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPreviewFilterSensitiveLog = (obj: AccessPreview): any => ({
  ...obj,
  ...(obj.configurations && {
    configurations: Object.entries(obj.configurations).reduce(
      (acc: any, [key, value]: [string, Configuration]) => ((acc[key] = ConfigurationFilterSensitiveLog(value)), acc),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const GetAccessPreviewResponseFilterSensitiveLog = (obj: GetAccessPreviewResponse): any => ({
  ...obj,
  ...(obj.accessPreview && { accessPreview: AccessPreviewFilterSensitiveLog(obj.accessPreview) }),
});

/**
 * @internal
 */
export const GetAnalyzedResourceRequestFilterSensitiveLog = (obj: GetAnalyzedResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalyzedResourceFilterSensitiveLog = (obj: AnalyzedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAnalyzedResourceResponseFilterSensitiveLog = (obj: GetAnalyzedResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingRequestFilterSensitiveLog = (obj: GetFindingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingSourceDetailFilterSensitiveLog = (obj: FindingSourceDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingSourceFilterSensitiveLog = (obj: FindingSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingFilterSensitiveLog = (obj: Finding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFindingResponseFilterSensitiveLog = (obj: GetFindingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGeneratedPolicyRequestFilterSensitiveLog = (obj: GetGeneratedPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedPolicyFilterSensitiveLog = (obj: GeneratedPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrailPropertiesFilterSensitiveLog = (obj: TrailProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudTrailPropertiesFilterSensitiveLog = (obj: CloudTrailProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedPolicyPropertiesFilterSensitiveLog = (obj: GeneratedPolicyProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedPolicyResultFilterSensitiveLog = (obj: GeneratedPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobErrorFilterSensitiveLog = (obj: JobError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobDetailsFilterSensitiveLog = (obj: JobDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGeneratedPolicyResponseFilterSensitiveLog = (obj: GetGeneratedPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPreviewFindingsRequestFilterSensitiveLog = (obj: ListAccessPreviewFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPreviewFindingFilterSensitiveLog = (obj: AccessPreviewFinding): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPreviewFindingsResponseFilterSensitiveLog = (obj: ListAccessPreviewFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPreviewsRequestFilterSensitiveLog = (obj: ListAccessPreviewsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPreviewSummaryFilterSensitiveLog = (obj: AccessPreviewSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPreviewsResponseFilterSensitiveLog = (obj: ListAccessPreviewsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnalyzedResourcesRequestFilterSensitiveLog = (obj: ListAnalyzedResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalyzedResourceSummaryFilterSensitiveLog = (obj: AnalyzedResourceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAnalyzedResourcesResponseFilterSensitiveLog = (obj: ListAnalyzedResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SortCriteriaFilterSensitiveLog = (obj: SortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsRequestFilterSensitiveLog = (obj: ListFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FindingSummaryFilterSensitiveLog = (obj: FindingSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFindingsResponseFilterSensitiveLog = (obj: ListFindingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPolicyGenerationsRequestFilterSensitiveLog = (obj: ListPolicyGenerationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyGenerationFilterSensitiveLog = (obj: PolicyGeneration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPolicyGenerationsResponseFilterSensitiveLog = (obj: ListPolicyGenerationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrailFilterSensitiveLog = (obj: Trail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudTrailDetailsFilterSensitiveLog = (obj: CloudTrailDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyGenerationDetailsFilterSensitiveLog = (obj: PolicyGenerationDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPolicyGenerationRequestFilterSensitiveLog = (obj: StartPolicyGenerationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPolicyGenerationResponseFilterSensitiveLog = (obj: StartPolicyGenerationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartResourceScanRequestFilterSensitiveLog = (obj: StartResourceScanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsRequestFilterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidatePolicyRequestFilterSensitiveLog = (obj: ValidatePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubstringFilterSensitiveLog = (obj: Substring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathElementFilterSensitiveLog = (obj: PathElement): any => {
  if (obj.index !== undefined) return { index: obj.index };
  if (obj.key !== undefined) return { key: obj.key };
  if (obj.substring !== undefined) return { substring: SubstringFilterSensitiveLog(obj.substring) };
  if (obj.value !== undefined) return { value: obj.value };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PositionFilterSensitiveLog = (obj: Position): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpanFilterSensitiveLog = (obj: Span): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationFilterSensitiveLog = (obj: Location): any => ({
  ...obj,
  ...(obj.path && { path: obj.path.map((item) => PathElementFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ValidatePolicyFindingFilterSensitiveLog = (obj: ValidatePolicyFinding): any => ({
  ...obj,
  ...(obj.locations && { locations: obj.locations.map((item) => LocationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ValidatePolicyResponseFilterSensitiveLog = (obj: ValidatePolicyResponse): any => ({
  ...obj,
});
