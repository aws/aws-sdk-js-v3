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

export type DisassociateConnectorCommandInput = DisassociateConnectorRequest;
export type DisassociateConnectorCommandOutput = DisassociateConnectorResponse & __MetadataBearer;

/**
 * <p>Disassociates the specified connector from AWS SMS.</p>
 *         <p>After you disassociate a connector, it is no longer available to support
 *             replication jobs.</p>
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
