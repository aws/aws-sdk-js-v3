// smithy-typescript generated code
import type { DescriptorType, RegistryRecordStatus } from "./enums";
import type { A2aDescriptor, AgentSkillsDescriptor, CustomDescriptor, McpDescriptor } from "./models_0";

/**
 * <p> Contains the descriptor configuration for a registry record. Only the field that matches the record's <code>descriptorType</code> is populated.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p> The MCP (Model Context Protocol) descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>MCP</code>.</p>
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * <p> The A2A (Agent-to-Agent) descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>A2A</code>.</p>
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * <p> The custom descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>CUSTOM</code>.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p> The agent skills descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * <p> Summary information about a registry record.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the registry that this record belongs to.</p>
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
   * <p> The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The type of descriptor associated with this registry record.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p> The descriptor configurations for this registry record.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p> The version of the registry record.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p> The current status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p> The date and time when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The date and time when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsResponse {
  /**
   * <p> The list of registry records that match the search query, ordered by relevance.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;
}
