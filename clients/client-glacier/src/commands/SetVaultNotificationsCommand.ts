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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetVaultNotificationsInput } from "../models/models_0";
import { de_SetVaultNotificationsCommand, se_SetVaultNotificationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetVaultNotificationsCommand}.
 */
export interface SetVaultNotificationsCommandInput extends SetVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link SetVaultNotificationsCommand}.
 */
export interface SetVaultNotificationsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This operation configures notifications that will be sent when specific events happen
 *          to a vault. By default, you don't get any notifications.</p>
 *
 *          <p>To configure vault notifications, send a PUT request to the
 *             <code>notification-configuration</code> subresource of the vault. The request should
 *          include a JSON document that provides an Amazon SNS topic and specific events for which you
 *          want Amazon S3 Glacier to send notifications to the topic.</p>
 *
 *          <p>Amazon SNS topics must grant permission to the vault to be allowed to publish
 *          notifications to the topic. You can configure a vault to publish a notification for the
 *          following vault events:</p>
 *
 *          <ul>
 *             <li>
 *                 <p>
 *                   <b>ArchiveRetrievalCompleted</b> This event occurs when a
 *                job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or
 *                "Failed". The notification sent to the SNS topic is the same output as returned from
 *                   <a>DescribeJob</a>. </p>
 *             </li>
 *             <li>
 *
 *                <p>
 *                   <b>InventoryRetrievalCompleted</b> This event occurs when a
 *                job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or
 *                "Failed". The notification sent to the SNS topic is the same output as returned from
 *                   <a>DescribeJob</a>. </p>
 *             </li>
 *          </ul>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification
 *             Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetVaultNotificationsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetVaultNotificationsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // SetVaultNotificationsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   vaultNotificationConfig: { // VaultNotificationConfig
 *     SNSTopic: "STRING_VALUE",
 *     Events: [ // NotificationEventList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SetVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetVaultNotificationsCommandInput - {@link SetVaultNotificationsCommandInput}
 * @returns {@link SetVaultNotificationsCommandOutput}
 * @see {@link SetVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link SetVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To configure a vault to post a message to an Amazon SNS topic when jobs complete
 * ```javascript
 * // The example sets the examplevault notification configuration.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "examplevault",
 *   "vaultNotificationConfig": {
 *     "Events": [
 *       "ArchiveRetrievalCompleted",
 *       "InventoryRetrievalCompleted"
 *     ],
 *     "SNSTopic": "arn:aws:sns:us-west-2:012345678901:mytopic"
 *   }
 * };
 * const command = new SetVaultNotificationsCommand(input);
 * await client.send(command);
 * // example id: to-configure-a-vault-to-post-a-message-to-an-amazon-simple-notification-service-amazon-sns-topic-when-jobs-complete-1482186397475
 * ```
 *
 */
export class SetVaultNotificationsCommand extends $Command<
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: SetVaultNotificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetVaultNotificationsCommandInput, SetVaultNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetVaultNotificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "SetVaultNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "SetVaultNotifications",
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
  private serialize(input: SetVaultNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetVaultNotificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetVaultNotificationsCommandOutput> {
    return de_SetVaultNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
