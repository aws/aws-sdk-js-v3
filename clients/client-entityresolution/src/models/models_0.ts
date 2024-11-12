// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { EntityResolutionServiceException as __BaseException } from "./EntityResolutionServiceException";

/**
 * <p>You do not have sufficient access to perform this action. </p>
 * @public
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
 * @enum
 */
export const StatementEffect = {
  Allow: "Allow",
  Deny: "Deny",
} as const;

/**
 * @public
 */
export type StatementEffect = (typeof StatementEffect)[keyof typeof StatementEffect];

/**
 * @public
 */
export interface AddPolicyStatementInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that will be accessed by the
   *          principal.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A statement identifier that differentiates the statement from others in the same
   *          policy.</p>
   * @public
   */
  statementId: string | undefined;

  /**
   * <p>Determines whether the permissions specified in the policy are to be allowed
   *             (<code>Allow</code>) or denied (<code>Deny</code>).</p>
   *          <important>
   *             <p> If you set the value of the <code>effect</code> parameter to <code>Deny</code> for
   *             the <code>AddPolicyStatement</code> operation, you must also set the value of the
   *                <code>effect</code> parameter in the <code>policy</code> to <code>Deny</code> for the
   *                <code>PutPolicy</code> operation.</p>
   *          </important>
   * @public
   */
  effect: StatementEffect | undefined;

  /**
   * <p>The action that the principal can use on the resource. </p>
   *          <p>For example, <code>entityresolution:GetIdMappingJob</code>,
   *             <code>entityresolution:GetMatchingJob</code>.</p>
   * @public
   */
  action: string[] | undefined;

  /**
   * <p>The Amazon Web Services service or Amazon Web Services account that can access the
   *          resource defined as ARN.</p>
   * @public
   */
  principal: string[] | undefined;

  /**
   * <p>A set of condition keys that you can use in key policies.</p>
   * @public
   */
  condition?: string | undefined;
}

/**
 * @public
 */
export interface AddPolicyStatementOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that will be accessed by the
   *          principal.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  token: string | undefined;

  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource. Example: Workflow already exists, Schema already exists, Workflow is currently
 *          running, etc. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * <p>The resource could not be found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request was denied due to request throttling. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const AttributeMatchingModel = {
  MANY_TO_MANY: "MANY_TO_MANY",
  ONE_TO_ONE: "ONE_TO_ONE",
} as const;

/**
 * @public
 */
export type AttributeMatchingModel = (typeof AttributeMatchingModel)[keyof typeof AttributeMatchingModel];

/**
 * @public
 */
export interface BatchDeleteUniqueIdInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The input source for the batch delete unique ID operation.</p>
   * @public
   */
  inputSource?: string | undefined;

  /**
   * <p>The unique IDs to delete.</p>
   * @public
   */
  uniqueIds: string[] | undefined;
}

/**
 * <p>The deleted unique ID.</p>
 * @public
 */
