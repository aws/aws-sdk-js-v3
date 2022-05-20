// smithy-typescript generated code
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

import { RotateSecretRequest, RotateSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RotateSecretCommand,
  serializeAws_json1_1RotateSecretCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface RotateSecretCommandInput extends RotateSecretRequest {}
export interface RotateSecretCommandOutput extends RotateSecretResponse, __MetadataBearer {}

/**
 * <p>Configures and starts the asynchronous process of rotating the secret. For more information about rotation,
 *       see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a>.</p>
 *          <p>If you include the
 *       configuration parameters, the operation sets the values for the secret and then immediately
 *       starts a rotation. If you don't include the configuration parameters, the operation starts a
 *       rotation with the values already stored in the secret. </p>
 *          <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must
 *       make sure the secret value is in the
 *         <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html"> JSON structure
 *         of a database secret</a>. In particular, if you want to use the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html#rotating-secrets-two-users"> alternating users strategy</a>, your secret must contain the ARN of a superuser
 *       secret.</p>
 *
 *          <p>To configure rotation, you also need the ARN of an Amazon Web Services Lambda function and the schedule
 *       for the rotation. The Lambda rotation function creates a new
 *       version of the secret and creates or updates the credentials on the database or service to
 *       match. After testing the new credentials, the function marks the new secret version with the staging
 *       label <code>AWSCURRENT</code>. Then anyone who retrieves the secret gets the new version. For more
 *       information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p>
 *          <p>You can create the Lambda rotation function based on the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_available-rotation-templates.html">rotation function templates</a> that Secrets Manager provides. Choose
 *       a template that matches your <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets_strategies.html">Rotation strategy</a>.</p>
 *          <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached
 *       to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any
 *       version. If the <code>AWSPENDING</code> staging label is present but not attached to the same
 *       version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code>
 *       assumes that a previous rotation request is still in progress and returns an error.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:RotateSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. You also need <code>lambda:InvokeFunction</code> permissions on the rotation function.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html">
 *         Permissions for rotation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RotateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RotateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateSecretCommandInput} for command's `input` shape.
 * @see {@link RotateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class RotateSecretCommand extends $Command<
  RotateSecretCommandInput,
  RotateSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RotateSecretCommandInput) {
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
  ): Handler<RotateSecretCommandInput, RotateSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "RotateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RotateSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RotateSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RotateSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RotateSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateSecretCommandOutput> {
    return deserializeAws_json1_1RotateSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
