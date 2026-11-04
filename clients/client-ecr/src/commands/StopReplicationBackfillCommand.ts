// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopReplicationBackfillRequest, StopReplicationBackfillResponse } from "../models/models_0";
import { StopReplicationBackfill$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopReplicationBackfillCommand}.
 */
export interface StopReplicationBackfillCommandInput extends StopReplicationBackfillRequest {}
/**
 * @public
 *
 * The output of {@link StopReplicationBackfillCommand}.
 */
export interface StopReplicationBackfillCommandOutput extends StopReplicationBackfillResponse, __MetadataBearer {}

/**
 * Stops an in progress replication backfill for a registry. The backfill to stop is identified by the `replicationBackfillId` returned by the StartReplicationBackfill operation.
 *
 * > **Note:** Images that have already been replicated are not affected, and replications that are already in progress continue to completion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StopReplicationBackfillCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StopReplicationBackfillCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // StopReplicationBackfillRequest
 *   registryId: "STRING_VALUE",
 *   replicationBackfillId: "STRING_VALUE", // required
 * };
 * const command = new StopReplicationBackfillCommand(input);
 * const response = await client.send(command);
 * // { // StopReplicationBackfillResponse
 * //   registryId: "STRING_VALUE",
 * //   replicationBackfillId: "STRING_VALUE",
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
 * @param StopReplicationBackfillCommandInput - {@link StopReplicationBackfillCommandInput}
 * @returns {@link StopReplicationBackfillCommandOutput}
 * @see {@link StopReplicationBackfillCommandInput} for command's `input` shape.
 * @see {@link StopReplicationBackfillCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link ReplicationBackfillInvalidStatusException} (client fault)
 *
 * The requested operation can't be performed on the replication backfill because it is not in a valid status for that operation. For example, you can't stop a replication backfill that has already reached a terminal status. Use the DescribeReplicationBackfillResults operation to check the current status before retrying.
 *
 * @throws {@link ReplicationBackfillNotFoundException} (client fault)
 *
 * The specified replication backfill could not be found. Check the specified replication backfill ID and ensure that you are operating on the correct registry.
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
export class StopReplicationBackfillCommand extends command<StopReplicationBackfillCommandInput, StopReplicationBackfillCommandOutput>(
  _ep0,
  _mw0,
  "StopReplicationBackfill",
  StopReplicationBackfill$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopReplicationBackfillRequest;
      output: StopReplicationBackfillResponse;
    };
    sdk: {
      input: StopReplicationBackfillCommandInput;
      output: StopReplicationBackfillCommandOutput;
    };
  };
}
