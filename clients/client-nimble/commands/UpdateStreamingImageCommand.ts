import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { UpdateStreamingImageRequest, UpdateStreamingImageResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateStreamingImageCommand,
  serializeAws_restJson1UpdateStreamingImageCommand,
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

export interface UpdateStreamingImageCommandInput extends UpdateStreamingImageRequest {}
export interface UpdateStreamingImageCommandOutput extends UpdateStreamingImageResponse, __MetadataBearer {}

/**
 * <p>Update streaming image.</p>
 */
export class UpdateStreamingImageCommand extends $Command<
  UpdateStreamingImageCommandInput,
  UpdateStreamingImageCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStreamingImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStreamingImageCommandInput, UpdateStreamingImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "UpdateStreamingImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStreamingImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStreamingImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStreamingImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateStreamingImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStreamingImageCommandOutput> {
    return deserializeAws_restJson1UpdateStreamingImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
