// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateServiceActionFromProvisioningArtifactInput,
  DisassociateServiceActionFromProvisioningArtifactOutput,
} from "../models/models_0";
import { DisassociateServiceActionFromProvisioningArtifact$ } from "../schemas/schemas_0";
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
 * The input for {@link DisassociateServiceActionFromProvisioningArtifactCommand}.
 */
export interface DisassociateServiceActionFromProvisioningArtifactCommandInput
  extends DisassociateServiceActionFromProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link DisassociateServiceActionFromProvisioningArtifactCommand}.
 */
export interface DisassociateServiceActionFromProvisioningArtifactCommandOutput
  extends DisassociateServiceActionFromProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified self-service action association from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DisassociateServiceActionFromProvisioningArtifactInput
 *   ProductId: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 *   ServiceActionId: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new DisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateServiceActionFromProvisioningArtifactCommandInput - {@link DisassociateServiceActionFromProvisioningArtifactCommandInput}
 * @returns {@link DisassociateServiceActionFromProvisioningArtifactCommandOutput}
 * @see {@link DisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
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
export class DisassociateServiceActionFromProvisioningArtifactCommand extends $Command
  .classBuilder<
    DisassociateServiceActionFromProvisioningArtifactCommandInput,
    DisassociateServiceActionFromProvisioningArtifactCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DisassociateServiceActionFromProvisioningArtifact", {})
  .n("ServiceCatalogClient", "DisassociateServiceActionFromProvisioningArtifactCommand")
  .sc(DisassociateServiceActionFromProvisioningArtifact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateServiceActionFromProvisioningArtifactInput;
      output: {};
    };
    sdk: {
      input: DisassociateServiceActionFromProvisioningArtifactCommandInput;
      output: DisassociateServiceActionFromProvisioningArtifactCommandOutput;
    };
  };
}
