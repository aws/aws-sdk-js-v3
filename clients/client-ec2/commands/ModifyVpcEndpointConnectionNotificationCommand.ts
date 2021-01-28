import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVpcEndpointConnectionNotificationRequest,
  ModifyVpcEndpointConnectionNotificationResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand,
  serializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand,
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

export type ModifyVpcEndpointConnectionNotificationCommandInput = ModifyVpcEndpointConnectionNotificationRequest;
export type ModifyVpcEndpointConnectionNotificationCommandOutput = ModifyVpcEndpointConnectionNotificationResult &
  __MetadataBearer;

/**
 * <p>Modifies a connection notification for VPC endpoint or VPC endpoint service. You
 *             can change the SNS topic for the notification, or the events for which to be notified. </p>
 */
export class ModifyVpcEndpointConnectionNotificationCommand extends $Command<
  ModifyVpcEndpointConnectionNotificationCommandInput,
  ModifyVpcEndpointConnectionNotificationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcEndpointConnectionNotificationCommandInput) {
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
    ModifyVpcEndpointConnectionNotificationCommandInput,
    ModifyVpcEndpointConnectionNotificationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointConnectionNotificationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointConnectionNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointConnectionNotificationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcEndpointConnectionNotificationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointConnectionNotificationCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointConnectionNotificationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
