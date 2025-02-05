// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/models_0";
import { de_ListCostCategoryDefinitionsCommand, se_ListCostCategoryDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCostCategoryDefinitionsCommand}.
 */
export interface ListCostCategoryDefinitionsCommandInput extends ListCostCategoryDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCostCategoryDefinitionsCommand}.
 */
export interface ListCostCategoryDefinitionsCommandOutput
  extends ListCostCategoryDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective
 *       dates of all Cost Categories defined in the account. You have the option to use
 *         <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific
 *       date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are
 *       effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code>
 *       is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The
 *       request can have a <code>MaxResults</code> range up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostCategoryDefinitionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostCategoryDefinitionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostCategoryDefinitionsRequest
 *   EffectiveOn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCostCategoryDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCostCategoryDefinitionsResponse
 * //   CostCategoryReferences: [ // CostCategoryReferencesList
 * //     { // CostCategoryReference
 * //       CostCategoryArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       EffectiveStart: "STRING_VALUE",
 * //       EffectiveEnd: "STRING_VALUE",
 * //       NumberOfRules: Number("int"),
 * //       ProcessingStatus: [ // CostCategoryProcessingStatusList
 * //         { // CostCategoryProcessingStatus
 * //           Component: "COST_EXPLORER",
 * //           Status: "PROCESSING" || "APPLIED",
 * //         },
 * //       ],
 * //       Values: [ // CostCategoryValuesList
 * //         "STRING_VALUE",
 * //       ],
 * //       DefaultValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCostCategoryDefinitionsCommandInput - {@link ListCostCategoryDefinitionsCommandInput}
 * @returns {@link ListCostCategoryDefinitionsCommandOutput}
 * @see {@link ListCostCategoryDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCostCategoryDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 * @public
 */
export class ListCostCategoryDefinitionsCommand extends $Command
  .classBuilder<
    ListCostCategoryDefinitionsCommandInput,
    ListCostCategoryDefinitionsCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "ListCostCategoryDefinitions", {})
  .n("CostExplorerClient", "ListCostCategoryDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCostCategoryDefinitionsCommand)
  .de(de_ListCostCategoryDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCostCategoryDefinitionsRequest;
      output: ListCostCategoryDefinitionsResponse;
    };
    sdk: {
      input: ListCostCategoryDefinitionsCommandInput;
      output: ListCostCategoryDefinitionsCommandOutput;
    };
  };
}
