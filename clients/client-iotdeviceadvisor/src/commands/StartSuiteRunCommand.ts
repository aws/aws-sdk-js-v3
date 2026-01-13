// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IotDeviceAdvisorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IotDeviceAdvisorClient";
import type { StartSuiteRunRequest, StartSuiteRunResponse } from "../models/models_0";
import { StartSuiteRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSuiteRunCommand}.
 */
export interface StartSuiteRunCommandInput extends StartSuiteRunRequest {}
/**
 * @public
 *
 * The output of {@link StartSuiteRunCommand}.
 */
export interface StartSuiteRunCommandOutput extends StartSuiteRunResponse, __MetadataBearer {}

/**
 * <p>Starts a Device Advisor test suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, StartSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, StartSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // StartSuiteRunRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteDefinitionVersion: "STRING_VALUE",
 *   suiteRunConfiguration: { // SuiteRunConfiguration
 *     primaryDevice: { // DeviceUnderTest
 *       thingArn: "STRING_VALUE",
 *       certificateArn: "STRING_VALUE",
 *       deviceRoleArn: "STRING_VALUE",
 *     },
 *     selectedTestList: [ // SelectedTestList
 *       "STRING_VALUE",
 *     ],
 *     parallelRun: true || false,
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartSuiteRunCommand(input);
 * const response = await client.send(command);
 * // { // StartSuiteRunResponse
 * //   suiteRunId: "STRING_VALUE",
 * //   suiteRunArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   endpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSuiteRunCommandInput - {@link StartSuiteRunCommandInput}
 * @returns {@link StartSuiteRunCommandOutput}
 * @see {@link StartSuiteRunCommandInput} for command's `input` shape.
 * @see {@link StartSuiteRunCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Sends a Conflict Exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Sends an Internal Failure exception.</p>
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
export class StartSuiteRunCommand extends $Command
  .classBuilder<
    StartSuiteRunCommandInput,
    StartSuiteRunCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotSenateService", "StartSuiteRun", {})
  .n("IotDeviceAdvisorClient", "StartSuiteRunCommand")
  .sc(StartSuiteRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSuiteRunRequest;
      output: StartSuiteRunResponse;
    };
    sdk: {
      input: StartSuiteRunCommandInput;
      output: StartSuiteRunCommandOutput;
    };
  };
}
