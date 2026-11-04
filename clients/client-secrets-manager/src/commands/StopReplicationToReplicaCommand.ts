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
 * Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.
 *
 * You must call this operation from the Region in which you want to promote the replica to a primary secret.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:StopReplicationToReplica`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
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
