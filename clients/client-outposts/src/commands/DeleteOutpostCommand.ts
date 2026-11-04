// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOutpostInput, DeleteOutpostOutput } from "../models/models_0";
import { DeleteOutpost$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOutpostCommand}.
 */
export interface DeleteOutpostCommandInput extends DeleteOutpostInput {}
/**
 * @public
 *
 * The output of {@link DeleteOutpostCommand}.
 */
export interface DeleteOutpostCommandOutput extends DeleteOutpostOutput, __MetadataBearer {}

/**
 * Deletes the specified Outpost.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // DeleteOutpostInput
 *   OutpostId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutpostCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOutpostCommandInput - {@link DeleteOutpostCommandInput}
 * @returns {@link DeleteOutpostCommandOutput}
 * @see {@link DeleteOutpostCommandInput} for command's `input` shape.
 * @see {@link DeleteOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class DeleteOutpostCommand extends command<DeleteOutpostCommandInput, DeleteOutpostCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOutpost",
  DeleteOutpost$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOutpostInput;
      output: {};
    };
    sdk: {
      input: DeleteOutpostCommandInput;
      output: DeleteOutpostCommandOutput;
    };
  };
}
