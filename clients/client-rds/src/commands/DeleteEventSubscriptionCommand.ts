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

import { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResult } from "../models/models_0";
import { de_DeleteEventSubscriptionCommand, se_DeleteEventSubscriptionCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteEventSubscriptionCommand}.
 */
export interface DeleteEventSubscriptionCommandInput extends DeleteEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteEventSubscriptionCommand}.
 */
export interface DeleteEventSubscriptionCommandOutput extends DeleteEventSubscriptionResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an RDS event notification subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteEventSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteEventSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteEventSubscriptionCommandInput - {@link DeleteEventSubscriptionCommandInput}
 * @returns {@link DeleteEventSubscriptionCommandOutput}
 * @see {@link DeleteEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidEventSubscriptionStateFault} (client fault)
 *  <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 *
 * @example To delete an event subscription
 * ```javascript
 * // The following example deletes the specified event subscription.
 * const input = {
 *   "SubscriptionName": "my-instance-events"
 * };
 * const command = new DeleteEventSubscriptionCommand(input);
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
 *     "Status": "deleting",
 *     "SubscriptionCreationTime": "2018-07-31 23:22:01.893"
 *   }
 * }
 * *\/
 * // example id: to-delete-an-event-subscription-1680128383147
 * ```
 *
 */
export class DeleteEventSubscriptionCommand extends $Command<
  DeleteEventSubscriptionCommandInput,
  DeleteEventSubscriptionCommandOutput,
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
  constructor(readonly input: DeleteEventSubscriptionCommandInput) {
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
  ): Handler<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteEventSubscriptionCommand";
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
  private serialize(input: DeleteEventSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteEventSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventSubscriptionCommandOutput> {
    return de_DeleteEventSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
