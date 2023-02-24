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
  ListSecretsRequest,
  ListSecretsRequestFilterSensitiveLog,
  ListSecretsResponse,
  ListSecretsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListSecretsCommand,
  serializeAws_json1_1ListSecretsCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface ListSecretsCommandInput extends ListSecretsRequest {}
export interface ListSecretsCommandOutput extends ListSecretsResponse, __MetadataBearer {}

/**
 * <p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets
 *       that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p>
 *          <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes.
 *       To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p>
 *          <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p>
 *          <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>,
 *       call <a>GetSecretValue</a>.</p>
 *          <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:ListSecrets</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListSecretsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListSecretsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ListSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecretsCommandInput} for command's `input` shape.
 * @see {@link ListSecretsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class ListSecretsCommand extends $Command<
  ListSecretsCommandInput,
  ListSecretsCommandOutput,
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

  constructor(readonly input: ListSecretsCommandInput) {
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
  ): Handler<ListSecretsCommandInput, ListSecretsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSecretsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ListSecretsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecretsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSecretsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecretsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecretsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecretsCommandOutput> {
    return deserializeAws_json1_1ListSecretsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
