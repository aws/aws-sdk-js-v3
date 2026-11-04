// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateServiceActionWithProvisioningArtifactInput,
  AssociateServiceActionWithProvisioningArtifactOutput,
} from "../models/models_0";
import { AssociateServiceActionWithProvisioningArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface AssociateServiceActionWithProvisioningArtifactCommandInput extends AssociateServiceActionWithProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link AssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface AssociateServiceActionWithProvisioningArtifactCommandOutput extends AssociateServiceActionWithProvisioningArtifactOutput, __MetadataBearer {}

/**
 * Associates a self-service action with a provisioning artifact.
 *
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
 *
 * The specified resource is a duplicate.
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
export class AssociateServiceActionWithProvisioningArtifactCommand extends command<AssociateServiceActionWithProvisioningArtifactCommandInput, AssociateServiceActionWithProvisioningArtifactCommandOutput>(
  _ep0,
  _mw0,
  "AssociateServiceActionWithProvisioningArtifact",
  AssociateServiceActionWithProvisioningArtifact$
) {
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
