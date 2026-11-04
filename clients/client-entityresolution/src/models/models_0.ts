// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AttributeMatchingModel,
  DeleteUniqueIdErrorType,
  DeleteUniqueIdStatus,
  IdMappingIncrementalRunType,
  IdMappingType,
  IdMappingWorkflowRuleDefinitionType,
  IdNamespaceType,
  IncrementalRunType,
  JobStatus,
  JobType,
  MatchPurpose,
  ProcessingType,
  RecordMatchingModel,
  ResolutionType,
  SchemaAttributeType,
  ServiceType,
  StatementEffect,
} from "./enums";

/**
 * @public
 */
export interface AddPolicyStatementInput {
  /**
   * The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A statement identifier that differentiates the statement from others in the same policy.
   *
   * @public
   */
  statementId: string | undefined;

  /**
   * Determines whether the permissions specified in the policy are to be allowed (`Allow`) or denied (`Deny`).
   *
   * > **Important:** If you set the value of the `effect` parameter to `Deny` for the `AddPolicyStatement` operation, you must also set the value of the `effect` parameter in the `policy` to `Deny` for the `PutPolicy` operation.
   *
   * @public
   */
  effect: StatementEffect | undefined;

  /**
   * The action that the principal can use on the resource.
   *
   * For example, `entityresolution:GetIdMappingJob`, `entityresolution:GetMatchingJob`.
   *
   * @public
   */
  action: string[] | undefined;

  /**
   * The Amazon Web Services service or Amazon Web Services account that can access the resource defined as ARN.
   *
   * @public
   */
  principal: string[] | undefined;

  /**
   * A set of condition keys that you can use in key policies.
   *
   * @public
   */
  condition?: string | undefined;
}

/**
 * @public
 */
export interface AddPolicyStatementOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The resource-based policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteUniqueIdInput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The input source for the batch delete unique ID operation.
   *
   * @public
   */
  inputSource?: string | undefined;

  /**
   * The unique IDs to delete.
   *
   * @public
   */
  uniqueIds: string[] | undefined;
}

/**
 * The deleted unique ID.
 *
 * @public
 */
export interface DeletedUniqueId {
  /**
   * The unique ID of the deleted item.
   *
   * @public
   */
  uniqueId: string | undefined;
}

/**
 * The error information provided when the delete unique ID operation doesn't complete.
 *
 * @public
 */
export interface DeleteUniqueIdError {
  /**
   * The unique ID that couldn't be deleted.
   *
   * @public
   */
  uniqueId: string | undefined;

  /**
   * The error type for the delete unique ID operation.
   *
   * The `SERVICE_ERROR` value indicates that an internal service-side problem occurred during the deletion operation.
   *
   * The `VALIDATION_ERROR` value indicates that the deletion operation couldn't complete because of invalid input parameters or data.
   *
   * @public
   */
  errorType: DeleteUniqueIdErrorType | undefined;
}

/**
 * @public
 */
export interface BatchDeleteUniqueIdOutput {
  /**
   * The status of the batch delete unique ID operation.
   *
   * @public
   */
  status: DeleteUniqueIdStatus | undefined;

  /**
   * The errors from deleting multiple unique IDs.
   *
   * @public
   */
  errors: DeleteUniqueIdError[] | undefined;

  /**
   * The unique IDs that were deleted.
   *
   * @public
   */
  deleted: DeletedUniqueId[] | undefined;

  /**
   * The unique IDs that were disconnected.
   *
   * @public
   */
  disconnectedUniqueIds: string[] | undefined;
}

/**
 * The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
 *
 * @public
 */
export interface IntermediateSourceConfiguration {
  /**
   * The Amazon S3 location (bucket and prefix). For example: `s3://provider_bucket/DOC-EXAMPLE-BUCKET`
   *
   * @public
   */
  intermediateS3Path: string | undefined;
}

/**
 * An object containing the `providerServiceARN`, `intermediateSourceConfiguration`, and `providerConfiguration`.
 *
 * @public
 */
export interface ProviderProperties {
  /**
   * The ARN of the provider service.
   *
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * The required configuration fields to use with the provider service.
   *
   * @public
   */
  providerConfiguration?: __DocumentType | undefined;

  /**
   * The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
   *
   * @public
   */
  intermediateSourceConfiguration?: IntermediateSourceConfiguration | undefined;
}

/**
 * An object containing the `ruleName` and `matchingKeys`.
 *
 * @public
 */
export interface Rule {
  /**
   * A name for the matching rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * A list of `MatchingKeys`. The `MatchingKeys` must have been defined in the `SchemaMapping`. Two records are considered to match according to this rule if all of the `MatchingKeys` match.
   *
   * @public
   */
  matchingKeys: string[] | undefined;
}

/**
 * An object that defines the list of matching rules to run in an ID mapping workflow.
 *
 * @public
 */
export interface IdMappingRuleBasedProperties {
  /**
   * The rules that can be used for ID mapping.
   *
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * The set of rules you can use in an ID mapping workflow. The limitations specified for the source or target to define the match rules must be compatible.
   *
   * @public
   */
  ruleDefinitionType: IdMappingWorkflowRuleDefinitionType | undefined;

  /**
   * The comparison type. You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `attributeMatchingModel`.
   *
   * If you choose `ONE_TO_ONE`, the system can only match attributes if the sub-types are an exact match. For example, for the `Email` attribute type, the system will only consider it a match if the value of the `Email` field of Profile A matches the value of the `Email` field of Profile B.
   *
   * If you choose `MANY_TO_MANY`, the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A matches the value of the `BusinessEmail` field of Profile B, the two profiles are matched on the `Email` attribute type.
   *
   * @public
   */
  attributeMatchingModel: AttributeMatchingModel | undefined;

  /**
   * The type of matching record that is allowed to be used in an ID mapping workflow.
   *
   * If the value is set to `ONE_SOURCE_TO_ONE_TARGET`, only one record in the source can be matched to the same record in the target.
   *
   * If the value is set to `MANY_SOURCE_TO_ONE_TARGET`, multiple records in the source can be matched to one record in the target.
   *
   * @public
   */
  recordMatchingModel: RecordMatchingModel | undefined;
}

/**
 * An object which defines the ID mapping technique and any additional configurations.
 *
 * @public
 */
export interface IdMappingTechniques {
  /**
   * The type of ID mapping.
   *
   * @public
   */
  idMappingType: IdMappingType | undefined;

  /**
   * An object which defines any additional configurations required by rule-based matching.
   *
   * @public
   */
  ruleBasedProperties?: IdMappingRuleBasedProperties | undefined;

  /**
   * An object which defines any additional configurations required by the provider service.
   *
   * @public
   */
  providerProperties?: ProviderProperties | undefined;
}

