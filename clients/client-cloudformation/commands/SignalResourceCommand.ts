import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SignalResourceInput } from "../models/models_0";
import {
  deserializeAws_querySignalResourceCommand,
  serializeAws_querySignalResourceCommand,
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

export interface SignalResourceCommandInput extends SignalResourceInput {}
export interface SignalResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends a signal to the specified resource with a success or failure status. You can
 *          use the SignalResource API in conjunction with a creation policy or update policy.
 *          CloudFormation doesn't proceed with a stack creation or update until resources receive the
 *          required number of signals or the timeout period is exceeded. The SignalResource API is
 *          useful in cases where you want to send signals from anywhere other than an Amazon EC2
 *          instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SignalResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SignalResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SignalResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignalResourceCommandInput} for command's `input` shape.
 * @see {@link SignalResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SignalResourceCommand extends $Command<
  SignalResourceCommandInput,
  SignalResourceCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SignalResourceCommandInput) {
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
  ): Handler<SignalResourceCommandInput, SignalResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "SignalResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignalResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SignalResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySignalResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SignalResourceCommandOutput> {
    return deserializeAws_querySignalResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
