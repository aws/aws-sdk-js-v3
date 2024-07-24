// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLibraryItemsInput, ListLibraryItemsOutput } from "../models/models_0";
import { de_ListLibraryItemsCommand, se_ListLibraryItemsCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLibraryItemsCommand}.
 */
export interface ListLibraryItemsCommandInput extends ListLibraryItemsInput {}
/**
 * @public
 *
 * The output of {@link ListLibraryItemsCommand}.
 */
export interface ListLibraryItemsCommandOutput extends ListLibraryItemsOutput, __MetadataBearer {}

/**
 * <p>Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ListLibraryItemsCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ListLibraryItemsCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * const client = new QAppsClient(config);
 * const input = { // ListLibraryItemsInput
 *   instanceId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   categoryId: "STRING_VALUE",
 * };
 * const command = new ListLibraryItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListLibraryItemsOutput
 * //   libraryItems: [ // LibraryItemList
 * //     { // LibraryItemMember
 * //       libraryItemId: "STRING_VALUE", // required
 * //       appId: "STRING_VALUE", // required
 * //       appVersion: Number("int"), // required
 * //       categories: [ // CategoryList // required
 * //         { // Category
 * //           id: "STRING_VALUE", // required
 * //           title: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       status: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       ratingCount: Number("int"), // required
 * //       isRatedByUser: true || false,
 * //       userCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLibraryItemsCommandInput - {@link ListLibraryItemsCommandInput}
 * @returns {@link ListLibraryItemsCommandOutput}
 * @see {@link ListLibraryItemsCommandInput} for command's `input` shape.
 * @see {@link ListLibraryItemsCommandOutput} for command's `response` shape.
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
 *  <p>The requested operation could not be completed because too many
 *       requests were sent at once. Wait a bit and try again later.</p>
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
 * @public
 */
export class ListLibraryItemsCommand extends $Command
  .classBuilder<
    ListLibraryItemsCommandInput,
    ListLibraryItemsCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "ListLibraryItems", {})
  .n("QAppsClient", "ListLibraryItemsCommand")
  .f(void 0, void 0)
  .ser(se_ListLibraryItemsCommand)
  .de(de_ListLibraryItemsCommand)
  .build() {}
