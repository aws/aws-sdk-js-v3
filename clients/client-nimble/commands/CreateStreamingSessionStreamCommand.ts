import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { CreateStreamingSessionStreamRequest, CreateStreamingSessionStreamResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateStreamingSessionStreamCommand,
  serializeAws_restJson1CreateStreamingSessionStreamCommand,
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

export interface CreateStreamingSessionStreamCommandInput extends CreateStreamingSessionStreamRequest {}
export interface CreateStreamingSessionStreamCommandOutput
  extends CreateStreamingSessionStreamResponse,
    __MetadataBearer {}

/**
 * <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
 */
export class CreateStreamingSessionStreamCommand extends $Command<
  CreateStreamingSessionStreamCommandInput,
  CreateStreamingSessionStreamCommandOutput,
  NimbleClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStreamingSessionStreamCommandInput) {
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
  ): Handler<CreateStreamingSessionStreamCommandInput, CreateStreamingSessionStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateStreamingSessionStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamingSessionStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingSessionStreamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamingSessionStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateStreamingSessionStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStreamingSessionStreamCommandOutput> {
    return deserializeAws_restJson1CreateStreamingSessionStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
