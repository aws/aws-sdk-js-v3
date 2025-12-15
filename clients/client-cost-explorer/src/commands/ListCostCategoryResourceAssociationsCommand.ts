// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListCostCategoryResourceAssociationsRequest,
  ListCostCategoryResourceAssociationsResponse,
} from "../models/models_0";
import { ListCostCategoryResourceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCostCategoryResourceAssociationsCommand}.
 */
export interface ListCostCategoryResourceAssociationsCommandInput extends ListCostCategoryResourceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCostCategoryResourceAssociationsCommand}.
 */
export interface ListCostCategoryResourceAssociationsCommandOutput
  extends ListCostCategoryResourceAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns resource associations of all cost categories defined in the account. You have the option to use <code>CostCategoryArn</code> to get the association for a specific cost category. <code>ListCostCategoryResourceAssociations</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostCategoryResourceAssociationsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostCategoryResourceAssociationsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostCategoryResourceAssociationsRequest
 *   CostCategoryArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCostCategoryResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCostCategoryResourceAssociationsResponse
 * //   CostCategoryResourceAssociations: [ // CostCategoryResourceAssociations
 * //     { // CostCategoryResourceAssociation
 * //       ResourceArn: "STRING_VALUE",
 * //       CostCategoryName: "STRING_VALUE",
 * //       CostCategoryArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCostCategoryResourceAssociationsCommandInput - {@link ListCostCategoryResourceAssociationsCommandInput}
 * @returns {@link ListCostCategoryResourceAssociationsCommandOutput}
 * @see {@link ListCostCategoryResourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCostCategoryResourceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 *
 * @public
 */
export class ListCostCategoryResourceAssociationsCommand extends $Command
  .classBuilder<
    ListCostCategoryResourceAssociationsCommandInput,
    ListCostCategoryResourceAssociationsCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "ListCostCategoryResourceAssociations", {})
  .n("CostExplorerClient", "ListCostCategoryResourceAssociationsCommand")
  .sc(ListCostCategoryResourceAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCostCategoryResourceAssociationsRequest;
      output: ListCostCategoryResourceAssociationsResponse;
    };
    sdk: {
      input: ListCostCategoryResourceAssociationsCommandInput;
      output: ListCostCategoryResourceAssociationsCommandOutput;
    };
  };
}
