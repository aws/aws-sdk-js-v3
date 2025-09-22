// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetSuiteRunRequest, GetSuiteRunResponse } from "../models/models_0";
import { GetSuiteRun } from "../schemas/schemas_1_Suite";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSuiteRunCommand}.
 */
export interface GetSuiteRunCommandInput extends GetSuiteRunRequest {}
/**
 * @public
 *
 * The output of {@link GetSuiteRunCommand}.
 */
export interface GetSuiteRunCommandOutput extends GetSuiteRunResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Device Advisor test suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // GetSuiteRunRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteRunId: "STRING_VALUE", // required
 * };
 * const command = new GetSuiteRunCommand(input);
 * const response = await client.send(command);
 * // { // GetSuiteRunResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionVersion: "STRING_VALUE",
 * //   suiteRunId: "STRING_VALUE",
 * //   suiteRunArn: "STRING_VALUE",
 * //   suiteRunConfiguration: { // SuiteRunConfiguration
 * //     primaryDevice: { // DeviceUnderTest
 * //       thingArn: "STRING_VALUE",
 * //       certificateArn: "STRING_VALUE",
 * //       deviceRoleArn: "STRING_VALUE",
 * //     },
 * //     selectedTestList: [ // SelectedTestList
 * //       "STRING_VALUE",
 * //     ],
 * //     parallelRun: true || false,
 * //   },
 * //   testResult: { // TestResult
 * //     groups: [ // GroupResultList
 * //       { // GroupResult
 * //         groupId: "STRING_VALUE",
 * //         groupName: "STRING_VALUE",
 * //         tests: [ // TestCaseRuns
 * //           { // TestCaseRun
 * //             testCaseRunId: "STRING_VALUE",
 * //             testCaseDefinitionId: "STRING_VALUE",
 * //             testCaseDefinitionName: "STRING_VALUE",
 * //             status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //             startTime: new Date("TIMESTAMP"),
 * //             endTime: new Date("TIMESTAMP"),
 * //             logUrl: "STRING_VALUE",
 * //             warnings: "STRING_VALUE",
 * //             failure: "STRING_VALUE",
 * //             testScenarios: [ // TestCaseScenariosList
 * //               { // TestCaseScenario
 * //                 testCaseScenarioId: "STRING_VALUE",
 * //                 testCaseScenarioType: "Advanced" || "Basic",
 * //                 status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //                 failure: "STRING_VALUE",
 * //                 systemMessage: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //   errorReason: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSuiteRunCommandInput - {@link GetSuiteRunCommandInput}
 * @returns {@link GetSuiteRunCommandOutput}
 * @see {@link GetSuiteRunCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunCommandOutput} for command's `response` shape.
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
export class GetSuiteRunCommand extends $Command
  .classBuilder<
    GetSuiteRunCommandInput,
    GetSuiteRunCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotSenateService", "GetSuiteRun", {})
  .n("IotDeviceAdvisorClient", "GetSuiteRunCommand")
  .sc(GetSuiteRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSuiteRunRequest;
      output: GetSuiteRunResponse;
    };
    sdk: {
      input: GetSuiteRunCommandInput;
      output: GetSuiteRunCommandOutput;
    };
  };
}
