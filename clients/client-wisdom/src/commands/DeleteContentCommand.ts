// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContentRequest, DeleteContentResponse } from "../models/models_0";
import { DeleteContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContentCommand}.
 */
export interface DeleteContentCommandInput extends DeleteContentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContentCommand}.
 */
export interface DeleteContentCommandOutput extends DeleteContentResponse, __MetadataBearer {}

/**
 * <p>Deletes the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteContentCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteContentCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // DeleteContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContentCommandInput - {@link DeleteContentCommandInput}
 * @returns {@link DeleteContentCommandOutput}
 * @see {@link DeleteContentCommandInput} for command's `input` shape.
 * @see {@link DeleteContentCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class DeleteContentCommand extends command<DeleteContentCommandInput, DeleteContentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContent",
  DeleteContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContentRequest;
      output: {};
    };
    sdk: {
      input: DeleteContentCommandInput;
      output: DeleteContentCommandOutput;
    };
  };
}
