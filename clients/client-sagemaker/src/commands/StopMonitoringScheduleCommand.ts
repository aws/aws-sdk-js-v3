// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopMonitoringScheduleRequest } from "../models/models_4";
import { de_StopMonitoringScheduleCommand, se_StopMonitoringScheduleCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMonitoringScheduleCommand}.
 */
export interface StopMonitoringScheduleCommandInput extends StopMonitoringScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StopMonitoringScheduleCommand}.
 */
export interface StopMonitoringScheduleCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a previously started monitoring schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopMonitoringScheduleRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 * };
 * const command = new StopMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopMonitoringScheduleCommandInput - {@link StopMonitoringScheduleCommandInput}
 * @returns {@link StopMonitoringScheduleCommandOutput}
 * @see {@link StopMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StopMonitoringScheduleCommand extends $Command
  .classBuilder<
    StopMonitoringScheduleCommandInput,
    StopMonitoringScheduleCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "StopMonitoringSchedule", {})
  .n("SageMakerClient", "StopMonitoringScheduleCommand")
  .f(void 0, void 0)
  .ser(se_StopMonitoringScheduleCommand)
  .de(de_StopMonitoringScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMonitoringScheduleRequest;
      output: {};
    };
    sdk: {
      input: StopMonitoringScheduleCommandInput;
      output: StopMonitoringScheduleCommandOutput;
    };
  };
}
