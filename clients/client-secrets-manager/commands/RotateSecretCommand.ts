import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { RotateSecretRequest, RotateSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RotateSecretCommand,
  serializeAws_json1_1RotateSecretCommand,
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

export interface RotateSecretCommandInput extends RotateSecretRequest {}
export interface RotateSecretCommandOutput extends RotateSecretResponse, __MetadataBearer {}

/**
 * <p>Configures and starts the asynchronous process of rotating this secret. If you include the
 *       configuration parameters, the operation sets those values for the secret and then immediately
 *       starts a rotation. If you do not include the configuration parameters, the operation starts a
 *       rotation with the values already stored in the secret. After the rotation completes, the
 *       protected service and its clients all use the new version of the secret. </p>
 *          <p>This required configuration information includes the ARN of an Amazon Web Services Lambda function and
 *       optionally, the time between scheduled rotations. The Lambda rotation function creates a new
 *       version of the secret and creates or updates the credentials on the protected service to
 *       match. After testing the new credentials, the function marks the new secret with the staging
 *       label <code>AWSCURRENT</code> so that your clients all immediately begin to use the new version. For more
 *       information about rotating secrets and how to configure a Lambda function to rotate the
 *       secrets for your protected service, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotating Secrets in Amazon Web Services Secrets Manager</a> in the
 *         <i>Amazon Web Services Secrets Manager User Guide</i>.</p>
 *          <p>Secrets Manager schedules the next rotation when the previous
 *     one completes. Secrets Manager schedules the date by adding the rotation interval (number of days) to the
 *     actual date of the last rotation. The service chooses the hour within that 24-hour date window
 *     randomly. The minute is also chosen somewhat randomly, but weighted towards the top of the hour
 *     and influenced by a variety of factors that help distribute load.</p>
 *          <p>The
 *       rotation function must end with the versions of the secret in one of two states:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>AWSPENDING</code> and <code>AWSCURRENT</code> staging labels are attached to the same version of
 *           the secret, or</p>
 *             </li>
 *             <li>
 *                <p>The <code>AWSPENDING</code> staging label is not attached to any version of the secret.</p>
 *             </li>
 *          </ul>
 *          <p>If the <code>AWSPENDING</code> staging label is present but not attached to the same version as
 *       <code>AWSCURRENT</code> then any later invocation of <code>RotateSecret</code> assumes that a previous
 *       rotation request is still in progress and returns an error.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:RotateSecret</p>
 *             </li>
 *             <li>
 *                <p>lambda:InvokeFunction (on the function specified in the secret's metadata)</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To list the secrets in your account, use <a>ListSecrets</a>.</p>
 *             </li>
 *             <li>
 *                <p>To get the details for a version of a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To create a new version of a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To attach staging labels to or remove staging labels from a version of a secret, use
 *             <a>UpdateSecretVersionStage</a>.</p>
 *             </li>
 *          </ul>
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
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
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
