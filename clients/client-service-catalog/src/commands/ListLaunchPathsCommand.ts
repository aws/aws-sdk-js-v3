// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/models_0";
import { de_ListLaunchPathsCommand, se_ListLaunchPathsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLaunchPathsCommand}.
 */
export interface ListLaunchPathsCommandInput extends ListLaunchPathsInput {}
/**
 * @public
 *
 * The output of {@link ListLaunchPathsCommand}.
 */
export interface ListLaunchPathsCommandOutput extends ListLaunchPathsOutput, __MetadataBearer {}

/**
 * <p>
 *          Lists the paths
 *          to the specified product.
 *          A path describes
 *          how the user
 *          gets access
 *          to a specified product
 *          and is necessary
 *          when provisioning a product.
 *          A path also determines the constraints
 *          that are put on a product.
 *          A path is dependent
 *          on a specific product, porfolio, and principal.
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
 * import { ServiceCatalogClient, ListLaunchPathsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListLaunchPathsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListLaunchPathsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListLaunchPathsCommand(input);
 * const response = await client.send(command);
 * // { // ListLaunchPathsOutput
 * //   LaunchPathSummaries: [ // LaunchPathSummaries
 * //     { // LaunchPathSummary
 * //       Id: "STRING_VALUE",
 * //       ConstraintSummaries: [ // ConstraintSummaries
 * //         { // ConstraintSummary
 * //           Type: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLaunchPathsCommandInput - {@link ListLaunchPathsCommandInput}
 * @returns {@link ListLaunchPathsCommandOutput}
 * @see {@link ListLaunchPathsCommandInput} for command's `input` shape.
 * @see {@link ListLaunchPathsCommandOutput} for command's `response` shape.
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
export class ListLaunchPathsCommand extends $Command
  .classBuilder<
    ListLaunchPathsCommandInput,
    ListLaunchPathsCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListLaunchPaths", {})
  .n("ServiceCatalogClient", "ListLaunchPathsCommand")
  .f(void 0, void 0)
  .ser(se_ListLaunchPathsCommand)
  .de(de_ListLaunchPathsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLaunchPathsInput;
      output: ListLaunchPathsOutput;
    };
    sdk: {
      input: ListLaunchPathsCommandInput;
      output: ListLaunchPathsCommandOutput;
    };
  };
}
