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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { CreateChatTokenRequest, CreateChatTokenResponse } from "../models/models_0";
import { de_CreateChatTokenCommand, se_CreateChatTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateChatTokenCommand}.
 */
export interface CreateChatTokenCommandInput extends CreateChatTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateChatTokenCommand}.
 */
export interface CreateChatTokenCommandOutput extends CreateChatTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an encrypted token that is used by a chat participant to establish an individual
 *          WebSocket chat connection to a room. When the token is used to connect to chat, the
 *          connection is valid for the session duration specified in the request. The token becomes
 *          invalid at the token-expiration timestamp included in the response.</p>
 *          <p>Use the <code>capabilities</code> field to permit an end user to send messages or
 *          moderate a room.</p>
 *          <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is
 *          included within each message sent by the end user and received by other participants in the
 *          room. Common use cases for attributes include passing end-user profile data like an icon,
 *          display name, colors, badges, and other display features.</p>
 *          <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, CreateChatTokenCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, CreateChatTokenCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const input = { // CreateChatTokenRequest
 *   roomIdentifier: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   capabilities: [ // ChatTokenCapabilities
 *     "STRING_VALUE",
 *   ],
 *   sessionDurationInMinutes: Number("int"),
 *   attributes: { // ChatTokenAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChatTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateChatTokenResponse
 * //   token: "STRING_VALUE",
 * //   tokenExpirationTime: new Date("TIMESTAMP"),
 * //   sessionExpirationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateChatTokenCommandInput - {@link CreateChatTokenCommandInput}
 * @returns {@link CreateChatTokenCommandOutput}
 * @see {@link CreateChatTokenCommandInput} for command's `input` shape.
 * @see {@link CreateChatTokenCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 */
export class CreateChatTokenCommand extends $Command<
  CreateChatTokenCommandInput,
  CreateChatTokenCommandOutput,
  IvschatClientResolvedConfig
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
  constructor(readonly input: CreateChatTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChatTokenCommandInput, CreateChatTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateChatTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "CreateChatTokenCommand";
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
  private serialize(input: CreateChatTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateChatTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChatTokenCommandOutput> {
    return de_CreateChatTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
