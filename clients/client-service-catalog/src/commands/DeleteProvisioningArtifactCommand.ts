// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProvisioningArtifactInput, DeleteProvisioningArtifactOutput } from "../models/models_0";
import { de_DeleteProvisioningArtifactCommand, se_DeleteProvisioningArtifactCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisioningArtifactCommand}.
 */
export interface DeleteProvisioningArtifactCommandInput extends DeleteProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link DeleteProvisioningArtifactCommand}.
 */
export interface DeleteProvisioningArtifactCommandOutput extends DeleteProvisioningArtifactOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot delete a provisioning artifact associated with a product that was shared with you.
 *          You cannot delete the last provisioning artifact for a product, because a product must have at
 *          least one provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeleteProvisioningArtifactInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisioningArtifactCommandInput - {@link DeleteProvisioningArtifactCommandInput}
 * @returns {@link DeleteProvisioningArtifactCommandOutput}
 * @see {@link DeleteProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class DeleteProvisioningArtifactCommand extends $Command
  .classBuilder<
    DeleteProvisioningArtifactCommandInput,
    DeleteProvisioningArtifactCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DeleteProvisioningArtifact", {})
  .n("ServiceCatalogClient", "DeleteProvisioningArtifactCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProvisioningArtifactCommand)
  .de(de_DeleteProvisioningArtifactCommand)
  .build() {}
