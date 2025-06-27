// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPrincipalsForPortfolioInput, ListPrincipalsForPortfolioOutput } from "../models/models_0";
import { de_ListPrincipalsForPortfolioCommand, se_ListPrincipalsForPortfolioCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrincipalsForPortfolioCommand}.
 */
export interface ListPrincipalsForPortfolioCommandInput extends ListPrincipalsForPortfolioInput {}
/**
 * @public
 *
 * The output of {@link ListPrincipalsForPortfolioCommand}.
 */
export interface ListPrincipalsForPortfolioCommandOutput extends ListPrincipalsForPortfolioOutput, __MetadataBearer {}

/**
 * <p>Lists all <code>PrincipalARN</code>s and corresponding <code>PrincipalType</code>s associated with the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPrincipalsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListPrincipalsForPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListPrincipalsForPortfolioCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalsForPortfolioOutput
 * //   Principals: [ // Principals
 * //     { // Principal
 * //       PrincipalARN: "STRING_VALUE",
 * //       PrincipalType: "IAM" || "IAM_PATTERN",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalsForPortfolioCommandInput - {@link ListPrincipalsForPortfolioCommandInput}
 * @returns {@link ListPrincipalsForPortfolioCommandOutput}
 * @see {@link ListPrincipalsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalsForPortfolioCommandOutput} for command's `response` shape.
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
export class ListPrincipalsForPortfolioCommand extends $Command
  .classBuilder<
    ListPrincipalsForPortfolioCommandInput,
    ListPrincipalsForPortfolioCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListPrincipalsForPortfolio", {})
  .n("ServiceCatalogClient", "ListPrincipalsForPortfolioCommand")
  .f(void 0, void 0)
  .ser(se_ListPrincipalsForPortfolioCommand)
  .de(de_ListPrincipalsForPortfolioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalsForPortfolioInput;
      output: ListPrincipalsForPortfolioOutput;
    };
    sdk: {
      input: ListPrincipalsForPortfolioCommandInput;
      output: ListPrincipalsForPortfolioCommandOutput;
    };
  };
}
