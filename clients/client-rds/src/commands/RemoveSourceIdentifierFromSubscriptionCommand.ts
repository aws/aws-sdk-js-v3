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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveSourceIdentifierFromSubscriptionResult,
} from "../models/models_1";
import {
  de_RemoveSourceIdentifierFromSubscriptionCommand,
  se_RemoveSourceIdentifierFromSubscriptionCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveSourceIdentifierFromSubscriptionCommand}.
 */
export interface RemoveSourceIdentifierFromSubscriptionCommandInput
  extends RemoveSourceIdentifierFromSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link RemoveSourceIdentifierFromSubscriptionCommand}.
 */
export interface RemoveSourceIdentifierFromSubscriptionCommandOutput
  extends RemoveSourceIdentifierFromSubscriptionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes a source identifier from an existing RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveSourceIdentifierFromSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // RemoveSourceIdentifierFromSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SourceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // RemoveSourceIdentifierFromSubscriptionResult
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
 * @param RemoveSourceIdentifierFromSubscriptionCommandInput - {@link RemoveSourceIdentifierFromSubscriptionCommandInput}
 * @returns {@link RemoveSourceIdentifierFromSubscriptionCommandOutput}
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RemoveSourceIdentifierFromSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link SourceNotFoundFault} (client fault)
 *  <p>The requested source could not be found.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To remove a source identifier from a subscription
 * ```javascript
 * // The following example removes the specified source identifier from an existing subscription.
 * const input = {
 *   "SourceIdentifier": "test-instance-repl",
 *   "SubscriptionName": "my-instance-events"
 * };
 * const command = new RemoveSourceIdentifierFromSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EventSubscription": {
 *     "CustSubscriptionId": "my-instance-events",
 *     "CustomerAwsId": "123456789012",
 *     "Enabled": false,
 *     "EventCategoriesList": [
 *       "backup",
 *       "recovery"
 *     ],
 *     "EventSubscriptionArn": "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *     "SnsTopicArn": "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *     "SourceIdsList": [
 *       "test-instance"
 *     ],
 *     "SourceType": "db-instance",
 *     "Status": "modifying",
 *     "SubscriptionCreationTime": "Tue Jul 31 23:22:01 UTC 2018"
 *   }
 * }
 * *\/
 * // example id: to-remove-a-source-identifier-from-a-subscription-1680072062459
 * ```
 *
 */
export class RemoveSourceIdentifierFromSubscriptionCommand extends $Command<
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
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
  constructor(readonly input: RemoveSourceIdentifierFromSubscriptionCommandInput) {
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
  ): Handler<RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveSourceIdentifierFromSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RemoveSourceIdentifierFromSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "RemoveSourceIdentifierFromSubscription",
      },
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
  private serialize(
    input: RemoveSourceIdentifierFromSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RemoveSourceIdentifierFromSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    return de_RemoveSourceIdentifierFromSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
