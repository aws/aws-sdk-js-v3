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

import { UpdateSecretVersionStageRequest, UpdateSecretVersionStageResponse } from "../models/models_0";
import { de_UpdateSecretVersionStageCommand, se_UpdateSecretVersionStageCommand } from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecretVersionStageCommand}.
 */
export interface UpdateSecretVersionStageCommandInput extends UpdateSecretVersionStageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecretVersionStageCommand}.
 */
export interface UpdateSecretVersionStageCommandOutput extends UpdateSecretVersionStageResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateSecretVersionStageRequest
 *   SecretId: "STRING_VALUE", // required
 *   VersionStage: "STRING_VALUE", // required
 *   RemoveFromVersionId: "STRING_VALUE",
 *   MoveToVersionId: "STRING_VALUE",
 * };
 * const command = new UpdateSecretVersionStageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecretVersionStageResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSecretVersionStageCommandInput - {@link UpdateSecretVersionStageCommandInput}
 * @returns {@link UpdateSecretVersionStageCommandOutput}
 * @see {@link UpdateSecretVersionStageCommandInput} for command's `input` shape.
 * @see {@link UpdateSecretVersionStageCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it would exceed one of the Secrets Manager quotas.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Secrets Manager can't find the resource that you asked for.</p>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 * @example To add a staging label attached to a version of a secret
 * ```javascript
 * // The following example shows you how to add a staging label to a version of a secret. You can review the results by running the operation ListSecretVersionIds and viewing the VersionStages response field for the affected version.
 * const input = {
 *   "MoveToVersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
 *   "SecretId": "MyTestDatabaseSecret",
 *   "VersionStage": "STAGINGLABEL1"
 * };
 * const command = new UpdateSecretVersionStageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   "Name": "MyTestDatabaseSecret"
 * }
 * *\/
 * // example id: to-add-a-staging-label-attached-to-a-version-of-a-secret-1524004783841
 * ```
 *
 * @example To delete a staging label attached to a version of a secret
 * ```javascript
 * // The following example shows you how to delete a staging label that is attached to a version of a secret. You can review the results by running the operation ListSecretVersionIds and viewing the VersionStages response field for the affected version.
 * const input = {
 *   "RemoveFromVersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
 *   "SecretId": "MyTestDatabaseSecret",
 *   "VersionStage": "STAGINGLABEL1"
 * };
 * const command = new UpdateSecretVersionStageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   "Name": "MyTestDatabaseSecret"
 * }
 * *\/
 * // example id: to-delete-a-staging-label-attached-to-a-version-of-a-secret-1524004862181
 * ```
 *
 * @example To move a staging label from one version of a secret to another
 * ```javascript
 * // The following example shows you how to move a staging label that is attached to one version of a secret to a different version. You can review the results by running the operation ListSecretVersionIds and viewing the VersionStages response field for the affected version.
 * const input = {
 *   "MoveToVersionId": "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2",
 *   "RemoveFromVersionId": "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
 *   "SecretId": "MyTestDatabaseSecret",
 *   "VersionStage": "AWSCURRENT"
 * };
 * const command = new UpdateSecretVersionStageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   "Name": "MyTestDatabaseSecret"
 * }
 * *\/
 * // example id: to-move-a-staging-label-from-one-version-of-a-secret-to-another-1524004963841
 * ```
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

  /**
   * @public
   */
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
  private serialize(input: UpdateSecretVersionStageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSecretVersionStageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecretVersionStageCommandOutput> {
    return de_UpdateSecretVersionStageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
