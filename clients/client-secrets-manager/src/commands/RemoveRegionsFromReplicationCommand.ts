// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveRegionsFromReplicationRequest, RemoveRegionsFromReplicationResponse } from "../models/models_0";
import { RemoveRegionsFromReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveRegionsFromReplicationCommand}.
 */
export interface RemoveRegionsFromReplicationCommandInput extends RemoveRegionsFromReplicationRequest {}
/**
 * @public
 *
 * The output of {@link RemoveRegionsFromReplicationCommand}.
 */
export interface RemoveRegionsFromReplicationCommandOutput extends RemoveRegionsFromReplicationResponse, __MetadataBearer {}

/**
 * For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.
 *
 * Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see [Logging Secrets Manager events with CloudTrail](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html).
 *
 * **Required permissions:** `secretsmanager:RemoveRegionsFromReplication`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, RemoveRegionsFromReplicationCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, RemoveRegionsFromReplicationCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // RemoveRegionsFromReplicationRequest
 *   SecretId: "STRING_VALUE", // required
 *   RemoveReplicaRegions: [ // RemoveReplicaRegionListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveRegionsFromReplicationCommand(input);
 * const response = await client.send(command);
 * // { // RemoveRegionsFromReplicationResponse
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
 * @param RemoveRegionsFromReplicationCommandInput - {@link RemoveRegionsFromReplicationCommandInput}
 * @returns {@link RemoveRegionsFromReplicationCommandOutput}
 * @see {@link RemoveRegionsFromReplicationCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionsFromReplicationCommandOutput} for command's `response` shape.
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
export class RemoveRegionsFromReplicationCommand extends command<RemoveRegionsFromReplicationCommandInput, RemoveRegionsFromReplicationCommandOutput>(
  _ep0,
  _mw0,
  "RemoveRegionsFromReplication",
  RemoveRegionsFromReplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveRegionsFromReplicationRequest;
      output: RemoveRegionsFromReplicationResponse;
    };
    sdk: {
      input: RemoveRegionsFromReplicationCommandInput;
      output: RemoveRegionsFromReplicationCommandOutput;
    };
  };
}
