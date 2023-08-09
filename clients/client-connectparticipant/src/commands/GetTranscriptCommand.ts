// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import { de_GetTranscriptCommand, se_GetTranscriptCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves a transcript of the session, including details about any attachments. For
 *             information about accessing past chat contact transcripts for a persistent chat, see
 *                 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p>
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
 * //       ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM",
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
 */
export class GetTranscriptCommand extends $Command<
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
  ConnectParticipantClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetTranscriptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectParticipantClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTranscriptCommandInput, GetTranscriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTranscriptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "GetTranscriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetTranscriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTranscriptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTranscriptCommandOutput> {
    return de_GetTranscriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
