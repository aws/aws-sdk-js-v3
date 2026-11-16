// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMonitorScopeSuggestionsInput, GetMonitorScopeSuggestionsOutput } from "../models/models_0";
import { GetMonitorScopeSuggestions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMonitorScopeSuggestionsCommand}.
 */
export interface GetMonitorScopeSuggestionsCommandInput extends GetMonitorScopeSuggestionsInput {}
/**
 * @public
 *
 * The output of {@link GetMonitorScopeSuggestionsCommand}.
 */
export interface GetMonitorScopeSuggestionsCommandOutput extends GetMonitorScopeSuggestionsOutput, __MetadataBearer {}

/**
 * <p>Returns the accounts that are sending traffic to, or receiving traffic from, resources in a monitor, but that aren't included in the monitoring scope for the monitor. By adding the suggested accounts to your scope, you enable Network Flow Monitor to resolve the network paths for that traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, GetMonitorScopeSuggestionsCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, GetMonitorScopeSuggestionsCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // GetMonitorScopeSuggestionsInput
 *   monitorArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetMonitorScopeSuggestionsCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitorScopeSuggestionsOutput
 * //   status: "COMPLETE" || "INCOMPLETE" || "PENDING" || "STALE", // required
 * //   accountsToAdd: [ // AccountToAddList // required
 * //     { // AccountToAdd
 * //       accountId: "STRING_VALUE", // required
 * //       region: "STRING_VALUE", // required
 * //       membership: "IN_ORG" || "NOT_IN_ORG" || "UNKNOWN", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMonitorScopeSuggestionsCommandInput - {@link GetMonitorScopeSuggestionsCommandInput}
 * @returns {@link GetMonitorScopeSuggestionsCommandOutput}
 * @see {@link GetMonitorScopeSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetMonitorScopeSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 *
 * @public
 */
export class GetMonitorScopeSuggestionsCommand extends command<GetMonitorScopeSuggestionsCommandInput, GetMonitorScopeSuggestionsCommandOutput>(
  _ep0,
  _mw0,
  "GetMonitorScopeSuggestions",
  GetMonitorScopeSuggestions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMonitorScopeSuggestionsInput;
      output: GetMonitorScopeSuggestionsOutput;
    };
    sdk: {
      input: GetMonitorScopeSuggestionsCommandInput;
      output: GetMonitorScopeSuggestionsCommandOutput;
    };
  };
}
