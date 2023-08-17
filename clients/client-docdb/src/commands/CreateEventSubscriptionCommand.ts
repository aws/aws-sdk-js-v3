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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { de_CreateEventSubscriptionCommand, se_CreateEventSubscriptionCommand } from "../protocols/Aws_query";

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
 * <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p>
 *          <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p>
 *          <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *  <p>You have reached the maximum number of event subscriptions. </p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>Amazon SNS has responded that there is a problem with the specified topic. </p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>You do not have permission to publish to the SNS topic Amazon Resource Name (ARN). </p>
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *  <p>The SNS topic Amazon Resource Name (ARN) does not exist. </p>
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found. </p>
 *
 * @throws {@link SubscriptionAlreadyExistFault} (client fault)
 *  <p>The provided subscription name already exists. </p>
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The provided category does not exist. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 */
export class CreateEventSubscriptionCommand extends $Command<
  CreateEventSubscriptionCommandInput,
  CreateEventSubscriptionCommandOutput,
  DocDBClientResolvedConfig
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
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEventSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
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
