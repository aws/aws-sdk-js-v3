// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePortfolioInput, CreatePortfolioOutput } from "../models/models_0";
import { CreatePortfolio } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePortfolioCommand}.
 */
export interface CreatePortfolioCommandInput extends CreatePortfolioInput {}
/**
 * @public
 *
 * The output of {@link CreatePortfolioCommand}.
 */
export interface CreatePortfolioCommandOutput extends CreatePortfolioOutput, __MetadataBearer {}

/**
 * <p>Creates a portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreatePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreatePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreatePortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ProviderName: "STRING_VALUE", // required
 *   Tags: [ // AddTags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreatePortfolioCommand(input);
 * const response = await client.send(command);
 * // { // CreatePortfolioOutput
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
 * @param CreatePortfolioCommandInput - {@link CreatePortfolioCommandInput}
 * @returns {@link CreatePortfolioCommandOutput}
 * @see {@link CreatePortfolioCommandInput} for command's `input` shape.
 * @see {@link CreatePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class CreatePortfolioCommand extends $Command
  .classBuilder<
    CreatePortfolioCommandInput,
    CreatePortfolioCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "CreatePortfolio", {})
  .n("ServiceCatalogClient", "CreatePortfolioCommand")
  .sc(CreatePortfolio)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePortfolioInput;
      output: CreatePortfolioOutput;
    };
    sdk: {
      input: CreatePortfolioCommandInput;
      output: CreatePortfolioCommandOutput;
    };
  };
}
