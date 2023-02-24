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

import {
  UpdateSecretRequest,
  UpdateSecretRequestFilterSensitiveLog,
  UpdateSecretResponse,
  UpdateSecretResponseFilterSensitiveLog,
} from "../models/models_0";
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
 *          <p>To change a secret so that it is managed by another service, you need to recreate the secret in that service. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.</p>
 *          <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than
 *       once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version
 *       of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not
 *       remove versions created less than 24 hours ago. If you update the secret value more
 *       than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach
 *       the quota for secret versions.</p>
 *          <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new
 *       secret version, Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to the new
 *       version. Then it attaches the label <code>AWSPREVIOUS</code>
 *         to the version that <code>AWSCURRENT</code> was removed from.</p>
 *          <p>If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's
 *       <code>VersionId</code>, the operation results in an error. You can't modify an existing
 *       version, you can only create a new version. To remove a version, remove all staging labels from it. See
 *     <a>UpdateSecretVersionStage</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:UpdateSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>.
 *       If you use a customer managed key, you must also have <code>kms:GenerateDataKey</code> and
 *       <code>kms:Decrypt</code> permissions on the key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html">
 *         Secret encryption and decryption</a>.</p>
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

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSecretCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "UpdateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecretRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecretResponseFilterSensitiveLog,
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
