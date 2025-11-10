// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLibraryItemMetadataInput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { UpdateLibraryItemMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLibraryItemMetadataCommand}.
 */
export interface UpdateLibraryItemMetadataCommandInput extends UpdateLibraryItemMetadataInput {}
/**
 * @public
 *
 * The output of {@link UpdateLibraryItemMetadataCommand}.
 */
export interface UpdateLibraryItemMetadataCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the verification status of a library item for an Amazon Q App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, UpdateLibraryItemMetadataCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, UpdateLibraryItemMetadataCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // UpdateLibraryItemMetadataInput
 *   instanceId: "STRING_VALUE", // required
 *   libraryItemId: "STRING_VALUE", // required
 *   isVerified: true || false,
 * };
 * const command = new UpdateLibraryItemMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLibraryItemMetadataCommandInput - {@link UpdateLibraryItemMetadataCommandInput}
 * @returns {@link UpdateLibraryItemMetadataCommandOutput}
 * @see {@link UpdateLibraryItemMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateLibraryItemMetadataCommandOutput} for command's `response` shape.
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
 * @example Update a library item to be verified
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   isVerified: true,
 *   libraryItemId: "cb9ecf72-8563-450d-9db9-994f98297316"
 * };
 * const command = new UpdateLibraryItemMetadataCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLibraryItemMetadataCommand extends $Command
  .classBuilder<
    UpdateLibraryItemMetadataCommandInput,
    UpdateLibraryItemMetadataCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "UpdateLibraryItemMetadata", {})
  .n("QAppsClient", "UpdateLibraryItemMetadataCommand")
  .sc(UpdateLibraryItemMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLibraryItemMetadataInput;
      output: {};
    };
    sdk: {
      input: UpdateLibraryItemMetadataCommandInput;
      output: UpdateLibraryItemMetadataCommandOutput;
    };
  };
}
