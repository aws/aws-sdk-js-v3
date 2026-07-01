// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRouteResponseRequest, CreateRouteResponseResponse } from "../models/models_0";
import { CreateRouteResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
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
 *
 * @public
 */
export class CreateRouteResponseCommand extends command<CreateRouteResponseCommandInput, CreateRouteResponseCommandOutput>(
  _ep0,
  _mw0,
  "CreateRouteResponse",
  CreateRouteResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRouteResponseRequest;
      output: CreateRouteResponseResponse;
    };
    sdk: {
      input: CreateRouteResponseCommandInput;
      output: CreateRouteResponseCommandOutput;
    };
  };
}
