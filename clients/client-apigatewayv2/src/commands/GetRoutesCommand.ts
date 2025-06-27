// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRoutesRequest, GetRoutesResponse } from "../models/models_0";
import { de_GetRoutesCommand, se_GetRoutesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRoutesCommand}.
 */
export interface GetRoutesCommandInput extends GetRoutesRequest {}
/**
 * @public
 *
 * The output of {@link GetRoutesCommand}.
 */
export interface GetRoutesCommandOutput extends GetRoutesResponse, __MetadataBearer {}

/**
 * <p>Gets the Routes for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRoutesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRoutesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetRoutesRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetRoutesCommand(input);
 * const response = await client.send(command);
 * // { // GetRoutesResponse
 * //   Items: [ // __listOfRoute
 * //     { // Route
 * //       ApiGatewayManaged: true || false,
 * //       ApiKeyRequired: true || false,
 * //       AuthorizationScopes: [ // AuthorizationScopes
 * //         "STRING_VALUE",
 * //       ],
 * //       AuthorizationType: "NONE" || "AWS_IAM" || "CUSTOM" || "JWT",
 * //       AuthorizerId: "STRING_VALUE",
 * //       ModelSelectionExpression: "STRING_VALUE",
 * //       OperationName: "STRING_VALUE",
 * //       RequestModels: { // RouteModels
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RequestParameters: { // RouteParameters
 * //         "<keys>": { // ParameterConstraints
 * //           Required: true || false,
 * //         },
 * //       },
 * //       RouteId: "STRING_VALUE",
 * //       RouteKey: "STRING_VALUE", // required
 * //       RouteResponseSelectionExpression: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRoutesCommandInput - {@link GetRoutesCommandInput}
 * @returns {@link GetRoutesCommandOutput}
 * @see {@link GetRoutesCommandInput} for command's `input` shape.
 * @see {@link GetRoutesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetRoutesCommand extends $Command
  .classBuilder<
    GetRoutesCommandInput,
    GetRoutesCommandOutput,
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
  .s("ApiGatewayV2", "GetRoutes", {})
  .n("ApiGatewayV2Client", "GetRoutesCommand")
  .f(void 0, void 0)
  .ser(se_GetRoutesCommand)
  .de(de_GetRoutesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoutesRequest;
      output: GetRoutesResponse;
    };
    sdk: {
      input: GetRoutesCommandInput;
      output: GetRoutesCommandOutput;
    };
  };
}
