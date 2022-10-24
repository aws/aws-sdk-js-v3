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
  StartExpenseAnalysisRequest,
  StartExpenseAnalysisRequestFilterSensitiveLog,
  StartExpenseAnalysisResponse,
  StartExpenseAnalysisResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartExpenseAnalysisCommand,
  serializeAws_json1_1StartExpenseAnalysisCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface StartExpenseAnalysisCommandInput extends StartExpenseAnalysisRequest {}
export interface StartExpenseAnalysisCommandOutput extends StartExpenseAnalysisResponse, __MetadataBearer {}

/**
 * <p>Starts the asynchronous analysis of invoices or receipts for data like contact information,
 *    items purchased, and vendor names.</p>
 *
 *          <p>
 *             <code>StartExpenseAnalysis</code> can analyze text in documents that are in JPEG, PNG, and
 *    PDF format. The documents must be stored in an Amazon S3 bucket. Use the <a>DocumentLocation</a> parameter to specify the name of your S3 bucket and the name of the
 *    document in that bucket. </p>
 *          <p>
 *             <code>StartExpenseAnalysis</code> returns a job identifier (<code>JobId</code>) that you
 *    will provide to <code>GetExpenseAnalysis</code> to retrieve the results of the operation. When
 *    the analysis of the input invoices/receipts is finished, Amazon Textract publishes a completion
 *    status to the Amazon Simple Notification Service (Amazon SNS) topic that you provide to the <code>NotificationChannel</code>.
 *    To obtain the results of the invoice and receipt analysis operation, ensure that the status value
 *    published to the Amazon SNS topic is <code>SUCCEEDED</code>. If so, call <a>GetExpenseAnalysis</a>, and pass the job identifier (<code>JobId</code>) that was
 *    returned by your call to <code>StartExpenseAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/invoice-receipts.html">Analyzing Invoices and Receipts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartExpenseAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartExpenseAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new StartExpenseAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExpenseAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartExpenseAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class StartExpenseAnalysisCommand extends $Command<
  StartExpenseAnalysisCommandInput,
  StartExpenseAnalysisCommandOutput,
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

  constructor(readonly input: StartExpenseAnalysisCommandInput) {
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
  ): Handler<StartExpenseAnalysisCommandInput, StartExpenseAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExpenseAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "StartExpenseAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExpenseAnalysisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartExpenseAnalysisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExpenseAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartExpenseAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExpenseAnalysisCommandOutput> {
    return deserializeAws_json1_1StartExpenseAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
