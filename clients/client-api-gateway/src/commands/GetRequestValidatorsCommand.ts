// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRequestValidatorsRequest, RequestValidators } from "../models/models_0";
import { de_GetRequestValidatorsCommand, se_GetRequestValidatorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRequestValidatorsCommand}.
 */
export interface GetRequestValidatorsCommandInput extends GetRequestValidatorsRequest {}
/**
 * @public
 *
 * The output of {@link GetRequestValidatorsCommand}.
 */
export interface GetRequestValidatorsCommandOutput extends RequestValidators, __MetadataBearer {}

/**
 * <p>Gets the RequestValidators collection of a given RestApi.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // GetRequestValidatorsRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetRequestValidatorsCommand(input);
 * const response = await client.send(command);
 * // { // RequestValidators
 * //   items: [ // ListOfRequestValidator
 * //     { // RequestValidator
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       validateRequestBody: true || false,
 * //       validateRequestParameters: true || false,
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRequestValidatorsCommandInput - {@link GetRequestValidatorsCommandInput}
 * @returns {@link GetRequestValidatorsCommandOutput}
 * @see {@link GetRequestValidatorsCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorsCommandOutput} for command's `response` shape.
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
export class GetRequestValidatorsCommand extends $Command
  .classBuilder<
    GetRequestValidatorsCommandInput,
    GetRequestValidatorsCommandOutput,
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
  .s("BackplaneControlService", "GetRequestValidators", {})
  .n("APIGatewayClient", "GetRequestValidatorsCommand")
  .f(void 0, void 0)
  .ser(se_GetRequestValidatorsCommand)
  .de(de_GetRequestValidatorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequestValidatorsRequest;
      output: RequestValidators;
    };
    sdk: {
      input: GetRequestValidatorsCommandInput;
      output: GetRequestValidatorsCommandOutput;
    };
  };
}
