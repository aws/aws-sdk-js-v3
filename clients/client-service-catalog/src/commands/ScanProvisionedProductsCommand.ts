// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ScanProvisionedProductsInput, ScanProvisionedProductsOutput } from "../models/models_0";
import { ScanProvisionedProducts } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ScanProvisionedProductsCommand}.
 */
export interface ScanProvisionedProductsCommandInput extends ScanProvisionedProductsInput {}
/**
 * @public
 *
 * The output of {@link ScanProvisionedProductsCommand}.
 */
export interface ScanProvisionedProductsCommandOutput extends ScanProvisionedProductsOutput, __MetadataBearer {}

/**
 * <p>Lists the provisioned products that are available (not terminated).</p>
 *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ScanProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ScanProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ScanProvisionedProductsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ScanProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * // { // ScanProvisionedProductsOutput
 * //   ProvisionedProducts: [ // ProvisionedProductDetails
 * //     { // ProvisionedProductDetail
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "UNDER_CHANGE" || "TAINTED" || "ERROR" || "PLAN_IN_PROGRESS",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       IdempotencyToken: "STRING_VALUE",
 * //       LastRecordId: "STRING_VALUE",
 * //       LastProvisioningRecordId: "STRING_VALUE",
 * //       LastSuccessfulProvisioningRecordId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       LaunchRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ScanProvisionedProductsCommandInput - {@link ScanProvisionedProductsCommandInput}
 * @returns {@link ScanProvisionedProductsCommandOutput}
 * @see {@link ScanProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link ScanProvisionedProductsCommandOutput} for command's `response` shape.
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
export class ScanProvisionedProductsCommand extends $Command
  .classBuilder<
    ScanProvisionedProductsCommandInput,
    ScanProvisionedProductsCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "ScanProvisionedProducts", {})
  .n("ServiceCatalogClient", "ScanProvisionedProductsCommand")
  .sc(ScanProvisionedProducts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ScanProvisionedProductsInput;
      output: ScanProvisionedProductsOutput;
    };
    sdk: {
      input: ScanProvisionedProductsCommandInput;
      output: ScanProvisionedProductsCommandOutput;
    };
  };
}
