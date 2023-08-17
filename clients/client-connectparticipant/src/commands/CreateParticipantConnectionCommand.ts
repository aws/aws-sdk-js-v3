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
import { CreateParticipantConnectionRequest, CreateParticipantConnectionResponse } from "../models/models_0";
import {
  de_CreateParticipantConnectionCommand,
  se_CreateParticipantConnectionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates the participant's connection. </p>
 *          <note>
 *             <p>
 *                <code>ParticipantToken</code> is used for invoking this API instead of
 *                     <code>ConnectionToken</code>.</p>
 *          </note>
 *          <p>The participant token is valid for the lifetime of the participant – until they are
 *             part of a contact.</p>
 *          <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s.
 *             Clients must manually connect to the returned websocket URL and subscribe to the desired
 *             topic. </p>
 *          <p>For chat, you need to publish the following on the established websocket
 *             connection:</p>
 *          <p>
 *             <code>\{"topic":"aws/subscribe","content":\{"topics":["aws/chat"]\}\}</code>
 *          </p>
 *          <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
 *             clients need to call this API again to obtain a new websocket URL and perform the same
 *             steps as before.</p>
 *          <p>
 *             <b>Message streaming support</b>: This API can also be used
 *             together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat
 *             contacts that are not using a websocket. For more information about message streaming,
 *                 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat
 *                 message streaming</a> in the <i>Amazon Connect Administrator
 *             Guide</i>.</p>
 *          <p>
 *             <b>Feature specifications</b>: For information about feature
 *             specifications, such as the allowed number of open websocket connections per
 *             participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator
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
 * const client = new ConnectParticipantClient(config);
 * const input = { // CreateParticipantConnectionRequest
 *   Type: [ // ConnectionTypeList
 *     "WEBSOCKET" || "CONNECTION_CREDENTIALS",
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
 */
export class CreateParticipantConnectionCommand extends $Command<
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
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
  constructor(readonly input: CreateParticipantConnectionCommandInput) {
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
  ): Handler<CreateParticipantConnectionCommandInput, CreateParticipantConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateParticipantConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectParticipantClient";
    const commandName = "CreateParticipantConnectionCommand";
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
  private serialize(input: CreateParticipantConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateParticipantConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateParticipantConnectionCommandOutput> {
    return de_CreateParticipantConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
