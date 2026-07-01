// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAcceptedPortfolioSharesInput, ListAcceptedPortfolioSharesOutput } from "../models/models_0";
import { ListAcceptedPortfolioShares$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAcceptedPortfolioSharesCommand}.
 */
export interface ListAcceptedPortfolioSharesCommandInput extends ListAcceptedPortfolioSharesInput {}
/**
 * @public
 *
 * The output of {@link ListAcceptedPortfolioSharesCommand}.
 */
export interface ListAcceptedPortfolioSharesCommandOutput extends ListAcceptedPortfolioSharesOutput, __MetadataBearer {}

/**
 * <p>Lists all imported portfolios for which account-to-account shares were accepted by
 *          this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which
 *          organizational shares were accepted by this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListAcceptedPortfolioSharesInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PortfolioShareType: "IMPORTED" || "AWS_SERVICECATALOG" || "AWS_ORGANIZATIONS",
 * };
 * const command = new ListAcceptedPortfolioSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListAcceptedPortfolioSharesOutput
 * //   PortfolioDetails: [ // PortfolioDetails
 * //     { // PortfolioDetail
 * //       Id: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ProviderName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcceptedPortfolioSharesCommandInput - {@link ListAcceptedPortfolioSharesCommandInput}
 * @returns {@link ListAcceptedPortfolioSharesCommandOutput}
 * @see {@link ListAcceptedPortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link ListAcceptedPortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListAcceptedPortfolioSharesCommand extends command<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput>(
  _ep0,
  _mw0,
  "ListAcceptedPortfolioShares",
  ListAcceptedPortfolioShares$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAcceptedPortfolioSharesInput;
      output: ListAcceptedPortfolioSharesOutput;
    };
    sdk: {
      input: ListAcceptedPortfolioSharesCommandInput;
      output: ListAcceptedPortfolioSharesCommandOutput;
    };
  };
}
