import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceAttributeRequest } from "../models/models_4";
import {
  deserializeAws_ec2ModifyInstanceAttributeCommand,
  serializeAws_ec2ModifyInstanceAttributeCommand,
} from "../protocols/Aws_ec2";
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

export interface ModifyInstanceAttributeCommandInput extends ModifyInstanceAttributeRequest {}
export interface ModifyInstanceAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified attribute of the specified instance. You can specify only one
 *             attribute at a time.</p>
 *         <p>
 *             <b>Note: </b>Using this action to change the security groups
 *             associated with an elastic network interface (ENI) attached to an instance in a VPC can
 *             result in an error if the instance has more than one ENI. To change the security groups
 *             associated with an ENI attached to an instance that has multiple ENIs, we recommend that
 *             you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p>
 *         <p>To modify some attributes, the instance must be stopped. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modifying attributes of a stopped instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyInstanceAttributeCommand extends $Command<
  ModifyInstanceAttributeCommandInput,
  ModifyInstanceAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceAttributeCommandInput, ModifyInstanceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstanceAttributeCommandOutput> {
    return deserializeAws_ec2ModifyInstanceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
