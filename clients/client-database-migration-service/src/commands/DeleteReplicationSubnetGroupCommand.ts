// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReplicationSubnetGroupMessage, DeleteReplicationSubnetGroupResponse } from "../models/models_0";
import { DeleteReplicationSubnetGroup } from "../schemas/schemas_32_DeleteReplicationSubnetGroup";

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
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
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
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
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
 *
 * @example Delete Replication Subnet Group
 * ```javascript
 * // Deletes a replication subnet group.
 * const input = {
 *   ReplicationSubnetGroupIdentifier: "us-west-2ab-vpc-215ds366"
 * };
 * const command = new DeleteReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteReplicationSubnetGroupCommand extends $Command
  .classBuilder<
    DeleteReplicationSubnetGroupCommandInput,
    DeleteReplicationSubnetGroupCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DeleteReplicationSubnetGroup", {})
  .n("DatabaseMigrationServiceClient", "DeleteReplicationSubnetGroupCommand")
  .sc(DeleteReplicationSubnetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationSubnetGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteReplicationSubnetGroupCommandInput;
      output: DeleteReplicationSubnetGroupCommandOutput;
    };
  };
}
