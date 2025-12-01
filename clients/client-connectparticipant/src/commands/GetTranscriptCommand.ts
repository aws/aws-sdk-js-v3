// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import { GetTranscript } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTranscriptCommand}.
 */
export interface GetTranscriptCommandInput extends GetTranscriptRequest {}
/**
 * @public
 *
 * The output of {@link GetTranscriptCommand}.
 */
export interface GetTranscriptCommandOutput extends GetTranscriptResponse, __MetadataBearer {}

/**
 * <p>Retrieves a transcript of the session, including details about any attachments. For
 *             information about accessing past chat contact transcripts for a persistent chat, see
 *                 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p>
 *          <p>For security recommendations, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat">Amazon Connect Chat security best practices</a>. </p>
 *          <p>If you have a process that consumes events in the transcript of an chat that has
 *             ended, note that chat transcripts contain the following event content types if the event
 *             has occurred during the chat session:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>application/vnd.amazonaws.connect.event.participant.invited</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application/vnd.amazonaws.connect.event.participant.joined</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application/vnd.amazonaws.connect.event.participant.left</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application/vnd.amazonaws.connect.event.chat.ended</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application/vnd.amazonaws.connect.event.transfer.succeeded</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>application/vnd.amazonaws.connect.event.transfer.failed</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *                <code>ConnectionToken</code> is used for invoking this API instead of
 *                     <code>ParticipantToken</code>.</p>
 *          </note>
 *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetTranscriptCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetTranscriptCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * // import type { ConnectParticipantClientConfig } from "@aws-sdk/client-connectparticipant";
 * const config = {}; // type is ConnectParticipantClientConfig
 * const client = new ConnectParticipantClient(config);
 * const input = { // GetTranscriptRequest
 *   ContactId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ScanDirection: "FORWARD" || "BACKWARD",
 *   SortOrder: "DESCENDING" || "ASCENDING",
 *   StartPosition: { // StartPosition
 *     Id: "STRING_VALUE",
 *     AbsoluteTime: "STRING_VALUE",
 *     MostRecent: Number("int"),
 *   },
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new GetTranscriptCommand(input);
 * const response = await client.send(command);
 * // { // GetTranscriptResponse
 * //   InitialContactId: "STRING_VALUE",
 * //   Transcript: [ // Transcript
 * //     { // Item
 * //       AbsoluteTime: "STRING_VALUE",
 * //       Content: "STRING_VALUE",
 * //       ContentType: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Type: "TYPING" || "PARTICIPANT_JOINED" || "PARTICIPANT_LEFT" || "CHAT_ENDED" || "TRANSFER_SUCCEEDED" || "TRANSFER_FAILED" || "MESSAGE" || "EVENT" || "ATTACHMENT" || "CONNECTION_ACK" || "MESSAGE_DELIVERED" || "MESSAGE_READ",
 * //       ParticipantId: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR",
 * //       Attachments: [ // Attachments
 * //         { // AttachmentItem
 * //           ContentType: "STRING_VALUE",
 * //           AttachmentId: "STRING_VALUE",
 * //           AttachmentName: "STRING_VALUE",
 * //           Status: "APPROVED" || "REJECTED" || "IN_PROGRESS",
 * //         },
 * //       ],
 * //       MessageMetadata: { // MessageMetadata
 * //         MessageId: "STRING_VALUE",
 * //         Receipts: [ // Receipts
 * //           { // Receipt
 * //             DeliveredTimestamp: "STRING_VALUE",
 * //             ReadTimestamp: "STRING_VALUE",
 * //             RecipientParticipantId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         MessageProcessingStatus: "PROCESSING" || "FAILED" || "REJECTED",
 * //       },
 * //       RelatedContactId: "STRING_VALUE",
 * //       ContactId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTranscriptCommandInput - {@link GetTranscriptCommandInput}
 * @returns {@link GetTranscriptCommandOutput}
 * @see {@link GetTranscriptCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptCommandOutput} for command's `response` shape.
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
export class GetTranscriptCommand extends $Command
  .classBuilder<
    GetTranscriptCommandInput,
    GetTranscriptCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectParticipantServiceLambda", "GetTranscript", {})
  .n("ConnectParticipantClient", "GetTranscriptCommand")
  .sc(GetTranscript)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTranscriptRequest;
      output: GetTranscriptResponse;
    };
    sdk: {
      input: GetTranscriptCommandInput;
      output: GetTranscriptCommandOutput;
    };
  };
}
