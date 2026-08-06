// smithy-typescript generated code
import type {
  AutoApprovalRule,
  ClaimMatchOperatorType,
  EndpointIpAddressType,
  InboundTokenClaimValueType,
  RecordType,
  RegistryAuthorizerType,
  RegistryFilterName,
  RegistryRecordCredentialProviderType,
  RegistryRecordFilterName,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryStatus,
} from "./enums";

/**
 * <p>The configuration for an IAM role credential provider that signs requests to a registry record's source with AWS Signature Version 4 (SigV4).</p>
 * @public
 */
export interface RegistryRecordIamCredentialProvider {
  /**
   * <p>The &amp;ARN; of the IAM role to assume for request signing.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The service name to use for request signing, such as execute-api.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The AWS Region to use for request signing. If not specified, the Region is derived from the source URL hostname, falling back to the Region of the registry.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p>The configuration for an OAuth 2.0 credential provider that authenticates requests to a registry record's source.</p>
 * @public
 */
export interface RegistryRecordOAuthCredentialProvider {
  /**
   * <p>The &amp;ARN; of the OAuth 2.0 credential provider resource in Amazon Bedrock AgentCore Identity.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The OAuth 2.0 grant type used to obtain access tokens.</p>
   * @public
   */
  grantType?: RegistryRecordOAuthGrantType | undefined;

