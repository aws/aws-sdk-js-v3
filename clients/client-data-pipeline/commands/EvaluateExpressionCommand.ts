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
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribePipelines
 * Content-Length: 164
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-08785951KAKJEXAMPLE",
 *         "objectId": "Schedule",
 *         "expression": "Transform started at #{startDateTime} and finished at #{endDateTime}"}
 *
 *             </request>
 *
 *
 *             <response>
 *
 * x-amzn-RequestId: 02870eb7-0736-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 103
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"evaluatedExpression": "Transform started at 2012-12-12T00:00:00 and finished at 2012-12-21T18:00:00"}
 * </response>
 *         </examples>
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
