import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import {
  deserializeAws_queryCreateEventSubscriptionCommand,
  serializeAws_queryCreateEventSubscriptionCommand,
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

export type CreateEventSubscriptionCommandInput = CreateEventSubscriptionMessage;
export type CreateEventSubscriptionCommandOutput = CreateEventSubscriptionResult & __MetadataBearer;

/**
 * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon
 *       Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To
 *       obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The
 *       ARN is displayed in the SNS console.</p>
 *          <p>You can specify the type of source (SourceType) you want to be notified of, provide a list
 *       of Neptune sources (SourceIds) that triggers the events, and provide a list of event
 *       categories (EventCategories) for events you want to be notified of. For example, you can
 *       specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories
 *       = Availability, Backup.</p>
 *          <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and
 *       SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the
 *       specified source. If you specify a SourceType but do not specify a SourceIdentifier, you
 *       receive notice of the events for that source type for all your Neptune sources. If you do not
 *       specify either the SourceType nor the SourceIdentifier, you are notified of events generated
 *       from all Neptune sources belonging to your customer account.</p>
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEventSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "CreateEventSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventSubscriptionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventSubscriptionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateEventSubscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventSubscriptionCommandOutput> {
    return deserializeAws_queryCreateEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
