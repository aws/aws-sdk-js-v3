// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateProvisionedProductInput, TerminateProvisionedProductOutput } from "../models/models_0";
import { de_TerminateProvisionedProductCommand, se_TerminateProvisionedProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateProvisionedProductCommand}.
 */
export interface TerminateProvisionedProductCommandInput extends TerminateProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link TerminateProvisionedProductCommand}.
 */
export interface TerminateProvisionedProductCommandOutput extends TerminateProvisionedProductOutput, __MetadataBearer {}

/**
 * <p>Terminates the specified provisioned product.</p>
 *          <p>This operation does not delete any records associated with the provisioned product.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, TerminateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, TerminateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // TerminateProvisionedProductInput
 *   ProvisionedProductName: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE",
 *   TerminateToken: "STRING_VALUE", // required
 *   IgnoreErrors: true || false,
 *   AcceptLanguage: "STRING_VALUE",
 *   RetainPhysicalResources: true || false,
 * };
 * const command = new TerminateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // TerminateProvisionedProductOutput
 * //   RecordDetail: { // RecordDetail
 * //     RecordId: "STRING_VALUE",
 * //     ProvisionedProductName: "STRING_VALUE",
 * //     Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     ProvisionedProductType: "STRING_VALUE",
 * //     RecordType: "STRING_VALUE",
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     RecordErrors: [ // RecordErrors
 * //       { // RecordError
 * //         Code: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RecordTags: [ // RecordTags
 * //       { // RecordTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TerminateProvisionedProductCommandInput - {@link TerminateProvisionedProductCommandInput}
 * @returns {@link TerminateProvisionedProductCommandOutput}
 * @see {@link TerminateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link TerminateProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class TerminateProvisionedProductCommand extends $Command
  .classBuilder<
    TerminateProvisionedProductCommandInput,
    TerminateProvisionedProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "TerminateProvisionedProduct", {})
  .n("ServiceCatalogClient", "TerminateProvisionedProductCommand")
  .f(void 0, void 0)
  .ser(se_TerminateProvisionedProductCommand)
  .de(de_TerminateProvisionedProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateProvisionedProductInput;
      output: TerminateProvisionedProductOutput;
    };
    sdk: {
      input: TerminateProvisionedProductCommandInput;
      output: TerminateProvisionedProductCommandOutput;
    };
  };
}
