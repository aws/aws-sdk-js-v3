// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChatTokenRequest, CreateChatTokenResponse } from "../models/models_0";
import { CreateChatToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.
 *
 * Use the `capabilities` field to permit an end user to send messages or moderate a room.
 *
 * The `attributes` field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.
 *
 * Encryption keys are owned by Amazon IVS Chat and never used directly by your application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateChatTokenCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateChatTokenCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
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
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link IvschatServiceException}
 *
 * Base exception class for all service exceptions from Ivschat service.
 *
 * @public
 */
export class CreateChatTokenCommand extends command<CreateChatTokenCommandInput, CreateChatTokenCommandOutput>(
  _ep0,
  _mw0,
  "CreateChatToken",
  CreateChatToken$
) {
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
