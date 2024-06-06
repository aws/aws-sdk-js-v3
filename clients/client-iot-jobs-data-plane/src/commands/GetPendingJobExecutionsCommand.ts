// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { GetPendingJobExecutionsRequest, GetPendingJobExecutionsResponse } from "../models/models_0";
import { de_GetPendingJobExecutionsCommand, se_GetPendingJobExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPendingJobExecutionsCommand}.
 */
export interface GetPendingJobExecutionsCommandInput extends GetPendingJobExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link GetPendingJobExecutionsCommand}.
 */
export interface GetPendingJobExecutionsCommandOutput extends GetPendingJobExecutionsResponse, __MetadataBearer {}

/**
 * <p>Gets the list of all jobs for a thing that are not in a terminal status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const input = { // GetPendingJobExecutionsRequest
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new GetPendingJobExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // GetPendingJobExecutionsResponse
 * //   inProgressJobs: [ // JobExecutionSummaryList
 * //     { // JobExecutionSummary
 * //       jobId: "STRING_VALUE",
 * //       queuedAt: Number("long"),
 * //       startedAt: Number("long"),
 * //       lastUpdatedAt: Number("long"),
 * //       versionNumber: Number("long"),
 * //       executionNumber: Number("long"),
 * //     },
 * //   ],
 * //   queuedJobs: [
 * //     {
 * //       jobId: "STRING_VALUE",
 * //       queuedAt: Number("long"),
 * //       startedAt: Number("long"),
 * //       lastUpdatedAt: Number("long"),
 * //       versionNumber: Number("long"),
 * //       executionNumber: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPendingJobExecutionsCommandInput - {@link GetPendingJobExecutionsCommandInput}
 * @returns {@link GetPendingJobExecutionsCommandOutput}
 * @see {@link GetPendingJobExecutionsCommandInput} for command's `input` shape.
 * @see {@link GetPendingJobExecutionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTJobsDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTJobsDataPlane service.</p>
 *
 * @public
 */
export class GetPendingJobExecutionsCommand extends $Command
  .classBuilder<
    GetPendingJobExecutionsCommandInput,
    GetPendingJobExecutionsCommandOutput,
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
  .s("IotLaserThingJobManagerExternalService", "GetPendingJobExecutions", {})
  .n("IoTJobsDataPlaneClient", "GetPendingJobExecutionsCommand")
  .f(void 0, void 0)
  .ser(se_GetPendingJobExecutionsCommand)
  .de(de_GetPendingJobExecutionsCommand)
  .build() {}
