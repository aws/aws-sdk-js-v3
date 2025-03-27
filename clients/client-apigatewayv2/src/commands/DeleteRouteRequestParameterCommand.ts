// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteRequestParameterRequest } from "../models/models_0";
import {
  de_DeleteRouteRequestParameterCommand,
  se_DeleteRouteRequestParameterCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteRequestParameterCommand}.
 */
export interface DeleteRouteRequestParameterCommandInput extends DeleteRouteRequestParameterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteRequestParameterCommand}.
 */
export interface DeleteRouteRequestParameterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a route request parameter. Supported only for WebSocket APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteRequestParameterCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteRequestParameterCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteRouteRequestParameterRequest
 *   ApiId: "STRING_VALUE", // required
 *   RequestParameterKey: "STRING_VALUE", // required
 *   RouteId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteRequestParameterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteRequestParameterCommandInput - {@link DeleteRouteRequestParameterCommandInput}
 * @returns {@link DeleteRouteRequestParameterCommandOutput}
 * @see {@link DeleteRouteRequestParameterCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteRequestParameterCommandOutput} for command's `response` shape.
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
export class DeleteRouteRequestParameterCommand extends $Command
  .classBuilder<
    DeleteRouteRequestParameterCommandInput,
    DeleteRouteRequestParameterCommandOutput,
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
  .s("ApiGatewayV2", "DeleteRouteRequestParameter", {})
  .n("ApiGatewayV2Client", "DeleteRouteRequestParameterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteRequestParameterCommand)
  .de(de_DeleteRouteRequestParameterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteRequestParameterRequest;
      output: {};
    };
    sdk: {
      input: DeleteRouteRequestParameterCommandInput;
      output: DeleteRouteRequestParameterCommandOutput;
    };
  };
}
