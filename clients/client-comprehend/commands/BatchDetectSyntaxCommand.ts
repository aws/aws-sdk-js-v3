import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectSyntaxRequest, BatchDetectSyntaxResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchDetectSyntaxCommand,
  serializeAws_json1_1BatchDetectSyntaxCommand,
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

export interface BatchDetectSyntaxCommandInput extends BatchDetectSyntaxRequest {}
export interface BatchDetectSyntaxCommandOutput extends BatchDetectSyntaxResponse, __MetadataBearer {}

/**
 * <p>Inspects the text of a batch of documents for the syntax and part of speech of the words
 *       in the document and returns information about them. For more information, see <a>how-syntax</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectSyntaxCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link BatchDetectSyntaxCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDetectSyntaxCommand extends $Command<
  BatchDetectSyntaxCommandInput,
  BatchDetectSyntaxCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDetectSyntaxCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "BatchDetectSyntaxCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetectSyntaxRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDetectSyntaxResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDetectSyntaxCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDetectSyntaxCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDetectSyntaxCommandOutput> {
    return deserializeAws_json1_1BatchDetectSyntaxCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
