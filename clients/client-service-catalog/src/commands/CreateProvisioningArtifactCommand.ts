// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/models_0";
import { de_CreateProvisioningArtifactCommand, se_CreateProvisioningArtifactCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningArtifactCommand}.
 */
export interface CreateProvisioningArtifactCommandInput extends CreateProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningArtifactCommand}.
 */
export interface CreateProvisioningArtifactCommandOutput extends CreateProvisioningArtifactOutput, __MetadataBearer {}

/**
 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          IAM policy permission. This policy permission is required when using the
 *          <code>ImportFromPhysicalId</code> template source in the information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreateProvisioningArtifactInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   Parameters: { // ProvisioningArtifactProperties
 *     Name: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     Info: { // ProvisioningArtifactInfo
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 *     DisableTemplateValidation: true || false,
 *   },
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningArtifactOutput
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
 * @param CreateProvisioningArtifactCommandInput - {@link CreateProvisioningArtifactCommandInput}
 * @returns {@link CreateProvisioningArtifactCommandOutput}
 * @see {@link CreateProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
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
export class CreateProvisioningArtifactCommand extends $Command
  .classBuilder<
    CreateProvisioningArtifactCommandInput,
    CreateProvisioningArtifactCommandOutput,
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
  .s("AWS242ServiceCatalogService", "CreateProvisioningArtifact", {})
  .n("ServiceCatalogClient", "CreateProvisioningArtifactCommand")
  .f(void 0, void 0)
  .ser(se_CreateProvisioningArtifactCommand)
  .de(de_CreateProvisioningArtifactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProvisioningArtifactInput;
      output: CreateProvisioningArtifactOutput;
    };
    sdk: {
      input: CreateProvisioningArtifactCommandInput;
      output: CreateProvisioningArtifactCommandOutput;
    };
  };
}
