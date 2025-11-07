// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePortfolioSharesInput, DescribePortfolioSharesOutput } from "../models/models_0";
import { DescribePortfolioShares } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePortfolioSharesCommand}.
 */
export interface DescribePortfolioSharesCommandInput extends DescribePortfolioSharesInput {}
/**
 * @public
 *
 * The output of {@link DescribePortfolioSharesCommand}.
 */
export interface DescribePortfolioSharesCommandOutput extends DescribePortfolioSharesOutput, __MetadataBearer {}

/**
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribePortfolioSharesInput
 *   PortfolioId: "STRING_VALUE", // required
 *   Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ORGANIZATION_MEMBER_ACCOUNT", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribePortfolioSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePortfolioSharesOutput
 * //   NextPageToken: "STRING_VALUE",
 * //   PortfolioShareDetails: [ // PortfolioShareDetails
 * //     { // PortfolioShareDetail
 * //       PrincipalId: "STRING_VALUE",
 * //       Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ORGANIZATION_MEMBER_ACCOUNT",
 * //       Accepted: true || false,
 * //       ShareTagOptions: true || false,
 * //       SharePrincipals: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePortfolioSharesCommandInput - {@link DescribePortfolioSharesCommandInput}
 * @returns {@link DescribePortfolioSharesCommandOutput}
 * @see {@link DescribePortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioSharesCommandOutput} for command's `response` shape.
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
export class DescribePortfolioSharesCommand extends $Command
  .classBuilder<
    DescribePortfolioSharesCommandInput,
    DescribePortfolioSharesCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribePortfolioShares", {})
  .n("ServiceCatalogClient", "DescribePortfolioSharesCommand")
  .sc(DescribePortfolioShares)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePortfolioSharesInput;
      output: DescribePortfolioSharesOutput;
    };
    sdk: {
      input: DescribePortfolioSharesCommandInput;
      output: DescribePortfolioSharesCommandOutput;
    };
  };
}
