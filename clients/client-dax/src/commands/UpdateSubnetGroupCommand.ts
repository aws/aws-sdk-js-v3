// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSubnetGroupRequest, UpdateSubnetGroupResponse } from "../models/models_0";
import { UpdateSubnetGroup } from "../schemas/schemas_0";

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
 * <p>Modifies an existing subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
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
 * //     SubnetGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: "STRING_VALUE",
 * //         SupportedNetworkTypes: [ // NetworkTypeList
 * //           "ipv4" || "ipv6" || "dual_stack",
 * //         ],
 * //       },
 * //     ],
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
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>An invalid subnet identifier was specified.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link SubnetGroupNotFoundFault} (client fault)
 *  <p>The requested subnet group name does not refer to an existing subnet
 *             group.</p>
 *
 * @throws {@link SubnetInUse} (client fault)
 *  <p>The requested subnet is being used by another subnet group.</p>
 *
 * @throws {@link SubnetNotAllowedFault} (client fault)
 *  <p>The specified subnet can't be used for the requested network type. This error
 *             occurs when either there aren't enough subnets of the required network type to create
 *             the cluster, or when you try to use a subnet that doesn't support the requested network
 *             type (for example, trying to create a dual-stack cluster with a subnet that doesn't have
 *             IPv6 CIDR). </p>
 *
 * @throws {@link SubnetQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the allowed number of
 *             subnets in a subnet group.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class UpdateSubnetGroupCommand extends $Command
  .classBuilder<
    UpdateSubnetGroupCommandInput,
    UpdateSubnetGroupCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "UpdateSubnetGroup", {})
  .n("DAXClient", "UpdateSubnetGroupCommand")
  .sc(UpdateSubnetGroup)
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
