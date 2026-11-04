// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/models_0";
import { ListCostCategoryDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListCostCategoryDefinitionsCommandOutput extends ListCostCategoryDefinitionsResponse, __MetadataBearer {}

/**
 * Returns the name, Amazon Resource Name (ARN), `NumberOfRules` and effective dates of all cost categories defined in the account. You have the option to use `EffectiveOn` and `SupportedResourceTypes` to return a list of cost categories that were active on a specific date. If there is no `EffectiveOn` specified, you’ll see cost categories that are effective on the current date. If cost category is still effective, `EffectiveEnd` is omitted in the response. `ListCostCategoryDefinitions` supports pagination. The request can have a `MaxResults` range up to 100.
 *
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
 *
 * You made too many calls in a short period of time. Try again later.
 *
 * @throws {@link CostExplorerServiceException}
 *
 * Base exception class for all service exceptions from CostExplorer service.
 *
 * @public
 */
export class ListCostCategoryDefinitionsCommand extends command<ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListCostCategoryDefinitions",
  ListCostCategoryDefinitions$
) {
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
