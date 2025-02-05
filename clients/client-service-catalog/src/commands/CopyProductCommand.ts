// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyProductInput, CopyProductOutput } from "../models/models_0";
import { de_CopyProductCommand, se_CopyProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyProductCommand}.
 */
export interface CopyProductCommandInput extends CopyProductInput {}
/**
 * @public
 *
 * The output of {@link CopyProductCommand}.
 */
export interface CopyProductCommandOutput extends CopyProductOutput, __MetadataBearer {}

/**
 * <p>Copies the specified source product to the specified target product or a new
 *          product.</p>
 *          <p>You can copy a product to the same account or another account. You can copy a product
 *          to the same Region or another Region. If you copy a product to another account, you must
 *          first share the product in a portfolio using <a>CreatePortfolioShare</a>.</p>
 *          <p>This operation is performed asynchronously. To track the progress of the
 *          operation, use <a>DescribeCopyProductStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CopyProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CopyProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // CopyProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   SourceProductArn: "STRING_VALUE", // required
 *   TargetProductId: "STRING_VALUE",
 *   TargetProductName: "STRING_VALUE",
 *   SourceProvisioningArtifactIdentifiers: [ // SourceProvisioningArtifactProperties
 *     { // SourceProvisioningArtifactPropertiesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   ],
 *   CopyOptions: [ // CopyOptions
 *     "CopyTags",
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CopyProductCommand(input);
 * const response = await client.send(command);
 * // { // CopyProductOutput
 * //   CopyProductToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyProductCommandInput - {@link CopyProductCommandInput}
 * @returns {@link CopyProductCommandOutput}
 * @see {@link CopyProductCommandInput} for command's `input` shape.
 * @see {@link CopyProductCommandOutput} for command's `response` shape.
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
export class CopyProductCommand extends $Command
  .classBuilder<
    CopyProductCommandInput,
    CopyProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "CopyProduct", {})
  .n("ServiceCatalogClient", "CopyProductCommand")
  .f(void 0, void 0)
  .ser(se_CopyProductCommand)
  .de(de_CopyProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyProductInput;
      output: CopyProductOutput;
    };
    sdk: {
      input: CopyProductCommandInput;
      output: CopyProductCommandOutput;
    };
  };
}
