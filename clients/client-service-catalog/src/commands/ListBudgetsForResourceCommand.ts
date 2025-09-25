// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBudgetsForResourceInput, ListBudgetsForResourceOutput } from "../models/models_0";
import { ListBudgetsForResource } from "../schemas/schemas_10_Describe";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBudgetsForResourceCommand}.
 */
export interface ListBudgetsForResourceCommandInput extends ListBudgetsForResourceInput {}
/**
 * @public
 *
 * The output of {@link ListBudgetsForResourceCommand}.
 */
export interface ListBudgetsForResourceCommandOutput extends ListBudgetsForResourceOutput, __MetadataBearer {}

/**
 * <p>Lists all the budgets associated to the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListBudgetsForResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListBudgetsForResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListBudgetsForResourceInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListBudgetsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListBudgetsForResourceOutput
 * //   Budgets: [ // Budgets
 * //     { // BudgetDetail
 * //       BudgetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBudgetsForResourceCommandInput - {@link ListBudgetsForResourceCommandInput}
 * @returns {@link ListBudgetsForResourceCommandOutput}
 * @see {@link ListBudgetsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListBudgetsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListBudgetsForResourceCommand extends $Command
  .classBuilder<
    ListBudgetsForResourceCommandInput,
    ListBudgetsForResourceCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "ListBudgetsForResource", {})
  .n("ServiceCatalogClient", "ListBudgetsForResourceCommand")
  .sc(ListBudgetsForResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBudgetsForResourceInput;
      output: ListBudgetsForResourceOutput;
    };
    sdk: {
      input: ListBudgetsForResourceCommandInput;
      output: ListBudgetsForResourceCommandOutput;
    };
  };
}
