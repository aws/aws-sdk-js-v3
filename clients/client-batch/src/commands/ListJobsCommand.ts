// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobsRequest, ListJobsResponse } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch jobs.</p>
 *          <p>You must specify only one of the following items:</p>
 *          <ul>
 *             <li>
 *                <p>A job queue ID to return a list of jobs in that job queue</p>
 *             </li>
 *             <li>
 *                <p>A multi-node parallel job ID to return a list of nodes for that job</p>
 *             </li>
 *             <li>
 *                <p>An array job ID to return a list of the children for that job</p>
 *             </li>
 *          </ul>
 *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you
 *       don't specify a status, only <code>RUNNING</code> jobs are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // ListJobsRequest
 *   jobQueue: "STRING_VALUE",
 *   arrayJobId: "STRING_VALUE",
 *   multiNodeJobId: "STRING_VALUE",
 *   jobStatus: "SUBMITTED" || "PENDING" || "RUNNABLE" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // ListJobsFilterList
 *     { // KeyValuesPair
 *       name: "STRING_VALUE",
 *       values: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResponse
 * //   jobSummaryList: [ // JobSummaryList // required
 * //     { // JobSummary
 * //       jobArn: "STRING_VALUE",
 * //       jobId: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       createdAt: Number("long"),
 * //       status: "SUBMITTED" || "PENDING" || "RUNNABLE" || "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       statusReason: "STRING_VALUE",
 * //       startedAt: Number("long"),
 * //       stoppedAt: Number("long"),
 * //       container: { // ContainerSummary
 * //         exitCode: Number("int"),
 * //         reason: "STRING_VALUE",
 * //       },
 * //       arrayProperties: { // ArrayPropertiesSummary
 * //         size: Number("int"),
 * //         index: Number("int"),
 * //       },
 * //       nodeProperties: { // NodePropertiesSummary
 * //         isMainNode: true || false,
 * //         numNodes: Number("int"),
 * //         nodeIndex: Number("int"),
 * //       },
 * //       jobDefinition: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To list running jobs
 * ```javascript
 * // This example lists the running jobs in the HighPriority job queue.
 * const input = {
 *   jobQueue: "HighPriority"
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobSummaryList: [
 *     {
 *       jobId: "e66ff5fd-a1ff-4640-b1a2-0b0a142f49bb",
 *       jobName: "example"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list submitted jobs
 * ```javascript
 * // This example lists jobs in the HighPriority job queue that are in the SUBMITTED job status.
 * const input = {
 *   jobQueue: "HighPriority",
 *   jobStatus: "SUBMITTED"
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobSummaryList: [
 *     {
 *       jobId: "68f0c163-fbd4-44e6-9fd1-25b14a434786",
 *       jobName: "example"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListJobsCommand extends $Command
  .classBuilder<
    ListJobsCommandInput,
    ListJobsCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "ListJobs", {})
  .n("BatchClient", "ListJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobsCommand)
  .de(de_ListJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsRequest;
      output: ListJobsResponse;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}
