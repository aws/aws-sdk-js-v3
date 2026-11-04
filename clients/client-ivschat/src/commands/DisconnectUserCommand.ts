// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisconnectUserRequest, DisconnectUserResponse } from "../models/models_0";
import { DisconnectUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disconnects all connections using a specified user ID from a room. This replicates the [DisconnectUser](https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html) WebSocket operation in the Amazon IVS Chat Messaging API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DisconnectUserCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DisconnectUserCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
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
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link IvschatServiceException}
 *
 * Base exception class for all service exceptions from Ivschat service.
 *
 * @public
 */
export class DisconnectUserCommand extends command<DisconnectUserCommandInput, DisconnectUserCommandOutput>(
  _ep0,
  _mw0,
  "DisconnectUser",
  DisconnectUser$
) {
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
