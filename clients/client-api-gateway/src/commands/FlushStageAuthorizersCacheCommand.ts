// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FlushStageAuthorizersCacheRequest } from "../models/models_0";
import { de_FlushStageAuthorizersCacheCommand, se_FlushStageAuthorizersCacheCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "FlushStageAuthorizersCache", {})
  .n("APIGatewayClient", "FlushStageAuthorizersCacheCommand")
  .f(void 0, void 0)
  .ser(se_FlushStageAuthorizersCacheCommand)
  .de(de_FlushStageAuthorizersCacheCommand)
  .build() {}
