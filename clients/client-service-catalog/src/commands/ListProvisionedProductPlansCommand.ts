// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/models_0";
import { de_ListProvisionedProductPlansCommand, se_ListProvisionedProductPlansCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisionedProductPlansCommand}.
 */
export interface ListProvisionedProductPlansCommandInput extends ListProvisionedProductPlansInput {}
/**
 * @public
 *
 * The output of {@link ListProvisionedProductPlansCommand}.
 */
export interface ListProvisionedProductPlansCommandOutput extends ListProvisionedProductPlansOutput, __MetadataBearer {}

/**
 * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisionedProductPlansCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisionedProductPlansCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisionedProductPlansInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionProductId: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 * };
 * const command = new ListProvisionedProductPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedProductPlansOutput
 * //   ProvisionedProductPlans: [ // ProvisionedProductPlans
 * //     { // ProvisionedProductPlanSummary
 * //       PlanName: "STRING_VALUE",
 * //       PlanId: "STRING_VALUE",
 * //       ProvisionProductId: "STRING_VALUE",
 * //       ProvisionProductName: "STRING_VALUE",
 * //       PlanType: "CLOUDFORMATION",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisionedProductPlansCommandInput - {@link ListProvisionedProductPlansCommandInput}
 * @returns {@link ListProvisionedProductPlansCommandOutput}
 * @see {@link ListProvisionedProductPlansCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedProductPlansCommandOutput} for command's `response` shape.
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
export class ListProvisionedProductPlansCommand extends $Command
  .classBuilder<
    ListProvisionedProductPlansCommandInput,
    ListProvisionedProductPlansCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListProvisionedProductPlans", {})
  .n("ServiceCatalogClient", "ListProvisionedProductPlansCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisionedProductPlansCommand)
  .de(de_ListProvisionedProductPlansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisionedProductPlansInput;
      output: ListProvisionedProductPlansOutput;
    };
    sdk: {
      input: ListProvisionedProductPlansCommandInput;
      output: ListProvisionedProductPlansCommandOutput;
    };
  };
}
