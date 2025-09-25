// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLibraryItemInput, UpdateLibraryItemOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { UpdateLibraryItem } from "../schemas/schemas_1_LibraryItem";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLibraryItemCommand}.
 */
export interface UpdateLibraryItemCommandInput extends UpdateLibraryItemInput {}
/**
 * @public
 *
 * The output of {@link UpdateLibraryItemCommand}.
 */
export interface UpdateLibraryItemCommandOutput extends UpdateLibraryItemOutput, __MetadataBearer {}

/**
 * <p>Updates the library item for an Amazon Q App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, UpdateLibraryItemCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, UpdateLibraryItemCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // UpdateLibraryItemInput
 *   instanceId: "STRING_VALUE", // required
 *   libraryItemId: "STRING_VALUE", // required
 *   status: "PUBLISHED" || "DISABLED",
 *   categories: [ // CategoryIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateLibraryItemCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLibraryItemOutput
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
 * @param UpdateLibraryItemCommandInput - {@link UpdateLibraryItemCommandInput}
 * @returns {@link UpdateLibraryItemCommandOutput}
 * @see {@link UpdateLibraryItemCommandInput} for command's `input` shape.
 * @see {@link UpdateLibraryItemCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation could not be completed due to a conflict with the current state of the resource.</p>
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
 * @example Sets the status of a library item to DISABLED
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316",
 *   status: "DISABLED"
 * };
 * const command = new UpdateLibraryItemCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appId: "7a11f34b-42d4-4bc8-b668-ae4a788dae1e",
 *   appVersion: 6,
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
 *   createdAt: "2024-05-21T23:17:27.350Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   isVerified: false,
 *   libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316",
 *   ratingCount: 24,
 *   status: "DISABLED",
 *   updatedAt: "2024-05-28T19:43:48.577Z",
 *   updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLibraryItemCommand extends $Command
  .classBuilder<
    UpdateLibraryItemCommandInput,
    UpdateLibraryItemCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "UpdateLibraryItem", {})
  .n("QAppsClient", "UpdateLibraryItemCommand")
  .sc(UpdateLibraryItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLibraryItemInput;
      output: UpdateLibraryItemOutput;
    };
    sdk: {
      input: UpdateLibraryItemCommandInput;
      output: UpdateLibraryItemCommandOutput;
    };
  };
}
