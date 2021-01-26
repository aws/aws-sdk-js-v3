import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { RetryBuildBatchInput, RetryBuildBatchOutput } from "../models/models_0";
import {
  deserializeAws_json1_1RetryBuildBatchCommand,
  serializeAws_json1_1RetryBuildBatchCommand,
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

export type RetryBuildBatchCommandInput = RetryBuildBatchInput;
export type RetryBuildBatchCommandOutput = RetryBuildBatchOutput & __MetadataBearer;

/**
 * <p>Restarts a failed batch build. Only batch builds that have failed can be retried.</p>
 */
export class RetryBuildBatchCommand extends $Command<
  RetryBuildBatchCommandInput,
  RetryBuildBatchCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetryBuildBatchCommandInput) {
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
  ): Handler<RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "RetryBuildBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetryBuildBatchInput.filterSensitiveLog,
      outputFilterSensitiveLog: RetryBuildBatchOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetryBuildBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetryBuildBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetryBuildBatchCommandOutput> {
    return deserializeAws_json1_1RetryBuildBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
