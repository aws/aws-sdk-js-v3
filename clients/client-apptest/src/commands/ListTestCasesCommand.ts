// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestCasesRequest, ListTestCasesResponse } from "../models/models_0";
import { de_ListTestCasesCommand, se_ListTestCasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestCasesCommand}.
 */
export interface ListTestCasesCommandInput extends ListTestCasesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestCasesCommand}.
 */
export interface ListTestCasesCommandOutput extends ListTestCasesResponse, __MetadataBearer {}

/**
 * <p>Lists test cases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, ListTestCasesCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, ListTestCasesCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * const client = new AppTestClient(config);
 * const input = { // ListTestCasesRequest
 *   testCaseIds: [ // TestCaseIdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTestCasesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestCasesResponse
 * //   testCases: [ // TestCaseSummaryList // required
 * //     { // TestCaseSummary
 * //       testCaseId: "STRING_VALUE", // required
 * //       testCaseArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       latestVersion: Number("int"), // required
 * //       status: "Active" || "Deleting", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastUpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestCasesCommandInput - {@link ListTestCasesCommandInput}
 * @returns {@link ListTestCasesCommandOutput}
 * @see {@link ListTestCasesCommandInput} for command's `input` shape.
 * @see {@link ListTestCasesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTestCasesCommand extends $Command
  .classBuilder<
    ListTestCasesCommandInput,
    ListTestCasesCommandOutput,
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
  .s("AwsApptestControlPlaneService", "ListTestCases", {})
  .n("AppTestClient", "ListTestCasesCommand")
  .f(void 0, void 0)
  .ser(se_ListTestCasesCommand)
  .de(de_ListTestCasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestCasesRequest;
      output: ListTestCasesResponse;
    };
    sdk: {
      input: ListTestCasesCommandInput;
      output: ListTestCasesCommandOutput;
    };
  };
}
