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
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisRequestFilterSensitiveLog,
  StartDocumentAnalysisResponse,
  StartDocumentAnalysisResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartDocumentAnalysisCommand,
  serializeAws_json1_1StartDocumentAnalysisCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface StartDocumentAnalysisCommandInput extends StartDocumentAnalysisRequest {}
export interface StartDocumentAnalysisCommandOutput extends StartDocumentAnalysisResponse, __MetadataBearer {}

/**
 * <p>Starts the asynchronous analysis of an input document for relationships between detected
 *          items such as key-value pairs, tables, and selection elements.</p>
 *
 *          <p>
 *             <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, TIFF, and PDF format. The
 *          documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name
 *          of the document.
 *          </p>
 *          <p>
 *             <code>StartDocumentAnalysis</code> returns a job identifier
 *             (<code>JobId</code>) that you use to get the results of the operation. When text
 *          analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 *          topic that you specify in <code>NotificationChannel</code>. To get the results of the text
 *          analysis operation, first check that the status value published to the Amazon SNS topic is
 *             <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass
 *          the job identifier (<code>JobId</code>) from the initial call to
 *             <code>StartDocumentAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartDocumentAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartDocumentAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new StartDocumentAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDocumentAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartDocumentAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class StartDocumentAnalysisCommand extends $Command<
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
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

  constructor(readonly input: StartDocumentAnalysisCommandInput) {
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
  ): Handler<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDocumentAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "StartDocumentAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDocumentAnalysisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDocumentAnalysisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDocumentAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDocumentAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDocumentAnalysisCommandOutput> {
    return deserializeAws_json1_1StartDocumentAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
