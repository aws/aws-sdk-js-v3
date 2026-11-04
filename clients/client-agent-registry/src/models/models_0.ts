// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BatchGetDiscoverableRegistryRecordErrorCode,
  RecordType,
  RegistryRecordFilterName,
  RegistryRecordStatus,
} from "./enums";

/**
 * A URL-based descriptor source that identifies where descriptor content is retrieved from.
 *
 * @public
 */
export interface DescriptorSourceFromUrl {
  /**
   * The URL from which the descriptor content is retrieved.
   *
   * @public
   */
  url: string | undefined;
}

/**
 * The source location from which a descriptor's content was retrieved.
 *
 * @public
 */
export interface DescriptorSource {
  /**
   * The URL-based descriptor source, populated when descriptor content is synchronized from a URL.
   *
   * @public
   */
  fromUrl?: DescriptorSourceFromUrl | undefined;
}

/**
 * Descriptor that defines the content of an A2A (Agent-to-Agent) agent card registry record. The content is validated against the A2A protocol schema.
 *
 * @public
 */
export interface A2aAgentCardDescriptor {
  /**
   * The A2A agent card content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * The source location from which the A2A (Agent-to-Agent) agent card descriptor content was retrieved.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * Binds one registry to the record IDs requested from it.
 *
 * @public
 */
export interface RegistryRecordsEntry {
  /**
   * The identifier of the registry to retrieve the records from. You can provide either the full Amazon Resource Name (ARN) or the registry ID.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The record IDs to retrieve from the registry. You can specify 1 through 100 record IDs.
   *
   * @public
   */
  recordIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetDiscoverableRegistryRecordRequest {
  /**
   * The registry-scoped groups of record IDs to retrieve. Currently, you can specify exactly one entry.
   *
   * @public
   */
  entries: RegistryRecordsEntry[] | undefined;
}

/**
 * Describes why a requested record could not be retrieved.
 *
 * @public
 */
export interface BatchGetDiscoverableRegistryRecordError {
  /**
   * The identifier of the registry the record was requested from, echoed from the request.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the record that could not be retrieved, echoed from the request in the same format that you supplied (ARN or record ID).
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The machine-readable reason that the record could not be retrieved.
   *
   * @public
   */
  errorCode: BatchGetDiscoverableRegistryRecordErrorCode | undefined;

  /**
   * An optional human-readable detail about the error. Do not parse this value programmatically.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Markdown-format descriptor containing an agent skills document.
 *
 * @public
 */
export interface AgentSkillsMdDescriptor {
  /**
   * The agent skills markdown content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * The source location from which the agent skills markdown content was retrieved.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * Additional data for an agent skills definition descriptor.
 *
 * @public
 */
export interface AgentSkillsAdditionalData {
  /**
   * The agent skills markdown descriptor associated with the agent skills definition.
   *
   * @public
   */
  skillMd?: AgentSkillsMdDescriptor | undefined;
}

/**
 * Descriptor that defines an agent skills registry record and its associated content.
 *
 * @public
 */
export interface AgentSkillsDefinitionDescriptor {
  /**
   * The agent skills definition content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * Additional data for the agent skills definition, such as the skills markdown descriptor.
   *
   * @public
   */
  additionalData?: AgentSkillsAdditionalData | undefined;
}

/**
 * A descriptor for a registry record that exposes an AG-UI protocol endpoint. This descriptor is source-only: it identifies where the endpoint is located and carries no descriptor payload data or schema version.
 *
 * @public
 */
export interface AgUiDescriptor {
  /**
   * The source location of the AG-UI protocol endpoint.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * Custom descriptor for user-defined content
 *
 * @public
 */
export interface CustomDescriptor {
  /**
   * The custom descriptor content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * A descriptor for a registry record that exposes an HTTP endpoint. This descriptor is source-only: it identifies where the endpoint is located and carries no descriptor payload data or schema version.
 *
 * @public
 */
export interface HttpDescriptor {
  /**
   * The source location of the HTTP endpoint.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * MCP tools descriptor containing tool definitions
 *
 * @public
 */
export interface McpToolsDescriptor {
  /**
   * The MCP tools descriptor content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;
}

/**
 * Additional data for an MCP server descriptor
 *
 * @public
 */
export interface McpServerAdditionalData {
  /**
   * The MCP tools descriptor that defines the tools exposed by the MCP server.
   *
   * @public
   */
  tools?: McpToolsDescriptor | undefined;
}

/**
 * Descriptor that defines the content of an MCP (Model Context Protocol) server registry record, including the server definition and its tool definitions. The content is validated against the MCP protocol schema.
 *
 * @public
 */
export interface McpServerDescriptor {
  /**
   * The MCP server descriptor content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * Additional data associated with the MCP server descriptor, such as tool definitions.
   *
   * @public
   */
  additionalData?: McpServerAdditionalData | undefined;

  /**
   * The source location from which the MCP (Model Context Protocol) server descriptor content was retrieved.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * The protocol-specific descriptors that describe how to connect to and use the registry record.
 *
 * @public
 */
export interface Descriptors {
  /**
   * The MCP server descriptor, populated when the record type is MCP.
   *
   * @public
   */
  mcpServer?: McpServerDescriptor | undefined;

  /**
   * The A2A agent card descriptor, populated when the record type is AGENT.
   *
   * @public
   */
  a2aAgentCard?: A2aAgentCardDescriptor | undefined;

  /**
   * The agent skills definition descriptor, populated when the record type is SKILL.
   *
   * @public
   */
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor | undefined;

