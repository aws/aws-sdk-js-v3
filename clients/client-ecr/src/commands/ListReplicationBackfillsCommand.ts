// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReplicationBackfillsRequest, ListReplicationBackfillsResponse } from "../models/models_0";
import { ListReplicationBackfills$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReplicationBackfillsCommand}.
 */
export interface ListReplicationBackfillsCommandInput extends ListReplicationBackfillsRequest {}
/**
 * @public
 *
 * The output of {@link ListReplicationBackfillsCommand}.
 */
export interface ListReplicationBackfillsCommandOutput extends ListReplicationBackfillsResponse, __MetadataBearer {}

/**
 * <p>Lists the replication backfills for a registry, including their status and
 *             progress.</p>
 *          <note>
 *             <p>Replication backfills that have reached a terminal status are retained for 90 days
 *                 after they end, after which they are no longer returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, ListReplicationBackfillsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, ListReplicationBackfillsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = { // ListReplicationBackfillsRequest
 *   registryId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListReplicationBackfillsCommand(input);
 * const response = await client.send(command);
 * // { // ListReplicationBackfillsResponse
 * //   registryId: "STRING_VALUE",
 * //   backfills: [ // ReplicationBackfillSummaryList
 * //     { // ReplicationBackfillSummary
 * //       replicationBackfillId: "STRING_VALUE", // required
 * //       destination: { // ReplicationDestination
 * //         region: "STRING_VALUE", // required
 * //         registryId: "STRING_VALUE", // required
 * //       },
 * //       status: "PREPARING" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //       failureCode: "STRING_VALUE",
 * //       progress: { // ReplicationBackfillProgress
 * //         totalReplicationCount: Number("int"), // required
 * //         completedReplicationCount: Number("int"), // required
 * //         failedReplicationCount: Number("int"), // required
 * //         failureCodes: [ // ReplicationErrorList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReplicationBackfillsCommandInput - {@link ListReplicationBackfillsCommandInput}
 * @returns {@link ListReplicationBackfillsCommandOutput}
 * @see {@link ListReplicationBackfillsCommandInput} for command's `input` shape.
 * @see {@link ListReplicationBackfillsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
export class ListReplicationBackfillsCommand extends command<ListReplicationBackfillsCommandInput, ListReplicationBackfillsCommandOutput>(
  _ep0,
  _mw0,
  "ListReplicationBackfills",
  ListReplicationBackfills$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReplicationBackfillsRequest;
      output: ListReplicationBackfillsResponse;
    };
    sdk: {
      input: ListReplicationBackfillsCommandInput;
      output: ListReplicationBackfillsCommandOutput;
    };
  };
}
