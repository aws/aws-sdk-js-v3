// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelFlowExecutionsRequest, CancelFlowExecutionsResponse } from "../models/models_0";
import { de_CancelFlowExecutionsCommand, se_CancelFlowExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelFlowExecutionsCommand}.
 */
export interface CancelFlowExecutionsCommandInput extends CancelFlowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link CancelFlowExecutionsCommand}.
 */
export interface CancelFlowExecutionsCommandOutput extends CancelFlowExecutionsResponse, __MetadataBearer {}

/**
 * <p>Cancels active runs for a flow.</p>
 *          <p>You can cancel all of the active runs for a flow, or you can cancel specific runs by
 *       providing their IDs.</p>
 *          <p>You can cancel a flow run only when the run is in progress. You can't cancel a run that
 *       has already completed or failed. You also can't cancel a run that's scheduled to occur but
 *       hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the
 *         <code>StopFlow</code> action.</p>
 *          <p>You cannot resume a run after you cancel it.</p>
 *          <p>When you send your request, the status for each run becomes <code>CancelStarted</code>.
 *       When the cancellation completes, the status becomes <code>Canceled</code>.</p>
 *          <note>
 *             <p>When you cancel a run, you still incur charges for any data that the run already
 *         processed before the cancellation. If the run had already written some data to the flow
 *         destination, then that data remains in the destination. If you configured the flow to use a
 *         batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing
 *         its entire batch of data after the cancellation. For these operations, the data processing
 *         charges for Amazon AppFlow apply. For the pricing information, see <a href="http://aws.amazon.com/appflow/pricing/">Amazon AppFlow pricing</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, CancelFlowExecutionsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, CancelFlowExecutionsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // CancelFlowExecutionsRequest
 *   flowName: "STRING_VALUE", // required
 *   executionIds: [ // ExecutionIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // CancelFlowExecutionsResponse
 * //   invalidExecutions: [ // ExecutionIds
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelFlowExecutionsCommandInput - {@link CancelFlowExecutionsCommandInput}
 * @returns {@link CancelFlowExecutionsCommandOutput}
 * @see {@link CancelFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link CancelFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>AppFlow/Requester has invalid or missing permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
 *
 *
 * @public
 */
export class CancelFlowExecutionsCommand extends $Command
  .classBuilder<
    CancelFlowExecutionsCommandInput,
    CancelFlowExecutionsCommandOutput,
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
  .s("SandstoneConfigurationServiceLambda", "CancelFlowExecutions", {})
  .n("AppflowClient", "CancelFlowExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_CancelFlowExecutionsCommand)
  .de(de_CancelFlowExecutionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelFlowExecutionsRequest;
      output: CancelFlowExecutionsResponse;
    };
    sdk: {
      input: CancelFlowExecutionsCommandInput;
      output: CancelFlowExecutionsCommandOutput;
    };
  };
}
