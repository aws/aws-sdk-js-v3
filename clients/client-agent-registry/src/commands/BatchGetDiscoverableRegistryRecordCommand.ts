// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchGetDiscoverableRegistryRecordRequest,
  BatchGetDiscoverableRegistryRecordResponse,
} from "../models/models_0";
import { BatchGetDiscoverableRegistryRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetDiscoverableRegistryRecordCommand}.
 */
export interface BatchGetDiscoverableRegistryRecordCommandInput extends BatchGetDiscoverableRegistryRecordRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDiscoverableRegistryRecordCommand}.
 */
export interface BatchGetDiscoverableRegistryRecordCommandOutput extends BatchGetDiscoverableRegistryRecordResponse, __MetadataBearer {}

/**
 * <p> Retrieves multiple discoverable registry records by ID from a single registry. Records that cannot be retrieved are reported individually in the <code>errors</code> list rather than failing the entire request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryClient, BatchGetDiscoverableRegistryRecordCommand } from "@aws-sdk/client-agent-registry"; // ES Modules import
 * // const { AgentRegistryClient, BatchGetDiscoverableRegistryRecordCommand } = require("@aws-sdk/client-agent-registry"); // CommonJS import
 * // import type { AgentRegistryClientConfig } from "@aws-sdk/client-agent-registry";
 * const config = {}; // type is AgentRegistryClientConfig
 * const client = new AgentRegistryClient(config);
 * const input = { // BatchGetDiscoverableRegistryRecordRequest
 *   entries: [ // RegistryRecordsEntryList // required
 *     { // RegistryRecordsEntry
 *       registryId: "STRING_VALUE", // required
 *       recordIds: [ // RegistryRecordIdList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchGetDiscoverableRegistryRecordCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDiscoverableRegistryRecordResponse
 * //   registryRecords: [ // RegistryRecordSummaryList // required
 * //     { // RegistryRecordSummary
 * //       registryArn: "STRING_VALUE", // required
 * //       recordArn: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL", // required
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
 * //   errors: [ // BatchGetDiscoverableRegistryRecordErrorList // required
 * //     { // BatchGetDiscoverableRegistryRecordError
 * //       registryId: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       errorCode: "RESOURCE_NOT_FOUND" || "ACCESS_DENIED" || "INTERNAL_ERROR", // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDiscoverableRegistryRecordCommandInput - {@link BatchGetDiscoverableRegistryRecordCommandInput}
 * @returns {@link BatchGetDiscoverableRegistryRecordCommandOutput}
 * @see {@link BatchGetDiscoverableRegistryRecordCommandInput} for command's `input` shape.
 * @see {@link BatchGetDiscoverableRegistryRecordCommandOutput} for command's `response` shape.
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
export class BatchGetDiscoverableRegistryRecordCommand extends command<BatchGetDiscoverableRegistryRecordCommandInput, BatchGetDiscoverableRegistryRecordCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetDiscoverableRegistryRecord",
  BatchGetDiscoverableRegistryRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDiscoverableRegistryRecordRequest;
      output: BatchGetDiscoverableRegistryRecordResponse;
    };
    sdk: {
      input: BatchGetDiscoverableRegistryRecordCommandInput;
      output: BatchGetDiscoverableRegistryRecordCommandOutput;
    };
  };
}
