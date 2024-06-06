// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCostAllocationTagsStatusRequest, UpdateCostAllocationTagsStatusResponse } from "../models/models_0";
import {
  de_UpdateCostAllocationTagsStatusCommand,
  se_UpdateCostAllocationTagsStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCostAllocationTagsStatusCommand}.
 */
export interface UpdateCostAllocationTagsStatusCommandInput extends UpdateCostAllocationTagsStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCostAllocationTagsStatusCommand}.
 */
export interface UpdateCostAllocationTagsStatusCommandOutput
  extends UpdateCostAllocationTagsStatusResponse,
    __MetadataBearer {}

/**
 * <p>Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag
 *       status that's updated is the same as the existing tag status, the request doesn't fail.
 *       Instead, it doesn't have any effect on the tag status (for example, activating the active
 *       tag). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateCostAllocationTagsStatusCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateCostAllocationTagsStatusCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // UpdateCostAllocationTagsStatusRequest
 *   CostAllocationTagsStatus: [ // CostAllocationTagStatusList // required
 *     { // CostAllocationTagStatusEntry
 *       TagKey: "STRING_VALUE", // required
 *       Status: "Active" || "Inactive", // required
 *     },
 *   ],
 * };
 * const command = new UpdateCostAllocationTagsStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCostAllocationTagsStatusResponse
 * //   Errors: [ // UpdateCostAllocationTagsStatusErrors
 * //     { // UpdateCostAllocationTagsStatusError
 * //       TagKey: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateCostAllocationTagsStatusCommandInput - {@link UpdateCostAllocationTagsStatusCommandInput}
 * @returns {@link UpdateCostAllocationTagsStatusCommandOutput}
 * @see {@link UpdateCostAllocationTagsStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateCostAllocationTagsStatusCommandOutput} for command's `response` shape.
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
export class UpdateCostAllocationTagsStatusCommand extends $Command
  .classBuilder<
    UpdateCostAllocationTagsStatusCommandInput,
    UpdateCostAllocationTagsStatusCommandOutput,
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
  .s("AWSInsightsIndexService", "UpdateCostAllocationTagsStatus", {})
  .n("CostExplorerClient", "UpdateCostAllocationTagsStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCostAllocationTagsStatusCommand)
  .de(de_UpdateCostAllocationTagsStatusCommand)
  .build() {}
