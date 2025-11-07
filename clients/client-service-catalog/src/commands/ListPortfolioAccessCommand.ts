// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPortfolioAccessInput, ListPortfolioAccessOutput } from "../models/models_0";
import { ListPortfolioAccess } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPortfolioAccessCommand}.
 */
export interface ListPortfolioAccessCommandInput extends ListPortfolioAccessInput {}
/**
 * @public
 *
 * The output of {@link ListPortfolioAccessCommand}.
 */
export interface ListPortfolioAccessCommandOutput extends ListPortfolioAccessOutput, __MetadataBearer {}

/**
 * <p>Lists the account IDs that have access to the specified portfolio.</p>
 *          <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfolioAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfolioAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListPortfolioAccessInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   OrganizationParentId: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListPortfolioAccessCommand(input);
 * const response = await client.send(command);
 * // { // ListPortfolioAccessOutput
 * //   AccountIds: [ // AccountIds
 * //     "STRING_VALUE",
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPortfolioAccessCommandInput - {@link ListPortfolioAccessCommandInput}
 * @returns {@link ListPortfolioAccessCommandOutput}
 * @see {@link ListPortfolioAccessCommandInput} for command's `input` shape.
 * @see {@link ListPortfolioAccessCommandOutput} for command's `response` shape.
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
export class ListPortfolioAccessCommand extends $Command
  .classBuilder<
    ListPortfolioAccessCommandInput,
    ListPortfolioAccessCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "ListPortfolioAccess", {})
  .n("ServiceCatalogClient", "ListPortfolioAccessCommand")
  .sc(ListPortfolioAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortfolioAccessInput;
      output: ListPortfolioAccessOutput;
    };
    sdk: {
      input: ListPortfolioAccessCommandInput;
      output: ListPortfolioAccessCommandOutput;
    };
  };
}
