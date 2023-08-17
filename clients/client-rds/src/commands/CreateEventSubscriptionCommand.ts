// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { de_CreateEventSubscriptionCommand, se_CreateEventSubscriptionCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEventSubscriptionCommand}.
 */
export interface CreateEventSubscriptionCommandInput extends CreateEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link CreateEventSubscriptionCommand}.
 */
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResult, __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreateEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE", // required
 *   SourceType: "STRING_VALUE",
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
 *   SourceIds: [ // SourceIdsList
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventSubscriptionResult
 * //   EventSubscription: { // EventSubscription
 * //     CustomerAwsId: "STRING_VALUE",
 * //     CustSubscriptionId: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     SubscriptionCreationTime: "STRING_VALUE",
 * //     SourceType: "STRING_VALUE",
 * //     SourceIdsList: [ // SourceIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     EventCategoriesList: [ // EventCategoriesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Enabled: true || false,
 * //     EventSubscriptionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventSubscriptionCommandInput - {@link CreateEventSubscriptionCommandInput}
 * @returns {@link CreateEventSubscriptionCommandOutput}
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *  <p>You have reached the maximum number of event subscriptions.</p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>SNS has responded that there is a problem with the SNS topic specified.</p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>You do not have permission to publish to the SNS topic ARN.</p>
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *  <p>The SNS topic ARN does not exist.</p>
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found.</p>
 *
 * @throws {@link SubscriptionAlreadyExistFault} (client fault)
 *  <p>The supplied subscription name already exists.</p>
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The supplied category does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To create an event subscription
 * ```javascript
 * // The following example creates a subscription for backup and recovery events for DB instances in the current AWS account. Notifications are sent to an Amazon Simple Notification Service topic.
 * const input = {
 *   "EventCategories": [
 *     "backup",
 *     "recovery"
 *   ],
 *   "SnsTopicArn": "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *   "SourceType": "db-instance",
 *   "SubscriptionName": "my-instance-events"
 * };
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EventSubscription": {
 *     "CustSubscriptionId": "my-instance-events",
 *     "CustomerAwsId": "123456789012",
 *     "Enabled": true,
 *     "EventCategoriesList": [
 *       "backup",
 *       "recovery"
 *     ],
 *     "EventSubscriptionArn": "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *     "SnsTopicArn": "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *     "SourceType": "db-instance",
 *     "Status": "creating",
 *     "SubscriptionCreationTime": "Tue Jul 31 23:22:01 UTC 2018"
 *   }
 * }
 * *\/
 * // example id: to-create-an-event-subscription-1679956709288
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEventSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventSubscriptionCommandOutput> {
    return de_CreateEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
