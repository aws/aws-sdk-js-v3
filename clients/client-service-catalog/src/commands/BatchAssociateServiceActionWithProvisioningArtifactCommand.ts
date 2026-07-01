// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchAssociateServiceActionWithProvisioningArtifactInput,
  BatchAssociateServiceActionWithProvisioningArtifactOutput,
} from "../models/models_0";
import { BatchAssociateServiceActionWithProvisioningArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactCommandInput extends BatchAssociateServiceActionWithProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link BatchAssociateServiceActionWithProvisioningArtifactCommand}.
 */
export interface BatchAssociateServiceActionWithProvisioningArtifactCommandOutput extends BatchAssociateServiceActionWithProvisioningArtifactOutput, __MetadataBearer {}

/**
 * <p>Associates multiple self-service actions with provisioning artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // BatchAssociateServiceActionWithProvisioningArtifactInput
 *   ServiceActionAssociations: [ // ServiceActionAssociations // required
 *     { // ServiceActionAssociation
 *       ServiceActionId: "STRING_VALUE", // required
 *       ProductId: "STRING_VALUE", // required
 *       ProvisioningArtifactId: "STRING_VALUE", // required
 *     },
 *   ],
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new BatchAssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateServiceActionWithProvisioningArtifactOutput
 * //   FailedServiceActionAssociations: [ // FailedServiceActionAssociations
 * //     { // FailedServiceActionAssociation
 * //       ServiceActionId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       ErrorCode: "DUPLICATE_RESOURCE" || "INTERNAL_FAILURE" || "LIMIT_EXCEEDED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INVALID_PARAMETER",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateServiceActionWithProvisioningArtifactCommandInput - {@link BatchAssociateServiceActionWithProvisioningArtifactCommandInput}
 * @returns {@link BatchAssociateServiceActionWithProvisioningArtifactCommandOutput}
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class BatchAssociateServiceActionWithProvisioningArtifactCommand extends command<BatchAssociateServiceActionWithProvisioningArtifactCommandInput, BatchAssociateServiceActionWithProvisioningArtifactCommandOutput>(
  _ep0,
  _mw0,
  "BatchAssociateServiceActionWithProvisioningArtifact",
  BatchAssociateServiceActionWithProvisioningArtifact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateServiceActionWithProvisioningArtifactInput;
      output: BatchAssociateServiceActionWithProvisioningArtifactOutput;
    };
    sdk: {
      input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput;
      output: BatchAssociateServiceActionWithProvisioningArtifactCommandOutput;
    };
  };
}
