// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUpdatesRequest, ListUpdatesResponse } from "../models/models_0";
import { ListUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUpdatesCommand}.
 */
export interface ListUpdatesCommandInput extends ListUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListUpdatesCommand}.
 */
export interface ListUpdatesCommandOutput extends ListUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists the updates on a gateway. Results are paginated. Use <code>nextToken</code> to get the next page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, ListUpdatesCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, ListUpdatesCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // ListUpdatesRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE",
 *   ruleId: "STRING_VALUE",
 *   type: "GATEWAY_CONFIG_UPDATE" || "LINK_CONFIG_UPDATE" || "LINK_FLOW_UPDATE" || "ROUTING_RULE_UPDATE",
 *   status: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListUpdatesResponse
 * //   updates: [ // UpdateSummaryList // required
 * //     { // UpdateSummary
 * //       updateId: "STRING_VALUE", // required
 * //       type: "GATEWAY_CONFIG_UPDATE" || "LINK_CONFIG_UPDATE" || "LINK_FLOW_UPDATE" || "ROUTING_RULE_UPDATE", // required
 * //       status: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUpdatesCommandInput - {@link ListUpdatesCommandInput}
 * @returns {@link ListUpdatesCommandOutput}
 * @see {@link ListUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListUpdatesCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example List a link's updates
 * ```javascript
 * // List the updates that targeted one link on a responder gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   maxResults: 10
 * };
 * const command = new ListUpdatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   updates: [
 *     {
 *       createdAt: "2026-10-01T12:00:00Z",
 *       status: "FAILED",
 *       type: "LINK_CONFIG_UPDATE",
 *       updateId: "update-1a2b3c4d5e6f"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListUpdatesCommand extends command<ListUpdatesCommandInput, ListUpdatesCommandOutput>(
  _ep0,
  _mw0,
  "ListUpdates",
  ListUpdates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUpdatesRequest;
      output: ListUpdatesResponse;
    };
    sdk: {
      input: ListUpdatesCommandInput;
      output: ListUpdatesCommandOutput;
    };
  };
}
