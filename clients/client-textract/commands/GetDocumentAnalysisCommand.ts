import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { GetDocumentAnalysisRequest, GetDocumentAnalysisResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDocumentAnalysisCommand,
  serializeAws_json1_1GetDocumentAnalysisCommand,
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

export type GetDocumentAnalysisCommandInput = GetDocumentAnalysisRequest;
export type GetDocumentAnalysisCommandOutput = GetDocumentAnalysisResponse & __MetadataBearer;

/**
 * <p>Gets the results for an Amazon Textract asynchronous operation that analyzes text in a document.</p>
 *          <p>You start asynchronous text analysis by calling <a>StartDocumentAnalysis</a>, which returns a job identifier
 *             (<code>JobId</code>). When the text analysis operation finishes, Amazon Textract publishes a
 *          completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to
 *             <code>StartDocumentAnalysis</code>. To get the results of the text-detection operation,
 *          first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *          If so, call <code>GetDocumentAnalysis</code>, and pass the job identifier
 *             (<code>JobId</code>) from the initial call to <code>StartDocumentAnalysis</code>.</p>
 *          <p>
 *             <code>GetDocumentAnalysis</code> returns an array of <a>Block</a> objects. The following
 *          types of information are returned: </p>
 *          <ul>
 *             <li>
 *                <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY
 *             <code>Block</code> object and a VALUE <code>Block</code> object. For example,
 *             <i>Name: Ana Silva Carolina</i> contains a key and value.
 *             <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is
 *             the value.</p>
 *             </li>
 *             <li>
 *                <p>Table and table cell data. A TABLE <code>Block</code> object contains information about a detected table. A CELL
 *             <code>Block</code> object is returned for each cell in a table.</p>
 *             </li>
 *             <li>
 *                <p>Lines and words of text. A LINE <code>Block</code> object contains one or more WORD <code>Block</code> objects.
 *             All lines and words that are detected in the document are returned (including text that doesn't have a
 *             relationship with the value of the <code>StartDocumentAnalysis</code>
 *                   <code>FeatureTypes</code> input parameter). </p>
 *             </li>
 *          </ul>
 *
 *          <p>Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables.
 *          A SELECTION_ELEMENT <code>Block</code> object contains information about a selection element,
 *          including the selection status.</p>
 *
 *
 *
 *          <p>Use the <code>MaxResults</code> parameter to limit the number of blocks that are
 *          returned. If there are more results than specified in <code>MaxResults</code>, the value of
 *             <code>NextToken</code> in the operation response contains a pagination token for getting
 *          the next set of results. To get the next page of results, call
 *             <code>GetDocumentAnalysis</code>, and populate the <code>NextToken</code> request
 *          parameter with the token value that's returned from the previous call to
 *             <code>GetDocumentAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
 */
export class GetDocumentAnalysisCommand extends $Command<
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput,
  TextractClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDocumentAnalysisCommandInput) {
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
  ): Handler<GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetDocumentAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDocumentAnalysisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDocumentAnalysisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDocumentAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDocumentAnalysisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentAnalysisCommandOutput> {
    return deserializeAws_json1_1GetDocumentAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
