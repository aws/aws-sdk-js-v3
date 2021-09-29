import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { UpdateSecretRequest, UpdateSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSecretCommand,
  serializeAws_json1_1UpdateSecretCommand,
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

export interface UpdateSecretCommandInput extends UpdateSecretRequest {}
export interface UpdateSecretCommandOutput extends UpdateSecretResponse, __MetadataBearer {}

/**
 * <p>Modifies many of the details of the specified secret. If you include a
 *         <code>ClientRequestToken</code> and <i>either</i>
 *             <code>SecretString</code> or <code>SecretBinary</code> then it also creates a new version
 *       attached to the secret.</p>
 *          <p>To modify the rotation configuration of a secret, use <a>RotateSecret</a>
 *       instead.</p>
 *          <note>
 *             <p>The Secrets Manager console uses only the <code>SecretString</code> parameter and therefore limits
 *         you to encrypting and storing only a text string. To encrypt and store binary data as part
 *         of the version of a secret, you must use either the Amazon Web Services CLI or one of the Amazon Web Services
 *         SDKs.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>If a version with a <code>VersionId</code> with the same value as the
 *             <code>ClientRequestToken</code> parameter already exists, the operation results in an
 *           error. You cannot modify an existing version, you can only create a new version.</p>
 *             </li>
 *             <li>
 *                <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new
 *           secret version, Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new
 *           version. </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If you call an operation to encrypt or decrypt the <code>SecretString</code>
 *           or <code>SecretBinary</code> for a secret in the same account as the calling user and that
 *           secret doesn't specify a Amazon Web Services KMS encryption key, Secrets Manager uses the account's default
 *           Amazon Web Services managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key
 *           doesn't already exist in your account then Secrets Manager creates it for you automatically. All
 *           users and roles in the same Amazon Web Services account automatically have access to use the default CMK.
 *           Note that if an Secrets Manager API call results in Amazon Web Services creating the account's
 *           Amazon Web Services-managed CMK, it can result in a one-time significant delay in returning the
 *           result.</p>
 *                </li>
 *                <li>
 *                   <p>If the secret resides in a different Amazon Web Services account from the credentials calling an API that
 *           requires encryption or decryption of the secret value then you must create and use a custom
 *           Amazon Web Services KMS CMK because you can't access the default CMK for the account using credentials
 *           from a different Amazon Web Services account. Store the ARN of the CMK in the secret when you create the
 *           secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an
 *           API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code>
 *           using credentials from a different account then the Amazon Web Services KMS key policy must grant cross-account
 *           access to that other account's user or role for both the kms:GenerateDataKey and
 *           kms:Decrypt operations.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:UpdateSecret</p>
 *             </li>
 *             <li>
 *                <p>kms:GenerateDataKey - needed only if you use a custom Amazon Web Services KMS key to encrypt the secret.
 *           You do not need this permission to use the account's Amazon Web Services managed CMK for
 *           Secrets Manager.</p>
 *             </li>
 *             <li>
 *                <p>kms:Decrypt - needed only if you use a custom Amazon Web Services KMS key to encrypt the secret. You do
 *           not need this permission to use the account's Amazon Web Services managed CMK for Secrets Manager.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a new secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To add only a new version to an existing secret, use <a>PutSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To get the details for a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list the versions contained in a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
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
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
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
