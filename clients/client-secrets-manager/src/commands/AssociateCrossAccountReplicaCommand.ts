// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateCrossAccountReplicaRequest, AssociateCrossAccountReplicaResponse } from "../models/models_0";
import { AssociateCrossAccountReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateCrossAccountReplicaCommand}.
 */
export interface AssociateCrossAccountReplicaCommandInput extends AssociateCrossAccountReplicaRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCrossAccountReplicaCommand}.
 */
export interface AssociateCrossAccountReplicaCommandOutput extends AssociateCrossAccountReplicaResponse, __MetadataBearer {}

/**
 * <p>Links a primary secret in your account to a replica secret in a different Amazon Web Services
 *             account and starts replication to this replica. The replica secret must already exist in the
 *             other Amazon Web Services account. Create the replica with <a>CreateSecret</a> and set its
 *                 <code>CrossAccountPrimaryARN</code> field set to this primary secret's ARN.
 *             When you call AssociateCrossAccountReplica, Secrets Manager calls
 *             AcceptCrossAccountReplication on the replica secret on your behalf.</p>
 *          <p>The primary and replica secrets must be in the same Amazon Web Services Region and partition, and
 *             you must call this operation from the account that owns the primary secret. A primary
 *             secret can have at most one cross-account replica. This operation is idempotent, so
 *             you can call it again for the same replica to repair replication. If the association fails,
 *             Secrets Manager does not modify either the primary or replica secret.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions:
 *                 </b>
 *             <code>secretsmanager:AssociateCrossAccountReplica</code>,
 *                 <code>secretsmanager:GetSecretValue</code> on the primary secret, and
 *                 <code>secretsmanager:AcceptCrossAccountReplication</code> on the replica secret. You
 *             must also have <code>kms:Decrypt</code> permission for the Key Management Service
 *                 (KMS) key that encrypts the primary secret, and
 *                 <code>kms:Encrypt</code> permission for the Amazon Web Services KMS key that encrypts the replica
 *             secret. If you supply <code>ReplicationRoleARN</code>, you also need
 *                 <code>iam:PassRole</code> for that role. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, AssociateCrossAccountReplicaCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, AssociateCrossAccountReplicaCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // AssociateCrossAccountReplicaRequest
 *   SecretId: "STRING_VALUE", // required
 *   CrossAccountReplicaARN: "STRING_VALUE", // required
 *   ReplicaRestriction: "SameOrg" || "NoRestriction",
 *   ReplicationRoleARN: "STRING_VALUE",
 * };
 * const command = new AssociateCrossAccountReplicaCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCrossAccountReplicaResponse
 * //   ARN: "STRING_VALUE",
 * //   CrossAccountReplicaARN: "STRING_VALUE",
 * //   ReplicationStatus: "InSync" || "Failed" || "InProgress" || "Pending" || "Detached",
 * // };
 *
 * ```
 *
 * @param AssociateCrossAccountReplicaCommandInput - {@link AssociateCrossAccountReplicaCommandInput}
 * @returns {@link AssociateCrossAccountReplicaCommandOutput}
 * @see {@link AssociateCrossAccountReplicaCommandInput} for command's `input` shape.
 * @see {@link AssociateCrossAccountReplicaCommandOutput} for command's `response` shape.
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
 *
 * @example To replicate a secret to another account
 * ```javascript
 * // The following example links a primary secret to a replica secret in another AWS account and starts replication. The replica secret was previously created in the other account using CreateSecret with the CrossAccountPrimaryARN set to this primary secret.
 * const input = {
 *   CrossAccountReplicaARN: "arn:aws:secretsmanager:us-west-2:222222222222:secret:MyReplicaSecret-a1b2c3",
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new AssociateCrossAccountReplicaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   CrossAccountReplicaARN: "arn:aws:secretsmanager:us-west-2:222222222222:secret:MyReplicaSecret-a1b2c3",
 *   ReplicationStatus: "InProgress"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateCrossAccountReplicaCommand extends command<AssociateCrossAccountReplicaCommandInput, AssociateCrossAccountReplicaCommandOutput>(
  _ep0,
  _mw0,
  "AssociateCrossAccountReplica",
  AssociateCrossAccountReplica$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateCrossAccountReplicaRequest;
      output: AssociateCrossAccountReplicaResponse;
    };
    sdk: {
      input: AssociateCrossAccountReplicaCommandInput;
      output: AssociateCrossAccountReplicaCommandOutput;
    };
  };
}
