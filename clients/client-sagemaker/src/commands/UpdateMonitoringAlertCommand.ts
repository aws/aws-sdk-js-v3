// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMonitoringAlertRequest, UpdateMonitoringAlertResponse } from "../models/models_5";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateMonitoringAlert } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitoringAlertCommand}.
 */
export interface UpdateMonitoringAlertCommandInput extends UpdateMonitoringAlertRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMonitoringAlertCommand}.
 */
export interface UpdateMonitoringAlertCommandOutput extends UpdateMonitoringAlertResponse, __MetadataBearer {}

/**
 * <p>Update the parameters of a model monitor alert.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateMonitoringAlertCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateMonitoringAlertCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateMonitoringAlertRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 *   MonitoringAlertName: "STRING_VALUE", // required
 *   DatapointsToAlert: Number("int"), // required
 *   EvaluationPeriod: Number("int"), // required
 * };
 * const command = new UpdateMonitoringAlertCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitoringAlertResponse
 * //   MonitoringScheduleArn: "STRING_VALUE", // required
 * //   MonitoringAlertName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMonitoringAlertCommandInput - {@link UpdateMonitoringAlertCommandInput}
 * @returns {@link UpdateMonitoringAlertCommandOutput}
 * @see {@link UpdateMonitoringAlertCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringAlertCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class UpdateMonitoringAlertCommand extends $Command
  .classBuilder<
    UpdateMonitoringAlertCommandInput,
    UpdateMonitoringAlertCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "UpdateMonitoringAlert", {})
  .n("SageMakerClient", "UpdateMonitoringAlertCommand")
  .sc(UpdateMonitoringAlert)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitoringAlertRequest;
      output: UpdateMonitoringAlertResponse;
    };
    sdk: {
      input: UpdateMonitoringAlertCommandInput;
      output: UpdateMonitoringAlertCommandOutput;
    };
  };
}
