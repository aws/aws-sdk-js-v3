// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateBotRequest } from "../models/models_0";
import { de_AssociateBotCommand, se_AssociateBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateBotCommand}.
 */
export interface AssociateBotCommandInput extends AssociateBotRequest {}
/**
 * @public
 *
 * The output of {@link AssociateBotCommand}.
 */
export interface AssociateBotCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Allows the specified Amazon Connect instance to access the specified Amazon Lex
 *    or Amazon Lex V2 bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateBotCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateBotCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateBotRequest
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
 * const command = new AssociateBotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateBotCommandInput - {@link AssociateBotCommandInput}
 * @returns {@link AssociateBotCommandOutput}
 * @see {@link AssociateBotCommandInput} for command's `input` shape.
 * @see {@link AssociateBotCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class AssociateBotCommand extends $Command
  .classBuilder<
    AssociateBotCommandInput,
    AssociateBotCommandOutput,
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
  .s("AmazonConnectService", "AssociateBot", {})
  .n("ConnectClient", "AssociateBotCommand")
  .f(void 0, void 0)
  .ser(se_AssociateBotCommand)
  .de(de_AssociateBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateBotRequest;
      output: {};
    };
    sdk: {
      input: AssociateBotCommandInput;
      output: AssociateBotCommandOutput;
    };
  };
}
