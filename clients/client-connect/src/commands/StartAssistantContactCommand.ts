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
 * Starts a chat contact with an AI agent.
 *
 * Use the returned `ParticipantToken` with the [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) operation.
 *
 * For more information about chat, see the following topics in the *Connect Customer Administrator Guide*:
 *
 * - [Concepts: Web and mobile messaging capabilities in Connect Customer](https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html)
 * - [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat)
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
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
