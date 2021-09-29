import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DisassociateConnectorRequest, DisassociateConnectorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateConnectorCommand,
  serializeAws_json1_1DisassociateConnectorCommand,
} from "../protocols/Aws_json1_1";
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

export interface DisassociateConnectorCommandInput extends DisassociateConnectorRequest {}
export interface DisassociateConnectorCommandOutput extends DisassociateConnectorResponse, __MetadataBearer {}

/**
 * <p>Disassociates the specified connector from AWS SMS.</p>
 *         <p>After you disassociate a connector, it is no longer available to support
 *             replication jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DisassociateConnectorCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DisassociateConnectorCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DisassociateConnectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectorCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectorCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateConnectorCommand extends $Command<
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateConnectorCommandInput, DisassociateConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "DisassociateConnectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateConnectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateConnectorCommandOutput> {
    return deserializeAws_json1_1DisassociateConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
