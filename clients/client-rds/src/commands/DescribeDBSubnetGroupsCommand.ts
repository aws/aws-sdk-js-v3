// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBSubnetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSubnetGroupsCommand}.
 */
export interface DescribeDBSubnetGroupsCommandInput extends DescribeDBSubnetGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSubnetGroupsCommand}.
 */
export interface DescribeDBSubnetGroupsCommandOutput extends DBSubnetGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p>
 *          <p>For an overview of CIDR ranges, go to the
 *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSubnetGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSubnetGroupsMessage
 *   DBSubnetGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBSubnetGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSubnetGroups: [ // DBSubnetGroups
 * //     { // DBSubnetGroup
 * //       DBSubnetGroupName: "STRING_VALUE",
 * //       DBSubnetGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetGroupStatus: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubnetOutpost: { // Outpost
 * //             Arn: "STRING_VALUE",
 * //           },
 * //           SubnetStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSubnetGroupArn: "STRING_VALUE",
 * //       SupportedNetworkTypes: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSubnetGroupsCommandInput - {@link DescribeDBSubnetGroupsCommandInput}
 * @returns {@link DescribeDBSubnetGroupsCommandOutput}
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe a DB subnet group
 * ```javascript
 * // The following example retrieves the details of the specified DB subnet group.
 * const input = { /* empty *\/ };
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSubnetGroups: [
 *     {
 *       DBSubnetGroupArn: "arn:aws:rds:us-east-1:123456789012:subgrp:mydbsubnetgroup",
 *       DBSubnetGroupDescription: "My DB Subnet Group",
 *       DBSubnetGroupName: "mydbsubnetgroup",
 *       SubnetGroupStatus: "Complete",
 *       Subnets: [
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1a"
 *           },
 *           SubnetIdentifier: "subnet-d8c8e7f4",
 *           SubnetStatus: "Active"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1f"
 *           },
 *           SubnetIdentifier: "subnet-718fdc7d",
 *           SubnetStatus: "Active"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1a"
 *           },
 *           SubnetIdentifier: "subnet-cbc8e7e7",
 *           SubnetStatus: "Active"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1a"
 *           },
 *           SubnetIdentifier: "subnet-0ccde220",
 *           SubnetStatus: "Active"
 *         }
 *       ],
 *       VpcId: "vpc-971c12ee"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBSubnetGroupsCommand extends $Command
  .classBuilder<
    DescribeDBSubnetGroupsCommandInput,
    DescribeDBSubnetGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBSubnetGroups", {})
  .n("RDSClient", "DescribeDBSubnetGroupsCommand")
  .sc(DescribeDBSubnetGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBSubnetGroupsMessage;
      output: DBSubnetGroupMessage;
    };
    sdk: {
      input: DescribeDBSubnetGroupsCommandInput;
      output: DescribeDBSubnetGroupsCommandOutput;
    };
  };
}
