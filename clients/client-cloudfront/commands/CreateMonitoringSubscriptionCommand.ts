import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateMonitoringSubscriptionRequest, CreateMonitoringSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateMonitoringSubscriptionCommand,
  serializeAws_restXmlCreateMonitoringSubscriptionCommand,
} from "../protocols/Aws_restXml";
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

export type CreateMonitoringSubscriptionCommandInput = CreateMonitoringSubscriptionRequest;
export type CreateMonitoringSubscriptionCommandOutput = CreateMonitoringSubscriptionResult & __MetadataBearer;

/**
 * <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The
 * 			additional metrics incur an additional cost.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CreateMonitoringSubscriptionCommand extends $Command<
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMonitoringSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMonitoringSubscriptionCommandInput, CreateMonitoringSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateMonitoringSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMonitoringSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMonitoringSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMonitoringSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateMonitoringSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMonitoringSubscriptionCommandOutput> {
    return deserializeAws_restXmlCreateMonitoringSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
