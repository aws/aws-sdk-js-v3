// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSecretRequest, CreateSecretResponse } from "../models/models_0";
import { CreateSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSecretCommand}.
 */
export interface CreateSecretCommandInput extends CreateSecretRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecretCommand}.
 */
export interface CreateSecretCommandOutput extends CreateSecretResponse, __MetadataBearer {}

/**
 * Creates a new secret. A *secret* can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.
 *
 * For secrets that use *managed rotation*, you need to create the secret through the managing service. For more information, see [Secrets Manager secrets managed by other Amazon Web Services services](https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html).
 *
 * For information about creating a secret in the console, see [Create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html).
 *
 * To create a secret, you can provide the secret value to be encrypted in either the `SecretString` parameter or the `SecretBinary` parameter, but not both. If you include `SecretString` or `SecretBinary` then Secrets Manager creates an initial secret version and automatically attaches the staging label `AWSCURRENT` to it.
 *
 * For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the `SecretString` matches the [JSON structure of a database secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html).
 *
 * If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key `aws/secretsmanager`. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use `aws/secretsmanager`. Creating `aws/secretsmanager` can result in a one-time significant delay in returning the result.
 *
 * If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except `SecretBinary` or `SecretString` because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:CreateSecret`. If you include tags in the secret, you also need `secretsmanager:TagResource`. To add replica Regions, you must also have `secretsmanager:ReplicateSecretToRegions`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * To encrypt the secret with a KMS key other than `aws/secretsmanager`, you need `kms:GenerateDataKey` and `kms:Decrypt` permission to the key.
 *
 * > **Important:** When you enter commands in a command shell, there is a risk of the command history being accessed or utilities having access to your command parameters. This is a concern if the command includes the value of a secret. Learn how to [Mitigate the risks of using command-line tools to store Secrets Manager secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/security_cli-exposure-risks.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, CreateSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, CreateSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // CreateSecretRequest
 *   Name: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   SecretBinary: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   SecretString: "STRING_VALUE",
 *   Tags: [ // TagListType
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AddReplicaRegions: [ // AddReplicaRegionListType
 *     { // ReplicaRegionType
 *       Region: "STRING_VALUE",
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   ],
 *   ForceOverwriteReplicaSecret: true || false,
 *   Type: "STRING_VALUE",
 * };
 * const command = new CreateSecretCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecretResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   ReplicationStatus: [ // ReplicationStatusListType
 * //     { // ReplicationStatusType
 * //       Region: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Status: "InSync" || "Failed" || "InProgress",
 * //       StatusMessage: "STRING_VALUE",
 * //       LastAccessedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateSecretCommandInput - {@link CreateSecretCommandInput}
 * @returns {@link CreateSecretCommandOutput}
 * @see {@link CreateSecretCommandInput} for command's `input` shape.
 * @see {@link CreateSecretCommandOutput} for command's `response` shape.
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
 * @example To create a basic secret
 * ```javascript
 * // The following example shows how to create a secret. The credentials stored in the encrypted secret value are retrieved from a file on disk named mycreds.json.
 * const input = {
 *   ClientRequestToken: "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1",
 *   Description: "My test database secret created with the CLI",
 *   Name: "MyTestDatabaseSecret",
 *   SecretString: `{"username":"david","password":"EXAMPLE-PASSWORD"}`
 * };
 * const command = new CreateSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   Name: "MyTestDatabaseSecret",
 *   VersionId: "EXAMPLE1-90ab-cdef-fedc-ba987SECRET1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSecretCommand extends command<CreateSecretCommandInput, CreateSecretCommandOutput>(
  _ep0,
  _mw0,
  "CreateSecret",
  CreateSecret$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecretRequest;
      output: CreateSecretResponse;
    };
    sdk: {
      input: CreateSecretCommandInput;
      output: CreateSecretCommandOutput;
    };
  };
}
