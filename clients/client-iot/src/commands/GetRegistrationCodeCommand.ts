// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetRegistrationCodeRequest, GetRegistrationCodeResponse } from "../models/models_1";
import { GetRegistrationCode } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegistrationCodeCommand}.
 */
export interface GetRegistrationCodeCommandInput extends GetRegistrationCodeRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistrationCodeCommand}.
 */
export interface GetRegistrationCodeCommandOutput extends GetRegistrationCodeResponse, __MetadataBearer {}

/**
 * <p>Gets a registration code used to register a CA certificate with IoT.</p>
 *          <p>IoT will create a registration code as part of this API call if the registration
 *          code doesn't exist or has been deleted. If you already have a registration code, this API
 *          call will return the same registration code.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetRegistrationCodeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetRegistrationCodeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new GetRegistrationCodeCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistrationCodeResponse
 * //   registrationCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegistrationCodeCommandInput - {@link GetRegistrationCodeCommandInput}
 * @returns {@link GetRegistrationCodeCommandOutput}
 * @see {@link GetRegistrationCodeCommandInput} for command's `input` shape.
 * @see {@link GetRegistrationCodeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class GetRegistrationCodeCommand extends $Command
  .classBuilder<
    GetRegistrationCodeCommandInput,
    GetRegistrationCodeCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetRegistrationCode", {})
  .n("IoTClient", "GetRegistrationCodeCommand")
  .sc(GetRegistrationCode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetRegistrationCodeResponse;
    };
    sdk: {
      input: GetRegistrationCodeCommandInput;
      output: GetRegistrationCodeCommandOutput;
    };
  };
}
