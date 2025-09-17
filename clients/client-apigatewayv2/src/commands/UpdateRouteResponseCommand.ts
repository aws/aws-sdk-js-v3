// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRouteResponseRequest, UpdateRouteResponseResponse } from "../models/models_0";
import { de_UpdateRouteResponseCommand, se_UpdateRouteResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRouteResponseCommand}.
 */
export interface UpdateRouteResponseCommandInput extends UpdateRouteResponseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouteResponseCommand}.
 */
export interface UpdateRouteResponseCommandOutput extends UpdateRouteResponseResponse, __MetadataBearer {}

/**
 * <p>Updates a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateRouteResponseRequest
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
 *   RouteResponseId: "STRING_VALUE", // required
 *   RouteResponseKey: "STRING_VALUE",
 * };
 * const command = new UpdateRouteResponseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouteResponseResponse
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
 * @param UpdateRouteResponseCommandInput - {@link UpdateRouteResponseCommandInput}
 * @returns {@link UpdateRouteResponseCommandOutput}
 * @see {@link UpdateRouteResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteResponseCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateRouteResponseCommand extends $Command
  .classBuilder<
    UpdateRouteResponseCommandInput,
    UpdateRouteResponseCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "UpdateRouteResponse", {})
  .n("ApiGatewayV2Client", "UpdateRouteResponseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRouteResponseCommand)
  .de(de_UpdateRouteResponseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRouteResponseRequest;
      output: UpdateRouteResponseResponse;
    };
    sdk: {
      input: UpdateRouteResponseCommandInput;
      output: UpdateRouteResponseCommandOutput;
    };
  };
}
