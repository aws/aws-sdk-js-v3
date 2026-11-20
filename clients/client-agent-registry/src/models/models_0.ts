// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BatchGetDiscoverableRegistryRecordErrorCode,
  BotCategory,
  RecordType,
  RegistryRecordFilterName,
  RegistryRecordStatus,
  SearchType,
} from "./enums";

/**
 * <p> A URL-based descriptor source that identifies where descriptor content is retrieved from.</p>
 * @public
 */
export interface DescriptorSourceFromUrl {
  /**
   * <p> The URL from which the descriptor content is retrieved. For an agent skill that synchronizes its SKILL.md from GitHub, this is the GitHub folder URL. The data plane doesn't return Amazon S3 (<code>s3://</code>) source URLs.</p>
   * @public
   */
  url: string | undefined;
}

/**
 * <p> The source location from which a descriptor's content was retrieved.</p>
 * @public
 */
export interface DescriptorSource {
  /**
   * <p> The URL-based descriptor source, populated when descriptor content is synchronized from a URL.</p>
   * @public
   */
  fromUrl?: DescriptorSourceFromUrl | undefined;
}

/**
 * <p> Descriptor that defines the content of an A2A (Agent-to-Agent) agent card registry record. The content is validated against the A2A protocol schema.</p>
 * @public
 */
export interface A2aAgentCardDescriptor {
  /**
   * <p> The A2A agent card content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p> The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p> The source location from which the A2A (Agent-to-Agent) agent card descriptor content was retrieved.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p> Binds one registry to the record IDs requested from it.</p>
 * @public
 */
export interface RegistryRecordsEntry {
  /**
   * <p> The identifier of the registry to retrieve the records from. You can provide either the full Amazon Resource Name (ARN) or the registry ID.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p> The record IDs to retrieve from the registry. You can specify 1 through 100 record IDs.</p>
   * @public
   */
  recordIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDiscoverableRegistryRecordRequest {
  /**
   * <p> The registry-scoped groups of record IDs to retrieve. Currently, you can specify exactly one entry.</p>
   * @public
   */
  entries: RegistryRecordsEntry[] | undefined;
}

/**
 * <p> Describes why a requested record could not be retrieved.</p>
 * @public
 */
export interface BatchGetDiscoverableRegistryRecordError {
  /**
   * <p> The identifier of the registry the record was requested from, echoed from the request.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p> The identifier of the record that could not be retrieved, echoed from the request in the same format that you supplied (ARN or record ID).</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p> The machine-readable reason that the record could not be retrieved.</p>
   * @public
   */
  errorCode: BatchGetDiscoverableRegistryRecordErrorCode | undefined;

  /**
   * <p> An optional human-readable detail about the error. Do not parse this value programmatically.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The skill package of a registry record, as a short-lived download URL and the package's SHA-256 checksum. Responses never include the package bytes.</p>
 * @public
 */
export interface RegistryRecordArtifactDownload {
  /**
   * <p>The SHA-256 checksum of the package, as 64 lowercase hexadecimal characters. The download response carries no signature that you can check, so compare the checksum of the file that you download with this value before you use the package.</p>
   * @public
   */
  sha256?: string | undefined;

