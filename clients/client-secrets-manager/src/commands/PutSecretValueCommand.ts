// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSecretValueRequest, PutSecretValueResponse } from "../models/models_0";
import { PutSecretValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSecretValueCommand}.
 */
export interface PutSecretValueCommandInput extends PutSecretValueRequest {}
/**
 * @public
 *
 * The output of {@link PutSecretValueCommand}.
 */
export interface PutSecretValueCommandOutput extends PutSecretValueResponse, __MetadataBearer {}

/**
 * Creates a new version of your secret by creating a new encrypted value and attaching it to the secret. version can contain a new `SecretString` value or a new `SecretBinary` value.
 *
 * Do not call `PutSecretValue` at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager keeps 100 of the most recent versions, but it keeps *all* secret versions created in the last 24 hours. If you call `PutSecretValue` more than once every 10 minutes, you will create more versions than Secrets Manager removes, and you will reach the quota for secret versions.
 *
 * You can specify the staging labels to attach to the new version in `VersionStages`. If you don't include `VersionStages`, then Secrets Manager automatically moves the staging label `AWSCURRENT` to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label `AWSCURRENT` to it. If this operation moves the staging label `AWSCURRENT` from another version to this version, then Secrets Manager also automatically moves the staging label `AWSPREVIOUS` to the version that `AWSCURRENT` was removed from.
 *
 * This operation is idempotent. If you call this operation with a `ClientRequestToken` that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except `SecretBinary`, `SecretString`, or `RotationToken` because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:PutSecretValue`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * > **Important:** When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to [Mitigate the risks of using command-line tools to store Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security_cli-exposure-risks.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, PutSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, PutSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // PutSecretValueRequest
 *   SecretId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   SecretBinary: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   SecretString: "STRING_VALUE",
 *   VersionStages: [ // SecretVersionStagesType
 *     "STRING_VALUE",
 *   ],
 *   RotationToken: "STRING_VALUE",
 * };
 * const command = new PutSecretValueCommand(input);
 * const response = await client.send(command);
 * // { // PutSecretValueResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   VersionStages: [ // SecretVersionStagesType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutSecretValueCommandInput - {@link PutSecretValueCommandInput}
 * @returns {@link PutSecretValueCommandOutput}
 * @see {@link PutSecretValueCommandInput} for command's `input` shape.
 * @see {@link PutSecretValueCommandOutput} for command's `response` shape.
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
 * @example To store a secret value in a new version of a secret
 * ```javascript
 * // The following example shows how to create a new version of the secret. Alternatively, you can use the update-secret command.
 * const input = {
 *   ClientRequestToken: "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
 *   SecretId: "MyTestDatabaseSecret",
 *   SecretString: `{"username":"david","password":"EXAMPLE-PASSWORD"}`
 * };
 * const command = new PutSecretValueCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret",
 *   VersionId: "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE",
 *   VersionStages: [
 *     "AWSCURRENT"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutSecretValueCommand extends command<PutSecretValueCommandInput, PutSecretValueCommandOutput>(
  _ep0,
  _mw0,
  "PutSecretValue",
  PutSecretValue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSecretValueRequest;
      output: PutSecretValueResponse;
    };
    sdk: {
      input: PutSecretValueCommandInput;
      output: PutSecretValueCommandOutput;
    };
  };
}
