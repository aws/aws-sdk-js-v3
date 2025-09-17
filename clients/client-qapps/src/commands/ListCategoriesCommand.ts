// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCategoriesInput, ListCategoriesOutput } from "../models/models_0";
import { de_ListCategoriesCommand, se_ListCategoriesCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCategoriesCommand}.
 */
export interface ListCategoriesCommandInput extends ListCategoriesInput {}
/**
 * @public
 *
 * The output of {@link ListCategoriesCommand}.
 */
export interface ListCategoriesCommandOutput extends ListCategoriesOutput, __MetadataBearer {}

/**
 * <p>Lists the categories of a Amazon Q Business application environment instance. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/qapps-custom-labels.html">Custom labels for Amazon Q Apps</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ListCategoriesCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ListCategoriesCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // ListCategoriesInput
 *   instanceId: "STRING_VALUE", // required
 * };
 * const command = new ListCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListCategoriesOutput
 * //   categories: [ // CategoriesList
 * //     { // Category
 * //       id: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       color: "STRING_VALUE",
 * //       appCount: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCategoriesCommandInput - {@link ListCategoriesCommandInput}
 * @returns {@link ListCategoriesCommandOutput}
 * @see {@link ListCategoriesCommandInput} for command's `input` shape.
 * @see {@link ListCategoriesCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example List categories available for the library items in this instance
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new ListCategoriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   categories: [
 *     {
 *       appCount: 10,
 *       color: "#FF6600",
 *       id: "549abfe0-f5c4-45a2-bb9b-c05987a49c6d",
 *       title: "HR"
 *     },
 *     {
 *       appCount: 11,
 *       color: "#FFFF00",
 *       id: "18cbebaa-196a-4aa5-a840-88d548e07f8f",
 *       title: "Marketing"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCategoriesCommand extends $Command
  .classBuilder<
    ListCategoriesCommandInput,
    ListCategoriesCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "ListCategories", {})
  .n("QAppsClient", "ListCategoriesCommand")
  .f(void 0, void 0)
  .ser(se_ListCategoriesCommand)
  .de(de_ListCategoriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCategoriesInput;
      output: ListCategoriesOutput;
    };
    sdk: {
      input: ListCategoriesCommandInput;
      output: ListCategoriesCommandOutput;
    };
  };
}
