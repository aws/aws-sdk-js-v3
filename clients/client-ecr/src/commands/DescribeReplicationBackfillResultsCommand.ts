// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeReplicationBackfillResultsRequest,
  DescribeReplicationBackfillResultsResponse,
} from "../models/models_0";
import { DescribeReplicationBackfillResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeReplicationBackfillResultsCommand}.
 */
export interface DescribeReplicationBackfillResultsCommandInput extends DescribeReplicationBackfillResultsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationBackfillResultsCommand}.
 */
export interface DescribeReplicationBackfillResultsCommandOutput extends DescribeReplicationBackfillResultsResponse, __MetadataBearer {}

/**
 * <p>Returns the status, progress, and per-image results for a replication backfill. The
 *             backfill to describe is identified by the <code>replicationBackfillId</code> returned by
 *             the <a>StartReplicationBackfill</a> operation.</p>
 *          <note>
 *             <p>The per-image results are available only after the replication backfill reaches a
 *                 terminal status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeReplicationBackfillResultsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeReplicationBackfillResultsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // DescribeReplicationBackfillResultsRequest
 *   registryId: "STRING_VALUE",
 *   replicationBackfillId: "STRING_VALUE", // required
 *   resultStatusFilter: "COMPLETE" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationBackfillResultsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationBackfillResultsResponse
 * //   registryId: "STRING_VALUE",
 * //   replicationBackfillId: "STRING_VALUE",
 * //   destination: { // ReplicationDestination
 * //     region: "STRING_VALUE", // required
 * //     registryId: "STRING_VALUE", // required
 * //   },
 * //   status: "PREPARING" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "STOPPING" || "STOPPED",
 * //   failureCode: "STRING_VALUE",
 * //   progress: { // ReplicationBackfillProgress
 * //     totalReplicationCount: Number("int"), // required
 * //     completedReplicationCount: Number("int"), // required
 * //     failedReplicationCount: Number("int"), // required
 * //     failureCodes: [ // ReplicationErrorList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   results: [ // ReplicationBackfillResultList
 * //     { // ReplicationBackfillResult
 * //       repositoryName: "STRING_VALUE", // required
 * //       imageId: { // ImageIdentifier
 * //         imageDigest: "STRING_VALUE",
 * //         imageTag: "STRING_VALUE",
 * //       },
 * //       status: "COMPLETE" || "FAILED", // required
 * //       failureCode: "STRING_VALUE",
 * //       subImageFailureCodes: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReplicationBackfillResultsCommandInput - {@link DescribeReplicationBackfillResultsCommandInput}
 * @returns {@link DescribeReplicationBackfillResultsCommandOutput}
 * @see {@link DescribeReplicationBackfillResultsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationBackfillResultsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
export class DescribeReplicationBackfillResultsCommand extends command<DescribeReplicationBackfillResultsCommandInput, DescribeReplicationBackfillResultsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeReplicationBackfillResults",
  DescribeReplicationBackfillResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationBackfillResultsRequest;
      output: DescribeReplicationBackfillResultsResponse;
    };
    sdk: {
      input: DescribeReplicationBackfillResultsCommandInput;
      output: DescribeReplicationBackfillResultsCommandOutput;
    };
  };
}
