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

import { RestoreSecretRequest, RestoreSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RestoreSecretCommand,
  serializeAws_json1_1RestoreSecretCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface RestoreSecretCommandInput extends RestoreSecretRequest {}
export interface RestoreSecretCommandOutput extends RestoreSecretResponse, __MetadataBearer {}

/**
 * <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time
 *       stamp. You can access a secret again after it has been restored.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:RestoreSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RestoreSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RestoreSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new RestoreSecretCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreSecretCommandInput} for command's `input` shape.
 * @see {@link RestoreSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class RestoreSecretCommand extends $Command<
  RestoreSecretCommandInput,
  RestoreSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreSecretCommandInput) {
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
  ): Handler<RestoreSecretCommandInput, RestoreSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "RestoreSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreSecretCommandOutput> {
    return deserializeAws_json1_1RestoreSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
