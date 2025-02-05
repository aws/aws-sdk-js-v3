// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProductInput, DescribeProductOutput } from "../models/models_0";
import { de_DescribeProductCommand, se_DescribeProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProductCommand}.
 */
export interface DescribeProductCommandInput extends DescribeProductInput {}
/**
 * @public
 *
 * The output of {@link DescribeProductCommand}.
 */
export interface DescribeProductCommandOutput extends DescribeProductOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified product.</p>
 *          <note>
 *             <p>
 *             Running this operation
 *             with administrator access
 *             results
 *             in a failure.
 *             <a>DescribeProductAsAdmin</a> should be used instead.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new DescribeProductCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductOutput
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
 * //   Budgets: [ // Budgets
 * //     { // BudgetDetail
 * //       BudgetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LaunchPaths: [ // LaunchPaths
 * //     { // LaunchPath
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeProductCommandInput - {@link DescribeProductCommandInput}
 * @returns {@link DescribeProductCommandOutput}
 * @see {@link DescribeProductCommandInput} for command's `input` shape.
 * @see {@link DescribeProductCommandOutput} for command's `response` shape.
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
export class DescribeProductCommand extends $Command
  .classBuilder<
    DescribeProductCommandInput,
    DescribeProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "DescribeProduct", {})
  .n("ServiceCatalogClient", "DescribeProductCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProductCommand)
  .de(de_DescribeProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProductInput;
      output: DescribeProductOutput;
    };
    sdk: {
      input: DescribeProductCommandInput;
      output: DescribeProductCommandOutput;
    };
  };
}
