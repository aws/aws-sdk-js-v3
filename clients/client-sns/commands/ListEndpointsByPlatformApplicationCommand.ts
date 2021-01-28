import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import {
  ListEndpointsByPlatformApplicationInput,
  ListEndpointsByPlatformApplicationResponse,
} from "../models/models_0";
import {
  deserializeAws_queryListEndpointsByPlatformApplicationCommand,
  serializeAws_queryListEndpointsByPlatformApplicationCommand,
} from "../protocols/Aws_query";
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

export type ListEndpointsByPlatformApplicationCommandInput = ListEndpointsByPlatformApplicationInput;
export type ListEndpointsByPlatformApplicationCommandOutput = ListEndpointsByPlatformApplicationResponse &
  __MetadataBearer;

/**
 * <p>Lists the endpoints and endpoint attributes for devices in a supported push
 *             notification service, such as GCM (Firebase Cloud Messaging) and APNS. The results for
 *                 <code>ListEndpointsByPlatformApplication</code> are paginated and return a limited
 *             list of endpoints, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListEndpointsByPlatformApplication</code> again using the NextToken string
 *             received from the previous call. When there are no more records to return, NextToken
 *             will be null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 */
export class ListEndpointsByPlatformApplicationCommand extends $Command<
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEndpointsByPlatformApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListEndpointsByPlatformApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEndpointsByPlatformApplicationInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListEndpointsByPlatformApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListEndpointsByPlatformApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListEndpointsByPlatformApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEndpointsByPlatformApplicationCommandOutput> {
    return deserializeAws_queryListEndpointsByPlatformApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
