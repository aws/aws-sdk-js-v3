// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopCalculationExecutionRequest, StopCalculationExecutionResponse } from "../models/models_0";
import { de_StopCalculationExecutionCommand, se_StopCalculationExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCalculationExecutionCommand}.
 */
export interface StopCalculationExecutionCommandInput extends StopCalculationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopCalculationExecutionCommand}.
 */
export interface StopCalculationExecutionCommandOutput extends StopCalculationExecutionResponse, __MetadataBearer {}

/**
 * <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code>
 *             call on a calculation that is already in a terminal state (for example,
 *                 <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but
 *             has no effect.</p>
 *          <note>
 *             <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot
 *                 be cancelled, you can be charged for its completion. If you are concerned about
 *                 being charged for a calculation that cannot be cancelled, consider terminating the
 *                 session in which the calculation is running.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StopCalculationExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StopCalculationExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AthenaClient(config);
 * const input = { // StopCalculationExecutionRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new StopCalculationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StopCalculationExecutionResponse
 * //   State: "CREATING" || "CREATED" || "QUEUED" || "RUNNING" || "CANCELING" || "CANCELED" || "COMPLETED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param StopCalculationExecutionCommandInput - {@link StopCalculationExecutionCommandInput}
 * @returns {@link StopCalculationExecutionCommandOutput}
 * @see {@link StopCalculationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopCalculationExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 * @public
 */
export class StopCalculationExecutionCommand extends $Command
  .classBuilder<
    StopCalculationExecutionCommandInput,
    StopCalculationExecutionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "StopCalculationExecution", {})
  .n("AthenaClient", "StopCalculationExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StopCalculationExecutionCommand)
  .de(de_StopCalculationExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCalculationExecutionRequest;
      output: StopCalculationExecutionResponse;
    };
    sdk: {
      input: StopCalculationExecutionCommandInput;
      output: StopCalculationExecutionCommandOutput;
    };
  };
}
