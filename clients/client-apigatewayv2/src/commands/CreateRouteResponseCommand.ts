// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRouteResponseRequest, CreateRouteResponseResponse } from "../models/models_0";
import { de_CreateRouteResponseCommand, se_CreateRouteResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRouteResponseCommand}.
 */
export interface CreateRouteResponseCommandInput extends CreateRouteResponseRequest {}
/**
 * @public
 *
 * The output of {@link CreateRouteResponseCommand}.
 */
export interface CreateRouteResponseCommandOutput extends CreateRouteResponseResponse, __MetadataBearer {}

/**
 * <p>Creates a RouteResponse for a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateRouteResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   ModelSelectionExpression: "STRING_VALUE",
 *   ResponseModels: { // RouteModels
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ResponseParameters: { // RouteParameters
 *     "<keys>": { // ParameterConstraints
 *       Required: true || false,
 *     },
 *   },
 *   RouteId: "STRING_VALUE", // required
 *   RouteResponseKey: "STRING_VALUE", // required
 * };
 * const command = new CreateRouteResponseCommand(input);
 * const response = await client.send(command);
 * // { // CreateRouteResponseResponse
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
 * @param CreateRouteResponseCommandInput - {@link CreateRouteResponseCommandInput}
 * @returns {@link CreateRouteResponseCommandOutput}
 * @see {@link CreateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link CreateRouteResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
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
export class CreateRouteResponseCommand extends $Command
  .classBuilder<
    CreateRouteResponseCommandInput,
    CreateRouteResponseCommandOutput,
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
  .s("ApiGatewayV2", "CreateRouteResponse", {})
  .n("ApiGatewayV2Client", "CreateRouteResponseCommand")
  .f(void 0, void 0)
  .ser(se_CreateRouteResponseCommand)
  .de(de_CreateRouteResponseCommand)
  .build() {}
