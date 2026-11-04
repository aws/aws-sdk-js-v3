// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteThemeForStackRequest, DeleteThemeForStackResult } from "../models/models_0";
import { DeleteThemeForStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteThemeForStackCommand}.
 */
export interface DeleteThemeForStackCommandInput extends DeleteThemeForStackRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThemeForStackCommand}.
 */
export interface DeleteThemeForStackCommandOutput extends DeleteThemeForStackResult, __MetadataBearer {}

/**
 * Deletes custom branding that customizes the appearance of the streaming application catalog page.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteThemeForStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteThemeForStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteThemeForStackRequest
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new DeleteThemeForStackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThemeForStackCommandInput - {@link DeleteThemeForStackCommandInput}
 * @returns {@link DeleteThemeForStackCommandOutput}
 * @see {@link DeleteThemeForStackCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeForStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
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
export class DeleteThemeForStackCommand extends command<DeleteThemeForStackCommandInput, DeleteThemeForStackCommandOutput>(
  _ep0,
  _mw0,
  "DeleteThemeForStack",
  DeleteThemeForStack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThemeForStackRequest;
      output: {};
    };
    sdk: {
      input: DeleteThemeForStackCommandInput;
      output: DeleteThemeForStackCommandOutput;
    };
  };
}
