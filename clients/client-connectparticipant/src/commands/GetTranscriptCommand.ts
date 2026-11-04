// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import { GetTranscript$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see [Enable persistent chat](https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html).
 *
 * For security recommendations, see [Connect Customer Chat security best practices](https://docs.aws.amazon.com/connect/latest/adminguide/security-best-practices.html#bp-security-chat).
 *
 * If you have a process that consumes events in the transcript of an chat that has ended, note that chat transcripts contain the following event content types if the event has occurred during the chat session:
 *
 * - `application/vnd.amazonaws.connect.event.participant.invited`
 * - `application/vnd.amazonaws.connect.event.participant.joined`
 * - `application/vnd.amazonaws.connect.event.participant.left`
 * - `application/vnd.amazonaws.connect.event.chat.ended`
 * - `application/vnd.amazonaws.connect.event.transfer.succeeded`
 * - `application/vnd.amazonaws.connect.event.transfer.failed`
 *
 * > **Note:** `ConnectionToken` is used for invoking this API instead of `ParticipantToken`.
 *
 * The Amazon Connect Participant Service APIs do not use [Signature Version 4 authentication](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 *
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
export class GetTranscriptCommand extends command<GetTranscriptCommandInput, GetTranscriptCommandOutput>(
  _ep0,
  _mw0,
  "GetTranscript",
  GetTranscript$
) {
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
