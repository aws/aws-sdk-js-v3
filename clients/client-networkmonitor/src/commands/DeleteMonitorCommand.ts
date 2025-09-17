// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMonitorInput, DeleteMonitorOutput } from "../models/models_0";
import { NetworkMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkMonitorClient";
import { de_DeleteMonitorCommand, se_DeleteMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandInput extends DeleteMonitorInput {}
/**
 * @public
 *
 * The output of {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandOutput extends DeleteMonitorOutput, __MetadataBearer {}

/**
 * <p>Deletes a specified monitor.</p>
 *          <p>This action requires the <code>monitorName</code> parameter. Run
 *                 <code>ListMonitors</code> to get a list of monitor names. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkMonitorClient, DeleteMonitorCommand } from "@aws-sdk/client-networkmonitor"; // ES Modules import
 * // const { NetworkMonitorClient, DeleteMonitorCommand } = require("@aws-sdk/client-networkmonitor"); // CommonJS import
 * // import type { NetworkMonitorClientConfig } from "@aws-sdk/client-networkmonitor";
 * const config = {}; // type is NetworkMonitorClientConfig
 * const client = new NetworkMonitorClient(config);
 * const input = { // DeleteMonitorInput
 *   monitorName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitorCommandInput - {@link DeleteMonitorCommandInput}
 * @returns {@link DeleteMonitorCommandOutput}
 * @see {@link DeleteMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitorCommandOutput} for command's `response` shape.
 * @see {@link NetworkMonitorClientResolvedConfig | config} for NetworkMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link NetworkMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkMonitor service.</p>
 *
 *
 * @public
 */
export class DeleteMonitorCommand extends $Command
  .classBuilder<
    DeleteMonitorCommandInput,
    DeleteMonitorCommandOutput,
    NetworkMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkMonitor", "DeleteMonitor", {})
  .n("NetworkMonitorClient", "DeleteMonitorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMonitorCommand)
  .de(de_DeleteMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMonitorInput;
      output: {};
    };
    sdk: {
      input: DeleteMonitorCommandInput;
      output: DeleteMonitorCommandOutput;
    };
  };
}
