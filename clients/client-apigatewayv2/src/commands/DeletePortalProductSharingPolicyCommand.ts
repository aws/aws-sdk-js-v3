// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePortalProductSharingPolicyRequest } from "../models/models_0";
import { DeletePortalProductSharingPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePortalProductSharingPolicyCommand}.
 */
export interface DeletePortalProductSharingPolicyCommandInput extends DeletePortalProductSharingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePortalProductSharingPolicyCommand}.
 */
export interface DeletePortalProductSharingPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the sharing policy for a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeletePortalProductSharingPolicyCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeletePortalProductSharingPolicyCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeletePortalProductSharingPolicyRequest
 *   PortalProductId: "STRING_VALUE", // required
 * };
 * const command = new DeletePortalProductSharingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePortalProductSharingPolicyCommandInput - {@link DeletePortalProductSharingPolicyCommandInput}
 * @returns {@link DeletePortalProductSharingPolicyCommandOutput}
 * @see {@link DeletePortalProductSharingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePortalProductSharingPolicyCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
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
export class DeletePortalProductSharingPolicyCommand extends $Command
  .classBuilder<
    DeletePortalProductSharingPolicyCommandInput,
    DeletePortalProductSharingPolicyCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "DeletePortalProductSharingPolicy", {})
  .n("ApiGatewayV2Client", "DeletePortalProductSharingPolicyCommand")
  .sc(DeletePortalProductSharingPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePortalProductSharingPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePortalProductSharingPolicyCommandInput;
      output: DeletePortalProductSharingPolicyCommandOutput;
    };
  };
}
