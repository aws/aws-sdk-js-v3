// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteResponseRequest } from "../models/models_0";
import { de_DeleteRouteResponseCommand, se_DeleteRouteResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DeleteRouteResponseCommand extends $Command
  .classBuilder<
    DeleteRouteResponseCommandInput,
    DeleteRouteResponseCommandOutput,
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
  .s("ApiGatewayV2", "DeleteRouteResponse", {})
  .n("ApiGatewayV2Client", "DeleteRouteResponseCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteResponseCommand)
  .de(de_DeleteRouteResponseCommand)
  .build() {
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
