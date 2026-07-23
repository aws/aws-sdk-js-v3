// smithy-typescript generated code
import type {
  DescriptorType,
  RegistryAuthorizerType,
  RegistryRecordStatus,
  RegistryStatus,
  SchemaType,
  SynchronizationType,
  TargetProtocolType,
  TargetStatus,
} from "./enums";
import type {
  A2aDescriptor,
  ApiGatewayTargetConfiguration,
  ApiSchemaConfiguration,
  AuthorizationData,
  AuthorizerConfiguration,
  ConnectorTargetConfiguration,
  CredentialProviderConfiguration,
  HttpTargetConfiguration,
  InferenceTargetConfiguration,
  KmsConfiguration,
  ManagedResourceDetails,
  McpServerTargetConfiguration,
  MetadataConfiguration,
  PrivateEndpoint,
  S3Configuration,
  SkillDefinition,
  SkillMdDefinition,
} from "./models_0";
import type {
  CustomDescriptor,
  Descriptors,
  ServerDefinition,
  SynchronizationConfiguration,
  ToolsDefinition,
  UpdatedAuthorizerConfiguration,
  UpdatedDescription,
} from "./models_1";

/**
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration containing the resource schema and metadata. For details, see the <code>Descriptors</code> data type.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The current status of the registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>. A record transitions from <code>CREATING</code> to <code>DRAFT</code>, then to <code>PENDING_APPROVAL</code> (via <code>SubmitRegistryRecordForApproval</code>), and finally to <code>APPROVED</code> upon approval.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The type of synchronization used for this record.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The configuration for synchronizing registry record metadata from an external source.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * <p>The identifier of the registry to list records from. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter registry records by name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Filter registry records by their current status. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status?: RegistryRecordStatus | undefined;

  /**
   * <p>Filter registry records by their descriptor type. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType?: DescriptorType | undefined;
}

/**
 * <p>Contains summary information about a registry record.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The version of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>The current status of the registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * <p>The list of registry record summaries. For details about the fields in each summary, see the <code>RegistryRecordSummary</code> data type.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to submit for approval. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record after submission.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Wrapper for updating an A2A descriptor with PATCH semantics. When present, the A2A descriptor is replaced with the provided value. When absent, the A2A descriptor is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedA2aDescriptor {
  /**
   * <p>The updated A2A descriptor value.</p>
   * @public
   */
  optionalValue?: A2aDescriptor | undefined;
}

/**
 * <p>Wrapper for updating a skill definition with PATCH semantics.</p>
 * @public
 */
export interface UpdatedSkillDefinition {
  /**
   * <p>The updated skill definition value.</p>
   * @public
   */
  optionalValue?: SkillDefinition | undefined;
}

/**
 * <p>Wrapper for updating a skill markdown definition with PATCH semantics.</p>
 * @public
 */
export interface UpdatedSkillMdDefinition {
  /**
   * <p>The updated skill markdown definition value.</p>
   * @public
   */
  optionalValue?: SkillMdDefinition | undefined;
}

/**
 * <p>Individual agent skills descriptor fields that can be updated independently.</p>
 * @public
 */
export interface UpdatedAgentSkillsDescriptorFields {
  /**
   * <p>The updated skill markdown definition.</p>
   * @public
   */
  skillMd?: UpdatedSkillMdDefinition | undefined;

  /**
   * <p>The updated skill definition.</p>
   * @public
   */
  skillDefinition?: UpdatedSkillDefinition | undefined;
}

/**
 * <p>Wrapper for updating an agent skills descriptor with PATCH semantics. When present with a value, individual fields can be updated independently. When present with a null value, the entire agent skills descriptor is unset. When absent, the agent skills descriptor is left unchanged.</p>
 * @public
 */
export interface UpdatedAgentSkillsDescriptor {
  /**
   * <p>The updated agent skills descriptor fields.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDescriptorFields | undefined;
}

/**
 * <p>Wrapper for updating a custom descriptor with PATCH semantics. When present, the custom descriptor is replaced with the provided value. When absent, the custom descriptor is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * <p>The updated custom descriptor value.</p>
   * @public
   */
  optionalValue?: CustomDescriptor | undefined;
}

/**
 * <p>Wrapper for updating a server definition with PATCH semantics. When present, the server definition is replaced with the provided value. When absent, the server definition is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedServerDefinition {
  /**
   * <p>The updated server definition value.</p>
   * @public
   */
  optionalValue?: ServerDefinition | undefined;
}

