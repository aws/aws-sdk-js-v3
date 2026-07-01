// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRouteResponseRequest } from "../models/models_0";
import { DeleteRouteResponse$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRouteResponseCommand}.
 */
export interface DeleteRouteResponseCommandInput extends DeleteRouteResponseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteResponseCommand}.
 */
export interface DeleteRouteResponseCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a RouteResponse.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteRouteResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   RouteId: "STRING_VALUE", // required
 *   RouteResponseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteResponseCommandInput - {@link DeleteRouteResponseCommandInput}
 * @returns {@link DeleteRouteResponseCommandOutput}
 * @see {@link DeleteRouteResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteResponseCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteRouteResponseCommand extends command<DeleteRouteResponseCommandInput, DeleteRouteResponseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRouteResponse",
  DeleteRouteResponse$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteResponseRequest;
      output: {};
    };
    sdk: {
      input: DeleteRouteResponseCommandInput;
      output: DeleteRouteResponseCommandOutput;
    };
  };
}
