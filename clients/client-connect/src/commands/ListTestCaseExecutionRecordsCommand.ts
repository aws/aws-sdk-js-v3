// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTestCaseExecutionRecordsRequest, ListTestCaseExecutionRecordsResponse } from "../models/models_2";
import { ListTestCaseExecutionRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestCaseExecutionRecordsCommand}.
 */
export interface ListTestCaseExecutionRecordsCommandInput extends ListTestCaseExecutionRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestCaseExecutionRecordsCommand}.
 */
export interface ListTestCaseExecutionRecordsCommandOutput extends ListTestCaseExecutionRecordsResponse, __MetadataBearer {}

/**
 * <p>Lists detailed steps of test case execution that includes all observations along with actions taken and data associated in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTestCaseExecutionRecordsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTestCaseExecutionRecordsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListTestCaseExecutionRecordsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 *   TestCaseExecutionId: "STRING_VALUE", // required
 *   Status: "INITIATED" || "PASSED" || "FAILED" || "IN_PROGRESS" || "STOPPED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTestCaseExecutionRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestCaseExecutionRecordsResponse
 * //   ExecutionRecords: [ // ExecutionRecordList
 * //     { // ExecutionRecord
 * //       ObservationId: "STRING_VALUE",
 * //       Status: "PASSED" || "FAILED" || "IN_PROGRESS" || "STOPPED",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       Record: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestCaseExecutionRecordsCommandInput - {@link ListTestCaseExecutionRecordsCommandInput}
 * @returns {@link ListTestCaseExecutionRecordsCommandOutput}
 * @see {@link ListTestCaseExecutionRecordsCommandInput} for command's `input` shape.
 * @see {@link ListTestCaseExecutionRecordsCommandOutput} for command's `response` shape.
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
export class ListTestCaseExecutionRecordsCommand extends $Command
  .classBuilder<
    ListTestCaseExecutionRecordsCommandInput,
    ListTestCaseExecutionRecordsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListTestCaseExecutionRecords", {})
  .n("ConnectClient", "ListTestCaseExecutionRecordsCommand")
  .sc(ListTestCaseExecutionRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestCaseExecutionRecordsRequest;
      output: ListTestCaseExecutionRecordsResponse;
    };
    sdk: {
      input: ListTestCaseExecutionRecordsCommandInput;
      output: ListTestCaseExecutionRecordsCommandOutput;
    };
  };
}
