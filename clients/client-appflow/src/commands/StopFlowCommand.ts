// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopFlowRequest, StopFlowResponse } from "../models/models_0";
import { de_StopFlowCommand, se_StopFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopFlowCommand}.
 */
export interface StopFlowCommandInput extends StopFlowRequest {}
/**
 * @public
 *
 * The output of {@link StopFlowCommand}.
 */
export interface StopFlowCommandOutput extends StopFlowResponse, __MetadataBearer {}

/**
 * <p> Deactivates the existing flow. For on-demand flows, this operation returns an
 *         <code>unsupportedOperationException</code> error message. For schedule and event-triggered
 *       flows, this operation deactivates the flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, StopFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, StopFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // StopFlowRequest
 *   flowName: "STRING_VALUE", // required
 * };
 * const command = new StopFlowCommand(input);
 * const response = await client.send(command);
 * // { // StopFlowResponse
 * //   flowArn: "STRING_VALUE",
 * //   flowStatus: "Active" || "Deprecated" || "Deleted" || "Draft" || "Errored" || "Suspended",
 * // };
 *
 * ```
 *
 * @param StopFlowCommandInput - {@link StopFlowCommandInput}
 * @returns {@link StopFlowCommandOutput}
 * @see {@link StopFlowCommandInput} for command's `input` shape.
 * @see {@link StopFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p> The requested operation is not supported for the current flow. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 *
 * @public
 */
export class StopFlowCommand extends $Command
  .classBuilder<
    StopFlowCommandInput,
    StopFlowCommandOutput,
    AppflowClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppflowClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SandstoneConfigurationServiceLambda", "StopFlow", {})
  .n("AppflowClient", "StopFlowCommand")
  .f(void 0, void 0)
  .ser(se_StopFlowCommand)
  .de(de_StopFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopFlowRequest;
      output: StopFlowResponse;
    };
    sdk: {
      input: StopFlowCommandInput;
      output: StopFlowCommandOutput;
    };
  };
}
