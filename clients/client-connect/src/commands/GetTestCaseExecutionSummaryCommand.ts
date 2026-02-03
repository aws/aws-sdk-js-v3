// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTestCaseExecutionSummaryRequest, GetTestCaseExecutionSummaryResponse } from "../models/models_1";
import { GetTestCaseExecutionSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestCaseExecutionSummaryCommand}.
 */
export interface GetTestCaseExecutionSummaryCommandInput extends GetTestCaseExecutionSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetTestCaseExecutionSummaryCommand}.
 */
export interface GetTestCaseExecutionSummaryCommandOutput extends GetTestCaseExecutionSummaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves an overview of a test execution that includes the status of the execution, start and end time, and observation summary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetTestCaseExecutionSummaryCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetTestCaseExecutionSummaryCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetTestCaseExecutionSummaryRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 *   TestCaseExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetTestCaseExecutionSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetTestCaseExecutionSummaryResponse
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   Status: "INITIATED" || "PASSED" || "FAILED" || "IN_PROGRESS" || "STOPPED",
 * //   ObservationSummary: { // ObservationSummary
 * //     TotalObservations: Number("int"),
 * //     ObservationsPassed: Number("int"),
 * //     ObservationsFailed: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestCaseExecutionSummaryCommandInput - {@link GetTestCaseExecutionSummaryCommandInput}
 * @returns {@link GetTestCaseExecutionSummaryCommandOutput}
 * @see {@link GetTestCaseExecutionSummaryCommandInput} for command's `input` shape.
 * @see {@link GetTestCaseExecutionSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetTestCaseExecutionSummaryCommand extends $Command
  .classBuilder<
    GetTestCaseExecutionSummaryCommandInput,
    GetTestCaseExecutionSummaryCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetTestCaseExecutionSummary", {})
  .n("ConnectClient", "GetTestCaseExecutionSummaryCommand")
  .sc(GetTestCaseExecutionSummary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestCaseExecutionSummaryRequest;
      output: GetTestCaseExecutionSummaryResponse;
    };
    sdk: {
      input: GetTestCaseExecutionSummaryCommandInput;
      output: GetTestCaseExecutionSummaryCommandOutput;
    };
  };
}
