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

import { UpdateSecretRequest, UpdateSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSecretCommand,
  serializeAws_json1_1UpdateSecretCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface UpdateSecretCommandInput extends UpdateSecretRequest {}
export interface UpdateSecretCommandOutput extends UpdateSecretResponse, __MetadataBearer {}

/**
 * <p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p>
 *          <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p>
 *
 *          <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than
 *       once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version
 *       of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not
 *       remove versions created less than 24 hours ago. If you update the secret value more
 *       than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach
 *       the quota for secret versions.</p>
 *          <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new
 *       secret version, Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new
 *       version. </p>
 *          <p>If you call this operation with a <code>VersionId</code> that matches an existing version's
 *       <code>ClientRequestToken</code>, the operation results in an error. You can't modify an existing
 *       version, you can only create a new version. To remove a version, remove all staging labels from it. See
 *     <a>UpdateSecretVersionStage</a>.</p>
 *          <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key
 *       <code>aws/secretsmanager</code>. If this key doesn't already exist in your account, then Secrets Manager
 *       creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access
 *       to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time
 *       significant delay in returning the result.  </p>
 *          <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't
 *       use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed key. </p>
 *
 *          <p>To run this command, you must have <code>secretsmanager:UpdateSecret</code> permissions. If you use a
 *       customer managed key, you must also have <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permissions .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, UpdateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, UpdateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new UpdateSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecretCommandInput} for command's `input` shape.
 * @see {@link UpdateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class UpdateSecretCommand extends $Command<
  UpdateSecretCommandInput,
  UpdateSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecretCommandInput) {
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
  ): Handler<UpdateSecretCommandInput, UpdateSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "UpdateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecretCommandOutput> {
    return deserializeAws_json1_1UpdateSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
