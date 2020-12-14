import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { BatchGetTracesRequest, BatchGetTracesResult } from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetTracesCommand,
  serializeAws_restJson1BatchGetTracesCommand,
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

export type BatchGetTracesCommandInput = BatchGetTracesRequest;
export type BatchGetTracesCommandOutput = BatchGetTracesResult & __MetadataBearer;

/**
 * <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 */
export class BatchGetTracesCommand extends $Command<
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetTracesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetTracesCommandInput, BatchGetTracesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "BatchGetTracesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetTracesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetTracesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetTracesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetTracesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetTracesCommandOutput> {
    return deserializeAws_restJson1BatchGetTracesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
