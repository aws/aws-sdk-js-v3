// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionProductInput, ProvisionProductOutput } from "../models/models_0";
import { de_ProvisionProductCommand, se_ProvisionProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProvisionProductCommand}.
 */
export interface ProvisionProductCommandInput extends ProvisionProductInput {}
/**
 * @public
 *
 * The output of {@link ProvisionProductCommand}.
 */
export interface ProvisionProductCommandOutput extends ProvisionProductOutput, __MetadataBearer {}

/**
 * <p>
 *          Provisions the specified product.
 *       </p>
 *          <p>
 *          A provisioned product is a resourced instance
 *          of a product.
 *          For example,
 *          provisioning a product
 *          that's based
 *          on an CloudFormation template
 *          launches an CloudFormation stack and its underlying resources.
 *          You can check the status
 *          of this request
 *          using <a>DescribeRecord</a>.
 *       </p>
 *          <p>
 *          If the request contains a tag key
 *          with an empty list
 *          of values,
 *          there's a tag conflict
 *          for that key.
 *          Don't include conflicted keys
 *          as tags,
 *          or this will cause the error "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
 *       </p>
 *          <note>
 *             <p>
 *             When provisioning a product
 *             that's been added
 *             to a portfolio,
 *             you must grant your user, group, or role access
 *             to the portfolio.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/catalogs_portfolios_users.html">Granting users access</a>
 *             in the <i>Service Catalog User Guide</i>.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ProvisionProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ProvisionProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ProvisionProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE",
 *   ProductName: "STRING_VALUE",
 *   ProvisioningArtifactId: "STRING_VALUE",
 *   ProvisioningArtifactName: "STRING_VALUE",
 *   PathId: "STRING_VALUE",
 *   PathName: "STRING_VALUE",
 *   ProvisionedProductName: "STRING_VALUE", // required
 *   ProvisioningParameters: [ // ProvisioningParameters
 *     { // ProvisioningParameter
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ProvisioningPreferences: { // ProvisioningPreferences
 *     StackSetAccounts: [ // StackSetAccounts
 *       "STRING_VALUE",
 *     ],
 *     StackSetRegions: [ // StackSetRegions
 *       "STRING_VALUE",
 *     ],
 *     StackSetFailureToleranceCount: Number("int"),
 *     StackSetFailureTolerancePercentage: Number("int"),
 *     StackSetMaxConcurrencyCount: Number("int"),
 *     StackSetMaxConcurrencyPercentage: Number("int"),
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   NotificationArns: [ // NotificationArns
 *     "STRING_VALUE",
 *   ],
 *   ProvisionToken: "STRING_VALUE", // required
 * };
 * const command = new ProvisionProductCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionProductOutput
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
 * @param ProvisionProductCommandInput - {@link ProvisionProductCommandInput}
 * @returns {@link ProvisionProductCommandOutput}
 * @see {@link ProvisionProductCommandInput} for command's `input` shape.
 * @see {@link ProvisionProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>The specified resource is a duplicate.</p>
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
export class ProvisionProductCommand extends $Command
  .classBuilder<
    ProvisionProductCommandInput,
    ProvisionProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ProvisionProduct", {})
  .n("ServiceCatalogClient", "ProvisionProductCommand")
  .f(void 0, void 0)
  .ser(se_ProvisionProductCommand)
  .de(de_ProvisionProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionProductInput;
      output: ProvisionProductOutput;
    };
    sdk: {
      input: ProvisionProductCommandInput;
      output: ProvisionProductCommandOutput;
    };
  };
}
