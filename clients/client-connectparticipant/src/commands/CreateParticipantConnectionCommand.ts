// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateParticipantConnectionRequest,
  CreateParticipantConnectionResponse,
  CreateParticipantConnectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateParticipantConnectionCommand,
  se_CreateParticipantConnectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateParticipantConnectionCommandOutput
  extends CreateParticipantConnectionResponse,
    __MetadataBearer {}

/**
 * <p>Creates the participant's connection. </p>
 *          <p>For security recommendations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>. </p>
 *          <p>For WebRTC security recommendations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-webrtc-security">Amazon Connect WebRTC security best practices</a>. </p>
 *          <note>
 *             <p>
 *                <code>ParticipantToken</code> is used for invoking this API instead of
 *                     <code>ConnectionToken</code>.</p>
 *          </note>
 *          <p>The participant token is valid for the lifetime of the participant – until they are
 *             part of a contact. For WebRTC participants, if they leave or are disconnected for 60
 *             seconds, a new participant needs to be created using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateParticipant.html">CreateParticipant</a> API. </p>
 *          <p>
 *             <b>For <code>WEBSOCKET</code> Type</b>: </p>
 *          <p>The response URL for has a connect expiry timeout of 100s. Clients must manually
 *             connect to the returned websocket URL and subscribe to the desired topic. </p>
 *          <p>For chat, you need to publish the following on the established websocket
 *             connection:</p>
 *          <p>
 *             <code>\{"topic":"aws/subscribe","content":\{"topics":["aws/chat"]\}\}</code>
 *          </p>
 *          <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
 *             clients need to call this API again to obtain a new websocket URL and perform the same
 *             steps as before.</p>
 *          <p>The expiry time for the connection token is different than the
 *                 <code>ChatDurationInMinutes</code>. Expiry time for the connection token is 1
 *             day.</p>
 *          <p>
 *             <b>For <code>WEBRTC_CONNECTION</code> Type</b>: </p>
 *          <p>The response includes connection data required for the client application to join the
 *             call using the Amazon Chime SDK client libraries. The WebRTCConnection response contains
 *             Meeting and Attendee information needed to establish the media connection. </p>
 *          <p>The attendee join token in WebRTCConnection response is valid for the lifetime of the
 *             participant in the call. If a participant leaves or is disconnected for 60 seconds,
 *             their participant credentials will no longer be valid, and a new participant will need
 *             to be created to rejoin the call. </p>
 *          <p>
 *             <b>Message streaming support</b>: This API can also be used
 *             together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat
 *             contacts that are not using a websocket. For more information about message streaming,
 *                 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat
 *                 message streaming</a> in the <i>Amazon Connect Administrator
 *             Guide</i>.</p>
 *          <p>
 *             <b>Multi-user web, in-app, video calling support</b>: </p>
 *          <p>For WebRTC calls, this API is used in conjunction with the CreateParticipant API to
 *             enable multi-party calling. The StartWebRTCContact API creates the initial contact and
 *             routes it to an agent, while CreateParticipant adds additional participants to the
 *             ongoing call. For more information about multi-party WebRTC calls, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-multiuser-inapp.html">Enable multi-user web, in-app, and video calling</a> in the <i>Amazon Connect
 *                 Administrator Guide</i>. </p>
 *          <p>
 *             <b>Feature specifications</b>: For information about feature
 *             specifications, such as the allowed number of open websocket connections per participant
 *             or maximum number of WebRTC participants, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator
 *                 Guide</i>. </p>
 *          <note>
 *             <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 *          </note>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 *
 * @throws {@link ConnectParticipantServiceException}
 * <p>Base exception class for all service exceptions from ConnectParticipant service.</p>
 *
 *
 * @public
 */
export class CreateParticipantConnectionCommand extends $Command
  .classBuilder<
    CreateParticipantConnectionCommandInput,
    CreateParticipantConnectionCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectParticipantServiceLambda", "CreateParticipantConnection", {})
  .n("ConnectParticipantClient", "CreateParticipantConnectionCommand")
  .f(void 0, CreateParticipantConnectionResponseFilterSensitiveLog)
  .ser(se_CreateParticipantConnectionCommand)
  .de(de_CreateParticipantConnectionCommand)
  .build() {
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
