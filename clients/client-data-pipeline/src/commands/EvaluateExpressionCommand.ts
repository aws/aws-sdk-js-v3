// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import {
  EvaluateExpressionInput,
  EvaluateExpressionInputFilterSensitiveLog,
  EvaluateExpressionOutput,
  EvaluateExpressionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EvaluateExpressionCommand,
  serializeAws_json1_1EvaluateExpressionCommand,
} from "../protocols/Aws_json1_1";

export interface EvaluateExpressionCommandInput extends EvaluateExpressionInput {}
export interface EvaluateExpressionCommandOutput extends EvaluateExpressionOutput, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, EvaluateExpressionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, EvaluateExpressionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new EvaluateExpressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EvaluateExpressionCommandInput} for command's `input` shape.
 * @see {@link EvaluateExpressionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class EvaluateExpressionCommand extends $Command<
  EvaluateExpressionCommandInput,
  EvaluateExpressionCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EvaluateExpressionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "EvaluateExpressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EvaluateExpressionInputFilterSensitiveLog,
      outputFilterSensitiveLog: EvaluateExpressionOutputFilterSensitiveLog,
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
