// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/models_0";
import { DeleteSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSubnetGroupCommand}.
 */
export interface DeleteSubnetGroupCommandInput extends DeleteSubnetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubnetGroupCommand}.
 */
export interface DeleteSubnetGroupCommandOutput extends DeleteSubnetGroupResponse, __MetadataBearer {}

/**
 * Deletes a subnet group.
 *
 * > **Note:** You cannot delete a subnet group if it is associated with any DAX clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DeleteSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DeleteSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // DeleteSubnetGroupRequest
 *   SubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSubnetGroupResponse
 * //   DeletionMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSubnetGroupCommandInput - {@link DeleteSubnetGroupCommandInput}
 * @returns {@link DeleteSubnetGroupCommandOutput}
 * @see {@link DeleteSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link SubnetGroupInUseFault} (client fault)
 *
 * The specified subnet group is currently in use.
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *
 * The requested subnet group name does not refer to an existing subnet group.
 *
 * @throws {@link DAXServiceException}
 *
 * Base exception class for all service exceptions from DAX service.
 *
 * @public
 */
export class DeleteSubnetGroupCommand extends command<DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSubnetGroup",
  DeleteSubnetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSubnetGroupRequest;
      output: DeleteSubnetGroupResponse;
    };
    sdk: {
      input: DeleteSubnetGroupCommandInput;
      output: DeleteSubnetGroupCommandOutput;
    };
  };
}
