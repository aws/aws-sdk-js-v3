// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSecretValueRequest, GetSecretValueResponse } from "../models/models_0";
import { GetSecretValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSecretValueCommand}.
 */
export interface GetSecretValueCommandInput extends GetSecretValueRequest {}
/**
 * @public
 *
 * The output of {@link GetSecretValueCommand}.
 */
export interface GetSecretValueCommandOutput extends GetSecretValueResponse, __MetadataBearer {}

/**
 * Retrieves the contents of the encrypted fields `SecretString` or `SecretBinary` from the specified version of a secret, whichever contains content.
 *
 * To retrieve the values for a group of secrets, call BatchGetSecretValue.
 *
 * We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see [Cache secrets for your applications](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html).
 *
 * To retrieve the previous version of a secret, use `VersionStage` and specify AWSPREVIOUS. To revert to the previous version of a secret, call [UpdateSecretVersionStage](https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html).
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:GetSecretValue`. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key `aws/secretsmanager`, then you also need `kms:Decrypt` permissions for that key. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // GetSecretValueRequest
 *   SecretId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   VersionStage: "STRING_VALUE",
 * };
 * const command = new GetSecretValueCommand(input);
 * const response = await client.send(command);
 * // { // GetSecretValueResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   SecretBinary: new Uint8Array(),
 * //   SecretString: "STRING_VALUE",
 * //   VersionStages: [ // SecretVersionStagesType
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetSecretValueCommandInput - {@link GetSecretValueCommandInput}
 * @returns {@link GetSecretValueCommandOutput}
 * @see {@link GetSecretValueCommandInput} for command's `input` shape.
 * @see {@link GetSecretValueCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link DecryptionFailure} (client fault)
 *
 * Secrets Manager can't decrypt the protected secret text using the provided KMS key.
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
 * @example To retrieve the encrypted secret value of a secret
 * ```javascript
 * // The following example shows how to retrieve a secret string value.
 * const input = {
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new GetSecretValueCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   CreatedDate: 1.523477145713E9,
 *   Name: "MyTestDatabaseSecret",
 *   SecretString: `{
 *   "username":"david",
 *   "password":"EXAMPLE-PASSWORD"
 * }
 * `,
 *   VersionId: "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
 *   VersionStages: [
 *     "AWSPREVIOUS"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSecretValueCommand extends command<GetSecretValueCommandInput, GetSecretValueCommandOutput>(
  _ep0,
  _mw0,
  "GetSecretValue",
  GetSecretValue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecretValueRequest;
      output: GetSecretValueResponse;
    };
    sdk: {
      input: GetSecretValueCommandInput;
      output: GetSecretValueCommandOutput;
    };
  };
}
