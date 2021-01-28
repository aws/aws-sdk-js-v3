import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { EvaluateExpressionInput, EvaluateExpressionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1EvaluateExpressionCommand,
  serializeAws_json1_1EvaluateExpressionCommand,
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

export type EvaluateExpressionCommandInput = EvaluateExpressionInput;
export type EvaluateExpressionCommandOutput = EvaluateExpressionOutput & __MetadataBearer;

/**
 * <p>Task runners call <code>EvaluateExpression</code> to evaluate a string in the context of the specified object.
 *             For example, a task runner can evaluate SQL queries stored in Amazon S3.</p>
 */
export class EvaluateExpressionCommand extends $Command<
  EvaluateExpressionCommandInput,
  EvaluateExpressionCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EvaluateExpressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "EvaluateExpressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EvaluateExpressionInput.filterSensitiveLog,
      outputFilterSensitiveLog: EvaluateExpressionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EvaluateExpressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EvaluateExpressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateExpressionCommandOutput> {
    return deserializeAws_json1_1EvaluateExpressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
