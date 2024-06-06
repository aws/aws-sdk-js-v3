// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { DescribeJobExecutionRequest, DescribeJobExecutionResponse } from "../models/models_0";
import { de_DescribeJobExecutionCommand, se_DescribeJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobExecutionCommand}.
 */
export interface DescribeJobExecutionCommandInput extends DescribeJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobExecutionCommand}.
 */
export interface DescribeJobExecutionCommandOutput extends DescribeJobExecutionResponse, __MetadataBearer {}

/**
 * <p>Gets details of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, DescribeJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, DescribeJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // DescribeJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   includeJobDocument: true || false,
 *   executionNumber: Number("long"),
 * };
 * const command = new DescribeJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobExecutionResponse
 * //   execution: { // JobExecution
 * //     jobId: "STRING_VALUE",
 * //     thingName: "STRING_VALUE",
 * //     status: "QUEUED" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "REJECTED" || "REMOVED" || "CANCELED",
 * //     statusDetails: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     queuedAt: Number("long"),
 * //     startedAt: Number("long"),
 * //     lastUpdatedAt: Number("long"),
 * //     approximateSecondsBeforeTimedOut: Number("long"),
 * //     versionNumber: Number("long"),
 * //     executionNumber: Number("long"),
 * //     jobDocument: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobExecutionCommandInput - {@link DescribeJobExecutionCommandInput}
 * @returns {@link DescribeJobExecutionCommandOutput}
 * @see {@link DescribeJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for IoTJobsDataPlaneClient's `config` shape.
 *
 * @throws {@link CertificateValidationException} (client fault)
 *  <p>The certificate is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link TerminalStateException} (client fault)
 *  <p>The job is in a terminal state.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 * @public
 */
export class DescribeJobExecutionCommand extends $Command
  .classBuilder<
    DescribeJobExecutionCommandInput,
    DescribeJobExecutionCommandOutput,
    IoTJobsDataPlaneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTJobsDataPlaneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotLaserThingJobManagerExternalService", "DescribeJobExecution", {})
  .n("IoTJobsDataPlaneClient", "DescribeJobExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJobExecutionCommand)
  .de(de_DescribeJobExecutionCommand)
  .build() {}
