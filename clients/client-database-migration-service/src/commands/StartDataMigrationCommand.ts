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
import {
  StartDataMigrationMessage,
  StartDataMigrationResponse,
  StartDataMigrationResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_StartDataMigrationCommand, se_StartDataMigrationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts the specified data migration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartDataMigrationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartDataMigrationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link InvalidOperationFault} (client fault)
 *  <p>The action or operation requested isn't valid.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
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
 *
 * @public
 */
export class StartDataMigrationCommand extends $Command
  .classBuilder<
    StartDataMigrationCommandInput,
    StartDataMigrationCommandOutput,
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
  .s("AmazonDMSv20160101", "StartDataMigration", {})
  .n("DatabaseMigrationServiceClient", "StartDataMigrationCommand")
  .f(void 0, StartDataMigrationResponseFilterSensitiveLog)
  .ser(se_StartDataMigrationCommand)
  .de(de_StartDataMigrationCommand)
  .build() {
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
