// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOrganizationPortfolioAccessInput, ListOrganizationPortfolioAccessOutput } from "../models/models_0";
import {
  de_ListOrganizationPortfolioAccessCommand,
  se_ListOrganizationPortfolioAccessCommand,
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
 * The input for {@link ListOrganizationPortfolioAccessCommand}.
 */
export interface ListOrganizationPortfolioAccessCommandInput extends ListOrganizationPortfolioAccessInput {}
/**
 * @public
 *
 * The output of {@link ListOrganizationPortfolioAccessCommand}.
 */
export interface ListOrganizationPortfolioAccessCommandOutput
  extends ListOrganizationPortfolioAccessOutput,
    __MetadataBearer {}

/**
 * <p>Lists the organization nodes that have access to the specified portfolio. This API can
 *          only be called by the management account in the organization or by a delegated
 *          admin.</p>
 *          <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListOrganizationPortfolioAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListOrganizationPortfolioAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListOrganizationPortfolioAccessInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   OrganizationNodeType: "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ACCOUNT", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListOrganizationPortfolioAccessCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationPortfolioAccessOutput
 * //   OrganizationNodes: [ // OrganizationNodes
 * //     { // OrganizationNode
 * //       Type: "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ACCOUNT",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationPortfolioAccessCommandInput - {@link ListOrganizationPortfolioAccessCommandInput}
 * @returns {@link ListOrganizationPortfolioAccessCommandOutput}
 * @see {@link ListOrganizationPortfolioAccessCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationPortfolioAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class ListOrganizationPortfolioAccessCommand extends $Command
  .classBuilder<
    ListOrganizationPortfolioAccessCommandInput,
    ListOrganizationPortfolioAccessCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListOrganizationPortfolioAccess", {})
  .n("ServiceCatalogClient", "ListOrganizationPortfolioAccessCommand")
  .f(void 0, void 0)
  .ser(se_ListOrganizationPortfolioAccessCommand)
  .de(de_ListOrganizationPortfolioAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationPortfolioAccessInput;
      output: ListOrganizationPortfolioAccessOutput;
    };
    sdk: {
      input: ListOrganizationPortfolioAccessCommandInput;
      output: ListOrganizationPortfolioAccessCommandOutput;
    };
  };
}
