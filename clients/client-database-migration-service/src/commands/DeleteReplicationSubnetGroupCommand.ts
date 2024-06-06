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
import { DeleteReplicationSubnetGroupMessage, DeleteReplicationSubnetGroupResponse } from "../models/models_0";
import {
  de_DeleteReplicationSubnetGroupCommand,
  se_DeleteReplicationSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationSubnetGroupCommand}.
 */
export interface DeleteReplicationSubnetGroupCommandInput extends DeleteReplicationSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationSubnetGroupCommand}.
 */
export interface DeleteReplicationSubnetGroupCommandOutput
  extends DeleteReplicationSubnetGroupResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteReplicationSubnetGroupMessage
 *   ReplicationSubnetGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReplicationSubnetGroupCommandInput - {@link DeleteReplicationSubnetGroupCommandInput}
 * @returns {@link DeleteReplicationSubnetGroupCommandOutput}
 * @see {@link DeleteReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Delete Replication Subnet Group
 * ```javascript
 * // Deletes a replication subnet group.
 * const input = {
 *   "ReplicationSubnetGroupIdentifier": "us-west-2ab-vpc-215ds366"
 * };
 * const command = new DeleteReplicationSubnetGroupCommand(input);
 * await client.send(command);
 * // example id: delete-replication-subnet-group-1481752728597
 * ```
 *
 */
export class DeleteReplicationSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteReplicationSubnetGroupCommandInput,
    DeleteReplicationSubnetGroupCommandOutput,
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
  .s("AmazonDMSv20160101", "DeleteReplicationSubnetGroup", {})
  .n("DatabaseMigrationServiceClient", "DeleteReplicationSubnetGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReplicationSubnetGroupCommand)
  .de(de_DeleteReplicationSubnetGroupCommand)
  .build() {}
