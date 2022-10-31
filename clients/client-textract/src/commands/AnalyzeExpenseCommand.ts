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
  AnalyzeExpenseRequest,
  AnalyzeExpenseRequestFilterSensitiveLog,
  AnalyzeExpenseResponse,
  AnalyzeExpenseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AnalyzeExpenseCommand,
  serializeAws_json1_1AnalyzeExpenseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";

export interface AnalyzeExpenseCommandInput extends AnalyzeExpenseRequest {}
export interface AnalyzeExpenseCommandOutput extends AnalyzeExpenseResponse, __MetadataBearer {}

/**
 * <p>
 *             <code>AnalyzeExpense</code> synchronously analyzes an input document for financially
 *          related relationships between text.</p>
 *          <p>Information is returned as <code>ExpenseDocuments</code> and seperated as
 *          follows:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LineItemGroups</code>- A data set containing <code>LineItems</code> which
 *                store information about the lines of text, such as an item purchased and its price on
 *                a receipt.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SummaryFields</code>- Contains all other information a receipt, such as
 *                header information or the vendors name.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, AnalyzeExpenseCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, AnalyzeExpenseCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new AnalyzeExpenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AnalyzeExpenseCommandInput} for command's `input` shape.
 * @see {@link AnalyzeExpenseCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for TextractClient's `config` shape.
 *
 */
export class AnalyzeExpenseCommand extends $Command<
  AnalyzeExpenseCommandInput,
  AnalyzeExpenseCommandOutput,
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

  constructor(readonly input: AnalyzeExpenseCommandInput) {
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
  ): Handler<AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AnalyzeExpenseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TextractClient";
    const commandName = "AnalyzeExpenseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AnalyzeExpenseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AnalyzeExpenseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AnalyzeExpenseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AnalyzeExpenseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AnalyzeExpenseCommandOutput> {
    return deserializeAws_json1_1AnalyzeExpenseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
