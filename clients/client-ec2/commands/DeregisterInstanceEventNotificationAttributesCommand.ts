import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeregisterInstanceEventNotificationAttributesRequest,
  DeregisterInstanceEventNotificationAttributesResult,
} from "../models/models_2";
import {
  deserializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand,
  serializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand,
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

export type DeregisterInstanceEventNotificationAttributesCommandInput = DeregisterInstanceEventNotificationAttributesRequest;
export type DeregisterInstanceEventNotificationAttributesCommandOutput = DeregisterInstanceEventNotificationAttributesResult &
  __MetadataBearer;

/**
 * <p>Deregisters tag keys to prevent tags that have the specified tag keys from being included
 * 			in scheduled event notifications for resources in the Region.</p>
 */
export class DeregisterInstanceEventNotificationAttributesCommand extends $Command<
  DeregisterInstanceEventNotificationAttributesCommandInput,
  DeregisterInstanceEventNotificationAttributesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterInstanceEventNotificationAttributesCommandInput) {
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
    DeregisterInstanceEventNotificationAttributesCommandInput,
    DeregisterInstanceEventNotificationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterInstanceEventNotificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterInstanceEventNotificationAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterInstanceEventNotificationAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterInstanceEventNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterInstanceEventNotificationAttributesCommandOutput> {
    return deserializeAws_ec2DeregisterInstanceEventNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
