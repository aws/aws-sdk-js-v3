import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetVaultNotificationsInput } from "../models/models_0";
import {
  deserializeAws_restJson1SetVaultNotificationsCommand,
  serializeAws_restJson1SetVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";
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

export type SetVaultNotificationsCommandInput = SetVaultNotificationsInput;
export type SetVaultNotificationsCommandOutput = __MetadataBearer;

/**
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
 */
export class SetVaultNotificationsCommand extends $Command<
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "SetVaultNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetVaultNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetVaultNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SetVaultNotificationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetVaultNotificationsCommandOutput> {
    return deserializeAws_restJson1SetVaultNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
