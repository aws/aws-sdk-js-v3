import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetInstanceAttributeRequest } from "../models/models_4";
import {
  deserializeAws_ec2ResetInstanceAttributeCommand,
  serializeAws_ec2ResetInstanceAttributeCommand,
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

export type ResetInstanceAttributeCommandInput = ResetInstanceAttributeRequest;
export type ResetInstanceAttributeCommandOutput = __MetadataBearer;

/**
 * <p>Resets an attribute of an instance to its default value. To reset the
 *                 <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped
 *             state. To reset the <code>sourceDestCheck</code>, the instance can be either running or
 *             stopped.</p>
 *         <p>The <code>sourceDestCheck</code> attribute controls whether source/destination
 *             checking is enabled. The default value is <code>true</code>, which means checking is
 *             enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For
 *             more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class ResetInstanceAttributeCommand extends $Command<
  ResetInstanceAttributeCommandInput,
  ResetInstanceAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetInstanceAttributeCommandInput) {
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
  ): Handler<ResetInstanceAttributeCommandInput, ResetInstanceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetInstanceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetInstanceAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetInstanceAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ResetInstanceAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetInstanceAttributeCommandOutput> {
    return deserializeAws_ec2ResetInstanceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