/**
 * <p>Wrapper for updating a tools definition with PATCH semantics. When present, the tools definition is replaced with the provided value. When absent, the tools definition is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedToolsDefinition {
  /**
   * <p>The updated tools definition value.</p>
   * @public
   */
  optionalValue?: ToolsDefinition | undefined;
}

/**
 * <p>Individual MCP descriptor fields that can be updated independently.</p>
 * @public
 */
export interface UpdatedMcpDescriptorFields {
  /**
   * <p>The updated server definition for the MCP descriptor.</p>
   * @public
   */
  server?: UpdatedServerDefinition | undefined;

  /**
   * <p>The updated tools definition for the MCP descriptor.</p>
   * @public
   */
  tools?: UpdatedToolsDefinition | undefined;
}

/**
 * <p>Wrapper for updating an MCP descriptor with PATCH semantics. When present with a value, individual MCP fields can be updated independently. When present with a null value, the entire MCP descriptor is unset. When absent, the MCP descriptor is left unchanged.</p>
 * @public
 */
export interface UpdatedMcpDescriptor {
  /**
   * <p>The updated MCP descriptor fields.</p>
   * @public
   */
  optionalValue?: UpdatedMcpDescriptorFields | undefined;
}

/**
 * <p>Contains per-descriptor-type wrappers for updating descriptors. Each descriptor type can be updated independently.</p>
 * @public
 */
export interface UpdatedDescriptorsUnion {
  /**
   * <p>The updated MCP descriptor.</p>
   * @public
   */
  mcp?: UpdatedMcpDescriptor | undefined;

  /**
   * <p>The updated A2A descriptor.</p>
   * @public
   */
  a2a?: UpdatedA2aDescriptor | undefined;

  /**
   * <p>The updated custom descriptor.</p>
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;

  /**
   * <p>The updated agent skills descriptor.</p>
   * @public
   */
  agentSkills?: UpdatedAgentSkillsDescriptor | undefined;
}

/**
 * <p>Wrapper for updating an optional descriptors field with PATCH semantics. When present with a value, individual descriptors can be updated. When present with a null value, all descriptors are unset. When absent, descriptors are left unchanged.</p>
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * <p>The updated descriptors value. Contains per-descriptor-type wrappers that are each independently updatable.</p>
   * @public
   */
  optionalValue?: UpdatedDescriptorsUnion | undefined;
}

/**
 * <p>Wrapper for updating the synchronization configuration with PATCH semantics. Must be matched with <code>UpdatedSynchronizationType</code>.</p>
 * @public
 */
export interface UpdatedSynchronizationConfiguration {
  /**
   * <p>The updated synchronization configuration value.</p>
   * @public
   */
  optionalValue?: SynchronizationConfiguration | undefined;
}

/**
 * <p>Wrapper for updating the synchronization type with PATCH semantics. Must be matched with <code>UpdatedSynchronizationConfiguration</code>.</p>
 * @public
 */
export interface UpdatedSynchronizationType {
  /**
   * <p>The updated synchronization type value.</p>
   * @public
   */
  optionalValue?: SynchronizationType | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The updated name for the registry record.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the registry record. To clear the description, include the <code>UpdatedDescription</code> wrapper with <code>optionalValue</code> not specified.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated descriptor type for the registry record. Changing the descriptor type may require updating the <code>descriptors</code> field to match the new type's schema requirements.</p>
   * @public
   */
  descriptorType?: DescriptorType | undefined;

  /**
   * <p>The updated descriptor-type-specific configuration containing the resource schema and metadata. Uses PATCH semantics where individual descriptor fields can be updated independently.</p>
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * <p>The version of the registry record for optimistic locking. If provided, it must match the current version of the record. The service automatically increments the version after a successful update.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The updated synchronization type for the registry record.</p>
   * @public
   */
  synchronizationType?: UpdatedSynchronizationType | undefined;

  /**
   * <p>The updated synchronization configuration for the registry record.</p>
   * @public
   */
  synchronizationConfiguration?: UpdatedSynchronizationConfiguration | undefined;

