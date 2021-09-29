import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
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

export interface CreateEventSubscriptionCommandInput extends CreateEventSubscriptionMessage {}
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN
 *             (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
 *             the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
 *             must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
 *             the SNS console.</p>
 *         <p>You can specify the source type, and lists of Amazon Redshift source IDs, event
 *             categories, and event severities. Notifications will be sent for all events you want
 *             that match those criteria. For example, you can specify source type = cluster, source ID
 *             = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
 *             ERROR. The subscription will only send notifications for those ERROR events in the
 *             Availability and Backup categories for the specified clusters.</p>
 *         <p>If you specify both the source type and source IDs, such as source type = cluster
 *             and source identifier = my-cluster-1, notifications will be sent for all the cluster
 *             events for my-cluster-1. If you specify a source type but do not specify a source
 *             identifier, you will receive notice of the events for the objects of that type in your
 *             Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you
 *             will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
  RedshiftClientResolvedConfig
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
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
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
