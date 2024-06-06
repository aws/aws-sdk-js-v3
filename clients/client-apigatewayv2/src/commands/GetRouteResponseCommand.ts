// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteResponseRequest, GetRouteResponseResponse } from "../models/models_0";
import { de_GetRouteResponseCommand, se_GetRouteResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRouteResponseCommand}.
 */
export interface GetRouteResponseCommandInput extends GetRouteResponseRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteResponseCommand}.
 */
export interface GetRouteResponseCommandOutput extends GetRouteResponseResponse, __MetadataBearer {}

/**
 * <p>Gets a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetRouteResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   RouteId: "STRING_VALUE", // required
 *   RouteResponseId: "STRING_VALUE", // required
 * };
 * const command = new GetRouteResponseCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteResponseResponse
 * //   ModelSelectionExpression: "STRING_VALUE",
 * //   ResponseModels: { // RouteModels
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResponseParameters: { // RouteParameters
 * //     "<keys>": { // ParameterConstraints
 * //       Required: true || false,
 * //     },
 * //   },
 * //   RouteResponseId: "STRING_VALUE",
 * //   RouteResponseKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRouteResponseCommandInput - {@link GetRouteResponseCommandInput}
 * @returns {@link GetRouteResponseCommandOutput}
 * @see {@link GetRouteResponseCommandInput} for command's `input` shape.
 * @see {@link GetRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 * @public
 */
export class GetRouteResponseCommand extends $Command
  .classBuilder<
    GetRouteResponseCommandInput,
    GetRouteResponseCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetRouteResponse", {})
  .n("ApiGatewayV2Client", "GetRouteResponseCommand")
  .f(void 0, void 0)
  .ser(se_GetRouteResponseCommand)
  .de(de_GetRouteResponseCommand)
  .build() {}
