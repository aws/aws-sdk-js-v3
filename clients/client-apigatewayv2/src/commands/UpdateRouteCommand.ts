// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRouteRequest, UpdateRouteResult } from "../models/models_0";
import { UpdateRoute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRouteCommand}.
 */
export interface UpdateRouteCommandInput extends UpdateRouteRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouteCommand}.
 */
export interface UpdateRouteCommandOutput extends UpdateRouteResult, __MetadataBearer {}

/**
 * <p>Updates a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateRouteCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateRouteCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateRouteRequest
 *   ApiId: "STRING_VALUE", // required
 *   ApiKeyRequired: true || false,
 *   AuthorizationScopes: [ // AuthorizationScopes
 *     "STRING_VALUE",
 *   ],
 *   AuthorizationType: "NONE" || "AWS_IAM" || "CUSTOM" || "JWT",
 *   AuthorizerId: "STRING_VALUE",
 *   ModelSelectionExpression: "STRING_VALUE",
 *   OperationName: "STRING_VALUE",
 *   RequestModels: { // RouteModels
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestParameters: { // RouteParameters
 *     "<keys>": { // ParameterConstraints
 *       Required: true || false,
 *     },
 *   },
 *   RouteId: "STRING_VALUE", // required
 *   RouteKey: "STRING_VALUE",
 *   RouteResponseSelectionExpression: "STRING_VALUE",
 *   Target: "STRING_VALUE",
 * };
 * const command = new UpdateRouteCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouteResult
 * //   ApiGatewayManaged: true || false,
 * //   ApiKeyRequired: true || false,
 * //   AuthorizationScopes: [ // AuthorizationScopes
 * //     "STRING_VALUE",
 * //   ],
 * //   AuthorizationType: "NONE" || "AWS_IAM" || "CUSTOM" || "JWT",
 * //   AuthorizerId: "STRING_VALUE",
 * //   ModelSelectionExpression: "STRING_VALUE",
 * //   OperationName: "STRING_VALUE",
 * //   RequestModels: { // RouteModels
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RequestParameters: { // RouteParameters
 * //     "<keys>": { // ParameterConstraints
 * //       Required: true || false,
 * //     },
 * //   },
 * //   RouteId: "STRING_VALUE",
 * //   RouteKey: "STRING_VALUE",
 * //   RouteResponseSelectionExpression: "STRING_VALUE",
 * //   Target: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRouteCommandInput - {@link UpdateRouteCommandInput}
 * @returns {@link UpdateRouteCommandOutput}
 * @see {@link UpdateRouteCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCommandOutput} for command's `response` shape.
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
export class UpdateRouteCommand extends $Command
  .classBuilder<
    UpdateRouteCommandInput,
    UpdateRouteCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "UpdateRoute", {})
  .n("ApiGatewayV2Client", "UpdateRouteCommand")
  .sc(UpdateRoute$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRouteRequest;
      output: UpdateRouteResult;
    };
    sdk: {
      input: UpdateRouteCommandInput;
      output: UpdateRouteCommandOutput;
    };
  };
}
