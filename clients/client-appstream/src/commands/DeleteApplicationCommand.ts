// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationRequest, DeleteApplicationResult } from "../models/models_0";
import { DeleteApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandInput extends DeleteApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationCommand}.
 */
export interface DeleteApplicationCommandOutput extends DeleteApplicationResult, __MetadataBearer {}

/**
 * <p>Deletes an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteApplicationCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteApplicationCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteApplicationRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationCommandInput - {@link DeleteApplicationCommandInput}
 * @returns {@link DeleteApplicationCommandOutput}
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
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
export class DeleteApplicationCommand extends command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplication",
  DeleteApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationCommandInput;
      output: DeleteApplicationCommandOutput;
    };
  };
}
