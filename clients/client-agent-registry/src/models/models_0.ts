// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BatchGetDiscoverableRegistryRecordErrorCode,
  RecordType,
  RegistryRecordFilterName,
  RegistryRecordStatus,
} from "./enums";

/**
 * <p>Base mixin for descriptor source from URL</p>
 * @public
 */
export interface DescriptorSourceFromUrl {
  /**
   * <p>URL source for descriptor content</p>
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
   * <p>Base mixin for descriptor source from URL</p>
   * @public
   */
  fromUrl?: DescriptorSourceFromUrl | undefined;
}

/**
 * <p>Base mixin for A2A agent card descriptor content</p>
 * @public
 */
export interface A2aAgentCardDescriptor {
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
   * <p>Registry identifier that accepts either ARN or ID format</p>
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
   * <p>Registry identifier that accepts either ARN or ID format</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>Record identifier that accepts either ARN or ID format</p>
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
 * <p>Base mixin for agent skills markdown descriptor content</p>
 * @public
 */
export interface AgentSkillsMdDescriptor {
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
   * <p>Base mixin for agent skills markdown descriptor content</p>
   * @public
   */
  skillMd?: AgentSkillsMdDescriptor | undefined;
}

/**
 * <p>Base mixin for agent skills definition descriptor content</p>
 * @public
 */
export interface AgentSkillsDefinitionDescriptor {
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

  /**
   * <p> Additional data for the agent skills definition, such as the skills markdown descriptor.</p>
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
 * <p>Base mixin for MCP server descriptor content</p>
 * @public
 */
export interface McpServerDescriptor {
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

  /**
   * <p>Additional data for an MCP server descriptor</p>
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
 * <p> The protocol-specific descriptors that describe how to connect to and use the registry record.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p>Base mixin for MCP server descriptor content</p>
   * @public
   */
  mcpServer?: McpServerDescriptor | undefined;

  /**
   * <p>Base mixin for A2A agent card descriptor content</p>
   * @public
   */
  a2aAgentCard?: A2aAgentCardDescriptor | undefined;

  /**
   * <p>Base mixin for agent skills definition descriptor content</p>
   * @public
   */
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor | undefined;

  /**
   * <p>Custom descriptor for user-defined content</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;
}

/**
 * <p> Summary information about a registry record, including its descriptors.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p>Registry Amazon Resource Name</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Registry Record Amazon Resource Name</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>Registry Record unique identifier - 12-character alphanumeric string</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>Registry Record name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the Resource</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Display name for a registry record</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Record type enum for registry record classification</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p> The protocol-specific descriptors that describe how to connect to and use the record.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>Version of the registry record</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>Registry record status</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>Timestamp in ISO 8601 date-time format</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp in ISO 8601 date-time format</p>
   * @public
   */
  updatedAt: Date | undefined;
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
   * <p>Registry identifier that accepts either ARN or ID format</p>
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
   * <p>Registry Amazon Resource Name</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Registry Record Amazon Resource Name</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>Registry Record unique identifier - 12-character alphanumeric string</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>Registry Record name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the Resource</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Display name for a registry record</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Record type enum for registry record classification</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>Version of the registry record</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>Registry record status</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>Timestamp in ISO 8601 date-time format</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp in ISO 8601 date-time format</p>
   * @public
   */
  updatedAt: Date | undefined;
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
   * <p> The natural language query to search for matching registry records.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p> The registry identifiers to search within. Currently, you must specify exactly one registry identifier. You can provide either the full Amazon Web Services Resource Name (ARN) or the registry ID.</p>
   * @public
   */
  registryIds: string[] | undefined;

  /**
   * <p> The maximum number of results to return. Valid values are 1 through 20. The default value is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> An optional structured JSON metadata filter that narrows the search results. Supports the field-level operators <code>$eq</code>, <code>$ne</code>, and <code>$in</code>, and the logical operators <code>$and</code> and <code>$or</code> on filterable fields.</p>
   * @public
   */
  filters?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface SearchDiscoverableRegistryRecordsResponse {
  /**
   * <p> The registry records that match the search query, ordered by relevance.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;
}
