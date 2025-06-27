// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { MethodResponse, PutMethodResponseRequest } from "../models/models_0";
import { de_PutMethodResponseCommand, se_PutMethodResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMethodResponseCommand}.
 */
export interface PutMethodResponseCommandInput extends PutMethodResponseRequest {}
/**
 * @public
 *
 * The output of {@link PutMethodResponseCommand}.
 */
export interface PutMethodResponseCommandOutput extends MethodResponse, __MetadataBearer {}

/**
 * <p>Adds a MethodResponse to an existing Method resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // PutMethodResponseRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 *   statusCode: "STRING_VALUE", // required
 *   responseParameters: { // MapOfStringToBoolean
 *     "<keys>": true || false,
 *   },
 *   responseModels: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutMethodResponseCommand(input);
 * const response = await client.send(command);
 * // { // MethodResponse
 * //   statusCode: "STRING_VALUE",
 * //   responseParameters: { // MapOfStringToBoolean
 * //     "<keys>": true || false,
 * //   },
 * //   responseModels: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutMethodResponseCommandInput - {@link PutMethodResponseCommandInput}
 * @returns {@link PutMethodResponseCommandOutput}
 * @see {@link PutMethodResponseCommandInput} for command's `input` shape.
 * @see {@link PutMethodResponseCommandOutput} for command's `response` shape.
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
export class PutMethodResponseCommand extends $Command
  .classBuilder<
    PutMethodResponseCommandInput,
    PutMethodResponseCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "PutMethodResponse", {})
  .n("APIGatewayClient", "PutMethodResponseCommand")
  .f(void 0, void 0)
  .ser(se_PutMethodResponseCommand)
  .de(de_PutMethodResponseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMethodResponseRequest;
      output: MethodResponse;
    };
    sdk: {
      input: PutMethodResponseCommandInput;
      output: PutMethodResponseCommandOutput;
    };
  };
}
