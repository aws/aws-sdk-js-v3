// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { Account, UpdateAccountRequest } from "../models/models_0";
import { UpdateAccount } from "../schemas/schemas_12_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountCommand}.
 */
export interface UpdateAccountCommandInput extends UpdateAccountRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountCommand}.
 */
export interface UpdateAccountCommandOutput extends Account, __MetadataBearer {}

/**
 * <p>Changes information about the current Account resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateAccountCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateAccountCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // UpdateAccountRequest
 *   patchOperations: [ // ListOfPatchOperation
 *     { // PatchOperation
 *       op: "add" || "remove" || "replace" || "move" || "copy" || "test",
 *       path: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       from: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateAccountCommand(input);
 * const response = await client.send(command);
 * // { // Account
 * //   cloudwatchRoleArn: "STRING_VALUE",
 * //   throttleSettings: { // ThrottleSettings
 * //     burstLimit: Number("int"),
 * //     rateLimit: Number("double"),
 * //   },
 * //   features: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   apiKeyVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAccountCommandInput - {@link UpdateAccountCommandInput}
 * @returns {@link UpdateAccountCommandOutput}
 * @see {@link UpdateAccountCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountCommandOutput} for command's `response` shape.
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
export class UpdateAccountCommand extends $Command
  .classBuilder<
    UpdateAccountCommandInput,
    UpdateAccountCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "UpdateAccount", {})
  .n("APIGatewayClient", "UpdateAccountCommand")
  .sc(UpdateAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountRequest;
      output: Account;
    };
    sdk: {
      input: UpdateAccountCommandInput;
      output: UpdateAccountCommandOutput;
    };
  };
}
