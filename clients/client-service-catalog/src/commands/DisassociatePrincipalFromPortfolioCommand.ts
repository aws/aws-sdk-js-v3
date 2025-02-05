// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociatePrincipalFromPortfolioInput, DisassociatePrincipalFromPortfolioOutput } from "../models/models_0";
import {
  de_DisassociatePrincipalFromPortfolioCommand,
  se_DisassociatePrincipalFromPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePrincipalFromPortfolioCommand}.
 */
export interface DisassociatePrincipalFromPortfolioCommandInput extends DisassociatePrincipalFromPortfolioInput {}
/**
 * @public
 *
 * The output of {@link DisassociatePrincipalFromPortfolioCommand}.
 */
export interface DisassociatePrincipalFromPortfolioCommandOutput
  extends DisassociatePrincipalFromPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates a previously associated principal ARN from a specified
 *          portfolio.</p>
 *          <p>The <code>PrincipalType</code> and <code>PrincipalARN</code> must match the
 *          <code>AssociatePrincipalWithPortfolio</code> call request details. For example,
 *          to disassociate an association created with a <code>PrincipalARN</code> of <code>PrincipalType</code>
 *          IAM you must use the <code>PrincipalType</code> IAM when calling <code>DisassociatePrincipalFromPortfolio</code>. </p>
 *          <p>For portfolios that have been shared with principal name sharing enabled: after disassociating a principal,
 *    share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name
 *    of the associated principal. </p>
 *          <p>For more information, review <a href="https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/associate-principal-with-portfolio.html#options">associate-principal-with-portfolio</a>
 *          in the Amazon Web Services CLI Command Reference. </p>
 *          <note>
 *             <p>If you disassociate a principal from a portfolio, with PrincipalType as <code>IAM</code>, the same principal will
 *             still have access to the portfolio if it matches one of the associated principals of type <code>IAM_PATTERN</code>.
 *             To fully remove access for a principal, verify all the associated Principals of type <code>IAM_PATTERN</code>,
 *             and then ensure you disassociate any <code>IAM_PATTERN</code> principals that match the principal
 *             whose access you are removing.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociatePrincipalFromPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociatePrincipalFromPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // DisassociatePrincipalFromPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   PrincipalARN: "STRING_VALUE", // required
 *   PrincipalType: "IAM" || "IAM_PATTERN",
 * };
 * const command = new DisassociatePrincipalFromPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociatePrincipalFromPortfolioCommandInput - {@link DisassociatePrincipalFromPortfolioCommandInput}
 * @returns {@link DisassociatePrincipalFromPortfolioCommandOutput}
 * @see {@link DisassociatePrincipalFromPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisassociatePrincipalFromPortfolioCommandOutput} for command's `response` shape.
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
export class DisassociatePrincipalFromPortfolioCommand extends $Command
  .classBuilder<
    DisassociatePrincipalFromPortfolioCommandInput,
    DisassociatePrincipalFromPortfolioCommandOutput,
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
  .s("AWS242ServiceCatalogService", "DisassociatePrincipalFromPortfolio", {})
  .n("ServiceCatalogClient", "DisassociatePrincipalFromPortfolioCommand")
  .f(void 0, void 0)
  .ser(se_DisassociatePrincipalFromPortfolioCommand)
  .de(de_DisassociatePrincipalFromPortfolioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePrincipalFromPortfolioInput;
      output: {};
    };
    sdk: {
      input: DisassociatePrincipalFromPortfolioCommandInput;
      output: DisassociatePrincipalFromPortfolioCommandOutput;
    };
  };
}
