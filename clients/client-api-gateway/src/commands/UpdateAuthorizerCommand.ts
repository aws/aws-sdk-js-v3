// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Authorizer, UpdateAuthorizerRequest } from "../models/models_0";
import { UpdateAuthorizer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandInput extends UpdateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandOutput extends Authorizer, __MetadataBearer {}

/**
 * <p>Updates an existing Authorizer resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateAuthorizerRequest
 *   restApiId: "STRING_VALUE", // required
 *   authorizerId: "STRING_VALUE", // required
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // Authorizer
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   type: "TOKEN" || "REQUEST" || "COGNITO_USER_POOLS",
 * //   providerARNs: [ // ListOfARNs
 * //     "STRING_VALUE",
 * //   ],
 * //   authType: "STRING_VALUE",
 * //   authorizerUri: "STRING_VALUE",
 * //   authorizerCredentials: "STRING_VALUE",
 * //   identitySource: "STRING_VALUE",
 * //   identityValidationExpression: "STRING_VALUE",
 * //   authorizerResultTtlInSeconds: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateAuthorizerCommandInput - {@link UpdateAuthorizerCommandInput}
 * @returns {@link UpdateAuthorizerCommandOutput}
 * @see {@link UpdateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthorizerCommandOutput} for command's `response` shape.
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
export class UpdateAuthorizerCommand extends $Command
  .classBuilder<
    UpdateAuthorizerCommandInput,
    UpdateAuthorizerCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "UpdateAuthorizer", {})
  .n("APIGatewayClient", "UpdateAuthorizerCommand")
  .sc(UpdateAuthorizer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAuthorizerRequest;
      output: Authorizer;
    };
    sdk: {
      input: UpdateAuthorizerCommandInput;
      output: UpdateAuthorizerCommandOutput;
    };
  };
}