  /**
   * <p>A presigned Amazon S3 URL that downloads the package. The URL is valid for up to 5 minutes, and the response doesn't include its expiry time. To get a new URL, call the operation again. Anyone who has the URL can download the package until it expires, so don't log, store, or share it.</p>
   * @public
   */
  downloadUrl?: string | undefined;
}

/**
 * <p> Markdown-format descriptor containing an agent skills document.</p>
 * @public
 */
export interface AgentSkillsMdDescriptor {
  /**
   * <p> The agent skills markdown content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p> The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p> The source location from which the agent skills markdown content was retrieved.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p> Additional data for an agent skills definition descriptor.</p>
 * @public
 */
export interface AgentSkillsAdditionalData {
  /**
   * <p> The agent skills markdown descriptor associated with the agent skills definition.</p>
   * @public
   */
  skillMd?: AgentSkillsMdDescriptor | undefined;
}

/**
 * <p> Descriptor that defines an agent skills registry record and its associated content.</p>
 * @public
 */
export interface AgentSkillsDefinitionDescriptor {
  /**
   * <p> The agent skills definition content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p> The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p> Additional data for the agent skills definition, such as the skills markdown descriptor.</p>
   * @public
   */
  additionalData?: AgentSkillsAdditionalData | undefined;
}

/**
 * <p> A descriptor for a registry record that exposes an AG-UI protocol endpoint. This descriptor is source-only: it identifies where the endpoint is located and carries no descriptor payload data or schema version.</p>
 * @public
 */
export interface AgUiDescriptor {
  /**
   * <p> The source location of the AG-UI protocol endpoint.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>Custom descriptor for user-defined content</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p>The custom descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;
}

/**
 * <p> A descriptor for a registry record that exposes an HTTP endpoint. This descriptor is source-only: it identifies where the endpoint is located and carries no descriptor payload data or schema version.</p>
 * @public
 */
export interface HttpDescriptor {
  /**
   * <p> The source location of the HTTP endpoint.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>MCP tools descriptor containing tool definitions</p>
 * @public
 */
export interface McpToolsDescriptor {
  /**
   * <p>The MCP tools descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
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
   * <p>The MCP tools descriptor that defines the tools exposed by the MCP server.</p>
   * @public
   */
  tools?: McpToolsDescriptor | undefined;
}

/**
 * <p> Descriptor that defines the content of an MCP (Model Context Protocol) server registry record, including the server definition and its tool definitions. The content is validated against the MCP protocol schema.</p>
 * @public
 */
export interface McpServerDescriptor {
  /**
   * <p> The MCP server descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p> The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p> Additional data associated with the MCP server descriptor, such as tool definitions.</p>
   * @public
   */
  additionalData?: McpServerAdditionalData | undefined;

  /**
   * <p> The source location from which the MCP (Model Context Protocol) server descriptor content was retrieved.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>The additional data for a signature agent card descriptor, such as the bot category of the web bot.</p>
 * @public
 */
export interface SignatureAgentCardAdditionalData {
  /**
   * <p>The bot category that describes the purpose of the web bot identified by the signature agent card descriptor.</p>
   * @public
   */
  category?: BotCategory | undefined;
}

/**
 * <p> Descriptor that defines the content of a signature agent card, which identifies a web bot and references the JSON Web Key Set (JWKS) used to verify its HTTP message signatures.</p>
 * @public
 */
export interface SignatureAgentCardDescriptor {
  /**
   * <p> The signature agent card descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p> The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p> The source location from which the signature agent card descriptor content was retrieved.</p>
   * @public
   */
  source?: DescriptorSource | undefined;

  /**
   * <p> Additional data for the signature agent card, such as its AWS WAF bot category.</p>
   * @public
   */
  additionalData?: SignatureAgentCardAdditionalData | undefined;
}

/**
 * <p> The protocol-specific descriptors that describe how to connect to and use the registry record.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p> The MCP server descriptor, populated when the record type is MCP.</p>
   * @public
   */
  mcpServer?: McpServerDescriptor | undefined;

  /**
   * <p> The A2A agent card descriptor, populated when the record type is AGENT.</p>
   * @public
   */
  a2aAgentCard?: A2aAgentCardDescriptor | undefined;

  /**
   * <p> The agent skills definition descriptor, populated when the record type is SKILL.</p>
   * @public
   */
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor | undefined;

  /**
   * <p> The custom descriptor, populated when the record type is CUSTOM.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p> The HTTP descriptor, populated when the record exposes an HTTP endpoint.</p>
   * @public
   */
  http?: HttpDescriptor | undefined;

  /**
   * <p> The AG-UI descriptor, populated when the record exposes an AG-UI protocol endpoint.</p>
   * @public
   */
  agui?: AgUiDescriptor | undefined;

