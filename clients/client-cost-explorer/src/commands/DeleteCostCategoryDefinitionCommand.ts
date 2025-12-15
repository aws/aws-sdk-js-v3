// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCostCategoryDefinitionRequest, DeleteCostCategoryDefinitionResponse } from "../models/models_0";
import { DeleteCostCategoryDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCostCategoryDefinitionCommand}.
 */
export interface DeleteCostCategoryDefinitionCommandInput extends DeleteCostCategoryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCostCategoryDefinitionCommand}.
 */
export interface DeleteCostCategoryDefinitionCommandOutput
  extends DeleteCostCategoryDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a cost category. Expenses from this month going forward will no longer be
 *       categorized with this cost category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * // import type { CostExplorerClientConfig } from "@aws-sdk/client-cost-explorer";
 * const config = {}; // type is CostExplorerClientConfig
 * const client = new CostExplorerClient(config);
 * const input = { // DeleteCostCategoryDefinitionRequest
 *   CostCategoryArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCostCategoryDefinitionResponse
 * //   CostCategoryArn: "STRING_VALUE",
 * //   EffectiveEnd: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCostCategoryDefinitionCommandInput - {@link DeleteCostCategoryDefinitionCommandInput}
 * @returns {@link DeleteCostCategoryDefinitionCommandOutput}
 * @see {@link DeleteCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCostCategoryDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteCostCategoryDefinitionCommand extends $Command
  .classBuilder<
    DeleteCostCategoryDefinitionCommandInput,
    DeleteCostCategoryDefinitionCommandOutput,
    CostExplorerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostExplorerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSInsightsIndexService", "DeleteCostCategoryDefinition", {})
  .n("CostExplorerClient", "DeleteCostCategoryDefinitionCommand")
  .sc(DeleteCostCategoryDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCostCategoryDefinitionRequest;
      output: DeleteCostCategoryDefinitionResponse;
    };
    sdk: {
      input: DeleteCostCategoryDefinitionCommandInput;
      output: DeleteCostCategoryDefinitionCommandOutput;
    };
  };
}
