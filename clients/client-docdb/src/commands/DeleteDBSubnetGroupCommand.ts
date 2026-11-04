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
 * Deletes a subnet group.
 *
 * > **Note:** The specified database subnet group must not be associated with any DB instances.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * `DBSubnetGroupName` doesn't refer to an existing subnet group.
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *
 * The subnet group can't be deleted because it's in use.
 *
 * @throws {@link InvalidDBSubnetStateFault} (client fault)
 *
 * The subnet isn't in the *available* state.
 *
 * @throws {@link DocDBServiceException}
 *
 * Base exception class for all service exceptions from DocDB service.
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
