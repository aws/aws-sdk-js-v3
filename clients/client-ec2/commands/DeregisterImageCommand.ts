import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeregisterImageRequest } from "../models/models_2";
import { deserializeAws_ec2DeregisterImageCommand, serializeAws_ec2DeregisterImageCommand } from "../protocols/Aws_ec2";
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

export type DeregisterImageCommandInput = DeregisterImageRequest;
export type DeregisterImageCommandOutput = __MetadataBearer;

/**
 * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch
 * 			new instances; however, it doesn't affect any instances that you've already launched
 * 			from the AMI. You'll continue to incur usage costs for those instances until you
 * 			terminate them.</p>
 *          <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was
 * 			created for the root volume of the instance during the AMI creation process. When you
 * 			deregister an instance store-backed AMI, it doesn't affect the files that you uploaded
 * 			to Amazon S3 when you created the AMI.</p>
 */
export class DeregisterImageCommand extends $Command<
  DeregisterImageCommandInput,
  DeregisterImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterImageCommandInput) {
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
  ): Handler<DeregisterImageCommandInput, DeregisterImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeregisterImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterImageCommandOutput> {
    return deserializeAws_ec2DeregisterImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