/**
 * Incremental run configuration for an ID mapping workflow.
 *
 * @public
 */
export interface IdMappingIncrementalRunConfig {
  /**
   * The incremental run type for an ID mapping workflow.
   *
   * It takes only one value: `ON_DEMAND`. This setting runs the ID mapping workflow when it's manually triggered through the `StartIdMappingJob` API.
   *
   * @public
   */
  incrementalRunType?: IdMappingIncrementalRunType | undefined;
}

/**
 * An object containing `inputSourceARN`, `schemaName`, and `type`.
 *
 * @public
 */
export interface IdMappingWorkflowInputSource {
  /**
   * An Glue table Amazon Resource Name (ARN) or a matching workflow ARN for the input source table.
   *
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * The name of the schema to be retrieved.
   *
   * @public
   */
  schemaName?: string | undefined;

  /**
   * The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   *
   * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   *
   * The `TARGET` contains a configuration of `targetId` which all `sourceIds` will resolve to.
   *
   * @public
   */
  type?: IdNamespaceType | undefined;
}

/**
 * The output source for the ID mapping workflow.
 *
 * @public
 */
export interface IdMappingWorkflowOutputSource {
  /**
   * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
   *
   * @public
   */
  KMSArn?: string | undefined;

  /**
   * The S3 path to which Entity Resolution will write the output table.
   *
   * @public
   */
  outputS3Path: string | undefined;
}

/**
 * @public
 */
export interface CreateIdMappingWorkflowInput {
  /**
   * The name of the workflow. There can't be multiple `IdMappingWorkflows` with the same name.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `outputS3Path` and `KMSArn`.
   *
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * An object which defines the ID mapping technique and any additional configurations.
   *
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * The incremental run configuration for the ID mapping workflow.
   *
   * @public
   */
  incrementalRunConfig?: IdMappingIncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIdMappingWorkflowOutput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `IDMappingWorkflow`.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `outputS3Path` and `KMSArn`.
   *
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * An object which defines the ID mapping technique and any additional configurations.
   *
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * The incremental run configuration for the ID mapping workflow.
   *
   * @public
   */
  incrementalRunConfig?: IdMappingIncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * An object containing `providerConfiguration` and `providerServiceArn`.
 *
 * @public
 */
export interface NamespaceProviderProperties {
  /**
   * The Amazon Resource Name (ARN) of the provider service.
   *
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * An object which defines any additional configurations required by the provider service.
   *
   * @public
   */
  providerConfiguration?: __DocumentType | undefined;
}

/**
 * The rule-based properties of an ID namespace. These properties define how the ID namespace can be used in an ID mapping workflow.
 *
 * @public
 */
export interface NamespaceRuleBasedProperties {
  /**
   * The rules for the ID namespace.
   *
   * @public
   */
  rules?: Rule[] | undefined;

  /**
   * The sets of rules you can use in an ID mapping workflow. The limitations specified for the source and target must be compatible.
   *
   * @public
   */
  ruleDefinitionTypes?: IdMappingWorkflowRuleDefinitionType[] | undefined;

  /**
   * The comparison type. You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `attributeMatchingModel`.
   *
   * If you choose `ONE_TO_ONE`, the system can only match attributes if the sub-types are an exact match. For example, for the `Email` attribute type, the system will only consider it a match if the value of the `Email` field of Profile A matches the value of the `Email` field of Profile B.
   *
   * If you choose `MANY_TO_MANY`, the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A matches the value of `BusinessEmail` field of Profile B, the two profiles are matched on the `Email` attribute type.
   *
   * @public
   */
  attributeMatchingModel?: AttributeMatchingModel | undefined;

  /**
   * The type of matching record that is allowed to be used in an ID mapping workflow.
   *
   * If the value is set to `ONE_SOURCE_TO_ONE_TARGET`, only one record in the source is matched to one record in the target.
   *
   * If the value is set to `MANY_SOURCE_TO_ONE_TARGET`, all matching records in the source are matched to one record in the target.
   *
   * @public
   */
  recordMatchingModels?: RecordMatchingModel[] | undefined;
}

/**
 * An object containing `idMappingType`, `providerProperties`, and `ruleBasedProperties`.
 *
 * @public
 */
export interface IdNamespaceIdMappingWorkflowProperties {
  /**
   * The type of ID mapping.
   *
   * @public
   */
  idMappingType: IdMappingType | undefined;

  /**
   * An object which defines any additional configurations required by rule-based matching.
   *
   * @public
   */
  ruleBasedProperties?: NamespaceRuleBasedProperties | undefined;

  /**
   * An object which defines any additional configurations required by the provider service.
   *
   * @public
   */
  providerProperties?: NamespaceProviderProperties | undefined;
}

/**
 * An object containing `inputSourceARN` and `schemaName`.
 *
 * @public
 */
export interface IdNamespaceInputSource {
  /**
   * An Glue table Amazon Resource Name (ARN) or a matching workflow ARN for the input source table.
   *
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * The name of the schema.
   *
   * @public
   */
  schemaName?: string | undefined;
}

/**
 * @public
 */
export interface CreateIdNamespaceInput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * Determines the properties of `IdMappingWorflow` where this `IdNamespace` can be used as a `Source` or a `Target`.
   *
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   *
   * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   *
   * The `TARGET` contains a configuration of `targetId` to which all `sourceIds` will resolve to.
   *
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this `IdNamespace` on your behalf as part of the workflow run.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIdNamespaceOutput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ID namespace.
   *
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * Determines the properties of `IdMappingWorkflow` where this `IdNamespace` can be used as a `Source` or a `Target`.
   *
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   *
   * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   *
   * The `TARGET` contains a configuration of `targetId` to which all `sourceIds` will resolve to.
   *
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in `inputSourceConfig` on your behalf as part of the workflow run.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The timestamp of when the ID namespace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the ID namespace was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Optional. An object that defines the incremental run type. This object contains only the `incrementalRunType` field, which appears as "Automatic" in the console.
 *
 * > **Important:** For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
 *
 * @public
 */
export interface IncrementalRunConfig {
  /**
   * The type of incremental run. The only valid value is `IMMEDIATE`. This appears as "Automatic" in the console.
   *
   * > **Important:** For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
   *
   * @public
   */
  incrementalRunType?: IncrementalRunType | undefined;
}

/**
 * An object containing `inputSourceARN`, `schemaName`, and `applyNormalization`.
 *
 * @public
 */
export interface InputSource {
  /**
   * An Glue table Amazon Resource Name (ARN) for the input source table.
   *
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * The name of the schema to be retrieved.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an `AttributeType` of `PHONE_NUMBER`, and the data in the input table is in a format of 1234567890, Entity Resolution will normalize this field in the output to (123)-456-7890.
   *
   * @public
   */
  applyNormalization?: boolean | undefined;
}

/**
 * Specifies the configuration for integrating with Customer Profiles. This configuration enables Entity Resolution to send matched output directly to Customer Profiles instead of Amazon S3, creating a unified customer view by automatically updating customer profiles based on match clusters.
 *
 * @public
 */
export interface CustomerProfilesIntegrationConfig {
  /**
   * The Amazon Resource Name (ARN) of the Customer Profiles domain where the matched output will be sent.
   *
   * @public
   */
  domainArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Customer Profiles object type that defines the structure for the matched customer data.
   *
   * @public
   */
  objectTypeArn: string | undefined;
}

/**
 * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed`. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
 *
 * @public
 */
export interface OutputAttribute {
  /**
   * A name of a column to be written to the output. This must be an `InputField` name in the schema mapping.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Enables the ability to hash the column values in the output.
   *
   * @public
   */
  hashed?: boolean | undefined;
}

/**
 * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed`. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
 *
 * @public
 */
export interface OutputSource {
  /**
   * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
   *
   * @public
   */
  KMSArn?: string | undefined;

