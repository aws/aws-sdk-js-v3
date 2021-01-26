import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { BatchDeleteWorldsRequest, BatchDeleteWorldsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteWorldsCommand,
  serializeAws_restJson1BatchDeleteWorldsCommand,
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

export type BatchDeleteWorldsCommandInput = BatchDeleteWorldsRequest;
export type BatchDeleteWorldsCommandOutput = BatchDeleteWorldsResponse & __MetadataBearer;

/**
 * <p>Deletes one or more worlds in a batch operation.</p>
 */
export class BatchDeleteWorldsCommand extends $Command<
  BatchDeleteWorldsCommandInput,
  BatchDeleteWorldsCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteWorldsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "BatchDeleteWorldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteWorldsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteWorldsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteWorldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteWorldsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteWorldsCommandOutput> {
    return deserializeAws_restJson1BatchDeleteWorldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
