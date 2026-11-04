// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegenerateSecurityTokenRequest, RegenerateSecurityTokenResponse } from "../models/models_0";
import { RegenerateSecurityToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Regenerates the security token for a bot.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class RegenerateSecurityTokenCommand extends command<RegenerateSecurityTokenCommandInput, RegenerateSecurityTokenCommandOutput>(
  _ep0,
  _mw0,
  "RegenerateSecurityToken",
  RegenerateSecurityToken$
) {
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
