// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput } from "../models/models_0";
import { de_ListProvisioningArtifactsCommand, se_ListProvisioningArtifactsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisioningArtifactsCommand}.
 */
export interface ListProvisioningArtifactsCommandInput extends ListProvisioningArtifactsInput {}
/**
 * @public
 *
 * The output of {@link ListProvisioningArtifactsCommand}.
 */
export interface ListProvisioningArtifactsCommandOutput extends ListProvisioningArtifactsOutput, __MetadataBearer {}

/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisioningArtifactsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 * };
 * const command = new ListProvisioningArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningArtifactsOutput
 * //   ProvisioningArtifactDetails: [ // ProvisioningArtifactDetails
 * //     { // ProvisioningArtifactDetail
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE_AMI" || "MARKETPLACE_CAR" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Active: true || false,
 * //       Guidance: "DEFAULT" || "DEPRECATED",
 * //       SourceRevision: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningArtifactsCommandInput - {@link ListProvisioningArtifactsCommandInput}
 * @returns {@link ListProvisioningArtifactsCommandOutput}
 * @see {@link ListProvisioningArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsCommandOutput} for command's `response` shape.
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
export class ListProvisioningArtifactsCommand extends $Command
  .classBuilder<
    ListProvisioningArtifactsCommandInput,
    ListProvisioningArtifactsCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListProvisioningArtifacts", {})
  .n("ServiceCatalogClient", "ListProvisioningArtifactsCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisioningArtifactsCommand)
  .de(de_ListProvisioningArtifactsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisioningArtifactsInput;
      output: ListProvisioningArtifactsOutput;
    };
    sdk: {
      input: ListProvisioningArtifactsCommandInput;
      output: ListProvisioningArtifactsCommandOutput;
    };
  };
}
