import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CopyImageRequest, CopyImageResponse } from "../models/models_0";
import { deserializeAws_json1_1CopyImageCommand, serializeAws_json1_1CopyImageCommand } from "../protocols/Aws_json1_1";
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

export type CopyImageCommandInput = CopyImageRequest;
export type CopyImageCommandOutput = CopyImageResponse & __MetadataBearer;

/**
 * <p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>
 */
export class CopyImageCommand extends $Command<
  CopyImageCommandInput,
  CopyImageCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyImageCommandInput, CopyImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CopyImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyImageCommandOutput> {
    return deserializeAws_json1_1CopyImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
