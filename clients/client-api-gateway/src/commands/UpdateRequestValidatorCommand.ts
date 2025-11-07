// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RequestValidator, UpdateRequestValidatorRequest } from "../models/models_0";
import { UpdateRequestValidator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a RequestValidator of a given RestApi.</p>
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
export class UpdateRequestValidatorCommand extends $Command
  .classBuilder<
    UpdateRequestValidatorCommandInput,
    UpdateRequestValidatorCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "UpdateRequestValidator", {})
  .n("APIGatewayClient", "UpdateRequestValidatorCommand")
  .sc(UpdateRequestValidator)
  .build() {
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
