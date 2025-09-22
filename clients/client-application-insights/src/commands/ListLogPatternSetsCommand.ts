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
import { ListLogPatternSetsRequest, ListLogPatternSetsResponse } from "../models/models_0";
import { ListLogPatternSets } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLogPatternSetsCommand}.
 */
export interface ListLogPatternSetsCommandInput extends ListLogPatternSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogPatternSetsCommand}.
 */
export interface ListLogPatternSetsCommandOutput extends ListLogPatternSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the log pattern sets in the specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListLogPatternSetsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListLogPatternSetsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // import type { ApplicationInsightsClientConfig } from "@aws-sdk/client-application-insights";
 * const config = {}; // type is ApplicationInsightsClientConfig
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListLogPatternSetsRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListLogPatternSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogPatternSetsResponse
 * //   ResourceGroupName: "STRING_VALUE",
 * //   AccountId: "STRING_VALUE",
 * //   LogPatternSets: [ // LogPatternSetList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogPatternSetsCommandInput - {@link ListLogPatternSetsCommandInput}
 * @returns {@link ListLogPatternSetsCommandOutput}
 * @see {@link ListLogPatternSetsCommandInput} for command's `input` shape.
 * @see {@link ListLogPatternSetsCommandOutput} for command's `response` shape.
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
export class ListLogPatternSetsCommand extends $Command
  .classBuilder<
    ListLogPatternSetsCommandInput,
    ListLogPatternSetsCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2WindowsBarleyService", "ListLogPatternSets", {})
  .n("ApplicationInsightsClient", "ListLogPatternSetsCommand")
  .sc(ListLogPatternSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogPatternSetsRequest;
      output: ListLogPatternSetsResponse;
    };
    sdk: {
      input: ListLogPatternSetsCommandInput;
      output: ListLogPatternSetsCommandOutput;
    };
  };
}
