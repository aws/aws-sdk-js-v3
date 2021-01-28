import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RegisterTypeInput, RegisterTypeOutput } from "../models/models_0";
import { deserializeAws_queryRegisterTypeCommand, serializeAws_queryRegisterTypeCommand } from "../protocols/Aws_query";
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

export type RegisterTypeCommandInput = RegisterTypeInput;
export type RegisterTypeCommandOutput = RegisterTypeOutput & __MetadataBearer;

/**
 * <p>Registers a type with the CloudFormation service. Registering a type makes it available for use in CloudFormation templates in your AWS account, and includes:</p>
 *          <ul>
 *             <li>
 *                <p>Validating the resource schema</p>
 *             </li>
 *             <li>
 *                <p>Determining which handlers have been specified for the resource</p>
 *             </li>
 *             <li>
 *                <p>Making the resource type available for use in your account</p>
 *             </li>
 *          </ul>
 *          <p>For more information on how to develop types and ready them for registeration, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p>
 *          <p>You can have a maximum of 50 resource type versions registered at a time. This maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific resource type versions if necessary.</p>
 *          <p>Once you have initiated a registration request using <code>
 *                <a>RegisterType</a>
 *             </code>, you can use <code>
 *                <a>DescribeTypeRegistration</a>
 *             </code> to monitor the progress of the registration request.</p>
 */
export class RegisterTypeCommand extends $Command<
  RegisterTypeCommandInput,
  RegisterTypeCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterTypeCommandInput) {
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
  ): Handler<RegisterTypeCommandInput, RegisterTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RegisterTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterTypeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRegisterTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTypeCommandOutput> {
    return deserializeAws_queryRegisterTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