  /**
   * The S3 path to which Entity Resolution will write the output table.
   *
   * @public
   */
  outputS3Path?: string | undefined;

  /**
   * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed`. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
   *
   * @public
   */
  output: OutputAttribute[] | undefined;

  /**
   * Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an `AttributeType` of `PHONE_NUMBER`, and the data in the input table is in a format of 1234567890, Entity Resolution will normalize this field in the output to (123)-456-7890.
   *
   * @public
   */
  applyNormalization?: boolean | undefined;

  /**
   * Specifies the Customer Profiles integration configuration for sending matched output directly to Customer Profiles. When configured, Entity Resolution automatically creates and updates customer profiles based on match clusters, eliminating the need for manual Amazon S3 integration setup.
   *
   * @public
   */
  customerProfilesIntegrationConfig?: CustomerProfilesIntegrationConfig | undefined;
}

/**
 * An object which defines the list of matching rules to run in a matching workflow.
 *
 * @public
 */
export interface RuleBasedProperties {
  /**
   * A list of `Rule` objects, each of which have fields `RuleName` and `MatchingKeys`.
   *
   * @public
   */
  rules: Rule[] | undefined;

  /**
   * The comparison type. You can choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `attributeMatchingModel`.
   *
   * If you choose `ONE_TO_ONE`, the system can only match attributes if the sub-types are an exact match. For example, for the `Email` attribute type, the system will only consider it a match if the value of the `Email` field of Profile A matches the value of the `Email` field of Profile B.
   *
   * If you choose `MANY_TO_MANY`, the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A and the value of `BusinessEmail` field of Profile B matches, the two profiles are matched on the `Email` attribute type.
   *
   * @public
   */
  attributeMatchingModel: AttributeMatchingModel | undefined;

  /**
   * An indicator of whether to generate IDs and index the data or not.
   *
   * If you choose `IDENTIFIER_GENERATION`, the process generates IDs and indexes the data.
   *
   * If you choose `INDEXING`, the process indexes the data without generating IDs.
   *
   * @public
   */
  matchPurpose?: MatchPurpose | undefined;
}

/**
 * An object that contains configuration settings for the matching process in a rule-based matching workflow.
 *
 * @public
 */
export interface MatchingConfig {
  /**
   * Enables transitive matching for the rule-based matching workflow. When enabled, records that match through different rules are grouped together into the same match group.
   *
   * @public
   */
  enableTransitiveMatching?: boolean | undefined;
}

/**
 * An object that defines the `ruleCondition` and the `ruleName` to use in a matching workflow.
 *
 * @public
 */
export interface RuleCondition {
  /**
   * A name for the matching rule.
   *
   * For example: `Rule1`
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * A statement that specifies the conditions for a matching rule.
   *
   * If your data is accurate, use an Exact matching function: `Exact` or `ExactManyToMany`.
   *
   * If your data has variations in spelling or pronunciation, use a Fuzzy matching function: `Cosine`, `Levenshtein`, or `Soundex`.
   *
   * Use operators if you want to combine (`AND`), separate (`OR`), or group matching functions `(...)`.
   *
   * For example: `(Cosine(a, 10) AND Exact(b, true)) OR ExactManyToMany(c, d)`
   *
   * @public
   */
  condition: string | undefined;
}

/**
 * The properties of a rule condition that provides the ability to use more complex syntax.
 *
 * @public
 */
export interface RuleConditionProperties {
  /**
   * A list of rule objects, each of which have fields `ruleName` and `condition`.
   *
   * @public
   */
  rules: RuleCondition[] | undefined;

  /**
   * An object that contains configuration settings for the matching process.
   *
   * @public
   */
  matchingConfig?: MatchingConfig | undefined;
}

/**
 * An object which defines the `resolutionType` and the `ruleBasedProperties`.
 *
 * @public
 */
export interface ResolutionTechniques {
  /**
   * The type of matching workflow to create. Specify one of the following types:
   *
   * - `RULE_MATCHING`: Match records using configurable rule-based criteria
   * - `ML_MATCHING`: Match records using machine learning models
   * - `PROVIDER`: Match records using a third-party matching provider
   *
   * @public
   */
  resolutionType: ResolutionType | undefined;

  /**
   * An object which defines the list of matching rules to run and has a field `rules`, which is a list of rule objects.
   *
   * @public
   */
  ruleBasedProperties?: RuleBasedProperties | undefined;

  /**
   * An object containing the `rules` for a matching workflow.
   *
   * @public
   */
  ruleConditionProperties?: RuleConditionProperties | undefined;

  /**
   * Specifies whether real-time matching is enabled for the rule-based matching workflow. When you enable real-time matching, you can use the `GenerateMatchId` operation with the workflow.
   *
   * @public
   */
  enableRealTimeMatching?: boolean | undefined;

