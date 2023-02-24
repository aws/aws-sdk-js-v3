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
  CancelRotateSecretRequest,
  CancelRotateSecretRequestFilterSensitiveLog,
  CancelRotateSecretResponse,
  CancelRotateSecretResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelRotateSecretCommand,
  serializeAws_json1_1CancelRotateSecretCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface CancelRotateSecretCommandInput extends CancelRotateSecretRequest {}
export interface CancelRotateSecretCommandOutput extends CancelRotateSecretResponse, __MetadataBearer {}

/**
 * <p>Turns off automatic rotation, and if a rotation is currently in
 *       progress, cancels the rotation.</p>
 *          <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code>
 *       labels in an unexpected state. You might
 *       need to remove the staging label <code>AWSPENDING</code> from the partially created version.
 *       You also need to determine whether to roll back to the previous version of the secret
 *       by moving the staging label <code>AWSCURRENT</code> to the version that has <code>AWSPENDING</code>.
 *       To determine
 *       which version has a specific staging label, call <a>ListSecretVersionIds</a>. Then use
 *      <a>UpdateSecretVersionStage</a> to change staging labels.
 *      For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p>
 *          <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:CancelRotateSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, CancelRotateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, CancelRotateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new CancelRotateSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelRotateSecretCommandInput} for command's `input` shape.
 * @see {@link CancelRotateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class CancelRotateSecretCommand extends $Command<
  CancelRotateSecretCommandInput,
  CancelRotateSecretCommandOutput,
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

  constructor(readonly input: CancelRotateSecretCommandInput) {
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
  ): Handler<CancelRotateSecretCommandInput, CancelRotateSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelRotateSecretCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "CancelRotateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelRotateSecretRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelRotateSecretResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelRotateSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelRotateSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelRotateSecretCommandOutput> {
    return deserializeAws_json1_1CancelRotateSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
