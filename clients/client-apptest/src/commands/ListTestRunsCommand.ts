// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestRunsRequest, ListTestRunsResponse } from "../models/models_0";
import { de_ListTestRunsCommand, se_ListTestRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestRunsCommand}.
 */
export interface ListTestRunsCommandInput extends ListTestRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunsCommand}.
 */
export interface ListTestRunsCommandOutput extends ListTestRunsResponse, __MetadataBearer {}

/**
 * <p>Lists test runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, ListTestRunsCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, ListTestRunsCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // ListTestRunsRequest
 *   testSuiteId: "STRING_VALUE",
 *   testRunIds: [ // TestRunIdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTestRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunsResponse
 * //   testRuns: [ // TestRunSummaryList // required
 * //     { // TestRunSummary
 * //       testRunId: "STRING_VALUE", // required
 * //       testRunArn: "STRING_VALUE", // required
 * //       testSuiteId: "STRING_VALUE", // required
 * //       testSuiteVersion: Number("int"), // required
 * //       testConfigurationId: "STRING_VALUE",
 * //       testConfigurationVersion: Number("int"),
 * //       status: "Success" || "Running" || "Failed" || "Deleting", // required
 * //       statusReason: "STRING_VALUE",
 * //       runStartTime: new Date("TIMESTAMP"), // required
 * //       runEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestRunsCommandInput - {@link ListTestRunsCommandInput}
 * @returns {@link ListTestRunsCommandOutput}
 * @see {@link ListTestRunsCommandInput} for command's `input` shape.
 * @see {@link ListTestRunsCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
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
export class ListTestRunsCommand extends $Command
  .classBuilder<
    ListTestRunsCommandInput,
    ListTestRunsCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsApptestControlPlaneService", "ListTestRuns", {})
  .n("AppTestClient", "ListTestRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListTestRunsCommand)
  .de(de_ListTestRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunsRequest;
      output: ListTestRunsResponse;
    };
    sdk: {
      input: ListTestRunsCommandInput;
      output: ListTestRunsCommandOutput;
    };
  };
}