  /**
   * The properties of the provider service.
   *
   * @public
   */
  providerProperties?: ProviderProperties | undefined;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowInput {
  /**
   * The name of the workflow. There can't be multiple `MatchingWorkflows` with the same name.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path`, `applyNormalization`, `KMSArn`, and `output`.
   *
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * An object which defines the `resolutionType` and the `ruleBasedProperties`.
   *
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * Optional. An object that defines the incremental run type. This object contains only the `incrementalRunType` field, which appears as "Automatic" in the console.
   *
   * > **Important:** For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
   *
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMatchingWorkflowOutput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `MatchingWorkflow`.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path`, `applyNormalization`, `KMSArn`, and `output`.
   *
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * An object which defines the `resolutionType` and the `ruleBasedProperties`.
   *
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * An object which defines an incremental run type and has only `incrementalRunType` as a field.
   *
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * A configuration object for defining input data fields in Entity Resolution. The `SchemaInputAttribute` specifies how individual fields in your input data should be processed and matched.
 *
 * @public
 */
export interface SchemaInputAttribute {
  /**
   * A string containing the field name.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * The type of the attribute, selected from a list of values.
   *
   * LiveRamp supports: `NAME` | `NAME_FIRST` | `NAME_MIDDLE` | `NAME_LAST` | `ADDRESS` | `ADDRESS_STREET1` | `ADDRESS_STREET2` | `ADDRESS_STREET3` | `ADDRESS_CITY` | `ADDRESS_STATE` | `ADDRESS_COUNTRY` | `ADDRESS_POSTALCODE` | `PHONE` | `PHONE_NUMBER` | `EMAIL_ADDRESS` | `UNIQUE_ID` | `PROVIDER_ID`
   *
   * TransUnion supports: `NAME` | `NAME_FIRST` | `NAME_LAST` | `ADDRESS` | `ADDRESS_CITY` | `ADDRESS_STATE` | `ADDRESS_COUNTRY` | `ADDRESS_POSTALCODE` | `PHONE_NUMBER` | `EMAIL_ADDRESS` | `UNIQUE_ID` | `IPV4` | `IPV6` | `MAID`
   *
   * Unified ID 2.0 supports: `PHONE_NUMBER` | `EMAIL_ADDRESS` | `UNIQUE_ID`
   *
   * > **Note:**
   * >
   * > Normalization is only supported for `NAME`, `ADDRESS`, `PHONE`, and `EMAIL_ADDRESS`.
   * >
   * > If you want to normalize `NAME_FIRST`, `NAME_MIDDLE`, and `NAME_LAST`, you must group them by assigning them to the `NAME` `groupName`.
   * >
   * > If you want to normalize `ADDRESS_STREET1`, `ADDRESS_STREET2`, `ADDRESS_STREET3`, `ADDRESS_CITY`, `ADDRESS_STATE`, `ADDRESS_COUNTRY`, and `ADDRESS_POSTALCODE`, you must group them by assigning them to the `ADDRESS` `groupName`.
   * >
   * > If you want to normalize `PHONE_NUMBER` and `PHONE_COUNTRYCODE`, you must group them by assigning them to the `PHONE` `groupName`.
   *
   * @public
   */
  type: SchemaAttributeType | undefined;

  /**
   * A string that instructs Entity Resolution to combine several columns into a unified column with the identical attribute type.
   *
   * For example, when working with columns such as `NAME_FIRST`, `NAME_MIDDLE`, and `NAME_LAST`, assigning them a common `groupName` will prompt Entity Resolution to concatenate them into a single value.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * A key that allows grouping of multiple input attributes into a unified matching group.
   *
   * For example, consider a scenario where the source table contains various addresses, such as `business_address` and `shipping_address`. By assigning a `matchKey` called `address` to both attributes, Entity Resolution will match records across these fields to create a consolidated matching group.
   *
   * If no `matchKey` is specified for a column, it won't be utilized for matching purposes but will still be included in the output table.
   *
   * @public
   */
  matchKey?: string | undefined;

  /**
   * The subtype of the attribute, selected from a list of values.
   *
   * @public
   */
  subType?: string | undefined;

  /**
   * Indicates if the column values are hashed in the schema input.
   *
   * If the value is set to `TRUE`, the column values are hashed.
   *
   * If the value is set to `FALSE`, the column values are cleartext.
   *
   * @public
   */
  hashed?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateSchemaMappingInput {
  /**
   * The name of the schema. There can't be multiple `SchemaMappings` with the same name.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * A description of the schema.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `MappedInputFields`. Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
   *
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSchemaMappingOutput {
  /**
   * The name of the schema.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `SchemaMapping`.
   *
   * @public
   */
  schemaArn: string | undefined;

  /**
   * A description of the schema.
   *
   * @public
   */
  description: string | undefined;

  /**
   * A list of `MappedInputFields`. Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
   *
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingWorkflowInput {
  /**
   * The name of the workflow to be deleted.
   *
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdMappingWorkflowOutput {
  /**
   * A successful operation message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdNamespaceInput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdNamespaceOutput {
  /**
   * A successful operation message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowInput {
  /**
   * The name of the workflow to be retrieved.
   *
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMatchingWorkflowOutput {
  /**
   * A successful operation message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStatementInput {
  /**
   * The ARN of the resource for which the policy need to be deleted.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A statement identifier that differentiates the statement from others in the same policy.
   *
   * @public
   */
  statementId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyStatementOutput {
  /**
   * The ARN of the resource for which the policy need to be deleted.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the deleted policy.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The resource-based policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingInput {
  /**
   * The name of the schema to delete.
   *
   * @public
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaMappingOutput {
  /**
   * A successful operation message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The record.
 *
 * @public
 */
export interface _Record {
  /**
   * The input source ARN of the record.
   *
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * The unique ID of the record.
   *
   * @public
   */
  uniqueId: string | undefined;

  /**
   * The record's attribute map.
   *
   * @public
   */
  recordAttributeMap: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GenerateMatchIdInput {
  /**
   * The name of the rule-based matching workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The records to match.
   *
   * @public
   */
  records: _Record[] | undefined;

  /**
   * The processing mode that determines how Match IDs are generated and results are saved. Each mode provides different levels of accuracy, response time, and completeness of results.
   *
   * If not specified, defaults to `CONSISTENT`.
   *
   * `CONSISTENT`: Performs immediate lookup and matching against all existing records, with results saved synchronously. Provides highest accuracy but slower response time.
   *
   * `EVENTUAL` (shown as *Background* in the console): Performs initial match ID lookup or generation immediately, with record updates processed asynchronously in the background. Offers faster initial response time, with complete matching results available later in S3.
   *
   * `EVENTUAL_NO_LOOKUP` (shown as *Quick ID generation* in the console): Generates new match IDs without checking existing matches, with updates processed asynchronously. Provides fastest response time but should only be used for records known to be unique.
   *
   * > **Note:** Advanced matching workflows don't support the `processingType` field.
   *
   * @public
   */
  processingType?: ProcessingType | undefined;
}

/**
 * The record that didn't generate a Match ID.
 *
 * @public
 */
export interface FailedRecord {
  /**
   * The input source ARN of the record that didn't generate a Match ID.
   *
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * The unique ID of the record that didn't generate a Match ID.
   *
   * @public
   */
  uniqueId: string | undefined;

  /**
   * The error message for the record that didn't generate a Match ID.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * The matched record.
 *
 * @public
 */
export interface MatchedRecord {
  /**
   * The input source ARN of the matched record.
   *
   * @public
   */
  inputSourceARN: string | undefined;

  /**
   * The record ID of the matched record.
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * The match group.
 *
 * @public
 */
export interface MatchGroup {
  /**
   * The matched records.
   *
   * @public
   */
  records: MatchedRecord[] | undefined;

  /**
   * The match ID.
   *
   * @public
   */
  matchId: string | undefined;

  /**
   * The match rule of the match group.
   *
   * @public
   */
  matchRule: string | undefined;
}

/**
 * @public
 */
export interface GenerateMatchIdOutput {
  /**
   * The match groups from the generated match ID.
   *
   * @public
   */
  matchGroups: MatchGroup[] | undefined;

  /**
   * The records that didn't receive a generated Match ID.
   *
   * @public
   */
  failedRecords: FailedRecord[] | undefined;
}

/**
 * @public
 */
export interface GetIdMappingJobInput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * An object containing an error message, if there was an error.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error message from the job, if there is one.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * An object that contains metrics about an ID mapping job, including counts of input records, processed records, and mapped records between source and target identifiers.
 *
 * @public
 */
export interface IdMappingJobMetrics {
  /**
   * The total number of records that were input for processing.
   *
   * @public
   */
  inputRecords?: number | undefined;

  /**
   * The total number of records that were processed.
   *
   * @public
   */
  totalRecordsProcessed?: number | undefined;

  /**
   * The total number of records that did not get processed.
   *
   * @public
   */
  recordsNotProcessed?: number | undefined;

  /**
   * The number of records processed that were marked for deletion in the input file using the DELETE schema mapping field. These are the records to be removed from the ID mapping table.
   *
   * @public
   */
  deleteRecordsProcessed?: number | undefined;

  /**
   * The total number of records that were mapped.
   *
   * @public
   */
  totalMappedRecords?: number | undefined;

  /**
   * The total number of mapped source records.
   *
   * @public
   */
  totalMappedSourceRecords?: number | undefined;

  /**
   * The total number of distinct mapped target records.
   *
   * @public
   */
  totalMappedTargetRecords?: number | undefined;

  /**
   * The number of de-duplicated processed records across all runs, excluding deletion-related records. Duplicates are determined by the field marked as UNIQUE_ID in your schema mapping. Records sharing the same value in this field are considered duplicates. For example, if you specified "customer_id" as a UNIQUE_ID field and had three records with the same customer_id value, they would count as one unique record in this metric.
   *
   * @public
   */
  uniqueRecordsLoaded?: number | undefined;

  /**
   * The number of new mapped records.
   *
   * @public
   */
  newMappedRecords?: number | undefined;

  /**
   * The number of new source records mapped.
   *
   * @public
   */
  newMappedSourceRecords?: number | undefined;

  /**
   * The number of new mapped target records.
   *
   * @public
   */
  newMappedTargetRecords?: number | undefined;

  /**
   * The number of new unique records processed in the current job run, after removing duplicates. This metric excludes deletion-related records. Duplicates are determined by the field marked as UNIQUE_ID in your schema mapping. Records sharing the same value in this field are considered duplicates. For example, if your current run processes five new records with the same UNIQUE_ID value, they would count as one new unique record in this metric.
   *
   * @public
   */
  newUniqueRecordsLoaded?: number | undefined;

  /**
   * The number of mapped records removed.
   *
   * @public
   */
  mappedRecordsRemoved?: number | undefined;

  /**
   * The number of source records removed due to ID mapping.
   *
   * @public
   */
  mappedSourceRecordsRemoved?: number | undefined;

  /**
   * The number of mapped target records removed.
   *
   * @public
   */
  mappedTargetRecordsRemoved?: number | undefined;
}

/**
 * An object containing `KMSArn`, `outputS3Path`, and `roleARN`.
 *
 * @public
 */
export interface IdMappingJobOutputSource {
  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The S3 path to which Entity Resolution will write the output table.
   *
   * @public
   */
  outputS3Path: string | undefined;

  /**
   * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
   *
   * @public
   */
  KMSArn?: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingJobOutput {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The time at which the job was started.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The time at which the job has finished.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Metrics associated with the execution, specifically total records processed, unique IDs generated, and records the execution skipped.
   *
   * @public
   */
  metrics?: IdMappingJobMetrics | undefined;

  /**
   * An object containing an error message, if there was an error.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * A list of `OutputSource` objects.
   *
   * @public
   */
  outputSourceConfig?: IdMappingJobOutputSource[] | undefined;

  /**
   * The job type of the ID mapping job.
   *
   * A value of `INCREMENTAL` indicates that only new or changed data was processed since the last job run. This is the default job type if the workflow was created with an `incrementalRunConfig`.
   *
   * A value of `BATCH` indicates that all data was processed from the input source, regardless of previous job runs. This is the default job type if the workflow wasn't created with an `incrementalRunConfig`.
   *
   * A value of `DELETE_ONLY` indicates that only deletion requests from `BatchDeleteUniqueIds` were processed.
   *
   * @public
   */
  jobType?: JobType | undefined;
}

/**
 * @public
 */
export interface GetIdMappingWorkflowInput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetIdMappingWorkflowOutput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `IdMappingWorkflow` .
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path` and `KMSArn`.
   *
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * An object which defines the ID mapping technique and any additional configurations.
   *
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * The timestamp of when the workflow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the workflow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The incremental run configuration for the ID mapping workflow.
   *
   * @public
   */
  incrementalRunConfig?: IdMappingIncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetIdNamespaceInput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;
}

/**
 * @public
 */
export interface GetIdNamespaceOutput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ID namespace.
   *
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * Determines the properties of `IdMappingWorkflow` where this `IdNamespace` can be used as a `Source` or a `Target`.
   *
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   *
   * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   *
   * The `TARGET` contains a configuration of `targetId` to which all `sourceIds` will resolve to.
   *
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this `IdNamespace` on your behalf as part of a workflow run.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The timestamp of when the ID namespace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the ID namespace was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMatchIdInput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The record to fetch the Match ID for.
   *
   * @public
   */
  record: Record<string, string> | undefined;

  /**
   * Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an `AttributeType` of `PHONE_NUMBER`, and the data in the input table is in a format of 1234567890, Entity Resolution will normalize this field in the output to (123)-456-7890.
   *
   * @public
   */
  applyNormalization?: boolean | undefined;
}

/**
 * @public
 */
export interface GetMatchIdOutput {
  /**
   * The unique identifiers for this group of match records.
   *
   * @public
   */
  matchId?: string | undefined;

  /**
   * The rule the record matched on.
   *
   * @public
   */
  matchRule?: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingJobInput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * An object containing `inputRecords`, `totalRecordsProcessed`, `matchIDs`, and `recordsNotProcessed`.
 *
 * @public
 */
export interface JobMetrics {
  /**
   * The total number of input records.
   *
   * @public
   */
  inputRecords?: number | undefined;

  /**
   * The total number of records processed.
   *
   * @public
   */
  totalRecordsProcessed?: number | undefined;

  /**
   * The total number of records that did not get processed.
   *
   * @public
   */
  recordsNotProcessed?: number | undefined;

  /**
   * The number of records processed that were marked for deletion (`DELETE` = True) in the input file. This metric tracks records flagged for removal during the job execution.
   *
   * @public
   */
  deleteRecordsProcessed?: number | undefined;

  /**
   * The total number of `matchID`s generated.
   *
   * @public
   */
  matchIDs?: number | undefined;
}

/**
 * An object containing `KMSArn`, `outputS3Path`, and `roleArn`.
 *
 * @public
 */
export interface JobOutputSource {
  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The S3 path to which Entity Resolution will write the output table.
   *
   * @public
   */
  outputS3Path: string | undefined;

  /**
   * Customer KMS ARN for encryption at rest. If not provided, system will use an Entity Resolution managed KMS key.
   *
   * @public
   */
  KMSArn?: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingJobOutput {
  /**
   * The unique identifier of the matching job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The time at which the job was started.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The time at which the job has finished.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Metrics associated with the execution, specifically total records processed, unique IDs generated, and records the execution skipped.
   *
   * @public
   */
  metrics?: JobMetrics | undefined;

  /**
   * An object containing an error message, if there was an error.
   *
   * @public
   */
  errorDetails?: ErrorDetails | undefined;

  /**
   * A list of `OutputSource` objects.
   *
   * @public
   */
  outputSourceConfig?: JobOutputSource[] | undefined;
}

/**
 * @public
 */
export interface GetMatchingWorkflowInput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface GetMatchingWorkflowOutput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `MatchingWorkflow`.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path`, `applyNormalization`, `KMSArn`, and `output`.
   *
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * An object which defines the `resolutionType` and the `ruleBasedProperties`.
   *
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * The timestamp of when the workflow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the workflow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * An object which defines an incremental run type and has only `incrementalRunType` as a field.
   *
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the resource for which the policy need to be returned.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyOutput {
  /**
   * The Entity Resolution resource ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The resource-based policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetProviderServiceInput {
  /**
   * The name of the provider. This name is typically the company name.
   *
   * @public
   */
  providerName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the product that the provider service provides.
   *
   * @public
   */
  providerServiceName: string | undefined;
}

/**
 * The provider schema attribute.
 *
 * @public
 */
export interface ProviderSchemaAttribute {
  /**
   * The field name.
   *
   * @public
   */
  fieldName: string | undefined;

  /**
   * The type of the provider schema attribute.
   *
   * LiveRamp supports: `NAME` | `NAME_FIRST` | `NAME_MIDDLE` | `NAME_LAST` | `ADDRESS` | `ADDRESS_STREET1` | `ADDRESS_STREET2` | `ADDRESS_STREET3` | `ADDRESS_CITY` | `ADDRESS_STATE` | `ADDRESS_COUNTRY` | `ADDRESS_POSTALCODE` | `PHONE` | `PHONE_NUMBER` | `EMAIL_ADDRESS` | `UNIQUE_ID` | `PROVIDER_ID`
   *
   * TransUnion supports: `NAME` | `NAME_FIRST` | `NAME_LAST` | `ADDRESS` | `ADDRESS_CITY` | `ADDRESS_STATE` | `ADDRESS_COUNTRY` | `ADDRESS_POSTALCODE` | `PHONE_NUMBER` | `EMAIL_ADDRESS` | `UNIQUE_ID` | `DATE` | `IPV4` | `IPV6` | `MAID`
   *
   * Unified ID 2.0 supports: `PHONE_NUMBER` | `EMAIL_ADDRESS` | `UNIQUE_ID`
   *
   * @public
   */
  type: SchemaAttributeType | undefined;

  /**
   * The sub type of the provider schema attribute.
   *
   * @public
   */
  subType?: string | undefined;

  /**
   * The hashing attribute of the provider schema.
   *
   * @public
   */
  hashing?: boolean | undefined;
}

/**
 * The input schema supported by provider service.
 *
 * @public
 */
export interface ProviderComponentSchema {
  /**
   * Input schema for the provider service.
   *
   * @public
   */
  schemas?: string[][] | undefined;

  /**
   * The provider schema attributes.
   *
   * @public
   */
  providerSchemaAttributes?: ProviderSchemaAttribute[] | undefined;
}

/**
 * The identifiers of the provider service, from Data Exchange.
 *
 * @public
 */
export interface ProviderMarketplaceConfiguration {
  /**
   * The dataset ID on Data Exchange.
   *
   * @public
   */
  dataSetId: string | undefined;

  /**
   * The revision ID on Data Exchange.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The asset ID on Data Exchange.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The listing ID on Data Exchange.
   *
   * @public
   */
  listingId: string | undefined;
}

/**
 * The required configuration fields to use with the provider service.
 *
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
   * The identifiers of the provider service, from Data Exchange.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    marketplaceConfiguration: (value: ProviderMarketplaceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The provider configuration required for different ID namespace types.
 *
 * @public
 */
export interface ProviderIdNameSpaceConfiguration {
  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configurations required for the target ID namespace.
   *
   * @public
   */
  providerTargetConfigurationDefinition?: __DocumentType | undefined;

  /**
   * Configurations required for the source ID namespace.
   *
   * @public
   */
  providerSourceConfigurationDefinition?: __DocumentType | undefined;
}

/**
 * The required configuration fields to give intermediate access to a provider service.
 *
 * @public
 */
export interface ProviderIntermediateDataAccessConfiguration {
  /**
   * The Amazon Web Services account that provider can use to read or write data into the customer's intermediate S3 bucket.
   *
   * @public
   */
  awsAccountIds?: string[] | undefined;

  /**
   * The S3 bucket actions that the provider requires permission for.
   *
   * @public
   */
  requiredBucketActions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetProviderServiceOutput {
  /**
   * The name of the provider. This name is typically the company name.
   *
   * @public
   */
  providerName: string | undefined;

  /**
   * The name of the product that the provider service provides.
   *
   * @public
   */
  providerServiceName: string | undefined;

  /**
   * The display name of the provider service.
   *
   * @public
   */
  providerServiceDisplayName: string | undefined;

  /**
   * The type of provider service.
   *
   * @public
   */
  providerServiceType: ServiceType | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the provider service.
   *
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * The definition of the provider configuration.
   *
   * @public
   */
  providerConfigurationDefinition?: __DocumentType | undefined;

  /**
   * The provider configuration required for different ID namespace types.
   *
   * @public
   */
  providerIdNameSpaceConfiguration?: ProviderIdNameSpaceConfiguration | undefined;

  /**
   * Provider service job configurations.
   *
   * @public
   */
  providerJobConfiguration?: __DocumentType | undefined;

  /**
   * The required configuration fields to use with the provider service.
   *
   * @public
   */
  providerEndpointConfiguration: ProviderEndpointConfiguration | undefined;

  /**
   * Specifies whether output data from the provider is anonymized. A value of `TRUE` means the output will be anonymized and you can't relate the data that comes back from the provider to the identifying input. A value of `FALSE` means the output won't be anonymized and you can relate the data that comes back from the provider to your source data.
   *
   * @public
   */
  anonymizedOutput: boolean | undefined;

  /**
   * The definition of the provider entity output.
   *
   * @public
   */
  providerEntityOutputDefinition: __DocumentType | undefined;

  /**
   * The Amazon Web Services accounts and the S3 permissions that are required by some providers to create an S3 bucket for intermediate data storage.
   *
   * @public
   */
  providerIntermediateDataAccessConfiguration?: ProviderIntermediateDataAccessConfiguration | undefined;

  /**
   * Input schema for the provider service.
   *
   * @public
   */
  providerComponentSchema?: ProviderComponentSchema | undefined;
}

/**
 * @public
 */
export interface GetSchemaMappingInput {
  /**
   * The name of the schema to be retrieved.
   *
   * @public
   */
  schemaName: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaMappingOutput {
  /**
   * The name of the schema.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the SchemaMapping.
   *
   * @public
   */
  schemaArn: string | undefined;

  /**
   * A description of the schema.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `MappedInputFields`. Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information Entity Resolution uses for matching.
   *
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;

  /**
   * The timestamp of when the `SchemaMapping` was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the `SchemaMapping` was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether the schema mapping has been applied to a workflow.
   *
   * @public
   */
  hasWorkflows: boolean | undefined;
}

/**
 * @public
 */
export interface ListIdMappingJobsInput {
  /**
   * The name of the workflow to be retrieved.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object containing the `jobId`, `status`, `startTime`, and `endTime` of a job.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The time at which the job was started.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The time at which the job has finished.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListIdMappingJobsOutput {
  /**
   * A list of `JobSummary` objects.
   *
   * @public
   */
  jobs?: JobSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdMappingWorkflowsInput {
  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A list of `IdMappingWorkflowSummary` objects, each of which contain the fields `WorkflowName`, `WorkflowArn`, `CreatedAt`, and `UpdatedAt`.
 *
 * @public
 */
export interface IdMappingWorkflowSummary {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `IdMappingWorkflow`.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * The timestamp of when the workflow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the workflow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListIdMappingWorkflowsOutput {
  /**
   * A list of `IdMappingWorkflowSummary` objects.
   *
   * @public
   */
  workflowSummaries?: IdMappingWorkflowSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdNamespacesInput {
  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of `IdNamespace` objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The settings for the ID namespace for the ID mapping workflow job.
 *
 * @public
 */
export interface IdNamespaceIdMappingWorkflowMetadata {
  /**
   * The type of ID mapping.
   *
   * @public
   */
  idMappingType: IdMappingType | undefined;
}

/**
 * A summary of ID namespaces.
 *
 * @public
 */
export interface IdNamespaceSummary {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ID namespace.
   *
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object which defines any additional configurations required by the ID mapping workflow.
   *
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowMetadata[] | undefined;

  /**
   * The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   *
   * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   *
   * The `TARGET` contains a configuration of `targetId` which all `sourceIds` will resolve to.
   *
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * The timestamp of when the ID namespace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the ID namespace was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListIdNamespacesOutput {
  /**
   * A list of `IdNamespaceSummaries` objects.
   *
   * @public
   */
  idNamespaceSummaries?: IdNamespaceSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMatchingJobsInput {
  /**
   * The name of the workflow to be retrieved.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListMatchingJobsOutput {
  /**
   * A list of `JobSummary` objects, each of which contain the ID, status, start time, and end time of a job.
   *
   * @public
   */
  jobs?: JobSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsInput {
  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A list of `MatchingWorkflowSummary` objects, each of which contain the fields `workflowName`, `workflowArn`, `resolutionType`, `createdAt`, `updatedAt`.
 *
 * @public
 */
export interface MatchingWorkflowSummary {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `MatchingWorkflow`.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * The timestamp of when the workflow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the workflow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The method that has been specified for data matching, either using matching provided by Entity Resolution or through a provider service.
   *
   * @public
   */
  resolutionType: ResolutionType | undefined;
}

/**
 * @public
 */
export interface ListMatchingWorkflowsOutput {
  /**
   * A list of `MatchingWorkflowSummary` objects, each of which contain the fields `workflowName`, `workflowArn`, `resolutionType`, `createdAt`, and `updatedAt`.
   *
   * @public
   */
  workflowSummaries?: MatchingWorkflowSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProviderServicesInput {
  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the provider. This name is typically the company name.
   *
   * @public
   */
  providerName?: string | undefined;
}

/**
 * A list of `ProviderService` objects, each of which contain the fields `providerName`, `providerServiceArn`, `providerServiceName`, and `providerServiceType`.
 *
 * @public
 */
export interface ProviderServiceSummary {
  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `providerService`.
   *
   * @public
   */
  providerServiceArn: string | undefined;

  /**
   * The name of the provider. This name is typically the company name.
   *
   * @public
   */
  providerName: string | undefined;

  /**
   * The display name of the provider service.
   *
   * @public
   */
  providerServiceDisplayName: string | undefined;

  /**
   * The name of the product that the provider service provides.
   *
   * @public
   */
  providerServiceName: string | undefined;

  /**
   * The type of provider service.
   *
   * @public
   */
  providerServiceType: ServiceType | undefined;
}

/**
 * @public
 */
export interface ListProviderServicesOutput {
  /**
   * A list of `ProviderServices` objects.
   *
   * @public
   */
  providerServiceSummaries?: ProviderServiceSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaMappingsInput {
  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * An object containing `schemaName`, `schemaArn`, `createdAt`, `updatedAt`, and `hasWorkflows`.
 *
 * @public
 */
export interface SchemaMappingSummary {
  /**
   * The name of the schema.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `SchemaMapping`.
   *
   * @public
   */
  schemaArn: string | undefined;

  /**
   * The timestamp of when the `SchemaMapping` was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the `SchemaMapping` was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Specifies whether the schema mapping has been applied to a workflow.
   *
   * @public
   */
  hasWorkflows: boolean | undefined;
}

/**
 * @public
 */
export interface ListSchemaMappingsOutput {
  /**
   * A list of `SchemaMappingSummary` objects, each of which contain the fields `SchemaName`, `SchemaArn`, `CreatedAt`, `UpdatedAt`.
   *
   * @public
   */
  schemaList?: SchemaMappingSummary[] | undefined;

  /**
   * The pagination token from the previous API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The ARN of the resource for which you want to view tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutPolicyInput {
  /**
   * The Amazon Resource Name (ARN) of the resource for which the policy needs to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The resource-based policy.
   *
   * > **Important:** If you set the value of the `effect` parameter in the `policy` to `Deny` for the `PutPolicy` operation, you must also set the value of the `effect` parameter to `Deny` for the `AddPolicyStatement` operation.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutPolicyOutput {
  /**
   * The Entity Resolution resource ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The resource-based policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface StartIdMappingJobInput {
  /**
   * The name of the ID mapping job to be retrieved.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * A list of `OutputSource` objects.
   *
   * @public
   */
  outputSourceConfig?: IdMappingJobOutputSource[] | undefined;

  /**
   * The job type for the ID mapping job.
   *
   * If the `jobType` value is set to `INCREMENTAL`, only new or changed data is processed since the last job run. This is the default value if the `CreateIdMappingWorkflow` API is configured with an `incrementalRunConfig`.
   *
   * If the `jobType` value is set to `BATCH`, all data is processed from the input source, regardless of previous job runs. This is the default value if the `CreateIdMappingWorkflow` API isn't configured with an `incrementalRunConfig`.
   *
   * If the `jobType` value is set to `DELETE_ONLY`, only deletion requests from `BatchDeleteUniqueIds` are processed.
   *
   * @public
   */
  jobType?: JobType | undefined;
}

/**
 * @public
 */
export interface StartIdMappingJobOutput {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A list of `OutputSource` objects.
   *
   * @public
   */
  outputSourceConfig?: IdMappingJobOutputSource[] | undefined;

  /**
   * The job type for the started ID mapping job.
   *
   * A value of `INCREMENTAL` indicates that only new or changed data was processed since the last job run. This is the default job type if the workflow was created with an `incrementalRunConfig`.
   *
   * A value of `BATCH` indicates that all data was processed from the input source, regardless of previous job runs. This is the default job type if the workflow wasn't created with an `incrementalRunConfig`.
   *
   * A value of `DELETE_ONLY` indicates that only deletion requests from `BatchDeleteUniqueIds` were processed.
   *
   * @public
   */
  jobType?: JobType | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobInput {
  /**
   * The name of the matching job to be retrieved.
   *
   * @public
   */
  workflowName: string | undefined;
}

/**
 * @public
 */
export interface StartMatchingJobOutput {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the resource for which you want to view tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
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
   * The ARN of the resource for which you want to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
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
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path` and `KMSArn`.
   *
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * An object which defines the ID mapping technique and any additional configurations.
   *
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * The incremental run configuration for the update ID mapping workflow.
   *
   * @public
   */
  incrementalRunConfig?: IdMappingIncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdMappingWorkflowOutput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: IdMappingWorkflowInputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path` and `KMSArn`.
   *
   * @public
   */
  outputSourceConfig?: IdMappingWorkflowOutputSource[] | undefined;

  /**
   * An object which defines the ID mapping technique and any additional configurations.
   *
   * @public
   */
  idMappingTechniques: IdMappingTechniques | undefined;

  /**
   * The incremental run configuration for the update ID mapping workflow output.
   *
   * @public
   */
  incrementalRunConfig?: IdMappingIncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdNamespaceInput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * Determines the properties of `IdMappingWorkflow` where this `IdNamespace` can be used as a `Source` or a `Target`.
   *
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this `IdNamespace` on your behalf as part of a workflow run.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdNamespaceOutput {
  /**
   * The name of the ID namespace.
   *
   * @public
   */
  idNamespaceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ID namespace.
   *
   * @public
   */
  idNamespaceArn: string | undefined;

  /**
   * The description of the ID namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig?: IdNamespaceInputSource[] | undefined;

  /**
   * Determines the properties of `IdMappingWorkflow` where this `IdNamespace` can be used as a `Source` or a `Target`.
   *
   * @public
   */
  idMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[] | undefined;

  /**
   * The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   *
   * The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   *
   * The `TARGET` contains a configuration of `targetId` to which all `sourceIds` will resolve to.
   *
   * @public
   */
  type: IdNamespaceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this `IdNamespace` on your behalf as part of a workflow run.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The timestamp of when the ID namespace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp of when the ID namespace was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowInput {
  /**
   * The name of the workflow to be retrieved.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path`, `applyNormalization`, `KMSArn`, and `output`.
   *
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * An object which defines the `resolutionType` and the `ruleBasedProperties`.
   *
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * Optional. An object that defines the incremental run type. This object contains only the `incrementalRunType` field, which appears as "Automatic" in the console.
   *
   * > **Important:** For workflows where `resolutionType` is `PROVIDER`, incremental processing is not supported.
   *
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateMatchingWorkflowOutput {
  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * A description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
   *
   * @public
   */
  inputSourceConfig: InputSource[] | undefined;

  /**
   * A list of `OutputSource` objects, each of which contains fields `outputS3Path`, `applyNormalization`, `KMSArn`, and `output`.
   *
   * @public
   */
  outputSourceConfig: OutputSource[] | undefined;

  /**
   * An object which defines the `resolutionType` and the `ruleBasedProperties`.
   *
   * @public
   */
  resolutionTechniques: ResolutionTechniques | undefined;

  /**
   * An object which defines an incremental run type and has only `incrementalRunType` as a field.
   *
   * @public
   */
  incrementalRunConfig?: IncrementalRunConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaMappingInput {
  /**
   * The name of the schema. There can't be multiple `SchemaMappings` with the same name.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * A description of the schema.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `MappedInputFields`. Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
   *
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateSchemaMappingOutput {
  /**
   * The name of the schema.
   *
   * @public
   */
  schemaName: string | undefined;

  /**
   * The ARN (Amazon Resource Name) that Entity Resolution generated for the `SchemaMapping`.
   *
   * @public
   */
  schemaArn: string | undefined;

  /**
   * A description of the schema.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `MappedInputFields`. Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
   *
   * @public
   */
  mappedInputFields: SchemaInputAttribute[] | undefined;
}
