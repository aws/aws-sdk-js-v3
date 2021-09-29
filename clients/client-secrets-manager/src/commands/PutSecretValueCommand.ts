import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { PutSecretValueRequest, PutSecretValueResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutSecretValueCommand,
  serializeAws_json1_1PutSecretValueCommand,
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

export interface PutSecretValueCommandInput extends PutSecretValueRequest {}
export interface PutSecretValueCommandOutput extends PutSecretValueResponse, __MetadataBearer {}

/**
 * <p>Stores a new encrypted secret value in the specified secret. To do this, the operation
 *       creates a new version and attaches it to the secret. The version can contain a new
 *         <code>SecretString</code> value or a new <code>SecretBinary</code> value. You can also
 *       specify the staging labels that are initially attached to the new version.</p>
 *          <note>
 *             <p>The Secrets Manager console uses only the <code>SecretString</code> field. To add binary data to a
 *         secret with the <code>SecretBinary</code> field you must use the Amazon Web Services CLI or one of the
 *         Amazon Web Services SDKs.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>If this operation creates the first version for the secret then Secrets Manager
 *           automatically attaches the staging label <code>AWSCURRENT</code> to the new version.</p>
 *             </li>
 *             <li>
 *                <p>If you do not specify a value for VersionStages then Secrets Manager automatically
 *           moves the staging label <code>AWSCURRENT</code> to this new version.</p>
 *             </li>
 *             <li>
 *                <p>If this operation moves the staging label <code>AWSCURRENT</code> from another version to this
 *           version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to
 *           the version that <code>AWSCURRENT</code> was removed from.</p>
 *             </li>
 *             <li>
 *                <p>This operation is idempotent. If a version with a <code>VersionId</code> with the same
 *           value as the <code>ClientRequestToken</code> parameter already exists and you specify the
 *           same secret data, the operation succeeds but does nothing. However, if the secret data is
 *           different, then the operation fails because you cannot modify an existing version; you can
 *           only create new ones.</p>
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
 *                <p>secretsmanager:PutSecretValue</p>
 *             </li>
 *             <li>
 *                <p>kms:GenerateDataKey - needed only if you use a customer-managed Amazon Web Services KMS key to encrypt
 *           the secret. You do not need this permission to use the account's default Amazon Web Services managed CMK
 *           for Secrets Manager.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve the encrypted value you store in the version of a secret, use <a>GetSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To create a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To get the details for a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, PutSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, PutSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new PutSecretValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSecretValueCommandInput} for command's `input` shape.
 * @see {@link PutSecretValueCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutSecretValueCommand extends $Command<
  PutSecretValueCommandInput,
  PutSecretValueCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSecretValueCommandInput) {
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
  ): Handler<PutSecretValueCommandInput, PutSecretValueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "PutSecretValueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSecretValueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutSecretValueResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSecretValueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutSecretValueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSecretValueCommandOutput> {
    return deserializeAws_json1_1PutSecretValueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
