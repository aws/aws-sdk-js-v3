// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListJobExecutionsForJobRequest, ListJobExecutionsForJobResponse } from "../models/models_2";
import { de_ListJobExecutionsForJobCommand, se_ListJobExecutionsForJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the job executions for a job.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class ListJobExecutionsForJobCommand extends $Command
  .classBuilder<
    ListJobExecutionsForJobCommandInput,
    ListJobExecutionsForJobCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListJobExecutionsForJob", {})
  .n("IoTClient", "ListJobExecutionsForJobCommand")
  .f(void 0, void 0)
  .ser(se_ListJobExecutionsForJobCommand)
  .de(de_ListJobExecutionsForJobCommand)
  .build() {
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
