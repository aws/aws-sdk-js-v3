// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteResponsesRequest, GetRouteResponsesResponse } from "../models/models_0";
import { de_GetRouteResponsesCommand, se_GetRouteResponsesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRouteResponsesCommand}.
 */
export interface GetRouteResponsesCommandInput extends GetRouteResponsesRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteResponsesCommand}.
 */
export interface GetRouteResponsesCommandOutput extends GetRouteResponsesResponse, __MetadataBearer {}

/**
 * <p>Gets the RouteResponses for a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteResponsesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetRouteResponsesRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   RouteId: "STRING_VALUE", // required
 * };
 * const command = new GetRouteResponsesCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteResponsesResponse
 * //   Items: [ // __listOfRouteResponse
 * //     { // RouteResponse
 * //       ModelSelectionExpression: "STRING_VALUE",
 * //       ResponseModels: { // RouteModels
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ResponseParameters: { // RouteParameters
 * //         "<keys>": { // ParameterConstraints
 * //           Required: true || false,
 * //         },
 * //       },
 * //       RouteResponseId: "STRING_VALUE",
 * //       RouteResponseKey: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRouteResponsesCommandInput - {@link GetRouteResponsesCommandInput}
 * @returns {@link GetRouteResponsesCommandOutput}
 * @see {@link GetRouteResponsesCommandInput} for command's `input` shape.
 * @see {@link GetRouteResponsesCommandOutput} for command's `response` shape.
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
export class GetRouteResponsesCommand extends $Command
  .classBuilder<
    GetRouteResponsesCommandInput,
    GetRouteResponsesCommandOutput,
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
  .s("ApiGatewayV2", "GetRouteResponses", {})
  .n("ApiGatewayV2Client", "GetRouteResponsesCommand")
  .f(void 0, void 0)
  .ser(se_GetRouteResponsesCommand)
  .de(de_GetRouteResponsesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouteResponsesRequest;
      output: GetRouteResponsesResponse;
    };
    sdk: {
      input: GetRouteResponsesCommandInput;
      output: GetRouteResponsesCommandOutput;
    };
  };
}
