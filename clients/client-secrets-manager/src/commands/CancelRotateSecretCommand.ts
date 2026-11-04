// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelRotateSecretRequest, CancelRotateSecretResponse } from "../models/models_0";
import { CancelRotateSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelRotateSecretCommand}.
 */
export interface CancelRotateSecretCommandInput extends CancelRotateSecretRequest {}
/**
 * @public
 *
 * The output of {@link CancelRotateSecretCommand}.
 */
export interface CancelRotateSecretCommandOutput extends CancelRotateSecretResponse, __MetadataBearer {}

/**
 * Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation.
 *
 * If you cancel a rotation in progress, it can leave the `VersionStage` labels in an unexpected state. You might need to remove the staging label `AWSPENDING` from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label `AWSCURRENT` to the version that has `AWSPENDING`. To determine which version has a specific staging label, call ListSecretVersionIds. Then use UpdateSecretVersionStage to change staging labels. For more information, see [How rotation works](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html).
 *
 * To turn on automatic rotation again, call RotateSecret.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:CancelRotateSecret`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, CancelRotateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, CancelRotateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // CancelRotateSecretRequest
 *   SecretId: "STRING_VALUE", // required
 * };
 * const command = new CancelRotateSecretCommand(input);
 * const response = await client.send(command);
 * // { // CancelRotateSecretResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelRotateSecretCommandInput - {@link CancelRotateSecretCommandInput}
 * @returns {@link CancelRotateSecretCommandOutput}
 * @see {@link CancelRotateSecretCommandInput} for command's `input` shape.
 * @see {@link CancelRotateSecretCommandOutput} for command's `response` shape.
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
 * @example To cancel scheduled rotation for a secret
 * ```javascript
 * // The following example shows how to cancel rotation for a secret. The operation sets the RotationEnabled field to false and cancels all scheduled rotations. To resume scheduled rotations, you must re-enable rotation by calling the rotate-secret operation.
 * const input = {
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new CancelRotateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "Name"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelRotateSecretCommand extends command<CancelRotateSecretCommandInput, CancelRotateSecretCommandOutput>(
  _ep0,
  _mw0,
  "CancelRotateSecret",
  CancelRotateSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelRotateSecretRequest;
      output: CancelRotateSecretResponse;
    };
    sdk: {
      input: CancelRotateSecretCommandInput;
      output: CancelRotateSecretCommandOutput;
    };
  };
}
