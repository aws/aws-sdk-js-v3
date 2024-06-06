// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { ListSuiteDefinitionsRequest, ListSuiteDefinitionsResponse } from "../models/models_0";
import { de_ListSuiteDefinitionsCommand, se_ListSuiteDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSuiteDefinitionsCommand}.
 */
export interface ListSuiteDefinitionsCommandInput extends ListSuiteDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSuiteDefinitionsCommand}.
 */
export interface ListSuiteDefinitionsCommandOutput extends ListSuiteDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists the Device Advisor test suites you have created.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteDefinitionsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // ListSuiteDefinitionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSuiteDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSuiteDefinitionsResponse
 * //   suiteDefinitionInformationList: [ // SuiteDefinitionInformationList
 * //     { // SuiteDefinitionInformation
 * //       suiteDefinitionId: "STRING_VALUE",
 * //       suiteDefinitionName: "STRING_VALUE",
 * //       defaultDevices: [ // DeviceUnderTestList
 * //         { // DeviceUnderTest
 * //           thingArn: "STRING_VALUE",
 * //           certificateArn: "STRING_VALUE",
 * //           deviceRoleArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       intendedForQualification: true || false,
 * //       isLongDurationTest: true || false,
 * //       protocol: "MqttV3_1_1" || "MqttV5" || "MqttV3_1_1_OverWebSocket" || "MqttV5_OverWebSocket",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSuiteDefinitionsCommandInput - {@link ListSuiteDefinitionsCommandInput}
 * @returns {@link ListSuiteDefinitionsCommandOutput}
 * @see {@link ListSuiteDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteDefinitionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListSuiteDefinitionsCommand extends $Command
  .classBuilder<
    ListSuiteDefinitionsCommandInput,
    ListSuiteDefinitionsCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotSenateService", "ListSuiteDefinitions", {})
  .n("IotDeviceAdvisorClient", "ListSuiteDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSuiteDefinitionsCommand)
  .de(de_ListSuiteDefinitionsCommand)
  .build() {}
