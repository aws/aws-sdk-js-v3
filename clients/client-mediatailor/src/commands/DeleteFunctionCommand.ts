// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFunctionRequest, DeleteFunctionResponse } from "../models/models_0";
import { DeleteFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFunctionCommand}.
 */
export interface DeleteFunctionCommandInput extends DeleteFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFunctionCommand}.
 */
export interface DeleteFunctionCommandOutput extends DeleteFunctionResponse, __MetadataBearer {}

/**
 * <p>Deletes a function. MediaTailor prevents deletion of a function that is still referenced by a playback configuration or by another function. Remove all references before deleting. For more information about functions, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html">Working with functions</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteFunctionCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteFunctionCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * // import type { MediaTailorClientConfig } from "@aws-sdk/client-mediatailor";
 * const config = {}; // type is MediaTailorClientConfig
 * const client = new MediaTailorClient(config);
 * const input = { // DeleteFunctionRequest
 *   FunctionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFunctionCommandInput - {@link DeleteFunctionCommandInput}
 * @returns {@link DeleteFunctionCommandOutput}
 * @see {@link DeleteFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteFunctionCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 *
 * @public
 */
export class DeleteFunctionCommand extends command<DeleteFunctionCommandInput, DeleteFunctionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFunction",
  DeleteFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFunctionRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionCommandInput;
      output: DeleteFunctionCommandOutput;
    };
  };
}