  /**
   * <p>Whether to trigger synchronization using the stored or provided configuration. When set to <code>true</code>, the service will synchronize the record metadata from the configured external source.</p>
   * @public
   */
  triggerSynchronization?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the updated record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the updated registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the updated registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the updated registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration of the updated registry record. For details, see the <code>Descriptors</code> data type.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the updated registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The current status of the updated registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status of the updated registry record.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The synchronization type of the updated registry record.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The synchronization configuration of the updated registry record.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update the status for. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The target status for the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change, such as why the record was approved or rejected.</p>
   * @public
   */
  statusReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Configuration for the registry record approval workflow. Controls whether records added to the registry require explicit approval before becoming active.</p>
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * <p>Whether registry records are auto-approved. When set to <code>true</code>, records are automatically approved upon creation. When set to <code>false</code> (the default), records require explicit approval for security purposes.</p>
   * @public
   */
  autoApproval?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * <p>The name of the registry. The name must be unique within your account and can contain alphanumeric characters and underscores.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer to use for the registry. This controls the authorization method for the Search and Invoke APIs used by consumers, and does not affect the standard CRUDL APIs for registry and registry record management used by administrators.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the registry. Required if <code>authorizerType</code> is <code>CUSTOM_JWT</code>. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The approval configuration for registry records. Controls whether records require explicit approval before becoming active. See the <code>ApprovalConfiguration</code> data type for supported configuration options.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created registry.</p>
   * @public
   */
  registryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * <p>The identifier of the registry to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>The current status of the registry, set to <code>DELETING</code> when deletion is initiated. For a list of all possible registry statuses, see the <code>RegistryStatus</code> data type.</p>
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * @public
 */
export interface GetRegistryRequest {
  /**
   * <p>The identifier of the registry to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the registry. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The approval configuration for registry records. For details, see the <code>ApprovalConfiguration</code> data type.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The current status of the registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter registries by their current status. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status?: RegistryStatus | undefined;

  /**
   * <p>Filter registries by their authorizer type. Possible values are <code>CUSTOM_JWT</code> and <code>AWS_IAM</code>. For more information about authorizer types, see the <code>RegistryAuthorizerType</code> enum.</p>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;
}

/**
 * <p>Contains summary information about a registry.</p>
 * @public
 */
export interface RegistrySummary {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The current status of the registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>The list of registry summaries. For details about the fields in each summary, see the <code>RegistrySummary</code> data type.</p>
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Wrapper for updating an optional approval configuration field with PATCH semantics. When present in an update request, the approval configuration is replaced with the provided value. When absent, the approval configuration is left unchanged.</p>
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * <p>The updated approval configuration value. Set to <code>null</code> to unset the approval configuration.</p>
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The identifier of the registry to update. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The updated name of the registry.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the registry. To clear the description, include the <code>UpdatedDescription</code> wrapper with <code>optionalValue</code> not specified.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated authorizer configuration for the registry. Changing the authorizer configuration can break existing consumers of the registry who are using the authorization type prior to the update.</p>
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;

  /**
   * <p>The updated approval configuration for registry records. The updated configuration only affects new records that move to <code>PENDING_APPROVAL</code> status after the change. Existing records already in <code>PENDING_APPROVAL</code> status are not affected.</p>
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the updated registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the updated registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the updated registry. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The approval configuration for the updated registry. For details, see the <code>ApprovalConfiguration</code> data type.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The current status of the updated registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status of the updated registry.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKRequest {
  /**
   * <p>The unique identifier of the token vault to update.</p>
   * @public
   */
  tokenVaultId?: string | undefined;

  /**
   * <p>The KMS configuration for the token vault, including the key type and KMS key ARN.</p>
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKResponse {
  /**
   * <p>The ID of the token vault.</p>
   * @public
   */
  tokenVaultId: string | undefined;

