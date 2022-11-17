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
  AnalyzeDocumentRequest,
  AnalyzeDocumentRequestFilterSensitiveLog,
  AnalyzeDocumentResponse,
  AnalyzeDocumentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AnalyzeDocumentCommand,
  serializeAws_json1_1AnalyzeDocumentCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface AnalyzeDocumentCommandInput extends AnalyzeDocumentRequest {}
export interface AnalyzeDocumentCommandOutput extends AnalyzeDocumentResponse, __MetadataBearer {}

/**
 * <p>Analyzes an input document for relationships between detected items. </p>
 *          <p>The types of information returned are as follows: </p>
 *          <ul>
 *             <li>
 *                <p>Form data (key-value pairs). The related information is returned in two <a>Block</a> objects, each of type <code>KEY_VALUE_SET</code>: a KEY
 *                   <code>Block</code> object and a VALUE <code>Block</code> object. For example,
 *                   <i>Name: Ana Silva Carolina</i> contains a key and value.
 *                   <i>Name:</i> is the key. <i>Ana Silva Carolina</i> is
 *                the value.</p>
 *             </li>
 *             <li>
 *                <p>Table and table cell data. A TABLE <code>Block</code> object contains information
 *                about a detected table. A CELL <code>Block</code> object is returned for each cell in
 *                a table.</p>
 *             </li>
 *             <li>
 *                <p>Lines and words of text. A LINE <code>Block</code> object contains one or more
 *                WORD <code>Block</code> objects. All lines and words that are detected in the
 *                document are returned (including text that doesn't have a relationship with the value
 *                of <code>FeatureTypes</code>). </p>
 *             </li>
 *             <li>
 *                <p>Signatures. A SIGNATURE <code>Block</code> object contains the location information
 *                of a signature in a document. If used in conjunction with forms or tables, a signature
 *                can be given a Key-Value pairing or be detected in the cell of a table.</p>
 *             </li>
 *             <li>
 *                <p>Query. A QUERY Block object contains the query text, alias and link to the
 *                associated Query results block object.</p>
 *             </li>
 *             <li>
 *                <p>Query Result. A QUERY_RESULT Block object contains the answer to the query and an
 *                ID that connects it to the query asked. This Block also contains a confidence
 *                score.</p>
 *             </li>
 *          </ul>
 *
 *          <p>Selection elements such as check boxes and option buttons (radio buttons) can be
 *          detected in form data and in tables. A SELECTION_ELEMENT <code>Block</code> object contains
 *          information about a selection element, including the selection status.</p>
 *
 *          <p>You can choose which type of analysis to perform by specifying the
 *             <code>FeatureTypes</code> list. </p>
 *          <p>The output is returned in a list of <code>Block</code> objects.</p>
 *          <p>
 *             <code>AnalyzeDocument</code> is a synchronous operation. To analyze documents
 *          asynchronously, use <a>StartDocumentAnalysis</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text
 *          Analysis</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeDocumentCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeDocumentCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new AnalyzeDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AnalyzeDocumentCommandInput} for command's `input` shape.
 * @see {@link AnalyzeDocumentCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class AnalyzeDocumentCommand extends $Command<
  AnalyzeDocumentCommandInput,
  AnalyzeDocumentCommandOutput,
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

  constructor(readonly input: AnalyzeDocumentCommandInput) {
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
  ): Handler<AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AnalyzeDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "AnalyzeDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AnalyzeDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AnalyzeDocumentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AnalyzeDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AnalyzeDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AnalyzeDocumentCommandOutput> {
    return deserializeAws_json1_1AnalyzeDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
