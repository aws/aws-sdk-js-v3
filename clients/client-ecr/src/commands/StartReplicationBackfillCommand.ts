// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartReplicationBackfillRequest, StartReplicationBackfillResponse } from "../models/models_0";
import { StartReplicationBackfill$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartReplicationBackfillCommand}.
 */
export interface StartReplicationBackfillCommandInput extends StartReplicationBackfillRequest {}
/**
 * @public
 *
 * The output of {@link StartReplicationBackfillCommand}.
 */
export interface StartReplicationBackfillCommandOutput extends StartReplicationBackfillResponse, __MetadataBearer {}

/**
 * Starts a replication backfill for a registry. A replication backfill replicates a registry's existing images that match its replication configuration to the specified destination. Use the DescribeReplicationBackfillResults operation to monitor the progress of a replication backfill, and to retrieve its per-image results after it reaches a terminal status.
 *
 * > **Note:** The destination must already be configured in the registry's replication configuration.
 *
 * > **Note:** Only one replication backfill can be in progress for a given destination Region at a time. Starting a replication backfill for a destination Region that already has one in progress fails with a `ReplicationBackfillInProgressException`. In addition, a registry can have at most 10 replication backfills in progress at once. Starting a replication backfill that would exceed this limit fails with a `LimitExceededException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartReplicationBackfillCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartReplicationBackfillCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // StartReplicationBackfillRequest
 *   registryId: "STRING_VALUE",
 *   destination: { // ReplicationDestination
 *     region: "STRING_VALUE", // required
 *     registryId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartReplicationBackfillCommand(input);
 * const response = await client.send(command);
 * // { // StartReplicationBackfillResponse
 * //   replicationBackfillId: "STRING_VALUE",
 * //   registryId: "STRING_VALUE",
 * //   destination: { // ReplicationDestination
 * //     region: "STRING_VALUE", // required
 * //     registryId: "STRING_VALUE", // required
 * //   },
 * //   status: "PREPARING" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "STOPPING" || "STOPPED",
 * //   startedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartReplicationBackfillCommandInput - {@link StartReplicationBackfillCommandInput}
 * @returns {@link StartReplicationBackfillCommandOutput}
 * @see {@link StartReplicationBackfillCommandInput} for command's `input` shape.
 * @see {@link StartReplicationBackfillCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account. For more information, see [Amazon ECR service quotas](https://docs.aws.amazon.com/AmazonECR/latest/userguide/service-quotas.html) in the Amazon Elastic Container Registry User Guide.
 *
 * @throws {@link ReplicationBackfillInProgressException} (client fault)
 *
 * A replication backfill is already in progress for the specified destination Region. This occurs because only one replication backfill can be in progress for a given destination Region at a time. Wait for the in progress backfill to reach a terminal status, or stop it with the StopReplicationBackfill operation, before starting another one.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this request.
 *
 * @throws {@link ECRServiceException}
 *
 * Base exception class for all service exceptions from ECR service.
 *
 * @public
 */
export class StartReplicationBackfillCommand extends command<StartReplicationBackfillCommandInput, StartReplicationBackfillCommandOutput>(
  _ep0,
  _mw0,
  "StartReplicationBackfill",
  StartReplicationBackfill$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReplicationBackfillRequest;
      output: StartReplicationBackfillResponse;
    };
    sdk: {
      input: StartReplicationBackfillCommandInput;
      output: StartReplicationBackfillCommandOutput;
    };
  };
}
