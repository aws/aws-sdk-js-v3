// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReplicationSubnetGroupMessage, CreateReplicationSubnetGroupResponse } from "../models/models_0";
import {
  de_CreateReplicationSubnetGroupCommand,
  se_CreateReplicationSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationSubnetGroupCommand}.
 */
export interface CreateReplicationSubnetGroupCommandInput extends CreateReplicationSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationSubnetGroupCommand}.
 */
export interface CreateReplicationSubnetGroupCommandOutput
  extends CreateReplicationSubnetGroupResponse,
    __MetadataBearer {}

/**
 * <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p>
 *          <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the
 *           service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
 *          <p>If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action
 *          returns the following error message: The Replication Subnet Group already exists. In this case, delete
 *          the existing replication subnet group. To do so, use the <a href="https://docs.aws.amazon.com/en_us/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html">DeleteReplicationSubnetGroup</a> action. Optionally, choose Subnet groups in the DMS console,
 *          then choose your subnet group. Next, choose Delete from Actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateReplicationSubnetGroupMessage
 *   ReplicationSubnetGroupIdentifier: "STRING_VALUE", // required
 *   ReplicationSubnetGroupDescription: "STRING_VALUE", // required
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationSubnetGroupResponse
 * //   ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //     ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //     ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedNetworkTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateReplicationSubnetGroupCommandInput - {@link CreateReplicationSubnetGroupCommandInput}
 * @returns {@link CreateReplicationSubnetGroupCommandOutput}
 * @see {@link CreateReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided isn't valid.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Create replication subnet group
 * ```javascript
 * // Creates a replication subnet group given a list of the subnet IDs in a VPC.
 * const input = {
 *   "ReplicationSubnetGroupDescription": "US West subnet group",
 *   "ReplicationSubnetGroupIdentifier": "us-west-2ab-vpc-215ds366",
 *   "SubnetIds": [
 *     "subnet-e145356n",
 *     "subnet-58f79200"
 *   ],
 *   "Tags": [
 *     {
 *       "Key": "Acount",
 *       "Value": "145235"
 *     }
 *   ]
 * };
 * const command = new CreateReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationSubnetGroup": {}
 * }
 * *\/
 * // example id: create-replication-subnet-group-1481747297930
 * ```
 *
 */
export class CreateReplicationSubnetGroupCommand extends $Command
  .classBuilder<
    CreateReplicationSubnetGroupCommandInput,
    CreateReplicationSubnetGroupCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "CreateReplicationSubnetGroup", {})
  .n("DatabaseMigrationServiceClient", "CreateReplicationSubnetGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateReplicationSubnetGroupCommand)
  .de(de_CreateReplicationSubnetGroupCommand)
  .build() {}
