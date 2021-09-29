import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>A conflict exception error.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria to use in the filter that defines the archive rule.</p>
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

export namespace Criterion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Criterion): any => ({
    ...obj,
  });
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
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace CreateArchiveRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateArchiveRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  message: string | undefined;
  /**
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  resourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Service quote met error.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The resource ID.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The resource type.</p>
   */
  resourceType: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Throttling limit exceeded error.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {
    throttling: true;
  };
  message: string | undefined;
  /**
   * <p>The seconds to wait to retry.</p>
   */
  retryAfterSeconds?: number;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
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
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * <p>A list of fields that didn't validate.</p>
   */
  fieldList?: ValidationExceptionField[];
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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

export namespace DeleteArchiveRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteArchiveRuleRequest): any => ({
    ...obj,
  });
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

export namespace GetArchiveRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetArchiveRuleRequest): any => ({
    ...obj,
  });
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
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>The time at which the archive rule was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the archive rule was last updated.</p>
   */
  updatedAt: Date | undefined;
}

export namespace ArchiveRuleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArchiveRuleSummary): any => ({
    ...obj,
  });
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

export namespace GetArchiveRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetArchiveRuleResponse): any => ({
    ...obj,
  });
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

export namespace ListArchiveRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListArchiveRulesRequest): any => ({
    ...obj,
  });
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

export namespace ListArchiveRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListArchiveRulesResponse): any => ({
    ...obj,
  });
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
  filter: { [key: string]: Criterion } | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace UpdateArchiveRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateArchiveRuleRequest): any => ({
    ...obj,
  });
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
  filter: { [key: string]: Criterion } | undefined;
}

export namespace InlineArchiveRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InlineArchiveRule): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace CreateAnalyzerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAnalyzerRequest): any => ({
    ...obj,
  });
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

export namespace CreateAnalyzerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAnalyzerResponse): any => ({
    ...obj,
  });
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

export namespace DeleteAnalyzerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAnalyzerRequest): any => ({
    ...obj,
  });
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

export namespace GetAnalyzerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnalyzerRequest): any => ({
    ...obj,
  });
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

export namespace StatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatusReason): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

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

export namespace AnalyzerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzerSummary): any => ({
    ...obj,
  });
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

export namespace GetAnalyzerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnalyzerResponse): any => ({
    ...obj,
  });
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

export namespace ListAnalyzersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnalyzersRequest): any => ({
    ...obj,
  });
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

export namespace ListAnalyzersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnalyzersResponse): any => ({
    ...obj,
  });
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

export namespace ApplyArchiveRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplyArchiveRuleRequest): any => ({
    ...obj,
  });
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

export namespace CancelPolicyGenerationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelPolicyGenerationRequest): any => ({
    ...obj,
  });
}

export interface CancelPolicyGenerationResponse {}

export namespace CancelPolicyGenerationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelPolicyGenerationResponse): any => ({
    ...obj,
  });
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

export namespace IamRoleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IamRoleConfiguration): any => ({
    ...obj,
  });
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
  encryptionContextEquals?: { [key: string]: string };

  /**
   * <p>A list of key-value pairs that must be included in the encryption context of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic
   *             operation</a> request. The grant allows the cryptographic operation only when the
   *          encryption context in the request includes the key-value pairs specified in this
   *          constraint, although it can include additional key-value pairs.</p>
   */
  encryptionContextSubset?: { [key: string]: string };
}

export namespace KmsGrantConstraints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsGrantConstraints): any => ({
    ...obj,
  });
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

export namespace KmsGrantConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsGrantConfiguration): any => ({
    ...obj,
  });
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
  keyPolicies?: { [key: string]: string };

  /**
   * <p>A list of proposed grant configurations for the KMS key. If the proposed grant
   *          configuration is for an existing key, the access preview uses the proposed list of grant
   *          configurations in place of the existing grants. Otherwise, the access preview uses the
   *          existing grants for the key.</p>
   */
  grants?: KmsGrantConfiguration[];
}

export namespace KmsKeyConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KmsKeyConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>This configuration sets the network origin for the Amazon S3 access point or multi-region
 *          access point to <code>Internet</code>.</p>
 */
export interface InternetConfiguration {}

export namespace InternetConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternetConfiguration): any => ({
    ...obj,
  });
}

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

