import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EnableLoggingMessage, LoggingStatus } from "../models/models_0";
import {
  deserializeAws_queryEnableLoggingCommand,
  serializeAws_queryEnableLoggingCommand,
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

export type EnableLoggingCommandInput = EnableLoggingMessage;
export type EnableLoggingCommandOutput = LoggingStatus & __MetadataBearer;

/**
 * <p>Starts logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 */
export class EnableLoggingCommand extends $Command<
  EnableLoggingCommandInput,
  EnableLoggingCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableLoggingCommandInput) {
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
  ): Handler<EnableLoggingCommandInput, EnableLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "EnableLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableLoggingMessage.filterSensitiveLog,
      outputFilterSensitiveLog: LoggingStatus.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableLoggingCommandOutput> {
    return deserializeAws_queryEnableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
