// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  DisconnectUserRequest,
  DisconnectUserRequestFilterSensitiveLog,
  DisconnectUserResponse,
  DisconnectUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisconnectUserCommand,
  serializeAws_restJson1DisconnectUserCommand,
} from "../protocols/Aws_restJson1";

export interface DisconnectUserCommandInput extends DisconnectUserRequest {}
export interface DisconnectUserCommandOutput extends DisconnectUserResponse, __MetadataBearer {}

/**
 * <p>Disconnects all connections using a specified user ID from a room. This replicates the
 *             <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html">
 *             DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DisconnectUserCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DisconnectUserCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const command = new DisconnectUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectUserCommandInput} for command's `input` shape.
 * @see {@link DisconnectUserCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 */
export class DisconnectUserCommand extends $Command<
  DisconnectUserCommandInput,
  DisconnectUserCommandOutput,
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

  constructor(readonly input: DisconnectUserCommandInput) {
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
  ): Handler<DisconnectUserCommandInput, DisconnectUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisconnectUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "DisconnectUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisconnectUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisconnectUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectUserCommandOutput> {
    return deserializeAws_restJson1DisconnectUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
