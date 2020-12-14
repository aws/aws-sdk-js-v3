import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteEvaluationResultsRequest, DeleteEvaluationResultsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEvaluationResultsCommand,
  serializeAws_json1_1DeleteEvaluationResultsCommand,
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

export type DeleteEvaluationResultsCommandInput = DeleteEvaluationResultsRequest;
export type DeleteEvaluationResultsCommandOutput = DeleteEvaluationResultsResponse & __MetadataBearer;

/**
 * <p>Deletes the evaluation results for the specified AWS Config
 * 			rule. You can specify one AWS Config rule per request. After you
 * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
 * 			your AWS resources against the rule.</p>
 */
export class DeleteEvaluationResultsCommand extends $Command<
  DeleteEvaluationResultsCommandInput,
  DeleteEvaluationResultsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEvaluationResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteEvaluationResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEvaluationResultsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEvaluationResultsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEvaluationResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEvaluationResultsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEvaluationResultsCommandOutput> {
    return deserializeAws_json1_1DeleteEvaluationResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
