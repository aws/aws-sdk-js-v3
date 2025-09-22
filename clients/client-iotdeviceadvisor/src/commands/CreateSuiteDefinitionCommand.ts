// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { CreateSuiteDefinitionRequest, CreateSuiteDefinitionResponse } from "../models/models_0";
import { CreateSuiteDefinition } from "../schemas/schemas_1_Suite";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSuiteDefinitionCommand}.
 */
export interface CreateSuiteDefinitionCommandInput extends CreateSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSuiteDefinitionCommand}.
 */
export interface CreateSuiteDefinitionCommandOutput extends CreateSuiteDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, CreateSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // CreateSuiteDefinitionRequest
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSuiteDefinitionResponse
 * //   suiteDefinitionId: "STRING_VALUE",
 * //   suiteDefinitionArn: "STRING_VALUE",
 * //   suiteDefinitionName: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSuiteDefinitionCommandInput - {@link CreateSuiteDefinitionCommandInput}
 * @returns {@link CreateSuiteDefinitionCommandOutput}
 * @see {@link CreateSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSuiteDefinitionCommandOutput} for command's `response` shape.
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
export class CreateSuiteDefinitionCommand extends $Command
  .classBuilder<
    CreateSuiteDefinitionCommandInput,
    CreateSuiteDefinitionCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotSenateService", "CreateSuiteDefinition", {})
  .n("IotDeviceAdvisorClient", "CreateSuiteDefinitionCommand")
  .sc(CreateSuiteDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSuiteDefinitionRequest;
      output: CreateSuiteDefinitionResponse;
    };
    sdk: {
      input: CreateSuiteDefinitionCommandInput;
      output: CreateSuiteDefinitionCommandOutput;
    };
  };
}
