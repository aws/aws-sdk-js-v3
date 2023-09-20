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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { RotateSecretRequest, RotateSecretResponse } from "../models/models_0";
import { de_RotateSecretCommand, se_RotateSecretCommand } from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RotateSecretCommand}.
 */
export interface RotateSecretCommandInput extends RotateSecretRequest {}
/**
 * @public
 *
 * The output of {@link RotateSecretCommand}.
 */
export interface RotateSecretCommandOutput extends RotateSecretResponse, __MetadataBearer {}

/**
 * @public
 * <p>Configures and starts the asynchronous process of rotating the secret. For information about rotation,
 *       see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a> in the <i>Secrets Manager User Guide</i>. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. </p>
 *          <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached
 *       to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any
 *       version. If the <code>AWSPENDING</code> staging label is present but not attached to the same
 *       version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code>
 *       assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the <code>AWSPENDING</code> staging label might be attached to an empty secret version. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html">Troubleshoot rotation</a> in the <i>Secrets Manager User Guide</i>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
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
 * const input = { // RotateSecretRequest
 *   SecretId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   RotationLambdaARN: "STRING_VALUE",
 *   RotationRules: { // RotationRulesType
 *     AutomaticallyAfterDays: Number("long"),
 *     Duration: "STRING_VALUE",
 *     ScheduleExpression: "STRING_VALUE",
 *   },
 *   RotateImmediately: true || false,
 * };
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * // { // RotateSecretResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RotateSecretCommandInput - {@link RotateSecretCommandInput}
 * @returns {@link RotateSecretCommandOutput}
 * @see {@link RotateSecretCommandInput} for command's `input` shape.
 * @see {@link RotateSecretCommandOutput} for command's `response` shape.
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
 * @example To configure rotation for a secret
 * ```javascript
 * // The following example configures rotation for a secret using a cron expression. The first rotation happens immediately after the changes are stored in the secret. The rotation schedule is the first and 15th day of every month. The rotation window begins at 4:00 PM UTC and ends at 6:00 PM.
 * const input = {
 *   "RotationLambdaARN": "arn:aws:lambda:us-west-2:123456789012:function:MyTestDatabaseRotationLambda",
 *   "RotationRules": {
 *     "Duration": "2h",
 *     "ScheduleExpression": "cron(0 16 1,15 * ? *)"
 *   },
 *   "SecretId": "MyTestDatabaseSecret"
 * };
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   "Name": "MyTestDatabaseSecret",
 *   "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2"
 * }
 * *\/
 * // example id: to-configure-rotation-for-a-secret-1524001629475
 * ```
 *
 * @example To request an immediate rotation for a secret
 * ```javascript
 * // The following example requests an immediate invocation of the secret's Lambda rotation function. It assumes that the specified secret already has rotation configured. The rotation function runs asynchronously in the background.
 * const input = {
 *   "SecretId": "MyTestDatabaseSecret"
 * };
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   "Name": "MyTestDatabaseSecret",
 *   "VersionId": "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2"
 * }
 * *\/
 * // example id: to-request-an-immediate-rotation-for-a-secret-1524001949004
 * ```
 *
 */
export class RotateSecretCommand extends $Command<
  RotateSecretCommandInput,
  RotateSecretCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, RotateSecretCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "RotateSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "secretsmanager",
        operation: "RotateSecret",
      },
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
  private serialize(input: RotateSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RotateSecretCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RotateSecretCommandOutput> {
    return de_RotateSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
