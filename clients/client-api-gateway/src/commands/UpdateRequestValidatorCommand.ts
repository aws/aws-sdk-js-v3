// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RequestValidator, UpdateRequestValidatorRequest } from "../models/models_0";
import { UpdateRequestValidator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRequestValidatorCommand}.
 */
export interface UpdateRequestValidatorCommandInput extends UpdateRequestValidatorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRequestValidatorCommand}.
 */
export interface UpdateRequestValidatorCommandOutput extends RequestValidator, __MetadataBearer {}

/**
 * Updates a RequestValidator of a given RestApi.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateRequestValidatorCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateRequestValidatorCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateRequestValidatorRequest
 *   restApiId: "STRING_VALUE", // required
 *   requestValidatorId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateRequestValidatorCommand(input);
 * const response = await client.send(command);
 * // { // RequestValidator
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   validateRequestBody: true || false,
 * //   validateRequestParameters: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateRequestValidatorCommandInput - {@link UpdateRequestValidatorCommandInput}
 * @returns {@link UpdateRequestValidatorCommandOutput}
 * @see {@link UpdateRequestValidatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRequestValidatorCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded the rate limit. Retry after the specified time period.
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
export class UpdateRequestValidatorCommand extends command<UpdateRequestValidatorCommandInput, UpdateRequestValidatorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRequestValidator",
  UpdateRequestValidator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRequestValidatorRequest;
      output: RequestValidator;
    };
    sdk: {
      input: UpdateRequestValidatorCommandInput;
      output: UpdateRequestValidatorCommandOutput;
    };
  };
}
