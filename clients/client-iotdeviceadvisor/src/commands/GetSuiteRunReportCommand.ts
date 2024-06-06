// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { GetSuiteRunReportRequest, GetSuiteRunReportResponse } from "../models/models_0";
import { de_GetSuiteRunReportCommand, se_GetSuiteRunReportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, GetSuiteRunReportCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, GetSuiteRunReportCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
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
 *  <p>Sends an Internal Failure exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Sends a Resource Not Found exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Sends a validation exception.</p>
 *
 * @throws {@link IotDeviceAdvisorServiceException}
 * <p>Base exception class for all service exceptions from IotDeviceAdvisor service.</p>
 *
 * @public
 */
export class GetSuiteRunReportCommand extends $Command
  .classBuilder<
    GetSuiteRunReportCommandInput,
    GetSuiteRunReportCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotSenateService", "GetSuiteRunReport", {})
  .n("IotDeviceAdvisorClient", "GetSuiteRunReportCommand")
  .f(void 0, void 0)
  .ser(se_GetSuiteRunReportCommand)
  .de(de_GetSuiteRunReportCommand)
  .build() {}
