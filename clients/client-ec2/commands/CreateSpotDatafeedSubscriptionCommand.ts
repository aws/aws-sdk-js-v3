import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSpotDatafeedSubscriptionRequest, CreateSpotDatafeedSubscriptionResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateSpotDatafeedSubscriptionCommand,
  serializeAws_ec2CreateSpotDatafeedSubscriptionCommand,
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

export type CreateSpotDatafeedSubscriptionCommandInput = CreateSpotDatafeedSubscriptionRequest;
export type CreateSpotDatafeedSubscriptionCommandOutput = CreateSpotDatafeedSubscriptionResult & __MetadataBearer;

/**
 * <p>Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs.
 * 				You can create one data feed per AWS account. For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a>
 *         in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export class CreateSpotDatafeedSubscriptionCommand extends $Command<
  CreateSpotDatafeedSubscriptionCommandInput,
  CreateSpotDatafeedSubscriptionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSpotDatafeedSubscriptionCommandInput) {
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
  ): Handler<CreateSpotDatafeedSubscriptionCommandInput, CreateSpotDatafeedSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSpotDatafeedSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSpotDatafeedSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSpotDatafeedSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateSpotDatafeedSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSpotDatafeedSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSpotDatafeedSubscriptionCommandOutput> {
    return deserializeAws_ec2CreateSpotDatafeedSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
