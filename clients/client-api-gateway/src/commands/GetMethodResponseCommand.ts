// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMethodResponseRequest, MethodResponse } from "../models/models_0";
import { de_GetMethodResponseCommand, se_GetMethodResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMethodResponseCommand}.
 */
export interface GetMethodResponseCommandInput extends GetMethodResponseRequest {}
/**
 * @public
 *
 * The output of {@link GetMethodResponseCommand}.
 */
export interface GetMethodResponseCommandOutput extends MethodResponse, __MetadataBearer {}

/**
 * <p>Describes a MethodResponse resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // GetMethodResponseRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 *   statusCode: "STRING_VALUE", // required
 * };
 * const command = new GetMethodResponseCommand(input);
 * const response = await client.send(command);
 * // { // MethodResponse
 * //   statusCode: "STRING_VALUE",
 * //   responseParameters: { // MapOfStringToBoolean
 * //     "<keys>": true || false,
 * //   },
 * //   responseModels: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMethodResponseCommandInput - {@link GetMethodResponseCommandInput}
 * @returns {@link GetMethodResponseCommandOutput}
 * @see {@link GetMethodResponseCommandInput} for command's `input` shape.
 * @see {@link GetMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
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
export class GetMethodResponseCommand extends $Command
  .classBuilder<
    GetMethodResponseCommandInput,
    GetMethodResponseCommandOutput,
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
  .s("BackplaneControlService", "GetMethodResponse", {})
  .n("APIGatewayClient", "GetMethodResponseCommand")
  .f(void 0, void 0)
  .ser(se_GetMethodResponseCommand)
  .de(de_GetMethodResponseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMethodResponseRequest;
      output: MethodResponse;
    };
    sdk: {
      input: GetMethodResponseCommandInput;
      output: GetMethodResponseCommandOutput;
    };
  };
}
