// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBatchLoadTasksRequest, ListBatchLoadTasksResponse } from "../models/models_0";
import { de_ListBatchLoadTasksCommand, se_ListBatchLoadTasksCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBatchLoadTasksCommand}.
 */
export interface ListBatchLoadTasksCommandInput extends ListBatchLoadTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchLoadTasksCommand}.
 */
export interface ListBatchLoadTasksCommandOutput extends ListBatchLoadTasksResponse, __MetadataBearer {}

/**
 * <p>Provides a list of batch load tasks, along with the name, status, when the task is
 *          resumable until, and other details. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.list-batch-load-tasks.html">code
 *             sample</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ListBatchLoadTasksCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ListBatchLoadTasksCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const input = { // ListBatchLoadTasksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   TaskStatus: "CREATED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED" || "PROGRESS_STOPPED" || "PENDING_RESUME",
 * };
 * const command = new ListBatchLoadTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchLoadTasksResponse
 * //   NextToken: "STRING_VALUE",
 * //   BatchLoadTasks: [ // BatchLoadTaskList
 * //     { // BatchLoadTask
 * //       TaskId: "STRING_VALUE",
 * //       TaskStatus: "CREATED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED" || "PROGRESS_STOPPED" || "PENDING_RESUME",
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       ResumableUntil: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBatchLoadTasksCommandInput - {@link ListBatchLoadTasksCommandInput}
 * @returns {@link ListBatchLoadTasksCommandOutput}
 * @see {@link ListBatchLoadTasksCommandInput} for command's `input` shape.
 * @see {@link ListBatchLoadTasksCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 *
 * @public
 */
export class ListBatchLoadTasksCommand extends $Command
  .classBuilder<
    ListBatchLoadTasksCommandInput,
    ListBatchLoadTasksCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "ListBatchLoadTasks", {})
  .n("TimestreamWriteClient", "ListBatchLoadTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListBatchLoadTasksCommand)
  .de(de_ListBatchLoadTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchLoadTasksRequest;
      output: ListBatchLoadTasksResponse;
    };
    sdk: {
      input: ListBatchLoadTasksCommandInput;
      output: ListBatchLoadTasksCommandOutput;
    };
  };
}