  /**
   * <p> The signature agent card descriptor, populated when the record represents a web bot. It identifies the JSON Web Key Set (JWKS) used to verify the bot's HTTP message signatures.</p>
   * @public
   */
  signatureAgentCard?: SignatureAgentCardDescriptor | undefined;
}

/**
 * <p> Summary information about a registry record, including its descriptors.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p> The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p> The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A human-readable description of the registry record. Use this field to explain the record's purpose or content to consumers discovering it in the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p> The type of the registry record. <code>MCP</code> is a Model Context Protocol server record, <code>AGENT</code> is an Agent-to-Agent (A2A) agent card record, <code>SKILL</code> is an agent skills definition record, and <code>CUSTOM</code> is a record with a custom descriptor.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p> The protocol-specific descriptors that describe how to connect to and use the record.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p> The version identifier of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p> The lifecycle status of the registry record. A record is <code>DRAFT</code> before it is submitted, <code>PENDING_APPROVAL</code> while awaiting curator review, and <code>APPROVED</code> once it is approved and discoverable. <code>REJECTED</code> and <code>DEPRECATED</code> records are not discoverable. The <code>CREATING</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code> values reflect the state of an in-progress or failed asynchronous change.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p> The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The custom metadata attached to this registry record. Values are strings (maximum 128 characters) or booleans. This field is only present if the registry has a custom metadata schema configured.</p>
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * <p> The skill package of the record's latest approved revision, as the package's SHA-256 checksum and a download URL that is valid for up to 5 minutes. Only <code>BatchGetDiscoverableRegistryRecord</code> returns this member, not <code>SearchDiscoverableRegistryRecords</code>. Absent when the record has no skill package.</p>
   * @public
   */
  artifact?: RegistryRecordArtifactDownload | undefined;
}

/**
 * @public
 */
export interface BatchGetDiscoverableRegistryRecordResponse {
  /**
   * <p> The records that were successfully retrieved. Each record correlates to the request by its <code>recordId</code>.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p> The per-record errors for records that could not be retrieved. This list is empty when all requested records were returned.</p>
   * @public
   */
  errors: BatchGetDiscoverableRegistryRecordError[] | undefined;
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
 * <p> A single filter applied to a <code>ListDiscoverableRegistryRecords</code> request.</p>
 * @public
 */
export interface RegistryRecordFilter {
  /**
   * <p> The attribute to filter on.</p>
   * @public
   */
  name: RegistryRecordFilterName | undefined;

