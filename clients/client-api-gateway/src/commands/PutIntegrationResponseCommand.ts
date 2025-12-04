// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { IntegrationResponse, PutIntegrationResponseRequest } from "../models/models_0";
import { PutIntegrationResponse } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutIntegrationResponseCommand}.
 */
export interface PutIntegrationResponseCommandInput extends PutIntegrationResponseRequest {}
/**
 * @public
 *
 * The output of {@link PutIntegrationResponseCommand}.
 */
export interface PutIntegrationResponseCommandOutput extends IntegrationResponse, __MetadataBearer {}

/**
 * <p>Represents a put integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // PutIntegrationResponseRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 *   statusCode: "STRING_VALUE", // required
 *   selectionPattern: "STRING_VALUE",
 *   responseParameters: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 *   responseTemplates: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * };
 * const command = new PutIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * // { // IntegrationResponse
 * //   statusCode: "STRING_VALUE",
 * //   selectionPattern: "STRING_VALUE",
 * //   responseParameters: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   responseTemplates: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * // };
 *
 * ```
 *
 * @param PutIntegrationResponseCommandInput - {@link PutIntegrationResponseCommandInput}
 * @returns {@link PutIntegrationResponseCommandOutput}
 * @see {@link PutIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationResponseCommandOutput} for command's `response` shape.
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
export class PutIntegrationResponseCommand extends $Command
  .classBuilder<
    PutIntegrationResponseCommandInput,
    PutIntegrationResponseCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "PutIntegrationResponse", {})
  .n("APIGatewayClient", "PutIntegrationResponseCommand")
  .sc(PutIntegrationResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIntegrationResponseRequest;
      output: IntegrationResponse;
    };
    sdk: {
      input: PutIntegrationResponseCommandInput;
      output: PutIntegrationResponseCommandOutput;
    };
  };
}