  /**
   * The custom descriptor, populated when the record type is CUSTOM.
   *
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * The HTTP descriptor, populated when the record exposes an HTTP endpoint.
   *
   * @public
   */
  http?: HttpDescriptor | undefined;

  /**
   * The AG-UI descriptor, populated when the record exposes an AG-UI protocol endpoint.
   *
   * @public
   */
  agui?: AgUiDescriptor | undefined;
}

/**
 * Summary information about a registry record, including its descriptors.
 *
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * The Amazon Resource Name (ARN) of the parent registry that owns the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record. Names are unique within a registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of the registry record. Use this field to explain the record's purpose or content to consumers discovering it in the registry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The human-readable display name of the registry record.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of the registry record. `MCP` is a Model Context Protocol server record, `AGENT` is an Agent-to-Agent (A2A) agent card record, `SKILL` is an agent skills definition record, and `CUSTOM` is a record with a custom descriptor.
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * The protocol-specific descriptors that describe how to connect to and use the record.
   *
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * The version identifier of the registry record.
   *
   * @public
   */
  recordVersion: string | undefined;

  /**
   * The lifecycle status of the registry record. A record is `DRAFT` before it is submitted, `PENDING_APPROVAL` while awaiting curator review, and `APPROVED` once it is approved and discoverable. `REJECTED` and `DEPRECATED` records are not discoverable. The `CREATING`, `UPDATING`, `CREATE_FAILED`, and `UPDATE_FAILED` values reflect the state of an in-progress or failed asynchronous change.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The custom metadata attached to this registry record. Values are strings (maximum 128 characters) or booleans. This field is only present if the registry has a custom metadata schema configured.
   *
   * @public
   */
  customMetadata?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface BatchGetDiscoverableRegistryRecordResponse {
  /**
   * The records that were successfully retrieved. Each record correlates to the request by its `recordId`.
   *
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * The per-record errors for records that could not be retrieved. This list is empty when all requested records were returned.
   *
   * @public
   */
  errors: BatchGetDiscoverableRegistryRecordError[] | undefined;
}

/**
 * Describes a single input field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A single filter applied to a `ListDiscoverableRegistryRecords` request.
 *
 * @public
 */
export interface RegistryRecordFilter {
  /**
   * The attribute to filter on.
   *
   * @public
   */
  name: RegistryRecordFilterName | undefined;

  /**
   * The values to match for the attribute.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListDiscoverableRegistryRecordsRequest {
  /**
   * The identifier of the registry whose discoverable records are listed. You can provide either the full Amazon Resource Name (ARN) or the registry ID.
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The maximum number of records to return in a single page. Valid values are 1 through 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token returned by a previous request. Use this value to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The filters to apply to the discoverable registry record list.
   *
   * @public
   */
  filters?: RegistryRecordFilter[] | undefined;
}

/**
 * Summary information about a discoverable registry record returned by `ListDiscoverableRegistryRecords`. This summary does not include descriptors.
 *
 * @public
 */
export interface DiscoverableRegistryRecordSummary {
  /**
   * The Amazon Resource Name (ARN) of the parent registry that owns the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record. Names are unique within a registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A human-readable description of the registry record. Use this field to explain the record's purpose or content to consumers discovering it in the registry.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The human-readable display name of the registry record.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The type of the registry record. `MCP` is a Model Context Protocol server record, `AGENT` is an Agent-to-Agent (A2A) agent card record, `SKILL` is an agent skills definition record, and `CUSTOM` is a record with a custom descriptor.
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * The version identifier of the registry record.
   *
   * @public
   */
  recordVersion: string | undefined;

  /**
   * The lifecycle status of the registry record. A record is `DRAFT` before it is submitted, `PENDING_APPROVAL` while awaiting curator review, and `APPROVED` once it is approved and discoverable. `REJECTED` and `DEPRECATED` records are not discoverable. The `CREATING`, `UPDATING`, `CREATE_FAILED`, and `UPDATE_FAILED` values reflect the state of an in-progress or failed asynchronous change.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The descriptor types that are present on this registry record. Each value corresponds to a descriptor entry key on the approved record.
   *
   * @public
   */
  descriptorTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDiscoverableRegistryRecordsResponse {
  /**
   * The page of discoverable registry record summaries.
   *
   * @public
   */
  registryRecords: DiscoverableRegistryRecordSummary[] | undefined;

  /**
   * The pagination token to pass to a subsequent request to retrieve the next page of results. This field is absent when there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchDiscoverableRegistryRecordsRequest {
  /**
   * The natural language query to search for matching registry records.
   *
   * @public
   */
  searchQuery: string | undefined;

  /**
   * The registry identifiers to search within. Currently, you must specify exactly one registry identifier. You can provide either the full Amazon Web Services Resource Name (ARN) or the registry ID.
   *
   * @public
   */
  registryIds: string[] | undefined;

  /**
   * The maximum number of results to return. Valid values are 1 through 20. The default value is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional structured JSON metadata filter that narrows the search results. Supports the field-level operators `$eq`, `$ne`, and `$in`, and the logical operators `$and` and `$or` on filterable fields.
   *
   * Specifies additional filtering on custom metadata fields using the `customMetadata.\{key\}` prefix. For example, to filter by a custom metadata field: `\{"customMetadata.environment": \{"$eq": "production"\}\}`. For a Boolean field, you can also use a native JSON boolean value, for example: `\{"customMetadata.requiresApproval": \{"$eq": true\}\}`.
   *
   * @public
   */
  filters?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface SearchDiscoverableRegistryRecordsResponse {
  /**
   * The registry records that match the search query, ordered by relevance.
   *
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;
}