  /**
   * <p> The values to match for the attribute.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListDiscoverableRegistryRecordsRequest {
  /**
   * <p> The identifier of the registry whose discoverable records are listed. You can provide either the full Amazon Resource Name (ARN) or the registry ID.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p> The maximum number of records to return in a single page. Valid values are 1 through 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token returned by a previous request. Use this value to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The filters to apply to the discoverable registry record list.</p>
   * @public
   */
  filters?: RegistryRecordFilter[] | undefined;
}

/**
 * <p> Summary information about a discoverable registry record returned by <code> ListDiscoverableRegistryRecords</code>. This summary does not include descriptors.</p>
 * @public
 */
export interface DiscoverableRegistryRecordSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p> The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p> The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A human-readable description of the registry record. Use this field to explain the record's purpose or content to consumers discovering it in the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p> The type of the registry record. <code>MCP</code> is a Model Context Protocol server record, <code>AGENT</code> is an Agent-to-Agent (A2A) agent card record, <code>SKILL</code> is an agent skills definition record, and <code>CUSTOM</code> is a record with a custom descriptor.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p> The version identifier of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p> The lifecycle status of the registry record. A record is <code>DRAFT</code> before it is submitted, <code>PENDING_APPROVAL</code> while awaiting curator review, and <code>APPROVED</code> once it is approved and discoverable. <code>REJECTED</code> and <code>DEPRECATED</code> records are not discoverable. The <code>CREATING</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code> values reflect the state of an in-progress or failed asynchronous change.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p> The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The descriptor types that are present on this registry record. Each value corresponds to a descriptor entry key on the approved record.</p>
   * @public
   */
  descriptorTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDiscoverableRegistryRecordsResponse {
  /**
   * <p> The page of discoverable registry record summaries.</p>
   * @public
   */
  registryRecords: DiscoverableRegistryRecordSummary[] | undefined;

  /**
   * <p> The pagination token to pass to a subsequent request to retrieve the next page of results. This field is absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchDiscoverableRegistryRecordsRequest {
  /**
   * <p> The natural language query to search for matching registry records. If you specify an empty string, the operation returns the records that match the <code>filters</code>, most recently updated first, up to the result limit for the <code>searchType</code>.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p> The registry identifiers to search within. Currently, you must specify exactly one registry identifier. You can provide either the full Amazon Web Services Resource Name (ARN) or the registry ID.</p>
   * @public
   */
  registryIds: string[] | undefined;

  /**
   * <p> The maximum number of results to return in one page. Valid values are 1 through 50 when <code>searchType</code> is <code>KEYWORD</code>, and 1 through 20 when it is <code>HYBRID</code> or <code>SEMANTIC</code>. The default value is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> An optional structured JSON metadata filter that narrows the search results. Supports the field-level operators <code>$eq</code>, <code>$ne</code>, and <code>$in</code>, and the logical operators <code>$and</code> and <code>$or</code> on filterable fields.</p> <p> Specifies additional filtering on custom metadata fields using the <code>customMetadata.\{key\}</code> prefix. For example, to filter by a custom metadata field: <code>\{"customMetadata.environment": \{"$eq": "production"\}\}</code>. For a Boolean field, you can also use a native JSON boolean value, for example: <code>\{"customMetadata.requiresApproval": \{"$eq": true\}\}</code>.</p>
   * @public
   */
  filters?: __DocumentType | undefined;

  /**
   * <p> Specifies how the service ranks registry records against the search query. If you omit this parameter, the service uses <code>HYBRID</code> in Amazon Web Services Regions that support semantic search and <code>KEYWORD</code> in Regions that do not. The response reports the search type that the service used. Valid values are the following:</p> <ul> <li> <p> <code>KEYWORD</code> – Ranks records by keyword match between the query terms and the record name, description, descriptors, and custom metadata text values. Available in every Amazon Web Services Region.</p> </li> <li> <p> <code>SEMANTIC</code> – Ranks records by semantic similarity to the query and returns the most similar records, up to <code>maxResults</code>, even when none of them closely matches the query.</p> </li> <li> <p> <code>HYBRID</code> – Combines keyword ranking and semantic ranking.</p> </li> </ul> <p> <code>HYBRID</code> and <code>SEMANTIC</code> are available in a limited number of Regions. If you specify either one in a Region that does not support semantic search, the request fails with a <code>ValidationException</code> that has the reason <code>UnsupportedInRegion</code>.</p>
   * @public
   */
  searchType?: SearchType | undefined;

  /**
   * <p> The pagination token from a previous response. Use it to retrieve the next page of results, and send the same <code>searchQuery</code>, <code>registryIds</code>, <code>filters</code>, and <code>searchType</code> that you used for the first page. If any of them differ, the request fails with a <code>ValidationException</code>. A pagination token expires 15 minutes after the service returns the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchDiscoverableRegistryRecordsResponse {
  /**
   * <p> The registry records that match the search query, ordered by relevance. A page can contain fewer than <code>maxResults</code> records, or none, even when the response includes a <code>nextToken</code>. To retrieve every result, continue until the response has no <code>nextToken</code>.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p> Specifies the search type that the service used to rank the returned records. If you omitted <code>searchType</code> in the request, this is the default for the Amazon Web Services Region: <code>HYBRID</code> where semantic search is supported, and <code>KEYWORD</code> elsewhere.</p>
   * @public
   */
  searchType?: SearchType | undefined;

  /**
   * <p> The pagination token to pass to a subsequent request to retrieve the next page of results. This field is absent when there are no more results, or when the search has returned the maximum number of results for its search type.</p>
   * @public
   */
  nextToken?: string | undefined;
}
