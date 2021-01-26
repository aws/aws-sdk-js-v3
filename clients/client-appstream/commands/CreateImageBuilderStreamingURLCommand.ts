import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateImageBuilderStreamingURLRequest, CreateImageBuilderStreamingURLResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateImageBuilderStreamingURLCommand,
  serializeAws_json1_1CreateImageBuilderStreamingURLCommand,
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

export type CreateImageBuilderStreamingURLCommandInput = CreateImageBuilderStreamingURLRequest;
export type CreateImageBuilderStreamingURLCommandOutput = CreateImageBuilderStreamingURLResult & __MetadataBearer;

/**
 * <p>Creates a URL to start an image builder streaming session.</p>
 */
export class CreateImageBuilderStreamingURLCommand extends $Command<
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateImageBuilderStreamingURLCommandInput) {
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
  ): Handler<CreateImageBuilderStreamingURLCommandInput, CreateImageBuilderStreamingURLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateImageBuilderStreamingURLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImageBuilderStreamingURLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateImageBuilderStreamingURLResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateImageBuilderStreamingURLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateImageBuilderStreamingURLCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateImageBuilderStreamingURLCommandOutput> {
    return deserializeAws_json1_1CreateImageBuilderStreamingURLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
