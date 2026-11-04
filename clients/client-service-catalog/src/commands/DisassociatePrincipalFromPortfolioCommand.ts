// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociatePrincipalFromPortfolioInput,
  DisassociatePrincipalFromPortfolioOutput,
} from "../models/models_0";
import { DisassociatePrincipalFromPortfolio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisassociatePrincipalFromPortfolioCommandOutput extends DisassociatePrincipalFromPortfolioOutput, __MetadataBearer {}

/**
 * Disassociates a previously associated principal ARN from a specified portfolio.
 *
 * The `PrincipalType` and `PrincipalARN` must match the `AssociatePrincipalWithPortfolio` call request details. For example, to disassociate an association created with a `PrincipalARN` of `PrincipalType` IAM you must use the `PrincipalType` IAM when calling `DisassociatePrincipalFromPortfolio`.
 *
 * For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal.
 *
 * For more information, review [associate-principal-with-portfolio](https://docs.aws.amazon.com/cli/latest/reference/servicecatalog/associate-principal-with-portfolio.html#options) in the Amazon Web Services CLI Command Reference.
 *
 * > **Note:** If you disassociate a principal from a portfolio, with PrincipalType as `IAM`, the same principal will still have access to the portfolio if it matches one of the associated principals of type `IAM_PATTERN`. To fully remove access for a principal, verify all the associated Principals of type `IAM_PATTERN`, and then ensure you disassociate any `IAM_PATTERN` principals that match the principal whose access you are removing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociatePrincipalFromPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociatePrincipalFromPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
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
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class DisassociatePrincipalFromPortfolioCommand extends command<DisassociatePrincipalFromPortfolioCommandInput, DisassociatePrincipalFromPortfolioCommandOutput>(
  _ep0,
  _mw0,
  "DisassociatePrincipalFromPortfolio",
  DisassociatePrincipalFromPortfolio$
) {
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
