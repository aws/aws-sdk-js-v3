// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartTestCaseExecutionRequest, StartTestCaseExecutionResponse } from "../models/models_3";
import { StartTestCaseExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTestCaseExecutionCommand}.
 */
export interface StartTestCaseExecutionCommandInput extends StartTestCaseExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartTestCaseExecutionCommand}.
 */
export interface StartTestCaseExecutionCommandOutput extends StartTestCaseExecutionResponse, __MetadataBearer {}

/**
 * <p>Starts executing a published test case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartTestCaseExecutionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartTestCaseExecutionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartTestCaseExecutionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartTestCaseExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartTestCaseExecutionResponse
 * //   TestCaseExecutionId: "STRING_VALUE",
 * //   TestCaseId: "STRING_VALUE",
 * //   Status: "INITIATED" || "PASSED" || "FAILED" || "IN_PROGRESS" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartTestCaseExecutionCommandInput - {@link StartTestCaseExecutionCommandInput}
 * @returns {@link StartTestCaseExecutionCommandOutput}
 * @see {@link StartTestCaseExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTestCaseExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class StartTestCaseExecutionCommand extends $Command
  .classBuilder<
    StartTestCaseExecutionCommandInput,
    StartTestCaseExecutionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StartTestCaseExecution", {})
  .n("ConnectClient", "StartTestCaseExecutionCommand")
  .sc(StartTestCaseExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTestCaseExecutionRequest;
      output: StartTestCaseExecutionResponse;
    };
    sdk: {
      input: StartTestCaseExecutionCommandInput;
      output: StartTestCaseExecutionCommandOutput;
    };
  };
}
