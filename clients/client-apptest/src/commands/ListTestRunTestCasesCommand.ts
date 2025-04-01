// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestRunTestCasesRequest, ListTestRunTestCasesResponse } from "../models/models_0";
import { de_ListTestRunTestCasesCommand, se_ListTestRunTestCasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestRunTestCasesCommand}.
 */
export interface ListTestRunTestCasesCommandInput extends ListTestRunTestCasesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestRunTestCasesCommand}.
 */
export interface ListTestRunTestCasesCommandOutput extends ListTestRunTestCasesResponse, __MetadataBearer {}

/**
 * <p>Lists test run test cases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, ListTestRunTestCasesCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, ListTestRunTestCasesCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * const client = new AppTestClient(config);
 * const input = { // ListTestRunTestCasesRequest
 *   testRunId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTestRunTestCasesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestRunTestCasesResponse
 * //   testRunTestCases: [ // TestCaseRunSummaryList // required
 * //     { // TestCaseRunSummary
 * //       testCaseId: "STRING_VALUE", // required
 * //       testCaseVersion: Number("int"), // required
 * //       testRunId: "STRING_VALUE", // required
 * //       status: "Success" || "Running" || "Failed", // required
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
 * @param ListTestRunTestCasesCommandInput - {@link ListTestRunTestCasesCommandInput}
 * @returns {@link ListTestRunTestCasesCommandOutput}
 * @see {@link ListTestRunTestCasesCommandInput} for command's `input` shape.
 * @see {@link ListTestRunTestCasesCommandOutput} for command's `response` shape.
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
export class ListTestRunTestCasesCommand extends $Command
  .classBuilder<
    ListTestRunTestCasesCommandInput,
    ListTestRunTestCasesCommandOutput,
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
  .s("AwsApptestControlPlaneService", "ListTestRunTestCases", {})
  .n("AppTestClient", "ListTestRunTestCasesCommand")
  .f(void 0, void 0)
  .ser(se_ListTestRunTestCasesCommand)
  .de(de_ListTestRunTestCasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestRunTestCasesRequest;
      output: ListTestRunTestCasesResponse;
    };
    sdk: {
      input: ListTestRunTestCasesCommandInput;
      output: ListTestRunTestCasesCommandOutput;
    };
  };
}
