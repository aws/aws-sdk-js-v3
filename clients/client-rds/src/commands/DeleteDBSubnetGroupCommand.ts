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
 * import { RDSClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *
 * `DBSubnetGroupName` doesn't refer to an existing DB subnet group.
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *
 * The DB subnet group cannot be deleted because it's in use.
 *
 * @throws {@link InvalidDBSubnetStateFault} (client fault)
 *
 * The DB subnet isn't in the *available* state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To delete a DB subnet group
 * ```javascript
 * // The following example deletes the DB subnet group called mysubnetgroup.
 * const input = {
 *   DBSubnetGroupName: "mysubnetgroup"
 * };
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
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
