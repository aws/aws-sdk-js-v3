// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAssistantContactRequest, StartAssistantContactResponse } from "../models/models_3";
import { StartAssistantContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAssistantContactCommand}.
 */
export interface StartAssistantContactCommandInput extends StartAssistantContactRequest {}
/**
 * @public
 *
 * The output of {@link StartAssistantContactCommand}.
 */
export interface StartAssistantContactCommandOutput extends StartAssistantContactResponse, __MetadataBearer {}

/**
 * <p>Starts a chat contact with an AI agent.</p>
 *          <p>Use the returned <code>ParticipantToken</code> to call the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API.</p>
 *          <p>For more information about chat, see the following topics in the <i>Connect Customer
 *    Administrator Guide</i>: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html">Concepts: Web and mobile messaging capabilities in Connect Customer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Connect Customer Chat security best practices</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartAssistantContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartAssistantContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartAssistantContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AiAgent: { // AiAgentInput
 *     AiAgentId: "STRING_VALUE", // required
 *   },
 *   ParticipantDetails: { // ParticipantDetails
 *     DisplayName: "STRING_VALUE", // required
 *   },
 *   InitialMessage: { // ChatMessage
 *     ContentType: "STRING_VALUE", // required
 *     Content: "STRING_VALUE", // required
 *   },
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 *   PersistentChat: { // PersistentChat
 *     RehydrationType: "ENTIRE_PAST_SESSION" || "FROM_SEGMENT",
 *     SourceContactId: "STRING_VALUE",
 *   },
 *   RelatedContactId: "STRING_VALUE",
 * };
 * const command = new StartAssistantContactCommand(input);
 * const response = await client.send(command);
 * // { // StartAssistantContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ParticipantId: "STRING_VALUE",
 * //   ParticipantToken: "STRING_VALUE",
 * //   ContinuedFromContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAssistantContactCommandInput - {@link StartAssistantContactCommandInput}
 * @returns {@link StartAssistantContactCommandOutput}
 * @see {@link StartAssistantContactCommandInput} for command's `input` shape.
 * @see {@link StartAssistantContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class StartAssistantContactCommand extends command<StartAssistantContactCommandInput, StartAssistantContactCommandOutput>(
  _ep0,
  _mw0,
  "StartAssistantContact",
  StartAssistantContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAssistantContactRequest;
      output: StartAssistantContactResponse;
    };
    sdk: {
      input: StartAssistantContactCommandInput;
      output: StartAssistantContactCommandOutput;
    };
  };
}
