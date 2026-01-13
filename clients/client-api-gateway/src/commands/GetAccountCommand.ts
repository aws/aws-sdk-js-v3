// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { Account, GetAccountRequest } from "../models/models_0";
import { GetAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountCommand}.
 */
export interface GetAccountCommandInput extends GetAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountCommand}.
 */
export interface GetAccountCommandOutput extends Account, __MetadataBearer {}

/**
 * <p>Gets information about the current Account resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetAccountCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetAccountCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = {};
 * const command = new GetAccountCommand(input);
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
 * @param GetAccountCommandInput - {@link GetAccountCommandInput}
 * @returns {@link GetAccountCommandOutput}
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetAccountCommand extends $Command
  .classBuilder<
    GetAccountCommandInput,
    GetAccountCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetAccount", {})
  .n("APIGatewayClient", "GetAccountCommand")
  .sc(GetAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: Account;
    };
    sdk: {
      input: GetAccountCommandInput;
      output: GetAccountCommandOutput;
    };
  };
}
