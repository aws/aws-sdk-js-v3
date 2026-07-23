// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRegistryRecordsRequest, ListRegistryRecordsResponse } from "../models/models_2";
import { ListRegistryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRegistryRecordsCommand}.
 */
export interface ListRegistryRecordsCommandInput extends ListRegistryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListRegistryRecordsCommand}.
 */
export interface ListRegistryRecordsCommandOutput extends ListRegistryRecordsResponse, __MetadataBearer {}

/**
 * <p>Lists registry records within a registry. You can optionally filter results using the <code>name</code>, <code>status</code>, and <code>descriptorType</code> parameters. When multiple filters are specified, they are combined using AND logic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListRegistryRecordsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListRegistryRecordsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListRegistryRecordsRequest
 *   registryId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 *   descriptorType: "MCP" || "A2A" || "CUSTOM" || "AGENT_SKILLS",
 * };
 * const command = new ListRegistryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistryRecordsResponse
 * //   registryRecords: [ // RegistryRecordSummaryList // required
 * //     { // RegistryRecordSummary
 * //       registryArn: "STRING_VALUE", // required
 * //       recordArn: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       descriptorType: "MCP" || "A2A" || "CUSTOM" || "AGENT_SKILLS", // required
 * //       recordVersion: "STRING_VALUE", // required
 * //       status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegistryRecordsCommandInput - {@link ListRegistryRecordsCommandInput}
 * @returns {@link ListRegistryRecordsCommandOutput}
 * @see {@link ListRegistryRecordsCommandInput} for command's `input` shape.
 * @see {@link ListRegistryRecordsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListRegistryRecordsCommand extends command<ListRegistryRecordsCommandInput, ListRegistryRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListRegistryRecords",
  ListRegistryRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegistryRecordsRequest;
      output: ListRegistryRecordsResponse;
    };
    sdk: {
      input: ListRegistryRecordsCommandInput;
      output: ListRegistryRecordsCommandOutput;
    };
  };
}
