// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendChatIntegrationEventRequest, SendChatIntegrationEventResponse } from "../models/models_3";
import { SendChatIntegrationEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendChatIntegrationEventCommand}.
 */
export interface SendChatIntegrationEventCommandInput extends SendChatIntegrationEventRequest {}
/**
 * @public
 *
 * The output of {@link SendChatIntegrationEventCommand}.
 */
export interface SendChatIntegrationEventCommandOutput extends SendChatIntegrationEventResponse, __MetadataBearer {}

/**
 * Processes chat integration events from Amazon Web Services or external integrations to Connect Customer. A chat integration event includes:
 *
 * - SourceId, DestinationId, and Subtype: a set of identifiers, uniquely representing a chat
 * - ChatEvent: details of the chat action to perform such as sending a message, event, or disconnecting from a chat
 *
 * When a chat integration event is sent with chat identifiers that do not map to an active chat contact, a new chat contact is also created before handling chat action.
 *
 * Access to this API is currently restricted to Amazon Web Services End User Messaging for supporting SMS integration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SendChatIntegrationEventCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SendChatIntegrationEventCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SendChatIntegrationEventRequest
 *   SourceId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 *   Subtype: "STRING_VALUE",
 *   Event: { // ChatEvent
 *     Type: "DISCONNECT" || "MESSAGE" || "EVENT", // required
 *     ContentType: "STRING_VALUE",
 *     Content: "STRING_VALUE",
 *   },
 *   NewSessionDetails: { // NewSessionDetails
 *     SupportedMessagingContentTypes: [ // SupportedMessagingContentTypes
 *       "STRING_VALUE",
 *     ],
 *     ParticipantDetails: { // ParticipantDetails
 *       DisplayName: "STRING_VALUE", // required
 *     },
 *     Attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     StreamingConfiguration: { // ChatStreamingConfiguration
 *       StreamingEndpointArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new SendChatIntegrationEventCommand(input);
 * const response = await client.send(command);
 * // { // SendChatIntegrationEventResponse
 * //   InitialContactId: "STRING_VALUE",
 * //   NewChatCreated: true || false,
 * // };
 *
 * ```
 *
 * @param SendChatIntegrationEventCommandInput - {@link SendChatIntegrationEventCommandInput}
 * @returns {@link SendChatIntegrationEventCommandOutput}
 * @see {@link SendChatIntegrationEventCommandInput} for command's `input` shape.
 * @see {@link SendChatIntegrationEventCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
export class SendChatIntegrationEventCommand extends command<SendChatIntegrationEventCommandInput, SendChatIntegrationEventCommandOutput>(
  _ep0,
  _mw0,
  "SendChatIntegrationEvent",
  SendChatIntegrationEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendChatIntegrationEventRequest;
      output: SendChatIntegrationEventResponse;
    };
    sdk: {
      input: SendChatIntegrationEventCommandInput;
      output: SendChatIntegrationEventCommandOutput;
    };
  };
}
