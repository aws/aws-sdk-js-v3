// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  DisconnectUserRequest,
  DisconnectUserRequestFilterSensitiveLog,
  DisconnectUserResponse,
} from "../models/models_0";
import { de_DisconnectUserCommand, se_DisconnectUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisconnectUserCommand}.
 */
export interface DisconnectUserCommandInput extends DisconnectUserRequest {}
/**
 * @public
 *
 * The output of {@link DisconnectUserCommand}.
 */
export interface DisconnectUserCommandOutput extends DisconnectUserResponse, __MetadataBearer {}

/**
 * <p>Disconnects all connections using a specified user ID from a room. This replicates the
 *             <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html">
 *             DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DisconnectUserCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DisconnectUserCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IvschatClient(config);
 * const input = { // DisconnectUserRequest
 *   roomIdentifier: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new DisconnectUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisconnectUserCommandInput - {@link DisconnectUserCommandInput}
 * @returns {@link DisconnectUserCommandOutput}
 * @see {@link DisconnectUserCommandInput} for command's `input` shape.
 * @see {@link DisconnectUserCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 * @public
 */
export class DisconnectUserCommand extends $Command
  .classBuilder<
    DisconnectUserCommandInput,
    DisconnectUserCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceChat", "DisconnectUser", {})
  .n("IvschatClient", "DisconnectUserCommand")
  .f(DisconnectUserRequestFilterSensitiveLog, void 0)
  .ser(se_DisconnectUserCommand)
  .de(de_DisconnectUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisconnectUserRequest;
      output: {};
    };
    sdk: {
      input: DisconnectUserCommandInput;
      output: DisconnectUserCommandOutput;
    };
  };
}
