// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLexBotsRequest, ListLexBotsResponse } from "../models/models_2";
import { de_ListLexBotsCommand, se_ListLexBotsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLexBotsCommand}.
 */
export interface ListLexBotsCommandInput extends ListLexBotsRequest {}
/**
 * @public
 *
 * The output of {@link ListLexBotsCommand}.
 */
export interface ListLexBotsCommandOutput extends ListLexBotsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all the Amazon Lex V1 bots currently associated with the
 *    instance. To return both Amazon Lex V1 and V2 bots, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListBots.html">ListBots</a> API.
 *    </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLexBotsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLexBotsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListLexBotsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLexBotsCommand(input);
 * const response = await client.send(command);
 * // { // ListLexBotsResponse
 * //   LexBots: [ // LexBotsList
 * //     { // LexBot
 * //       Name: "STRING_VALUE", // required
 * //       LexRegion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLexBotsCommandInput - {@link ListLexBotsCommandInput}
 * @returns {@link ListLexBotsCommandOutput}
 * @see {@link ListLexBotsCommandInput} for command's `input` shape.
 * @see {@link ListLexBotsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
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
export class ListLexBotsCommand extends $Command
  .classBuilder<
    ListLexBotsCommandInput,
    ListLexBotsCommandOutput,
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
  .s("AmazonConnectService", "ListLexBots", {})
  .n("ConnectClient", "ListLexBotsCommand")
  .f(void 0, void 0)
  .ser(se_ListLexBotsCommand)
  .de(de_ListLexBotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLexBotsRequest;
      output: ListLexBotsResponse;
    };
    sdk: {
      input: ListLexBotsCommandInput;
      output: ListLexBotsCommandOutput;
    };
  };
}
