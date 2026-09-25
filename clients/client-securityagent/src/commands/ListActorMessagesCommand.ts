// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListActorMessagesInput, ListActorMessagesOutput } from "../models/models_0";
import { ListActorMessages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListActorMessagesCommand}.
 */
export interface ListActorMessagesCommandInput extends ListActorMessagesInput {}
/**
 * @public
 *
 * The output of {@link ListActorMessagesCommand}.
 */
export interface ListActorMessagesCommandOutput extends ListActorMessagesOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of the email MFA messages received for an actor at its server-generated email address, most recent first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListActorMessagesCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListActorMessagesCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListActorMessagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   agentSpaceId: "STRING_VALUE", // required
 *   pentestId: "STRING_VALUE", // required
 *   actorIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListActorMessagesCommand(input);
 * const response = await client.send(command);
 * // { // ListActorMessagesOutput
 * //   messages: [ // ActorMessageList
 * //     { // ActorMessage
 * //       sender: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //       receivedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActorMessagesCommandInput - {@link ListActorMessagesCommandInput}
 * @returns {@link ListActorMessagesCommandOutput}
 * @see {@link ListActorMessagesCommandInput} for command's `input` shape.
 * @see {@link ListActorMessagesCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListActorMessagesCommand extends command<ListActorMessagesCommandInput, ListActorMessagesCommandOutput>(
  _ep0,
  _mw0,
  "ListActorMessages",
  ListActorMessages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActorMessagesInput;
      output: ListActorMessagesOutput;
    };
    sdk: {
      input: ListActorMessagesCommandInput;
      output: ListActorMessagesCommandOutput;
    };
  };
}
