// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRequestValidatorRequest, RequestValidator } from "../models/models_0";
import { de_GetRequestValidatorCommand, se_GetRequestValidatorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRequestValidatorCommand}.
 */
export interface GetRequestValidatorCommandInput extends GetRequestValidatorRequest {}
/**
 * @public
 *
 * The output of {@link GetRequestValidatorCommand}.
 */
export interface GetRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}

/**
 * <p>Gets a RequestValidator of a given RestApi.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetRequestValidatorRequest
 *   restApiId: "STRING_VALUE", // required
 *   requestValidatorId: "STRING_VALUE", // required
 * };
 * const command = new GetRequestValidatorCommand(input);
 * const response = await client.send(command);
 * // { // RequestValidator
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   validateRequestBody: true || false,
 * //   validateRequestParameters: true || false,
 * // };
 *
 * ```
 *
 * @param GetRequestValidatorCommandInput - {@link GetRequestValidatorCommandInput}
 * @returns {@link GetRequestValidatorCommandOutput}
 * @see {@link GetRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link GetRequestValidatorCommandOutput} for command's `response` shape.
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
export class GetRequestValidatorCommand extends $Command
  .classBuilder<
    GetRequestValidatorCommandInput,
    GetRequestValidatorCommandOutput,
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
  .s("BackplaneControlService", "GetRequestValidator", {})
  .n("APIGatewayClient", "GetRequestValidatorCommand")
  .f(void 0, void 0)
  .ser(se_GetRequestValidatorCommand)
  .de(de_GetRequestValidatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequestValidatorRequest;
      output: RequestValidator;
    };
    sdk: {
      input: GetRequestValidatorCommandInput;
      output: GetRequestValidatorCommandOutput;
    };
  };
}
