// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetEndpointRequest, GetEndpointResponse } from "../models/models_0";
import { de_GetEndpointCommand, se_GetEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEndpointCommand}.
 */
export interface GetEndpointCommandInput extends GetEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetEndpointCommand}.
 */
export interface GetEndpointCommandOutput extends GetEndpointResponse, __MetadataBearer {}

/**
 * <p>Gets information about an Device Advisor endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetEndpointCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetEndpointCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // GetEndpointRequest
 *   thingArn: "STRING_VALUE",
 *   certificateArn: "STRING_VALUE",
 *   deviceRoleArn: "STRING_VALUE",
 *   authenticationMethod: "X509ClientCertificate" || "SignatureVersion4",
 * };
 * const command = new GetEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointResponse
 * //   endpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEndpointCommandInput - {@link GetEndpointCommandInput}
 * @returns {@link GetEndpointCommandOutput}
 * @see {@link GetEndpointCommandInput} for command's `input` shape.
 * @see {@link GetEndpointCommandOutput} for command's `response` shape.
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
export class GetEndpointCommand extends $Command
  .classBuilder<
    GetEndpointCommandInput,
    GetEndpointCommandOutput,
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
  .s("IotSenateService", "GetEndpoint", {})
  .n("IotDeviceAdvisorClient", "GetEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetEndpointCommand)
  .de(de_GetEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEndpointRequest;
      output: GetEndpointResponse;
    };
    sdk: {
      input: GetEndpointCommandInput;
      output: GetEndpointCommandOutput;
    };
  };
}
