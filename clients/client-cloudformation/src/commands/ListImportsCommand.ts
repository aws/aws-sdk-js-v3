import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListImportsInput, ListImportsOutput } from "../models/models_0";
import { deserializeAws_queryListImportsCommand, serializeAws_queryListImportsCommand } from "../protocols/Aws_query";
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

export interface ListImportsCommandInput extends ListImportsInput {}
export interface ListImportsCommandOutput extends ListImportsOutput, __MetadataBearer {}

/**
 * <p>Lists all stacks that are importing an exported output value. To modify or remove an
 *          exported output value, first use this action to see which stacks are using it. To see the
 *          exported output values in your account, see <a>ListExports</a>.</p>
 *          <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">
 *                <code>Fn::ImportValue</code>
 *             </a> function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListImportsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListImportsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListImportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListImportsCommandInput} for command's `input` shape.
 * @see {@link ListImportsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListImportsCommand extends $Command<
  ListImportsCommandInput,
  ListImportsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListImportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImportsCommandInput, ListImportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListImportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListImportsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListImportsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListImportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListImportsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImportsCommandOutput> {
    return deserializeAws_queryListImportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
