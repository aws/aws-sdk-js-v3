// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ReloadReplicationTablesMessage, ReloadReplicationTablesResponse } from "../models/models_1";
import { ReloadReplicationTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReloadReplicationTablesCommand}.
 */
export interface ReloadReplicationTablesCommandInput extends ReloadReplicationTablesMessage {}
/**
 * @public
 *
 * The output of {@link ReloadReplicationTablesCommand}.
 */
export interface ReloadReplicationTablesCommandOutput extends ReloadReplicationTablesResponse, __MetadataBearer {}

/**
 * <p>Reloads the target database table with the source data for a given DMS Serverless
 *          replication configuration.</p>
 *          <p>You can only use this operation with a task in the RUNNING state, otherwise the service
 *          will throw an <code>InvalidResourceStateFault</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ReloadReplicationTablesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ReloadReplicationTablesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ReloadReplicationTablesMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 *   TablesToReload: [ // TableListToReload // required
 *     { // TableToReload
 *       SchemaName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   ],
 *   ReloadOption: "data-reload" || "validate-only",
 * };
 * const command = new ReloadReplicationTablesCommand(input);
 * const response = await client.send(command);
 * // { // ReloadReplicationTablesResponse
 * //   ReplicationConfigArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReloadReplicationTablesCommandInput - {@link ReloadReplicationTablesCommandInput}
 * @returns {@link ReloadReplicationTablesCommandOutput}
 * @see {@link ReloadReplicationTablesCommandInput} for command's `input` shape.
 * @see {@link ReloadReplicationTablesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ReloadReplicationTablesCommand extends $Command
  .classBuilder<
    ReloadReplicationTablesCommandInput,
    ReloadReplicationTablesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "ReloadReplicationTables", {})
  .n("DatabaseMigrationServiceClient", "ReloadReplicationTablesCommand")
  .sc(ReloadReplicationTables$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReloadReplicationTablesMessage;
      output: ReloadReplicationTablesResponse;
    };
    sdk: {
      input: ReloadReplicationTablesCommandInput;
      output: ReloadReplicationTablesCommandOutput;
    };
  };
}
