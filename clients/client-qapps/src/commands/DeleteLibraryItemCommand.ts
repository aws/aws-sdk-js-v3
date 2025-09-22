// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLibraryItemInput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { DeleteLibraryItem } from "../schemas/schemas_15_DeleteLibraryItem";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLibraryItemCommand}.
 */
export interface DeleteLibraryItemCommandInput extends DeleteLibraryItemInput {}
/**
 * @public
 *
 * The output of {@link DeleteLibraryItemCommand}.
 */
export interface DeleteLibraryItemCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, DeleteLibraryItemCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, DeleteLibraryItemCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // DeleteLibraryItemInput
 *   instanceId: "STRING_VALUE", // required
 *   libraryItemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLibraryItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLibraryItemCommandInput - {@link DeleteLibraryItemCommandInput}
 * @returns {@link DeleteLibraryItemCommandOutput}
 * @see {@link DeleteLibraryItemCommandInput} for command's `input` shape.
 * @see {@link DeleteLibraryItemCommandOutput} for command's `response` shape.
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
 * @example Delete a library item
 * ```javascript
 * //
 * const input = {
 *   instanceId: "3642ba81-344c-42fd-a480-9119a5a5f26b",
 *   libraryItemId: "72088fd4-78b6-43da-bfb8-8621323c3cfb"
 * };
 * const command = new DeleteLibraryItemCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLibraryItemCommand extends $Command
  .classBuilder<
    DeleteLibraryItemCommandInput,
    DeleteLibraryItemCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "DeleteLibraryItem", {})
  .n("QAppsClient", "DeleteLibraryItemCommand")
  .sc(DeleteLibraryItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLibraryItemInput;
      output: {};
    };
    sdk: {
      input: DeleteLibraryItemCommandInput;
      output: DeleteLibraryItemCommandOutput;
    };
  };
}
