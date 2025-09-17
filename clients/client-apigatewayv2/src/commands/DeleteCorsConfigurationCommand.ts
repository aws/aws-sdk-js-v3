// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCorsConfigurationRequest } from "../models/models_0";
import { de_DeleteCorsConfigurationCommand, se_DeleteCorsConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCorsConfigurationCommand}.
 */
export interface DeleteCorsConfigurationCommandInput extends DeleteCorsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCorsConfigurationCommand}.
 */
export interface DeleteCorsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a CORS configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteCorsConfigurationCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteCorsConfigurationCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteCorsConfigurationRequest
 *   ApiId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCorsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCorsConfigurationCommandInput - {@link DeleteCorsConfigurationCommandInput}
 * @returns {@link DeleteCorsConfigurationCommandOutput}
 * @see {@link DeleteCorsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteCorsConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteCorsConfigurationCommand extends $Command
  .classBuilder<
    DeleteCorsConfigurationCommandInput,
    DeleteCorsConfigurationCommandOutput,
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
  .s("ApiGatewayV2", "DeleteCorsConfiguration", {})
  .n("ApiGatewayV2Client", "DeleteCorsConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCorsConfigurationCommand)
  .de(de_DeleteCorsConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCorsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteCorsConfigurationCommandInput;
      output: DeleteCorsConfigurationCommandOutput;
    };
  };
}
