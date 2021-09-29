import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateAgentStatusRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAgentStatusCommand,
  serializeAws_restJson1UpdateAgentStatusCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateAgentStatusCommandInput extends UpdateAgentStatusRequest {}
export interface UpdateAgentStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates agent status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateAgentStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateAgentStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateAgentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAgentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAgentStatusCommand extends $Command<
  UpdateAgentStatusCommandInput,
  UpdateAgentStatusCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAgentStatusCommandInput) {
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
  ): Handler<UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateAgentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAgentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAgentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAgentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAgentStatusCommandOutput> {
    return deserializeAws_restJson1UpdateAgentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
