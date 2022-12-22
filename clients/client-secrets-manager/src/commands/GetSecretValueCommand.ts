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
  GetSecretValueRequest,
  GetSecretValueRequestFilterSensitiveLog,
  GetSecretValueResponse,
  GetSecretValueResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSecretValueCommand,
  serializeAws_json1_1GetSecretValueCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface GetSecretValueCommandInput extends GetSecretValueRequest {}
export interface GetSecretValueCommandOutput extends GetSecretValueResponse, __MetadataBearer {}

/**
 * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or
 *         <code>SecretBinary</code> from the specified version of a secret, whichever contains
 *       content.</p>
 *          <p>We recommend that you cache your secret values by using client-side caching.
 *       Caching secrets improves speed and reduces your costs. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Cache secrets for
 *         your applications</a>.</p>
 *          <p>To retrieve the previous version of a secret, use <code>VersionStage</code> and specify
 *       AWSPREVIOUS. To revert to the previous version of a secret, call <a href="https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html">UpdateSecretVersionStage</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:GetSecretValue</code>.
 *       If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key
 *       <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new GetSecretValueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSecretValueCommandInput} for command's `input` shape.
 * @see {@link GetSecretValueCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class GetSecretValueCommand extends $Command<
  GetSecretValueCommandInput,
  GetSecretValueCommandOutput,
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

  constructor(readonly input: GetSecretValueCommandInput) {
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
  ): Handler<GetSecretValueCommandInput, GetSecretValueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSecretValueCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "GetSecretValueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSecretValueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSecretValueResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSecretValueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSecretValueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSecretValueCommandOutput> {
    return deserializeAws_json1_1GetSecretValueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
