// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterThingRequest, RegisterThingResponse } from "../models/models_2";
import { de_RegisterThingCommand, se_RegisterThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterThingCommand}.
 */
export interface RegisterThingCommandInput extends RegisterThingRequest {}
/**
 * @public
 *
 * The output of {@link RegisterThingCommand}.
 */
export interface RegisterThingCommandOutput extends RegisterThingResponse, __MetadataBearer {}

/**
 * <p>Provisions a thing in the device registry. RegisterThing calls other IoT control
 *          plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot">
 *             IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise
 *          your throttling limits if necessary.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RegisterThingRequest
 *   templateBody: "STRING_VALUE", // required
 *   parameters: { // Parameters
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterThingCommand(input);
 * const response = await client.send(command);
 * // { // RegisterThingResponse
 * //   certificatePem: "STRING_VALUE",
 * //   resourceArns: { // ResourceArns
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterThingCommandInput - {@link RegisterThingCommandInput}
 * @returns {@link RegisterThingCommandOutput}
 * @see {@link RegisterThingCommandInput} for command's `input` shape.
 * @see {@link RegisterThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceRegistrationFailureException} (client fault)
 *  <p>The resource registration failed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class RegisterThingCommand extends $Command
  .classBuilder<
    RegisterThingCommandInput,
    RegisterThingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "RegisterThing", {})
  .n("IoTClient", "RegisterThingCommand")
  .f(void 0, void 0)
  .ser(se_RegisterThingCommand)
  .de(de_RegisterThingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterThingRequest;
      output: RegisterThingResponse;
    };
    sdk: {
      input: RegisterThingCommandInput;
      output: RegisterThingCommandOutput;
    };
  };
}
