// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateServiceActionFromProvisioningArtifactInput,
  DisassociateServiceActionFromProvisioningArtifactOutput,
} from "../models/models_0";
import {
  de_DisassociateServiceActionFromProvisioningArtifactCommand,
  se_DisassociateServiceActionFromProvisioningArtifactCommand,
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DisassociateServiceActionFromProvisioningArtifact", {})
  .n("ServiceCatalogClient", "DisassociateServiceActionFromProvisioningArtifactCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateServiceActionFromProvisioningArtifactCommand)
  .de(de_DisassociateServiceActionFromProvisioningArtifactCommand)
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
