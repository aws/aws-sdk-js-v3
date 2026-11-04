// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReplicateSecretToRegionsRequest, ReplicateSecretToRegionsResponse } from "../models/models_0";
import { ReplicateSecretToRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReplicateSecretToRegionsCommand}.
 */
export interface ReplicateSecretToRegionsCommandInput extends ReplicateSecretToRegionsRequest {}
/**
 * @public
 *
 * The output of {@link ReplicateSecretToRegionsCommand}.
 */
export interface ReplicateSecretToRegionsCommandOutput extends ReplicateSecretToRegionsResponse, __MetadataBearer {}

/**
 * Replicates the secret to a new Regions. See [Multi-Region secrets](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html).
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:ReplicateSecretToRegions`. If the primary secret is encrypted with a KMS key other than `aws/secretsmanager`, you also need `kms:Decrypt` permission to the key. To encrypt the replicated secret with a KMS key other than `aws/secretsmanager`, you need `kms:GenerateDataKey` and `kms:Encrypt` to the key. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ReplicateSecretToRegionsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ReplicateSecretToRegionsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // ReplicateSecretToRegionsRequest
 *   SecretId: "STRING_VALUE", // required
 *   AddReplicaRegions: [ // AddReplicaRegionListType // required
 *     { // ReplicaRegionType
 *       Region: "STRING_VALUE",
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   ],
 *   ForceOverwriteReplicaSecret: true || false,
 * };
 * const command = new ReplicateSecretToRegionsCommand(input);
 * const response = await client.send(command);
 * // { // ReplicateSecretToRegionsResponse
 * //   ARN: "STRING_VALUE",
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
 * @param ReplicateSecretToRegionsCommandInput - {@link ReplicateSecretToRegionsCommandInput}
 * @returns {@link ReplicateSecretToRegionsCommandOutput}
 * @see {@link ReplicateSecretToRegionsCommandInput} for command's `input` shape.
 * @see {@link ReplicateSecretToRegionsCommandOutput} for command's `response` shape.
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
 * @example Example
 * ```javascript
 * // The following example replicates a secret to eu-west-3. The replica is encrypted with the AWS managed key aws/secretsmanager.
 * const input = {
 *   AddReplicaRegions: [
 *     {
 *       Region: "eu-west-3"
 *     }
 *   ],
 *   ForceOverwriteReplicaSecret: true,
 *   SecretId: "MyTestSecret"
 * };
 * const command = new ReplicateSecretToRegionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestSecret-1a2b3c",
 *   ReplicationStatus: [
 *     {
 *       KmsKeyId: "alias/aws/secretsmanager",
 *       Region: "eu-west-3",
 *       Status: "InProgress"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ReplicateSecretToRegionsCommand extends command<ReplicateSecretToRegionsCommandInput, ReplicateSecretToRegionsCommandOutput>(
  _ep0,
  _mw0,
  "ReplicateSecretToRegions",
  ReplicateSecretToRegions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplicateSecretToRegionsRequest;
      output: ReplicateSecretToRegionsResponse;
    };
    sdk: {
      input: ReplicateSecretToRegionsCommandInput;
      output: ReplicateSecretToRegionsCommandOutput;
    };
  };
}
