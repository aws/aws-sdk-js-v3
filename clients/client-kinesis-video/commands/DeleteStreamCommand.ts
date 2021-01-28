import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DeleteStreamInput, DeleteStreamOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteStreamCommand,
  serializeAws_restJson1DeleteStreamCommand,
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

export type DeleteStreamCommandInput = DeleteStreamInput;
export type DeleteStreamCommandOutput = DeleteStreamOutput & __MetadataBearer;

/**
 * <p>Deletes a Kinesis video stream and the data contained in the stream. </p>
 *         <p>This method marks the stream for deletion, and makes the data in the stream
 *             inaccessible immediately.</p>
 *         <p> </p>
 *         <p> To ensure that you have the latest version of the stream before deleting it, you
 *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
 *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
 *             latest stream version, use the <code>DescribeStream</code> API. </p>
 *         <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code>
 *             action.</p>
 */
export class DeleteStreamCommand extends $Command<
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DeleteStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStreamCommandOutput> {
    return deserializeAws_restJson1DeleteStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
