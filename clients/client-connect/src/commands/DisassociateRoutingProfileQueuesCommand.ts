import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociateRoutingProfileQueuesRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand,
  serializeAws_restJson1DisassociateRoutingProfileQueuesCommand,
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

export interface DisassociateRoutingProfileQueuesCommandInput extends DisassociateRoutingProfileQueuesRequest {}
export interface DisassociateRoutingProfileQueuesCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a set of queues from a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link DisassociateRoutingProfileQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateRoutingProfileQueuesCommand extends $Command<
  DisassociateRoutingProfileQueuesCommandInput,
  DisassociateRoutingProfileQueuesCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateRoutingProfileQueuesCommandInput) {
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
  ): Handler<DisassociateRoutingProfileQueuesCommandInput, DisassociateRoutingProfileQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DisassociateRoutingProfileQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateRoutingProfileQueuesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateRoutingProfileQueuesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateRoutingProfileQueuesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateRoutingProfileQueuesCommandOutput> {
    return deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
