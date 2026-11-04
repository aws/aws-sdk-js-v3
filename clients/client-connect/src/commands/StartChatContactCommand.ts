// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartChatContactResponse } from "../models/models_3";
import type { StartChatContactRequest } from "../models/models_4";
import { StartChatContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartChatContactCommand}.
 */
export interface StartChatContactCommandInput extends StartChatContactRequest {}
/**
 * @public
 *
 * The output of {@link StartChatContactCommand}.
 */
export interface StartChatContactCommandOutput extends StartChatContactResponse, __MetadataBearer {}

/**
 * Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) API in the Connect Customer Participant Service.
 *
 * When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking [CreateParticipantConnection](https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html) with WEBSOCKET and CONNECTION_CREDENTIALS.
 *
 * To receive connection information directly in the response, set `ConnectionTypes` on the request. To initiate real-time message streaming when the chat is created, set `ChatStreamingConfiguration` on the request. Both parameters are optional.
 *
 * A 429 error occurs in the following situations:
 *
 * - API rate limit is exceeded. API TPS throttling returns a `TooManyRequests` exception.
 * - The [quota for concurrent active chats](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) is exceeded. Active chat throttling returns a `LimitExceededException`.
 *
 * If you use the `ChatDurationInMinutes` parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support.
 *
 * For more information about chat, see the following topics in the *Connect Customer Administrator Guide*:
 *
 * - [Concepts: Web and mobile messaging capabilities in Connect Customer](https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html)
 * - [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartChatContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartChatContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartChatContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ParticipantDetails: { // ParticipantDetails
 *     DisplayName: "STRING_VALUE", // required
 *   },
 *   ParticipantConfiguration: { // ParticipantConfiguration
 *     ResponseMode: "INCREMENTAL" || "COMPLETE",
 *   },
 *   InitialMessage: { // ChatMessage
 *     ContentType: "STRING_VALUE", // required
 *     Content: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 *   ChatDurationInMinutes: Number("int"),
 *   SupportedMessagingContentTypes: [ // SupportedMessagingContentTypes
 *     "STRING_VALUE",
 *   ],
 *   PersistentChat: { // PersistentChat
 *     RehydrationType: "ENTIRE_PAST_SESSION" || "FROM_SEGMENT",
 *     SourceContactId: "STRING_VALUE",
 *   },
 *   RelatedContactId: "STRING_VALUE",
 *   SegmentAttributes: { // SegmentAttributes
 *     "<keys>": { // SegmentAttributeValue
 *       ValueString: "STRING_VALUE",
 *       ValueMap: { // SegmentAttributeValueMap
 *         "<keys>": {
 *           ValueString: "STRING_VALUE",
 *           ValueMap: {
 *             "<keys>": "<SegmentAttributeValue>",
 *           },
 *           ValueInteger: Number("int"),
 *           ValueList: [ // SegmentAttributeValueList
 *             "<SegmentAttributeValue>",
 *           ],
 *           ValueArn: "STRING_VALUE",
 *         },
 *       },
 *       ValueInteger: Number("int"),
 *       ValueList: [
 *         "<SegmentAttributeValue>",
 *       ],
 *       ValueArn: "STRING_VALUE",
 *     },
 *   },
 *   CustomerId: "STRING_VALUE",
 *   DisconnectOnCustomerExit: [ // DisconnectOnCustomerExit
 *     "AGENT",
 *   ],
 *   ConnectionTypes: [ // ConnectionTypeList
 *     "WEBSOCKET" || "CONNECTION_CREDENTIALS" || "AUTHENTICATION_SESSION" || "WEBRTC_CONNECTION",
 *   ],
 *   ChatStreamingConfiguration: { // ChatStreamingConfiguration
 *     StreamingEndpointArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartChatContactCommand(input);
 * const response = await client.send(command);
 * // { // StartChatContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ParticipantId: "STRING_VALUE",
 * //   ParticipantToken: "STRING_VALUE",
 * //   ContinuedFromContactId: "STRING_VALUE",
 * //   ConnectionCredentials: { // ConnectionCredentials
 * //     ConnectionToken: "STRING_VALUE",
 * //     Expiry: "STRING_VALUE",
 * //   },
 * //   Websocket: { // Websocket
 * //     Url: "STRING_VALUE",
 * //     ConnectionExpiry: "STRING_VALUE",
 * //   },
 * //   StreamingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartChatContactCommandInput - {@link StartChatContactCommandInput}
 * @returns {@link StartChatContactCommandOutput}
 * @see {@link StartChatContactCommandInput} for command's `input` shape.
 * @see {@link StartChatContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class StartChatContactCommand extends command<StartChatContactCommandInput, StartChatContactCommandOutput>(
  _ep0,
  _mw0,
  "StartChatContact",
  StartChatContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartChatContactRequest;
      output: StartChatContactResponse;
    };
    sdk: {
      input: StartChatContactCommandInput;
      output: StartChatContactCommandOutput;
    };
  };
}
