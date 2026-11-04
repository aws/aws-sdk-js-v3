// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetSecretValueRequest, BatchGetSecretValueResponse } from "../models/models_0";
import { BatchGetSecretValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetSecretValueCommand}.
 */
export interface BatchGetSecretValueCommandInput extends BatchGetSecretValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSecretValueCommand}.
 */
export interface BatchGetSecretValueCommandOutput extends BatchGetSecretValueResponse, __MetadataBearer {}

/**
 * Retrieves the contents of the encrypted fields `SecretString` or `SecretBinary` for up to 20 secrets. To retrieve a single secret, call GetSecretValue.
 *
 * To choose which secrets to retrieve, you can specify a list of secrets by name or ARN, or you can use filters. If Secrets Manager encounters errors such as `AccessDeniedException` while attempting to retrieve any of the secrets, you can see the errors in `Errors` in the response.
 *
 * Secrets Manager generates CloudTrail `GetSecretValue` log entries for each secret you request when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:BatchGetSecretValue`, and you must have `secretsmanager:GetSecretValue` for each secret. If you use filters, you must also have `secretsmanager:ListSecrets`. If the secrets are encrypted using customer-managed keys instead of the Amazon Web Services managed key `aws/secretsmanager`, then you also need `kms:Decrypt` permissions for the keys. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, BatchGetSecretValueCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, BatchGetSecretValueCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // BatchGetSecretValueRequest
 *   SecretIdList: [ // SecretIdListType
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FiltersListType
 *     { // Filter
 *       Key: "description" || "name" || "tag-key" || "tag-value" || "primary-region" || "owning-service" || "all",
 *       Values: [ // FilterValuesStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new BatchGetSecretValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSecretValueResponse
 * //   SecretValues: [ // SecretValuesType
 * //     { // SecretValueEntry
 * //       ARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       SecretBinary: new Uint8Array(),
 * //       SecretString: "STRING_VALUE",
 * //       VersionStages: [ // SecretVersionStagesType
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Errors: [ // APIErrorListType
 * //     { // APIErrorType
 * //       SecretId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSecretValueCommandInput - {@link BatchGetSecretValueCommandInput}
 * @returns {@link BatchGetSecretValueCommandOutput}
 * @see {@link BatchGetSecretValueCommandInput} for command's `input` shape.
 * @see {@link BatchGetSecretValueCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is invalid.
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
 * @example To retrieve the secret values for a group of secrets listed by name
 * ```javascript
 * // The following example gets the values for three secrets.
 * const input = {
 *   SecretIdList: [
 *     "MySecret1",
 *     "MySecret2",
 *     "MySecret3"
 *   ]
 * };
 * const command = new BatchGetSecretValueCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Errors:   [],
 *   SecretValues: [
 *     {
 *       ARN: "&region-arn;&asm-service-name;:us-west-2:&ExampleAccountId;:secret:MySecret1-a1b2c3",
 *       CreatedDate: 1.700591229801E9,
 *       Name: "MySecret1",
 *       SecretString: `{"username":"diego_ramirez","password":"EXAMPLE-PASSWORD","engine":"mysql","host":"secretsmanagertutorial.cluster.us-west-2.rds.amazonaws.com","port":3306,"dbClusterIdentifier":"secretsmanagertutorial"}`,
 *       VersionId: "a1b2c3d4-5678-90ab-cdef-EXAMPLEaaaaa",
 *       VersionStages: [
 *         "AWSCURRENT"
 *       ]
 *     },
 *     {
 *       ARN: "&region-arn;&asm-service-name;:us-west-2:&ExampleAccountId;:secret:MySecret2-a1b2c3",
 *       CreatedDate: 1.699911394105E9,
 *       Name: "MySecret2",
 *       SecretString: `{"username":"akua_mansa","password":"EXAMPLE-PASSWORD"`,
 *       VersionId: "a1b2c3d4-5678-90ab-cdef-EXAMPLEbbbbb",
 *       VersionStages: [
 *         "AWSCURRENT"
 *       ]
 *     },
 *     {
 *       ARN: "&region-arn;&asm-service-name;:us-west-2:&ExampleAccountId;:secret:MySecret3-a1b2c3",
 *       CreatedDate: 1.699911394105E9,
 *       Name: "MySecret3",
 *       SecretString: `{"username":"jie_liu","password":"EXAMPLE-PASSWORD"`,
 *       VersionId: "a1b2c3d4-5678-90ab-cdef-EXAMPLEccccc",
 *       VersionStages: [
 *         "AWSCURRENT"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetSecretValueCommand extends command<BatchGetSecretValueCommandInput, BatchGetSecretValueCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetSecretValue",
  BatchGetSecretValue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSecretValueRequest;
      output: BatchGetSecretValueResponse;
    };
    sdk: {
      input: BatchGetSecretValueCommandInput;
      output: BatchGetSecretValueCommandOutput;
    };
  };
}
