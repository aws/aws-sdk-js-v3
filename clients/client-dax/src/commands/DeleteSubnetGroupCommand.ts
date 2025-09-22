// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/models_0";
import { DeleteSubnetGroup } from "../schemas/schemas_2_Subnet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a subnet group.</p>
 *          <note>
 *             <p>You cannot delete a subnet group if it is associated with any DAX
 *                 clusters.</p>
 *          </note>
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
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link SubnetGroupInUseFault} (client fault)
 *  <p>The specified subnet group is currently in use.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class DeleteSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteSubnetGroupCommandInput,
    DeleteSubnetGroupCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "DeleteSubnetGroup", {})
  .n("DAXClient", "DeleteSubnetGroupCommand")
  .sc(DeleteSubnetGroup)
  .build() {
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
