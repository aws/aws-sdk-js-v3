// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TestInvokeAuthorizerRequest, TestInvokeAuthorizerResponse } from "../models/models_0";
import { TestInvokeAuthorizer$ } from "../schemas/schemas_0";

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
 * <p>Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // TestInvokeAuthorizerRequest
 *   restApiId: "STRING_VALUE", // required
 *   authorizerId: "STRING_VALUE", // required
 *   headers: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   multiValueHeaders: { // MapOfStringToList
 *     "<keys>": [ // ListOfString
 *       "STRING_VALUE",
 *     ],
 *   },
 *   pathWithQueryString: "STRING_VALUE",
 *   body: "STRING_VALUE",
 *   stageVariables: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   additionalContext: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // TestInvokeAuthorizerResponse
 * //   clientStatus: Number("int"),
 * //   log: "STRING_VALUE",
 * //   latency: Number("long"),
 * //   principalId: "STRING_VALUE",
 * //   policy: "STRING_VALUE",
 * //   authorization: { // MapOfStringToList
 * //     "<keys>": [ // ListOfString
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   claims: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestInvokeAuthorizerCommandInput - {@link TestInvokeAuthorizerCommandInput}
 * @returns {@link TestInvokeAuthorizerCommandOutput}
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class TestInvokeAuthorizerCommand extends $Command
  .classBuilder<
    TestInvokeAuthorizerCommandInput,
    TestInvokeAuthorizerCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "TestInvokeAuthorizer", {})
  .n("APIGatewayClient", "TestInvokeAuthorizerCommand")
  .sc(TestInvokeAuthorizer$)
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
