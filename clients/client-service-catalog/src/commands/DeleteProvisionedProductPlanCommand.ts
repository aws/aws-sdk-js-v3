// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProvisionedProductPlanInput, DeleteProvisionedProductPlanOutput } from "../models/models_0";
import {
  de_DeleteProvisionedProductPlanCommand,
  se_DeleteProvisionedProductPlanCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisionedProductPlanCommand}.
 */
export interface DeleteProvisionedProductPlanCommandInput extends DeleteProvisionedProductPlanInput {}
/**
 * @public
 *
 * The output of {@link DeleteProvisionedProductPlanCommand}.
 */
export interface DeleteProvisionedProductPlanCommandOutput
  extends DeleteProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * <p>Deletes the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeleteProvisionedProductPlanInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PlanId: "STRING_VALUE", // required
 *   IgnoreErrors: true || false,
 * };
 * const command = new DeleteProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisionedProductPlanCommandInput - {@link DeleteProvisionedProductPlanCommandInput}
 * @returns {@link DeleteProvisionedProductPlanCommandOutput}
 * @see {@link DeleteProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedProductPlanCommandOutput} for command's `response` shape.
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
export class DeleteProvisionedProductPlanCommand extends $Command
  .classBuilder<
    DeleteProvisionedProductPlanCommandInput,
    DeleteProvisionedProductPlanCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DeleteProvisionedProductPlan", {})
  .n("ServiceCatalogClient", "DeleteProvisionedProductPlanCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProvisionedProductPlanCommand)
  .de(de_DeleteProvisionedProductPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProvisionedProductPlanInput;
      output: {};
    };
    sdk: {
      input: DeleteProvisionedProductPlanCommandInput;
      output: DeleteProvisionedProductPlanCommandOutput;
    };
  };
}
