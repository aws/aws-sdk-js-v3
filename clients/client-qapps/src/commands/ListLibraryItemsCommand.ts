// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLibraryItemsInput, ListLibraryItemsOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { ListLibraryItems } from "../schemas/schemas_3_App";

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
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
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
 * //           color: "STRING_VALUE",
 * //           appCount: Number("int"),
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
 * //       isVerified: true || false,
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
 * @example List at most 3 library items for this instance
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   limit: 3
 * };
 * const command = new ListLibraryItemsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   libraryItems: [
 *     {
 *       appId: "7a11f34b-42d4-4bc8-b668-ae4a788dae1e",
 *       appVersion: 6,
 *       categories: [
 *         {
 *           id: "9c871ed4-1c41-4065-aefe-321cd4b61cf8",
 *           title: "HR"
 *         },
 *         {
 *           id: "c1c4e374-118c-446f-81fb-cba6225d88da",
 *           title: "IT"
 *         }
 *       ],
 *       createdAt: "2024-05-21T23:17:27.350Z",
 *       createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *       isRatedByUser: true,
 *       isVerified: false,
 *       libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316",
 *       ratingCount: 3,
 *       status: "PUBLISHED",
 *       updatedAt: "2024-05-21T23:17:27.350Z",
 *       updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *       userCount: 5
 *     },
 *     {
 *       appId: "201272ac-d474-4a97-991c-5520dae04026",
 *       appVersion: 1,
 *       categories: [
 *         {
 *           id: "fdc4b483-c4e2-44c9-b4b2-6c850bbdb579",
 *           title: "General"
 *         }
 *       ],
 *       createdAt: "2024-05-08T16:09:56.080Z",
 *       createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *       isRatedByUser: false,
 *       isVerified: false,
 *       libraryItemId: "18cbebaa-196a-4aa5-a840-88d548e07f8f",
 *       ratingCount: 5,
 *       status: "PUBLISHED",
 *       updatedAt: "2024-05-08T16:09:56.080Z",
 *       updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *       userCount: 8
 *     },
 *     {
 *       appId: "1802f57f-079a-4b5b-839a-79bbe2e21b3c",
 *       appVersion: 1,
 *       categories: [
 *         {
 *           id: "fdc4b483-c4e2-44c9-b4b2-6c850bbdb579",
 *           title: "General"
 *         }
 *       ],
 *       createdAt: "2024-05-07T22:57:59.327Z",
 *       createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *       isRatedByUser: false,
 *       isVerified: false,
 *       libraryItemId: "549abfe0-f5c4-45a2-bb9b-c05987a49c6d",
 *       ratingCount: 8,
 *       status: "PUBLISHED",
 *       updatedAt: "2024-05-07T22:57:59.327Z",
 *       updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *       userCount: 12
 *     }
 *   ],
 *   nextToken: "YW5vdGhlclRva2VuIQ=="
 * }
 * *\/
 * ```
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "ListLibraryItems", {})
  .n("QAppsClient", "ListLibraryItemsCommand")
  .sc(ListLibraryItems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLibraryItemsInput;
      output: ListLibraryItemsOutput;
    };
    sdk: {
      input: ListLibraryItemsCommandInput;
      output: ListLibraryItemsCommandOutput;
    };
  };
}
