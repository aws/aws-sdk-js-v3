// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDirectoryConfigRequest, DeleteDirectoryConfigResult } from "../models/models_0";
import { DeleteDirectoryConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDirectoryConfigCommand}.
 */
export interface DeleteDirectoryConfigCommandInput extends DeleteDirectoryConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectoryConfigCommand}.
 */
export interface DeleteDirectoryConfigCommandOutput extends DeleteDirectoryConfigResult, __MetadataBearer {}

/**
 * Deletes the specified Directory Config object from WorkSpaces Applications. This object includes the information required to join streaming instances to an Active Directory domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteDirectoryConfigRequest
 *   DirectoryName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDirectoryConfigCommandInput - {@link DeleteDirectoryConfigCommandInput}
 * @returns {@link DeleteDirectoryConfigCommandOutput}
 * @see {@link DeleteDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class DeleteDirectoryConfigCommand extends command<DeleteDirectoryConfigCommandInput, DeleteDirectoryConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDirectoryConfig",
  DeleteDirectoryConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDirectoryConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteDirectoryConfigCommandInput;
      output: DeleteDirectoryConfigCommandOutput;
    };
  };
}
