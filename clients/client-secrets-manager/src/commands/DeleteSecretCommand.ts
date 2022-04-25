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

import { DeleteSecretRequest, DeleteSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSecretCommand,
  serializeAws_json1_1DeleteSecretCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface DeleteSecretCommandInput extends DeleteSecretRequest {}
export interface DeleteSecretCommandOutput extends DeleteSecretResponse, __MetadataBearer {}

/**
 * <p>Deletes a secret and all of its versions. You can specify a recovery
 *       window during which you can restore the secret. The minimum recovery window is 7 days.
 *       The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to
 *       the secret that specifies the end of the recovery window. At the end of the recovery window,
 *       Secrets Manager deletes the secret permanently.</p>
 *          <p>For information about deleting a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_delete-secret.html">https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_delete-secret.html</a>. </p>
 *          <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a
 *         background task with low priority. There is no guarantee of a specific time after the
 *         recovery window for the permanent delete to occur.</p>
 *          <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to
 *       remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p>
 *          <p>In a secret scheduled for deletion, you cannot access the encrypted secret value.
 *       To access that information, first cancel the deletion with <a>RestoreSecret</a> and then retrieve the information.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:DeleteSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DeleteSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DeleteSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new DeleteSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSecretCommandInput} for command's `input` shape.
 * @see {@link DeleteSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class DeleteSecretCommand extends $Command<
  DeleteSecretCommandInput,
  DeleteSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSecretCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSecretCommandInput, DeleteSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "DeleteSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSecretCommandOutput> {
    return deserializeAws_json1_1DeleteSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
