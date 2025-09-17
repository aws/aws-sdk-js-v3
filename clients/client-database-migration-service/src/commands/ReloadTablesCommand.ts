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
import { ReloadTablesMessage, ReloadTablesResponse } from "../models/models_1";
import { de_ReloadTablesCommand, se_ReloadTablesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReloadTablesCommand}.
 */
export interface ReloadTablesCommandInput extends ReloadTablesMessage {}
/**
 * @public
 *
 * The output of {@link ReloadTablesCommand}.
 */
export interface ReloadTablesCommandOutput extends ReloadTablesResponse, __MetadataBearer {}

/**
 * <p>Reloads the target database table with the source data. </p>
 *          <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise
 *          the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ReloadTablesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ReloadTablesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ReloadTablesMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 *   TablesToReload: [ // TableListToReload // required
 *     { // TableToReload
 *       SchemaName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   ],
 *   ReloadOption: "data-reload" || "validate-only",
 * };
 * const command = new ReloadTablesCommand(input);
 * const response = await client.send(command);
 * // { // ReloadTablesResponse
 * //   ReplicationTaskArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReloadTablesCommandInput - {@link ReloadTablesCommandInput}
 * @returns {@link ReloadTablesCommandOutput}
 * @see {@link ReloadTablesCommandInput} for command's `input` shape.
 * @see {@link ReloadTablesCommandOutput} for command's `response` shape.
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
export class ReloadTablesCommand extends $Command
  .classBuilder<
    ReloadTablesCommandInput,
    ReloadTablesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "ReloadTables", {})
  .n("DatabaseMigrationServiceClient", "ReloadTablesCommand")
  .f(void 0, void 0)
  .ser(se_ReloadTablesCommand)
  .de(de_ReloadTablesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReloadTablesMessage;
      output: ReloadTablesResponse;
    };
    sdk: {
      input: ReloadTablesCommandInput;
      output: ReloadTablesCommandOutput;
    };
  };
}
