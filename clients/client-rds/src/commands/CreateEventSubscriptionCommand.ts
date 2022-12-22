// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateEventSubscriptionMessage,
  CreateEventSubscriptionMessageFilterSensitiveLog,
  CreateEventSubscriptionResult,
  CreateEventSubscriptionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateEventSubscriptionCommand,
  serializeAws_queryCreateEventSubscriptionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateEventSubscriptionCommandInput extends CreateEventSubscriptionMessage {}
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResult, __MetadataBearer {}

/**
 * <p>Creates an RDS event notification subscription. This operation requires a topic Amazon
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
 *          <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code>
 *           and <code>SourceIds</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for
 *           the specified source. If you specify a <code>SourceType</code> but do not specify <code>SourceIds</code>,
 *           you receive notice of the events for that source type for all your RDS sources. If you
 *           don't specify either the SourceType or the <code>SourceIds</code>, you are notified of events
 *           generated from all RDS sources belonging to your customer account.</p>
 *          <p>For more information about subscribing to an event for RDS DB engines, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Subscribing.html">
 *                 Subscribing to Amazon RDS event notification</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about subscribing to an event for Aurora DB engines, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Subscribing.html">
 *                 Subscribing to Amazon RDS event notification</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEventSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateEventSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventSubscriptionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEventSubscriptionResultFilterSensitiveLog,
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
