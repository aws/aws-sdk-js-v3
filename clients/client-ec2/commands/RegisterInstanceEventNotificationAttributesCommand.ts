import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RegisterInstanceEventNotificationAttributesRequest,
  RegisterInstanceEventNotificationAttributesResult,
} from "../models/models_4";
import {
  deserializeAws_ec2RegisterInstanceEventNotificationAttributesCommand,
  serializeAws_ec2RegisterInstanceEventNotificationAttributesCommand,
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

export type RegisterInstanceEventNotificationAttributesCommandInput = RegisterInstanceEventNotificationAttributesRequest;
export type RegisterInstanceEventNotificationAttributesCommandOutput = RegisterInstanceEventNotificationAttributesResult &
  __MetadataBearer;

/**
 * <p>Registers a set of tag keys to include in scheduled event notifications for your resources.
 *    		</p>
 *          <p>To remove tags, use .</p>
 */
export class RegisterInstanceEventNotificationAttributesCommand extends $Command<
  RegisterInstanceEventNotificationAttributesCommandInput,
  RegisterInstanceEventNotificationAttributesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterInstanceEventNotificationAttributesCommandInput) {
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
    RegisterInstanceEventNotificationAttributesCommandInput,
    RegisterInstanceEventNotificationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterInstanceEventNotificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterInstanceEventNotificationAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterInstanceEventNotificationAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterInstanceEventNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RegisterInstanceEventNotificationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterInstanceEventNotificationAttributesCommandOutput> {
    return deserializeAws_ec2RegisterInstanceEventNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
