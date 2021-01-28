import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEventSubscriptionCommand,
  serializeAws_json1_1CreateEventSubscriptionCommand,
} from "../protocols/Aws_json1_1";
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
export type CreateEventSubscriptionCommandOutput = CreateEventSubscriptionResponse & __MetadataBearer;

/**
 * <p> Creates an AWS DMS event notification subscription. </p>
 *          <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of,
 *          provide a list of AWS DMS source IDs (<code>SourceIds</code>) that triggers the events, and
 *          provide a list of event categories (<code>EventCategories</code>) for events you want to be
 *          notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>,
 *          such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier =
 *             my-replinstance</code>, you will be notified of all the replication instance events for
 *          the specified source. If you specify a <code>SourceType</code> but don't specify a
 *             <code>SourceIdentifier</code>, you receive notice of the events for that source type for
 *          all your AWS DMS sources. If you don't specify either <code>SourceType</code> nor
 *             <code>SourceIdentifier</code>, you will be notified of events generated from all AWS DMS
 *          sources belonging to your customer account.</p>
 *          <p>For more information about AWS DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
 *             Notifications</a> in the <i>AWS Database Migration Service User
 *             Guide.</i>
 *          </p>
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateEventSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventSubscriptionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventSubscriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEventSubscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventSubscriptionCommandOutput> {
    return deserializeAws_json1_1CreateEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
