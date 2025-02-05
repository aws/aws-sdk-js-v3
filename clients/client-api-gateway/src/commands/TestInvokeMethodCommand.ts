// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestInvokeMethodRequest, TestInvokeMethodResponse } from "../models/models_0";
import { de_TestInvokeMethodCommand, se_TestInvokeMethodCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestInvokeMethodCommand}.
 */
export interface TestInvokeMethodCommandInput extends TestInvokeMethodRequest {}
/**
 * @public
 *
 * The output of {@link TestInvokeMethodCommand}.
 */
export interface TestInvokeMethodCommandOutput extends TestInvokeMethodResponse, __MetadataBearer {}

/**
 * <p>Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, TestInvokeMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, TestInvokeMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // TestInvokeMethodRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 *   pathWithQueryString: "STRING_VALUE",
 *   body: "STRING_VALUE",
 *   headers: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   multiValueHeaders: { // MapOfStringToList
 *     "<keys>": [ // ListOfString
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientCertificateId: "STRING_VALUE",
 *   stageVariables: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TestInvokeMethodCommand(input);
 * const response = await client.send(command);
 * // { // TestInvokeMethodResponse
 * //   status: Number("int"),
 * //   body: "STRING_VALUE",
 * //   headers: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   multiValueHeaders: { // MapOfStringToList
 * //     "<keys>": [ // ListOfString
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   log: "STRING_VALUE",
 * //   latency: Number("long"),
 * // };
 *
 * ```
 *
 * @param TestInvokeMethodCommandInput - {@link TestInvokeMethodCommandInput}
 * @returns {@link TestInvokeMethodCommandOutput}
 * @see {@link TestInvokeMethodCommandInput} for command's `input` shape.
 * @see {@link TestInvokeMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 * @public
 */
export class TestInvokeMethodCommand extends $Command
  .classBuilder<
    TestInvokeMethodCommandInput,
    TestInvokeMethodCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "TestInvokeMethod", {})
  .n("APIGatewayClient", "TestInvokeMethodCommand")
  .f(void 0, void 0)
  .ser(se_TestInvokeMethodCommand)
  .de(de_TestInvokeMethodCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestInvokeMethodRequest;
      output: TestInvokeMethodResponse;
    };
    sdk: {
      input: TestInvokeMethodCommandInput;
      output: TestInvokeMethodCommandOutput;
    };
  };
}
