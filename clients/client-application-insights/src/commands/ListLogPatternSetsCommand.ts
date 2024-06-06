// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogPatternSetsRequest, ListLogPatternSetsResponse } from "../models/models_0";
import { de_ListLogPatternSetsCommand, se_ListLogPatternSetsCommand } from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "ListLogPatternSets", {})
  .n("ApplicationInsightsClient", "ListLogPatternSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListLogPatternSetsCommand)
  .de(de_ListLogPatternSetsCommand)
  .build() {}
