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
import { ModifyDataMigrationMessage, ModifyDataMigrationResponse } from "../models/models_0";
import { ModifyDataMigration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDataMigrationCommand}.
 */
export interface ModifyDataMigrationCommandInput extends ModifyDataMigrationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDataMigrationCommand}.
 */
export interface ModifyDataMigrationCommandOutput extends ModifyDataMigrationResponse, __MetadataBearer {}

/**
 * <p>Modifies an existing DMS data migration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyDataMigrationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyDataMigrationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyDataMigrationMessage
 *   DataMigrationIdentifier: "STRING_VALUE", // required
 *   DataMigrationName: "STRING_VALUE",
 *   EnableCloudwatchLogs: true || false,
 *   ServiceAccessRoleArn: "STRING_VALUE",
 *   DataMigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 *   SourceDataSettings: [ // SourceDataSettings
 *     { // SourceDataSetting
 *       CDCStartPosition: "STRING_VALUE",
 *       CDCStartTime: new Date("TIMESTAMP"),
 *       CDCStopTime: new Date("TIMESTAMP"),
 *       SlotName: "STRING_VALUE",
 *     },
 *   ],
 *   TargetDataSettings: [ // TargetDataSettings
 *     { // TargetDataSetting
 *       TablePreparationMode: "do-nothing" || "truncate" || "drop-tables-on-target",
 *     },
 *   ],
 *   NumberOfJobs: Number("int"),
 *   SelectionRules: "STRING_VALUE",
 * };
 * const command = new ModifyDataMigrationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDataMigrationResponse
 * //   DataMigration: { // DataMigration
 * //     DataMigrationName: "STRING_VALUE",
 * //     DataMigrationArn: "STRING_VALUE",
 * //     DataMigrationCreateTime: new Date("TIMESTAMP"),
 * //     DataMigrationStartTime: new Date("TIMESTAMP"),
 * //     DataMigrationEndTime: new Date("TIMESTAMP"),
 * //     ServiceAccessRoleArn: "STRING_VALUE",
 * //     MigrationProjectArn: "STRING_VALUE",
 * //     DataMigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     DataMigrationSettings: { // DataMigrationSettings
 * //       NumberOfJobs: Number("int"),
 * //       CloudwatchLogsEnabled: true || false,
 * //       SelectionRules: "STRING_VALUE",
 * //     },
 * //     SourceDataSettings: [ // SourceDataSettings
 * //       { // SourceDataSetting
 * //         CDCStartPosition: "STRING_VALUE",
 * //         CDCStartTime: new Date("TIMESTAMP"),
 * //         CDCStopTime: new Date("TIMESTAMP"),
 * //         SlotName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TargetDataSettings: [ // TargetDataSettings
 * //       { // TargetDataSetting
 * //         TablePreparationMode: "do-nothing" || "truncate" || "drop-tables-on-target",
 * //       },
 * //     ],
 * //     DataMigrationStatistics: { // DataMigrationStatistics
 * //       TablesLoaded: Number("int"),
 * //       ElapsedTimeMillis: Number("long"),
 * //       TablesLoading: Number("int"),
 * //       FullLoadPercentage: Number("int"),
 * //       CDCLatency: Number("int"),
 * //       TablesQueued: Number("int"),
 * //       TablesErrored: Number("int"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       StopTime: new Date("TIMESTAMP"),
 * //     },
 * //     DataMigrationStatus: "STRING_VALUE",
 * //     PublicIpAddresses: [ // PublicIpAddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     DataMigrationCidrBlocks: [ // DataMigrationCidrBlock
 * //       "STRING_VALUE",
 * //     ],
 * //     LastFailureMessage: "STRING_VALUE",
 * //     StopReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDataMigrationCommandInput - {@link ModifyDataMigrationCommandInput}
 * @returns {@link ModifyDataMigrationCommandOutput}
 * @see {@link ModifyDataMigrationCommandInput} for command's `input` shape.
 * @see {@link ModifyDataMigrationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
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
export class ModifyDataMigrationCommand extends $Command
  .classBuilder<
    ModifyDataMigrationCommandInput,
    ModifyDataMigrationCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "ModifyDataMigration", {})
  .n("DatabaseMigrationServiceClient", "ModifyDataMigrationCommand")
  .sc(ModifyDataMigration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDataMigrationMessage;
      output: ModifyDataMigrationResponse;
    };
    sdk: {
      input: ModifyDataMigrationCommandInput;
      output: ModifyDataMigrationCommandOutput;
    };
  };
}
