// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListProvisioningArtifactsForServiceActionInput,
  ListProvisioningArtifactsForServiceActionOutput,
} from "../models/models_0";
import {
  de_ListProvisioningArtifactsForServiceActionCommand,
  se_ListProvisioningArtifactsForServiceActionCommand,
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
 * The input for {@link ListProvisioningArtifactsForServiceActionCommand}.
 */
export interface ListProvisioningArtifactsForServiceActionCommandInput
  extends ListProvisioningArtifactsForServiceActionInput {}
/**
 * @public
 *
 * The output of {@link ListProvisioningArtifactsForServiceActionCommand}.
 */
export interface ListProvisioningArtifactsForServiceActionCommandOutput
  extends ListProvisioningArtifactsForServiceActionOutput,
    __MetadataBearer {}

/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisioningArtifactsForServiceActionInput
 *   ServiceActionId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new ListProvisioningArtifactsForServiceActionCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningArtifactsForServiceActionOutput
 * //   ProvisioningArtifactViews: [ // ProvisioningArtifactViews
 * //     { // ProvisioningArtifactView
 * //       ProductViewSummary: { // ProductViewSummary
 * //         Id: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         ShortDescription: "STRING_VALUE",
 * //         Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //         Distributor: "STRING_VALUE",
 * //         HasDefaultPath: true || false,
 * //         SupportEmail: "STRING_VALUE",
 * //         SupportDescription: "STRING_VALUE",
 * //         SupportUrl: "STRING_VALUE",
 * //       },
 * //       ProvisioningArtifact: { // ProvisioningArtifact
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         CreatedTime: new Date("TIMESTAMP"),
 * //         Guidance: "DEFAULT" || "DEPRECATED",
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningArtifactsForServiceActionCommandInput - {@link ListProvisioningArtifactsForServiceActionCommandInput}
 * @returns {@link ListProvisioningArtifactsForServiceActionCommandOutput}
 * @see {@link ListProvisioningArtifactsForServiceActionCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsForServiceActionCommandOutput} for command's `response` shape.
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
export class ListProvisioningArtifactsForServiceActionCommand extends $Command
  .classBuilder<
    ListProvisioningArtifactsForServiceActionCommandInput,
    ListProvisioningArtifactsForServiceActionCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListProvisioningArtifactsForServiceAction", {})
  .n("ServiceCatalogClient", "ListProvisioningArtifactsForServiceActionCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisioningArtifactsForServiceActionCommand)
  .de(de_ListProvisioningArtifactsForServiceActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisioningArtifactsForServiceActionInput;
      output: ListProvisioningArtifactsForServiceActionOutput;
    };
    sdk: {
      input: ListProvisioningArtifactsForServiceActionCommandInput;
      output: ListProvisioningArtifactsForServiceActionCommandOutput;
    };
  };
}
