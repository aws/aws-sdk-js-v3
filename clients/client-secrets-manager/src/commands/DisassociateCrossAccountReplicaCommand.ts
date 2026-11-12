// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateCrossAccountReplicaRequest,
  DisassociateCrossAccountReplicaResponse,
} from "../models/models_0";
import { DisassociateCrossAccountReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateCrossAccountReplicaCommand}.
 */
export interface DisassociateCrossAccountReplicaCommandInput extends DisassociateCrossAccountReplicaRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCrossAccountReplicaCommand}.
 */
export interface DisassociateCrossAccountReplicaCommandOutput extends DisassociateCrossAccountReplicaResponse, __MetadataBearer {}

/**
 * <p>Removes the link between a primary secret in your account and a cross-account replica
 *             secret, and stops replication to the replica secret. Call this operation on the primary secret.
 *             This action removes the replica association created by <a>AssociateCrossAccountReplica</a>.</p>
 *          <p>Disassociating the replica from the primary does not delete the replica secret or
 *             convert the replica secret to a standalone secret. The replica secret remains in the other
 *             account and its replication status changes to <code>Detached</code>. Secrets Manager no longer sends updates
 *             from the primary secret to the replica secret after disassociation. To convert a detached
 *             replica into a standalone secret, call
 *                 <a>StopReplicationToReplica</a> on the replica secret.</p>
 *          <p>You must disassociate a cross-account replica before you call <a>DeleteSecret</a> for the primary secret. The <a>DeleteSecret</a>
 *             call fails if any replicas are still associated with the primary secret.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions:
 *                 </b>
 *             <code>secretsmanager:DisassociateCrossAccountReplica</code>.
 *             For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DisassociateCrossAccountReplicaCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DisassociateCrossAccountReplicaCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // DisassociateCrossAccountReplicaRequest
 *   SecretId: "STRING_VALUE", // required
 *   CrossAccountReplicaARN: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCrossAccountReplicaCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateCrossAccountReplicaResponse
 * //   ARN: "STRING_VALUE",
 * //   CrossAccountReplicaARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateCrossAccountReplicaCommandInput - {@link DisassociateCrossAccountReplicaCommandInput}
 * @returns {@link DisassociateCrossAccountReplicaCommandOutput}
 * @see {@link DisassociateCrossAccountReplicaCommandInput} for command's `input` shape.
 * @see {@link DisassociateCrossAccountReplicaCommandOutput} for command's `response` shape.
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
 * @example To stop replicating a secret to another account from the primary account
 * ```javascript
 * // The following example, called from the primary account, removes the link between a primary secret and its cross-account replica and stops replication. The replica secret remains in the other account, now with a replication status of Detached.
 * const input = {
 *   CrossAccountReplicaARN: "arn:aws:secretsmanager:us-west-2:222222222222:secret:MyReplicaSecret-a1b2c3",
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new DisassociateCrossAccountReplicaCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ARN: "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *   CrossAccountReplicaARN: "arn:aws:secretsmanager:us-west-2:222222222222:secret:MyReplicaSecret-a1b2c3"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateCrossAccountReplicaCommand extends command<DisassociateCrossAccountReplicaCommandInput, DisassociateCrossAccountReplicaCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateCrossAccountReplica",
  DisassociateCrossAccountReplica$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCrossAccountReplicaRequest;
      output: DisassociateCrossAccountReplicaResponse;
    };
    sdk: {
      input: DisassociateCrossAccountReplicaCommandInput;
      output: DisassociateCrossAccountReplicaCommandOutput;
    };
  };
}
