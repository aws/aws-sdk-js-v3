// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPortalProductSharingPolicyRequest, GetPortalProductSharingPolicyResponse } from "../models/models_0";
import { GetPortalProductSharingPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPortalProductSharingPolicyCommand}.
 */
export interface GetPortalProductSharingPolicyCommandInput extends GetPortalProductSharingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPortalProductSharingPolicyCommand}.
 */
export interface GetPortalProductSharingPolicyCommandOutput
  extends GetPortalProductSharingPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Gets the sharing policy for a portal product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetPortalProductSharingPolicyCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetPortalProductSharingPolicyCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetPortalProductSharingPolicyRequest
 *   PortalProductId: "STRING_VALUE", // required
 * };
 * const command = new GetPortalProductSharingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPortalProductSharingPolicyResponse
 * //   PolicyDocument: "STRING_VALUE",
 * //   PortalProductId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPortalProductSharingPolicyCommandInput - {@link GetPortalProductSharingPolicyCommandInput}
 * @returns {@link GetPortalProductSharingPolicyCommandOutput}
 * @see {@link GetPortalProductSharingPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPortalProductSharingPolicyCommandOutput} for command's `response` shape.
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
export class GetPortalProductSharingPolicyCommand extends $Command
  .classBuilder<
    GetPortalProductSharingPolicyCommandInput,
    GetPortalProductSharingPolicyCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetPortalProductSharingPolicy", {})
  .n("ApiGatewayV2Client", "GetPortalProductSharingPolicyCommand")
  .sc(GetPortalProductSharingPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPortalProductSharingPolicyRequest;
      output: GetPortalProductSharingPolicyResponse;
    };
    sdk: {
      input: GetPortalProductSharingPolicyCommandInput;
      output: GetPortalProductSharingPolicyCommandOutput;
    };
  };
}
