// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartMonitoringScheduleRequest } from "../models/models_4";
import { de_StartMonitoringScheduleCommand, se_StartMonitoringScheduleCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMonitoringScheduleCommand}.
 */
export interface StartMonitoringScheduleCommandInput extends StartMonitoringScheduleRequest {}
/**
 * @public
 *
 * The output of {@link StartMonitoringScheduleCommand}.
 */
export interface StartMonitoringScheduleCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts a previously stopped monitoring schedule.</p>
 *          <note>
 *             <p>By default, when you successfully create a new schedule, the status of a monitoring
 *             schedule is <code>scheduled</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StartMonitoringScheduleRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 * };
 * const command = new StartMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMonitoringScheduleCommandInput - {@link StartMonitoringScheduleCommandInput}
 * @returns {@link StartMonitoringScheduleCommandOutput}
 * @see {@link StartMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class StartMonitoringScheduleCommand extends $Command
  .classBuilder<
    StartMonitoringScheduleCommandInput,
    StartMonitoringScheduleCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "StartMonitoringSchedule", {})
  .n("SageMakerClient", "StartMonitoringScheduleCommand")
  .f(void 0, void 0)
  .ser(se_StartMonitoringScheduleCommand)
  .de(de_StartMonitoringScheduleCommand)
  .build() {}
