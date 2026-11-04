// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDataMigrationMessage, StartDataMigrationResponse } from "../models/models_1";
import { StartDataMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDataMigrationCommand}.
 */
export interface StartDataMigrationCommandInput extends StartDataMigrationMessage {}
/**
 * @public
 *
 * The output of {@link StartDataMigrationCommand}.
 */
export interface StartDataMigrationCommandOutput extends StartDataMigrationResponse, __MetadataBearer {}

/**
 * Starts the specified data migration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartDataMigrationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartDataMigrationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartDataMigrationMessage
 *   DataMigrationIdentifier: "STRING_VALUE", // required
 *   StartType: "reload-target" || "resume-processing" || "start-replication", // required
 * };
 * const command = new StartDataMigrationCommand(input);
 * const response = await client.send(command);
 * // { // StartDataMigrationResponse
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
 * @param StartDataMigrationCommandInput - {@link StartDataMigrationCommandInput}
 * @returns {@link StartDataMigrationCommandOutput}
 * @see {@link StartDataMigrationCommandInput} for command's `input` shape.
 * @see {@link StartDataMigrationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *
 * A dependency threw an exception.
 *
 * @throws {@link InvalidOperationFault} (client fault)
 *
 * The action or operation requested isn't valid.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *
 * The quota for this resource quota has been exceeded.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class StartDataMigrationCommand extends command<StartDataMigrationCommandInput, StartDataMigrationCommandOutput>(
  _ep0,
  _mw0,
  "StartDataMigration",
  StartDataMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataMigrationMessage;
      output: StartDataMigrationResponse;
    };
    sdk: {
      input: StartDataMigrationCommandInput;
      output: StartDataMigrationCommandOutput;
    };
  };
}
