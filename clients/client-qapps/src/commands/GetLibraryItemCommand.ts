// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLibraryItemInput, GetLibraryItemOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { GetLibraryItem } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLibraryItemCommand}.
 */
export interface GetLibraryItemCommandInput extends GetLibraryItemInput {}
/**
 * @public
 *
 * The output of {@link GetLibraryItemCommand}.
 */
export interface GetLibraryItemCommandOutput extends GetLibraryItemOutput, __MetadataBearer {}

/**
 * <p>Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, GetLibraryItemCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, GetLibraryItemCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // GetLibraryItemInput
 *   instanceId: "STRING_VALUE", // required
 *   libraryItemId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE",
 * };
 * const command = new GetLibraryItemCommand(input);
 * const response = await client.send(command);
 * // { // GetLibraryItemOutput
 * //   libraryItemId: "STRING_VALUE", // required
 * //   appId: "STRING_VALUE", // required
 * //   appVersion: Number("int"), // required
 * //   categories: [ // CategoryList // required
 * //     { // Category
 * //       id: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       color: "STRING_VALUE",
 * //       appCount: Number("int"),
 * //     },
 * //   ],
 * //   status: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   ratingCount: Number("int"), // required
 * //   isRatedByUser: true || false,
 * //   userCount: Number("int"),
 * //   isVerified: true || false,
 * // };
 *
 * ```
 *
 * @param GetLibraryItemCommandInput - {@link GetLibraryItemCommandInput}
 * @returns {@link GetLibraryItemCommandOutput}
 * @see {@link GetLibraryItemCommandInput} for command's `input` shape.
 * @see {@link GetLibraryItemCommandOutput} for command's `response` shape.
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
 * @example Retrieve a library item
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   libraryItemId: "18cbebaa-196a-4aa5-a840-88d548e07f8f"
 * };
 * const command = new GetLibraryItemCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   appVersion: 1,
 *   categories: [
 *     {
 *       id: "9c871ed4-1c41-4065-aefe-321cd4b61cf8",
 *       title: "HR"
 *     },
 *     {
 *       id: "fdc4b483-c4e2-44c9-b4b2-6c850bbdb579",
 *       title: "General"
 *     },
 *     {
 *       id: "c1c4e374-118c-446f-81fb-cba6225d88da",
 *       title: "IT"
 *     }
 *   ],
 *   createdAt: "2024-05-08T16:09:56.080Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   isRatedByUser: false,
 *   isVerified: false,
 *   libraryItemId: "18cbebaa-196a-4aa5-a840-88d548e07f8f",
 *   ratingCount: 0,
 *   status: "PUBLISHED",
 *   updatedAt: "2024-05-08T16:09:56.080Z",
 *   updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   userCount: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetLibraryItemCommand extends $Command
  .classBuilder<
    GetLibraryItemCommandInput,
    GetLibraryItemCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "GetLibraryItem", {})
  .n("QAppsClient", "GetLibraryItemCommand")
  .sc(GetLibraryItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLibraryItemInput;
      output: GetLibraryItemOutput;
    };
    sdk: {
      input: GetLibraryItemCommandInput;
      output: GetLibraryItemCommandOutput;
    };
  };
}
