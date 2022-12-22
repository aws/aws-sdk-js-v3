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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  UpdateParticipantRoleConfigRequest,
  UpdateParticipantRoleConfigRequestFilterSensitiveLog,
  UpdateParticipantRoleConfigResponse,
  UpdateParticipantRoleConfigResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateParticipantRoleConfigCommand,
  serializeAws_restJson1UpdateParticipantRoleConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateParticipantRoleConfigCommandInput extends UpdateParticipantRoleConfigRequest {}
export interface UpdateParticipantRoleConfigCommandOutput
  extends UpdateParticipantRoleConfigResponse,
    __MetadataBearer {}

/**
 * <p>Updates timeouts for when human chat participants are to be considered idle, and when agents
 *    are automatically disconnected from a chat due to idleness. You can set four timers:</p>
 *          <ul>
 *             <li>
 *                <p>Customer idle timeout</p>
 *             </li>
 *             <li>
 *                <p>Customer auto-disconnect timeout</p>
 *             </li>
 *             <li>
 *                <p>Agent idle timeout</p>
 *             </li>
 *             <li>
 *                <p>Agent auto-disconnect timeout</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateParticipantRoleConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateParticipantRoleConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateParticipantRoleConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateParticipantRoleConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateParticipantRoleConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdateParticipantRoleConfigCommand extends $Command<
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
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

  constructor(readonly input: UpdateParticipantRoleConfigCommandInput) {
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
  ): Handler<UpdateParticipantRoleConfigCommandInput, UpdateParticipantRoleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateParticipantRoleConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateParticipantRoleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateParticipantRoleConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateParticipantRoleConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateParticipantRoleConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateParticipantRoleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateParticipantRoleConfigCommandOutput> {
    return deserializeAws_restJson1UpdateParticipantRoleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
