// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociatePrincipalWithPortfolioInput, AssociatePrincipalWithPortfolioOutput } from "../models/models_0";
import { AssociatePrincipalWithPortfolio } from "../schemas/schemas_4_Portfolio";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePrincipalWithPortfolioCommand}.
 */
export interface AssociatePrincipalWithPortfolioCommandInput extends AssociatePrincipalWithPortfolioInput {}
/**
 * @public
 *
 * The output of {@link AssociatePrincipalWithPortfolioCommand}.
 */
export interface AssociatePrincipalWithPortfolioCommandOutput
  extends AssociatePrincipalWithPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Associates the specified principal ARN with the specified portfolio.</p>
 *          <p>If you share the portfolio with principal name sharing enabled, the <code>PrincipalARN</code> association is
 *          included in the share. </p>
 *          <p>The <code>PortfolioID</code>, <code>PrincipalARN</code>, and <code>PrincipalType</code> parameters are
 *       required. </p>
 *          <p>You can associate a maximum of 10 Principals with a portfolio using <code>PrincipalType</code> as <code>IAM_PATTERN</code>. </p>
 *          <note>
 *             <p>When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is
 *          then shared with other accounts. For a user in a recipient account who is <i>not</i> an Service Catalog Admin,
 *          but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal
 *          name association for the portfolio. Although this user may not know which principal names are associated through
 *          Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then
 *          Service Catalog recommends using <code>PrincipalType</code> as <code>IAM</code>. With this configuration,
 *          the <code>PrincipalARN</code> must already exist in the recipient account before it can be associated. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociatePrincipalWithPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociatePrincipalWithPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // AssociatePrincipalWithPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   PrincipalARN: "STRING_VALUE", // required
 *   PrincipalType: "IAM" || "IAM_PATTERN", // required
 * };
 * const command = new AssociatePrincipalWithPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociatePrincipalWithPortfolioCommandInput - {@link AssociatePrincipalWithPortfolioCommandInput}
 * @returns {@link AssociatePrincipalWithPortfolioCommandOutput}
 * @see {@link AssociatePrincipalWithPortfolioCommandInput} for command's `input` shape.
 * @see {@link AssociatePrincipalWithPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
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
export class AssociatePrincipalWithPortfolioCommand extends $Command
  .classBuilder<
    AssociatePrincipalWithPortfolioCommandInput,
    AssociatePrincipalWithPortfolioCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "AssociatePrincipalWithPortfolio", {})
  .n("ServiceCatalogClient", "AssociatePrincipalWithPortfolioCommand")
  .sc(AssociatePrincipalWithPortfolio)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePrincipalWithPortfolioInput;
      output: {};
    };
    sdk: {
      input: AssociatePrincipalWithPortfolioCommandInput;
      output: AssociatePrincipalWithPortfolioCommandOutput;
    };
  };
}
