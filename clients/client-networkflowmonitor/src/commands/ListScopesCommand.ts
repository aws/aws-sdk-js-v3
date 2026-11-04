// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScopesInput, ListScopesOutput } from "../models/models_0";
import { ListScopes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScopesCommand}.
 */
export interface ListScopesCommandInput extends ListScopesInput {}
/**
 * @public
 *
 * The output of {@link ListScopesCommand}.
 */
export interface ListScopesCommandOutput extends ListScopesOutput, __MetadataBearer {}

/**
 * List all the scopes for an account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, ListScopesCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, ListScopesCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * // import type { NetworkFlowMonitorClientConfig } from "@aws-sdk/client-networkflowmonitor";
 * const config = {}; // type is NetworkFlowMonitorClientConfig
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // ListScopesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScopesCommand(input);
 * const response = await client.send(command);
 * // { // ListScopesOutput
 * //   scopes: [ // ScopeSummaryList // required
 * //     { // ScopeSummary
 * //       scopeId: "STRING_VALUE", // required
 * //       status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED" || "DEACTIVATING" || "DEACTIVATED", // required
 * //       scopeArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScopesCommandInput - {@link ListScopesCommandInput}
 * @returns {@link ListScopesCommandOutput}
 * @see {@link ListScopesCommandInput} for command's `input` shape.
 * @see {@link ListScopesCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid request.
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 *
 * Base exception class for all service exceptions from NetworkFlowMonitor service.
 *
 * @public
 */
export class ListScopesCommand extends command<ListScopesCommandInput, ListScopesCommandOutput>(
  _ep0,
  _mw0,
  "ListScopes",
  ListScopes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScopesInput;
      output: ListScopesOutput;
    };
    sdk: {
      input: ListScopesCommandInput;
      output: ListScopesCommandOutput;
    };
  };
}
