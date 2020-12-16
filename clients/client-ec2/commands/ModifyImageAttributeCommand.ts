import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyImageAttributeRequest } from "../models/models_4";
import {
  deserializeAws_ec2ModifyImageAttributeCommand,
  serializeAws_ec2ModifyImageAttributeCommand,
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

export type ModifyImageAttributeCommandInput = ModifyImageAttributeRequest;
export type ModifyImageAttributeCommandOutput = __MetadataBearer;

/**
 * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time.
 *        You can use the <code>Attribute</code> parameter to specify the attribute or one of the following parameters:
 *        <code>Description</code>, <code>LaunchPermission</code>, or <code>ProductCode</code>.</p>
 *          <p>AWS Marketplace product codes cannot be modified. Images with an AWS Marketplace product code cannot be made public.</p>
 *          <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance
 *        and create an AMI from the instance.</p>
 */
export class ModifyImageAttributeCommand extends $Command<
  ModifyImageAttributeCommandInput,
  ModifyImageAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyImageAttributeCommandInput) {
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
  ): Handler<ModifyImageAttributeCommandInput, ModifyImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyImageAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyImageAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyImageAttributeCommandOutput> {
    return deserializeAws_ec2ModifyImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
