// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteIntegrationResponseRequest } from "../models/models_0";
import { DeleteIntegrationResponse } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationResponseCommand}.
 */
export interface DeleteIntegrationResponseCommandInput extends DeleteIntegrationResponseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationResponseCommand}.
 */
export interface DeleteIntegrationResponseCommandOutput extends __MetadataBearer {}

/**
 * <p>Represents a delete integration response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // DeleteIntegrationResponseRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 *   statusCode: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntegrationResponseCommandInput - {@link DeleteIntegrationResponseCommandInput}
 * @returns {@link DeleteIntegrationResponseCommandOutput}
 * @see {@link DeleteIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
export class DeleteIntegrationResponseCommand extends $Command
  .classBuilder<
    DeleteIntegrationResponseCommandInput,
    DeleteIntegrationResponseCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "DeleteIntegrationResponse", {})
  .n("APIGatewayClient", "DeleteIntegrationResponseCommand")
  .sc(DeleteIntegrationResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationResponseRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntegrationResponseCommandInput;
      output: DeleteIntegrationResponseCommandOutput;
    };
  };
}
