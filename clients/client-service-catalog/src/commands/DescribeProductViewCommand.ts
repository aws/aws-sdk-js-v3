// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProductViewInput, DescribeProductViewOutput } from "../models/models_0";
import { de_DescribeProductViewCommand, se_DescribeProductViewCommand } from "../protocols/Aws_json1_1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DescribeProductView", {})
  .n("ServiceCatalogClient", "DescribeProductViewCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProductViewCommand)
  .de(de_DescribeProductViewCommand)
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
