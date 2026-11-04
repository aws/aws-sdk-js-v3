// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSecretRequest, UpdateSecretResponse } from "../models/models_0";
import { UpdateSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSecretCommand}.
 */
export interface UpdateSecretCommandInput extends UpdateSecretRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecretCommand}.
 */
export interface UpdateSecretCommandOutput extends UpdateSecretResponse, __MetadataBearer {}

/**
 * Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use PutSecretValue.
 *
 * To change the rotation configuration of a secret, use RotateSecret instead.
 *
 * To change a secret so that it is managed by another service, you need to recreate the secret in that service. See [Secrets Manager secrets managed by other Amazon Web Services services](https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html).
 *
 * We recommend you avoid calling `UpdateSecret` at a sustained rate of more than once every 10 minutes. When you call `UpdateSecret` to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.
 *
 * If you include `SecretString` or `SecretBinary` to create a new secret version, Secrets Manager automatically moves the staging label `AWSCURRENT` to the new version. Then it attaches the label `AWSPREVIOUS` to the version that `AWSCURRENT` was removed from.
 *
 * If you call this operation with a `ClientRequestToken` that matches an existing version's `VersionId`, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See UpdateSecretVersionStage.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except `SecretBinary` or `SecretString` because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:UpdateSecret`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html). If you use a customer managed key, you must also have `kms:GenerateDataKey`, `kms:Encrypt`, and `kms:Decrypt` permissions on the key. If you change the KMS key and you don't have `kms:Encrypt` permission to the new key, Secrets Manager does not re-encrypt existing secret versions with the new key. For more information, see [Secret encryption and decryption](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html).
 *
 * > **Important:** When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to [Mitigate the risks of using command-line tools to store Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security_cli-exposure-risks.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, UpdateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, UpdateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // UpdateSecretRequest
 *   SecretId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   SecretBinary: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   SecretString: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 * };
 * const command = new UpdateSecretCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecretResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSecretCommandInput - {@link UpdateSecretCommandInput}
 * @returns {@link UpdateSecretCommandOutput}
 * @see {@link UpdateSecretCommandInput} for command's `input` shape.
 * @see {@link UpdateSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link DecryptionFailure} (client fault)
 *
 * Secrets Manager can't decrypt the protected secret text using the provided KMS key.
 *
 * @throws {@link EncryptionFailure} (client fault)
 *
 * Secrets Manager can't encrypt the protected secret text using the provided KMS key. Check that the KMS key is available, enabled, and not in an invalid state. For more information, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html).
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request failed because it would exceed one of the Secrets Manager quotas.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The resource policy has syntax errors.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * The request failed because you did not complete all the prerequisite steps.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * A resource with the ID you requested already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Secrets Manager can't find the resource that you asked for.
 *
 * @throws {@link SecretsManagerServiceException}
 *
 * Base exception class for all service exceptions from SecretsManager service.
 *
 * @example To create a new version of the encrypted secret value
 * ```javascript
 * // The following example shows how to create a new version of the secret by updating the SecretString field. Alternatively, you can use the put-secret-value operation.
 * const input = {
 *   SecretId: "MyTestDatabaseSecret",
 *   SecretString: "{JSON STRING WITH CREDENTIALS}"
 * };
 * const command = new UpdateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "aws:arn:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret",
 *   VersionId: "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE"
 * }
 * *\/
 * ```
 *
 * @example To update the description of a secret
 * ```javascript
 * // The following example shows how to modify the description of a secret.
 * const input = {
 *   ClientRequestToken: "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE",
 *   Description: "This is a new description for the secret.",
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new UpdateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret"
 * }
 * *\/
 * ```
 *
 * @example To update the KMS key associated with a secret
 * ```javascript
 * // This example shows how to update the KMS customer managed key (CMK) used to encrypt the secret value. The KMS CMK must be in the same region as the secret.
 * const input = {
 *   KmsKeyId: "arn:aws:kms:us-west-2:123456789012:key/EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new UpdateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSecretCommand extends command<UpdateSecretCommandInput, UpdateSecretCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSecret",
  UpdateSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecretRequest;
      output: UpdateSecretResponse;
    };
    sdk: {
      input: UpdateSecretCommandInput;
      output: UpdateSecretCommandOutput;
    };
  };
}
