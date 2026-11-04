// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/models_0";
import { CreateProvisioningArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a provisioning artifact (also known as a version) for the specified product.
 *
 * You cannot create a provisioning artifact for a product that was shared with you.
 *
 * The user or role that performs this operation must have the `cloudformation:GetTemplate` IAM policy permission. This policy permission is required when using the `ImportFromPhysicalId` template source in the information data section.
 *
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
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The current limits of the service would have been exceeded by this operation. Decrease your resource use or increase your service limits and retry the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class CreateProvisioningArtifactCommand extends command<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput>(
  _ep0,
  _mw0,
  "CreateProvisioningArtifact",
  CreateProvisioningArtifact$
) {
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
