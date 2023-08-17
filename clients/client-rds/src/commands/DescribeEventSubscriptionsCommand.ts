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

import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_1";
import { de_DescribeEventSubscriptionsCommand, se_DescribeEventSubscriptionsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventSubscriptionsCommand}.
 */
export interface DescribeEventSubscriptionsCommandInput extends DescribeEventSubscriptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventSubscriptionsCommand}.
 */
export interface DescribeEventSubscriptionsCommandOutput extends EventSubscriptionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes
 *           <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p>
 *          <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeEventSubscriptionsMessage
 *   SubscriptionName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // EventSubscriptionsMessage
 * //   Marker: "STRING_VALUE",
 * //   EventSubscriptionsList: [ // EventSubscriptionsList
 * //     { // EventSubscription
 * //       CustomerAwsId: "STRING_VALUE",
 * //       CustSubscriptionId: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SubscriptionCreationTime: "STRING_VALUE",
 * //       SourceType: "STRING_VALUE",
 * //       SourceIdsList: [ // SourceIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       EventCategoriesList: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //       Enabled: true || false,
 * //       EventSubscriptionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventSubscriptionsCommandInput - {@link DescribeEventSubscriptionsCommandInput}
 * @returns {@link DescribeEventSubscriptionsCommandOutput}
 * @see {@link DescribeEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe event subscriptions
 * ```javascript
 * // This example describes all of the Amazon RDS event subscriptions for the current AWS account.
 * const input = {};
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EventSubscriptionsList": [
 *     {
 *       "CustSubscriptionId": "my-instance-events",
 *       "CustomerAwsId": "123456789012",
 *       "Enabled": true,
 *       "EventCategoriesList": [
 *         "backup",
 *         "recovery"
 *       ],
 *       "EventSubscriptionArn": "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *       "SnsTopicArn": "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *       "SourceType": "db-instance",
 *       "Status": "creating",
 *       "SubscriptionCreationTime": "2018-07-31 23:22:01.893"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-event-subscriptions-1680281683538
 * ```
 *
 */
export class DescribeEventSubscriptionsCommand extends $Command<
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
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
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventSubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeEventSubscriptionsCommand";
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
  private serialize(input: DescribeEventSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventSubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventSubscriptionsCommandOutput> {
    return de_DescribeEventSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
