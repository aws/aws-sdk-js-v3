// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/models_0";
import { DeleteSubnetGroup$ } from "../schemas/schemas_0";

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
 * <p>Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteSubnetGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteSubnetGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteSubnetGroupRequest
 *   SubnetGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSubnetGroupResponse
 * //   SubnetGroup: { // SubnetGroup
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         Identifier: "STRING_VALUE",
 * //         AvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SupportedNetworkTypes: [ // NetworkTypeList
 * //           "ipv4" || "ipv6" || "dual_stack",
 * //         ],
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //     SupportedNetworkTypes: [
 * //       "ipv4" || "ipv6" || "dual_stack",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSubnetGroupCommandInput - {@link DeleteSubnetGroupCommandInput}
 * @returns {@link DeleteSubnetGroupCommandOutput}
 * @see {@link DeleteSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link SubnetGroupInUseFault} (client fault)
 *  <p>The subnet group is currently in use and cannot be deleted.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The specified subnet group does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DeleteSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteSubnetGroupCommandInput,
    DeleteSubnetGroupCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DeleteSubnetGroup", {})
  .n("MemoryDBClient", "DeleteSubnetGroupCommand")
  .sc(DeleteSubnetGroup$)
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
