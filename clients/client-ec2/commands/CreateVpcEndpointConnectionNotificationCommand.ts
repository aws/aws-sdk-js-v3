import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateVpcEndpointConnectionNotificationRequest,
  CreateVpcEndpointConnectionNotificationResult,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateVpcEndpointConnectionNotificationCommand,
  serializeAws_ec2CreateVpcEndpointConnectionNotificationCommand,
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

export type CreateVpcEndpointConnectionNotificationCommandInput = CreateVpcEndpointConnectionNotificationRequest;
export type CreateVpcEndpointConnectionNotificationCommandOutput = CreateVpcEndpointConnectionNotificationResult &
  __MetadataBearer;

/**
 * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint
 *             service. A connection notification notifies you of specific endpoint events. You must
 *             create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in
 *             the <i>Amazon Simple Notification Service Developer Guide</i>.</p>
 *         <p>You can create a connection notification for interface endpoints only.</p>
 */
export class CreateVpcEndpointConnectionNotificationCommand extends $Command<
  CreateVpcEndpointConnectionNotificationCommandInput,
  CreateVpcEndpointConnectionNotificationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcEndpointConnectionNotificationCommandInput) {
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
  ): Handler<
    CreateVpcEndpointConnectionNotificationCommandInput,
    CreateVpcEndpointConnectionNotificationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcEndpointConnectionNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcEndpointConnectionNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcEndpointConnectionNotificationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateVpcEndpointConnectionNotificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcEndpointConnectionNotificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcEndpointConnectionNotificationCommandOutput> {
    return deserializeAws_ec2CreateVpcEndpointConnectionNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
