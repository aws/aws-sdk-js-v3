// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCostAllocationTagsRequest, ListCostAllocationTagsResponse } from "../models/models_0";
import { de_ListCostAllocationTagsCommand, se_ListCostAllocationTagsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCostAllocationTagsCommand}.
 */
export interface ListCostAllocationTagsCommandInput extends ListCostAllocationTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListCostAllocationTagsCommand}.
 */
export interface ListCostAllocationTagsCommandOutput extends ListCostAllocationTagsResponse, __MetadataBearer {}

/**
 * <p>Get a list of cost allocation tags. All inputs in the API are optional and serve as
 *       filters. By default, all cost allocation tags are returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostAllocationTagsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostAllocationTagsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostAllocationTagsRequest
 *   Status: "Active" || "Inactive",
 *   TagKeys: [ // CostAllocationTagKeyList
 *     "STRING_VALUE",
 *   ],
 *   Type: "AWSGenerated" || "UserDefined",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCostAllocationTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListCostAllocationTagsResponse
 * //   CostAllocationTags: [ // CostAllocationTagList
 * //     { // CostAllocationTag
 * //       TagKey: "STRING_VALUE", // required
 * //       Type: "AWSGenerated" || "UserDefined", // required
 * //       Status: "Active" || "Inactive", // required
 * //       LastUpdatedDate: "STRING_VALUE",
 * //       LastUsedDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCostAllocationTagsCommandInput - {@link ListCostAllocationTagsCommandInput}
 * @returns {@link ListCostAllocationTagsCommandOutput}
 * @see {@link ListCostAllocationTagsCommandInput} for command's `input` shape.
 * @see {@link ListCostAllocationTagsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 * @public
 */
export class ListCostAllocationTagsCommand extends $Command
  .classBuilder<
    ListCostAllocationTagsCommandInput,
    ListCostAllocationTagsCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSInsightsIndexService", "ListCostAllocationTags", {})
  .n("CostExplorerClient", "ListCostAllocationTagsCommand")
  .f(void 0, void 0)
  .ser(se_ListCostAllocationTagsCommand)
  .de(de_ListCostAllocationTagsCommand)
  .build() {}
