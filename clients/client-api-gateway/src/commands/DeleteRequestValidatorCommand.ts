// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRequestValidatorRequest } from "../models/models_0";
import { DeleteRequestValidator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRequestValidatorCommand}.
 */
export interface DeleteRequestValidatorCommandInput extends DeleteRequestValidatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRequestValidatorCommand}.
 */
export interface DeleteRequestValidatorCommandOutput extends __MetadataBearer {}

/**
 * Deletes a RequestValidator of a given RestApi.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // DeleteRequestValidatorRequest
 *   restApiId: "STRING_VALUE", // required
 *   requestValidatorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRequestValidatorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRequestValidatorCommandInput - {@link DeleteRequestValidatorCommandInput}
 * @returns {@link DeleteRequestValidatorCommandOutput}
 * @see {@link DeleteRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRequestValidatorCommandOutput} for command's `response` shape.
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
export class DeleteRequestValidatorCommand extends command<DeleteRequestValidatorCommandInput, DeleteRequestValidatorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRequestValidator",
  DeleteRequestValidator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRequestValidatorRequest;
      output: {};
    };
    sdk: {
      input: DeleteRequestValidatorCommandInput;
      output: DeleteRequestValidatorCommandOutput;
    };
  };
}
