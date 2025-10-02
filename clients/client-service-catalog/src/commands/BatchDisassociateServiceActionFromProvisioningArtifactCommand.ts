// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDisassociateServiceActionFromProvisioningArtifactInput,
  BatchDisassociateServiceActionFromProvisioningArtifactOutput,
} from "../models/models_0";
import {
  de_BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  se_BatchDisassociateServiceActionFromProvisioningArtifactCommand,
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
 * The input for {@link BatchDisassociateServiceActionFromProvisioningArtifactCommand}.
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandInput
  extends BatchDisassociateServiceActionFromProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateServiceActionFromProvisioningArtifactCommand}.
 */
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  extends BatchDisassociateServiceActionFromProvisioningArtifactOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // BatchDisassociateServiceActionFromProvisioningArtifactInput
 *   ServiceActionAssociations: [ // ServiceActionAssociations // required
 *     { // ServiceActionAssociation
 *       ServiceActionId: "STRING_VALUE", // required
 *       ProductId: "STRING_VALUE", // required
 *       ProvisioningArtifactId: "STRING_VALUE", // required
 *     },
 *   ],
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateServiceActionFromProvisioningArtifactOutput
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
 * @param BatchDisassociateServiceActionFromProvisioningArtifactCommandInput - {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput}
 * @returns {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput}
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
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
export class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends $Command
  .classBuilder<
    BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
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
  .s("AWS242ServiceCatalogService", "BatchDisassociateServiceActionFromProvisioningArtifact", {})
  .n("ServiceCatalogClient", "BatchDisassociateServiceActionFromProvisioningArtifactCommand")
  .f(void 0, void 0)
  .ser(se_BatchDisassociateServiceActionFromProvisioningArtifactCommand)
  .de(de_BatchDisassociateServiceActionFromProvisioningArtifactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateServiceActionFromProvisioningArtifactInput;
      output: BatchDisassociateServiceActionFromProvisioningArtifactOutput;
    };
    sdk: {
      input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput;
      output: BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput;
    };
  };
}
