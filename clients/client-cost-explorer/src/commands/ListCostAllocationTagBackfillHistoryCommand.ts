// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCostAllocationTagBackfillHistoryRequest,
  ListCostAllocationTagBackfillHistoryResponse,
} from "../models/models_0";
import {
  de_ListCostAllocationTagBackfillHistoryCommand,
  se_ListCostAllocationTagBackfillHistoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCostAllocationTagBackfillHistoryCommand}.
 */
export interface ListCostAllocationTagBackfillHistoryCommandInput extends ListCostAllocationTagBackfillHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListCostAllocationTagBackfillHistoryCommand}.
 */
export interface ListCostAllocationTagBackfillHistoryCommandOutput
  extends ListCostAllocationTagBackfillHistoryResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Retrieves a list of your historical cost allocation tag backfill requests.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostAllocationTagBackfillHistoryCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostAllocationTagBackfillHistoryCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostAllocationTagBackfillHistoryRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCostAllocationTagBackfillHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListCostAllocationTagBackfillHistoryResponse
 * //   BackfillRequests: [ // CostAllocationTagBackfillRequestList
 * //     { // CostAllocationTagBackfillRequest
 * //       BackfillFrom: "STRING_VALUE",
 * //       RequestedAt: "STRING_VALUE",
 * //       CompletedAt: "STRING_VALUE",
 * //       BackfillStatus: "SUCCEEDED" || "PROCESSING" || "FAILED",
 * //       LastUpdatedAt: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCostAllocationTagBackfillHistoryCommandInput - {@link ListCostAllocationTagBackfillHistoryCommandInput}
 * @returns {@link ListCostAllocationTagBackfillHistoryCommandOutput}
 * @see {@link ListCostAllocationTagBackfillHistoryCommandInput} for command's `input` shape.
 * @see {@link ListCostAllocationTagBackfillHistoryCommandOutput} for command's `response` shape.
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
export class ListCostAllocationTagBackfillHistoryCommand extends $Command
  .classBuilder<
    ListCostAllocationTagBackfillHistoryCommandInput,
    ListCostAllocationTagBackfillHistoryCommandOutput,
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
  .s("AWSInsightsIndexService", "ListCostAllocationTagBackfillHistory", {})
  .n("CostExplorerClient", "ListCostAllocationTagBackfillHistoryCommand")
  .f(void 0, void 0)
  .ser(se_ListCostAllocationTagBackfillHistoryCommand)
  .de(de_ListCostAllocationTagBackfillHistoryCommand)
  .build() {}
