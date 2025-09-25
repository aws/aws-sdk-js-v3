// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBotsRequest, ListBotsResponse } from "../models/models_0";
import { ListBots } from "../schemas/schemas_16_Phone";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBotsCommand}.
 */
export interface ListBotsCommandInput extends ListBotsRequest {}
/**
 * @public
 *
 * The output of {@link ListBotsCommand}.
 */
export interface ListBotsCommandOutput extends ListBotsResponse, __MetadataBearer {}

/**
 * <p>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListBotsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListBotsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListBotsRequest
 *   AccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotsResponse
 * //   Bots: [ // BotList
 * //     { // Bot
 * //       BotId: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       BotType: "ChatBot",
 * //       Disabled: true || false,
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       BotEmail: "STRING_VALUE",
 * //       SecurityToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBotsCommandInput - {@link ListBotsCommandInput}
 * @returns {@link ListBotsCommandOutput}
 * @see {@link ListBotsCommandInput} for command's `input` shape.
 * @see {@link ListBotsCommandOutput} for command's `response` shape.
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
export class ListBotsCommand extends $Command
  .classBuilder<
    ListBotsCommandInput,
    ListBotsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "ListBots", {})
  .n("ChimeClient", "ListBotsCommand")
  .sc(ListBots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBotsRequest;
      output: ListBotsResponse;
    };
    sdk: {
      input: ListBotsCommandInput;
      output: ListBotsCommandOutput;
    };
  };
}
