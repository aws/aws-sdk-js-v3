// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDiscoverableRegistryRecordsRequest,
  ListDiscoverableRegistryRecordsResponse,
} from "../models/models_0";
import { ListDiscoverableRegistryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDiscoverableRegistryRecordsCommand}.
 */
export interface ListDiscoverableRegistryRecordsCommandInput extends ListDiscoverableRegistryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoverableRegistryRecordsCommand}.
 */
export interface ListDiscoverableRegistryRecordsCommandOutput extends ListDiscoverableRegistryRecordsResponse, __MetadataBearer {}

/**
 * <p> Lists the discoverable registry records in a registry. You can optionally filter and paginate the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryClient, ListDiscoverableRegistryRecordsCommand } from "@aws-sdk/client-agent-registry"; // ES Modules import
 * // const { AgentRegistryClient, ListDiscoverableRegistryRecordsCommand } = require("@aws-sdk/client-agent-registry"); // CommonJS import
 * // import type { AgentRegistryClientConfig } from "@aws-sdk/client-agent-registry";
 * const config = {}; // type is AgentRegistryClientConfig
 * const client = new AgentRegistryClient(config);
 * const input = { // ListDiscoverableRegistryRecordsRequest
 *   registryId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // RegistryRecordFilterList
 *     { // RegistryRecordFilter
 *       name: "recordType" || "descriptorType", // required
 *       values: [ // DiscoverableFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListDiscoverableRegistryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoverableRegistryRecordsResponse
 * //   registryRecords: [ // DiscoverableRegistryRecordSummaryList // required
 * //     { // DiscoverableRegistryRecordSummary
 * //       registryArn: "STRING_VALUE", // required
 * //       recordArn: "STRING_VALUE", // required
 * //       recordId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL" || "GATEWAY", // required
 * //       recordVersion: "STRING_VALUE", // required
 * //       status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       descriptorTypes: [ // DescriptorTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoverableRegistryRecordsCommandInput - {@link ListDiscoverableRegistryRecordsCommandInput}
 * @returns {@link ListDiscoverableRegistryRecordsCommandOutput}
 * @see {@link ListDiscoverableRegistryRecordsCommandInput} for command's `input` shape.
 * @see {@link ListDiscoverableRegistryRecordsCommandOutput} for command's `response` shape.
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
export class ListDiscoverableRegistryRecordsCommand extends command<ListDiscoverableRegistryRecordsCommandInput, ListDiscoverableRegistryRecordsCommandOutput>(
  _ep0,
  _mw0,
  "ListDiscoverableRegistryRecords",
  ListDiscoverableRegistryRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoverableRegistryRecordsRequest;
      output: ListDiscoverableRegistryRecordsResponse;
    };
    sdk: {
      input: ListDiscoverableRegistryRecordsCommandInput;
      output: ListDiscoverableRegistryRecordsCommandOutput;
    };
  };
}
