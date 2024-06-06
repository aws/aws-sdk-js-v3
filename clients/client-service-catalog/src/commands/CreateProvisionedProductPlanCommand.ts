// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProvisionedProductPlanInput, CreateProvisionedProductPlanOutput } from "../models/models_0";
import {
  de_CreateProvisionedProductPlanCommand,
  se_CreateProvisionedProductPlanCommand,
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
 * The input for {@link CreateProvisionedProductPlanCommand}.
 */
export interface CreateProvisionedProductPlanCommandInput extends CreateProvisionedProductPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateProvisionedProductPlanCommand}.
 */
export interface CreateProvisionedProductPlanCommandOutput
  extends CreateProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * <p>Creates a plan.</p>
 *          <p>A plan includes the list of resources to be
 *          created (when provisioning a new product) or modified (when updating a provisioned product)
 *          when the plan is executed.</p>
 *          <p>You can create one plan for each provisioned product. To create a plan for an existing
 *          provisioned product, the product status must be AVAILABLE or TAINTED.</p>
 *          <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>.
 *          To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreateProvisionedProductPlanInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PlanName: "STRING_VALUE", // required
 *   PlanType: "CLOUDFORMATION", // required
 *   NotificationArns: [ // NotificationArns
 *     "STRING_VALUE",
 *   ],
 *   PathId: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   ProvisionedProductName: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 *   ProvisioningParameters: [ // UpdateProvisioningParameters
 *     { // UpdateProvisioningParameter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisionedProductPlanOutput
 * //   PlanName: "STRING_VALUE",
 * //   PlanId: "STRING_VALUE",
 * //   ProvisionProductId: "STRING_VALUE",
 * //   ProvisionedProductName: "STRING_VALUE",
 * //   ProvisioningArtifactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProvisionedProductPlanCommandInput - {@link CreateProvisionedProductPlanCommandInput}
 * @returns {@link CreateProvisionedProductPlanCommandOutput}
 * @see {@link CreateProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link CreateProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class CreateProvisionedProductPlanCommand extends $Command
  .classBuilder<
    CreateProvisionedProductPlanCommandInput,
    CreateProvisionedProductPlanCommandOutput,
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
  .s("AWS242ServiceCatalogService", "CreateProvisionedProductPlan", {})
  .n("ServiceCatalogClient", "CreateProvisionedProductPlanCommand")
  .f(void 0, void 0)
  .ser(se_CreateProvisionedProductPlanCommand)
  .de(de_CreateProvisionedProductPlanCommand)
  .build() {}
