import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeEventSubscriptionsMessage, DescribeEventSubscriptionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEventSubscriptionsCommand,
  serializeAws_json1_1DescribeEventSubscriptionsCommand,
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

export type DescribeEventSubscriptionsCommandInput = DescribeEventSubscriptionsMessage;
export type DescribeEventSubscriptionsCommandOutput = DescribeEventSubscriptionsResponse & __MetadataBearer;

/**
 * <p>Lists all the event subscriptions for a customer account. The description of a
 *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
 *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
 *             <code>CreationTime</code>, and <code>Status</code>. </p>
 *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
 *          subscription.</p>
 */
export class DescribeEventSubscriptionsCommand extends $Command<
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventSubscriptionsCommandInput) {
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
  ): Handler<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeEventSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventSubscriptionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventSubscriptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventSubscriptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventSubscriptionsCommandOutput> {
    return deserializeAws_json1_1DescribeEventSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
