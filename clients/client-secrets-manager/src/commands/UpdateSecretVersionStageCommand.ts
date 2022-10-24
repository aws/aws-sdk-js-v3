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
  UpdateSecretVersionStageRequest,
  UpdateSecretVersionStageRequestFilterSensitiveLog,
  UpdateSecretVersionStageResponse,
  UpdateSecretVersionStageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSecretVersionStageCommand,
  serializeAws_json1_1UpdateSecretVersionStageCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface UpdateSecretVersionStageCommandInput extends UpdateSecretVersionStageRequest {}
export interface UpdateSecretVersionStageCommandOutput extends UpdateSecretVersionStageResponse, __MetadataBearer {}

/**
 * <p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to
 *       track a version as it progresses through the secret rotation process. Each staging label can be
 *       attached to only one version at a time. To add a staging label to a version when it is already
 *       attached to another version, Secrets Manager first removes it from the other version first and
 *       then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p>
 *          <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added
 *       to the existing list of staging labels for the version. </p>
 *          <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this
 *       call.</p>
 *          <note>
 *             <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code>
 *         to the version that <code>AWSCURRENT</code> was removed from.</p>
 *          </note>
 *          <p>If this action results in the last label being removed from a version, then the version is
 *       considered to be 'deprecated' and can be deleted by Secrets Manager.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:UpdateSecretVersionStage</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, UpdateSecretVersionStageCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, UpdateSecretVersionStageCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new UpdateSecretVersionStageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecretVersionStageCommandInput} for command's `input` shape.
 * @see {@link UpdateSecretVersionStageCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class UpdateSecretVersionStageCommand extends $Command<
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput,
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

  constructor(readonly input: UpdateSecretVersionStageCommandInput) {
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
  ): Handler<UpdateSecretVersionStageCommandInput, UpdateSecretVersionStageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSecretVersionStageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "UpdateSecretVersionStageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecretVersionStageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecretVersionStageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSecretVersionStageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSecretVersionStageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecretVersionStageCommandOutput> {
    return deserializeAws_json1_1UpdateSecretVersionStageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
