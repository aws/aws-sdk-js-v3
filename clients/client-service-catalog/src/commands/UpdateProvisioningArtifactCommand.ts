// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProvisioningArtifactInput, UpdateProvisioningArtifactOutput } from "../models/models_0";
import { UpdateProvisioningArtifact } from "../schemas/schemas_19_Portfolio";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProvisioningArtifactCommand}.
 */
export interface UpdateProvisioningArtifactCommandInput extends UpdateProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link UpdateProvisioningArtifactCommand}.
 */
export interface UpdateProvisioningArtifactCommandOutput extends UpdateProvisioningArtifactOutput, __MetadataBearer {}

/**
 * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateProvisioningArtifactInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Active: true || false,
 *   Guidance: "DEFAULT" || "DEPRECATED",
 * };
 * const command = new UpdateProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProvisioningArtifactOutput
 * //   ProvisioningArtifactDetail: { // ProvisioningArtifactDetail
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     Active: true || false,
 * //     Guidance: "DEFAULT" || "DEPRECATED",
 * //     SourceRevision: "STRING_VALUE",
 * //   },
 * //   Info: { // ProvisioningArtifactInfo
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Status: "AVAILABLE" || "CREATING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateProvisioningArtifactCommandInput - {@link UpdateProvisioningArtifactCommandInput}
 * @returns {@link UpdateProvisioningArtifactCommandOutput}
 * @see {@link UpdateProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisioningArtifactCommandOutput} for command's `response` shape.
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
export class UpdateProvisioningArtifactCommand extends $Command
  .classBuilder<
    UpdateProvisioningArtifactCommandInput,
    UpdateProvisioningArtifactCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "UpdateProvisioningArtifact", {})
  .n("ServiceCatalogClient", "UpdateProvisioningArtifactCommand")
  .sc(UpdateProvisioningArtifact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProvisioningArtifactInput;
      output: UpdateProvisioningArtifactOutput;
    };
    sdk: {
      input: UpdateProvisioningArtifactCommandInput;
      output: UpdateProvisioningArtifactCommandOutput;
    };
  };
}
