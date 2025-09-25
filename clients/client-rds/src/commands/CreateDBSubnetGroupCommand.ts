// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBSubnetGroupMessage, CreateDBSubnetGroupResult } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBSubnetGroup } from "../schemas/schemas_15_Instance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandInput extends CreateDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBSubnetGroupCommand}.
 */
export interface CreateDBSubnetGroupCommandOutput extends CreateDBSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSubnetGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSubnetGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE", // required
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
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBSubnetGroupResult
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
 * @param CreateDBSubnetGroupCommandInput - {@link CreateDBSubnetGroupCommandInput}
 * @returns {@link CreateDBSubnetGroupCommandOutput}
 * @see {@link CreateDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupAlreadyExistsFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.</p>
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB subnet
 *             groups.</p>
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To create a DB subnet group
 * ```javascript
 * // The following example creates a DB subnet group called mysubnetgroup using existing subnets.
 * const input = {
 *   DBSubnetGroupDescription: "test DB subnet group",
 *   DBSubnetGroupName: "mysubnetgroup",
 *   SubnetIds: [
 *     "subnet-0a1dc4e1a6f123456",
 *     "subnet-070dd7ecb3aaaaaaa",
 *     "subnet-00f5b198bc0abcdef"
 *   ]
 * };
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSubnetGroup: {
 *     DBSubnetGroupArn: "arn:aws:rds:us-west-2:0123456789012:subgrp:mysubnetgroup",
 *     DBSubnetGroupDescription: "test DB subnet group",
 *     DBSubnetGroupName: "mysubnetgroup",
 *     SubnetGroupStatus: "Complete",
 *     Subnets: [
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
export class CreateDBSubnetGroupCommand extends $Command
  .classBuilder<
    CreateDBSubnetGroupCommandInput,
    CreateDBSubnetGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CreateDBSubnetGroup", {})
  .n("RDSClient", "CreateDBSubnetGroupCommand")
  .sc(CreateDBSubnetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBSubnetGroupMessage;
      output: CreateDBSubnetGroupResult;
    };
    sdk: {
      input: CreateDBSubnetGroupCommandInput;
      output: CreateDBSubnetGroupCommandOutput;
    };
  };
}