  /**
   * <p>The OAuth 2.0 scopes to request when obtaining access tokens.</p>
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * <p>Additional parameters to include in the OAuth 2.0 token request.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;
}

/**
 * <p>The credential provider details for a registry record. Exactly one member is populated, matching the configured credential provider type.</p>
 * @public
 */
export type RegistryRecordCredentialProviderUnion =
  | RegistryRecordCredentialProviderUnion.IamCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.OauthCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.$UnknownMember;

/**
 * @public
 */
export namespace RegistryRecordCredentialProviderUnion {
  /**
   * <p>The OAuth 2.0 credential provider details.</p>
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM role credential provider details.</p>
   * @public
   */
  export interface IamCredentialProviderMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider: RegistryRecordIamCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: RegistryRecordOAuthCredentialProvider) => T;
    iamCredentialProvider: (value: RegistryRecordIamCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A credential provider configuration that specifies how to authenticate when fetching descriptor content from a registry record's source URL.</p>
 * @public
 */
export interface RegistryRecordCredentialProviderConfiguration {
  /**
   * <p>The type of credential provider.</p>
   * @public
   */
  credentialProviderType: RegistryRecordCredentialProviderType | undefined;

  /**
   * <p>The credential provider details corresponding to the specified credential provider type.</p>
   * @public
   */
  credentialProvider: RegistryRecordCredentialProviderUnion | undefined;
}

/**
 * <p>URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.</p>
 * @public
 */
export interface DescriptorSourceFromUrl {
  /**
   * <p>The URL from which the descriptor content is retrieved.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The credential providers used to authenticate when fetching descriptor content from the source URL.</p>
   * @public
   */
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[] | undefined;
}

/**
 * <p>The source configuration that defines where descriptor content is retrieved from.</p>
 * @public
 */
export interface DescriptorSource {
  /**
   * <p>URL-based descriptor source, populated when descriptor content is synchronized from a URL.</p>
   * @public
   */
  fromUrl?: DescriptorSourceFromUrl | undefined;
}

/**
 * <p>Descriptor that defines the content of an A2A (Agent-to-Agent) agent card registry record. The content is validated against the A2A protocol schema.</p>
 * @public
 */
export interface A2aAgentCardDescriptor {
  /**
   * <p>The A2A agent card content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>The optional source configuration used to synchronize the A2A agent card descriptor content.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * ARN of a taggable Agent Registry resource.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of tag keys to tag values returned by read operations (may be empty).
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes a single input field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Markdown-format descriptor containing an agent skills document.</p>
 * @public
 */
export interface AgentSkillsMdDescriptor {
  /**
   * <p>The agent skills markdown content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>The optional source configuration used to synchronize the agent skills markdown content.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>Additional data associated with an agent skills definition descriptor.</p>
 * @public
 */
export interface AgentSkillsAdditionalData {
  /**
   * <p>The markdown skill content associated with an agent skills definition.</p>
   * @public
   */
  skillMd?: AgentSkillsMdDescriptor | undefined;
}

/**
 * <p>Descriptor that defines an agent skills registry record and its associated content.</p>
 * @public
 */
export interface AgentSkillsDefinitionDescriptor {
  /**
   * <p>The agent skills definition content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>Additional data associated with the agent skills definition descriptor.</p>
   * @public
   */
  additionalData?: AgentSkillsAdditionalData | undefined;
}

/**
 * <p>Custom descriptor for user-defined content</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p>Descriptor payload data</p>
   * @public
   */
  data?: string | undefined;
}

/**
 * <p>MCP tools descriptor containing tool definitions</p>
 * @public
 */
export interface McpToolsDescriptor {
  /**
   * <p>Descriptor payload data</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>Version of the descriptor type schema</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;
}

/**
 * <p>Additional data for an MCP server descriptor</p>
 * @public
 */
export interface McpServerAdditionalData {
  /**
   * <p>MCP tools descriptor containing tool definitions</p>
   * @public
   */
  tools?: McpToolsDescriptor | undefined;
}

/**
 * <p>Descriptor that defines the content of an MCP (Model Context Protocol) server registry record, including the server definition and its tool definitions. The content is validated against the MCP protocol schema.</p>
 * @public
 */
export interface McpServerDescriptor {
  /**
   * <p>The MCP server descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>Additional data associated with the MCP server descriptor, such as tool definitions.</p>
   * @public
   */
  additionalData?: McpServerAdditionalData | undefined;

  /**
   * <p>The optional source configuration used to synchronize the MCP server descriptor content.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p>The MCP server descriptor, populated when the record type is MCP.</p>
   * @public
   */
  mcpServer?: McpServerDescriptor | undefined;

  /**
   * <p>The A2A agent card descriptor, populated when the record type is AGENT.</p>
   * @public
   */
  a2aAgentCard?: A2aAgentCardDescriptor | undefined;

  /**
   * <p>The agent skills definition descriptor, populated when the record type is SKILL.</p>
   * @public
   */
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor | undefined;

  /**
   * <p>The custom descriptor, populated when the record type is CUSTOM.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry in which to create the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The name of the registry record</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the registry record</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, which determines the descriptor format</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The typed descriptor content for the registry record</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the registry record</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>Client token for idempotency</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Tags to associate with the registry record</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Response structure for creating a registry record</p>
 * @public
 */
export interface CreateRegistryRecordResponse {
  /**
   * <p>The ARN of the created registry record</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The status of the registry record, set to CREATING while the asynchronous workflow is in progress</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to delete (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * <p>Response structure for deleting a registry record</p>
 * @public
 */
export interface DeleteRegistryRecordResponse {}

/**
 * @public
 */
export interface GetRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to retrieve (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * <p>Response structure for retrieving a registry record</p>
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * <p>The &amp;ARN; of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The &amp;ARN; of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The typed descriptors that define the content of the registry record.</p>
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * <p>The version identifier of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The lifecycle status of the registry record.</p>
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
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>A single filter applied to a ListRegistryRecords request.</p>
 * @public
 */
export interface RegistryRecordFilter {
  /**
   * <p>The attribute to filter on</p>
   * @public
   */
  name: RegistryRecordFilterName | undefined;

  /**
   * <p>The values to match for the attribute</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * <p>The identifier of the registry to list records from (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>Maximum number of records to return</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters to apply to the registry record list</p>
   * @public
   */
  filters?: RegistryRecordFilter[] | undefined;
}

/**
 * <p>A summary of a registry record returned by list operations. Contains identifying and lifecycle fields but omits descriptor content.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p>The &amp;ARN; of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The &amp;ARN; of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The version identifier of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>The lifecycle status of the registry record.</p>
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
 * <p>Response structure for listing registry records</p>
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * <p>List of registry record summaries</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p>Token for next page of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to submit for approval (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * <p>Response structure for submitting a registry record for approval</p>
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The ARN of the registry record</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The ID of the registry record</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the record was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Wrapper for updating an optional Description field with PATCH semantics</p>
 * @public
 */
export interface UpdatedDescription {
  /**
   * <p>Description of the Resource</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * <p>Leaf patch wrapper for descriptor data. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDescriptorData {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * <p>Leaf patch wrapper for a descriptor's data schema version. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDataSchemaVersion {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * <p>Leaf patch wrapper for a descriptor's source configuration. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDescriptorSource {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: DescriptorSource | undefined;
}

/**
 * <p>The set of A2A agent card descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedA2aAgentCardDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * <p>The A2A agent card descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedA2aAgentCardDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedA2aAgentCardDescriptorFields | undefined;
}

/**
 * <p>The set of agent skills markdown descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgentSkillsMdDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * <p>The agent skills markdown descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgentSkillsMdDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsMdDescriptorFields | undefined;
}

/**
 * <p>The set of agent skills additional-data fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgentSkillsAdditionalDataFields {
  /**
   * <p>The patch for the agent skills markdown descriptor field.</p>
   * @public
   */
  skillMd?: UpdatedAgentSkillsMdDescriptor | undefined;
}

/**
 * <p>The agent skills additional-data patch wrapper. Omit to leave the additional data unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgentSkillsAdditionalData {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsAdditionalDataFields | undefined;
}

/**
 * <p>The set of agent skills definition descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgentSkillsDefinitionDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's additional data field.</p>
   * @public
   */
  additionalData?: UpdatedAgentSkillsAdditionalData | undefined;
}

/**
 * <p>The agent skills definition descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgentSkillsDefinitionDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDefinitionDescriptorFields | undefined;
}

/**
 * <p>The set of custom descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedCustomDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;
}

/**
 * <p>The custom descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedCustomDescriptorFields | undefined;
}

/**
 * <p>The set of MCP tools descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedMcpToolsDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;
}

/**
 * <p>The MCP tools descriptor patch wrapper. Omit to leave the tools descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedMcpToolsDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedMcpToolsDescriptorFields | undefined;
}

/**
 * <p>The set of MCP server additional-data fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedMcpServerAdditionalDataFields {
  /**
   * <p>The patch for the MCP tools descriptor field.</p>
   * @public
   */
  tools?: UpdatedMcpToolsDescriptor | undefined;
}

/**
 * <p>The MCP server additional-data patch wrapper. Omit to leave the additional data unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedMcpServerAdditionalData {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedMcpServerAdditionalDataFields | undefined;
}

/**
 * <p>The set of MCP server descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedMcpServerDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;

  /**
   * <p>The patch for the descriptor's additional data field.</p>
   * @public
   */
  additionalData?: UpdatedMcpServerAdditionalData | undefined;
}

/**
 * <p>The MCP server descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedMcpServerDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedMcpServerDescriptorFields | undefined;
}

/**
 * <p>The patchable descriptor fields applied during an UpdateRegistryRecord call. Each field is independently patchable.</p>
 * @public
 */
export interface UpdatedDescriptorsFields {
  /**
   * <p>The patch for the MCP server descriptor.</p>
   * @public
   */
  mcpServer?: UpdatedMcpServerDescriptor | undefined;

  /**
   * <p>The patch for the A2A agent card descriptor.</p>
   * @public
   */
  a2aAgentCard?: UpdatedA2aAgentCardDescriptor | undefined;

  /**
   * <p>The patch for the agent skills definition descriptor.</p>
   * @public
   */
  agentSkillsDefinition?: UpdatedAgentSkillsDefinitionDescriptor | undefined;

  /**
   * <p>The patch for the custom descriptor.</p>
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;
}

/**
 * <p>The top-level descriptors patch wrapper used in UpdateRegistryRecord. Omit to leave the current descriptors unchanged; supply an empty object to clear them; supply optionalValue to apply a per-field patch.</p>
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedDescriptorsFields | undefined;
}

/**
 * <p>Leaf patch wrapper for a registry record's display name. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDisplayName {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The updated name of the registry record. Omit to leave the name unchanged.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated display name of the registry record. Omit to leave the display name unchanged; provide an empty wrapper to unset it.</p>
   * @public
   */
  displayName?: UpdatedDisplayName | undefined;

  /**
   * <p>The updated description of the registry record. Omit to leave the description unchanged; provide an empty wrapper to unset it.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated type of the registry record. Omit to leave the record type unchanged.</p>
   * @public
   */
  recordType?: RecordType | undefined;

  /**
   * <p>The updated typed descriptor content for the registry record. Omit to leave the descriptors unchanged.</p>
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * <p>The updated version of the registry record. Omit to leave the version unchanged.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>Whether to trigger synchronization of the record's descriptor content from its source</p>
   * @public
   */
  triggerSynchronization?: boolean | undefined;
}

/**
 * <p>Response structure for updating a registry record</p>
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * <p>The &amp;ARN; of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The &amp;ARN; of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The typed descriptors that define the content of the registry record.</p>
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * <p>The version identifier of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The lifecycle status of the registry record.</p>
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
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update the status of (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The target status for the registry record</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change, for example why the record was approved, rejected, or deprecated</p>
   * @public
   */
  statusReason: string | undefined;
}

/**
 * <p>Response structure for updating a registry record status</p>
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The ARN of the registry record</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The ID of the registry record</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the record was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Configuration for the registry's record approval workflow. Controls whether records submitted for approval require manual review before they become approved and discoverable, or are auto-approved. When no auto-approval rules are configured, submitted records require manual review.</p>
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * <p>The rules that determine which registry records are automatically approved on submission. When omitted or empty, submitted records require manual review.</p>
   * @public
   */
  autoApprovalRules?: AutoApprovalRule[] | undefined;
}

/**
 * <p>The expected value used to match a claim. Exactly one member is set.</p>
 * @public
 */
export type ClaimMatchValueType =
  | ClaimMatchValueType.MatchValueStringMember
  | ClaimMatchValueType.MatchValueStringListMember
  | ClaimMatchValueType.$UnknownMember;

/**
 * @public
 */
export namespace ClaimMatchValueType {
  /**
   * <p>A single string value to match the claim against.</p>
   * @public
   */
  export interface MatchValueStringMember {
    matchValueString: string;
    matchValueStringList?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of string values to match the claim against.</p>
   * @public
   */
  export interface MatchValueStringListMember {
    matchValueString?: never;
    matchValueStringList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    matchValueString?: never;
    matchValueStringList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    matchValueString: (value: string) => T;
    matchValueStringList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The value and match operator used to authorize a claim during JWT validation.</p>
 * @public
 */
export interface AuthorizingClaimMatchValueType {
  /**
   * <p>The expected value or values that the claim is compared against.</p>
   * @public
   */
  claimMatchValue: ClaimMatchValueType | undefined;

  /**
   * <p>The operator used to compare the claim value against the expected value.</p>
   * @public
   */
  claimMatchOperator: ClaimMatchOperatorType | undefined;
}

/**
 * <p>A validation rule applied to a single claim of an inbound JWT.</p>
 * @public
 */
export interface CustomClaimValidationType {
  /**
   * <p>The name of the claim in the inbound token to validate.</p>
   * @public
   */
  inboundTokenClaimName: string | undefined;

  /**
   * <p>The value type of the claim in the inbound token, either a string or an array of strings.</p>
   * @public
   */
  inboundTokenClaimValueType: InboundTokenClaimValueType | undefined;

  /**
   * <p>The value and match operator used to authorize the claim.</p>
   * @public
   */
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType | undefined;
}

/**
 * <p>A service-managed private endpoint provisioned within a customer VPC.</p>
 * @public
 */
export interface ManagedVpcResource {
  /**
   * <p>The identifier of the VPC in which the private endpoint is provisioned.</p>
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * <p>The identifiers of the subnets in which the private endpoint network interfaces are placed.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The IP address type used by the private endpoint, either IPV4 or IPV6.</p>
   * @public
   */
  endpointIpAddressType: EndpointIpAddressType | undefined;

  /**
   * <p>The identifiers of the security groups associated with the private endpoint network interfaces.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * A map of tag keys to tag values.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The routing domain used to resolve traffic through the private endpoint.</p>
   * @public
   */
  routingDomain?: string | undefined;
}

/**
 * <p>A self-managed private endpoint backed by a VPC Lattice resource configuration. Exactly one member is set.</p>
 * @public
 */
export type SelfManagedLatticeResource =
  | SelfManagedLatticeResource.ResourceConfigurationIdentifierMember
  | SelfManagedLatticeResource.$UnknownMember;

/**
 * @public
 */
export namespace SelfManagedLatticeResource {
  /**
   * <p>The identifier of the VPC Lattice resource configuration, specified as a resource configuration ID or ARN.</p>
   * @public
   */
  export interface ResourceConfigurationIdentifierMember {
    resourceConfigurationIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resourceConfigurationIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resourceConfigurationIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A private network endpoint used to reach a resource over a private path. Exactly one member is set.</p>
 * @public
 */
export type PrivateEndpoint =
  | PrivateEndpoint.ManagedVpcResourceMember
  | PrivateEndpoint.SelfManagedLatticeResourceMember
  | PrivateEndpoint.$UnknownMember;

/**
 * @public
 */
export namespace PrivateEndpoint {
  /**
   * <p>A private endpoint backed by a self-managed VPC Lattice resource configuration.</p>
   * @public
   */
  export interface SelfManagedLatticeResourceMember {
    selfManagedLatticeResource: SelfManagedLatticeResource;
    managedVpcResource?: never;
    $unknown?: never;
  }

  /**
   * <p>A private endpoint backed by a service-managed VPC resource.</p>
   * @public
   */
  export interface ManagedVpcResourceMember {
    selfManagedLatticeResource?: never;
    managedVpcResource: ManagedVpcResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    selfManagedLatticeResource?: never;
    managedVpcResource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    selfManagedLatticeResource: (value: SelfManagedLatticeResource) => T;
    managedVpcResource: (value: ManagedVpcResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A mapping of a domain to the private endpoint used to reach it.</p>
 * @public
 */
export interface PrivateEndpointOverride {
  /**
   * <p>The domain name to which this private endpoint override applies.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The private endpoint used to reach the specified domain.</p>
   * @public
   */
  privateEndpoint: PrivateEndpoint | undefined;
}

/**
 * <p>Configuration for a custom JWT authorizer that validates inbound bearer tokens against an OpenID Connect identity provider.</p>
 * @public
 */
export interface CustomJWTAuthorizerConfiguration {
  /**
   * <p>The OpenID Connect discovery URL used to retrieve the identity provider's metadata and signing keys.</p>
   * @public
   */
  discoveryUrl: string | undefined;

  /**
   * <p>The audience values accepted during JWT validation. A token is rejected if none of its audience claims match.</p>
   * @public
   */
  allowedAudience?: string[] | undefined;

  /**
   * <p>The client identifiers accepted during JWT validation. A token is rejected if it was not issued to one of these clients.</p>
   * @public
   */
  allowedClients?: string[] | undefined;

  /**
   * <p>The scopes accepted during JWT validation. A token is rejected if it does not carry one of these scopes.</p>
   * @public
   */
  allowedScopes?: string[] | undefined;

  /**
   * <p>Additional custom claim validations applied to the inbound JWT.</p>
   * @public
   */
  customClaims?: CustomClaimValidationType[] | undefined;

  /**
   * <p>The private endpoint used to reach the identity provider's discovery URL over a private network path.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>Per-domain private endpoint overrides that route specific identity provider domains through distinct private endpoints.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;
}

/**
 * <p>The authorizer configuration for a registry. Exactly one member is set.</p>
 * @public
 */
export type AuthorizerConfiguration =
  | AuthorizerConfiguration.CustomJWTAuthorizerMember
  | AuthorizerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizerConfiguration {
  /**
   * <p>Configuration for a custom JWT authorizer.</p>
   * @public
   */
  export interface CustomJWTAuthorizerMember {
    customJWTAuthorizer: CustomJWTAuthorizerConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customJWTAuthorizer?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customJWTAuthorizer: (value: CustomJWTAuthorizerConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.</p>
 * @public
 */
export interface DiscoveryConfiguration {
  /**
   * <p>The authorizer configuration for the registry. Required when authorizerType is CUSTOM_JWT.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The type of authorizer that controls how consumers access the registry's search and MCP invoke operations.</p>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;
}

/**
 * <p>Request structure for creating a registry</p>
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * <p>The name of the registry</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>Client token for idempotency</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Tags to associate with the registry</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Approval configuration for registry records</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;
}

/**
 * <p>Response structure for creating a registry</p>
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The ARN of the created registry</p>
   * @public
   */
  registryArn: string | undefined;
}

/**
 * <p>Request structure for deleting a registry</p>
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * <p>The identifier of the registry to delete (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * <p>Response structure for deleting a registry</p>
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>Current status of the registry, set to DELETING when deletion is initiated</p>
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * <p>Request structure for getting a registry</p>
 * @public
 */
export interface GetRegistryRequest {
  /**
   * <p>The identifier of the registry to retrieve (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * <p>Response structure for getting a registry</p>
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>Approval configuration for registry records</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>Current status of the registry</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>A single filter applied to a ListRegistries request.</p>
 * @public
 */
export interface RegistryFilter {
  /**
   * <p>The attribute to filter on</p>
   * @public
   */
  name: RegistryFilterName | undefined;

  /**
   * <p>The values to match for the attribute</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Request structure for listing registries</p>
 * @public
 */
export interface ListRegistriesRequest {
  /**
   * <p>Maximum number of results to return</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters to apply to the registry list</p>
   * @public
   */
  filters?: RegistryFilter[] | undefined;
}

/**
 * <p>Registry summary for list operations</p>
 * @public
 */
export interface RegistrySummary {
  /**
   * <p>Registry name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Registry description</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Unique registry identifier</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>Registry Amazon Resource Name</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>Current status of the registry</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for listing registries</p>
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>List of registry summaries</p>
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * <p>Token for next page of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A wrapper for updating the approval configuration of a registry. Include this wrapper to replace the approval configuration with the specified value; omit it to leave the approval configuration unchanged.</p>
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
}

/**
 * <p>Wrapper for updating an optional authorizer configuration with PATCH semantics.</p>
 * @public
 */
export interface UpdatedAuthorizerConfiguration {
  /**
   * <p>The new authorizer configuration to set. Omit to leave the existing configuration unchanged.</p>
   * @public
   */
  optionalValue?: AuthorizerConfiguration | undefined;
}

/**
 * <p>The discovery configuration fields to update on a registry. Omit this structure to leave the discovery configuration unchanged.</p>
 * @public
 */
export interface UpdatedDiscoveryConfiguration {
  /**
   * <p>Authorization configuration for the registry, with PATCH semantics</p>
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;
}

/**
 * <p>Request structure for updating a registry</p>
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The identifier of the registry to update (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The updated name of the registry</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the registry</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated discovery configuration. Changing the discovery authorization can break existing consumers that rely on the previous authorization type.</p>
   * @public
   */
  discoveryConfiguration?: UpdatedDiscoveryConfiguration | undefined;

  /**
   * <p>The updated approval configuration. The change applies only to records that move to PENDING_APPROVAL after the update; records already in PENDING_APPROVAL are unaffected.</p>
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;
}

/**
 * <p>Response structure for updating a registry</p>
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The name of the registry</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>Approval configuration for registry records</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>Current status of the registry</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of a taggable Agent Registry resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of tag keys to tag values.
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
   * ARN of a taggable Agent Registry resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag keys.
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
