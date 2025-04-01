// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateBotRequest } from "../models/models_1";
import { de_DisassociateBotCommand, se_DisassociateBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateBotCommand}.
 */
export interface DisassociateBotCommandInput extends DisassociateBotRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateBotCommand}.
 */
export interface DisassociateBotCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2
 *    bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DisassociateBotRequest
 *   InstanceId: "STRING_VALUE", // required
 *   LexBot: { // LexBot
 *     Name: "STRING_VALUE", // required
 *     LexRegion: "STRING_VALUE", // required
 *   },
 *   LexV2Bot: { // LexV2Bot
 *     AliasArn: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateBotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateBotCommandInput - {@link DisassociateBotCommandInput}
 * @returns {@link DisassociateBotCommandOutput}
 * @see {@link DisassociateBotCommandInput} for command's `input` shape.
 * @see {@link DisassociateBotCommandOutput} for command's `response` shape.
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
export class DisassociateBotCommand extends $Command
  .classBuilder<
    DisassociateBotCommandInput,
    DisassociateBotCommandOutput,
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
  .s("AmazonConnectService", "DisassociateBot", {})
  .n("ConnectClient", "DisassociateBotCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateBotCommand)
  .de(de_DisassociateBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateBotRequest;
      output: {};
    };
    sdk: {
      input: DisassociateBotCommandInput;
      output: DisassociateBotCommandOutput;
    };
  };
}
