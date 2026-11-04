// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDBParameterGroupMessage } from "../models/models_0";
import { DeleteDBParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDBParameterGroupCommand}.
 */
export interface DeleteDBParameterGroupCommandInput extends DeleteDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBParameterGroupCommand}.
 */
export interface DeleteDBParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBParameterGroupCommandInput - {@link DeleteDBParameterGroupCommandInput}
 * @returns {@link DeleteDBParameterGroupCommandOutput}
 * @see {@link DeleteDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * *DBParameterGroupName* does not refer to an existing DB parameter group.
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *
 * The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class DeleteDBParameterGroupCommand extends command<DeleteDBParameterGroupCommandInput, DeleteDBParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDBParameterGroup",
  DeleteDBParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBParameterGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteDBParameterGroupCommandInput;
      output: DeleteDBParameterGroupCommandOutput;
    };
  };
}
