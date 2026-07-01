// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPendingJobExecutionsRequest, GetPendingJobExecutionsResponse } from "../models/models_0";
import { GetPendingJobExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPendingJobExecutions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, GetPendingJobExecutionsCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * // import type { IoTJobsDataPlaneClientConfig } from "@aws-sdk/client-iot-jobs-data-plane";
 * const config = {}; // type is IoTJobsDataPlaneClientConfig
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
 *  <p>The contents of the request were invalid.</p>
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
 *
 * @public
 */
export class GetPendingJobExecutionsCommand extends command<GetPendingJobExecutionsCommandInput, GetPendingJobExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "GetPendingJobExecutions",
  GetPendingJobExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPendingJobExecutionsRequest;
      output: GetPendingJobExecutionsResponse;
    };
    sdk: {
      input: GetPendingJobExecutionsCommandInput;
      output: GetPendingJobExecutionsCommandOutput;
    };
  };
}
