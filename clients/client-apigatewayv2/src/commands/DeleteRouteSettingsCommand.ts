// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteSettingsRequest } from "../models/models_0";
import { de_DeleteRouteSettingsCommand, se_DeleteRouteSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteSettingsCommand}.
 */
export interface DeleteRouteSettingsCommandInput extends DeleteRouteSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteSettingsCommand}.
 */
export interface DeleteRouteSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the RouteSettings for a stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteRouteSettingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteRouteSettingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteRouteSettingsRequest
 *   ApiId: "STRING_VALUE", // required
 *   RouteKey: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteSettingsCommandInput - {@link DeleteRouteSettingsCommandInput}
 * @returns {@link DeleteRouteSettingsCommandOutput}
 * @see {@link DeleteRouteSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteRouteSettingsCommand extends $Command
  .classBuilder<
    DeleteRouteSettingsCommandInput,
    DeleteRouteSettingsCommandOutput,
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
  .s("ApiGatewayV2", "DeleteRouteSettings", {})
  .n("ApiGatewayV2Client", "DeleteRouteSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteSettingsCommand)
  .de(de_DeleteRouteSettingsCommand)
  .build() {}
