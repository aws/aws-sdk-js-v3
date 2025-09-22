// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/models_0";
import { DescribeDataRepositoryTasks } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataRepositoryTasksCommand}.
 */
export interface DescribeDataRepositoryTasksCommandInput extends DescribeDataRepositoryTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataRepositoryTasksCommand}.
 */
export interface DescribeDataRepositoryTasksCommandOutput
  extends DescribeDataRepositoryTasksResponse,
    __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if
 *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
 *             You can use filters to narrow the response to include just tasks for specific file systems or caches,
 *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
 *             by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
 *             parameter to limit the number of tasks returned in a response. If more tasks remain,
 *             a <code>NextToken</code> value is returned in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryTasksCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryTasksCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeDataRepositoryTasksRequest
 *   TaskIds: [ // TaskIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // DataRepositoryTaskFilters
 *     { // DataRepositoryTaskFilter
 *       Name: "file-system-id" || "task-lifecycle" || "data-repository-association-id" || "file-cache-id",
 *       Values: [ // DataRepositoryTaskFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDataRepositoryTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataRepositoryTasksResponse
 * //   DataRepositoryTasks: [ // DataRepositoryTasks
 * //     { // DataRepositoryTask
 * //       TaskId: "STRING_VALUE", // required
 * //       Lifecycle: "PENDING" || "EXECUTING" || "FAILED" || "SUCCEEDED" || "CANCELED" || "CANCELING", // required
 * //       Type: "EXPORT_TO_REPOSITORY" || "IMPORT_METADATA_FROM_REPOSITORY" || "RELEASE_DATA_FROM_FILESYSTEM" || "AUTO_RELEASE_DATA", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ResourceARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileSystemId: "STRING_VALUE",
 * //       Paths: [ // DataRepositoryTaskPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       FailureDetails: { // DataRepositoryTaskFailureDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Status: { // DataRepositoryTaskStatus
 * //         TotalCount: Number("long"),
 * //         SucceededCount: Number("long"),
 * //         FailedCount: Number("long"),
 * //         LastUpdatedTime: new Date("TIMESTAMP"),
 * //         ReleasedCapacity: Number("long"),
 * //       },
 * //       Report: { // CompletionReport
 * //         Enabled: true || false, // required
 * //         Path: "STRING_VALUE",
 * //         Format: "REPORT_CSV_20191124",
 * //         Scope: "FAILED_FILES_ONLY",
 * //       },
 * //       CapacityToRelease: Number("long"),
 * //       FileCacheId: "STRING_VALUE",
 * //       ReleaseConfiguration: { // ReleaseConfiguration
 * //         DurationSinceLastAccess: { // DurationSinceLastAccess
 * //           Unit: "DAYS",
 * //           Value: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataRepositoryTasksCommandInput - {@link DescribeDataRepositoryTasksCommandInput}
 * @returns {@link DescribeDataRepositoryTasksCommandOutput}
 * @see {@link DescribeDataRepositoryTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryTasksCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryTaskNotFound} (client fault)
 *  <p>The data repository task or tasks you specified could not be found.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DescribeDataRepositoryTasksCommand extends $Command
  .classBuilder<
    DescribeDataRepositoryTasksCommandInput,
    DescribeDataRepositoryTasksCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DescribeDataRepositoryTasks", {})
  .n("FSxClient", "DescribeDataRepositoryTasksCommand")
  .sc(DescribeDataRepositoryTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataRepositoryTasksRequest;
      output: DescribeDataRepositoryTasksResponse;
    };
    sdk: {
      input: DescribeDataRepositoryTasksCommandInput;
      output: DescribeDataRepositoryTasksCommandOutput;
    };
  };
}
