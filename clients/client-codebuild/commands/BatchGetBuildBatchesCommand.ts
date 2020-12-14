import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetBuildBatchesInput, BatchGetBuildBatchesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetBuildBatchesCommand,
  serializeAws_json1_1BatchGetBuildBatchesCommand,
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

export type BatchGetBuildBatchesCommandInput = BatchGetBuildBatchesInput;
export type BatchGetBuildBatchesCommandOutput = BatchGetBuildBatchesOutput & __MetadataBearer;

/**
 * <p>Retrieves information about one or more batch builds.</p>
 */
export class BatchGetBuildBatchesCommand extends $Command<
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetBuildBatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetBuildBatchesCommandInput, BatchGetBuildBatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "BatchGetBuildBatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetBuildBatchesInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetBuildBatchesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetBuildBatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetBuildBatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetBuildBatchesCommandOutput> {
    return deserializeAws_json1_1BatchGetBuildBatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
