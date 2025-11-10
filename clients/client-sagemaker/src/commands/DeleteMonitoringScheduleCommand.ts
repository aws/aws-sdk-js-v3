// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMonitoringScheduleRequest } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteMonitoringSchedule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMonitoringScheduleCommand}.
 */
export interface DeleteMonitoringScheduleCommandInput extends DeleteMonitoringScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMonitoringScheduleCommand}.
 */
export interface DeleteMonitoringScheduleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteMonitoringScheduleRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitoringScheduleCommandInput - {@link DeleteMonitoringScheduleCommandInput}
 * @returns {@link DeleteMonitoringScheduleCommandOutput}
 * @see {@link DeleteMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitoringScheduleCommandOutput} for command's `response` shape.
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
export class DeleteMonitoringScheduleCommand extends $Command
  .classBuilder<
    DeleteMonitoringScheduleCommandInput,
    DeleteMonitoringScheduleCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteMonitoringSchedule", {})
  .n("SageMakerClient", "DeleteMonitoringScheduleCommand")
  .sc(DeleteMonitoringSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMonitoringScheduleRequest;
      output: {};
    };
    sdk: {
      input: DeleteMonitoringScheduleCommandInput;
      output: DeleteMonitoringScheduleCommandOutput;
    };
  };
}
