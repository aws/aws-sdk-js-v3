// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { StopSuiteRunRequest, StopSuiteRunResponse } from "../models/models_0";
import { StopSuiteRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSuiteRunCommand}.
 */
export interface StopSuiteRunCommandInput extends StopSuiteRunRequest {}
/**
 * @public
 *
 * The output of {@link StopSuiteRunCommand}.
 */
export interface StopSuiteRunCommandOutput extends StopSuiteRunResponse, __MetadataBearer {}

/**
 * <p>Stops a Device Advisor test suite run that is currently running.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, StopSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, StopSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // StopSuiteRunRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteRunId: "STRING_VALUE", // required
 * };
 * const command = new StopSuiteRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopSuiteRunCommandInput - {@link StopSuiteRunCommandInput}
 * @returns {@link StopSuiteRunCommandOutput}
 * @see {@link StopSuiteRunCommandInput} for command's `input` shape.
 * @see {@link StopSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Sends an Internal Failure exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Sends a Resource Not Found exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Sends a validation exception.</p>
 *
 * @throws {@link IotDeviceAdvisorServiceException}
 * <p>Base exception class for all service exceptions from IotDeviceAdvisor service.</p>
 *
 *
 * @public
 */
export class StopSuiteRunCommand extends $Command
  .classBuilder<
    StopSuiteRunCommandInput,
    StopSuiteRunCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotSenateService", "StopSuiteRun", {})
  .n("IotDeviceAdvisorClient", "StopSuiteRunCommand")
  .sc(StopSuiteRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSuiteRunRequest;
      output: {};
    };
    sdk: {
      input: StopSuiteRunCommandInput;
      output: StopSuiteRunCommandOutput;
    };
  };
}
