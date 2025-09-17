// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { CreateSubnetGroupRequest, CreateSubnetGroupResponse } from "../models/models_0";
import { de_CreateSubnetGroupCommand, se_CreateSubnetGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubnetGroupCommand}.
 */
export interface CreateSubnetGroupCommandInput extends CreateSubnetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubnetGroupCommand}.
 */
export interface CreateSubnetGroupCommandOutput extends CreateSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.
 *
 *          When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes.
 *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateSubnetGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateSubnetGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // CreateSubnetGroupRequest
 *   SubnetGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubnetGroupResponse
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
 * @param CreateSubnetGroupCommandInput - {@link CreateSubnetGroupCommandInput}
 * @returns {@link CreateSubnetGroupCommandOutput}
 * @see {@link CreateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetGroupAlreadyExistsFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetGroupQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetNotAllowedFault} (client fault)
 *  <p></p>
 *
 * @throws {@link SubnetQuotaExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class CreateSubnetGroupCommand extends $Command
  .classBuilder<
    CreateSubnetGroupCommandInput,
    CreateSubnetGroupCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "CreateSubnetGroup", {})
  .n("MemoryDBClient", "CreateSubnetGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubnetGroupCommand)
  .de(de_CreateSubnetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubnetGroupRequest;
      output: CreateSubnetGroupResponse;
    };
    sdk: {
      input: CreateSubnetGroupCommandInput;
      output: CreateSubnetGroupCommandOutput;
    };
  };
}
