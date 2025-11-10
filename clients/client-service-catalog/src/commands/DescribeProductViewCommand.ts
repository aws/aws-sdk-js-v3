// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProductViewInput, DescribeProductViewOutput } from "../models/models_0";
import { DescribeProductView } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProductViewCommand}.
 */
export interface DescribeProductViewCommandInput extends DescribeProductViewInput {}
/**
 * @public
 *
 * The output of {@link DescribeProductViewCommand}.
 */
export interface DescribeProductViewCommandOutput extends DescribeProductViewOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductViewCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductViewCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProductViewInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeProductViewCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductViewOutput
 * //   ProductViewSummary: { // ProductViewSummary
 * //     Id: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ShortDescription: "STRING_VALUE",
 * //     Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //     Distributor: "STRING_VALUE",
 * //     HasDefaultPath: true || false,
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportDescription: "STRING_VALUE",
 * //     SupportUrl: "STRING_VALUE",
 * //   },
 * //   ProvisioningArtifacts: [ // ProvisioningArtifacts
 * //     { // ProvisioningArtifact
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Guidance: "DEFAULT" || "DEPRECATED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProductViewCommandInput - {@link DescribeProductViewCommandInput}
 * @returns {@link DescribeProductViewCommandOutput}
 * @see {@link DescribeProductViewCommandInput} for command's `input` shape.
 * @see {@link DescribeProductViewCommandOutput} for command's `response` shape.
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
export class DescribeProductViewCommand extends $Command
  .classBuilder<
    DescribeProductViewCommandInput,
    DescribeProductViewCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeProductView", {})
  .n("ServiceCatalogClient", "DescribeProductViewCommand")
  .sc(DescribeProductView)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProductViewInput;
      output: DescribeProductViewOutput;
    };
    sdk: {
      input: DescribeProductViewCommandInput;
      output: DescribeProductViewCommandOutput;
    };
  };
}
