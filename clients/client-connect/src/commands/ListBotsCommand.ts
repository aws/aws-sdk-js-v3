// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBotsRequest, ListBotsResponse } from "../models/models_1";
import { de_ListBotsCommand, se_ListBotsCommand } from "../protocols/Aws_restJson1";

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
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to return both Amazon Lex V1 and V2 bots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListBotsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListBotsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListBotsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LexVersion: "V1" || "V2", // required
 * };
 * const command = new ListBotsCommand(input);
 * const response = await client.send(command);
 * // { // ListBotsResponse
 * //   LexBots: [ // LexBotConfigList
 * //     { // LexBotConfig
 * //       LexBot: { // LexBot
 * //         Name: "STRING_VALUE", // required
 * //         LexRegion: "STRING_VALUE", // required
 * //       },
 * //       LexV2Bot: { // LexV2Bot
 * //         AliasArn: "STRING_VALUE",
 * //       },
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
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListBotsCommand extends $Command
  .classBuilder<
    ListBotsCommandInput,
    ListBotsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListBots", {})
  .n("ConnectClient", "ListBotsCommand")
  .f(void 0, void 0)
  .ser(se_ListBotsCommand)
  .de(de_ListBotsCommand)
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
