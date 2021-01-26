import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetVaultNotificationsInput, GetVaultNotificationsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetVaultNotificationsCommand,
  serializeAws_restJson1GetVaultNotificationsCommand,
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

export type GetVaultNotificationsCommandInput = GetVaultNotificationsInput;
export type GetVaultNotificationsCommandOutput = GetVaultNotificationsOutput & __MetadataBearer;

/**
 * <p>This operation retrieves the <code>notification-configuration</code> subresource of
 *          the specified vault.</p>
 *
 *          <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not
 *          set, the operation returns a <code>404 Not Found</code> error. For more information about
 *          vault notifications, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a>. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification
 *             Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 */
export class GetVaultNotificationsCommand extends $Command<
  GetVaultNotificationsCommandInput,
  GetVaultNotificationsCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVaultNotificationsCommandInput) {
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
  ): Handler<GetVaultNotificationsCommandInput, GetVaultNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetVaultNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVaultNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetVaultNotificationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVaultNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVaultNotificationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVaultNotificationsCommandOutput> {
    return deserializeAws_restJson1GetVaultNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
