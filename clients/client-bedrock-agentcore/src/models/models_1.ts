// smithy-typescript generated code
import type { DescriptorType, RegistryRecordStatus } from "./enums";
import type { A2aDescriptor, AgentSkillsDescriptor, CustomDescriptor } from "./models_0";

/**
 * <p> The MCP server definition with a schema version and inline content. The <code>schemaVersion</code> identifies the version of the MCP server configuration schema.</p>
 * @public
 */
export interface ServerDefinition {
  /**
   * <p> The schema version of the MCP server configuration. The schema version identifies the format of the server definition content.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p> The inline content of the server definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP tools definition with a protocol version and inline content. The <code>protocolVersion</code> identifies the MCP protocol version that the tools conform to. This differs from <code>schemaVersion</code> in the server definition, which identifies the server configuration schema format.</p>
 * @public
 */
export interface ToolsDefinition {
  /**
   * <p> The MCP protocol version that the tools conform to. This differs from the <code>schemaVersion</code> field in the server definition, which identifies the server configuration schema format.</p>
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * <p> The inline content of the tools definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP (Model Context Protocol) descriptor configuration for a registry record. Contains the server definition and tools definition.</p>
 * @public
 */
export interface McpDescriptor {
  /**
   * <p> The MCP server definition that describes the server configuration.</p>
   * @public
   */
  server: ServerDefinition | undefined;

  /**
   * <p> The MCP tools definition that describes the available tools.</p>
   * @public
   */
  tools: ToolsDefinition | undefined;
}

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
