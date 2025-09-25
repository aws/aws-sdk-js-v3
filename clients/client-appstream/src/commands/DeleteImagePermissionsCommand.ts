// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImagePermissionsRequest, DeleteImagePermissionsResult } from "../models/models_0";
import { DeleteImagePermissions } from "../schemas/schemas_24_ImagePermissions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImagePermissionsCommand}.
 */
export interface DeleteImagePermissionsCommandInput extends DeleteImagePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImagePermissionsCommand}.
 */
export interface DeleteImagePermissionsCommandOutput extends DeleteImagePermissionsResult, __MetadataBearer {}

/**
 * <p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteImagePermissionsRequest
 *   Name: "STRING_VALUE", // required
 *   SharedAccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteImagePermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteImagePermissionsCommandInput - {@link DeleteImagePermissionsCommandInput}
 * @returns {@link DeleteImagePermissionsCommandOutput}
 * @see {@link DeleteImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DeleteImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DeleteImagePermissionsCommand extends $Command
  .classBuilder<
    DeleteImagePermissionsCommandInput,
    DeleteImagePermissionsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DeleteImagePermissions", {})
  .n("AppStreamClient", "DeleteImagePermissionsCommand")
  .sc(DeleteImagePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImagePermissionsRequest;
      output: {};
    };
    sdk: {
      input: DeleteImagePermissionsCommandInput;
      output: DeleteImagePermissionsCommandOutput;
    };
  };
}
