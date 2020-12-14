import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { DeleteSecretRequest, DeleteSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSecretCommand,
  serializeAws_json1_1DeleteSecretCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteSecretCommandInput = DeleteSecretRequest;
export type DeleteSecretCommandOutput = DeleteSecretResponse & __MetadataBearer;

/**
 * <p>Deletes an entire secret and all of its versions. You can optionally include a recovery
 *       window during which you can restore the secret. If you don't specify a recovery window value,
 *       the operation defaults to 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to
 *       the secret that specifies the end of the recovery window. At the end of the recovery window,
 *       Secrets Manager deletes the secret permanently.</p>
 *          <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to
 *       remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p>
 *          <p>You cannot access the encrypted secret information in any secret that is scheduled for
 *       deletion. If you need to access that information, you must cancel the deletion with <a>RestoreSecret</a> and then retrieve the information.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>There is no explicit operation to delete a version of a secret. Instead, remove all
 *             staging labels from the <code>VersionStage</code> field of a version. That marks the
 *             version as deprecated and allows Secrets Manager to delete it as needed. Versions that do not have
 *             any staging labels do not show up in <a>ListSecretVersionIds</a> unless you
 *             specify <code>IncludeDeprecated</code>.</p>
 *                </li>
 *                <li>
 *                   <p>The permanent secret deletion at the end of the waiting period is performed as a
 *             background task with low priority. There is no guarantee of a specific time after the
 *             recovery window for the actual delete operation to occur.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:DeleteSecret</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To cancel deletion of a version of a secret before the recovery window has expired,
 *           use <a>RestoreSecret</a>.</p>
 *             </li>
 *          </ul>
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
