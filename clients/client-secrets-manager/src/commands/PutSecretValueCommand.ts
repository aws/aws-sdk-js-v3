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
  PutSecretValueRequest,
  PutSecretValueRequestFilterSensitiveLog,
  PutSecretValueResponse,
  PutSecretValueResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutSecretValueCommand,
  serializeAws_json1_1PutSecretValueCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface PutSecretValueCommandInput extends PutSecretValueRequest {}
export interface PutSecretValueCommandOutput extends PutSecretValueResponse, __MetadataBearer {}

/**
 * <p>Creates a new version with a new encrypted secret value and attaches it to the secret. The
 *       version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p>
 *          <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than
 *       once every 10 minutes. When you update the secret value, Secrets Manager creates a new version
 *       of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not
 *       remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more
 *       than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach
 *       the quota for secret versions.</p>
 *          <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>.
 *       If you don't include <code>VersionStages</code>, then Secrets Manager automatically
 *       moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates
 *       the first version for the secret, then Secrets Manager
 *         automatically attaches the staging label <code>AWSCURRENT</code> to it.
 *     If this operation moves the staging label <code>AWSCURRENT</code> from another version to this
 *       version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to
 *       the version that <code>AWSCURRENT</code> was removed from.</p>
 *          <p>This operation is idempotent. If you call this operation with a <code>ClientRequestToken</code>
 *     that matches an existing version's VersionId, and you specify the
 *       same secret data, the operation succeeds but does nothing. However, if the secret data is
 *       different, then the operation fails because you can't modify an existing version; you can
 *       only create new ones.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:PutSecretValue</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
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
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class PutSecretValueCommand extends $Command<
  PutSecretValueCommandInput,
  PutSecretValueCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSecretValueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "PutSecretValueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSecretValueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutSecretValueResponseFilterSensitiveLog,
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
