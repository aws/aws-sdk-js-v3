import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteMonitoringSubscriptionRequest, DeleteMonitoringSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteMonitoringSubscriptionCommand,
  serializeAws_restXmlDeleteMonitoringSubscriptionCommand,
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

export type DeleteMonitoringSubscriptionCommandInput = DeleteMonitoringSubscriptionRequest;
export type DeleteMonitoringSubscriptionCommandOutput = DeleteMonitoringSubscriptionResult & __MetadataBearer;

/**
 * <p>Disables additional CloudWatch metrics for the specified CloudFront distribution.</p>
 */
export class DeleteMonitoringSubscriptionCommand extends $Command<
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMonitoringSubscriptionCommandInput) {
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
  ): Handler<DeleteMonitoringSubscriptionCommandInput, DeleteMonitoringSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteMonitoringSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMonitoringSubscriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMonitoringSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMonitoringSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteMonitoringSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteMonitoringSubscriptionCommandOutput> {
    return deserializeAws_restXmlDeleteMonitoringSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
