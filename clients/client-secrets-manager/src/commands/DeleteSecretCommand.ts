// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteSecretRequest, DeleteSecretResponse } from "../models/models_0";
import { de_DeleteSecretCommand, se_DeleteSecretCommand } from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSecretCommand}.
 */
export interface DeleteSecretCommandInput extends DeleteSecretRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecretCommand}.
 */
export interface DeleteSecretCommandOutput extends DeleteSecretResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a secret and all of its versions. You can specify a recovery
 *       window during which you can restore the secret. The minimum recovery window is 7 days.
 *       The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to
 *       the secret that specifies the end of the recovery window. At the end of the recovery window,
 *       Secrets Manager deletes the secret permanently.</p>
 *          <p>You can't delete a primary secret that is replicated to other Regions. You must first delete the
 *     replicas using <a>RemoveRegionsFromReplication</a>, and then delete the primary secret.
 *     When you delete a replica, it is deleted immediately.</p>
 *          <p>You can't directly delete a version of a secret. Instead, you remove all staging labels
 *     from the version using <a>UpdateSecretVersionStage</a>. This marks the version as deprecated,
 *     and then Secrets Manager can automatically delete the version in the background.</p>
 *          <p>To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm
 *     to alert you to any attempts to access a secret during the recovery window. For more information,
 *     see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring_cloudwatch_deleted-secrets.html">
 *     Monitor secrets scheduled for deletion</a>.</p>
 *          <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a
 *         background task with low priority. There is no guarantee of a specific time after the
 *         recovery window for the permanent delete to occur.</p>
 *          <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to
 *       remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p>
 *          <p>When a secret is scheduled for deletion, you cannot retrieve the secret value.
 *       You must first cancel the deletion with <a>RestoreSecret</a> and then you can retrieve the secret.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:DeleteSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DeleteSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DeleteSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const input = { // DeleteSecretRequest
 *   SecretId: "STRING_VALUE", // required
 *   RecoveryWindowInDays: Number("long"),
 *   ForceDeleteWithoutRecovery: true || false,
 * };
 * const command = new DeleteSecretCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSecretResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DeletionDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeleteSecretCommandInput - {@link DeleteSecretCommandInput}
 * @returns {@link DeleteSecretCommandOutput}
 * @see {@link DeleteSecretCommandInput} for command's `input` shape.
 * @see {@link DeleteSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The parameter name or value is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>A parameter value is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>The secret is scheduled for deletion.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *             <li>
 *                <p>The secret is managed by another service, and you must use that service to update it.
 *           For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Secrets Manager can't find the resource that you asked for.</p>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 * @example To delete a secret
 * ```javascript
 * // The following example shows how to delete a secret. The secret stays in your account in a deprecated and inaccessible state until the recovery window ends. After the date and time in the DeletionDate response field has passed, you can no longer recover this secret with restore-secret.
 * const input = {
 *   "RecoveryWindowInDays": 7,
 *   "SecretId": "MyTestDatabaseSecret1"
 * };
 * const command = new DeleteSecretCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   "DeletionDate": "1524085349.095",
 *   "Name": "MyTestDatabaseSecret"
 * }
 * *\/
 * // example id: to-delete-a-secret-1523996905092
 * ```
 *
 */
export class DeleteSecretCommand extends $Command<
  DeleteSecretCommandInput,
  DeleteSecretCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteSecretCommandInput) {
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
  ): Handler<DeleteSecretCommandInput, DeleteSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteSecretCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "DeleteSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSecretCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSecretCommandOutput> {
    return de_DeleteSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
