import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
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
 * <p>Creates an RDS event notification subscription. This action requires a topic Amazon
 *             Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API.
 *             To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the
 *             topic. The ARN is displayed in the SNS console.</p>
 *          <p>You can specify the type of source (<code>SourceType</code>) that you want to be
 *             notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the
 *             events. You can also provide a list of event categories (<code>EventCategories</code>)
 *             for events that you want to be notified of. For example, you can specify
 *                 <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> =
 *                 <code>mydbinstance1</code>, <code>mydbinstance2</code> and
 *                 <code>EventCategories</code> = <code>Availability</code>,
 *             <code>Backup</code>.</p>
 *
 *          <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code>
 *           and <code>SourceIdentifier</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for
 *           the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>,
 *           you receive notice of the events for that source type for all your RDS sources. If you
 *           don't specify either the SourceType or the <code>SourceIdentifier</code>, you are notified of events
 *           generated from all RDS sources belonging to your customer account.</p>
 *          <note>
 *             <p>RDS event notification is only available for unencrypted SNS topics. If you specify an
 *               encrypted SNS topic, event notifications aren't sent for the topic.</p>
 *          </note>
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
  RDSClientResolvedConfig
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
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
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
