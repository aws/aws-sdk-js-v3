// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRegistryRecordsRequest, ListRegistryRecordsResponse } from "../models/models_0";
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
 * <p>Lists the registry records within a registry, with optional filtering by name, status, and record type</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, ListRegistryRecordsCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, ListRegistryRecordsCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // ListRegistryRecordsRequest
 *   registryId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // RegistryRecordFilterList
 *     { // RegistryRecordFilter
 *       name: "name" || "status" || "recordType", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
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
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL", // required
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
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryControlServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistryControl service.</p>
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