export namespace VpcConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfiguration): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkOriginConfiguration): any => {
    if (obj.vpcConfiguration !== undefined)
      return { vpcConfiguration: VpcConfiguration.filterSensitiveLog(obj.vpcConfiguration) };
    if (obj.internetConfiguration !== undefined)
      return { internetConfiguration: InternetConfiguration.filterSensitiveLog(obj.internetConfiguration) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace S3PublicAccessBlockConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3PublicAccessBlockConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for an Amazon S3 access point or multi-region access point for the bucket.
 *          You can propose up to 10 access points or multi-region access points per bucket. If the
 *          proposed Amazon S3 access point configuration is for an existing bucket, the access preview uses
 *          the proposed access point configuration in place of the existing access points. To propose
 *          an access point without a policy, you can provide an empty string as the access point
 *          policy. For more information, see <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html">Creating access points</a>. For more information about access point policy limits,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points-restrictions-limitations.html">Access points
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

export namespace S3AccessPointConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3AccessPointConfiguration): any => ({
    ...obj,
    ...(obj.networkOrigin && { networkOrigin: NetworkOriginConfiguration.filterSensitiveLog(obj.networkOrigin) }),
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AclGrantee): any => {
    if (obj.id !== undefined) return { id: obj.id };
    if (obj.uri !== undefined) return { uri: obj.uri };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace S3BucketAclGrantConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketAclGrantConfiguration): any => ({
    ...obj,
    ...(obj.grantee && { grantee: AclGrantee.filterSensitiveLog(obj.grantee) }),
  });
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
  accessPoints?: { [key: string]: S3AccessPointConfiguration };
}

export namespace S3BucketConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketConfiguration): any => ({
    ...obj,
    ...(obj.bucketAclGrants && {
      bucketAclGrants: obj.bucketAclGrants.map((item) => S3BucketAclGrantConfiguration.filterSensitiveLog(item)),
    }),
    ...(obj.accessPoints && {
      accessPoints: Object.entries(obj.accessPoints).reduce(
        (acc: any, [key, value]: [string, S3AccessPointConfiguration]) => ({
          ...acc,
          [key]: S3AccessPointConfiguration.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
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
 *          preview uses the default CMK of the Amazon Web Services account. If you specify an empty string for the
 *          KMS key ID, the access preview uses the default CMK of the Amazon Web Services account. For more
 *          information about secret policy limits, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html">Quotas for
 *             Secrets Manager.</a>.</p>
 */
export interface SecretsManagerSecretConfiguration {
  /**
   * <p>The proposed ARN, key ID, or alias of the KMS customer master key (CMK).</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The proposed resource policy defining who can access or manage the secret.</p>
   */
  secretPolicy?: string;
}

export namespace SecretsManagerSecretConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecretsManagerSecretConfiguration): any => ({
    ...obj,
  });
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

export namespace SqsQueueConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqsQueueConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Access control configuration structures for your resource. You specify the configuration
 *          as a type-value pair. You can specify only one type of access control configuration.</p>
 */
export type Configuration =
  | Configuration.IamRoleMember
  | Configuration.KmsKeyMember
  | Configuration.S3BucketMember
  | Configuration.SecretsManagerSecretMember
  | Configuration.SqsQueueMember
  | Configuration.$UnknownMember;

export namespace Configuration {
  /**
   * <p>The access control configuration is for an IAM role. </p>
   */
  export interface IamRoleMember {
    iamRole: IamRoleConfiguration;
    kmsKey?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for a KMS key. </p>
   */
  export interface KmsKeyMember {
    iamRole?: never;
    kmsKey: KmsKeyConfiguration;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for a Secrets Manager secret.</p>
   */
  export interface SecretsManagerSecretMember {
    iamRole?: never;
    kmsKey?: never;
    secretsManagerSecret: SecretsManagerSecretConfiguration;
    s3Bucket?: never;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon S3 Bucket. </p>
   */
  export interface S3BucketMember {
    iamRole?: never;
    kmsKey?: never;
    secretsManagerSecret?: never;
    s3Bucket: S3BucketConfiguration;
    sqsQueue?: never;
    $unknown?: never;
  }

  /**
   * <p>The access control configuration is for an Amazon SQS queue. </p>
   */
  export interface SqsQueueMember {
    iamRole?: never;
    kmsKey?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    sqsQueue: SqsQueueConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    iamRole?: never;
    kmsKey?: never;
    secretsManagerSecret?: never;
    s3Bucket?: never;
    sqsQueue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    iamRole: (value: IamRoleConfiguration) => T;
    kmsKey: (value: KmsKeyConfiguration) => T;
    secretsManagerSecret: (value: SecretsManagerSecretConfiguration) => T;
    s3Bucket: (value: S3BucketConfiguration) => T;
    sqsQueue: (value: SqsQueueConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.iamRole !== undefined) return visitor.iamRole(value.iamRole);
    if (value.kmsKey !== undefined) return visitor.kmsKey(value.kmsKey);
    if (value.secretsManagerSecret !== undefined) return visitor.secretsManagerSecret(value.secretsManagerSecret);
    if (value.s3Bucket !== undefined) return visitor.s3Bucket(value.s3Bucket);
    if (value.sqsQueue !== undefined) return visitor.sqsQueue(value.sqsQueue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Configuration): any => {
    if (obj.iamRole !== undefined) return { iamRole: IamRoleConfiguration.filterSensitiveLog(obj.iamRole) };
    if (obj.kmsKey !== undefined) return { kmsKey: KmsKeyConfiguration.filterSensitiveLog(obj.kmsKey) };
    if (obj.secretsManagerSecret !== undefined)
      return { secretsManagerSecret: SecretsManagerSecretConfiguration.filterSensitiveLog(obj.secretsManagerSecret) };
    if (obj.s3Bucket !== undefined) return { s3Bucket: S3BucketConfiguration.filterSensitiveLog(obj.s3Bucket) };
    if (obj.sqsQueue !== undefined) return { sqsQueue: SqsQueueConfiguration.filterSensitiveLog(obj.sqsQueue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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
  configurations: { [key: string]: Configuration } | undefined;

  /**
   * <p>A client token.</p>
   */
  clientToken?: string;
}

export namespace CreateAccessPreviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccessPreviewRequest): any => ({
    ...obj,
    ...(obj.configurations && {
      configurations: Object.entries(obj.configurations).reduce(
        (acc: any, [key, value]: [string, Configuration]) => ({
          ...acc,
          [key]: Configuration.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface CreateAccessPreviewResponse {
  /**
   * <p>The unique ID for the access preview.</p>
   */
  id: string | undefined;
}

export namespace CreateAccessPreviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccessPreviewResponse): any => ({
    ...obj,
  });
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

export namespace GetAccessPreviewRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccessPreviewRequest): any => ({
    ...obj,
  });
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

export namespace AccessPreviewStatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessPreviewStatusReason): any => ({
    ...obj,
  });
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
  configurations: { [key: string]: Configuration } | undefined;

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

export namespace AccessPreview {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessPreview): any => ({
    ...obj,
    ...(obj.configurations && {
      configurations: Object.entries(obj.configurations).reduce(
        (acc: any, [key, value]: [string, Configuration]) => ({
          ...acc,
          [key]: Configuration.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
}

export interface GetAccessPreviewResponse {
  /**
   * <p>An object that contains information about the access preview.</p>
   */
  accessPreview: AccessPreview | undefined;
}

export namespace GetAccessPreviewResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccessPreviewResponse): any => ({
    ...obj,
    ...(obj.accessPreview && { accessPreview: AccessPreview.filterSensitiveLog(obj.accessPreview) }),
  });
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

export namespace GetAnalyzedResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnalyzedResourceRequest): any => ({
    ...obj,
  });
}

export type ResourceType =
  | "AWS::IAM::Role"
  | "AWS::KMS::Key"
  | "AWS::Lambda::Function"
  | "AWS::Lambda::LayerVersion"
  | "AWS::S3::Bucket"
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

export namespace AnalyzedResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzedResource): any => ({
    ...obj,
  });
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

export namespace GetAnalyzedResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAnalyzedResourceResponse): any => ({
    ...obj,
  });
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

export namespace GetFindingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingRequest): any => ({
    ...obj,
  });
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
}

export namespace FindingSourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingSourceDetail): any => ({
    ...obj,
  });
}

export type FindingSourceType = "BUCKET_ACL" | "POLICY" | "S3_ACCESS_POINT";

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

export namespace FindingSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingSource): any => ({
    ...obj,
  });
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
  principal?: { [key: string]: string };

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
  condition: { [key: string]: string } | undefined;

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

export namespace Finding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
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

export namespace GetFindingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingResponse): any => ({
    ...obj,
  });
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

export namespace GetGeneratedPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGeneratedPolicyRequest): any => ({
    ...obj,
  });
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

export namespace GeneratedPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeneratedPolicy): any => ({
    ...obj,
  });
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

export namespace TrailProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TrailProperties): any => ({
    ...obj,
  });
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

export namespace CloudTrailProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudTrailProperties): any => ({
    ...obj,
  });
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

export namespace GeneratedPolicyProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeneratedPolicyProperties): any => ({
    ...obj,
  });
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

export namespace GeneratedPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeneratedPolicyResult): any => ({
    ...obj,
  });
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

export namespace JobError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobError): any => ({
    ...obj,
  });
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

export namespace JobDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobDetails): any => ({
    ...obj,
  });
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

export namespace GetGeneratedPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGeneratedPolicyResponse): any => ({
    ...obj,
  });
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
  filter?: { [key: string]: Criterion };

  /**
   * <p>A token used for pagination of results returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace ListAccessPreviewFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessPreviewFindingsRequest): any => ({
    ...obj,
  });
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
  principal?: { [key: string]: string };

  /**
   * <p>The action in the analyzed policy statement that an external principal has permission to
   *          perform.</p>
   */
  action?: string[];

  /**
   * <p>The condition in the analyzed policy statement that resulted in a finding.</p>
   */
  condition?: { [key: string]: string };

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

export namespace AccessPreviewFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessPreviewFinding): any => ({
    ...obj,
  });
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

export namespace ListAccessPreviewFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessPreviewFindingsResponse): any => ({
    ...obj,
  });
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

