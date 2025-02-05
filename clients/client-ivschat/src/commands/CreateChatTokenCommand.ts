// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  CreateChatTokenRequest,
  CreateChatTokenRequestFilterSensitiveLog,
  CreateChatTokenResponse,
  CreateChatTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateChatTokenCommand, se_CreateChatTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChatTokenCommand}.
 */
export interface CreateChatTokenCommandInput extends CreateChatTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateChatTokenCommand}.
 */
export interface CreateChatTokenCommandOutput extends CreateChatTokenResponse, __MetadataBearer {}

/**
 * <p>Creates an encrypted token that is used by a chat participant to establish an individual
 *          WebSocket chat connection to a room. When the token is used to connect to chat, the
 *          connection is valid for the session duration specified in the request. The token becomes
 *          invalid at the token-expiration timestamp included in the response.</p>
 *          <p>Use the <code>capabilities</code> field to permit an end user to send messages or
 *          moderate a room.</p>
 *          <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is
 *          included within each message sent by the end user and received by other participants in the
 *          room. Common use cases for attributes include passing end-user profile data like an icon,
 *          display name, colors, badges, and other display features.</p>
 *          <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateChatTokenCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateChatTokenCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IvschatClient(config);
 * const input = { // CreateChatTokenRequest
 *   roomIdentifier: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   capabilities: [ // ChatTokenCapabilities
 *     "STRING_VALUE",
 *   ],
 *   sessionDurationInMinutes: Number("int"),
 *   attributes: { // ChatTokenAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChatTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateChatTokenResponse
 * //   token: "STRING_VALUE",
 * //   tokenExpirationTime: new Date("TIMESTAMP"),
 * //   sessionExpirationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateChatTokenCommandInput - {@link CreateChatTokenCommandInput}
 * @returns {@link CreateChatTokenCommandOutput}
 * @see {@link CreateChatTokenCommandInput} for command's `input` shape.
 * @see {@link CreateChatTokenCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 * @public
 */
export class CreateChatTokenCommand extends $Command
  .classBuilder<
    CreateChatTokenCommandInput,
    CreateChatTokenCommandOutput,
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
  .s("AmazonInteractiveVideoServiceChat", "CreateChatToken", {})
  .n("IvschatClient", "CreateChatTokenCommand")
  .f(CreateChatTokenRequestFilterSensitiveLog, CreateChatTokenResponseFilterSensitiveLog)
  .ser(se_CreateChatTokenCommand)
  .de(de_CreateChatTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChatTokenRequest;
      output: CreateChatTokenResponse;
    };
    sdk: {
      input: CreateChatTokenCommandInput;
      output: CreateChatTokenCommandOutput;
    };
  };
}
