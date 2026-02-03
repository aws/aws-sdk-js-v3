// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTestCaseExecutionsRequest, ListTestCaseExecutionsResponse } from "../models/models_2";
import { ListTestCaseExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestCaseExecutionsCommand}.
 */
export interface ListTestCaseExecutionsCommandInput extends ListTestCaseExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestCaseExecutionsCommand}.
 */
export interface ListTestCaseExecutionsCommandOutput extends ListTestCaseExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists all test case executions and allows filtering by test case id, test case name, start time, end time or status of the execution for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTestCaseExecutionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTestCaseExecutionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListTestCaseExecutionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE",
 *   TestCaseName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Status: "INITIATED" || "PASSED" || "FAILED" || "IN_PROGRESS" || "STOPPED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTestCaseExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestCaseExecutionsResponse
 * //   TestCaseExecutions: [ // TestCaseExecutionList
 * //     { // TestCaseExecution
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       TestCaseExecutionId: "STRING_VALUE",
 * //       TestCaseId: "STRING_VALUE",
 * //       TestCaseExecutionStatus: "INITIATED" || "PASSED" || "FAILED" || "IN_PROGRESS" || "STOPPED",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestCaseExecutionsCommandInput - {@link ListTestCaseExecutionsCommandInput}
 * @returns {@link ListTestCaseExecutionsCommandOutput}
 * @see {@link ListTestCaseExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTestCaseExecutionsCommandOutput} for command's `response` shape.
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
export class ListTestCaseExecutionsCommand extends $Command
  .classBuilder<
    ListTestCaseExecutionsCommandInput,
    ListTestCaseExecutionsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListTestCaseExecutions", {})
  .n("ConnectClient", "ListTestCaseExecutionsCommand")
  .sc(ListTestCaseExecutions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestCaseExecutionsRequest;
      output: ListTestCaseExecutionsResponse;
    };
    sdk: {
      input: ListTestCaseExecutionsCommandInput;
      output: ListTestCaseExecutionsCommandOutput;
    };
  };
}
