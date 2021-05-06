import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeTypeRegistrationCommand,
  serializeAws_queryDescribeTypeRegistrationCommand,
} from "../protocols/Aws_query";
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

export interface DescribeTypeRegistrationCommandInput extends DescribeTypeRegistrationInput {}
export interface DescribeTypeRegistrationCommandOutput extends DescribeTypeRegistrationOutput, __MetadataBearer {}

/**
 * <p>Returns information about an extension's registration, including its current status and type and version identifiers.</p>
 *          <p>When you initiate a registration request using <code>
 *                <a>RegisterType</a>
 *             </code>, you can then use <code>
 *                <a>DescribeTypeRegistration</a>
 *             </code> to monitor the progress of that registration request.</p>
 *          <p>Once the registration request has completed, use <code>
 *                <a>DescribeType</a>
 *             </code> to return detailed information about an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeTypeRegistrationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeTypeRegistrationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeTypeRegistrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTypeRegistrationCommandInput} for command's `input` shape.
 * @see {@link DescribeTypeRegistrationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeTypeRegistrationCommand extends $Command<
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTypeRegistrationCommandInput) {
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
  ): Handler<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeTypeRegistrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTypeRegistrationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTypeRegistrationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTypeRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTypeRegistrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTypeRegistrationCommandOutput> {
    return deserializeAws_queryDescribeTypeRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
