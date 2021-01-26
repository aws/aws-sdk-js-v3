import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePartnerEventSourceCommand,
  serializeAws_json1_1CreatePartnerEventSourceCommand,
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

export type CreatePartnerEventSourceCommandInput = CreatePartnerEventSourceRequest;
export type CreatePartnerEventSourceCommandOutput = CreatePartnerEventSourceResponse & __MetadataBearer;

/**
 * <p>Called by an SaaS partner to create a partner event source. This operation is not used
 *             by AWS customers.</p>
 *         <p>Each partner event source can be used by one AWS account to create a matching partner
 *             event bus in that AWS account. A SaaS partner must create one partner event source for
 *             each AWS account that wants to receive those event types. </p>
 *         <p>A partner event source creates events based on resources within the SaaS partner's
 *             service or application.</p>
 *         <p>An AWS account that creates a partner event bus that matches the partner event source
 *             can use that event bus to receive events from the partner, and then process them using
 *             AWS Events rules and targets.</p>
 *         <p>Partner event source names follow this format:</p>
 *         <p>
 *             <code>
 *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
 *             </code>
 *          </p>
 *         <p>
 *             <i>partner_name</i> is determined during partner registration and
 *             identifies the partner to AWS customers. <i>event_namespace</i> is
 *             determined by the partner and is a way for the partner to categorize their events.
 *                 <i>event_name</i> is determined by the partner, and should uniquely
 *             identify an event-generating resource within the partner system. The combination of
 *                 <i>event_namespace</i> and <i>event_name</i> should help
 *             AWS customers decide whether to create an event bus to receive these events.</p>
 */
export class CreatePartnerEventSourceCommand extends $Command<
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePartnerEventSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "CreatePartnerEventSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePartnerEventSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePartnerEventSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePartnerEventSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePartnerEventSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePartnerEventSourceCommandOutput> {
    return deserializeAws_json1_1CreatePartnerEventSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
