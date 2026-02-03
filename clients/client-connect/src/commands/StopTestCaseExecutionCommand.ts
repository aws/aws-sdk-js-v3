// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopTestCaseExecutionRequest, StopTestCaseExecutionResponse } from "../models/models_3";
import { StopTestCaseExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopTestCaseExecutionCommand}.
 */
export interface StopTestCaseExecutionCommandInput extends StopTestCaseExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopTestCaseExecutionCommand}.
 */
export interface StopTestCaseExecutionCommandOutput extends StopTestCaseExecutionResponse, __MetadataBearer {}

/**
 * <p>Stops a running test execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopTestCaseExecutionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopTestCaseExecutionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StopTestCaseExecutionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TestCaseExecutionId: "STRING_VALUE", // required
 *   TestCaseId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StopTestCaseExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopTestCaseExecutionCommandInput - {@link StopTestCaseExecutionCommandInput}
 * @returns {@link StopTestCaseExecutionCommandOutput}
 * @see {@link StopTestCaseExecutionCommandInput} for command's `input` shape.
 * @see {@link StopTestCaseExecutionCommandOutput} for command's `response` shape.
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
export class StopTestCaseExecutionCommand extends $Command
  .classBuilder<
    StopTestCaseExecutionCommandInput,
    StopTestCaseExecutionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "StopTestCaseExecution", {})
  .n("ConnectClient", "StopTestCaseExecutionCommand")
  .sc(StopTestCaseExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopTestCaseExecutionRequest;
      output: {};
    };
    sdk: {
      input: StopTestCaseExecutionCommandInput;
      output: StopTestCaseExecutionCommandOutput;
    };
  };
}
