import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RegisterPublisherInput, RegisterPublisherOutput } from "../models/models_0";
import {
  deserializeAws_queryRegisterPublisherCommand,
  serializeAws_queryRegisterPublisherCommand,
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

export interface RegisterPublisherCommandInput extends RegisterPublisherInput {}
export interface RegisterPublisherCommandOutput extends RegisterPublisherOutput, __MetadataBearer {}

/**
 * <p>Registers your account as a publisher of public extensions in the CloudFormation
 *          registry. Public extensions are available for use by all CloudFormation users. This
 *          publisher ID applies to your account in all Amazon Web Services Regions.</p>
 *          <p>For information on requirements for registering as a public extension publisher, see
 *             <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation
 *             extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RegisterPublisherCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RegisterPublisherCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new RegisterPublisherCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterPublisherCommandInput} for command's `input` shape.
 * @see {@link RegisterPublisherCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterPublisherCommand extends $Command<
  RegisterPublisherCommandInput,
  RegisterPublisherCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterPublisherCommandInput) {
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
  ): Handler<RegisterPublisherCommandInput, RegisterPublisherCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RegisterPublisherCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterPublisherInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterPublisherOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterPublisherCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRegisterPublisherCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterPublisherCommandOutput> {
    return deserializeAws_queryRegisterPublisherCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
