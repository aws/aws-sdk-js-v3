// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateLexBotRequest } from "../models/models_0";
import { de_AssociateLexBotCommand, se_AssociateLexBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateLexBotCommand}.
 */
export interface AssociateLexBotCommandInput extends AssociateLexBotRequest {}
/**
 * @public
 *
 * The output of {@link AssociateLexBotCommand}.
 */
export interface AssociateLexBotCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex
 *    V1 bot. This API only supports the association of Amazon Lex V1 bots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateLexBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateLexBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateLexBotRequest
 *   InstanceId: "STRING_VALUE", // required
 *   LexBot: { // LexBot
 *     Name: "STRING_VALUE", // required
 *     LexRegion: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateLexBotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateLexBotCommandInput - {@link AssociateLexBotCommandInput}
 * @returns {@link AssociateLexBotCommandOutput}
 * @see {@link AssociateLexBotCommandInput} for command's `input` shape.
 * @see {@link AssociateLexBotCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class AssociateLexBotCommand extends $Command
  .classBuilder<
    AssociateLexBotCommandInput,
    AssociateLexBotCommandOutput,
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
  .s("AmazonConnectService", "AssociateLexBot", {})
  .n("ConnectClient", "AssociateLexBotCommand")
  .f(void 0, void 0)
  .ser(se_AssociateLexBotCommand)
  .de(de_AssociateLexBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateLexBotRequest;
      output: {};
    };
    sdk: {
      input: AssociateLexBotCommandInput;
      output: AssociateLexBotCommandOutput;
    };
  };
}
