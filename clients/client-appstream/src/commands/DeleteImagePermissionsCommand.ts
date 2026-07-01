// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImagePermissionsRequest, DeleteImagePermissionsResult } from "../models/models_0";
import { DeleteImagePermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteImagePermissionsCommand extends command<DeleteImagePermissionsCommandInput, DeleteImagePermissionsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImagePermissions",
  DeleteImagePermissions$
) {
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
