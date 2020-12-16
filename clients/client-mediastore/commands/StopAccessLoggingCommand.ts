import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { StopAccessLoggingInput, StopAccessLoggingOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopAccessLoggingCommand,
  serializeAws_json1_1StopAccessLoggingCommand,
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

export type StopAccessLoggingCommandInput = StopAccessLoggingInput;
export type StopAccessLoggingCommandOutput = StopAccessLoggingOutput & __MetadataBearer;

/**
 * <p>Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.</p>
 */
export class StopAccessLoggingCommand extends $Command<
  StopAccessLoggingCommandInput,
  StopAccessLoggingCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopAccessLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "StopAccessLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopAccessLoggingInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopAccessLoggingOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopAccessLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopAccessLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopAccessLoggingCommandOutput> {
    return deserializeAws_json1_1StopAccessLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