export interface DeletedUniqueId {
  /**
   * <p> The unique ID of the deleted item.</p>
   * @public
   */
  uniqueId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeleteUniqueIdErrorType = {
  SERVICE_ERROR: "SERVICE_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type DeleteUniqueIdErrorType = (typeof DeleteUniqueIdErrorType)[keyof typeof DeleteUniqueIdErrorType];

/**
 * <p>The Delete Unique Id error.</p>
 * @public
 */
export interface DeleteUniqueIdError {
  /**
   * <p>The unique ID that could not be deleted.</p>
   * @public
   */
  uniqueId: string | undefined;

  /**
   * <p> The error type for the batch delete unique ID operation.</p>
   * @public
   */
  errorType: DeleteUniqueIdErrorType | undefined;
}

/**
 * @public
 * @enum
 */
export const DeleteUniqueIdStatus = {
  ACCEPTED: "ACCEPTED",
  COMPLETED: "COMPLETED",
} as const;

/**
 * @public
 */
export type DeleteUniqueIdStatus = (typeof DeleteUniqueIdStatus)[keyof typeof DeleteUniqueIdStatus];

/**
 * @public
 */
export interface BatchDeleteUniqueIdOutput {
  /**
   * <p>The status of the batch delete unique ID operation.</p>
   * @public
   */
  status: DeleteUniqueIdStatus | undefined;

  /**
   * <p> The errors from deleting multiple unique IDs.</p>
   * @public
   */
  errors: DeleteUniqueIdError[] | undefined;

  /**
   * <p>The unique IDs that were deleted.</p>
   * @public
   */
  deleted: DeletedUniqueId[] | undefined;

  /**
   * <p>The unique IDs that were disconnected.</p>
   * @public
   */
  disconnectedUniqueIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IdMappingType = {
  PROVIDER: "PROVIDER",
  RULE_BASED: "RULE_BASED",
} as const;

/**
 * @public
 */
export type IdMappingType = (typeof IdMappingType)[keyof typeof IdMappingType];

/**
 * <p>The Amazon S3 location that temporarily stores your data while it processes.
 *          Your information won't be saved permanently.</p>
 * @public
 */
export interface IntermediateSourceConfiguration {
  /**
   * <p>The Amazon S3 location (bucket and prefix). For example:
   *             <code>s3://provider_bucket/DOC-EXAMPLE-BUCKET</code>
   *          </p>
   * @public
   */
  intermediateS3Path: string | undefined;
}

/**
 * <p>An object containing the <code>providerServiceARN</code>,
 *             <code>intermediateSourceConfiguration</code>, and
 *          <code>providerConfiguration</code>.</p>
 * @public
 */
export interface ProviderProperties {
  /**
   * <p>The ARN of the provider service.</p>
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * <p>The required configuration fields to use with the provider service.</p>
   * @public
   */
  providerConfiguration?: __DocumentType | undefined;

  /**
   * <p>The Amazon S3 location that temporarily stores your data while it processes.
   *          Your information won't be saved permanently.</p>
   * @public
   */
  intermediateSourceConfiguration?: IntermediateSourceConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const RecordMatchingModel = {
  MANY_SOURCE_TO_ONE_TARGET: "MANY_SOURCE_TO_ONE_TARGET",
  ONE_SOURCE_TO_ONE_TARGET: "ONE_SOURCE_TO_ONE_TARGET",
} as const;

/**
 * @public
 */
export type RecordMatchingModel = (typeof RecordMatchingModel)[keyof typeof RecordMatchingModel];

/**
 * @public
 * @enum
 */
export const IdMappingWorkflowRuleDefinitionType = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;

/**
 * @public
 */
export type IdMappingWorkflowRuleDefinitionType =
  (typeof IdMappingWorkflowRuleDefinitionType)[keyof typeof IdMappingWorkflowRuleDefinitionType];

/**
 * <p>An object containing <code>RuleName</code>, and <code>MatchingKeys</code>.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>A name for the matching rule.</p>
   * @public
   */
  ruleName: string | undefined;

  /**
   * <p>A list of <code>MatchingKeys</code>. The <code>MatchingKeys</code> must have been
   *          defined in the <code>SchemaMapping</code>. Two records are considered to match according to
   *          this rule if all of the <code>MatchingKeys</code> match.</p>
   * @public
   */
  matchingKeys: string[] | undefined;
}

/**
 * <p> An object that defines the list of matching rules to run in an ID mapping
 *          workflow.</p>
 * @public
 */
export interface IdMappingRuleBasedProperties {
  /**
   * <p> The rules that can be used for ID mapping.</p>
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * <p> The set of rules you can use in an ID mapping workflow. The limitations specified for
   *          the source or target to define the match rules must be compatible.</p>
   * @public
   */
  ruleDefinitionType: IdMappingWorkflowRuleDefinitionType | undefined;

  /**
   * <p>The comparison type. You can either choose <code>ONE_TO_ONE</code> or
   *             <code>MANY_TO_MANY</code> as the <code>attributeMatchingModel</code>. </p>
   *          <p>If you choose <code>MANY_TO_MANY</code>, the system can match attributes across the
   *          sub-types of an attribute type. For example, if the value of the <code>Email</code> field
   *          of Profile A matches the value of the <code>BusinessEmail</code> field of Profile B, the
   *          two profiles are matched on the <code>Email</code> attribute type. </p>
   *          <p>If you choose <code>ONE_TO_ONE</code>, the system can only match attributes if the
   *          sub-types are an exact match. For example, for the <code>Email</code> attribute type, the
   *          system will only consider it a match if the value of the <code>Email</code> field of
   *          Profile A matches the value of the <code>Email</code> field of Profile B.</p>
   * @public
   */
  attributeMatchingModel: AttributeMatchingModel | undefined;

  /**
   * <p> The type of matching record that is allowed to be used in an ID mapping workflow. </p>
   *          <p>If the value is set to <code>ONE_SOURCE_TO_ONE_TARGET</code>, only one record in the
   *          source can be matched to the same record in the target.</p>
   *          <p>If the value is set to <code>MANY_SOURCE_TO_ONE_TARGET</code>, multiple records in the
   *          source can be matched to one record in the target.</p>
   * @public
   */
  recordMatchingModel: RecordMatchingModel | undefined;
}

/**
 * <p>An object which defines the ID mapping technique and any additional
 *          configurations.</p>
 * @public
 */
export interface IdMappingTechniques {
  /**
   * <p>The type of ID mapping.</p>
   * @public
   */
  idMappingType: IdMappingType | undefined;

  /**
   * <p> An object which defines any additional configurations required by rule-based
   *          matching.</p>
   * @public
   */
  ruleBasedProperties?: IdMappingRuleBasedProperties | undefined;

  /**
   * <p>An object which defines any additional configurations required by the provider
   *          service.</p>
   * @public
   */
  providerProperties?: ProviderProperties | undefined;
}

/**
 * @public
 * @enum
 */
export const IdNamespaceType = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;

/**
 * @public
 */
export type IdNamespaceType = (typeof IdNamespaceType)[keyof typeof IdNamespaceType];

/**
 * <p>An object containing <code>InputSourceARN</code>, <code>SchemaName</code>, and
 *             <code>Type</code>.</p>
 * @public
 */
export interface IdMappingWorkflowInputSource {
  /**
   * <p>An Glue table Amazon Resource Name (ARN) or a matching workflow ARN for
   *          the input source table.</p>
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * <p>The name of the schema to be retrieved.</p>
   * @public
   */
  schemaName?: string | undefined;

  /**
   * <p>The type of ID namespace. There are two types: <code>SOURCE</code> and
   *             <code>TARGET</code>. </p>
   *          <p>The <code>SOURCE</code> contains configurations for <code>sourceId</code> data that will
   *          be processed in an ID mapping workflow. </p>
   *          <p>The <code>TARGET</code> contains a configuration of <code>targetId</code> which all
   *             <code>sourceIds</code> will resolve to.</p>
   * @public
   */
  type?: IdNamespaceType | undefined;
}

/**
 * <p>The output source for the ID mapping workflow.</p>
 * @public
 */
export interface IdMappingWorkflowOutputSource {
  /**
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   * @public
   */
  outputS3Path: string | undefined;

  /**
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use
   *          an Entity Resolution managed KMS key.</p>
   * @public
   */
  KMSArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdMappingWorkflowInput {
  /**
   * <p>The name of the workflow. There can't be multiple <code>IdMappingWorkflows</code> with
   *          the same name.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * <p>A list of <code>IdMappingWorkflowOutputSource</code> objects, each of which contains
   *          fields <code>OutputS3Path</code> and <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * <p>An object which defines the ID mapping technique and any additional
   *          configurations.</p>
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIdMappingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>IDMappingWorkflow</code>.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * <p>A list of <code>IdMappingWorkflowOutputSource</code> objects, each of which contains
   *          fields <code>OutputS3Path</code> and <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * <p>An object which defines the ID mapping technique and any additional
   *          configurations.</p>
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *             Entity Resolution account limits. The error message describes the limit exceeded.
 *       </p>
 * @public
 */
export class ExceedsLimitException extends __BaseException {
  readonly name: "ExceedsLimitException" = "ExceedsLimitException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the quota that has been breached.</p>
   * @public
   */
  quotaName?: string | undefined;

  /**
   * <p>The current quota value for the customers.</p>
   * @public
   */
  quotaValue?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExceedsLimitException, __BaseException>) {
    super({
      name: "ExceedsLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExceedsLimitException.prototype);
    this.quotaName = opts.quotaName;
    this.quotaValue = opts.quotaValue;
  }
}

/**
 * <p>An object containing <code>ProviderConfiguration</code> and
 *             <code>ProviderServiceArn</code>.</p>
 * @public
 */
export interface NamespaceProviderProperties {
  /**
   * <p>The Amazon Resource Name (ARN) of the provider service.</p>
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * <p>An object which defines any additional configurations required by the provider
   *          service.</p>
   * @public
   */
  providerConfiguration?: __DocumentType | undefined;
}

/**
 * <p> The rule-based properties of an ID namespace. These properties define how the ID
 *          namespace can be used in an ID mapping workflow.</p>
 * @public
 */
export interface NamespaceRuleBasedProperties {
  /**
   * <p> The rules for the ID namespace.</p>
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * <p> The sets of rules you can use in an ID mapping workflow. The limitations specified for
   *          the source and target must be compatible.</p>
   * @public
   */
  ruleDefinitionTypes?: IdMappingWorkflowRuleDefinitionType[] | undefined;

  /**
   * <p>The comparison type. You can either choose <code>ONE_TO_ONE</code> or
   *             <code>MANY_TO_MANY</code> as the <code>attributeMatchingModel</code>. </p>
   *          <p>If you choose <code>MANY_TO_MANY</code>, the system can match attributes across the
   *          sub-types of an attribute type. For example, if the value of the <code>Email</code> field
   *          of Profile A matches the value of <code>BusinessEmail</code> field of Profile B, the two
   *          profiles are matched on the <code>Email</code> attribute type. </p>
   *          <p>If you choose <code>ONE_TO_ONE</code>, the system can only match attributes if the
   *          sub-types are an exact match. For example, for the <code>Email</code> attribute type, the
   *          system will only consider it a match if the value of the <code>Email</code> field of
   *          Profile A matches the value of the <code>Email</code> field of Profile B.</p>
   * @public
   */
  attributeMatchingModel?: AttributeMatchingModel | undefined;

  /**
   * <p> The type of matching record that is allowed to be used in an ID mapping workflow. </p>
   *          <p>If the value is set to <code>ONE_SOURCE_TO_ONE_TARGET</code>, only one record in the
   *          source is matched to one record in the target. </p>
   *          <p>If the value is set to <code>MANY_SOURCE_TO_ONE_TARGET</code>, all matching records in
   *          the source are matched to one record in the target.</p>
   * @public
   */
  recordMatchingModels?: RecordMatchingModel[] | undefined;
}

/**
 * <p>An object containing <code>IdMappingType</code>, <code>ProviderProperties</code>, and
 *             <code>RuleBasedProperties</code>.</p>
 * @public
 */
export interface IdNamespaceIdMappingWorkflowProperties {
  /**
   * <p>The type of ID mapping.</p>
   * @public
   */
  idMappingType: IdMappingType | undefined;

  /**
   * <p> An object which defines any additional configurations required by rule-based
   *          matching.</p>
   * @public
   */
  ruleBasedProperties?: NamespaceRuleBasedProperties | undefined;

  /**
   * <p>An object which defines any additional configurations required by the provider
   *          service.</p>
   * @public
   */
  providerProperties?: NamespaceProviderProperties | undefined;
}

/**
 * <p>An object containing <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
 * @public
 */
export interface IdNamespaceInputSource {
  /**
   * <p>An Glue table Amazon Resource Name (ARN) or a matching workflow ARN for
   *          the input source table.</p>
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  schemaName?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdNamespaceInput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * <p>Determines the properties of <code>IdMappingWorflow</code> where this
   *             <code>IdNamespace</code> can be used as a <code>Source</code> or a
   *          <code>Target</code>.</p>
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * <p>The type of ID namespace. There are two types: <code>SOURCE</code> and
   *             <code>TARGET</code>. </p>
   *          <p>The <code>SOURCE</code> contains configurations for <code>sourceId</code> data that will
   *          be processed in an ID mapping workflow. </p>
   *          <p>The <code>TARGET</code> contains a configuration of <code>targetId</code> to which all
   *             <code>sourceIds</code> will resolve to.</p>
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access the resources defined in this <code>IdNamespace</code> on your behalf
   *          as part of the workflow run.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIdNamespaceOutput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ID namespace.</p>
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * <p>Determines the properties of <code>IdMappingWorkflow</code> where this
   *             <code>IdNamespace</code> can be used as a <code>Source</code> or a
   *          <code>Target</code>.</p>
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * <p>The type of ID namespace. There are two types: <code>SOURCE</code> and
   *             <code>TARGET</code>.</p>
   *          <p>The <code>SOURCE</code> contains configurations for <code>sourceId</code> data that will
   *          be processed in an ID mapping workflow. </p>
   *          <p>The <code>TARGET</code> contains a configuration of <code>targetId</code> to which all
   *             <code>sourceIds</code> will resolve to.</p>
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access the resources defined in <code>inputSourceConfig</code> on your behalf
   *          as part of the workflow run.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The timestamp of when the ID namespace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the ID namespace was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const IncrementalRunType = {
  IMMEDIATE: "IMMEDIATE",
} as const;

/**
 * @public
 */
export type IncrementalRunType = (typeof IncrementalRunType)[keyof typeof IncrementalRunType];

/**
 * <p>An object which defines an incremental run type and has only
 *             <code>incrementalRunType</code> as a field.</p>
 * @public
 */
export interface IncrementalRunConfig {
  /**
   * <p>The type of incremental run. It takes only one value: <code>IMMEDIATE</code>.</p>
   * @public
   */
  incrementalRunType?: IncrementalRunType | undefined;
}

/**
 * <p>An object containing <code>InputSourceARN</code>, <code>SchemaName</code>, and
 *             <code>ApplyNormalization</code>.</p>
 * @public
 */
export interface InputSource {
  /**
   * <p>An Glue table Amazon Resource Name (ARN) for the input source
   *          table.</p>
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * <p>The name of the schema to be retrieved.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>Normalizes the attributes defined in the schema in the input data. For example, if an
   *          attribute has an <code>AttributeType</code> of <code>PHONE_NUMBER</code>, and the data in
   *          the input table is in a format of 1234567890, Entity Resolution will normalize this field
   *          in the output to (123)-456-7890.</p>
   * @public
   */
  applyNormalization?: boolean | undefined;
}

/**
 * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields
 *             <code>Name</code> and <code>Hashed</code>. Each of these objects selects a column to be
 *          included in the output table, and whether the values of the column should be hashed.</p>
 * @public
 */
export interface OutputAttribute {
  /**
   * <p>A name of a column to be written to the output. This must be an <code>InputField</code>
   *          name in the schema mapping.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Enables the ability to hash the column values in the output.</p>
   * @public
   */
  hashed?: boolean | undefined;
}

/**
 * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields
 *             <code>Name</code> and <code>Hashed</code>. Each of these objects selects a column to be
 *          included in the output table, and whether the values of the column should be hashed.</p>
 * @public
 */
export interface OutputSource {
  /**
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   * @public
   */
  outputS3Path: string | undefined;

  /**
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.</p>
   * @public
   */
  KMSArn?: string | undefined;

  /**
   * <p>A list of <code>OutputAttribute</code> objects, each of which have the fields
   *             <code>Name</code> and <code>Hashed</code>. Each of these objects selects a column to be
   *          included in the output table, and whether the values of the column should be hashed.</p>
   * @public
   */
  output: OutputAttribute[] | undefined;

  /**
   * <p>Normalizes the attributes defined in the schema in the input data. For example, if an
   *          attribute has an <code>AttributeType</code> of <code>PHONE_NUMBER</code>, and the data in
   *          the input table is in a format of 1234567890, Entity Resolution will normalize this field
   *          in the output to (123)-456-7890.</p>
   * @public
   */
  applyNormalization?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ResolutionType = {
  ML_MATCHING: "ML_MATCHING",
  PROVIDER: "PROVIDER",
  RULE_MATCHING: "RULE_MATCHING",
} as const;

/**
 * @public
 */
export type ResolutionType = (typeof ResolutionType)[keyof typeof ResolutionType];

/**
 * @public
 * @enum
 */
export const MatchPurpose = {
  IDENTIFIER_GENERATION: "IDENTIFIER_GENERATION",
  INDEXING: "INDEXING",
} as const;

/**
 * @public
 */
export type MatchPurpose = (typeof MatchPurpose)[keyof typeof MatchPurpose];

/**
 * <p>An object which defines the list of matching rules to run in a matching workflow.
 *          RuleBasedProperties contain a <code>Rules</code> field, which is a list of rule
 *          objects.</p>
 * @public
 */
export interface RuleBasedProperties {
  /**
   * <p>A list of <code>Rule</code> objects, each of which have fields <code>RuleName</code> and
   *             <code>MatchingKeys</code>.</p>
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * <p>The comparison type. You can either choose <code>ONE_TO_ONE</code> or
   *             <code>MANY_TO_MANY</code> as the <code>attributeMatchingModel</code>. </p>
   *          <p>If you choose <code>MANY_TO_MANY</code>, the system can match attributes across the
   *          sub-types of an attribute type. For example, if the value of the <code>Email</code> field
   *          of Profile A and the value of <code>BusinessEmail</code> field of Profile B matches, the
   *          two profiles are matched on the <code>Email</code> attribute type. </p>
   *          <p>If you choose <code>ONE_TO_ONE</code>, the system can only match attributes if the
   *          sub-types are an exact match. For example, for the <code>Email</code> attribute type, the
   *          system will only consider it a match if the value of the <code>Email</code> field of
   *          Profile A matches the value of the <code>Email</code> field of Profile B.</p>
   * @public
   */
  attributeMatchingModel: AttributeMatchingModel | undefined;

  /**
   * <p> An indicator of whether to generate IDs and index the data or not.</p>
   *          <p>If you choose <code>IDENTIFIER_GENERATION</code>, the process generates IDs and indexes
   *          the data.</p>
   *          <p>If you choose <code>INDEXING</code>, the process indexes the data without generating
   *          IDs.</p>
   * @public
   */
  matchPurpose?: MatchPurpose | undefined;
}

/**
 * <p>An object which defines the <code>resolutionType</code> and the
 *             <code>ruleBasedProperties</code>.</p>
 * @public
 */
export interface ResolutionTechniques {
  /**
   * <p>The type of matching. There are three types of matching: <code>RULE_MATCHING</code>,
   *             <code>ML_MATCHING</code>, and <code>PROVIDER</code>.</p>
   * @public
   */
  resolutionType: ResolutionType | undefined;

  /**
   * <p>An object which defines the list of matching rules to run and has a field
   *             <code>Rules</code>, which is a list of rule objects.</p>
   * @public
   */
  ruleBasedProperties?: RuleBasedProperties | undefined;

  /**
   * <p>The properties of the provider service.</p>
   * @public
   */
  providerProperties?: ProviderProperties | undefined;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowInput {
  /**
   * <p>The name of the workflow. There can't be multiple <code>MatchingWorkflows</code> with
   *          the same name.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>MatchingWorkflow</code>.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaAttributeType = {
  ADDRESS: "ADDRESS",
  ADDRESS_CITY: "ADDRESS_CITY",
  ADDRESS_COUNTRY: "ADDRESS_COUNTRY",
  ADDRESS_POSTALCODE: "ADDRESS_POSTALCODE",
  ADDRESS_STATE: "ADDRESS_STATE",
  ADDRESS_STREET1: "ADDRESS_STREET1",
  ADDRESS_STREET2: "ADDRESS_STREET2",
  ADDRESS_STREET3: "ADDRESS_STREET3",
  DATE: "DATE",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  NAME: "NAME",
  NAME_FIRST: "NAME_FIRST",
  NAME_LAST: "NAME_LAST",
  NAME_MIDDLE: "NAME_MIDDLE",
  PHONE: "PHONE",
  PHONE_COUNTRYCODE: "PHONE_COUNTRYCODE",
  PHONE_NUMBER: "PHONE_NUMBER",
  PROVIDER_ID: "PROVIDER_ID",
  STRING: "STRING",
  UNIQUE_ID: "UNIQUE_ID",
} as const;

/**
 * @public
 */
export type SchemaAttributeType = (typeof SchemaAttributeType)[keyof typeof SchemaAttributeType];

/**
 * <p>An object containing <code>FieldName</code>, <code>Type</code>, <code>GroupName</code>,
 *             <code>MatchKey</code>, <code>Hashing</code>, and <code>SubType</code>.</p>
 * @public
 */
export interface SchemaInputAttribute {
  /**
   * <p>A string containing the field name.</p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>The type of the attribute, selected from a list of values.</p>
   * @public
   */
  type: SchemaAttributeType | undefined;

  /**
   * <p>A string that instructs Entity Resolution to combine several columns into a unified
   *          column with the identical attribute type. </p>
   *          <p>For example, when working with columns such as <code>first_name</code>,
   *             <code>middle_name</code>, and <code>last_name</code>, assigning them a common
   *             <code>groupName</code> will prompt Entity Resolution to concatenate them into a single
   *          value.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>A key that allows grouping of multiple input attributes into a unified matching group. </p>
   *          <p>For example, consider a scenario where the source table contains various addresses, such
   *          as <code>business_address</code> and <code>shipping_address</code>.  By assigning a
   *             <code>matchKey</code> called <code>address</code> to both attributes, Entity Resolution
   *          will match records across these fields to create a consolidated matching group.</p>
   *          <p>If no <code>matchKey</code> is specified for a column, it won't be utilized for matching
   *          purposes but will still be included in the output table.</p>
   * @public
   */
  matchKey?: string | undefined;

  /**
   * <p>The subtype of the attribute, selected from a list of values.</p>
   * @public
   */
  subType?: string | undefined;

  /**
   * <p> Indicates if the column values are hashed in the schema input. If the value is set to
   *             <code>TRUE</code>, the column values are hashed. If the value is set to
   *             <code>FALSE</code>, the column values are cleartext.</p>
   * @public
   */
  hashed?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateSchemaMappingInput {
  /**
   * <p>The name of the schema. There can't be multiple <code>SchemaMappings</code> with the
   *          same name.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>A description of the schema.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSchemaMappingOutput {
  /**
   * <p>The name of the schema.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   * @public
   */
  schemaArn: string | undefined;

  /**
   * <p>A description of the schema.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingWorkflowInput {
  /**
   * <p>The name of the workflow to be deleted.</p>
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingWorkflowOutput {
  /**
   * <p>A successful operation message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdNamespaceInput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdNamespaceOutput {
  /**
   * <p>A successful operation message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowOutput {
  /**
   * <p>A successful operation message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStatementInput {
  /**
   * <p>The ARN of the resource for which the policy need to be deleted.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A statement identifier that differentiates the statement from others in the same
   *          policy.</p>
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStatementOutput {
  /**
   * <p>The ARN of the resource for which the policy need to be deleted.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the deleted policy.</p>
   * @public
   */
  token: string | undefined;

  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingInput {
  /**
   * <p>The name of the schema to delete.</p>
   * @public
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingOutput {
  /**
   * <p>A successful operation message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingJobInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>An object containing an error message, if there was an error.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error message from the job, if there is one.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>An object containing <code>InputRecords</code>, <code>RecordsNotProcessed</code>,
 *             <code>TotalRecordsProcessed</code>, <code>TotalMappedRecords</code>,
 *             <code>TotalMappedSourceRecords</code>, and <code>TotalMappedTargetRecords</code>.</p>
 * @public
 */
export interface IdMappingJobMetrics {
  /**
   * <p>The total number of records that were input for processing.</p>
   * @public
   */
  inputRecords?: number | undefined;

  /**
   * <p>The total number of records that were processed.</p>
   * @public
   */
  totalRecordsProcessed?: number | undefined;

  /**
   * <p>The total number of records that did not get processed.</p>
   * @public
   */
  recordsNotProcessed?: number | undefined;

  /**
   * <p> The total number of records that were mapped.</p>
   * @public
   */
  totalMappedRecords?: number | undefined;

  /**
   * <p> The total number of mapped source records.</p>
   * @public
   */
  totalMappedSourceRecords?: number | undefined;

  /**
   * <p> The total number of distinct mapped target records.</p>
   * @public
   */
  totalMappedTargetRecords?: number | undefined;
}

/**
 * <p>An object containing <code>KMSArn</code>, <code>OutputS3Path</code>, and
 *             <code>RoleARN</code>.</p>
 * @public
 */
export interface IdMappingJobOutputSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access Amazon Web Services resources on your behalf as part of workflow
   *          execution.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   * @public
   */
  outputS3Path: string | undefined;

  /**
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use
   *          an Entity Resolution managed KMS key.</p>
   * @public
   */
  KMSArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 */
export interface GetIdMappingJobOutput {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The current status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The time at which the job was started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The time at which the job has finished.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Metrics associated with the execution, specifically total records processed, unique IDs
   *          generated, and records the execution skipped.</p>
   * @public
   */
  metrics?: IdMappingJobMetrics | undefined;

  /**
   * <p>An object containing an error message, if there was an error.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects.</p>
   * @public
   */
  outputSourceConfig?: IdMappingJobOutputSource[] | undefined;
}

/**
 * @public
 */
export interface GetIdMappingWorkflowInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>IdMappingWorkflow</code> .</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code> and <code>KMSArn</code>.</p>
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * <p>An object which defines the ID mapping technique and any additional
   *          configurations.</p>
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * <p>The timestamp of when the workflow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the workflow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access Amazon Web Services resources on your behalf.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIdNamespaceInput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;
}

/**
 * @public
 */
export interface GetIdNamespaceOutput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ID namespace.</p>
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * <p>Determines the properties of <code>IdMappingWorkflow</code> where this
   *             <code>IdNamespace</code> can be used as a <code>Source</code> or a
   *          <code>Target</code>.</p>
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * <p>The type of ID namespace. There are two types: <code>SOURCE</code> and
   *             <code>TARGET</code>.</p>
   *          <p>The <code>SOURCE</code> contains configurations for <code>sourceId</code> data that will
   *          be processed in an ID mapping workflow. </p>
   *          <p>The <code>TARGET</code> contains a configuration of <code>targetId</code> to which all
   *             <code>sourceIds</code> will resolve to.</p>
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access the resources defined in this <code>IdNamespace</code> on your behalf
   *          as part of a workflow run.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The timestamp of when the ID namespace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the ID namespace was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMatchIdInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The record to fetch the Match ID for.</p>
   * @public
   */
  record: Record<string, string> | undefined;

  /**
   * <p>Normalizes the attributes defined in the schema in the input data. For example, if an
   *          attribute has an <code>AttributeType</code> of <code>PHONE_NUMBER</code>, and the data in
   *          the input table is in a format of 1234567890, Entity Resolution will normalize this field
   *          in the output to (123)-456-7890.</p>
   * @public
   */
  applyNormalization?: boolean | undefined;
}

/**
 * @public
 */
export interface GetMatchIdOutput {
  /**
   * <p>The unique identifiers for this group of match records.</p>
   * @public
   */
  matchId?: string | undefined;

  /**
   * <p>The rule the record matched on.</p>
   * @public
   */
  matchRule?: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingJobInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>An object containing <code>InputRecords</code>, <code>TotalRecordsProcessed</code>,
 *             <code>MatchIDs</code>, and <code>RecordsNotProcessed</code>.</p>
 * @public
 */
export interface JobMetrics {
  /**
   * <p>The total number of input records.</p>
   * @public
   */
  inputRecords?: number | undefined;

  /**
   * <p>The total number of records processed.</p>
   * @public
   */
  totalRecordsProcessed?: number | undefined;

  /**
   * <p>The total number of records that did not get processed.</p>
   * @public
   */
  recordsNotProcessed?: number | undefined;

  /**
   * <p>The total number of <code>matchID</code>s generated.</p>
   * @public
   */
  matchIDs?: number | undefined;
}

/**
 * <p>An object containing <code>KMSArn</code>, <code>OutputS3Path</code>, and
 *             <code>RoleArn</code>.</p>
 * @public
 */
export interface JobOutputSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access Amazon Web Services resources on your behalf as part of workflow
   *          execution.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The S3 path to which Entity Resolution will write the output table.</p>
   * @public
   */
  outputS3Path: string | undefined;

  /**
   * <p>Customer KMS ARN for encryption at rest. If not provided, system will use
   *          an Entity Resolution managed KMS key.</p>
   * @public
   */
  KMSArn?: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingJobOutput {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The current status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The time at which the job was started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The time at which the job has finished.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Metrics associated with the execution, specifically total records processed, unique IDs
   *          generated, and records the execution skipped.</p>
   * @public
   */
  metrics?: JobMetrics | undefined;

  /**
   * <p>An object containing an error message, if there was an error.</p>
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects.</p>
   * @public
   */
  outputSourceConfig?: JobOutputSource[] | undefined;
}

/**
 * @public
 */
export interface GetMatchingWorkflowInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>MatchingWorkflow</code>.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>The timestamp of when the workflow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the workflow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access Amazon Web Services resources on your behalf.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which the policy need to be
   *          returned.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyOutput {
  /**
   * <p>The Entity Resolution resource ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  token: string | undefined;

  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetProviderServiceInput {
  /**
   * <p>The name of the provider. This name is typically the company name.</p>
   * @public
   */
  providerName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the product that the provider service provides.</p>
   * @public
   */
  providerServiceName: string | undefined;
}

/**
 * <p>The provider schema attribute.</p>
 * @public
 */
export interface ProviderSchemaAttribute {
  /**
   * <p>The field name.</p>
   * @public
   */
  fieldName: string | undefined;

  /**
   * <p>The type of the provider schema attribute.</p>
   * @public
   */
  type: SchemaAttributeType | undefined;

  /**
   * <p>The sub type of the provider schema attribute.</p>
   * @public
   */
  subType?: string | undefined;

  /**
   * <p>The hashing attribute of the provider schema.</p>
   * @public
   */
  hashing?: boolean | undefined;
}

/**
 * <p>The input schema supported by provider service.</p>
 * @public
 */
export interface ProviderComponentSchema {
  /**
   * <p>Input schema for the provider service.</p>
   * @public
   */
  schemas?: string[][] | undefined;

  /**
   * <p>The provider schema attributes.</p>
   * @public
   */
  providerSchemaAttributes?: ProviderSchemaAttribute[] | undefined;
}

/**
 * <p>The identifiers of the provider service, from Data Exchange.</p>
 * @public
 */
export interface ProviderMarketplaceConfiguration {
  /**
   * <p>The dataset ID on Data Exchange.</p>
   * @public
   */
  dataSetId: string | undefined;

  /**
   * <p>The revision ID on Data Exchange.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The asset ID on Data Exchange.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The listing ID on Data Exchange.</p>
   * @public
   */
  listingId: string | undefined;
}

/**
 * <p>The required configuration fields to use with the provider service.</p>
 * @public
 */
export type ProviderEndpointConfiguration =
  | ProviderEndpointConfiguration.MarketplaceConfigurationMember
  | ProviderEndpointConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderEndpointConfiguration {
  /**
   * <p>The identifiers of the provider service, from Data Exchange.</p>
   * @public
   */
  export interface MarketplaceConfigurationMember {
    marketplaceConfiguration: ProviderMarketplaceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    marketplaceConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    marketplaceConfiguration: (value: ProviderMarketplaceConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProviderEndpointConfiguration, visitor: Visitor<T>): T => {
    if (value.marketplaceConfiguration !== undefined)
      return visitor.marketplaceConfiguration(value.marketplaceConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The provider configuration required for different ID namespace types.</p>
 * @public
 */
export interface ProviderIdNameSpaceConfiguration {
  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Configurations required for the target ID namespace.</p>
   * @public
   */
  providerTargetConfigurationDefinition?: __DocumentType | undefined;

  /**
   * <p>Configurations required for the source ID namespace.</p>
   * @public
   */
  providerSourceConfigurationDefinition?: __DocumentType | undefined;
}

/**
 * <p>The required configuration fields to give intermediate access to a provider
 *          service.</p>
 * @public
 */
export interface ProviderIntermediateDataAccessConfiguration {
  /**
   * <p>The Amazon Web Services account that provider can use to read or write data into the
   *          customer's intermediate S3 bucket.</p>
   * @public
   */
  awsAccountIds?: string[] | undefined;

  /**
   * <p>The S3 bucket actions that the provider requires permission for.</p>
   * @public
   */
  requiredBucketActions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ServiceType = {
  ASSIGNMENT: "ASSIGNMENT",
  ID_MAPPING: "ID_MAPPING",
} as const;

/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 */
export interface GetProviderServiceOutput {
  /**
   * <p>The name of the provider. This name is typically the company name.</p>
   * @public
   */
  providerName: string | undefined;

  /**
   * <p>The name of the product that the provider service provides. </p>
   * @public
   */
  providerServiceName: string | undefined;

  /**
   * <p>The display name of the provider service.</p>
   * @public
   */
  providerServiceDisplayName: string | undefined;

  /**
   * <p>The type of provider service.</p>
   * @public
   */
  providerServiceType: ServiceType | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the provider
   *          service.</p>
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * <p>The definition of the provider configuration.</p>
   * @public
   */
  providerConfigurationDefinition?: __DocumentType | undefined;

  /**
   * <p>The provider configuration required for different ID namespace types.</p>
   * @public
   */
  providerIdNameSpaceConfiguration?: ProviderIdNameSpaceConfiguration | undefined;

  /**
   * <p>Provider service job configurations.</p>
   * @public
   */
  providerJobConfiguration?: __DocumentType | undefined;

  /**
   * <p>The required configuration fields to use with the provider service.</p>
   * @public
   */
  providerEndpointConfiguration: ProviderEndpointConfiguration | undefined;

  /**
   * <p>Specifies whether output data from the provider is anonymized. A value of
   *             <code>TRUE</code> means the output will be anonymized and you can't relate the data that
   *          comes back from the provider to the identifying input. A value of <code>FALSE</code> means
   *          the output won't be anonymized and you can relate the data that comes back from the
   *          provider to your source data. </p>
   * @public
   */
  anonymizedOutput: boolean | undefined;

  /**
   * <p>The definition of the provider entity output.</p>
   * @public
   */
  providerEntityOutputDefinition: __DocumentType | undefined;

  /**
   * <p>The Amazon Web Services accounts and the S3 permissions that are required by some
   *          providers to create an S3 bucket for intermediate data storage.</p>
   * @public
   */
  providerIntermediateDataAccessConfiguration?: ProviderIntermediateDataAccessConfiguration | undefined;

  /**
   * <p>Input schema for the provider service.</p>
   * @public
   */
  providerComponentSchema?: ProviderComponentSchema | undefined;
}

/**
 * @public
 */
export interface GetSchemaMappingInput {
  /**
   * <p>The name of the schema to be retrieved.</p>
   * @public
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaMappingOutput {
  /**
   * <p>The name of the schema.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *          SchemaMapping.</p>
   * @public
   */
  schemaArn: string | undefined;

  /**
   * <p>A description of the schema.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          Venice uses for matching.</p>
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether the schema mapping has been applied to a workflow.</p>
   * @public
   */
  hasWorkflows: boolean | undefined;
}

/**
 * @public
 */
export interface ListIdMappingJobsInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object containing the <code>JobId</code>, <code>Status</code>,
 *          <code>StartTime</code>, and <code>EndTime</code> of a job.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The current status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The time at which the job was started.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The time at which the job has finished.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListIdMappingJobsOutput {
  /**
   * <p>A list of <code>JobSummary</code> objects.</p>
   * @public
   */
  jobs?: JobSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdMappingWorkflowsInput {
  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A list of <code>IdMappingWorkflowSummary</code> objects, each of which contain the
 *          fields <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, and
 *             <code>UpdatedAt</code>.</p>
 * @public
 */
export interface IdMappingWorkflowSummary {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>IdMappingWorkflow</code>.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>The timestamp of when the workflow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the workflow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListIdMappingWorkflowsOutput {
  /**
   * <p>A list of <code>IdMappingWorkflowSummary</code> objects.</p>
   * @public
   */
  workflowSummaries?: IdMappingWorkflowSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdNamespacesInput {
  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of <code>IdNamespace</code> objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The settings for the ID namespace for the ID mapping workflow job.</p>
 * @public
 */
export interface IdNamespaceIdMappingWorkflowMetadata {
  /**
   * <p>The type of ID mapping.</p>
   * @public
   */
  idMappingType: IdMappingType | undefined;
}

/**
 * <p>A summary of ID namespaces.</p>
 * @public
 */
export interface IdNamespaceSummary {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ID namespace.</p>
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An object which defines any additional configurations required by the ID mapping
   *          workflow.</p>
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowMetadata[] | undefined;

  /**
   * <p>The type of ID namespace. There are two types: <code>SOURCE</code> and
   *             <code>TARGET</code>.</p>
   *          <p>The <code>SOURCE</code> contains configurations for <code>sourceId</code> data that will
   *          be processed in an ID mapping workflow. </p>
   *          <p>The <code>TARGET</code> contains a configuration of <code>targetId</code> which all
   *             <code>sourceIds</code> will resolve to.</p>
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * <p>The timestamp of when the ID namespace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the ID namespace was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListIdNamespacesOutput {
  /**
   * <p>A list of <code>IdNamespaceSummaries</code> objects.</p>
   * @public
   */
  idNamespaceSummaries?: IdNamespaceSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMatchingJobsInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMatchingJobsOutput {
  /**
   * <p>A list of <code>JobSummary</code> objects, each of which contain the ID, status, start
   *          time, and end time of a job.</p>
   * @public
   */
  jobs?: JobSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsInput {
  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields
 *             <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>,
 *             <code>UpdatedAt</code>.</p>
 * @public
 */
export interface MatchingWorkflowSummary {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>MatchingWorkflow</code>.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>The timestamp of when the workflow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the workflow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The method that has been specified for data matching, either using matching provided by
   *             Entity Resolution or through a provider service.</p>
   * @public
   */
  resolutionType: ResolutionType | undefined;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsOutput {
  /**
   * <p>A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields
   *             <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, and
   *             <code>UpdatedAt</code>.</p>
   * @public
   */
  workflowSummaries?: MatchingWorkflowSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProviderServicesInput {
  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The name of the provider. This name is typically the company name.</p>
   * @public
   */
  providerName?: string | undefined;
}

/**
 * <p>A list of <code>ProviderService</code> objects, each of which contain the fields
 *             <code>providerName</code>, <code>providerServiceArn</code>,
 *             <code>providerServiceName</code>, and <code>providerServiceType</code>.</p>
 * @public
 */
export interface ProviderServiceSummary {
  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>providerService</code>.</p>
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * <p>The name of the provider. This name is typically the company name.</p>
   * @public
   */
  providerName: string | undefined;

  /**
   * <p>The display name of the provider service.</p>
   * @public
   */
  providerServiceDisplayName: string | undefined;

  /**
   * <p>The name of the product that the provider service provides.</p>
   * @public
   */
  providerServiceName: string | undefined;

  /**
   * <p>The type of provider service.</p>
   * @public
   */
  providerServiceType: ServiceType | undefined;
}

/**
 * @public
 */
export interface ListProviderServicesOutput {
  /**
   * <p>A list of <code>ProviderServices</code> objects.</p>
   * @public
   */
  providerServiceSummaries?: ProviderServiceSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaMappingsInput {
  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>An object containing <code>SchemaName</code>, <code>SchemaArn</code>,
 *             <code>CreatedAt</code>, and<code>UpdatedAt</code>.</p>
 * @public
 */
export interface SchemaMappingSummary {
  /**
   * <p>The name of the schema.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   * @public
   */
  schemaArn: string | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the <code>SchemaMapping</code> was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Specifies whether the schema mapping has been applied to a workflow.</p>
   * @public
   */
  hasWorkflows: boolean | undefined;
}

/**
 * @public
 */
export interface ListSchemaMappingsOutput {
  /**
   * <p>A list of <code>SchemaMappingSummary</code> objects, each of which contain the fields
   *             <code>SchemaName</code>, <code>SchemaArn</code>, <code>CreatedAt</code>,
   *             <code>UpdatedAt</code>.</p>
   * @public
   */
  schemaList?: SchemaMappingSummary[] | undefined;

  /**
   * <p>The pagination token from the previous API call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource for which you want to view tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutPolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which the policy needs to be
   *          updated.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>The resource-based policy.</p>
   *          <important>
   *             <p>If you set the value of the <code>effect</code> parameter in the <code>policy</code>
   *             to <code>Deny</code> for the <code>PutPolicy</code> operation, you must also set the
   *             value of the <code>effect</code> parameter to <code>Deny</code> for the
   *                <code>AddPolicyStatement</code> operation.</p>
   *          </important>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutPolicyOutput {
  /**
   * <p>The Entity Resolution resource ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  token: string | undefined;

  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface StartIdMappingJobInput {
  /**
   * <p>The name of the ID mapping job to be retrieved.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects.</p>
   * @public
   */
  outputSourceConfig?: IdMappingJobOutputSource[] | undefined;
}

/**
 * @public
 */
export interface StartIdMappingJobOutput {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects.</p>
   * @public
   */
  outputSourceConfig?: IdMappingJobOutputSource[] | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobInput {
  /**
   * <p>The name of the matching job to be retrieved.</p>
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobOutput {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource for which you want to view tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource for which you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateIdMappingWorkflowInput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code> and <code>KMSArn</code>.</p>
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * <p>An object which defines the ID mapping technique and any additional
   *          configurations.</p>
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access Amazon Web Services resources on your behalf.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdMappingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow role. Entity Resolution assumes this role
   *          to access Amazon Web Services resources on your behalf.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code> and <code>KMSArn</code>.</p>
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * <p>An object which defines the ID mapping technique and any additional
   *          configurations.</p>
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access Amazon Web Services resources on your behalf.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdNamespaceInput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * <p>Determines the properties of <code>IdMappingWorkflow</code> where this
   *             <code>IdNamespace</code> can be used as a <code>Source</code> or a
   *          <code>Target</code>.</p>
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access the resources defined in this <code>IdNamespace</code> on your behalf
   *          as part of a workflow run.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdNamespaceOutput {
  /**
   * <p>The name of the ID namespace.</p>
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ID namespace.</p>
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * <p>The description of the ID namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * <p>Determines the properties of <code>IdMappingWorkflow</code> where this
   *             <code>IdNamespace</code> can be used as a <code>Source</code> or a
   *          <code>Target</code>.</p>
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * <p>The type of ID namespace. There are two types: <code>SOURCE</code> and
   *             <code>TARGET</code>.</p>
   *          <p>The <code>SOURCE</code> contains configurations for <code>sourceId</code> data that will
   *          be processed in an ID mapping workflow. </p>
   *          <p>The <code>TARGET</code> contains a configuration of <code>targetId</code> to which all
   *             <code>sourceIds</code> will resolve to.</p>
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to access the resources defined in this <code>IdNamespace</code> on your behalf
   *          as part of a workflow run.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The timestamp of when the ID namespace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the ID namespace was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowInput {
  /**
   * <p>The name of the workflow to be retrieved.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>.</p>
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to
   *          create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowOutput {
  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>A description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>InputSource</code> objects, which have the fields
   *             <code>InputSourceARN</code> and <code>SchemaName</code>.</p>
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * <p>A list of <code>OutputSource</code> objects, each of which contains fields
   *             <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and
   *          <code>Output</code>.</p>
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * <p>An object which defines the <code>resolutionType</code> and the
   *             <code>ruleBasedProperties</code>
   *          </p>
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * <p>An object which defines an incremental run type and has only
   *             <code>incrementalRunType</code> as a field.</p>
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes
   *          this role to create resources on your behalf as part of workflow execution.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaMappingInput {
  /**
   * <p>The name of the schema. There can't be multiple <code>SchemaMappings</code> with the
   *          same name.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>A description of the schema.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaMappingOutput {
  /**
   * <p>The name of the schema.</p>
   * @public
   */
  schemaName: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) that Entity Resolution generated for the
   *             <code>SchemaMapping</code>.</p>
   * @public
   */
  schemaArn: string | undefined;

  /**
   * <p>A description of the schema.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds
   *          to a column the source data table, and contains column name plus additional information
   *          that Entity Resolution uses for matching.</p>
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @internal
 */
export const GetMatchIdInputFilterSensitiveLog = (obj: GetMatchIdInput): any => ({
  ...obj,
  ...(obj.record && { record: SENSITIVE_STRING }),
});
