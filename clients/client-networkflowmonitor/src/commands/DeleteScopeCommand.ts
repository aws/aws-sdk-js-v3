// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScopeInput, DeleteScopeOutput } from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import { de_DeleteScopeCommand, se_DeleteScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScopeCommand}.
 */
export interface DeleteScopeCommandInput extends DeleteScopeInput {}
/**
 * @public
 *
 * The output of {@link DeleteScopeCommand}.
 */
export interface DeleteScopeCommandOutput extends DeleteScopeOutput, __MetadataBearer {}

/**
 * <p>Deletes a scope that has been defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, DeleteScopeCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, DeleteScopeCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // DeleteScopeInput
 *   scopeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScopeCommandInput - {@link DeleteScopeCommandInput}
 * @returns {@link DeleteScopeCommandOutput}
 * @see {@link DeleteScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteScopeCommandOutput} for command's `response` shape.
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
export class DeleteScopeCommand extends $Command
  .classBuilder<
    DeleteScopeCommandInput,
    DeleteScopeCommandOutput,
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
  .s("NetworkFlowMonitor", "DeleteScope", {})
  .n("NetworkFlowMonitorClient", "DeleteScopeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteScopeCommand)
  .de(de_DeleteScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScopeInput;
      output: {};
    };
    sdk: {
      input: DeleteScopeCommandInput;
      output: DeleteScopeCommandOutput;
    };
  };
}
