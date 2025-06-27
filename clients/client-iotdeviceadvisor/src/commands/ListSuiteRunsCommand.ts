// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IotDeviceAdvisorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IotDeviceAdvisorClient";
import { ListSuiteRunsRequest, ListSuiteRunsResponse } from "../models/models_0";
import { de_ListSuiteRunsCommand, se_ListSuiteRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSuiteRunsCommand}.
 */
export interface ListSuiteRunsCommandInput extends ListSuiteRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListSuiteRunsCommand}.
 */
export interface ListSuiteRunsCommandOutput extends ListSuiteRunsResponse, __MetadataBearer {}

/**
 * <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test
 *             suite, or the runs of a specific version of the test suite.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IotDeviceAdvisorClient, ListSuiteRunsCommand } from "@aws-sdk/client-iotdeviceadvisor"; // ES Modules import
 * // const { IotDeviceAdvisorClient, ListSuiteRunsCommand } = require("@aws-sdk/client-iotdeviceadvisor"); // CommonJS import
 * const client = new IotDeviceAdvisorClient(config);
 * const input = { // ListSuiteRunsRequest
 *   suiteDefinitionId: "STRING_VALUE",
 *   suiteDefinitionVersion: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSuiteRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListSuiteRunsResponse
 * //   suiteRunsList: [ // SuiteRunsList
 * //     { // SuiteRunInformation
 * //       suiteDefinitionId: "STRING_VALUE",
 * //       suiteDefinitionVersion: "STRING_VALUE",
 * //       suiteDefinitionName: "STRING_VALUE",
 * //       suiteRunId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endAt: new Date("TIMESTAMP"),
 * //       status: "PASS" || "FAIL" || "CANCELED" || "PENDING" || "RUNNING" || "STOPPING" || "STOPPED" || "PASS_WITH_WARNINGS" || "ERROR",
 * //       passed: Number("int"),
 * //       failed: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSuiteRunsCommandInput - {@link ListSuiteRunsCommandInput}
 * @returns {@link ListSuiteRunsCommandOutput}
 * @see {@link ListSuiteRunsCommandInput} for command's `input` shape.
 * @see {@link ListSuiteRunsCommandOutput} for command's `response` shape.
 * @see {@link IotDeviceAdvisorClientResolvedConfig | config} for IotDeviceAdvisorClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Sends an Internal Failure exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Sends a validation exception.</p>
 *
 * @throws {@link IotDeviceAdvisorServiceException}
 * <p>Base exception class for all service exceptions from IotDeviceAdvisor service.</p>
 *
 *
 * @public
 */
export class ListSuiteRunsCommand extends $Command
  .classBuilder<
    ListSuiteRunsCommandInput,
    ListSuiteRunsCommandOutput,
    IotDeviceAdvisorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IotDeviceAdvisorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotSenateService", "ListSuiteRuns", {})
  .n("IotDeviceAdvisorClient", "ListSuiteRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListSuiteRunsCommand)
  .de(de_ListSuiteRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSuiteRunsRequest;
      output: ListSuiteRunsResponse;
    };
    sdk: {
      input: ListSuiteRunsCommandInput;
      output: ListSuiteRunsCommandOutput;
    };
  };
}
