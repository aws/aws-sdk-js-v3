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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { StartChatContactRequest, StartChatContactResponse } from "../models/models_1";
import { de_StartChatContactCommand, se_StartChatContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Initiates a flow to start a new chat for the customer. Response of this API provides a token
 *    required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p>
 *          <p>When a new chat contact is successfully created, clients must subscribe to the participant’s
 *    connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
 *          <p>A 429 error occurs in the following situations:</p>
 *          <ul>
 *             <li>
 *                <p>API rate limit is exceeded. API TPS throttling returns a <code>TooManyRequests</code>
 *      exception.</p>
 *             </li>
 *             <li>
 *                <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">quota for concurrent active
 *       chats</a> is exceeded. Active chat throttling returns a
 *       <code>LimitExceededException</code>.</p>
 *             </li>
 *          </ul>
 *          <p>If you use the <code>ChatDurationInMinutes</code> parameter and receive a 400 error, your
 *    account may not support the ability to configure custom chat durations. For more information,
 *    contact Amazon Web Services Support. </p>
 *          <p>For more information about chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat.html">Chat</a> in the <i>Amazon Connect
 *     Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartChatContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartChatContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
 * };
 * const command = new StartChatContactCommand(input);
 * const response = await client.send(command);
 * // { // StartChatContactResponse
 * //   ContactId: "STRING_VALUE",
 * //   ParticipantId: "STRING_VALUE",
 * //   ParticipantToken: "STRING_VALUE",
 * //   ContinuedFromContactId: "STRING_VALUE",
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
 */
export class StartChatContactCommand extends $Command<
  StartChatContactCommandInput,
  StartChatContactCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: StartChatContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartChatContactCommandInput, StartChatContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartChatContactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartChatContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "StartChatContact",
      },
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
  private serialize(input: StartChatContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartChatContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartChatContactCommandOutput> {
    return de_StartChatContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
