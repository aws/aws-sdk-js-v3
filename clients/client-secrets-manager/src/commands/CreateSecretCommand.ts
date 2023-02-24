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
  CreateSecretRequest,
  CreateSecretRequestFilterSensitiveLog,
  CreateSecretResponse,
  CreateSecretResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateSecretCommand,
  serializeAws_json1_1CreateSecretCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface CreateSecretCommandInput extends CreateSecretRequest {}
export interface CreateSecretCommandOutput extends CreateSecretResponse, __MetadataBearer {}

/**
 * <p>Creates a new secret. A <i>secret</i> can be a password, a set of
 *       credentials such as a user name and password, an OAuth token, or other secret information
 *       that you store in an encrypted form in Secrets Manager. The secret also
 *       includes the connection information to access a database or other service, which Secrets Manager
 *       doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the
 *       important information needed to manage the secret.</p>
 *          <p>For secrets that use <i>managed rotation</i>, you need to create the secret through the managing service. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.
 *
 *     </p>
 *          <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p>
 *          <p>To create a secret, you can provide the secret value to be encrypted in either the
 *       <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both.
 *       If you include <code>SecretString</code> or <code>SecretBinary</code>
 *       then Secrets Manager creates an initial secret version and automatically attaches the staging
 *       label <code>AWSCURRENT</code> to it.</p>
 *          <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret,
 *       you must make sure the JSON you store in the <code>SecretString</code> matches the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html">JSON structure of
 *         a database secret</a>.</p>
 *          <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key
 *       <code>aws/secretsmanager</code>. If this key
 *       doesn't already exist in your account, then Secrets Manager creates it for you automatically. All
 *       users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>.
 *       Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the
 *       result.</p>
 *          <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then
 *       you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create
 *       and use a customer managed KMS key. </p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:CreateSecret</code>. If you
 *       include tags in the secret, you also need <code>secretsmanager:TagResource</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 *          <p>To encrypt the secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permission to the key. </p>
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
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class CreateSecretCommand extends $Command<
  CreateSecretCommandInput,
  CreateSecretCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSecretCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "CreateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSecretRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSecretResponseFilterSensitiveLog,
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
