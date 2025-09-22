// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetSuiteDefinitionRequest, GetSuiteDefinitionResponse } from "../models/models_0";
import { GetSuiteDefinition } from "../schemas/schemas_1_Suite";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSuiteDefinitionCommand}.
 */
export interface GetSuiteDefinitionCommandInput extends GetSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetSuiteDefinitionCommand}.
 */
export interface GetSuiteDefinitionCommandOutput extends GetSuiteDefinitionResponse, __MetadataBearer {}

/**
 * <p>Gets information about a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // GetSuiteDefinitionRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteDefinitionVersion: "STRING_VALUE",
 * };
 * const command = new GetSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetSuiteDefinitionResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionArn: "STRING_VALUE",
 * //   suiteDefinitionVersion: "STRING_VALUE",
 * //   latestVersion: "STRING_VALUE",
 * //   suiteDefinitionConfiguration: { // SuiteDefinitionConfiguration
 * //     suiteDefinitionName: "STRING_VALUE", // required
 * //     devices: [ // DeviceUnderTestList
 * //       { // DeviceUnderTest
 * //         thingArn: "STRING_VALUE",
 * //         certificateArn: "STRING_VALUE",
 * //         deviceRoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     intendedForQualification: true || false,
 * //     isLongDurationTest: true || false,
 * //     rootGroup: "STRING_VALUE", // required
 * //     devicePermissionRoleArn: "STRING_VALUE", // required
 * //     protocol: "MqttV3_1_1" || "MqttV5" || "MqttV3_1_1_OverWebSocket" || "MqttV5_OverWebSocket",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastModifiedAt: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSuiteDefinitionCommandInput - {@link GetSuiteDefinitionCommandInput}
 * @returns {@link GetSuiteDefinitionCommandOutput}
 * @see {@link GetSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSuiteDefinitionCommandOutput} for command's `response` shape.
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
export class GetSuiteDefinitionCommand extends $Command
  .classBuilder<
    GetSuiteDefinitionCommandInput,
    GetSuiteDefinitionCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotSenateService", "GetSuiteDefinition", {})
  .n("IotDeviceAdvisorClient", "GetSuiteDefinitionCommand")
  .sc(GetSuiteDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSuiteDefinitionRequest;
      output: GetSuiteDefinitionResponse;
    };
    sdk: {
      input: GetSuiteDefinitionCommandInput;
      output: GetSuiteDefinitionCommandOutput;
    };
  };
}
