// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartTestRunRequest, StartTestRunResponse } from "../models/models_0";
import { StartTestRun } from "../schemas/schemas_5_Test";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTestRunCommand}.
 */
export interface StartTestRunCommandInput extends StartTestRunRequest {}
/**
 * @public
 *
 * The output of {@link StartTestRunCommand}.
 */
export interface StartTestRunCommandOutput extends StartTestRunResponse, __MetadataBearer {}

/**
 * <p>Starts a test run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, StartTestRunCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, StartTestRunCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // StartTestRunRequest
 *   testSuiteId: "STRING_VALUE", // required
 *   testConfigurationId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartTestRunCommand(input);
 * const response = await client.send(command);
 * // { // StartTestRunResponse
 * //   testRunId: "STRING_VALUE", // required
 * //   testRunStatus: "Success" || "Running" || "Failed" || "Deleting", // required
 * // };
 *
 * ```
 *
 * @param StartTestRunCommandInput - {@link StartTestRunCommandInput}
 * @returns {@link StartTestRunCommandOutput}
 * @see {@link StartTestRunCommandInput} for command's `input` shape.
 * @see {@link StartTestRunCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for AWS Application Testing exceeds the limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter provided in the request is not valid.</p>
 *
 * @throws {@link AppTestServiceException}
 * <p>Base exception class for all service exceptions from AppTest service.</p>
 *
 *
 * @public
 */
export class StartTestRunCommand extends $Command
  .classBuilder<
    StartTestRunCommandInput,
    StartTestRunCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsApptestControlPlaneService", "StartTestRun", {})
  .n("AppTestClient", "StartTestRunCommand")
  .sc(StartTestRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTestRunRequest;
      output: StartTestRunResponse;
    };
    sdk: {
      input: StartTestRunCommandInput;
      output: StartTestRunCommandOutput;
    };
  };
}
