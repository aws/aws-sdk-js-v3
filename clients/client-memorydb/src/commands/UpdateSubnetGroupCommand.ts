// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSubnetGroupRequest, UpdateSubnetGroupResponse } from "../models/models_0";
import { UpdateSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a subnet group. For more information, see [Updating a subnet group](https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html)
 *
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
 *
 * The specified subnet is not valid.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The required service-linked role was not found.
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *
 * The specified subnet group does not exist.
 *
 * @throws {@link SubnetInUse} (client fault)
 *
 * The subnet is currently in use and cannot be deleted.
 *
 * @throws {@link SubnetNotAllowedFault} (client fault)
 *
 * The specified subnet is not allowed for this operation.
 *
 * @throws {@link SubnetQuotaExceededFault} (client fault)
 *
 * The request cannot be processed because it would exceed the maximum number of subnets allowed.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
 *
 * @public
 */
export class UpdateSubnetGroupCommand extends command<UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSubnetGroup",
  UpdateSubnetGroup$
) {
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
