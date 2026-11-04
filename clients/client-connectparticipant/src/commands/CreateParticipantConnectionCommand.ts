// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateParticipantConnectionRequest, CreateParticipantConnectionResponse } from "../models/models_0";
import { CreateParticipantConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateParticipantConnectionCommand}.
 */
export interface CreateParticipantConnectionCommandInput extends CreateParticipantConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateParticipantConnectionCommand}.
 */
export interface CreateParticipantConnectionCommandOutput extends CreateParticipantConnectionResponse, __MetadataBearer {}

/**
 * Creates the participant's connection.
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * For WebRTC security recommendations, see [Connect Customer WebRTC security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-webrtc-security).
 *
 * > **Note:** `ParticipantToken` is used for invoking this API instead of `ConnectionToken`.
 *
 * The participant token is valid for the lifetime of the participant – until they are part of a contact. For WebRTC participants, if they leave or are disconnected for 60 seconds, a new participant needs to be created using the [CreateParticipant](https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateParticipant.html) API.
 *
 * **For `WEBSOCKET` Type**:
 *
 * The response URL for has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic.
 *
 * For chat, you need to publish the following on the established websocket connection:
 *
 * `\{"topic":"aws/subscribe","content":\{"topics":["aws/chat"]\}\}`
 *
 * Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.
 *
 * The expiry time for the connection token is different than the `ChatDurationInMinutes`. Expiry time for the connection token is 1 day.
 *
 * **For `WEBRTC_CONNECTION` Type**:
 *
 * The response includes connection data required for the client application to join the call using the Amazon Chime SDK client libraries. The WebRTCConnection response contains Meeting and Attendee information needed to establish the media connection.
 *
 * The attendee join token in WebRTCConnection response is valid for the lifetime of the participant in the call. If a participant leaves or is disconnected for 60 seconds, their participant credentials will no longer be valid, and a new participant will need to be created to rejoin the call.
 *
 * **Message streaming support**: This API can also be used together with the [StartContactStreaming](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html) API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, [Enable real-time chat message streaming](https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html) in the *Amazon Connect Administrator Guide*.
 *
 * **Multi-user web, in-app, video calling support**:
 *
 * For WebRTC calls, this API is used in conjunction with the CreateParticipant API to enable multi-party calling. The StartWebRTCContact API creates the initial contact and routes it to an agent, while CreateParticipant adds additional participants to the ongoing call. For more information about multi-party WebRTC calls, see [Enable multi-user web, in-app, and video calling](https://docs.aws.amazon.com/connect/latest/adminguide/enable-multiuser-inapp.html) in the *Amazon Connect Administrator Guide*.
 *
 * **Feature specifications**: For information about feature specifications, such as the allowed number of open websocket connections per participant or maximum number of WebRTC participants, see [Feature specifications](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits) in the *Amazon Connect Administrator Guide*.
 *
 * > **Note:** The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CreateParticipantConnectionCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CreateParticipantConnectionCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // CreateParticipantConnectionRequest
 *   Type: [ // ConnectionTypeList
 *     "WEBSOCKET" || "CONNECTION_CREDENTIALS" || "WEBRTC_CONNECTION",
 *   ],
 *   ParticipantToken: "STRING_VALUE", // required
 *   ConnectParticipant: true || false,
 * };
 * const command = new CreateParticipantConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateParticipantConnectionResponse
 * //   Websocket: { // Websocket
 * //     Url: "STRING_VALUE",
 * //     ConnectionExpiry: "STRING_VALUE",
 * //   },
 * //   ConnectionCredentials: { // ConnectionCredentials
 * //     ConnectionToken: "STRING_VALUE",
 * //     Expiry: "STRING_VALUE",
 * //   },
 * //   WebRTCConnection: { // WebRTCConnection
 * //     Attendee: { // Attendee
 * //       AttendeeId: "STRING_VALUE",
 * //       JoinToken: "STRING_VALUE",
 * //     },
 * //     Meeting: { // WebRTCMeeting
 * //       MediaPlacement: { // WebRTCMediaPlacement
 * //         AudioHostUrl: "STRING_VALUE",
 * //         AudioFallbackUrl: "STRING_VALUE",
 * //         SignalingUrl: "STRING_VALUE",
 * //         EventIngestionUrl: "STRING_VALUE",
 * //       },
 * //       MeetingFeatures: { // MeetingFeaturesConfiguration
 * //         Audio: { // AudioFeatures
 * //           EchoReduction: "AVAILABLE" || "UNAVAILABLE",
 * //         },
 * //       },
 * //       MeetingId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateParticipantConnectionCommandInput - {@link CreateParticipantConnectionCommandInput}
 * @returns {@link CreateParticipantConnectionCommandOutput}
 * @see {@link CreateParticipantConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantConnectionCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Amazon Connect service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Amazon Connect.
 *
 * @throws {@link ConnectParticipantServiceException}
 *
 * Base exception class for all service exceptions from ConnectParticipant service.
 *
 * @public
 */
export class CreateParticipantConnectionCommand extends command<CreateParticipantConnectionCommandInput, CreateParticipantConnectionCommandOutput>(
  _ep0,
  _mw0,
  "CreateParticipantConnection",
  CreateParticipantConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateParticipantConnectionRequest;
      output: CreateParticipantConnectionResponse;
    };
    sdk: {
      input: CreateParticipantConnectionCommandInput;
      output: CreateParticipantConnectionCommandOutput;
    };
  };
}
