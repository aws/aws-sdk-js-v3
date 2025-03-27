// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAccessLogSettingsRequest } from "../models/models_0";
import { de_DeleteAccessLogSettingsCommand, se_DeleteAccessLogSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccessLogSettingsCommand}.
 */
export interface DeleteAccessLogSettingsCommandInput extends DeleteAccessLogSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessLogSettingsCommand}.
 */
export interface DeleteAccessLogSettingsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteAccessLogSettingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteAccessLogSettingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteAccessLogSettingsRequest
 *   ApiId: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessLogSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessLogSettingsCommandInput - {@link DeleteAccessLogSettingsCommandInput}
 * @returns {@link DeleteAccessLogSettingsCommandOutput}
 * @see {@link DeleteAccessLogSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessLogSettingsCommandOutput} for command's `response` shape.
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
export class DeleteAccessLogSettingsCommand extends $Command
  .classBuilder<
    DeleteAccessLogSettingsCommandInput,
    DeleteAccessLogSettingsCommandOutput,
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
  .s("ApiGatewayV2", "DeleteAccessLogSettings", {})
  .n("ApiGatewayV2Client", "DeleteAccessLogSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAccessLogSettingsCommand)
  .de(de_DeleteAccessLogSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessLogSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessLogSettingsCommandInput;
      output: DeleteAccessLogSettingsCommandOutput;
    };
  };
}
