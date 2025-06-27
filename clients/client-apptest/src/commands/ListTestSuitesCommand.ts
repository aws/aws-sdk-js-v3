// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTestSuitesRequest, ListTestSuitesResponse } from "../models/models_0";
import { de_ListTestSuitesCommand, se_ListTestSuitesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestSuitesCommand}.
 */
export interface ListTestSuitesCommandInput extends ListTestSuitesRequest {}
/**
 * @public
 *
 * The output of {@link ListTestSuitesCommand}.
 */
export interface ListTestSuitesCommandOutput extends ListTestSuitesResponse, __MetadataBearer {}

/**
 * <p>Lists test suites.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, ListTestSuitesCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, ListTestSuitesCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * const client = new AppTestClient(config);
 * const input = { // ListTestSuitesRequest
 *   testSuiteIds: [ // TestSuiteIdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTestSuitesCommand(input);
 * const response = await client.send(command);
 * // { // ListTestSuitesResponse
 * //   testSuites: [ // TestSuiteList // required
 * //     { // TestSuiteSummary
 * //       testSuiteId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       latestVersion: Number("int"), // required
 * //       testSuiteArn: "STRING_VALUE", // required
 * //       status: "Creating" || "Updating" || "Active" || "Failed" || "Deleting", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastUpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestSuitesCommandInput - {@link ListTestSuitesCommandInput}
 * @returns {@link ListTestSuitesCommandOutput}
 * @see {@link ListTestSuitesCommandInput} for command's `input` shape.
 * @see {@link ListTestSuitesCommandOutput} for command's `response` shape.
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
export class ListTestSuitesCommand extends $Command
  .classBuilder<
    ListTestSuitesCommandInput,
    ListTestSuitesCommandOutput,
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
  .s("AwsApptestControlPlaneService", "ListTestSuites", {})
  .n("AppTestClient", "ListTestSuitesCommand")
  .f(void 0, void 0)
  .ser(se_ListTestSuitesCommand)
  .de(de_ListTestSuitesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestSuitesRequest;
      output: ListTestSuitesResponse;
    };
    sdk: {
      input: ListTestSuitesCommandInput;
      output: ListTestSuitesCommandOutput;
    };
  };
}
