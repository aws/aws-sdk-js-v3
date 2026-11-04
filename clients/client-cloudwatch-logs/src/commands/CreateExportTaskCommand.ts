// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExportTaskRequest, CreateExportTaskResponse } from "../models/models_0";
import { CreateExportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExportTaskCommand}.
 */
export interface CreateExportTaskCommandInput extends CreateExportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateExportTaskCommand}.
 */
export interface CreateExportTaskCommandOutput extends CreateExportTaskResponse, __MetadataBearer {}

/**
 * Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a `CreateExportTask` operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.
 *
 * Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.
 *
 * Exporting to S3 buckets that are encrypted with AES-256 is supported.
 *
 * This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use [DescribeExportTasks](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html) to get the status of the export task. Each account can only have one active (`RUNNING` or `PENDING`) export task at a time. To cancel an export task, use [CancelExportTask](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html).
 *
 * You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.
 *
 * > **Note:** We recommend that you don't regularly export to Amazon S3 as a way to continuously archive your logs. For that use case, we instead recommend that you use subscriptions. For more information about subscriptions, see [Real-time processing of log data with subscriptions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html).
 *
 * > **Note:** Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateExportTaskCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateExportTaskCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateExportTaskRequest
 *   taskName: "STRING_VALUE",
 *   logGroupName: "STRING_VALUE", // required
 *   logStreamNamePrefix: "STRING_VALUE",
 *   from: Number("long"), // required
 *   to: Number("long"), // required
 *   destination: "STRING_VALUE", // required
 *   destinationPrefix: "STRING_VALUE",
 * };
 * const command = new CreateExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateExportTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExportTaskCommandInput - {@link CreateExportTaskCommandInput}
 * @returns {@link CreateExportTaskCommandOutput}
 * @see {@link CreateExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateExportTaskCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class CreateExportTaskCommand extends command<CreateExportTaskCommandInput, CreateExportTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateExportTask",
  CreateExportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExportTaskRequest;
      output: CreateExportTaskResponse;
    };
    sdk: {
      input: CreateExportTaskCommandInput;
      output: CreateExportTaskCommandOutput;
    };
  };
}
