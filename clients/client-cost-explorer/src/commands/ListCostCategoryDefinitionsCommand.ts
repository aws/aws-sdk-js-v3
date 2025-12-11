// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/models_0";
import { ListCostCategoryDefinitions } from "../schemas/schemas_0";

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
 *       dates of all cost categories defined in the account. You have the option to use
 *       <code>EffectiveOn</code> and <code>SupportedResourceTypes</code> to return a list of cost categories that were active on a specific
 *       date. If there is no <code>EffectiveOn</code> specified, you’ll see cost categories that are
 *       effective on the current date. If cost category is still effective, <code>EffectiveEnd</code>
 *       is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The
 *       request can have a <code>MaxResults</code> range up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostCategoryDefinitionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostCategoryDefinitionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostCategoryDefinitionsRequest
 *   EffectiveOn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SupportedResourceTypes: [ // ResourceTypesFilterInput
 *     "STRING_VALUE",
 *   ],
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
 * //       SupportedResourceTypes: [ // ResourceTypes
 * //         "STRING_VALUE",
 * //       ],
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "ListCostCategoryDefinitions", {})
  .n("CostExplorerClient", "ListCostCategoryDefinitionsCommand")
  .sc(ListCostCategoryDefinitions)
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
