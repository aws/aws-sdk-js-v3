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
  GetLendingAnalysisSummaryRequest,
  GetLendingAnalysisSummaryRequestFilterSensitiveLog,
  GetLendingAnalysisSummaryResponse,
  GetLendingAnalysisSummaryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetLendingAnalysisSummaryCommand,
  serializeAws_json1_1GetLendingAnalysisSummaryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface GetLendingAnalysisSummaryCommandInput extends GetLendingAnalysisSummaryRequest {}
export interface GetLendingAnalysisSummaryCommandOutput extends GetLendingAnalysisSummaryResponse, __MetadataBearer {}

/**
 * <p>Gets summarized results for the <code>StartLendingAnalysis</code> operation, which analyzes
 *    text in a lending document. The returned summary consists of information about documents grouped
 *    together by a common document type. Information like detected signatures, page numbers, and split
 *    documents is returned with respect to the type of grouped document. </p>
 *          <p>You start asynchronous text analysis by calling <code>StartLendingAnalysis</code>, which
 *    returns a job identifier (<code>JobId</code>). When the text analysis operation finishes, Amazon
 *    Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 *    topic that's registered in the initial call to <code>StartLendingAnalysis</code>. </p>
 *          <p>To get the results of the text analysis operation, first check that the status value
 *    published to the Amazon SNS topic is SUCCEEDED. If so, call
 *     <code>GetLendingAnalysisSummary</code>, and pass the job identifier (<code>JobId</code>) from
 *    the initial call to <code>StartLendingAnalysis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetLendingAnalysisSummaryCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetLendingAnalysisSummaryCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new GetLendingAnalysisSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLendingAnalysisSummaryCommandInput} for command's `input` shape.
 * @see {@link GetLendingAnalysisSummaryCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class GetLendingAnalysisSummaryCommand extends $Command<
  GetLendingAnalysisSummaryCommandInput,
  GetLendingAnalysisSummaryCommandOutput,
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

  constructor(readonly input: GetLendingAnalysisSummaryCommandInput) {
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
  ): Handler<GetLendingAnalysisSummaryCommandInput, GetLendingAnalysisSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLendingAnalysisSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetLendingAnalysisSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLendingAnalysisSummaryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLendingAnalysisSummaryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLendingAnalysisSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLendingAnalysisSummaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLendingAnalysisSummaryCommandOutput> {
    return deserializeAws_json1_1GetLendingAnalysisSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
