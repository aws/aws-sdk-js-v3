// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { DeleteSuiteDefinitionRequest, DeleteSuiteDefinitionResponse } from "../models/models_0";
import { de_DeleteSuiteDefinitionCommand, se_DeleteSuiteDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSuiteDefinitionCommand}.
 */
export interface DeleteSuiteDefinitionCommandInput extends DeleteSuiteDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSuiteDefinitionCommand}.
 */
export interface DeleteSuiteDefinitionCommandOutput extends DeleteSuiteDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deletes a Device Advisor test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, DeleteSuiteDefinitionCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, DeleteSuiteDefinitionCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // DeleteSuiteDefinitionRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSuiteDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSuiteDefinitionCommandInput - {@link DeleteSuiteDefinitionCommandInput}
 * @returns {@link DeleteSuiteDefinitionCommandOutput}
 * @see {@link DeleteSuiteDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteSuiteDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteSuiteDefinitionCommand extends $Command
  .classBuilder<
    DeleteSuiteDefinitionCommandInput,
    DeleteSuiteDefinitionCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotSenateService", "DeleteSuiteDefinition", {})
  .n("IotDeviceAdvisorClient", "DeleteSuiteDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSuiteDefinitionCommand)
  .de(de_DeleteSuiteDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSuiteDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSuiteDefinitionCommandInput;
      output: DeleteSuiteDefinitionCommandOutput;
    };
  };
}
