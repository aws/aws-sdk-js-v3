// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAuthorizerRequest } from "../models/models_0";
import { de_DeleteAuthorizerCommand, se_DeleteAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAuthorizerCommand}.
 */
export interface DeleteAuthorizerCommandInput extends DeleteAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAuthorizerCommand}.
 */
export interface DeleteAuthorizerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteAuthorizerRequest
 *   ApiId: "STRING_VALUE", // required
 *   AuthorizerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAuthorizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAuthorizerCommandInput - {@link DeleteAuthorizerCommandInput}
 * @returns {@link DeleteAuthorizerCommandOutput}
 * @see {@link DeleteAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DeleteAuthorizerCommandOutput} for command's `response` shape.
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
export class DeleteAuthorizerCommand extends $Command
  .classBuilder<
    DeleteAuthorizerCommandInput,
    DeleteAuthorizerCommandOutput,
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
  .s("ApiGatewayV2", "DeleteAuthorizer", {})
  .n("ApiGatewayV2Client", "DeleteAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAuthorizerCommand)
  .de(de_DeleteAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAuthorizerRequest;
      output: {};
    };
    sdk: {
      input: DeleteAuthorizerCommandInput;
      output: DeleteAuthorizerCommandOutput;
    };
  };
}
