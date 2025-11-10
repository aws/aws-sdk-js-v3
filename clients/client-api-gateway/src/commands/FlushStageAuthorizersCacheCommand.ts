// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FlushStageAuthorizersCacheRequest } from "../models/models_0";
import { FlushStageAuthorizersCache } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FlushStageAuthorizersCacheCommand}.
 */
export interface FlushStageAuthorizersCacheCommandInput extends FlushStageAuthorizersCacheRequest {}
/**
 * @public
 *
 * The output of {@link FlushStageAuthorizersCacheCommand}.
 */
export interface FlushStageAuthorizersCacheCommandOutput extends __MetadataBearer {}

/**
 * <p>Flushes all authorizer cache entries on a stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, FlushStageAuthorizersCacheCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, FlushStageAuthorizersCacheCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // FlushStageAuthorizersCacheRequest
 *   restApiId: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 * };
 * const command = new FlushStageAuthorizersCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param FlushStageAuthorizersCacheCommandInput - {@link FlushStageAuthorizersCacheCommandInput}
 * @returns {@link FlushStageAuthorizersCacheCommandOutput}
 * @see {@link FlushStageAuthorizersCacheCommandInput} for command's `input` shape.
 * @see {@link FlushStageAuthorizersCacheCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 *
 * @public
 */
export class FlushStageAuthorizersCacheCommand extends $Command
  .classBuilder<
    FlushStageAuthorizersCacheCommandInput,
    FlushStageAuthorizersCacheCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "FlushStageAuthorizersCache", {})
  .n("APIGatewayClient", "FlushStageAuthorizersCacheCommand")
  .sc(FlushStageAuthorizersCache)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FlushStageAuthorizersCacheRequest;
      output: {};
    };
    sdk: {
      input: FlushStageAuthorizersCacheCommandInput;
      output: FlushStageAuthorizersCacheCommandOutput;
    };
  };
}
