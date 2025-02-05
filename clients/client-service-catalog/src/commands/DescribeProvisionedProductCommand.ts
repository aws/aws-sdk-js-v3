// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProvisionedProductInput, DescribeProvisionedProductOutput } from "../models/models_0";
import { de_DescribeProvisionedProductCommand, se_DescribeProvisionedProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProvisionedProductCommand}.
 */
export interface DescribeProvisionedProductCommandInput extends DescribeProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link DescribeProvisionedProductCommand}.
 */
export interface DescribeProvisionedProductCommandOutput extends DescribeProvisionedProductOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new DescribeProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProvisionedProductOutput
 * //   ProvisionedProductDetail: { // ProvisionedProductDetail
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "UNDER_CHANGE" || "TAINTED" || "ERROR" || "PLAN_IN_PROGRESS",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     IdempotencyToken: "STRING_VALUE",
 * //     LastRecordId: "STRING_VALUE",
 * //     LastProvisioningRecordId: "STRING_VALUE",
 * //     LastSuccessfulProvisioningRecordId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * //   CloudWatchDashboards: [ // CloudWatchDashboards
 * //     { // CloudWatchDashboard
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProvisionedProductCommandInput - {@link DescribeProvisionedProductCommandInput}
 * @returns {@link DescribeProvisionedProductCommandOutput}
 * @see {@link DescribeProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisionedProductCommandOutput} for command's `response` shape.
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
export class DescribeProvisionedProductCommand extends $Command
  .classBuilder<
    DescribeProvisionedProductCommandInput,
    DescribeProvisionedProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "DescribeProvisionedProduct", {})
  .n("ServiceCatalogClient", "DescribeProvisionedProductCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProvisionedProductCommand)
  .de(de_DescribeProvisionedProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProvisionedProductInput;
      output: DescribeProvisionedProductOutput;
    };
    sdk: {
      input: DescribeProvisionedProductCommandInput;
      output: DescribeProvisionedProductCommandOutput;
    };
  };
}
