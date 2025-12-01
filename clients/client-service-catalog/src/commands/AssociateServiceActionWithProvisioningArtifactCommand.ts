// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateServiceActionWithProvisioningArtifactInput,
  AssociateServiceActionWithProvisioningArtifactOutput,
} from "../models/models_0";
import { AssociateServiceActionWithProvisioningArtifact } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface AssociateServiceActionWithProvisioningArtifactCommandInput
  extends AssociateServiceActionWithProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link AssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface AssociateServiceActionWithProvisioningArtifactCommandOutput
  extends AssociateServiceActionWithProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Associates a self-service action with a provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // AssociateServiceActionWithProvisioningArtifactInput
 *   ProductId: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 *   ServiceActionId: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new AssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateServiceActionWithProvisioningArtifactCommandInput - {@link AssociateServiceActionWithProvisioningArtifactCommandInput}
 * @returns {@link AssociateServiceActionWithProvisioningArtifactCommandOutput}
 * @see {@link AssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>The specified resource is a duplicate.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
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
export class AssociateServiceActionWithProvisioningArtifactCommand extends $Command
  .classBuilder<
    AssociateServiceActionWithProvisioningArtifactCommandInput,
    AssociateServiceActionWithProvisioningArtifactCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "AssociateServiceActionWithProvisioningArtifact", {})
  .n("ServiceCatalogClient", "AssociateServiceActionWithProvisioningArtifactCommand")
  .sc(AssociateServiceActionWithProvisioningArtifact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateServiceActionWithProvisioningArtifactInput;
      output: {};
    };
    sdk: {
      input: AssociateServiceActionWithProvisioningArtifactCommandInput;
      output: AssociateServiceActionWithProvisioningArtifactCommandOutput;
    };
  };
}
