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
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionRequestFilterSensitiveLog,
  GetDocumentTextDetectionResponse,
  GetDocumentTextDetectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetDocumentTextDetectionCommand,
  serializeAws_json1_1GetDocumentTextDetectionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface GetDocumentTextDetectionCommandInput extends GetDocumentTextDetectionRequest {}
export interface GetDocumentTextDetectionCommandOutput extends GetDocumentTextDetectionResponse, __MetadataBearer {}

/**
 * <p>Gets the results for an Amazon Textract asynchronous operation that detects text in a document.
 *      Amazon Textract can detect lines of text and the words that make up a line of text.</p>
 *          <p>You start asynchronous text detection by calling <a>StartDocumentTextDetection</a>, which returns a job identifier
 *             (<code>JobId</code>). When the text detection operation finishes, Amazon Textract publishes a
 *          completion status to the Amazon Simple Notification Service (Amazon SNS) topic that's registered in the initial call to
 *             <code>StartDocumentTextDetection</code>. To get the results of the text-detection
 *          operation, first check that the status value published to the Amazon SNS topic is
 *             <code>SUCCEEDED</code>. If so, call <code>GetDocumentTextDetection</code>, and pass the
 *          job identifier (<code>JobId</code>) from the initial call to
 *             <code>StartDocumentTextDetection</code>.</p>
 *          <p>
 *             <code>GetDocumentTextDetection</code> returns an array of <a>Block</a>
 *          objects. </p>
 *          <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object
 *         is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is
 *         a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p>
 *
 *          <p>Use the MaxResults parameter to limit the number of blocks that are returned. If there
 *          are more results than specified in <code>MaxResults</code>, the value of
 *             <code>NextToken</code> in the operation response contains a pagination token for getting
 *          the next set of results. To get the next page of results, call
 *             <code>GetDocumentTextDetection</code>, and populate the <code>NextToken</code> request
 *          parameter with the token value that's returned from the previous call to
 *             <code>GetDocumentTextDetection</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, GetDocumentTextDetectionCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, GetDocumentTextDetectionCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new GetDocumentTextDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentTextDetectionCommandInput} for command's `input` shape.
 * @see {@link GetDocumentTextDetectionCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class GetDocumentTextDetectionCommand extends $Command<
  GetDocumentTextDetectionCommandInput,
  GetDocumentTextDetectionCommandOutput,
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

  constructor(readonly input: GetDocumentTextDetectionCommandInput) {
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
  ): Handler<GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDocumentTextDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "GetDocumentTextDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDocumentTextDetectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDocumentTextDetectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDocumentTextDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDocumentTextDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentTextDetectionCommandOutput> {
    return deserializeAws_json1_1GetDocumentTextDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
