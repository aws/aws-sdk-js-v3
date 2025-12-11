// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBotRequest, GetBotResponse } from "../models/models_0";
import { GetBot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBotCommand}.
 */
export interface GetBotCommandInput extends GetBotRequest {}
/**
 * @public
 *
 * The output of {@link GetBotCommand}.
 */
export interface GetBotCommandOutput extends GetBotResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetBotCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetBotCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // GetBotRequest
 *   AccountId: "STRING_VALUE", // required
 *   BotId: "STRING_VALUE", // required
 * };
 * const command = new GetBotCommand(input);
 * const response = await client.send(command);
 * // { // GetBotResponse
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
 * @param GetBotCommandInput - {@link GetBotCommandInput}
 * @returns {@link GetBotCommandOutput}
 * @see {@link GetBotCommandInput} for command's `input` shape.
 * @see {@link GetBotCommandOutput} for command's `response` shape.
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
export class GetBotCommand extends $Command
  .classBuilder<
    GetBotCommandInput,
    GetBotCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "GetBot", {})
  .n("ChimeClient", "GetBotCommand")
  .sc(GetBot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotRequest;
      output: GetBotResponse;
    };
    sdk: {
      input: GetBotCommandInput;
      output: GetBotCommandOutput;
    };
  };
}
