// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDBSubnetGroupMessage } from "../models/models_0";
import { DeleteDBSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandInput extends DeleteDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a DB subnet group.
 *
 * > **Note:** The specified database subnet group must not be associated with any DB instances.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBSubnetGroupCommandInput - {@link DeleteDBSubnetGroupCommandInput}
 * @returns {@link DeleteDBSubnetGroupCommandOutput}
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * *DBSubnetGroupName* does not refer to an existing DB subnet group.
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *
 * The DB subnet group cannot be deleted because it is in use.
 *
 * @throws {@link InvalidDBSubnetStateFault} (client fault)
 *
 * The DB subnet is not in the *available* state.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class DeleteDBSubnetGroupCommand extends command<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDBSubnetGroup",
  DeleteDBSubnetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBSubnetGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteDBSubnetGroupCommandInput;
      output: DeleteDBSubnetGroupCommandOutput;
    };
  };
}
