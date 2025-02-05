// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_2";
import { de_TestInvokeAuthorizerCommand, se_TestInvokeAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestInvokeAuthorizerCommand}.
 */
export interface TestInvokeAuthorizerCommandInput extends TestInvokeAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link TestInvokeAuthorizerCommand}.
 */
export interface TestInvokeAuthorizerCommandOutput extends TestInvokeAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 *          this to test and debug the custom authorization behavior of devices that connect to the IoT
 *          device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // TestInvokeAuthorizerRequest
 *   authorizerName: "STRING_VALUE", // required
 *   token: "STRING_VALUE",
 *   tokenSignature: "STRING_VALUE",
 *   httpContext: { // HttpContext
 *     headers: { // HttpHeaders
 *       "<keys>": "STRING_VALUE",
 *     },
 *     queryString: "STRING_VALUE",
 *   },
 *   mqttContext: { // MqttContext
 *     username: "STRING_VALUE",
 *     password: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     clientId: "STRING_VALUE",
 *   },
 *   tlsContext: { // TlsContext
 *     serverName: "STRING_VALUE",
 *   },
 * };
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // TestInvokeAuthorizerResponse
 * //   isAuthenticated: true || false,
 * //   principalId: "STRING_VALUE",
 * //   policyDocuments: [ // PolicyDocuments
 * //     "STRING_VALUE",
 * //   ],
 * //   refreshAfterInSeconds: Number("int"),
 * //   disconnectAfterInSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param TestInvokeAuthorizerCommandInput - {@link TestInvokeAuthorizerCommandInput}
 * @returns {@link TestInvokeAuthorizerCommandOutput}
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link InvalidResponseException} (client fault)
 *  <p>The response is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
 * @public
 */
export class TestInvokeAuthorizerCommand extends $Command
  .classBuilder<
    TestInvokeAuthorizerCommandInput,
    TestInvokeAuthorizerCommandOutput,
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
  .s("AWSIotService", "TestInvokeAuthorizer", {})
  .n("IoTClient", "TestInvokeAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_TestInvokeAuthorizerCommand)
  .de(de_TestInvokeAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestInvokeAuthorizerRequest;
      output: TestInvokeAuthorizerResponse;
    };
    sdk: {
      input: TestInvokeAuthorizerCommandInput;
      output: TestInvokeAuthorizerCommandOutput;
    };
  };
}
