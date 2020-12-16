import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchDeleteBuildsInput, BatchDeleteBuildsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeleteBuildsCommand,
  serializeAws_json1_1BatchDeleteBuildsCommand,
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

export type BatchDeleteBuildsCommandInput = BatchDeleteBuildsInput;
export type BatchDeleteBuildsCommandOutput = BatchDeleteBuildsOutput & __MetadataBearer;

/**
 * <p>Deletes one or more builds.</p>
 */
export class BatchDeleteBuildsCommand extends $Command<
  BatchDeleteBuildsCommandInput,
  BatchDeleteBuildsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteBuildsCommandInput) {
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
  ): Handler<BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "BatchDeleteBuildsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteBuildsInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteBuildsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteBuildsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeleteBuildsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteBuildsCommandOutput> {
    return deserializeAws_json1_1BatchDeleteBuildsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
