// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSuiteRunReportRequest, GetSuiteRunReportResponse } from "../models/models_0";
import { GetSuiteRunReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSuiteRunReportCommand}.
 */
export interface GetSuiteRunReportCommandInput extends GetSuiteRunReportRequest {}
/**
 * @public
 *
 * The output of {@link GetSuiteRunReportCommand}.
 */
export interface GetSuiteRunReportCommandOutput extends GetSuiteRunReportResponse, __MetadataBearer {}

/**
 * Gets a report download link for a successful Device Advisor qualifying test suite run.
 *
 * Requires permission to access the [GetSuiteRunReport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunReportCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunReportCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * // import type { IotDeviceAdvisorClientConfig } from "@aws-sdk/client-iotdeviceadvisor";
 * const config = {}; // type is IotDeviceAdvisorClientConfig
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // GetSuiteRunReportRequest
 *   suiteDefinitionId: "STRING_VALUE", // required
 *   suiteRunId: "STRING_VALUE", // required
 * };
 * const command = new GetSuiteRunReportCommand(input);
 * const response = await client.send(command);
 * // { // GetSuiteRunReportResponse
 * //   qualificationReportDownloadUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSuiteRunReportCommandInput - {@link GetSuiteRunReportCommandInput}
 * @returns {@link GetSuiteRunReportCommandOutput}
 * @see {@link GetSuiteRunReportCommandInput} for command's `input` shape.
 * @see {@link GetSuiteRunReportCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Sends an Internal Failure exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Sends a Resource Not Found exception.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Sends a validation exception.
 *
 * @throws {@link IotDeviceAdvisorServiceException}
 *
 * Base exception class for all service exceptions from IotDeviceAdvisor service.
 *
 * @public
 */
export class GetSuiteRunReportCommand extends command<GetSuiteRunReportCommandInput, GetSuiteRunReportCommandOutput>(
  _ep0,
  _mw0,
  "GetSuiteRunReport",
  GetSuiteRunReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSuiteRunReportRequest;
      output: GetSuiteRunReportResponse;
    };
    sdk: {
      input: GetSuiteRunReportCommandInput;
      output: GetSuiteRunReportCommandOutput;
    };
  };
}
