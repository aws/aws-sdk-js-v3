// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBSubnetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandInput extends ModifyDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandOutput extends ModifyDBSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSubnetGroupResult
 * //   DBSubnetGroup: { // DBSubnetGroup
 * //     DBSubnetGroupName: "STRING_VALUE",
 * //     DBSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetOutpost: { // Outpost
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSubnetGroupArn: "STRING_VALUE",
 * //     SupportedNetworkTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBSubnetGroupCommandInput - {@link ModifyDBSubnetGroupCommandInput}
 * @returns {@link ModifyDBSubnetGroupCommandOutput}
 * @see {@link ModifyDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The DB subnet group cannot be deleted because it's in use.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>The DB subnet is already in use in the Availability Zone.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify a DB subnet group
 * ```javascript
 * // The following example adds a subnet with the ID subnet-08e41f9e230222222 to the DB subnet group named mysubnetgroup. To keep the existing subnets in the subnet group, include their IDs as values in the --subnet-ids option. Make sure to have subnets with at least two different Availability Zones in the DB subnet group.
 * const input = {
 *   DBSubnetGroupDescription: "",
 *   DBSubnetGroupName: "mysubnetgroup",
 *   SubnetIds: [
 *     "subnet-0a1dc4e1a6f123456",
 *     "subnet-070dd7ecb3aaaaaaa",
 *     "subnet-00f5b198bc0abcdef",
 *     "subnet-08e41f9e230222222"
 *   ]
 * };
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSubnetGroup: {
 *     DBSubnetGroupArn: "arn:aws:rds:us-west-2:123456789012:subgrp:mysubnetgroup",
 *     DBSubnetGroupDescription: "test DB subnet group",
 *     DBSubnetGroupName: "mysubnetgroup",
 *     SubnetGroupStatus: "Complete",
 *     Subnets: [
 *       {
 *         SubnetAvailabilityZone: {
 *           Name: "us-west-2a"
 *         },
 *         SubnetIdentifier: "subnet-08e41f9e230222222",
 *         SubnetStatus: "Active"
 *       },
 *       {
 *         SubnetAvailabilityZone: {
 *           Name: "us-west-2b"
 *         },
 *         SubnetIdentifier: "subnet-070dd7ecb3aaaaaaa",
 *         SubnetStatus: "Active"
 *       },
 *       {
 *         SubnetAvailabilityZone: {
 *           Name: "us-west-2d"
 *         },
 *         SubnetIdentifier: "subnet-00f5b198bc0abcdef",
 *         SubnetStatus: "Active"
 *       },
 *       {
 *         SubnetAvailabilityZone: {
 *           Name: "us-west-2b"
 *         },
 *         SubnetIdentifier: "subnet-0a1dc4e1a6f123456",
 *         SubnetStatus: "Active"
 *       }
 *     ],
 *     VpcId: "vpc-0f08e7610a1b2c3d4"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBSubnetGroupCommand extends $Command
  .classBuilder<
    ModifyDBSubnetGroupCommandInput,
    ModifyDBSubnetGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyDBSubnetGroup", {})
  .n("RDSClient", "ModifyDBSubnetGroupCommand")
  .sc(ModifyDBSubnetGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBSubnetGroupMessage;
      output: ModifyDBSubnetGroupResult;
    };
    sdk: {
      input: ModifyDBSubnetGroupCommandInput;
      output: ModifyDBSubnetGroupCommandOutput;
    };
  };
}
