// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopReplicationToReplicaRequest, StopReplicationToReplicaResponse } from "../models/models_0";
import { StopReplicationToReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopReplicationToReplicaCommand}.
 */
export interface StopReplicationToReplicaCommandInput extends StopReplicationToReplicaRequest {}
/**
 * @public
 *
 * The output of {@link StopReplicationToReplicaCommand}.
 */
export interface StopReplicationToReplicaCommandOutput extends StopReplicationToReplicaResponse, __MetadataBearer {}

/**
 * <p>Removes the link between a replica secret and its primary secret, and stops
 *             replication to the replica. You call this operation from the replica account or Region.
 *             Depending on the type of replica, the behavior is:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Cross-Region replica</b>: promotes the replica to
 *                     a standalone primary secret in the replica Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Cross-account replica</b>: promotes the replica
 *                     in your account to a standalone secret and stops replication from its primary
 *                     secret in the other account. Secrets Manager updates the primary secret's replication status
 *                     to <code>Detached</code> for this replica.</p>
 *             </li>
 *          </ul>
 *          <p>To stop cross-account replication from the primary account instead, use <a>DisassociateCrossAccountReplica</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions:
 *                 </b>
 *             <code>secretsmanager:StopReplicationToReplica</code>. For cross-account
 *             replica secrets, you must also have <code>secretsmanager:DeleteResourcePolicy</code>
 *             permissions. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, StopReplicationToReplicaCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, StopReplicationToReplicaCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // StopReplicationToReplicaRequest
 *   SecretId: "STRING_VALUE", // required
 * };
 * const command = new StopReplicationToReplicaCommand(input);
 * const response = await client.send(command);
 * // { // StopReplicationToReplicaResponse
 * //   ARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopReplicationToReplicaCommandInput - {@link StopReplicationToReplicaCommandInput}
 * @returns {@link StopReplicationToReplicaCommandOutput}
 * @see {@link StopReplicationToReplicaCommandInput} for command's `input` shape.
 * @see {@link StopReplicationToReplicaCommandOutput} for command's `response` shape.
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
 *
 * @example To stop cross-account replication from the replica account
 * ```javascript
 * // The following example, called from the replica account, unlinks a cross-account replica secret from its primary secret in another account and stops replication. The secret remains in the replica account as a standalone secret.
 * const input = {
 *   SecretId: "arn:aws:secretsmanager:us-west-2:222222222222:secret:MyReplicaSecret-a1b2c3"
 * };
 * const command = new StopReplicationToReplicaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:222222222222:secret:MyReplicaSecret-a1b2c3"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopReplicationToReplicaCommand extends command<StopReplicationToReplicaCommandInput, StopReplicationToReplicaCommandOutput>(
  _ep0,
  _mw0,
  "StopReplicationToReplica",
  StopReplicationToReplica$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopReplicationToReplicaRequest;
      output: StopReplicationToReplicaResponse;
    };
    sdk: {
      input: StopReplicationToReplicaCommandInput;
      output: StopReplicationToReplicaCommandOutput;
    };
  };
}
