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
import type { CreateDataMigrationMessage, CreateDataMigrationResponse } from "../models/models_0";
import { CreateDataMigration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataMigrationCommand}.
 */
export interface CreateDataMigrationCommandInput extends CreateDataMigrationMessage {}
/**
 * @public
 *
 * The output of {@link CreateDataMigrationCommand}.
 */
export interface CreateDataMigrationCommandOutput extends CreateDataMigrationResponse, __MetadataBearer {}

/**
 * <p>Creates a data migration using the provided settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateDataMigrationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateDataMigrationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateDataMigrationMessage
 *   DataMigrationName: "STRING_VALUE",
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   DataMigrationType: "full-load" || "cdc" || "full-load-and-cdc", // required
 *   ServiceAccessRoleArn: "STRING_VALUE", // required
 *   EnableCloudwatchLogs: true || false,
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   SelectionRules: "STRING_VALUE",
 * };
 * const command = new CreateDataMigrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataMigrationResponse
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
 * @param CreateDataMigrationCommandInput - {@link CreateDataMigrationCommandInput}
 * @returns {@link CreateDataMigrationCommandOutput}
 * @see {@link CreateDataMigrationCommandInput} for command's `input` shape.
 * @see {@link CreateDataMigrationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link InvalidOperationFault} (client fault)
 *  <p>The action or operation requested isn't valid.</p>
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
 *
 * @public
 */
export class CreateDataMigrationCommand extends $Command
  .classBuilder<
    CreateDataMigrationCommandInput,
    CreateDataMigrationCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CreateDataMigration", {})
  .n("DatabaseMigrationServiceClient", "CreateDataMigrationCommand")
  .sc(CreateDataMigration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataMigrationMessage;
      output: CreateDataMigrationResponse;
    };
    sdk: {
      input: CreateDataMigrationCommandInput;
      output: CreateDataMigrationCommandOutput;
    };
  };
}
