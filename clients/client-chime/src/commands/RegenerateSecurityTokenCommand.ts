// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegenerateSecurityTokenRequest, RegenerateSecurityTokenResponse } from "../models/models_0";
import { RegenerateSecurityToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegenerateSecurityTokenCommand}.
 */
export interface RegenerateSecurityTokenCommandInput extends RegenerateSecurityTokenRequest {}
/**
 * @public
 *
 * The output of {@link RegenerateSecurityTokenCommand}.
 */
export interface RegenerateSecurityTokenCommandOutput extends RegenerateSecurityTokenResponse, __MetadataBearer {}

/**
 * <p>Regenerates the security token for a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RegenerateSecurityTokenCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RegenerateSecurityTokenCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // RegenerateSecurityTokenRequest
 *   AccountId: "STRING_VALUE", // required
 *   BotId: "STRING_VALUE", // required
 * };
 * const command = new RegenerateSecurityTokenCommand(input);
 * const response = await client.send(command);
 * // { // RegenerateSecurityTokenResponse
 * //   Bot: { // Bot
 * //     BotId: "STRING_VALUE",
 * //     UserId: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     BotType: "ChatBot",
 * //     Disabled: true || false,
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     BotEmail: "STRING_VALUE",
 * //     SecurityToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegenerateSecurityTokenCommandInput - {@link RegenerateSecurityTokenCommandInput}
 * @returns {@link RegenerateSecurityTokenCommandOutput}
 * @see {@link RegenerateSecurityTokenCommandInput} for command's `input` shape.
 * @see {@link RegenerateSecurityTokenCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class RegenerateSecurityTokenCommand extends $Command
  .classBuilder<
    RegenerateSecurityTokenCommandInput,
    RegenerateSecurityTokenCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "RegenerateSecurityToken", {})
  .n("ChimeClient", "RegenerateSecurityTokenCommand")
  .sc(RegenerateSecurityToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegenerateSecurityTokenRequest;
      output: RegenerateSecurityTokenResponse;
    };
    sdk: {
      input: RegenerateSecurityTokenCommandInput;
      output: RegenerateSecurityTokenCommandOutput;
    };
  };
}
