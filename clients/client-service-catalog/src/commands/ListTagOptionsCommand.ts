// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagOptionsInput, ListTagOptionsOutput } from "../models/models_0";
import { de_ListTagOptionsCommand, se_ListTagOptionsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagOptionsCommand}.
 */
export interface ListTagOptionsCommandInput extends ListTagOptionsInput {}
/**
 * @public
 *
 * The output of {@link ListTagOptionsCommand}.
 */
export interface ListTagOptionsCommandOutput extends ListTagOptionsOutput, __MetadataBearer {}

/**
 * <p>Lists the specified TagOptions or all TagOptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListTagOptionsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListTagOptionsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListTagOptionsInput
 *   Filters: { // ListTagOptionsFilters
 *     Key: "STRING_VALUE",
 *     Value: "STRING_VALUE",
 *     Active: true || false,
 *   },
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListTagOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTagOptionsOutput
 * //   TagOptionDetails: [ // TagOptionDetails
 * //     { // TagOptionDetail
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Active: true || false,
 * //       Id: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTagOptionsCommandInput - {@link ListTagOptionsCommandInput}
 * @returns {@link ListTagOptionsCommandOutput}
 * @see {@link ListTagOptionsCommandInput} for command's `input` shape.
 * @see {@link ListTagOptionsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
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
export class ListTagOptionsCommand extends $Command
  .classBuilder<
    ListTagOptionsCommandInput,
    ListTagOptionsCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListTagOptions", {})
  .n("ServiceCatalogClient", "ListTagOptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTagOptionsCommand)
  .de(de_ListTagOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagOptionsInput;
      output: ListTagOptionsOutput;
    };
    sdk: {
      input: ListTagOptionsCommandInput;
      output: ListTagOptionsCommandOutput;
    };
  };
}
