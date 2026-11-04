// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePortfolioShareInput, UpdatePortfolioShareOutput } from "../models/models_0";
import { UpdatePortfolioShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePortfolioShareCommand}.
 */
export interface UpdatePortfolioShareCommandInput extends UpdatePortfolioShareInput {}
/**
 * @public
 *
 * The output of {@link UpdatePortfolioShareCommand}.
 */
export interface UpdatePortfolioShareCommandOutput extends UpdatePortfolioShareOutput, __MetadataBearer {}

/**
 * Updates the specified portfolio share. You can use this API to enable or disable `TagOptions` sharing or Principal sharing for an existing portfolio share.
 *
 * The portfolio share cannot be updated if the `CreatePortfolioShare` operation is `IN_PROGRESS`, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be completed.
 *
 * You must provide the `accountId` or organization node in the input, but not both.
 *
 * If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke `UpdatePortfolioShare` separately for each share type.
 *
 * This API cannot be used for removing the portfolio share. You must use `DeletePortfolioShare` API for that action.
 *
 * > **Note:** When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is *not* an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using `PrincipalType` as `IAM`. With this configuration, the `PrincipalARN` must already exist in the recipient account before it can be associated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdatePortfolioShareInput
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
 * const command = new UpdatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortfolioShareOutput
 * //   PortfolioShareToken: "STRING_VALUE",
 * //   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "ERROR",
 * // };
 *
 * ```
 *
 * @param UpdatePortfolioShareCommandInput - {@link UpdatePortfolioShareCommandInput}
 * @returns {@link UpdatePortfolioShareCommandOutput}
 * @see {@link UpdatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioShareCommandOutput} for command's `response` shape.
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
export class UpdatePortfolioShareCommand extends command<UpdatePortfolioShareCommandInput, UpdatePortfolioShareCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePortfolioShare",
  UpdatePortfolioShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortfolioShareInput;
      output: UpdatePortfolioShareOutput;
    };
    sdk: {
      input: UpdatePortfolioShareCommandInput;
      output: UpdatePortfolioShareCommandOutput;
    };
  };
}