export namespace ListAccessPreviewsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessPreviewsRequest): any => ({
    ...obj,
  });
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

export namespace AccessPreviewSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessPreviewSummary): any => ({
    ...obj,
  });
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

export namespace ListAccessPreviewsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessPreviewsResponse): any => ({
    ...obj,
  });
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

export namespace ListAnalyzedResourcesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnalyzedResourcesRequest): any => ({
    ...obj,
  });
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

export namespace AnalyzedResourceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnalyzedResourceSummary): any => ({
    ...obj,
  });
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

export namespace ListAnalyzedResourcesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAnalyzedResourcesResponse): any => ({
    ...obj,
  });
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

export namespace SortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriteria): any => ({
    ...obj,
  });
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
  filter?: { [key: string]: Criterion };

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

export namespace ListFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
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
  principal?: { [key: string]: string };

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
  condition: { [key: string]: string } | undefined;

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

export namespace FindingSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingSummary): any => ({
    ...obj,
  });
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

export namespace ListFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
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

export namespace ListPolicyGenerationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPolicyGenerationsRequest): any => ({
    ...obj,
  });
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

export namespace PolicyGeneration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyGeneration): any => ({
    ...obj,
  });
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

export namespace ListPolicyGenerationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPolicyGenerationsResponse): any => ({
    ...obj,
  });
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

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are applied to the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace Trail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trail): any => ({
    ...obj,
  });
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

