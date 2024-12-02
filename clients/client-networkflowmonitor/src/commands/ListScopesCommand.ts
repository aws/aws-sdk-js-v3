// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListScopesInput, ListScopesOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { de_ListScopesCommand, se_ListScopesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List all the scopes for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, ListScopesCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, ListScopesCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
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
 * //       status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED", // required
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
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
 * @public
 */
export class ListScopesCommand extends $Command
  .classBuilder<
    ListScopesCommandInput,
    ListScopesCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "ListScopes", {})
  .n("NetworkFlowMonitorClient", "ListScopesCommand")
  .f(void 0, void 0)
  .ser(se_ListScopesCommand)
  .de(de_ListScopesCommand)
  .build() {
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