  /**
   * <p>The KMS configuration for the token vault.</p>
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;

  /**
   * <p>The timestamp when the token vault was last modified.</p>
   * @public
   */
  lastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is a key-value pair.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove from the resource.</p>
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
export interface CreateWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>A map of tag keys and values to assign to the workload identity. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityResponse {}

/**
 * @public
 */
export interface GetWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>The timestamp when the workload identity was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the workload identity was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about a workload identity.</p>
 * @public
 */
export interface WorkloadIdentityType {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesResponse {
  /**
   * <p>The list of workload identities.</p>
   * @public
   */
  workloadIdentities: WorkloadIdentityType[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new list of allowed OAuth2 return URLs for resources associated with this workload identity. This list replaces the existing list.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>The timestamp when the workload identity was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the workload identity was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * <p>A schema definition for a gateway target. This structure defines the structure of the API that the target exposes.</p>
 * @public
 */
export interface SchemaDefinition {
  /**
   * <p>The type of the schema definition. This field specifies the data type of the schema.</p>
   * @public
   */
  type: SchemaType | undefined;

  /**
   * <p>The properties of the schema definition. These properties define the fields in the schema.</p>
   * @public
   */
  properties?: Record<string, SchemaDefinition> | undefined;

  /**
   * <p>The required fields in the schema definition. These fields must be provided when using the schema.</p>
   * @public
   */
  required?: string[] | undefined;

  /**
   * <p>The items in the schema definition. This field is used for array types to define the structure of the array elements.</p>
   * @public
   */
  items?: SchemaDefinition | undefined;

  /**
   * <p>The description of the schema definition. This description provides information about the purpose and usage of the schema.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>A tool definition for a gateway target. This structure defines a tool that the target exposes through the Model Context Protocol.</p>
 * @public
 */
export interface ToolDefinition {
  /**
   * <p>The name of the tool. This name identifies the tool in the Model Context Protocol.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the tool. This description provides information about the purpose and usage of the tool.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The input schema for the tool. This schema defines the structure of the input that the tool accepts.</p>
   * @public
   */
  inputSchema: SchemaDefinition | undefined;

  /**
   * <p>The output schema for the tool. This schema defines the structure of the output that the tool produces.</p>
   * @public
   */
  outputSchema?: SchemaDefinition | undefined;
}

/**
 * <p>A tool schema for a gateway target. This structure defines the schema for a tool that the target exposes through the Model Context Protocol.</p>
 * @public
 */
export type ToolSchema =
  | ToolSchema.InlinePayloadMember
  | ToolSchema.S3Member
  | ToolSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolSchema {
  /**
   * <p>The Amazon S3 location of the tool schema. This location contains the schema definition file.</p>
   * @public
   */
  export interface S3Member {
    s3: S3Configuration;
    inlinePayload?: never;
    $unknown?: never;
  }

  /**
   * <p>The inline payload of the tool schema. This payload contains the schema definition directly in the request.</p>
   * @public
   */
  export interface InlinePayloadMember {
    s3?: never;
    inlinePayload: ToolDefinition[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    inlinePayload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: ToolDefinition[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The Lambda configuration for a Model Context Protocol target. This structure defines how the gateway uses a Lambda function to communicate with the target.</p>
 * @public
 */
export interface McpLambdaTargetConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function. This function is invoked by the gateway to communicate with the target.</p>
   * @public
   */
  lambdaArn: string | undefined;

  /**
   * <p>The tool schema for the Lambda function. This schema defines the structure of the tools that the Lambda function provides.</p>
   * @public
   */
  toolSchema: ToolSchema | undefined;
}

/**
 * <p>The Model Context Protocol (MCP) configuration for a target. This structure defines how the gateway uses MCP to communicate with the target.</p>
 * @public
 */
export type McpTargetConfiguration =
  | McpTargetConfiguration.ApiGatewayMember
  | McpTargetConfiguration.ConnectorMember
  | McpTargetConfiguration.LambdaMember
  | McpTargetConfiguration.McpServerMember
  | McpTargetConfiguration.OpenApiSchemaMember
  | McpTargetConfiguration.SmithyModelMember
  | McpTargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace McpTargetConfiguration {
  /**
   * <p>The OpenAPI schema for the Model Context Protocol target. This schema defines the API structure of the target.</p>
   * @public
   */
  export interface OpenApiSchemaMember {
    openApiSchema: ApiSchemaConfiguration;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * <p>The Smithy model for the Model Context Protocol target. This model defines the API structure of the target using the Smithy specification.</p>
   * @public
   */
  export interface SmithyModelMember {
    openApiSchema?: never;
    smithyModel: ApiSchemaConfiguration;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * <p>The Lambda configuration for the Model Context Protocol target. This configuration defines how the gateway uses a Lambda function to communicate with the target.</p>
   * @public
   */
  export interface LambdaMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda: McpLambdaTargetConfiguration;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * <p>The MCP server specified as the gateway target.</p>
   * @public
   */
  export interface McpServerMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer: McpServerTargetConfiguration;
    apiGateway?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for an Amazon API Gateway target.</p>
   * @public
   */
  export interface ApiGatewayMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway: ApiGatewayTargetConfiguration;
    connector?: never;
    $unknown?: never;
  }

  /**
   * <p>The connector integration configuration for the Model Context Protocol target. This configuration defines how the gateway uses a pre-built connector to communicate with the target.</p>
   * @public
   */
  export interface ConnectorMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector: ConnectorTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway?: never;
    connector?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openApiSchema: (value: ApiSchemaConfiguration) => T;
    smithyModel: (value: ApiSchemaConfiguration) => T;
    lambda: (value: McpLambdaTargetConfiguration) => T;
    mcpServer: (value: McpServerTargetConfiguration) => T;
    apiGateway: (value: ApiGatewayTargetConfiguration) => T;
    connector: (value: ConnectorTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
 * @public
 */
export type TargetConfiguration =
  | TargetConfiguration.HttpMember
  | TargetConfiguration.InferenceMember
  | TargetConfiguration.McpMember
  | TargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TargetConfiguration {
  /**
   * <p>The Model Context Protocol (MCP) configuration for the target. This configuration defines how the gateway uses MCP to communicate with the target.</p>
   * @public
   */
  export interface McpMember {
    mcp: McpTargetConfiguration;
    http?: never;
    inference?: never;
    $unknown?: never;
  }

  /**
   * <p>The HTTP target configuration. Use this to route gateway requests to an HTTP-based endpoint such as an AgentCore Runtime.</p>
   * @public
   */
  export interface HttpMember {
    mcp?: never;
    http: HttpTargetConfiguration;
    inference?: never;
    $unknown?: never;
  }

  /**
   * <p>The inference configuration for the target. This configuration routes requests to a large language model (LLM) provider.</p>
   * @public
   */
  export interface InferenceMember {
    mcp?: never;
    http?: never;
    inference: InferenceTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mcp?: never;
    http?: never;
    inference?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mcp: (value: McpTargetConfiguration) => T;
    http: (value: HttpTargetConfiguration) => T;
    inference: (value: InferenceTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGatewayTargetRequest {
  /**
   * <p>The identifier of the gateway to create a target for.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The name of the gateway target. The name must be unique within the gateway.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration settings for the target, including endpoint information and schema definitions.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The credential provider configurations for the target. These configurations specify how the gateway authenticates with the target endpoint.</p>
   * @public
   */
  credentialProviderConfigurations?: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>Optional configuration for HTTP header and query parameter propagation to and from the gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target. Use this to connect the gateway to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the created target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The timestamp when the target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the target was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the target.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration settings for the target.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The credential provider configurations for the target.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The last synchronization of the target.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * <p>The metadata configuration that was applied to the created gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The managed resources created by the gateway for private endpoint connectivity.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the created gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * <p>The protocol type of the created gateway target.</p>
   * @public
   */
  protocolType?: TargetProtocolType | undefined;
}

/**
 * <p>The gateway target.</p>
 * @public
 */
export interface GatewayTarget {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway target.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The target ID.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The date and time at which the target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time at which the target was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The status of the gateway target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The status reasons for the target status.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description for the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The provider configurations.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The last synchronization time.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * <p>The metadata configuration for HTTP header and query parameter propagation to and from this gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>A list of managed resources created by the gateway for private endpoint connectivity. These resources are created in your account when you use a managed VPC Lattice resource configuration.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * <p>The protocol type of the gateway target.</p>
   * @public
   */
  protocolType?: TargetProtocolType | undefined;
}

/**
 * @public
 */
export interface GetGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the gateway target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The timestamp when the gateway target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway target was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the gateway target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the gateway target.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The credential provider configurations for the gateway target.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The last synchronization of the target.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * <p>The metadata configuration for HTTP header and query parameter propagation for the retrieved gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The managed resources created by the gateway for private endpoint connectivity.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * <p>The protocol type of the gateway target.</p>
   * @public
   */
  protocolType?: TargetProtocolType | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayTargetRequest {
  /**
   * <p>The unique identifier of the gateway associated with the target.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the gateway target to update.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The updated name for the gateway target.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The updated credential provider configurations for the gateway target.</p>
   * @public
   */
  credentialProviderConfigurations?: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>Configuration for HTTP header and query parameter propagation to the gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target. Use this to connect the gateway to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the updated gateway target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The timestamp when the gateway target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway target was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the updated gateway target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the updated gateway target.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The updated name of the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description of the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The updated credential provider configurations for the gateway target.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The date and time at which the targets were last synchronized.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * <p>The metadata configuration that was applied to the gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The managed resources created by the gateway for private endpoint connectivity.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the updated gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * <p>The protocol type of the updated gateway target.</p>
   * @public
   */
  protocolType?: TargetProtocolType | undefined;
}

/**
 * @public
 */
export interface SynchronizeGatewayTargetsResponse {
  /**
   * <p>The gateway targets for synchronization.</p>
   * @public
   */
  targets?: GatewayTarget[] | undefined;
}
