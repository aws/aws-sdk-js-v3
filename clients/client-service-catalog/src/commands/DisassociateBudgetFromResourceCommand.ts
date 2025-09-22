// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateBudgetFromResourceInput, DisassociateBudgetFromResourceOutput } from "../models/models_0";
import { DisassociateBudgetFromResource } from "../schemas/schemas_10_Describe";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateBudgetFromResourceCommand}.
 */
export interface DisassociateBudgetFromResourceCommandInput extends DisassociateBudgetFromResourceInput {}
/**
 * @public
 *
 * The output of {@link DisassociateBudgetFromResourceCommand}.
 */
export interface DisassociateBudgetFromResourceCommandOutput
  extends DisassociateBudgetFromResourceOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified budget from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateBudgetFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DisassociateBudgetFromResourceInput
 *   BudgetName: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateBudgetFromResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateBudgetFromResourceCommandInput - {@link DisassociateBudgetFromResourceCommandInput}
 * @returns {@link DisassociateBudgetFromResourceCommandOutput}
 * @see {@link DisassociateBudgetFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateBudgetFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
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
export class DisassociateBudgetFromResourceCommand extends $Command
  .classBuilder<
    DisassociateBudgetFromResourceCommandInput,
    DisassociateBudgetFromResourceCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DisassociateBudgetFromResource", {})
  .n("ServiceCatalogClient", "DisassociateBudgetFromResourceCommand")
  .sc(DisassociateBudgetFromResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateBudgetFromResourceInput;
      output: {};
    };
    sdk: {
      input: DisassociateBudgetFromResourceCommandInput;
      output: DisassociateBudgetFromResourceCommandOutput;
    };
  };
}
