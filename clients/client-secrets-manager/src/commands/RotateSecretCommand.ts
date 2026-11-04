// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RotateSecretRequest, RotateSecretResponse } from "../models/models_0";
import { RotateSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Configures and starts the asynchronous process of rotating the secret. For information about rotation, see [Rotate secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html) in the *Secrets Manager User Guide*. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret.
 *
 * When rotation is successful, the `AWSPENDING` staging label might be attached to the same version as the `AWSCURRENT` version, or it might not be attached to any version. If the `AWSPENDING` staging label is present but not attached to the same version as `AWSCURRENT`, then any later invocation of `RotateSecret` assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the `AWSPENDING` staging label might be attached to an empty secret version. For more information, see [Troubleshoot rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html) in the *Secrets Manager User Guide*.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:RotateSecret`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html). You also need `lambda:InvokeFunction` permissions on the rotation function. For more information, see [Permissions for rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RotateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RotateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
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
 *   ExternalSecretRotationMetadata: [ // ExternalSecretRotationMetadataType
 *     { // ExternalSecretRotationMetadataItem
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ExternalSecretRotationRoleArn: "STRING_VALUE",
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The parameter name or value is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * A parameter value is not valid for the current state of the resource.
 *
 * Possible causes:
 *
 * - The secret is scheduled for deletion.
 * - You tried to enable rotation on a secret that doesn't already have a Lambda function ARN configured and you didn't include such an ARN as a parameter in this call.
 * - The secret is managed by another service, and you must use that service to update it. For more information, see [Secrets managed by other Amazon Web Services services](https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html).
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Secrets Manager can't find the resource that you asked for.
 *
 * @throws {@link SecretsManagerServiceException}
 *
 * Base exception class for all service exceptions from SecretsManager service.
 *
 * @example To configure rotation for a secret
 * ```javascript
 * // The following example configures rotation for a secret using a cron expression. The first rotation happens immediately after the changes are stored in the secret. The rotation schedule is the first and 15th day of every month. The rotation window begins at 4:00 PM UTC and ends at 6:00 PM.
 * const input = {
 *   RotationLambdaARN: "arn:aws:lambda:us-west-2:123456789012:function:MyTestDatabaseRotationLambda",
 *   RotationRules: {
 *     Duration: "2h",
 *     ScheduleExpression: "cron(0 16 1,15 * ? *)"
 *   },
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret",
 *   VersionId: "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2"
 * }
 * *\/
 * ```
 *
 * @example To request an immediate rotation for a secret
 * ```javascript
 * // The following example requests an immediate invocation of the secret's Lambda rotation function. It assumes that the specified secret already has rotation configured. The rotation function runs asynchronously in the background.
 * const input = {
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new RotateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret",
 *   VersionId: "EXAMPLE2-90ab-cdef-fedc-ba987SECRET2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RotateSecretCommand extends command<RotateSecretCommandInput, RotateSecretCommandOutput>(
  _ep0,
  _mw0,
  "RotateSecret",
  RotateSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotateSecretRequest;
      output: RotateSecretResponse;
    };
    sdk: {
      input: RotateSecretCommandInput;
      output: RotateSecretCommandOutput;
    };
  };
}
