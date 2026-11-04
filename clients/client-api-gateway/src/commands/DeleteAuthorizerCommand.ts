// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAuthorizerRequest } from "../models/models_0";
import { DeleteAuthorizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAuthorizerCommand}.
 */
export interface DeleteAuthorizerCommandInput extends DeleteAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAuthorizerCommand}.
 */
export interface DeleteAuthorizerCommandOutput extends __MetadataBearer {}

/**
 * Deletes an existing Authorizer resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // DeleteAuthorizerRequest
 *   restApiId: "STRING_VALUE", // required
 *   authorizerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAuthorizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAuthorizerCommandInput - {@link DeleteAuthorizerCommandInput}
 * @returns {@link DeleteAuthorizerCommandOutput}
 * @see {@link DeleteAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DeleteAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource is not found. Make sure that the request URI is correct.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request has reached its throttling limit. Retry after the specified time period.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request is denied because the caller has insufficient permissions.
 *
 * @throws {@link APIGatewayServiceException}
 *
 * Base exception class for all service exceptions from APIGateway service.
 *
 * @public
 */
export class DeleteAuthorizerCommand extends command<DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAuthorizer",
  DeleteAuthorizer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAuthorizerRequest;
      output: {};
    };
    sdk: {
      input: DeleteAuthorizerCommandInput;
      output: DeleteAuthorizerCommandOutput;
    };
  };
}
