// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { UpdateSubnetGroupRequest, UpdateSubnetGroupResponse } from "../models/models_0";
import { UpdateSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSubnetGroupCommand}.
 */
export interface UpdateSubnetGroupCommandInput extends UpdateSubnetGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubnetGroupCommand}.
 */
export interface UpdateSubnetGroupCommandOutput extends UpdateSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateSubnetGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateSubnetGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateSubnetGroupRequest
 *   SubnetGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubnetGroupResponse
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
 * @param UpdateSubnetGroupCommandInput - {@link UpdateSubnetGroupCommandInput}
 * @returns {@link UpdateSubnetGroupCommandOutput}
 * @see {@link UpdateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The specified subnet is not valid.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The specified subnet group does not exist.</p>
 *
 * @throws {@link SubnetInUse} (client fault)
 *  <p>The subnet is currently in use and cannot be deleted.</p>
 *
 * @throws {@link SubnetNotAllowedFault} (client fault)
 *  <p>The specified subnet is not allowed for this operation.</p>
 *
 * @throws {@link SubnetQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of subnets allowed.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class UpdateSubnetGroupCommand extends $Command
  .classBuilder<
    UpdateSubnetGroupCommandInput,
    UpdateSubnetGroupCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "UpdateSubnetGroup", {})
  .n("MemoryDBClient", "UpdateSubnetGroupCommand")
  .sc(UpdateSubnetGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubnetGroupRequest;
      output: UpdateSubnetGroupResponse;
    };
    sdk: {
      input: UpdateSubnetGroupCommandInput;
      output: UpdateSubnetGroupCommandOutput;
    };
  };
}
