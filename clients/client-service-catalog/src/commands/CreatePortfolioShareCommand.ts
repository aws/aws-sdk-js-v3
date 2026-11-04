// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePortfolioShareInput, CreatePortfolioShareOutput } from "../models/models_0";
import { CreatePortfolioShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePortfolioShareCommand}.
 */
export interface CreatePortfolioShareCommandInput extends CreatePortfolioShareInput {}
/**
 * @public
 *
 * The output of {@link CreatePortfolioShareCommand}.
 */
export interface CreatePortfolioShareCommandOutput extends CreatePortfolioShareOutput, __MetadataBearer {}

/**
 * Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account.
 *
 * Note that if a delegated admin is de-registered, they can no longer create portfolio shares.
 *
 * `AWSOrganizationsAccess` must be enabled in order to create a portfolio share to an organization node.
 *
 * You can't share a shared resource, including portfolios that contain a shared product.
 *
 * If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the `UpdatePortfolioShare` API instead.
 *
 * > **Note:** When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is *not* an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using `PrincipalType` as `IAM`. With this configuration, the `PrincipalARN` must already exist in the recipient account before it can be associated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreatePortfolioShareInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 *   OrganizationNode: { // OrganizationNode
 *     Type: "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ACCOUNT",
 *     Value: "STRING_VALUE",
 *   },
 *   ShareTagOptions: true || false,
 *   SharePrincipals: true || false,
 * };
 * const command = new CreatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * // { // CreatePortfolioShareOutput
 * //   PortfolioShareToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePortfolioShareCommandInput - {@link CreatePortfolioShareCommandInput}
 * @returns {@link CreatePortfolioShareCommandOutput}
 * @see {@link CreatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link CreatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * An attempt was made to modify a resource that is in a state that is not valid. Check your resources to ensure that they are in valid states before retrying the operation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The current limits of the service would have been exceeded by this operation. Decrease your resource use or increase your service limits and retry the operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not supported.
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
export class CreatePortfolioShareCommand extends command<CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput>(
  _ep0,
  _mw0,
  "CreatePortfolioShare",
  CreatePortfolioShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePortfolioShareInput;
      output: CreatePortfolioShareOutput;
    };
    sdk: {
      input: CreatePortfolioShareCommandInput;
      output: CreatePortfolioShareCommandOutput;
    };
  };
}
