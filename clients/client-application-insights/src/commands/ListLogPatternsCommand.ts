// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogPatternsRequest, ListLogPatternsResponse } from "../models/models_0";
import { ListLogPatterns } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLogPatternsCommand}.
 */
export interface ListLogPatternsCommandInput extends ListLogPatternsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogPatternsCommand}.
 */
export interface ListLogPatternsCommandOutput extends ListLogPatternsResponse, __MetadataBearer {}

/**
 * <p>Lists the log patterns in the specific log <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListLogPatternsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListLogPatternsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListLogPatternsRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListLogPatternsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogPatternsResponse
 * //   ResourceGroupName: "STRING_VALUE",
 * //   AccountId: "STRING_VALUE",
 * //   LogPatterns: [ // LogPatternList
 * //     { // LogPattern
 * //       PatternSetName: "STRING_VALUE",
 * //       PatternName: "STRING_VALUE",
 * //       Pattern: "STRING_VALUE",
 * //       Rank: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogPatternsCommandInput - {@link ListLogPatternsCommandInput}
 * @returns {@link ListLogPatternsCommandOutput}
 * @see {@link ListLogPatternsCommandInput} for command's `input` shape.
 * @see {@link ListLogPatternsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class ListLogPatternsCommand extends $Command
  .classBuilder<
    ListLogPatternsCommandInput,
    ListLogPatternsCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "ListLogPatterns", {})
  .n("ApplicationInsightsClient", "ListLogPatternsCommand")
  .sc(ListLogPatterns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogPatternsRequest;
      output: ListLogPatternsResponse;
    };
    sdk: {
      input: ListLogPatternsCommandInput;
      output: ListLogPatternsCommandOutput;
    };
  };
}
