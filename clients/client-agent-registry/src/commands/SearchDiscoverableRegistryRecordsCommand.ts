// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SearchDiscoverableRegistryRecordsRequest,
  SearchDiscoverableRegistryRecordsResponse,
} from "../models/models_0";
import { SearchDiscoverableRegistryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchDiscoverableRegistryRecordsCommand}.
 */
export interface SearchDiscoverableRegistryRecordsCommandInput extends SearchDiscoverableRegistryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link SearchDiscoverableRegistryRecordsCommand}.
 */
export interface SearchDiscoverableRegistryRecordsCommandOutput extends SearchDiscoverableRegistryRecordsResponse, __MetadataBearer {}

/**
 * <p> Searches the discoverable registry records in a registry using a natural language query. Returns metadata for the matching records ordered by relevance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryClient, SearchDiscoverableRegistryRecordsCommand } from "@aws-sdk/client-agent-registry"; // ES Modules import
 * // const { AgentRegistryClient, SearchDiscoverableRegistryRecordsCommand } = require("@aws-sdk/client-agent-registry"); // CommonJS import
 * // import type { AgentRegistryClientConfig } from "@aws-sdk/client-agent-registry";
 * const config = {}; // type is AgentRegistryClientConfig
 * const client = new AgentRegistryClient(config);
 * const input = { // SearchDiscoverableRegistryRecordsRequest
 *   searchQuery: "STRING_VALUE", // required
 *   registryIds: [ // RegistryIdList // required
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   filters: "DOCUMENT_VALUE",
 * };
 * const command = new SearchDiscoverableRegistryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // SearchDiscoverableRegistryRecordsResponse
 * //   registryRecords: [ // RegistryRecordSummaryList // required
 * //     { // RegistryRecordSummary
 * //       registryArn: "STRING_VALUE", // required
 * //       recordArn: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL" || "GATEWAY", // required
 * //       descriptors: { // Descriptors
 * //         mcpServer: { // McpServerDescriptor
 * //           data: "STRING_VALUE",
 * //           dataSchemaVersion: "STRING_VALUE",
 * //           additionalData: { // McpServerAdditionalData
 * //             tools: { // McpToolsDescriptor
 * //               data: "STRING_VALUE",
 * //               dataSchemaVersion: "STRING_VALUE",
 * //             },
 * //           },
 * //           source: { // DescriptorSource
 * //             fromUrl: { // DescriptorSourceFromUrl
 * //               url: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //         a2aAgentCard: { // A2aAgentCardDescriptor
 * //           data: "STRING_VALUE",
 * //           dataSchemaVersion: "STRING_VALUE",
 * //           source: {
 * //             fromUrl: {
 * //               url: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //         agentSkillsDefinition: { // AgentSkillsDefinitionDescriptor
 * //           data: "STRING_VALUE",
 * //           dataSchemaVersion: "STRING_VALUE",
 * //           additionalData: { // AgentSkillsAdditionalData
 * //             skillMd: { // AgentSkillsMdDescriptor
 * //               data: "STRING_VALUE",
 * //               dataSchemaVersion: "STRING_VALUE",
 * //               source: {
 * //                 fromUrl: {
 * //                   url: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //         custom: { // CustomDescriptor
 * //           data: "STRING_VALUE",
 * //         },
 * //       },
 * //       recordVersion: "STRING_VALUE", // required
 * //       status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchDiscoverableRegistryRecordsCommandInput - {@link SearchDiscoverableRegistryRecordsCommandInput}
 * @returns {@link SearchDiscoverableRegistryRecordsCommandOutput}
 * @see {@link SearchDiscoverableRegistryRecordsCommandInput} for command's `input` shape.
 * @see {@link SearchDiscoverableRegistryRecordsCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryClientResolvedConfig | config} for AgentRegistryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request could not be authenticated.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistry service.</p>
 *
 *
 * @public
 */
export class SearchDiscoverableRegistryRecordsCommand extends command<SearchDiscoverableRegistryRecordsCommandInput, SearchDiscoverableRegistryRecordsCommandOutput>(
  _ep0,
  _mw0,
  "SearchDiscoverableRegistryRecords",
  SearchDiscoverableRegistryRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDiscoverableRegistryRecordsRequest;
      output: SearchDiscoverableRegistryRecordsResponse;
    };
    sdk: {
      input: SearchDiscoverableRegistryRecordsCommandInput;
      output: SearchDiscoverableRegistryRecordsCommandOutput;
    };
  };
}
