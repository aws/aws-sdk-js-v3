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
  DetectDocumentTextRequest,
  DetectDocumentTextRequestFilterSensitiveLog,
  DetectDocumentTextResponse,
  DetectDocumentTextResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectDocumentTextCommand,
  serializeAws_json1_1DetectDocumentTextCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface DetectDocumentTextCommandInput extends DetectDocumentTextRequest {}
export interface DetectDocumentTextCommandOutput extends DetectDocumentTextResponse, __MetadataBearer {}

/**
 * <p>Detects text in the input document. Amazon Textract can detect lines of text and the
 *          words that make up a line of text. The input document must be in one of the following image
 *          formats:  JPEG, PNG, PDF, or TIFF. <code>DetectDocumentText</code> returns the detected
 *          text in an array of <a>Block</a> objects. </p>
 *          <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object
 *          is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is
 *          a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p>
 *
 *          <p>
 *             <code>DetectDocumentText</code> is a synchronous operation. To analyze documents
 *          asynchronously, use <a>StartDocumentTextDetection</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, DetectDocumentTextCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new DetectDocumentTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectDocumentTextCommandInput} for command's `input` shape.
 * @see {@link DetectDocumentTextCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class DetectDocumentTextCommand extends $Command<
  DetectDocumentTextCommandInput,
  DetectDocumentTextCommandOutput,
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

  constructor(readonly input: DetectDocumentTextCommandInput) {
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
  ): Handler<DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectDocumentTextCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "DetectDocumentTextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectDocumentTextRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectDocumentTextResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectDocumentTextCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectDocumentTextCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectDocumentTextCommandOutput> {
    return deserializeAws_json1_1DetectDocumentTextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
