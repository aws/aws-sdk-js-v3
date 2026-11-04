// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePortfolioInput, UpdatePortfolioOutput } from "../models/models_0";
import { UpdatePortfolio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePortfolioCommand}.
 */
export interface UpdatePortfolioCommandInput extends UpdatePortfolioInput {}
/**
 * @public
 *
 * The output of {@link UpdatePortfolioCommand}.
 */
export interface UpdatePortfolioCommandOutput extends UpdatePortfolioOutput, __MetadataBearer {}

/**
 * Updates the specified portfolio.
 *
 * You cannot update a product that was shared with you.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdatePortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ProviderName: "STRING_VALUE",
 *   AddTags: [ // AddTags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RemoveTags: [ // TagKeys
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdatePortfolioCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePortfolioOutput
 * //   PortfolioDetail: { // PortfolioDetail
 * //     Id: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     ProviderName: "STRING_VALUE",
 * //   },
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePortfolioCommandInput - {@link UpdatePortfolioCommandInput}
 * @returns {@link UpdatePortfolioCommandOutput}
 * @see {@link UpdatePortfolioCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The current limits of the service would have been exceeded by this operation. Decrease your resource use or increase your service limits and retry the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *
 * An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Use the Amazon Web Services Management Console to perform the migration process before retrying the operation.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class UpdatePortfolioCommand extends command<UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePortfolio",
  UpdatePortfolio$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePortfolioInput;
      output: UpdatePortfolioOutput;
    };
    sdk: {
      input: UpdatePortfolioCommandInput;
      output: UpdatePortfolioCommandOutput;
    };
  };
}
