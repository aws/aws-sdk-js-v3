// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutPortalProductSharingPolicyRequest, PutPortalProductSharingPolicyResponse } from "../models/models_0";
import { PutPortalProductSharingPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPortalProductSharingPolicyCommand}.
 */
export interface PutPortalProductSharingPolicyCommandInput extends PutPortalProductSharingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutPortalProductSharingPolicyCommand}.
 */
export interface PutPortalProductSharingPolicyCommandOutput extends PutPortalProductSharingPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates the sharing policy for a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, PutPortalProductSharingPolicyCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, PutPortalProductSharingPolicyCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // PutPortalProductSharingPolicyRequest
 *   PolicyDocument: "STRING_VALUE", // required
 *   PortalProductId: "STRING_VALUE", // required
 * };
 * const command = new PutPortalProductSharingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPortalProductSharingPolicyCommandInput - {@link PutPortalProductSharingPolicyCommandInput}
 * @returns {@link PutPortalProductSharingPolicyCommandOutput}
 * @see {@link PutPortalProductSharingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPortalProductSharingPolicyCommandOutput} for command's `response` shape.
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
export class PutPortalProductSharingPolicyCommand extends $Command
  .classBuilder<
    PutPortalProductSharingPolicyCommandInput,
    PutPortalProductSharingPolicyCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "PutPortalProductSharingPolicy", {})
  .n("ApiGatewayV2Client", "PutPortalProductSharingPolicyCommand")
  .sc(PutPortalProductSharingPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPortalProductSharingPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutPortalProductSharingPolicyCommandInput;
      output: PutPortalProductSharingPolicyCommandOutput;
    };
  };
}
