// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApiGatewayManagementApiClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApiGatewayManagementApiClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteConnectionRequest } from "../models/models_0";
import { DeleteConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandInput extends DeleteConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete the connection with the provided id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayManagementApiClient, DeleteConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi"; // ES Modules import
 * // const { ApiGatewayManagementApiClient, DeleteConnectionCommand } = require("@aws-sdk/client-apigatewaymanagementapi"); // CommonJS import
 * // import type { ApiGatewayManagementApiClientConfig } from "@aws-sdk/client-apigatewaymanagementapi";
 * const config = {}; // type is ApiGatewayManagementApiClientConfig
 * const client = new ApiGatewayManagementApiClient(config);
 * const input = { // DeleteConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionCommandInput - {@link DeleteConnectionCommandInput}
 * @returns {@link DeleteConnectionCommandOutput}
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayManagementApiClientResolvedConfig | config} for ApiGatewayManagementApiClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller is not authorized to invoke this operation.</p>
 *
 * @throws {@link GoneException} (client fault)
 *  <p>The connection with the provided id no longer exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.</p>
 *
 * @throws {@link ApiGatewayManagementApiServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayManagementApi service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionCommand extends $Command
  .classBuilder<
    DeleteConnectionCommandInput,
    DeleteConnectionCommandOutput,
    ApiGatewayManagementApiClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayManagementApiClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayManagementApi", "DeleteConnection", {})
  .n("ApiGatewayManagementApiClient", "DeleteConnectionCommand")
  .sc(DeleteConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionCommandInput;
      output: DeleteConnectionCommandOutput;
    };
  };
}
