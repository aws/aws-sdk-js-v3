import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceAttributeRequest, InstanceAttribute } from "../models/models_2";
import {
  deserializeAws_ec2DescribeInstanceAttributeCommand,
  serializeAws_ec2DescribeInstanceAttributeCommand,
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

export type DescribeInstanceAttributeCommandInput = DescribeInstanceAttributeRequest;
export type DescribeInstanceAttributeCommandOutput = InstanceAttribute & __MetadataBearer;

/**
 * <p>Describes the specified attribute of the specified instance. You can specify only one
 *             attribute at a time. Valid attribute values are: <code>instanceType</code> |
 *                 <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> |
 *                 <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code>
 *             | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> |
 *                 <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
 *                 <code>ebsOptimized</code> | <code>sriovNetSupport</code>
 *         </p>
 */
export class DescribeInstanceAttributeCommand extends $Command<
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceAttributeCommandInput) {
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
  ): Handler<DescribeInstanceAttributeCommandInput, DescribeInstanceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InstanceAttribute.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceAttributeCommandOutput> {
    return deserializeAws_ec2DescribeInstanceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
