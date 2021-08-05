import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { CreateSecretRequest, CreateSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSecretCommand,
  serializeAws_json1_1CreateSecretCommand,
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

export interface CreateSecretCommandInput extends CreateSecretRequest {}
export interface CreateSecretCommandOutput extends CreateSecretResponse, __MetadataBearer {}

/**
 * <p>Creates a new secret. A secret in Secrets Manager consists of both the protected secret data and the
 *       important information needed to manage the secret.</p>
 *          <p>Secrets Manager stores the encrypted secret data in one of a collection of "versions"
 *       associated with the secret. Each version contains a copy of the encrypted secret data. Each
 *       version is associated with one or more "staging labels" that identify where the version is in
 *       the rotation cycle. The <code>SecretVersionsToStages</code> field of the secret contains the
 *       mapping of staging labels to the active versions of the secret. Versions without a staging
 *       label are considered deprecated and not included in the list.</p>
 *          <p>You provide the secret data to be encrypted by putting text in either the
 *         <code>SecretString</code> parameter or binary data in the <code>SecretBinary</code>
 *       parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code>
 *       then Secrets Manager also creates an initial secret version and automatically attaches the staging
 *       label <code>AWSCURRENT</code> to the new version.</p>
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
 *          <p> </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:CreateSecret</p>
 *             </li>
 *             <li>
 *                <p>kms:GenerateDataKey - needed only if you use a customer-managed Amazon Web Services KMS key to encrypt
 *           the secret. You do not need this permission to use the account default Amazon Web Services managed CMK
 *           for Secrets Manager.</p>
 *             </li>
 *             <li>
 *                <p>kms:Decrypt - needed only if you use a customer-managed Amazon Web Services KMS key to encrypt the
 *           secret. You do not need this permission to use the account default Amazon Web Services managed CMK for
 *           Secrets Manager.</p>
 *             </li>
 *             <li>
 *                <p>secretsmanager:TagResource - needed only if you include the <code>Tags</code>
 *           parameter. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To delete a secret, use <a>DeleteSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To modify an existing secret, use <a>UpdateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To create a new version of a secret, use <a>PutSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the encrypted secure string and secure binary values, use <a>GetSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve all other details for a secret, use <a>DescribeSecret</a>. This
 *           does not include the encrypted secure string and secure binary values.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the list of secret versions associated with the current secret, use <a>DescribeSecret</a> and examine the <code>SecretVersionsToStages</code> response
 *           value.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, CreateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, CreateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new CreateSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecretCommandInput} for command's `input` shape.
 * @see {@link CreateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateSecretCommand extends $Command<
  CreateSecretCommandInput,
  CreateSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSecretCommandInput) {
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
  ): Handler<CreateSecretCommandInput, CreateSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "CreateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSecretCommandOutput> {
    return deserializeAws_json1_1CreateSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
