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
 * <p>Stops an in progress replication backfill for a registry. The backfill to stop is
 *             identified by the <code>replicationBackfillId</code> returned by the <a>StartReplicationBackfill</a> operation.</p>
 *          <note>
 *             <p>Images that have already been replicated are not affected, and replications that
 *                 are already in progress continue to completion.</p>
 *          </note>
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
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ReplicationBackfillInvalidStatusException} (client fault)
 *  <p>The requested operation can't be performed on the replication backfill because it is
 *             not in a valid status for that operation. For example, you can't stop a replication
 *             backfill that has already reached a terminal status. Use the <a>DescribeReplicationBackfillResults</a> operation to check the current status
 *             before retrying.</p>
 *
 * @throws {@link ReplicationBackfillNotFoundException} (client fault)
 *  <p>The specified replication backfill could not be found. Check the specified replication
 *             backfill ID and ensure that you are operating on the correct registry.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
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
