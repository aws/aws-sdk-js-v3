// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ResetAuthorizersCacheRequest } from "../models/models_0";
import { ResetAuthorizersCache } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetAuthorizersCacheCommand}.
 */
export interface ResetAuthorizersCacheCommandInput extends ResetAuthorizersCacheRequest {}
/**
 * @public
 *
 * The output of {@link ResetAuthorizersCacheCommand}.
 */
export interface ResetAuthorizersCacheCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ResetAuthorizersCacheCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ResetAuthorizersCacheCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ResetAuthorizersCacheRequest
 *   ApiId: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new ResetAuthorizersCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetAuthorizersCacheCommandInput - {@link ResetAuthorizersCacheCommandInput}
 * @returns {@link ResetAuthorizersCacheCommandOutput}
 * @see {@link ResetAuthorizersCacheCommandInput} for command's `input` shape.
 * @see {@link ResetAuthorizersCacheCommandOutput} for command's `response` shape.
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
export class ResetAuthorizersCacheCommand extends $Command
  .classBuilder<
    ResetAuthorizersCacheCommandInput,
    ResetAuthorizersCacheCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "ResetAuthorizersCache", {})
  .n("ApiGatewayV2Client", "ResetAuthorizersCacheCommand")
  .sc(ResetAuthorizersCache)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetAuthorizersCacheRequest;
      output: {};
    };
    sdk: {
      input: ResetAuthorizersCacheCommandInput;
      output: ResetAuthorizersCacheCommandOutput;
    };
  };
}
