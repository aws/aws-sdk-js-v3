// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { UpdateSuiteDefinitionRequest, UpdateSuiteDefinitionResponse } from "../models/models_0";
import { UpdateSuiteDefinition } from "../schemas/schemas_1_Suite";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSuiteDefinitionCommand}.
 */
export interface UpdateSuiteDefinitionCommandInput extends UpdateSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSuiteDefinitionCommand}.
 */
export interface UpdateSuiteDefinitionCommandOutput extends UpdateSuiteDefinitionResponse, __MetadataBearer {}

/**
 * <p>Updates a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, UpdateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, UpdateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // UpdateSuiteDefinitionRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteDefinitionConfiguration: { // SuiteDefinitionConfiguration
 *     suiteDefinitionName: "STRING_VALUE", // required
 *     devices: [ // DeviceUnderTestList
 *       { // DeviceUnderTest
 *         thingArn: "STRING_VALUE",
 *         certificateArn: "STRING_VALUE",
 *         deviceRoleArn: "STRING_VALUE",
 *       },
 *     ],
 *     intendedForQualification: true || false,
 *     isLongDurationTest: true || false,
 *     rootGroup: "STRING_VALUE", // required
 *     devicePermissionRoleArn: "STRING_VALUE", // required
 *     protocol: "MqttV3_1_1" || "MqttV5" || "MqttV3_1_1_OverWebSocket" || "MqttV5_OverWebSocket",
 *   },
 * };
 * const command = new UpdateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSuiteDefinitionResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionArn: "STRING_VALUE",
 * //   suiteDefinitionName: "STRING_VALUE",
 * //   suiteDefinitionVersion: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateSuiteDefinitionCommandInput - {@link UpdateSuiteDefinitionCommandInput}
 * @returns {@link UpdateSuiteDefinitionCommandOutput}
 * @see {@link UpdateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateSuiteDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
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
export class UpdateSuiteDefinitionCommand extends $Command
  .classBuilder<
    UpdateSuiteDefinitionCommandInput,
    UpdateSuiteDefinitionCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotSenateService", "UpdateSuiteDefinition", {})
  .n("IotDeviceAdvisorClient", "UpdateSuiteDefinitionCommand")
  .sc(UpdateSuiteDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSuiteDefinitionRequest;
      output: UpdateSuiteDefinitionResponse;
    };
    sdk: {
      input: UpdateSuiteDefinitionCommandInput;
      output: UpdateSuiteDefinitionCommandOutput;
    };
  };
}