export namespace CloudTrailDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudTrailDetails): any => ({
    ...obj,
  });
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

export namespace PolicyGenerationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyGenerationDetails): any => ({
    ...obj,
  });
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

export namespace StartPolicyGenerationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPolicyGenerationRequest): any => ({
    ...obj,
  });
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

export namespace StartPolicyGenerationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPolicyGenerationResponse): any => ({
    ...obj,
  });
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
}

export namespace StartResourceScanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartResourceScanRequest): any => ({
    ...obj,
  });
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
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The response to the request.</p>
 */
export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFindingsRequest): any => ({
    ...obj,
  });
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
}

export namespace ValidatePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidatePolicyRequest): any => ({
    ...obj,
  });
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

export namespace Substring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Substring): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathElement): any => {
    if (obj.index !== undefined) return { index: obj.index };
    if (obj.key !== undefined) return { key: obj.key };
    if (obj.substring !== undefined) return { substring: Substring.filterSensitiveLog(obj.substring) };
    if (obj.value !== undefined) return { value: obj.value };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace Position {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Position): any => ({
    ...obj,
  });
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

export namespace Span {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Span): any => ({
    ...obj,
  });
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

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
    ...(obj.path && { path: obj.path.map((item) => PathElement.filterSensitiveLog(item)) }),
  });
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

export namespace ValidatePolicyFinding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidatePolicyFinding): any => ({
    ...obj,
    ...(obj.locations && { locations: obj.locations.map((item) => Location.filterSensitiveLog(item)) }),
  });
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

export namespace ValidatePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidatePolicyResponse): any => ({
    ...obj,
  });
}
