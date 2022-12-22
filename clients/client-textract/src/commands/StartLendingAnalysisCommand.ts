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

import {
  StartLendingAnalysisRequest,
  StartLendingAnalysisRequestFilterSensitiveLog,
  StartLendingAnalysisResponse,
  StartLendingAnalysisResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartLendingAnalysisCommand,
  serializeAws_json1_1StartLendingAnalysisCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface StartLendingAnalysisCommandInput extends StartLendingAnalysisRequest {}
export interface StartLendingAnalysisCommandOutput extends StartLendingAnalysisResponse, __MetadataBearer {}

/**
 * <p>Starts the classification and analysis of an input document.
 *     <code>StartLendingAnalysis</code> initiates the classification and analysis of a packet of
 *    lending documents. <code>StartLendingAnalysis</code> operates on a document file located in an
 *    Amazon S3 bucket.</p>
 *          <p>
 *             <code>StartLendingAnalysis</code> can analyze text in documents that are in one of the
 *    following formats: JPEG, PNG, TIFF, PDF. Use <code>DocumentLocation</code> to specify the bucket
 *    name and the file name of the document. </p>
 *          <p>
 *             <code>StartLendingAnalysis</code> returns a job identifier (<code>JobId</code>) that you use
 *    to get the results of the operation. When the text analysis is finished, Amazon Textract
 *    publishes a completion status to the Amazon Simple Notification Service (Amazon SNS) topic that
 *    you specify in <code>NotificationChannel</code>. To get the results of the text analysis
 *    operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If
 *    the status is SUCCEEDED you can call either <code>GetLendingAnalysis</code> or
 *     <code>GetLendingAnalysisSummary</code> and provide the <code>JobId</code> to obtain the results
 *    of the analysis.</p>
 *          <p>If using <code>OutputConfig</code> to specify an Amazon S3 bucket, the output will be contained
 *    within the specified prefix in a directory labeled with the job-id. In the directory there are 3
 *    sub-directories: </p>
 *          <ul>
 *             <li>
 *                <p>detailedResponse (contains the GetLendingAnalysis response)</p>
 *             </li>
 *             <li>
 *                <p>summaryResponse (for the GetLendingAnalysisSummary response)</p>
 *             </li>
 *             <li>
 *                <p>splitDocuments (documents split across logical boundaries)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartLendingAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartLendingAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new StartLendingAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLendingAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartLendingAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class StartLendingAnalysisCommand extends $Command<
  StartLendingAnalysisCommandInput,
  StartLendingAnalysisCommandOutput,
  TextractClientResolvedConfig
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

  constructor(readonly input: StartLendingAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TextractClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartLendingAnalysisCommandInput, StartLendingAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartLendingAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "StartLendingAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartLendingAnalysisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartLendingAnalysisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartLendingAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartLendingAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartLendingAnalysisCommandOutput> {
    return deserializeAws_json1_1StartLendingAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
