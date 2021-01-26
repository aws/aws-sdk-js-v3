import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DisableLoggingMessage, LoggingStatus } from "../models/models_0";
import {
  deserializeAws_queryDisableLoggingCommand,
  serializeAws_queryDisableLoggingCommand,
} from "../protocols/Aws_query";
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

export type DisableLoggingCommandInput = DisableLoggingMessage;
export type DisableLoggingCommandOutput = LoggingStatus & __MetadataBearer;

/**
 * <p>Stops logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 */
export class DisableLoggingCommand extends $Command<
  DisableLoggingCommandInput,
  DisableLoggingCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableLoggingCommandInput, DisableLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DisableLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableLoggingMessage.filterSensitiveLog,
      outputFilterSensitiveLog: LoggingStatus.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableLoggingCommandOutput> {
    return deserializeAws_queryDisableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
