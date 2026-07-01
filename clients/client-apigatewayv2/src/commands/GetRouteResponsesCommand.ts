// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRouteResponsesRequest, GetRouteResponsesResponse } from "../models/models_0";
import { GetRouteResponses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class GetRouteResponsesCommand extends command<GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput>(
  _ep0,
  _mw0,
  "GetRouteResponses",
  GetRouteResponses$
) {
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
