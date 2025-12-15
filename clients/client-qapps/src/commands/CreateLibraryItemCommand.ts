// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLibraryItemInput, CreateLibraryItemOutput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { CreateLibraryItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLibraryItemCommand}.
 */
export interface CreateLibraryItemCommandInput extends CreateLibraryItemInput {}
/**
 * @public
 *
 * The output of {@link CreateLibraryItemCommand}.
 */
export interface CreateLibraryItemCommandOutput extends CreateLibraryItemOutput, __MetadataBearer {}

/**
 * <p>Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, CreateLibraryItemCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, CreateLibraryItemCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // CreateLibraryItemInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   appVersion: Number("int"), // required
 *   categories: [ // CategoryIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateLibraryItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateLibraryItemOutput
 * //   libraryItemId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   ratingCount: Number("int"), // required
 * //   isVerified: true || false,
 * // };
 *
 * ```
 *
 * @param CreateLibraryItemCommandInput - {@link CreateLibraryItemCommandInput}
 * @returns {@link CreateLibraryItemCommandOutput}
 * @see {@link CreateLibraryItemCommandInput} for command's `input` shape.
 * @see {@link CreateLibraryItemCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
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
 * @example Create a Library Item
 * ```javascript
 * //
 * const input = {
 *   appId: "7a11f34b-42d4-4bc8-b668-ae4a788dae1e",
 *   appVersion: 6,
 *   categories: [
 *     "9c871ed4-1c41-4065-aefe-321cd4b61cf8"
 *   ],
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f"
 * };
 * const command = new CreateLibraryItemCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdAt: "2024-05-21T23:17:27.350Z",
 *   createdBy: "a841e300-40c1-7062-fa34-5b46dadbbaac",
 *   isVerified: false,
 *   libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316",
 *   ratingCount: 0,
 *   status: "PUBLISHED",
 *   updatedAt: "2024-05-21T23:17:27.350Z",
 *   updatedBy: "a841e300-40c1-7062-fa34-5b46dadbbaac"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLibraryItemCommand extends $Command
  .classBuilder<
    CreateLibraryItemCommandInput,
    CreateLibraryItemCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "CreateLibraryItem", {})
  .n("QAppsClient", "CreateLibraryItemCommand")
  .sc(CreateLibraryItem$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLibraryItemInput;
      output: CreateLibraryItemOutput;
    };
    sdk: {
      input: CreateLibraryItemCommandInput;
      output: CreateLibraryItemCommandOutput;
    };
  };
}
