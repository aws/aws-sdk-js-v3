// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestRunStepsRequest, ListTestRunStepsResponse } from "../models/models_0";
import { de_ListTestRunStepsCommand, se_ListTestRunStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestRunStepsCommand}.
 */
export interface ListTestRunStepsCommandInput extends ListTestRunStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunStepsCommand}.
 */
export interface ListTestRunStepsCommandOutput extends ListTestRunStepsResponse, __MetadataBearer {}

/**
 * <p>Lists test run steps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, ListTestRunStepsCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, ListTestRunStepsCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // ListTestRunStepsRequest
 *   testRunId: "STRING_VALUE", // required
 *   testCaseId: "STRING_VALUE",
 *   testSuiteId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTestRunStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunStepsResponse
 * //   testRunSteps: [ // TestRunStepSummaryList // required
 * //     { // TestRunStepSummary
 * //       stepName: "STRING_VALUE", // required
 * //       testRunId: "STRING_VALUE", // required
 * //       testCaseId: "STRING_VALUE",
 * //       testCaseVersion: Number("int"),
 * //       testSuiteId: "STRING_VALUE",
 * //       testSuiteVersion: Number("int"),
 * //       beforeStep: true || false,
 * //       afterStep: true || false,
 * //       status: "Success" || "Failed" || "Running", // required
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
 * @param ListTestRunStepsCommandInput - {@link ListTestRunStepsCommandInput}
 * @returns {@link ListTestRunStepsCommandOutput}
 * @see {@link ListTestRunStepsCommandInput} for command's `input` shape.
 * @see {@link ListTestRunStepsCommandOutput} for command's `response` shape.
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
export class ListTestRunStepsCommand extends $Command
  .classBuilder<
    ListTestRunStepsCommandInput,
    ListTestRunStepsCommandOutput,
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
  .s("AwsApptestControlPlaneService", "ListTestRunSteps", {})
  .n("AppTestClient", "ListTestRunStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListTestRunStepsCommand)
  .de(de_ListTestRunStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunStepsRequest;
      output: ListTestRunStepsResponse;
    };
    sdk: {
      input: ListTestRunStepsCommandInput;
      output: ListTestRunStepsCommandOutput;
    };
  };
}
