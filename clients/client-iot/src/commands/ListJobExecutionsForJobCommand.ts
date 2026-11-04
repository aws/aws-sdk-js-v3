// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobExecutionsForJobRequest, ListJobExecutionsForJobResponse } from "../models/models_1";
import { ListJobExecutionsForJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobExecutionsForJobCommand}.
 */
export interface ListJobExecutionsForJobCommandInput extends ListJobExecutionsForJobRequest {}
/**
 * @public
 *
 * The output of {@link ListJobExecutionsForJobCommand}.
 */
export interface ListJobExecutionsForJobCommandOutput extends ListJobExecutionsForJobResponse, __MetadataBearer {}

/**
 * Lists the job executions for a job.
 *
 * Requires permission to access the [ListJobExecutionsForJob](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListJobExecutionsForJobRequest
 *   jobId: "STRING_VALUE", // required
 *   status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListJobExecutionsForJobCommand(input);
 * const response = await client.send(command);
 * // { // ListJobExecutionsForJobResponse
 * //   executionSummaries: [ // JobExecutionSummaryForJobList
 * //     { // JobExecutionSummaryForJob
 * //       thingArn: "STRING_VALUE",
 * //       jobExecutionSummary: { // JobExecutionSummary
 * //         status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //         queuedAt: new Date("TIMESTAMP"),
 * //         startedAt: new Date("TIMESTAMP"),
 * //         lastUpdatedAt: new Date("TIMESTAMP"),
 * //         executionNumber: Number("long"),
 * //         retryAttempt: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobExecutionsForJobCommandInput - {@link ListJobExecutionsForJobCommandInput}
 * @returns {@link ListJobExecutionsForJobCommandOutput}
 * @see {@link ListJobExecutionsForJobCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListJobExecutionsForJobCommand extends command<ListJobExecutionsForJobCommandInput, ListJobExecutionsForJobCommandOutput>(
  _ep0,
  _mw0,
  "ListJobExecutionsForJob",
  ListJobExecutionsForJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobExecutionsForJobRequest;
      output: ListJobExecutionsForJobResponse;
    };
    sdk: {
      input: ListJobExecutionsForJobCommandInput;
      output: ListJobExecutionsForJobCommandOutput;
    };
  };
}
