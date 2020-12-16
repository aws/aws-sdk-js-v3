import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { BatchGetChannelRequest, BatchGetChannelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetChannelCommand,
  serializeAws_restJson1BatchGetChannelCommand,
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

export type BatchGetChannelCommandInput = BatchGetChannelRequest;
export type BatchGetChannelCommandOutput = BatchGetChannelResponse & __MetadataBearer;

/**
 * <p>Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p>
 */
export class BatchGetChannelCommand extends $Command<
  BatchGetChannelCommandInput,
  BatchGetChannelCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetChannelCommandInput, BatchGetChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "BatchGetChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetChannelCommandOutput> {
    return deserializeAws_restJson1BatchGetChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
